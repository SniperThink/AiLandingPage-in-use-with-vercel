'use client';

import React, { useRef, useState, useEffect, useCallback, forwardRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Text3D } from '@react-three/drei';
import * as THREE from 'three';

// Types
interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

interface Bubble {
  id: string;
  position: [number, number, number];
  color: string;
  title: string;
  description: string;
  chatMessages: ChatMessage[];
  bubblePosition: {
    x: number;
    y: number;
    side: 'left' | 'right';
  };
  hexagonRef: React.RefObject<THREE.Group>;
  onPositionUpdate: (pos: { x: number; y: number }) => void;
}

type HexagonContainerProps = {
  position: [number, number, number];
  color: string;
  isActive: boolean;
  onClick: () => void;
  title: string;
  description: string;
  onPositionUpdate: (pos: { x: number; y: number }) => void;
};

type ChatBubble3DProps = {
  message: string;
  position: [number, number, number];
  isUser?: boolean;
};

type ChatBubbleGroupProps = {
  messages: ChatMessage[];
  position: [number, number, number];
};

type GlobeProps = {
  bubbles: Bubble[];
  activeBubble: number;
  setActiveBubble: (index: number) => void;
};

// Hexagon Container Component
const HexagonContainer = forwardRef<THREE.Group, HexagonContainerProps>(({
  position,
  color,
  isActive,
  onClick,
  title,
  description,
  onPositionUpdate
}, ref) => {
  const localRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame(() => {
    const currentRef = localRef.current;
    if (currentRef && onPositionUpdate) {
      const vector = currentRef.position.clone();
      vector.project(camera);
      const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;
      onPositionUpdate({ x, y });
    }
  });

  const textColor = isActive ? '#ffffff' : '#e5e7eb';
  const titleScale = 0.08;
  const descScale = 0.06;
  const yOffset = 0.06;

  return (
    <group 
      ref={(instance) => {
        localRef.current = instance;
        if (typeof ref === 'function') {
          ref(instance);
        } else if (ref) {
          (ref as React.MutableRefObject<THREE.Group | null>).current = instance;
        }
      }}
      position={position}
      onClick={onClick}
      userData={{ isActive }}
    >
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 6]} />
        <meshStandardMaterial 
          color={isActive ? '#3b82f6' : color} 
          emissive={isActive ? '#3b82f6' : color}
          emissiveIntensity={isActive ? 0.5 : 0.1}
          metalness={0.2}
          roughness={0.5}
        />
      </mesh>
      
      <Text3D
        position={[0, yOffset, 0.06]}
        size={titleScale}
        height={0.01}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.002}
        bevelOffset={0}
        bevelSegments={1}
        font="/fonts/helvetiker_regular.typeface.json"
      >
        {title}
        <meshStandardMaterial color={textColor} />
      </Text3D>
      
      <Text3D
        position={[0, -yOffset, 0.06]}
        size={descScale}
        height={0.005}
        curveSegments={12}
        font="/fonts/helvetiker_regular.typeface.json"
      >
        {description}
        <meshStandardMaterial color={textColor} opacity={0.8} transparent />
      </Text3D>
    </group>
  );
});

HexagonContainer.displayName = 'HexagonContainer';

// Chat Bubble Components
const ChatBubble3D: React.FC<ChatBubble3DProps> = ({ message, position, isUser = false }) => {
  const bubbleRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (bubbleRef.current) {
      bubbleRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group position={position} ref={bubbleRef}>
      <mesh>
        <planeGeometry args={[Math.min(message.length * 0.1, 2), 0.3]} />
        <meshBasicMaterial 
          color={isUser ? '#3b82f6' : '#4b5563'} 
          side={THREE.DoubleSide} 
          transparent 
          opacity={0.9}
        />
      </mesh>
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.08}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {message}
      </Text>
    </group>
  );
};

const ChatBubbleGroup: React.FC<ChatBubbleGroupProps> = ({ messages, position }) => {
  return (
    <group position={position}>
      {messages.map((msg: ChatMessage, i: number) => (
        <ChatBubble3D
          key={msg.id}
          message={msg.text}
          position={[0, -i * 0.3, 0]}
          isUser={msg.sender === 'user'}
        />
      ))}
    </group>
  );
};

// Globe Component
const Globe: React.FC<GlobeProps> = ({ bubbles, activeBubble, setActiveBubble }) => {
  const globeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    // Rotate the globe
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    
    // Add subtle floating animation to hexagons
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.children.forEach((child, i) => {
        if (i < bubbles.length) {
          const yOffset = Math.sin(time * 0.5 + i) * 0.05;
          const newPosition = bubbles[i].position.slice() as [number, number, number];
          newPosition[1] += yOffset;
          child.position.set(...newPosition);
        }
      });
    }
  });

  return (
    <group>
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#1e3a8a" 
          transparent 
          opacity={0.2} 
          wireframe
        />
      </mesh>
      
      <group ref={groupRef}>
        {bubbles.map((bubble, index) => (
          <HexagonContainer
            key={bubble.id}
            ref={bubble.hexagonRef}
            position={bubble.position}
            color={bubble.color}
            isActive={index === activeBubble}
            onClick={() => setActiveBubble(index)}
            title={bubble.title}
            description={bubble.description}
            onPositionUpdate={bubble.onPositionUpdate}
          />
        ))}
      </group>
      
      {/* Chat Bubbles */}
      <group position={[0, 0, 1.5]}>
        <ChatBubbleGroup 
          messages={bubbles[activeBubble]?.chatMessages || []} 
          position={[0, 0.5, 0]}
        />
      </group>
    </group>
  );
};

// Main Component
export function SimpleGlobe() {
  const [activeBubble, setActiveBubble] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hexagonPositions, setHexagonPositions] = useState<Record<string, { x: number; y: number }>>({});
  
  const hexagonRefs = useRef<Record<string, React.RefObject<THREE.Group>>>({});
  
  const getHexagonRef = useCallback((id: string) => {
    if (!hexagonRefs.current[id]) {
      hexagonRefs.current[id] = React.createRef<THREE.Group>();
    }
    return hexagonRefs.current[id];
  }, []);
  
  const handleHexagonPositionUpdate = useCallback((id: string, position: { x: number; y: number }) => {
    setHexagonPositions(prev => ({
      ...prev,
      [id]: position
    }));
  }, []);
  
  const bubbles: Bubble[] = [
    {
      id: 'step1',
      position: [-1.5, 0, 0],
      color: '#0ea5e9',
      title: 'Step 1',
      description: 'Input',
      chatMessages: [
        { id: 'm1', text: 'Let\'s automate this workflow!', sender: 'user' },
        { id: 'm2', text: 'I\'ll help you with that.', sender: 'ai' },
      ],
      bubblePosition: { x: 0, y: 0, side: 'left' as const },
      hexagonRef: getHexagonRef('step1'),
      onPositionUpdate: (pos) => handleHexagonPositionUpdate('step1', pos)
    },
    {
      id: 'step2',
      position: [1.5, 0, 0],
      color: '#ef4444',
      title: 'Step 2',
      description: 'Process',
      chatMessages: [
        { id: 'm3', text: 'Processing...', sender: 'ai' },
      ],
      bubblePosition: { x: 0, y: 0, side: 'right' as const },
      hexagonRef: getHexagonRef('step2'),
      onPositionUpdate: (pos) => handleHexagonPositionUpdate('step2', pos)
    },
  ];

  // Auto-rotate through bubbles
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setActiveBubble(prev => (prev + 1) % bubbles.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isPlaying, bubbles.length]);

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Globe 
          bubbles={bubbles} 
          activeBubble={activeBubble} 
          setActiveBubble={setActiveBubble} 
        />
      </Canvas>
      
      {/* UI Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-lg">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        
        <div className="flex space-x-1">
          {bubbles.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveBubble(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeBubble ? 'bg-blue-500' : 'bg-gray-600'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Current Step Info */}
      <div className="absolute top-4 left-4 right-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg max-w-md">
        <h3 className="text-white text-lg font-semibold mb-1">
          {bubbles[activeBubble]?.title}
        </h3>
        <p className="text-gray-300 text-sm">
          {bubbles[activeBubble]?.description}
        </p>
      </div>
    </div>
  );
}
