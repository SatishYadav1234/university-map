import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, Maximize2, Minimize2,
  Sparkles, CheckCircle2, Award, Terminal, Code2,
  Layers, Database, Cpu, Globe, BookOpen, Users, Compass,
  FileText, Star, ShieldCheck, X, ExternalLink, HelpCircle,
  BarChart3, Zap, ArrowRight, Laptop, Play, Box, GitBranch,
  Monitor, Layout, Search
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Inline Code Block Component
───────────────────────────────────────────── */
function CodeBlock({ code, lang = 'jsx' }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <div className="relative rounded-xl bg-[#0d1117] border border-slate-700 overflow-hidden text-left">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-700">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{lang}</span>
        <button
          onClick={copy}
          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700 hover:bg-cyan-700 text-slate-300 hover:text-white transition"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-[11px] leading-5 text-green-300 font-mono whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Architecture Diagram Component (JSX SVG-style)
───────────────────────────────────────────── */
function ArchDiagram() {
  const layers = [
    {
      label: 'USER BROWSER',
      color: 'bg-cyan-900/50 border-cyan-500',
      text: 'text-cyan-300',
      items: ['Chrome / Edge / Firefox', 'WebGL2 + CSS3 + HTML5']
    },
    {
      label: 'REACT 18 SPA SHELL — App.jsx',
      color: 'bg-blue-900/50 border-blue-500',
      text: 'text-blue-300',
      items: ['NavBar', 'Dark/Light Mode', 'Global State', 'Router Guards']
    },
    {
      label: 'UI MODULE LAYER — src/components/',
      color: 'bg-indigo-900/50 border-indigo-500',
      text: 'text-indigo-200',
      items: ['OrgChart.jsx', 'ExpertiseDirectory.jsx', 'ThreeDGraph.jsx', 'ProjectsExplorer.jsx', 'Presentation3D.jsx', 'ProfileModal.jsx']
    },
    {
      label: 'PHYSICS & ENGINE LAYER',
      color: 'bg-purple-900/50 border-purple-500',
      text: 'text-purple-200',
      items: ['Three.js WebGL (3D Galaxy)', 'CSS Perspective Tilt (TiltCard)', 'Canvas 2D Force Graph', 'In-Memory Search Index']
    },
    {
      label: 'DATA & PERSISTENCE LAYER — universityData.js + LocalStorage',
      color: 'bg-emerald-900/50 border-emerald-500',
      text: 'text-emerald-200',
      items: ['Hierarchical Tree JSON', 'Faculty Profiles + Metadata', 'LocalStorage Bookmarks Cache', 'JSON Export Blob']
    },
    {
      label: 'BUILD & TOOLCHAIN',
      color: 'bg-amber-900/40 border-amber-500',
      text: 'text-amber-200',
      items: ['Vite 5 Bundler (HMR)', 'Tailwind CSS 3 (JIT)', 'Rollup Tree-Shaking', 'dist/ Static Output']
    }
  ];

  return (
    <div className="flex flex-col gap-2 text-[10px] font-mono w-full">
      {layers.map((layer, i) => (
        <React.Fragment key={layer.label}>
          <div className={`rounded-xl border px-4 py-2.5 ${layer.color}`}>
            <p className={`font-bold uppercase tracking-wider mb-1.5 ${layer.text}`}>{layer.label}</p>
            <div className="flex flex-wrap gap-2">
              {layer.items.map(item => (
                <span key={item} className="px-2 py-0.5 rounded-md bg-slate-900/60 text-slate-300 border border-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center text-slate-600 text-base leading-none">↕</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   UI Preview Mock Components
───────────────────────────────────────────── */
function OrgChartPreview() {
  return (
    <div className="rounded-xl bg-[#0a0f1d] border border-slate-700 p-4 text-[10px] font-mono w-full overflow-hidden">
      <p className="text-cyan-400 font-bold mb-3 text-[11px]">📊 OrgChart — Interactive Hierarchy Tree (Live Mockup)</p>
      <div className="flex flex-col items-center gap-1">
        {/* University leadership */}
        <div className="px-4 py-2 rounded-xl bg-amber-900/50 border border-amber-500 text-amber-200 text-center w-64">
          <p className="font-bold">Dr. Morgan Lee</p>
          <p className="text-[9px] text-slate-400">Executive President & Vice-Chancellor</p>
        </div>
        <div className="w-0.5 h-4 bg-slate-600" />
        {/* Dean */}
        <div className="px-4 py-2 rounded-xl bg-blue-900/50 border border-blue-500 text-blue-200 text-center w-64">
          <p className="font-bold">Dr. Jamie Patel</p>
          <p className="text-[9px] text-slate-400">Dean — MIT SoC</p>
        </div>
        <div className="w-0.5 h-4 bg-slate-600" />
        {/* HOD */}
        <div className="px-4 py-2 rounded-xl bg-indigo-900/50 border border-indigo-500 text-indigo-200 text-center w-64">
          <p className="font-bold">Dr. Taylor Chen</p>
          <p className="text-[9px] text-slate-400">HOD — CSE Department</p>
        </div>
        <div className="w-0.5 h-4 bg-slate-600" />
        {/* Guide */}
        <div className="px-4 py-2 rounded-xl bg-emerald-900/50 border border-emerald-500 text-emerald-200 text-center w-64">
          <p className="font-bold">Prof. Alex Rivera</p>
          <p className="text-[9px] text-slate-400">Project guide • AI Research Center</p>
        </div>
        <div className="flex gap-4 mt-1">
          <div className="w-0.5 h-4 bg-slate-600" />
          <div className="w-0.5 h-4 bg-slate-600" />
        </div>
        {/* Students */}
        <div className="flex gap-3">
          <div className="px-3 py-2 rounded-xl bg-cyan-900/50 border-2 border-cyan-400 text-cyan-200 text-center w-40">
            <p className="font-bold">Riley Morgan</p>
            <p className="text-[9px] text-slate-400">AI & ML • Lead developer</p>
          </div>
          <div className="px-3 py-2 rounded-xl bg-purple-900/50 border-2 border-purple-400 text-purple-200 text-center w-40">
            <p className="font-bold">Casey Jordan</p>
            <p className="text-[9px] text-slate-400">Core Computing • Co-developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DirectoryPreview() {
  const cards = [
    { name: 'Prof. Alex Rivera', tag: 'AI/ML • NLP', badge: 'Accepting Students', color: 'border-emerald-500' },
    { name: 'Dr. Taylor Chen', tag: 'Cloud Systems', badge: 'HOD', color: 'border-blue-500' },
    { name: 'Riley Morgan ⭐', tag: 'WebGL • React', badge: 'Lead Dev', color: 'border-cyan-400' },
    { name: 'Casey Jordan', tag: 'Data Structures', badge: 'Co-Dev', color: 'border-purple-400' },
  ];
  return (
    <div className="rounded-xl bg-[#0a0f1d] border border-slate-700 p-4 text-[10px] font-mono">
      <p className="text-cyan-400 font-bold mb-1 text-[11px]">🔍 Expertise Directory — TiltCard Grid (Live Mockup)</p>
      <div className="flex items-center gap-2 mb-3 bg-slate-800 rounded-xl px-3 py-1.5">
        <Search className="w-3 h-3 text-slate-400" />
        <span className="text-slate-400 text-[10px]">Search by name, expertise, department...</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {cards.map(c => (
          <div key={c.name} className={`p-3 rounded-xl border-2 ${c.color} bg-slate-900/60 hover:-translate-y-1 transition-transform cursor-pointer`}>
            <p className="font-bold text-white text-[11px]">{c.name}</p>
            <p className="text-slate-400 mt-0.5">{c.tag}</p>
            <span className="mt-1 inline-block px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[9px]">{c.badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalaxyPreview() {
  return (
    <div className="rounded-xl bg-[#040810] border border-slate-700 p-4 text-[10px] font-mono relative overflow-hidden" style={{ minHeight: 180 }}>
      <p className="text-cyan-400 font-bold mb-2 text-[11px]">🌌 3D WebGL Knowledge Galaxy — Three.js Scene (Mockup)</p>
      {/* Simulated star field */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() < 0.3 ? 2 : 1,
            height: Math.random() < 0.3 ? 2 : 1,
            top: `${Math.floor(Math.random() * 100)}%`,
            left: `${Math.floor(Math.random() * 100)}%`,
            opacity: 0.3 + Math.random() * 0.6
          }}
        />
      ))}
      {/* Central Hub */}
      <div className="absolute" style={{ top: '42%', left: '44%', transform: 'translate(-50%,-50%)' }}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/60 border-2 border-cyan-300">
          <span className="text-[8px] font-bold text-white">MIT</span>
        </div>
      </div>
      {/* Node: faculty guide */}
      <div className="absolute" style={{ top: '20%', left: '68%' }}>
        <div className="w-7 h-7 rounded-full bg-emerald-700 border border-emerald-400 flex items-center justify-center">
          <span className="text-[7px] text-white font-bold">KM</span>
        </div>
        <p className="text-[7px] text-emerald-300 mt-0.5 text-center">Prof. Marshal</p>
      </div>
      {/* Node: Satish */}
      <div className="absolute animate-pulse" style={{ top: '65%', left: '22%' }}>
        <div className="w-7 h-7 rounded-full bg-cyan-700 border-2 border-cyan-300 flex items-center justify-center shadow-md shadow-cyan-500/40">
          <span className="text-[7px] text-white font-bold">SY</span>
        </div>
        <p className="text-[7px] text-cyan-300 mt-0.5 text-center">Satish</p>
      </div>
      {/* Node: Om */}
      <div className="absolute" style={{ top: '70%', left: '72%' }}>
        <div className="w-7 h-7 rounded-full bg-purple-700 border-2 border-purple-300 flex items-center justify-center">
          <span className="text-[7px] text-white font-bold">OD</span>
        </div>
        <p className="text-[7px] text-purple-300 mt-0.5 text-center">Om</p>
      </div>
      <p className="absolute bottom-2 right-3 text-[8px] text-slate-600">Mouse drag to rotate • Click node to inspect</p>
    </div>
  );
}

function LabsPreview() {
  const projects = [
    { title: 'University People & Expertise Map', budget: '₹2,50,000', status: 'Active', color: 'border-blue-500' },
    { title: 'Smart Campus Platform (MIT ADT)', budget: '₹35,00,000', status: 'Active', color: 'border-emerald-500' },
    { title: 'Edge-AI Autonomous Drones', budget: '₹18,00,000', status: 'Active', color: 'border-purple-500' },
  ];
  return (
    <div className="rounded-xl bg-[#0a0f1d] border border-slate-700 p-4 text-[10px] font-mono">
      <p className="text-cyan-400 font-bold mb-3 text-[11px]">🔬 Funded Labs & Grant Ledger (Live Mockup)</p>
      <div className="space-y-2">
        {projects.map(p => (
          <div key={p.title} className={`flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border ${p.color}`}>
            <div>
              <p className="font-bold text-white text-[10px]">{p.title}</p>
              <p className="text-[9px] text-slate-400">Budget: {p.budget}</p>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 text-[9px] border border-emerald-700">{p.status}</span>
          </div>
        ))}
        <div className="p-2 rounded-xl bg-amber-900/30 border border-amber-700 text-amber-200">
          🖥 Hardware: 3× NVIDIA RTX 4090 (24GB) • Jetson Orin Nano
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PRESENTATION COMPONENT
───────────────────────────────────────────── */
export default function Presentation3D({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);

  // ── Code Snippets (KEY to the project) ──
  const codeSnippets = {
    threejsSetup: `// ThreeDGraph.jsx — Three.js Scene Initialization
import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0e17);
scene.fog = new THREE.Fog(0x0a0e17, 120, 280);

const camera = new THREE.PerspectiveCamera(50, aspect, 1, 1000);
camera.position.set(0, 35, 140);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// PBR Studio Lighting
const lightBlue = new THREE.DirectionalLight(0x60a5fa, 1.6);
lightBlue.position.set(-40, 60, 50);
scene.add(lightBlue);

const amber = new THREE.DirectionalLight(0xf59e0b, 0.9);
amber.position.set(50, -30, 40);
scene.add(amber);
scene.add(new THREE.AmbientLight(0x1e293b, 0.6));`,

    goldenSpiral: `// ThreeDGraph.jsx — Golden Ratio 3D Node Placement
// Distributes nodes evenly on sphere surface (no overlap)
const n = people.length;
people.forEach((person, i) => {
  const phi   = Math.acos(-1 + (2 * i) / n);       // polar angle
  const theta = Math.sqrt(n * Math.PI) * phi;       // azimuthal angle
  const r     = 56;                                  // orbit radius

  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.cos(phi);
  const z = r * Math.sin(phi) * Math.sin(theta);

  // PBR MeshStandardMaterial per node
  const geo = new THREE.SphereGeometry(isLead ? 3.5 : 2.4, 32, 32);
  const mat = new THREE.MeshStandardMaterial({
    color: isLead ? 0x22d3ee : 0x6366f1,
    roughness: 0.25,
    metalness: 0.7,
    emissive: isLead ? 0x0e7490 : 0x312e81,
    emissiveIntensity: 0.35,
  });
  const sphere = new THREE.Mesh(geo, mat);
  sphere.position.set(x, y, z);
  sphere.castShadow = true;
  scene.add(sphere);
});`,

    mouseDamping: `// ThreeDGraph.jsx — Mouse Damping Inertia (Smooth Rotation)
let targetRotationY = 0;
let targetRotationX = 0;
let currentRotationY = 0;
let currentRotationX = 0;

canvas.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - lastMouseX;
  const dy = e.clientY - lastMouseY;
  targetRotationY += dx * 0.005;   // accumulate target
  targetRotationX += dy * 0.003;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

// Animation Loop — delta-time easing (factor 0.06)
function animate() {
  requestAnimationFrame(animate);
  currentRotationY += (targetRotationY - currentRotationY) * 0.06;
  currentRotationX += (targetRotationX - currentRotationX) * 0.06;
  nodeGroup.rotation.y = currentRotationY;
  nodeGroup.rotation.x = currentRotationX;
  renderer.render(scene, camera);
}`,

    tiltCard: `// TiltCard.jsx — CSS 3D Perspective Tilt Physics
const handleMouseMove = (e) => {
  const rect   = cardRef.current.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top  + rect.height / 2;

  const rotateX = -((e.clientY - centerY) / centerY) * 9; // ±9°
  const rotateY =  ((e.clientX - centerX) / centerX) * 9;

  // Glare position follows cursor
  const glareX = ((e.clientX - rect.left) / rect.width)  * 100;
  const glareY = ((e.clientY - rect.top)  / rect.height) * 100;

  cardRef.current.style.transform =
    \`perspective(1000px) rotateX(\${rotateX}deg) \\
     rotateY(\${rotateY}deg) scale3d(1.02,1.02,1.02)\`;

  glareRef.current.style.background =
    \`radial-gradient(circle at \${glareX}% \${glareY}%,
       rgba(255,255,255,0.12) 0%, transparent 65%)\`;
};

const handleMouseLeave = () => {
  cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  glareRef.current.style.background = 'transparent';
};`,

    searchFilter: `// ExpertiseDirectory.jsx — Multi-Attribute Instant Search
// Runs in-memory, <5ms latency across all faculty profiles

const filteredPeople = useMemo(() => {
  return people.filter(person => {
    const q = searchQuery.toLowerCase().trim();
    
    // Multi-field substring matching
    const textMatch = !q || [
      person.name,
      person.title,
      person.bio,
      person.department,
      ...(person.expertise || []),
    ].some(field => field?.toLowerCase().includes(q));

    // Bitmask availability filters
    const studentFilter =
      !filters.acceptingStudents || person.acceptingStudents;
    const industryFilter =
      !filters.industryCollab    || person.industryCollab;
    const equipFilter =
      !filters.sharedEquipment   || person.sharedEquipment;

    return textMatch && studentFilter && industryFilter && equipFilter;
  });
}, [searchQuery, filters, people]);`,

    recursiveTree: `// OrgChart.jsx — Recursive Hierarchy Tree Renderer
function renderNode(person, depth = 0) {
  const children = people.filter(p => p.reportsTo === person.id);
  const collapsed = collapsedNodes.has(person.id);

  return (
    <div key={person.id} className="flex flex-col items-center">
      {/* Person Card */}
      <div
        onClick={() => openProfile(person)}
        style={{ transform: \`scale(\${zoom / 100})\` }}
        className={\`rounded-2xl border-2 p-4 cursor-pointer
          \${person.isLead ? 'border-cyan-400 ring ring-cyan-500/30' : 'border-slate-700'}\`}
      >
        <img src={person.portrait} className="w-16 h-16 rounded-full mx-auto" />
        <p className="font-bold text-white text-center mt-2">{person.name}</p>
        <p className="text-xs text-slate-400 text-center">{person.title}</p>
        {person.cabin && (
          <p className="text-[10px] text-cyan-300 text-center mt-1">
            🏢 {person.cabin}
          </p>
        )}
      </div>

      {/* Collapse Button & Children */}
      {children.length > 0 && !collapsed && (
        <div className="flex gap-6 mt-4">
          {children.map(child => renderNode(child, depth + 1))}
        </div>
      )}
    </div>
  );
}`,
  };

  // ── 13 Professional Slides ──
  const slides = [
    /* ── SLIDE 1: Title / Team ── */
    {
      number: 1,
      badge: 'Final Year Capstone Project • Phase II Viva',
      title: 'University People & Expertise Map',
      subtitle: 'Interactive Visual Hierarchy, 3D WebGL Knowledge Galaxy & Centralized Research Directory',
      summary: 'Engineered for MIT School of Computing to eliminate academic communication silos.',
      interactiveCards: [
        {
          id: 'member-riley',
          title: 'Riley Morgan',
          role: 'Lead Developer (AI & ML)',
          meta: 'DEMO-STU-001',
          tag: 'Frontend & 3D WebGL',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            name: 'Riley Morgan',
            enrollment: 'DEMO-STU-001',
            division: 'AI & ML',
            degree: 'B.Tech Computer Science & Engineering (2022-2026)',
            college: 'MIT School of Computing, MIT ADT University, Pune',
            keyResponsibilities: [
              'Designed and built the entire React 18 SPA and responsive layout.',
              'Implemented Three.js 3D WebGL Knowledge Galaxy with PBR lighting and mouse damping.',
              'Engineered 3D perspective tilt physics (TiltCard) with specular light glare.',
              'Integrated real-time faceted multi-attribute search across faculty profiles.',
            ],
            techStack: ['React 18', 'Three.js', 'Vite 5', 'Tailwind CSS', 'HTML5 Canvas', 'WebGL'],
          }
        },
        {
          id: 'member-casey',
          title: 'Casey Jordan',
          role: 'Co-Developer (Core Computing)',
          meta: 'DEMO-STU-002',
          tag: 'Backend & Data Modeling',
          color: 'border-indigo-500',
          bg: 'bg-indigo-500/10',
          details: {
            name: 'Casey Jordan',
            enrollment: 'DEMO-STU-002',
            division: 'Core Computing',
            degree: 'B.Tech Computer Science & Engineering (2022-2026)',
            college: 'MIT School of Computing, MIT ADT University, Pune',
            keyResponsibilities: [
              'Modeled recursive hierarchical tree data structures and parent-child pointer validation.',
              'Engineered graph edge connectivity and cross-departmental co-authorship relationships.',
              'Constructed client-side LocalStorage cache serialization and JSON schema export.',
              'Conducted empirical performance benchmarking and sub-5ms search latency validation.',
            ],
            techStack: ['Data Structures', 'JSON Schema', 'LocalStorage API', 'Graph Modeling', 'FastAPI Specs'],
          }
        },
        {
          id: 'guide-alex',
          title: 'Prof. Alex Rivera',
          role: 'Faculty Project Supervisor',
          meta: 'Associate Professor',
          tag: 'Dept. of CSE (AI & ML)',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            name: 'Prof. Alex Rivera',
            designation: 'Associate Professor & Capstone Project Guide',
            department: 'Dept. of Computer Science & Engineering (AI & ML)',
            institution: 'MIT School of Computing, MIT ADT University, Pune',
            office: 'AI Research Center, Room 312',
            mentorshipScope: [
              'Formulated project problem definition and academic workflow validation.',
              'Guided student team on semantic knowledge graph modeling and visualization.',
              'Evaluated Phase I and Phase II capstone milestones and deployment readiness.',
            ],
            specialization: ['Natural Language Processing', 'Generative AI', 'Knowledge Graphs', 'Information Retrieval'],
          }
        },
        {
          id: 'inst-mit',
          title: 'MIT ADT University',
          role: 'Rajbaug Campus, Pune',
          meta: 'NAAC A+ Accredited',
          tag: 'Host Institution',
          color: 'border-amber-500',
          bg: 'bg-amber-500/10',
          details: {
            name: 'MIT Art, Design and Technology University, Pune',
            campus: 'Rajbaug Campus, Loni Kalbhor, Pune - 412201, Maharashtra',
            accreditation: 'UGC Recognized • NAAC A+ Accredited Technical University',
            school: 'MIT School of Computing (MIT SoC)',
            department: 'Department of Computer Science & Engineering',
            leadership: [
              'Dr. Morgan Lee — Executive President & Vice-Chancellor',
              'Dr. Jamie Patel — Dean, Faculty of Technology & Director, MIT SoC',
              'Dr. Taylor Chen — Professor & Head of Department (HOD - CSE)',
            ],
          }
        }
      ]
    },

    /* ── SLIDE 2: Problem Statement ── */
    {
      number: 2,
      badge: 'Problem Definition & Literature Gap',
      title: 'Problem Statement & Institutional Friction',
      subtitle: 'Why traditional university websites and static directories fail modern engineering students.',
      summary: 'Large engineering campuses suffer from organizational silos, invisible funded grants, and difficulty locating research advisors.',
      interactiveCards: [
        {
          id: 'prob-silo',
          title: 'Departmental Silos',
          role: 'Academic Fragmentation',
          meta: 'Lack of Cross-Lab Discovery',
          tag: 'Friction Point 01',
          color: 'border-rose-500',
          bg: 'bg-rose-500/10',
          details: {
            title: 'Departmental Silos & Fragmented Research',
            problemDescription: 'Faculty and students in AI/ML, Robotics, Core CSE, and Cloud Systems operate in physical and digital isolation.',
            consequences: [
              'Students duplicate capstone ideas — no unified repository of ongoing research.',
              'Faculty needing GPU clusters do not know which neighboring lab has shared equipment.',
              'Cross-departmental collaboration (AI → Mechanical Drones) is severely hindered.',
            ],
            proposedRemedy: 'A centralized, real-time searchable expertise directory with instant availability filters.',
          }
        },
        {
          id: 'prob-opaque',
          title: 'Opaque Hierarchy',
          role: 'Administrative Confusion',
          meta: 'Complex Reporting Lines',
          tag: 'Friction Point 02',
          color: 'border-amber-500',
          bg: 'bg-amber-500/10',
          details: {
            title: 'Opaque University Hierarchy & Dual Appointments',
            problemDescription: 'New faculty and students have no visual way to understand who reports to whom or how administrative authority flows.',
            consequences: [
              'Students do not know the approval chain for lab access, project permissions, or grants.',
              'Dual/Matrix appointments (e.g. a professor holding both academic and incubation leadership) are hidden.',
              'Traditional university websites only publish flat, alphabetical telephone directories.',
            ],
            proposedRemedy: 'An interactive, expandable organizational hierarchy tree with dynamic zoom and matrix appointment badges.',
          }
        },
        {
          id: 'prob-grants',
          title: 'Hidden Grants & Labs',
          role: 'Missed Opportunities',
          meta: 'Undiscovered Funding',
          tag: 'Friction Point 03',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: {
            title: 'Hidden Research Grants & Lab Equipment',
            problemDescription: 'Funded research initiatives (DST, AICTE, Industry MoUs) worth lakhs of rupees have low visibility.',
            consequences: [
              'B.Tech students miss paid research assistantships or co-investigator positions.',
              'NVIDIA RTX 4090 GPU workstations remain under-utilized by aspiring AI researchers.',
              'Lack of transparency regarding timelines, PIs, and funding agencies.',
            ],
            proposedRemedy: 'A transparent active grants and lab equipment ledger with live open-position recruitment tags.',
          }
        },
        {
          id: 'prob-manual',
          title: 'Manual & Static Directories',
          role: 'No Real-Time Updates',
          meta: 'Excel Sheets & PDFs',
          tag: 'Friction Point 04',
          color: 'border-slate-500',
          bg: 'bg-slate-500/10',
          details: {
            title: 'Static/Manual University Directories',
            problemDescription: 'Faculty info is stored in Excel sheets, PDFs, or static HTML pages that become outdated quickly.',
            consequences: [
              'Cabin hours, research domains, and availability status are always stale.',
              'No keyword search, no filter, no cross-reference between faculty and their funded projects.',
              'Students waste hours visiting department offices just to find the right advisor.',
            ],
            proposedRemedy: 'A reactive single-page application with JSON-driven profiles and instant client-side search engine.',
          }
        }
      ]
    },

    /* ── SLIDE 3: Objectives ── */
    {
      number: 3,
      badge: 'Project Scope & Core Deliverables',
      title: 'Proposed Objectives & Core Deliverables',
      subtitle: 'Four interconnected software pillars designed to eliminate organizational opacity.',
      summary: 'A production-grade SPA featuring responsive interactive discovery tools built by 4th-year CSE students.',
      interactiveCards: [
        {
          id: 'obj-tree',
          title: '1. Interactive Org Tree',
          role: 'Hierarchical Traversal',
          meta: 'Zoom & Branch Collapsing',
          tag: 'Pillar 01',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            title: 'Interactive Organizational Tree Module',
            objectives: [
              'Traverse from Executive President down to Dean, HOD, Project Guide, and Student Leads.',
              'Smooth branch expanding/collapsing to inspect specific departments without screen clutter.',
              'Interactive zoom controls (60% to 140%) and reset zoom for large organizational depths.',
              'Official portrait headshots, cabin visiting hours, and dual matrix appointment badges.',
            ]
          }
        },
        {
          id: 'obj-3d',
          title: '2. 3D WebGL Galaxy',
          role: 'Three.js Visualization',
          meta: 'PBR Orbital Physics',
          tag: 'Pillar 02',
          color: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          details: {
            title: '3D WebGL Knowledge Galaxy Module (Three.js)',
            objectives: [
              'Render academic mentorship links and co-authorships as a 3D planetary constellation.',
              'Smooth mouse damping (inertia) on drag for tactile, studio-grade interaction.',
              'Highlight the student project team with orbital coordinate rings linked to their faculty guide.',
              '3D raycasting so clicking any celestial orb opens their academic dossier.',
            ]
          }
        },
        {
          id: 'obj-dir',
          title: '3. Expertise Directory',
          role: 'Faceted Search Engine',
          meta: '3D Perspective Tilt Cards',
          tag: 'Pillar 03',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            title: 'Centralized Expertise Directory & 3D Tilt Cards',
            objectives: [
              'Sub-5ms instant search across names, research domains, and biographies.',
              'CSS 3D perspective tilt transforms with specular lighting glare tracking cursor.',
              'One-click availability filters: Accepting Capstone Students, Industry Collabs, GPU Equipment.',
            ]
          }
        },
        {
          id: 'obj-labs',
          title: '4. Labs & Grant Registry',
          role: 'Research Ledger',
          meta: 'Equipment & Open Positions',
          tag: 'Pillar 04',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: {
            title: 'Active Labs & Funded Grant Ledger',
            objectives: [
              'Catalogue over ₹55.5 Lakhs in active institutional and departmental research projects.',
              'Explicitly list Principal Investigators, co-investigators, funding agencies, and budgets.',
              'Feature available lab hardware including the MIT SoC AI Lab 3× NVIDIA RTX 4090 workstations.',
            ]
          }
        }
      ]
    },

    /* ── SLIDE 4: Architecture Diagram (SPECIAL) ── */
    {
      number: 4,
      badge: 'System Architecture — Visual Diagram',
      title: 'Full-Stack Architecture Diagram',
      subtitle: 'Layer-by-layer breakdown of the React 18 SPA, Three.js engine, search index, and build toolchain.',
      summary: 'Clean separation of concerns: Presentation → Module → Physics/Engine → Data → Build.',
      isArchSlide: true,
      interactiveCards: [
        {
          id: 'arch-frontend',
          title: 'Presentation Layer',
          role: 'React 18 + Vite 5',
          meta: 'Tailwind CSS 3',
          tag: 'Layer 01',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            title: 'Presentation & UI Component Architecture',
            technicalDetails: [
              'Vite 5 Bundler: Instant HMR and optimized rollup tree-shaking.',
              'React 18 Concurrent Features: Smooth state transitions between active views.',
              'Tailwind CSS 3: Dark/light theme switching and custom glassmorphism panels.',
              'Responsive Layout: Fluid breakpoints for mobile, laptop, and seminar projectors.',
            ]
          }
        },
        {
          id: 'arch-webgl',
          title: '3D WebGL Graphics',
          role: 'Three.js Engine',
          meta: 'PBR Shaders & Camera',
          tag: 'Layer 02',
          color: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          details: {
            title: 'Hardware-Accelerated 3D WebGL Pipeline',
            technicalDetails: [
              'Perspective Projection: Camera with 50° FOV, smooth zoom clamping 75–220 units.',
              'PBR Studio Lighting: Dual directional lights (Ice Blue 0x60a5fa & Amber 0xf59e0b).',
              'Mathematical Distribution: Nodes placed using 3D golden ratio spiral algorithms.',
              'Damping Physics: Mouse momentum interpolation (delta easing factor: 0.06).',
            ]
          }
        },
        {
          id: 'arch-state',
          title: 'Search & State Engine',
          role: 'In-Memory Indexer',
          meta: 'Multi-Field Substring',
          tag: 'Layer 03',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            title: 'In-Memory Multi-Attribute Search Engine',
            technicalDetails: [
              'Algorithm: Case-insensitive substring matching across 5 distinct data properties.',
              'Latency: Measured search response < 5ms across all dataset profiles.',
              'Faceted Bitmask: Independent toggle flags for Student Advising, Industry, Lab Equipment.',
            ]
          }
        },
        {
          id: 'arch-cache',
          title: 'Persistence Layer',
          role: 'HTML5 LocalStorage',
          meta: 'JSON Serialization',
          tag: 'Layer 04',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: {
            title: 'Client-Side Persistence & Export Pipeline',
            technicalDetails: [
              'LocalStorage: Persists saved faculty contacts and dark/light mode preferences.',
              'Zero Backend Overhead: Operates without external server — zero downtime.',
              'JSON Exporter: Client-side Blob generation for downloading contacts and university schemas.',
            ]
          }
        }
      ]
    },

    /* ── SLIDE 5: Code Snippets — Three.js ── */
    {
      number: 5,
      badge: 'Source Code — Three.js WebGL Engine',
      title: 'Core Code: Three.js Scene Setup & Golden Spiral',
      subtitle: 'Actual production code from ThreeDGraph.jsx — the 3D WebGL Knowledge Galaxy module.',
      summary: 'PBR lighting, golden ratio 3D distribution, and mouse damping inertia implemented from scratch.',
      isCodeSlide: true,
      codeKey1: 'threejsSetup',
      codeKey2: 'goldenSpiral',
      interactiveCards: [
        {
          id: 'code-scene',
          title: 'Scene Setup',
          role: 'THREE.Scene + Camera',
          meta: 'PBR Lighting',
          tag: 'Code Snippet 01',
          color: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          details: { codeKey: 'threejsSetup' }
        },
        {
          id: 'code-spiral',
          title: 'Golden Spiral',
          role: 'Node Distribution',
          meta: 'Math: phi, theta, r',
          tag: 'Code Snippet 02',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: { codeKey: 'goldenSpiral' }
        },
        {
          id: 'code-damp',
          title: 'Mouse Damping',
          role: 'Inertia Physics',
          meta: 'Delta-time easing',
          tag: 'Code Snippet 03',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: { codeKey: 'mouseDamping' }
        },
        {
          id: 'code-tilt',
          title: 'CSS 3D Tilt',
          role: 'TiltCard Physics',
          meta: 'rotateX/rotateY ±9°',
          tag: 'Code Snippet 04',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: { codeKey: 'tiltCard' }
        },
      ]
    },

    /* ── SLIDE 6: Code Snippets — Search & OrgTree ── */
    {
      number: 6,
      badge: 'Source Code — Search Engine & Recursive Tree',
      title: 'Core Code: Multi-Attribute Search & Recursive OrgTree',
      subtitle: 'Actual production code from ExpertiseDirectory.jsx and OrgChart.jsx.',
      summary: 'Sub-5ms search filter and recursive parent-child tree traversal in React.',
      isCodeSlide: true,
      codeKey1: 'searchFilter',
      codeKey2: 'recursiveTree',
      interactiveCards: [
        {
          id: 'code-search',
          title: 'Multi-Attr Search',
          role: 'useMemo Filter',
          meta: 'Latency < 5ms',
          tag: 'Code Snippet 05',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: { codeKey: 'searchFilter' }
        },
        {
          id: 'code-tree',
          title: 'Recursive OrgTree',
          role: 'renderNode()',
          meta: 'Parent-Child JSON',
          tag: 'Code Snippet 06',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: { codeKey: 'recursiveTree' }
        },
        {
          id: 'code-tilt2',
          title: 'TiltCard Glare',
          role: 'Specular Effect',
          meta: 'radial-gradient',
          tag: 'Code Snippet 07',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: { codeKey: 'tiltCard' }
        },
        {
          id: 'code-damp2',
          title: 'Camera Damping',
          role: 'Three.js Loop',
          meta: 'factor 0.06',
          tag: 'Code Snippet 08',
          color: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          details: { codeKey: 'mouseDamping' }
        },
      ]
    },

    /* ── SLIDE 7: Output Screenshots / UI Previews ── */
    {
      number: 7,
      badge: 'Output Screenshots — Live UI Previews',
      title: 'Application Output — All 4 Module Previews',
      subtitle: 'Live mockup renders of the deployed web application views.',
      summary: 'OrgChart, Expertise Directory, 3D Galaxy, and Labs & Grant Ledger as seen in the browser.',
      isPreviewSlide: true,
      interactiveCards: [
        {
          id: 'preview-org',
          title: 'Org Chart View',
          role: 'Hierarchy Tree',
          meta: 'Zoom & Collapse',
          tag: 'Output 01',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: { previewKey: 'orgchart' }
        },
        {
          id: 'preview-dir',
          title: 'Directory View',
          role: 'TiltCard Grid',
          meta: 'Search + Filters',
          tag: 'Output 02',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: { previewKey: 'directory' }
        },
        {
          id: 'preview-galaxy',
          title: '3D Galaxy View',
          role: 'Three.js WebGL',
          meta: 'Drag to rotate',
          tag: 'Output 03',
          color: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          details: { previewKey: 'galaxy' }
        },
        {
          id: 'preview-labs',
          title: 'Labs & Grants View',
          role: 'Grant Ledger',
          meta: '₹55.5 Lakh tracked',
          tag: 'Output 04',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: { previewKey: 'labs' }
        },
      ]
    },

    /* ── SLIDE 8: Module Walkthrough — OrgChart ── */
    {
      number: 8,
      badge: 'Module 1 Detailed Walkthrough',
      title: 'Interactive Organizational Hierarchy Tree',
      subtitle: 'Visualizing the reporting structure from the Vice-Chancellor to the B.Tech Capstone Team.',
      summary: 'Eliminates administrative confusion through recursive parent-child node traversal and dual-appointment badges.',
      interactiveCards: [
        {
          id: 'mod1-lineage',
          title: 'Administrative Lineage',
          role: 'Recursive Traversal',
          meta: 'Chain of Command',
          tag: 'Feature 01',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            title: 'MIT ADT Reporting Hierarchy Chain',
            lineage: [
              '1. Dr. Morgan Lee — Executive President & Vice-Chancellor',
              '2. Dr. Jamie Patel — Dean, Faculty of Technology & Director, MIT SoC',
              '3. Dr. Taylor Chen — Professor & Head of Department (HOD - CSE)',
              '4. Prof. Alex Rivera — Associate Professor & Capstone Project Guide',
              '5. Riley Morgan (AI & ML) & Casey Jordan (Core Computing) — Student Project Leads',
            ],
            academicBenefit: 'New faculty and students instantly know the exact hierarchy chain for approvals, permissions, and academic escalation.',
          }
        },
        {
          id: 'mod1-matrix',
          title: 'Dual Matrix Roles',
          role: 'Interdisciplinary Links',
          meta: 'Split Appointments',
          tag: 'Feature 02',
          color: 'border-amber-500',
          bg: 'bg-amber-500/10',
          details: {
            title: 'Matrix Appointments & Joint Lab Roles',
            matrixHighlights: [
              'Prof. Alex Rivera: Faculty guide for the computer science capstone project.',
              'Prof. Jordan Kim: Joint Lab Coordinator with the School of Engineering for autonomous drone robotics.',
              'Riley Morgan & Casey Jordan: Lead student project engineers for the capstone system.',
            ]
          }
        },
        {
          id: 'mod1-controls',
          title: 'Zoom & Collapsing',
          role: 'Interactive Canvas',
          meta: '60% to 140% Range',
          tag: 'Feature 03',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            title: 'Dynamic Canvas Navigation Controls',
            features: [
              'Smooth Zoom: Multi-level zoom from 60% to 140% with reset to 100% button.',
              'Selective Collapsing: Collapse any professor branch to declutter large department views.',
              'Dossier Inspection: Clicking any card opens the full profile modal with cabin hours.',
            ]
          }
        }
      ]
    },

    /* ── SLIDE 9: Module Walkthrough — Directory & 3D ── */
    {
      number: 9,
      badge: 'Module 2 & 3 Walkthrough',
      title: 'Directory Search & 3D WebGL Knowledge Galaxy',
      subtitle: 'Faceted search engine with mathematical 3D perspective tilt + orbital 3D galaxy navigator.',
      summary: 'Enables instant discovery of research expertise and maps mentorship networks in 3D perspective space.',
      interactiveCards: [
        {
          id: 'mod2-tilt',
          title: '3D Perspective Tilt',
          role: 'Interactive Math',
          meta: 'rotateX & rotateY',
          tag: 'Physics 01',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            title: 'Mathematical 3D Perspective Tilt Physics',
            physicsMath: 'Calculates mouse cursor distance (X, Y) from card center and applies matrix transform:',
            codeSnippet: 'transform: perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)',
            glareEffect: 'Dynamic radial gradient specular glare that tracks cursor movement across the card surface.',
          }
        },
        {
          id: 'mod2-search',
          title: 'Multi-Key Matching',
          role: 'Instant Filter',
          meta: 'Latency < 5ms',
          tag: 'Engine 02',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            title: 'Multi-Attribute Instant Search Engine',
            evaluatedFields: [
              'Person name (e.g. Riley Morgan, Prof. Alex Rivera)',
              'Academic Title (e.g. Associate Professor, Student Lead)',
              'Research Keywords (e.g. LLMs, Generative AI, Computer Vision, Edge AI)',
              'Department Code (e.g. CSE_AIML, CSE_CORE, SOC)',
              'Academic Biography Text',
            ]
          }
        },
        {
          id: 'mod3-pipeline',
          title: '3D Rendering Pipeline',
          role: '60 FPS Hardware',
          meta: 'Three.js WebGL',
          tag: 'Pipeline 03',
          color: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          details: {
            title: 'Three.js WebGL Graphics Architecture',
            features: [
              'Central Academic Core: Icosahedron crystal hub representing MIT School of Computing.',
              'Orbital Coordinate Rings: Concentric planetary rings for spatial orientation.',
              'Dual Studio Lighting: Ice Blue (0x60a5fa) and Amber Gold (0xf59e0b) with atmospheric stardust.',
              'Smooth Damping Physics: Delta-time inertia interpolation for silky camera movement.',
            ]
          }
        },
        {
          id: 'mod3-raycast',
          title: '3D Raycasting',
          role: 'Screen-Space Vector',
          meta: 'Click to Inspect',
          tag: 'Interaction 04',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: {
            title: 'Interactive 3D Raycasting & HUD Dossier',
            features: [
              'Raycasting: Casts rays from 2D camera coordinates into 3D world space to detect intersected node spheres.',
              'Hover Glass HUD: Moving the mouse over any celestial node reveals portrait, title, and cabin location.',
              'Click Action: Clicking any node opens their comprehensive academic profile modal with reporting lineage.',
            ]
          }
        }
      ]
    },

    /* ── SLIDE 10: Module Walkthrough — Labs & Grants ── */
    {
      number: 10,
      badge: 'Module 4 Detailed Walkthrough',
      title: 'Funded Research Labs & Project Registry',
      subtitle: 'Transparent ledger of active departmental research grants, budgets, and student openings.',
      summary: 'Catalogues ₹55.5 Lakhs in active projects and MIT SoC AI Lab GPU equipment inventory.',
      interactiveCards: [
        {
          id: 'mod4-capstone',
          title: 'Major Capstone Project',
          role: 'Grant: ₹2,50,000',
          meta: '2025 - 2026 Phase I & II',
          tag: 'Project 01',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            title: 'University People & Expertise Map Project',
            budget: '₹2,50,000 (Departmental Capstone Lab Grant)',
            timeframe: '2025 - 2026 (Final Year Phase I & II)',
            status: 'Active (Working Prototype)',
            facultyGuide: 'Prof. Alex Rivera (Associate Professor, CSE - AI/ML)',
            studentLeads: 'Riley Morgan (AI & ML, DEMO-STU-001) & Casey Jordan (Core Computing, DEMO-STU-002)',
            description: 'Interactive visual hierarchy, centralized faculty-student expertise discovery, and 3D WebGL knowledge galaxy engineered by 4th-year students at MIT ADT University, Pune.',
          }
        },
        {
          id: 'mod4-smartcampus',
          title: 'Smart Campus Platform',
          role: 'Grant: ₹35,00,000',
          meta: '2025 - 2027 R&D',
          tag: 'Project 02',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            title: 'MIT ADT Smart Campus & Research Intelligence Platform',
            budget: '₹35,00,000 (Innovation & Incubation Center CRIEI)',
            timeframe: '2025 - 2027',
            status: 'Active',
            investigators: 'Dr. Morgan Lee (PI) & Dr. Jamie Patel (Co-PI)',
            description: 'University-wide digital modernization deploying unified academic dashboards, automated reporting trees, and interdisciplinary skill discovery across all Rajbaug campus institutes.',
          }
        },
        {
          id: 'mod4-edgeai',
          title: 'Edge-AI Autonomous Drones',
          role: 'Grant: ₹18,00,000',
          meta: 'DST / AICTE Grant',
          tag: 'Project 03',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: {
            title: 'Edge-AI Autonomous Vision & Drone Perception System',
            budget: '₹18,00,000 (DST / AICTE Collaborative Student Innovation Scheme)',
            timeframe: '2024 - 2027',
            status: 'Active',
            investigators: 'Prof. Jordan Kim (Lead) & Prof. Alex Rivera (Co-PI)',
            description: 'Developing lightweight real-time object detection models deployed on low-power NVIDIA Jetson boards for autonomous campus delivery and inspection robots.',
          }
        },
        {
          id: 'mod4-hardware',
          title: 'Lab Hardware Inventory',
          role: 'AI Innovation Lab',
          meta: 'Workstations & Equipment',
          tag: 'Hardware 04',
          color: 'border-amber-500',
          bg: 'bg-amber-500/10',
          details: {
            title: 'MIT SoC Dedicated Research Equipment',
            hardwareRoster: [
              '3× NVIDIA RTX 4090 (24GB VRAM) High-Performance Workstations for deep learning.',
              'NVIDIA Jetson Orin Nano Developer Kits for edge computer vision testing.',
              'Intel RealSense D435i Depth Cameras for real-time 3D perception and robotic mapping.',
              'Campus High-Speed Fiber Backbone & Local Slurm Cluster connectivity.',
            ]
          }
        }
      ]
    },

    /* ── SLIDE 11: Performance Metrics ── */
    {
      number: 11,
      badge: 'Empirical Benchmarking',
      title: 'Performance Metrics & Empirical Evaluation',
      subtitle: 'Quantitative testing proving production readiness across mobile and desktop devices.',
      summary: 'Sub-5ms search latency, stable 60 FPS 3D canvas refresh, and 7.9-second production build.',
      interactiveCards: [
        {
          id: 'eval-latency',
          title: '< 5 ms Search Latency',
          role: 'Zero Lag',
          meta: 'In-Memory Filter',
          tag: 'Metric 01',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            title: 'Search Response Latency Benchmark',
            metricValue: '< 5 milliseconds',
            testingProcedure: 'Evaluated with 1,000 rapid keystrokes across multi-attribute search fields on Chrome 120 and Edge 120.',
            result: 'Zero perceptible lag, maintaining 60 FPS UI rendering without dropped frames.',
          }
        },
        {
          id: 'eval-fps',
          title: '60 FPS 3D WebGL',
          role: 'Stable Refresh',
          meta: 'Hardware Acceleration',
          tag: 'Metric 02',
          color: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          details: {
            title: 'Three.js 3D WebGL Frame Rate Benchmark',
            metricValue: 'Stable 60 FPS',
            testingProcedure: 'Tested during continuous mouse rotation with 450 stardust particles and 9 PBR mesh spheres.',
            result: 'GPU utilization remained below 18% on modern integrated/discrete graphics.',
          }
        },
        {
          id: 'eval-build',
          title: '7.9s Build Time',
          role: 'Vite 5 Bundler',
          meta: 'Optimized Output',
          tag: 'Metric 03',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            title: 'Production Bundle Compilation Metric',
            metricValue: '7.9 seconds (0 errors)',
            outputDetails: 'dist/index.html (0.82 kB), dist/assets/index.css (35.7 kB), dist/assets/index.js (optimized chunks).',
            result: 'Fully tree-shaken, minified, and verified production static distribution.',
          }
        },
        {
          id: 'eval-reliability',
          title: '100% Client Uptime',
          role: 'Zero Server Dependencies',
          meta: 'LocalStorage Cache',
          tag: 'Metric 04',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: {
            title: 'System Reliability & Fault Tolerance',
            metricValue: '100% Client Availability',
            architectureBenefit: 'All state management, search filtering, and 3D rendering execute locally on client hardware — eliminating server downtime risks.',
          }
        }
      ]
    },

    /* ── SLIDE 12: Future Scope ── */
    {
      number: 12,
      badge: 'Future Scope & Institutional Roadmap',
      title: 'Future Scope, ERP Integration & Roadmap',
      subtitle: 'LLM RAG Chatbot, Google Scholar Sync, MIT ADT SSO, and campus-wide ERP deployment.',
      summary: 'Vision for transforming this capstone into a university-wide faculty-student intelligence platform.',
      interactiveCards: [
        {
          id: 'future-llm',
          title: 'LLM RAG Chatbot',
          role: 'Natural Language Query',
          meta: 'Gemini / GPT-4 Turbo',
          tag: 'Roadmap 01',
          color: 'border-cyan-500',
          bg: 'bg-cyan-500/10',
          details: {
            title: 'LLM RAG Conversational AI Assistant',
            description: "Natural language assistant: ask 'Which guide has open seats in NLP?' or 'Who has NVIDIA GPU access?' — system retrieves from faculty graph.",
            techPlan: ['Retrieval-Augmented Generation (RAG) over faculty JSON corpus.', 'Gemini Pro API or GPT-4 Turbo for inference.', 'Vector embeddings via ChromaDB or FAISS for fast semantic search.']
          }
        },
        {
          id: 'future-scholar',
          title: 'Scholar Sync',
          role: 'Publication Tracking',
          meta: 'Google Scholar + DBLP',
          tag: 'Roadmap 02',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            title: 'Google Scholar & DBLP Automatic Sync',
            description: 'Automated real-time publication and citation count updates for all faculty profiles.',
            techPlan: ['Scheduled Python scraper running on Cloud Functions or GitHub Actions.', 'Scholar API/DBLP XML feed parsing into universityData.js format.', 'Citation count badges rendered live on faculty TiltCards.']
          }
        },
        {
          id: 'future-sso',
          title: 'MIT ADT ERP SSO',
          role: 'Single Sign-On',
          meta: 'OAuth2 + JWT Tokens',
          tag: 'Roadmap 03',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            title: 'MIT ADT ERP Single Sign-On Integration',
            description: 'OAuth2 SSO with official MIT ADT student and faculty university credentials.',
            techPlan: ['Integration with MIT ADT ERP OAuth2 / SAML2 provider.', 'JWT session tokens for personalized saved-contacts and alerts.', 'Role-based access: students see advisor availability; faculty see student applications.']
          }
        },
        {
          id: 'future-mobile',
          title: 'Mobile PWA',
          role: 'Progressive Web App',
          meta: 'iOS & Android',
          tag: 'Roadmap 04',
          color: 'border-purple-500',
          bg: 'bg-purple-500/10',
          details: {
            title: 'Progressive Web App (PWA) — Mobile First',
            description: 'Convert the SPA into an installable PWA with push notifications for lab openings and advisor availability.',
            techPlan: ['Vite PWA Plugin for service worker and offline caching.', 'Push notifications via Web Push API for lab seat availability.', 'Install prompt for iOS homescreen and Android APK via TWA.']
          }
        }
      ]
    },

    /* ── SLIDE 13: Viva & Acknowledgements ── */
    {
      number: 13,
      badge: 'Viva Voce & Acknowledgements',
      title: 'Viva Voce Flashcards & Sincere Acknowledgements',
      subtitle: 'Key examiner questions with model answers from the project report.',
      summary: 'Ready-to-answer viva examination flashcards and sincere thanks to the MIT ADT faculty.',
      interactiveCards: [
        {
          id: 'viva-q1',
          title: 'Viva Q1: 3D vs 2D',
          role: 'Why Three.js WebGL?',
          meta: 'Examiner Question 1',
          tag: 'Viva Card 01',
          color: 'border-blue-500',
          bg: 'bg-blue-500/10',
          details: {
            question: 'Why did you implement a 3D WebGL Galaxy using Three.js instead of a standard 2D table?',
            answer: 'Traditional 2D tables present isolated rows without contextual relationships. Our 3D WebGL Galaxy visualizes academic mentorship as an interconnected gravitational network where nodes orbit the MIT School of Computing core. Hardware acceleration via Three.js ensures 60 FPS performance while making multi-dimensional campus connections intuitive to explore.',
          }
        },
        {
          id: 'viva-q2',
          title: 'Viva Q2: Team Roles',
          role: 'Satish & Om Contributions',
          meta: 'Examiner Question 2',
          tag: 'Viva Card 02',
          color: 'border-indigo-500',
          bg: 'bg-indigo-500/10',
          details: {
            question: 'How did the student team divide the project responsibilities?',
            answer: 'The lead student engineered the frontend React 18 architecture, Three.js 3D WebGL graphics pipeline, raycasting controls, and 3D perspective tilt cards. The co-developer modeled the hierarchical tree data structures, graph edge relationship schemas, LocalStorage serialization, and empirical benchmarking.',
          }
        },
        {
          id: 'viva-q3',
          title: 'Viva Q3: Guide Scope',
          role: 'Prof. Alex Rivera',
          meta: 'Examiner Question 3',
          tag: 'Viva Card 03',
          color: 'border-emerald-500',
          bg: 'bg-emerald-500/10',
          details: {
            question: 'What guidance did the faculty supervisor provide?',
            answer: 'The faculty supervisor advised on architectural requirements, validated the reporting hierarchy schema, provided feedback on student-faculty mentorship mapping, and reviewed capstone milestones for academic standards.',
          }
        },
        {
          id: 'viva-ack',
          title: 'Acknowledgements',
          role: 'Sincere Thanks',
          meta: 'Faculty & Institution',
          tag: 'Ack Card 04',
          color: 'border-amber-500',
          bg: 'bg-amber-500/10',
          details: {
            title: 'Sincere Acknowledgements',
            roadmap: [
              '🙏 Prof. Alex Rivera — Project guide and academic mentor.',
              '🙏 Dr. Taylor Chen — HOD, CSE Department. For departmental support.',
              '🙏 Dr. Jamie Patel — Dean, MIT School of Computing. For institutional guidance.',
              '🙏 Dr. Morgan Lee — Executive President & Vice-Chancellor, MIT ADT University, Pune.',
            ],
            acknowledgements: 'This project was developed as part of the B.Tech CSE Final Year Capstone (2022-2026) at MIT ADT University. All team effort, late nights, and design decisions are documented in the full project report.',
          }
        }
      ]
    },
  ];

  const current = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
    setActivePopup(null);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
    setActivePopup(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      else if (e.key === 'ArrowLeft') prevSlide();
      else if (e.key === 'Escape') {
        if (activePopup) setActivePopup(null);
        else if (onClose) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePopup, currentSlide]);

  /* ── Render popup content per card ID ── */
  const renderPopupBody = (card) => {
    const d = card.details;

    // Code popup
    if (d.codeKey) {
      return (
        <div className="space-y-3">
          <p className="text-xs text-slate-400">
            Actual production source code from the project — <span className="text-cyan-300 font-mono">src/components/</span>
          </p>
          <CodeBlock code={codeSnippets[d.codeKey]} lang="jsx" />
        </div>
      );
    }

    // Preview popup
    if (d.previewKey === 'orgchart') return <OrgChartPreview />;
    if (d.previewKey === 'directory') return <DirectoryPreview />;
    if (d.previewKey === 'galaxy') return <GalaxyPreview />;
    if (d.previewKey === 'labs') return <LabsPreview />;

    // Viva Q&A
    if (d.question) {
      return (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-800/80">
            <span className="text-cyan-400 font-bold block mb-1">Examiner Question:</span>
            <p className="text-white text-sm font-semibold">{d.question}</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block mb-1">Model Answer (From Project Report):</span>
            <p className="text-slate-300 leading-relaxed text-xs">{d.answer}</p>
          </div>
        </div>
      );
    }

    // Member cards
    if (card.id === 'member-satish' || card.id === 'member-om') {
      const accentClass = card.id === 'member-satish' ? 'border-blue-800/60 bg-blue-950/40 text-cyan-300' : 'border-indigo-800/60 bg-indigo-950/40 text-indigo-300';
      const tagClass = card.id === 'member-satish' ? 'bg-blue-900/60 text-blue-200' : 'bg-indigo-900/60 text-indigo-200';
      return (
        <div className="space-y-3">
          <div className={`p-3.5 rounded-xl border ${accentClass}`}>
            <p className="font-bold">Enrollment: {d.enrollment} • Division: {d.division}</p>
            <p className="text-[11px] text-slate-400">{d.degree}</p>
          </div>
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-1.5">Responsibilities:</h4>
            <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
              {d.keyResponsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
          <div className="pt-2">
            <span className="text-[11px] font-bold text-slate-400 block mb-1">Tech Stack:</span>
            <div className="flex flex-wrap gap-1.5">
              {d.techStack.map(t => (
                <span key={t} className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${tagClass}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Guide card
    if (card.id === 'guide-karan') {
      return (
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
            <p className="font-bold text-emerald-300">{d.name} — {d.designation}</p>
            <p className="text-[11px] text-slate-400">{d.office}</p>
          </div>
          <div>
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider mb-1.5">Guidance Scope:</h4>
            <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
              {d.mentorshipScope.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {d.specialization.map(s => (
              <span key={s} className="px-2 py-0.5 rounded-md bg-emerald-900/60 text-emerald-200 text-[10px] font-mono">{s}</span>
            ))}
          </div>
        </div>
      );
    }

    // Generic structured content
    return (
      <div className="space-y-2">
        {Object.entries(d).map(([key, val]) => (
          <div key={key} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 font-bold uppercase text-[10px] block mb-0.5">
              {key.replace(/([A-Z])/g, ' $1')}
            </span>
            {Array.isArray(val) ? (
              <ul className="list-disc pl-4 space-y-1 text-slate-300 mt-1 text-xs">
                {val.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            ) : (
              <p className="text-slate-200 text-xs">{String(val)}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-2xl transition-all ${isFullscreen ? 'p-0' : 'p-3 sm:p-6'}`}>
      <div
        style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
        className={`w-full max-w-6xl bg-[#0a0f1d] border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100 relative ${
          isFullscreen ? 'h-full max-w-none rounded-none' : 'max-h-[94vh]'
        }`}
      >
        {/* ── Top Header ── */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between text-xs bg-slate-900/80 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <div>
              <p className="font-bold text-white text-sm tracking-wide">
                MIT ADT University • B.Tech Capstone 3D Presentation
              </p>
              <p className="text-[10px] text-slate-400">
                Fictional demonstration team • Faculty guide: Prof. Alex Rivera
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline text-[11px] text-cyan-400 font-mono bg-cyan-950/60 px-3 py-1 rounded-xl border border-cyan-800/60">
              💡 Tap any card → 3D animated deep-dive
            </span>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition font-medium text-xs border border-slate-700"
              >
                Close PPT
              </button>
            )}
          </div>
        </div>

        {/* ── Slide Body ── */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto flex flex-col justify-start relative">

          {/* Slide header */}
          <div className="mb-5 flex-shrink-0">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-950 text-cyan-300 border border-blue-800/80">
              {current.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2.5 leading-tight">
              {current.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">{current.subtitle}</p>
            <p className="text-xs text-slate-500 mt-0.5 italic">{current.summary}</p>
          </div>

          {/* Architecture Diagram Slide */}
          {current.isArchSlide && (
            <div className="mb-5">
              <ArchDiagram />
            </div>
          )}

          {/* Code Slide — two side-by-side code blocks */}
          {current.isCodeSlide && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
              <CodeBlock code={codeSnippets[current.codeKey1]} lang="jsx" />
              <CodeBlock code={codeSnippets[current.codeKey2]} lang="jsx" />
            </div>
          )}

          {/* Preview Slide — 2×2 UI output grid */}
          {current.isPreviewSlide && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <OrgChartPreview />
              <DirectoryPreview />
              <GalaxyPreview />
              <LabsPreview />
            </div>
          )}

          {/* Interactive cards grid — always shown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {current.interactiveCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setActivePopup(card)}
                style={{
                  transform: 'perspective(800px) translateZ(0px)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                className={`p-5 rounded-2xl border-2 ${card.color} ${card.bg} hover:-translate-y-1.5 hover:shadow-xl cursor-pointer transition-all flex flex-col justify-between group relative overflow-hidden`}
              >
                <div className="absolute top-2 right-2 text-slate-500 group-hover:text-cyan-400 transition">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">{card.tag}</span>
                  <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">{card.title}</h3>
                  <p className="text-xs text-blue-400 font-semibold mt-0.5">{card.role}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="font-mono text-[10px]">{card.meta}</span>
                  <span className="text-cyan-400 text-[10px] font-bold group-hover:underline flex items-center gap-0.5">
                    Tap details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3D POPUP MODAL ── */}
        {activePopup && (
          <div className="absolute inset-0 z-30 flex items-center justify-center p-4 sm:p-8 bg-slate-950/80 backdrop-blur-md">
            <div
              style={{
                transform: 'perspective(1200px) translateZ(20px)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                animation: 'popupIn 0.28s cubic-bezier(0.16,1,0.3,1) forwards'
              }}
              className="w-full max-w-2xl bg-[#0f172a] border-2 border-cyan-500/60 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {activePopup.tag} • DEEP-DIVE
                </span>
                <span className="text-xs text-slate-400">|</span>
                <span className="text-xs text-slate-400">{activePopup.role}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{activePopup.title}</h3>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
                {renderPopupBody(activePopup)}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActivePopup(null)}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Bottom Navigation ── */}
        <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between bg-slate-900/80 text-xs flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="font-mono font-bold text-cyan-400 text-sm">
              Slide {current.number} of {slides.length}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">
              Arrow keys [←] [→] or buttons to navigate
            </span>
          </div>

          {/* Dot indicators */}
          <div className="hidden sm:flex items-center space-x-1.5">
            {slides.map((s, idx) => (
              <button
                key={s.number}
                onClick={() => { setCurrentSlide(idx); setActivePopup(null); }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Slide ${s.number}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 hover:text-white transition flex items-center gap-1 font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center gap-1 shadow-md shadow-cyan-500/20"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* popup animation keyframes */}
      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: perspective(1200px) translateZ(-30px) scale(0.96); }
          to   { opacity: 1; transform: perspective(1200px) translateZ(20px) scale(1); }
        }
      `}</style>
    </div>
  );
}
