"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import ContactUs from "../ui/ContactUs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const navItems = [
    "Home",
    "Dashboard",
    "Features",
    "Why Us",
    "Process",
    "Industry",
    "FAQ",
  ];

  // Ensure client-side rendering consistency
  useEffect(() => {
    setIsClient(true);
  }, []);

  const openContactForm = () => {
    setIsContactOpen(true);
    setMenuOpen(false); // Close mobile menu if open
  };

  const closeContactForm = () => {
    setIsContactOpen(false);
  };

  const getSectionId = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      "Home": "home",
      "Dashboard": "analytics-demo",
      "Features": "features",
      "Why Us": "why-us",
      "Process": "process",
      "Industry": "industries",
      "FAQ": "faq",
    };
    return sectionMap[item] || item.toLowerCase();
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // Fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] border-b border-gray-700/50 backdrop-blur-lg" style={{
          width: '100%',
          height: 'clamp(56px, 15vw, 64px)',
          opacity: 1,
          paddingTop: 'clamp(4px, 2vw, 8px)',
          paddingRight: 'clamp(12px, 4vw, 80px)',
          paddingBottom: 'clamp(4px, 2vw, 8px)',
          paddingLeft: '0px',
          background: 'rgba(10, 10, 10, 0.6)',
          backdropFilter: 'blur(56px)',
          boxShadow: '0px 6.65px 5.32px 0px #00000007, 0px 22.34px 17.87px 0px #0000000B, 0px 100px 80px 0px #00000012'
        }}>
        <div className="w-full flex items-center justify-between relative h-full">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer flex-shrink-0 py-2 pl-4 lg:pl-6 xl:pl-8">
            <img 
              src="/images/logo.svg" 
              alt="SniperThink Logo"
              width={371}
              height={44}
              className="h-auto w-[160px] xs:w-[180px] sm:w-[220px] md:w-[240px] lg:w-[280px] xl:w-[300px] 2xl:w-[320px] max-w-none"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-4 xl:space-x-8 py-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${getSectionId(item)}`}
                  className="text-gray-300 hover:text-[#91C499] transition-all duration-300 hover:scale-105 font-medium py-1 text-sm xl:text-base whitespace-nowrap"
                  onClick={(e) => {
                    if (item === "Contact") {
                      e.preventDefault();
                      openContactForm();
                    } else {
                      scrollToSection(e, getSectionId(item));
                    }
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 pr-4 lg:pr-6 xl:pr-8">
            <a
              href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-3 xl:px-4 py-2 rounded-[2rem] text-sm xl:text-base whitespace-nowrap inline-flex items-center gap-1"
            >
              Contact us
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none touch-target mr-4"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {menuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300" />}
          </button>
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0F0F11]/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
            <nav className="flex flex-col items-center space-y-3 sm:space-y-4 py-4 sm:py-6 px-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${getSectionId(item)}`}
                  className="text-gray-300 hover:text-[#91C499] transition-all duration-300 font-medium text-base sm:text-lg touch-target w-full text-center py-2"
                  onClick={(e) => {
                    if (item === "Contact") {
                      e.preventDefault();
                      openContactForm();
                    } else {
                      scrollToSection(e, getSectionId(item));
                      setMenuOpen(false);
                    }
                  }}
                  style={{ minHeight: '44px' }}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-3 rounded text-base font-medium touch-target mt-2 inline-flex items-center justify-center"
                style={{ minHeight: '44px' }}
              >
                Contact us
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Form Modal - Only render after client hydration */}
      {isClient && <ContactUs isOpen={isContactOpen} onClose={closeContactForm} />}
    </>
  );
}