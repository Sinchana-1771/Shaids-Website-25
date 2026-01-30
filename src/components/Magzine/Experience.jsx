import { Environment, Float, OrbitControls, Text } from "@react-three/drei";
import { Book } from "./Book";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const MovingText = () => {
  const textRef = useRef();
  const text =
    "SHAIDS - Student Hive Of Artificial Intelligence And Data Science  SHAIDS - Student Hive Of Artificial Intelligence And Data Science  ";

  useFrame((state, delta) => {
    if (textRef.current) {
      textRef.current.position.x -= delta * 1.5;
      if (textRef.current.position.x < -35) {
        textRef.current.position.x = 35;
      }
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 0.5, -4]}
      fontSize={2.5}
      color="#4ee2ec"
      anchorX="center"
      anchorY="middle"
      fontWeight={900}
    >
      {text}
      <meshStandardMaterial
        emissive="#4ee2ec"
        emissiveIntensity={1}
        toneMapped={false}
      />
    </Text>
  );
};

export const Experience = () => {
  const bookGroup = useRef();

  useFrame((state, delta) => {
    easing.dampE(
      bookGroup.current.rotation,
      [-state.mouse.y * 0.5 - Math.PI / 4, state.mouse.x * 0.5, 0],
      0.25,
      delta,
    );
  });

  return (
    <>
      <MovingText />
      <group ref={bookGroup}>
        <Float floatIntensity={1} speed={2} rotationIntensity={2}>
          <Book />
        </Float>
      </group>
      <OrbitControls enableRotate={false} />
      <Environment preset="studio"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
