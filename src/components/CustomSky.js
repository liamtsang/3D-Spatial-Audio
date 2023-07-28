import * as THREE from 'three';

const CustomSky = () => {
    const canvas = document.createElement( 'canvas' );
    canvas.width = 1;
    canvas.height = 32;

    const context = canvas.getContext( '2d' );
    const gradient = context.createLinearGradient( 0, 0, 0, 32 );
    gradient.addColorStop( 0.0, '#014a84' );
    gradient.addColorStop( 0.5, '#0561a0' );
    gradient.addColorStop( 1.0, '#437ab6' );
    context.fillStyle = gradient;
    context.fillRect( 0, 0, 1, 32 );

    const skyMap = new THREE.CanvasTexture( canvas );
    skyMap.colorSpace = THREE.SRGBColorSpace;

    const sky = new THREE.Mesh(
        new THREE.SphereGeometry( 10 ),
        new THREE.MeshBasicMaterial( { map: skyMap, side: THREE.BackSide } )
    );
    return(
        <mesh>
            <sphereBufferGeometry args={[10, 32, 32]} />
            <meshBasicMaterial map={skyMap} side={THREE.BackSide} />
        </mesh>
    )
}

export default CustomSky;