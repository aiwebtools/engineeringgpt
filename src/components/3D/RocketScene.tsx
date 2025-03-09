
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import RocketModel from './RocketModel';

const RocketScene: React.FC = () => {
  const [isRotating, setIsRotating] = useState(true);

  return (
    <div className="w-full h-full aspect-square rounded-lg overflow-hidden cursor-pointer"
         onClick={() => setIsRotating(!isRotating)}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.8} position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <RocketModel 
            position={[0, 0, 0]} 
            scale={[0.8, 0.8, 0.8]} 
          />
          
          <Environment preset="city" />
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            autoRotate={isRotating}
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RocketScene;
