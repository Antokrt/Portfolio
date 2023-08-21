"use client";
import React, { useRef } from "react";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Box} from "@react-three/drei";

const Scene = ({ imageRef }) => {
    return (
        <group>
            <Box ref={imageRef} position={[0, 0, 0]}>
                <meshBasicMaterial attach="material" color="white" />
            </Box>
        </group>
    );
};

const ImageDrag = () => {
    const imageRef = useRef();
    const isDragging = useRef(false);

    const handlePointerDown = () => {
        isDragging.current = true;
    };

    const handlePointerUp = () => {
        isDragging.current = false;
    };

    const handlePointerMove = (event) => {
        if (isDragging.current) {
            const { movementX, movementY } = event.nativeEvent;
            imageRef.current.position.x += movementX * 0.01;
            imageRef.current.position.y -= movementY * 0.01;
        }
    };

    return (
        <Canvas
            style={{
                width: "100%",
                height: "100%",
                cursor: isDragging.current ? "grabbing" : "grab",
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
        >
            <Scene imageRef={imageRef} />
            <CanvasCameraControl /> {/* Add this to enable camera control */}
        </Canvas>
    );
};

const CanvasCameraControl = () => {
    const { camera } = useThree();
    useFrame(() => camera.updateMatrixWorld());
    return null;
};

export default ImageDrag;