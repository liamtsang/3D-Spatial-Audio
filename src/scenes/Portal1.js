import React, { useState, useEffect, useContext, createContext } from 'react'
import { MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import { Sky, Stars, Stats, Plane, Box, MeshTransmissionMaterial   } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

import CustomClouds from '../components/CustomClouds';
import MovingAudioSource from '../components/MovingAudioSource';

const MyContext = createContext();

const Portal1 = ({ chooseTrack, trackIndex, position }) => {
  const [trackVisible, setTrackVisible] = useState(false);

  useEffect(() => {
    if (trackVisible) {
      chooseTrack(1);
    } else {
      chooseTrack(0);
    }
  });

  let portalVisible = true;
  if (trackIndex == 0 || trackIndex == 1) {
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
      colors={['red', 'red']} size={1024} />
        </MeshDistortMaterial>
      </mesh>
      <MyContext.Provider value={{ trackVisible, setTrackVisible }}>
        <Track1/>
      </MyContext.Provider>
    </group>
  );
};

function Track1(props) {
  const [collresp, setcollresp] = useState(0);
  const { trackVisible } = useContext(MyContext);

  useEffect(() => {
    if (trackVisible) {
      api.collisionResponse.set(1)
      platapi.collisionResponse.set(1)
    } else {
      api.collisionResponse.set(0)
      platapi.collisionResponse.set(0)
    }
   
  });
  
  const [ref, api] = useBox((index) => ({
    position: [0,4,0],
    args: [5,15,.5],
    rotation: [-Math.PI/4,0,0],
    type: 'Static',
    mass: 1,
    collisionResponse: 1,
    onCollide: (e) => {
    },
    ...props,
  }));

  const [platref, platapi] = useBox((index) => ({
    position: [0,9.23,-7.63],
    args: [5,5,.5],
    rotation: [-Math.PI/2,0,0],
    type: 'Static',
    mass: 1,
    collisionResponse: 1,
    onCollide: (e) => {
    },
    ...props,
  }));


    return (
      <mesh visible={trackVisible}>
        <Box position={[0,4,0]} args={[5,15,.5]} color="red" rotation={[-Math.PI/4,0,0]} ref={ref}>
          <MeshTransmissionMaterial 
            transmissionSampler 
            chromaticAberration={.5}
            thickness={1}
          />
        </Box>
        <Box position={[0,9,-8]} args={[5,5,.5]} color="red" rotation={[-Math.PI/2,0,0]} ref={platref}>
          <MeshTransmissionMaterial 
            transmissionSampler 
            chromaticAberration={.5}
            thickness={.25}
          />
        </Box>
        <MovingAudioSource vx={0} vy={9} vz={-8} paused={!trackVisible} url="/assets/music/aphro_6ch_comp.wav"></MovingAudioSource>
        <MovingAudioSource vx={0} vy={9} vz={-8} paused={!trackVisible} url="/assets/music/eros_6ch_comp.wav"></MovingAudioSource>
        <CustomClouds position={[0, -5, 0]} scale={[15,2,15]} rotation={[0,0,0]}/>
        <Sky inclination={0} azimuth={180}/>

      </mesh>
    );
}

export default Portal1;
