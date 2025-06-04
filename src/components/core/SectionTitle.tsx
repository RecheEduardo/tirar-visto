import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = 'mb-12',
  titleClassName = 'text-3xl md:text-5xl font-bold text-brand-dark',
  subtitleClassName = 'mt-4 text-lg text-brand-muted max-w-2xl',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignClass[alignment]} ${className}`}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={`${subtitleClassName} ${alignment === 'center'? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;