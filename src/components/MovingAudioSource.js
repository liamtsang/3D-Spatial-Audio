import * as THREE from "three";
import { Box, Sphere, MeshWobbleMaterial, MeshDistortMaterial, GradientTexture } from "@react-three/drei"
import React, { useRef, useEffect, useState } from "react";
import { useThree, useLoader, useFrame } from "@react-three/fiber";
import AudioSource from "./AudioSource"
import ShapingCurves from "./parametric/ShapingCurves";

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

function MovingAudioSource(props) {
    const [loadtime, setLoadtime] = useState("");

    const myMesh = useRef()
    const buffer = useLoader(THREE.AudioLoader, props.url);
    const monobuffer = cloneAudioBufferMono(buffer);
    const channelDataAudio = buffer.getChannelData(0);
    const channelDataX = buffer.getChannelData(1);
    const channelDataY = buffer.getChannelData(2);
    const channelDataZ = buffer.getChannelData(3);
    const channelDataAmp = buffer.getChannelData(4);
    const channelDataCentroid = buffer.getChannelData(5);
    // console.log(buffer)
    useFrame(({clock}) => {
        if (!loadtime) {
            setLoadtime(clock.elapsedTime);
        } else {
            let p = Math.floor((clock.elapsedTime-loadtime)*48000);
            let newPosition = new THREE.Vector3(channelDataX[p]*10,channelDataZ[p]*10,channelDataY[p]*10);
            let propsVector = new THREE.Vector3(props.vx,props.vy,props.vz);
            let finalPos = newPosition.add(propsVector)
            myMesh.current.position.lerp(finalPos, .1);
        }
    })

    return (
        <mesh ref={myMesh}>
            {loadtime>0 && <ShapingCurves scale={[1,1,1]} channelDataAmp={channelDataAmp} channelDataCentroid={channelDataCentroid} loadTime={loadtime}/>}
            <AudioSource url={monobuffer} paused={props.paused} ></AudioSource>
        </mesh>
    )    
}

export default MovingAudioSource;