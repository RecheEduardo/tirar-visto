import React from 'react';
import SectionTitle from '../core/SectionTitle';
import Card from '../core/Card';
import type { PackageCardItem } from '../../types';
import { motion } from 'framer-motion';

const packagesData: PackageCardItem[] = [
  { id: '1', imageUrl: 'https://www.moneytimes.com.br/uploads/2025/03/estados-unidos-eua-cpi-inflacao.jpg', title: 'Visto de Turismo EUA', price: 'R$ 990,00', details: ["Consultoria inicial", "Preenchimento de formulário", "Agendamento"]},
  { id: '2', imageUrl: 'https://etacanadavisa.com.br/wp-content/uploads/2018/02/1517857737_image1.jpeg', title: 'Visto de Estudante Canadá', price: 'R$ 1.290,00', details: ["Análise de perfil", "Suporte para documentação", "Revisão completa"]},
  { id: '3', imageUrl: 'https://australiabrasil.com.br/wp-content/uploads/sites/2/2021/06/sydney-1-2.jpg', title: 'Visto de Trabalho Austrália', price: 'R$ 1.890,00', details: ["Elegibilidade", "Aplicação do visto", "Suporte pós-aprovação"]},
  { id: '4', imageUrl: 'https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2023/05/visto-de-estudante-para-espanha-1.jpg?fit=750%2C500&ssl=1', title: 'Visto de Estudante Espanha', price: 'R$ 1.150,00', details: ["Tradução juramentada", "Suporte para matrícula", "Checklist de documentos"]},
  { id: '5', imageUrl: 'https://agenciaamapa.com.br/midias/2024/grandes/up_ag_24924_55ddb4ef-2d37-c9c8-ebb9-585771d1d04f.jpg', title: 'Visto de Turismo França', price: 'R$ 1.020,00', details: ["Preenchimento de formulário", "Agendamento no consulado", "Suporte na entrevista"]},
  { id: '6', imageUrl: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2025/02/05124946/Japao-tudo-o-que-voce-precisa-saber-para-visitar-o-destino-do-momento-2.jpg', title: 'Visto de Trabalho Japão', price: 'R$ 2.300,00', details: ["Revisão de elegibilidade", "Suporte documental completo", "Acompanhamento no processo"]},
];

const PackagesSection: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Nossos Pacotes" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <motion.div key={pkg.id} variants={cardVariants} className="h-full"> 
              <Card
                imageUrl={pkg.imageUrl}
                title={pkg.title}
                price={pkg.price}
                actionText="Saiba mais"
                onActionClick={() => alert(`Detalhes sobre ${pkg.title}`)}
                imageClassName="h-52 w-full object-cover"
                className="flex flex-col h-full"
              >
                <ul className="text-sm text-brand-muted space-y-1 mb-4 list-disc list-inside flex-grow">
                  {pkg.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PackagesSection;