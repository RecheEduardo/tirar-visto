import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  iconLeft,
  iconRight,
  fullWidth = false,
 ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ease-in-out inline-flex items-center justify-center';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primaryHover focus:ring-brand-primary',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondaryHover focus:ring-brand-secondary',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary',
    ghost: 'text-brand-primary hover:bg-brand-primary/10 focus:ring-brand-primary',
  };

  const widthStyle = fullWidth? 'w-full' : '';

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;