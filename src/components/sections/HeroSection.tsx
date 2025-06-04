import React from 'react';
import Button from '../core/Button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.section
      className="relative bg-gray-700 text-white py-20 md:py-32 min-h-[70vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          variants={itemVariants}
        >
          Tire seu Visto conosco e não tenha nenhuma <span className="text-brand-primary">surpresa negativa!</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Oferecemos consultoria completa para você realizar o sonho de viajar, estudar ou trabalhar no exterior sem dores de cabeça.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button href="#" variant="primary" size="lg">
            Realize o seu sonho de Tirar Visto!
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;