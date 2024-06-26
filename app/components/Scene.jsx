

import { Box, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { MacModel } from "./Model/MacModel";

export default function Scene({ sceneAn }) {
  return (
    <>
      <OrbitControls/>
      <color attach={'background'} args={['gray']}/>
      <ambientLight intensity={0}/>
      <Environment preset="city"/>
      <directionalLight shadow-mapSize={4096} castShadow position={[-4, 11, 4]} intensity={3} />
      <MacModel/>
      <mesh receiveShadow rotation-x={-Math.PI/2}>
          <planeGeometry args={[10,10,10]}/>
          <shadowMaterial opacity={0.1}/>
        </mesh>
    </>
  );
}
