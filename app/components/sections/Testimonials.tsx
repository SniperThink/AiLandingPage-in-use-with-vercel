import { CheckCircle, ExternalLink, Quote } from "lucide-react";
import { Button } from "../ui/button";
import { testimonials } from "@/data/testimonials";
import React, { useState, useEffect } from "react";

export const TestimonialSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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
    <section id="testimonials" className="py-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300">Explore how we've transformed business experiences</p>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:gap-12 lg:gap-16 items-stretch justify-center max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isActive = activeTestimonial === index;
            const isCenterCard = index === Math.floor(testimonials.length / 2);

            return (
              <div
                key={index}
                onClick={() => handleTestimonialClick(index)}
                className={`bg-gradient-to-br from-[#1C1C1E] to-[#0F0F11] rounded-2xl p-8 transition-all duration-700 ease-in-out cursor-pointer
                  overflow-hidden shadow-xl border border-gray-800/50 group relative backdrop-blur-sm
                  hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#91C499]/15 hover:border-[#91C499]/40 hover:-translate-y-1
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#91C499]/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-700 hover:before:opacity-100
                  ${isCenterCard 
                    ? 'w-full md:w-[400px] min-h-[480px] max-h-[480px] md:scale-110 shadow-2xl shadow-[#91C499]/12 border-[#91C499]/30 bg-gradient-to-br from-[#1A1A1D] to-[#0F0F11]' 
                    : 'w-full md:w-[380px] min-h-[480px] max-h-[480px]'
                  }
                `}
              >
                {/* Quote Icon */}
                <div className="mb-6 flex justify-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E1A940] to-[#FF6700] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Quote preview - hidden when expanded */}
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <p className={`text-gray-300 mb-6 leading-relaxed transition-opacity duration-500 text-center italic text-base ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}>
                    "{testimonial.quote.length > 120 ? `${testimonial.quote.substring(0, 120)}...` : testimonial.quote}"
                  </p>
                  
                  {/* Author info for non-expanded state */}
                  <div className={`text-center transition-opacity duration-500 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}>
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="text-xs text-[#91C499] font-medium">{testimonial.role}</p>
                    <p className="text-xs text-gray-400 mt-1">{testimonial.company}</p>
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden relative z-10 ${
                    isActive ? "max-h-[1000px] opacity-100 -mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 mb-6 leading-relaxed text-center italic text-base">
                    "{testimonial.quote.length > 120 ? testimonial.quote : ""}"
                  </p>

                  <div className="space-y-2 mb-6">
                    {testimonial.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                        <div className="w-5 h-5 bg-gradient-to-r from-[#91C499] to-[#1A6262] rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs text-gray-300 font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700/50 pt-4">
                    <div className="text-center">
                      <p className="font-semibold text-white text-base">{testimonial.author}</p>
                      <p className="text-sm text-[#91C499] font-medium">{testimonial.role}</p>
                      <p className="text-xs text-gray-400 mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
