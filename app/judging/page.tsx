import type { Metadata } from 'next';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Technical judging, STEM volunteering, and community leadership including Technovation Girls, National TSA Conference, and Women in Technology.',
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
          <h1 className="page-title">Leadership</h1>
        </header>

        <div className="judging-content">
          <section className="judging-intro">
            <p>
              I enjoy using technology to solve real-world problems and am committed to supporting the next generation
              of student innovators. Alongside my work in AI, cloud engineering, data platforms, and software
              development, I contribute as a STEM competition judge and volunteer committee member, supporting technology
              education, mentorship, and career exploration.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <a href="https://technovationchallenge.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/technovation.jpg"
                  alt="Technovation Girls logo"
                  className="judging-logo"
                />
              </a>
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
              <a href="https://tsaweb.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/tsaconference.jpg"
                  alt="National TSA Conference logo"
                  className="judging-logo"
                />
              </a>
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

          <section className="judging-section">
            <div className="judging-heading">
              <a href="https://hophacks.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/hophacks.jpg"
                  alt="HopHacks logo"
                  className="judging-logo"
                />
              </a>
              <div>
                <h2>Hackathon Judge</h2>
                <p><strong>Johns Hopkins University — HopHacks 2026</strong></p>
              </div>
            </div>
            <p>
              Served as a <strong>Hackathon Judge at HopHacks 2026</strong>, hosted by the prestigious
              <strong> Johns Hopkins University</strong> in Baltimore, Maryland. HopHacks brings together talented
              students, aspiring engineers, developers, and innovators to collaborate on technology-driven solutions
              addressing real-world challenges.
            </p>
            <p>
              As a judge, evaluated student-led technology projects based on technical complexity, innovation,
              creativity, practical applicability, problem-solving approaches, and overall execution. Assessed how
              effectively participating teams translated their ideas into functional solutions, demonstrated technical
              capabilities, and communicated the potential impact of their projects.
            </p>
            <p>
              Drawing upon professional expertise in Artificial Intelligence, Machine Learning, Generative AI, Cloud
              Computing, and Software Engineering, contributed technical perspectives during project evaluations and
              provided constructive feedback to help participants strengthen their solutions, technical approaches, and
              presentations.
            </p>
            <p>
              Through this engagement at <strong>Johns Hopkins University</strong>, supported the development of
              emerging technology talent, encouraged interdisciplinary collaboration, and contributed to an environment
              that promotes innovation, entrepreneurship, and the practical application of advanced technologies.
            </p>
            <p>
              This judging experience reflects an ongoing commitment to technical excellence, professional leadership,
              STEM education, and mentoring the next generation of technology innovators.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <a href="https://www.digitalhealthawards.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/DigitalHealth.jpg"
                  alt="Digital Health & AI Awards logo"
                  className="judging-logo"
                />
              </a>
              <div>
                <h2>Digital Health &amp; AI Awards Judge</h2>
                <p><strong>Digital Health Hub Foundation | Digital Health &amp; AI Innovation</strong></p>
              </div>
            </div>
            <p>
              Served as a judge for the <strong>2026 Digital Health &amp; AI Awards</strong>, an initiative recognizing
              innovation and technological advancements across the digital health and healthcare artificial intelligence
              ecosystem.
            </p>
            <p>
              Contributed to the evaluation of innovative healthcare technology companies and solutions, focusing on
              their potential to address healthcare challenges, improve patient outcomes, and advance the adoption of
              emerging technologies.
            </p>
            <p>
              Drawing upon professional expertise in Artificial Intelligence, Machine Learning, Generative AI,
              Cloud Computing, and Healthcare Data Engineering, brought a technical perspective to the
              evaluation process, considering innovation, technological capabilities, practical applications,
              scalability, and potential healthcare impact.
            </p>
            <p>
              Through this judging engagement, supported the recognition of promising digital health innovations and
              contributed to the broader mission of advancing technology-driven healthcare transformation.
            </p>
            <p>
              This experience reflects an ongoing commitment to AI innovation, healthcare technology
              leadership, technical evaluation, and supporting meaningful advancements in digital health.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <a href="https://www.womenintechnology.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/witlogo.jpg"
                  alt="Women in Technology logo"
                  className="judging-logo"
                />
              </a>
              <div>
                <h2>Women in Technology (WIT)</h2>
                <p><strong>Girls in Technology Committee Member</strong></p>
              </div>
            </div>
            <p>
              I currently serve on the Girls in Technology Committee at <strong>Women in Technology (WIT)</strong>,
              contributing to the ideation, development, and implementation of STEM programs and workshops for students.
            </p>
            <p>
              In this role, I collaborate with committee members to propose new program ideas, strengthen existing
              initiatives, and help transform ideas into engaging educational experiences. I bring my background in
              AI/ML, generative AI, cloud technologies, healthcare technology, and data engineering to support programs
              that encourage students to explore technology and pursue future STEM opportunities.
            </p>
            <p>
              Through this ongoing committee service, I support WIT's mission of expanding technology education,
              mentorship, and career exposure for the next generation of innovators.
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
