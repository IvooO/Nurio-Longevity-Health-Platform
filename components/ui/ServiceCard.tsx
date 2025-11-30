import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, link, color }) => {
  return (
    <Link 
      to={link} 
      className="group block bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1"
    >
      <div 
        className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-colors"
        style={{ backgroundColor: `${color}15`, color: color }}
      >
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">
        {title}
      </h3>
      <p className="text-[#5A5A5A] leading-relaxed mb-8 font-light text-sm">
        {description}
      </p>
      <div className="flex items-center text-sm font-medium transition-colors" style={{ color: color }}>
        Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default ServiceCard;