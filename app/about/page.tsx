import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { calculateAge } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Tulasi Priya Vattikuti - AI/ML Engineer.',
};

const countWords = (str: string) =>
  str.split(/\s+/).filter((word) => word !== '').length;

export default function AboutPage() {
  const age = calculateAge('1993-08-09');
  const renderedMarkdown = aboutMarkdown.replace('{AGE}', age.toString());

  return (
    <PageWrapper>
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            A quick intro in {countWords(renderedMarkdown)} words
          </p>
        </header>
        <article className="about-content">
          <Markdown>{renderedMarkdown}</Markdown>
        </article>
      </section>
    </PageWrapper>
  );
}
