import React from 'react';
import Button from '../core/Button';
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-700 text-white py-20 md:py-32 min-h-[70vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Tire seu Visto conosco e não tenha nenhuma <span className="text-brand-primary">surpresa negativa!</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Oferecemos consultoria completa para você realizar o sonho de viajar, estudar ou trabalhar no exterior sem dores de cabeça.
        </p>
        <Button href="#" variant="primary" size="lg">
          Realize o seu sonho de Tirar Visto!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;