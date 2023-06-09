import React, { useRef, useEffect, useState } from "react";
import { useThree, useLoader, useFrame } from "@react-three/fiber";

import * as THREE from 'three'

function Sound({ url, paused}) {
    const sound = useRef()
    const { camera } = useThree();
    const [listener] = useState(() => new THREE.AudioListener());
    const buffer = url

    useEffect(() => {
      let localRef = null;
      if (sound.current) localRef = sound.current;
      sound.current.setBuffer(buffer);
      sound.current.setRefDistance(1);
      sound.current.setLoop(true);
      sound.current.play();
      camera.add(listener);
      return () => {
        localRef.pause();
        camera.remove(listener);
      };
    }, []);
    
    return <positionalAudio ref={sound} args={[listener]} />;
}

function AudioSource({url}) {
    const myMesh = useRef()
    const url1 = url
    
    return (
        <Sound url={url1} paused={false} />
    )
}

export default AudioSource;