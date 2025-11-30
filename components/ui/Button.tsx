import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-[#1A1A1A] text-white hover:bg-[#333] shadow-md hover:shadow-lg",
      outline: "border-2 border-[#1A1A1A]/20 bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]",
      ghost: "bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
    };

    const sizes = {
      default: "h-12 px-6 rounded-full text-[15px]",
      sm: "h-9 px-4 rounded-full text-xs",
      lg: "h-14 px-10 rounded-full text-lg"
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';