import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Bookmark, Split, ZoomIn, ZoomOut, RotateCcw, Building2, MapPin, Clock } from 'lucide-react';

export default function OrgChart({ data, onSelectPerson, bookmarkedIds, onToggleBookmark }) {
  const [collapsedNodes, setCollapsedNodes] = useState(new Set());
  const [zoomLevel, setZoomLevel] = useState(1);
  const chartViewportRef = useRef(null);

  useEffect(() => {
    const viewport = chartViewportRef.current;
    if (!viewport) return;
    viewport.scrollLeft = Math.max(0, (viewport.scrollWidth - viewport.clientWidth) / 2);
  }, [collapsedNodes, data.people.length, zoomLevel]);

  const toggleCollapse = (id) => {
    setCollapsedNodes(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = (expand) => {
    if (expand) {
      setCollapsedNodes(new Set());
    } else {
      setCollapsedNodes(new Set(data.people.map(p => p.id)));
    }
  };

  const renderNode = (person) => {
    const isCollapsed = collapsedNodes.has(person.id);
    const children = data.people.filter(p => p.reportsTo === person.id);
    const hasChildren = children.length > 0;
    const isBookmarked = bookmarkedIds.includes(person.id);
    const isLead = person.id === 'p6' || person.id === 'p7';

    return (
      <div key={person.id} className="flex flex-col items-center relative">
        {/* Person Card */}
        <div 
          onClick={() => onSelectPerson(person)}
          className={`w-80 bg-white dark:bg-slate-900 border rounded-2xl p-4 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-200 relative z-10 group ${
            isLead
              ? 'border-blue-500/80 ring-2 ring-blue-500/20'
              : 'border-slate-200/90 dark:border-slate-800 hover:border-blue-500/60'
          }`}
        >
          {/* Card Top: Avatar & Designation */}
          <div className="flex items-start space-x-3">
            <div className="relative shrink-0">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-slate-100 dark:ring-slate-800 shadow"
              />
              {isLead && (
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow">
                  ★
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-1">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {person.name}
                </h4>
                <button 
                  onClick={(e) => { e.stopPropagation(); onToggleBookmark(person.id); }}
                  className="text-slate-400 hover:text-amber-500 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                  title={isBookmarked ? "Remove bookmark" : "Save contact"}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'text-amber-500 fill-amber-500' : ''}`} />
                </button>
              </div>

              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold truncate">
                {person.title}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                {person.department}
              </p>
            </div>
          </div>

          {/* Location & Cabin Hours Micro-Strips */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
            <div className="flex items-center space-x-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{person.office}</span>
            </div>
            {person.cabinHours && (
              <div className="flex items-center space-x-1.5 truncate text-[10px] text-slate-500">
                <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                <span className="truncate">{person.cabinHours}</span>
              </div>
            )}
          </div>

          {/* Matrix Badge */}
          {person.matrixAffiliation && (
            <div className="mt-2 text-[10px] px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50 flex items-center gap-1.5 font-medium">
              <Split className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">{person.matrixAffiliation}</span>
            </div>
          )}

          {/* Expand/Collapse Reports Button */}
          {hasChildren && (
            <div className="mt-3 pt-1 flex justify-center">
              <button 
                onClick={(e) => { e.stopPropagation(); toggleCollapse(person.id); }}
                className="flex items-center space-x-1.5 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline px-2.5 py-1 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
              >
                {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
                <span>{children.length} direct report{children.length > 1 ? 's' : ''} {isCollapsed ? '(hidden)' : ''}</span>
              </button>
            </div>
          )}
        </div>

        {/* Tree Branch Lines and Children */}
        {hasChildren && !isCollapsed && (
          <div className="flex items-start justify-center gap-6 pt-8 relative">
            {/* Horizontal Line connecting children */}
            <div className="absolute top-0 left-6 right-6 h-0.5 bg-slate-300 dark:bg-slate-700" />
            
            {children.map(child => (
              <div key={child.id} className="relative flex flex-col items-center">
                {/* Vertical drop line to child */}
                <div className="w-0.5 h-8 bg-slate-300 dark:bg-slate-700 -mt-8 mb-0" />
                {renderNode(child)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const rootPerson = data.people.find(p => p.reportsTo === null);

  return (
    <div className="space-y-4">
      {/* Chart Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            <span>MIT ADT University • Administrative & Academic Hierarchy</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Click cards to inspect comprehensive faculty profiles or collapse branches to isolate divisions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
            <button 
              onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.1))}
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-slate-700"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-medium px-2 text-slate-600 dark:text-slate-300">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button 
              onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))}
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-slate-700"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setZoomLevel(1)}
              className="p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-slate-700 ml-1"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />

          <button 
            onClick={() => expandAll(true)}
            className="text-xs font-medium px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Expand All
          </button>
          <button 
            onClick={() => expandAll(false)}
            className="text-xs font-medium px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Collapse
          </button>
        </div>
      </div>

      {/* Tree Visualization Container */}
      <div ref={chartViewportRef} className="overflow-x-auto pb-16 pt-6 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl bg-slate-100/50 dark:bg-slate-950/40 p-6 shadow-inner">
        <div 
          className="min-w-fit flex flex-col items-center transition-transform duration-200 origin-top"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {rootPerson && renderNode(rootPerson)}
        </div>
      </div>
    </div>
  );
}
