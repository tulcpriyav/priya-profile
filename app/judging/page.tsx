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
              <a href="https://www.cta.tech/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/ceslogo.jpg"
                  alt="CES Innovation Awards logo"
                  className="judging-logo"
                />
              </a>
              <div>
                <h2>CES Innovation Awards 2027 — AI Judge</h2>
                <p><strong>Consumer Technology Association (CTA)</strong></p>
              </div>
            </div>
            <p>
              Selected to serve as a judge for the prestigious CES Innovation Awards 2027 in the Artificial
              Intelligence category, completing <strong>13 product evaluations</strong> across emerging and advanced
              consumer technologies.
            </p>
            <p>
              My judging assignments included innovative product submissions from globally recognized technology
              companies and emerging industry innovators, including <strong>LG, ASUS, MSI, Novatek
              Microelectronics, AGIBOT, and Nanoleaf</strong>.
            </p>
            <p>
              The evaluation process involved assessing technological innovation, technical capabilities,
              functionality, design, and potential real-world impact. This opportunity allowed me to apply my expertise
              in Artificial Intelligence, Machine Learning, and emerging technologies to the independent assessment of
              next-generation consumer technology solutions.
            </p>
            <p>
              This year's program received a record-breaking <strong>3,900+ submissions</strong> across
              <strong> 37 product categories</strong> worldwide, reflecting the remarkable pace of global
              technological advancement and the high bar for innovation in the technology ecosystem.
            </p>
            <p>
              I am grateful to receive the <strong>official Certificate of Recognition</strong> from the Consumer
              Technology Association and to be featured in the <strong>CES Innovation Awards Judges Gallery</strong>.
              Being part of an initiative that recognizes and celebrates technological excellence has been a highly
              rewarding professional experience.
            </p>
            <p>
              <strong>Recognition:</strong> Official CES Innovation Awards 2027 Judge Certificate.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <a href="https://www.futureengineers.org/nasatechrise" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/nasa.jpg"
                  alt="NASA TechRise Student Challenge logo"
                  className="judging-logo"
                />
              </a>
              <div>
                <h2>NASA TechRise Student Challenge 2026–2027 — Judge</h2>
                <p><strong>Future Engineers</strong></p>
              </div>
            </div>
            <p>
              Recognized as a judge for the <strong>NASA TechRise Student Challenge 2026–2027</strong>, a
              NASA-supported initiative encouraging student innovation in aerospace, engineering, and scientific
              experimentation.
            </p>
            <p>
              Contributing to the evaluation of student proposals, focusing on scientific innovation, technical
              feasibility, experimental design, and potential real-world impact. This role reflects my commitment to
              supporting emerging innovators and advancing excellence in STEM education.
            </p>
            <p>
              <strong>Recognition:</strong> NASA TechRise Student Challenge 2026–2027 Judge Certificate of Appreciation.
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
              <a href="https://www.digitalhealthhub.org/awards/2026/digital-health-awards" target="_blank" rel="noopener noreferrer">
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

          <section className="judging-section">
            <h2>Technical &amp; Academic Peer Reviewer</h2>
            <p>
              Contributing to the advancement of research and innovation through independent technical evaluation of
              scholarly manuscripts across artificial intelligence, machine learning, blockchain, and emerging
              technologies. Peer-review activities focus on assessing technical rigor, research methodology,
              originality, practical relevance, and the quality of scientific contributions.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <div>
                <h2>WiML Workshop @ NeurIPS 2026 — Reviewer</h2>
                <p><strong>Women in Machine Learning (WiML) | NeurIPS 2026</strong></p>
              </div>
            </div>
            <p>
              Served as a reviewer for the Women in Machine Learning Workshop at NeurIPS 2026, contributing to the
              evaluation of research submissions in machine learning and artificial intelligence. Review responsibilities
              included assessing technical quality, methodological soundness, originality, clarity, and potential
              research impact.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <div>
                <h2>NeurIPS 2026 DynaFront Workshop — Reviewer</h2>
                <p><strong>DynaFront Workshop | NeurIPS 2026</strong></p>
              </div>
            </div>
            <p>
              Contributed as a technical reviewer for the DynaFront Workshop at NeurIPS 2026, evaluating research
              submissions related to machine learning and emerging AI methodologies. Provided technical assessments
              focused on research contributions, methodological rigor, experimental validation, and clarity of
              presentation.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <div>
                <h2>68th International Conference on Application of Blockchain (2026) — Technical Reviewer</h2>
                <p><strong>International Conference on Application of Blockchain | 2026</strong></p>
              </div>
            </div>
            <p>
              Served as a technical reviewer, completing evaluations of <strong>25 research papers</strong> covering
              blockchain technologies and their applications. Assessed research originality, technical soundness,
              proposed methodologies, implementation approaches, and practical relevance, providing constructive
              feedback to support scholarly quality.
            </p>
          </section>

          <section className="judging-section">
            <div className="judging-heading">
              <div>
                <h2>70th International Conference on Multidisciplinary Research Application of AI in Education Science and Technology (ICMRAAEST-2026) — Technical Reviewer</h2>
                <p><strong>International Conference | 2026</strong></p>
              </div>
            </div>
            <p>
              Contributed as a technical reviewer for the 70th International Conference on Multidisciplinary Research
              Application of AI in Education Science and Technology (ICMRAAEST-2026), participating in the evaluation of
              scholarly research submissions across engineering and emerging technology disciplines. Review activities
              focused on technical accuracy, research methodology, originality, clarity, and the significance of
              proposed contributions.
            </p>
          </section>

          <section className="judging-reflection">
            <p>
              My experience as a judge for the <strong>CES Innovation Awards 2027, NASA TechRise Student Challenge,
              Technovation Girls, National TSA Conference, and other national and international technology
              competitions</strong>, alongside my contributions as a technical and academic peer reviewer, reflects my
              commitment to advancing technological innovation, research excellence, and responsible innovation.
              Through these roles, I have evaluated emerging technologies, innovative solutions, student-led projects,
              and scholarly research, with an emphasis on technical rigor, originality, real-world applicability, and
              meaningful societal impact.
            </p>
            <p>
              My areas of judging and peer-review expertise include <strong>Artificial Intelligence (AI), Machine
              Learning (ML), Generative AI, Data Engineering, Cloud Computing, Healthcare AI, Blockchain,
              Cybersecurity, Responsible AI, Aerospace and Engineering Innovation, Accessibility, Sustainability,
              and Emerging Technologies</strong>.
            </p>
          </section>
        </div>
      </article>
    </PageWrapper>
  );
}
