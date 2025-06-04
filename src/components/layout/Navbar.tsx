import React, { useState, useEffect } from 'react';
import Button from '../core/Button';
import type { NavItem } from '../../types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoImage from '../../assets/logo.png';
import { motion } from 'framer-motion';

const navItems: NavItem[] = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#consultoria" },
  { label: "Destinos", href: "#destinos" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Contato", href: "#contato" },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY < 50) {
      setShowNavbar(true);
    } else if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navbarVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -70 }, 
  };

  const navContentVariants = {
    initial: { opacity: 0, y: -40 },
    animate: {
      opacity: showNavbar ? 1 : 0,
      y: showNavbar ? 0 : -40,
    },
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20, 
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 }, 
    show: { opacity: 1, y: 0, scale: 1 },
    transition: {
        opacity: { duration: 0.4 }, 
        y: { type: "spring", stiffness: 250, damping: 25 },
        scale: { type: "spring", stiffness: 250, damping: 25 },
      },
  };

  return (
    <motion.nav
      className="bg-white shadow-md sticky top-0 z-50"
      variants={navbarVariants}
      animate={showNavbar ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }} 
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={navContentVariants}
        initial="initial"
        animate="animate"
        transition={navContentVariants.transition}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#hero">
              <img className="h-10 w-auto" src={LogoImage} alt="Agência de Vistos" />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center space-x-6"
            variants={listVariants}
            initial="hidden"
            animate="show"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-brand-muted hover:text-brand-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
                variants={itemVariants}
                transition={itemVariants.transition}
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              variants={itemVariants}
              transition={itemVariants.transition} 
            >
              <Button href="#" variant="secondary" size="md" variants={itemVariants} transition={itemVariants.transition} >
                Tirar meu visto agora!
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="sm"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-white shadow-lg absolute top-20 left-0 right-0 z-40 overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-brand-muted hover:text-brand-primary hover:bg-brand-primary/10 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.2, delay: navItems.indexOf(item) * 0.05 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.div
            className="px-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
            transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
          >
            <Button href="#" variant="secondary" size="md" fullWidth>
              Tirar meu visto agora!
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;