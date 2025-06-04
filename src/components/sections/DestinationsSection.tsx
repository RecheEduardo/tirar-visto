import React from 'react';
import SectionTitle from '../core/SectionTitle';
import Card from '../core/Card';
import type { DestinationCardItem } from '../../types';

// Placeholders - substitua por suas imagens reais em src/assets/
const destinationsData: DestinationCardItem[] = [
  { id: '1', 
    imageUrl: 'https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg', 
    name: 'Nova Iorque • Estados Unidos' 
  },
  { id: '2', 
    imageUrl: 'https://eusouclick.clickintercambios.com.br/wp-content/uploads/2020/10/Untitled-design-6.jpg', 
    name: 'Toronto • Canadá' 
  },
  { id: '3', 
    imageUrl: 'https://passagenspromo.com.br/blog/wp-content/uploads/2023/11/Design-sem-nome-2023-11-27T212503.248.jpg', 
    name: 'Sydney • Austrália' 
  },
  { id: '4', 
    imageUrl: 'https://s3.amazonaws.com/cdn.micato.com/wp-content/uploads/2018/09/07224540/Mumbai-1110x700.jpg', 
    name: 'Mumbai • India' 
  },
  { id: '5', 
    imageUrl: 'https://media.staticontent.com/media/pictures/11a27e14-a579-4155-9c0b-5089e3bbb01a', 
    name: 'Santorini • Grécia' 
  },
  { id: '6', 
    imageUrl: 'https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/', 
    name: 'Paris • França' 
  },
];

const DestinationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Destinos mais Procurados" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <Card
              key={dest.id}
              imageUrl={dest.imageUrl}
              title={dest.name}
              imageClassName="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              className="group"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;