import React, {useEffect} from 'react';
import {Canvas} from "@react-three/fiber";
import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import * as THREE from "three";
import {Computer} from "./Models/Computer-optimized.jsx";


const ContactExperience = () => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas camera={{position: [0, 3, 7], fov: 45}} shadows>
                {/* Add lighting */}
                <ambientLight intensity={0.5} color="#fff4e6"/>
                <directionalLight position={[5, 5, 3]} intensity={0.5} color="#ffd9b3"/>
                {/*<spotLight position={[-5, 5, 5]} intensity={1} angle={0.15} penumbra={1} castShadow />*/}
                <directionalLight position={[5, 9, 1]} castShadow intensity={2.5}  color="#ffd9b3"/>

                {/* Environment for reflections */}
                <Environment preset="city"/>

                {/* Controls for interactivity */}
                <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 5}
                               maxPolarAngle={Math.PI / 2}/>

                <group scale={0.03} position={[0, -1.5, -2]} castShadow>
                    <Computer/>
                </group>
                <group scale={[1, 1, 1]}>
                    <mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[30, 30]}/>
                        <meshStandardMaterial color="#a46b2d"/>
                    </mesh>

                </group>
            </Canvas>
        </div>
    );
};

export default ContactExperience;