import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Orbit, Compass, ZoomIn, ZoomOut, RotateCcw, Sparkles, ArrowUpRight } from 'lucide-react';

export default function ThreeDGraph({ data, onSelectPerson }) {
  const mountRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [nodeCount] = useState(data.people.length);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e17); // Rich dark slate-navy
    scene.fog = new THREE.FogExp2(0x0a0e17, 0.0025);

    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
    camera.position.set(0, 35, 140);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Sophisticated Lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 1.2);
    scene.add(hemiLight);

    const dirLight1 = new THREE.DirectionalLight(0x60a5fa, 2.0); // Soft Ice Blue
    dirLight1.position.set(80, 100, 60);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf59e0b, 1.5); // Warm Amber Gold
    dirLight2.position.set(-80, -60, -40);
    scene.add(dirLight2);

    // 3. Central Academic Hub Core (MIT School of Computing Symbol)
    const hubGroup = new THREE.Group();
    scene.add(hubGroup);

    const hubCoreGeom = new THREE.IcosahedronGeometry(7, 2);
    const hubCoreMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a,
      roughness: 0.1,
      metalness: 0.8,
      emissive: 0x2563eb,
      emissiveIntensity: 0.4
    });
    const hubCoreMesh = new THREE.Mesh(hubCoreGeom, hubCoreMat);
    hubGroup.add(hubCoreMesh);

    // Subtle Orbital Coordinate Rings
    const createRing = (radius, tiltX, tiltZ, color = 0x334155) => {
      const ringGeom = new THREE.RingGeometry(radius - 0.2, radius + 0.2, 96);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.25
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = tiltX;
      ringMesh.rotation.z = tiltZ;
      return ringMesh;
    };

    hubGroup.add(createRing(42, Math.PI / 2.3, 0.2));
    hubGroup.add(createRing(62, Math.PI / 2.8, -0.4));
    hubGroup.add(createRing(82, Math.PI / 1.9, 0.6));

    // 4. Subtle Atmospheric Stardust
    const dustCount = 450;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i++) {
      dustPositions[i] = (Math.random() - 0.5) * 450;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x64748b,
      size: 1.2,
      transparent: true,
      opacity: 0.4
    });
    const dustField = new THREE.Points(dustGeometry, dustMat);
    scene.add(dustField);

    // 5. Faculty & Student 3D Node Meshes
    const nodeMeshes = [];
    const nodeSphereGeom = new THREE.SphereGeometry(1, 32, 32);

    data.people.forEach((person, index) => {
      // Golden Spiral distribution in 3D
      const phi = Math.acos(-1 + (2 * index) / data.people.length);
      const theta = Math.sqrt(data.people.length * Math.PI) * phi;
      const radius = 56;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi) * 0.75; // Elliptical height
      const z = radius * Math.cos(phi);

      const isLead = person.id === 'p6';
      const isGuide = person.id === 'p4'; // Dr. Pradnya More
      const isHOD = person.id === 'p3';

      let hexColor = 0x3b82f6; // Royal Blue
      if (isLead) hexColor = 0x06b6d4; // Cyan Glow
      else if (isGuide) hexColor = 0x10b981; // Emerald
      else if (isHOD) hexColor = 0xf59e0b; // Gold
      else if (person.roleCategory === 'Student') hexColor = 0xec4899; // Rose

      const material = new THREE.MeshStandardMaterial({
        color: hexColor,
        roughness: 0.15,
        metalness: 0.7,
        emissive: hexColor,
        emissiveIntensity: isLead ? 0.6 : 0.2
      });

      const mesh = new THREE.Mesh(nodeSphereGeom, material);
      const size = isLead ? 4.8 : isGuide || isHOD ? 4.2 : 3.4;
      mesh.scale.set(size, size, size);
      mesh.position.set(x, y, z);
      mesh.userData = { person, baseSize: size, isLead };

      // Add a fine orbit ring around the student project lead.
      if (isLead) {
        const leadRingGeom = new THREE.RingGeometry(1.4, 1.6, 48);
        const leadRingMat = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.85
        });
        const leadRing = new THREE.Mesh(leadRingGeom, leadRingMat);
        leadRing.scale.set(4.5, 4.5, 4.5);
        mesh.add(leadRing);
      }

      hubGroup.add(mesh);
      nodeMeshes.push(mesh);
    });

    // 6. Connect Nodes with Thin Luminous Bezier Curves
    const connections = [
      { from: 'p4', to: 'p6' }, // Faculty guide to student project lead.
      { from: 'p6', to: 'p7' }, // Satish to Pooja
      { from: 'p6', to: 'p8' }, // Satish to Arjun
      { from: 'p3', to: 'p4' }, // HOD to Guide
      { from: 'p3', to: 'p5' }, // HOD to Robotics Lead
      { from: 'p2', to: 'p3' }, // Dean to HOD
      { from: 'p1', to: 'p2' }, // VC to Dean
      { from: 'p6', to: 'p9' }  // Satish to AI GPU Lab
    ];

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.28
    });

    connections.forEach(conn => {
      const m1 = nodeMeshes.find(m => m.userData.person.id === conn.from);
      const m2 = nodeMeshes.find(m => m.userData.person.id === conn.to);
      if (m1 && m2) {
        const points = [m1.position, m2.position];
        const geom = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geom, lineMat);
        hubGroup.add(line);
      }
    });

    // 7. Silky Smooth Mouse Damping Controls (Inertia)
    let isDragging = false;
    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;
    let mouseStart = { x: 0, y: 0 };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseDown = (e) => {
      isDragging = true;
      mouseStart = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - mouseStart.x;
        const deltaY = e.clientY - mouseStart.y;
        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;
        mouseStart = { x: e.clientX, y: e.clientY };
      } else {
        // Hover Detection
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(nodeMeshes);
        if (intersects.length > 0) {
          const hovered = intersects[0].object.userData.person;
          setHoveredNode(hovered);
          container.style.cursor = 'pointer';
        } else {
          setHoveredNode(null);
          container.style.cursor = 'grab';
        }
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const clicked = intersects[0].object.userData.person;
        onSelectPerson(clicked);
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      camera.position.z = Math.min(220, Math.max(75, camera.position.z + e.deltaY * 0.08));
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('click', handleClick);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // 8. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Damped smooth rotation (Inertia)
      if (autoRotate && !isDragging) {
        targetRotationY += 0.0018;
      }
      currentRotationY += (targetRotationY - currentRotationY) * 0.06;
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;

      hubGroup.rotation.y = currentRotationY;
      hubGroup.rotation.x = currentRotationX;
      dustField.rotation.y -= 0.0003;

      // Subtle pulse and ring rotation on the student project lead node.
      nodeMeshes.forEach((mesh, idx) => {
        const pulse = Math.sin(elapsed * 2.2 + idx) * 0.05;
        mesh.scale.set(
          mesh.userData.baseSize * (1 + pulse),
          mesh.userData.baseSize * (1 + pulse),
          mesh.userData.baseSize * (1 + pulse)
        );
        if (mesh.userData.isLead && mesh.children[0]) {
          mesh.children[0].rotation.z += 0.015;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [data, onSelectPerson, autoRotate]);

  return (
    <div className="relative w-full h-[640px] rounded-3xl overflow-hidden border border-slate-800 bg-[#0a0e17] shadow-2xl">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Left: Glassmorphic Hub Badge */}
      <div className="absolute top-5 left-5 z-10 flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-800 text-xs text-slate-300 shadow-xl">
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        <div>
          <p className="font-semibold text-white tracking-wide">MIT SoC Research Galaxy</p>
          <p className="text-[10px] text-slate-400">PBR 3D Orbit • {nodeCount} Active Academic Nodes</p>
        </div>
      </div>

      {/* Top Right: Interactive Controls */}
      <div className="absolute top-5 right-5 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 text-xs text-slate-300">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`px-3 py-1.5 rounded-xl font-medium transition flex items-center gap-1.5 ${
            autoRotate
              ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
          title="Toggle Auto Rotation"
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>{autoRotate ? 'Auto Orbiting' : 'Paused'}</span>
        </button>
      </div>

      {/* Bottom Floating Guide Pill */}
      <div className="absolute bottom-5 left-5 z-10 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2 pointer-events-none shadow-lg">
        <Compass className="w-4 h-4 text-cyan-400" />
        <span>Drag to rotate smoothly in 3D • Scroll wheel to zoom • Click any node to open full profile</span>
      </div>

      {/* Hover Node Card with Portrait */}
      {hoveredNode && (
        <div className="absolute bottom-5 right-5 z-10 bg-slate-900/95 backdrop-blur-xl p-4 rounded-2xl border border-cyan-500/40 text-xs text-white shadow-2xl pointer-events-none max-w-sm transition-all duration-150 animate-fadeIn">
          <div className="flex items-center space-x-3 mb-2.5">
            <img
              src={hoveredNode.avatar}
              alt={hoveredNode.name}
              className="w-11 h-11 rounded-xl object-cover ring-2 ring-cyan-500/50"
            />
            <div className="min-w-0">
              <p className="font-bold text-sm text-cyan-300 truncate">{hoveredNode.name}</p>
              <p className="text-[11px] text-slate-300 truncate">{hoveredNode.title}</p>
              <p className="text-[10px] text-slate-400 font-mono mt-0.5">{hoveredNode.office}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {hoveredNode.expertise.slice(0, 3).map(k => (
              <span key={k} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px]">
                {k}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
