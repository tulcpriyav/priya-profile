module.exports = [
  '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)',
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      'next/dist/compiled/next-server/app-page-turbo.runtime.dev.js',
      () =>
        require('next/dist/compiled/next-server/app-page-turbo.runtime.dev.js'),
    );

    module.exports = mod;
  },
  '[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)',
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      'next/dist/server/app-render/action-async-storage.external.js',
      () =>
        require('next/dist/server/app-render/action-async-storage.external.js'),
    );

    module.exports = mod;
  },
  '[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)',
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      'next/dist/server/app-render/work-unit-async-storage.external.js',
      () =>
        require('next/dist/server/app-render/work-unit-async-storage.external.js'),
    );

    module.exports = mod;
  },
  '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)',
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      'next/dist/server/app-render/work-async-storage.external.js',
      () =>
        require('next/dist/server/app-render/work-async-storage.external.js'),
    );

    module.exports = mod;
  },
  '[project]/Documents/priya-profile/priya-new-site/src/data/routes.ts [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => __TURBOPACK__default__export__]);
    const routes = [
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
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/SlideMenu.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => SlideMenu]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
      );
    ('use client');
    // Selector for focusable elements within the menu
    const FOCUSABLE_SELECTOR =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    function SlideMenu({ id, isOpen, onClose, children, position = 'right' }) {
      const menuRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(null);
      const previousActiveElement = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(null);
      // Save scroll position and lock body scroll (iOS-safe)
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        if (!isOpen) return;
        const scrollY = window.scrollY;
        const { body } = document;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
        body.style.left = '0';
        body.style.right = '0';
        return () => {
          body.style.position = '';
          body.style.top = '';
          body.style.left = '';
          body.style.right = '';
          window.scrollTo(0, scrollY);
        };
      }, [isOpen]);
      // Handle escape key
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            onClose();
          }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }, [isOpen, onClose]);
      // Focus management: trap focus and restore on close
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        if (isOpen) {
          // Save currently focused element
          previousActiveElement.current = document.activeElement;
          // Focus first focusable element in menu
          const focusableElements =
            menuRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
          if (focusableElements?.length) {
            focusableElements[0].focus();
          }
        } else if (previousActiveElement.current) {
          // Restore focus when closing
          previousActiveElement.current.focus();
          previousActiveElement.current = null;
        }
      }, [isOpen]);
      // Focus trapping
      const handleKeyDown = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])((e) => {
        if (e.key !== 'Tab') return;
        const focusableElements =
          menuRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
        if (!focusableElements?.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }, []);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Fragment'
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: `slide-menu-overlay${isOpen ? ' slide-menu-overlay--open' : ''}`,
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                ref: menuRef,
                id: id,
                role: 'dialog',
                'aria-modal': 'true',
                'aria-label': 'Navigation menu',
                className: `slide-menu slide-menu--${position}${isOpen ? ' slide-menu--open' : ''}`,
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
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => Hamburger]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/data/routes.ts [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$SlideMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/SlideMenu.tsx [app-ssr] (ecmascript)',
      );
    ('use client');
    const MENU_ID = 'mobile-nav-menu';
    function Hamburger() {
      const [open, setOpen] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useState'
      ])(false);
      const [mounted, setMounted] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useState'
      ])(false);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        setMounted(true);
      }, []);
      const toggleMenu = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(() => setOpen((prev) => !prev), []);
      const closeMenu = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(() => setOpen(false), []);
      const slideMenu = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$SlideMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'default'
        ],
        {
          id: MENU_ID,
          isOpen: open,
          onClose: closeMenu,
          position: 'right',
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'ul',
            {
              className: 'hamburger-ul',
              children:
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'default'
                ].map((l) =>
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'li',
                    {
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          href: l.path,
                          onClick: closeMenu,
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                            this,
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
                        this,
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
                    this,
                  ),
                ),
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
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'Fragment'
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'hamburger-container',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'nav',
                  {
                    className: 'main',
                    id: 'hamburger-nav',
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'ul',
                      {
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'li',
                          {
                            className: 'menu',
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  'span',
                                  {
                                    className: `hamburger-icon${open ? ' hamburger-icon--open' : ''}`,
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'createPortal'
              ])(slideMenu, document.body),
          ],
        },
        void 0,
        true,
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'MoonIcon',
      () => MoonIcon,
      'SunIcon',
      () => SunIcon,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    function SunIcon({ size = 20, className }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
    function MoonIcon({ size = 20, className }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ThemeToggle]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Icons/index.tsx [app-ssr] (ecmascript)',
      );
    ('use client');
    function ThemeToggle() {
      const [isDark, setIsDark] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useState'
      ])(null);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') {
          setIsDark(stored === 'dark');
        } else {
          setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
      }, []);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
        if (isDark === null) return;
        document.documentElement.setAttribute(
          'data-theme',
          isDark ? 'dark' : 'light',
        );
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }, [isDark]);
      const toggle = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useCallback'
      ])(() => {
        setIsDark((prev) => !prev);
      }, []);
      if (isDark === null) {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'span',
            {
              className: 'theme-toggle-icon',
              children: isDark
                ? /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Icons$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Navigation.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => Navigation]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/navigation.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/data/routes.ts [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$Hamburger$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/Hamburger.tsx [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ThemeToggle.tsx [app-ssr] (ecmascript)',
      );
    ('use client');
    function Navigation() {
      const pathname = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'usePathname'
      ])();
      const isActive = (path) => {
        if (path === '/') return pathname === '/';
        return pathname?.startsWith(path);
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'jsxDEV'
      ])(
        'header',
        {
          className: 'site-header',
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'default'
              ],
              {
                href: '/',
                className: 'site-logo',
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'nav',
              {
                className: 'nav-links',
                children:
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$data$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'default'
                  ]
                    .filter((l) => !l.index)
                    .map((l) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          href: l.path,
                          className: `nav-link ${isActive(l.path) ? 'active' : ''}`,
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
                        this,
                      ),
                    ),
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
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'div',
              {
                className: 'nav-actions',
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$src$2f$components$2f$Template$2f$Hamburger$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
  },
  '[project]/Documents/priya-profile/priya-new-site/src/components/Template/ScrollToTop.tsx [app-ssr] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['default', () => ScrollToTop]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/navigation.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)',
      );
    ('use client');
    function ScrollToTop() {
      const pathname = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'usePathname'
      ])();
      const isFirstRender = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useRef'
      ])(true);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'useEffect'
      ])(() => {
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
      }, [pathname]);
      return null;
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__564c7e72._.js.map
