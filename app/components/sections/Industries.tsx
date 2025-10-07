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
    subtitle: "Colleges & Universities",
    subtitleColor: "text-[#1A6262]",
    gradient: "from-[#1A6262]/30 via-transparent to-[#91C499]/20",
    iconBg: "from-[#1A6262] to-[#91C499]",
    shadow: "shadow-[0_0_50px_rgba(26,98,98,0.3)]",
    description:
      "Automate admissions, student FAQs, event queries, and campus communications.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Finance",
    subtitle: "Insurance, Lending & Advisory",
    subtitleColor: "text-[#E1A940]",
    gradient: "from-[#E1A940]/30 via-transparent to-[#FF6700]/20",
    iconBg: "from-[#E1A940] to-[#FF6700]",
    shadow: "shadow-[0_0_50px_rgba(225,169,64,0.3)]",
    description:
      "Speed up quote generation, claims processing, onboarding, and document delivery.",
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Real Estate",
    subtitle: "",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/30 via-transparent to-[#1A6262]/20",
    iconBg: "from-[#91C499] to-[#1A6262]",
    shadow: "shadow-[0_0_50px_rgba(145,196,153,0.3)]",
    description:
      "Handle property inquiries, lead follow-ups, appointment bookings, and status updates.",
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "Clinics & Healthcare",
    subtitle: "",
    subtitleColor: "text-[#FF6700]",
    gradient: "from-[#FF6700]/30 via-transparent to-[#E1A940]/20",
    iconBg: "from-[#FF6700] to-[#E1A940]",
    shadow: "shadow-[0_0_50px_rgba(255,103,0,0.3)]",
    description:
      "Automate appointment booking, test result dispatch, patient reminders, and FAQ handling.",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    title: "D2C Brands",
    subtitle: "",
    subtitleColor: "text-[#1A6262]",
    gradient: "from-[#1A6262]/30 via-[#E1A940]/10 to-[#FF6700]/20",
    iconBg: "from-[#1A6262] to-[#E1A940]",
    shadow: "shadow-[0_0_50px_rgba(26,98,98,0.2)]",
    description:
      "Offer instant product support, return tracking, WhatsApp updates, and customer query resolution.",
  },
  {
    icon: <Building className="w-8 h-8 text-white" />,
    title: "Enterprise",
    subtitle: "Large Organizations",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/30 via-transparent to-[#FF6700]/20",
    iconBg: "from-[#91C499] to-[#FF6700]",
    shadow: "shadow-[0_0_50px_rgba(145,196,153,0.3)]",
    description:
      "Scale customer support, automate internal processes, and enhance team productivity across departments.",
  },
];

export default function Industries() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const cardsPerGroup = 3;
  const totalGroups = Math.ceil(cards.length / cardsPerGroup);

  const scrollToGroup = (groupIndex: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Clamp the group index
    const targetGroup = Math.max(0, Math.min(groupIndex, totalGroups - 1));

    // Update state immediately for instant visual feedback
    setCurrentGroup(targetGroup);

    // Calculate scroll position based on the container's scroll width
    const containerWidth = container.offsetWidth;
    const scrollLeft = targetGroup * containerWidth;

    // Perform smooth scroll
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  };

  const nextGroup = () => {
    if (currentGroup < totalGroups - 1) {
      scrollToGroup(currentGroup + 1);
    }
  };

  const prevGroup = () => {
    if (currentGroup > 0) {
      scrollToGroup(currentGroup - 1);
    }
  };

  // Scroll tracking effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Debounce the scroll calculation
      scrollTimeout = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;

        // Calculate which group is most visible
        const scrollPercentage = scrollLeft / containerWidth;
        const groupIndex = Math.round(scrollPercentage);

        // Clamp the value between 0 and totalGroups - 1
        const clampedIndex = Math.max(0, Math.min(groupIndex, totalGroups - 1));
        setCurrentGroup(clampedIndex);
      }, 50);
    };

    // Set initial state
    setCurrentGroup(0);

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimeout);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [totalGroups]);

  // Auto-scroll effect
  useEffect(() => {
    // Clear any existing interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }

    // Only start auto-scroll if not hovered
    if (!isHovered) {
      autoScrollIntervalRef.current = setInterval(() => {
        const nextGroup = (currentGroup + 1) % totalGroups;
        scrollToGroup(nextGroup);
      }, 3000); // Scroll every 3 seconds
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, [isHovered, currentGroup, totalGroups, scrollToGroup]);

  return (
    <section id="industries" className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A6262]/20 to-[#91C499]/20 rounded-full px-4 py-1.5 mb-4 border border-[#1A6262]/30">
            <CheckCircle className="w-4 h-4 text-[#91C499]" />
            <span className="text-[#91C499] font-medium text-sm">Industry Solutions</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
            Built for Industries That Need{" "}
            <span className="bg-gradient-to-r from-[#1A6262] to-[#91C499] bg-clip-text text-transparent">
              Speed, Scale & Smart Support
            </span>
          </h2>
          <p className="text-base text-[#D1D1D1] max-w-2xl mx-auto">
            Automate conversations throughout the entire customer journey.
          </p>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div
          className="relative overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto overflow-y-visible pb-8 pt-2 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollSnapType: "x mandatory"
            }}
          >
            {Array.from({ length: totalGroups }).map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="flex-shrink-0 w-full flex gap-6 px-4 py-4 snap-start"
              >
                {cards.slice(groupIndex * cardsPerGroup, (groupIndex + 1) * cardsPerGroup).map((card, cardIndex) => (
                  <div
                    key={`${card.title}-${groupIndex}-${cardIndex}`}
                    className="flex-1 min-w-0 h-[400px] bg-[#111] rounded-[20px] p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-[20px]`}></div>
                    <div className={`absolute inset-0 ${card.shadow} rounded-[20px]`}></div>
                    <div className="relative z-10 h-full flex flex-col">
                      <div className={`w-16 h-16 bg-gradient-to-r ${card.iconBg} rounded-full flex items-center justify-center mb-8 shadow-lg`}>
                        {React.cloneElement(card.icon, {
                          className: "w-8 h-8 text-white"
                        })}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                      {card.subtitle && (
                        <p className={`text-sm ${card.subtitleColor} mb-4 font-medium`}>{card.subtitle}</p>
                      )}
                      <p className="text-[#D1D1D1] text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Controls with Progress Dots */}
          <div className="flex justify-center items-center mt-6 gap-4">
            {/* Left Arrow Button */}
            <button
              onClick={prevGroup}
              disabled={currentGroup === 0}
              aria-label="Previous group"
              className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center transition-all hover:scale-110 hover:border-[#91C499]/40 hover:bg-[#1A6262]/20 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:border-white/20 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Progress Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToGroup(index)}
                  aria-label={`Go to group ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentGroup ? "bg-[#91C499] scale-125" : "bg-[#444] hover:bg-[#666]"
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={nextGroup}
              disabled={currentGroup === totalGroups - 1}
              aria-label="Next group"
              className="w-10 h-10 rounded-full border border-white/20 bg-transparent flex items-center justify-center transition-all hover:scale-110 hover:border-[#91C499]/40 hover:bg-[#1A6262]/20 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:border-white/20 disabled:hover:bg-transparent"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}