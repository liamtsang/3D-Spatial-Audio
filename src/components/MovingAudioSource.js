import * as THREE from "three";
import { Box, Sphere, MeshWobbleMaterial, MeshDistortMaterial, GradientTexture } from "@react-three/drei"
import React, { useRef, useEffect, useState } from "react";
import { useThree, useLoader, useFrame } from "@react-three/fiber";
import AudioSource from "./AudioSource"

function cloneAudioBufferMono(fromAudioBuffer) {
    const audioBuffer = new AudioBuffer({
      length:fromAudioBuffer.length, 
      numberOfChannels:1,
      sampleRate:fromAudioBuffer.sampleRate
    });
    for(let channelI = 0; channelI < audioBuffer.numberOfChannels; ++channelI) {
      const samples = fromAudioBuffer.getChannelData(channelI);
      audioBuffer.copyToChannel(samples, channelI);
    }
    return audioBuffer;
}

function MovingAudioSource({url}) {
    const myMesh = useRef()
    const buffer = useLoader(THREE.AudioLoader, url);
    const monobuffer = cloneAudioBufferMono(buffer);
   
    const channelDataX = buffer.getChannelData(1);
    const channelDataY = buffer.getChannelData(2);
    const channelDataZ = buffer.getChannelData(3);
    const channelData4 = buffer.getChannelData(4);
    const channelData5 = buffer.getChannelData(5);
    // console.log(buffer)

    let loadtime;
    let loaded = false;
    useFrame(({clock}) => {
        if (loaded == false) {
            loadtime = clock.elapsedTime;
            loaded = true;
        } else {
            let p = Math.floor((clock.elapsedTime-loadtime)*48000);
            let newPosition = new THREE.Vector3(channelDataX[p]*10,channelDataZ[p]*10,channelDataY[p]*10);
            myMesh.current.position.lerp(newPosition, .1);
        }
    })

    return (
        <mesh ref={myMesh}>
            <octahedronGeometry radialSegments={12} tubularSegments={48}></octahedronGeometry>
            <MeshDistortMaterial distort={.75} speed={2}>
                <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
            />
            </MeshDistortMaterial>
            <AudioSource url={monobuffer}></AudioSource>
        </mesh>
    )    
}

export default MovingAudioSource;