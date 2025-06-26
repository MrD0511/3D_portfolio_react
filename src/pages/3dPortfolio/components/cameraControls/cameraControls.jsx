import React, { useRef,useImperativeHandle } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import gsap from 'gsap';

function CameraControls({ screenPositionRef, setOrbitEnabled }, ref) {
  // const { camera, scene } = useThree();
  const {camera} = useThree();
  const isTransitioning = useRef(false);

  const initialCameraPosition = new Vector3(22, 14, -30); // Your initial camera position

  const moveToScreen = () => {
    if (screenPositionRef.current) {
      isTransitioning.current = true;

      // Animate camera position to move in front of the screen and look at the targetObject
      // -0.5, 11.7, -0.23

      gsap.to(camera.position, {
        x: screenPositionRef.current.x - 0.28,
        y: screenPositionRef.current.y + 1.08,
        z: screenPositionRef.current.z - 1.9,
        duration: 2,
        ease: 'power2.inOut',
        onComplete: () => {
          isTransitioning.current = false;
          camera.lookAt(new Vector3(-0.5, 11.58, -0.23));
         
          setOrbitEnabled(false); // Disable OrbitControls after zooming in
        },
      });
    }
  };

  const resetCameraPosition = () => {
    isTransitioning.current = true;

    // Animate camera position back to the initial position
    gsap.to(camera.position, {
      x: initialCameraPosition.x,
      y: initialCameraPosition.y,
      z: initialCameraPosition.z,
      duration: 2,
      ease: 'power2.inOut',
      onComplete: () => {
        isTransitioning.current = false;
        camera.lookAt(new Vector3(22, 7.6, -0.23)); // Reset lookAt to the original target
        setOrbitEnabled(true); // Enable OrbitControls again after reset
      },
    });
  };
  
  useImperativeHandle(ref, () => ({
    moveToScreen,
    resetCameraPosition,
  }));

  

  return null; // No need to render anything for CameraControls component
}

export default React.forwardRef(CameraControls);
