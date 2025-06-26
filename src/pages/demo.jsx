import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Option 1: Floating Orbs with Glow Effect
function FloatingOrbs() {
  const orbsRef = useRef();
  const orbCount = 15;

  const orbs = useMemo(() => {
    return Array.from({ length: orbCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 150,
        Math.random() * 60 + 20,
        (Math.random() - 0.5) * 150
      ],
      scale: Math.random() * 3 + 1,
      speed: Math.random() * 0.02 + 0.01,
      color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6)
    }));
  }, [orbCount]);

  useFrame((state) => {
    orbs.forEach((orb, i) => {
      const mesh = orbsRef.current?.children[i];
      if (mesh) {
        mesh.position.y += Math.sin(state.clock.elapsedTime * orb.speed + i) * 0.02;
        mesh.position.x += Math.cos(state.clock.elapsedTime * orb.speed + i) * 0.01;
        mesh.material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.3;
      }
    });
  });

  return (
    <group ref={orbsRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial 
            color={orb.color}
            emissive={orb.color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

// Option 2: Flowing Liquid Waves
function FlowingWaves() {
  const wavesRef = useRef();
  const waveCount = 8;

  useFrame((state) => {
    if (wavesRef.current) {
      wavesRef.current.children.forEach((wave, i) => {
        wave.rotation.y = state.clock.elapsedTime * 0.1 + i * 0.5;
        wave.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 5;
        wave.scale.setScalar(1 + Math.sin(state.clock.elapsedTime + i) * 0.2);
      });
    }
  });

  return (
    <group ref={wavesRef}>
      {Array.from({ length: waveCount }, (_, i) => (
        <mesh key={i} position={[0, i * 8 - 20, -100]}>
          <torusGeometry args={[20 + i * 5, 0.5, 16, 100]} />
          <meshBasicMaterial 
            color={new THREE.Color().setHSL(0.6 + i * 0.1, 0.8, 0.5)}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

// Option 3: Particle Constellation
function ParticleConstellation() {
  const particlesRef = useRef();
  const linesRef = useRef();
  const particleCount = 100;

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, () => ({
      position: [
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 200
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ]
    }));
  }, [particleCount]);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const distance = new THREE.Vector3(...particles[i].position)
          .distanceTo(new THREE.Vector3(...particles[j].position));
        if (distance < 30) {
          lines.push([particles[i].position, particles[j].position]);
        }
      }
    }
    return lines;
  }, [particles]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      particle.position[0] += particle.velocity[0];
      particle.position[1] += particle.velocity[1];
      particle.position[2] += particle.velocity[2];
      
      // Boundary check
      if (Math.abs(particle.position[0]) > 100) particle.velocity[0] *= -1;
      if (Math.abs(particle.position[1]) > 50) particle.velocity[1] *= -1;
      if (Math.abs(particle.position[2]) > 100) particle.velocity[2] *= -1;
    });
  });

  return (
    <group>
      {/* Particles */}
      <group ref={particlesRef}>
        {particles.map((particle, i) => (
          <mesh key={i} position={particle.position}>
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        ))}
      </group>
      
      {/* Connection Lines */}
      <group ref={linesRef}>
        {connections.map((connection, i) => (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                array={new Float32Array([
                  ...connection[0],
                  ...connection[1]
                ])}
                itemSize={3}
                count={2}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#666666" transparent opacity={0.4} />
          </line>
        ))}
      </group>
    </group>
  );
}

// Option 4: Morphing Geometry Cloud
function MorphingGeometryCloud() {
  const cloudRef = useRef();
  const geometryCount = 25;

  const geometries = useMemo(() => {
    return Array.from({ length: geometryCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 120,
        Math.random() * 80 + 10,
        (Math.random() - 0.5) * 120
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 2 + 0.5,
      type: Math.floor(Math.random() * 3), // 0: icosahedron, 1: octahedron, 2: dodecahedron
      color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.6, 0.7)
    }));
  }, [geometryCount]);

  useFrame((state) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      cloudRef.current.children.forEach((child, i) => {
        child.rotation.x += 0.01;
        child.rotation.y += 0.015;
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01;
      });
    }
  });

  const getGeometry = (type) => {
    switch (type) {
      case 0: return <icosahedronGeometry args={[1, 0]} />;
      case 1: return <octahedronGeometry args={[1, 0]} />;
      case 2: return <dodecahedronGeometry args={[1, 0]} />;
      default: return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <group ref={cloudRef}>
      {geometries.map((geo, i) => (
        <mesh 
          key={i} 
          position={geo.position} 
          rotation={geo.rotation} 
          scale={geo.scale}
        >
          {getGeometry(geo.type)}
          <meshBasicMaterial 
            color={geo.color}
            transparent
            opacity={0.4}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

// Option 5: Spiral Galaxy
function SpiralGalaxy() {
  const galaxyRef = useRef();
  const spiralCount = 3;
  const particlesPerSpiral = 200;

  const spirals = useMemo(() => {
    return Array.from({ length: spiralCount }, (_, spiralIndex) => {
      return Array.from({ length: particlesPerSpiral }, (_, i) => {
        const angle = (i / particlesPerSpiral) * Math.PI * 8 + (spiralIndex * Math.PI * 2 / spiralCount);
        const radius = (i / particlesPerSpiral) * 80 + 10;
        return {
          position: [
            Math.cos(angle) * radius,
            (Math.random() - 0.5) * 20,
            Math.sin(angle) * radius
          ],
          angle: angle,
          radius: radius,
          originalIndex: i
        };
      });
    }).flat();
  }, [spiralCount, particlesPerSpiral]);

  useFrame((state) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      spirals.forEach((particle, i) => {
        const mesh = galaxyRef.current.children[i];
        if (mesh) {
          const newAngle = particle.angle + state.clock.elapsedTime * 0.2;
          mesh.position.x = Math.cos(newAngle) * particle.radius;
          mesh.position.z = Math.sin(newAngle) * particle.radius;
          mesh.position.y = particle.position[1] + Math.sin(state.clock.elapsedTime + i * 0.1) * 2;
        }
      });
    }
  });

  return (
    <group ref={galaxyRef}>
      {spirals.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshBasicMaterial 
            color={new THREE.Color().setHSL(0.1 + (particle.radius / 100) * 0.6, 0.8, 0.6)}
            emissive={new THREE.Color().setHSL(0.1 + (particle.radius / 100) * 0.6, 0.8, 0.3)}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

// Option 6: Minimalist Floating Planes
function MinimalistPlanes() {
  const planesRef = useRef();
  const planeCount = 12;

  const planes = useMemo(() => {
    return Array.from({ length: planeCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 100,
        Math.random() * 60 + 10,
        (Math.random() - 0.5) * 100
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: [Math.random() * 15 + 5, Math.random() * 15 + 5, 1],
      color: new THREE.Color().setHSL(Math.random(), 0.3, 0.8)
    }));
  }, [planeCount]);

  useFrame((state) => {
    if (planesRef.current) {
      planesRef.current.children.forEach((plane, i) => {
        plane.rotation.x += 0.005;
        plane.rotation.y += 0.008;
        plane.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.02;
      });
    }
  });

  return (
    <group ref={planesRef}>
      {planes.map((plane, i) => (
        <mesh 
          key={i} 
          position={plane.position} 
          rotation={plane.rotation} 
          scale={plane.scale}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial 
            color={plane.color}
            transparent
            opacity={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export {
  FloatingOrbs,
  FlowingWaves,
  ParticleConstellation,
  MorphingGeometryCloud,
  SpiralGalaxy,
  MinimalistPlanes
};