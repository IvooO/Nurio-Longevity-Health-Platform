import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TestTube, 
  CheckCircle2,
  Package,
  Building2,
  UserCheck,
  Microscope,
  Activity,
  Heart,
  Droplets,
  Flame,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import StepCard from '../components/ui/StepCard';
import CTASection from '../components/ui/CTASection';
import SiteFooter from '../components/ui/SiteFooter';

export default function LabTesting() {
  const testCategories = [
    {
      category: "Metabolic Panel",
      icon: Activity,
      color: "#8B9E8B",
      tests: [
        { name: "Fasting Glucose", description: "Blood sugar levels after fasting" },
        { name: "HbA1c", description: "Average blood sugar over 2-3 months" },
        { name: "Fasting Insulin", description: "Insulin levels and sensitivity" },
        { name: "HOMA-IR", description: "Insulin resistance calculation" }
      ]
    },
    {
      category: "Liver & Kidney Function",
      icon: Shield,
      color: "#5B8DB8",
      tests: [
        { name: "ALT/AST", description: "Liver enzyme levels" },
        { name: "GGT", description: "Liver and bile duct health" },
        { name: "Creatinine", description: "Kidney filtration marker" },
        { name: "eGFR", description: "Estimated kidney function" }
      ]
    },
    {
      category: "Lipid Panel",
      icon: Heart,
      color: "#C4A484",
      tests: [
        { name: "Total Cholesterol", description: "Overall cholesterol level" },
        { name: "LDL Cholesterol", description: "Low-density lipoprotein" },
        { name: "HDL Cholesterol", description: "High-density lipoprotein" },
        { name: "Triglycerides", description: "Blood fat levels" }
      ]
    },
    {
      category: "Inflammation Markers",
      icon: Flame,
      color: "#9B7B9B",
      tests: [
        { name: "hs-CRP", description: "High-sensitivity C-reactive protein" },
        { name: "Uric Acid", description: "Metabolic and inflammatory marker" },
        { name: "Homocysteine", description: "Cardiovascular risk marker" }
      ]
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Order Your Kit",
      description: "Select your test panel and receive a home collection kit within 2-3 business days.",
      icon: Package
    },
    {
      number: 2,
      title: "Collect Your Sample",
      description: "Follow the simple instructions to collect your sample at home or visit a partner clinic.",
      icon: Droplets
    },
    {
      number: 3,
      title: "Physician Review",
      description: "Our medical team analyzes your results and provides personalized insights and recommendations.",
      icon: UserCheck
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FAF9F7] via-[#F5F8FA] to-[#F0F4F8] min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#5B8DB8]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#5B8DB8]/10 text-[#5B8DB8] text-sm font-medium">
                Comprehensive biomarker analysis
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2D2D2D] leading-[1.1] tracking-tight">
                Know your
                <span className="block text-[#5B8DB8]">numbers</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-xl font-light">
                Detailed lab testing gives you and your medical team the data needed to make informed decisions about your health journey.
              </p>

              <div className="flex items-baseline gap-2 py-4">
                <span className="text-4xl font-light text-[#2D2D2D]">From €149</span>
                <span className="text-[#5A5A5A]">/panel</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/assessment">
                  <Button 
                    size="lg" 
                    className="bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white px-8 py-6 text-base rounded-full group"
                  >
                    Order Your Lab Kit
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&q=80" 
                alt="Lab testing" 
                className="rounded-[2rem] w-full h-[500px] object-cover shadow-2xl shadow-[#5B8DB8]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#5B8DB8] text-sm font-medium uppercase tracking-wider">Test Panels</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-4">
              Comprehensive biomarker analysis
            </h2>
            <p className="text-[#5A5A5A] font-light">
              Our panels are designed to give you a complete picture of your metabolic health, identifying areas for improvement and tracking progress over time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-[#FAF9F7] rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-xl font-medium text-[#2D2D2D]">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.tests.map((test, testIndex) => (
                      <div key={testIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#8B9E8B] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-[#2D2D2D]">{test.name}</p>
                          <p className="text-sm text-[#5A5A5A]">{test.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collection Options */}
      <section className="py-24 px-6 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#5B8DB8] text-sm font-medium uppercase tracking-wider">Flexible Options</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-4">
              Choose how you test
            </h2>
            <p className="text-[#5A5A5A] font-light">
              Collect your sample at home or visit one of our partner clinics—whichever is most convenient for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-[#E8E8E8]">
              <div className="w-14 h-14 rounded-2xl bg-[#5B8DB8]/10 flex items-center justify-center mb-6">
                <Package className="h-6 w-6 text-[#5B8DB8]" />
              </div>
              <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">Home Collection Kit</h3>
              <p className="text-[#5A5A5A] font-light mb-6">
                Receive a kit at your door with everything you need. Simple finger-prick collection with prepaid return packaging.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[#5A5A5A] text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                  Delivered in 2-3 business days
                </li>
                <li className="flex items-center gap-2 text-[#5A5A5A] text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                  Easy-to-follow instructions
                </li>
                <li className="flex items-center gap-2 text-[#5A5A5A] text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                  Prepaid return shipping
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-[#E8E8E8]">
              <div className="w-14 h-14 rounded-2xl bg-[#5B8DB8]/10 flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-[#5B8DB8]" />
              </div>
              <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">Partner Clinic Visit</h3>
              <p className="text-[#5A5A5A] font-light mb-6">
                Visit one of our partner phlebotomy clinics for a traditional blood draw. Appointments available across the EU.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[#5A5A5A] text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                  Professional blood draw
                </li>
                <li className="flex items-center gap-2 text-[#5A5A5A] text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                  Convenient clinic locations
                </li>
                <li className="flex items-center gap-2 text-[#5A5A5A] text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                  Same-day appointment availability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#5B8DB8] text-sm font-medium uppercase tracking-wider">The Process</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-4">
              From sample to insights
            </h2>
            <p className="text-[#5A5A5A] font-light">
              Results are typically available within 5-7 business days, reviewed by our medical team before being shared with you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24 px-6 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#5B8DB8] text-sm font-medium uppercase tracking-wider">Integrated Care</span>
              <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-6">
                Lab results that inform your entire program
              </h2>
              <p className="text-[#5A5A5A] font-light mb-8 text-lg">
                Your lab results don't exist in isolation. They integrate directly with your weight loss, nutrition, and longevity programs to create a truly personalized health plan.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                  <Microscope className="h-5 w-5 text-[#5B8DB8] mt-1" />
                  <div>
                    <h4 className="font-medium text-[#2D2D2D] mb-1">Weight Loss Program Integration</h4>
                    <p className="text-sm text-[#5A5A5A]">Baseline and ongoing labs ensure treatment safety and track metabolic improvements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                  <Microscope className="h-5 w-5 text-[#C4A484] mt-1" />
                  <div>
                    <h4 className="font-medium text-[#2D2D2D] mb-1">Nutrition Program Integration</h4>
                    <p className="text-sm text-[#5A5A5A]">Biomarkers guide nutritional recommendations and macronutrient targets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                  <Microscope className="h-5 w-5 text-[#9B7B9B] mt-1" />
                  <div>
                    <h4 className="font-medium text-[#2D2D2D] mb-1">Longevity Program Integration</h4>
                    <p className="text-sm text-[#5A5A5A]">Track aging biomarkers and optimize your healthspan interventions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80" 
                alt="Lab analysis" 
                className="rounded-[2rem] w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        headline="Get a complete picture of your health"
        subline="Order your lab kit today and take the first step toward data-driven health decisions."
        ctaText="Order Your Lab Kit"
        ctaLink="/assessment"
      />

      <SiteFooter />
    </div>
  );
}