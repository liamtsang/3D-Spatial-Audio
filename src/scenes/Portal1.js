import React, { useState, useEffect, useContext, createContext } from 'react'
import { MeshDistortMaterial, GradientTexture, Edges, Text , useCursor} from '@react-three/drei';
import { Sky, Stars, Stats, Plane, Box  } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { Cavern } from '../models/Cavern.jsx'

import CustomClouds from '../components/CustomClouds';
import MovingAudioSource from '../components/MovingAudioSource';

const MyContext = createContext();

const Portal1 = ({ chooseTrack, trackIndex, position }) => {
  const [trackVisible, setTrackVisible] = useState(false);
  const [hovered, set] = useState(false);
  useCursor(hovered, /*'pointer', 'auto', document.body*/)
  let textState = "Click to enter"
  if (!trackVisible) {

    textState = "Click to enter"

  } else {

    textState = "Return"

  }

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
      <mesh 
        onClick={() => setTrackVisible(trackVisible => !trackVisible)} 
        onPointerOver={() => set(true)} onPointerOut={() => set(false)}
        visible={portalVisible} castShadow position={position} scale={[0.5,0.5,0.5]}
      >
        <octahedronGeometry/>
        <MeshDistortMaterial distort={.25} speed={5} >
          <GradientTexture stops={[0, 1]} colors={['red', 'grey']} size={1024} />
        </MeshDistortMaterial>
      </mesh>
      <Text visible={hovered} font="./fonts/IBM.json" color={"white"} scale={[0.25,0.25,0.25]} position={[-4,0.25,0]} rotation={[0,3.14/2,  0]} anchorX="center" anchorY="middle">
        {textState}
      </Text>
      <Box position={[0,-50,0]} scale={[100,1,100]}  >
          <meshBasicMaterial
            color={"black"}
          />
        </Box>
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
    } else {
      api.collisionResponse.set(0)
    }
   
  });
  
  const [ref, api] = useBox((index) => ({
    position: [0,-.25,0],
    args: [5,.5,5],
    type: 'Static',
    mass: 1,
    collisionResponse: 1,
    onCollide: (e) => {
console.log(ref);

    },
    ...props,
  }));




    return (
      <mesh visible={trackVisible}>
        <gridHelper args={[6, 6, 0xff0000, 'teal']} />
        <Box position={[0,0,0]} args={[6,.5,6]} ref={ref} renderOrder={1}>
          <meshBasicMaterial
            transparent={true}
            opacity={0.015}
          />
          <Edges scale={1} threshold={15} color="teal" />
        </Box>
        <Cavern position={[0,25,0]} scale={[10,10,10]} rotation={[-3.14/2,0,0]}/>
        <MovingAudioSource vx={0} vy={0} vz={0} paused={!trackVisible} url="/assets/music/aphrodite_9_12_take_2.wav"></MovingAudioSource>
        <MovingAudioSource vx={0} vy={0} vz={0} paused={!trackVisible} url="/assets/music/eros_9_25_take_7.wav"></MovingAudioSource>
        
      </mesh>
    );
}

export default Portal1;
