(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  83029,
  (e) => {
    'use strict';
    var t = e.i(43476),
      a = e.i(71645);
    function r(e) {
      let { width: r, height: i, priority: n = !1, className: s = '' } = e,
        [c, l] = (0, a.useState)(!1);
      return ((0, a.useEffect)(() => {
        l(!0);
      }, []),
      c)
        ? (0, t.jsxs)('span', {
            className: 'theme-portrait '.concat(s),
            children: [
              (0, t.jsx)('img', {
                src: '/images/priya.jpeg',
                alt: 'Tulasi Priya Vattikuti',
                width: r,
                height: i,
                loading: n ? 'eager' : 'lazy',
                decoding: 'async',
                className: 'theme-portrait-light',
              }),
              (0, t.jsx)('img', {
                src: '/images/priya.jpeg',
                alt: 'Tulasi Priya Vattikuti',
                width: r,
                height: i,
                loading: 'lazy',
                decoding: 'async',
                className: 'theme-portrait-dark',
                'aria-hidden': 'true',
              }),
            ],
          })
        : (0, t.jsx)('span', { className: 'theme-portrait '.concat(s) });
    }
    e.s(['default', () => r]);
  },
  62349,
  (e) => {
    'use strict';
    function t(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(a);
        'function' == typeof Object.getOwnPropertySymbols &&
          (r = r.concat(
            Object.getOwnPropertySymbols(a).filter(function (e) {
              return Object.getOwnPropertyDescriptor(a, e).enumerable;
            }),
          )),
          r.forEach(function (t) {
            var r;
            (r = a[t]),
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r);
          });
      }
      return e;
    }
    function a(e, t) {
      return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : (function (e, t) {
              var a = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                a.push.apply(a, r);
              }
              return a;
            })(Object(t)).forEach(function (a) {
              Object.defineProperty(
                e,
                a,
                Object.getOwnPropertyDescriptor(t, a),
              );
            }),
        e
      );
    }
    var r = e.i(43476),
      i = e.i(71645);
    let n = [
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
    function s(e, r) {
      switch (r.type) {
        case 'TICK': {
          let i = e.idx,
            s = e.char;
          if (
            (e.char - r.hold >= n[e.idx].length && ((i += 1), (s = 0)),
            i === n.length)
          ) {
            if (r.loopMessage)
              return { idx: 0, message: '', char: 0, isActive: !0 };
            return a(t({}, e), { isActive: !1 });
          }
          return {
            idx: i,
            message: n[i].slice(0, s),
            char: s + 1,
            isActive: !0,
          };
        }
        case 'PAUSE':
          return a(t({}, e), { isActive: !1 });
        case 'RESUME':
          return a(t({}, e), { isActive: e.idx < r.maxIdx });
        default:
          return e;
      }
    }
    function c(e) {
      var t, a;
      let c,
        { loopMessage: l = !1 } = e,
        [o, u] = (0, i.useState)(!1);
      (0, i.useEffect)(() => {
        u(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      }, []);
      let [h, m] = (0, i.useReducer)(s, {
        idx: 0,
        message: '',
        char: 0,
        isActive: !0,
      });
      (0, i.useEffect)(() => {
        o && m({ type: 'PAUSE' });
      }, [o]),
        (t = () => {
          m({ type: 'TICK', loopMessage: l, hold: 50 });
        }),
        (a = h.isActive && !o ? 50 : null),
        (c = (0, i.useRef)(t)),
        (0, i.useEffect)(() => {
          c.current = t;
        }, [t]),
        (0, i.useEffect)(() => {
          if (!a) return;
          let e = setInterval(() => {
            var e;
            return null == (e = c.current) ? void 0 : e.call(c);
          }, a);
          return () => clearInterval(e);
        }, [a]);
      let d = o || '' === h.message ? 'hi' : h.message,
        p =
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))$/.test(d) ||
          0 === d.length,
        f = () => m({ type: 'PAUSE' }),
        y = () => {
          o || m({ type: 'RESUME', maxIdx: n.length });
        },
        g = (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)('span', {
              className: 'contact-email-prefix',
              children: d,
            }),
            (0, r.jsx)('span', {
              className: 'contact-email-domain',
              children: '@abhinavnarne.com',
            }),
          ],
        });
      return (0, r.jsx)('div', {
        className: 'contact-email-container',
        onMouseEnter: f,
        onMouseLeave: y,
        children: p
          ? (0, r.jsx)('a', {
              href: 'mailto:'.concat(d, '@abhinavnarne.com'),
              className: 'contact-email-link',
              onClick: (e) => {
                p || e.preventDefault();
              },
              onKeyDown: (e) => {
                p || ('Enter' !== e.key && ' ' !== e.key) || e.preventDefault();
              },
              onFocus: f,
              onBlur: y,
              children: g,
            })
          : (0, r.jsx)('span', {
              className: 'contact-email-link contact-email-link--invalid',
              'aria-disabled': 'true',
              tabIndex: -1,
              children: g,
            }),
      });
    }
    e.s(['default', () => c], 62349);
  },
]);
