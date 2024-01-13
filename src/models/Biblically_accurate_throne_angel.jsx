/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 biblically_accurate_throne_angel.glb --transform
Author: Farbod Toorani (https://sketchfab.com/farbodtoorani8)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/biblically-accurate-throne-angel-3e3beccf76964054a620e711e50512ac
Title: Biblically Accurate Throne Angel
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

export default function AngelModel(props) {
  const group = useRef()
  const Ctrl1 = useRef()
  const Ctrl2 = useRef()
  const Ctrl3 = useRef()
  const Ctrl4 = useRef()
  const { nodes, materials, animations } = useGLTF('/models/biblically_accurate_throne_angel-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useFrame(({clock}) => {
    let p = Math.floor((clock.elapsedTime)*48000);
    if (Math.abs(props.data[p]) > .1) {
      Ctrl1.current.rotation.y += .01
    }
    if (Math.abs(props.data[p]) > .075) {
      Ctrl2.current.rotation.y += .01
    } 
    if (Math.abs(props.data[p]) > .05) {
      Ctrl3.current.rotation.x += .01
    } 
    if (Math.abs(props.data[p]) > .01) {
      Ctrl4.current.rotation.z += .01
    } 
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode" scale={0.01}>
          <group name="Ctrl_Master" position={[0, 13.158, 0]}>
            <group name="Ctrl_4" ref={Ctrl4} position={[0, -0.001, 0]} rotation={[1.785, -1.079, -1.133]}>
              <group name="Ring4" position={[0, 0.001, 0]}>
                <group name="polySurface39" position={[7.671, -6.618, 6.231]}>
                  <mesh name="polySurface39_standardSurface3_0" geometry={nodes.polySurface39_standardSurface3_0.geometry} material={materials.standardSurface3} />
                </group>
                <mesh name="Ring4_standardSurface2_0" geometry={nodes.Ring4_standardSurface2_0.geometry} material={materials.standardSurface2} />
              </group>
            </group>
            <group name="Ctrl_3" ref={Ctrl3} position={[0, -0.003, 0]} rotation={props.rot}>
              <group name="Ring3" position={[0, 0.003, 0]}>
                <group name="polySurface39_1" position={[11.609, 5.794, 9.898]}>
                  <mesh name="polySurface39_standardSurface3_0_1" geometry={nodes.polySurface39_standardSurface3_0_1.geometry} material={materials.standardSurface3} />
                </group>
                <mesh name="Ring3_standardSurface2_0" geometry={nodes.Ring3_standardSurface2_0.geometry} material={materials.standardSurface2} />
              </group>
            </group>
            <group name="Ctrl_2" ref={Ctrl2} position={[0, 0.019, 0]} rotation={[-0.802, 1.279, 3.124]}>
              <group name="Ring2" position={[0, -0.019, 0]}>
                <group name="polySurface39_2" position={[-7.711, -10.162, 13.743]}>
                  <mesh name="polySurface39_standardSurface3_0_2" geometry={nodes.polySurface39_standardSurface3_0_2.geometry} material={materials.standardSurface3} />
                </group>
                <mesh name="Ring2_standardSurface2_0" geometry={nodes.Ring2_standardSurface2_0.geometry} material={materials.standardSurface2} />
              </group>
            </group>
            <group name="Ctrl_1" ref={Ctrl1} rotation={[1.785, -1.079, -1.133]}>
              <group name="Ring1">
                <group name="polySurface39_3" position={[-0.025, -20.535, -7.451]}>
                  <mesh name="polySurface39_standardSurface3_0_3" geometry={nodes.polySurface39_standardSurface3_0_3.geometry} material={materials.standardSurface3} />
                </group>
                <mesh name="Ring1_standardSurface2_0" geometry={nodes.Ring1_standardSurface2_0.geometry} material={materials.standardSurface2} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models//biblically_accurate_throne_angel-transformed.glb')
