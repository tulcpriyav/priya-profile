// Chatbot Q&A knowledge base
export interface QAPair {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
  category?:
    | 'about'
    | 'skills'
    | 'experience'
    | 'projects'
    | 'contact'
    | 'general';
  suggestedPages?: Array<{
    title: string;
    path: string;
  }>;
}

export const suggestedQuestions = [
  { text: 'About Tulasi', id: 'intro' },
  { text: 'Experience & skills', id: 'skills' },
  { text: 'AI & cloud projects', id: 'projects' },
  { text: 'Research & publications', id: 'research' },
];

export const chatbotQA: QAPair[] = [
  {
    id: 'intro',
    question: 'Who are you?',
    keywords: ['who', 'you', 'yourself', 'name', 'introduce'],
    category: 'about',
    answer: `I'm Tulasi Priya Vattikuti, an AI/ML Engineer passionate about building scalable data infrastructure and cloud-based ML systems. I specialize in data engineering, machine learning, and AWS technologies.`,
    suggestedPages: [
      { title: 'View full About page', path: '/about' },
      { title: 'See my Experience', path: '/resume' },
    ],
  },
  {
    id: 'skills',
    question: 'What are your skills?',
    keywords: [
      'skills',
      'expertise',
      'technologies',
      'tech',
      'stack',
      'languages',
      'tools',
    ],
    category: 'skills',
    answer: `I'm proficient in:
• Languages: Python, Java, JavaScript/TypeScript, SQL
• ML/AI: Data engineering, cloud ML infrastructure, LLM security
• Cloud: AWS (EC2, S3, Lambda, SageMaker)
• Databases: PostgreSQL, DynamoDB, Elasticsearch
• Tools: Kubernetes, Docker, Terraform, Git
• Frameworks: React, Node.js, Next.js

I hold AWS Certified Solutions Architect and Scrum Master certifications.`,
    suggestedPages: [
      { title: 'View full Experience with skills', path: '/resume' },
      { title: 'Explore projects', path: '/projects' },
    ],
  },
  {
    id: 'experience',
    question: 'Tell me about your experience',
    keywords: [
      'experience',
      'work',
      'job',
      'career',
      'worked',
      'position',
      'company',
    ],
    category: 'experience',
    answer: `I'm currently a Senior AI/ML Engineer at MiniMed, where I lead AI/ML infrastructure and product development. I've worked on:

• Building scalable ML pipelines on AWS
• Designing cloud-based data architectures
• Integrating Amazon Bedrock and generative AI into enterprise systems
• Architecting LLM-powered applications for healthcare technology

I bring experience from various roles in data engineering, cloud architecture, and ML infrastructure.`,
    suggestedPages: [
      { title: 'View full Experience', path: '/resume' },
      { title: 'See my projects', path: '/projects' },
    ],
  },
  {
    id: 'education',
    question: 'Where did you study?',
    keywords: [
      'education',
      'university',
      'school',
      'degree',
      'studied',
      'college',
    ],
    category: 'about',
    answer: `I'm a graduate of:
• FIT (Florida Institute of Technology) - B.S. in Computer Science
• K.L. University - additional studies

I'm also AWS Certified Solutions Architect and hold Scrum Master certification.`,
    suggestedPages: [{ title: 'See full Resume', path: '/resume' }],
  },
  {
    id: 'projects',
    question: 'What projects have you built?',
    keywords: [
      'projects',
      'build',
      'built',
      'created',
      'developed',
      'portfolio',
    ],
    category: 'projects',
    answer: `I've worked on various projects including:
• Data pipeline architecture and optimization
• ML infrastructure on AWS
• LLM-powered applications and services
• Cloud-native systems and microservices

Check out my Projects page for detailed case studies and links to my work.`,
    suggestedPages: [
      { title: 'Browse all projects', path: '/projects' },
      { title: 'View on GitHub', path: 'https://github.com/tulcpriyav' },
    ],
  },
  {
    id: 'hiring',
    question: 'Are you looking for work?',
    keywords: [
      'hiring',
      'job',
      'work',
      'opportunity',
      'available',
      'looking',
      'hire',
      'employ',
    ],
    category: 'contact',
    answer: `I'm currently focused on my work as Senior AI/ML Engineer at MiniMed. However, I'm always interested in discussing exciting opportunities in enterprise AI, cloud engineering, and healthcare technology. Feel free to reach out!`,
    suggestedPages: [
      { title: 'Contact me', path: '/contact' },
      { title: 'Check Experience', path: '/resume' },
    ],
  },
  {
    id: 'contact',
    question: 'How can I contact you?',
    keywords: [
      'contact',
      'reach',
      'email',
      'message',
      'connect',
      'linkedin',
      'github',
    ],
    category: 'contact',
    answer: `You can reach me at:
  • Email: tulcpriya@gmail.com
• LinkedIn: linkedin.com/in/tulasipriya
• GitHub: github.com/tulcpriyav
• Instagram: instagram.com/priyeah_v

Head to the Contact page for all my social links!`,
    suggestedPages: [{ title: 'Go to Contact page', path: '/contact' }],
  },
  {
    id: 'resume',
    question: 'Can I see your resume?',
    keywords: ['resume', 'cv', 'curriculum', 'vitae', 'download'],
    category: 'general',
    answer: `Sure! You can view my full resume on the Resume page of this site. It includes my work experience, education, skills, and certifications.`,
    suggestedPages: [{ title: 'View Experience', path: '/resume' }],
  },
  {
    id: 'research',
    question: 'Tell me about research and publications',
    keywords: ['research', 'publications', 'papers', 'writing', 'articles', 'book', 'author'],
    category: 'about',
    answer: `Tulasi is a published researcher and technical author. She has authored research papers and technical writing on AI, machine learning, and cloud engineering. She is currently writing a book on enterprise AI on AWS. Her work is available on Google Scholar and ORCID.`,
    suggestedPages: [
      { title: 'View Research', path: '/writing' },
      { title: 'Upcoming Book', path: '/book' },
    ],
  },
  {
    id: 'data-engineering',
    question: 'What do you know about data engineering?',
    keywords: [
      'data',
      'engineering',
      'pipeline',
      'etl',
      'infrastructure',
      'platform',
    ],
    category: 'skills',
    answer: `Data engineering is my core expertise. I specialize in:
• Designing scalable data pipelines on AWS
• Building reliable data infrastructure
• Cloud cost optimization
• Real-time and batch processing systems
• Data warehouse architecture

I focus on creating pipelines that are maintainable, efficient, and built for scale.`,
    suggestedPages: [
      { title: 'View Experience', path: '/resume' },
      { title: 'See projects', path: '/projects' },
    ],
  },
  {
    id: 'ml-infrastructure',
    question: 'Tell me about ML infrastructure',
    keywords: [
      'ml',
      'machine learning',
      'infrastructure',
      'models',
      'training',
      'deployment',
    ],
    category: 'skills',
    answer: `I build cloud-based ML infrastructure with a focus on:
• Building ML platforms on AWS (SageMaker, Lambda, etc.)
• ML pipeline automation and orchestration
• Model serving and inference optimization
• LLM integration and safety
• Cost-effective training and deployment

My goal is to make ML accessible, scalable, and production-ready.`,
    suggestedPages: [
      { title: 'View Experience', path: '/resume' },
      { title: 'See projects', path: '/projects' },
    ],
  },
  {
    id: 'how-does-this-work',
    question: 'How does this chatbot work?',
    keywords: ['chatbot', 'how', 'work', 'this', 'bot', 'ai'],
    category: 'general',
    answer: `I'm a rule-based chatbot built with predefined Q&A pairs about Tulasi's profile. I match your questions to my knowledge base using keyword matching. While I'm not powered by a large language model, I can answer common questions about background, skills, experience, and contact information quickly and reliably!`,
  },
];

// Simple keyword matching algorithm
export function findBestMatch(userQuestion: string): QAPair | null {
  const lowerQuestion = userQuestion.toLowerCase();
  let bestMatch: QAPair | null = null;
  let bestScore = 0;

  for (const qa of chatbotQA) {
    let score = 0;

    // Exact match (highest priority)
    if (lowerQuestion.includes(qa.question.toLowerCase())) {
      score = 100;
    } else {
      // Keyword matching
      for (const keyword of qa.keywords) {
        if (lowerQuestion.includes(keyword)) {
          score += 10;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = qa;
    }
  }

  // Return match if score is above threshold
  return bestScore >= 10 ? bestMatch : null;
}
