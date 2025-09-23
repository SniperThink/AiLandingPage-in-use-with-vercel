import React, { useState, useEffect } from "react";
import { Zap, MessageCircle, Phone, Send, Mic, VolumeX } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  const [activeAgent, setActiveAgent] = useState<"chat" | "call">("chat");
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <section id="home" className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A6262]/20 to-[#91C499]/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-[#1A6262]/30">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#E1A940]" />
              <span className="text-[#91C499] font-medium text-sm sm:text-base">{"Your 24/7 AI Agent is here"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
          <span className="bg-gradient-to-r from-[#1A6262] via-[#91C499] to-[#E1A940] bg-clip-text text-transparent animate-pulse drop-shadow-2xl block mb-1 py-1 sm:py-2">
            Say&nbsp;Hello
          </span>
          <span className="text-white block mb-1">To Your Smartest</span>
          <span className="text-white block mb-1">Sales Assistant</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              {"Deploy voice and chat agents that understand context, qualify leads, and trigger actions — all without a human in the loop. Work smarter, close faster, and never miss a lead."}
            </p>

            {/* Agent Type Toggle */}
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
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
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <Button className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-[2rem] w-full sm:w-auto touch-target">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-[#1A6262] text-[#1A6262] hover:bg-[#1A6262] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent rounded-[2rem] w-full sm:w-auto touch-target"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Mobile Mockup */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-56 xs:w-64 sm:w-80 lg:w-80 xl:w-96 h-[420px] xs:h-[480px] sm:h-[600px] lg:h-[600px] xl:h-[700px] bg-black rounded-[2rem] xs:rounded-[2.5rem] sm:rounded-[3rem] p-1 xs:p-1.5 sm:p-2 shadow-2xl transform rotate-2 xs:rotate-3 sm:rotate-6 hover:rotate-1 sm:hover:rotate-3 transition-transform duration-500">
                <div className="w-full h-full bg-gray-900 rounded-[1.5rem] xs:rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative border border-gray-700">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-800">
                    <span className="text-xs sm:text-sm font-medium text-white">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                      </div>
                      <div className="w-5 sm:w-6 h-2.5 sm:h-3 border border-white rounded-sm">
                        <div className="w-3 sm:w-4 h-0.5 sm:h-1 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="flex-1 p-2 xs:p-3 sm:p-4">
                    {activeAgent === "chat" ? (
                      // Chat Interface
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center space-x-2 xs:space-x-3 mb-3 xs:mb-4 pb-2 xs:pb-3 border-b border-gray-700">
                          <div className="w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-full flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-sm xs:text-base">SniperThink AI</h3>
                            <p className="text-[10px] xs:text-xs text-green-400">Online</p>
                          </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 space-y-2 xs:space-y-3 overflow-hidden">
                          <div className="flex justify-start">
                            <div className="bg-gray-700 rounded-xl xs:rounded-2xl rounded-tl-md px-3 xs:px-4 py-1.5 xs:py-2 max-w-[80%]">
                              <p className="text-xs xs:text-sm text-gray-100">Hello! How can I help you today?</p>
                              <p className="text-[10px] xs:text-xs text-gray-400 mt-1">9:41 AM</p>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <div className="bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-xl xs:rounded-2xl rounded-tr-md px-3 xs:px-4 py-1.5 xs:py-2 max-w-[80%]">
                              <p className="text-xs xs:text-sm text-white">I need help with pricing</p>
                              <p className="text-[10px] xs:text-xs text-white/70 mt-1">9:42 AM</p>
                            </div>
                          </div>

                          <div className="flex justify-start">
                            <div className="bg-gray-700 rounded-xl xs:rounded-2xl rounded-tl-md px-3 xs:px-4 py-1.5 xs:py-2 max-w-[80%]">
                              <p className="text-xs xs:text-sm text-gray-100">
                                I'd be happy to help! Let me show you our plans...
                              </p>
                              <p className="text-[10px] xs:text-xs text-gray-400 mt-1">9:42 AM</p>
                            </div>
                          </div>

                          {/* Typing indicator */}
                          <div className="flex justify-start">
                            <div className="bg-gray-700 rounded-xl xs:rounded-2xl rounded-tl-md px-3 xs:px-4 py-1.5 xs:py-2">
                              <div className="flex space-x-1">
                                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Input */}
                        <div className="mt-2 xs:mt-4 flex items-center space-x-1.5 xs:space-x-2">
                          <div className="flex-1 bg-gray-700 rounded-full px-3 xs:px-4 py-1.5 xs:py-2">
                            <p className="text-xs xs:text-sm text-gray-400">Type a message...</p>
                          </div>
                          <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-full flex items-center justify-center">
                            <Send className="w-3 h-3 xs:w-4 xs:h-4 text-white" />
                          </div>
                        </div>

                        {/* Spacer to push keyboard down */}
                        <div className="flex-grow min-h-[40px] xs:min-h-[50px] sm:min-h-[60px]"></div>

                        {/* Keyboard Mockup */}
                        <div className="w-full flex flex-col items-center px-1 sm:px-2">
                          {/* First Row - QWERTYUIOP */}
                          <div className="grid grid-cols-10 gap-0.5 xs:gap-1 sm:gap-1.5 w-full mb-0.5 xs:mb-1 sm:mb-1.5">
                            {[...'QWERTYUIOP'].map((key) => (
                              <div key={key} className="bg-gray-800 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm">{key}</div>
                            ))}
                          </div>
                          {/* Second Row - ASDFGHJKL */}
                          <div className="grid grid-cols-9 gap-0.5 xs:gap-1 sm:gap-1.5 w-full mb-0.5 xs:mb-1 sm:mb-1.5 px-2 xs:px-3 sm:px-4">
                            {[...'ASDFGHJKL'].map((key) => (
                              <div key={key} className="bg-gray-800 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm">{key}</div>
                            ))}
                          </div>
                          {/* Third Row - ZXCVBNM with Shift */}
                          <div className="grid grid-cols-9 gap-0.5 xs:gap-1 sm:gap-1.5 w-full mb-0.5 xs:mb-1 sm:mb-1.5">
                            <div className="bg-gray-700 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm flex items-center justify-center">⇧</div>
                            {[...'ZXCVBNM'].map((key) => (
                              <div key={key} className="bg-gray-800 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm">{key}</div>
                            ))}
                            <div className="bg-gray-700 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm flex items-center justify-center">⌫</div>
                          </div>
                          {/* Bottom Row - Space and controls */}
                          <div className="grid grid-cols-5 gap-0.5 xs:gap-1 sm:gap-1.5 w-full mb-1 xs:mb-2 sm:mb-3">
                            <div className="bg-gray-700 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm">123</div>
                            <div className="bg-gray-700 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm">🌐</div>
                            <div className="bg-gray-800 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm">Space</div>
                            <div className="bg-gray-700 text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm">.</div>
                            <div className="bg-[#007AFF] text-white rounded-sm xs:rounded-md text-center py-1 xs:py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm select-none font-medium shadow-sm">⏎</div>
                          </div>
                          
                          {/* Bottom Fill Area */}
                          <div className="w-full bg-gray-900 rounded-sm xs:rounded-md p-2 xs:p-3 sm:p-4 flex flex-col items-center justify-center min-h-[20px] xs:min-h-[40px] sm:min-h-[60px] space-y-1 xs:space-y-2 sm:space-y-3">
                            {/* Navigation indicators */}
                            <div className="flex items-center space-x-1 xs:space-x-2">
                              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gray-600 rounded-full"></div>
                              <div className="w-8 xs:w-12 sm:w-16 h-0.5 xs:h-1 bg-gray-700 rounded-full"></div>
                              <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gray-600 rounded-full"></div>
                            </div>
                            
                            {/* Bottom gesture area */}
                            <div className="w-12 xs:w-16 sm:w-20 h-1 xs:h-1.5 bg-gray-700 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Call Interface
                      <div className="h-full flex flex-col items-center justify-center">
                        {/* Call Status */}
                        <div className="text-center mb-8">
                          <div className="w-24 h-24 bg-gradient-to-r from-[#E1A940] to-[#FF6700] rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                            <Phone className="w-12 h-12 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-1">SniperThink AI</h3>
                          <p className="text-sm text-green-400">Connected • 00:42</p>
                        </div>

                        {/* Voice Visualization */}
                        <div className="flex items-center justify-center space-x-1 mb-8">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-t from-[#E1A940] to-[#FF6700] rounded-full animate-pulse"
                              style={{
                                width: "4px",
                                height: isClient ? `${16 + Math.sin(i + Date.now() / 1000) * 8}px` : "16px",
                                animationDelay: `${i * 150}ms`,
                              }}
                            ></div>
                          ))}
                        </div>

                        {/* Call Controls */}
                        <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                            <Mic className="w-6 h-6 text-gray-300" />
                          </div>
                          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                            <Phone className="w-6 h-6 text-white transform rotate-[135deg]" />
                          </div>
                          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                            <VolumeX className="w-6 h-6 text-gray-300" />
                          </div>
                        </div>

                        {/* AI Speaking Indicator */}
                        <div className="mt-6 text-center">
                          <p className="text-sm text-gray-300">AI is speaking...</p>
                          <p className="text-xs text-gray-500 mt-1">"I can help you with that right away"</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
