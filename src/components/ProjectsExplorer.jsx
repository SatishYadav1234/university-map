import React from 'react';
import { ExternalLink, FlaskConical, UserRound, Users } from 'lucide-react';

export default function ProjectsExplorer({ projects, people, onSelectPerson }) {
  if (projects.length === 0) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <FlaskConical className="mx-auto h-8 w-8 text-slate-400" />
        <h2 className="mt-3 font-bold text-slate-900 dark:text-white">No publicly listed projects</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">No project records are available in the cited sources.</p>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            <FlaskConical className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">Public announcements</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">Projects and initiatives</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              This view includes initiatives found in the University&apos;s cited public announcements. A named participant
              is not necessarily a project owner or principal investigator.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map(project => (
          <article key={project.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
                  {project.status}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{project.agency}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-1 text-xs font-medium text-blue-700 dark:text-blue-300">{project.leadDept}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  <UserRound className="h-3.5 w-3.5" />
                  Project ownership
                </div>
                <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200">{project.owner}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{project.ownershipNote}</p>
              </div>

              {project.participants?.length > 0 && (
                <div className="mt-4">
                  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    <Users className="h-3.5 w-3.5" /> Named participants
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {project.participants.map(({ personId, role }) => {
                      const person = people.find(item => item.id === personId);
                      return (
                        <li key={personId} className="flex flex-wrap items-baseline gap-x-1 text-sm">
                          {person ? (
                            <button
                              type="button"
                              onClick={() => onSelectPerson(person)}
                              className="font-semibold text-blue-700 hover:underline dark:text-blue-300"
                            >
                              {person.name}
                            </button>
                          ) : (
                            <span className="font-semibold text-slate-800 dark:text-slate-200">Participant</span>
                          )}
                          <span className="text-slate-500 dark:text-slate-400">— {role}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-5 border-t border-slate-100 pt-3 dark:border-slate-800">
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:underline dark:text-blue-300"
              >
                Read official announcement <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
