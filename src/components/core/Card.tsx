import React from 'react';
import Button from './Button';

interface CardProps {
  imageUrl?: string;
  title: string;
  description?: string;
  price?: string;
  actionText?: string;
  onActionClick?: () => void;
  className?: string;
  children?: React.ReactNode; // Para conteúdo mais complexo
  imageClassName?: string;
  contentClassName?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  actionText,
  onActionClick,
  className = '',
  children,
  imageClassName = 'h-48 w-full object-cover',
  contentClassName = 'p-6',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${className}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className={imageClassName}
        />
      )}
      <div className={`${contentClassName} flex-grow flex flex-col`}>
        <h3 className="text-xl font-semibold text-brand-dark mb-2">{title}</h3>
        {description && <p className="text-brand-muted text-sm mb-4 flex-grow">{description}</p>}
        {children}
        {price && <p className="text-2xl font-bold text-brand-secondary mb-4">{price}</p>}
        {actionText && onActionClick && (
          <Button onClick={onActionClick} variant="secondary" size="sm" className="mt-auto">
            {actionText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;