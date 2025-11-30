import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import StepCard from '../components/ui/StepCard';
import CTASection from '../components/ui/CTASection';

const HowItWorks: React.FC = () => {
  return (
    <div>
       <HeroSection 
        headline="Your Path to Better Health" 
        subline="We've simplified the journey to optimal wellness into a seamless, supportive experience." 
        ctaText="Get Started" 
        ctaLink="/assessment"
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           <StepCard 
            number={1} 
            title="Assessment" 
            description="Complete a comprehensive digital health assessment to help us understand your baseline." 
          />
           <StepCard 
            number={2} 
            title="Testing" 
            description="We send you a lab kit or direct you to a local partner for essential biomarker testing." 
          />
           <StepCard 
            number={3} 
            title="Consultation" 
            description="Review your results with a board-certified clinician via a secure video call." 
          />
           <StepCard 
            number={4} 
            title="Action Plan" 
            description="Receive your personalized treatment plan, including nutrition, prescriptions, and lifestyle guides." 
          />
        </div>
        <CTASection 
          headline="Don't Wait to Feel Great" 
          subline="The first step is often the hardest. We make it easy." 
          ctaText="Begin Now" 
          ctaLink="/assessment" 
        />
      </div>
    </div>
  );
};

export default HowItWorks;