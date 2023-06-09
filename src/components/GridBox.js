const GridBox = (props) => {
  return (
    <group>
      <mesh receiveShadow>
        <gridHelper args={[10,10]} position={[0,-5,0]} rotation={[0,0,0]}/>
        <meshStandardMaterial wireframe={true} color={props.color} />
      </mesh>
      <mesh receiveShadow>
        <gridHelper args={[10,10]} position={[0,5,0]} rotation={[0,0,0]}/>
        <meshStandardMaterial wireframe={true} color={props.color} />
      </mesh>
      <mesh receiveShadow position={[-5,0,0]} rotation={[0,0,Math.PI/2]}>
        <gridHelper args={[10,10]}/>
        <meshStandardMaterial wireframe={true} color={props.color} />
      </mesh>
      <mesh receiveShadow position={[5,0,0]} rotation={[0,0,Math.PI/2]}>
        <gridHelper args={[10,10]}/>
        <meshStandardMaterial wireframe={true} color={props.color} />
      </mesh>
      <mesh receiveShadow position={[0,0,-5]} rotation={[Math.PI/2,0,0]}>
        <gridHelper args={[10,10]}/>
        <meshStandardMaterial wireframe={true} color={props.color} />
      </mesh>
      <mesh receiveShadow position={[0,0,5]} rotation={[Math.PI/2,0,0]}>
        <gridHelper args={[10,10]}/>
        <meshStandardMaterial wireframe={true} color={props.color} />
      </mesh>
    </group>
  );
};

export default GridBox;
