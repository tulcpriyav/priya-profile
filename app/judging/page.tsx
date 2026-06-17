import type { Metadata } from 'next';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Judging & Volunteering',
  description: 'Judging and volunteering experience with Technovation Girls and technology programs.',
};

const projects = [
  'Event-pin',
  'RedViva',
  'EcoVisual',
  'Radon Sense',
  'Manni',
  'EvacuAlert',
  'Signify',
  'SafePath',
  'Rubella Care',
  'Earthy',
  'Saving Pad',
  'VitalFlow',
  'EcoLens',
];

export default function JudgingPage() {
  return (
    <PageWrapper>
      <article className="judging-page">
        <header className="judging-header">
          <h1 className="page-title">Judging & Volunteering</h1>
        </header>

        <div className="judging-content">
          <section className="judging-intro">
            <p>
              I am passionate about using technology to solve real-world problems and supporting young innovators who are
              building meaningful solutions for their communities. Along with my work in AI, cloud engineering, data
              platforms, and software development, I actively contribute as a judge and reviewer for technology-focused
              programs.
            </p>
          </section>

          <section className="judging-section">
            <h2>Technovation Girls — Judge</h2>
            <p>
              Recently, I served as a judge for <strong>Technovation Girls</strong>, a global technology and
              entrepreneurship program where students build app-based solutions for real-world challenges. This
              experience allowed me to review student-led projects focused on social impact, healthcare, accessibility,
              sustainability, public safety, environmental awareness, and community support.
            </p>
            <p>
              During the judging process, I evaluated projects based on problem clarity, innovation, technical
              approach, feasibility, presentation quality, and real-world impact. I also focused on how effectively each
              team used technology to address the needs of their target users.
            </p>
          </section>

          <section className="judging-projects">
            <h3>Projects Reviewed</h3>
            <ul className="projects-list">
              {projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </section>

          <section className="judging-reflection">
            <p>
              This experience strengthened my passion for responsible and purpose-driven technology. It reminded me
              that innovation is not only about building software, but also about understanding people, solving
              meaningful problems, and creating positive impact through technology.
            </p>
            <p>
              My judging interests include AI/ML, Generative AI, data engineering, cloud platforms, healthcare
              technology, accessibility, sustainability, cybersecurity, responsible innovation, and social impact
              applications.
            </p>
          </section>
        </div>
      </article>
    </PageWrapper>
  );
}
