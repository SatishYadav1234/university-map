import React, { useMemo, useState } from 'react';
import { ArrowUpRight, BookOpen, Building2, ExternalLink, Users } from 'lucide-react';

export default function AcademicStructure({ faculties, onShowPeople }) {
  const [selectedFacultyId, setSelectedFacultyId] = useState(null);
  const schoolCount = useMemo(
    () => faculties.reduce((total, faculty) => total + faculty.schools.length, 0),
    [faculties]
  );

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
              Official academics directory
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Explore the university&apos;s academic structure
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Browse faculty groupings, see the academic areas they describe, and open each school&apos;s official page.
              This is the university website&apos;s published grouping, not an inferred reporting chart.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="min-w-28 rounded-2xl bg-blue-50 dark:bg-blue-950/40 px-4 py-3">
              <span className="block text-2xl font-bold text-blue-700 dark:text-blue-300">{faculties.length}</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">faculty groupings</span>
            </div>
            <div className="min-w-28 rounded-2xl bg-violet-50 dark:bg-violet-950/40 px-4 py-3">
              <span className="block text-2xl font-bold text-violet-700 dark:text-violet-300">{schoolCount}</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">listed academic units</span>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-xs leading-5 text-amber-950 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-200">
          <strong>Published-count difference:</strong> the faculty directory lists {schoolCount} schools, academies, colleges,
          and centres under {faculties.length} groupings, while the university profile describes 17 constituent schools.
          The directory below follows the names and groupings on the academics page; confirm formal counts with the University.
          {' '}
          <a
            href="https://mituniversity.ac.in/about-us/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline underline-offset-2"
          >
            University profile <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </section>

      <section aria-labelledby="faculty-directory-heading">
        <div className="mb-4">
          <h2 id="faculty-directory-heading" className="text-xl font-bold text-slate-900 dark:text-white">
            Faculties and academic units
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Select a faculty to show its associated schools, academies, colleges, and centres.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faculties.map(faculty => {
            const expanded = selectedFacultyId === faculty.id;
            return (
              <article
                key={faculty.id}
                className={`rounded-2xl border bg-white dark:bg-slate-900 transition-colors ${
                  expanded
                    ? 'border-blue-400 dark:border-blue-700 shadow-md shadow-blue-950/5'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedFacultyId(expanded ? null : faculty.id)}
                  aria-expanded={expanded}
                  className="w-full p-5 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-blue-700 dark:bg-slate-800 dark:text-blue-300">
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-slate-900 dark:text-white">{faculty.name}</h3>
                        <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">
                          {faculty.responsibility}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {faculty.schools.length} {faculty.schools.length === 1 ? 'unit' : 'units'}
                    </span>
                  </div>
                </button>

                {expanded && (
                  <div className="border-t border-slate-100 px-5 py-4 dark:border-slate-800">
                    <ul className="space-y-2">
                      {faculty.schools.map(school => (
                        <li key={school.id}>
                          <a
                            href={school.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-start justify-between gap-3 rounded-xl border border-slate-200 p-3 hover:border-blue-300 hover:bg-blue-50/60 dark:border-slate-800 dark:hover:border-blue-800 dark:hover:bg-blue-950/20"
                          >
                            <span className="flex min-w-0 items-start gap-2.5">
                              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                              <span>
                                <span className="block text-sm font-semibold text-slate-800 dark:text-slate-100">
                                  {school.name}
                                </span>
                                <span className="mt-0.5 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                                  {school.responsibility}
                                </span>
                              </span>
                            </span>
                            <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-blue-700 dark:text-blue-300">
                              {school.abbreviation}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={faculty.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
                    >
                      View faculty directory source <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
            <Users className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">People and reporting relationships</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              The public leadership page names University leaders, but does not establish their reporting lines to one
              another or provide a full faculty and employee directory. View the verified public leadership roster in
              the People tab; supervisor relationships are left blank unless an official source states them.
            </p>
            <button
              type="button"
              onClick={onShowPeople}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
            >
              View public leadership profiles <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
