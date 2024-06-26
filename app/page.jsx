"use client";

import {
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import styled from "styled-components";
import ScrollManager from "./components/ScrollManager";
import Scene from "./components/Scene";
import Over from "./components/Over";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export default function Home() {
  const [sceneAn, setSceneAn] = useState(1)
  return (
    <Layout>
      <Canvas style={{ position: "absolute" }}>
        <ambientLight />
        <ScrollControls pages={5} damping={0.2}>
          <ScrollManager />
          <Scene sceneAn={sceneAn}/>
          <Scroll html style={{ width: "100%" }}>
            <Over setSceneAn={setSceneAn}/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </Layout>
  );
}

const Layout = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;
