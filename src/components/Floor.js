
import { usePlane } from '@react-three/cannon';
const Floor = (props) => {

  const [ref] = usePlane((index) => ({ type: 'Static', mass: 0, ...props }));
  return (
    <mesh receiveShadow rotation={props.rotation} >
      <planeGeometry args={[0, 0]}/>
      <meshStandardMaterial transparent={true} opacity={.5} />
    </mesh>
  );
};

export default Floor;
