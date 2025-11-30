import React, { createContext, useContext } from 'react';

const RadioGroupContext = createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
} | undefined>(undefined);

export const RadioGroup = ({ value, onValueChange, className, children }: any) => {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={className} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export const RadioGroupItem = React.forwardRef<HTMLInputElement, any>(
  ({ className, value, ...props }, ref) => {
    const context = useContext(RadioGroupContext);
    const checked = context?.value === value;
    
    return (
      <div className="relative flex items-center justify-center">
         <input
          type="radio"
          className={`peer h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none border-gray-300 bg-white checked:border-[#1A1A1A] ${className}`}
          ref={ref}
          value={value}
          checked={checked}
          onChange={() => context?.onValueChange?.(value)}
          {...props}
        />
        <div className="absolute h-2.5 w-2.5 rounded-full bg-[#1A1A1A] opacity-0 peer-checked:opacity-100 pointer-events-none" />
      </div>
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"