import React from "react";
import { Button } from "@/app/components/ui/button";

export default function NotFoundPage() {
  return (
    
    <section className="min-h-screen bg-[#0F0F11] text-white flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-xl w-full text-center relative">
        {/* Decorative Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A6262]/20 to-[#91C499]/20 rounded-full px-4 py-1.5 mb-6 text-sm sm:text-base border border-[#1A6262]/30">
          <span className="text-[#91C499] font-medium">Oops! Page Not Found</span>
        </div>

        {/* Big 404 */}
        <h1 className="text-7xl sm:text-9xl font-bold mb-4 leading-none bg-gradient-to-r from-[#1A6262] via-[#91C499] to-[#E1A940] bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          We couldn’t find the page you were looking for.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base mb-8 px-2">
          The link may be broken, or the page may have been removed. Let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <a href="/" className="w-full sm:w-auto">
            <Button className="w-full bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white px-6 py-3 text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300">
              Go Home
            </Button>
          </a>
          <a href="mailto:hello@sniperthink.com" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full border-[#1A6262] text-[#1A6262] hover:bg-[#1A6262] hover:text-white px-6 py-3 text-base sm:text-lg bg-transparent"
            >
              Contact Support
            </Button>
          </a>
        </div>

        {/* Floating Bubbles (Decorative) */}
        <div className="absolute -top-6 left-4 w-10 h-10 bg-[#91C499]/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-4 -right-6 w-6 h-6 bg-[#E1A940]/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 -left-4 w-4 h-4 bg-[#1A6262]/20 rounded-full animate-ping delay-3000"></div>
      </div>
    </section>
  );
}
