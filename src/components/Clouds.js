import vertexShader from '../shaders/clouds/vertexShader';
import fragmentShader from '../shaders/clouds/fragmentShader';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Clouds = ({position, scale, rotation}) => {
    const mesh = useRef();
    const { camera } = useThree();
    useFrame(({ clock }) => {
        mesh.current.rotation.y += 0.001;
		mesh.current.material.uniforms.cameraPos.value.copy( camera.position );
		mesh.current.material.uniforms.frame.value ++;
    })


    // Texture
    const size = 128;
    const data = new Uint8Array( size * size * size );

    let i = 0;
    const tscale = 0.05;
    const perlin = new ImprovedNoise();
    const vector = new THREE.Vector3();

    for ( let z = 0; z < size; z ++ ) {
        for ( let y = 0; y < size; y ++ ) {
            for ( let x = 0; x < size; x ++ ) {
                const d = 1.0 - vector.set( x, y, z ).subScalar( size / 2 ).divideScalar( size ).length();
                data[ i ] = ( 128 + 128 * perlin.noise( x * tscale / 1.5, y * tscale, z * tscale / 1.5 ) ) * d * d;
                i ++;
            }
        }
    }

    const texture = new THREE.Data3DTexture( data, size, size, size );
    texture.format = THREE.RedFormat;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.unpackAlignment = 1;
    texture.needsUpdate = true;
    return (
        <mesh ref={mesh} position={position} scale={scale} rotation={rotation}>
            <boxGeometry args={[1,1,1]} />
            <rawShaderMaterial 
                glslVersion ={THREE.GLSL3}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={{
                    base: { value: new THREE.Color( 0x798aa0 ) },
                    map: { value: texture },
                    cameraPos: { value: new THREE.Vector3() },
                    threshold: { value: 0.25 },
                    opacity: { value: 0.25 },
                    range: { value: 0.1 },
                    steps: { value: 100 },
                    frame: { value: 0 }
                }}
                side= {THREE.BackSide}
                transparent= {true}
            />
        </mesh>
    );
};

export default Clouds