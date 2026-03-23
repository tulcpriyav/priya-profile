import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Tulasi Priya Vattikuti</span>
        </h1>

        <p className="hero-tagline">
          AI/ML Engineer at{' '}
          <a href="https://www.minimed.com/" className="hero-highlight">
            Minimed
          </a>
          , I bring deep expertise in Java and AWS-driven cloud solutions.
          <br />
          I focus on building reliable systems that support business growth while maintaining engineering excellence.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Valpo Alum</span>
          <span className="hero-chip">Developer</span>
          <span className="hero-chip">Pioneer</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
