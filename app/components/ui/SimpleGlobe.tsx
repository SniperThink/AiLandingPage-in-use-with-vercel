"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from '@react-three/drei';

// ================== Interfaces ==================
interface GlobeProps {
  bubbles: { position: [number, number, number]; text: string }[];
  activeBubble: number | null;
  setActiveBubble: (index: number) => void;
}

interface ChatBubbleProps {
  position: [number, number, number];
  text: string;
  isActive: boolean;
  onClick: () => void;
}

interface HexagonContainerProps {
  position: [number, number, number];
  color: string;
  isActive: boolean;
}

// ================== Components ==================
const HexagonContainer = React.forwardRef<THREE.Group, HexagonContainerProps>(
  ({ position, color, isActive }, ref) => {
    return (
      <group ref={ref} position={position}>
        <mesh>
          <circleGeometry args={[0.2, 6]} />
          <meshStandardMaterial
            color={isActive ? "orange" : color}
            emissive={isActive ? "orange" : color}
          />
        </mesh>
      </group>
    );
  }
);

HexagonContainer.displayName = "HexagonContainer";

const ChatBubble: React.FC<ChatBubbleProps> = ({
  position,
  text,
  isActive,
  onClick,
}) => {
  return (
    <group position={position} onClick={onClick}>
      <mesh>
        <planeGeometry args={[1.5, 0.7]} />
        <meshStandardMaterial
          color={isActive ? "lightblue" : "white"}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Text
        position={[0, 0, 0.1]}
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const Globe: React.FC<GlobeProps> = ({ bubbles, activeBubble, setActiveBubble }) => {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
      {/* Globe Sphere */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial color="#1e90ff" wireframe />
      </mesh>

      {/* Render Chat Bubbles */}
      {bubbles.map((bubble, index) => (
        <ChatBubble
          key={index}
          position={bubble.position}
          text={bubble.text}
          isActive={activeBubble === index}
          onClick={() => setActiveBubble(index)}
        />
      ))}
    </group>
  );
};

// ================== Main Export ==================
// Simple test component to verify Three.js is working
const TestCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const SimpleGlobe: React.FC = () => {
  const [showTest, setShowTest] = React.useState(true);
  const [activeBubble, setActiveBubble] = React.useState<number | null>(null);

  const bubbles = [
    { position: [4, 0, 0] as [number, number, number], text: "Hello!" },
    { position: [-4, 0, 0] as [number, number, number], text: "Bonjour!" },
    { position: [0, 4, 0] as [number, number, number], text: "Hola!" },
  ];

  // Add debug state
  const [debug, setDebug] = useState({
    isMounted: false,
    error: null as string | null
  });

  // Set up and clean up component
  useEffect(() => {
    setDebug(prev => ({ ...prev, isMounted: true }));
    
    // Add global error handler
    window.addEventListener('error', handleRuntimeError);
    
    return () => {
      window.removeEventListener('error', handleRuntimeError);
      setDebug(prev => ({ ...prev, isMounted: false }));
    };
  }, []);

  // Handle WebGL context initialization
  const handleCreated = ({ gl }: { gl: THREE.WebGLRenderer }) => {
    try {
      gl.setClearColor('#000000');
    } catch (error) {
      console.error('Error initializing WebGL:', error);
      setDebug(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Failed to initialize WebGL'
      }));
    }
  };

  // Handle runtime errors
  const handleRuntimeError = (event: ErrorEvent) => {
    console.error('Runtime error:', event.error);
    setDebug(prev => ({
      ...prev,
      error: event.error?.message || 'An unexpected error occurred'
    }));
    return false; // Prevent default error handling
  };

  return (
    <div className="w-full h-[600px] relative">
      {debug.error && (
        <div className="absolute top-4 left-4 bg-red-500 text-white p-4 rounded z-50">
          Error: {debug.error}
        </div>
      )}
      <div className="absolute top-4 right-4 z-50">
        <button 
          onClick={() => setShowTest(!showTest)}
          className="bg-white/10 text-white p-2 rounded-md backdrop-blur-sm"
        >
          {showTest ? 'Show Globe' : 'Show Test Cube'}
        </button>
      </div>
      
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45, near: 0.1, far: 1000 }}
        onCreated={handleCreated}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {showTest ? (
          <TestCube />
        ) : (
          <Globe
            bubbles={bubbles}
            activeBubble={activeBubble}
            setActiveBubble={setActiveBubble}
          />
        )}
      </Canvas>
    </div>
  );
};

export default SimpleGlobe;
