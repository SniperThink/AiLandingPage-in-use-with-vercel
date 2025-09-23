import { useState, useEffect, useCallback } from 'react';
import { ChatBubble } from '@/components/ui/ChatBubble';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  delay: number;
  workflowStep?: string;
};

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Let's automate this workflow...",
    sender: 'user',
    delay: 1000,
  },
  {
    id: '2',
    text: 'Processing workflow...',
    sender: 'ai',
    delay: 2000,
  },
  {
    id: '3',
    text: 'Analyzing your business process...',
    sender: 'ai',
    delay: 4000,
  },
  {
    id: '4',
    text: 'Identifying optimization opportunities...',
    sender: 'ai',
    delay: 6000,
  },
  {
    id: '5',
    text: 'Workflow automation complete! 80% time saved.',
    sender: 'ai',
    delay: 8000,
  },
];

export const ConversationFlow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const startConversation = useCallback(() => {
    setMessages([]);
    setCurrentStep(0);
    setIsComplete(false);
    setIsPlaying(true);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isComplete || !isPlaying) return;

    if (currentStep < initialMessages.length) {
      const currentMessage = initialMessages[currentStep];
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, currentMessage]);
        setCurrentStep((prev) => prev + 1);
      }, currentMessage.delay);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentStep, isPlaying, isComplete]);

  const handleBubbleClick = (message: Message) => {
    // Handle bubble click if needed
    console.log('Bubble clicked:', message);
  };

  return (
    <div className="relative h-full w-full">
      <div className="h-[calc(100%-50px)] overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div 
            key={message.id}
            onClick={() => handleBubbleClick(message)}
            className="cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <ChatBubble
              message={message.text}
              sender={message.sender}
              delay={index === 0 ? 500 : 0}
              showTyping={message.sender === 'ai'}
              tailPosition={message.sender === 'ai' ? 'left' : 'right'}
              className={message.workflowStep ? 'border-2 border-blue-400' : ''}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 bg-gradient-to-t from-gray-900 to-transparent">
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={startConversation}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
