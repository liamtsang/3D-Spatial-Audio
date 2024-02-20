import React, {
  Suspense,
  useState,
  useEffect,
  useContext,
  useRef,
  createContext
} from 'react'
import {
  MeshDistortMaterial,
  GradientTexture,
  Edges,
  Text,
  useCursor,
  Box,
  Loader
} from '@react-three/drei'
import { useBox } from '@react-three/cannon'

import { Interactive } from '@react-three/xr'
import { TeleportationPlane } from '@react-three/xr'

import { Cavern } from '../models/Cavern.jsx'
import MovingAudioSource from '../components/MovingAudioSource'

const MyContext = createContext()

const Portal1 = ({ chooseTrack, trackIndex, position }) => {
  const [trackBool, setTrackBool] = useState(false)
  const [trackInt, setTrackInt] = useState(0)
  function setTrackVisible() {
    setTrackBool(!trackBool)
    setTrackInt(1 - trackInt)
  }

  const [hovered, set] = useState(false)
  useCursor(hovered /*'pointer', 'auto', document.body*/)
  let textState = 'Click to enter'
  if (!trackBool) {
    textState = 'Click to enter'
  } else {
    textState = 'Return'
  }

  useEffect(() => {
    if (trackBool) {
      chooseTrack(1)
    } else {
      chooseTrack(0)
    }
  })

  let portalVisible = true
  if (trackIndex == 0 || trackIndex == 1) {
    portalVisible = true
  } else {
    portalVisible = false
  }

  return (
    <group>
      <Interactive
        onSelect={(event) => setTrackVisible()}
        onHover={(event) => set(true)}
        onPointerOut={() => set(false)}
      >
        <mesh
          visible={portalVisible}
          castShadow
          position={position}
          scale={[0.5, 0.5, 0.5]}
          onClick={() => setTrackVisible((trackVisible) => !trackVisible)}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        >
          <octahedronGeometry />
          <MeshDistortMaterial distort={0.25} speed={5}>
            <GradientTexture
              stops={[0, 1]}
              colors={['red', 'grey']}
              size={1024}
            />
          </MeshDistortMaterial>
        </mesh>
      </Interactive>

      <Text
        visible={hovered}
        font='./fonts/IBM.json'
        color={'white'}
        scale={[0.25, 0.25, 0.25]}
        position={[-4, 0.25, 0]}
        rotation={[0, 3.14 / 2, 0]}
        anchorX='center'
        anchorY='middle'
      >
        {textState}
      </Text>
      {trackBool && (
        <MyContext.Provider value={{ trackBool, trackInt, setTrackVisible }}>
          <Track1 />
        </MyContext.Provider>
      )}
    </group>
  )
}

function Track1(props) {
  const { trackBool, trackInt } = useContext(MyContext)

  console.log(trackInt)
  let colResp = useRef()
  const [ref0] = useBox((index) => ({
    type: 'Static',
    position: [0, 15, 0],
    args: [6, 0.5, 6],
    mass: 0,
    collisionResponse: 1,
    ...props
  }))
  const [ref1] = useBox((index) => ({
    type: 'Static',
    mass: 0,
    position: [0, 0, 0],
    args: [50, 0.5, 50],
    collisionResponse: 1,
    ...props
  }))
  const [ref2] = useBox((index) => ({
    type: 'Static',
    mass: 0,
    position: [10.65, 7.55, 0],
    args: [21.213, 0.5, 6],
    rotation: [0, 0, -0.785398],
    collisionResponse: 1,
    ...props
  }))

  return (
    <Suspense fallback={null}>
      <mesh position={[0, 0, 0]} visible={trackBool}>
        {/* Top Platform */}
        <Suspense fallback={null}>
          <Box ref={ref0} visible={false} />
          <gridHelper
            position={[0, 15.25, 0]}
            args={[6, 6, 0xff0000, 'teal']}
          />
          <Box position={[0, 15, 0]} args={[6, 0.5, 6]} renderOrder={1}>
            <mesh scale={[0.55, 1, 0.55]}>
              <TeleportationPlane leftHand={true} rightHand={true} />
            </mesh>
            <meshBasicMaterial transparent={true} opacity={0.015} />
            <Edges scale={1} threshold={15} color='teal' />
          </Box>

          {/* Floor */}
          <Box ref={ref1} visible={false} />
          <Box position={[0, 0, 0]} args={[50, 0.5, 50]} renderOrder={1}>
            <mesh position={[0, -15, 0]}>
              <TeleportationPlane leftHand={true} rightHand={true} />
            </mesh>
            <meshBasicMaterial color={'black'} />
          </Box>

          {/* {/* Stair */}
          <Box ref={ref2} visible={false} />
          <Box
            renderOrder={1}
            position={[10.65, 7.55, 0]}
            args={[21.213, 0.5, 6]}
            rotation={[0, 0, -0.785398]}
          >
            <mesh scale={[1, 1, 1]}>
              <TeleportationPlane leftHand={true} rightHand={true} />
            </mesh>
            <meshBasicMaterial transparent={true} opacity={0.015} />
            <Edges scale={1} threshold={15} color='teal' />
          </Box>
        </Suspense>

        <Cavern
          position={[0, 40, 0]}
          scale={[10, 10, 10]}
          rotation={[-3.14 / 2, 0, 0]}
        />
        {/* <MovingAudioSource vx={0} vy={0} vz={0} paused={!trackVisible} url="https://liamtsang.com/wget/aphrodite_9_12_take_2.wav"></MovingAudioSource>
          <MovingAudioSource vx={0} vy={0} vz={0} paused={!trackVisible} url="https://liamtsang.com/wget/eros_9_25_take_7.wav"></MovingAudioSource> */}
        <Suspense>
          <MovingAudioSource
            vx={0}
            vy={15}
            vz={0}
            paused={false}
            url='https://dl.dropbox.com/scl/fi/6okqzgpa4l7a4a117urji/aphrodite_9_12_take_2.wav?rlkey=u49knyja12alszh7kk9dmmax2'
          />
          <MovingAudioSource
            vx={0}
            vy={15}
            vz={0}
            paused={false}
            url='https://dl.dropbox.com/scl/fi/3t5drpfsqs5h8ls9fzn0e/eros_9_25_take_7.wav?rlkey=u4mrtsb8y72ilgnxfp7st3ghz'
          />
        </Suspense>
      </mesh>
    </Suspense>
  )
}

export default Portal1
