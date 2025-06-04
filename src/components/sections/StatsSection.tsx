import React from 'react';
import type { StatItem } from '../../types';
import SectionTitle from '../core/SectionTitle';
import { motion } from 'framer-motion';

const statsData: StatItem[] = [
  { value: "+1.200", label: "Vistos Aprovados" },
  { value: "98%", label: "Taxa de Sucesso" },
  { value: "10+", label: "Anos de Experiência" },
];

const StatsSection: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .75,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 450,
        damping: 30,
      },
    },
  };

  return (
    <motion.section
      className="py-16 bg-brand-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Nossos Números" subtitle="Resultados que falam por si, veja abaixo:" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              className="p-6"
              variants={statItemVariants}
            >
              <p className="text-5xl font-bold text-brand-primary mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;