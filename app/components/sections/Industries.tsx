import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  GraduationCap,
  DollarSign,
  Home,
  Heart,
  ShoppingBag,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const cards = [
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "EdTech",
    subtitle: "Universities, Online Learning, Coaching",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/20 via-[#91C499]/10 to-[#1A6262]/20",
    iconBg: "from-[#1A6262] to-[#91C499]",
    description:
      "Respond instantly to course queries, onboard students, manage applications, and guide them through every step — without human bottlenecks.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Finance",
    subtitle: "Lending, insurance, Advisory",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/20 via-[#91C499]/10 to-[#1A6262]/20",
    iconBg: "from-[#1A6262] to-[#91C499]",
    description:
      "Qualify prospects, respond to policy questions, trigger onboarding steps, and simplify complex workflows with intelligent, compliant agents",
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Real Estate",
    subtitle: "Residential, Commercial, PropTech",
    description:
      "Engage buyers and renters, qualify leads, schedule site visits, and share listings — all before your team even picks up the phone.",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/20 via-[#91C499]/10 to-[#1A6262]/20",
    iconBg: "from-[#1A6262] to-[#91C499]",
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "Clinics & Healthcare",
    subtitle: "Diagnostics, OPD, Mental Health",
    description:
      "Automate appointment booking, send test updates, answer FAQs, and free up staff time — while giving patients 24/7 access to support.",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/20 via-[#91C499]/10 to-[#1A6262]/20",
    iconBg: "from-[#1A6262] to-[#91C499]",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    title: "D2C Brands",
    subtitle: "Ecommerce, Beauty, Fashion, Wellness",
    description:
      "Turn browsers into buyers. Solve product questions, assist with orders, and recover carts — all with real-time, branded conversations.",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/20 via-[#91C499]/10 to-[#1A6262]/20",
    iconBg: "from-[#1A6262] to-[#91C499]",
  },
  {
    icon: <Building className="w-8 h-8 text-white" />,
    title: "Enterprise",
    subtitle: "SaaS, Agencies, Services",
    description:
      "Deploy agents across customer support, sales, and operations. Qualify leads, route them, and keep your team focused on high-value tasks.",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/20 via-[#91C499]/10 to-[#1A6262]/20",
    iconBg: "from-[#1A6262] to-[#91C499]",
  },
];

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Simple mobile-first responsive logic
  const getCardsPerView = () => {
    if (!isClient) return 1; // Always return 1 on server to match initial client render
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(1); // Start with 1 to match server

  useEffect(() => {
    setIsClient(true);
    setCardsPerView(getCardsPerView());

    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = !isClient ? Math.max(0, cards.length - 1) : Math.max(0, cards.length - cardsPerView);

  // Infinite carousel logic
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % cards.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
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
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const getTransform = () => {
    if (cardsPerView === 1) {
      return `translateX(-${currentIndex * 100}%)`;
    }
    const cardWidth = 100 / cardsPerView;
    return `translateX(-${currentIndex * cardWidth}%)`;
  };

  return (
    <section id="industries" className="py-8 sm:py-12 lg:py-16 xl:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A6262]/20 to-[#91C499]/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-[#1A6262]/30">
            <CheckCircle className="w-4 h-4 text-[#91C499]" />
            <span className="text-[#91C499] font-medium text-sm sm:text-base">Industry Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Built for Industries That Need{" "}
            <span className="bg-gradient-to-r from-[#1A6262] to-[#91C499] bg-clip-text text-transparent">
              Speed, Scale & Smart Support
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#D1D1D1] max-w-3xl mx-auto">
            Automate conversations throughout the entire customer journey.
          </p>
        </div>

        {/* Mobile-First Carousel */}
        <div className="relative">
          <div 
            className="overflow-hidden rounded-xl sm:rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={`flex transition-transform duration-300 ease-out ${
                !isClient || cardsPerView === 1 ? 'gap-0' : 'gap-4 md:gap-6'
              }`}
              style={{ transform: getTransform() }}
            >
              {cards.map((card, index) => (
                <div 
                  key={`${card.title}-${index}`}
                  className={`
                    flex-shrink-0 
                    ${!isClient || cardsPerView === 1 ? 'w-full px-4' : 'w-1/2 md:w-1/3'}
                  `}
                >
                  <div className="bg-[#111] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 relative group transition-all duration-300 border border-[#222] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#91C499]/5 hover:border-[#91C499]/15 hover:-translate-y-1 cursor-pointer h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-xl sm:rounded-2xl pointer-events-none group-hover:opacity-60 transition-opacity duration-300`}></div>
                    <div className="relative z-10 h-full flex flex-col min-h-[240px] sm:min-h-[260px]">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${card.iconBg} rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-105 transition-all duration-300`}>
                        {React.cloneElement(card.icon, { 
                          className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" 
                        })}
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">{card.title}</h3>
                      {card.subtitle && (
                        <p className={`text-sm ${card.subtitleColor} mb-3 sm:mb-4 font-medium`}>{card.subtitle}</p>
                      )}
                      <p className="text-[#D1D1D1] text-sm sm:text-base leading-relaxed flex-grow">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-6 sm:mt-8 gap-4">
            <button
              onClick={prevSlide}
              disabled={!isClient || isTransitioning}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center transition-all hover:scale-110 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex space-x-2">
              {isClient && cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-[#91C499] scale-125" : "bg-[#444] hover:bg-[#666]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={!isClient || isTransitioning}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center transition-all hover:scale-110 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}