import { ArrowRight, FileText, Workflow, BarChart3, Settings, Brain } from "lucide-react";
import "./SniperThinkSection.css";
import { Button } from "../ui/button";

export default function SniperThinkSection() {
    return (
        <>
            {/* Why Choose SniperThink Section - Updated with Brand Colors and Flip Cards */}
            <section id="why-us" className="pt-16 pb-16">
                <div className="max-w-7xl mx-auto px-4">
                    {/* 2x3 Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {/* Top-left: Heading Block */}
                        <div className="md:col-span-1 flex flex-col justify-center p-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why choose SniperThink?</h2>
                            <p className="text-gray-300 mb-4">
                                {"From fast deployment to full control, here's why teams choose us over the noise."}
                            </p>
                            <a
                                href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#91C499] hover:text-[#1A6262] p-0 font-medium inline-flex items-center transition-all duration-300 hover:translate-x-1"
                            >
                                Discover how SniperThink works <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        {/* Scale Card */}
                        <div className="flip-card transition-all duration-300 ease-in-out">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                                        <FileText className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Scale</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Built to handle 50 or 5,000 chats — without breaking a sweat.
                                    </p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="text-white text-center font-medium">
                                        Designed to perform at any scale, with zero drop in precision.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tone Card */}
                        <div className="flip-card transition-all duration-300 ease-in-out">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#E1A940] to-[#FF6700] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                                        <Workflow className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Tone</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Sounds like you — no scripts, no friction.
                                    </p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="text-white text-center font-medium">
                                        Every reply feels thoughtful, not templated — just like a great rep would.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Signals Card */}
                        <div className="flip-card transition-all duration-300 ease-in-out">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#91C499] to-[#1A6262] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                                        <BarChart3 className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Signals</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Understand trends and act before they slip through the cracks.
                                    </p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="text-white text-center font-medium">
                                        Spots what your CRM misses — timing, tone, and opportunity signals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Ease Card */}
                        <div className="flip-card transition-all duration-300 ease-in-out">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF6700] to-[#E1A940] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                                        <Settings className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Ease</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        All the power of AI, none of the enterprise headaches.
                                    </p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="text-white text-center font-medium">
                                        From signup to live in hours — built for busy teams, not devs
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Focus Card - Highlighted */}
                        <div className="flip-card highlighted transition-all duration-300 ease-in-out">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                                        <Brain className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Focus</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Built for businesses that hate noise.
                                    </p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="text-white text-center font-medium">
                                        Brings signal to the surface so your team never misses a beat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}