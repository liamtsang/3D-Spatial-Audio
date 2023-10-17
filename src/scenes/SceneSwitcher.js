import { useBox } from '@react-three/cannon';
import { useState , useEffect } from 'react';
import { useCursor, Float } from '@react-three/drei';
import Home from './Home';
import Portal1 from './Portal1';
import Portal2 from './Portal2';

const SceneSwitcher = ({ ...props }) => {
  const [trackNum, setTrackNum] = useState(0);
  const [hovered, set] = useState()
  useCursor(hovered, /*'pointer', 'auto', document.body*/)


  useEffect(() => {
    setTrackNum(trackNum);
  });

  const chooseTrack = (trackNum) => {
    setTrackNum(trackNum);
  }
  
  return (
    <group>
      <Home trackIndex={trackNum}/>
      
      <Portal1 onPointerOver={() => set(true)} onPointerOut={() => set(false)} position={[-4,0,0]} chooseTrack={chooseTrack} trackIndex={trackNum}/>
      <Portal2 position={[4,0,0]} chooseTrack={chooseTrack} trackIndex={trackNum}/>
    </group>
  );
};



export default SceneSwitcher;
