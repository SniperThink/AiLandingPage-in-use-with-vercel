import { processSteps } from "@/data/processSteps";
import { Brain, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export const Process = () => {
    // All hooks must be at the top of the component
    const [currentStep, setCurrentStep] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Touch event handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const swipeDistance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                nextStep(); // Swipe left
            } else {
                prevStep(); // Swipe right
            }
        }
    };

    // Auto-play process steps
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentStep((prev) => (prev + 1) % processSteps.length)
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [isAutoPlaying])

    const handleStepClick = (stepIndex: number) => {
        setCurrentStep(stepIndex)
        setIsAutoPlaying(false)
        // Resume autoplay after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000)
    }

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % processSteps.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 10000)
    };

    const renderStepVisual = (visual: string) => {
        switch (visual) {
            case "greeting":
                return (
                    <div className="space-y-3 xs:space-y-4 w-full max-w-sm">
                        <div className="bg-gray-600 rounded-lg p-3 xs:p-4 animate-slideInLeft">
                            <p className="text-white text-xs xs:text-sm">👋 Welcome to SniperThink!</p>
                        </div>
                        <div className="bg-[#1A6262] rounded-lg p-3 xs:p-4 ml-6 xs:ml-8 animate-slideInRight delay-500">
                            <p className="text-white text-xs xs:text-sm">How can I help you today?</p>
                        </div>
                    </div>
                )
            case "intent":
                return (
                    <div className="relative">
                        <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 border-4 border-[#91C499] rounded-full flex items-center justify-center animate-pulse mx-auto">
                            <Brain className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-[#91C499]" />
                        </div>
                        <div className="mt-3 xs:mt-4 text-center text-white">
                            <p className="text-xs xs:text-sm animate-pulse">Analyzing user intent...</p>
                        </div>
                    </div>
                )
            case "qualify":
                return (
                    <div className="space-y-2 xs:space-y-3 w-full max-w-sm">
                        <div className="flex items-center justify-between p-2.5 xs:p-3 bg-gray-700 rounded-lg">
                            <span className="text-white text-xs xs:text-sm">Lead Score</span>
                            <span className="text-[#E1A940] font-bold text-xs xs:text-sm">85%</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 xs:p-3 bg-gray-700 rounded-lg">
                            <span className="text-white text-xs xs:text-sm">Budget Range</span>
                            <span className="text-green-400 font-bold text-xs xs:text-sm">$10K+</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 xs:p-3 bg-gray-700 rounded-lg">
                            <span className="text-white text-xs xs:text-sm">Timeline</span>
                            <span className="text-blue-400 font-bold text-xs xs:text-sm">Q1 2024</span>
                        </div>
                    </div>
                )
            case "action":
                return (
                    <div className="text-center">
                        <div className="w-20 h-20 xs:w-24 xs:h-24 bg-gradient-to-r from-[#FF6700] to-[#E1A940] rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 animate-bounce">
                            <CheckCircle className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white" />
                        </div>
                        <p className="text-white font-medium text-sm xs:text-base">Demo Scheduled!</p>
                        <p className="text-gray-400 text-xs xs:text-sm mt-1 xs:mt-2">Calendar invite sent</p>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <section id="process" className="py-8 xs:py-10 sm:py-12 lg:py-16 xl:py-20">
            <div className="max-w-[1280px] mx-auto px-4 xs:px-5 sm:px-6 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-6 xs:mb-8 sm:mb-10">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-white mb-3 xs:mb-4 leading-tight">
                        Our Simple & <span className="italic text-[#91C499]">Smart</span> Process
                    </h2>
                    <p className="text-sm xs:text-base text-gray-400 text-center px-4 xs:px-2 sm:px-0">
                        Everything you need to engage, qualify, and convert leads, all in one flow.
                    </p>
                </div>

                {/* Step Tabs - Mobile Responsive */}
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12 max-w-4xl mx-auto px-2 xs:px-0">
                    {processSteps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => handleStepClick(index)}
                            className={`py-2 xs:py-2.5 sm:py-3 px-2 xs:px-3 sm:px-4 rounded-lg xs:rounded-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg text-xs xs:text-sm touch-target ${currentStep === index
                                    ? "bg-[#2A2A2D] text-white font-semibold border border-white/8 shadow-lg shadow-[#91C499]/20"
                                    : "bg-[#1C1C1E] text-gray-400 hover:text-white hover:bg-[#2A2A2D] hover:border hover:border-[#91C499]/30 hover:shadow-md hover:shadow-[#91C499]/10"
                                }`}
                        >
                            STEP {step.number}
                        </button>
                    ))}
                </div>

                {/* Main Content Grid - Mobile Responsive */}
                <div
                    className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 items-center"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Left Side - Dynamic Visual */}
                    <div className="relative order-2 lg:order-1">
                        <div className="bg-[#1C1C1E] rounded-lg xs:rounded-xl p-3 xs:p-4 md:p-6 shadow-lg border border-gray-800 hover:border-[#91C499]/30 hover:shadow-2xl hover:shadow-[#91C499]/10 transition-all duration-300 hover:scale-[1.02]">
                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-4 xs:mb-5 sm:mb-6">
                                <h3 className="text-white font-semibold text-sm xs:text-base">Process Visualization</h3>
                                <div className="flex space-x-1.5 xs:space-x-2">
                                    <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>

                            {/* Dynamic Content Based on Current Step */}
                            <div className="min-h-[240px] xs:min-h-[280px] sm:min-h-[300px] flex items-center justify-center">
                                {renderStepVisual(processSteps[currentStep].visual)}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Step Content */}
                    <div className="space-y-4 xs:space-y-5 sm:space-y-6 order-1 lg:order-2">
                        <div className="relative">
                            <span className="text-xs xs:text-sm text-gray-400 uppercase tracking-wide">
                                STEP {processSteps[currentStep].number}
                            </span>
                            <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-white mb-2 xs:mb-3 leading-tight">{processSteps[currentStep].title}</h3>
                            <p className="text-sm xs:text-base text-gray-400 max-w-md leading-relaxed">{processSteps[currentStep].description}</p>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex justify-start items-center mt-6 sm:mt-8 gap-4">
                            <button
                                onClick={prevStep}
                                aria-label="Previous"
                                className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center transition-all hover:scale-110 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            
                            <div className="flex space-x-2">
                                {processSteps.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleStepClick(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                                            index === currentStep
                                                ? "bg-[#91C499] scale-125"
                                                : "bg-[#444] hover:bg-[#666]"
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            <button
                                onClick={nextStep}
                                aria-label="Next"
                                className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center transition-all hover:scale-110 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}