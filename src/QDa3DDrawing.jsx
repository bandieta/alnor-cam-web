import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Wall = ({ position, args }) => {
  return (
    <mesh position={position} receiveShadow castShadow>
      <boxGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
};

const QDa3DDrawing = ({ a, b, L }) => {
  const cameraPosition = [0, 0, Math.max(a, b, L) * 2];

  return (
    <Canvas camera={{ position: cameraPosition }}>
      <ambientLight />
      <spotLight position={[10, 10, 10]} castShadow />
      <Wall position={[0, 0, L / 2]} args={[a, b, 0.1]} />
      <Wall position={[0, 0, -L / 2]} args={[a, b, 0.1]} />
      <Wall position={[a / 2, 0, 0]} args={[0.1, b, L]} />
      <Wall position={[-a / 2, 0, 0]} args={[0.1, b, L]} />
      {/* <Wall position={[0, b / 2, 0]} args={[a, 0.1, L]} />
      <Wall position={[0, -b / 2, 0]} args={[a, 0.1, L]} /> */}
      <OrbitControls />
    </Canvas>
  );
};

export default QDa3DDrawing;