import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Salad,
  CheckCircle2,
  Utensils,
  Apple,
  Dna,
  Calendar,
  Target,
  Leaf,
  Fish,
  Egg,
  Activity
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import FeatureGrid from '../components/ui/FeatureGrid';
import CTASection from '../components/ui/CTASection';
import SiteFooter from '../components/ui/SiteFooter';

export default function Nutrition() {
  const personalizedFactors = [
    {
      icon: Dna,
      title: "Your Biomarkers",
      description: "Lab results inform recommendations around blood sugar management, inflammation, and metabolic health."
    },
    {
      icon: Activity,
      title: "GLP-1 Treatment Phase",
      description: "Nutrition guidance adapts as your appetite changes throughout treatment titration."
    },
    {
      icon: Target,
      title: "Your Goals",
      description: "Whether it's weight loss, muscle preservation, or metabolic health—your plan reflects your priorities."
    },
    {
      icon: Leaf,
      title: "Preferences & Restrictions",
      description: "Dietary preferences, allergies, and cultural considerations are built into every recommendation."
    }
  ];

  const weeklyPlanFeatures = [
    {
      icon: Fish,
      title: "Protein Targets",
      description: "Adequate protein intake is crucial during weight loss to help preserve lean muscle mass. Your plan includes daily protein goals and meal suggestions."
    },
    {
      icon: Leaf,
      title: "Fiber Focus",
      description: "High-fiber foods support digestive health and can help manage GLP-1 side effects. We prioritize fiber-rich vegetables, legumes, and whole grains."
    },
    {
      icon: Apple,
      title: "Micronutrient Balance",
      description: "Reduced caloric intake requires nutrient-dense food choices. Your plan emphasizes vitamins and minerals essential for energy and health."
    },
    {
      icon: Egg,
      title: "Balanced Macros",
      description: "Carbohydrate, fat, and protein ratios tailored to your metabolic markers and treatment response."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FAF9F7] via-[#F8F5F0] to-[#F5F0E8] min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#C4A484]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#C4A484]/10 text-[#9A7A5A] text-sm font-medium">
                Personalized nutrition protocols
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2D2D2D] leading-[1.1] tracking-tight">
                Nutrition that matches
                <span className="block text-[#C4A484]">your biology</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-xl font-light">
                Your nutrition plan isn't generic—it's designed around your lab results, treatment phase, and personal goals. Real food. Real science. Real results.
              </p>

              <div className="flex items-baseline gap-2 py-4">
                <span className="text-4xl font-light text-[#2D2D2D]">From €99</span>
                <span className="text-[#5A5A5A]">/month</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/assessment">
                  <Button
                    size="lg"
                    className="bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white px-8 py-6 text-base rounded-full group"
                  >
                    Get Your Nutrition Plan
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
                alt="Healthy nutrition"
                className="rounded-[2rem] w-full h-[500px] object-cover shadow-2xl shadow-[#C4A484]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Factors */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C4A484] text-sm font-medium uppercase tracking-wider">Truly Personalized</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-4">
              Built around you
            </h2>
            <p className="text-[#5A5A5A] font-light">
              Generic diet plans don't work because they ignore your unique biology. Our approach is different.
            </p>
          </div>
          
          <FeatureGrid features={personalizedFactors} columns={4} />
        </div>
      </section>

      {/* Weekly Plan Structure */}
      <section className="py-24 px-6 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C4A484] text-sm font-medium uppercase tracking-wider">Your Weekly Plan</span>
              <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-6">
                Structured for success
              </h2>
              <p className="text-[#5A5A5A] font-light mb-8 text-lg">
                Each week you receive a structured nutrition plan with daily meals, snacks, and practical guidance. No complicated counting—just clear direction.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {weeklyPlanFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                      <div className="w-10 h-10 rounded-xl bg-[#C4A484]/10 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-[#9A7A5A]" />
                      </div>
                      <h3 className="font-medium text-[#2D2D2D] mb-2">{feature.title}</h3>
                      <p className="text-sm text-[#5A5A5A] font-light">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-[#E8E8E8]">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-5 w-5 text-[#C4A484]" />
                <span className="font-medium text-[#2D2D2D]">Sample Day</span>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-[#E8E8E8] pb-4">
                  <p className="text-sm text-[#C4A484] mb-1">Breakfast</p>
                  <p className="text-[#2D2D2D]">Greek yogurt with berries, chia seeds, and a drizzle of honey</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Protein: 20g | Fiber: 8g</p>
                </div>
                
                <div className="border-b border-[#E8E8E8] pb-4">
                  <p className="text-sm text-[#C4A484] mb-1">Lunch</p>
                  <p className="text-[#2D2D2D]">Grilled salmon salad with quinoa, avocado, and lemon-tahini dressing</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Protein: 35g | Fiber: 10g</p>
                </div>
                
                <div className="border-b border-[#E8E8E8] pb-4">
                  <p className="text-sm text-[#C4A484] mb-1">Snack</p>
                  <p className="text-[#2D2D2D]">Apple slices with almond butter</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Protein: 4g | Fiber: 5g</p>
                </div>
                
                <div>
                  <p className="text-sm text-[#C4A484] mb-1">Dinner</p>
                  <p className="text-[#2D2D2D]">Herb-roasted chicken with roasted vegetables and sweet potato</p>
                  <p className="text-sm text-[#5A5A5A] mt-1">Protein: 40g | Fiber: 9g</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#E8E8E8]">
                <div className="flex justify-between text-sm">
                  <span className="text-[#5A5A5A]">Daily totals:</span>
                  <span className="text-[#2D2D2D] font-medium">~100g protein | ~32g fiber</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GLP-1 Nutrition Considerations */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#C4A484] text-sm font-medium uppercase tracking-wider">GLP-1 Optimized</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-4">
              Nutrition adapted for treatment
            </h2>
            <p className="text-[#5A5A5A] font-light">
              GLP-1 medications change how you experience food. Your nutrition plan accounts for this, helping you maximize benefits while managing side effects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-[#C4A484]/10 flex items-center justify-center mx-auto mb-6">
                <Utensils className="h-7 w-7 text-[#9A7A5A]" />
              </div>
              <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">Smaller, Frequent Meals</h3>
              <p className="text-[#5A5A5A] font-light">
                Reduced appetite means smaller portions feel satisfying. We structure meals to maintain nutrition density even with less volume.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-[#C4A484]/10 flex items-center justify-center mx-auto mb-6">
                <Salad className="h-7 w-7 text-[#9A7A5A]" />
              </div>
              <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">Digestive Comfort</h3>
              <p className="text-[#5A5A5A] font-light">
                Food choices that minimize common GI side effects like nausea. We guide you on what to eat—and what to avoid—during titration.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-[#C4A484]/10 flex items-center justify-center mx-auto mb-6">
                <Target className="h-7 w-7 text-[#9A7A5A]" />
              </div>
              <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">Protein Priority</h3>
              <p className="text-[#5A5A5A] font-light">
                When eating less, every bite counts. We ensure adequate protein to preserve lean muscle mass during weight loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CGM Integration */}
      <section className="py-24 px-6 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                alt="Health monitoring"
                className="rounded-[2rem] w-full h-[450px] object-cover"
              />
            </div>
            
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#8B9E8B]/10 text-[#6B7E6B] text-xs font-medium mb-4">
                Optional Add-On
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mb-6">
                Continuous glucose monitoring integration
              </h2>
              <p className="text-[#5A5A5A] font-light mb-6 text-lg">
                For members who want deeper insights, optional continuous glucose monitoring (CGM) can reveal how your body responds to different foods in real-time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#8B9E8B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5A5A5A]">See how specific meals affect your blood sugar</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#8B9E8B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5A5A5A]">Identify your best and worst food choices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#8B9E8B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5A5A5A]">Optimize meal timing and composition</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#8B9E8B] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5A5A5A]">Track metabolic improvements over time</span>
                </div>
              </div>
              
              <p className="text-sm text-[#5A5A5A] mt-6">
                CGM devices are available as an add-on to any nutrition plan. Ask your care team for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Nutrition designed for your biology"
        subline="Get a personalized nutrition plan that works with your treatment and goals."
        ctaText="Get Your Nutrition Plan"
        ctaLink="/assessment"
      />

      <SiteFooter />
    </div>
  );
}