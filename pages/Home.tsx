import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Scale, 
  TestTube, 
  Salad, 
  HeartPulse,
  Check
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import SiteFooter from '../components/ui/SiteFooter';

export default function Home() {
  const categories = [
    {
      icon: Scale,
      title: "Lose",
      highlight: "weight",
      description: "GLP-1 treatments",
      link: "/weight-loss",
      color: "#C9A86C",
      bgColor: "#FDF8F0"
    },
    {
      icon: TestTube,
      title: "Test",
      highlight: "what matters",
      description: "At-home lab kits",
      link: "/lab-testing",
      color: "#7BA3A8",
      bgColor: "#F0F6F6"
    },
    {
      icon: Salad,
      title: "Eat",
      highlight: "smarter",
      description: "Personalized nutrition",
      link: "/nutrition",
      color: "#8B9E8B",
      bgColor: "#F4F7F4"
    },
    {
      icon: HeartPulse,
      title: "Live",
      highlight: "longer",
      description: "Longevity coaching",
      link: "/longevity",
      color: "#A08BA0",
      bgColor: "#F7F4F7"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Tell us about yourself",
      description: "Complete a quick online consultation about your health goals and medical history."
    },
    {
      step: "02",
      title: "Get your personalized plan",
      description: "A licensed physician reviews your information and creates your treatment plan."
    },
    {
      step: "03",
      title: "Receive ongoing care",
      description: "Your treatment ships to your door with continuous support from your care team."
    }
  ];

  return (
    <div className="bg-[#F9F8F6]">
      {/* Hero Section */}
      <section className="px-6 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] leading-[0.95] tracking-tight mb-8">
              Health care,<br />
              <span className="text-[#C9A86C] italic">personalized</span> to you.
            </h1>
            <p className="text-xl md:text-2xl text-[#5A5A5A] mb-10 max-w-xl font-light leading-relaxed">
              Science-backed treatments for weight loss, longevity, and metabolic health—delivered to your door.
            </p>
            <Link to="/assessment">
              <Button className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full px-10 h-14 text-lg font-medium transition-transform hover:scale-105">
                Take the assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} to={category.link}>
                  <div 
                    className="rounded-3xl p-8 h-full min-h-[280px] flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                    style={{ backgroundColor: category.bgColor }}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <h3 className="text-2xl font-serif text-[#1A1A1A]">
                        {category.title} <span className="block italic" style={{ color: category.color }}>{category.highlight}</span>
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-white transition-colors">
                        <ChevronRight className="h-5 w-5 text-[#1A1A1A]" />
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between mt-4 relative z-10">
                      <span className="text-sm font-medium text-[#1A1A1A]/70 uppercase tracking-wide">{category.description}</span>
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <Icon className="h-8 w-8" style={{ color: category.color }} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section className="px-6 py-24 bg-[#1A3C34] rounded-[3rem] mx-4 mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm text-[#8B9E8B] font-bold tracking-widest uppercase mb-6 block">labs by Nurio</span>
              <h2 className="text-5xl md:text-6xl font-serif text-white leading-[1.1] mb-8">
                Get your labs.<br />
                <span className="italic opacity-80">Go for your optimal.</span>
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-md font-light">
                Comprehensive biomarker testing to understand your metabolic health, track progress, and optimize your treatments.
              </p>
              <Link to="/lab-testing">
                <Button className="bg-white hover:bg-[#F2F2F2] text-[#1A3C34] rounded-full px-10 h-14 text-lg font-semibold">
                  Explore lab testing
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34] to-transparent opacity-20 z-10 rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&q=80" 
                alt="Lab testing" 
                className="rounded-3xl w-full h-[500px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-12 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-4">
              How Nurio works
            </h2>
            <p className="text-xl text-[#6B6B6B] font-light">Healthcare that fits your life</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl font-serif text-[#C9A86C]/30 mb-6 group-hover:text-[#C9A86C] transition-colors duration-500">{item.step}</div>
                <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed px-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] leading-[1.1] mb-10">
                Real doctors.<br />
                <span className="italic text-[#8B9E8B]">Real results.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Licensed EU physicians review every case",
                  "Personalized treatment plans, not one-size-fits-all",
                  "Ongoing monitoring and support included",
                  "Lab testing to track your progress",
                  "Cancel or pause anytime"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#E5EAE5] flex items-center justify-center group-hover:bg-[#8B9E8B] transition-colors">
                      <Check className="h-4 w-4 text-[#1A1A1A] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg text-[#1A1A1A] font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" 
                alt="Medical care" 
                className="rounded-[2.5rem] w-full h-[600px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weight Loss Feature */}
      <section className="px-6 py-24 bg-[#FDF8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-[#C9A86C]/10 rounded-[3rem] blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" 
                alt="Weight loss" 
                className="relative rounded-[2.5rem] w-full h-[550px] object-cover shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm text-[#C9A86C] font-bold tracking-widest uppercase mb-6 block">GLP-1 Weight Loss</span>
              <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] leading-[1.1] mb-8">
                Lose weight with science on your side
              </h2>
              <p className="text-xl text-[#6B6B6B] mb-8 leading-relaxed font-light">
                Medically-supervised GLP-1 treatments help regulate appetite and support sustainable weight management. Combined with nutrition guidance and ongoing support.
              </p>
              <div className="text-4xl font-serif text-[#1A1A1A] mb-10">
                From €199<span className="text-lg text-[#6B6B6B] font-sans">/month</span>
              </div>
              <Link to="/weight-loss">
                <Button className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full px-10 h-14 text-lg font-medium">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Ready to feel like yourself again?
          </h2>
          <p className="text-xl text-white/70 mb-12 font-light max-w-2xl mx-auto">
            Start with a free online consultation. No commitment required.
          </p>
          <Link to="/assessment">
            <Button className="bg-white hover:bg-[#F2F2F2] text-[#1A1A1A] rounded-full px-12 h-16 text-lg font-semibold hover:scale-105 transition-transform">
              Get started today
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}