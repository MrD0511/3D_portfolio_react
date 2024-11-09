import React, { useRef,useImperativeHandle } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import gsap from 'gsap';
// import * as THREE from 'three';

function CameraControls({ screenPositionRef, setOrbitEnabled }, ref) {
  // const { camera, scene } = useThree();
  const {camera} = useThree();
  const isTransitioning = useRef(false);

  const initialCameraPosition = new Vector3(22, 14, -30); // Your initial camera position

  const moveToScreen = () => {
    if (screenPositionRef.current) {
      isTransitioning.current = true;

      // Animate camera position to move in front of the screen and look at the targetObject
      gsap.to(camera.position, {
        x: screenPositionRef.current.x - 0.34,
        y: screenPositionRef.current.y,
        z: screenPositionRef.current.z - 1.3,
        duration: 2,
        ease: 'power2.inOut',
        onComplete: () => {
          isTransitioning.current = false;
          camera.lookAt(new Vector3(-0.5, 7.6, -0.23));
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

  // useEffect(() => {
  //   // Create a dummy object and add it to the scene at the screen position
  //   const targetObject = new THREE.Object3D();
  //   scene.add(targetObject);

  //   const handleKeyPress = (event) => {
  //     if (event.key === 's' && screenPositionRef.current) {
  //       moveToScreen();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyPress);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyPress);
  //     scene.remove(targetObject); // Cleanup the dummy object
  //   };
  // }, [screenPositionRef, camera, scene, setOrbitEnabled]);

  // Expose moveToScreen and resetCameraPosition functions to parent through ref
  useImperativeHandle(ref, () => ({
    moveToScreen,
    resetCameraPosition,
  }));

  return null; // No need to render anything for CameraControls component
}

export default React.forwardRef(CameraControls);
