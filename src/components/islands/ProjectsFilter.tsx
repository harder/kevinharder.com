import { useMemo, useState } from 'preact/hooks';
import type { Project } from '../../content/projects';

type Props = {
  projects: Project[];
};

const ALL_TAGS = 'All';

export default function ProjectsFilter({ projects }: Props) {
  const [activeTag, setActiveTag] = useState<string>(ALL_TAGS);
  const [query, setQuery] = useState('');

  const tags = useMemo(() => {
    const values = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => values.add(tag));
    });

    return [ALL_TAGS, ...Array.from(values).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesTag = activeTag === ALL_TAGS || project.tags.includes(activeTag);
      const searchBlob = [
        project.title,
        project.problem,
        project.approach,
        project.impact,
        ...project.tags,
        ...project.stack
      ]
        .join(' ')
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchBlob.includes(normalizedQuery);
      return matchesTag && matchesQuery;
    });
  }, [activeTag, projects, query]);

  return (
    <div className="projects-filter">
      <div className="projects-toolbar">
        <label className="sr-only" htmlFor="project-search">
          Search projects
        </label>
        <input
          id="project-search"
          type="search"
          placeholder="Search projects, impact, stack..."
          value={query}
          onInput={(event) => setQuery((event.target as HTMLInputElement).value)}
        />
        <div className="tag-chips" role="group" aria-label="Project filters">
          {tags.map((tag) => {
            const selected = tag === activeTag;

            return (
              <button
                key={tag}
                type="button"
                className={selected ? 'chip is-selected' : 'chip'}
                onClick={() => setActiveTag(tag)}
                aria-pressed={selected}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>
              <strong>Problem:</strong> {project.problem}
            </p>
            <p>
              <strong>Approach:</strong> {project.approach}
            </p>
            <p>
              <strong>Impact:</strong> {project.impact}
            </p>
            <div className="badge-row" aria-label="Tech stack">
              {project.stack.map((stack) => (
                <span className="mission-badge" key={`${project.title}-${stack}`}>
                  {stack}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.links.map((link) => (
                <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && <p className="empty-state">No projects match that filter yet.</p>}
    </div>
  );
}
