import React from 'react'
import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {useEffect} from "react";
import * as THREE from "three";


const TechIcon = ({model}) => {
    // Load a '.glb' model
    const scene = useGLTF(model.modelPath);
    useEffect(() => {
        if (model.name === 'Interactive Developer')
            scene.scene.traverse((child) => {
            if (child.isMesh && child.name === "Object_5") {
                child.material = new THREE.MeshStandardMaterial({color: 'gray'})
            }
        })
    }, [scene])
    return (
        <Canvas>
            // add basic lighting
            <ambientLight intensity={0.3}/>
            <directionalLight position={[0, 1, 0]} intensity={0.5}/>
            // applies environment reflections for realism
            <Environment preset="city"/>
            // warps the model to floating animation
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} position={model.position} rotation={model.rotation}>
                    <primitive object={scene.scene}/>
                </group>
            </Float>
            // optionally tweaks the material

            // disables zoom
            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}
export default TechIcon
