import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars, Html } from '@react-three/drei';
import { Vector3 } from 'three';
import Portfolio from '../portfolio/portfolio';
import { gsap } from 'gsap';
import CRTBrowserWindow from './components/browserPage/browserWindow';
import LoadingScreen from './components/loadingPage/loadingPage';
import { useNavigate } from 'react-router-dom';
import "./threeScene.css"
import CameraControls from './components/cameraControls/cameraControls';
import {ExternalLink} from 'lucide-react'

const lightBulbPosition = new Vector3(0, 22, 0);
const htmlCanvasPosition = new Vector3(0.84, 10.57, 0.72);
const sceneTargetPosition = new Vector3(22, 18, -0.23);
const screenTargetPosition = new Vector3(-0.5, 11.58, -0.23);

function LightBulb() {
  return (
    <mesh position={lightBulbPosition} castShadow>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color="#FFF1E0" />
      <pointLight distance={40} decay={1.5} intensity={70} color="#FFF1E0" />
    </mesh>
  );
}

function ModelWithScreen({ screenPositionRef, sceneLoading, setSceneLoading }) {
  const { scene } = useGLTF('/scene_compressed.glb' );

  useEffect(()=>{
    if(scene && sceneLoading){
      setSceneLoading(false)
    }
  },[scene, sceneLoading, setSceneLoading])

  useEffect(() => {
    // Set the camera target to the hardcoded position [0.5, 6.6, 0.55] -0.5, 7.6, -0.23
    //[0.84, 10.57, 0.87]
    screenPositionRef.current.set(-0.84, 10.57, -0.60);

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.emissiveIntensity = 0.03;
        child.material.emissive = child.material.color.clone().multiplyScalar(0.1);
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene, screenPositionRef]);

  return (
      <group>
        <primitive object={scene} scale={[0.8, 0.8, 0.8]} />
        <mesh>
        <Html
          transform
          position={htmlCanvasPosition}
          rotation={[0, 0.26, 0]}
          distanceFactor={1.5}
          style={{
            width: '750px',
            height: '576px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            overflowY: 'auto',
            border: '4px solid #333',
            boxShadow: '0px 0px 15px rgba(0, 255, 0, 0.3)',
            position: 'relative',
            scrollbarWidth: 'thin',
            scrollbarColor: '#444444 #1a1a1a',
            
            // WebKit scrollbar styling
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#1a1a1a',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#444444',
              borderRadius: '3px',
              '&:hover': {
                background: '#555555',
              }
            },
          }}
          occlude
        >
            <CRTBrowserWindow>
              <Portfolio />
            </CRTBrowserWindow>
          </Html>
        </mesh>
      </group>
    );
}

function ReflectiveFloor() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#111111" roughness={0.7} metalness={0.2} envMapIntensity={0.3} />
    </mesh>
  );
}

function AnimatedLights() {
  const mainLight = useRef();

  useFrame((state) => {
    if (mainLight.current) {
      mainLight.current.intensity = 20 + Math.sin(state.clock.elapsedTime * 2) * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} color="#404040" />
      <hemisphereLight color="#ffffff" groundColor="#444444" intensity={0.3} />
      <spotLight
        ref={mainLight}
        position={lightBulbPosition}
        angle={0.5}
        penumbra={0.8}
        intensity={15}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.001}
        color="#ffcc66"
      />
    </>
  );
}

export default function ThreeScene() {
  const screenPositionRef = useRef(new Vector3(0.35, 6.6, 0.3)); // Hardcoded position for screen reference
  const [orbitEnabled, setOrbitEnabled] = useState(true); // State to toggle OrbitControls
  const [sceneTarget, setSceneTarget] = useState(sceneTargetPosition);
  const [sceneLoading, setSceneLoading] = useState(true);
  const navigate = useNavigate();
  const CameraControlsRef = useRef();
  const [lookingAtScreen, setLookingAtScreen] = useState(false);

  // Trigger moveToScreen on button click
  const moveToScreen = () => {
    if (CameraControlsRef.current) {
      setOrbitEnabled(false);
      setLookingAtScreen(true);
      //-0.5, 11.58, -0.23
      gsap.to(sceneTarget, {
        x: -0.5,
        y: 11.58,
        z: -0.23,
        duration: 1,
        ease: 'power2.inOut',
        onUpdate: () => {
          setSceneTarget(screenTargetPosition);
        },
        onComplete: () => {
          setOrbitEnabled(false); 
          CameraControlsRef.current.moveToScreen();
        },
      });
    }
  };

  const resetCameraPosition = () => {
    if (CameraControlsRef.current) {
      setOrbitEnabled(false);
      CameraControlsRef.current.resetCameraPosition(); // Reset camera position
      // Animate the scene target change for smooth transition
      gsap.to(sceneTarget, {
        x: 22,
        y: 7.6,
        z: -0.23,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => {
          // Manually update the target of OrbitControls for smooth transition
          setSceneTarget(new Vector3(sceneTarget.x, sceneTarget.y, sceneTarget.z));
        },
        onComplete: () => {
          
          setLookingAtScreen(false);
        },
      });
    }
  }

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [22, 18, -30], fov: 70 }}
        style={{ backgroundColor: '#000000', width: '100%', height: '100vh' }}
      >

        {/* <mesh position={sceneTarget}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={1.5} />
        </mesh> */}

        <color attach="background" args={['#030305']} />
        <fog attach="fog" args={['#050507', 10, 500]} />

        <AnimatedLights />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]} onClick={()=>{
              setSceneTarget(new Vector3(-0.5, 11.58, -0.23))
              setOrbitEnabled(true)
              setLookingAtScreen(true)
              console.log("Clicked on the group, setting target and enabling orbit controls")
            }} >
            <ModelWithScreen screenPositionRef={screenPositionRef}  sceneLoading={sceneLoading} setSceneLoading={setSceneLoading}/>
            <ReflectiveFloor />
          </group>

          <LightBulb />
          <Stars radius={50} depth={50} count={300} factor={4} saturation={0} fade speed={2}  />
          <Environment preset="night" background={false} intensity={0.2} />
        </Suspense>

        <OrbitControls
          enabled={orbitEnabled} // Enable/disable OrbitControls based on state
          enableDamping
          dampingFactor={0.1}
          maxPolarAngle={Math.PI} // Allow complete vertical rotation
          minDistance={1}
          maxDistance={100} // Allow viewing the model from further away
          enablePan={true} // Allow panning
          rotateSpeed={0.8} // Adjust rotation speed
          zoomSpeed={1.2} // Adjust zoom speed for smoother experience
          target={sceneTarget}
          
        />

        <CameraControls screenPositionRef={screenPositionRef} setOrbitEnabled={setOrbitEnabled} ref={CameraControlsRef} />
        
      </Canvas>
      {sceneLoading && (
          <LoadingScreen onClickButton={() => { 
            setSceneLoading(false)
            navigate('/portfolio') 
          }
          } />
      )}

      {!sceneLoading && !lookingAtScreen && (
        <div className="greeting-container" >
          <div className="greeting-text">
            <h5>Hello,</h5>
            <h5>I'm Dhruv Sharma</h5>
            <div className='welcome'>
              <p >Welcome to my portfolio </p>
              <ExternalLink className="h-3 w-3 sm:h-5 sm:w-5 cursor-pointer" onClick={()=>{navigate('/portfolio')}}/>
            </div>
          </div>
          <div className='options'>
            <button className='seePortfolio' onClick={()=>{
              moveToScreen()
              }}>See Portfolio</button>
          </div>
        </div>
      )}

      {!sceneLoading && lookingAtScreen && (
        <div className='resetBtnOption'>
          <button className='resetBtn' onClick={()=>{resetCameraPosition()}}>Go Back</button>
        </div>
      )}
    </>
  );
}
