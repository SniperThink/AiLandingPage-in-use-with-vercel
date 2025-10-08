import React, { useState, useEffect } from "react";
import { Zap, MessageCircle, Phone, Send, Mic, VolumeX, Camera, Paperclip, Smile } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const [activeAgent, setActiveAgent] = useState<"chat" | "call">("chat");
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <section id="home" className="relative px-4 sm:px-6 lg:px-8 min-h-screen max-h-screen overflow-hidden flex items-center py-4">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A6262]/20 to-[#91C499]/20 rounded-full px-4 sm:px-5 py-1.5 mb-3 sm:mb-4 border border-[#1A6262]/30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#E1A940]" />
              <span className="text-[#91C499] font-medium text-sm sm:text-base">{"Your 24/7 AI Agent is here"}</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-5 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                className="bg-gradient-to-r from-[#1A6262] via-[#91C499] to-[#E1A940] bg-clip-text text-transparent drop-shadow-2xl block mb-1 py-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Say&nbsp;Hello
              </motion.span>
              <motion.span
                className="text-white block mb-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                To Your Smartest
              </motion.span>
              <motion.span
                className="text-white block mb-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Sales Assistant
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-lg text-gray-300 mb-5 sm:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {"Deploy voice and chat agents that understand context, qualify leads, and trigger actions — all without a human in the loop. Work smarter, close faster, and never miss a lead."}
            </motion.p>

            {/* Agent Type Toggle */}
            <motion.div
              className="flex justify-center lg:justify-start mb-4 sm:mb-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="bg-white/5 rounded-2xl p-1.5 sm:p-2 shadow-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex space-x-1 sm:space-x-2">
                  <Button
                    onClick={() => setActiveAgent("chat")}
                    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${activeAgent === "chat"
                        ? "bg-gradient-to-r from-[#1A6262] to-[#91C499] text-white shadow-lg"
                        : "bg-transparent text-gray-300 hover:bg-gray-700/50"
                      }`}
                  >
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden xs:inline">Chat Agent</span>
                    <span className="xs:hidden">Chat</span>
                  </Button>
                  <Button
                    onClick={() => setActiveAgent("call")}
                    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${activeAgent === "call"
                        ? "bg-gradient-to-r from-[#E1A940] to-[#FF6700] text-white shadow-lg"
                        : "bg-transparent text-gray-300 hover:bg-gray-700/50"
                      }`}
                  >
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden xs:inline">Voice Agent</span>
                    <span className="xs:hidden">Voice</span>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-3 justify-center lg:justify-start px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <a
                href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 sm:px-7 py-3 sm:py-3.5 text-base sm:text-base rounded-[2rem] w-full sm:w-auto touch-target inline-flex items-center justify-center gap-2 font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Book an Audit Call
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Mobile Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          >
            <div className="relative scale-[0.7] sm:scale-80 lg:scale-95">
              {/* Phone Frame - Mobile Interface */}
              <div className="relative w-64 xs:w-72 sm:w-80 lg:w-72 xl:w-80 h-[460px] xs:h-[500px] sm:h-[580px] lg:h-[540px] xl:h-[580px] bg-black rounded-[3rem] p-2.5 shadow-2xl transform rotate-2 xs:rotate-3 sm:rotate-6 hover:rotate-1 sm:hover:rotate-3 transition-transform duration-500">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative border border-gray-700">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-3 bg-gray-800">
                    <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-white">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-0.5">
                        <div className="w-0.5 xs:w-1 h-0.5 xs:h-1 bg-white rounded-full"></div>
                        <div className="w-0.5 xs:w-1 h-0.5 xs:h-1 bg-white rounded-full"></div>
                        <div className="w-0.5 xs:w-1 h-0.5 xs:h-1 bg-white rounded-full"></div>
                        <div className="w-0.5 xs:w-1 h-0.5 xs:h-1 bg-gray-500 rounded-full"></div>
                      </div>
                      <div className="w-4 xs:w-5 sm:w-6 h-2 xs:h-2.5 sm:h-3 border border-white rounded-sm">
                        <div className="w-2.5 xs:w-3 sm:w-4 h-0.5 sm:h-1 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 flex flex-col h-full">
                    {activeAgent === "chat" ? (
                      // Chat Interface - Optimized for full height usage with proper flex layout
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center space-x-2 xs:space-x-3 px-2 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 border-b border-gray-700 bg-gray-850 flex-shrink-0">
                          <div className="w-6 xs:w-8 sm:w-10 h-6 xs:h-8 sm:h-10 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white text-xs xs:text-sm sm:text-base">SniperThink AI</h3>
                            <p className="text-[9px] xs:text-[10px] sm:text-xs text-green-400">Online • Always here to help</p>
                          </div>
                          <div className="flex space-x-2">
                            <Phone className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 text-gray-400" />
                            <svg className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </div>
                        </div>

                        {/* Messages Area - Reduced to accommodate keyboard bottom padding */}
                        <div className="overflow-y-auto px-2 xs:px-3 sm:px-4 py-2 xs:py-3 space-y-2 xs:space-y-2.5 sm:space-y-3 max-h-[150px] xs:max-h-[170px] sm:max-h-[240px] lg:max-h-[200px] xl:max-h-[240px]">
                          {/* Welcome Message */}
                          <div className="flex justify-start">
                            <div className="bg-gray-700/80 rounded-xl xs:rounded-2xl rounded-tl-sm px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 max-w-[75%]">
                              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-100">Hello! I'm your AI assistant. How can I help you today?</p>
                              <p className="text-[8px] xs:text-[9px] sm:text-xs text-gray-400 mt-1">9:41 AM</p>
                            </div>
                          </div>

                          {/* User Message */}
                          <div className="flex justify-end">
                            <div className="bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-xl xs:rounded-2xl rounded-tr-sm px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 max-w-[75%]">
                              <p className="text-[10px] xs:text-xs sm:text-sm text-white">I need help understanding your pricing plans</p>
                              <p className="text-[8px] xs:text-[9px] sm:text-xs text-white/70 mt-1">9:42 AM</p>
                            </div>
                          </div>

                          {/* AI Response */}
                          <div className="flex justify-start">
                            <div className="bg-gray-700/80 rounded-xl xs:rounded-2xl rounded-tl-sm px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 max-w-[75%]">
                              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-100">
                                I'd be happy to explain our pricing! We offer flexible plans tailored to your business needs.
                              </p>
                              <p className="text-[8px] xs:text-[9px] sm:text-xs text-gray-400 mt-1">9:42 AM</p>
                            </div>
                          </div>

                          {/* Another User Message */}
                          <div className="flex justify-end">
                            <div className="bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-xl xs:rounded-2xl rounded-tr-sm px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 max-w-[75%]">
                              <p className="text-[10px] xs:text-xs sm:text-sm text-white">What's included in the starter plan?</p>
                              <p className="text-[8px] xs:text-[9px] sm:text-xs text-white/70 mt-1">9:43 AM</p>
                            </div>
                          </div>

                          {/* Typing indicator */}
                          <div className="flex justify-start">
                            <div className="bg-gray-700/80 rounded-xl xs:rounded-2xl rounded-tl-sm px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5">
                              <div className="flex space-x-1">
                                <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                                <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                                <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Input Area with Attachments - Reduced padding */}
                        <div className="border-t border-gray-700/50 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 bg-gray-850 flex-shrink-0">
                          <div className="flex items-center space-x-1.5 xs:space-x-2">
                            <Paperclip className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-gray-400 flex-shrink-0" />
                            <Camera className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-gray-400 flex-shrink-0" />
                            <div className="flex-1 bg-gray-700/50 rounded-full px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 flex items-center">
                              <p className="text-[10px] xs:text-xs sm:text-sm text-gray-400 flex-1">Type a message...</p>
                              <Smile className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 text-gray-400 ml-2" />
                            </div>
                            <div className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-full flex items-center justify-center flex-shrink-0">
                              <Send className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Dark Theme Keyboard - Shifted upward */}
                        <div className="bg-gray-800/95 backdrop-blur-sm flex-shrink-0 -mt-0.5">
                          {/* Main Keyboard - Optimized for container fit */}
                          <div className="px-1 pt-0.5 pb-0 space-y-0.5">
                            {/* First Row - QWERTYUIOP */}
                            <div className="flex gap-0.5">
                              {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
                                <div key={key} className="bg-gray-700 hover:bg-gray-600 transition-colors shadow-sm rounded-md flex-1 py-1.5 text-center cursor-pointer min-h-[28px] flex items-center justify-center">
                                  <span className="text-[10px] text-gray-200 font-normal">{key}</span>
                                </div>
                              ))}
                            </div>

                            {/* Second Row - ASDFGHJKL */}
                            <div className="flex gap-0.5 px-2">
                              {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
                                <div key={key} className="bg-gray-700 hover:bg-gray-600 transition-colors shadow-sm rounded-md flex-1 py-1.5 text-center cursor-pointer min-h-[28px] flex items-center justify-center">
                                  <span className="text-[10px] text-gray-200 font-normal">{key}</span>
                                </div>
                              ))}
                            </div>

                            {/* Third Row - Shift + ZXCVBNM + Backspace */}
                            <div className="flex gap-0.5">
                              <div className="bg-gradient-to-r from-[#1A6262] to-[#91C499] shadow-sm rounded-lg px-2 py-2 flex items-center justify-center cursor-pointer min-h-[30px]">
                                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 3l-7 7h4v7h6v-7h4l-7-7z"/>
                                </svg>
                              </div>
                              <div className="flex flex-1 gap-0.5">
                                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
                                  <div key={key} className="bg-gray-700 hover:bg-gray-600 transition-colors shadow-sm rounded-md flex-1 py-2 text-center cursor-pointer min-h-[30px] flex items-center justify-center">
                                    <span className="text-[10px] text-gray-200 font-normal">{key}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] shadow-sm rounded-lg px-2 py-2 flex items-center justify-center cursor-pointer min-h-[30px]">
                                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.707 4.293A1 1 0 018 4h5.586A2 2 0 0115 4.586L16.414 6A2 2 0 0117 7.414V14a2 2 0 01-2 2H8a1 1 0 01-.707-.293l-5-5a1 1 0 010-1.414l5-5zM13 10.414l-2.293 2.293a1 1 0 01-1.414-1.414L11.586 9 9.293 6.707a1 1 0 111.414-1.414L13 7.586l2.293-2.293a1 1 0 011.414 1.414L14.414 9l2.293 2.293a1 1 0 01-1.414 1.414L13 10.414z" clipRule="evenodd"/>
                                </svg>
                              </div>
                            </div>

                            {/* Fourth Row - Punctuation */}
                            <div className="flex gap-0.5 px-1">
                              {['.', ',', '?', '!', "'", '"', '-', '(', ')'].map((key) => (
                                <div key={key} className="bg-gray-700 hover:bg-gray-600 transition-colors shadow-sm rounded-md flex-1 py-2 text-center cursor-pointer min-h-[30px] flex items-center justify-center">
                                  <span className="text-[11px] text-gray-300 font-medium">{key}</span>
                                </div>
                              ))}
                            </div>

                            {/* Fifth Row - Special keys and Space (centered spacebar) */}
                            <div className="flex gap-0.5 justify-center">
                              <div className="bg-gray-600 shadow-sm rounded-lg px-2.5 py-2 text-center cursor-pointer min-h-[30px] flex items-center justify-center">
                                <span className="text-[11px] text-gray-300 font-medium">123</span>
                              </div>
                              <div className="bg-gray-600 shadow-sm rounded-lg px-2 py-2 flex items-center justify-center cursor-pointer min-h-[30px]">
                                <svg className="w-3.5 h-3.5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                                </svg>
                              </div>
                              <div className="bg-gray-700 hover:bg-gray-600 transition-colors shadow-sm rounded-lg px-6 py-2 text-center cursor-pointer border border-gray-600 min-h-[30px] flex items-center justify-center">
                                <span className="text-[11px] text-white font-medium">space</span>
                              </div>
                              <div className="bg-gray-700 hover:bg-gray-600 transition-colors shadow-sm rounded-lg px-2 py-2 flex items-center justify-center cursor-pointer min-h-[30px]">
                                <Smile className="w-3.5 h-3.5 text-gray-300" />
                              </div>
                              <div className="bg-gradient-to-r from-[#1A6262] to-[#91C499] hover:from-[#91C499] hover:to-[#1A6262] transition-all shadow-sm rounded-lg px-2.5 py-2 text-center cursor-pointer min-h-[30px] flex items-center justify-center">
                                <span className="text-[11px] text-white font-medium">return</span>
              </div>
                            </div>
                          </div>

                          {/* Home Indicator with reduced bottom padding */}
                          <div className="pb-1.5 xs:pb-2 sm:pb-3 pt-1 flex justify-center">
                            <div className="w-16 xs:w-20 sm:w-24 h-0.5 bg-gray-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Call Interface - Keep existing implementation
                      <div className="h-full flex flex-col items-center justify-center px-4">
                        {/* Call Status */}
                        <div className="text-center mb-6 xs:mb-8">
                          <div className="w-20 xs:w-24 h-20 xs:h-24 bg-gradient-to-r from-[#E1A940] to-[#FF6700] rounded-full flex items-center justify-center mb-3 xs:mb-4 mx-auto animate-pulse">
                            <Phone className="w-10 xs:w-12 h-10 xs:h-12 text-white" />
                          </div>
                          <h3 className="text-base xs:text-lg font-semibold text-white mb-1">SniperThink AI</h3>
                          <p className="text-xs xs:text-sm text-green-400">Connected • 00:42</p>
                        </div>

                        {/* Voice Visualization */}
                        <div className="flex items-center justify-center space-x-1 mb-6 xs:mb-8">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-t from-[#E1A940] to-[#FF6700] rounded-full animate-pulse"
                              style={{
                                width: "3px",
                                height: isClient ? `${16 + Math.sin(i + Date.now() / 1000) * 8}px` : "16px",
                                animationDelay: `${i * 150}ms`,
                              }}
                            ></div>
                          ))}
                        </div>

                        {/* Call Controls */}
                        <div className="flex items-center space-x-4 xs:space-x-6">
                          <div className="w-10 xs:w-12 h-10 xs:h-12 bg-gray-700 rounded-full flex items-center justify-center">
                            <Mic className="w-5 xs:w-6 h-5 xs:h-6 text-gray-300" />
                          </div>
                          <div className="w-10 xs:w-12 h-10 xs:h-12 bg-red-500 rounded-full flex items-center justify-center">
                            <Phone className="w-5 xs:w-6 h-5 xs:h-6 text-white transform rotate-[135deg]" />
                          </div>
                          <div className="w-10 xs:w-12 h-10 xs:h-12 bg-gray-700 rounded-full flex items-center justify-center">
                            <VolumeX className="w-5 xs:w-6 h-5 xs:h-6 text-gray-300" />
                          </div>
                        </div>

                        {/* AI Speaking Indicator */}
                        <div className="mt-6 text-center">
                          <p className="text-xs xs:text-sm text-gray-300">AI is speaking...</p>
                          <p className="text-[10px] xs:text-xs text-gray-500 mt-1">"I can help you with that right away"</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#91C499]/20 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#E1A940]/20 rounded-full animate-bounce delay-2000"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-[#1A6262]/20 rounded-full animate-ping delay-3000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}