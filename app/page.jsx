"use client";

import {
  Box,
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Canvas style={{ position: "absolute"}}>
        <ambientLight />
        <ScrollControls pages={3}>
           <Scene /> 
          <Scroll html>
            <Over/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
function Scene() {
  const ref = useRef();
  const scroll = useScroll();
  const scrolls = useScroll().offset * 3 + 1;

  // useFrame(() => {
  //   console.log(scroll.offset * 3 + 1);
  // });

  return (
    <mesh>
      <Box args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Over() {
  return (
    <div>
            <div style={{ height: "100vh" }}>Page 1</div>
      <div style={{ height: "100vh" }}>Page 2</div>
      <div style={{ height: "100vh" }}>Page 3</div>
    </div>
  );
}

const Layout = styled.div`
  height: 100vh;
  width: 100%;
`;
