import React from "react";
import LegalDialog from "../ui/LegalDialog";
import TermsOfUse from "../ui/TermsOfUse";
import PrivacyPolicy from "../ui/PrivacyPolicy";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#080C0D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Section - Logo, Tagline, Legal Links */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo and Tagline */}
            <div className="space-y-6">
              <a href="#home" className="inline-block cursor-pointer">
                <img
                  src="/images/logo.svg"
                  alt="SniperThink Logo"
                  className="h-auto w-[180px] xs:w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px]"
                />
              </a>
              <p className="text-gray-300 text-base leading-relaxed max-w-md font-light">
                SniperThink delivers clarity, automation, and AI-driven execution for fast-moving teams. Your edge starts here.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <LegalDialog title="Terms Of Use" triggerText="Terms Of Use">
                <TermsOfUse />
              </LegalDialog>
              <span className="text-gray-600">•</span>
              <LegalDialog title="Privacy Policy" triggerText="Privacy Policy">
                <PrivacyPolicy />
              </LegalDialog>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-7">
            {/* Desktop Layout - 2 Column Grid */}
            <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-6">
                <a
                  href="#home"
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#analytics-demo"
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Dashboard</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#features"
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Features</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#why-us"
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Why Us</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="space-y-6">
                <a
                  href="#process"
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Process</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#industries"
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Industry</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.sniperthink.com/intelligencesystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Intelligent System</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#faq"
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">FAQ</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Layout - Single Column Stack */}
            <div className="md:hidden space-y-4">
              <a
                href="#home"
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#analytics-demo"
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Dashboard</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#features"
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Features</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#why-us"
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Why Us</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#process"
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Process</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#industries"
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Industry</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#faq"
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">FAQ</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/60 my-10"></div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-4">

          {/* Copyright - Left Aligned */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-gray-500 text-xs md:text-sm font-light tracking-wide">
              Copyright © 2025 | SniperThink, All Rights Reserved
            </p>
          </div>

          {/* Social Media - Right Aligned */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 md:order-2">
            <span className="text-gray-400 text-sm font-light whitespace-nowrap">Connect with us:</span>

            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/sniperthink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img
                  src="/images/facebook.svg"
                  alt="Facebook"
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>

              <a
                href="https://www.instagram.com/sniperthink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img
                  src="/images/insta.svg"
                  alt="Instagram"
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/sniperthink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
