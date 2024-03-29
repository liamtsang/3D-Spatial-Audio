import { Canvas } from '@react-three/fiber'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Loader, PointerLockControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/cannon'
import { Suspense } from 'react'

import Floor from '../components/Floor.js'

const BasicScene = ({ children }) => {
  return (
    <div class='scene'>
      <VRButton />
      <Canvas shadows camera={{ fov: 90 }}>
        <XR>
          <Controllers />
          <Hands />
          <Physics gravity={[0, -9.8, 0]}>{children}</Physics>
        </XR>
        <PointerLockControls />
      </Canvas>
      <Loader />
    </div>
  )
}

export default BasicScene
