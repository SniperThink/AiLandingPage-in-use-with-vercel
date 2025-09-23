'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, RefreshCw, MessageSquare, Send, Paperclip, ChevronLeft } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
};

type User = {
  id: number;
  name: string;
  phone: string;
  platform: 'whatsapp' | 'instagram' | 'facebook';
  lastMessage: string;
  unread: number;
  timestamp: string;
  isOnline: boolean;
};

export const TwoPanelChat = () => {
  const [activeUser, setActiveUser] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [showChatOnMobile, setShowChatOnMobile] = useState(false);
  
  const users: User[] = [
    {
      id: 1,
      name: 'Siddhant',
      phone: '+91 8979556941',
      platform: 'whatsapp',
      lastMessage: 'Tell me about your pricing',
      unread: 2,
      timestamp: '11:02 AM',
      isOnline: true
    },
    {
      id: 2,
      name: 'Rahul Sharma',
      phone: '+91 9876543210',
      platform: 'instagram',
      lastMessage: 'Thanks for the update!',
      unread: 0,
      timestamp: '10:30 AM',
      isOnline: false
    },
    {
      id: 3,
      name: 'Priya Patel',
      phone: '+91 8765432109',
      platform: 'whatsapp',
      lastMessage: 'Can we schedule a call tomorrow?',
      unread: 1,
      timestamp: 'Yesterday',
      isOnline: true
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      text: "Thanks for confirming, Siddhant! If you have any specific questions about our services or if there's something you'd like to explore further, just let me know! 😊",
      sender: 'bot',
      timestamp: '10:47 AM'
    },
    {
      id: 2,
      text: 'Tell me about your pricing',
      sender: 'user',
      timestamp: '10:57 AM'
    },
    {
      id: 3,
      text: "Our pricing structure at SniperThink is designed to cater to different business needs. Here's a summary of our sample pricing plans:\n\n• Basic Plan: $99/month - Up to 1000 conversations\n• Pro Plan: $299/month - Up to 5000 conversations\n• Enterprise: Custom pricing - Unlimited conversations\n\nWould you like more details about any of these plans?",
      sender: 'bot',
      timestamp: '11:02 AM'
    }
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  );

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you would send the message to your backend here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-black rounded-lg overflow-hidden border border-gray-700 shadow-lg">
      {/* Left Panel - Customer List */}
      <div className={`${showChatOnMobile ? 'hidden md:flex' : 'flex'} w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-800 bg-black flex-col h-full max-h-full overflow-hidden`}>
        {/* Search Bar */}
        <div className="p-3 md:p-4 border-b border-gray-800">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full bg-gray-800 text-gray-200 rounded-lg py-2 md:py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6262] border-0 placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* User List Header */}
        <div className="p-3 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white">Customers</h2>
          <p className="text-xs text-gray-400 mt-1">Select a customer to view messages</p>
        </div>
        
        {/* User List */}
        <div className="flex-1 overflow-y-auto">
          {filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`relative flex items-center p-3 border-b border-gray-800 cursor-pointer hover:bg-gray-800/50 transition-colors ${
                activeUser === user.id ? 'bg-gray-800' : ''
              }`}
              onClick={() => { 
                setActiveUser(user.id); 
                setShowChatOnMobile(true);
              }}
            >
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1A6262] flex items-center justify-center text-white font-semibold text-base">
                  {user.name.charAt(0)}
                </div>
                {user.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-white truncate">{user.name}</h3>
                  <span className="text-xs text-gray-400">{user.timestamp}</span>
                </div>
                <p className="text-xs text-gray-400 truncate mt-0.5">{user.lastMessage}</p>
                <div className="flex items-center mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${
                    user.platform === 'whatsapp' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-pink-500/20 text-pink-400'
                  }`}>
                    {user.platform}
                  </span>
                  {user.unread > 0 && (
                    <span className="ml-2 bg-[#1A6262] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {user.unread}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Panel - Chat Area */}
      <div className={`${showChatOnMobile ? 'flex' : 'hidden md:flex'} w-full md:flex-1 flex-col bg-black min-h-0 max-h-full overflow-hidden`}>
        {activeUser ? (
          <>
            {/* Chat Header with Back Button */}
            <div className="p-3 border-b border-gray-800 flex items-center gap-3 bg-gray-900 h-16 flex-shrink-0 min-h-[64px] max-h-[64px] w-full min-w-0">
              <button 
                className="md:hidden p-1.5 rounded-full hover:bg-gray-700 text-gray-300"
                onClick={() => setShowChatOnMobile(false)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1A6262] flex items-center justify-center text-white font-semibold text-base">
                    {users.find(u => u.id === activeUser)?.name.charAt(0)}
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <div className="flex items-center">
                      <h2 className="text-sm font-medium text-white w-32 min-w-[128px] max-w-[128px] truncate">
                        {users.find(u => u.id === activeUser)?.name}
                      </h2>
                      <span className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full capitalize">
                        {users.find(u => u.id === activeUser)?.platform}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">
                      {users.find(u => u.id === activeUser)?.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 bg-gray-900/50 max-h-full">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.sender === 'user'
                        ? 'bg-[#1A6262] text-white rounded-br-sm ml-auto shadow-md'
                        : 'bg-gray-800 text-gray-200 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line text-sm">
                      {msg.text.split('\n').map((line, i) => (
                        <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
                      ))}
                    </div>
                    <div className={`text-xs mt-1 ${
                      msg.sender === 'user' ? 'text-[#8AC1C1]' : 'text-gray-400'
                    }`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="px-4 py-3 border-t border-gray-800 bg-gray-900 flex-shrink-0">
              <div className="flex items-center w-full bg-[#1E293B] rounded-lg px-4 py-2.5">
                <button className="flex-shrink-0 p-1.5 text-gray-400 hover:text-white">
                  <Paperclip className="h-5 w-5" />
                </button>
                <div className="flex-1 mx-3">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A6262] border-0 placeholder-gray-400"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                </div>
                <button 
                  className={`p-2 text-gray-400 hover:text-[#1A6262] rounded-full hover:bg-gray-800 transition-colors ${
                    !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={!message.trim()}
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-600" />
              <h3 className="text-lg font-medium">Select a chat to start messaging</h3>
              <p className="text-sm mt-1">Or start a new conversation</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoPanelChat;
