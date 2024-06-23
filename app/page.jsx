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
    <Layout>
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
    </Layout>
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
  const test1 = useRef(null);
  const test2 = useRef(null);
  const test3 = useRef(null);
  const test4 = useRef(null);
  const [page, setpage] = useState(1);

  const scrollToSection = (elementRef) => {
    scroll.el.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "auto",
    });
  };

  useFrame(() => {
    const scrollData = scroll.offset * 3 + 1;

    if (page == 1) {
      if (scrollData >= page + 0.01 && scrollData < page + 0.1) {
        scrollToSection(test2);
      }
    } else if (page == 2) {
      if (scrollData >= page + 0.01 && scrollData < page + 0.1) {
        scrollToSection(test3);
      } else if (scrollData <= page - 0.01 && scrollData > page - 0.1) {
        scrollToSection(test1);
      }
    } else if (page == 3) {
      if (scrollData >= page + 0.01 && scrollData < page + 0.1) {
        scrollToSection(test4);
      } else if (scrollData <= page - 0.01 && scrollData > page - 0.1) {
        scrollToSection(test2);
      }
    } else if (page == 4) {
      if (scrollData <= page - 0.01 && scrollData > page - 0.1) {
        scrollToSection(test3);
      }
    }

    if (scrollData == 1) {
      setpage(1);
    } else if (scrollData == 2) {
      setpage(2);
    } else if (scrollData == 3) {
      setpage(3);
    } else if (scrollData == 4) {
      setpage(4);
    }

    if (
      scrollData !== 1 &&
      scrollData !== 2 &&
      scrollData !== 3 &&
      scrollData !== 4
    ) {
      scroll.el.style.overflow = "hidden";
    } else {
      scroll.el.style.overflow = "auto";
    }
  });

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
  ::-webkit-scrollbar {
    display: none;
  }
`;
