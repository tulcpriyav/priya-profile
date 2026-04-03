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
  '[project]/Documents/priya-profile/priya-new-site/src/hooks/useChat.ts [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['useChat', () => useChat]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      );
    var _s = __turbopack_context__.k.signature();
    ('use client');
    function useChat() {
      _s();
      var suggestedQuestions = __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/src/data/chatbot-qa.ts [app-client] (ecmascript)',
      ).suggestedQuestions;
      var _useState = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])([
            {
              id: '1',
              type: 'bot',
              content:
                "Hi! 👋 I'm here to help you learn more about Tulasi. Ask me about:",
              timestamp: new Date(),
              suggestedQuestions: suggestedQuestions,
            },
          ]),
          2,
        ),
        messages = _useState[0],
        setMessages = _useState[1];
      var _useState1 = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(''),
          2,
        ),
        input = _useState1[0],
        setInput = _useState1[1];
      var _useState2 = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false),
          2,
        ),
        isLoading = _useState2[0],
        setIsLoading = _useState2[1];
      var messagesEndRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(null);
      var scrollToBottom = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(
        {
          'useChat.useCallback[scrollToBottom]': function () {
            var _messagesEndRef_current;
            (_messagesEndRef_current = messagesEndRef.current) === null ||
            _messagesEndRef_current === void 0
              ? void 0
              : _messagesEndRef_current.scrollIntoView({
                  behavior: 'smooth',
                });
          },
        }['useChat.useCallback[scrollToBottom]'],
        [],
      );
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'useChat.useEffect': function () {
            scrollToBottom();
          },
        }['useChat.useEffect'],
        [messages, scrollToBottom],
      );
      var addMessage = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(
        {
          'useChat.useCallback[addMessage]': function (
            type,
            content,
            suggestedPages,
            suggestedQuestions,
          ) {
            var newMessage = {
              id: Date.now().toString(),
              type: type,
              content: content,
              timestamp: new Date(),
              suggestedPages: suggestedPages,
              suggestedQuestions: suggestedQuestions,
            };
            setMessages(
              {
                'useChat.useCallback[addMessage]': function (prev) {
                  return (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    '_'
                  ])(prev).concat([newMessage]);
                },
              }['useChat.useCallback[addMessage]'],
            );
            return newMessage;
          },
        }['useChat.useCallback[addMessage]'],
        [],
      );
      var sendMessage = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(
        {
          'useChat.useCallback[sendMessage]': function (userMessage) {
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              '_'
            ])(
              {
                'useChat.useCallback[sendMessage]': function () {
                  var findBestMatch, match;
                  return (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__[
                    '_'
                  ])(
                    this,
                    {
                      'useChat.useCallback[sendMessage]': function (_state) {
                        switch (_state.label) {
                          case 0:
                            if (!userMessage.trim()) return [2];
                            // Add user message
                            addMessage('user', userMessage);
                            setInput('');
                            setIsLoading(true);
                            // Simulate bot response delay
                            return [
                              4,
                              new Promise(
                                {
                                  'useChat.useCallback[sendMessage]': function (
                                    resolve,
                                  ) {
                                    return setTimeout(resolve, 300);
                                  },
                                }['useChat.useCallback[sendMessage]'],
                              ),
                            ];
                          case 1:
                            _state.sent();
                            // Get bot response
                            try {
                              findBestMatch = __turbopack_context__.r(
                                '[project]/Documents/priya-profile/priya-new-site/src/data/chatbot-qa.ts [app-client] (ecmascript)',
                              ).findBestMatch;
                              match = findBestMatch(userMessage);
                              if (match) {
                                addMessage(
                                  'bot',
                                  match.answer,
                                  match.suggestedPages,
                                );
                              } else {
                                addMessage(
                                  'bot',
                                  "I'm not sure how to answer that. You can ask me about:\n• My skills and experience\n• Projects and portfolio\n• How to contact me\n• My background and education\n\nOr check out the pages above for more detailed information!",
                                );
                              }
                            } catch (error) {
                              addMessage(
                                'bot',
                                'Sorry, something went wrong. Please try again.',
                              );
                            }
                            setIsLoading(false);
                            return [2];
                        }
                      },
                    }['useChat.useCallback[sendMessage]'],
                  );
                },
              }['useChat.useCallback[sendMessage]'],
            )();
          },
        }['useChat.useCallback[sendMessage]'],
        [addMessage],
      );
      return {
        messages: messages,
        input: input,
        setInput: setInput,
        isLoading: isLoading,
        sendMessage: sendMessage,
        messagesEndRef: messagesEndRef,
      };
    }
    _s(useChat, 'gGLpT3jSEkHhWSGNiv5qO0lmwpc=');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.module.css [app-client] (css module)',
  (__turbopack_context__) => {
    __turbopack_context__.v({
      backdrop: 'Chatbot-module__l3JKSG__backdrop',
      bot: 'Chatbot-module__l3JKSG__bot',
      chatIcon: 'Chatbot-module__l3JKSG__chatIcon',
      closeButton: 'Chatbot-module__l3JKSG__closeButton',
      closeIcon: 'Chatbot-module__l3JKSG__closeIcon',
      fadeIn: 'Chatbot-module__l3JKSG__fadeIn',
      floatingButton: 'Chatbot-module__l3JKSG__floatingButton',
      header: 'Chatbot-module__l3JKSG__header',
      input: 'Chatbot-module__l3JKSG__input',
      inputForm: 'Chatbot-module__l3JKSG__inputForm',
      message: 'Chatbot-module__l3JKSG__message',
      messageContent: 'Chatbot-module__l3JKSG__messageContent',
      messagesContainer: 'Chatbot-module__l3JKSG__messagesContainer',
      modal: 'Chatbot-module__l3JKSG__modal',
      pageLink: 'Chatbot-module__l3JKSG__pageLink',
      pageSuggestionLabel: 'Chatbot-module__l3JKSG__pageSuggestionLabel',
      sendButton: 'Chatbot-module__l3JKSG__sendButton',
      slideUp: 'Chatbot-module__l3JKSG__slideUp',
      suggestedButton: 'Chatbot-module__l3JKSG__suggestedButton',
      suggestedPagesContainer:
        'Chatbot-module__l3JKSG__suggestedPagesContainer',
      suggestedQuestionsContainer:
        'Chatbot-module__l3JKSG__suggestedQuestionsContainer',
      title: 'Chatbot-module__l3JKSG__title',
      typing: 'Chatbot-module__l3JKSG__typing',
      typingIndicator: 'Chatbot-module__l3JKSG__typingIndicator',
      user: 'Chatbot-module__l3JKSG__user',
    });
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['Chatbot', () => Chatbot]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$hooks$2f$useChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/hooks/useChat.ts [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.module.css [app-client] (css module)',
      );
    var _s = __turbopack_context__.k.signature();
    ('use client');
    function Chatbot() {
      var _this = this;
      _s();
      var _useState = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false),
          2,
        ),
        isOpen = _useState[0],
        setIsOpen = _useState[1];
      var _useChat = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$hooks$2f$useChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'useChat'
        ])(),
        messages = _useChat.messages,
        input = _useChat.input,
        setInput = _useChat.setInput,
        isLoading = _useChat.isLoading,
        sendMessage = _useChat.sendMessage,
        messagesEndRef = _useChat.messagesEndRef;
      var inputRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(null);
      // Focus input when modal opens
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'Chatbot.useEffect': function () {
            if (isOpen && inputRef.current) {
              setTimeout(
                {
                  'Chatbot.useEffect': function () {
                    var _inputRef_current;
                    return (_inputRef_current = inputRef.current) === null ||
                      _inputRef_current === void 0
                      ? void 0
                      : _inputRef_current.focus();
                  },
                }['Chatbot.useEffect'],
                0,
              );
            }
          },
        }['Chatbot.useEffect'],
        [isOpen],
      );
      var handleSubmit = function (e) {
        e.preventDefault();
        sendMessage(input);
      };
      var handleSuggestedQuestion = function (questionId) {
        var question =
          {
            who: 'Who are you?',
            skills: 'What are your skills?',
            projects: 'Tell me about your projects',
            contact: 'How can I contact you?',
          }[questionId] || '';
        if (question) {
          sendMessage(question);
        }
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'Fragment'
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'button',
              {
                className:
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                    'default'
                  ].floatingButton,
                onClick: function () {
                  return setIsOpen(!isOpen);
                },
                'aria-label': 'Open chatbot',
                title: "Ask me about Tulasi's profile!",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'svg',
                    {
                      className:
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                          'default'
                        ].chatIcon,
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'path',
                        {
                          d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                          lineNumber: 55,
                          columnNumber: 11,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                      lineNumber: 48,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  isOpen &&
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'span',
                      {
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].closeIcon,
                        children: '×',
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                        lineNumber: 57,
                        columnNumber: 20,
                      },
                      this,
                    ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                lineNumber: 42,
                columnNumber: 7,
              },
              this,
            ),
            isOpen &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className:
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ].backdrop,
                  onClick: function () {
                    return setIsOpen(false);
                  },
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                  lineNumber: 62,
                  columnNumber: 9,
                },
                this,
              ),
            isOpen &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className:
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                      'default'
                    ].modal,
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].header,
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'h2',
                            {
                              className:
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                  'default'
                                ].title,
                              children: 'Chat with me!',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                              lineNumber: 70,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'button',
                            {
                              className:
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                  'default'
                                ].closeButton,
                              onClick: function () {
                                return setIsOpen(false);
                              },
                              'aria-label': 'Close chatbot',
                              children: '×',
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                              lineNumber: 71,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                        lineNumber: 69,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].messagesContainer,
                        children: [
                          messages.map(function (message) {
                            return /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'div',
                                    {
                                      className: ''
                                        .concat(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                            'default'
                                          ].message,
                                          ' ',
                                        )
                                        .concat(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                            'default'
                                          ][message.type],
                                        ),
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        'div',
                                        {
                                          className:
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                              'default'
                                            ].messageContent,
                                          children: message.content,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                          lineNumber: 85,
                                          columnNumber: 19,
                                        },
                                        _this,
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                      lineNumber: 84,
                                      columnNumber: 17,
                                    },
                                    _this,
                                  ),
                                  message.suggestedQuestions &&
                                    message.suggestedQuestions.length > 0 &&
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'div',
                                      {
                                        className:
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                            'default'
                                          ].suggestedQuestionsContainer,
                                        children:
                                          message.suggestedQuestions.map(
                                            function (q) {
                                              return /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                'jsxDEV'
                                              ])(
                                                'button',
                                                {
                                                  className:
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                                      'default'
                                                    ].suggestedButton,
                                                  onClick: function () {
                                                    return handleSuggestedQuestion(
                                                      q.id,
                                                    );
                                                  },
                                                  children: q.text,
                                                },
                                                q.id,
                                                false,
                                                {
                                                  fileName:
                                                    '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                                  lineNumber: 93,
                                                  columnNumber: 25,
                                                },
                                                _this,
                                              );
                                            },
                                          ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                        lineNumber: 91,
                                        columnNumber: 21,
                                      },
                                      _this,
                                    ),
                                  message.suggestedPages &&
                                    message.suggestedPages.length > 0 &&
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'div',
                                      {
                                        className:
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                            'default'
                                          ].suggestedPagesContainer,
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'div',
                                            {
                                              className:
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                                  'default'
                                                ].pageSuggestionLabel,
                                              children: 'Explore:',
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                              lineNumber: 108,
                                              columnNumber: 23,
                                            },
                                            _this,
                                          ),
                                          message.suggestedPages.map(
                                            function (page, idx) {
                                              return page.path.startsWith(
                                                'http',
                                              )
                                                ? /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    'jsxDEV'
                                                  ])(
                                                    'a',
                                                    {
                                                      href: page.path,
                                                      target: '_blank',
                                                      rel: 'noopener noreferrer',
                                                      className:
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                                          'default'
                                                        ].pageLink,
                                                      children: [
                                                        page.title,
                                                        ' ↗',
                                                      ],
                                                    },
                                                    idx,
                                                    true,
                                                    {
                                                      fileName:
                                                        '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                                      lineNumber: 111,
                                                      columnNumber: 27,
                                                    },
                                                    _this,
                                                  )
                                                : /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                    'jsxDEV'
                                                  ])(
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                                      'default'
                                                    ],
                                                    {
                                                      href: page.path,
                                                      className:
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                                          'default'
                                                        ].pageLink,
                                                      onClick: function () {
                                                        return setIsOpen(false);
                                                      },
                                                      children: [
                                                        page.title,
                                                        ' →',
                                                      ],
                                                    },
                                                    idx,
                                                    true,
                                                    {
                                                      fileName:
                                                        '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                                      lineNumber: 121,
                                                      columnNumber: 27,
                                                    },
                                                    _this,
                                                  );
                                            },
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                        lineNumber: 107,
                                        columnNumber: 21,
                                      },
                                      _this,
                                    ),
                                ],
                              },
                              message.id,
                              true,
                              {
                                fileName:
                                  '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                lineNumber: 83,
                                columnNumber: 15,
                              },
                              _this,
                            );
                          }),
                          isLoading &&
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: ''
                                  .concat(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                      'default'
                                    ].message,
                                    ' ',
                                  )
                                  .concat(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                      'default'
                                    ].bot,
                                  ),
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'div',
                                  {
                                    className:
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                        'default'
                                      ].messageContent,
                                    children: /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                      'jsxDEV'
                                    ])(
                                      'span',
                                      {
                                        className:
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                            'default'
                                          ].typingIndicator,
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'span',
                                            {},
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                              lineNumber: 140,
                                              columnNumber: 21,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'span',
                                            {},
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                              lineNumber: 141,
                                              columnNumber: 21,
                                            },
                                            this,
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                            'jsxDEV'
                                          ])(
                                            'span',
                                            {},
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                              lineNumber: 142,
                                              columnNumber: 21,
                                            },
                                            this,
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                        lineNumber: 139,
                                        columnNumber: 19,
                                      },
                                      this,
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                    lineNumber: 138,
                                    columnNumber: 17,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                lineNumber: 137,
                                columnNumber: 15,
                              },
                              this,
                            ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'div',
                            {
                              ref: messagesEndRef,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                              lineNumber: 147,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                        lineNumber: 81,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'form',
                      {
                        className:
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                            'default'
                          ].inputForm,
                        onSubmit: handleSubmit,
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'input',
                            {
                              ref: inputRef,
                              type: 'text',
                              className:
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                  'default'
                                ].input,
                              placeholder: 'Ask me something...',
                              value: input,
                              onChange: function (e) {
                                return setInput(e.target.value);
                              },
                              disabled: isLoading,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                              lineNumber: 152,
                              columnNumber: 13,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'button',
                            {
                              type: 'submit',
                              className:
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
                                  'default'
                                ].sendButton,
                              disabled: isLoading || !input.trim(),
                              'aria-label': 'Send message',
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                'svg',
                                {
                                  viewBox: '0 0 24 24',
                                  fill: 'currentColor',
                                  children: /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'path',
                                    {
                                      d: 'M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16200178 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4430206 C0.994623095,2.0844446 0.837654326,3.17396987 1.15159189,3.95946907 L3.03521743,10.4066621 C3.03521743,10.5637595 3.19218622,10.7208569 3.50612381,10.7208569 L16.6915026,11.5063438 C16.6915026,11.5063438 17.1624089,11.5063438 17.1624089,12.0493645 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z',
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                      lineNumber: 168,
                                      columnNumber: 17,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                                  lineNumber: 167,
                                  columnNumber: 15,
                                },
                                this,
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                              lineNumber: 161,
                              columnNumber: 13,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                        lineNumber: 151,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName:
                    '[project]/Documents/priya-profile/priya-new-site/src/components/Chatbot/Chatbot.tsx',
                  lineNumber: 67,
                  columnNumber: 9,
                },
                this,
              ),
          ],
        },
        void 0,
        true,
      );
    }
    _s(Chatbot, 'CyF7YwNT5SFcewCkmflbzhOlVzs=', false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$hooks$2f$useChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'useChat'
        ],
      ];
    });
    _c = Chatbot;
    var _c;
    __turbopack_context__.k.register(_c, 'Chatbot');
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
  '[project]/Documents/priya-profile/priya-new-site/src/data/routes.ts [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var routes = [
      {
        index: true,
        label: 'Tulasi Priya Vattikuti',
        path: '/',
      },
      {
        label: 'About',
        path: '/about',
      },
      {
        label: 'Resume',
        path: '/resume',
      },
      {
        label: 'Writing',
        path: '/writing',
      },
      {
        label: 'Stats',
        path: '/stats',
      },
      {
        label: 'Contact',
        path: '/contact',
      },
      {
        label: 'Archive',
        path: '/projects',
      },
    ];
    const __TURBOPACK__default__export__ = routes;
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/SlideMenu.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => SlideMenu]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      );
    var _s = __turbopack_context__.k.signature();
    ('use client');
    // Selector for focusable elements within the menu
    var FOCUSABLE_SELECTOR =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    function SlideMenu(param) {
      var id = param.id,
        isOpen = param.isOpen,
        onClose = param.onClose,
        children = param.children,
        _param_position = param.position,
        position = _param_position === void 0 ? 'right' : _param_position;
      _s();
      var menuRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(null);
      var previousActiveElement = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(null);
      // Save scroll position and lock body scroll (iOS-safe)
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'SlideMenu.useEffect': function () {
            if (!isOpen) return;
            var scrollY = window.scrollY;
            var body = document.body;
            body.style.position = 'fixed';
            body.style.top = '-'.concat(scrollY, 'px');
            body.style.left = '0';
            body.style.right = '0';
            return {
              'SlideMenu.useEffect': function () {
                body.style.position = '';
                body.style.top = '';
                body.style.left = '';
                body.style.right = '';
                window.scrollTo(0, scrollY);
              },
            }['SlideMenu.useEffect'];
          },
        }['SlideMenu.useEffect'],
        [isOpen],
      );
      // Handle escape key
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'SlideMenu.useEffect': function () {
            if (!isOpen) return;
            var handleKeyDown = {
              'SlideMenu.useEffect.handleKeyDown': function (e) {
                if (e.key === 'Escape') {
                  e.preventDefault();
                  onClose();
                }
              },
            }['SlideMenu.useEffect.handleKeyDown'];
            document.addEventListener('keydown', handleKeyDown);
            return {
              'SlideMenu.useEffect': function () {
                return document.removeEventListener('keydown', handleKeyDown);
              },
            }['SlideMenu.useEffect'];
          },
        }['SlideMenu.useEffect'],
        [isOpen, onClose],
      );
      // Focus management: trap focus and restore on close
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'SlideMenu.useEffect': function () {
            if (isOpen) {
              var _menuRef_current;
              // Save currently focused element
              previousActiveElement.current = document.activeElement;
              // Focus first focusable element in menu
              var focusableElements =
                (_menuRef_current = menuRef.current) === null ||
                _menuRef_current === void 0
                  ? void 0
                  : _menuRef_current.querySelectorAll(FOCUSABLE_SELECTOR);
              if (
                focusableElements === null || focusableElements === void 0
                  ? void 0
                  : focusableElements.length
              ) {
                focusableElements[0].focus();
              }
            } else if (previousActiveElement.current) {
              // Restore focus when closing
              previousActiveElement.current.focus();
              previousActiveElement.current = null;
            }
          },
        }['SlideMenu.useEffect'],
        [isOpen],
      );
      // Focus trapping
      var handleKeyDown = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(
        {
          'SlideMenu.useCallback[handleKeyDown]': function (e) {
            var _menuRef_current;
            if (e.key !== 'Tab') return;
            var focusableElements =
              (_menuRef_current = menuRef.current) === null ||
              _menuRef_current === void 0
                ? void 0
                : _menuRef_current.querySelectorAll(FOCUSABLE_SELECTOR);
            if (
              !(focusableElements === null || focusableElements === void 0
                ? void 0
                : focusableElements.length)
            )
              return;
            var firstElement = focusableElements[0];
            var lastElement = focusableElements[focusableElements.length - 1];
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          },
        }['SlideMenu.useCallback[handleKeyDown]'],
        [],
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'Fragment'
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'slide-menu-overlay'.concat(
                  isOpen ? ' slide-menu-overlay--open' : '',
                ),
                onClick: onClose,
                'aria-hidden': 'true',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/SlideMenu.tsx',
                lineNumber: 111,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                ref: menuRef,
                id: id,
                role: 'dialog',
                'aria-modal': 'true',
                'aria-label': 'Navigation menu',
                className: 'slide-menu slide-menu--'
                  .concat(position)
                  .concat(isOpen ? ' slide-menu--open' : ''),
                'aria-hidden': !isOpen,
                inert: !isOpen,
                onKeyDown: handleKeyDown,
                children: children,
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/SlideMenu.tsx',
                lineNumber: 117,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
      );
    }
    _s(SlideMenu, 'ZSt+3GPgAcC65VvHmm9bgtaNgv8=');
    _c = SlideMenu;
    var _c;
    __turbopack_context__.k.register(_c, 'SlideMenu');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => Hamburger]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/data/routes.ts [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$SlideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/SlideMenu.tsx [app-client] (ecmascript)',
      );
    var _s = __turbopack_context__.k.signature();
    ('use client');
    var MENU_ID = 'mobile-nav-menu';
    function Hamburger() {
      var _this = this;
      _s();
      var _useState = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false),
          2,
        ),
        open = _useState[0],
        setOpen = _useState[1];
      var _useState1 = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(false),
          2,
        ),
        mounted = _useState1[0],
        setMounted = _useState1[1];
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'Hamburger.useEffect': function () {
            setMounted(true);
          },
        }['Hamburger.useEffect'],
        [],
      );
      var toggleMenu = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(
        {
          'Hamburger.useCallback[toggleMenu]': function () {
            return setOpen(
              {
                'Hamburger.useCallback[toggleMenu]': function (prev) {
                  return !prev;
                },
              }['Hamburger.useCallback[toggleMenu]'],
            );
          },
        }['Hamburger.useCallback[toggleMenu]'],
        [],
      );
      var closeMenu = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(
        {
          'Hamburger.useCallback[closeMenu]': function () {
            return setOpen(false);
          },
        }['Hamburger.useCallback[closeMenu]'],
        [],
      );
      var slideMenu = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$SlideMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'default'
        ],
        {
          id: MENU_ID,
          isOpen: open,
          onClose: closeMenu,
          position: 'right',
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'ul',
            {
              className: 'hamburger-ul',
              children:
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'default'
                ].map(function (l) {
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'li',
                    {
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          href: l.path,
                          onClick: closeMenu,
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'h3',
                            {
                              className: l.index ? 'index-li' : undefined,
                              children: l.label,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                              lineNumber: 29,
                              columnNumber: 15,
                            },
                            _this,
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                          lineNumber: 28,
                          columnNumber: 13,
                        },
                        _this,
                      ),
                    },
                    l.label,
                    false,
                    {
                      fileName:
                        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                      lineNumber: 27,
                      columnNumber: 11,
                    },
                    _this,
                  );
                }),
            },
            void 0,
            false,
            {
              fileName:
                '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
              lineNumber: 25,
              columnNumber: 7,
            },
            this,
          ),
        },
        void 0,
        false,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
          lineNumber: 24,
          columnNumber: 5,
        },
        this,
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'Fragment'
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'hamburger-container',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'nav',
                  {
                    className: 'main',
                    id: 'hamburger-nav',
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'ul',
                      {
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'li',
                          {
                            className: 'menu',
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'button',
                              {
                                type: 'button',
                                onClick: toggleMenu,
                                className: 'hamburger-button',
                                'aria-label': open
                                  ? 'Close navigation menu'
                                  : 'Open navigation menu',
                                'aria-expanded': open,
                                'aria-controls': MENU_ID,
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'span',
                                  {
                                    className: 'hamburger-icon'.concat(
                                      open ? ' hamburger-icon--open' : '',
                                    ),
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        'span',
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                                          lineNumber: 57,
                                          columnNumber: 19,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        'span',
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                                          lineNumber: 58,
                                          columnNumber: 19,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                        'jsxDEV'
                                      ])(
                                        'span',
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                                          lineNumber: 59,
                                          columnNumber: 19,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                                    lineNumber: 54,
                                    columnNumber: 17,
                                  },
                                  this,
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                                lineNumber: 43,
                                columnNumber: 15,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                            lineNumber: 42,
                            columnNumber: 13,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                        lineNumber: 41,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                    lineNumber: 40,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx',
                lineNumber: 39,
                columnNumber: 7,
              },
              this,
            ),
            mounted &&
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'createPortal'
              ])(slideMenu, document.body),
          ],
        },
        void 0,
        true,
      );
    }
    _s(Hamburger, 'hd1sEqaNfTzxELnVpwFE3WRtg7o=');
    _c = Hamburger;
    var _c;
    __turbopack_context__.k.register(_c, 'Hamburger');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'MoonIcon',
      () => MoonIcon,
      'SunIcon',
      () => SunIcon,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    function SunIcon(param) {
      var _param_size = param.size,
        size = _param_size === void 0 ? 20 : _param_size,
        className = param.className;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          className: className,
          'aria-hidden': 'true',
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'circle',
              {
                cx: '12',
                cy: '12',
                r: '5',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 21,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'line',
              {
                x1: '12',
                y1: '1',
                x2: '12',
                y2: '3',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 22,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'line',
              {
                x1: '12',
                y1: '21',
                x2: '12',
                y2: '23',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 23,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'line',
              {
                x1: '4.22',
                y1: '4.22',
                x2: '5.64',
                y2: '5.64',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 24,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'line',
              {
                x1: '18.36',
                y1: '18.36',
                x2: '19.78',
                y2: '19.78',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 25,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'line',
              {
                x1: '1',
                y1: '12',
                x2: '3',
                y2: '12',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 26,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'line',
              {
                x1: '21',
                y1: '12',
                x2: '23',
                y2: '12',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 27,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'line',
              {
                x1: '4.22',
                y1: '19.78',
                x2: '5.64',
                y2: '18.36',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 28,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'line',
              {
                x1: '18.36',
                y1: '5.64',
                x2: '19.78',
                y2: '4.22',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
                lineNumber: 29,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
          lineNumber: 8,
          columnNumber: 5,
        },
        this,
      );
    }
    _c = SunIcon;
    function MoonIcon(param) {
      var _param_size = param.size,
        size = _param_size === void 0 ? 20 : _param_size,
        className = param.className;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          className: className,
          'aria-hidden': 'true',
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'path',
            {
              d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
            },
            void 0,
            false,
            {
              fileName:
                '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
              lineNumber: 49,
              columnNumber: 7,
            },
            this,
          ),
        },
        void 0,
        false,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx',
          lineNumber: 36,
          columnNumber: 5,
        },
        this,
      );
    }
    _c1 = MoonIcon;
    var _c, _c1;
    __turbopack_context__.k.register(_c, 'SunIcon');
    __turbopack_context__.k.register(_c1, 'MoonIcon');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ThemeToggle]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx [app-client] (ecmascript)',
      );
    var _s = __turbopack_context__.k.signature();
    ('use client');
    function ThemeToggle() {
      _s();
      var _useState = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(null),
          2,
        ),
        isDark = _useState[0],
        setIsDark = _useState[1];
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'ThemeToggle.useEffect': function () {
            var stored = localStorage.getItem('theme');
            if (stored === 'light' || stored === 'dark') {
              setIsDark(stored === 'dark');
            } else {
              setIsDark(
                window.matchMedia('(prefers-color-scheme: dark)').matches,
              );
            }
          },
        }['ThemeToggle.useEffect'],
        [],
      );
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'ThemeToggle.useEffect': function () {
            if (isDark === null) return;
            document.documentElement.setAttribute(
              'data-theme',
              isDark ? 'dark' : 'light',
            );
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
          },
        }['ThemeToggle.useEffect'],
        [isDark],
      );
      var toggle = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(
        {
          'ThemeToggle.useCallback[toggle]': function () {
            setIsDark(
              {
                'ThemeToggle.useCallback[toggle]': function (prev) {
                  return !prev;
                },
              }['ThemeToggle.useCallback[toggle]'],
            );
          },
        }['ThemeToggle.useCallback[toggle]'],
        [],
      );
      if (isDark === null) {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'div',
          {
            className: 'theme-toggle-placeholder',
          },
          void 0,
          false,
          {
            fileName:
              '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx',
            lineNumber: 33,
            columnNumber: 12,
          },
          this,
        );
      }
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'button',
        {
          type: 'button',
          className: 'theme-toggle',
          onClick: toggle,
          'aria-label': isDark ? 'Switch to light mode' : 'Switch to dark mode',
          title: isDark ? 'Switch to light mode' : 'Switch to dark mode',
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'span',
            {
              className: 'theme-toggle-icon',
              children: isDark
                ? /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'SunIcon'
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx',
                      lineNumber: 45,
                      columnNumber: 19,
                    },
                    this,
                  )
                : /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Icons$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'MoonIcon'
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx',
                      lineNumber: 45,
                      columnNumber: 33,
                    },
                    this,
                  ),
            },
            void 0,
            false,
            {
              fileName:
                '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx',
              lineNumber: 44,
              columnNumber: 7,
            },
            this,
          ),
        },
        void 0,
        false,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx',
          lineNumber: 37,
          columnNumber: 5,
        },
        this,
      );
    }
    _s(ThemeToggle, 'YcJggFJnGNtiqA4wrfens1F4YNc=');
    _c = ThemeToggle;
    var _c;
    __turbopack_context__.k.register(_c, 'ThemeToggle');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => Navigation]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/navigation.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/data/routes.ts [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$Hamburger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx [app-client] (ecmascript)',
      );
    var _s = __turbopack_context__.k.signature();
    ('use client');
    function Navigation() {
      var _this = this;
      _s();
      var pathname = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'usePathname'
      ])();
      var isActive = function (path) {
        if (path === '/') return pathname === '/';
        return pathname === null || pathname === void 0
          ? void 0
          : pathname.startsWith(path);
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'header',
        {
          className: 'site-header',
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'default'
              ],
              {
                href: '/',
                className: 'site-logo',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'span',
                  {
                    className: 'logo-text',
                    children: 'TP',
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx',
                    lineNumber: 22,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx',
                lineNumber: 21,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'nav',
              {
                className: 'nav-links',
                children:
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'default'
                  ]
                    .filter(function (l) {
                      return !l.index;
                    })
                    .map(function (l) {
                      return /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          href: l.path,
                          className: 'nav-link '.concat(
                            isActive(l.path) ? 'active' : '',
                          ),
                          'aria-current': isActive(l.path) ? 'page' : undefined,
                          children: l.label,
                        },
                        l.label,
                        false,
                        {
                          fileName:
                            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx',
                          lineNumber: 29,
                          columnNumber: 13,
                        },
                        _this,
                      );
                    }),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx',
                lineNumber: 25,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'nav-actions',
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx',
                      lineNumber: 41,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$Hamburger$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName:
                        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx',
                      lineNumber: 42,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx',
                lineNumber: 40,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx',
          lineNumber: 20,
          columnNumber: 5,
        },
        this,
      );
    }
    _s(Navigation, 'xbyQPtUVMO7MNj7WjJlpdWqRcTo=', false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'usePathname'
        ],
      ];
    });
    _c = Navigation;
    var _c;
    __turbopack_context__.k.register(_c, 'Navigation');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ScrollToTop.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ScrollToTop]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/navigation.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      );
    var _s = __turbopack_context__.k.signature();
    ('use client');
    function ScrollToTop() {
      _s();
      var pathname = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'usePathname'
      ])();
      var isFirstRender = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(true);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'ScrollToTop.useEffect': function () {
            // Skip initial render to avoid unnecessary scroll on page load
            if (isFirstRender.current) {
              isFirstRender.current = false;
              return;
            }
            // Instant scroll to top on route change
            window.scrollTo({
              top: 0,
              behavior: 'instant',
            });
          },
        }['ScrollToTop.useEffect'],
        [pathname],
      );
      return null;
    }
    _s(ScrollToTop, 'iM8WgtBcym4nNpjE+zeAgkV5Z2E=', false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'usePathname'
        ],
      ];
    });
    _c = ScrollToTop;
    var _c;
    __turbopack_context__.k.register(_c, 'ScrollToTop');
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

//# sourceMappingURL=Documents_priya-profile_priya-new-site_src_93ae64ed._.js.map
