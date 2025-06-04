import React, { useState } from 'react';
import SectionTitle from '../core/SectionTitle';
import InputField from '../core/InputField';
import Button from '../core/Button';
import { motion } from 'framer-motion';

const FaqCtaSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Por favor, insira seu email.');
      return;
    }
    alert(`Obrigado por se inscrever: ${email}`);
    setEmail('');
  };

  const sectionVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 3,
      },
    },
  };

  const leftColVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const rightColVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.5 } },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={leftColVariants}>
            <SectionTitle
              title="E ai! Restou alguma dúvida?"
              subtitle="Entre em contato conosco ou assine nossa newsletter para receber as últimas novidades e dicas sobre vistos e viagens."
              alignment="left"
              titleClassName="text-3xl font-bold text-brand-dark"
              subtitleClassName="mt-3 text-md text-brand-muted"
              className="mb-0"
            />
            <Button href="#" variant="primary" size="md" className="mt-8">
              Fale Conosco
            </Button>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl"
            variants={rightColVariants}
          >
            <h3 className="text-xl font-semibold text-brand-dark mb-1">Receba novidades</h3>
            <p className="text-sm text-brand-muted mb-6">Fique por dentro das últimas notícias e ofertas.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <InputField
                type="email"
                name="newsletter_email"
                placeholder="Coloque seu melhor email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="secondary" fullWidth>
                Inscrever-se
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FaqCtaSection;