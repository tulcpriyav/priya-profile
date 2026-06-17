import type { Metadata } from 'next';
import PageWrapper from '@/components/Template/PageWrapper';

export const metadata: Metadata = {
  title: 'Research & Writing',
  description: 'Research papers and technical articles on Generative AI, AWS cloud architecture, data governance, and scalable engineering practices.',
};

interface ResearchPaper {
  title: string;
  journal: string;
  doi: string;
  doiLink: string;
  articleLink: string;
}

const papers: ResearchPaper[] = [
  {
    title: 'Automating OpenSearch Snapshot Backup and Restore Using AWS Glue and Infrastructure as Code',
    journal: 'IJRAI',
    doi: '10.15662/IJRAI.2024.0705016',
    doiLink: 'https://doi.org/10.15662/IJRAI.2024.0705016',
    articleLink: 'https://ijrai.org/index.php/ijrai/article/view/440',
  },
  {
    title: 'An Automated, Low-Cost AWS Cost Monitoring Framework for Daily Operational Anomaly Detection',
    journal: 'IJEETR',
    doi: '10.15662/IJEETR.2024.0604011',
    doiLink: 'https://doi.org/10.15662/IJEETR.2024.0604011',
    articleLink: 'https://ijeetr.com/index.php/ijeetr/article/view/291',
  },
  {
    title: 'AetherStream: Predictive Rebalancing to Mitigate GPU Data Starvation in Kubernetes-Based AI Systems',
    journal: 'JSEE',
    doi: '10.5281/zenodo.20079862',
    doiLink: 'https://doi.org/10.5281/zenodo.20079862',
    articleLink: 'https://jseepublisher.com/volume-35-issue-12-2025/',
  },
  {
    title: 'Scalable Multi-Application CI/CD Pipeline Management using Master Pipeline Architecture',
    journal: 'IJRPETM',
    doi: '10.15662/IJRPETM.2024.0702004',
    doiLink: 'https://doi.org/10.15662/IJRPETM.2024.0702004',
    articleLink: 'https://www.ijrpetm.com/index.php/IJRPETM/article/view/375',
  },
  {
    title: 'Hardening the Wire: Real-Time Bytecode Shields as a Runtime Enforcement Layer for Zero-Trust Microservices',
    journal: 'LRJ',
    doi: '10.5281/zenodo.20665914',
    doiLink: 'https://doi.org/10.5281/zenodo.20665914',
    articleLink: 'https://liberteresearch.org/volume-14-issue-1-2026/',
  },
  {
    title: 'A Secure and Governed Multi-Tenant Generative AI Platform Using Amazon Bedrock with Private API Gateway and Azure Entra ID Integration',
    journal: 'LRJ',
    doi: '10.5281/zenodo.20664465',
    doiLink: 'https://doi.org/10.5281/zenodo.20664465',
    articleLink: 'https://liberteresearch.org/volume-13-issue-6-2025/',
  },
  {
    title: 'Zero Trust Architecture Using AWS IAM for Secure Data Lake Governance in Multi-Account AWS Environments',
    journal: 'LRJ',
    doi: '10.5281/zenodo.20663867',
    doiLink: 'https://doi.org/10.5281/zenodo.20663867',
    articleLink: 'https://liberteresearch.org/volume-12-issue-7-2024/',
  },
  {
    title: 'AI-Driven Data Lineage Graphs Using Amazon DataZone, AWS Glue, and Lake Formation for Metadata-Driven Governance',
    journal: 'JSEE',
    doi: '10.5281/zenodo.20659993',
    doiLink: 'https://doi.org/10.5281/zenodo.20659993',
    articleLink: 'https://jseepublisher.com/volume-35-issue-3-2025/',
  },
  {
    title: 'Efficient LLM Inference in Low-Resource Edge Systems: The Impact of Cold-Start, Warm-Start, and Memory Constraints',
    journal: 'LRJ',
    doi: '10.5281/zenodo.20663560',
    doiLink: 'https://doi.org/10.5281/zenodo.20663560',
    articleLink: 'https://liberteresearch.org/volume-12-issue-10-2024/',
  },
  {
    title: 'Using Artificial Intelligence for Diabetes Healthcare: Synthetic Data Generation and Predictive Modeling for HIPAA-Compliant Clinical Intelligence',
    journal: 'JSEE',
    doi: '10.5281/zenodo.20661932',
    doiLink: 'https://doi.org/10.5281/zenodo.20661932',
    articleLink: 'https://jseepublisher.com/index.php/volume-33-issue-6-2023/',
  },
];

export default function WritingPage() {
  return (
    <PageWrapper>
      <article className="writing-page">
        <header className="writing-header">
          <h1 className="page-title">Research & Writing</h1>
        </header>

        <div className="writing-content">
          <section className="writing-intro">
            <p>
              I enjoy writing research papers and technical articles that connect real-world engineering problems with practical AI, cloud, and data-driven solutions. My writing focuses on areas such as Generative AI platforms, AWS cloud architecture, data governance, Kubernetes-based AI systems, secure microservices, healthcare AI, and scalable engineering practices.
            </p>
            <p>
              For me, writing is more than publishing papers. It is a way to explore ideas deeply, document engineering lessons, and share solutions that can help teams build reliable, secure, and scalable systems. I am especially passionate about research that bridges enterprise technology with emerging AI capabilities.
            </p>
          </section>

          <section className="writing-papers">
            <h2>Published Papers</h2>
            <ul className="papers-list">
              {papers.map((paper, index) => (
                <li key={index} className="paper-item">
                  <div className="paper-title">
                    <strong>{paper.title}</strong>
                  </div>
                  <div className="paper-details">
                    <div className="paper-detail">
                      <span className="detail-label">Journal:</span> {paper.journal}
                    </div>
                    <div className="paper-detail">
                      <span className="detail-label">DOI:</span>{' '}
                      <a href={paper.doiLink} target="_blank" rel="noopener noreferrer">
                        {paper.doiLink}
                      </a>
                    </div>
                    <div className="paper-detail">
                      <span className="detail-label">Article:</span>{' '}
                      <a href={paper.articleLink} target="_blank" rel="noopener noreferrer">
                        {paper.articleLink}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </PageWrapper>
  );
}
