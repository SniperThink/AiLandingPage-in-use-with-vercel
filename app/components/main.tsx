"use client"

import Header from "@/app/components/sections/Header"
import Hero from "@/app/components/sections/Hero"
import AnimatedMetrics from "@/app/components/sections/AnimatedMetrics"
import AnalyticsDashboard from "@/app/components/sections/AnalyticsDashboard"
import FeaturesCarousel from "@/app/components/sections/FeaturesCarousel"
import { TestimonialSection } from "@/app/components/sections/Testimonials"
import { FAQSection } from "@/app/components/sections/FAQ"
import { Footer } from "@/app/components/sections/Footer"
import { CTA } from "@/app/components/sections/CTA"
import { Process } from "@/app/components/sections/Process"
import Industries from "@/app/components/sections/Industries"
import SniperThinkSection from "@/app/components/sections/SniperThinkSection";
import "@/app/css/globals.css"
import "@/app/css/styles.css"

export default function AdvancedLandingPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-[clamp(56px,15vw,64px)]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-[#1A6262]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-[#E1A940]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-30 h-30 sm:w-60 sm:h-60 bg-[#91C499]/20 rounded-full blur-3xl animate-bounce delay-2000"></div>
      </div>

      <Header />
      <Hero />
      <AnimatedMetrics />
      <AnalyticsDashboard />
      <FeaturesCarousel />
      <SniperThinkSection />
      <Process />
      <Industries />
      <TestimonialSection />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  )
}

