import React from 'react';
import { ArrowRight, Bookmark, ExternalLink, SearchX, Users } from 'lucide-react';

export default function ExpertiseDirectory({
  people,
  onSelectPerson,
  bookmarkedIds,
  onToggleBookmark
}) {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            <Users className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
              Publicly verified profiles
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">People & expertise directory</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Profiles below are limited to names and roles the University itself publishes. Personal contact details,
              staff-wide expertise, availability, and reporting relationships are not supplied by those public pages;
              they are intentionally not guessed.
            </p>
          </div>
        </div>
      </section>

      {people.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white py-16 text-center dark:border-slate-800 dark:bg-slate-900">
          <SearchX className="mx-auto mb-3 h-10 w-10 text-slate-400" />
          <h3 className="font-bold text-slate-900 dark:text-white">No public profiles match this search</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Try a name, role, faculty, or area of work.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {people.map(person => {
            const isBookmarked = bookmarkedIds.includes(person.id);
            const initials = person.name
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map(part => part[0])
              .join('')
              .toUpperCase();

            return (
              <article
                key={person.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white">
                      {initials}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-bold text-slate-900 dark:text-white">{person.name}</h3>
                      <p className="mt-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">{person.title}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onToggleBookmark(person.id)}
                    aria-label={isBookmarked ? `Remove ${person.name} from saved profiles` : `Save ${person.name}`}
                    aria-pressed={isBookmarked}
                    className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-amber-600 dark:hover:bg-slate-800"
                  >
                    <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>
                </div>

                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{person.department}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {(person.responsibilities || []).map(responsibility => (
                    <li key={responsibility} className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                      <span className="mr-2 text-blue-500" aria-hidden="true">•</span>
                      {responsibility}
                    </li>
                  ))}
                  {(person.expertise || []).length > 0 && (
                    <li className="flex flex-wrap gap-1.5 pt-1">
                      {person.expertise.map(item => (
                        <span key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {item}
                        </span>
                      ))}
                    </li>
                  )}
                </ul>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <a
                    href={person.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
                  >
                    Official source <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onSelectPerson(person)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:underline dark:text-blue-300"
                  >
                    Profile <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
