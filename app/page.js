'use client'

import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <Canvas>
        <OrbitControls/>
        <Box>
          <meshNormalMaterial/>
        </Box>
      </Canvas>
    </>
  );
}
