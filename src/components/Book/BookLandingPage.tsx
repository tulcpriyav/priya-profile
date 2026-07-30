import Image from 'next/image';
import Link from 'next/link';

import BookNewsletterForm from '@/components/Book/BookNewsletterForm';
import PageWrapper from '@/components/Template/PageWrapper';

export default function BookLandingPage() {
  const progress = [
    { label: 'Writing', percent: 90 },
    { label: 'Technical Review', percent: 60 },
    { label: 'Editing', percent: 40 },
    { label: 'Publishing', percent: 10 },
  ];

  const learningAreas = [
    { code: 'AWS', label: 'AWS Architecture' },
    { code: 'ML', label: 'Machine Learning' },
    { code: 'GEN', label: 'Generative AI & Agentic AI' },
    { code: 'DATA', label: 'Data Engineering' },
    { code: 'SEC', label: 'Security and Governance' },
    { code: 'OPS', label: 'MLOps' },
    { code: 'PROD', label: 'Production AI' },
    { code: 'CASE', label: 'Real-World Case Studies' },
  ];

  const bookGains = [
    {
      icon: '📦',
      title: 'AWS Architecture',
      text: 'Learn proven AWS architectures for designing secure, scalable, and resilient Enterprise AI platforms.',
    },
    {
      icon: '🤖',
      title: 'Generative AI',
      text: 'Build enterprise-grade Generative AI applications using Amazon Bedrock, RAG, AI agents, and modern LLM patterns.',
    },
    {
      icon: '⚙️',
      title: 'MLOps',
      text: 'Create reliable ML pipelines for training, deployment, monitoring, and continuous improvement.',
    },
    {
      icon: '🔒',
      title: 'Security',
      text: 'Implement governance, identity, compliance, and responsible AI practices for enterprise environments.',
    },
    {
      icon: '☁️',
      title: 'Enterprise Architecture',
      text: 'Design cloud-native architectures that are scalable, resilient, secure, and optimized for Enterprise AI workloads.',
    },
    {
      icon: '📊',
      title: 'Real-world Projects',
      text: 'Explore practical case studies, reference architectures, and implementation lessons from enterprise AI projects.',
    },
  ];

  const audience = [
    'Software Engineers',
    'Cloud Engineers',
    'AI Engineers',
    'Data Engineers',
    'Students',
    'Enterprise Architects',
  ];

  const milestones = [
    { month: 'October 2025', stage: 'Started writing', status: 'Completed' },
    {
      month: 'January 2026',
      stage: 'Research and chapter outlines',
      status: 'Completed',
    },
    {
      month: 'August 2026',
      stage: 'First draft - In progress',
      status: 'Current',
    },
    {
      month: 'November 2026',
      stage: 'Technical review and revisions',
      status: 'Upcoming',
    },
    { month: 'February 2027', stage: 'Publishing', status: 'Upcoming' },
  ];

  const allChapters = [
    'Introduction to Enterprise AI',
    'IAM Role Lifecycle Management and Identity Governance',
    'Zero Trust Architecture for Multi-Account AI and Data Platforms',
    'Designing Enterprise AI Solutions',
    'Training Machine Learning Models',
    'Fair Benchmarking of Local LLMs for Enterprise Deployment',
    'LLM Optimization and Fine-Tuning',
    'Model Inference and Serving',
    'Enterprise Generative AI Fundamentals',
    'Building Enterprise RAG and Custom GPT Applications',
    'Building a Secure and Governed Multi-Tenant Generative AI Platform',
    'Enterprise Agent Architectures and Amazon Bedrock AgentCore',
    'AI for Diabetes Healthcare and HIPAA-Aware Clinical Intelligence',
    'Healthcare GPT and Governed Enterprise Assistants',
    'Deploying Enterprise AI on Containers',
    'Secure Access for AI and Data Workloads',
    'Responsible AI, Privacy, and Regulatory Compliance',
    'Data Lineage and Metadata Intelligence',
    'Scaling Analytics with Amazon Redshift Data Sharing',
    'AI in Production',
    'Automated Cloud Cost Management',
    'Enterprise AI Platform Reference Architecture',
    'The Future of Enterprise AI Platforms',
  ];

  const previewChapters = allChapters.slice(0, 5);

  return (
    <PageWrapper>
      <section className="book-page">
        <header className="book-hero" aria-labelledby="book-title">
          <div className="book-hero-pattern" aria-hidden="true" />
          <div className="book-hero-grid">
            <div className="book-hero-photo-panel">
              <Image
                src="/images/priyanew.jpeg"
                alt="Priya Vattikuti portrait"
                width={860}
                height={1200}
                className="book-hero-photo"
                priority
              />
            </div>

            <div className="book-hero-content">
              <p className="book-eyebrow">Meet the Author</p>
              <p className="book-name">PRIYA VATTIKUTI</p>
              <ul className="book-role-list" aria-label="Author roles">
                <li>Senior AI/ML Engineer</li>
                <li>Research Author</li>
                <li>Technology Speaker</li>
                <li>Conference Judge</li>
                <li>Community Mentor</li>
              </ul>

              <h1 id="book-title" className="book-title">
                Enterprise AI on AWS
              </h1>
              <p className="book-subtitle">
                Building scalable AI, machine learning, and Generative AI
                solutions for the modern enterprise.
              </p>
              <span className="book-status">Coming Soon</span>

              <div
                className="book-hero-cta"
                role="group"
                aria-label="Book actions"
              >
                <Link href="/contact" className="button book-button-primary">
                  Join Early Access
                </Link>
                <a
                  href="#book-progress"
                  className="button button-secondary book-button-secondary"
                >
                  View Book Progress
                </a>
              </div>
            </div>
          </div>
        </header>

        <section
          className="book-grid-layout"
          id="book-progress"
          aria-labelledby="book-progress-title"
        >
          <article className="book-card book-card-progress">
            <h2 id="book-progress-title">Progress Timeline</h2>
            <ul className="book-progress-list">
              {progress.map((item) => (
                <li key={item.label} className="book-progress-item">
                  <div className="book-progress-meta">
                    <span>{item.label}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="book-progress-track" aria-hidden="true">
                    <span
                      className="book-progress-fill"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="book-release-label">Expected Release</p>
            <p className="book-release-year">2027</p>
          </article>

          <article className="book-card">
            <h2>Why I Am Writing This Book</h2>
            <blockquote>
              The real challenge is not building an AI demo. It is taking that
              demo into a secure, governed, and reliable production system that
              creates measurable business value. After years of building
              enterprise AI and cloud-native solutions on AWS, I wrote this book
              to bridge the gap between experimentation and production with
              practical patterns, hard-earned lessons, and real deployment
              guidance.
            </blockquote>
          </article>
        </section>

        <section className="book-card" aria-labelledby="book-learn-title">
          <h2 id="book-learn-title">What You&apos;ll Learn</h2>
          <div className="book-icon-grid">
            {learningAreas.map((item) => (
              <article className="book-icon-card" key={item.label}>
                <span className="book-icon-chip" aria-hidden="true">
                  {item.code}
                </span>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="book-card" aria-labelledby="book-reader-title">
          <h2 id="book-reader-title">Who Should Read This Book?</h2>
          <div className="book-audience-grid">
            {audience.map((group) => (
              <article className="book-audience-card" key={group}>
                <p>{group}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="book-grid-layout"
          id="sample-chapter"
          aria-labelledby="book-sneak-title"
        >
          <article className="book-card">
            <h2 id="book-sneak-title">Sneak Peek</h2>
            <p className="book-small-lead">Table of contents</p>
            <ol className="book-chapter-list">
              {previewChapters.map((chapter, index) => (
                <li key={chapter}>
                  <span>{`Chapter ${index + 1}`}</span>
                  <p>{chapter}</p>
                </li>
              ))}
            </ol>
            <p className="book-chapter-note">
              Showing {previewChapters.length} of {allChapters.length} chapters.
            </p>
            <a
              href="/downloads/enterprise-ai-chapters.pdf"
              download
              className="button book-button-secondary"
            >
              Download Full Chapter List (PDF)
            </a>
          </article>

          <article className="book-card">
            <h2>Why This Book Matters Now</h2>
            <p className="book-small-lead">
              A practical roadmap for building secure, scalable, and
              production-ready Enterprise AI on AWS.
            </p>
            <div className="book-gain-grid">
              {bookGains.map((gain) => (
                <article className="book-gain-card" key={gain.title}>
                  <span className="book-gain-icon" aria-hidden="true">
                    {gain.icon}
                  </span>
                  <div className="book-gain-body">
                    <h3 className="book-gain-title">{gain.title}</h3>
                    <p className="book-gain-text">{gain.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="book-card" aria-labelledby="book-journey-title">
          <h2 id="book-journey-title">Book Journey</h2>
          <ul className="book-milestone-list">
            {milestones.map((item) => (
              <li className="book-milestone-item" key={item.month}>
                <div>
                  <p className="book-milestone-month">{item.month}</p>
                  <p className="book-milestone-stage">{item.stage}</p>
                </div>
                <span
                  className={`book-milestone-status book-milestone-status-${item.status.toLowerCase()}`}
                >
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="book-card book-newsletter"
          aria-labelledby="book-newsletter-title"
        >
          <h2 id="book-newsletter-title">Join the Journey</h2>
          <p>
            Receive updates about writing progress, chapter previews, AWS
            articles, and AI insights.
          </p>
          <ul className="book-newsletter-list">
            <li>Writing progress updates</li>
            <li>Chapter previews</li>
            <li>AWS articles</li>
            <li>AI insights</li>
          </ul>
          <BookNewsletterForm />
        </section>

        <footer className="book-footer-quote" aria-label="Book quote">
          <p>
            “Great AI systems aren&apos;t built by models alone—they&apos;re
            built through thoughtful architecture, reliable engineering, and
            continuous learning.”
          </p>
        </footer>
      </section>
    </PageWrapper>
  );
}
