export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
  /** Pre-computed text color for contrast - 'dark' for light backgrounds, 'light' for dark */
  textColor: 'dark' | 'light';
}

const skills: Skill[] = [
  // Languages & Automation
  { title: 'Python', competency: 5, category: ['Languages & Automation'] },
  { title: 'SQL', competency: 5, category: ['Languages & Automation'] },
  { title: 'Shell Scripting', competency: 4, category: ['Languages & Automation'] },
  { title: 'Boto3', competency: 5, category: ['Languages & Automation'] },
  { title: 'AWS CLI', competency: 4, category: ['Languages & Automation'] },

  // Enterprise AI & Generative AI
  { title: 'Amazon Bedrock', competency: 5, category: ['Enterprise AI & Generative AI'] },
  { title: 'SageMaker', competency: 5, category: ['Enterprise AI & Generative AI'] },
  { title: 'LLM Workflows', competency: 5, category: ['Enterprise AI & Generative AI'] },
  { title: 'Prompt Engineering', competency: 5, category: ['Enterprise AI & Generative AI'] },
  { title: 'RAG', competency: 4, category: ['Enterprise AI & Generative AI'] },
  { title: 'Model Evaluation', competency: 4, category: ['Enterprise AI & Generative AI'] },
  { title: 'Responsible AI', competency: 4, category: ['Enterprise AI & Generative AI'] },

  // AWS & Cloud
  { title: 'AWS Glue', competency: 5, category: ['AWS & Cloud'] },
  { title: 'Lambda', competency: 5, category: ['AWS & Cloud'] },
  { title: 'Redshift', competency: 5, category: ['AWS & Cloud'] },
  { title: 'S3', competency: 5, category: ['AWS & Cloud'] },
  { title: 'DataZone', competency: 4, category: ['AWS & Cloud'] },
  { title: 'Step Functions', competency: 4, category: ['AWS & Cloud'] },
  { title: 'IAM', competency: 5, category: ['AWS & Cloud'] },
  { title: 'EventBridge', competency: 4, category: ['AWS & Cloud'] },
  { title: 'CloudFormation', competency: 4, category: ['AWS & Cloud'] },
  { title: 'CloudWatch', competency: 4, category: ['AWS & Cloud'] },

  // Data Engineering
  { title: 'Apache Spark', competency: 5, category: ['Data Engineering'] },
  { title: 'PySpark', competency: 5, category: ['Data Engineering'] },
  { title: 'Hadoop', competency: 4, category: ['Data Engineering'] },
  { title: 'Hive', competency: 4, category: ['Data Engineering'] },
  { title: 'Kafka', competency: 4, category: ['Data Engineering'] },
  { title: 'ETL/ELT', competency: 5, category: ['Data Engineering'] },
  { title: 'Data Lakes', competency: 5, category: ['Data Engineering'] },
  { title: 'Pandas', competency: 5, category: ['Data Engineering'] },

  // Databases
  { title: 'PostgreSQL', competency: 4, category: ['Databases'] },
  { title: 'MySQL', competency: 4, category: ['Databases'] },
  { title: 'DB2', competency: 4, category: ['Databases'] },
  { title: 'DynamoDB', competency: 4, category: ['Databases'] },
  { title: 'Amazon Redshift', competency: 5, category: ['Databases'] },

  // DevOps, Security & Observability
  { title: 'Git', competency: 5, category: ['DevOps, Security & Observability'] },
  { title: 'Jenkins', competency: 4, category: ['DevOps, Security & Observability'] },
  { title: 'IAM Governance', competency: 5, category: ['DevOps, Security & Observability'] },
  { title: 'Secrets Manager', competency: 5, category: ['DevOps, Security & Observability'] },
  { title: 'Splunk', competency: 4, category: ['DevOps, Security & Observability'] },
  { title: 'CI/CD', competency: 4, category: ['DevOps, Security & Observability'] },
];

// Single consistent blue for all category headings
const ACCENT_BLUE = '#60A5FA';

function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  );

  return uniqueCategories.map((category) => ({
    name: category,
    color: ACCENT_BLUE,
    textColor: 'dark' as const,
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };

/**
 * Category colors with pre-computed text contrast.
 * Uses CSS custom properties defined in tailwind.css for runtime styling,
 * with textColor pre-computed from the hex values for accessibility.
 *
 * Hex values from tailwind.css @theme block:
 * --color-skill-1: #6968b3, --color-skill-2: #37b1f5, --color-skill-3: #40494e
 * --color-skill-4: #515dd4, --color-skill-5: #e47272, --color-skill-6: #cc7b94
 */
