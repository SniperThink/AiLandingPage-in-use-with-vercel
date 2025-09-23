import React from "react";
import LegalDialog from "../ui/LegalDialog";
import TermsOfUse from "../ui/TermsOfUse";
import PrivacyPolicy from "../ui/PrivacyPolicy";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="text-white px-6 pt-3 pb-0">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top: Logo and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo & Description */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <img
                src="images/logo.svg"
                alt="SniperThink Logo"
                className="w-56 md:w-64 lg:w-72 xl:w-80"
              />
              <p className="text-sm text-gray-400 max-w-md">
                SniperThink delivers clarity, automation, and AI-driven execution for fast-moving teams.
                Your edge starts here.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-4">
              <LegalDialog title="Terms & Conditions" triggerText="Terms & Conditions">
                <TermsOfUse />
              </LegalDialog>
              <span>|</span>
              <LegalDialog title="Privacy Policy" triggerText="Privacy Policy">
                <PrivacyPolicy />
              </LegalDialog>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-8 border-t border-gray-700 pt-8 lg:border-t-0 lg:border-l lg:pl-16">
            <div className="flex flex-col gap-4 text-sm">
              <a href="/" className="hover:text-green-400 transition-colors">
                Home
              </a>
              <a href="/" className="hover:text-green-400 transition-colors">
                About Us
              </a>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <a href="#our-products" className="hover:text-green-400 transition-colors">
                Products
              </a>
              <a href="#right-faqs" className="hover:text-green-400 transition-colors">
                FAQs
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 pb-9 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <div className="text-center md:text-left">
            <p>© 2025 SniperThink, All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white text-sm">Connect with us:</span>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/sniperthink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/images/facebook.svg" alt="Facebook" className="w-5 h-5 hover:opacity-80" />
              </a>
              <a
                href="https://www.instagram.com/sniperthink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/images/insta.svg" alt="Instagram" className="w-5 h-5 hover:opacity-80" />
              </a>
              <a
                href="https://www.linkedin.com/company/sniperthink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-5 h-5 hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
