import { Sky, Stars } from '@react-three/drei';
import React from 'react'

import Clouds from './components/Clouds';
import BaseScene from './ui/BaseScene';
import BaseBox from './ui/BaseBox';
import GridBox from './components/GridBox.js';
import BaseCharacter from './ui/BaseCharacter';
import MovingAudioSource from './components/MovingAudioSource';
import CustomSky from './components/CustomSky';
import Effects from './components/Effects';

class App extends React.Component {
  render() {
    return (
      <BaseScene>
        <Effects/>
        <MovingAudioSource url="/assets/music/aphro_6ch_comp.wav"></MovingAudioSource>
        <MovingAudioSource url="/assets/music/eros_6ch_comp.wav"></MovingAudioSource>
        <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
        <Clouds position={[0, -5, 0]} scale={[15,15,15]} rotation={[0,0,0]}/>
        {/* <GridBox position={[-10, 0, 0]} scale={[10,10,10]} rotation={[0,0,0]}/> */}
        {/* <BaseBox position={[0, 0, 0]} args={[5,.2,5]} color={'grey'}/> */}
        <Sky />
        </BaseScene>
    );
  }
}

export default App;
