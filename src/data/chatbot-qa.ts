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
  { text: 'Who are you?', id: 'intro' },
  { text: 'What skills do you have?', id: 'skills' },
  { text: 'Tell me about your projects', id: 'projects' },
  { text: 'How can I contact you?', id: 'contact' },
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
      { title: 'See my Resume', path: '/resume' },
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
      { title: 'View full Resume with skills', path: '/resume' },
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
    answer: `I'm currently a Co-founder & CTO at Minimed, where I lead AI/ML infrastructure and product development. I've worked on:

• Building scalable ML pipelines on AWS
• Designing cloud-based data architectures
• Leading cross-functional engineering teams
• Architecting LLM-powered applications

I bring experience from various roles in data engineering, backend development, and ML infrastructure.`,
    suggestedPages: [
      { title: 'View full experience on Resume', path: '/resume' },
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
      { title: 'View on GitHub', path: 'https://github.com/abhinavnarne' },
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
    answer: `I'm currently focused on building at Minimed as Co-founder & CTO. However, I'm always interested in discussing exciting opportunities in AI/ML engineering and data infrastructure. Feel free to reach out!`,
    suggestedPages: [
      { title: 'Contact me', path: '/contact' },
      { title: 'Check Resume', path: '/resume' },
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
• Email: hello@tulasipriya.com
• LinkedIn: linkedin.com/in/abhinavnarne
• GitHub: github.com/abhinavnarne
• Twitter: twitter.com/dangelosaurus

Head to the Contact page for all my social links!`,
    suggestedPages: [{ title: 'Go to Contact page', path: '/contact' }],
  },
  {
    id: 'resume',
    question: 'Can I see your resume?',
    keywords: ['resume', 'cv', 'curriculum', 'vitae', 'download'],
    category: 'general',
    answer: `Sure! You can view my full resume on the Resume page of this site. It includes my work experience, education, skills, and certifications.`,
    suggestedPages: [{ title: 'View Resume', path: '/resume' }],
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
      { title: 'View Resume', path: '/resume' },
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
      { title: 'View Resume', path: '/resume' },
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
