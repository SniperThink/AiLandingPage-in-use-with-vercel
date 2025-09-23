import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type SenderType = 'user' | 'ai';

interface ChatBubbleProps {
  message: string;
  sender: SenderType;
  showTyping?: boolean;
  delay?: number;
  className?: string;
  tailPosition?: 'left' | 'right' | 'top' | 'bottom';
  onTypingComplete?: () => void;
}

export const ChatBubble = ({
  message,
  sender,
  showTyping = false,
  delay = 0,
  className,
  tailPosition = 'left',
  onTypingComplete,
}: ChatBubbleProps) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [isTyping, setIsTyping] = useState(showTyping);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const typeMessage = () => {
      if (charIndex < message.length) {
        setDisplayedMessage(message.substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeMessage, 20); // Typing speed
      } else {
        setIsTyping(false);
        onTypingComplete?.();
      }
    };

    const startTyping = () => {
      if (showTyping) {
        timeout = setTimeout(typeMessage, delay);
      } else {
        setDisplayedMessage(message);
      }
    };

    startTyping();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [message, showTyping, delay, onTypingComplete]);

  const bubbleClasses = cn(
    'relative rounded-2xl px-4 py-3 shadow-md max-w-xs md:max-w-sm',
    sender === 'ai' 
      ? 'bg-white text-gray-800 rounded-bl-none mr-auto' 
      : 'bg-blue-500 text-white rounded-br-none ml-auto',
    className
  );

  const tailClasses = cn(
    'absolute w-4 h-4',
    'before:absolute before:content-[""] before:w-4 before:h-4 before:bg-inherit before:rotate-45',
    {
      'left-0 -ml-2 bottom-0': tailPosition === 'left',
      'right-0 -mr-2 bottom-0': tailPosition === 'right',
      'top-0 -mt-2 left-1/2 -translate-x-1/2': tailPosition === 'top',
      'bottom-0 -mb-2 left-1/2 -translate-x-1/2': tailPosition === 'bottom',
    }
  );

  return (
    <motion.div
      ref={messageRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={cn('flex mb-4', sender === 'ai' ? 'justify-start' : 'justify-end')}
    >
      <div className={bubbleClasses}>
        <div className="relative z-10">
          {isTyping ? (
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          ) : (
            <p className="text-sm md:text-base">{displayedMessage}</p>
          )}
        </div>
        <div className={tailClasses} />
      </div>
    </motion.div>
  );
};
