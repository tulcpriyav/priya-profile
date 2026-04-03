(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === 'object' ? document.currentScript : undefined,
  '[project]/Documents/priya-profile/priya-new-site/src/components/Contact/EmailLink.tsx [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => EmailLink]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)',
      );
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
    var _s = __turbopack_context__.k.signature(),
      _s1 = __turbopack_context__.k.signature();
    ('use client');
    // Animation timing constants
    var ANIMATION_TICK_MS = 50; // Tick length in milliseconds
    var HOLD_TICKS_AFTER_MESSAGE = 50; // Ticks to wait after message completes
    // Validates the first half of an email address per RFC 5322
    function validateText(text) {
      var re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))$/;
      return re.test(text) || text.length === 0;
    }
    function prefersReducedMotion() {
      if (
        ('TURBOPACK compile-time falsy', 0) //TURBOPACK unreachable
      );
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    var messages = [
      'hi',
      'hello',
      'hola',
      'you-can-email-me-at-literally-anything! Really',
      'well, not anything. But most things',
      'like-this',
      'or-this',
      'but not this :(  ',
      'you.can.also.email.me.with.specific.topics.like',
      'just-saying-hi',
      'please-work-for-us',
      'help',
      'admin',
      'or-I-really-like-your-website',
      'thanks',
    ];
    function useInterval(callback, delay) {
      _s();
      var savedCallback = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(callback);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'useInterval.useEffect': function () {
            savedCallback.current = callback;
          },
        }['useInterval.useEffect'],
        [callback],
      );
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'useInterval.useEffect': function () {
            if (!delay) return;
            var id = setInterval(
              {
                'useInterval.useEffect.id': function () {
                  var _savedCallback_current;
                  return (_savedCallback_current = savedCallback.current) ===
                    null || _savedCallback_current === void 0
                    ? void 0
                    : _savedCallback_current.call(savedCallback);
                },
              }['useInterval.useEffect.id'],
              delay,
            );
            return {
              'useInterval.useEffect': function () {
                return clearInterval(id);
              },
            }['useInterval.useEffect'];
          },
        }['useInterval.useEffect'],
        [delay],
      );
    }
    _s(useInterval, 'dqNZMqbncP+HtqBlD20aSNv0Ugk=');
    function animationReducer(state, action) {
      switch (action.type) {
        case 'TICK': {
          var newIdx = state.idx;
          var newChar = state.char;
          if (state.char - action.hold >= messages[state.idx].length) {
            newIdx += 1;
            newChar = 0;
          }
          if (newIdx === messages.length) {
            if (action.loopMessage) {
              return {
                idx: 0,
                message: '',
                char: 0,
                isActive: true,
              };
            }
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              '_'
            ])(
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                '_'
              ])({}, state),
              {
                isActive: false,
              },
            );
          }
          return {
            idx: newIdx,
            message: messages[newIdx].slice(0, newChar),
            char: newChar + 1,
            isActive: true,
          };
        }
        case 'PAUSE':
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            '_'
          ])(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              '_'
            ])({}, state),
            {
              isActive: false,
            },
          );
        case 'RESUME':
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            '_'
          ])(
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              '_'
            ])({}, state),
            {
              isActive: state.idx < action.maxIdx,
            },
          );
        default:
          return state;
      }
    }
    function EmailLink(param) {
      var _param_loopMessage = param.loopMessage,
        loopMessage =
          _param_loopMessage === void 0 ? false : _param_loopMessage;
      _s1();
      // Check for reduced motion preference
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
        reducedMotion = _useState[0],
        setReducedMotion = _useState[1];
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'EmailLink.useEffect': function () {
            setReducedMotion(prefersReducedMotion());
          },
        }['EmailLink.useEffect'],
        [],
      );
      var _useReducer = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useReducer'
          ])(animationReducer, {
            idx: 0,
            message: '',
            char: 0,
            isActive: true,
          }),
          2,
        ),
        state = _useReducer[0],
        dispatch = _useReducer[1];
      // If user prefers reduced motion, show static email immediately
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(
        {
          'EmailLink.useEffect': function () {
            if (reducedMotion) {
              dispatch({
                type: 'PAUSE',
              });
            }
          },
        }['EmailLink.useEffect'],
        [reducedMotion],
      );
      useInterval(
        {
          'EmailLink.useInterval': function () {
            dispatch({
              type: 'TICK',
              loopMessage: loopMessage,
              hold: HOLD_TICKS_AFTER_MESSAGE,
            });
          },
        }['EmailLink.useInterval'],
        state.isActive && !reducedMotion ? ANIMATION_TICK_MS : null,
      );
      // Use 'hi' as default message when reduced motion or paused with empty message
      var displayMessage =
        reducedMotion || state.message === '' ? 'hi' : state.message;
      var isValid = validateText(displayMessage);
      var handlePause = function () {
        return dispatch({
          type: 'PAUSE',
        });
      };
      var handleResume = function () {
        if (!reducedMotion) {
          dispatch({
            type: 'RESUME',
            maxIdx: messages.length,
          });
        }
      };
      var handleClick = function (e) {
        if (!isValid) {
          e.preventDefault();
        }
      };
      var handleKeyDown = function (e) {
        if (!isValid && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
        }
      };
      var emailContent = /*#__PURE__*/ (0,
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
              'span',
              {
                className: 'contact-email-prefix',
                children: displayMessage,
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Contact/EmailLink.tsx',
                lineNumber: 172,
                columnNumber: 7,
              },
              this,
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'span',
              {
                className: 'contact-email-domain',
                children: '@abhinavnarne.com',
              },
              void 0,
              false,
              {
                fileName:
                  '[project]/Documents/priya-profile/priya-new-site/src/components/Contact/EmailLink.tsx',
                lineNumber: 173,
                columnNumber: 7,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'div',
        {
          className: 'contact-email-container',
          onMouseEnter: handlePause,
          onMouseLeave: handleResume,
          children: isValid
            ? /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'a',
                {
                  href: 'mailto:'.concat(displayMessage, '@abhinavnarne.com'),
                  className: 'contact-email-link',
                  onClick: handleClick,
                  onKeyDown: handleKeyDown,
                  onFocus: handlePause,
                  onBlur: handleResume,
                  children: emailContent,
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/Documents/priya-profile/priya-new-site/src/components/Contact/EmailLink.tsx',
                  lineNumber: 184,
                  columnNumber: 9,
                },
                this,
              )
            : /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'span',
                {
                  className: 'contact-email-link contact-email-link--invalid',
                  'aria-disabled': 'true',
                  tabIndex: -1,
                  children: emailContent,
                },
                void 0,
                false,
                {
                  fileName:
                    '[project]/Documents/priya-profile/priya-new-site/src/components/Contact/EmailLink.tsx',
                  lineNumber: 195,
                  columnNumber: 9,
                },
                this,
              ),
        },
        void 0,
        false,
        {
          fileName:
            '[project]/Documents/priya-profile/priya-new-site/src/components/Contact/EmailLink.tsx',
          lineNumber: 178,
          columnNumber: 5,
        },
        this,
      );
    }
    _s1(EmailLink, 'Tqgti27poOjG58NiJSR0HbSDaNA=', false, function () {
      return [useInterval];
    });
    _c = EmailLink;
    var _c;
    __turbopack_context__.k.register(_c, 'EmailLink');
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
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _object_spread]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)',
      );
    function _object_spread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(
            Object.getOwnPropertySymbols(source).filter(function (sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }),
          );
        }
        ownKeys.forEach(function (key) {
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            '_'
          ])(target, key, source[key]);
        });
      }
      return target;
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _object_spread_props]);
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _object_spread_props(target, source) {
      source = source != null ? source : {};
      if (Object.getOwnPropertyDescriptors)
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        );
      else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
      }
      return target;
    }
  },
]);

//# sourceMappingURL=Documents_priya-profile_priya-new-site_4b34c423._.js.map
