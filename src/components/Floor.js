
const Floor = (props) => {

  return (
    <mesh receiveShadow rotation={props.rotation} >
      <planeGeometry args={[0, 0]}/>
      <meshStandardMaterial transparent={true} opacity={.5} />
    </mesh>
  );
};

export default Floor;
