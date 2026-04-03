(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  83029,
  (a) => {
    'use strict';
    var t = a.i(43476),
      e = a.i(71645);
    function i(a) {
      let { width: i, height: s, priority: r = !1, className: c = '' } = a,
        [l, n] = (0, e.useState)(!1);
      return ((0, e.useEffect)(() => {
        n(!0);
      }, []),
      l)
        ? (0, t.jsxs)('span', {
            className: 'theme-portrait '.concat(c),
            children: [
              (0, t.jsx)('img', {
                src: '/images/priya.jpeg',
                alt: 'Tulasi Priya Vattikuti',
                width: i,
                height: s,
                loading: r ? 'eager' : 'lazy',
                decoding: 'async',
                className: 'theme-portrait-light',
              }),
              (0, t.jsx)('img', {
                src: '/images/priya.jpeg',
                alt: 'Tulasi Priya Vattikuti',
                width: i,
                height: s,
                loading: 'lazy',
                decoding: 'async',
                className: 'theme-portrait-dark',
                'aria-hidden': 'true',
              }),
            ],
          })
        : (0, t.jsx)('span', { className: 'theme-portrait '.concat(c) });
    }
    a.s(['default', () => i]);
  },
]);
