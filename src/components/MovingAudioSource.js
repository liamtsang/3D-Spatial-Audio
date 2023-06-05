import { Box, Sphere, MeshWobbleMaterial, MeshDistortMaterial, GradientTexture } from "@react-three/drei"
import React, { useRef, useEffect, useState } from "react";
import { useThree, useLoader, useFrame } from "@react-three/fiber";

import AudioSource from "./AudioSource"

function MovingAudioSource({url, direction}) {
    const myMesh = useRef()
    
    useFrame(({ clock }) => {
        myMesh.current.position.x = 5*direction*Math.sin(2.5*clock.getElapsedTime())
        myMesh.current.position.z = 5*Math.cos(2.5*direction*clock.getElapsedTime())
        myMesh.current.position.y = 5*direction*Math.cos(clock.getElapsedTime())
    })

    return (
        <mesh ref={myMesh}>
            <octahedronGeometry radialSegments={12} tubularSegments={48}></octahedronGeometry>
            {/* <MeshWobbleMaterial factor={1} speed={2} /> */}
            <MeshDistortMaterial distort={.75} speed={2}>
                <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
            />
            </MeshDistortMaterial>
            
            <AudioSource url={url}></AudioSource>
        </mesh>
    )
}

export default MovingAudioSource;