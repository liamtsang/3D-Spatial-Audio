import { Canvas } from '@react-three/fiber';
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Loader, PointerLockControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Suspense } from 'react';

import Floor from '../components/Floor.js';

const BasicScene = ({ children }) => {
  return (
    <div class="scene">
      <VRButton />
      <Canvas shadows camera={{ fov: 90 }}>
        <XR>
          <Controllers />
          <Hands />
          {children}

          <Floor position={[0,0,0]} rotation={[Math.PI / -2, 0, 0]} />

        </XR>
      </Canvas>
      <Loader />
    </div>
  );
};

export default BasicScene;
