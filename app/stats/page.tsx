import type { Metadata } from 'next';

import Personal from '@/components/Stats/Personal';

import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Stats',
  description:
    'Some statistics about Tulasi Priya Vattikuti and abhinavnarne.com',
};

export default function StatsPage() {
  return (
    <PageWrapper>
      <section className="stats-page">
        <header className="stats-header">
          <h1 className="stats-title">Stats</h1>
          <p className="stats-subtitle">Some fun numbers</p>
        </header>
        <div className="stats-content">
          <section>
            <h2 className="stats-section-title">About me</h2>
            <Personal />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
