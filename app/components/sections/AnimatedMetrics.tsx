import useCountUp from "../../../hooks/useCountUp";
import React, { useState, useEffect } from "react";

export const AnimatedMetrics: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Ensure client-side rendering consistency
  useEffect(() => {
    setIsClient(true);
  }, []);

  const revenueCount = useCountUp(200, 2500, "%");
  const speedCount = useCountUp(4, 2000, "X");
  const leadsCount = useCountUp(73, 2200, "%");
  const usersCount = useCountUp(10, 1800, "K+");

  // Show final values during SSR to prevent 0 flash
  const displayValues = isClient ? {
    revenue: revenueCount.count || 200,
    speed: speedCount.count || 4,
    leads: leadsCount.count || 73,
    users: usersCount.count || 10
  } : {
    revenue: 200,
    speed: 4,
    leads: 73,
    users: 10
  };

  return (
    <section id="animated-metrics" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Revenue Growth */}
          <div
            ref={isClient ? revenueCount.ref : undefined}
            className="text-center transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2 text-[#E1A940]">
              {displayValues.revenue}%
            </div>
            <div className="text-sm md:text-lg text-gray-300">
              Lead Qualification Boost
            </div>
          </div>

          {/* Speed to Market */}
          <div
            ref={isClient ? speedCount.ref : undefined}
            className="text-center transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2 text-[#E1A940]">
              {displayValues.speed}X
            </div>
            <div className="text-sm md:text-lg text-gray-300">
              Higher Sales Conversions
            </div>
          </div>

          {/* New Leads */}
          <div
            ref={isClient ? leadsCount.ref : undefined}
            className="text-center transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2 text-[#E1A940]">
              {displayValues.leads}%
            </div>
            <div className="text-sm md:text-lg text-gray-300">
              Less Manual Work
            </div>
          </div>

          {/* Active Users */}
          <div
            ref={isClient ? usersCount.ref : undefined}
            className="text-center transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2 text-[#E1A940]">
              {displayValues.users}K+
            </div>
            <div className="text-sm md:text-lg text-gray-300">
              Conversations Handled
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedMetrics;
