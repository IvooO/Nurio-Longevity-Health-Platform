import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  ctaText?: string;
  ctaLink?: string;
  highlighted?: boolean;
  badge?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  period = "/month",
  description,
  features,
  ctaText = "Get Started",
  ctaLink = "/assessment",
  highlighted = false,
  badge
}) => {
  return (
    <div className={`relative rounded-[2.5rem] p-10 h-full flex flex-col transition-all duration-300 ${
      highlighted 
        ? 'bg-[#1A1A1A] text-white shadow-2xl scale-105 z-10 ring-1 ring-white/10' 
        : 'bg-white border border-[#E5E0D6] shadow-sm hover:shadow-lg hover:-translate-y-1 text-[#1A1A1A]'
    }`}>
      {badge && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm ${
            highlighted 
              ? 'bg-[#C9A86C] text-[#1A1A1A]' 
              : 'bg-[#1A1A1A] text-white'
          }`}>
            {badge}
          </span>
        </div>
      )}
      
      <div className="mb-8 text-center border-b border-gray-100/10 pb-8">
        <h3 className={`text-2xl font-serif mb-4 ${highlighted ? 'text-white' : 'text-[#1A1A1A]'}`}>
          {title}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-3">
          <span className="text-5xl font-serif tracking-tight">{price}</span>
          <span className={`text-sm font-medium ${highlighted ? 'text-gray-400' : 'text-gray-500'}`}>{period}</span>
        </div>
        {description && (
          <p className={`text-sm leading-relaxed ${highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
      </div>
      
      <ul className="space-y-4 flex-grow mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-[15px]">
            <div className={`mt-1 rounded-full p-0.5 flex-shrink-0 ${
              highlighted ? 'bg-[#C9A86C]' : 'bg-[#E5E0D6]'
            }`}>
              <Check size={12} className={highlighted ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]'} strokeWidth={3} />
            </div>
            <span className={highlighted ? 'text-gray-200' : 'text-gray-600'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Link to={ctaLink} className="w-full block mt-auto">
        <Button 
          className={`w-full h-14 text-base font-semibold ${
            highlighted 
              ? 'bg-white text-[#1A1A1A] hover:bg-gray-100' 
              : 'bg-[#1A1A1A] text-white hover:bg-[#333]'
          }`}
        >
          {ctaText}
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;