(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === 'object' ? document.currentScript : undefined,
  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/ResumeNav.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ResumeNav]);
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
    var _s = __turbopack_context__.k.signature();
    ('use client');
    var sections = [
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
    /** Offset from top of viewport for intersection detection (header height + nav) */ var INTERSECTION_MARGIN =
      '-20% 0px -75% 0px';
    function ResumeNav() {
      var _this = this;
      _s();
      var _useState = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])('experience'),
          2,
        ),
        activeSection = _useState[0],
        setActiveSection = _useState[1];
      var observerRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(null);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'ResumeNav.useEffect': function () {
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
              {
                'ResumeNav.useEffect': function (entries) {
                  // Find the entry that is most visible (highest intersection ratio)
                  var visibleEntries = entries.filter(
                    {
                      'ResumeNav.useEffect.visibleEntries': function (entry) {
                        return entry.isIntersecting;
                      },
                    }['ResumeNav.useEffect.visibleEntries'],
                  );
                  var targetEntry = null;
                  if (visibleEntries.length > 0) {
                    // When there are visible entries, pick the one with the highest intersection ratio
                    targetEntry = visibleEntries.reduce(
                      {
                        'ResumeNav.useEffect': function (prev, current) {
                          return current.intersectionRatio >
                            prev.intersectionRatio
                            ? current
                            : prev;
                        },
                      }['ResumeNav.useEffect'],
                    );
                  } else if (entries.length > 0) {
                    // When no entries are intersecting, fall back to the entry closest to the viewport
                    targetEntry = entries.reduce(
                      {
                        'ResumeNav.useEffect': function (prev, current) {
                          var prevDistance = Math.abs(
                            prev.boundingClientRect.top,
                          );
                          var currentDistance = Math.abs(
                            current.boundingClientRect.top,
                          );
                          return currentDistance < prevDistance
                            ? current
                            : prev;
                        },
                      }['ResumeNav.useEffect'],
                    );
                  }
                  if (targetEntry) {
                    var sectionId = sections.find(
                      {
                        'ResumeNav.useEffect.sectionId': function (s) {
                          return s.id === targetEntry.target.id;
                        },
                      }['ResumeNav.useEffect.sectionId'],
                    );
                    if (sectionId) {
                      setActiveSection(sectionId.id);
                    }
                  }
                },
              }['ResumeNav.useEffect'],
              {
                rootMargin: INTERSECTION_MARGIN,
                threshold: [0, 0.25, 0.5, 0.75, 1],
              },
            );
            // Observe all sections
            sections.forEach(
              {
                'ResumeNav.useEffect': function (param) {
                  var id = param.id;
                  var element = document.getElementById(id);
                  if (element) {
                    var _observerRef_current;
                    (_observerRef_current = observerRef.current) === null ||
                    _observerRef_current === void 0
                      ? void 0
                      : _observerRef_current.observe(element);
                  }
                },
              }['ResumeNav.useEffect'],
            );
            return {
              'ResumeNav.useEffect': function () {
                var _observerRef_current;
                (_observerRef_current = observerRef.current) === null ||
                _observerRef_current === void 0
                  ? void 0
                  : _observerRef_current.disconnect();
              },
            }['ResumeNav.useEffect'];
          },
        }['ResumeNav.useEffect'],
        [],
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'nav',
        {
          className: 'resume-nav',
          'aria-label': 'Resume sections',
          children: sections.map(function (section) {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'a',
              {
                href: '#'.concat(section.id),
                className: 'resume-nav-link '.concat(
                  activeSection === section.id ? 'active' : '',
                ),
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
              _this,
            );
          }),
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
    _s(ResumeNav, 'Mp6VTOoJpNkgz3NpPU8sbM17PE8=');
    _c = ResumeNav;
    var _c;
    __turbopack_context__.k.register(_c, 'ResumeNav');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/CategoryButton.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => CategoryButton]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    function CategoryButton(param) {
      var handleClick = param.handleClick,
        isActive = param.isActive,
        label = param.label;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'button',
        {
          className: 'skillbutton '.concat(
            isActive ? 'skillbutton-active' : '',
          ),
          type: 'button',
          onClick: function () {
            return handleClick(label);
          },
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
    _c = CategoryButton;
    var _c;
    __turbopack_context__.k.register(_c, 'CategoryButton');
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
  '[project]/Documents/priya-profile/priya-new-site/src/lib/utils.ts [app-client] (ecmascript)',
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
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var SITE_URL = 'https://www.abhinavnarne.com';
    var AUTHOR_NAME = 'Tulasi Priya Vattikuti';
    var TWITTER_HANDLE = '';
    var AVATAR_SIZE = {
      hero: 120,
      footer: 80,
      sidebar: 200,
    };
    var PROJECT_IMAGE = {
      width: 600,
      height: 400,
    };
    var MAX_COMPETENCY = 5;
    function formatDate(dateStr) {
      if (!dateStr) return '';
      // Parse as UTC to avoid timezone shifts
      var date = new Date(''.concat(dateStr, 'T12:00:00'));
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    function calculateAge(birthDateStr) {
      var today = new Date();
      var _birthDateStr_split_map = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(birthDateStr.split('-').map(Number), 3),
        year = _birthDateStr_split_map[0],
        month = _birthDateStr_split_map[1],
        day = _birthDateStr_split_map[2];
      var age = today.getFullYear() - year;
      // Adjust if birthday hasn't occurred yet this year
      if (
        today.getMonth() < month - 1 ||
        (today.getMonth() === month - 1 && today.getDate() < day)
      ) {
        age--;
      }
      return age;
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/SkillTag.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => SkillTag]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/lib/utils.ts [app-client] (ecmascript)',
      );
    function SkillTag(param) {
      var data = param.data,
        categories = param.categories;
      var _categories_find;
      var category = data.category,
        competency = data.competency,
        title = data.title;
      // Get the primary category color
      var categoryColor =
        (_categories_find = categories.find(function (cat) {
          return category.includes(cat.name);
        })) === null || _categories_find === void 0
          ? void 0
          : _categories_find.color;
      // Size based on competency (5 = large, 4 = medium, 3 = small)
      var sizeClass =
        competency >= 5
          ? 'skill-tag--lg'
          : competency >= 4
            ? 'skill-tag--md'
            : 'skill-tag--sm';
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'span',
        {
          className: 'skill-tag '.concat(sizeClass),
          style: {
            '--tag-color': categoryColor,
          },
          title: ''
            .concat(title, ': ')
            .concat(competency, ' out of ')
            .concat(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'MAX_COMPETENCY'
              ],
            ),
          'aria-label': ''
            .concat(title, ': proficiency ')
            .concat(competency, ' out of ')
            .concat(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'MAX_COMPETENCY'
              ],
            ),
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
    _c = SkillTag;
    var _c;
    __turbopack_context__.k.register(_c, 'SkillTag');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => Skills]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)',
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
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Resume$2f$Skills$2f$CategoryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/CategoryButton.tsx [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Resume$2f$Skills$2f$SkillTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills/SkillTag.tsx [app-client] (ecmascript)',
      );
    var _s = __turbopack_context__.k.signature();
    ('use client');
    function buttonReducer(state, action) {
      switch (action.type) {
        case 'TOGGLE_CATEGORY': {
          var newButtons = {};
          var _iteratorNormalCompletion = true,
            _didIteratorError = false,
            _iteratorError = undefined;
          try {
            // Toggle clicked button, turn all others off
            for (
              var _iterator = Object.keys(state)[Symbol.iterator](), _step;
              !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
              _iteratorNormalCompletion = true
            ) {
              var key = _step.value;
              newButtons[key] = action.label === key && !state[key];
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
          // Turn on 'All' button if no other buttons are active
          newButtons.All = !Object.keys(state).some(function (key) {
            return newButtons[key];
          });
          return newButtons;
        }
        default:
          return state;
      }
    }
    function Skills(param) {
      var _this = this;
      var skills = param.skills,
        categories = param.categories;
      _s();
      var initialButtons = Object.fromEntries(
        [['All', false]].concat(
          categories.map(function (param) {
            var name = param.name;
            return [name, false];
          }),
        ),
      );
      var _useReducer = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useReducer'
          ])(buttonReducer, initialButtons),
          2,
        ),
        buttons = _useReducer[0],
        dispatch = _useReducer[1];
      var handleChildClick = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(
        {
          'Skills.useCallback[handleChildClick]': function (label) {
            dispatch({
              type: 'TOGGLE_CATEGORY',
              label: label,
            });
          },
        }['Skills.useCallback[handleChildClick]'],
        [],
      );
      // Memoize button elements to avoid recreation on every render
      var buttonElements = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useMemo'
      ])(
        {
          'Skills.useMemo[buttonElements]': function () {
            return Object.keys(buttons).map(
              {
                'Skills.useMemo[buttonElements]': function (key) {
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Resume$2f$Skills$2f$CategoryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                    _this,
                  );
                },
              }['Skills.useMemo[buttonElements]'],
            );
          },
        }['Skills.useMemo[buttonElements]'],
        [buttons, handleChildClick],
      );
      // Get active category
      var activeCategory = Object.keys(buttons).reduce(function (cat, key) {
        return buttons[key] ? key : cat;
      }, 'All');
      // Memoize sorting, filtering, and grouping to avoid recalculating on every render
      var groupedSkills = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useMemo'
      ])(
        {
          'Skills.useMemo[groupedSkills]': function () {
            // Sort skills by competency (highest first), then alphabetically
            var sortedSkills = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              '_'
            ])(skills).sort(
              {
                'Skills.useMemo[groupedSkills].sortedSkills': function (a, b) {
                  if (a.competency !== b.competency)
                    return b.competency - a.competency;
                  return a.title.localeCompare(b.title);
                },
              }['Skills.useMemo[groupedSkills].sortedSkills'],
            );
            // Filter skills based on active category
            var filteredSkills = sortedSkills.filter(
              {
                'Skills.useMemo[groupedSkills].filteredSkills': function (
                  skill,
                ) {
                  return (
                    activeCategory === 'All' ||
                    skill.category.includes(activeCategory)
                  );
                },
              }['Skills.useMemo[groupedSkills].filteredSkills'],
            );
            // Group skills by their primary category for grouped view
            if (activeCategory === 'All') {
              return categories.reduce(
                {
                  'Skills.useMemo[groupedSkills]': function (groups, category) {
                    var categorySkills = filteredSkills.filter(
                      {
                        'Skills.useMemo[groupedSkills].categorySkills':
                          function (skill) {
                            return skill.category.includes(category.name);
                          },
                      }['Skills.useMemo[groupedSkills].categorySkills'],
                    );
                    if (categorySkills.length > 0) {
                      groups[category.name] = categorySkills;
                    }
                    return groups;
                  },
                }['Skills.useMemo[groupedSkills]'],
                {},
              );
            }
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              '_'
            ])({}, activeCategory, filteredSkills);
          },
        }['Skills.useMemo[groupedSkills]'],
        [skills, categories, activeCategory],
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'div',
        {
          className: 'skills',
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'title',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'skill-groups',
                children: Object.entries(groupedSkills).map(function (param) {
                  var _param = (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      '_'
                    ])(param, 2),
                    categoryName = _param[0],
                    categorySkills = _param[1];
                  var category = categories.find(function (c) {
                    return c.name === categoryName;
                  });
                  // Pass color via CSS custom property for design system consistency
                  var titleStyle = {
                    '--skill-category-color':
                      category === null || category === void 0
                        ? void 0
                        : category.color,
                  };
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'div',
                    {
                      className: 'skill-group',
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                          _this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'div',
                          {
                            className: 'skill-tags',
                            children: categorySkills.map(function (skill) {
                              return /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                'jsxDEV'
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Resume$2f$Skills$2f$SkillTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
                                _this,
                              );
                            }),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              '[project]/Documents/priya-profile/priya-new-site/src/components/Resume/Skills.tsx',
                            lineNumber: 124,
                            columnNumber: 15,
                          },
                          _this,
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
                    _this,
                  );
                }),
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
    _s(Skills, '7DEp019AxFp+1b7yeNlHQSPB7oI=');
    _c = Skills;
    var _c;
    __turbopack_context__.k.register(_c, 'Skills');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemePortrait.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ThemePortrait]);
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
    var _s = __turbopack_context__.k.signature();
    ('use client');
    function ThemePortrait(param) {
      var width = param.width,
        height = param.height,
        _param_priority = param.priority,
        priority = _param_priority === void 0 ? false : _param_priority,
        _param_className = param.className,
        className = _param_className === void 0 ? '' : _param_className;
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
        isHydrated = _useState[0],
        setIsHydrated = _useState[1];
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'ThemePortrait.useEffect': function () {
            setIsHydrated(true);
          },
        }['ThemePortrait.useEffect'],
        [],
      );
      if (!isHydrated) {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'span',
          {
            className: 'theme-portrait '.concat(className),
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
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'span',
        {
          className: 'theme-portrait '.concat(className),
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
    _s(ThemePortrait, 'I77IOq3pAPHaLortJPfCkmuM/a0=');
    _c = ThemePortrait;
    var _c;
    __turbopack_context__.k.register(_c, 'ThemePortrait');
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
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _define_property]);
    function _define_property(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else obj[key] = value;
      return obj;
    }
  },
]);

//# sourceMappingURL=Documents_priya-profile_priya-new-site_a95114c5._.js.map
