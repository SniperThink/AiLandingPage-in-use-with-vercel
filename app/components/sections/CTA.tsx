import { ArrowRight } from "lucide-react";

export const CTA: React.FC = () => {
    return (
        <section id="cta" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
                {/* Top Caption */}
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                    Watch your next customer qualify themselves.
                </p>

                {/* Main CTA Sentence with Embedded Button */}
                <div className="text-2xl sm:text-3xl md:text-5xl font-light text-white leading-snug sm:leading-tight max-w-3xl mx-auto">
                    {/* First Line */}
                    <div className="mb-2">
                        <span>Your next </span>
                        <span className="font-semibold text-[#91C499]">lead</span>
                        <span> is</span>
                    </div>
                    
                    {/* Second Line */}
                    <div className="mb-6">
                        <span>waiting for a </span>
                        <span className="font-semibold text-[#91C499]">conversation</span>
                        <span>.</span>
                    </div>
                    
                    {/* Third Line - Button */}
                    <div className="flex justify-center">
                        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white font-medium text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer min-h-[40px] sm:min-h-[44px]">
                            <span>Get a Demo</span>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black text-white rounded-full flex items-center justify-center">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
