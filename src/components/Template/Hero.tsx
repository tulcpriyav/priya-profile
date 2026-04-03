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
          , I bring strong expertise in data engineering and cloud-based ML
          infrastructure, with a focus on building scalable, reliable data
          pipelines that power intelligent systems. I specialize in transforming
          raw data into high-quality, model-ready datasets, enabling efficient
          machine learning workflows and real-time insights. I am committed to
          designing robust, production-grade solutions that support business
          growth while upholding high standards of performance, reliability, and
          engineering excellence.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">FIT Alum</span>
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
