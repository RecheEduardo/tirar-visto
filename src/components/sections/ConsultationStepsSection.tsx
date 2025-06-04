import React from 'react';
import SectionTitle from '../core/SectionTitle';
import type { StepItem } from '../../types';
import { CheckCircleIcon, ArrowRightCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline'; // Exemplo de ícones

const stepsData: StepItem[] = [
  { id: 1, title: "Análise Inicial Detalhada", icon: DocumentTextIcon },
  { id: 2, title: "Preparo e Revisão de Documentos", icon: CheckCircleIcon },
  { id: 3, title: "Aplicação e Acompanhamento Contínuo", icon: ArrowRightCircleIcon },
];

const ConsultationStepsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="CONSULTORIA COMPLETA PARA TIRAR SEU VISTO"
          subtitle="VOCÊ ESTÁ EM BOAS MÃOS!"
          alignment="left"
          titleClassName="text-2xl md:text-3xl font-bold text-brand-dark"
          subtitleClassName="mt-2 text-lg text-brand-primary font-semibold"
          className="mb-10 md:mb-16"
        />

        <div className="relative">
          {/* Linha conectora de fundo (para desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2" style={{top: '24px'}}></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
            {stepsData.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-brand-primary rounded-full text-white mb-4">
                  {step.icon? (
                    <step.icon className="w-6 h-6" />
                  ) : (
                    <span className="font-bold">{step.id}</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-brand-muted text-sm">
                  Detalhes sobre a {step.title.toLowerCase()} e como podemos ajudar.
                </p>
                {/* Linha conectora para mobile (abaixo de cada item, exceto o último) */}
                {index < stepsData.length - 1 && (
                    <div className="md:hidden w-0.5 h-12 bg-gray-200 mt-4 mx-auto"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationStepsSection;