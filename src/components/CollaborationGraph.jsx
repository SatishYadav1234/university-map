import React, { useEffect, useRef, useState } from 'react';
import { Share2, Info } from 'lucide-react';

export default function CollaborationGraph({ data, onSelectPerson }) {
  const canvasRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize node positions & physics
    const nodes = data.people.map((p, idx) => {
      const angle = (idx / data.people.length) * 2 * Math.PI;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;
      
      // Color-coding by role
      const color = 
        p.id === 'p6' ? '#2563eb' : // Featured student lead - Royal Blue
        p.roleCategory === 'Student' ? '#ec4899' : // Pink
        p.roleCategory === 'Faculty' ? '#10b981' : // Emerald
        p.roleCategory === 'HOD' ? '#0d9488' : // Teal
        p.roleCategory === 'Executive' ? '#6366f1' : // Indigo
        '#8b5cf6'; // Purple

      return {
        id: p.id,
        raw: p,
        name: p.name,
        title: p.title,
        dept: p.deptCode,
        color,
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: p.id === 'p6' ? 22 : 14 + (p.publicationsCount / 7)
      };
    });

    // Edges reflecting departmental capstone and research collaborations
    const edges = [
      { source: 'p4', target: 'p6', label: 'Faculty Mentorship & Capstone Lead' },
      { source: 'p6', target: 'p7', label: 'Peer Collaboration (UI & Data)' },
      { source: 'p6', target: 'p8', label: 'Peer Collaboration (Backend & Physics)' },
      { source: 'p3', target: 'p4', label: 'Department Leadership' },
      { source: 'p4', target: 'p5', label: 'Interdisciplinary AI Research' },
      { source: 'p3', target: 'p9', label: 'GPU Infrastructure Support' },
      { source: 'p6', target: 'p9', label: 'Lab Compute Allocation' },
      { source: 'p1', target: 'p2', label: 'Institutional Governance' },
      { source: 'p2', target: 'p3', label: 'Academic Curriculum' }
    ];

    let isDragging = false;
    let dragNode = null;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Edges
      edges.forEach(edge => {
        const s = nodes.find(n => n.id === edge.source);
        const t = nodes.find(n => n.id === edge.target);
        if (s && t) {
          ctx.beginPath();
          ctx.strokeStyle = edge.source === 'p4' && edge.target === 'p6' ? '#3b82f6' : '#475569';
          ctx.lineWidth = edge.source === 'p4' && edge.target === 'p6' ? 2.5 : 1.5;
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(t.x, t.y);
          ctx.stroke();

          // Midpoint circle
          const midX = (s.x + t.x) / 2;
          const midY = (s.y + t.y) / 2;
          ctx.fillStyle = '#64748b';
          ctx.beginPath();
          ctx.arc(midX, midY, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw Nodes
      nodes.forEach(node => {
        // Outer aura
        ctx.fillStyle = node.color + (node.id === 'p6' ? '55' : '33');
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (node.id === 'p6' ? 8 : 5), 0, Math.PI * 2);
        ctx.fill();

        // Core circle
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Highlight the student project lead with a star badge and ring
        if (node.id === 'p6') {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Node label
        ctx.fillStyle = '#f8fafc';
        ctx.font = node.id === 'p6' ? 'bold 12px system-ui, sans-serif' : '600 11px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(node.name, node.x, node.y + node.radius + 15);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse handlers
    const handleMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      dragNode = nodes.find(node => {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        return Math.sqrt(dx * dx + dy * dy) <= node.radius + 8;
      });
      if (dragNode) isDragging = true;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (isDragging && dragNode) {
        dragNode.x = mouseX;
        dragNode.y = mouseY;
      } else {
        const found = nodes.find(node => {
          const dx = node.x - mouseX;
          const dy = node.y - mouseY;
          return Math.sqrt(dx * dx + dy * dy) <= node.radius + 8;
        });
        setHoveredNode(found ? found.raw : null);
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      dragNode = null;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const clicked = nodes.find(node => {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        return Math.sqrt(dx * dx + dy * dy) <= node.radius + 8;
      });
      if (clicked) {
        onSelectPerson(clicked.raw);
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [data, onSelectPerson]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Share2 className="w-5 h-5 text-blue-600" />
            <span>CSE (AI/ML) Collaboration & Research Network</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Interactive map connecting Faculty Guides, Department Leads, and 4th-Year Capstone Student Researchers.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 text-xs bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-600 inline-block" /> Student project lead</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-pink-500 inline-block" /> Student Researchers</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> Faculty Guides</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-teal-600 inline-block" /> HOD & Dean</span>
        </div>
      </div>

      <div className="relative w-full h-[580px] bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        
        {/* Overlay Helper */}
        <div className="absolute bottom-4 left-4 bg-slate-800/80 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs text-slate-300 flex items-center gap-2 pointer-events-none border border-slate-700/50">
          <Info className="w-4 h-4 text-blue-400" />
          <span>Drag nodes to inspect links • Click a person to view their profile</span>
        </div>

        {/* Hover Pill */}
        {hoveredNode && (
          <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 text-xs text-white shadow-xl pointer-events-none">
            <p className="font-bold">{hoveredNode.name}</p>
            <p className="text-blue-400 text-[11px]">{hoveredNode.title}</p>
            <p className="text-slate-400 text-[10px] mt-1">{hoveredNode.department}</p>
          </div>
        )}
      </div>
    </div>
  );
}
