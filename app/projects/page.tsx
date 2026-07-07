import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of products, experiments, and hackathon builds from Tulasi Priya Vattikuti.',
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
            A collection of products, experiments, and hackathon builds that
            reflect how I explore ideas through technology.
          </p>
        </header>

        {featuredProjects.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">Featured Work</h2>
            <div className="projects-grid projects-grid--featured">
              {featuredProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Additional Projects</h2>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}
