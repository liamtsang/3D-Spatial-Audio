import { Sky, Stars, Stats, Clouds, Cloud } from '@react-three/drei';
import React from 'react'

import BaseScene from './ui/BaseScene';
import BaseCharacter from './ui/BaseCharacter';
import SceneSwitcher from './scenes/SceneSwitcher'
import Effects from './components/Effects';

class App extends React.Component {
  render() {
    return (
      <BaseScene>
        <Stats />
        <Stars />
        <Effects />
        <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />

        <SceneSwitcher />
      </BaseScene>
    );
  }
}

export default App;

{/* <BaseScene>
        <Effects/>
        <MovingAudioSource url="/assets/music/aphro_6ch_comp.wav"></MovingAudioSource>
        <MovingAudioSource url="/assets/music/eros_6ch_comp.wav"></MovingAudioSource>
        <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
        <Clouds position={[0, -5, 0]} scale={[15,15,15]} rotation={[0,0,0]}/>
        <Sky />
</BaseScene> */}