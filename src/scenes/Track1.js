import { Sky, Stars, Stats, Plane, Box, MeshTransmissionMaterial   } from '@react-three/drei';
import React, { useState, useEffect, useContext } from 'react'
import { useBox } from '@react-three/cannon';

import CustomClouds from '../components/CustomClouds';
import MovingAudioSource from '../components/MovingAudioSource';

export default function Track1(props) {
  const [collresp, setcollresp] = useState(0);

  useEffect(() => {
    if (props.visible) {
      setcollresp(1);
    } else {
      setcollresp(0);
    }
  });
  
  const [ref] = useBox((index) => ({
    position: [0,4,0],
    args: [5,15,.5],
    rotation: [-Math.PI/4,0,0],
    type: 'Static',
    mass: 1,
    collisionResponse: collresp,
    onCollide: (e) => {
      console.log(props);
      console.log(collresp)
    },
    ...props,
  }));

    return (
      <mesh visible={props.visible}>
        <Box position={[0,4,0]} args={[5,15,.5]} color="red" rotation={[-Math.PI/4,0,0]} ref={ref}>
          <MeshTransmissionMaterial 
            transmissionSampler 
            chromaticAberration={.5}
            thickness={1}
          />
        </Box>
        <MovingAudioSource position={[]} paused={!props.visible} url="/assets/music/aphro_6ch_comp.wav"></MovingAudioSource>
        <MovingAudioSource position={[5,15,.5]} paused={true} url="/assets/music/eros_6ch_comp.wav"></MovingAudioSource>
        <CustomClouds position={[0, -5, 0]} scale={[15,15,15]} rotation={[0,0,0]}/>
        <Sky inclination={0} azimuth={180}/>
      </mesh>
    );
}