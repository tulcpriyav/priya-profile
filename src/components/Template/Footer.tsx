import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

const profileLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tulasipriya/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/tulcpriyav',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?hl=en&user=OQ8GWE0AAAAJ',
  },
  {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0008-7388-3787',
  },
];

export default function Footer() {
  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-identity">
          <Link href="/" className="footer-avatar">
            <ThemePortrait width={112} height={112} />
          </Link>
          <div className="footer-info">
            <h3>Tulasi Priya Vattikuti</h3>
            <p className="footer-role">Senior AI/ML Engineer | Enterprise AI, AWS and Healthcare Technology</p>
            <ul className="footer-profile-links" aria-label="Professional profiles">
              {profileLinks.map((profile) => (
                <li key={profile.label}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-profile-link"
                  >
                    {profile.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Tulasi Priya Vattikuti
            </p>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <h4 id="footer-links-heading" className="footer-links-label">
              Explore
            </h4>
            <div className="footer-links-grid">
              <Link href="/about">About</Link>
              <Link href="/resume">Experience</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
