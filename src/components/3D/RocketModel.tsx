
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

// Simple rocket model created with Three.js primitives
export const RocketModel = (props: any) => {
  const rocketRef = useRef<Mesh>(null);
  
  // Animate the rocket
  useFrame((state) => {
    if (rocketRef.current) {
      // Gentle floating animation
      rocketRef.current.rotation.y += 0.005;
      rocketRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group {...props}>
      {/* Main rocket body */}
      <mesh ref={rocketRef}>
        {/* Rocket body (cylinder) */}
        <cylinderGeometry args={[0.5, 0.5, 2, 16]} />
        <meshStandardMaterial color="#9900ff" metalness={0.5} roughness={0.3} />
        
        {/* Rocket nose cone */}
        <mesh position={[0, 1.3, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.5, 1, 16]} />
          <meshStandardMaterial color="#ffffff" metalness={0.7} roughness={0.2} />
        </mesh>
        
        {/* Rocket fins (3) */}
        {[0, Math.PI * 0.67, Math.PI * 1.33].map((rotation, i) => (
          <mesh key={i} position={[0, -0.8, 0]} rotation={[0, rotation, 0]}>
            <boxGeometry args={[0.1, 0.7, 1.2]} />
            <meshStandardMaterial color="#00b3ff" metalness={0.5} roughness={0.3} />
          </mesh>
        ))}
        
        {/* Rocket engine */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.3, 0.5, 0.4, 16]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Engine flame */}
        <mesh position={[0, -1.5, 0]}>
          <coneGeometry args={[0.3, 0.6, 16]} />
          <meshStandardMaterial 
            color="#ff3131" 
            emissive="#ff9900" 
            emissiveIntensity={2} 
            toneMapped={false} 
          />
        </mesh>
      </mesh>
    </group>
  );
};

export default RocketModel;
