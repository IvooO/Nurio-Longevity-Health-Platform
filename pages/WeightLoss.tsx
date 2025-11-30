import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import SiteFooter from '../components/ui/SiteFooter';

export default function WeightLoss() {
  const benefits = [
    "Reduces appetite and cravings naturally",
    "Helps regulate blood sugar levels",
    "Supports sustainable weight management",
    "May improve cardiovascular markers"
  ];

  const included = [
    "Licensed physician consultation",
    "Personalized treatment plan",
    "GLP-1 medication (if appropriate)",
    "Baseline & ongoing lab testing",
    "Nutrition guidance",
    "Unlimited messaging with care team",
    "Monthly check-ins"
  ];

  const faqs = [
    {
      q: "How does GLP-1 medication work?",
      a: "GLP-1 receptor agonists mimic a naturally occurring hormone that helps regulate appetite and blood sugar. They work by slowing digestion and signaling fullness to your brain, making it easier to eat less without constant hunger."
    },
    {
      q: "What results can I expect?",
      a: "Individual results vary significantly. Clinical studies show average weight loss of 10-15% of body weight over 6-12 months when combined with lifestyle changes. Our physicians will discuss realistic expectations based on your specific situation."
    },
    {
      q: "What are the side effects?",
      a: "Common side effects include nausea, vomiting, diarrhea, and constipation—especially during the first few weeks. These typically improve as your body adjusts. Our team provides guidance on managing side effects."
    },
    {
      q: "How long do I need to take it?",
      a: "Treatment duration varies by individual. Some people use GLP-1 medications for 6-12 months to reach their goals, while others benefit from longer-term use. Your physician will help determine the right approach."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <section className="px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-[#C9A86C] font-medium mb-4 block">GLP-1 Weight Loss Program</span>
              <h1 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-[1.1] mb-6">
                Lose weight with <span className="text-[#C9A86C]">science</span> on your side
              </h1>
              <p className="text-lg text-[#6B6B6B] mb-8 max-w-lg">
                Medically-supervised GLP-1 treatments combined with personalized nutrition guidance and ongoing support. A comprehensive approach to sustainable weight management.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-serif text-[#1A1A1A]">From €199</span>
                <span className="text-[#6B6B6B]">/month</span>
              </div>
              
              <Link to="/assessment">
                <Button className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full px-8 h-12 text-base font-medium">
                  Start free consultation
                </Button>
              </Link>
              
              <p className="text-sm text-[#6B6B6B] mt-4">
                *Final pricing determined after medical evaluation
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" 
                alt="Weight loss" 
                className="rounded-3xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-12">How GLP-1 works</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="prose prose-lg text-[#6B6B6B]">
              <p>
                GLP-1 (glucagon-like peptide-1) receptor agonists are a class of medications that mimic a naturally occurring hormone in your body. Originally developed for type 2 diabetes, they've been shown to significantly support weight management.
              </p>
              <p>
                These medications work by slowing stomach emptying, helping you feel full longer, and reducing appetite signals to your brain. The result is naturally eating less without the constant battle against hunger.
              </p>
              <p>
                When combined with nutrition guidance and lifestyle modifications, GLP-1 treatments can help you achieve sustainable results that diet and exercise alone may not have provided.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-medium text-[#1A1A1A] mb-6">Key benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#8B9E8B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#1A1A1A]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FEF6E6] rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C9A86C] flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-serif text-[#1A1A1A]">Important safety information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-[#1A1A1A] mb-3">Not recommended for:</h3>
                <ul className="space-y-2 text-[#6B6B6B]">
                  <li>• Personal or family history of medullary thyroid carcinoma</li>
                  <li>• Multiple Endocrine Neoplasia syndrome type 2</li>
                  <li>• History of pancreatitis</li>
                  <li>• Pregnancy or planning to become pregnant</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-[#1A1A1A] mb-3">Common side effects:</h3>
                <ul className="space-y-2 text-[#6B6B6B]">
                  <li>• Nausea (especially during titration)</li>
                  <li>• Vomiting or diarrhea</li>
                  <li>• Constipation</li>
                  <li>• Headache</li>
                </ul>
                <p className="text-sm text-[#6B6B6B] mt-4">
                  Side effects typically improve within the first few weeks. Our team provides support for managing any discomfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-8">What's included</h2>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 py-3 border-b border-[#E8E4DC]">
                    <div className="w-5 h-5 rounded-full bg-[#8B9E8B] flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#1A1A1A]">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/assessment">
                  <Button className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full px-8 h-12 text-base font-medium">
                    Start free consultation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80" 
                alt="Medical consultation" 
                className="rounded-3xl w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-[#F5F3EF]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-12 text-center">
            Common questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6">
                <h3 className="font-medium text-[#1A1A1A] mb-3">{faq.q}</h3>
                <p className="text-[#6B6B6B]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Take our free consultation to see if you're a candidate for GLP-1 treatment.
          </p>
          <Link to="/assessment">
            <Button className="bg-white hover:bg-gray-100 text-[#1A1A1A] rounded-full px-10 h-14 text-base font-medium">
              Start free consultation
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
