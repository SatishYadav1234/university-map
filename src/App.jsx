import React, { useState, useEffect } from 'react';
import { 
  Network, Building2, Users, FlaskConical, Search, Bookmark, Moon, Sun, Download
} from 'lucide-react';

import { UNIVERSITY_DATA } from './data/universityData';
import AcademicStructure from './components/AcademicStructure';
import ExpertiseDirectory from './components/ExpertiseDirectory';
import ProjectsExplorer from './components/ProjectsExplorer';
import ProfileModal from './components/ProfileModal';
import BookmarksDrawer from './components/BookmarksDrawer';

export default function App() {
  const [activeView, setActiveView] = useState('academics');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('apex_theme') === 'dark';
    } catch (error) {
      console.error('Unable to read the saved theme preference.', error);
      return false;
    }
  });
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const savedBookmarks = JSON.parse(localStorage.getItem('apex_bookmarks') || '[]');
      return Array.isArray(savedBookmarks)
        ? savedBookmarks.filter(id => UNIVERSITY_DATA.people.some(person => person.id === id))
        : [];
    } catch (error) {
      console.error('Unable to read saved contacts.', error);
      return [];
    }
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    try {
      localStorage.setItem('apex_bookmarks', JSON.stringify(bookmarks));
    } catch (error) {
      console.error('Unable to save contacts in this browser.', error);
    }
  }, [bookmarks]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      localStorage.setItem('apex_theme', darkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Unable to save the theme preference.', error);
    }
  }, [darkMode]);

  const toggleBookmark = (id) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const departments = [...new Set(UNIVERSITY_DATA.people.map(person => person.department))].sort();
  const filteredPeople = UNIVERSITY_DATA.people.filter(p => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const searchableFields = [
        p.name,
        p.title,
        p.department,
        p.bio,
        p.roleCategory,
        ...(p.responsibilities || []),
        ...(p.expertise || [])
      ];
      const match = searchableFields.some(value => value?.toLowerCase().includes(q));
      if (!match) return false;
    }

    return selectedDept === 'ALL' || p.department === selectedDept;
  });

  const exportAllData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(UNIVERSITY_DATA, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "mit_adt_university_expertise_map.json");
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* 0. EDITORIAL TOP CAMPUS IDENTIFIER BAR */}
      <div className="bg-[#0f172a] text-slate-300 text-xs px-4 py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-white tracking-wide">
              MIT Art, Design and Technology University, Pune
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-mono text-[11px]">
              Rajbaug, Loni Kalbhor
            </span>
            <span className="text-slate-600">•</span>
            <span className="inline-flex items-center text-[10px] text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
              NAAC A+ Accredited
            </span>
          </div>

          <span className="text-[11px] text-slate-400">Academic structure, public profiles, and initiatives</span>
        </div>
      </div>

      {/* 1. CLEAN APP HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-3">
            <button className="flex items-center space-x-3 min-w-0 text-left" onClick={() => setActiveView('academics')} aria-label="Go to academic structure">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
                <Network className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white leading-tight truncate">
                  University People & Expertise Map
                </h1>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                  Officially published university information
                </p>
              </div>
            </button>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                title="Saved profiles"
                aria-label={`Saved profiles${bookmarks.length ? ` (${bookmarks.length})` : ''}`}
              >
                <Bookmark className="w-4 h-4" />
                {bookmarks.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />}
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                title="Toggle theme"
                aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <nav aria-label="Main navigation" className="flex items-center gap-1 overflow-x-auto pb-2 -mx-1 px-1">
            {[
              { id: 'academics', label: 'Academic structure', icon: Building2 },
              { id: 'directory', label: 'People & expertise', icon: Users },
              { id: 'projects', label: 'Projects', icon: FlaskConical },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveView(id)}
                aria-current={activeView === id ? 'page' : undefined}
                className={`shrink-0 px-3 py-2 rounded-xl flex items-center gap-2 transition-colors text-xs font-semibold ${
                  activeView === id
                    ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* 2. CAMPUS TELEMETRY STRIP */}
      <div className="bg-white dark:bg-[#0c121e] border-b border-slate-200/80 dark:border-slate-800/80 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Building2 className="w-3.5 h-3.5 text-blue-500" />
              <span>MIT Art, Design and Technology University</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-500" />
              <span>{UNIVERSITY_DATA.people.length} directory profiles</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300">
              <Building2 className="w-3.5 h-3.5" />
              <span>Published records only · see source notes for coverage limits</span>
            </span>
          </div>
        </div>
      </div>

      {/* Search and department filter */}
      <section className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#090d16] px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value) setActiveView('directory');
              }}
              aria-label="Search publicly listed people, roles, and expertise"
              placeholder="Search publicly listed names, roles, responsibilities, or expertise..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-slate-400 transition"
            />
          </div>

          {/* Department Filter & Export */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              aria-label="Filter by department or unit"
              className="px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            >
              <option value="ALL">All publicly listed departments</option>
              {departments.map(department => <option key={department} value={department}>{department}</option>)}
            </select>

            <button 
              onClick={exportAllData}
              className="px-3.5 py-2.5 text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl flex items-center space-x-1.5 text-slate-700 dark:text-slate-300 transition-colors shrink-0 shadow-sm"
              title="Download University Dataset"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export JSON</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeView === 'academics' && (
          <AcademicStructure
            faculties={UNIVERSITY_DATA.faculties}
            people={UNIVERSITY_DATA.people}
            onSelectPerson={setSelectedPerson}
            onShowPeople={() => {
              setSearchQuery('');
              setSelectedDept('ALL');
              setActiveView('directory');
            }}
          />
        )}

        {activeView === 'directory' && (
          <ExpertiseDirectory 
            people={filteredPeople}
            onSelectPerson={setSelectedPerson}
            bookmarkedIds={bookmarks}
            onToggleBookmark={toggleBookmark}
          />
        )}

        {activeView === 'projects' && (
          <ProjectsExplorer 
            projects={UNIVERSITY_DATA.projects}
            people={UNIVERSITY_DATA.people}
            onSelectPerson={setSelectedPerson}
          />
        )}
      </main>

      {/* Profile modal and saved profiles */}
      <ProfileModal 
        person={selectedPerson}
        allPeople={UNIVERSITY_DATA.people}
        allProjects={UNIVERSITY_DATA.projects}
        onClose={() => setSelectedPerson(null)}
        onSelectPerson={setSelectedPerson}
      />

      <BookmarksDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        bookmarkedIds={bookmarks}
        allPeople={UNIVERSITY_DATA.people}
        onToggleBookmark={toggleBookmark}
        onSelectPerson={setSelectedPerson}
      />

      {/* 6. EDITORIAL FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#090d16] py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            MIT Art, Design and Technology University, Pune
          </p>
          <p className="text-[11px] text-slate-400">
            {UNIVERSITY_DATA.campus} · Publicly sourced information
          </p>
          <p className="text-[10px] text-slate-400 font-mono pt-1">
            Reporting lines, full staff/student records, and project ownership are shown only where published by the University.
          </p>
        </div>
      </footer>
    </div>
  );
}
