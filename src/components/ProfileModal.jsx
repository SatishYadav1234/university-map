import React from 'react';
import { ExternalLink, X } from 'lucide-react';

export default function ProfileModal({ person, allPeople, allProjects, onClose }) {
  if (!person) return null;

  const relatedProjects = allProjects.filter(project =>
    project.participants?.some(participant => participant.personId === person.id)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-5 top-5 rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">{person.roleCategory}</p>
          <h2 id="profile-title" className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{person.name}</h2>
          <p className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">{person.title}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{person.department}</p>
        </div>

        <div className="mt-6 space-y-5">
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Published role</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{person.bio}</p>
            {person.responsibilities?.length > 0 && (
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-300">
                {person.responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}
              </ul>
            )}
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Expertise</h3>
            {person.expertise?.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {person.expertise.map(item => (
                  <span key={item} className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">No individual expertise information is stated in the cited public source.</p>
            )}
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Reporting relationship</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {person.reportsTo
                ? `Published supervisor: ${allPeople.find(item => item.id === person.reportsTo)?.name || 'Not available'}`
                : 'No reporting relationship is stated in the cited public source.'}
            </p>
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Public contact information</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Email, phone, office location, and availability are not included because they were not published in the cited source.
            </p>
          </section>

          {relatedProjects.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Publicly named project participation</h3>
              <ul className="mt-2 space-y-3">
                {relatedProjects.map(project => {
                  const participation = project.participants.find(item => item.personId === person.id);
                  return (
                    <li key={project.id} className="rounded-xl border border-slate-200 p-3 dark:border-slate-800">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{project.title}</p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{participation.role}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <a
            href={person.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
          >
            View cited official source <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
