'use client';

import { motion } from 'framer-motion';

export const ChatVisualization = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto h-[580px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border-2 border-gray-200">
      {/* Header */}
      <div className="bg-[#1E2028] text-white px-4 py-3 flex items-center justify-between border-b border-gray-600">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#3A3D47] rounded-full flex items-center justify-center text-white font-medium text-sm">
            S
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">Siddhant</span>
              <span className="bg-green-500 px-1.5 py-0.5 rounded-[4px] text-[10px] font-medium">WhatsApp</span>
            </div>
            <span className="text-gray-400 text-[11px] font-light">+91 8979556941</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="px-3 py-1.5 bg-[#1A6262] text-white rounded-lg text-xs font-medium hover:bg-[#145252] transition-colors shadow-sm border border-[#145252]">
            Intervene
          </button>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 p-3 overflow-y-auto bg-[#1E2028] space-y-3">
        {/* Bot Message */}
        <div className="flex items-start space-x-2">
          <div className="w-7 h-7 rounded-full bg-[#E6F0F0] flex-shrink-0 flex items-center justify-center">
            <span className="text-[#1A6262] text-[10px] font-bold">AI</span>
          </div>
          <div className="bg-[#2C2F3A] rounded-lg p-2.5 max-w-[85%] border border-gray-600">
            <p className="text-[13px] text-white leading-snug">Thanks for confirming, Siddhant! If you have any specific questions about our services or if there's something you'd like to explore further, just let me know! 😊</p>
            <span className="text-gray-400 text-[10px] mt-1 block">10:47 AM</span>
          </div>
        </div>
        
        {/* User Message */}
        <div className="flex justify-end pr-0.5">
          <div className="bg-[#1A6262] text-white rounded-lg p-2.5 max-w-[90%] border border-[#145252]">
            <p className="text-[13px] font-medium">Tell me about your pricing</p>
            <span className="text-[#C2DEDE] text-[10px] mt-0.5 block text-right">10:57 AM</span>
          </div>
        </div>
        
        {/* Bot Response */}
        <div className="flex items-start space-x-2">
          <div className="w-7 h-7 rounded-full bg-[#E6F0F0] flex-shrink-0 flex items-center justify-center">
            <span className="text-[#1A6262] text-[10px] font-bold">AI</span>
          </div>
          <div className="bg-[#2C2F3A] rounded-lg p-2.5 max-w-[85%] border border-gray-600">
            <p className="text-[13px] text-white leading-snug">Our pricing structure at SniperThink is designed to cater to different business needs. Here's a summary of our sample pricing plans:</p>
            <ul className="mt-2.5 space-y-1.5 text-[13px] text-gray-300 pl-0.5">
              <li className="flex items-start">
                <span className="text-gray-400 mr-1.5 text-[10px] mt-1">•</span>
                <span><span className="font-medium">Basic Plan:</span> $99/month - Up to 1000 conversations</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-1.5 text-[10px] mt-1">•</span>
                <span><span className="font-medium">Pro Plan:</span> $299/month - Up to 5000 conversations</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-1.5 text-[10px] mt-1">•</span>
                <span><span className="font-medium">Enterprise:</span> Custom pricing - Unlimited conversations</span>
              </li>
            </ul>
            <p className="mt-2.5 text-[13px] text-white leading-snug">Would you like more details about any of these plans?</p>
            <span className="text-gray-400 text-[10px] mt-1 block">11:02 AM</span>
          </div>
        </div>
        
        {/* Typing Indicator */}
        <div className="flex items-center space-x-1 pl-10 pt-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
          />
        </div>
        
        {/* Input Area */}
        <div className="p-3 bg-[#1E2028] border-t border-gray-600">
          <div className="flex items-center bg-[#2C2F3A] rounded-lg px-3 py-2 border border-gray-600">
            <button className="text-gray-400 hover:text-gray-300 p-1 -ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 outline-none text-sm bg-transparent text-white placeholder-gray-500 px-2 py-1"
            />
            <button className="text-[#1A6262] hover:text-[#145252] p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
