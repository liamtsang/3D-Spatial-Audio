import { useState , useEffect } from 'react';
import Track2 from './Track2';
import { MeshDistortMaterial, GradientTexture } from '@react-three/drei';

const Portal2 = ({ chooseTrack, trackIndex, position }) => {
  const [trackVisible, setTrackVisible] = useState(false);

  useEffect(() => {
    if (trackVisible) {
      chooseTrack(2);
    } else {
      chooseTrack(0);
    }
  });

  let portalVisible = true;
  if (trackIndex == 0 || trackIndex == 2) {
    portalVisible = true;
  } else {
    portalVisible = false;
  }

  return (
    <group>
      <mesh onClick={() => setTrackVisible(trackVisible => !trackVisible)} visible={portalVisible} castShadow position={position}>
        <octahedronGeometry/>
        <MeshDistortMaterial distort={.25} speed={5} >
          <GradientTexture stops={[0, 1]} // As many stops as you want
      colors={['aquamarine', 'hotpink']} size={1024} />
        </MeshDistortMaterial>
      </mesh>
      <Track2 visible={trackVisible} />
    </group>
  );
};



export default Portal2;
