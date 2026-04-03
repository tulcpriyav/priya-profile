(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === 'object' ? document.currentScript : undefined,
  '[project]/Documents/priya-profile/priya-new-site/src/data/chatbot-qa.ts [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    // Chatbot Q&A knowledge base
    __turbopack_context__.s([
      'chatbotQA',
      () => chatbotQA,
      'findBestMatch',
      () => findBestMatch,
      'suggestedQuestions',
      () => suggestedQuestions,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var suggestedQuestions = [
      {
        text: 'Who are you?',
        id: 'intro',
      },
      {
        text: 'What skills do you have?',
        id: 'skills',
      },
      {
        text: 'Tell me about your projects',
        id: 'projects',
      },
      {
        text: 'How can I contact you?',
        id: 'contact',
      },
    ];
    var chatbotQA = [
      {
        id: 'intro',
        question: 'Who are you?',
        keywords: ['who', 'you', 'yourself', 'name', 'introduce'],
        category: 'about',
        answer:
          "I'm Tulasi Priya Vattikuti, an AI/ML Engineer passionate about building scalable data infrastructure and cloud-based ML systems. I specialize in data engineering, machine learning, and AWS technologies.",
        suggestedPages: [
          {
            title: 'View full About page',
            path: '/about',
          },
          {
            title: 'See my Resume',
            path: '/resume',
          },
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
        answer:
          "I'm proficient in:\n• Languages: Python, Java, JavaScript/TypeScript, SQL\n• ML/AI: Data engineering, cloud ML infrastructure, LLM security\n• Cloud: AWS (EC2, S3, Lambda, SageMaker)\n• Databases: PostgreSQL, DynamoDB, Elasticsearch\n• Tools: Kubernetes, Docker, Terraform, Git\n• Frameworks: React, Node.js, Next.js\n\nI hold AWS Certified Solutions Architect and Scrum Master certifications.",
        suggestedPages: [
          {
            title: 'View full Resume with skills',
            path: '/resume',
          },
          {
            title: 'Explore projects',
            path: '/projects',
          },
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
        answer:
          "I'm currently a Co-founder & CTO at Minimed, where I lead AI/ML infrastructure and product development. I've worked on:\n\n• Building scalable ML pipelines on AWS\n• Designing cloud-based data architectures\n• Leading cross-functional engineering teams\n• Architecting LLM-powered applications\n\nI bring experience from various roles in data engineering, backend development, and ML infrastructure.",
        suggestedPages: [
          {
            title: 'View full experience on Resume',
            path: '/resume',
          },
          {
            title: 'See my projects',
            path: '/projects',
          },
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
        answer:
          "I'm a graduate of:\n• FIT (Florida Institute of Technology) - B.S. in Computer Science\n• K.L. University - additional studies\n\nI'm also AWS Certified Solutions Architect and hold Scrum Master certification.",
        suggestedPages: [
          {
            title: 'See full Resume',
            path: '/resume',
          },
        ],
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
        answer:
          "I've worked on various projects including:\n• Data pipeline architecture and optimization\n• ML infrastructure on AWS\n• LLM-powered applications and services\n• Cloud-native systems and microservices\n\nCheck out my Projects page for detailed case studies and links to my work.",
        suggestedPages: [
          {
            title: 'Browse all projects',
            path: '/projects',
          },
          {
            title: 'View on GitHub',
            path: 'https://github.com/abhinavnarne',
          },
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
        answer:
          "I'm currently focused on building at Minimed as Co-founder & CTO. However, I'm always interested in discussing exciting opportunities in AI/ML engineering and data infrastructure. Feel free to reach out!",
        suggestedPages: [
          {
            title: 'Contact me',
            path: '/contact',
          },
          {
            title: 'Check Resume',
            path: '/resume',
          },
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
        answer:
          'You can reach me at:\n• Email: hello@tulasipriya.com\n• LinkedIn: linkedin.com/in/abhinavnarne\n• GitHub: github.com/abhinavnarne\n• Twitter: twitter.com/dangelosaurus\n\nHead to the Contact page for all my social links!',
        suggestedPages: [
          {
            title: 'Go to Contact page',
            path: '/contact',
          },
        ],
      },
      {
        id: 'resume',
        question: 'Can I see your resume?',
        keywords: ['resume', 'cv', 'curriculum', 'vitae', 'download'],
        category: 'general',
        answer:
          'Sure! You can view my full resume on the Resume page of this site. It includes my work experience, education, skills, and certifications.',
        suggestedPages: [
          {
            title: 'View Resume',
            path: '/resume',
          },
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
        answer:
          'Data engineering is my core expertise. I specialize in:\n• Designing scalable data pipelines on AWS\n• Building reliable data infrastructure\n• Cloud cost optimization\n• Real-time and batch processing systems\n• Data warehouse architecture\n\nI focus on creating pipelines that are maintainable, efficient, and built for scale.',
        suggestedPages: [
          {
            title: 'View Resume',
            path: '/resume',
          },
          {
            title: 'See projects',
            path: '/projects',
          },
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
        answer:
          'I build cloud-based ML infrastructure with a focus on:\n• Building ML platforms on AWS (SageMaker, Lambda, etc.)\n• ML pipeline automation and orchestration\n• Model serving and inference optimization\n• LLM integration and safety\n• Cost-effective training and deployment\n\nMy goal is to make ML accessible, scalable, and production-ready.',
        suggestedPages: [
          {
            title: 'View Resume',
            path: '/resume',
          },
          {
            title: 'See projects',
            path: '/projects',
          },
        ],
      },
      {
        id: 'how-does-this-work',
        question: 'How does this chatbot work?',
        keywords: ['chatbot', 'how', 'work', 'this', 'bot', 'ai'],
        category: 'general',
        answer:
          "I'm a rule-based chatbot built with predefined Q&A pairs about Tulasi's profile. I match your questions to my knowledge base using keyword matching. While I'm not powered by a large language model, I can answer common questions about background, skills, experience, and contact information quickly and reliably!",
      },
    ];
    function findBestMatch(userQuestion) {
      var lowerQuestion = userQuestion.toLowerCase();
      var bestMatch = null;
      var bestScore = 0;
      var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
      try {
        for (
          var _iterator = chatbotQA[Symbol.iterator](), _step;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = true
        ) {
          var qa = _step.value;
          var score = 0;
          // Exact match (highest priority)
          if (lowerQuestion.includes(qa.question.toLowerCase())) {
            score = 100;
          } else {
            var _iteratorNormalCompletion1 = true,
              _didIteratorError1 = false,
              _iteratorError1 = undefined;
            try {
              // Keyword matching
              for (
                var _iterator1 = qa.keywords[Symbol.iterator](), _step1;
                !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next())
                  .done);
                _iteratorNormalCompletion1 = true
              ) {
                var keyword = _step1.value;
                if (lowerQuestion.includes(keyword)) {
                  score += 10;
                }
              }
            } catch (err) {
              _didIteratorError1 = true;
              _iteratorError1 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                  _iterator1.return();
                }
              } finally {
                if (_didIteratorError1) {
                  throw _iteratorError1;
                }
              }
            }
          }
          if (score > bestScore) {
            bestScore = score;
            bestMatch = qa;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      // Return match if score is above threshold
      return bestScore >= 10 ? bestMatch : null;
    }
    if (
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        '_'
      ])(globalThis.$RefreshHelpers$) === 'object' &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$,
      );
    }
  },
]);

//# sourceMappingURL=Documents_priya-profile_priya-new-site_src_data_chatbot-qa_ts_c98fb827._.js.map
