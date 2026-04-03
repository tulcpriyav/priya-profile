module.exports = [
  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/ResumeNav.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ResumeNav]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
      );
    ('use client');
    const sections = [
      {
        name: 'Experience',
        id: 'experience',
      },
      {
        name: 'Education',
        id: 'education',
      },
      {
        name: 'Skills',
        id: 'skills',
      },
      {
        name: 'Courses',
        id: 'courses',
      },
      {
        name: 'References',
        id: 'references',
      },
    ];
    /** Offset from top of viewport for intersection detection (header height + nav) */ const INTERSECTION_MARGIN =
      '-20% 0px -75% 0px';
    function ResumeNav() {
      const [activeSection, setActiveSection] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useState'
      ])('experience');
      const observerRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(null);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        // Check if IntersectionObserver is available (not in test environment)
        if (typeof IntersectionObserver === 'undefined') {
          return;
        }
        // Clean up previous observer
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
        // Create IntersectionObserver for efficient scroll tracking
        observerRef.current = new IntersectionObserver(
          (entries) => {
            // Find the entry that is most visible (highest intersection ratio)
            const visibleEntries = entries.filter(
              (entry) => entry.isIntersecting,
            );
            let targetEntry = null;
            if (visibleEntries.length > 0) {
              // When there are visible entries, pick the one with the highest intersection ratio
              targetEntry = visibleEntries.reduce((prev, current) =>
                current.intersectionRatio > prev.intersectionRatio
                  ? current
                  : prev,
              );
            } else if (entries.length > 0) {
              // When no entries are intersecting, fall back to the entry closest to the viewport
              targetEntry = entries.reduce((prev, current) => {
                const prevDistance = Math.abs(prev.boundingClientRect.top);
                const currentDistance = Math.abs(
                  current.boundingClientRect.top,
                );
                return currentDistance < prevDistance ? current : prev;
              });
            }
            if (targetEntry) {
              const sectionId = sections.find(
                (s) => s.id === targetEntry.target.id,
              );
              if (sectionId) {
                setActiveSection(sectionId.id);
              }
            }
          },
          {
            rootMargin: INTERSECTION_MARGIN,
            threshold: [0, 0.25, 0.5, 0.75, 1],
          },
        );
        // Observe all sections
        sections.forEach(({ id }) => {
          const element = document.getElementById(id);
          if (element) {
            observerRef.current?.observe(element);
          }
        });
        return () => {
          observerRef.current?.disconnect();
        };
      }, []);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'nav',
        {
          className: 'resume-nav',
          'aria-label': 'Resume sections',
          children: sections.map((section) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'a',
              {
                href: `#${section.id}`,
                className: `resume-nav-link ${activeSection === section.id ? 'active' : ''}`,
                'aria-current':
                  activeSection === section.id ? 'location' : undefined,
                children: section.name,
              },
              section.id,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/ResumeNav.tsx',
                lineNumber: 86,
                columnNumber: 9,
              },
              this,
            ),
          ),
        },
        void 0,
        false,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/ResumeNav.tsx',
          lineNumber: 84,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/CategoryButton.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => CategoryButton]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    function CategoryButton({ handleClick, isActive, label }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'button',
        {
          className: `skillbutton ${isActive ? 'skillbutton-active' : ''}`,
          type: 'button',
          onClick: () => handleClick(label),
          'aria-pressed': isActive,
          children: label,
        },
        void 0,
        false,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/CategoryButton.tsx',
          lineNumber: 13,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/src/lib/utils.ts [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    /**
     * Shared utility functions and constants
     */ // Site configuration
    __turbopack_context__.s([
      'AUTHOR_NAME',
      () => AUTHOR_NAME,
      'AVATAR_SIZE',
      () => AVATAR_SIZE,
      'MAX_COMPETENCY',
      () => MAX_COMPETENCY,
      'PROJECT_IMAGE',
      () => PROJECT_IMAGE,
      'SITE_URL',
      () => SITE_URL,
      'TWITTER_HANDLE',
      () => TWITTER_HANDLE,
      'calculateAge',
      () => calculateAge,
      'formatDate',
      () => formatDate,
    ]);
    const SITE_URL = 'https://www.abhinavnarne.com';
    const AUTHOR_NAME = 'Tulasi Priya Vattikuti';
    const TWITTER_HANDLE = '';
    const AVATAR_SIZE = {
      hero: 120,
      footer: 80,
      sidebar: 200,
    };
    const PROJECT_IMAGE = {
      width: 600,
      height: 400,
    };
    const MAX_COMPETENCY = 5;
    function formatDate(dateStr) {
      if (!dateStr) return '';
      // Parse as UTC to avoid timezone shifts
      const date = new Date(`${dateStr}T12:00:00`);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    function calculateAge(birthDateStr) {
      const today = new Date();
      const [year, month, day] = birthDateStr.split('-').map(Number);
      let age = today.getFullYear() - year;
      // Adjust if birthday hasn't occurred yet this year
      if (
        today.getMonth() < month - 1 ||
        (today.getMonth() === month - 1 && today.getDate() < day)
      ) {
        age--;
      }
      return age;
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/SkillTag.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => SkillTag]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/lib/utils.ts [app-ssr] (ecmascript)',
      );
    function SkillTag({ data, categories }) {
      const { category, competency, title } = data;
      // Get the primary category color
      const categoryColor = categories.find((cat) =>
        category.includes(cat.name),
      )?.color;
      // Size based on competency (5 = large, 4 = medium, 3 = small)
      const sizeClass =
        competency >= 5
          ? 'skill-tag--lg'
          : competency >= 4
            ? 'skill-tag--md'
            : 'skill-tag--sm';
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'span',
        {
          className: `skill-tag ${sizeClass}`,
          style: {
            '--tag-color': categoryColor,
          },
          title: `${title}: ${competency} out of ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__['MAX_COMPETENCY']}`,
          'aria-label': `${title}: proficiency ${competency} out of ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__['MAX_COMPETENCY']}`,
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'span',
            {
              className: 'skill-tag-name',
              children: title,
            },
            void 0,
            false,
            {
              fileName:
                '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/SkillTag.tsx',
              lineNumber: 38,
              columnNumber: 7,
            },
            this,
          ),
        },
        void 0,
        false,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/SkillTag.tsx',
          lineNumber: 28,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => Skills]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Resume$2f$Skills$2f$CategoryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/CategoryButton.tsx [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Resume$2f$Skills$2f$SkillTag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/SkillTag.tsx [app-ssr] (ecmascript)',
      );
    ('use client');
    function buttonReducer(state, action) {
      switch (action.type) {
        case 'TOGGLE_CATEGORY': {
          const newButtons = {};
          // Toggle clicked button, turn all others off
          for (const key of Object.keys(state)) {
            newButtons[key] = action.label === key && !state[key];
          }
          // Turn on 'All' button if no other buttons are active
          newButtons.All = !Object.keys(state).some((key) => newButtons[key]);
          return newButtons;
        }
        default:
          return state;
      }
    }
    function Skills({ skills, categories }) {
      const initialButtons = Object.fromEntries(
        [['All', false]].concat(categories.map(({ name }) => [name, false])),
      );
      const [buttons, dispatch] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useReducer'
      ])(buttonReducer, initialButtons);
      const handleChildClick = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])((label) => {
        dispatch({
          type: 'TOGGLE_CATEGORY',
          label,
        });
      }, []);
      // Memoize button elements to avoid recreation on every render
      const buttonElements = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useMemo'
      ])(
        () =>
          Object.keys(buttons).map((key) =>
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Resume$2f$Skills$2f$CategoryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ],
              {
                label: key,
                isActive: buttons[key],
                handleClick: handleChildClick,
              },
              key,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                lineNumber: 57,
                columnNumber: 9,
              },
              this,
            ),
          ),
        [buttons, handleChildClick],
      );
      // Get active category
      const activeCategory = Object.keys(buttons).reduce(
        (cat, key) => (buttons[key] ? key : cat),
        'All',
      );
      // Memoize sorting, filtering, and grouping to avoid recalculating on every render
      const groupedSkills = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useMemo'
      ])(() => {
        // Sort skills by competency (highest first), then alphabetically
        const sortedSkills = [...skills].sort((a, b) => {
          if (a.competency !== b.competency) return b.competency - a.competency;
          return a.title.localeCompare(b.title);
        });
        // Filter skills based on active category
        const filteredSkills = sortedSkills.filter(
          (skill) =>
            activeCategory === 'All' || skill.category.includes(activeCategory),
        );
        // Group skills by their primary category for grouped view
        if (activeCategory === 'All') {
          return categories.reduce((groups, category) => {
            const categorySkills = filteredSkills.filter((skill) =>
              skill.category.includes(category.name),
            );
            if (categorySkills.length > 0) {
              groups[category.name] = categorySkills;
            }
            return groups;
          }, {});
        }
        return {
          [activeCategory]: filteredSkills,
        };
      }, [skills, categories, activeCategory]);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'div',
        {
          className: 'skills',
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'link-to',
                id: 'skills',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                lineNumber: 107,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'title',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'h3',
                  {
                    children: 'Skills',
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                    lineNumber: 109,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                lineNumber: 108,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'skill-button-container',
                children: buttonElements,
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                lineNumber: 111,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'skill-groups',
                children: Object.entries(groupedSkills).map(
                  ([categoryName, categorySkills]) => {
                    const category = categories.find(
                      (c) => c.name === categoryName,
                    );
                    // Pass color via CSS custom property for design system consistency
                    const titleStyle = {
                      '--skill-category-color': category?.color,
                    };
                    return /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'div',
                      {
                        className: 'skill-group',
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'h4',
                            {
                              className: 'skill-group-title',
                              style: titleStyle,
                              children: categoryName,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                              lineNumber: 121,
                              columnNumber: 15,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            'div',
                            {
                              className: 'skill-tags',
                              children: categorySkills.map((skill) =>
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Resume$2f$Skills$2f$SkillTag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    'default'
                                  ],
                                  {
                                    data: skill,
                                    categories: categories,
                                  },
                                  skill.title,
                                  false,
                                  {
                                    fileName:
                                      '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                                    lineNumber: 126,
                                    columnNumber: 19,
                                  },
                                  this,
                                ),
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                              lineNumber: 124,
                              columnNumber: 15,
                            },
                            this,
                          ),
                        ],
                      },
                      categoryName,
                      true,
                      {
                        fileName:
                          '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                        lineNumber: 120,
                        columnNumber: 13,
                      },
                      this,
                    );
                  },
                ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                lineNumber: 112,
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
            '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
          lineNumber: 106,
          columnNumber: 5,
        },
        this,
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemePortrait.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ThemePortrait]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
      );
    ('use client');
    function ThemePortrait({
      width,
      height,
      priority = false,
      className = '',
    }) {
      const [isHydrated, setIsHydrated] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useState'
      ])(false);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        setIsHydrated(true);
      }, []);
      if (!isHydrated) {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'span',
          {
            className: `theme-portrait ${className}`,
          },
          void 0,
          false,
          {
            fileName:
              '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemePortrait.tsx',
            lineNumber: 35,
            columnNumber: 12,
          },
          this,
        );
      }
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'span',
        {
          className: `theme-portrait ${className}`,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'img',
              {
                src: '/images/priya.jpeg',
                alt: 'Tulasi Priya Vattikuti',
                width: width,
                height: height,
                loading: priority ? 'eager' : 'lazy',
                decoding: 'async',
                className: 'theme-portrait-light',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemePortrait.tsx',
                lineNumber: 41,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'img',
              {
                src: '/images/priya.jpeg',
                alt: 'Tulasi Priya Vattikuti',
                width: width,
                height: height,
                loading: 'lazy',
                decoding: 'async',
                className: 'theme-portrait-dark',
                'aria-hidden': 'true',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemePortrait.tsx',
                lineNumber: 51,
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
            '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemePortrait.tsx',
          lineNumber: 39,
          columnNumber: 5,
        },
        this,
      );
    }
  },
];

//# sourceMappingURL=Documents_priya-profile_priya-new-site_src_a7422f1d._.js.map
