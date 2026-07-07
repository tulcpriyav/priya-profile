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
              I enjoy using technology to solve real-world problems, and I am committed to supporting the next generation
              of student innovators. Alongside my work in AI, cloud engineering, data platforms, and software
              development, I contribute time as a judge for STEM competitions and technology mentorship programs.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <img
                src="/images/technovation.jpg"
                alt="Technovation Girls logo"
                className="judging-logo"
              />
              <h2>Technovation Girls — Judge</h2>
            </div>
            <p>
              I recently served as a judge for <strong>Technovation Girls</strong>, a global program where students
              create app-based solutions for meaningful challenges. I reviewed projects that focused on social impact,
              healthcare, accessibility, sustainability, public safety, environmental awareness, and community support.
            </p>
            <p>
              I evaluated each team on clarity of problem definition, originality, technical approach, feasibility,
              presentation quality, and the real-world benefits of their solution. My goal was to recognize thoughtful
              work and support students who were learning to turn ideas into practical technology.
            </p>
          </section>

          <section className="certificate-card">
            <div className="certificate-flag">Gold Judge Recognition</div>
            <div className="certificate-title">Technovation Girls 2026</div>
            <p className="certificate-copy">
              Recognized for providing personalized, actionable feedback on 11+ technology-based student projects.
              This highlight reflects my commitment to helping teams improve their ideas, build confidence, and present
              stronger technical solutions.
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

          <section className="judging-section">
            <div className="judging-heading">
              <img
                src="/images/tsaconference.jpg"
                alt="National TSA Conference logo"
                className="judging-logo"
              />
              <h2>National TSA Conference — Judge</h2>
            </div>
            <p>
              I also served as a judge at the <strong>National TSA Conference</strong>, a national STEM event where
              students present projects in technology, engineering, leadership, and innovation.
            </p>
            <p>
              In this role, I evaluated work based on clarity, creativity, technical execution, presentation quality,
              and overall impact. I focused on helping students showcase strong problem-solving, well-executed ideas,
              and thoughtful use of technology.
            </p>
            <p>
              This opportunity reinforced my passion for supporting STEM education and helping young innovators build
              confidence in their skills, leadership, and creative thinking.
            </p>
          </section>

          <section className="judging-reflection">
            <p>
              My judging experiences with Technovation Girls and the National TSA Conference have strengthened my passion
              for responsible and purpose-driven technology. These opportunities remind me that innovation is not only
              about building software, but also about understanding people, solving meaningful problems, and creating
              positive impact through technology.
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
