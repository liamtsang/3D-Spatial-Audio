import React, { useRef, useEffect, useState } from "react";
import { useThree, useLoader, useFrame } from "@react-three/fiber";
import Reverb from "@logue/reverb";
import { SYSTEM } from "@thi.ng/random";
import * as Noise from "@thi.ng/colored-noise";
import * as THREE from 'three'

var OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

function Sound({ url, paused}) {
    const sound = useRef()
    const { camera } = useThree();
    const [listener] = useState(() => new THREE.AudioListener());
    //const buffer = url

    useEffect(() => {
      const Audio = new THREE.Audio(listener);
      const ctx = Audio.context;
      console.log(ctx)
      const reverb = new Reverb(ctx, {
        noise: 'Noise.pink',
        scale: 64,
        peaks: 2,
        randomAlgorithm: SYSTEM,
        decay: 2,
        delay: 0,
        reverse: false,
        time: 50,
        filterType: 'lowpass',
        filterFreq: 2200,
        filterQ: 1,
        mix: .5,
        once: false,});
      const sourceNode = ctx.createBufferSource();
      // Connect Reverb
      reverb.connect(sourceNode);
      sourceNode.buffer = url;

      console.log(reverb)
      sourceNode.connect(ctx.destination);
      const buffer = sourceNode.buffer;
      console.log(sourceNode)

      let localRef = null;
      if (sound.current) localRef = sound.current;
        console.log(sound.current)
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

function AudioSource(props) {
    const myMesh = useRef()
    const url1 = props.url
    
    if (props.paused == false) return (
      <mesh>
        <Sound url={props.url} paused={props.paused} />
      </mesh>
    )
}




export default AudioSource;