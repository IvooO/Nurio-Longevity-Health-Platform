import React from 'react';
import { Link } from 'react-router-dom';
import {
 ArrowRight,
 HeartPulse,
 CheckCircle2,
 Activity,
 Flame,
 Moon,
 Dumbbell,
 TrendingUp,
 Calendar,
 Target,
 Brain
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import FeatureGrid from '../components/ui/FeatureGrid';
import CTASection from '../components/ui/CTASection';
import SiteFooter from '../components/ui/SiteFooter';


export default function Longevity() {
 const focusAreas = [
   {
     icon: Activity,
     title: "Metabolic Health",
     description: "Optimize blood sugar, insulin sensitivity, and lipid profiles—the foundation of healthy aging."
   },
   {
     icon: Flame,
     title: "Inflammation",
     description: "Track and reduce chronic inflammation markers linked to age-related disease."
   },
   {
     icon: HeartPulse,
     title: "Cardiovascular Fitness",
     description: "Improve VO₂ max and cardiovascular efficiency—strong predictors of longevity."
   },
   {
     icon: Dumbbell,
     title: "Strength & Muscle",
     description: "Preserve lean muscle mass and functional strength as you age."
   },
   {
     icon: Moon,
     title: "Sleep Optimization",
     description: "Quality sleep is essential for recovery, cognitive function, and metabolic health."
   },
   {
     icon: Brain,
     title: "Cognitive Health",
     description: "Support brain health through metabolic optimization and targeted interventions."
   }
 ];


 const biomarkers = [
   { name: "hs-CRP", category: "Inflammation" },
   { name: "HbA1c", category: "Metabolic" },
   { name: "Fasting Insulin", category: "Metabolic" },
   { name: "Lipid Panel", category: "Cardiovascular" },
   { name: "Homocysteine", category: "Cardiovascular" },
   { name: "Vitamin D", category: "General Health" },
   { name: "Cortisol", category: "Stress" },
   { name: "Testosterone/Estrogen", category: "Hormonal" }
 ];


 return (
   <div className="min-h-screen bg-[#FAFAFA]">
     {/* Hero */}
     <section className="bg-gradient-to-br from-[#FAF9F7] via-[#F5F0F5] to-[#F0E8F0] min-h-[80vh] flex items-center relative overflow-hidden">
       <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#9B7B9B]/10 rounded-full blur-3xl" />
       </div>
      
       <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
             <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#9B7B9B]/10 text-[#7B5B7B] text-sm font-medium">
               Biomarker-driven longevity
             </span>
            
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2D2D2D] leading-[1.1] tracking-tight">
               Live better.
               <span className="block text-[#9B7B9B]">Longer.</span>
             </h1>
            
             <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-xl font-light">
               Optimize your healthspan with a data-driven approach to aging. Track the biomarkers that matter, and receive personalized coaching to improve them.
             </p>


             <div className="flex items-baseline gap-2 py-4">
               <span className="text-4xl font-light text-[#2D2D2D]">From €249</span>
               <span className="text-[#5A5A5A]">/month</span>
             </div>
            
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Link to="/assessment">
                 <Button
                   size="lg"
                   className="bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white px-8 py-6 text-base rounded-full group"
                 >
                   Start Your Longevity Blueprint
                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                 </Button>
               </Link>
             </div>
           </div>
          
           <div className="relative hidden lg:block">
             <img
               src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
               alt="Active longevity"
               className="rounded-[2rem] w-full h-[500px] object-cover shadow-2xl shadow-[#9B7B9B]/20"
             />
           </div>
         </div>
       </div>
     </section>


     {/* Focus Areas */}
     <section className="py-24 px-6 bg-white">
       <div className="max-w-7xl mx-auto">
         <div className="text-center max-w-2xl mx-auto mb-16">
           <span className="text-[#9B7B9B] text-sm font-medium uppercase tracking-wider">Our Approach</span>
           <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-4">
             Six pillars of longevity
           </h2>
           <p className="text-[#5A5A5A] font-light">
             We focus on the factors most strongly correlated with healthy aging, backed by longevity research.
           </p>
         </div>
        
         <FeatureGrid features={focusAreas} columns={3} />
       </div>
     </section>


     {/* Biomarker Tracking */}
     <section className="py-24 px-6 bg-[#FAF9F7]">
       <div className="max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
             <span className="text-[#9B7B9B] text-sm font-medium uppercase tracking-wider">Data-Driven</span>
             <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-6">
               Biomarker-guided recommendations
             </h2>
             <p className="text-[#5A5A5A] font-light mb-8 text-lg">
               Your longevity plan isn't based on guesswork. We track key biomarkers over time, using the data to refine your interventions and measure progress.
             </p>
            
             <div className="grid grid-cols-2 gap-4">
               {biomarkers.map((marker, index) => (
                 <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#E8E8E8]">
                   <CheckCircle2 className="h-4 w-4 text-[#9B7B9B]" />
                   <div>
                     <p className="font-medium text-[#2D2D2D] text-sm">{marker.name}</p>
                     <p className="text-xs text-[#5A5A5A]">{marker.category}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
          
           <div className="relative">
             <img
               src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
               alt="Health data"
               className="rounded-[2rem] w-full h-[500px] object-cover"
             />
           </div>
         </div>
       </div>
     </section>


     {/* Coaching Model */}
     <section className="py-24 px-6 bg-white">
       <div className="max-w-7xl mx-auto">
         <div className="text-center max-w-2xl mx-auto mb-16">
           <span className="text-[#9B7B9B] text-sm font-medium uppercase tracking-wider">Your Program</span>
           <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-4">
             Ongoing coaching and optimization
           </h2>
           <p className="text-[#5A5A5A] font-light">
             Longevity isn't a one-time intervention—it's a continuous process of measurement and improvement.
           </p>
         </div>
        
         <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-[#FAF9F7] rounded-3xl p-8">
             <div className="w-14 h-14 rounded-2xl bg-[#9B7B9B]/10 flex items-center justify-center mb-6">
               <TrendingUp className="h-6 w-6 text-[#7B5B7B]" />
             </div>
             <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">Baseline Assessment</h3>
             <p className="text-[#5A5A5A] font-light mb-4">
               Comprehensive biomarker panel to establish your starting point and identify priority areas.
             </p>
             <ul className="space-y-2">
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 Full lab panel
               </li>
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 Health questionnaire
               </li>
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 Goal setting session
               </li>
             </ul>
           </div>
          
           <div className="bg-[#FAF9F7] rounded-3xl p-8">
             <div className="w-14 h-14 rounded-2xl bg-[#9B7B9B]/10 flex items-center justify-center mb-6">
               <Calendar className="h-6 w-6 text-[#7B5B7B]" />
             </div>
             <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">Monthly Reviews</h3>
             <p className="text-[#5A5A5A] font-light mb-4">
               Regular check-ins with your longevity coach to review progress and adjust your plan.
             </p>
             <ul className="space-y-2">
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 Progress tracking
               </li>
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 Protocol adjustments
               </li>
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 New recommendations
               </li>
             </ul>
           </div>
          
           <div className="bg-[#FAF9F7] rounded-3xl p-8">
             <div className="w-14 h-14 rounded-2xl bg-[#9B7B9B]/10 flex items-center justify-center mb-6">
               <Target className="h-6 w-6 text-[#7B5B7B]" />
             </div>
             <h3 className="text-xl font-medium text-[#2D2D2D] mb-3">Quarterly Labs</h3>
             <p className="text-[#5A5A5A] font-light mb-4">
               Regular biomarker testing to objectively measure your progress and refine interventions.
             </p>
             <ul className="space-y-2">
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 Biomarker retesting
               </li>
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 Trend analysis
               </li>
               <li className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                 <CheckCircle2 className="h-4 w-4 text-[#8B9E8B]" />
                 Updated protocols
               </li>
             </ul>
           </div>
         </div>
       </div>
     </section>


     {/* What You Get */}
     <section className="py-24 px-6 bg-[#FAF9F7]">
       <div className="max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="relative order-2 lg:order-1">
             <img
               src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80"
               alt="Healthy aging"
               className="rounded-[2rem] w-full h-[450px] object-cover"
             />
           </div>
          
           <div className="order-1 lg:order-2">
             <span className="text-[#9B7B9B] text-sm font-medium uppercase tracking-wider">Your Blueprint</span>
             <h2 className="text-3xl md:text-4xl font-light text-[#2D2D2D] mt-4 mb-6">
               What's included
             </h2>
            
             <div className="space-y-4">
               <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                 <CheckCircle2 className="h-5 w-5 text-[#9B7B9B] mt-1" />
                 <div>
                   <h4 className="font-medium text-[#2D2D2D] mb-1">Comprehensive Lab Panel</h4>
                   <p className="text-sm text-[#5A5A5A]">Baseline and quarterly testing of key longevity biomarkers</p>
                 </div>
               </div>
              
               <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                 <CheckCircle2 className="h-5 w-5 text-[#9B7B9B] mt-1" />
                 <div>
                   <h4 className="font-medium text-[#2D2D2D] mb-1">Personalized Protocol</h4>
                   <p className="text-sm text-[#5A5A5A]">Nutrition, exercise, sleep, and supplement recommendations</p>
                 </div>
               </div>
              
               <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                 <CheckCircle2 className="h-5 w-5 text-[#9B7B9B] mt-1" />
                 <div>
                   <h4 className="font-medium text-[#2D2D2D] mb-1">Monthly Coaching</h4>
                   <p className="text-sm text-[#5A5A5A]">One-on-one sessions with your longevity coach</p>
                 </div>
               </div>
              
               <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                 <CheckCircle2 className="h-5 w-5 text-[#9B7B9B] mt-1" />
                 <div>
                   <h4 className="font-medium text-[#2D2D2D] mb-1">Progress Dashboard</h4>
                   <p className="text-sm text-[#5A5A5A]">Track your biomarkers and progress over time</p>
                 </div>
               </div>
              
               <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                 <CheckCircle2 className="h-5 w-5 text-[#9B7B9B] mt-1" />
                 <div>
                   <h4 className="font-medium text-[#2D2D2D] mb-1">Physician Oversight</h4>
                   <p className="text-sm text-[#5A5A5A]">Oversight by licensed medical professionals</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>

     {/* CTA */}
     <CTASection
       headline="Invest in your future self"
       subline="Start your journey to a longer, healthier life today."
       ctaText="Start Your Longevity Blueprint"
       ctaLink="/assessment"
     />

     <SiteFooter />
   </div>
 );
}