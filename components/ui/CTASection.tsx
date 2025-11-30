import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  headline: string;
  subline: string;
  ctaText: string;
  ctaLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ headline, subline, ctaText, ctaLink }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-[#2D2D2D] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B9E8B]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            {headline}
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light mb-10 leading-relaxed">
            {subline}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#2D2D2D] text-base font-medium rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 group"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;