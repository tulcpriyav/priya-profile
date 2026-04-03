(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === 'object' ? document.currentScript : undefined,
  '[project]/Documents/priya-profile/priya-new-site/src/data/stats/personal.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
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
    /** Birth date for age calculation (ISO format) */ var BIRTH_DATE =
      '1993-08-09T00:00:00';
    /** Milliseconds in an average year (accounting for leap years) */ var MS_PER_YEAR =
      1000 * 60 * 60 * 24 * 365.2421897;
    /** Update interval for age display in ms */ var AGE_UPDATE_INTERVAL = 25;
    /** Number of decimal places for age display */ var AGE_PRECISION = 11;
    function Age() {
      _s();
      var _useState = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(''),
          2,
        ),
        age = _useState[0],
        setAge = _useState[1];
      var tick = function () {
        var birthTime = new Date(BIRTH_DATE);
        setAge(
          ((Date.now() - birthTime.getTime()) / MS_PER_YEAR).toFixed(
            AGE_PRECISION,
          ),
        );
      };
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'Age.useEffect': function () {
            tick(); // Initial tick
            var timer = setInterval(
              {
                'Age.useEffect.timer': function () {
                  return tick();
                },
              }['Age.useEffect.timer'],
              AGE_UPDATE_INTERVAL,
            );
            return {
              'Age.useEffect': function () {
                clearInterval(timer);
              },
            }['Age.useEffect'];
          },
        }['Age.useEffect'],
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
          children: age,
        },
        void 0,
        false,
      );
    }
    _s(Age, '/aE42kwK3NKZ745y/o93k1MpaZw=');
    _c = Age;
    var data = [
      {
        key: 'age',
        label: 'Current age',
        value: /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          Age,
          {},
          void 0,
          false,
          {
            fileName:
              '[project]/Documents/priya-profile/priya-new-site/src/data/stats/personal.tsx',
            lineNumber: 44,
            columnNumber: 12,
          },
          ('TURBOPACK compile-time value', void 0),
        ),
      },
      {
        key: 'countries',
        label: 'Countries visited',
        value: 3,
        link: 'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
      },
      {
        key: 'location',
        label: 'Current city',
        value: 'Ashburn, VA',
      },
    ];
    const __TURBOPACK__default__export__ = data;
    var _c;
    __turbopack_context__.k.register(_c, 'Age');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/TableRow.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => TableRow]);
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
    function TableRow(param) {
      var label = param.label,
        _param_link = param.link,
        link = _param_link === void 0 ? null : _param_link,
        _param_value = param.value,
        value = _param_value === void 0 ? null : _param_value,
        format = param.format;
      // If value is a React element, render it directly
      var displayValue = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'isValidElement'
      ])(value)
        ? value
        : format
          ? format(value)
          : String(value);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'tr',
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'td',
              {
                className: 'stat-table-label',
                children: label,
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/TableRow.tsx',
                lineNumber: 20,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'td',
              {
                className: 'stat-table-value',
                children: link
                  ? /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'a',
                      {
                        href: link,
                        children: displayValue,
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/TableRow.tsx',
                        lineNumber: 22,
                        columnNumber: 17,
                      },
                      this,
                    )
                  : displayValue,
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/TableRow.tsx',
                lineNumber: 21,
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
            '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/TableRow.tsx',
          lineNumber: 19,
          columnNumber: 5,
        },
        this,
      );
    }
    _c = TableRow;
    var _c;
    __turbopack_context__.k.register(_c, 'TableRow');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => Table]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Stats$2f$TableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/TableRow.tsx [app-client] (ecmascript)',
      );
    function Table(param) {
      var _this = this;
      var data = param.data;
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'table',
        {
          className: 'stat-table',
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'thead',
              {
                className: 'sr-only',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'tr',
                  {
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'th',
                        {
                          scope: 'col',
                          children: 'Statistic',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx',
                          lineNumber: 9,
                          columnNumber: 11,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'th',
                        {
                          scope: 'col',
                          children: 'Value',
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx',
                          lineNumber: 10,
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
                      '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx',
                    lineNumber: 8,
                    columnNumber: 9,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx',
                lineNumber: 7,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'tbody',
              {
                children: data.map(function (pair) {
                  return /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Stats$2f$TableRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'default'
                    ],
                    {
                      format: pair.format,
                      label: pair.label,
                      link: pair.link,
                      value: pair.value,
                    },
                    pair.label,
                    false,
                    {
                      fileName:
                        '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx',
                      lineNumber: 15,
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
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx',
                lineNumber: 13,
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
            '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx',
          lineNumber: 6,
          columnNumber: 5,
        },
        this,
      );
    }
    _c = Table;
    var _c;
    __turbopack_context__.k.register(_c, 'Table');
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
  '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Personal.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => PersonalStats]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$stats$2f$personal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/data/stats/personal.tsx [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Stats$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Table.tsx [app-client] (ecmascript)',
      );
    ('use client');
    function PersonalStats() {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Stats$2f$Table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          'default'
        ],
        {
          data: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$stats$2f$personal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'default'
          ],
        },
        void 0,
        false,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Stats/Personal.tsx',
          lineNumber: 7,
          columnNumber: 10,
        },
        this,
      );
    }
    _c = PersonalStats;
    var _c;
    __turbopack_context__.k.register(_c, 'PersonalStats');
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
]);

//# sourceMappingURL=Documents_priya-profile_priya-new-site_src_8ff74d86._.js.map
