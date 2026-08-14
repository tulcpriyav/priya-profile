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
          Senior AI/ML Engineer specializing in enterprise AI, generative AI, AWS cloud platforms,
          data engineering and healthcare technology. I build secure, scalable AI and data solutions
          while contributing to the technology community through research, technical judging, STEM
          education and mentorship.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">Enterprise AI</span>
          <span className="hero-chip">AWS &amp; MLOps</span>
          <span className="hero-chip">Healthcare Technology</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
          <Link href="/writing" className="button button-secondary">
            Explore Research
          </Link>
        </div>

        <p className="hero-credibility">
          Research Author · Technical Judge · Girls in Technology Committee Member at WIT
        </p>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
