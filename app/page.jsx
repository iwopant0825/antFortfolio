"use client";

import {
  Box,
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Canvas style={{ position: "absolute" }}>
        <ambientLight />
        <ScrollControls pages={4} damping={0.2}>
          <ScrollManager />
          <Scene />
          <Scroll html style={{ width: "100%" }}>
            <Over />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

function ScrollManager() {
  const data = useScroll();
  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  return null;
}

function Scene() {
  return (
    <mesh>
      <Box args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Over() {
  const scroll = useScroll();
  const [scrollData, setScrollData] = useState(scroll.offset * 3 + 1);
  const test1 = useRef(null);
  const test2 = useRef(null);
  const test3 = useRef(null);
  const test4 = useRef(null);

  const scrollToSection = (elementRef) => {
    scroll.el.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useFrame(() => {
    setScrollData(scroll.offset * 3 + 1); // 현재 스크롤 오프셋을 콘솔에 출력
  });

  useEffect(() => {
    if (scrollData >= 1.01 && scrollData < 1.1) {
      scrollToSection(test2);
    } 
    
    else if (scrollData >= 2.01 && scrollData < 2.1) {
      scrollToSection(test3);
    } 
    
    else if (scrollData >= 3.01 && scrollData < 3.1) {
      scrollToSection(test4);
    }

    console.log(scrollData);
  }, [scrollData]);

  return (
    <>
      <div ref={test1} style={{ height: "100vh", width: "100%" }}>
        Page 1
      </div>
      <div ref={test2} style={{ height: "100vh", width: "100%" }}>
        Page 2
      </div>
      <div ref={test3} style={{ height: "100vh", width: "100%" }}>
        Page 3
      </div>
      <div ref={test4} style={{ height: "100vh", width: "100%" }}>
        Page 4
      </div>
    </>
  );
}

const Layout = styled.div`
  height: 100vh;
  width: 100%;
`;
