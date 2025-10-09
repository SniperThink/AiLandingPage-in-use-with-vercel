import { CheckCircle, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import React, { useState, useEffect } from "react";

export const TestimonialSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(1); // Center card active by default
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Detect if device is mobile with proper SSR handling
  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTestimonialClick = (index: number) => {
    if (!isClient) return; // Prevent interaction before client-side hydration
    
    if (isMobile) {
      setActiveTestimonial((prev) => (prev === index ? -1 : index));
    } else {
      setActiveTestimonial(index);
    }
  };

  return (
    <section id="testimonials" className="pt-6 pb-12 sm:pt-8 sm:pb-14 md:pt-10 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            See how businesses transform with SniperThink AI
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:gap-6 lg:gap-8 items-stretch justify-center max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isActive = activeTestimonial === index;
            const isCenterCard = index === Math.floor(testimonials.length / 2);

            return (
              <div
                key={index}
                onClick={() => handleTestimonialClick(index)}
                className={`bg-gradient-to-br from-[#1C1C1E] to-[#0F0F11] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-700 ease-in-out cursor-pointer
                  overflow-hidden shadow-xl border border-gray-800/50 group relative backdrop-blur-sm
                  hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#91C499]/15 hover:border-[#91C499]/40 hover:-translate-y-1
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#91C499]/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100
                  ${isCenterCard
                    ? 'w-full md:w-[400px] min-h-[450px] sm:min-h-[500px] md:min-h-[520px] max-h-[520px] md:scale-105 shadow-2xl shadow-[#91C499]/12 border-[#91C499]/30 bg-gradient-to-br from-[#1A1A1D] to-[#0F0F11]'
                    : 'w-full md:w-[380px] min-h-[450px] sm:min-h-[500px] md:min-h-[520px] max-h-[520px]'
                  }
                `}
              >
                {/* Feature Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                  <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#91C499] to-[#1A6262] text-white rounded-full shadow-lg">
                    {testimonial.feature}
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="mb-4 sm:mb-6 flex justify-center relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#E1A940] to-[#FF6700] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Star Rating */}
                <div className={`flex justify-center gap-1 mb-3 sm:mb-4 relative z-10 transition-all duration-500 ease-in-out ${
                  isActive ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-10"
                }`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#E1A940] text-[#E1A940]" />
                  ))}
                </div>

                {/* Quote preview - hidden when expanded */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <p className={`text-gray-300 mb-4 sm:mb-6 leading-relaxed transition-all duration-500 ease-in-out text-center italic text-sm sm:text-base ${
                    isActive ? "opacity-0 max-h-0 overflow-hidden mb-0" : "opacity-100 max-h-40"
                  }`}>
                    "{testimonial.quote.length > 100 ? `${testimonial.quote.substring(0, 100)}...` : testimonial.quote}"
                  </p>

                  {/* Author info for non-expanded state */}
                  <div className={`text-center transition-all duration-500 ease-in-out ${
                    isActive ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-32"
                  }`}>
                    <p className="font-semibold text-white text-base sm:text-lg">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-[#91C499] font-medium mt-1">{testimonial.role}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">{testimonial.company}</p>
                  </div>

                  {/* Click to expand hint */}
                  <div className={`text-center mt-3 sm:mt-4 transition-all duration-500 ease-in-out ${
                    isActive ? "opacity-0 max-h-0 overflow-hidden mt-0" : "opacity-100 max-h-10"
                  }`}>
                    <p className="text-[10px] sm:text-xs text-[#91C499] font-medium">Click to see details →</p>
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden relative z-10 ${
                    isActive ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Star Rating in expanded view */}
                  <div className="flex justify-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#E1A940] text-[#E1A940]" />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-center italic text-sm sm:text-base">
                    "{testimonial.quote}"
                  </p>

                  <div className="space-y-2 mb-4 sm:mb-6">
                    {testimonial.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-start space-x-2 sm:space-x-3 bg-white/5 rounded-lg p-2 sm:p-3 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-[#91C499] to-[#1A6262] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300 font-medium leading-tight">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700/50 pt-4 sm:pt-5 mt-3 sm:mt-4">
                    <div className="text-center">
                      <p className="font-semibold text-white text-base sm:text-lg">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-[#91C499] font-medium mt-1">{testimonial.role}</p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Click to collapse hint */}
                  <div className="text-center mt-3 sm:mt-4">
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Click to collapse ↑</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg">
            Ready to write your own success story?
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#91C499] to-[#1A6262] text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-[#91C499]/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};