import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { calculateAge } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Tulasi Priya Vattikuti - Senior AI/ML Engineer specializing in enterprise AI, AWS, healthcare technology, and generative AI.',
};

const researchProfiles = [
  {
    title: 'Google Scholar',
    subtitle: 'View Publications',
    icon: '🎓',
    href: 'https://scholar.google.com/citations?hl=en&user=OQ8GWE0AAAAJ',
  },
  {
    title: 'ORCID',
    subtitle: 'Verified Research Profile',
    icon: '🟢',
    href: 'https://orcid.org/0009-0008-7388-3787',
  },
  {
    title: 'GitHub',
    subtitle: 'Open Source & AI Projects',
    icon: '💻',
    href: 'https://github.com/tulcpriyav',
  },
  {
    title: 'LinkedIn',
    subtitle: 'Professional Profile',
    icon: '🔗',
    href: 'https://www.linkedin.com/in/tulasipriya/',
  },
];

export default function AboutPage() {
  const age = calculateAge('1993-08-09');
  const renderedMarkdown = aboutMarkdown.replace('{AGE}', age.toString());

  return (
    <PageWrapper>
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Enterprise AI, healthcare technology, research, and STEM leadership
          </p>
        </header>
        <article className="about-content">
          <Markdown>{renderedMarkdown}</Markdown>
        </article>

        <section
          className="about-research"
          aria-labelledby="research-profiles-title"
        >
          <h2 id="research-profiles-title" className="about-research-title">
            Research Profiles
          </h2>
          <p className="about-research-intro">
            Explore my research publications, scholarly profile, open-source
            work, and professional experience.
          </p>
          <div className="about-research-grid">
            {researchProfiles.map((profile) => (
              <a
                key={profile.title}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-research-card"
              >
                <span className="about-research-icon" aria-hidden="true">
                  {profile.icon}
                </span>
                <h3 className="about-research-card-title">{profile.title}</h3>
                <p className="about-research-card-subtitle">
                  {profile.subtitle}
                </p>
              </a>
            ))}
          </div>
        </section>
      </section>
    </PageWrapper>
  );
}
