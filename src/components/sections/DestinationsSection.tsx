import React from 'react';
import SectionTitle from '../core/SectionTitle';
import Card from '../core/Card';
import type { DestinationCardItem } from '../../types';
import { motion } from 'framer-motion';


const featuredDestinationImage = 'https://blog.pingouin.com.br/wp-content/uploads/2023/06/mala-de-viagem-768x1024.jpg';

const destinationsData: DestinationCardItem[] = [
  { id: '1', imageUrl: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg', name: 'Nova Iorque • Estados Unidos' },
  { id: '2', imageUrl: 'https://eusouclick.clickintercambios.com.br/wp-content/uploads/2020/10/Untitled-design-6.jpg', name: 'Toronto • Canadá' },
  { id: '3', imageUrl: 'https://passagenspromo.com.br/blog/wp-content/uploads/2023/11/Design-sem-nome-2023-11-27T212503.248.jpg', name: 'Sydney • Austrália' },
  { id: '4', imageUrl: 'https://s3.amazonaws.com/cdn.micato.com/wp-content/uploads/2018/09/07224540/Mumbai-1110x700.jpg', name: 'Mumbai • India' },
  { id: '5', imageUrl: 'https://media.staticontent.com/media/pictures/11a27e14-a579-4155-9c0b-5089e3bbb01a', name: 'Santorini • Grécia' },
  { id: '6', imageUrl: 'https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/', name: 'Paris • França' },
];

const DestinationsSection: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.35,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const featuredContentParentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  
  const textContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    }
  }

  const fadeInUpItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 12,
        duration: 0.5
      },
    },
  };


  return (
    <motion.section
      className="py-16 bg-brand-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Destinos mais Procurados" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <motion.div key={dest.id} variants={cardVariants}>
              <Card
                imageUrl={dest.imageUrl}
                title={dest.name}
                imageClassName="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                className="group h-full"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 md:mb-8 flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-25 bg-white p-10 sm:p-8 rounded-xl shadow-lg overflow-hidden"
          variants={featuredContentParentVariants}
        >
          <motion.div
            className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0 mb-6 md:mb-0"
            variants={fadeInUpItem}
          >
            <img
              src={featuredDestinationImage}
              alt="Destino em Destaque"
              className="rounded-lg shadow-md object-cover w-full h-64 md:h-80 lg:h-96"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left"
            variants={textContainerVariants}
          >
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4 md:mb-6"
              variants={fadeInUpItem}
            >
              A Aventura dos Seus Sonhos Espera por Você!
            </motion.h3>
            <motion.p
              className="text-brand-muted text-base md:text-lg leading-relaxed"
              variants={fadeInUpItem} 
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DestinationsSection;