import { ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "../ui/button";
import { faqs } from "@/data/faqs";
import { useState } from "react";
import { motion } from "framer-motion";


export const FAQSection: React.FC = () => {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0)
    const toggleFAQ = (index: number) => {
        setExpandedFAQ(expandedFAQ === index ? null : index)
    }
    return (
        <section id="faq" className="pt-20 mt-16">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                    {/* Left Column - Still Have Questions Card */}
                    <motion.div
                        className="lg:col-span-1 h-full self-stretch"
                        initial={{ opacity: 0, x: -50, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.3, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                    >
                        <div className="bg-white/2 border border-white/8 p-8 rounded-[20px] flex flex-col items-center text-center h-full">
                            {/* Icon Box */}
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#1A6262] to-[#91C499] flex items-center justify-center mb-4">
                                <HelpCircle className="w-6 h-6 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white mb-2">Still Curious?</h3>

                            {/* Description */}
                            <p className="text-sm text-[#A1A1AA] mb-5">
                                {"Got questions? Our team’s listening."}
                            </p>

                            {/* CTA Button */}
                            <a
                                href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1C1C1E] text-white font-medium px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center justify-center transform hover:scale-105 duration-300"
                            >
                                Ask A Question <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - FAQ Accordion */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2, margin: "-30px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                    >
                        <div className="flex flex-col gap-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white/2 border border-white/8 rounded-xl p-5 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/4"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex justify-between items-center w-full text-left"
                                        aria-expanded={expandedFAQ === index}
                                    >
                                        <span className="text-base font-medium text-white pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedFAQ === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Answer with smooth height transition */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">{faq.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}