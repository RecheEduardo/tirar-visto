import React from 'react';
import type { StatItem } from '../../types';
import SectionTitle from '../core/SectionTitle';

const statsData: StatItem[] = [
  { value: "+1.200", label: "Vistos Aprovados" },
  { value: "98%", label: "Taxa de Sucesso" },
  { value: "10+", label: "Anos de Experiência" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Nossos Números" subtitle="Resultados que falam por si, veja abaixo:" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat) => (
            <div key={stat.label} className="p-6">
              <p className="text-5xl font-bold text-brand-primary mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-brand-muted uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;