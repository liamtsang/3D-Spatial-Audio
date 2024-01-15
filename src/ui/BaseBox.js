
const BaseBox = ({ ...props }) => {
  
  return (
    <mesh castShadow position={props.position} ref={ref}>
      <boxGeometry args={props.args} />
      <meshBasicMaterial color={props.color} />
    </mesh>
  );
};

export default BaseBox;
