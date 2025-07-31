'use client';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import * as THREE from 'three';

const Hero = () => {
  const heroRef = useRef();
  const sceneRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client-side to avoid hydration mismatch
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          duration: 3 + Math.random() * 4,
          delay: Math.random() * 2
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);

  useEffect(() => {
    const currentHero = heroRef.current;
    if (!currentHero) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentHero.appendChild(renderer.domElement);

    // Create large colorful geometric shapes
    const shapes = [];
    
    // Dodecahedron - Large centerpiece (Blue)
    const dodecaGeometry = new THREE.DodecahedronGeometry(15);
    const dodecaMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x3b82f6,
      shininess: 100,
      transparent: true,
      opacity: 0.8
    });
    const dodecahedron = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
    scene.add(dodecahedron);
    shapes.push({ mesh: dodecahedron, rotationSpeed: { x: 0.005, y: 0.008 } });

    // Icosahedron - Large left floating shape (Purple)
    const icosaGeometry = new THREE.IcosahedronGeometry(12);
    const icosaMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.7
    });
    const icosahedron = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosahedron.position.set(-40, 15, -20);
    scene.add(icosahedron);
    shapes.push({ mesh: icosahedron, rotationSpeed: { x: 0.01, y: -0.006 } });

    // Octahedron - Large right floating shape (Green)
    const octaGeometry = new THREE.OctahedronGeometry(10);
    const octaMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x10b981,
      transparent: true,
      opacity: 0.7
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(40, -12, -25);
    scene.add(octahedron);
    shapes.push({ mesh: octahedron, rotationSpeed: { x: -0.008, y: 0.012 } });

    // Tetrahedron - Large accent (Orange)
    const tetraGeometry = new THREE.TetrahedronGeometry(8);
    const tetraMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.8
    });
    const tetrahedron = new THREE.Mesh(tetraGeometry, tetraMaterial);
    tetrahedron.position.set(-25, -25, 10);
    scene.add(tetrahedron);
    shapes.push({ mesh: tetrahedron, rotationSpeed: { x: 0.015, y: -0.01 } });

    // Sphere - New shape (Red)
    const sphereGeometry = new THREE.SphereGeometry(6, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xef4444,
      transparent: true,
      opacity: 0.6
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(30, 20, -10);
    scene.add(sphere);
    shapes.push({ mesh: sphere, rotationSpeed: { x: 0.007, y: 0.005 } });

    // Cylinder - New shape (Pink)
    const cylinderGeometry = new THREE.CylinderGeometry(4, 4, 12, 8);
    const cylinderMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xec4899,
      transparent: true,
      opacity: 0.7
    });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(-35, 0, 15);
    scene.add(cylinder);
    shapes.push({ mesh: cylinder, rotationSpeed: { x: 0.012, y: -0.008 } });

    // Lighting setup - colorful lighting to enhance shapes
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(50, 50, 25);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x4f46e5, 0.3);
    directionalLight2.position.set(-50, -25, 25);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x00ffff, 0.5, 150);
    pointLight.position.set(0, 0, 30);
    scene.add(pointLight);

    camera.position.z = 45;

    // Animation variables
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Animate each shape
      shapes.forEach((shape, index) => {
        const { mesh, rotationSpeed } = shape;
        
        // Rotation
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.x * 0.5;

        // Floating animation
        mesh.position.y += Math.sin(time * 2 + index) * 0.05;
        mesh.position.x += Math.cos(time * 1.5 + index) * 0.03;

        // Scale pulsing
        const scale = 1 + Math.sin(time * 3 + index * 0.5) * 0.08;
        mesh.scale.setScalar(scale);
      });

      // Camera movement based on mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Point light animation (subtle movement with color)
      pointLight.position.x = Math.sin(time) * 15;
      pointLight.position.y = Math.cos(time * 1.3) * 10;
      pointLight.color.setHSL((time * 0.1) % 1, 0.8, 0.6);

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentHero && renderer.domElement) {
        currentHero.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div ref={heroRef} className="absolute inset-0"></div>
      
      {/* Content */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            Ashish Gola
          </h1>
          
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideUp delay-1000 font-semibold">
            Web Developer & AI Enthusiast
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="projects"
            smooth={true}
            duration={500}
             className="px-8 py-4 border-2 border-sky-500 text-sky-500 rounded-full font-semibold text-lg shadow-xl hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <span className="relative z-10">Explore My Work</span>
          </Link>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-8 py-4 border-2 border-sky-500 text-sky-500 rounded-full font-semibold text-lg shadow-xl hover:bg-sky-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <span className="relative z-10">Get In Touch</span>
          </Link>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;