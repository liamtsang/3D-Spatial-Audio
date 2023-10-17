import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CurveMesh = ({ material, tubeData, channelData, loadTime }) => {
  const meshRef = useRef();
  const { posArray, angleArray, uvArray } = tubeData;
  useFrame(({clock}) => {
    if (meshRef?.current) {
      let p = Math.floor((clock.elapsedTime-loadTime)*48000);
      meshRef.current.material.uniforms.time.value += .01;
      meshRef.current.material.uniforms.vibration.value += channelData[p]/200;
      // meshRef.current.material.uniforms.animateStrength.value = channelData[p]*2;
      // meshRef.current.material.uniforms.animateRadius.value = channelData[p]*2;
    }
  });
  return (
    <mesh
      ref={meshRef}
      // geometry={geometry}
      material={material}
      frustumCulled={false}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position" // <- new attributes attach
          array={posArray}
          itemSize={1}
          count={posArray.length}
        />
        <bufferAttribute
          attach="attributes-angle" // <- new attributes attach
          array={angleArray}
          itemSize={1}
          count={angleArray.length}
        />
        <bufferAttribute
          attach="attributes-uv" // <- new attributes attach
          array={uvArray}
          itemSize={2}
          count={uvArray.length}
        />
      </bufferGeometry>
    </mesh>
  );
};

export default CurveMesh;
