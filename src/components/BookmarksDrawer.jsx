import React from 'react';
import { X, BookmarkCheck, ExternalLink, Trash2, Download } from 'lucide-react';

export default function BookmarksDrawer({ isOpen, onClose, bookmarkedIds, allPeople, onToggleBookmark, onSelectPerson }) {
  if (!isOpen) return null;

  const savedPeople = allPeople.filter(p => bookmarkedIds.includes(p.id));

  const exportSavedContacts = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(savedPeople, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "saved_mit_adt_contacts.json");
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  };

  return (
    <div className="fixed inset-y-0 right-0 w-84 sm:w-96 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 z-50 shadow-2xl flex flex-col animate-slideLeft">
      {/* Drawer Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <BookmarkCheck className="w-5 h-5 text-blue-600" />
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Saved Profiles ({savedPeople.length})
            </h3>
            <p className="text-[10px] text-slate-400">Saved public university profiles</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content list */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {savedPeople.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-xs">
            <BookmarkCheck className="w-10 h-10 mx-auto stroke-1 mb-2.5 opacity-50" />
            <p className="font-medium text-slate-600 dark:text-slate-300">No saved profiles</p>
            <p className="mt-1 text-[11px] leading-relaxed max-w-[200px] mx-auto text-slate-400">
              Bookmark a public profile to keep it in this browser.
            </p>
          </div>
        ) : (
          savedPeople.map(p => {
            const initials = p.name
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map(part => part[0])
              .join('')
              .toUpperCase();
            return (
            <div 
              key={p.id}
              className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between gap-3 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <span aria-hidden="true" className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold shrink-0">
                  {initials}
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{p.name}</h4>
                  <p className="text-[11px] text-blue-600 dark:text-blue-400 truncate">{p.title}</p>
                  <p className="text-[10px] text-slate-400 truncate">{p.department}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 shrink-0">
                <button 
                  onClick={() => { onSelectPerson(p); onClose(); }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-700"
                  title="View Profile"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => onToggleBookmark(p.id)}
                  className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                  title="Remove"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            );
          })
        )}
      </div>

      {/* Drawer Footer */}
      {savedPeople.length > 0 && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button 
            onClick={exportSavedContacts}
            className="w-full py-2.5 px-3 text-xs font-semibold rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 flex items-center justify-center space-x-1.5 text-slate-700 dark:text-slate-200 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Saved Profiles (JSON)</span>
          </button>
        </div>
      )}
    </div>
  );
}
