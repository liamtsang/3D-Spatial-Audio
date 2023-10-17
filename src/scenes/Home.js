import { Sky, Stars, Stats, Clouds, Cloud } from '@react-three/drei';
import PillarModel from '../models/Pillar';
import CustomClouds from '../components/CustomClouds';
import Circles from '../models/Circles';

const Home = ({ trackIndex}) => {
  if (trackIndex == 0) return (
    <group>
      <Clouds position={[0,-4,0]}>
        <Cloud segments={500} bounds={[90, 2, 90]} volume={200} />
      </Clouds>
      <CustomClouds position={[0, -1, 0]} scale={[150,1,150]} rotation={[0,0,0]} rotating={true} />

      <Circles scale={[90,90,90]} position={[0,-2,0]}/>

      <PillarModel position={[0,5,9]} scale={[3,3,3]}/>
      <PillarModel position={[0,5,-9]} scale={[3,3,3]}/>
      <PillarModel position={[9,5,0]} scale={[3,3,3]}/>
      <PillarModel position={[-9,5,0]} scale={[3,3,3]}/>
      <PillarModel position={[6,5,6]} scale={[3,3,3]}/>
      <PillarModel position={[-6,5,6]} scale={[3,3,3]}/>
      <PillarModel position={[6,5,-6]} scale={[3,3,3]}/>
      <PillarModel position={[-6,5,-6]} scale={[3,3,3]}/>
    </group>
  );
};

export default Home;