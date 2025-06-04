import React, { useState } from 'react';
import Button from '../core/Button';
import type { NavItem } from '../../types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoImage from '../../assets/logo.png';

const navItems: NavItem[] = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#consultoria" },
  { label: "Destinos", href: "#destinos" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Contato", href: "#contato" },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-10 w-auto" src={LogoImage} alt="Agência de Vistos" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-muted hover:text-brand-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button href="#" variant="secondary" size="md">
              Tirar meu visto agora!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="sm"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 right-0 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-muted hover:text-brand-primary hover:bg-brand-primary/10 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 pt-2">
                <Button href="#" variant="secondary" size="md" fullWidth>
                    Tirar meu visto agora!
                </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;