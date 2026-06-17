/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Medtronic',
    position: 'Senior Cloud Data Engineer',
    url: 'https://www.medtronic.com',
    startDate: '2022-05-01',
    summary: `Led cloud data engineering initiatives at Medtronic, building and optimizing large-scale data pipelines on AWS for healthcare analytics and AI-driven insights while maintaining strict compliance with healthcare data governance and security standards.`,
    highlights: [
      'Built and optimized Python and Apache Spark (AWS Glue) pipelines on AWS for large-scale data processing, analytics, and ML workflows handling petabytes of healthcare data.',
      'Integrated Amazon Bedrock into data and AI workflows, enabling secure LLM-based classification, enrichment, and summarization with IAM-based access control and compliance guardrails.',
      'Designed and executed SageMaker pipelines for ML inference and data enrichment, integrating model outputs back into analytical data stores for real-time decision support.',
      'Implemented secure IAM roles and least-privilege policies for Glue, Lambda, Redshift, and Bedrock, ensuring compliance with enterprise security and healthcare data governance standards (HIPAA).',
      'Collaborated with analytics, ML, and platform teams to deliver end-to-end data solutions, from ingestion through AI-driven insights, reporting, and operational dashboards.',
      'Built serverless automation and monitoring solutions using AWS Lambda, EventBridge, and CloudWatch to track pipeline health, data freshness, and operational SLAs.',
      'Implemented secure credential management using IAM roles and AWS Secrets Manager, eliminating hard-coded secrets and improving security posture across serverless applications.',
      'Created and managed comprehensive IAM roles and least-privilege policies for Lambda, Glue, Redshift, and Bedrock, ensuring secure access to PHI-sensitive healthcare data.',
    ],
  },
  {
    name: 'Fannie Mae',
    position: 'AWS Engineer',
    url: 'https://www.fanniemae.com',
    startDate: '2019-05-01',
    endDate: '2022-05-01',
    summary: `Developed and managed AWS cloud infrastructure automation and governance solutions at Fannie Mae, enabling seamless provisioning and management of cloud services across the organization while maintaining security and compliance standards.`,
    highlights: [
      'Developed and distributed automated infrastructure-as-code processes for building AWS cloud infrastructure across the organization, reducing deployment time by 60%.',
      'Designed and managed enterprise IAM service enabling application teams to create, manage, and audit AWS IAM roles and policies without manual intervention.',
      'Built AWS Service Catalog products for automated provisioning of EC2, RDS, Elastic Beanstalk, and other AWS services, eliminating the need for custom CloudFormation templates.',
      'Written Python scripts and Lambda functions for day-to-day monitoring, alerting, and automation activities across AWS infrastructure using Boto3 and AWS CLI.',
      'Configured AWS CodeCommit, CodePipeline, and CloudFormation for CI/CD deployment of Lambdas, CloudWatch alarms, SNS, and SQS resources at scale.',
      'Implemented comprehensive security controls and access management strategies for AWS resources across multiple accounts and business units.',
      'Automated compliance reporting and audit trails for IAM role usage and permission changes across the organization.',
      'Mentored junior engineers on AWS best practices, infrastructure automation, and cloud security principles.',
    ],
  },
  {
    name: 'Vanguard Group',
    position: 'Hadoop Developer',
    url: 'https://www.vanguard.com',
    startDate: '2017-10-01',
    endDate: '2019-05-01',
    summary: `Engineered and deployed large-scale data lake infrastructure on AWS for Vanguard Group, implementing end-to-end data ingestion pipelines and processing millions of records daily using modern big data technologies and cloud services.`,
    highlights: [
      'Built and deployed Data Lake in AWS cloud, designing end-to-end data ingestion pipeline to transfer on-premises data to cloud under Agile/Scrum methodology.',
      'Leveraged AWS services including EMR, Lambda, SQS, Kinesis Streams, Secrets Manager, CloudWatch, CloudFormation, EC2, and S3 for scalable data processing.',
      'Migrated millions of records using Attunity to Kinesis Streams, processing through Python Lambda functions with robust error handling and cross-account role assumptions.',
      'Implemented SQS as on-failure destination for Kinesis Lambda functions, ensuring reliable error handling and retry mechanisms across distributed data pipelines.',
      'Optimized handling of large data sets using partitioning, Apache Spark in-memory capabilities, efficient joins, and transformations during ingestion and processing.',
      'Developed shell scripts and Python automation workflows for data ingestion orchestration, generating JSON Oozie workflows dynamically.',
      'Used Troposphere in Python to auto-generate CloudFormation templates in JSON format, enabling Infrastructure-as-Code deployment of big data environments.',
      'Worked with multiple file formats (TEXTFILE, SEQUENCE, AVRO, ORC, PARQUET) for Hive querying, optimizing storage and query performance.',
    ],
  },
  {
    name: 'Veritis Group Inc.',
    position: 'Java/Hadoop Developer',
    url: 'https://www.veritis.com',
    startDate: '2016-05-01',
    endDate: '2017-05-01',
    summary: `Developed data engineering and big data solutions at Veritis Group, implementing Hadoop-based data pipelines, stream processing, and database transformations for enterprise data integration and analytics platforms.`,
    highlights: [
      'Ingested files to HDFS using Java Kafka publisher and consumer APIs for streaming applications, handling high-volume data ingestion with fault tolerance.',
      'Utilized HDFS Java API to put and retrieve files from HDFS, implementing efficient data movement and storage strategies.',
      'Implemented comprehensive Cucumber test cases to compare and validate data before and after transformations, ensuring data quality and integrity.',
      'Used Apache Pig for ETL transformations, event joins, filters, and pre-aggregations before storing data into HDFS for downstream analytics.',
      'Created and managed external and internal Hive tables with proper partitioning strategies and optimized data storage formats for query performance.',
      'Worked on Hibernate framework to implement ORM-based insert, update, and delete operations in MySQL Database with proper transaction management.',
      'Used Log4j for comprehensive logging across applications, writing audit logs to files for compliance, monitoring, and troubleshooting purposes.',
      'Written shell scripts for file automation processes, scheduling, and orchestration of recurring data pipeline jobs.',
    ],
  }
];

export default work;
