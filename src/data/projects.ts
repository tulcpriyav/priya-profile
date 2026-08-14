export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Healthcare Data & AI Platform',
    subtitle: 'Medtronic',
    image: '/images/Healthcare.jpg',
    date: '2024-01-01',
    desc: 'Built scalable data pipelines and AI-assisted analytics workflows for regulated healthcare data, improving data availability, reliability, and downstream insights.',
    tech: ['Python', 'AWS Glue', 'Spark', 'Bedrock', 'SageMaker'],
    featured: true,
  },
  {
    title: 'Cloud Governance Automation',
    subtitle: 'Fannie Mae',
    image: '/images/Cloud.jpg',
    date: '2022-01-01',
    desc: 'Automated AWS infrastructure provisioning and governance so teams could deploy securely with less manual effort.',
    tech: ['AWS', 'CloudFormation', 'Lambda', 'Python', 'IAM'],
    featured: true,
  },
  {
    title: 'Enterprise Data Lake',
    subtitle: 'Vanguard',
    image: '/images/Enterprise.jpg',
    date: '2019-01-01',
    desc: 'Designed and implemented large-scale ingestion and processing pipelines for a cloud-based enterprise data lake.',
    tech: ['AWS', 'EMR', 'Spark', 'Hive', 'Kinesis'],
  },
  {
    title: 'Streaming Data Integration',
    subtitle: 'Veritis',
    image: '/images/Streaming.jpg',
    date: '2017-01-01',
    desc: 'Developed Hadoop and streaming-based integrations that moved and validated high-volume data across enterprise systems.',
    tech: ['Java', 'Kafka', 'Hadoop', 'Pig', 'Hive'],
  },
];

export default data;
