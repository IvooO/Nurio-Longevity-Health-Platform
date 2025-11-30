import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#F5F3EF] border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-serif text-[#1A1A1A] mb-4">Nurio</div>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Personalized health programs backed by science.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-[#1A1A1A] mb-4 text-sm">Programs</h4>
            <ul className="space-y-3">
              <li><Link to="/weight-loss" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">Weight Loss</Link></li>
              <li><Link to="/lab-testing" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">Lab Testing</Link></li>
              <li><Link to="/nutrition" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">Nutrition</Link></li>
              <li><Link to="/longevity" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">Longevity</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-[#1A1A1A] mb-4 text-sm">Learn</h4>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">How It Works</Link></li>
              <li><Link to="/assessment" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">Start Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-[#1A1A1A] mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">Privacy</Link></li>
              <li><Link to="/cookies" className="text-[#6B6B6B] hover:text-[#1A1A1A] text-sm transition-colors">Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#1A1A1A] mb-4 text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="text-[#6B6B6B] text-sm">hello@nurio.eu</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#E8E4DC]">
          <div className="bg-[#FAF9F6] rounded-xl p-5 mb-8">
            <p className="text-[#6B6B6B] text-xs leading-relaxed">
              <strong className="text-[#1A1A1A]">Medical Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute medical advice. 
              All treatments are prescribed by licensed healthcare providers following a comprehensive medical evaluation. 
              Individual results may vary. GLP-1 medications require a prescription and are only dispensed following approval by our medical team. 
              This service is available to eligible individuals within the European Union.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B6B6B] text-sm">
              © {currentYear} Nurio Health. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-[#6B6B6B]">
              <span>EU Medical Device Compliant</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}