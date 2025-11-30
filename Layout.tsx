import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './components/ui/Button';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Weight Loss', path: '/weight-loss' },
    { name: 'Lab Testing', path: '/lab-testing' },
    { name: 'Nutrition', path: '/nutrition' },
    { name: 'Longevity', path: '/longevity' },
  ];

  // Hide header on Assessment page
  const hideNav = location.pathname === '/assessment';

  if (hideNav) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#F9F8F6]/90 backdrop-blur-md border-[#E5E0D6] py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-3xl font-serif text-[#1A1A1A] tracking-tight hover:opacity-80 transition-opacity">
              Nurio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[15px] font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#1A1A1A]'
                      : 'text-[#5A5A5A] hover:text-[#1A1A1A]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/assessment">
                <Button className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full px-8 py-2.5 text-sm font-semibold transition-all">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#1A1A1A]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1A1A1A]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F9F8F6] border-t border-[#E5E0D6] absolute w-full left-0 h-screen">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-2xl font-serif ${
                    location.pathname === item.path
                      ? 'text-[#1A1A1A]'
                      : 'text-[#6B6B6B]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-[#E5E0D6]">
                <Link to="/assessment">
                  <Button className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full h-14 text-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-24 pb-20">
        <Outlet />
      </main>
    </div>
  );
}