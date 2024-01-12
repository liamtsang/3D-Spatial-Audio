import { Canvas } from '@react-three/fiber';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Suspense } from 'react';

import Floor from '../components/Floor.js';

const BasicScene = ({ children }) => {
  return (
    <div class="scene">
      <Canvas shadows camera={{ fov: 90 }}>

        <Physics gravity={[0, -9.8, 0]}>
          {children}

          <Floor position={[0,0,0]} rotation={[Math.PI / -2, 0, 0]} />
        </Physics>

        <PointerLockControls />
      </Canvas>
      <Loader />
    </div>
  );
};

export default BasicScene;
