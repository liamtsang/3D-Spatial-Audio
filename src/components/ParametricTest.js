import { extend } from '@react-three/fiber'
import { ParametricGeometry } from 'three/addons/geometries/ParametricGeometry.js';
import { ParametricGeometries } from 'three/addons/geometries/ParametricGeometries.js';

extend({ ParametricGeometry, ParametricGeometries })

export default function ParametricTest() {
    const path = new path();
    path.lineTo( 0, 0.8 );
    const tube = new ParametricGeometries.TubeGeometry(path);
    console.log(tube)
    
    return (
        <mesh>
            <parametricGeometry 
            scale={[5,5,5]}
            args={[ParametricGeometries.Klein, 25, 1]}
            />
            <meshBasicMaterial color="red" wireframe/>
        </mesh>
    )
}