import Image from 'next/image';
import Link from 'next/link';

import PageWrapper from '@/components/Template/PageWrapper';

export default function BookLandingPage() {
  return (
    <PageWrapper>
      <section className="book-page">
        <header className="book-hero" aria-labelledby="book-title">
          <div className="book-hero-pattern" aria-hidden="true" />

          <div className="book-hero-grid">
            <div className="book-portrait-panel">
              <Image
                src="/images/priyanew.jpeg"
                alt="Priya Vattikuti portrait"
                width={860}
                height={1200}
                className="book-portrait"
                priority
              />
            </div>

            <div className="book-hero-content">
              <p className="book-name">PRIYA VATTIKUTI</p>
              <p className="book-role">Senior AI/ML Engineer | Author | Researcher</p>
              <p className="book-vision">
                Building the future of Enterprise AI with AWS and Generative AI
              </p>

              <span className="book-status">Coming Soon</span>

              <h1 id="book-title" className="book-title">
                Enterprise AI on AWS
              </h1>
              <p className="book-subtitle">
                From Data Platforms to Generative AI
              </p>

              <div className="book-hero-cta" role="group" aria-label="Book actions">
                <Link href="/contact" className="button book-button-primary">
                  Notify Me
                </Link>
                <a
                  href="#sample-chapter"
                  className="button button-secondary book-button-secondary"
                >
                  Read Sample Chapter
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="book-details" aria-labelledby="about-author-title">
          <article className="book-card">
            <h2 id="about-author-title">About the Author</h2>
            <p>
              Priya Vattikuti is a Senior AI/ML Engineer specializing in AWS cloud architecture,
              enterprise data platforms, machine learning, and Generative AI. She has led AI
              initiatives across healthcare, cloud-native data engineering, and enterprise
              analytics while contributing to research publications and mentoring future
              technology professionals.
            </p>
          </article>

          <article className="book-card" id="sample-chapter">
            <h2>Enterprise AI on AWS</h2>
            <p>
              Modern enterprises need more than AI models. They need scalable data platforms,
              secure architectures, governance, MLOps, and Generative AI applications.
            </p>
            <p>
              This book demonstrates how to build production-ready Enterprise AI systems using
              AWS.
            </p>
          </article>
        </section>
      </section>
    </PageWrapper>
  );
}
