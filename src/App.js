import { Sky, Stars } from '@react-three/drei';

import BaseScene from './ui/BaseScene';
import BaseBox from './ui/BaseBox';
import GridBox from './components/GridBox.js';
import BaseCharacter from './ui/BaseCharacter';
import MovingAudioSource from './components/MovingAudioSource';
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <BaseScene>   
        <MovingAudioSource url="/assets/music/aphro_6ch_comp.wav"></MovingAudioSource>
        <MovingAudioSource url="/assets/music/eros_6ch_comp.wav"></MovingAudioSource>
        <BaseBox text={false} position={[0, 0.5, 0]} args={[2, 0.25, 2]} color="white" />

        <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
        <GridBox></GridBox>
        <Sky sunPosition={[0,0,0]}/>
        <Stars />
      </BaseScene>
    );
  }
}

export default App;
