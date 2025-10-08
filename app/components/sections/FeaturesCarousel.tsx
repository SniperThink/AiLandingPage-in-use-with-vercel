'use client';

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import {
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Components
import { TwoPanelChat } from "../ui/TwoPanelChat";
import LeadLifecycleTimeline from "../ui/LeadLifecycleTimeline";

const features = [
  {
    category: "Lead Qualification",
    title: "Identify High-Intent Leads Instantly",
    description: "SniperThink agents engage leads in real time and assess their intent, urgency, and interest — so your team spends time only where it counts.",
    metrics: ["Qualifies in live conversation", "Detects urgency and objections", "Flags top leads instantly"],
    button: "Learn More ",
    gradient: "from-[#FF6700] to-[#E1A940]",
    visualization: <TwoPanelChat />
  },
  {
    category: "Chat & Voice Agent",
    title: "Natural Conversations That Convert",
    description: "Our AI agents don’t just chat — they converse. From website messages to inbound voice calls, every response feels human and on-brand.",
    metrics: ["Smart voice + chat support",
  "Multi-turn, contextual dialogue",
  "Seamless handoff when needed"],
    button: "See It in Action ",
    gradient: "from-[#FF6700] to-[#E1A940]"
  },
  {
    category: " Lead Segmentation",
    title: "Auto-Sort Every Lead by Heat",
    description: "Leads are automatically scored and bucketed as hot, warm, or cold — no manual input required.",
    metrics: ["Behaviour-based scoring",
  "Smart tagging logic",
  "Prioritised views for sales"],
    button: "Try It Live ",
    gradient: "from-[#FF6700] to-[#E1A940]"
  },
  {
    category: "Workflow Automation",
    title: "No Reps? No Problem. Let AI Route Leads",
    description: "Let your agent book meetings, respond to FAQs, or notify your team when action is needed. All automated, all in real time.",
    metrics: ["Demo link triggers",
  "Email alerts",
  "Zero-lag lead routing"],
    button: "Automate Now ",
    gradient: "from-[#FF6700] to-[#E1A940]"
  },
  {
    category: "CRM Sync",
    title: " Don’t Miss the Follow-Up Window",
    description: "All lead details, scores, and transcripts are automatically captured and synced to your pipeline — ready when your team is.",
    metrics: ["Auto-generated lead summaries",
"CRM-ready formatting",
"No lead left behind"],
    button: "View Output ",
    gradient: "from-[#FF6700] to-[#E1A940]"
  },
  {
    category: "Agent Performance",
    title: "Know What Works, While It’s Working",
    description: "Track lead trends, engagement rates, and agent impact in real time. No more guesswork — just insight that moves the needle",
    metrics: ["Real-time reporting",
  "Conversion trend tracking",
  "Actionable analytics"],
    button: "Explore Dashboard ",
    gradient: "from-[#FF6700] to-[#E1A940]"
  }
];

export default function FeaturesCarousel() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [extendedFeatures, setExtendedFeatures] = useState<typeof features>([]);
  const [actualIndex, setActualIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Create extended array for smooth circular animation
  useEffect(() => {
    const cloneCount = 1;
    const extended = [
      ...features.slice(-cloneCount), // Clone last feature at beginning
      ...features,
      ...features.slice(0, cloneCount), // Clone first feature at end
    ];
    setExtendedFeatures(extended);
    setActualIndex(cloneCount); // Start at the real first feature
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && !isTransitioning) {
      const interval = setInterval(() => {
        nextFeature();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoScrolling, isTransitioning, actualIndex]);

  const nextFeature = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActualIndex(prev => prev + 1);
    setCurrentFeature(prev => (prev + 1) % features.length);

    // Reset to real features if we've moved past the cloned section
    setTimeout(() => {
      if (actualIndex + 1 >= extendedFeatures.length - 1) {
        setActualIndex(1); // Jump back to real first feature
      }
      setIsTransitioning(false);
    }, 700);
  };

  const prevFeature = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActualIndex(prev => prev - 1);
    setCurrentFeature(prev => (prev - 1 + features.length) % features.length);

    // Reset to real features if we've moved before the cloned section
    setTimeout(() => {
      if (actualIndex - 1 < 1) {
        setActualIndex(extendedFeatures.length - 2); // Jump to real last feature
      }
      setIsTransitioning(false);
    }, 700);
  };

  const goToFeature = (index: number) => {
    if (isTransitioning) return;
    
    setIsAutoScrolling(false);
    setCurrentFeature(index);
    setActualIndex(1 + index);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const pauseAutoScroll = () => {
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        pauseAutoScroll();
        nextFeature(); // Swipe left
      } else {
        pauseAutoScroll();
        prevFeature(); // Swipe right
      }
    }
  };

  return (
  <div id="features" className="py-6 xs:py-8 sm:py-12 lg:py-14 xl:py-20 relative">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 xs:mb-6 sm:mb-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 xs:mb-2 sm:mb-3 px-2">Built to Think, Built to Scale</h2>
          <p className="text-sm xs:text-sm sm:text-base lg:text-lg text-gray-300 px-4 xs:px-2 sm:px-0 leading-relaxed">
            Discover how our AI agents handle the heavy lifting for your business
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden h-[400px] xs:h-[420px] sm:h-[460px] md:h-[440px] lg:h-[420px] xl:h-[460px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={containerRef}
              className={`flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${actualIndex * 100}%)` }}
            >
              {extendedFeatures.map((feature, index) => (
                <div key={`${index}-${feature.title}`} className="w-full flex-shrink-0 px-1 xs:px-2 sm:px-3 lg:px-5 py-1 xs:py-2 sm:py-3 lg:py-5 h-full rounded-2xl">
                  <div className="shadow-2xl max-w-6xl mx-auto bg-white/5 border border-white/10 backdrop-blur-sm h-full rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden">
                    <div className="p-0 h-full">
                      <div className="grid md:grid-cols-2 grid-cols-1 h-full min-h-[360px] xs:min-h-[380px] sm:min-h-[420px] md:min-h-[400px]">
                        {/* Animation Content - Mobile First, Desktop Second */}
                        <div className="relative flex items-center justify-center h-44 xs:h-48 sm:h-56 md:h-full bg-gradient-to-br from-gray-700 to-gray-800 overflow-visible pt-1 xs:pt-2 md:pt-3 md:order-2">
                          <div className="relative w-full h-full flex items-center justify-center p-1 xs:p-2 sm:p-3 lg:p-4">

                            
                            {/* Lead Qualification Animation */}
                            {feature.category === "Lead Qualification" && (
                              <div className="w-full h-full flex items-center justify-center">
                                <Image
                                  src="/images/lead qualification.png"
                                  alt="Lead Qualification Dashboard"
                                  width={400}
                                  height={300}
                                  className="rounded-xl sm:rounded-2xl object-contain w-full h-full max-w-[90%] max-h-[90%]"
                                />
                              </div>
                            )}

                            {/* Chat & Voice Agent Animation */}
                            {feature.category === "Chat & Voice Agent" && (
                              <div className="w-full h-full flex items-center justify-center">
                                <Image
                                  src="/images/chatai.png"
                                  alt="Chat & Voice Agent"
                                  width={400}
                                  height={300}
                                  className="rounded-xl sm:rounded-2xl object-contain w-full h-full max-w-[90%] max-h-[90%]"
                                />
                              </div>
                            )}

                            {/* Lead Segmentation Animation */}
                            {feature.category === " Lead Segmentation" && (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="flex items-center justify-center w-full h-full">
                                  <Image
                                    src="/images/auto sorting.png"
                                    alt="Lead Segmentation Auto Sorting"
                                    width={400}
                                    height={300}
                                    className="rounded-xl sm:rounded-2xl object-contain mx-auto my-auto max-w-[90%] max-h-[90%]"
                                  />
                                </div>
                              </div>
                            )}

                            {/* Workflow Automation Animation */}
                            {feature.category === "Workflow Automation" && (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="flex items-center justify-center w-full h-full">
                                  <Image
                                    src="/images/workflowintelligence.svg"
                                    alt="Workflow Automation Intelligence"
                                    width={400}
                                    height={300}
                                    className="rounded-xl sm:rounded-2xl object-contain mx-auto my-auto max-w-[90%] max-h-[90%] contrast-125 brightness-110"
                                  />
                                </div>
                              </div>
                            )}

                            {/* CRM Sync Animation */}
                            {feature.category === "CRM Sync" && (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="flex items-center justify-center w-full h-full">
                                  <Image
                                    src="/images/crm.png"
                                    alt="CRM Sync"
                                    width={450}
                                    height={340}
                                    className="rounded-xl sm:rounded-2xl object-contain mx-auto my-auto max-w-[90%] max-h-[90%]"
                                  />
                                </div>
                              </div>
                            )}

                            {/* Agent Performance Animation */}
                            {feature.category === "Agent Performance" && (
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="flex items-center justify-center w-full h-full">
                                  <Image
                                    src="/images/agentperformance.svg"
                                    alt="Agent Performance Dashboard"
                                    width={400}
                                    height={300}
                                    className="rounded-xl sm:rounded-2xl object-contain mx-auto my-auto max-w-[90%] max-h-[90%] contrast-125 brightness-110"
                                  />
                                </div>
                              </div>
                            )}

                            {/* Intelligence Animation */}
                            {feature.category === "Intelligence" && (
                              <div className="w-full h-full flex items-center justify-center">
                                <LeadLifecycleTimeline />
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Textual Content - Mobile Second, Desktop First */}
                        <div className="p-2 xs:p-3 sm:p-5 md:p-4 lg:p-5 xl:p-6 flex flex-col justify-center h-full bg-gradient-to-br from-gray-800 to-gray-900 md:order-1 min-h-[200px] xs:min-h-[220px] sm:min-h-[260px] md:min-h-[200px] overflow-y-auto">
                          <div className="w-fit mb-1 xs:mb-2 md:mb-3 bg-[#1A6262]/20 text-[#91C499] px-2 xs:px-2.5 py-0.5 xs:py-1 border border-[#1A6262]/30 rounded-full text-xs">
                            {feature.category}
                          </div>
                          <h3 className="text-sm xs:text-base sm:text-xl md:text-xl lg:text-2xl font-bold mb-1 xs:mb-2 md:mb-3 lg:mb-4 text-white leading-tight">{feature.title}</h3>
                          <p className="text-gray-300 mb-2 xs:mb-3 md:mb-4 lg:mb-5 text-xs sm:text-sm md:text-base leading-relaxed">{feature.description}</p>
                          <div className="space-y-0.5 xs:space-y-1 md:space-y-2 mb-2 xs:mb-3 md:mb-4 lg:mb-5">
                            {feature.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="flex items-start space-x-1.5 xs:space-x-2">
                                <CheckCircle className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#91C499] flex-shrink-0 mt-0.5" />
                                <span className="text-xs md:text-sm text-gray-200 leading-relaxed">{metric}</span>
                              </div>
                            ))}
                          </div>
                          <button
                            className={`bg-gradient-to-r ${feature.gradient} text-white w-fit px-2.5 xs:px-3 md:px-4 lg:px-5 py-1 xs:py-1.5 md:py-2.5 text-xs md:text-sm lg:text-base rounded-md xs:rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-200 flex items-center shadow-lg`}
                          >
                            {feature.button} <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-4 md:h-4 ml-1 xs:ml-1.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls - Mobile Optimized */}
          <div className="flex justify-center items-center mt-4 xs:mt-6 sm:mt-8 gap-3 xs:gap-4 px-4">
            <button
              onClick={() => {
                pauseAutoScroll();
                prevFeature();
              }}
              disabled={isTransitioning}
              aria-label="Previous"
              className="w-8 h-8 xs:w-10 xs:h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center transition-all hover:scale-110 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            >
              <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
            </button>
            
            <div className="flex space-x-1.5 xs:space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToFeature(index)}
                  disabled={isTransitioning}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full transition-all duration-200 touch-manipulation ${
                    index === currentFeature
                      ? "bg-[#91C499] scale-125"
                      : "bg-[#444] hover:bg-[#666]"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => {
                pauseAutoScroll();
                nextFeature();
              }}
              disabled={isTransitioning}
              aria-label="Next"
              className="w-8 h-8 xs:w-10 xs:h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center transition-all hover:scale-110 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
            >
              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}