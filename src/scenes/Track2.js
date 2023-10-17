import { Sky, Stars, Stats  } from '@react-three/drei';
import React, { useState } from 'react'

import CustomClouds from '../components/CustomClouds';
import MovingAudioSource from '../components/MovingAudioSource';

export default function Track1(props) {

    return (
      <mesh visible={props.visible}>
        <MovingAudioSource paused={!props.visible} url="/assets/music/aphro_6ch_comp.wav"></MovingAudioSource>
        <MovingAudioSource paused={true} url="/assets/music/eros_6ch_comp.wav"></MovingAudioSource>
        <CustomClouds position={[0, -5, 0]} scale={[15,15,15]} rotation={[0,0,0]}/>
        <Sky />
      </mesh>
    );
}