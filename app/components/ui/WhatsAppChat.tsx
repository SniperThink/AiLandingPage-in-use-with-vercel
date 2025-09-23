'use client';

import { useState } from 'react';
import { 
  MoreVertical, 
  Search, 
  Paperclip, 
  Mic, 
  Smile, 
  ArrowLeft, 
  Phone, 
  Video, 
  Check, 
  CheckCheck,
  ChevronDown
} from 'lucide-react';

type Message = {
  id: string;
  text: string;
  time: string;
  isMe: boolean;
  isRead: boolean;
};

type Contact = {
  id: string;
  name: string;
  status: string;
  lastSeen: string;
  avatar: string;
};

export default function WhatsAppChat() {
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('chats');
  
  const contact: Contact = {
    id: '1',
    name: 'Siddhant',
    status: 'online',
    lastSeen: 'last seen today at 11:02 AM',
    avatar: 'S'
  };

  const messages: Message[] = [
    {
      id: '1',
      text: 'Hey there! How are you doing?',
      time: '10:30 AM',
      isMe: false,
      isRead: true
    },
    {
      id: '2',
      text: 'I\'m doing great, thanks for asking! How about you?',
      time: '10:32 AM',
      isMe: true,
      isRead: true
    },
    {
      id: '3',
      text: 'I\'m good too! Just wanted to check in and see how you were doing.',
      time: '10:33 AM',
      isMe: false,
      isRead: true
    },
    {
      id: '4',
      text: 'That\'s nice of you. I was actually thinking about our project. Do you have time to discuss it?',
      time: '10:34 AM',
      isMe: true,
      isRead: true
    },
    {
      id: '5',
      text: 'Sure, I have some time now. What would you like to discuss?',
      time: '10:35 AM',
      isMe: false,
      isRead: true
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Here you would typically send the message to your backend
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-[#e5ddd5] bg-opacity-30">
      {/* Header */}
      <div className="bg-[#00a884] text-white p-3 flex items-center justify-between">
        <div className="flex items-center">
          <button className="md:hidden mr-2">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
              {contact.avatar}
            </div>
            <div className="ml-3">
              <div className="flex items-center">
                <h2 className="font-semibold">{contact.name}</h2>
                <ChevronDown className="ml-1" size={16} />
              </div>
              <p className="text-xs opacity-80">
                {contact.status === 'online' ? 'online' : contact.lastSeen}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button>
            <Phone size={20} />
          </button>
          <button>
            <Video size={20} />
          </button>
          <button>
            <Search size={20} />
          </button>
          <button>
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#e5ddd5] bg-opacity-30 bg-[url('/images/whatsapp-bg.png')] bg-repeat">
        <div className="space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                  msg.isMe
                    ? 'bg-[#d9fdd3] rounded-tr-none'
                    : 'bg-white rounded-tl-none'
                }`}
              >
                <p className="text-gray-800">{msg.text}</p>
                <div className="flex items-center justify-end mt-1 space-x-1">
                  <span className="text-xs text-gray-500">{msg.time}</span>
                  {msg.isMe && (
                    <span className="text-[#1A6262]">
                      {msg.isRead ? <CheckCheck size={14} /> : <Check size={14} />}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#f0f2f5] p-3">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
            <Smile size={24} />
          </button>
          <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
            <Paperclip size={24} />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 bg-white rounded-lg px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            {message.trim() ? (
              <svg viewBox="0 0 24 24" width="24" height="24" className="text-[#00a884]">
                <path
                  fill="currentColor"
                  d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                ></path>
              </svg>
            ) : (
              <Mic size={24} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
