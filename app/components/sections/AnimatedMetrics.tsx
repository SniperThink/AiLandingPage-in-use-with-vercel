"use client";

import useCountUp from "../../../hooks/useCountUp";
import React from "react";

export const AnimatedMetrics: React.FC = () => {
  const revenueCount = useCountUp(200, 2500);
  const speedCount = useCountUp(4, 2000);
  const leadsCount = useCountUp(73, 2200);
  const usersCount = useCountUp(10, 1800);

  return (
    <section id="animated-metrics" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Revenue Growth */}
          <div
            ref={revenueCount.ref}
            className="text-center transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2 text-[#E1A940]">
              {revenueCount.count}%
            </div>
            <div className="text-sm md:text-lg text-gray-300">
              Lead Qualification Boost
            </div>
          </div>

          {/* Speed to Market */}
          <div
            ref={speedCount.ref}
            className="text-center transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2 text-[#E1A940]">
              {speedCount.count}X
            </div>
            <div className="text-sm md:text-lg text-gray-300">
              Higher Sales Conversions
            </div>
          </div>

          {/* New Leads */}
          <div
            ref={leadsCount.ref}
            className="text-center transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2 text-[#E1A940]">
              {leadsCount.count}%
            </div>
            <div className="text-sm md:text-lg text-gray-300">
              Less Manual Work
            </div>
          </div>

          {/* Active Users */}
          <div
            ref={usersCount.ref}
            className="text-center transform hover:scale-110 transition-all duration-300"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2 text-[#E1A940]">
              {usersCount.count}K+
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
