import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface HeroSectionProps {
  headline: string;
  subline: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  backgroundClass?: string;
  image?: string;
  badge?: string;
  pricing?: { from: string; period: string };
}

export default function HeroSection({ 
  headline, 
  subline, 
  ctaText = "Start Your Program", 
  ctaLink = "/assessment",
  secondaryCta,
  secondaryCtaLink,
  backgroundClass = "bg-gradient-to-br from-[#FAF9F7] to-[#F0F4F0]",
  image,
  badge,
  pricing
}: HeroSectionProps) {

  const getPath = (path?: string) => {
    if (!path) return '/';
    return path.startsWith('/') ? path : `/${path.toLowerCase()}`;
  };

  return (
    <section className={`${backgroundClass} min-h-[85vh] flex items-center`}>
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {badge && (
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#8B9E8B]/10 text-[#6B7E6B] text-sm font-medium">
                {badge}
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2D2D2D] leading-[1.1] tracking-tight">
              {headline}
            </h1>
            
            <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-xl font-light">
              {subline}
            </p>

            {pricing && (
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-medium text-[#2D2D2D]">{pricing.from}</span>
                <span className="text-[#5A5A5A]">{pricing.period}</span>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={getPath(ctaLink)}>
                <Button 
                  size="lg" 
                  className="bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white px-8 py-6 text-base rounded-full group transition-all duration-300"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              {secondaryCta && (
                <Link to={getPath(secondaryCtaLink)}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#2D2D2D]/20 text-[#2D2D2D] px-8 py-6 text-base rounded-full hover:bg-[#2D2D2D]/5"
                  >
                    {secondaryCta}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          
          {image && (
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-[#8B9E8B]/10 rounded-[3rem] blur-3xl" />
              <img 
                src={image} 
                alt="Health and wellness" 
                className="relative rounded-[2rem] w-full h-[500px] object-cover shadow-2xl shadow-[#8B9E8B]/20"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}