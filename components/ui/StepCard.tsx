import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-50 opacity-50 -z-10 leading-none select-none">
        {number}
      </div>
      <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#8B9E8B] shadow-sm mb-6 z-10">
        {Icon ? <Icon size={32} strokeWidth={1.5} /> : <span className="text-2xl font-bold">{number}</span>}
      </div>
      <h3 className="text-xl font-medium text-[#2D2D2D] mb-4">{title}</h3>
      <p className="text-[#5A5A5A] max-w-sm mx-auto font-light leading-relaxed">{description}</p>
    </div>
  );
};

export default StepCard;