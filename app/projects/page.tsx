import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected enterprise projects demonstrating experience in AI, cloud engineering, data platforms, and secure automation.',
};

export default function ProjectsPage() {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <PageWrapper>
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            Selected enterprise projects demonstrating my experience in AI, cloud engineering, data platforms, and secure automation.
          </p>
        </header>

        {featuredProjects.length > 0 && (
          <section className="projects-featured">
            <div className="projects-grid projects-grid--featured">
              {featuredProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="projects-other">
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        <section className="projects-disclaimer">
          <p>
            <em>Project descriptions are high-level summaries and exclude confidential, proprietary, and sensitive information.</em>
          </p>
        </section>
      </section>
    </PageWrapper>
  );
}
