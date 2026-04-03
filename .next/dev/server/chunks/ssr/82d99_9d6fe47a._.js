module.exports = [
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)',
      ),
    );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    if (
      ('TURBOPACK compile-time falsy', 0) //TURBOPACK unreachable
    );
    else {
      if (
        ('TURBOPACK compile-time falsy', 0) //TURBOPACK unreachable
      );
      else {
        if (('TURBOPACK compile-time truthy', 1)) {
          if (('TURBOPACK compile-time truthy', 1)) {
            module.exports = __turbopack_context__.r(
              '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)',
            );
          } //TURBOPACK unreachable
          else;
        } //TURBOPACK unreachable
        else;
      }
    } //# sourceMappingURL=module.compiled.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)',
      ),
    );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['getRevalidateReason', () => getRevalidateReason]);
    function getRevalidateReason(params) {
      if (params.isOnDemandRevalidate) {
        return 'on-demand';
      }
      if (params.isStaticGeneration) {
        return 'stale';
      }
      return undefined;
    } //# sourceMappingURL=utils.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    /**
     * Interop between "export default" and "module.exports".
     */ __turbopack_context__.s(['interopDefault', () => interopDefault]);
    function interopDefault(mod) {
      return mod.default || mod;
    } //# sourceMappingURL=interop-default.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['stripFlightHeaders', () => stripFlightHeaders]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)',
      );
    function stripFlightHeaders(headers) {
      for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'FLIGHT_HEADERS'
      ]) {
        delete headers[header];
      }
    } //# sourceMappingURL=strip-flight-headers.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'HeadersAdapter',
      () => HeadersAdapter,
      'ReadonlyHeadersError',
      () => ReadonlyHeadersError,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)',
      );
    class ReadonlyHeadersError extends Error {
      constructor() {
        super(
          'Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers',
        );
      }
      static callable() {
        throw new ReadonlyHeadersError();
      }
    }
    class HeadersAdapter extends Headers {
      constructor(headers) {
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
          get(target, prop, receiver) {
            // Because this is just an object, we expect that all "get" operations
            // are for properties. If it's a "get" for a symbol, we'll just return
            // the symbol.
            if (typeof prop === 'symbol') {
              return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'ReflectAdapter'
              ].get(target, prop, receiver);
            }
            const lowercased = prop.toLowerCase();
            // Let's find the original casing of the key. This assumes that there is
            // no mixed case keys (e.g. "Content-Type" and "content-type") in the
            // headers object.
            const original = Object.keys(headers).find(
              (o) => o.toLowerCase() === lowercased,
            );
            // If the original casing doesn't exist, return undefined.
            if (typeof original === 'undefined') return;
            // If the original casing exists, return the value.
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'ReflectAdapter'
            ].get(target, original, receiver);
          },
          set(target, prop, value, receiver) {
            if (typeof prop === 'symbol') {
              return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'ReflectAdapter'
              ].set(target, prop, value, receiver);
            }
            const lowercased = prop.toLowerCase();
            // Let's find the original casing of the key. This assumes that there is
            // no mixed case keys (e.g. "Content-Type" and "content-type") in the
            // headers object.
            const original = Object.keys(headers).find(
              (o) => o.toLowerCase() === lowercased,
            );
            // If the original casing doesn't exist, use the prop as the key.
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'ReflectAdapter'
            ].set(target, original ?? prop, value, receiver);
          },
          has(target, prop) {
            if (typeof prop === 'symbol')
              return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'ReflectAdapter'
              ].has(target, prop);
            const lowercased = prop.toLowerCase();
            // Let's find the original casing of the key. This assumes that there is
            // no mixed case keys (e.g. "Content-Type" and "content-type") in the
            // headers object.
            const original = Object.keys(headers).find(
              (o) => o.toLowerCase() === lowercased,
            );
            // If the original casing doesn't exist, return false.
            if (typeof original === 'undefined') return false;
            // If the original casing exists, return true.
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'ReflectAdapter'
            ].has(target, original);
          },
          deleteProperty(target, prop) {
            if (typeof prop === 'symbol')
              return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'ReflectAdapter'
              ].deleteProperty(target, prop);
            const lowercased = prop.toLowerCase();
            // Let's find the original casing of the key. This assumes that there is
            // no mixed case keys (e.g. "Content-Type" and "content-type") in the
            // headers object.
            const original = Object.keys(headers).find(
              (o) => o.toLowerCase() === lowercased,
            );
            // If the original casing doesn't exist, return true.
            if (typeof original === 'undefined') return true;
            // If the original casing exists, delete the property.
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'ReflectAdapter'
            ].deleteProperty(target, original);
          },
        });
      }
      /**
       * Seals a Headers instance to prevent modification by throwing an error when
       * any mutating method is called.
       */ static seal(headers) {
        return new Proxy(headers, {
          get(target, prop, receiver) {
            switch (prop) {
              case 'append':
              case 'delete':
              case 'set':
                return ReadonlyHeadersError.callable;
              default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'ReflectAdapter'
                ].get(target, prop, receiver);
            }
          },
        });
      }
      /**
       * Merges a header value into a string. This stores multiple values as an
       * array, so we need to merge them into a string.
       *
       * @param value a header value
       * @returns a merged header value (a string)
       */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
      }
      /**
       * Creates a Headers instance from a plain object or a Headers instance.
       *
       * @param headers a plain object or a Headers instance
       * @returns a headers instance
       */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
      }
      append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
          this.headers[name] = [existing, value];
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          this.headers[name] = value;
        }
      }
      delete(name) {
        delete this.headers[name];
      }
      get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
      }
      has(name) {
        return typeof this.headers[name] !== 'undefined';
      }
      set(name, value) {
        this.headers[name] = value;
      }
      forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()) {
          callbackfn.call(thisArg, value, name, this);
        }
      }
      *entries() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          // We assert here that this is a string because we got it from the
          // Object.keys() call above.
          const value = this.get(name);
          yield [name, value];
        }
      }
      *keys() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          yield name;
        }
      }
      *values() {
        for (const key of Object.keys(this.headers)) {
          // We assert here that this is a string because we got it from the
          // Object.keys() call above.
          const value = this.get(key);
          yield value;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    } //# sourceMappingURL=headers.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'ApiError',
      () => ApiError,
      'COOKIE_NAME_PRERENDER_BYPASS',
      () => COOKIE_NAME_PRERENDER_BYPASS,
      'COOKIE_NAME_PRERENDER_DATA',
      () => COOKIE_NAME_PRERENDER_DATA,
      'RESPONSE_LIMIT_DEFAULT',
      () => RESPONSE_LIMIT_DEFAULT,
      'SYMBOL_CLEARED_COOKIES',
      () => SYMBOL_CLEARED_COOKIES,
      'SYMBOL_PREVIEW_DATA',
      () => SYMBOL_PREVIEW_DATA,
      'checkIsOnDemandRevalidate',
      () => checkIsOnDemandRevalidate,
      'clearPreviewData',
      () => clearPreviewData,
      'redirect',
      () => redirect,
      'sendError',
      () => sendError,
      'sendStatusCode',
      () => sendStatusCode,
      'setLazyProp',
      () => setLazyProp,
      'wrapApiHandler',
      () => wrapApiHandler,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)',
      );
    function wrapApiHandler(page, handler) {
      return (...args) => {
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'getTracer'
        ])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'getTracer'
        ])().trace(
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'NodeSpan'
          ].runHandler,
          {
            spanName: `executing api route (pages) ${page}`,
          },
          () => handler(...args),
        );
      };
    }
    function sendStatusCode(res, statusCode) {
      res.statusCode = statusCode;
      return res;
    }
    function redirect(res, statusOrUrl, url) {
      if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
      }
      if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(
          new Error(
            `Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`,
          ),
          '__NEXT_ERROR_CODE',
          {
            value: 'E389',
            enumerable: false,
            configurable: true,
          },
        );
      }
      res.writeHead(statusOrUrl, {
        Location: url,
      });
      res.write(url);
      res.end();
      return res;
    }
    function checkIsOnDemandRevalidate(req, previewProps) {
      const headers =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'HeadersAdapter'
        ].from(req.headers);
      const previewModeId = headers.get(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'PRERENDER_REVALIDATE_HEADER'
        ],
      );
      const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
      const revalidateOnlyGenerated = headers.has(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER'
        ],
      );
      return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated,
      };
    }
    const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
    const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
    const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
    const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
    const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
    function clearPreviewData(res, options = {}) {
      if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
      }
      const { serialize } = __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)',
      );
      const previous = res.getHeader('Set-Cookie');
      res.setHeader(`Set-Cookie`, [
        ...(typeof previous === 'string'
          ? [previous]
          : Array.isArray(previous)
            ? previous
            : []),
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
          // To delete a cookie, set `expires` to a date in the past:
          // https://tools.ietf.org/html/rfc6265#section-4.1.1
          // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
          expires: new Date(0),
          httpOnly: true,
          sameSite: ('TURBOPACK compile-time falsy', 0)
            ? 'TURBOPACK unreachable'
            : 'lax',
          secure:
            ('TURBOPACK compile-time value', 'development') !== 'development',
          path: '/',
          ...(options.path !== undefined
            ? {
                path: options.path,
              }
            : undefined),
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
          // To delete a cookie, set `expires` to a date in the past:
          // https://tools.ietf.org/html/rfc6265#section-4.1.1
          // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
          expires: new Date(0),
          httpOnly: true,
          sameSite: ('TURBOPACK compile-time falsy', 0)
            ? 'TURBOPACK unreachable'
            : 'lax',
          secure:
            ('TURBOPACK compile-time value', 'development') !== 'development',
          path: '/',
          ...(options.path !== undefined
            ? {
                path: options.path,
              }
            : undefined),
        }),
      ]);
      Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false,
      });
      return res;
    }
    class ApiError extends Error {
      constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
      }
    }
    function sendError(res, statusCode, message) {
      res.statusCode = statusCode;
      res.statusMessage = message;
      res.end(message);
    }
    function setLazyProp({ req }, prop, getter) {
      const opts = {
        configurable: true,
        enumerable: true,
      };
      const optsReset = {
        ...opts,
        writable: true,
      };
      Object.defineProperty(req, prop, {
        ...opts,
        get: () => {
          const value = getter();
          // we set the property on the object to avoid recalculating it
          Object.defineProperty(req, prop, {
            ...optsReset,
            value,
          });
          return value;
        },
        set: (value) => {
          Object.defineProperty(req, prop, {
            ...optsReset,
            value,
          });
        },
      });
    } //# sourceMappingURL=index.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    /**
     * Parse cookies from the `headers` of request
     * @param req request object
     */ __turbopack_context__.s(['getCookieParser', () => getCookieParser]);
    function getCookieParser(headers) {
      return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
          return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r(
          '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)',
        );
        return parseCookieFn(
          Array.isArray(cookie) ? cookie.join('; ') : cookie,
        );
      };
    } //# sourceMappingURL=get-cookie-parser.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'BaseNextRequest',
      () => BaseNextRequest,
      'BaseNextResponse',
      () => BaseNextResponse,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)',
      );
    class BaseNextRequest {
      constructor(method, url, body) {
        this.method = method;
        this.url = url;
        this.body = body;
      }
      // Utils implemented using the abstract methods above
      get cookies() {
        if (this._cookies) return this._cookies;
        return (this._cookies = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'getCookieParser'
        ])(this.headers)());
      }
    }
    class BaseNextResponse {
      constructor(destination) {
        this.destination = destination;
      }
      // Utils implemented using the abstract methods above
      redirect(destination, statusCode) {
        this.setHeader('Location', destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (
          statusCode ===
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'RedirectStatusCode'
          ].PermanentRedirect
        ) {
          this.setHeader('Refresh', `0;url=${destination}`);
        }
        return this;
      }
    } //# sourceMappingURL=index.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'NodeNextRequest',
      () => NodeNextRequest,
      'NodeNextResponse',
      () => NodeNextResponse,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)',
      );
    let prop;
    class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      'BaseNextRequest'
    ] {
      static #_ =
        (prop =
        _NEXT_REQUEST_META =
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'NEXT_REQUEST_META'
          ]);
      constructor(_req) {
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req),
          (this._req = _req),
          (this.headers = this._req.headers),
          (this.fetchMetrics =
            (_this__req = this._req) == null
              ? void 0
              : _this__req.fetchMetrics),
          (this[_NEXT_REQUEST_META] =
            this._req[
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'NEXT_REQUEST_META'
              ]
            ] || {}),
          (this.streaming = false);
      }
      get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'NEXT_REQUEST_META'
          ]
        ] =
          this[
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'NEXT_REQUEST_META'
            ]
          ];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
      }
      set originalRequest(value) {
        this._req = value;
      }
      /**
       * Returns the request body as a Web Readable Stream. The body here can only
       * be read once as the body will start flowing as soon as the data handler
       * is attached.
       *
       * @internal
       */ stream() {
        if (this.streaming) {
          throw Object.defineProperty(
            new Error(
              'Invariant: NodeNextRequest.stream() can only be called once',
            ),
            '__NEXT_ERROR_CODE',
            {
              value: 'E467',
              enumerable: false,
              configurable: true,
            },
          );
        }
        this.streaming = true;
        return new ReadableStream({
          start: (controller) => {
            this._req.on('data', (chunk) => {
              controller.enqueue(new Uint8Array(chunk));
            });
            this._req.on('end', () => {
              controller.close();
            });
            this._req.on('error', (err) => {
              controller.error(err);
            });
          },
        });
      }
    }
    class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      'BaseNextResponse'
    ] {
      get originalResponse() {
        if (
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'SYMBOL_CLEARED_COOKIES'
          ] in this
        ) {
          this._res[
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'SYMBOL_CLEARED_COOKIES'
            ]
          ] =
            this[
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'SYMBOL_CLEARED_COOKIES'
              ]
            ];
        }
        return this._res;
      }
      constructor(_res) {
        super(_res), (this._res = _res), (this.textBody = undefined);
      }
      get sent() {
        return this._res.finished || this._res.headersSent;
      }
      get statusCode() {
        return this._res.statusCode;
      }
      set statusCode(value) {
        this._res.statusCode = value;
      }
      get statusMessage() {
        return this._res.statusMessage;
      }
      set statusMessage(value) {
        this._res.statusMessage = value;
      }
      setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
      }
      removeHeader(name) {
        this._res.removeHeader(name);
        return this;
      }
      getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [values]).map((value) =>
          value.toString(),
        );
      }
      hasHeader(name) {
        return this._res.hasHeader(name);
      }
      getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(',') : undefined;
      }
      getHeaders() {
        return this._res.getHeaders();
      }
      appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
          this._res.setHeader(name, [...currentValues, value]);
        }
        return this;
      }
      body(value) {
        this.textBody = value;
        return this;
      }
      send() {
        this._res.end(this.textBody);
      }
      onClose(callback) {
        this.originalResponse.on('close', callback);
      }
    }
    var _NEXT_REQUEST_META; //# sourceMappingURL=node.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    /**
     * If set to `incremental`, only those leaf pages that export
     * `experimental_ppr = true` will have partial prerendering enabled. If any
     * page exports this value as `false` or does not export it at all will not
     * have partial prerendering enabled. If set to a boolean, the options for
     * `experimental_ppr` will be ignored.
     */ /**
     * Returns true if partial prerendering is enabled for the application. It does
     * not tell you if a given route has PPR enabled, as that requires analysis of
     * the route's configuration.
     *
     * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
     */ __turbopack_context__.s([
      'checkIsAppPPREnabled',
      () => checkIsAppPPREnabled,
      'checkIsRoutePPREnabled',
      () => checkIsRoutePPREnabled,
    ]);
    function checkIsAppPPREnabled(config) {
      // If the config is undefined, partial prerendering is disabled.
      if (typeof config === 'undefined') return false;
      // If the config is a boolean, use it directly.
      if (typeof config === 'boolean') return config;
      // If the config is a string, it must be 'incremental' to enable partial
      // prerendering.
      if (config === 'incremental') return true;
      return false;
    }
    function checkIsRoutePPREnabled(config) {
      // If the config is undefined, partial prerendering is disabled.
      if (typeof config === 'undefined') return false;
      // If the config is a boolean, use it directly.
      if (typeof config === 'boolean') return config;
      return false;
    } //# sourceMappingURL=ppr.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'isAppPageRouteModule',
      () => isAppPageRouteModule,
      'isAppRouteRouteModule',
      () => isAppRouteRouteModule,
      'isPagesAPIRouteModule',
      () => isPagesAPIRouteModule,
      'isPagesRouteModule',
      () => isPagesRouteModule,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)',
      );
    function isAppRouteRouteModule(routeModule) {
      return (
        routeModule.definition.kind ===
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'RouteKind'
        ].APP_ROUTE
      );
    }
    function isAppPageRouteModule(routeModule) {
      return (
        routeModule.definition.kind ===
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'RouteKind'
        ].APP_PAGE
      );
    }
    function isPagesRouteModule(routeModule) {
      return (
        routeModule.definition.kind ===
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'RouteKind'
        ].PAGES
      );
    }
    function isPagesAPIRouteModule(routeModule) {
      return (
        routeModule.definition.kind ===
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'RouteKind'
        ].PAGES_API
      );
    } //# sourceMappingURL=checks.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    /**
     * For a given page path, this function ensures that there is a leading slash.
     * If there is not a leading slash, one is added, otherwise it is noop.
     */ __turbopack_context__.s([
      'ensureLeadingSlash',
      () => ensureLeadingSlash,
    ]);
    function ensureLeadingSlash(path) {
      return path.startsWith('/') ? path : `/${path}`;
    } //# sourceMappingURL=ensure-leading-slash.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'normalizeAppPath',
      () => normalizeAppPath,
      'normalizeRscURL',
      () => normalizeRscURL,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)',
      );
    function normalizeAppPath(route) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'ensureLeadingSlash'
      ])(
        route.split('/').reduce((pathname, segment, index, segments) => {
          // Empty segments are ignored.
          if (!segment) {
            return pathname;
          }
          // Groups are ignored.
          if (
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'isGroupSegment'
            ])(segment)
          ) {
            return pathname;
          }
          // Parallel segments are ignored.
          if (segment[0] === '@') {
            return pathname;
          }
          // The last segment (if it's a leaf) should be ignored.
          if (
            (segment === 'page' || segment === 'route') &&
            index === segments.length - 1
          ) {
            return pathname;
          }
          return `${pathname}/${segment}`;
        }, ''),
      );
    }
    function normalizeRscURL(url) {
      return url.replace(/\.rsc($|\?)/, '$1');
    } //# sourceMappingURL=app-paths.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'INTERCEPTION_ROUTE_MARKERS',
      () => INTERCEPTION_ROUTE_MARKERS,
      'extractInterceptionRouteInformation',
      () => extractInterceptionRouteInformation,
      'isInterceptionRouteAppPath',
      () => isInterceptionRouteAppPath,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)',
      );
    const INTERCEPTION_ROUTE_MARKERS = ['(..)(..)', '(.)', '(..)', '(...)'];
    function isInterceptionRouteAppPath(path) {
      // TODO-APP: add more serious validation
      return (
        path
          .split('/')
          .find((segment) =>
            INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m)),
          ) !== undefined
      );
    }
    function extractInterceptionRouteInformation(path) {
      let interceptingRoute;
      let marker;
      let interceptedRoute;
      for (const segment of path.split('/')) {
        marker = INTERCEPTION_ROUTE_MARKERS.find((m) => segment.startsWith(m));
        if (marker) {
          [interceptingRoute, interceptedRoute] = path.split(marker, 2);
          break;
        }
      }
      if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(
          new Error(
            `Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`,
          ),
          '__NEXT_ERROR_CODE',
          {
            value: 'E269',
            enumerable: false,
            configurable: true,
          },
        );
      }
      interceptingRoute = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'normalizeAppPath'
      ])(interceptingRoute); // normalize the path, e.g. /(blog)/feed -> /feed
      switch (marker) {
        case '(.)':
          // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
          if (interceptingRoute === '/') {
            interceptedRoute = `/${interceptedRoute}`;
          } else {
            interceptedRoute = interceptingRoute + '/' + interceptedRoute;
          }
          break;
        case '(..)':
          // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
          if (interceptingRoute === '/') {
            throw Object.defineProperty(
              new Error(
                `Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`,
              ),
              '__NEXT_ERROR_CODE',
              {
                value: 'E207',
                enumerable: false,
                configurable: true,
              },
            );
          }
          interceptedRoute = interceptingRoute
            .split('/')
            .slice(0, -1)
            .concat(interceptedRoute)
            .join('/');
          break;
        case '(...)':
          // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
          interceptedRoute = '/' + interceptedRoute;
          break;
        case '(..)(..)':
          // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
          const splitInterceptingRoute = interceptingRoute.split('/');
          if (splitInterceptingRoute.length <= 2) {
            throw Object.defineProperty(
              new Error(
                `Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`,
              ),
              '__NEXT_ERROR_CODE',
              {
                value: 'E486',
                enumerable: false,
                configurable: true,
              },
            );
          }
          interceptedRoute = splitInterceptingRoute
            .slice(0, -2)
            .concat(interceptedRoute)
            .join('/');
          break;
        default:
          throw Object.defineProperty(
            new Error('Invariant: unexpected marker'),
            '__NEXT_ERROR_CODE',
            {
              value: 'E112',
              enumerable: false,
              configurable: true,
            },
          );
      }
      return {
        interceptingRoute,
        interceptedRoute,
      };
    } //# sourceMappingURL=interception-routes.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'getParamProperties',
      () => getParamProperties,
      'getSegmentParam',
      () => getSegmentParam,
      'isCatchAll',
      () => isCatchAll,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)',
      );
    function getSegmentParam(segment) {
      const interceptionMarker =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'INTERCEPTION_ROUTE_MARKERS'
        ].find((marker) => segment.startsWith(marker));
      // if an interception marker is part of the path segment, we need to jump ahead
      // to the relevant portion for param parsing
      if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
      }
      if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
          // TODO-APP: Optional catchall does not currently work with parallel routes,
          // so for now aren't handling a potential interception marker.
          paramType: 'optional-catchall',
          paramName: segment.slice(5, -2),
        };
      }
      if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
          paramType: interceptionMarker
            ? `catchall-intercepted-${interceptionMarker}`
            : 'catchall',
          paramName: segment.slice(4, -1),
        };
      }
      if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
          paramType: interceptionMarker
            ? `dynamic-intercepted-${interceptionMarker}`
            : 'dynamic',
          paramName: segment.slice(1, -1),
        };
      }
      return null;
    }
    function isCatchAll(type) {
      return (
        type === 'catchall' ||
        type === 'catchall-intercepted-(..)(..)' ||
        type === 'catchall-intercepted-(.)' ||
        type === 'catchall-intercepted-(..)' ||
        type === 'catchall-intercepted-(...)' ||
        type === 'optional-catchall'
      );
    }
    function getParamProperties(paramType) {
      let repeat = false;
      let optional = false;
      switch (paramType) {
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
          repeat = true;
          break;
        case 'optional-catchall':
          repeat = true;
          optional = true;
          break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
          break;
        default:
          paramType;
      }
      return {
        repeat,
        optional,
      };
    } //# sourceMappingURL=get-segment-param.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'isInterceptionAppRoute',
      () => isInterceptionAppRoute,
      'isNormalizedAppRoute',
      () => isNormalizedAppRoute,
      'parseAppRoute',
      () => parseAppRoute,
      'parseAppRouteSegment',
      () => parseAppRouteSegment,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)',
      );
    function parseAppRouteSegment(segment) {
      if (segment === '') {
        return null;
      }
      // Check if the segment starts with an interception marker
      const interceptionMarker =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'INTERCEPTION_ROUTE_MARKERS'
        ].find((m) => segment.startsWith(m));
      const param = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'getSegmentParam'
      ])(segment);
      if (param) {
        return {
          type: 'dynamic',
          name: segment,
          param,
          interceptionMarker,
        };
      } else if (segment.startsWith('(') && segment.endsWith(')')) {
        return {
          type: 'route-group',
          name: segment,
          interceptionMarker,
        };
      } else if (segment.startsWith('@')) {
        return {
          type: 'parallel-route',
          name: segment,
          interceptionMarker,
        };
      } else {
        return {
          type: 'static',
          name: segment,
          interceptionMarker,
        };
      }
    }
    function isNormalizedAppRoute(route) {
      return route.normalized;
    }
    function isInterceptionAppRoute(route) {
      return (
        route.interceptionMarker !== undefined &&
        route.interceptingRoute !== undefined &&
        route.interceptedRoute !== undefined
      );
    }
    function parseAppRoute(pathname, normalized) {
      const pathnameSegments = pathname.split('/').filter(Boolean);
      // Build segments array with static and dynamic segments
      const segments = [];
      // Parse if this is an interception route.
      let interceptionMarker;
      let interceptingRoute;
      let interceptedRoute;
      for (const segment of pathnameSegments) {
        // Parse the segment into an AppSegment.
        const appSegment = parseAppRouteSegment(segment);
        if (!appSegment) {
          continue;
        }
        if (
          normalized &&
          (appSegment.type === 'route-group' ||
            appSegment.type === 'parallel-route')
        ) {
          throw Object.defineProperty(
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'InvariantError'
            ](
              `${pathname} is being parsed as a normalized route, but it has a route group or parallel route segment.`,
            ),
            '__NEXT_ERROR_CODE',
            {
              value: 'E923',
              enumerable: false,
              configurable: true,
            },
          );
        }
        segments.push(appSegment);
        if (appSegment.interceptionMarker) {
          const parts = pathname.split(appSegment.interceptionMarker);
          if (parts.length !== 2) {
            throw Object.defineProperty(
              new Error(`Invalid interception route: ${pathname}`),
              '__NEXT_ERROR_CODE',
              {
                value: 'E924',
                enumerable: false,
                configurable: true,
              },
            );
          }
          interceptingRoute = normalized
            ? parseAppRoute(parts[0], true)
            : parseAppRoute(parts[0], false);
          interceptedRoute = normalized
            ? parseAppRoute(parts[1], true)
            : parseAppRoute(parts[1], false);
          interceptionMarker = appSegment.interceptionMarker;
        }
      }
      const dynamicSegments = segments.filter(
        (segment) => segment.type === 'dynamic',
      );
      return {
        normalized,
        pathname,
        segments,
        dynamicSegments,
        interceptionMarker,
        interceptingRoute,
        interceptedRoute,
      };
    } //# sourceMappingURL=app.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['parseLoaderTree', () => parseLoaderTree]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)',
      );
    function parseLoaderTree(tree) {
      const [segment, parallelRoutes, modules] = tree;
      const { layout, template } = modules;
      let { page } = modules;
      // a __DEFAULT__ segment means that this route didn't match any of the
      // segments in the route, so we should use the default page
      page =
        segment ===
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'DEFAULT_SEGMENT_KEY'
        ]
          ? modules.defaultPage
          : page;
      const conventionPath = layout?.[1] || template?.[1] || page?.[1];
      return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */ conventionPath,
        parallelRoutes,
      };
    } //# sourceMappingURL=parse-loader-tree.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/interception-prefix-from-param-type.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'interceptionPrefixFromParamType',
      () => interceptionPrefixFromParamType,
    ]);
    function interceptionPrefixFromParamType(paramType) {
      switch (paramType) {
        case 'catchall-intercepted-(..)(..)':
        case 'dynamic-intercepted-(..)(..)':
          return '(..)(..)';
        case 'catchall-intercepted-(.)':
        case 'dynamic-intercepted-(.)':
          return '(.)';
        case 'catchall-intercepted-(..)':
        case 'dynamic-intercepted-(..)':
          return '(..)';
        case 'catchall-intercepted-(...)':
        case 'dynamic-intercepted-(...)':
          return '(...)';
        case 'catchall':
        case 'dynamic':
        case 'optional-catchall':
        default:
          return null;
      }
    } //# sourceMappingURL=interception-prefix-from-param-type.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['resolveParamValue', () => resolveParamValue]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/interception-prefix-from-param-type.js [app-rsc] (ecmascript)',
      );
    /**
     * Extracts the param value from a path segment, handling interception markers
     * based on the expected param type.
     *
     * @param pathSegment - The path segment to extract the value from
     * @param params - The current params object for resolving dynamic param references
     * @param paramType - The expected param type which may include interception marker info
     * @returns The extracted param value
     */ function getParamValueFromSegment(pathSegment, params, paramType) {
      // If the segment is dynamic, resolve it from the params object
      if (pathSegment.type === 'dynamic') {
        return params[pathSegment.param.paramName];
      }
      // If the paramType indicates this is an intercepted param, strip the marker
      // that matches the interception marker in the param type
      const interceptionPrefix = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'interceptionPrefixFromParamType'
      ])(paramType);
      if (interceptionPrefix === pathSegment.interceptionMarker) {
        return pathSegment.name.replace(pathSegment.interceptionMarker, '');
      }
      // For static segments, use the name
      return pathSegment.name;
    }
    function resolveParamValue(paramName, paramType, depth, route, params) {
      switch (paramType) {
        case 'catchall':
        case 'optional-catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
          // For catchall routes, derive from pathname using depth to determine
          // which segments to use
          const processedSegments = [];
          // Process segments to handle any embedded dynamic params
          for (let index = depth; index < route.segments.length; index++) {
            const pathSegment = route.segments[index];
            if (pathSegment.type === 'static') {
              let value = pathSegment.name;
              // For intercepted catch-all params, strip the marker from the first segment
              const interceptionPrefix = (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'interceptionPrefixFromParamType'
              ])(paramType);
              if (
                interceptionPrefix &&
                index === depth &&
                interceptionPrefix === pathSegment.interceptionMarker
              ) {
                // Strip the interception marker from the value
                value = value.replace(pathSegment.interceptionMarker, '');
              }
              processedSegments.push(value);
            } else {
              // If the segment is a param placeholder, check if we have its value
              if (!params.hasOwnProperty(pathSegment.param.paramName)) {
                // If the segment is an optional catchall, we can break out of the
                // loop because it's optional!
                if (pathSegment.param.paramType === 'optional-catchall') {
                  break;
                }
                // Unknown param placeholder in pathname - can't derive full value
                return undefined;
              }
              // If the segment matches a param, use the param value
              // We don't encode values here as that's handled during retrieval.
              const paramValue = params[pathSegment.param.paramName];
              if (Array.isArray(paramValue)) {
                processedSegments.push(...paramValue);
              } else {
                processedSegments.push(paramValue);
              }
            }
          }
          if (processedSegments.length > 0) {
            return processedSegments;
          } else if (paramType === 'optional-catchall') {
            return undefined;
          } else {
            // We shouldn't be able to match a catchall segment without any path
            // segments if it's not an optional catchall
            throw Object.defineProperty(
              new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'InvariantError'
              ](
                `Unexpected empty path segments match for a route "${route.pathname}" with param "${paramName}" of type "${paramType}"`,
              ),
              '__NEXT_ERROR_CODE',
              {
                value: 'E931',
                enumerable: false,
                configurable: true,
              },
            );
          }
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
          // For regular dynamic parameters, take the segment at this depth
          if (depth < route.segments.length) {
            const pathSegment = route.segments[depth];
            // Check if the segment at this depth is a placeholder for an unknown param
            if (
              pathSegment.type === 'dynamic' &&
              !params.hasOwnProperty(pathSegment.param.paramName)
            ) {
              // The segment is a placeholder like [category] and we don't have the value
              return undefined;
            }
            // If the segment matches a param, use the param value from params object
            // Otherwise it's a static segment, just use it directly
            // We don't encode values here as that's handled during retrieval
            return getParamValueFromSegment(pathSegment, params, paramType);
          }
          return undefined;
        default:
          paramType;
      }
    } //# sourceMappingURL=resolve-param-value.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'extractPathnameRouteParamSegmentsFromLoaderTree',
      () => extractPathnameRouteParamSegmentsFromLoaderTree,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)',
      );
    /**
     * Validates that the static segments in currentPath match the corresponding
     * segments in targetSegments. This ensures we only extract dynamic parameters
     * that are part of the target pathname structure.
     *
     * Segments are compared literally - interception markers like "(.)photo" are
     * part of the pathname and must match exactly.
     *
     * @example
     * // Matching paths
     * currentPath: ['blog', '(.)photo']
     * targetSegments: ['blog', '(.)photo', '[id]']
     * → Returns true (both static segments match exactly)
     *
     * @example
     * // Non-matching paths
     * currentPath: ['blog', '(.)photo']
     * targetSegments: ['blog', 'photo', '[id]']
     * → Returns false (segments don't match - marker is part of pathname)
     *
     * @param currentPath - The accumulated path segments from the loader tree
     * @param targetSegments - The target pathname split into segments
     * @returns true if all static segments match, false otherwise
     */ function validatePrefixMatch(currentPath, route) {
      for (let i = 0; i < currentPath.length; i++) {
        const pathSegment = currentPath[i];
        const targetPathSegment = route.segments[i];
        // Type mismatch - one is static, one is dynamic
        if (pathSegment.type !== targetPathSegment.type) {
          return false;
        }
        // One has an interception marker, the other doesn't.
        if (
          pathSegment.interceptionMarker !==
          targetPathSegment.interceptionMarker
        ) {
          return false;
        }
        // Both are static but names don't match
        if (
          pathSegment.type === 'static' &&
          targetPathSegment.type === 'static' &&
          pathSegment.name !== targetPathSegment.name
        ) {
          return false;
        } else if (
          pathSegment.type === 'dynamic' &&
          targetPathSegment.type === 'dynamic' &&
          pathSegment.param.paramType !== targetPathSegment.param.paramType &&
          pathSegment.param.paramName !== targetPathSegment.param.paramName
        ) {
          return false;
        }
      }
      return true;
    }
    function extractPathnameRouteParamSegmentsFromLoaderTree(
      loaderTree,
      route,
    ) {
      const pathnameRouteParamSegments = [];
      const params = {};
      // BFS traversal with depth and path tracking
      const queue = [
        {
          tree: loaderTree,
          depth: 0,
          currentPath: [],
        },
      ];
      while (queue.length > 0) {
        const { tree, depth, currentPath } = queue.shift();
        const { segment, parallelRoutes } = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'parseLoaderTree'
        ])(tree);
        // Build the path for the current node
        let updatedPath = currentPath;
        let nextDepth = depth;
        const appSegment = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'parseAppRouteSegment'
        ])(segment);
        // Only add to path if it's a real segment that appears in the URL
        // Route groups and parallel markers don't contribute to URL pathname
        if (
          appSegment &&
          appSegment.type !== 'route-group' &&
          appSegment.type !== 'parallel-route'
        ) {
          updatedPath = [...currentPath, appSegment];
          nextDepth = depth + 1;
        }
        // Check if this segment has a param and matches the target pathname at this depth
        if ((appSegment == null ? void 0 : appSegment.type) === 'dynamic') {
          const { paramName, paramType } = appSegment.param;
          // Check if this segment is at the correct depth in the target pathname
          // A segment matches if:
          // 1. There's a dynamic segment at this depth in the pathname
          // 2. The parameter names match (e.g., [id] matches [id], not [category])
          // 3. The static segments leading up to this point match (prefix check)
          if (depth < route.segments.length) {
            const targetSegment = route.segments[depth];
            // Match if the target pathname has a dynamic segment at this depth
            if (targetSegment.type === 'dynamic') {
              // Check that parameter names match exactly
              // This prevents [category] from matching against /[id]
              if (paramName !== targetSegment.param.paramName) {
                continue; // Different param names, skip this segment
              }
              // Validate that the path leading up to this dynamic segment matches
              // the target pathname. This prevents false matches like extracting
              // [slug] from "/news/[slug]" when the tree has "/blog/[slug]"
              if (validatePrefixMatch(currentPath, route)) {
                pathnameRouteParamSegments.push({
                  name: segment,
                  paramName,
                  paramType,
                });
              }
            }
          }
          // Resolve parameter value if it's not already known.
          if (!params.hasOwnProperty(paramName)) {
            const paramValue = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'resolveParamValue'
            ])(paramName, paramType, depth, route, params);
            if (paramValue !== undefined) {
              params[paramName] = paramValue;
            }
          }
        }
        // Continue traversing all parallel routes to find matching segments
        for (const parallelRoute of Object.values(parallelRoutes)) {
          queue.push({
            tree: parallelRoute,
            depth: nextDepth,
            currentPath: updatedPath,
          });
        }
      }
      return {
        pathnameRouteParamSegments,
        params,
      };
    } //# sourceMappingURL=extract-pathname-route-param-segments-from-loader-tree.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'encodeParam',
      () => encodeParam,
      'extractPathnameRouteParamSegments',
      () => extractPathnameRouteParamSegments,
      'extractPathnameRouteParamSegmentsFromSegments',
      () => extractPathnameRouteParamSegmentsFromSegments,
      'normalizePathname',
      () => normalizePathname,
      'resolveRouteParamsFromTree',
      () => resolveRouteParamsFromTree,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [app-rsc] (ecmascript)',
      );
    function encodeParam(value, encoder) {
      let replaceValue;
      if (Array.isArray(value)) {
        replaceValue = value.map(encoder).join('/');
      } else {
        replaceValue = encoder(value);
      }
      return replaceValue;
    }
    function normalizePathname(pathname) {
      return pathname.replace(/\\/g, '/').replace(/(?!^)\/$/, '');
    }
    function extractPathnameRouteParamSegments(routeModule, segments, route) {
      // For AppPageRouteModule, use the loaderTree traversal approach
      if (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'isAppPageRouteModule'
        ])(routeModule)
      ) {
        const { pathnameRouteParamSegments } = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'extractPathnameRouteParamSegmentsFromLoaderTree'
        ])(routeModule.userland.loaderTree, route);
        return pathnameRouteParamSegments;
      }
      return extractPathnameRouteParamSegmentsFromSegments(segments);
    }
    function extractPathnameRouteParamSegmentsFromSegments(segments) {
      // TODO: should we consider what values are already present in the page?
      // For AppRouteRouteModule, filter the segments array to get the route params
      // that contribute to the pathname.
      const result = [];
      for (const segment of segments) {
        // Skip segments without param info.
        if (!segment.paramName || !segment.paramType) continue;
        // Collect all the route param keys that contribute to the pathname.
        result.push({
          name: segment.name,
          paramName: segment.paramName,
          paramType: segment.paramType,
        });
      }
      return result;
    }
    function resolveRouteParamsFromTree(
      loaderTree,
      params,
      route,
      fallbackRouteParams,
    ) {
      // Stack-based traversal with depth tracking
      const stack = [
        {
          tree: loaderTree,
          depth: 0,
        },
      ];
      while (stack.length > 0) {
        const { tree, depth } = stack.pop();
        const { segment, parallelRoutes } = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'parseLoaderTree'
        ])(tree);
        const appSegment = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'parseAppRouteSegment'
        ])(segment);
        // If this segment is a route parameter, then we should process it if it's
        // not already known and is not already marked as a fallback route param.
        if (
          (appSegment == null ? void 0 : appSegment.type) === 'dynamic' &&
          !params.hasOwnProperty(appSegment.param.paramName) &&
          !fallbackRouteParams.some(
            (param) => param.paramName === appSegment.param.paramName,
          )
        ) {
          const { paramName, paramType } = appSegment.param;
          const paramValue = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'resolveParamValue'
          ])(paramName, paramType, depth, route, params);
          if (paramValue !== undefined) {
            params[paramName] = paramValue;
          } else if (paramType !== 'optional-catchall') {
            // If we couldn't resolve the param, mark it as a fallback
            fallbackRouteParams.push({
              paramName,
              paramType,
            });
          }
        }
        // Calculate next depth - increment if this is not a route group and not empty
        let nextDepth = depth;
        if (
          appSegment &&
          appSegment.type !== 'route-group' &&
          appSegment.type !== 'parallel-route'
        ) {
          nextDepth++;
        }
        // Add all parallel routes to the stack for processing.
        for (const parallelRoute of Object.values(parallelRoutes)) {
          stack.push({
            tree: parallelRoute,
            depth: nextDepth,
          });
        }
      }
    } //# sourceMappingURL=utils.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['dynamicParamTypes', () => dynamicParamTypes]);
    const dynamicParamTypes = {
      catchall: 'c',
      'catchall-intercepted-(..)(..)': 'ci(..)(..)',
      'catchall-intercepted-(.)': 'ci(.)',
      'catchall-intercepted-(..)': 'ci(..)',
      'catchall-intercepted-(...)': 'ci(...)',
      'optional-catchall': 'oc',
      dynamic: 'd',
      'dynamic-intercepted-(..)(..)': 'di(..)(..)',
      'dynamic-intercepted-(.)': 'di(.)',
      'dynamic-intercepted-(..)': 'di(..)',
      'dynamic-intercepted-(...)': 'di(...)',
    }; //# sourceMappingURL=get-short-dynamic-param-type.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'createOpaqueFallbackRouteParams',
      () => createOpaqueFallbackRouteParams,
      'getFallbackRouteParams',
      () => getFallbackRouteParams,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/routes/app.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/static-paths/app/extract-pathname-route-param-segments-from-loader-tree.js [app-rsc] (ecmascript)',
      );
    function createOpaqueFallbackRouteParams(fallbackRouteParams) {
      // If there are no fallback route params, we can return early.
      if (fallbackRouteParams.length === 0) return null;
      // As we're creating unique keys for each of the dynamic route params, we only
      // need to generate a unique ID once per request because each of the keys will
      // be also be unique.
      const uniqueID = Math.random().toString(16).slice(2);
      const keys = new Map();
      // Generate a unique key for the fallback route param, if this key is found
      // in the static output, it represents a bug in cache components.
      for (const { paramName, paramType } of fallbackRouteParams) {
        keys.set(paramName, [
          `%%drp:${paramName}:${uniqueID}%%`,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'dynamicParamTypes'
          ][paramType],
        ]);
      }
      return keys;
    }
    function getFallbackRouteParams(page, routeModule) {
      const route = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'parseAppRoute'
      ])(page, true);
      // Extract the pathname-contributing segments from the loader tree. This
      // mirrors the logic in buildAppStaticPaths where we determine which segments
      // actually contribute to the pathname.
      const { pathnameRouteParamSegments, params } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$app$2f$extract$2d$pathname$2d$route$2d$param$2d$segments$2d$from$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'extractPathnameRouteParamSegmentsFromLoaderTree'
      ])(routeModule.userland.loaderTree, route);
      // Create fallback route params for the pathname segments.
      const fallbackRouteParams = pathnameRouteParamSegments.map(
        ({ paramName, paramType }) => ({
          paramName,
          paramType,
        }),
      );
      // Resolve route params from the loader tree. This mutates the
      // fallbackRouteParams array to add any route params that are
      // unknown at request time.
      //
      // The page parameter contains placeholders like [slug], which helps
      // resolveRouteParamsFromTree determine which params are unknown.
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'resolveRouteParamsFromTree'
      ])(
        routeModule.userland.loaderTree,
        params,
        route,
        fallbackRouteParams, // Will be mutated to add route params
      );
      // Convert the fallback route params to an opaque format that can be safely
      // used in the postponed state without exposing implementation details.
      return createOpaqueFallbackRouteParams(fallbackRouteParams);
    } //# sourceMappingURL=fallback-params.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'getClientReferenceManifest',
      () => getClientReferenceManifest,
      'getServerActionsManifest',
      () => getServerActionsManifest,
      'getServerModuleMap',
      () => getServerModuleMap,
      'selectWorkerForForwarding',
      () => selectWorkerForForwarding,
      'setManifestsSingleton',
      () => setManifestsSingleton,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ =
      __turbopack_context__.i(
        '[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)',
      );
    // This is a global singleton that is, among other things, also used to
    // encode/decode bound args of server function closures. This can't be using a
    // AsyncLocalStorage as it might happen at the module level.
    const MANIFESTS_SINGLETON = Symbol.for('next.server.manifests');
    const globalThisWithManifests = globalThis;
    function createProxiedClientReferenceManifest(
      clientReferenceManifestsPerRoute,
    ) {
      const createMappingProxy = (prop) => {
        return new Proxy(
          {},
          {
            get(_, id) {
              const workStore =
                __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__[
                  'workAsyncStorage'
                ].getStore();
              if (workStore) {
                const currentManifest = clientReferenceManifestsPerRoute.get(
                  workStore.route,
                );
                if (
                  currentManifest == null ? void 0 : currentManifest[prop][id]
                ) {
                  return currentManifest[prop][id];
                }
                // In development, we also check all other manifests to see if the
                // module exists there. This is to support a scenario where React's
                // I/O tracking (dev-only) creates a connection from one page to
                // another through an emitted async I/O node that references client
                // components from the other page, e.g. in owner props.
                // TODO: Maybe we need to add a `debugBundlerConfig` option to React
                // to avoid this workaround. The current workaround has the
                // disadvantage that one might accidentally or intentionally share
                // client references across pages (e.g. by storing them in a global
                // variable), which would then only be caught in production.
                if (('TURBOPACK compile-time truthy', 1)) {
                  for (const [
                    route,
                    manifest,
                  ] of clientReferenceManifestsPerRoute) {
                    if (route === workStore.route) {
                      continue;
                    }
                    const entry = manifest[prop][id];
                    if (entry !== undefined) {
                      return entry;
                    }
                  }
                }
              } else {
                // If there's no work store defined, we can assume that a client
                // reference manifest is needed during module evaluation, e.g. to
                // create a server function using a higher-order function. This
                // might also use client components which need to be serialized by
                // Flight, and therefore client references need to be resolvable. In
                // that case we search all page manifests to find the module.
                for (const manifest of clientReferenceManifestsPerRoute.values()) {
                  const entry = manifest[prop][id];
                  if (entry !== undefined) {
                    return entry;
                  }
                }
              }
              return undefined;
            },
          },
        );
      };
      const mappingProxies = new Map();
      return new Proxy(
        {},
        {
          get(_, prop) {
            const workStore =
              __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__[
                'workAsyncStorage'
              ].getStore();
            switch (prop) {
              case 'moduleLoading':
              case 'entryCSSFiles':
              case 'entryJSFiles': {
                if (!workStore) {
                  throw Object.defineProperty(
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'InvariantError'
                    ](`Cannot access "${prop}" without a work store.`),
                    '__NEXT_ERROR_CODE',
                    {
                      value: 'E952',
                      enumerable: false,
                      configurable: true,
                    },
                  );
                }
                const currentManifest = clientReferenceManifestsPerRoute.get(
                  workStore.route,
                );
                if (!currentManifest) {
                  throw Object.defineProperty(
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'InvariantError'
                    ](
                      `The client reference manifest for route "${workStore.route}" does not exist.`,
                    ),
                    '__NEXT_ERROR_CODE',
                    {
                      value: 'E951',
                      enumerable: false,
                      configurable: true,
                    },
                  );
                }
                return currentManifest[prop];
              }
              case 'clientModules':
              case 'rscModuleMapping':
              case 'edgeRscModuleMapping':
              case 'ssrModuleMapping':
              case 'edgeSSRModuleMapping': {
                let proxy = mappingProxies.get(prop);
                if (!proxy) {
                  proxy = createMappingProxy(prop);
                  mappingProxies.set(prop, proxy);
                }
                return proxy;
              }
              default: {
                throw Object.defineProperty(
                  new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'InvariantError'
                  ](
                    `This is a proxied client reference manifest. The property "${String(prop)}" is not handled.`,
                  ),
                  '__NEXT_ERROR_CODE',
                  {
                    value: 'E953',
                    enumerable: false,
                    configurable: true,
                  },
                );
              }
            }
          },
        },
      );
    }
    /**
     * This function creates a Flight-acceptable server module map proxy from our
     * Server Reference Manifest similar to our client module map. This is because
     * our manifest contains a lot of internal Next.js data that are relevant to the
     * runtime, workers, etc. that React doesn't need to know.
     */ function createServerModuleMap() {
      return new Proxy(
        {},
        {
          get: (_, id) => {
            var _getServerActionsManifest__id, _getServerActionsManifest_;
            const workers =
              (_getServerActionsManifest_ =
                getServerActionsManifest()[
                  ('TURBOPACK compile-time falsy', 0)
                    ? 'TURBOPACK unreachable'
                    : 'node'
                ]) == null
                ? void 0
                : (_getServerActionsManifest__id =
                      _getServerActionsManifest_[id]) == null
                  ? void 0
                  : _getServerActionsManifest__id.workers;
            if (!workers) {
              return undefined;
            }
            const workStore =
              __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__[
                'workAsyncStorage'
              ].getStore();
            let workerEntry;
            if (workStore) {
              workerEntry = workers[normalizeWorkerPageName(workStore.page)];
            } else {
              // If there's no work store defined, we can assume that a server
              // module map is needed during module evaluation, e.g. to create a
              // server action using a higher-order function. Therefore it should be
              // safe to return any entry from the manifest that matches the action
              // ID. They all refer to the same module ID, which must also exist in
              // the current page bundle. TODO: This is currently not guaranteed in
              // Turbopack, and needs to be fixed.
              workerEntry = Object.values(workers).at(0);
            }
            if (!workerEntry) {
              return undefined;
            }
            const { moduleId, async } = workerEntry;
            return {
              id: moduleId,
              name: id,
              chunks: [],
              async,
            };
          },
        },
      );
    }
    /**
     * The flight entry loader keys actions by bundlePath. bundlePath corresponds
     * with the relative path (including 'app') to the page entrypoint.
     */ function normalizeWorkerPageName(pageName) {
      if (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'pathHasPrefix'
        ])(pageName, 'app')
      ) {
        return pageName;
      }
      return 'app' + pageName;
    }
    /**
     * Converts a bundlePath (relative path to the entrypoint) to a routable page
     * name.
     */ function denormalizeWorkerPageName(bundlePath) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'normalizeAppPath'
      ])(
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'removePathPrefix'
        ])(bundlePath, 'app'),
      );
    }
    function selectWorkerForForwarding(actionId, pageName) {
      var _serverActionsManifest__actionId;
      const serverActionsManifest = getServerActionsManifest();
      const workers =
        (_serverActionsManifest__actionId =
          serverActionsManifest[
            ('TURBOPACK compile-time falsy', 0)
              ? 'TURBOPACK unreachable'
              : 'node'
          ][actionId]) == null
          ? void 0
          : _serverActionsManifest__actionId.workers;
      // There are no workers to handle this action, nothing to forward to.
      if (!workers) {
        return;
      }
      // If there is an entry for the current page, we don't need to forward.
      if (workers[normalizeWorkerPageName(pageName)]) {
        return;
      }
      // Otherwise, grab the first worker that has a handler for this action id.
      return denormalizeWorkerPageName(Object.keys(workers)[0]);
    }
    function setManifestsSingleton({
      page,
      clientReferenceManifest,
      serverActionsManifest,
    }) {
      const existingSingleton = globalThisWithManifests[MANIFESTS_SINGLETON];
      if (existingSingleton) {
        existingSingleton.clientReferenceManifestsPerRoute.set(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'normalizeAppPath'
          ])(page),
          clientReferenceManifest,
        );
        existingSingleton.serverActionsManifest = serverActionsManifest;
      } else {
        const clientReferenceManifestsPerRoute = new Map([
          [
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'normalizeAppPath'
            ])(page),
            clientReferenceManifest,
          ],
        ]);
        const proxiedClientReferenceManifest =
          createProxiedClientReferenceManifest(
            clientReferenceManifestsPerRoute,
          );
        globalThisWithManifests[MANIFESTS_SINGLETON] = {
          clientReferenceManifestsPerRoute,
          proxiedClientReferenceManifest,
          serverActionsManifest,
          serverModuleMap: createServerModuleMap(),
        };
      }
    }
    function getManifestsSingleton() {
      const manifestSingleton = globalThisWithManifests[MANIFESTS_SINGLETON];
      if (!manifestSingleton) {
        throw Object.defineProperty(
          new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'InvariantError'
          ]('The manifests singleton was not initialized.'),
          '__NEXT_ERROR_CODE',
          {
            value: 'E950',
            enumerable: false,
            configurable: true,
          },
        );
      }
      return manifestSingleton;
    }
    function getClientReferenceManifest() {
      return getManifestsSingleton().proxiedClientReferenceManifest;
    }
    function getServerActionsManifest() {
      return getManifestsSingleton().serverActionsManifest;
    }
    function getServerModuleMap() {
      return getManifestsSingleton().serverModuleMap;
    } //# sourceMappingURL=manifests-singleton.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    // This regex contains the bots that we need to do a blocking render for and can't safely stream the response
    // due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
    // Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
    // as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
    __turbopack_context__.s([
      'HTML_LIMITED_BOT_UA_RE',
      () => HTML_LIMITED_BOT_UA_RE,
    ]);
    const HTML_LIMITED_BOT_UA_RE =
      /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'HTML_LIMITED_BOT_UA_RE_STRING',
      () => HTML_LIMITED_BOT_UA_RE_STRING,
      'getBotType',
      () => getBotType,
      'isBot',
      () => isBot,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)',
      );
    // Bot crawler that will spin up a headless browser and execute JS.
    // Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
    // x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
    // This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
    const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
    const HTML_LIMITED_BOT_UA_RE_STRING =
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'HTML_LIMITED_BOT_UA_RE'
      ].source;
    function isDomBotUA(userAgent) {
      return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
    }
    function isHtmlLimitedBotUA(userAgent) {
      return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'HTML_LIMITED_BOT_UA_RE'
      ].test(userAgent);
    }
    function isBot(userAgent) {
      return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
    }
    function getBotType(userAgent) {
      if (isDomBotUA(userAgent)) {
        return 'dom';
      }
      if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
      }
      return undefined;
    } //# sourceMappingURL=is-bot.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'isHtmlBotRequest',
      () => isHtmlBotRequest,
      'shouldServeStreamingMetadata',
      () => shouldServeStreamingMetadata,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>',
      );
    function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
      const blockingMetadataUARegex = new RegExp(
        htmlLimitedBots ||
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
            'HTML_LIMITED_BOT_UA_RE_STRING'
          ],
        'i',
      );
      // Only block metadata for HTML-limited bots
      if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
      }
      return true;
    }
    function isHtmlBotRequest(req) {
      const ua = req.headers['user-agent'] || '';
      const botType = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
        'getBotType'
      ])(ua);
      return botType === 'html';
    } //# sourceMappingURL=streaming-metadata.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'getIsPossibleServerAction',
      () => getIsPossibleServerAction,
      'getServerActionRequestMetadata',
      () => getServerActionRequestMetadata,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)',
      );
    function getServerActionRequestMetadata(req) {
      let actionId;
      let contentType;
      if (req.headers instanceof Headers) {
        actionId =
          req.headers.get(
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'ACTION_HEADER'
            ],
          ) ?? null;
        contentType = req.headers.get('content-type');
      } else {
        actionId =
          req.headers[
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'ACTION_HEADER'
            ]
          ] ?? null;
        contentType = req.headers['content-type'] ?? null;
      }
      // We don't actually support URL encoded actions, and the action handler will bail out if it sees one.
      // But we still want it to flow through to the action handler, to prevent changes in behavior when a regular
      // page component tries to handle a POST.
      const isURLEncodedAction = Boolean(
        req.method === 'POST' &&
          contentType === 'application/x-www-form-urlencoded',
      );
      const isMultipartAction = Boolean(
        req.method === 'POST' &&
          (contentType == null
            ? void 0
            : contentType.startsWith('multipart/form-data')),
      );
      const isFetchAction = Boolean(
        actionId !== undefined &&
          typeof actionId === 'string' &&
          req.method === 'POST',
      );
      const isPossibleServerAction = Boolean(
        isFetchAction || isURLEncodedAction || isMultipartAction,
      );
      return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction,
      };
    }
    function getIsPossibleServerAction(req) {
      return getServerActionRequestMetadata(req).isPossibleServerAction;
    } //# sourceMappingURL=server-action-request-meta.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    /**
     * Describes the different fallback modes that a given page can have.
     */ __turbopack_context__.s([
      'FallbackMode',
      () => FallbackMode,
      'fallbackModeToFallbackField',
      () => fallbackModeToFallbackField,
      'parseFallbackField',
      () => parseFallbackField,
      'parseStaticPathsResult',
      () => parseStaticPathsResult,
    ]);
    var FallbackMode = /*#__PURE__*/ (function (FallbackMode) {
      /**
       * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
       * generated. No fallback page will be rendered, and users will have to wait
       * to render the page.
       */ FallbackMode['BLOCKING_STATIC_RENDER'] = 'BLOCKING_STATIC_RENDER';
      /**
       * When set to PRERENDER, a fallback page will be sent to users in place of
       * forcing them to wait for the page to be generated. This allows the user to
       * see a rendered page earlier.
       */ FallbackMode['PRERENDER'] = 'PRERENDER';
      /**
       * When set to NOT_FOUND, pages that are not already prerendered will result
       * in a not found response.
       */ FallbackMode['NOT_FOUND'] = 'NOT_FOUND';
      return FallbackMode;
    })({});
    function parseFallbackField(fallbackField) {
      if (typeof fallbackField === 'string') {
        return 'PRERENDER';
      } else if (fallbackField === null) {
        return 'BLOCKING_STATIC_RENDER';
      } else if (fallbackField === false) {
        return 'NOT_FOUND';
      } else if (fallbackField === undefined) {
        return undefined;
      } else {
        throw Object.defineProperty(
          new Error(
            `Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`,
          ),
          '__NEXT_ERROR_CODE',
          {
            value: 'E285',
            enumerable: false,
            configurable: true,
          },
        );
      }
    }
    function fallbackModeToFallbackField(fallback, page) {
      switch (fallback) {
        case 'BLOCKING_STATIC_RENDER':
          return null;
        case 'NOT_FOUND':
          return false;
        case 'PRERENDER':
          if (!page) {
            throw Object.defineProperty(
              new Error(
                `Invariant: expected a page to be provided when fallback mode is "${fallback}"`,
              ),
              '__NEXT_ERROR_CODE',
              {
                value: 'E422',
                enumerable: false,
                configurable: true,
              },
            );
          }
          return page;
        default:
          throw Object.defineProperty(
            new Error(`Invalid fallback mode: ${fallback}`),
            '__NEXT_ERROR_CODE',
            {
              value: 'E254',
              enumerable: false,
              configurable: true,
            },
          );
      }
    }
    function parseStaticPathsResult(result) {
      if (result === true) {
        return 'PRERENDER';
      } else if (result === 'blocking') {
        return 'BLOCKING_STATIC_RENDER';
      } else {
        return 'NOT_FOUND';
      }
    } //# sourceMappingURL=fallback.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    /**
     * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
     * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
     */ __turbopack_context__.s([
      'DecodeError',
      () => DecodeError,
      'MiddlewareNotFoundError',
      () => MiddlewareNotFoundError,
      'MissingStaticPage',
      () => MissingStaticPage,
      'NormalizeError',
      () => NormalizeError,
      'PageNotFoundError',
      () => PageNotFoundError,
      'SP',
      () => SP,
      'ST',
      () => ST,
      'WEB_VITALS',
      () => WEB_VITALS,
      'execOnce',
      () => execOnce,
      'getDisplayName',
      () => getDisplayName,
      'getLocationOrigin',
      () => getLocationOrigin,
      'getURL',
      () => getURL,
      'isAbsoluteUrl',
      () => isAbsoluteUrl,
      'isResSent',
      () => isResSent,
      'loadGetInitialProps',
      () => loadGetInitialProps,
      'normalizeRepeatedSlashes',
      () => normalizeRepeatedSlashes,
      'stringifyError',
      () => stringifyError,
    ]);
    const WEB_VITALS = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function execOnce(fn) {
      let used = false;
      let result;
      return (...args) => {
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    // Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
    // Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
    const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    const isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return `${protocol}//${hostname}${port ? ':' + port : ''}`;
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === 'string'
        ? Component
        : Component.displayName || Component.name || 'Unknown';
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split('?');
      const urlNoQuery = urlParts[0];
      return (
        urlNoQuery // first we replace any non-encoded backslashes with forward
          // then normalize repeated forward slashes
          .replace(/\\/g, '/')
          .replace(/\/\/+/g, '/') +
        (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '')
      );
    }
    async function loadGetInitialProps(App, ctx) {
      if (('TURBOPACK compile-time truthy', 1)) {
        if (App.prototype?.getInitialProps) {
          const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
          throw Object.defineProperty(new Error(message), '__NEXT_ERROR_CODE', {
            value: 'E394',
            enumerable: false,
            configurable: true,
          });
        }
      }
      // when called from _app `ctx` is nested in `ctx`
      const res = ctx.res || (ctx.ctx && ctx.ctx.res);
      if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
          // @ts-ignore pageProps default
          return {
            pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
          };
        }
        return {};
      }
      const props = await App.getInitialProps(ctx);
      if (res && isResSent(res)) {
        return props;
      }
      if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), '__NEXT_ERROR_CODE', {
          value: 'E394',
          enumerable: false,
          configurable: true,
        });
      }
      if (('TURBOPACK compile-time truthy', 1)) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
          console.warn(
            `${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`,
          );
        }
      }
      return props;
    }
    const SP = typeof performance !== 'undefined';
    const ST =
      SP &&
      ['mark', 'measure', 'getEntriesByName'].every(
        (method) => typeof performance[method] === 'function',
      );
    class DecodeError extends Error {}
    class NormalizeError extends Error {}
    class PageNotFoundError extends Error {
      constructor(page) {
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
      }
    }
    class MissingStaticPage extends Error {
      constructor(page, message) {
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
      }
    }
    class MiddlewareNotFoundError extends Error {
      constructor() {
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
      }
    }
    function stringifyError(error) {
      return JSON.stringify({
        message: error.message,
        stack: error.stack,
      });
    } //# sourceMappingURL=utils.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    /**
     * FNV-1a Hash implementation
     * @author Travis Webb (tjwebb) <me@traviswebb.com>
     *
     * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
     *
     * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
     * and still making use of Javascript's 53-bit integer space.
     */ __turbopack_context__.s([
      'fnv1a52',
      () => fnv1a52,
      'generateETag',
      () => generateETag,
    ]);
    const fnv1a52 = (str) => {
      const len = str.length;
      let i = 0,
        t0 = 0,
        v0 = 0x2325,
        t1 = 0,
        v1 = 0x8422,
        t2 = 0,
        v2 = 0x9ce4,
        t3 = 0,
        v3 = 0xcbf2;
      while (i < len) {
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = (t3 + (t2 >>> 16)) & 65535;
        v2 = t2 & 65535;
      }
      return (
        (v3 & 15) * 281474976710656 +
        v2 * 4294967296 +
        v1 * 65536 +
        (v0 ^ (v3 >> 4))
      );
    };
    const generateETag = (payload, weak = false) => {
      const prefix = weak ? 'W/"' : '"';
      return (
        prefix +
        fnv1a52(payload).toString(36) +
        payload.length.toString(36) +
        '"'
      );
    }; //# sourceMappingURL=etag.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    (() => {
      'use strict';
      var e = {
        695: (e) => {
          /*!
           * fresh
           * Copyright(c) 2012 TJ Holowaychuk
           * Copyright(c) 2016-2017 Douglas Christopher Wilson
           * MIT Licensed
           */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
          e.exports = fresh;
          function fresh(e, a) {
            var t = e['if-modified-since'];
            var s = e['if-none-match'];
            if (!t && !s) {
              return false;
            }
            var i = e['cache-control'];
            if (i && r.test(i)) {
              return false;
            }
            if (s && s !== '*') {
              var f = a['etag'];
              if (!f) {
                return false;
              }
              var n = true;
              var u = parseTokenList(s);
              for (var _ = 0; _ < u.length; _++) {
                var o = u[_];
                if (o === f || o === 'W/' + f || 'W/' + o === f) {
                  n = false;
                  break;
                }
              }
              if (n) {
                return false;
              }
            }
            if (t) {
              var p = a['last-modified'];
              var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
              if (v) {
                return false;
              }
            }
            return true;
          }
          function parseHttpDate(e) {
            var r = e && Date.parse(e);
            return typeof r === 'number' ? r : NaN;
          }
          function parseTokenList(e) {
            var r = 0;
            var a = [];
            var t = 0;
            for (var s = 0, i = e.length; s < i; s++) {
              switch (e.charCodeAt(s)) {
                case 32:
                  if (t === r) {
                    t = r = s + 1;
                  }
                  break;
                case 44:
                  a.push(e.substring(t, r));
                  t = r = s + 1;
                  break;
                default:
                  r = s + 1;
                  break;
              }
            }
            a.push(e.substring(t, r));
            return a;
          }
        },
      };
      var r = {};
      function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
          return t.exports;
        }
        var s = (r[a] = {
          exports: {},
        });
        var i = true;
        try {
          e[a](s, s.exports, __nccwpck_require__);
          i = false;
        } finally {
          if (i) delete r[a];
        }
        return s.exports;
      }
      if (typeof __nccwpck_require__ !== 'undefined')
        __nccwpck_require__.ab =
          ('TURBOPACK compile-time value',
          '/ROOT/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/fresh') +
          '/';
      var a = __nccwpck_require__(695);
      module.exports = a;
    })();
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'getCacheControlHeader',
      () => getCacheControlHeader,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)',
      );
    function getCacheControlHeader({ revalidate, expire }) {
      const swrHeader =
        typeof revalidate === 'number' &&
        expire !== undefined &&
        revalidate < expire
          ? `, stale-while-revalidate=${expire - revalidate}`
          : '';
      if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
      } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
      }
      return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['CACHE_ONE_YEAR']}${swrHeader}`;
    } //# sourceMappingURL=cache-control.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'sendEtagResponse',
      () => sendEtagResponse,
      'sendRenderResult',
      () => sendRenderResult,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)',
      );
    function sendEtagResponse(req, res, etag) {
      if (etag) {
        /**
         * The server generating a 304 response MUST generate any of the
         * following header fields that would have been sent in a 200 (OK)
         * response to the same request: Cache-Control, Content-Location, Date,
         * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
         */ res.setHeader('ETag', etag);
      }
      if (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'default'
        ])(req.headers, {
          etag,
        })
      ) {
        res.statusCode = 304;
        res.end();
        return true;
      }
      return false;
    }
    async function sendRenderResult({
      req,
      res,
      result,
      generateEtags,
      poweredByHeader,
      cacheControl,
    }) {
      if (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'isResSent'
        ])(res)
      ) {
        return;
      }
      if (
        poweredByHeader &&
        result.contentType ===
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'HTML_CONTENT_TYPE_HEADER'
          ]
      ) {
        res.setHeader('X-Powered-By', 'Next.js');
      }
      // If cache control is already set on the response we don't
      // override it to allow users to customize it via next.config
      if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader(
          'Cache-Control',
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'getCacheControlHeader'
          ])(cacheControl),
        );
      }
      const payload = result.isDynamic ? null : result.toUnchunkedString();
      if (generateEtags && payload !== null) {
        const etag = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'generateETag'
        ])(payload);
        if (sendEtagResponse(req, res, etag)) {
          return;
        }
      }
      if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
      }
      if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
      }
      if (req.method === 'HEAD') {
        res.end(null);
        return;
      }
      if (payload !== null) {
        res.end(payload);
        return;
      }
      // Pipe the render result to the response after we get a writer for it.
      await result.pipeToNodeResponse(res);
    } //# sourceMappingURL=send-payload.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/bytes/index.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    (() => {
      'use strict';
      var e = {
        56: (e) => {
          /*!
           * bytes
           * Copyright(c) 2012-2014 TJ Holowaychuk
           * Copyright(c) 2015 Jed Watson
           * MIT Licensed
           */ e.exports = bytes;
          e.exports.format = format;
          e.exports.parse = parse;
          var r = /\B(?=(\d{3})+(?!\d))/g;
          var a = /(?:\.0*|(\.[^0]+)0+)$/;
          var t = {
            b: 1,
            kb: 1 << 10,
            mb: 1 << 20,
            gb: 1 << 30,
            tb: Math.pow(1024, 4),
            pb: Math.pow(1024, 5),
          };
          var i = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
          function bytes(e, r) {
            if (typeof e === 'string') {
              return parse(e);
            }
            if (typeof e === 'number') {
              return format(e, r);
            }
            return null;
          }
          function format(e, i) {
            if (!Number.isFinite(e)) {
              return null;
            }
            var n = Math.abs(e);
            var o = (i && i.thousandsSeparator) || '';
            var s = (i && i.unitSeparator) || '';
            var f = i && i.decimalPlaces !== undefined ? i.decimalPlaces : 2;
            var u = Boolean(i && i.fixedDecimals);
            var p = (i && i.unit) || '';
            if (!p || !t[p.toLowerCase()]) {
              if (n >= t.pb) {
                p = 'PB';
              } else if (n >= t.tb) {
                p = 'TB';
              } else if (n >= t.gb) {
                p = 'GB';
              } else if (n >= t.mb) {
                p = 'MB';
              } else if (n >= t.kb) {
                p = 'KB';
              } else {
                p = 'B';
              }
            }
            var b = e / t[p.toLowerCase()];
            var l = b.toFixed(f);
            if (!u) {
              l = l.replace(a, '$1');
            }
            if (o) {
              l = l
                .split('.')
                .map(function (e, a) {
                  return a === 0 ? e.replace(r, o) : e;
                })
                .join('.');
            }
            return l + s + p;
          }
          function parse(e) {
            if (typeof e === 'number' && !isNaN(e)) {
              return e;
            }
            if (typeof e !== 'string') {
              return null;
            }
            var r = i.exec(e);
            var a;
            var n = 'b';
            if (!r) {
              a = parseInt(e, 10);
              n = 'b';
            } else {
              a = parseFloat(r[1]);
              n = r[4].toLowerCase();
            }
            return Math.floor(t[n] * a);
          }
        },
      };
      var r = {};
      function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
          return t.exports;
        }
        var i = (r[a] = {
          exports: {},
        });
        var n = true;
        try {
          e[a](i, i.exports, __nccwpck_require__);
          n = false;
        } finally {
          if (n) delete r[a];
        }
        return i.exports;
      }
      if (typeof __nccwpck_require__ !== 'undefined')
        __nccwpck_require__.ab =
          ('TURBOPACK compile-time value',
          '/ROOT/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/bytes') +
          '/';
      var a = __nccwpck_require__(56);
      module.exports = a;
    })();
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'DEFAULT_MAX_POSTPONED_STATE_SIZE',
      () => DEFAULT_MAX_POSTPONED_STATE_SIZE,
      'parseMaxPostponedStateSize',
      () => parseMaxPostponedStateSize,
    ]);
    const DEFAULT_MAX_POSTPONED_STATE_SIZE = '100 MB';
    function parseSizeLimit(size) {
      const bytes = __turbopack_context__
        .r(
          '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/bytes/index.js [app-rsc] (ecmascript)',
        )
        .parse(size);
      if (bytes === null || isNaN(bytes) || bytes < 1) {
        return undefined;
      }
      return bytes;
    }
    function parseMaxPostponedStateSize(size) {
      return parseSizeLimit(size ?? DEFAULT_MAX_POSTPONED_STATE_SIZE);
    } //# sourceMappingURL=size-limit.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)',
      ),
    );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>',
      ),
    );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)',
      ),
    );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)',
      ),
    );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)',
      ),
    );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/markdown-to-jsx/dist/entities.generated.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'NAMED_CODES_TO_UNICODE',
      () => q,
      'decodeEntity',
      () => v,
    ]);
    var q = {
      af: '⁡',
      applyfunction: '⁡',
      ic: '⁣',
      invisiblecomma: '⁣',
      invisibletimes: '⁢',
      it: '⁢',
      lrm: '‎',
      negativemediumspace: '​',
      negativethickspace: '​',
      negativethinspace: '​',
      negativeverythinspace: '​',
      nobreak: '⁠',
      rlm: '‏',
      shy: '­',
      zerowidthspace: '​',
      zwj: '‍',
      zwnj: '‌',
      downbreve: '̑',
      tdot: '⃛',
      tripledot: '⃛',
      dotdot: '⃜',
      tab: '\t',
      newline: `
`,
      emsp: ' ',
      emsp13: ' ',
      emsp14: ' ',
      ensp: ' ',
      hairsp: ' ',
      mediumspace: ' ',
      puncsp: ' ',
      thinsp: ' ',
      thinspace: ' ',
      verythinspace: ' ',
      nbsp: ' ',
      nonbreakingspace: ' ',
      numsp: ' ',
      thickspace: '  ',
      oline: '‾',
      overbar: '‾',
      lowbar: '_',
      underbar: '_',
      dash: '‐',
      hyphen: '‐',
      ndash: '–',
      mdash: '—',
      horbar: '―',
      comma: ',',
      semi: ';',
      bsemi: '⁏',
      colon: ':',
      Colone: '⩴',
      excl: '!',
      iexcl: '¡',
      quest: '?',
      iquest: '¿',
      period: '.',
      nldr: '‥',
      hellip: '…',
      mldr: '…',
      centerdot: '·',
      middot: '·',
      apos: "'",
      lsquo: '‘',
      opencurlyquote: '‘',
      closecurlyquote: '’',
      rsquo: '’',
      rsquor: '’',
      lsquor: '‚',
      sbquo: '‚',
      lsaquo: '‹',
      rsaquo: '›',
      quot: '"',
      ldquo: '“',
      opencurlydoublequote: '“',
      closecurlydoublequote: '”',
      rdquo: '”',
      rdquor: '”',
      bdquo: '„',
      ldquor: '„',
      laquo: '«',
      raquo: '»',
      lpar: '(',
      rpar: ')',
      lbrack: '[',
      lsqb: '[',
      rbrack: ']',
      rsqb: ']',
      lbrace: '{',
      lcub: '{',
      rbrace: '}',
      rcub: '}',
      lceil: '⌈',
      leftceiling: '⌈',
      rceil: '⌉',
      rightceiling: '⌉',
      leftfloor: '⌊',
      lfloor: '⌊',
      rfloor: '⌋',
      rightfloor: '⌋',
      lopar: '⦅',
      ropar: '⦆',
      lbrke: '⦋',
      rbrke: '⦌',
      lbrkslu: '⦍',
      rbrksld: '⦎',
      lbrksld: '⦏',
      rbrkslu: '⦐',
      langd: '⦑',
      rangd: '⦒',
      lparlt: '⦓',
      rpargt: '⦔',
      gtlpar: '⦕',
      ltrpar: '⦖',
      leftdoublebracket: '⟦',
      lobrk: '⟦',
      rightdoublebracket: '⟧',
      robrk: '⟧',
      lang: '⟨',
      langle: '⟨',
      leftanglebracket: '⟨',
      rang: '⟩',
      rangle: '⟩',
      rightanglebracket: '⟩',
      Lang: '⟪',
      Rang: '⟫',
      loang: '⟬',
      roang: '⟭',
      lbbrk: '❲',
      rbbrk: '❳',
      Verbar: '‖',
      Vert: '‖',
      sect: '§',
      para: '¶',
      commat: '@',
      ast: '*',
      midast: '*',
      sol: '/',
      bsol: '\\',
      amp: '&',
      num: '#',
      percnt: '%',
      permil: '‰',
      pertenk: '‱',
      dagger: '†',
      Dagger: '‡',
      ddagger: '‡',
      bull: '•',
      bullet: '•',
      hybull: '⁃',
      prime: '′',
      Prime: '″',
      tprime: '‴',
      qprime: '⁗',
      backprime: '‵',
      bprime: '‵',
      caret: '⁁',
      diacriticalgrave: '`',
      grave: '`',
      acute: '´',
      diacriticalacute: '´',
      diacriticaltilde: '˜',
      tilde: '˜',
      hat: '^',
      macr: '¯',
      strns: '¯',
      breve: '˘',
      diacriticaldot: '˙',
      dot: '˙',
      die: '¨',
      Dot: '¨',
      doubledot: '¨',
      uml: '¨',
      ring: '˚',
      dblac: '˝',
      diacriticaldoubleacute: '˝',
      cedil: '¸',
      cedilla: '¸',
      ogon: '˛',
      circ: 'ˆ',
      caron: 'ˇ',
      hacek: 'ˇ',
      deg: '°',
      copy: '©',
      circledr: '®',
      reg: '®',
      copysr: '℗',
      weierp: '℘',
      wp: '℘',
      rx: '℞',
      mho: '℧',
      iiota: '℩',
      larr: '←',
      leftarrow: '←',
      shortleftarrow: '←',
      slarr: '←',
      nlarr: '↚',
      nleftarrow: '↚',
      rarr: '→',
      rightarrow: '→',
      shortrightarrow: '→',
      srarr: '→',
      nrarr: '↛',
      nrightarrow: '↛',
      shortuparrow: '↑',
      uarr: '↑',
      uparrow: '↑',
      darr: '↓',
      downarrow: '↓',
      shortdownarrow: '↓',
      harr: '↔',
      leftrightarrow: '↔',
      nharr: '↮',
      nleftrightarrow: '↮',
      updownarrow: '↕',
      varr: '↕',
      nwarr: '↖',
      nwarrow: '↖',
      upperleftarrow: '↖',
      nearr: '↗',
      nearrow: '↗',
      upperrightarrow: '↗',
      lowerrightarrow: '↘',
      searr: '↘',
      searrow: '↘',
      lowerleftarrow: '↙',
      swarr: '↙',
      swarrow: '↙',
      rarrw: '↝',
      rightsquigarrow: '↝',
      nrarrw: '↝̸',
      Larr: '↞',
      twoheadleftarrow: '↞',
      Uarr: '↟',
      Rarr: '↠',
      twoheadrightarrow: '↠',
      Darr: '↡',
      larrtl: '↢',
      leftarrowtail: '↢',
      rarrtl: '↣',
      rightarrowtail: '↣',
      leftteearrow: '↤',
      mapstoleft: '↤',
      mapstoup: '↥',
      upteearrow: '↥',
      map: '↦',
      mapsto: '↦',
      rightteearrow: '↦',
      downteearrow: '↧',
      mapstodown: '↧',
      hookleftarrow: '↩',
      larrhk: '↩',
      hookrightarrow: '↪',
      rarrhk: '↪',
      larrlp: '↫',
      looparrowleft: '↫',
      looparrowright: '↬',
      rarrlp: '↬',
      harrw: '↭',
      leftrightsquigarrow: '↭',
      lsh: '↰',
      rsh: '↱',
      ldsh: '↲',
      rdsh: '↳',
      crarr: '↵',
      cularr: '↶',
      curvearrowleft: '↶',
      curarr: '↷',
      curvearrowright: '↷',
      circlearrowleft: '↺',
      olarr: '↺',
      circlearrowright: '↻',
      orarr: '↻',
      leftharpoonup: '↼',
      leftvector: '↼',
      lharu: '↼',
      downleftvector: '↽',
      leftharpoondown: '↽',
      lhard: '↽',
      rightupvector: '↾',
      uharr: '↾',
      upharpoonright: '↾',
      leftupvector: '↿',
      uharl: '↿',
      upharpoonleft: '↿',
      rharu: '⇀',
      rightharpoonup: '⇀',
      rightvector: '⇀',
      downrightvector: '⇁',
      rhard: '⇁',
      rightharpoondown: '⇁',
      dharr: '⇂',
      downharpoonright: '⇂',
      rightdownvector: '⇂',
      dharl: '⇃',
      downharpoonleft: '⇃',
      leftdownvector: '⇃',
      rightarrowleftarrow: '⇄',
      rightleftarrows: '⇄',
      rlarr: '⇄',
      udarr: '⇅',
      uparrowdownarrow: '⇅',
      leftarrowrightarrow: '⇆',
      leftrightarrows: '⇆',
      lrarr: '⇆',
      leftleftarrows: '⇇',
      llarr: '⇇',
      upuparrows: '⇈',
      uuarr: '⇈',
      rightrightarrows: '⇉',
      rrarr: '⇉',
      ddarr: '⇊',
      downdownarrows: '⇊',
      leftrightharpoons: '⇋',
      lrhar: '⇋',
      reverseequilibrium: '⇋',
      equilibrium: '⇌',
      rightleftharpoons: '⇌',
      rlhar: '⇌',
      doubleleftarrow: '⇐',
      lArr: '⇐',
      Leftarrow: '⇐',
      nlArr: '⇍',
      nLeftarrow: '⇍',
      doubleuparrow: '⇑',
      uArr: '⇑',
      Uparrow: '⇑',
      doublerightarrow: '⇒',
      implies: '⇒',
      rArr: '⇒',
      Rightarrow: '⇒',
      nrArr: '⇏',
      nRightarrow: '⇏',
      dArr: '⇓',
      doubledownarrow: '⇓',
      Downarrow: '⇓',
      doubleleftrightarrow: '⇔',
      hArr: '⇔',
      iff: '⇔',
      Leftrightarrow: '⇔',
      nhArr: '⇎',
      nLeftrightarrow: '⇎',
      doubleupdownarrow: '⇕',
      Updownarrow: '⇕',
      vArr: '⇕',
      nwArr: '⇖',
      neArr: '⇗',
      seArr: '⇘',
      swArr: '⇙',
      laarr: '⇚',
      lleftarrow: '⇚',
      raarr: '⇛',
      rrightarrow: '⇛',
      zigrarr: '⇝',
      larrb: '⇤',
      leftarrowbar: '⇤',
      rarrb: '⇥',
      rightarrowbar: '⇥',
      downarrowuparrow: '⇵',
      duarr: '⇵',
      loarr: '⇽',
      roarr: '⇾',
      hoarr: '⇿',
      forall: '∀',
      comp: '∁',
      complement: '∁',
      part: '∂',
      partiald: '∂',
      npart: '∂̸',
      exist: '∃',
      exists: '∃',
      nexist: '∄',
      nexists: '∄',
      notexists: '∄',
      empty: '∅',
      emptyset: '∅',
      emptyv: '∅',
      varnothing: '∅',
      del: '∇',
      nabla: '∇',
      element: '∈',
      in: '∈',
      isin: '∈',
      isinv: '∈',
      notelement: '∉',
      notin: '∉',
      notinva: '∉',
      ni: '∋',
      niv: '∋',
      reverseelement: '∋',
      suchthat: '∋',
      notni: '∌',
      notniva: '∌',
      notreverseelement: '∌',
      backepsilon: '϶',
      bepsi: '϶',
      prod: '∏',
      product: '∏',
      coprod: '∐',
      coproduct: '∐',
      sum: '∑',
      plus: '+',
      plusminus: '±',
      plusmn: '±',
      pm: '±',
      div: '÷',
      divide: '÷',
      times: '×',
      lt: '<',
      nless: '≮',
      nlt: '≮',
      notless: '≮',
      nvlt: '<⃒',
      equals: '=',
      ne: '≠',
      notequal: '≠',
      bne: '=⃥',
      equal: '⩵',
      gt: '>',
      ngt: '≯',
      ngtr: '≯',
      notgreater: '≯',
      nvgt: '>⃒',
      not: '¬',
      verbar: '|',
      vert: '|',
      verticalline: '|',
      brvbar: '¦',
      minus: '−',
      minusplus: '∓',
      mnplus: '∓',
      mp: '∓',
      dotplus: '∔',
      plusdo: '∔',
      frasl: '⁄',
      backslash: '∖',
      setminus: '∖',
      setmn: '∖',
      smallsetminus: '∖',
      ssetmn: '∖',
      lowast: '∗',
      compfn: '∘',
      smallcircle: '∘',
      radic: '√',
      sqrt: '√',
      prop: '∝',
      proportional: '∝',
      propto: '∝',
      varpropto: '∝',
      vprop: '∝',
      infin: '∞',
      angrt: '∟',
      ang: '∠',
      angle: '∠',
      nang: '∠⃒',
      angmsd: '∡',
      measuredangle: '∡',
      angsph: '∢',
      mid: '∣',
      shortmid: '∣',
      smid: '∣',
      verticalbar: '∣',
      nmid: '∤',
      notverticalbar: '∤',
      nshortmid: '∤',
      nsmid: '∤',
      doubleverticalbar: '∥',
      par: '∥',
      parallel: '∥',
      shortparallel: '∥',
      spar: '∥',
      notdoubleverticalbar: '∦',
      npar: '∦',
      nparallel: '∦',
      nshortparallel: '∦',
      nspar: '∦',
      and: '∧',
      wedge: '∧',
      or: '∨',
      vee: '∨',
      cap: '∩',
      caps: '∩︀',
      cup: '∪',
      cups: '∪︀',
      int: '∫',
      integral: '∫',
      Int: '∬',
      iiint: '∭',
      tint: '∭',
      iiiint: '⨌',
      qint: '⨌',
      conint: '∮',
      contourintegral: '∮',
      oint: '∮',
      Conint: '∯',
      doublecontourintegral: '∯',
      cconint: '∰',
      cwint: '∱',
      clockwisecontourintegral: '∲',
      cwconint: '∲',
      awconint: '∳',
      counterclockwisecontourintegral: '∳',
      there4: '∴',
      therefore: '∴',
      becaus: '∵',
      because: '∵',
      ratio: '∶',
      Colon: '∷',
      proportion: '∷',
      dotminus: '∸',
      minusd: '∸',
      mddot: '∺',
      homtht: '∻',
      sim: '∼',
      thicksim: '∼',
      thksim: '∼',
      Tilde: '∼',
      nottilde: '≁',
      nsim: '≁',
      nvsim: '∼⃒',
      backsim: '∽',
      bsim: '∽',
      race: '∽̱',
      ac: '∾',
      mstpos: '∾',
      ace: '∾̳',
      acd: '∿',
      verticaltilde: '≀',
      wr: '≀',
      wreath: '≀',
      eqsim: '≂',
      equaltilde: '≂',
      esim: '≂',
      nesim: '≂̸',
      notequaltilde: '≂̸',
      sime: '≃',
      simeq: '≃',
      tildeequal: '≃',
      nottildeequal: '≄',
      nsime: '≄',
      nsimeq: '≄',
      cong: '≅',
      tildefullequal: '≅',
      ncong: '≇',
      nottildefullequal: '≇',
      simne: '≆',
      ap: '≈',
      approx: '≈',
      asymp: '≈',
      thickapprox: '≈',
      thkap: '≈',
      tildetilde: '≈',
      nap: '≉',
      napprox: '≉',
      nottildetilde: '≉',
      ape: '≊',
      approxeq: '≊',
      apid: '≋',
      napid: '≋̸',
      backcong: '≌',
      bcong: '≌',
      asympeq: '≍',
      CupCap: '≍',
      notcupcap: '≭',
      nvap: '≍⃒',
      bump: '≎',
      Bumpeq: '≎',
      humpdownhump: '≎',
      nbump: '≎̸',
      nothumpdownhump: '≎̸',
      bumpe: '≏',
      bumpeq: '≏',
      humpequal: '≏',
      nbumpe: '≏̸',
      nothumpequal: '≏̸',
      doteq: '≐',
      dotequal: '≐',
      esdot: '≐',
      nedot: '≐̸',
      doteqdot: '≑',
      eDot: '≑',
      efdot: '≒',
      fallingdotseq: '≒',
      erdot: '≓',
      risingdotseq: '≓',
      assign: '≔',
      colone: '≔',
      coloneq: '≔',
      ecolon: '≕',
      eqcolon: '≕',
      ecir: '≖',
      eqcirc: '≖',
      circeq: '≗',
      cire: '≗',
      wedgeq: '≙',
      veeeq: '≚',
      triangleq: '≜',
      trie: '≜',
      equest: '≟',
      questeq: '≟',
      congruent: '≡',
      equiv: '≡',
      nequiv: '≢',
      notcongruent: '≢',
      bnequiv: '≡⃥',
      le: '≤',
      leq: '≤',
      nle: '≰',
      nleq: '≰',
      notlessequal: '≰',
      nvle: '≤⃒',
      ge: '≥',
      geq: '≥',
      greaterequal: '≥',
      nge: '≱',
      ngeq: '≱',
      notgreaterequal: '≱',
      nvge: '≥⃒',
      lE: '≦',
      leqq: '≦',
      lessfullequal: '≦',
      nlE: '≦̸',
      nleqq: '≦̸',
      gE: '≧',
      geqq: '≧',
      greaterfullequal: '≧',
      ngE: '≧̸',
      ngeqq: '≧̸',
      notgreaterfullequal: '≧̸',
      lnE: '≨',
      lneqq: '≨',
      lvertneqq: '≨︀',
      lvne: '≨︀',
      gnE: '≩',
      gneqq: '≩',
      gvertneqq: '≩︀',
      gvne: '≩︀',
      ll: '≪',
      Lt: '≪',
      nestedlessless: '≪',
      nltv: '≪̸',
      notlessless: '≪̸',
      nLt: '≪⃒',
      gg: '≫',
      Gt: '≫',
      nestedgreatergreater: '≫',
      ngtv: '≫̸',
      notgreatergreater: '≫̸',
      nGt: '≫⃒',
      between: '≬',
      twixt: '≬',
      lesssim: '≲',
      lesstilde: '≲',
      lsim: '≲',
      nlsim: '≴',
      notlesstilde: '≴',
      greatertilde: '≳',
      gsim: '≳',
      gtrsim: '≳',
      ngsim: '≵',
      notgreatertilde: '≵',
      lessgreater: '≶',
      lessgtr: '≶',
      lg: '≶',
      notlessgreater: '≸',
      ntlg: '≸',
      gl: '≷',
      greaterless: '≷',
      gtrless: '≷',
      notgreaterless: '≹',
      ntgl: '≹',
      pr: '≺',
      prec: '≺',
      precedes: '≺',
      notprecedes: '⊀',
      npr: '⊀',
      nprec: '⊀',
      sc: '≻',
      succ: '≻',
      succeeds: '≻',
      notsucceeds: '⊁',
      nsc: '⊁',
      nsucc: '⊁',
      prcue: '≼',
      preccurlyeq: '≼',
      precedesslantequal: '≼',
      notprecedesslantequal: '⋠',
      nprcue: '⋠',
      sccue: '≽',
      succcurlyeq: '≽',
      succeedsslantequal: '≽',
      notsucceedsslantequal: '⋡',
      nsccue: '⋡',
      precedestilde: '≾',
      precsim: '≾',
      prsim: '≾',
      scsim: '≿',
      succeedstilde: '≿',
      succsim: '≿',
      notsucceedstilde: '≿̸',
      sub: '⊂',
      subset: '⊂',
      nsub: '⊄',
      notsubset: '⊂⃒',
      nsubset: '⊂⃒',
      vnsub: '⊂⃒',
      sup: '⊃',
      superset: '⊃',
      supset: '⊃',
      nsup: '⊅',
      notsuperset: '⊃⃒',
      nsupset: '⊃⃒',
      vnsup: '⊃⃒',
      sube: '⊆',
      subseteq: '⊆',
      subsetequal: '⊆',
      notsubsetequal: '⊈',
      nsube: '⊈',
      nsubseteq: '⊈',
      supe: '⊇',
      supersetequal: '⊇',
      supseteq: '⊇',
      notsupersetequal: '⊉',
      nsupe: '⊉',
      nsupseteq: '⊉',
      subne: '⊊',
      subsetneq: '⊊',
      varsubsetneq: '⊊︀',
      vsubne: '⊊︀',
      supne: '⊋',
      supsetneq: '⊋',
      varsupsetneq: '⊋︀',
      vsupne: '⊋︀',
      cupdot: '⊍',
      unionplus: '⊎',
      uplus: '⊎',
      sqsub: '⊏',
      sqsubset: '⊏',
      squaresubset: '⊏',
      notsquaresubset: '⊏̸',
      sqsup: '⊐',
      sqsupset: '⊐',
      squaresuperset: '⊐',
      notsquaresuperset: '⊐̸',
      sqsube: '⊑',
      sqsubseteq: '⊑',
      squaresubsetequal: '⊑',
      notsquaresubsetequal: '⋢',
      nsqsube: '⋢',
      sqsupe: '⊒',
      sqsupseteq: '⊒',
      squaresupersetequal: '⊒',
      notsquaresupersetequal: '⋣',
      nsqsupe: '⋣',
      sqcap: '⊓',
      sqcaps: '⊓︀',
      squareintersection: '⊓',
      sqcup: '⊔',
      sqcups: '⊔︀',
      squareunion: '⊔',
      circleplus: '⊕',
      oplus: '⊕',
      circleminus: '⊖',
      ominus: '⊖',
      circletimes: '⊗',
      otimes: '⊗',
      osol: '⊘',
      circledot: '⊙',
      odot: '⊙',
      circledcirc: '⊚',
      ocir: '⊚',
      circledast: '⊛',
      oast: '⊛',
      circleddash: '⊝',
      odash: '⊝',
      boxplus: '⊞',
      plusb: '⊞',
      boxminus: '⊟',
      minusb: '⊟',
      boxtimes: '⊠',
      timesb: '⊠',
      dotsquare: '⊡',
      sdotb: '⊡',
      righttee: '⊢',
      vdash: '⊢',
      nvdash: '⊬',
      dashv: '⊣',
      lefttee: '⊣',
      downtee: '⊤',
      top: '⊤',
      bot: '⊥',
      bottom: '⊥',
      perp: '⊥',
      uptee: '⊥',
      models: '⊧',
      doublerighttee: '⊨',
      vDash: '⊨',
      nvDash: '⊭',
      Vdash: '⊩',
      nVdash: '⊮',
      vvdash: '⊪',
      VDash: '⊫',
      nVDash: '⊯',
      prurel: '⊰',
      lefttriangle: '⊲',
      vartriangleleft: '⊲',
      vltri: '⊲',
      nltri: '⋪',
      notlefttriangle: '⋪',
      ntriangleleft: '⋪',
      righttriangle: '⊳',
      vartriangleright: '⊳',
      vrtri: '⊳',
      notrighttriangle: '⋫',
      nrtri: '⋫',
      ntriangleright: '⋫',
      lefttriangleequal: '⊴',
      ltrie: '⊴',
      trianglelefteq: '⊴',
      nltrie: '⋬',
      notlefttriangleequal: '⋬',
      ntrianglelefteq: '⋬',
      nvltrie: '⊴⃒',
      righttriangleequal: '⊵',
      rtrie: '⊵',
      trianglerighteq: '⊵',
      notrighttriangleequal: '⋭',
      nrtrie: '⋭',
      ntrianglerighteq: '⋭',
      nvrtrie: '⊵⃒',
      origof: '⊶',
      imof: '⊷',
      multimap: '⊸',
      mumap: '⊸',
      hercon: '⊹',
      intcal: '⊺',
      intercal: '⊺',
      veebar: '⊻',
      barvee: '⊽',
      angrtvb: '⊾',
      lrtri: '⊿',
      bigwedge: '⋀',
      Wedge: '⋀',
      xwedge: '⋀',
      bigvee: '⋁',
      Vee: '⋁',
      xvee: '⋁',
      bigcap: '⋂',
      intersection: '⋂',
      xcap: '⋂',
      bigcup: '⋃',
      union: '⋃',
      xcup: '⋃',
      diam: '⋄',
      diamond: '⋄',
      sdot: '⋅',
      sstarf: '⋆',
      Star: '⋆',
      divideontimes: '⋇',
      divonx: '⋇',
      bowtie: '⋈',
      ltimes: '⋉',
      rtimes: '⋊',
      leftthreetimes: '⋋',
      lthree: '⋋',
      rightthreetimes: '⋌',
      rthree: '⋌',
      backsimeq: '⋍',
      bsime: '⋍',
      curlyvee: '⋎',
      cuvee: '⋎',
      curlywedge: '⋏',
      cuwed: '⋏',
      Sub: '⋐',
      Subset: '⋐',
      Sup: '⋑',
      Supset: '⋑',
      Cap: '⋒',
      Cup: '⋓',
      fork: '⋔',
      pitchfork: '⋔',
      epar: '⋕',
      lessdot: '⋖',
      ltdot: '⋖',
      gtdot: '⋗',
      gtrdot: '⋗',
      Ll: '⋘',
      nll: '⋘̸',
      Gg: '⋙',
      ggg: '⋙',
      ngg: '⋙̸',
      leg: '⋚',
      lesg: '⋚︀',
      lesseqgtr: '⋚',
      lessequalgreater: '⋚',
      gel: '⋛',
      gesl: '⋛︀',
      greaterequalless: '⋛',
      gtreqless: '⋛',
      cuepr: '⋞',
      curlyeqprec: '⋞',
      cuesc: '⋟',
      curlyeqsucc: '⋟',
      lnsim: '⋦',
      gnsim: '⋧',
      precnsim: '⋨',
      prnsim: '⋨',
      scnsim: '⋩',
      succnsim: '⋩',
      vellip: '⋮',
      ctdot: '⋯',
      utdot: '⋰',
      dtdot: '⋱',
      disin: '⋲',
      isinsv: '⋳',
      isins: '⋴',
      isindot: '⋵',
      notindot: '⋵̸',
      notinvc: '⋶',
      notinvb: '⋷',
      isine: '⋹',
      notine: '⋹̸',
      nisd: '⋺',
      xnis: '⋻',
      nis: '⋼',
      notnivc: '⋽',
      notnivb: '⋾',
      barwed: '⌅',
      barwedge: '⌅',
      Barwed: '⌆',
      doublebarwedge: '⌆',
      drcrop: '⌌',
      dlcrop: '⌍',
      urcrop: '⌎',
      ulcrop: '⌏',
      bnot: '⌐',
      profline: '⌒',
      profsurf: '⌓',
      telrec: '⌕',
      target: '⌖',
      ulcorn: '⌜',
      ulcorner: '⌜',
      urcorn: '⌝',
      urcorner: '⌝',
      dlcorn: '⌞',
      llcorner: '⌞',
      drcorn: '⌟',
      lrcorner: '⌟',
      frown: '⌢',
      sfrown: '⌢',
      smile: '⌣',
      ssmile: '⌣',
      cylcty: '⌭',
      profalar: '⌮',
      topbot: '⌶',
      ovbar: '⌽',
      solbar: '⌿',
      angzarr: '⍼',
      lmoust: '⎰',
      lmoustache: '⎰',
      rmoust: '⎱',
      rmoustache: '⎱',
      overbracket: '⎴',
      tbrk: '⎴',
      bbrk: '⎵',
      underbracket: '⎵',
      bbrktbrk: '⎶',
      overparenthesis: '⏜',
      underparenthesis: '⏝',
      overbrace: '⏞',
      underbrace: '⏟',
      trpezium: '⏢',
      elinters: '⏧',
      blank: '␣',
      boxh: '─',
      horizontalline: '─',
      boxv: '│',
      boxdr: '┌',
      boxdl: '┐',
      boxur: '└',
      boxul: '┘',
      boxvr: '├',
      boxvl: '┤',
      boxhd: '┬',
      boxhu: '┴',
      boxvh: '┼',
      boxH: '═',
      boxV: '║',
      boxdR: '╒',
      boxDr: '╓',
      boxDR: '╔',
      boxdL: '╕',
      boxDl: '╖',
      boxDL: '╗',
      boxuR: '╘',
      boxUr: '╙',
      boxUR: '╚',
      boxuL: '╛',
      boxUl: '╜',
      boxUL: '╝',
      boxvR: '╞',
      boxVr: '╟',
      boxVR: '╠',
      boxvL: '╡',
      boxVl: '╢',
      boxVL: '╣',
      boxHd: '╤',
      boxhD: '╥',
      boxHD: '╦',
      boxHu: '╧',
      boxhU: '╨',
      boxHU: '╩',
      boxvH: '╪',
      boxVh: '╫',
      boxVH: '╬',
      uhblk: '▀',
      lhblk: '▄',
      block: '█',
      blk14: '░',
      blk12: '▒',
      blk34: '▓',
      squ: '□',
      square: '□',
      blacksquare: '▪',
      filledverysmallsquare: '▪',
      squarf: '▪',
      squf: '▪',
      emptyverysmallsquare: '▫',
      rect: '▭',
      marker: '▮',
      fltns: '▱',
      bigtriangleup: '△',
      xutri: '△',
      blacktriangle: '▴',
      utrif: '▴',
      triangle: '▵',
      utri: '▵',
      blacktriangleright: '▸',
      rtrif: '▸',
      rtri: '▹',
      triangleright: '▹',
      bigtriangledown: '▽',
      xdtri: '▽',
      blacktriangledown: '▾',
      dtrif: '▾',
      dtri: '▿',
      triangledown: '▿',
      blacktriangleleft: '◂',
      ltrif: '◂',
      ltri: '◃',
      triangleleft: '◃',
      loz: '◊',
      lozenge: '◊',
      cir: '○',
      tridot: '◬',
      bigcirc: '◯',
      xcirc: '◯',
      ultri: '◸',
      urtri: '◹',
      lltri: '◺',
      emptysmallsquare: '◻',
      filledsmallsquare: '◼',
      bigstar: '★',
      starf: '★',
      star: '☆',
      phone: '☎',
      female: '♀',
      male: '♂',
      spades: '♠',
      spadesuit: '♠',
      clubs: '♣',
      clubsuit: '♣',
      hearts: '♥',
      heartsuit: '♥',
      diamondsuit: '♦',
      diams: '♦',
      sung: '♪',
      check: '✓',
      checkmark: '✓',
      cross: '✗',
      malt: '✠',
      maltese: '✠',
      sext: '✶',
      verticalseparator: '❘',
      bsolhsub: '⟈',
      suphsol: '⟉',
      longleftarrow: '⟵',
      xlarr: '⟵',
      longrightarrow: '⟶',
      xrarr: '⟶',
      longleftrightarrow: '⟷',
      xharr: '⟷',
      doublelongleftarrow: '⟸',
      Longleftarrow: '⟸',
      xlArr: '⟸',
      doublelongrightarrow: '⟹',
      Longrightarrow: '⟹',
      xrArr: '⟹',
      doublelongleftrightarrow: '⟺',
      Longleftrightarrow: '⟺',
      xhArr: '⟺',
      longmapsto: '⟼',
      xmap: '⟼',
      dzigrarr: '⟿',
      nvlarr: '⤂',
      nvrarr: '⤃',
      nvharr: '⤄',
      Map: '⤅',
      lbarr: '⤌',
      bkarow: '⤍',
      lBarr: '⤎',
      dbkarow: '⤏',
      rBarr: '⤏',
      drbkarow: '⤐',
      rbarr: '⤐',
      RBarr: '⤐',
      ddotrahd: '⤑',
      uparrowbar: '⤒',
      downarrowbar: '⤓',
      Rarrtl: '⤖',
      latail: '⤙',
      ratail: '⤚',
      lAtail: '⤛',
      rAtail: '⤜',
      larrfs: '⤝',
      rarrfs: '⤞',
      larrbfs: '⤟',
      rarrbfs: '⤠',
      nwarhk: '⤣',
      nearhk: '⤤',
      hksearow: '⤥',
      searhk: '⤥',
      hkswarow: '⤦',
      swarhk: '⤦',
      nwnear: '⤧',
      nesear: '⤨',
      toea: '⤨',
      seswar: '⤩',
      tosa: '⤩',
      swnwar: '⤪',
      rarrc: '⤳',
      nrarrc: '⤳̸',
      cudarrr: '⤵',
      ldca: '⤶',
      rdca: '⤷',
      cudarrl: '⤸',
      larrpl: '⤹',
      curarrm: '⤼',
      cularrp: '⤽',
      rarrpl: '⥅',
      harrcir: '⥈',
      uarrocir: '⥉',
      lurdshar: '⥊',
      ldrushar: '⥋',
      leftrightvector: '⥎',
      rightupdownvector: '⥏',
      downleftrightvector: '⥐',
      leftupdownvector: '⥑',
      leftvectorbar: '⥒',
      rightvectorbar: '⥓',
      rightupvectorbar: '⥔',
      rightdownvectorbar: '⥕',
      downleftvectorbar: '⥖',
      downrightvectorbar: '⥗',
      leftupvectorbar: '⥘',
      leftdownvectorbar: '⥙',
      leftteevector: '⥚',
      rightteevector: '⥛',
      rightupteevector: '⥜',
      rightdownteevector: '⥝',
      downleftteevector: '⥞',
      downrightteevector: '⥟',
      leftupteevector: '⥠',
      leftdownteevector: '⥡',
      lhar: '⥢',
      uhar: '⥣',
      rhar: '⥤',
      dhar: '⥥',
      luruhar: '⥦',
      ldrdhar: '⥧',
      ruluhar: '⥨',
      rdldhar: '⥩',
      lharul: '⥪',
      llhard: '⥫',
      rharul: '⥬',
      lrhard: '⥭',
      udhar: '⥮',
      upequilibrium: '⥮',
      duhar: '⥯',
      reverseupequilibrium: '⥯',
      roundimplies: '⥰',
      erarr: '⥱',
      simrarr: '⥲',
      larrsim: '⥳',
      rarrsim: '⥴',
      rarrap: '⥵',
      ltlarr: '⥶',
      gtrarr: '⥸',
      subrarr: '⥹',
      suplarr: '⥻',
      lfisht: '⥼',
      rfisht: '⥽',
      ufisht: '⥾',
      dfisht: '⥿',
      vzigzag: '⦚',
      vangrt: '⦜',
      angrtvbd: '⦝',
      ange: '⦤',
      range: '⦥',
      dwangle: '⦦',
      uwangle: '⦧',
      angmsdaa: '⦨',
      angmsdab: '⦩',
      angmsdac: '⦪',
      angmsdad: '⦫',
      angmsdae: '⦬',
      angmsdaf: '⦭',
      angmsdag: '⦮',
      angmsdah: '⦯',
      bemptyv: '⦰',
      demptyv: '⦱',
      cemptyv: '⦲',
      raemptyv: '⦳',
      laemptyv: '⦴',
      ohbar: '⦵',
      omid: '⦶',
      opar: '⦷',
      operp: '⦹',
      olcross: '⦻',
      odsold: '⦼',
      olcir: '⦾',
      ofcir: '⦿',
      olt: '⧀',
      ogt: '⧁',
      cirscir: '⧂',
      cirE: '⧃',
      solb: '⧄',
      bsolb: '⧅',
      boxbox: '⧉',
      trisb: '⧍',
      rtriltri: '⧎',
      lefttrianglebar: '⧏',
      notlefttrianglebar: '⧏̸',
      righttrianglebar: '⧐',
      notrighttrianglebar: '⧐̸',
      iinfin: '⧜',
      infintie: '⧝',
      nvinfin: '⧞',
      eparsl: '⧣',
      smeparsl: '⧤',
      eqvparsl: '⧥',
      blacklozenge: '⧫',
      lozf: '⧫',
      ruledelayed: '⧴',
      dsol: '⧶',
      bigodot: '⨀',
      xodot: '⨀',
      bigoplus: '⨁',
      xoplus: '⨁',
      bigotimes: '⨂',
      xotime: '⨂',
      biguplus: '⨄',
      xuplus: '⨄',
      bigsqcup: '⨆',
      xsqcup: '⨆',
      fpartint: '⨍',
      cirfnint: '⨐',
      awint: '⨑',
      rppolint: '⨒',
      scpolint: '⨓',
      npolint: '⨔',
      pointint: '⨕',
      quatint: '⨖',
      intlarhk: '⨗',
      pluscir: '⨢',
      plusacir: '⨣',
      simplus: '⨤',
      plusdu: '⨥',
      plussim: '⨦',
      plustwo: '⨧',
      mcomma: '⨩',
      minusdu: '⨪',
      loplus: '⨭',
      roplus: '⨮',
      Cross: '⨯',
      timesd: '⨰',
      timesbar: '⨱',
      smashp: '⨳',
      lotimes: '⨴',
      rotimes: '⨵',
      otimesas: '⨶',
      Otimes: '⨷',
      odiv: '⨸',
      triplus: '⨹',
      triminus: '⨺',
      tritime: '⨻',
      intprod: '⨼',
      iprod: '⨼',
      amalg: '⨿',
      capdot: '⩀',
      ncup: '⩂',
      ncap: '⩃',
      capand: '⩄',
      cupor: '⩅',
      cupcap: '⩆',
      capcup: '⩇',
      cupbrcap: '⩈',
      capbrcup: '⩉',
      cupcup: '⩊',
      capcap: '⩋',
      ccups: '⩌',
      ccaps: '⩍',
      ccupssm: '⩐',
      And: '⩓',
      Or: '⩔',
      andand: '⩕',
      oror: '⩖',
      orslope: '⩗',
      andslope: '⩘',
      andv: '⩚',
      orv: '⩛',
      andd: '⩜',
      ord: '⩝',
      wedbar: '⩟',
      sdote: '⩦',
      simdot: '⩪',
      congdot: '⩭',
      ncongdot: '⩭̸',
      easter: '⩮',
      apacir: '⩯',
      apE: '⩰',
      nape: '⩰̸',
      eplus: '⩱',
      pluse: '⩲',
      Esim: '⩳',
      ddotseq: '⩷',
      eddot: '⩷',
      equivdd: '⩸',
      ltcir: '⩹',
      gtcir: '⩺',
      ltquest: '⩻',
      gtquest: '⩼',
      leqslant: '⩽',
      les: '⩽',
      lessslantequal: '⩽',
      nleqslant: '⩽̸',
      nles: '⩽̸',
      notlessslantequal: '⩽̸',
      geqslant: '⩾',
      ges: '⩾',
      greaterslantequal: '⩾',
      ngeqslant: '⩾̸',
      nges: '⩾̸',
      notgreaterslantequal: '⩾̸',
      lesdot: '⩿',
      gesdot: '⪀',
      lesdoto: '⪁',
      gesdoto: '⪂',
      lesdotor: '⪃',
      gesdotol: '⪄',
      lap: '⪅',
      lessapprox: '⪅',
      gap: '⪆',
      gtrapprox: '⪆',
      lne: '⪇',
      lneq: '⪇',
      gne: '⪈',
      gneq: '⪈',
      lnap: '⪉',
      lnapprox: '⪉',
      gnap: '⪊',
      gnapprox: '⪊',
      lEg: '⪋',
      lesseqqgtr: '⪋',
      gEl: '⪌',
      gtreqqless: '⪌',
      lsime: '⪍',
      gsime: '⪎',
      lsimg: '⪏',
      gsiml: '⪐',
      lge: '⪑',
      gle: '⪒',
      lesges: '⪓',
      gesles: '⪔',
      els: '⪕',
      eqslantless: '⪕',
      egs: '⪖',
      eqslantgtr: '⪖',
      elsdot: '⪗',
      egsdot: '⪘',
      el: '⪙',
      eg: '⪚',
      siml: '⪝',
      simg: '⪞',
      simle: '⪟',
      simge: '⪠',
      lessless: '⪡',
      notnestedlessless: '⪡̸',
      greatergreater: '⪢',
      notnestedgreatergreater: '⪢̸',
      glj: '⪤',
      gla: '⪥',
      ltcc: '⪦',
      gtcc: '⪧',
      lescc: '⪨',
      gescc: '⪩',
      smt: '⪪',
      lat: '⪫',
      smte: '⪬',
      smtes: '⪬︀',
      late: '⪭',
      lates: '⪭︀',
      bumpE: '⪮',
      pre: '⪯',
      precedesequal: '⪯',
      preceq: '⪯',
      notprecedesequal: '⪯̸',
      npre: '⪯̸',
      npreceq: '⪯̸',
      sce: '⪰',
      succeedsequal: '⪰',
      succeq: '⪰',
      notsucceedsequal: '⪰̸',
      nsce: '⪰̸',
      nsucceq: '⪰̸',
      prE: '⪳',
      scE: '⪴',
      precneqq: '⪵',
      prne: '⪵',
      scne: '⪶',
      succneqq: '⪶',
      prap: '⪷',
      precapprox: '⪷',
      scap: '⪸',
      succapprox: '⪸',
      precnapprox: '⪹',
      prnap: '⪹',
      scnap: '⪺',
      succnapprox: '⪺',
      Pr: '⪻',
      Sc: '⪼',
      subdot: '⪽',
      supdot: '⪾',
      subplus: '⪿',
      supplus: '⫀',
      submult: '⫁',
      supmult: '⫂',
      subedot: '⫃',
      supedot: '⫄',
      subE: '⫅',
      subseteqq: '⫅',
      nsubE: '⫅̸',
      nsubseteqq: '⫅̸',
      supE: '⫆',
      supseteqq: '⫆',
      nsupE: '⫆̸',
      nsupseteqq: '⫆̸',
      subsim: '⫇',
      supsim: '⫈',
      subnE: '⫋',
      subsetneqq: '⫋',
      varsubsetneqq: '⫋︀',
      vsubnE: '⫋︀',
      supnE: '⫌',
      supsetneqq: '⫌',
      varsupsetneqq: '⫌︀',
      vsupnE: '⫌︀',
      csub: '⫏',
      csup: '⫐',
      csube: '⫑',
      csupe: '⫒',
      subsup: '⫓',
      supsub: '⫔',
      subsub: '⫕',
      supsup: '⫖',
      suphsub: '⫗',
      supdsub: '⫘',
      forkv: '⫙',
      topfork: '⫚',
      mlcp: '⫛',
      Dashv: '⫤',
      doublelefttee: '⫤',
      vdashl: '⫦',
      barv: '⫧',
      vbar: '⫨',
      vbarv: '⫩',
      Vbar: '⫫',
      Not: '⫬',
      bNot: '⫭',
      rnmid: '⫮',
      cirmid: '⫯',
      midcir: '⫰',
      topcir: '⫱',
      nhpar: '⫲',
      parsim: '⫳',
      parsl: '⫽',
      nparsl: '⫽⃥',
      flat: '♭',
      natur: '♮',
      natural: '♮',
      sharp: '♯',
      curren: '¤',
      cent: '¢',
      dollar: '$',
      pound: '£',
      yen: '¥',
      euro: '€',
      sup1: '¹',
      frac12: '½',
      half: '½',
      frac13: '⅓',
      frac14: '¼',
      frac15: '⅕',
      frac16: '⅙',
      frac18: '⅛',
      sup2: '²',
      frac23: '⅔',
      frac25: '⅖',
      sup3: '³',
      frac34: '¾',
      frac35: '⅗',
      frac38: '⅜',
      frac45: '⅘',
      frac56: '⅚',
      frac58: '⅝',
      frac78: '⅞',
      afr: '\uD835\uDD1E',
      aopf: '\uD835\uDD52',
      ascr: '\uD835\uDCB6',
      Afr: '\uD835\uDD04',
      Aopf: '\uD835\uDD38',
      Ascr: '\uD835\uDC9C',
      ordf: 'ª',
      aacute: 'á',
      Aacute: 'Á',
      agrave: 'à',
      Agrave: 'À',
      abreve: 'ă',
      Abreve: 'Ă',
      acirc: 'â',
      Acirc: 'Â',
      aring: 'å',
      angst: 'Å',
      Aring: 'Å',
      auml: 'ä',
      Auml: 'Ä',
      atilde: 'ã',
      Atilde: 'Ã',
      aogon: 'ą',
      Aogon: 'Ą',
      amacr: 'ā',
      Amacr: 'Ā',
      aelig: 'Æ',
      AElig: 'Æ',
      bfr: '\uD835\uDD1F',
      bopf: '\uD835\uDD53',
      bscr: '\uD835\uDCB7',
      bernou: 'ℬ',
      bernoullis: 'ℬ',
      Bfr: '\uD835\uDD05',
      Bopf: '\uD835\uDD39',
      Bscr: 'ℬ',
      cfr: '\uD835\uDD20',
      copf: '\uD835\uDD54',
      cscr: '\uD835\uDCB8',
      cayleys: 'ℭ',
      Cfr: 'ℭ',
      complexes: 'ℂ',
      Copf: 'ℂ',
      Cscr: '\uD835\uDC9E',
      cacute: 'ć',
      Cacute: 'Ć',
      ccirc: 'ĉ',
      Ccirc: 'Ĉ',
      ccaron: 'č',
      Ccaron: 'Č',
      cdot: 'ċ',
      Cdot: 'Ċ',
      ccedil: 'ç',
      Ccedil: 'Ç',
      incare: '℅',
      dfr: '\uD835\uDD21',
      differentiald: 'ⅆ',
      dopf: '\uD835\uDD55',
      dscr: '\uD835\uDCB9',
      capitaldifferentiald: 'ⅅ',
      dd: 'ⅅ',
      DD: 'ⅅ',
      Dfr: '\uD835\uDD07',
      Dopf: '\uD835\uDD3B',
      Dscr: '\uD835\uDC9F',
      dcaron: 'ď',
      Dcaron: 'Ď',
      dstrok: 'đ',
      Dstrok: 'Đ',
      eth: 'ð',
      ETH: 'Ð',
      ee: 'ⅇ',
      efr: '\uD835\uDD22',
      eopf: '\uD835\uDD56',
      escr: 'ℯ',
      exponentiale: 'ⅇ',
      Efr: '\uD835\uDD08',
      Eopf: '\uD835\uDD3C',
      Escr: 'ℰ',
      expectation: 'ℰ',
      eacute: 'é',
      Eacute: 'É',
      egrave: 'è',
      Egrave: 'È',
      ecirc: 'ê',
      Ecirc: 'Ê',
      ecaron: 'ě',
      Ecaron: 'Ě',
      euml: 'ë',
      Euml: 'Ë',
      edot: 'ė',
      Edot: 'Ė',
      eogon: 'ę',
      Eogon: 'Ę',
      emacr: 'ē',
      Emacr: 'Ē',
      ffr: '\uD835\uDD23',
      fopf: '\uD835\uDD57',
      fscr: '\uD835\uDCBB',
      Ffr: '\uD835\uDD09',
      Fopf: '\uD835\uDD3D',
      fouriertrf: 'ℱ',
      Fscr: 'ℱ',
      fflig: 'ﬀ',
      ffilig: 'ﬃ',
      ffllig: 'ﬄ',
      filig: 'ﬁ',
      fjlig: 'fj',
      fllig: 'ﬂ',
      fnof: 'ƒ',
      gfr: '\uD835\uDD24',
      gopf: '\uD835\uDD58',
      gscr: 'ℊ',
      Gfr: '\uD835\uDD0A',
      Gopf: '\uD835\uDD3E',
      Gscr: '\uD835\uDCA2',
      gacute: 'ǵ',
      gbreve: 'ğ',
      Gbreve: 'Ğ',
      gcirc: 'ĝ',
      Gcirc: 'Ĝ',
      gdot: 'ġ',
      Gdot: 'Ġ',
      gcedil: 'Ģ',
      hfr: '\uD835\uDD25',
      hopf: '\uD835\uDD59',
      hscr: '\uD835\uDCBD',
      planckh: 'ℎ',
      hamilt: 'ℋ',
      Hfr: 'ℌ',
      hilbertspace: 'ℋ',
      Hopf: 'ℍ',
      Hscr: 'ℋ',
      poincareplane: 'ℌ',
      quaternions: 'ℍ',
      hcirc: 'ĥ',
      Hcirc: 'Ĥ',
      hbar: 'ℏ',
      hslash: 'ℏ',
      hstrok: 'ħ',
      planck: 'ℏ',
      plankv: 'ℏ',
      Hstrok: 'Ħ',
      ifr: '\uD835\uDD26',
      ii: 'ⅈ',
      imaginaryi: 'ⅈ',
      iopf: '\uD835\uDD5A',
      iscr: '\uD835\uDCBE',
      Ifr: 'ℑ',
      im: 'ℑ',
      image: 'ℑ',
      imagline: 'ℐ',
      imagpart: 'ℑ',
      Iopf: '\uD835\uDD40',
      Iscr: 'ℐ',
      iacute: 'í',
      Iacute: 'Í',
      igrave: 'ì',
      Igrave: 'Ì',
      icirc: 'î',
      Icirc: 'Î',
      iuml: 'ï',
      Iuml: 'Ï',
      itilde: 'ĩ',
      Itilde: 'Ĩ',
      idot: 'İ',
      iogon: 'į',
      Iogon: 'Į',
      imacr: 'ī',
      Imacr: 'Ī',
      ijlig: 'Ĳ',
      IJlig: 'Ĳ',
      imath: 'ı',
      inodot: 'ı',
      jfr: '\uD835\uDD27',
      jopf: '\uD835\uDD5B',
      jscr: '\uD835\uDCBF',
      Jfr: '\uD835\uDD0D',
      Jopf: '\uD835\uDD41',
      Jscr: '\uD835\uDCA5',
      jcirc: 'ĵ',
      Jcirc: 'Ĵ',
      jmath: 'ȷ',
      kfr: '\uD835\uDD28',
      kopf: '\uD835\uDD5C',
      kscr: '\uD835\uDCC0',
      Kfr: '\uD835\uDD0E',
      Kopf: '\uD835\uDD42',
      Kscr: '\uD835\uDCA6',
      kcedil: 'ķ',
      Kcedil: 'Ķ',
      ell: 'ℓ',
      lfr: '\uD835\uDD29',
      lopf: '\uD835\uDD5D',
      lscr: '\uD835\uDCC1',
      lagran: 'ℒ',
      laplacetrf: 'ℒ',
      Lfr: '\uD835\uDD0F',
      Lopf: '\uD835\uDD43',
      Lscr: 'ℒ',
      lacute: 'ĺ',
      Lacute: 'Ĺ',
      lcaron: 'ľ',
      Lcaron: 'Ľ',
      lcedil: 'ļ',
      Lcedil: 'Ļ',
      lstrok: 'ł',
      Lstrok: 'Ł',
      lmidot: 'ŀ',
      Lmidot: 'Ŀ',
      mfr: '\uD835\uDD2A',
      mopf: '\uD835\uDD5E',
      mscr: '\uD835\uDCC2',
      mellintrf: 'ℳ',
      Mfr: '\uD835\uDD10',
      Mopf: '\uD835\uDD44',
      Mscr: 'ℳ',
      phmmat: 'ℳ',
      nfr: '\uD835\uDD2B',
      nopf: '\uD835\uDD5F',
      nscr: '\uD835\uDCC3',
      naturals: 'ℕ',
      Nfr: '\uD835\uDD11',
      Nopf: 'ℕ',
      Nscr: '\uD835\uDCA9',
      nacute: 'ń',
      Nacute: 'Ń',
      ncaron: 'ň',
      Ncaron: 'Ň',
      ntilde: 'ñ',
      Ntilde: 'Ñ',
      ncedil: 'ņ',
      Ncedil: 'Ņ',
      numero: '№',
      eng: 'ŋ',
      ENG: 'Ŋ',
      ofr: '\uD835\uDD2C',
      oopf: '\uD835\uDD60',
      order: 'ℴ',
      orderof: 'ℴ',
      oscr: 'ℴ',
      Ofr: '\uD835\uDD12',
      Oopf: '\uD835\uDD46',
      Oscr: '\uD835\uDCAA',
      ordm: 'º',
      oacute: 'ó',
      Oacute: 'Ó',
      ograve: 'ò',
      Ograve: 'Ò',
      ocirc: 'ô',
      Ocirc: 'Ô',
      ouml: 'ö',
      Ouml: 'Ö',
      odblac: 'ő',
      Odblac: 'Ő',
      otilde: 'õ',
      Otilde: 'Õ',
      oslash: 'ø',
      Oslash: 'Ø',
      omacr: 'ō',
      Omacr: 'Ō',
      oelig: 'Œ',
      OElig: 'Œ',
      pfr: '\uD835\uDD2D',
      popf: '\uD835\uDD61',
      pscr: '\uD835\uDCC5',
      Pfr: '\uD835\uDD13',
      Popf: 'ℙ',
      primes: 'ℙ',
      Pscr: '\uD835\uDCAB',
      qfr: '\uD835\uDD2E',
      qopf: '\uD835\uDD62',
      qscr: '\uD835\uDCC6',
      Qfr: '\uD835\uDD14',
      Qopf: 'ℚ',
      Qscr: '\uD835\uDCAC',
      rationals: 'ℚ',
      kgreen: 'ĸ',
      rfr: '\uD835\uDD2F',
      ropf: '\uD835\uDD63',
      rscr: '\uD835\uDCC7',
      re: 'ℜ',
      real: 'ℜ',
      realine: 'ℛ',
      realpart: 'ℜ',
      reals: 'ℝ',
      Rfr: 'ℜ',
      Ropf: 'ℝ',
      Rscr: 'ℛ',
      racute: 'ŕ',
      Racute: 'Ŕ',
      rcaron: 'ř',
      Rcaron: 'Ř',
      rcedil: 'ŗ',
      Rcedil: 'Ŗ',
      sfr: '\uD835\uDD30',
      sopf: '\uD835\uDD64',
      sscr: '\uD835\uDCC8',
      Sfr: '\uD835\uDD16',
      Sopf: '\uD835\uDD4A',
      Sscr: '\uD835\uDCAE',
      circleds: 'Ⓢ',
      os: 'Ⓢ',
      sacute: 'ś',
      Sacute: 'Ś',
      scirc: 'ŝ',
      Scirc: 'Ŝ',
      scaron: 'š',
      Scaron: 'Š',
      scedil: 'ş',
      Scedil: 'Ş',
      szlig: 'ß',
      tfr: '\uD835\uDD31',
      topf: '\uD835\uDD65',
      tscr: '\uD835\uDCC9',
      Tfr: '\uD835\uDD17',
      Topf: '\uD835\uDD4B',
      Tscr: '\uD835\uDCAF',
      tcaron: 'ť',
      Tcaron: 'Ť',
      tcedil: 'ţ',
      Tcedil: 'Ţ',
      trade: '™',
      tstrok: 'ŧ',
      Tstrok: 'Ŧ',
      ufr: '\uD835\uDD32',
      uopf: '\uD835\uDD66',
      uscr: '\uD835\uDCCA',
      Ufr: '\uD835\uDD18',
      Uopf: '\uD835\uDD4C',
      Uscr: '\uD835\uDCB0',
      uacute: 'ú',
      Uacute: 'Ú',
      ugrave: 'ù',
      Ugrave: 'Ù',
      ubreve: 'ŭ',
      Ubreve: 'Ŭ',
      ucirc: 'û',
      Ucirc: 'Û',
      uring: 'ů',
      Uring: 'Ů',
      uuml: 'ü',
      Uuml: 'Ü',
      udblac: 'ű',
      Udblac: 'Ű',
      utilde: 'ũ',
      Utilde: 'Ũ',
      uogon: 'ų',
      Uogon: 'Ų',
      umacr: 'ū',
      Umacr: 'Ū',
      vfr: '\uD835\uDD33',
      vopf: '\uD835\uDD67',
      vscr: '\uD835\uDCCB',
      Vfr: '\uD835\uDD19',
      Vopf: '\uD835\uDD4D',
      Vscr: '\uD835\uDCB1',
      wfr: '\uD835\uDD34',
      wopf: '\uD835\uDD68',
      wscr: '\uD835\uDCCC',
      Wfr: '\uD835\uDD1A',
      Wopf: '\uD835\uDD4E',
      Wscr: '\uD835\uDCB2',
      wcirc: 'ŵ',
      Wcirc: 'Ŵ',
      xfr: '\uD835\uDD35',
      xopf: '\uD835\uDD69',
      xscr: '\uD835\uDCCD',
      Xfr: '\uD835\uDD1B',
      Xopf: '\uD835\uDD4F',
      Xscr: '\uD835\uDCB3',
      yfr: '\uD835\uDD36',
      yopf: '\uD835\uDD6A',
      yscr: '\uD835\uDCCE',
      Yfr: '\uD835\uDD1C',
      Yopf: '\uD835\uDD50',
      Yscr: '\uD835\uDCB4',
      yacute: 'ý',
      Yacute: 'Ý',
      ycirc: 'ŷ',
      Ycirc: 'Ŷ',
      yuml: 'ÿ',
      Yuml: 'Ÿ',
      zfr: '\uD835\uDD37',
      zopf: '\uD835\uDD6B',
      zscr: '\uD835\uDCCF',
      integers: 'ℤ',
      zeetrf: 'ℨ',
      Zfr: 'ℨ',
      Zopf: 'ℤ',
      Zscr: '\uD835\uDCB5',
      zacute: 'ź',
      Zacute: 'Ź',
      zcaron: 'ž',
      Zcaron: 'Ž',
      zdot: 'ż',
      Zdot: 'Ż',
      imped: 'Ƶ',
      thorn: 'þ',
      THORN: 'Þ',
      napos: 'ŉ',
      alpha: 'α',
      Alpha: 'Α',
      beta: 'β',
      Beta: 'Β',
      gamma: 'γ',
      Gamma: 'Γ',
      delta: 'δ',
      Delta: 'Δ',
      epsi: 'ε',
      epsilon: 'ε',
      epsiv: 'ϵ',
      straightepsilon: 'ϵ',
      varepsilon: 'ϵ',
      Epsilon: 'Ε',
      digamma: 'ϝ',
      gammad: 'ϝ',
      Gammad: 'Ϝ',
      zeta: 'ζ',
      Zeta: 'Ζ',
      eta: 'η',
      Eta: 'Η',
      theta: 'θ',
      thetasym: 'ϑ',
      thetav: 'ϑ',
      vartheta: 'ϑ',
      Theta: 'Θ',
      iota: 'ι',
      Iota: 'Ι',
      kappa: 'κ',
      kappav: 'ϰ',
      varkappa: 'ϰ',
      Kappa: 'Κ',
      lambda: 'λ',
      Lambda: 'Λ',
      mu: 'μ',
      micro: 'µ',
      Mu: 'Μ',
      nu: 'ν',
      Nu: 'Ν',
      xi: 'ξ',
      Xi: 'Ξ',
      omicron: 'ο',
      Omicron: 'Ο',
      pi: 'π',
      piv: 'ϖ',
      varpi: 'ϖ',
      Pi: 'Π',
      rho: 'ρ',
      rhov: 'ϱ',
      varrho: 'ϱ',
      Rho: 'Ρ',
      sigma: 'σ',
      Sigma: 'Σ',
      sigmaf: 'ς',
      sigmav: 'ς',
      varsigma: 'ς',
      tau: 'τ',
      Tau: 'Τ',
      upsi: 'υ',
      upsilon: 'υ',
      Upsilon: 'Υ',
      Upsi: 'ϒ',
      upsih: 'ϒ',
      phi: 'φ',
      phiv: 'ϕ',
      straightphi: 'ϕ',
      varphi: 'ϕ',
      Phi: 'Φ',
      chi: 'χ',
      Chi: 'Χ',
      psi: 'ψ',
      Psi: 'Ψ',
      omega: 'ω',
      ohm: 'Ω',
      Omega: 'Ω',
      acy: 'а',
      Acy: 'А',
      bcy: 'б',
      Bcy: 'Б',
      vcy: 'в',
      Vcy: 'В',
      gcy: 'г',
      Gcy: 'Г',
      gjcy: 'Ѓ',
      GJcy: 'Ѓ',
      dcy: 'д',
      Dcy: 'Д',
      djcy: 'Ђ',
      DJcy: 'Ђ',
      iecy: 'Е',
      IEcy: 'Е',
      iocy: 'Ё',
      IOcy: 'Ё',
      jukcy: 'є',
      Jukcy: 'Є',
      zhcy: 'Ж',
      ZHcy: 'Ж',
      zcy: 'з',
      Zcy: 'З',
      dscy: 'Ѕ',
      DScy: 'Ѕ',
      icy: 'и',
      Icy: 'И',
      iukcy: 'і',
      Iukcy: 'І',
      yicy: 'Ї',
      YIcy: 'Ї',
      jcy: 'й',
      Jcy: 'Й',
      jsercy: 'ј',
      Jsercy: 'Ј',
      kcy: 'к',
      Kcy: 'К',
      kjcy: 'Ќ',
      KJcy: 'Ќ',
      lcy: 'л',
      Lcy: 'Л',
      ljcy: 'Љ',
      LJcy: 'Љ',
      mcy: 'м',
      Mcy: 'М',
      ncy: 'н',
      Ncy: 'Н',
      njcy: 'Њ',
      NJcy: 'Њ',
      ocy: 'о',
      Ocy: 'О',
      pcy: 'п',
      Pcy: 'П',
      rcy: 'р',
      Rcy: 'Р',
      scy: 'с',
      Scy: 'С',
      tcy: 'т',
      Tcy: 'Т',
      tshcy: 'ћ',
      TSHcy: 'Ћ',
      ucy: 'у',
      Ucy: 'У',
      ubrcy: 'ў',
      Ubrcy: 'Ў',
      fcy: 'ф',
      Fcy: 'Ф',
      khcy: 'Х',
      KHcy: 'Х',
      tscy: 'Ц',
      TScy: 'Ц',
      chcy: 'Ч',
      CHcy: 'Ч',
      dzcy: 'Џ',
      DZcy: 'Џ',
      shcy: 'Ш',
      SHcy: 'Ш',
      shchcy: 'щ',
      SHCHcy: 'Щ',
      hardcy: 'ъ',
      HARDcy: 'Ъ',
      ycy: 'ы',
      Ycy: 'Ы',
      softcy: 'ь',
      SOFTcy: 'Ь',
      ecy: 'э',
      Ecy: 'Э',
      yucy: 'Ю',
      YUcy: 'Ю',
      yacy: 'Я',
      YAcy: 'Я',
      alefsym: 'ℵ',
      aleph: 'ℵ',
      beth: 'ℶ',
      gimel: 'ℷ',
      daleth: 'ℸ',
    };
    function v(j) {
      return q[j] || q[j.toLowerCase()];
    }
    //# debugId=48A6BB2BF21BA00564756E2164756E21
    //# sourceMappingURL=entities.generated.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/markdown-to-jsx/dist/index.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'Markdown',
      () => oZ,
      'RuleType',
      () => O,
      'compiler',
      () => A$,
      'default',
      () => X5,
      'parser',
      () => sZ,
      'sanitizer',
      () => s1,
      'slugify',
      () => J1,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$markdown$2d$to$2d$jsx$2f$dist$2f$entities$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/markdown-to-jsx/dist/entities.generated.js [app-rsc] (ecmascript)',
      );
    var Z6 = Object.defineProperty;
    var G6 = ($, Z) => {
      for (var Y in Z)
        Z6($, Y, {
          get: Z[Y],
          enumerable: !0,
          configurable: !0,
          set: (G) => (Z[Y] = () => G),
        });
    };
    var C = 32,
      l = 9,
      V0 = 13,
      d = 10,
      t0 = 96,
      e1 = 126,
      g1 = 91,
      D9 = 94,
      C1 = 62,
      T9 = 35,
      U5 = 37,
      D1 = 45,
      d1 = 61,
      k1 = 92,
      S9 = 42,
      $9 = 95,
      j9 = 60,
      E9 = 64,
      H9 = 93,
      F9 = 33,
      x9 = 38,
      P9 = 58,
      Q5 = 70,
      i1 = 102,
      c1 = 104,
      x1 = 119,
      r9 = 116,
      B$ = 112,
      zZ = 115,
      _Z = 160,
      qZ = 12;
    var I9 = 46,
      Z9 = 47;
    var z5 = 34,
      DZ = 43,
      jZ = 124,
      HZ = 123;
    var FZ = 40,
      OZ = 41,
      N$ = 120,
      y$ = 88,
      G9 = 48,
      Y9 = 57,
      m1 = 65,
      h1 = 90,
      a1 = 97,
      r1 = 122,
      K1 = 128,
      WZ = 32;
    var Y6 = {
        blockQuote: 0,
        breakLine: 1,
        breakThematic: 2,
        codeBlock: 3,
        codeInline: 4,
        footnote: 5,
        footnoteReference: 6,
        frontmatter: 7,
        gfmTask: 8,
        heading: 9,
        htmlBlock: 10,
        htmlComment: 11,
        htmlSelfClosing: 12,
        image: 13,
        link: 14,
        orderedList: 15,
        paragraph: 16,
        ref: 17,
        refCollection: 18,
        table: 19,
        text: 20,
        textFormatted: 21,
        unorderedList: 22,
      },
      O = Y6;
    var P$ = {};
    G6(P$, {
      startsWith: () => c,
      slugify: () => J1,
      skipWhitespace: () => g0,
      shouldFilterTag: () => $$,
      sanitizer: () => s1,
      parseFrontmatterBounds: () => L$,
      normalizeInput: () => p1,
      normalizeCRLF: () => j6,
      isVoidElement: () => K9,
      isUnicodeWhitespace: () => V9,
      isUnicodePunctuation: () => t9,
      isAlnumCode: () => o9,
      isASCIIWhitespace: () => g9,
      isASCIIPunctuation: () => _6,
      inlineCharTypeTable: () => f9,
      includes: () => V6,
      htmlAttrsToJSXProps: () => s9,
      hasKeys: () => e9,
      getTag: () => H6,
      getOverrideProps: () => F6,
      get: () => x$,
      findLineEnd: () => I,
      extractPlainText: () => wZ,
      endsWith: () => n9,
      decodeEntityReferences: () => M9,
      charClassTable: () => W9,
      applyTagFilterToText: () => Z$,
      VOID_ELEMENTS: () => R$,
      SHOULD_RENDER_AS_BLOCK_R: () => T$,
      SANITIZE_R: () => O9,
      NAMED_CODES_TO_UNICODE: () => K6,
      HTML_TO_JSX_MAP: () => AZ,
      HTML_CHAR_CODE_R: () => vZ,
      ATTRIBUTES_TO_SANITIZE: () => S$,
    });
    function L$($) {
      if (!c($, '---')) return null;
      let Z = 3;
      while (Z < $.length && ($[Z] === ' ' || $[Z] === '\t')) Z++;
      if (Z < $.length && $[Z] === '\r') Z++;
      if (
        Z >= $.length ||
        $[Z] !==
          `
`
      )
        return null;
      Z++;
      let Y = !1;
      while (Z < $.length) {
        let G = Z;
        while (
          Z < $.length &&
          $[Z] !==
            `
` &&
          $[Z] !== '\r'
        )
          Z++;
        if (Z >= $.length) break;
        let J = Z;
        if ($[Z] === '\r') Z++;
        if (
          Z < $.length &&
          $[Z] ===
            `
`
        )
          Z++;
        if (c($, '---', G))
          return {
            endPos: Z,
            hasValidYaml: Y,
          };
        let X = $.indexOf(':', G);
        if (X !== -1 && X < J) Y = !0;
      }
      return null;
    }
    var K6 =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$markdown$2d$to$2d$jsx$2f$dist$2f$entities$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'NAMED_CODES_TO_UNICODE'
        ],
      vZ = /&([a-zA-Z0-9]+|#[0-9]{1,7}|#x[0-9a-fA-F]{1,6});/gi,
      AZ = {
        class: 'className',
        for: 'htmlFor',
        allowfullscreen: 'allowFullScreen',
        allowtransparency: 'allowTransparency',
        autocomplete: 'autoComplete',
        autofocus: 'autoFocus',
        autoplay: 'autoPlay',
        cellpadding: 'cellPadding',
        cellspacing: 'cellSpacing',
        charset: 'charSet',
        classid: 'classId',
        colspan: 'colSpan',
        contenteditable: 'contentEditable',
        contextmenu: 'contextMenu',
        crossorigin: 'crossOrigin',
        enctype: 'encType',
        formaction: 'formAction',
        formenctype: 'formEncType',
        formmethod: 'formMethod',
        formnovalidate: 'formNoValidate',
        formtarget: 'formTarget',
        frameborder: 'frameBorder',
        hreflang: 'hrefLang',
        inputmode: 'inputMode',
        keyparams: 'keyParams',
        keytype: 'keyType',
        marginheight: 'marginHeight',
        marginwidth: 'marginWidth',
        maxlength: 'maxLength',
        mediagroup: 'mediaGroup',
        minlength: 'minLength',
        novalidate: 'noValidate',
        radiogroup: 'radioGroup',
        readonly: 'readOnly',
        rowspan: 'rowSpan',
        spellcheck: 'spellCheck',
        srcdoc: 'srcDoc',
        srclang: 'srcLang',
        srcset: 'srcSet',
        tabindex: 'tabIndex',
        usemap: 'useMap',
      };
    function s9($) {
      var Z = {};
      for (var Y in $) {
        var G = Y.toLowerCase(),
          J = AZ[G];
        Z[J || Y] = $[Y];
      }
      return Z;
    }
    var T$ = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;
    function M9($) {
      if ($.indexOf('&') === -1) return $;
      return $.replace(vZ, (Z, Y) => {
        var G = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$markdown$2d$to$2d$jsx$2f$dist$2f$entities$2e$generated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'decodeEntity'
        ])(Y);
        if (G) return G;
        if (Y[0] === '#') {
          var J =
            Y[1] === 'x' || Y[1] === 'X'
              ? parseInt(Y.slice(2), 16)
              : parseInt(Y.slice(1), 10);
          if (J === 0 || (J >= 55296 && J <= 57343) || J > 1114111) return '�';
          return J <= 65535
            ? String.fromCharCode(J)
            : String.fromCharCode(
                55296 + ((J - 65536) >> 10),
                56320 + ((J - 65536) & 1023),
              );
        }
        return Z;
      });
    }
    var O9 = /(javascript|vbscript|data(?!:image)):/i;
    function s1($) {
      if (O9.test($)) return null;
      if ($.indexOf('%') === -1) return $;
      try {
        let Z = decodeURIComponent($).replace(/[^A-Za-z0-9/:]/g, '');
        if (O9.test(Z)) return null;
      } catch (Z) {
        return null;
      }
      return $;
    }
    var c0 = {},
      e0,
      x0;
    e0 = [192, 193, 194, 195, 196, 197, 224, 225, 226, 227, 228, 229, 230, 198];
    for (x0 = 0; x0 < e0.length; x0++) c0[e0[x0]] = 'a';
    c0[231] = c0[199] = 'c';
    c0[240] = c0[208] = 'd';
    e0 = [200, 201, 202, 203, 233, 232, 234, 235];
    for (x0 = 0; x0 < e0.length; x0++) c0[e0[x0]] = 'e';
    e0 = [207, 239, 206, 238, 205, 237, 204, 236];
    for (x0 = 0; x0 < e0.length; x0++) c0[e0[x0]] = 'i';
    c0[209] = c0[241] = 'n';
    e0 = [248, 216, 339, 338, 213, 245, 212, 244, 211, 243, 210, 242];
    for (x0 = 0; x0 < e0.length; x0++) c0[e0[x0]] = 'o';
    e0 = [220, 252, 219, 251, 218, 250, 217, 249];
    for (x0 = 0; x0 < e0.length; x0++) c0[e0[x0]] = 'u';
    c0[376] = c0[255] = c0[221] = c0[253] = 'y';
    function o9($) {
      return (
        ($ >= G9 && $ <= Y9) || ($ >= m1 && $ <= h1) || ($ >= a1 && $ <= r1)
      );
    }
    function J1($) {
      var Z = [];
      for (var Y = 0; Y < $.length; Y++) {
        var G = $.charCodeAt(Y);
        if (o9(G))
          if (G >= m1 && G <= h1) Z.push(String.fromCharCode(G + WZ));
          else Z.push($[Y]);
        else if (G === C || G === D1) Z.push('-');
        else {
          var J = c0[G];
          if (J) Z.push(J);
        }
      }
      return Z.join('');
    }
    function V6($, Z) {
      return $.indexOf(Z) !== -1;
    }
    function c($, Z, Y) {
      return $.startsWith(Z, Y);
    }
    function n9($, Z, Y) {
      return $.startsWith(Z, (Y === void 0 ? $.length : Y) - Z.length);
    }
    var R$ = new Set([
      'area',
      'base',
      'br',
      'col',
      'embed',
      'hr',
      'img',
      'input',
      'link',
      'meta',
      'param',
      'source',
      'track',
      'wbr',
      'circle',
      'ellipse',
      'line',
      'path',
      'polygon',
      'polyline',
      'rect',
      'use',
      'stop',
      'animate',
      'animateTransform',
      'set',
    ]);
    function K9($) {
      let Z = $.toLowerCase();
      if (R$.has(Z)) return !0;
      let Y = Z.indexOf(':');
      if (Y !== -1) return (Z = Z.slice(Y + 1)), R$.has(Z);
      return !1;
    }
    var S$ = ['src', 'href', 'data', 'formAction', 'srcDoc', 'action'],
      E$ = 1,
      X9 = 2,
      MZ = 1,
      U6 = 2,
      Q6 = 3,
      z6 = 4,
      W9 = (function () {
        let $ = new Uint8Array(128),
          Z;
        $[l] = $[d] = $[qZ] = $[V0] = $[C] = E$;
        for (Z = F9; Z <= Z9; Z++) $[Z] = X9;
        for (Z = P9; Z <= E9; Z++) $[Z] = X9;
        for (Z = g1; Z <= t0; Z++) $[Z] = X9;
        for (Z = HZ; Z <= e1; Z++) $[Z] = X9;
        return $;
      })(),
      f9 = (function () {
        let $ = new Uint8Array(128);
        return (
          ($[k1] = U6),
          ($[g1] = z6),
          ($[S9] = $[$9] = $[e1] = $[d1] = Q6),
          ($[t0] = $[j9] = $[E9] = $[H9] = $[d] = $[C] = $[F9] = MZ),
          ($[i1] = $[c1] = $[x1] = MZ),
          $
        );
      })();
    function _6($) {
      return $ < K1 && (W9[$] & X9) !== 0;
    }
    function g9($) {
      return $ < K1 && (W9[$] & E$) !== 0;
    }
    var q6 = /[\p{P}\p{S}]/u,
      D6 = /\p{Zs}/u;
    function V9($) {
      if (!$) return !0;
      let Z = $.charCodeAt(0);
      return Z < K1 ? (W9[Z] & E$) !== 0 : D6.test($);
    }
    function t9($) {
      if (typeof $ === 'number') return $ < K1 && (W9[$] & X9) !== 0;
      if (!$) return !1;
      let Z = $.charCodeAt(0);
      return Z < K1 ? (W9[Z] & X9) !== 0 : q6.test($);
    }
    function I($, Z) {
      let Y = $.indexOf(
        `
`,
        Z,
      );
      if (Y === -1) return $.length;
      if (Y > 0 && $.charCodeAt(Y - 1) === V0) return Y - 1;
      return Y;
    }
    var J9 = [];
    function p1($) {
      var Z = $.indexOf('\r'),
        Y = $.indexOf('\x00');
      if (Z === -1 && Y === -1) return $;
      var G = $.length;
      J9.length = 0;
      var J = 0,
        X = 0;
      if (Z === -1) X = Y;
      else if (Y === -1) X = Z;
      else X = Z < Y ? Z : Y;
      for (; X < G; X++) {
        var K = $.charCodeAt(X);
        if (K === V0) {
          if (J < X) J9.push($.slice(J, X));
          if (X + 1 < G && $.charCodeAt(X + 1) === d) X++;
          J9.push(`
`),
            (J = X + 1);
        } else if (K === 0) {
          if (J < X) J9.push($.slice(J, X));
          J9.push('�'), (J = X + 1);
        }
      }
      if (J < G) J9.push($.slice(J));
      return J9.join('');
    }
    function j6($) {
      return p1($);
    }
    function g0($, Z, Y) {
      let G = Y ?? $.length;
      while (Z < G && ($[Z] === ' ' || $[Z] === '\t')) Z++;
      return Z;
    }
    function e9($) {
      if (!$) return !1;
      for (var Z in $) return !0;
      return !1;
    }
    function x$($, Z, Y) {
      var G = $,
        J = Z.split('.'),
        X = 0;
      while (X < J.length) {
        if (((G = G?.[J[X]]), G === void 0)) break;
        X++;
      }
      return G || Y;
    }
    function H6($, Z) {
      if (!Z) return $;
      let Y = x$(Z, $, void 0);
      if (typeof Y === 'string') return Y;
      if (typeof Y === 'object' && Y.component) return Y.component;
      return $;
    }
    function F6($, Z) {
      if (!Z) return {};
      let Y = x$(Z, $, void 0);
      return typeof Y === 'object' && Y.props ? Y.props : {};
    }
    function wZ($, Z) {
      var Y = '';
      for (var G = 0, J = $.length; G < J; G++) {
        var X = $[G],
          K = X.type;
        if (K === Z.text || K === Z.codeInline) {
          var Q = X.text;
          if (Q) Y += Q;
        } else if (K === Z.textFormatted || K === Z.link) {
          if (X.children) Y += wZ(X.children, Z);
        } else if (K === Z.image) {
          if (X.alt) Y += X.alt;
        }
      }
      return Y;
    }
    function $$($) {
      var Z = $.toLowerCase();
      return (
        Z === 'title' ||
        Z === 'textarea' ||
        Z === 'style' ||
        Z === 'xmp' ||
        Z === 'iframe' ||
        Z === 'noembed' ||
        Z === 'noframes' ||
        Z === 'script' ||
        Z === 'plaintext'
      );
    }
    function Z$($) {
      return $.replace(
        /<(\/?)(title|textarea|style|xmp|iframe|noembed|noframes|script|plaintext)(\s|>|\/)/gi,
        function (Z, Y, G, J) {
          return '&lt;' + Y + G + J;
        },
      );
    }
    function O6($) {
      console.warn($);
    }
    function A9($, Z, Y, G) {
      var J = b(Y),
        X = $.length,
        K = G ?? X - Z,
        Q = 0;
      while (Q < K && Z + Q < X && b($, Z + Q) === J) Q++;
      return Q;
    }
    function BZ($, Z, Y, G, J) {
      if (J === 0 ? Y >= G : Z <= G) return !1;
      let X = J === 0 ? $[Y] : $[Z - 1],
        K = J === 0 ? (Z > 0 ? $[Z - 1] : null) : Y < $.length ? $[Y] : null;
      var Q = b(X);
      if (Q < K1 ? g9(Q) : V9(X)) return !1;
      var V = K ? b(K) : null,
        U =
          K === null ||
          K ===
            `
` ||
          K === '\r' ||
          (V !== null ? (V < K1 ? g9(V) : V9(K)) : !0),
        H = q$(Q, X);
      if (!H) return !0;
      if (U) return !0;
      return K ? q$(b(K), K) : !1;
    }
    function Q$($) {
      var Z = '',
        Y = 0;
      while (Y < $.length)
        if ($[Y] === '\\' && Y + 1 < $.length) {
          var G = $[Y + 1];
          (Z += t9(b(G)) ? G : '\\' + G), (Y += 2);
        } else Z += $[Y++];
      return M9(Z);
    }
    function k($, Z) {
      if (Z >= $.length) return Z;
      if (
        $.charCodeAt(Z) === V0 &&
        Z + 1 < $.length &&
        $.charCodeAt(Z + 1) === d
      )
        return Z + 2;
      if ($.charCodeAt(Z) === d) return Z + 1;
      return Z + 1;
    }
    function W6($, Z) {
      if ($ >= K1) return 0;
      var Y = f9[$];
      if (Z && Y === 1 && ($ === i1 || $ === c1 || $ === x1)) return 0;
      return Y;
    }
    function M6($, Z, Y, G, J, X) {
      if (!Y.length || Y[Y.length - 1].type !== O.blockQuote) return null;
      let K = g0(G, 0, G.length);
      if (K >= G.length || G[K] !== '>') return null;
      let Q = uZ($, Z, J, X);
      if (!Q) return null;
      let V = Y[Y.length - 1],
        U = Q;
      if (U.children) V.children.push(...U.children);
      return U.endPos;
    }
    function z$($, Z, Y, G) {
      return {
        type: O.heading,
        level: $,
        children: Z,
        id: G(Y),
      };
    }
    var p$ = /\\(.)/g,
      v6 = /\s+#+\s*$/,
      n$ =
        /^(?:(\d{1,9})([.)])\s+(.*)$|(\d{1,9})([.)])\s*$|([-*+])\s+(.*)$|([-*+])\s*$)/,
      u$ = /^(\d{1,9})([.)])(\s+|$)/,
      l$ = /^([*+\-])(\s+|$)/,
      H$ = /^<([a-z][^ >/\n\r]*) ?([^>]*?)>/i,
      gZ = /^<([a-z][^ >/]*) ?(?:[^>/]+[^/]|)>/i,
      b = function ($, Z = 0) {
        return $.charCodeAt(Z);
      },
      _$ = function ($) {
        return o9(b($));
      },
      d$ = function ($) {
        return g9(b($));
      },
      j1 = function ($) {
        return $ === ' ' || $ === '\t';
      },
      C9 = function ($) {
        return (
          $ === ' ' ||
          $ === '\t' ||
          $ ===
            `
` ||
          $ === '\r'
        );
      },
      q$ = function ($, Z) {
        return t9($ < K1 ? $ : Z);
      },
      A6 = function ($) {
        var Z = b($);
        return _$($) || Z === D1 || Z === $9 || Z === P9 || Z === I9;
      };
    function i$($, Z) {
      var Y = $.length;
      if (Z >= Y) return null;
      var G = b($[Z]);
      if (!U9(G)) return null;
      var J = Z,
        X = Z;
      while (X < Y) {
        var K = b($[X]);
        if (
          (K >= a1 && K <= r1) ||
          (K >= m1 && K <= h1) ||
          (K >= G9 && K <= Y9) ||
          K === D1
        )
          X++;
        else {
          var Q = b($[X]);
          if (Q === C || Q === l || Q === d || Q === V0 || Q === C1 || Q === Z9)
            break;
          else return null;
        }
      }
      if (X === J) return null;
      var V = $.slice(J, X);
      for (var U = 0; U < V.length; U++) {
        var K = b(V[U]);
        if (
          !(
            (K >= a1 && K <= r1) ||
            (K >= m1 && K <= h1) ||
            (K >= G9 && K <= Y9) ||
            K === D1
          )
        )
          return null;
      }
      return {
        tagName: V,
        tagLower: V.toLowerCase(),
        nextPos: X,
      };
    }
    function n1($, Z) {
      var Y = U$($, Z);
      if (!Y || Y.kind !== 'tag') return null;
      return {
        tagName: Y.tagName || '',
        tagLower: Y.tagNameLower || '',
        attrs: Y.attrs || '',
        endPos: Y.endPos,
        isClosing: Y.isClosing || !1,
        isSelfClosing: Y.isSelfClosing || !1,
        hasNewline: Y.hasNewline,
        hasSpaceBeforeSlash: !1,
        whitespaceBeforeAttrs: Y.whitespaceBeforeAttrs || '',
      };
    }
    function w6($, Z, Y) {
      var G = 1,
        J = Z;
      while (G > 0 && J < $.length) {
        var X = $.indexOf('<', J);
        if (X === -1) return null;
        var K = n1($, X);
        if (!K) {
          J = X + 1;
          continue;
        }
        if (K.isClosing && K.tagLower === Y && --G === 0) return [X, K.endPos];
        if (!K.isClosing && !K.isSelfClosing && K.tagLower === Y) G++;
        J = K.endPos;
      }
      return null;
    }
    var B6 = /^\{.*\}$/,
      F$ = /\n\n/,
      O$ =
        /^(\s{0,3}#[#\s]|\s{0,3}[-*+]\s|\s{0,3}\d+\.\s|\s{0,3}>\s|\s{0,3}```)/m,
      N6 = /<\/?(?:pre|script|style|textarea)\b/i,
      CZ = /^<[A-Z]/,
      y6 = /\n$/,
      b6 = new Set([
        '#',
        '>',
        '-',
        '*',
        '+',
        '`',
        '|',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
      ]);
    function R6($, Z, Y, G) {
      let J = Z;
      while (J < Y) {
        if ($[J] === '\\' && J + 1 < Y) {
          J += 2;
          continue;
        }
        if ($[J] === G) return J;
        J++;
      }
      return -1;
    }
    function NZ($, Z) {
      var Y = Z.indexOf(':');
      if (Y > 0) {
        var G = Z.slice(Y + 1).trim(),
          J = G.length;
        if (J >= 2) {
          var X = G[0];
          if ((X === '"' || X === "'") && G[J - 1] === X) G = G.slice(1, -1);
        }
        $.push([Z.slice(0, Y).trim(), G]);
      }
    }
    function L6($) {
      var Z = [];
      if (!$) return Z;
      var Y = '',
        G = 0,
        J = '';
      for (var X = 0; X < $.length; X++) {
        var K = $[X];
        if (K === '"' || K === "'") {
          if (!J) (J = K), G++;
          else if (K === J) (J = ''), G--;
        } else if (K === '(' && n9(Y, 'url')) G++;
        else if (K === ')' && G > 0) G--;
        else if (K === ';' && G === 0) {
          NZ(Z, Y), (Y = '');
          continue;
        }
        Y += K;
      }
      return NZ(Z, Y), Z;
    }
    function T6(tag, key, value, sanitizeUrlFn, options) {
      if (key === 'style')
        return L6(value).reduce(function ($, [Z, Y]) {
          let G = sanitizeUrlFn(Y, tag, Z);
          if (G != null)
            $[Z.replace(/(-[a-z])/g, (J) => J[1].toUpperCase())] = G;
          return $;
        }, {});
      if (value.match(B6)) {
        if (
          ((value = value.slice(1, value.length - 1)),
          (value = value ? value.replace(p$, '$1') : value),
          value.length > 0)
        ) {
          let $ = value[0];
          if ($ === '[' || $ === '{')
            try {
              return JSON.parse(value);
            } catch (Z) {
              return value;
            }
        }
        if (value === 'true') return !0;
        if (value === 'false') return !1;
        if (options.evalUnserializableExpressions)
          try {
            return eval(`(${value})`);
          } catch ($) {
            return value;
          }
        return value;
      }
      if (S$.indexOf(key) !== -1)
        return sanitizeUrlFn(value ? value.replace(p$, '$1') : value, tag, key);
      return value === 'true' ? !0 : value === 'false' ? !1 : value;
    }
    function u1($, Z, Y, G) {
      let J = {};
      if (!$ || !$.trim()) return J;
      let X = [],
        K = 0,
        Q = $.length;
      while (K < Q) {
        while (K < Q && C9($[K])) K++;
        if (K >= Q) break;
        let H = K;
        while (K < Q && A6($[K])) K++;
        if (K === H) {
          K++;
          continue;
        }
        let M = $.slice(H, K);
        while (K < Q && C9($[K])) K++;
        if (K >= Q || $[K] !== '=') {
          X.push(M);
          continue;
        }
        K++;
        while (K < Q && C9($[K])) K++;
        if (K >= Q) {
          X.push(M + '=');
          break;
        }
        let z = K,
          q = $[K];
        if (q === '"' || q === "'") {
          K++;
          while (K < Q) {
            if ($[K] === q) {
              if (K + 1 >= Q) {
                K++;
                break;
              }
              let F = $[K + 1];
              if (C9(F) || F === '/') {
                K++;
                break;
              }
            }
            K++;
          }
        } else if (q === '{') {
          let F = 1;
          K++;
          while (K < Q && F > 0) {
            if ($[K] === '{') F++;
            else if ($[K] === '}') {
              if ((F--, F === 0)) {
                K++;
                break;
              }
            }
            K++;
          }
        } else while (K < Q && !C9($[K])) K++;
        X.push(M + '=' + $.slice(z, K));
      }
      if (!X?.length) return J;
      let V = Z.toLowerCase();
      for (let H = 0; H < X.length; H++) {
        let M = X[H],
          z = M.indexOf('=');
        if (z !== -1) {
          let q = M.slice(0, z).trim(),
            F = q.toLowerCase();
          if (F === 'ref') continue;
          let _ = M.slice(z + 1).trim(),
            j = ((D) => {
              let W = D[0];
              if (
                (W === '"' || W === "'") &&
                D.length >= 2 &&
                D[D.length - 1] === W
              )
                return D.slice(1, -1);
              return D;
            })(_);
          if ((F === 'href' && V === 'a') || (F === 'src' && V === 'img')) {
            let D = G.sanitizer(j, V, F);
            if (D == null) {
              O6(`Stripped unsafe ${F} on <${Y}>`);
              continue;
            }
            J[q] = D;
          } else {
            let D = T6(V, F, j, G.sanitizer, G);
            J[q] = D;
          }
        } else if (M !== 'style') J[M] = !0;
      }
      if ($.indexOf('%') !== -1)
        try {
          if (O9.test(decodeURIComponent($))) for (var U in J) delete J[U];
        } catch (H) {}
      else if (O9.test($)) for (var U in J) delete J[U];
      return J;
    }
    var p9 = function ($) {
      return b6.has($);
    };
    function S6($, Z, Y) {
      let G = Z + 1;
      while (G < $.length && $[G] !== ']') {
        if ($[G] === '\\' && G + 1 < $.length) {
          G += 2;
          continue;
        }
        G++;
      }
      if (G >= $.length)
        return {
          shouldSkip: !1,
          newPos: 0,
        };
      let J = Z + 1,
        X = G,
        K =
          J < X &&
          ($[J] ===
            `
` ||
            $[J] === '\r'),
        Q =
          X > J &&
          ($[X - 1] ===
            `
` ||
            $[X - 1] === '\r'),
        V = G + 1;
      if (((V = g0($, V)), V >= $.length || $[V] !== ':'))
        return {
          shouldSkip: !1,
          newPos: 0,
        };
      if ((K || Q) && Y) {
        let U = V + 1;
        if (
          ((U = g0($, U)),
          U < $.length &&
            $[U] ===
              `
`)
        )
          U = g0($, U + 1);
        while (
          U < $.length &&
          $[U] !==
            `
`
        )
          U++;
        if (U < $.length) U++;
        return {
          shouldSkip: !0,
          newPos: U,
        };
      }
      return E6($, V);
    }
    function E6($, Z) {
      let Y = Z + 1;
      if (
        ((Y = g0($, Y)),
        Y < $.length &&
          $[Y] ===
            `
`)
      )
        Y = g0($, Y + 1);
      while (
        Y < $.length &&
        $[Y] !==
          `
`
      )
        Y++;
      if (Y >= $.length)
        return {
          shouldSkip: !1,
          newPos: 0,
        };
      Y++;
      let G = g0($, Y);
      if (G >= $.length || ($[G] !== '"' && $[G] !== "'"))
        return {
          shouldSkip: !1,
          newPos: 0,
        };
      let J = $[G],
        X = G + 1;
      while (
        X < $.length &&
        $[X] !== J &&
        $[X] !==
          `
`
      ) {
        if ($[X] === '\\' && X + 1 < $.length) {
          X += 2;
          continue;
        }
        X++;
      }
      if (X >= $.length || $[X] !== J)
        return {
          shouldSkip: !1,
          newPos: 0,
        };
      let K = g0($, X + 1);
      if (
        K < $.length &&
        $[K] !==
          `
` &&
        $[K] !== '\r'
      )
        return {
          shouldSkip: !0,
          newPos: Y,
        };
      return {
        shouldSkip: !1,
        newPos: 0,
      };
    }
    function kZ($) {
      for (var Z = 0; Z < $.length; Z++) {
        var Y = $[Z];
        if (Y.type === O.link) return !0;
        if (Y.type === O.textFormatted) {
          var G = Y;
          if (G.children && kZ(G.children)) return !0;
        }
      }
      return !1;
    }
    function c$($) {
      var Z = '';
      for (var Y = 0, G = $.length; Y < G; Y++) {
        var J = $[Y],
          X = J.type;
        if (X === O.text) Z += J.text;
        else if (X === O.image) {
          var K = J;
          if (K.alt) Z += K.alt;
        } else if (X === O.textFormatted) {
          var Q = J;
          if (Q.children) Z += c$(Q.children);
        } else if (X === O.link) {
          var V = J;
          if (V.children) Z += c$(V.children);
        }
      }
      return Z;
    }
    var x6 = new Set([
      ' ',
      '\t',
      '\r',
      `
`,
      '\f',
      '\v',
    ]);
    function l1($, Z, Y, G, J) {
      var X = [],
        K = [],
        Q = [],
        V = Z,
        U = Z,
        H = J.disableAutoLink || G.inAnchor,
        M = !1,
        z = !!G.inAnchor,
        q = !!J.disableParsingRawHTML,
        F = J.optimizeForStreaming,
        _ = -1,
        j = -1,
        D = [],
        W = function (f0, X1) {
          if (F && G.inHTML) return !1;
          if (!z && (!X1 || !J.disableAutoLink)) {
            var y0 = f$($, V, G, J, '<');
            if (y0) return v(V), X.push(y0), (V = y0.endPos), (U = V), !0;
          }
          if (q) return !1;
          var t1 = M$($, V, G, J);
          if (t1) {
            v(V);
            var c9 = X.length;
            if ((X.push(t1), D)) D.push(c9);
            return (V = t1.endPos), (U = V), !0;
          }
          if (F && j === -1) {
            if (V + 1 < Y) {
              var Z0 = b($, V + 1);
              if (
                (Z0 >= m1 && Z0 <= h1) ||
                (Z0 >= a1 && Z0 <= r1) ||
                Z0 === Z9 ||
                Z0 === F9
              )
                j = V;
            }
          }
          if (!f0) return !1;
          var G0 = n1($, V);
          if (!G0) return !1;
          var E1 = V + (G0.isClosing ? 2 : 1);
          if (E1 >= $.length || j1($[E1])) return !1;
          var v1 = $.indexOf('>', V + 1);
          if (v1 !== -1) {
            var G1 = V + 1,
              y9 = v1 - G1;
            if (y9 >= 7) {
              var n = c($, 'http://', G1);
              if (n || c($, 'https://', G1)) {
                for (var S0 = G1; S0 < v1; S0++) if (j1($[S0])) return !1;
              }
            }
          }
          var b0 = b($, E1);
          if (U9(b0) && E1 + 1 < $.length && $[E1 + 1] === ':') return !1;
          if (G0.isClosing && G0.attrs.trim().length) return !1;
          if (G0.attrs.length) {
            var U0 = !1,
              u = '';
            for (var _0 = 0; _0 < G0.attrs.length; _0++) {
              var n0 = G0.attrs[_0];
              if (U0 && n0 === u) U0 = !1;
              else if (!U0 && (n0 === '"' || n0 === "'")) (U0 = !0), (u = n0);
              else if (n0 === '*' || n0 === '#' || n0 === '!') {
                var E0 = _0 + 1;
                while (
                  E0 < G0.attrs.length &&
                  G0.attrs[E0] !== '=' &&
                  G0.attrs[E0] !== ' ' &&
                  G0.attrs[E0] !== '\t'
                )
                  E0++;
                if (E0 < G0.attrs.length && G0.attrs[E0] === '=') return !1;
              }
            }
          }
          var X0 = $.slice(V, G0.endPos),
            A1 = G0.tagName.toLowerCase(),
            m = X0,
            C0 = m.indexOf('>');
          if (C0 !== -1) {
            m = m.slice(C0 + 1);
            var R0 = '</' + A1 + '>',
              O0 = m.indexOf(R0);
            if (O0 !== -1) m = m.slice(0, O0);
          }
          var A0 = [];
          if (m.trim() && J) {
            var d0 = {
                ...G,
                inline: !1,
                inHTML: !0,
              },
              L0 = m.trim();
            if (F$.test(L0) || O$.test(L0) || H$.test(L0)) A0 = d9(L0, d0, J);
            else if (L0) (d0.inline = !0), (A0 = l1(L0, 0, L0.length, d0, J));
          }
          var i0 = G0.whitespaceBeforeAttrs + G0.attrs,
            D0 = u1(i0, A1, G0.tagName, J),
            Y1 = {
              type: O.htmlBlock,
              tag: G0.tagName,
              attrs: D0,
              children: A0,
              rawText: X0,
              text: m,
              verbatim: !0,
              endPos: G0.endPos,
            };
          return v(V), X.push(Y1), (V = Y1.endPos), (U = V), !0;
        },
        v = function (f0) {
          if (f0 > U) {
            var X1 = $.slice(U, f0);
            X.push({
              type: O.text,
              text: M ? M9(X1) : X1,
            }),
              (U = f0),
              (M = !1);
          }
        };
      while (V < Y) {
        var A = b($, V),
          E = W6(A, H);
        if (E === 0) {
          if (A === x9) M = !0;
          V++;
          while (V < Y) {
            if (((A = b($, V)), A >= K1)) break;
            if (A === x9) M = !0;
            var w = f9[A];
            if (w !== 0) {
              if (H && w === 1 && (A === i1 || A === c1 || A === x1)) {
                V++;
                continue;
              }
              break;
            }
            V++;
          }
          continue;
        }
        if (A === t0) {
          var S = V,
            R = 0;
          while (V + R < Y) {
            if (b($, V + R) !== t0) break;
            R++;
          }
          if (R > 0) {
            var y = V + R,
              N = -1,
              B = y;
            while (B < Y) {
              while (B < Y && b($, B) !== t0) B++;
              if (B >= Y) break;
              var T = 0;
              while (B + T < Y && b($, B + T) === t0) T++;
              if (T > R) T = R;
              var f = B + T;
              if (
                T === R &&
                (B <= y || b($, B - 1) !== t0) &&
                (f >= Y || b($, f) !== t0)
              ) {
                (N = B), (B = f);
                break;
              }
              B++;
            }
            if (N !== -1) {
              var x = $.slice(y, N),
                P = !1;
              for (var g = 0; g < x.length; g++) {
                var h = b(x, g);
                if (h === d || h === V0) {
                  P = !0;
                  break;
                }
              }
              var L = x;
              if (P)
                L = x
                  .replace(/\r\n/g, ' ')
                  .replace(/\r/g, ' ')
                  .replace(/\n/g, ' ');
              if (L.length > 0) {
                var a = b(L, 0),
                  i = b(L, L.length - 1);
                if (a === C && i === C) {
                  for (var j0 = 1; j0 < L.length - 1; j0++)
                    if (b(L, j0) !== C) {
                      L = L.slice(1, L.length - 1);
                      break;
                    }
                }
              }
              v(S),
                X.push({
                  type: O.codeInline,
                  text: L,
                }),
                (V = B),
                (U = V);
              continue;
            }
            if (F && _ === -1) {
              (_ = S), v(S), (Y = S);
              break;
            }
            V = y;
            continue;
          }
        }
        if (!z && !H && (A === i1 || A === c1 || A === x1)) {
          var w0 = null,
            z0 = V + 1 < Y ? b($, V + 1) : 0,
            T0 = V + 2 < Y ? b($, V + 2) : 0,
            p = V + 3 < Y ? b($, V + 3) : 0,
            V1 = V + 4 < Y ? b($, V + 4) : 0,
            J0 = V + 5 < Y ? b($, V + 5) : 0;
          if (A === c1 && z0 === r9 && T0 === r9 && p === B$) w0 = 'h';
          else if (A === x1 && z0 === x1 && T0 === x1 && p === I9) w0 = 'w';
          else if (
            A === i1 &&
            z0 === r9 &&
            T0 === B$ &&
            p === P9 &&
            V1 === Z9 &&
            J0 === Z9
          )
            w0 = 'f';
          if (w0) {
            var P0 = f$($, V, G, J, w0);
            if (P0) {
              v(V), X.push(P0), (V = P0.endPos), (U = V);
              continue;
            }
          }
        }
        if (!z && !H && A === E9) {
          var M0 = f$($, V, G, J, '@');
          if (M0 && 'emailStart' in M0) {
            var { emailStart: Q0, endPos: a0 } = M0,
              I0 = [];
            for (var f = K.length - 1; f >= 0; f--) {
              var k0 = K[f];
              if (k0.sourcePos >= Q0 && k0.sourcePos < a0) {
                if (k0.nodeIndex >= 0 && k0.nodeIndex < X.length)
                  X.splice(k0.nodeIndex, 1), I0.push(k0.nodeIndex);
                K.splice(f, 1);
              }
            }
            if (Q0 < U) {
              for (var B = X.length - 1; B >= 0; B--)
                if (X[B].type === O.text) {
                  X.splice(B, 1), I0.push(B);
                  break;
                }
              U = Q0;
            }
            if (I0.length) {
              I0.sort(function (f0, X1) {
                return f0 - X1;
              });
              var B1 = 0;
              for (var r = 0; r < K.length; r++) {
                var k0 = K[r];
                while (B1 < I0.length && I0[B1] < k0.nodeIndex) B1++;
                k0.nodeIndex -= B1;
              }
            }
            v(Q0), X.push(M0), (V = a0), (U = V);
            continue;
          }
        }
        if (A === j9) {
          if (W(!0, !1)) continue;
        }
        if (A === k1) {
          if (V + 1 < Y && b($, V + 1) === d) {
            var K0 = V + 2;
            while (K0 < Y && b($, K0) === C) K0++;
            if (K0 >= Y) {
              V++;
              continue;
            }
            v(V),
              X.push({
                type: O.breakLine,
              }),
              (V += 2);
            while (V < Y && b($, V) === C) V++;
            U = V;
            continue;
          }
          var B0 = V + 1 < Y ? $[V + 1] : '';
          if (B0 && '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.indexOf(B0) !== -1) {
            v(V),
              X.push({
                type: O.text,
                text: B0 === '&' ? '&​' : B0,
              }),
              (V += 2),
              (U = V);
            continue;
          }
        }
        if (A === g1) {
          if (!z) {
            if (V + 1 < Y && $[V + 1] === '^') {
              var m0 = V + 2;
              while (m0 < Y && $[m0] !== ']') m0++;
              if (m0 < Y) {
                var H0 = $.slice(V + 2, m0);
                v(V),
                  X.push({
                    type: O.footnoteReference,
                    target: `#${J.slugify(H0)}`,
                    text: H0,
                  }),
                  (V = m0 + 1),
                  (U = V);
                continue;
              }
            }
            if (G.inList && V + 2 < Y && b($, V + 2) === H9) {
              var q0 = b($, V + 1);
              if (q0 === C || q0 === N$ || q0 === y$) {
                v(V),
                  X.push({
                    type: O.gfmTask,
                    completed: q0 === N$ || q0 === y$,
                  }),
                  (V += 3),
                  (U = V);
                continue;
              }
            }
          }
          var e = !1;
          if (V > Z && $[V - 1] === '!') {
            var l0 = 0;
            for (var Y0 = V - 2; Y0 >= Z && $[Y0] === '\\'; Y0--) l0++;
            if ((l0 & 1) === 0) {
              if (((e = !0), U < V - 1)) v(V - 1);
              if (X.length > 0 && X[X.length - 1].type === O.text) {
                var $0 = X[X.length - 1];
                if ($0.text.endsWith('!')) {
                  if ((($0.text = $0.text.slice(0, -1)), !$0.text)) X.pop();
                }
              }
            }
          }
          if (!e) v(V);
          if (((U = V + 1), !z || e))
            Q.push({
              type: e ? 'image' : 'link',
              pos: e ? V - 1 : V,
              resultIdx: X.length,
              inAnchor: z,
            });
          V++;
          continue;
        }
        if (A === H9 && Q.length > 0) {
          var s = Q[Q.length - 1],
            r0 = s.pos + (s.type === 'image' ? 2 : 1),
            $1 = V;
          v(V);
          var U1 = V + 1,
            F1 = t$(X, s),
            Q1 = s.type === 'link' && kZ(F1),
            N1 = !1;
          if (!Q1 && U1 < Y && $[U1] === '(') {
            var F0 = g6($, U1 + 1, !0);
            if (F0) {
              yZ(
                X,
                K,
                Q,
                s,
                r0,
                $1,
                J.sanitizer(Q$(F0.target), 'a', 'href'),
                F0.title ? Q$(F0.title) : void 0,
              ),
                (V = F0.endPos),
                (U = V);
              continue;
            }
          }
          var s0 = G.refs || {};
          e9(s0);
          var O1 = null,
            P1 = V;
          if (U1 < Y && $[U1] === '[') {
            var z1 = U1 + 1,
              B = z1;
            while (B < Y && $[B] !== ']') B++;
            if (B < Y) (O1 = $.slice(z1, B)), (P1 = B), (N1 = !0);
          }
          if (!N1 || O1 === '') O1 = $.slice(r0, $1);
          var h0 = hZ(O1);
          if (!Q1 && s0 && s0[h0]) {
            var _1 = s0[h0];
            yZ(X, K, Q, s, r0, $1, _1.target, _1.title), (V = P1 + 1), (U = V);
            continue;
          }
          var y1 = s.resultIdx;
          if ((Q.pop(), (X.length = y1), F)) {
            if ((X.push(...F1), U1 < Y && $[U1] === '(')) return X;
          } else {
            if (s.type === 'image')
              X.push({
                type: O.text,
                text: '!',
              });
            X.push(
              {
                type: O.text,
                text: '[',
              },
              ...F1,
              {
                type: O.text,
                text: ']',
              },
            );
          }
          for (var g = 0; g < K.length; g++)
            if (K[g].nodeIndex >= y1) K[g].nodeIndex++;
          V++, (U = V);
          continue;
        }
        if (A === S9 || A === $9 || A === e1 || A === d1) {
          var W1 = $[V],
            o = V,
            Z1 = A9($, V, W1);
          if ((W1 === '~' || W1 === '=') && Z1 !== 2) {
            V++;
            continue;
          }
          var q1 = o + Z1,
            o0 = BZ($, o, q1, Y, 0),
            Q9 = BZ($, o, q1, Z, 1),
            b1 = o0,
            R1 = Q9;
          if (W1 === '_' && o0 && Q9) {
            if (o > 0) {
              var z9 = $[o - 1],
                N9 = b(z9);
              b1 = q$(N9, z9);
            }
            if (q1 < Y) {
              var _9 = $[q1],
                M1 = b(_9);
              R1 = q$(M1, _9);
            }
          }
          v(o),
            K.push({
              nodeIndex: X.length,
              type: W1,
              length: Z1,
              canOpen: b1,
              canClose: R1,
              active: !0,
              sourcePos: o,
              inAnchor: z,
            }),
            X.push({
              type: O.text,
              text: $.slice(o, o + Z1),
            }),
            (V = o + Z1),
            (U = V);
          continue;
        }
        if (A === d) {
          var Y0 = V - 1,
            I1 = 0;
          while (Y0 >= U && b($, Y0) === C) I1++, Y0--;
          if (I1 >= 2) {
            var K0 = V + 1;
            while (K0 < Y && b($, K0) === C) K0++;
            if (K0 >= Y) {
              v(Y0 + 1), (V = Y), (U = Y);
              continue;
            }
            v(Y0 + 1),
              X.push({
                type: O.breakLine,
              }),
              V++;
            while (V < Y && b($, V) === C) V++;
            U = V;
            continue;
          }
          var L1 = V > U ? b($, V - 1) : 0,
            q0 = V + 1 < Y ? b($, V + 1) : 0,
            T1 = V > U && L1 === C && q0 === C ? V - 1 : V;
          if (
            (v(T1),
            X.push({
              type: O.text,
              text: `
`,
            }),
            (U = V + 1),
            V > Z && L1 === C && U < Y && b($, U) === C)
          )
            U++;
          V = U;
          continue;
        }
        if (A === x9) M = !0;
        V++;
        while (V < Y) {
          var A = b($, V);
          if (A >= K1) break;
          if (A === x9) M = !0;
          var w = f9[A];
          if (w === 0) {
            V++;
            continue;
          }
          if (w === 1 && (A === i1 || A === c1 || A === x1) && H) {
            V++;
            continue;
          }
          break;
        }
      }
      if ((v(V), K.length)) rZ(X, K, null);
      if (F) {
        var v0 = X.length;
        for (var N0 = D.length - 1; N0 >= 0; N0--) {
          var p0 = D[N0];
          if (p0 < X.length && X[p0].type === O.htmlBlock) {
            var S1 = X[p0];
            if (!K9(S1.tag) && (!S1.children || S1.children.length === 0)) {
              if ((X.splice(p0, 1), p0 < v0)) v0--;
              for (var g = 0; g < K.length; g++)
                if (K[g].nodeIndex > p0) K[g].nodeIndex--;
              for (var g = N0 + 1; g < D.length; g++) if (D[g] > p0) D[g]--;
            }
          }
        }
        if (_ !== -1 && _ < v0) {
          for (var u0 = X.length - 1; u0 >= 0; u0--)
            if (X[u0].type === O.text) {
              v0 = u0;
              break;
            }
        }
        if (j !== -1 && j < v0) {
          for (var u0 = X.length - 1; u0 >= 0; u0--)
            if (X[u0].type === O.text) {
              v0 = u0;
              break;
            }
        }
        for (var B = K.length - 1; B >= 0; B--)
          if (K[B].active && K[B].nodeIndex < v0) {
            if ((X.splice(K[B].nodeIndex, 1), K[B].nodeIndex < v0)) v0--;
            for (var f = 0; f < B; f++)
              if (K[f].nodeIndex > K[B].nodeIndex) K[f].nodeIndex--;
          }
        if (v0 < X.length) X.length = v0;
        return X;
      }
      if (Q.length) {
        Q.sort(function (f0, X1) {
          return f0.resultIdx - X1.resultIdx;
        });
        for (var B = 0; B < Q.length; B++)
          X.splice(Q[B].resultIdx + B, 0, {
            type: O.text,
            text: Q[B].type === 'image' ? '![' : '[',
          });
      }
      return X;
    }
    function P6($, Z, Y, G, J) {
      var X = !1;
      for (var K = 0; K < Z.length; K++)
        if (Z[K].sourcePos >= G && Z[K].sourcePos < J) {
          X = !0;
          break;
        }
      if (!X) return;
      var Q = t$($, Y),
        V = [];
      for (var K = 0; K < Z.length; K++) {
        var U = Z[K];
        if (U.sourcePos >= G && U.sourcePos < J)
          V.push({
            nodeIndex: U.nodeIndex - Y.resultIdx,
            type: U.type,
            length: U.length,
            canOpen: U.canOpen,
            canClose: U.canClose,
            active: U.active,
            sourcePos: U.sourcePos,
            inAnchor: U.inAnchor,
          });
      }
      rZ(Q, V, null), ($.length = Y.resultIdx);
      for (var H = 0; H < Q.length; H++) $.push(Q[H]);
      var M = [];
      for (var K = 0; K < Z.length; K++)
        if (Z[K].sourcePos < G || Z[K].sourcePos >= J) M.push(Z[K]);
      Z.length = 0;
      for (var H = 0; H < M.length; H++) Z.push(M[H]);
    }
    function I6($, Z, Y, G) {
      if ($.type === 'link')
        return {
          type: O.link,
          target: Y,
          title: G,
          children: Z,
        };
      return {
        type: O.image,
        target: Y || '',
        alt: c$(Z),
        title: G,
      };
    }
    function t$($, Z) {
      return $.slice(Z.resultIdx);
    }
    function yZ($, Z, Y, G, J, X, K, Q) {
      P6($, Z, G, J, X);
      var V = t$($, G);
      Y.pop(), ($.length = G.resultIdx), $.push(I6(G, V, K, Q));
    }
    function f6($, Z, Y) {
      let G = g0($, Z),
        J = G < $.length && $[G] === '<';
      if (J) G++;
      let X = G;
      if (J && G < $.length && $[G] === '>')
        return {
          target: '',
          endPos: G + 1,
          hadSpace: !1,
        };
      let K, Q;
      var V = !1;
      if (J) {
        Q = G;
        while (Q < $.length && $[Q] !== '>') {
          let M = $[Q];
          if (
            M ===
              `
` ||
            M === '\r' ||
            M === '<'
          )
            return null;
          if (M === '\\') {
            Q += 2;
            continue;
          }
          Q++;
        }
        if (Q >= $.length || $[Q] !== '>') return null;
        Q++;
        let U = X;
        while (U < Q - 1 && j1($[U])) U++;
        let H = Q - 1;
        while (H > U && j1($[H - 1])) H--;
        (K = $.slice(U, H)), (G = Q);
      } else {
        let U = 0;
        Q = G;
        while (Q < $.length) {
          let H = $[Q];
          if (
            H === ' ' ||
            H === '\t' ||
            H ===
              `
`
          ) {
            V = !0;
            break;
          }
          if (!Y && H === ')') break;
          if (Y && H === '(') {
            if (Q > 0 && $[Q - 1] === '\\') {
              Q++;
              continue;
            }
            U++, Q++;
            continue;
          }
          if (Y && H === ')') {
            if (Q > 0 && $[Q - 1] === '\\') {
              Q++;
              continue;
            }
            if (U === 0) break;
            U--, Q++;
            continue;
          }
          Q++;
        }
        (K = $.slice(X, Q)), (G = Q);
      }
      return {
        target: K,
        endPos: G,
        hadSpace: V,
      };
    }
    function bZ($, Z, Y, G) {
      let J = Z,
        X = 0;
      while (J < $.length) {
        let Q = $[J];
        if (j1(Q)) J++;
        else if (
          Q ===
          `
`
        ) {
          if (X >= 1) break;
          X++, J++;
        } else if (V9(Q)) break;
        else break;
      }
      if (Y && !G) {
        if (J >= $.length || ($[J] !== '"' && $[J] !== "'" && $[J] !== '('))
          return {
            title: void 0,
            endPos: J,
          };
      }
      let K = void 0;
      if (J < $.length) {
        let Q = $[J];
        if (Q === '"' || Q === "'") {
          J++;
          let V = J;
          while (J < $.length && $[J] !== Q) {
            if ($[J] === '\\') J++;
            J++;
          }
          if (J < $.length) (K = $.slice(V, J)), J++;
        } else if (Q === '(') {
          J++;
          let V = J,
            U = 1;
          while (J < $.length && U > 0) {
            if ($[J] === '\\' && J + 1 < $.length) J++;
            else if ($[J] === '(') U++;
            else if ($[J] === ')') U--;
            J++;
          }
          if (U === 0) K = $.slice(V, J - 1);
        }
      }
      return (
        (J = g0($, J)),
        {
          title: K,
          endPos: J,
        }
      );
    }
    function g6($, Z, Y) {
      let G = f6($, Z, Y);
      if (!G) return null;
      let J = Z;
      J = g0($, J);
      let X = J < $.length && $[J] === '<';
      if (X && G.target === '' && G.endPos === J + 2) {
        let Q = bZ($, G.endPos, !1, X);
        if (Q.endPos >= $.length || $[Q.endPos] !== ')') return null;
        return {
          target: '',
          title: Q.title,
          endPos: Q.endPos + 1,
        };
      }
      let K = bZ($, G.endPos, G.hadSpace, X);
      if (K.endPos >= $.length || $[K.endPos] !== ')') return null;
      return {
        target: G.target,
        title: K.title,
        endPos: K.endPos + 1,
      };
    }
    var C6;
    ((G) => {
      G[(G.URI = 0)] = 'URI';
      G[(G.EMAIL = 1)] = 'EMAIL';
      G[(G.ANGLE = 2)] = 'ANGLE';
    })((C6 ||= {}));
    function U9($) {
      return ($ >= m1 && $ <= h1) || ($ >= a1 && $ <= r1);
    }
    function mZ($) {
      let Z = $.indexOf(':');
      if (Z < 2 || Z > 32) return !1;
      let Y = b($);
      if (!U9(Y)) return !1;
      for (let G = 1; G < Z; G++) {
        let J = $[G],
          X = b(J);
        if (!_$(J) && J !== '+' && J !== '.' && J !== '-') return !1;
      }
      return !0;
    }
    function RZ($, Z, Y) {
      if (Z === 0) return !0;
      return (
        (Y
          ? ` 	
\r*_~(`
          : ` 	
*_~(`
        ).indexOf($[Z - 1]) !== -1
      );
    }
    function G$($, Z, Y, G, J) {
      let X = G($, 'a', 'href');
      if (!X) return null;
      return {
        type: O.link,
        target: X,
        children: [
          {
            type: O.text,
            text: Z,
          },
        ],
        endPos: Y,
        ...(J !== void 0
          ? {
              emailStart: J,
            }
          : {}),
      };
    }
    function I$($, Z, Y, G, J) {
      if (Y.inAnchor || (J !== 2 && G.disableAutoLink)) return null;
      if (J === 2) {
        if ($[Z] !== '<') return null;
        let _ = Z + 1;
        while (_ < $.length && $[_] !== '>') {
          let R = b($, _);
          if (R === C || R === l || R === d || R === V0 || R < C) return null;
          _++;
        }
        if (_ >= $.length || $[_] !== '>') return null;
        let j = $.slice(Z + 1, _);
        if (!j.length) return null;
        let D = j.indexOf('\\') !== -1,
          W = mZ(j),
          v = c(j, 'http://') || c(j, 'https://'),
          A = !1;
        if (!W && !v && j.length >= 7) {
          let R = j[0];
          if (R === 'm' || R === 'M') {
            let y = j.toLowerCase();
            if (c(y, 'mailto:')) {
              A = !0;
              let N = y.indexOf(':'),
                B = j.slice(N + 1);
              return G$('mailto:' + B, j, _ + 1, G.sanitizer);
            }
          }
        }
        let E = !D && j.indexOf('@') !== -1 && j.indexOf('//') === -1 && !W;
        if (!v && !A && !E && !W) return null;
        let w = j,
          S = j;
        if (!A && !W && !v && E) w = 'mailto:' + j;
        return G$(w, S, _ + 1, G.sanitizer);
      }
      if (J === 1) {
        let _ = Z;
        while (_ > 0 && (_$($[_ - 1]) || '.+-_'.indexOf($[_ - 1]) !== -1)) _--;
        if (_ >= Z || !RZ($, _, !0)) return null;
        let j = Z + 1,
          D = !1;
        while (j < $.length) {
          let A = $[j];
          if (A === '.') (D = !0), j++;
          else if (_$(A) || A === '-' || A === '_') j++;
          else break;
        }
        if (!D || j <= Z + 1) return null;
        while (j > Z + 1 && $[j - 1] === '.') j--;
        if (j > Z + 1 && ($[j - 1] === '-' || $[j - 1] === '_')) return null;
        if (j - (Z + 1) < 1e4) {
          if ($.indexOf('.', Z + 1) >= j || $.indexOf('.', Z + 1) === -1)
            return null;
        } else if ($.slice(Z + 1, j).indexOf('.') === -1) return null;
        let v = $.slice(_, j);
        return G$('mailto:' + v, v, j, G.sanitizer, _);
      }
      let X = c($, 'http://', Z) || c($, 'https://', Z),
        K = !X && c($, 'ftp://', Z),
        Q = !X && !K && c($, 'www.', Z);
      if (!(X || K || Q) || !RZ($, Z, !1)) return null;
      var V = Z + (X ? (b($, Z + 4) === zZ ? 8 : 7) : K ? 6 : 4),
        U = V;
      while (V < $.length) {
        let _ = b($, V);
        if (_ === C || _ === l || _ === d || _ === j9 || _ === C1) break;
        V++;
      }
      if (V <= U) return null;
      let H = V;
      while (H > U) {
        let _ = $[H - 1];
        if (H > U + 1 && $[H - 2] === '\\') break;
        if (
          _ === '?' ||
          _ === '!' ||
          _ === '.' ||
          _ === ',' ||
          _ === ':' ||
          _ === '*' ||
          _ === '_' ||
          _ === '~'
        )
          H--;
        else if (_ === ';') {
          let j = H - 2;
          while (j >= U && $[j] !== '&' && $[j] !== ' ') j--;
          if (j >= U && $[j] === '&') {
            let D = $.slice(j + 1, H - 1);
            if (
              D.length >= 2 &&
              D.length <= 10 &&
              /^[a-zA-Z0-9]+$/.test(D) &&
              (D === 'lt' ||
                D === 'gt' ||
                (D.length >= 3 &&
                  (c(D, 'amp') ||
                    c(D, 'apos') ||
                    c(D, 'quot') ||
                    c(D, 'nbsp') ||
                    /^[a-z]{3,10}$/.test(D))))
            )
              break;
            H = j;
            break;
          }
          H--;
        } else if (_ === ')') {
          let j = 0,
            D = 0;
          for (let W = U; W < H; W++) {
            if ($[W] === '(') j++;
            if ($[W] === ')') D++;
          }
          if (D > j) H--;
          else break;
        } else break;
      }
      if (((V = H), V <= U)) return null;
      var M = U,
        z = -1,
        q = -1;
      while (M < V) {
        let _ = b($, M);
        if (
          (_ >= m1 && _ <= h1) ||
          (_ >= a1 && _ <= r1) ||
          (_ >= G9 && _ <= Y9) ||
          _ === D1 ||
          _ === $9 ||
          _ === I9
        ) {
          if (_ === I9) (q = z), (z = M);
          M++;
          continue;
        }
        break;
      }
      if (M === U || z === -1) return null;
      if (q === -1) q = U - 1;
      for (let _ = q + 1; _ < z; _++) if ($[_] === '_') return null;
      for (let _ = z + 1; _ < M; _++) if ($[_] === '_') return null;
      let F = $.slice(Z, V);
      return G$(Q ? 'http://' + F : F, F, V, G.sanitizer);
    }
    function f$($, Z, Y, G, J) {
      if (J === '<') return I$($, Z, Y, G, 2);
      if (J === 'h' || J === 'f' || J === 'w') return I$($, Z, Y, G, 0);
      if (J === '@') return I$($, Z, Y, G, 1);
      return null;
    }
    function hZ($) {
      var Z = $.trim(),
        Y = Z.replace(/[\s\t\n\r]+/g, ' ');
      if (Y.indexOf('ẞ') !== -1)
        return Y.replace(/\u1E9E/g, 'ss').toLowerCase();
      return Y.toLowerCase();
    }
    function k6($, Z, Y) {
      if (Z + 3 >= $.length || $[Z] !== '[') return null;
      let G = $[Z + 1];
      if (G !== ' ' && G !== 'x' && G !== 'X') return null;
      if ($[Z + 2] !== ']') return null;
      return {
        type: O.gfmTask,
        completed: G.toLowerCase() === 'x',
        endPos: Z + 3,
      };
    }
    function e$($, Z, Y, G) {
      let { inline: J, inList: X, inBlockQuote: K } = Z;
      if (G.inline !== void 0) Z.inline = G.inline;
      if (G.list !== void 0) Z.inList = G.list;
      if (G.inBlockQuote !== void 0) Z.inBlockQuote = G.inBlockQuote;
      let Q = d9($, Z, Y);
      return (Z.inline = J), (Z.inList = X), (Z.inBlockQuote = K), Q;
    }
    function u9($, Z, Y, G, J) {
      return W$(G, !0, () => l1($, Z, Y, G, J));
    }
    function l9($, Z, Y, G) {
      var J = $[Z];
      if (J === void 0) return null;
      var X = Z,
        K = null,
        Q = J,
        V = null,
        U = b(J),
        H = U === C || U === l;
      if (H) {
        if (
          ((V = I($, Z)),
          (K = t($, Z, V)),
          (X = Z + K.charCount),
          X >= $.length)
        )
          return X$($, Z, Y);
        Q = $[X];
      }
      var M = K ? K.spaceEquivalent : 0;
      if (M >= 4) {
        if (H) return X$($, Z, Y);
        return null;
      }
      var z = b(Q);
      if (z === C1) {
        var q = uZ($, Z, Y, G);
        if (q) return q;
      } else if (z === $9) return D$($, Z, Y, G);
      else if (z === D1 || z === S9 || z === DZ) {
        var F = D$($, Z, Y, G);
        if (F) return F;
        var _ = o$($, Z, Y, G);
        if (_) return _;
      } else if (z >= G9 && z <= Y9) {
        var _ = o$($, Z, Y, G);
        if (_) return _;
      } else if (z === T9) return m6($, X, Y, G);
      else if (z === g1)
        return B9($, X, Y, G, X + 1 < $.length && b($, X + 1) === D9);
      else if (z === j9 && !G.disableParsingRawHTML) return M$($, X, Y, G);
      else if (z === t0 || z === e1) {
        if (!V) V = I($, Z);
        if (!K) K = t($, Z, V);
        if (K.spaceEquivalent <= 3) return $Z($, X, Y, G);
      } else if (z === jZ) return aZ($, Z, Y, G);
      if (H) return X$($, Z, Y);
      return null;
    }
    function d9($, Z, Y) {
      let G = [],
        J = 0;
      while (J < $.length) {
        while (
          J < $.length &&
          $[J] ===
            `
`
        )
          J++;
        if (J >= $.length) break;
        var X = $[J];
        if (Z.inList && G.length > 0) {
          var K = G[G.length - 1];
          if (K?.type === O.paragraph) {
            var Q = K,
              V = b(X);
            if (V === D1 || V === d1 || V === C || V === l) {
              var U = I($, J),
                H = $.slice(J, U),
                M = t($, J, U);
              if (M.spaceEquivalent < 4) {
                var z = H.slice(M.charCount).trim();
                if (cZ(G, z, Y)) {
                  J =
                    U +
                    (U < $.length &&
                    $[U] ===
                      `
`
                      ? 1
                      : 0);
                  continue;
                }
              }
            }
          }
        }
        var q = l9($, J, Z, Y);
        if (q) {
          G.push(q), (J = q.endPos);
          continue;
        }
        var F = pZ($, J, Z, Y);
        if (F) {
          G.push(F), (J = F.endPos);
          continue;
        }
        var _ = $.slice(J).trim();
        if (_) {
          if (Z.inBlockQuote && G.length > 0) {
            let v = function (A) {
              if (A.type === O.blockQuote) {
                var E = A;
                if (E.children && E.children.length > 0) {
                  var w = E.children[E.children.length - 1];
                  if (w.type === O.paragraph) return w;
                }
              } else if (
                A.type === O.orderedList ||
                A.type === O.unorderedList
              ) {
                var S = A;
                if (S.items && S.items.length > 0) {
                  var R = S.items[S.items.length - 1];
                  if (R && R.length > 0) {
                    var y = R[R.length - 1],
                      N = v(y);
                    if (N) return N;
                  }
                }
              }
              return null;
            };
            for (var j = G.length - 1; j >= 0; j--) {
              var Q = v(G[j]);
              if (Q) {
                var W = a$($, J, Z, Y);
                if (W) {
                  var D = W;
                  if (Q.children && D.children)
                    Q.children.push(
                      {
                        type: O.text,
                        text: `
`,
                      },
                      ...D.children,
                    );
                  J = W.endPos;
                  continue;
                }
              }
            }
          }
          var W = a$($, J, Z, Y);
          if (W) {
            G.push(W), (J = W.endPos);
            continue;
          }
        }
        J++;
      }
      return G;
    }
    function m6($, Z, Y, G) {
      if (Y.inline) return null;
      let J = I($, Z),
        X = t($, Z, J, 3);
      if (X.spaceEquivalent > 3 && !Y.inList) return null;
      var K = Z + X.charCount;
      if (K >= $.length || $[K] !== '#') return null;
      let Q = A9($, K, '#', 6);
      if (((K += Q), K >= $.length)) return null;
      let V = $[K];
      if (
        V ===
          `
` ||
        V === '\r'
      ) {
        let q = I($, K);
        return {
          ...z$(Q, [], '', G.slugify),
          endPos: q + (q < $.length ? 1 : 0),
        };
      }
      if (V !== ' ' && V !== '\t') return null;
      let U = K,
        H = I($, U);
      var M = $.slice(U, H).replace(v6, '').trim();
      let z = u9(M, 0, M.length, Y, G);
      return {
        ...z$(Q, z, M, G.slugify),
        endPos: H + (H < $.length ? 1 : 0),
      };
    }
    function pZ($, Z, Y, G) {
      if (Y.inline || Y.inBlockQuote || Y.inList) return null;
      let J = I($, Z);
      if (J >= $.length) return null;
      let X = k($, J),
        K = -1,
        Q = null;
      for (var V = 0; X < $.length && V < 10; V++) {
        let N = I($, X);
        if (N >= $.length) break;
        var U = X;
        while (U < N && (b($, U) === C || b($, U) === l || b($, U) === V0)) U++;
        if (U >= N) break;
        var H = 0,
          M = X;
        while (M < N && H < 3 && b($, M) === C) H++, M++;
        if (M < N) {
          let B = b($, M);
          if (B === d1 || B === D1) {
            let T = $[M];
            var z = 0,
              q = !1,
              F = M;
            while (F < N) {
              let f = b($, F);
              if (f === B) {
                if (q) {
                  z = 0;
                  break;
                }
                z++;
              } else if (f === C || f === l) q = !0;
              else {
                z = 0;
                break;
              }
              F++;
            }
            if (z >= 1) {
              (K = N), (Q = T);
              break;
            }
          }
        }
        X = k($, N);
      }
      if (!Q) return null;
      let _ = b($, Z);
      if (_ === T9 || _ === C1 || $[Z] === '|') return null;
      let j = Z;
      var D = Z,
        W = !1;
      while (D < X) {
        let N = I($, D);
        if (N >= X) break;
        var v = D;
        while (v < N && (b($, v) === C || b($, v) === l || b($, v) === V0)) v++;
        if (v < N) (W = !0), (j = N);
        D = k($, N);
      }
      if (!W) return null;
      let A = $.slice(Z, j);
      var E = 0,
        w = A.length;
      while (
        E < w &&
        (A.charCodeAt(E) === C ||
          A.charCodeAt(E) === l ||
          A.charCodeAt(E) === V0 ||
          A.charCodeAt(E) === d)
      )
        E++;
      while (
        w > E &&
        (A.charCodeAt(w - 1) === C ||
          A.charCodeAt(w - 1) === l ||
          A.charCodeAt(w - 1) === V0 ||
          A.charCodeAt(w - 1) === d)
      )
        w--;
      let S = A.slice(E, w);
      if (!S) return null;
      let R = Q === '=' ? 1 : 2,
        y = u9(S, 0, S.length, Y, G);
      return {
        ...z$(R, y, S, G.slugify),
        endPos: K + (K < $.length ? 1 : 0),
      };
    }
    function a$($, Z, Y, G) {
      if (Y.inline) return null;
      if (G.optimizeForStreaming && $[Z] === '|') {
        var J = Math.min(500, $.length - Z),
          X = $.substr(Z, J),
          K = 0,
          Q = !1;
        for (var V = 0; V < X.length; V++) {
          if (X[V] === '|') K++;
          if (X[V] === '-' || X[V] === ':') Q = !0;
        }
        if (K >= 3 && Q) {
          var U = I($, Z);
          while (U < $.length) {
            var H = k($, U);
            if (H >= $.length) break;
            var M = I($, H),
              z = $.slice(H, M);
            if (z.indexOf('|') === -1 && z.indexOf('-') === -1) break;
            if (((U = M), M >= $.length)) break;
          }
          return {
            type: O.paragraph,
            children: [],
            endPos: k($, U),
          };
        }
      }
      let q = Z,
        F = $.length;
      while (q < F) {
        let r = I($, q),
          K0 = !0;
        for (let $0 = q; $0 < r; $0++) {
          let s = b($, $0);
          if (s !== C && s !== l && s !== V0) {
            K0 = !1;
            break;
          }
        }
        if (K0) {
          q = r;
          break;
        }
        if (r >= F) {
          q = F;
          break;
        }
        let B0 = k($, r);
        if (B0 >= F) {
          q = F;
          break;
        }
        let m0 = I($, B0),
          H0 = !0,
          q0 = '';
        for (let $0 = B0; $0 < m0; $0++) {
          let s = b($, $0);
          if (s !== C && s !== l && s !== V0) {
            if (((H0 = !1), q0 === '')) q0 = $[$0];
            break;
          }
        }
        if (H0) {
          q = r;
          break;
        }
        let e = !1,
          l0 = t($, B0, m0),
          Y0 = l0.spaceEquivalent === 4 && l0.charCount === 4;
        if (q0 === '<' && !Y0 && !G.disableParsingRawHTML) {
          let s = B0,
            r0 = 0;
          while (s < m0 && r0 < 3) {
            let $1 = b($, s);
            if ($1 === C || $1 === l) r0++, s++;
            else break;
          }
          if (s < m0 && $[s] === '<') {
            var _ = M$(
              $,
              s,
              {
                ...Y,
                inline: !1,
              },
              G,
            );
            if (_)
              e = !('canInterruptParagraph' in _) || _.canInterruptParagraph;
          }
        }
        if (Y0) e = !1;
        else if (!e && q0 && p9(q0))
          if (q0 === '[') {
            let $0 = B0;
            if ($0 + 1 >= F || $[$0 + 1] !== '^') e = !1;
            else e = !0;
          } else if (q0 === '*' || q0 === '+')
            if (D$($, B0, Y, G)) e = !0;
            else {
              let s = B0 + 1 < F ? $[B0 + 1] : '';
              if (s && j1(s)) e = !0;
              else e = !1;
            }
          else {
            let $0 = l9($, B0, Y, G);
            if ($0)
              if ($0.type === O.codeBlock)
                if (t($, B0, m0).spaceEquivalent >= 4) e = !1;
                else e = !0;
              else if ($0.type === O.unorderedList || $0.type === O.orderedList)
                if ($0.type === O.orderedList) e = $0.start === 1;
                else e = !0;
              else if (q0 === '-')
                if (q > Z) e = !0;
                else e = !0;
              else if ($0.type === O.ref) e = !1;
              else e = !0;
          }
        if (e) {
          q = r;
          break;
        }
        q = k($, r);
      }
      if (q <= Z) return null;
      var j = Z,
        D = q;
      while (j < D) {
        let r = b($, j);
        if (r === C || r === l) j++;
        else break;
      }
      let W = I($, j);
      var v = D > W,
        A;
      if (!v) A = $.slice(j, D);
      else {
        var E = [],
          w = j,
          S = 0;
        while (w < D) {
          var R = I($, w);
          if (R > D) R = D;
          if (S === 0) E.push($.slice(w, R));
          else {
            var y = 0;
            while (y < 4 && w + y < R)
              if (b($, w + y) === C) y++;
              else break;
            var N = y === 4 ? w + 4 : w;
            E.push($.slice(N, R));
          }
          if (R < D) {
            let r = b($, R);
            if (r === V0 || r === d)
              E.push(`
`),
                (w = k($, R));
            else w = D;
          } else w = D;
          S++;
        }
        A = E.join('');
      }
      var B = A.length;
      while (B > 0) {
        var T = A.charCodeAt(B - 1);
        if (T === C || T === l) B--;
        else break;
      }
      if (B < A.length) A = A.slice(0, B);
      let f = !1;
      for (let r = 0; r < A.length; r++) {
        let K0 = A.charCodeAt(r);
        if (K0 !== C && K0 !== l && K0 !== d && K0 !== V0) {
          f = !0;
          break;
        }
      }
      if (!f) return null;
      var x = A,
        P = q,
        g = -1,
        h = q - 1;
      while (h >= j) {
        if (b($, h) === d) {
          g = h;
          break;
        }
        h--;
      }
      if (g >= 0) {
        var L = !1;
        for (var a = j; a < g; a++) {
          let r = b($, a);
          if (r !== C && r !== l && r !== d && r !== V0) {
            L = !0;
            break;
          }
        }
        if (!L) {
          var i = g + 1;
          while (i < $.length) {
            let r = b($, i);
            if (r === C || r === l) i++;
            else break;
          }
          var j0 = i - (g + 1);
          if (j0 < 4 && i < $.length && $[i] === '[') {
            var w0 = {
                ...Y,
                inline: !1,
              },
              z0 = B9($, i, w0, G, !1);
            if (z0) {
              var T0 = 0,
                h = j;
              while (h <= g) {
                let K0 = $.indexOf(
                  `
`,
                  h,
                );
                if (K0 === -1 || K0 > g) break;
                T0++, (h = K0 + 1);
              }
              var p = 0,
                V1 = 0;
              h = 0;
              while (h < A.length) {
                let K0 = A.indexOf(
                  `
`,
                  h,
                );
                if (K0 === -1) break;
                if ((V1++, V1 === T0)) {
                  p = K0 + 1;
                  break;
                }
                h = K0 + 1;
              }
              if (p > 0) x = A.slice(0, p - 1);
              (P = z0.endPos), (Y.refs = w0.refs);
            }
          }
        }
      }
      let J0 = u9(x, 0, x.length, Y, G);
      var P0 = {
        type: O.paragraph,
        children: J0,
        endPos: P,
      };
      if (J0.length > 0) {
        var M0 = [];
        for (var Q0 = J0.length - 1; Q0 >= 0; Q0--) {
          var a0 = J0[Q0];
          if (a0.type === O.htmlSelfClosing && a0.isClosingTag === !0)
            M0.push(Q0);
          else if (a0.type === O.text) {
            var I0 = a0;
            if (I0.text && I0.text.trim().length > 0) break;
          } else break;
        }
        if (M0.length >= 3) {
          var k0 = M0[M0.length - 1],
            B1 = J0.slice(k0 + 1);
          J0.splice(k0 + 1), (P0.removedClosingTags = B1);
        }
      }
      return P0;
    }
    function h6($, Z) {
      if (Z !== 0) return null;
      let Y = L$($);
      if (!Y?.hasValidYaml) return null;
      let G = Y.endPos - 1;
      if (G > 0 && $[G - 1] === '\r') G--;
      let J = p1($.slice(0, G));
      return {
        type: O.frontmatter,
        text: J,
        endPos: Y.endPos,
      };
    }
    function D$($, Z, Y, G) {
      let J = I($, Z),
        X = t($, Z, J, 3);
      if (X.spaceEquivalent > 3) return null;
      var K = Z + X.charCount;
      if (K >= J) return null;
      let Q = $[K];
      if (Q !== '-' && Q !== '*' && Q !== '_') return null;
      var V = 0,
        U = K;
      while (U < J) {
        var H = $[U];
        if (H === Q) V++;
        else if (H !== ' ' && H !== '\t') return null;
        U++;
      }
      if (V < 3) return null;
      return {
        type: O.breakThematic,
        endPos: k($, J),
      };
    }
    function t($, Z, Y, G) {
      let J = 0,
        X = 0,
        K = Z;
      while (K < Y) {
        var Q = b($, K);
        if (Q !== C && Q !== l) break;
        if (G !== void 0 && J >= G) break;
        if (Q === l) J += 4 - (J % 4);
        else J += 1;
        X++, K++;
      }
      return {
        spaceEquivalent: J,
        charCount: X,
      };
    }
    function LZ($, Z, Y, G) {
      let J = 0,
        X = 0,
        K = G;
      for (let M = Z; M < Y && X < 4; M++) {
        var Q = b($, M);
        if (Q === l) {
          let z = 4 - (K % 4);
          if (((X += z), J++, (K += z), X >= 4)) break;
        } else if (Q === C) {
          if ((X++, J++, K++, X >= 4)) break;
        } else break;
      }
      let V = $.slice(Z + J, Y);
      var U = 0;
      for (var H = Z; H < Y; H++) {
        if ($[H] === '\t') U++;
        if (U >= 2) break;
      }
      if (U >= 2 && c(V, '\t') && G > 0) V = '  ' + V.slice(1);
      return V;
    }
    function X$($, Z, Y) {
      let G = I($, Z),
        J = t($, Z, G);
      if (J.spaceEquivalent < 4) return null;
      let X = J.spaceEquivalent,
        K = I($, Z + J.charCount),
        Q = Z,
        V = 0;
      var U = Q - 1;
      while (
        U >= 0 &&
        $[U] !==
          `
` &&
        $[U] !== '\r'
      )
        U--;
      U++;
      while (U < Q) {
        if ($[U] === '\t') V = V + 4 - (V % 4);
        else V++;
        U++;
      }
      let H = LZ($, Q, K, V),
        M = k($, K);
      if (M >= $.length) {
        if (!H.trim()) return null;
        return {
          type: O.codeBlock,
          text: H,
          endPos: M,
        };
      }
      var z = [];
      z.push(H);
      let q = M;
      while (q < $.length) {
        let _ = I($, q);
        if (w1($, q, _)) {
          let j = _ + 1;
          if (j < $.length) {
            let D = I($, j),
              W = t($, j, D),
              v = $[j + W.charCount];
            if (
              v &&
              v !==
                `
` &&
              (W.spaceEquivalent < 4 || (v === '>' && W.spaceEquivalent < X))
            )
              break;
          }
          z.push(`
`);
        } else {
          if (t($, q, _).spaceEquivalent < 4) break;
          let D = LZ($, q, _, 0);
          z.push(`
`),
            z.push(D);
        }
        q = k($, _);
      }
      let F = z.join('');
      if (((F = F.replace(y6, '')), !F.trim())) return null;
      return {
        type: O.codeBlock,
        text: F,
        endPos: q,
      };
    }
    function $Z($, Z, Y, G) {
      let J = $[Z];
      if (J !== '`' && J !== '~') return null;
      let X = A9($, Z, J);
      if (X < 3) return null;
      let K = Z;
      while (K > 0 && b($, K - 1) !== d) K--;
      let Q = t($, K, Z),
        V = Q.spaceEquivalent,
        U = V;
      if (V === 4 && Q.charCount === 4) (V = 0), (U = 4);
      if (V >= 4) return null;
      let H = g0($, Z + X),
        M = I($, H),
        z = $.slice(H, M).trim();
      if (J === '`' && z.indexOf('`') !== -1) return null;
      z = z.replace(p$, '$1');
      let q = z.indexOf(' '),
        F = q > 0 ? z.slice(0, q) : z,
        _ = q > 0 ? z.slice(q + 1).trim() : '',
        j = _ && /=\s*["']/.test(_) ? u1(_, 'code', 'code', G) : void 0,
        D = k($, M),
        W = D,
        v = !1;
      while (W < $.length) {
        let S = I($, W),
          R = W,
          y = 0;
        while (R < S) {
          let N = b($, R);
          if (N === C) {
            if ((y++, R++, y >= 4)) break;
          } else if (N === l) {
            if (((y += 4 - (y % 4)), R++, y >= 4)) break;
          } else break;
        }
        if (y < 4) {
          let N = A9($, R, J, S - R);
          if (N >= X) {
            let B = R + N;
            while (B < S) {
              let T = b($, B);
              if (T === C || T === l) B++;
              else break;
            }
            if (B === S) {
              v = !0;
              break;
            }
            if (N >= 3 && B < S) {
              let T = R + N;
              if (!(T < S && (b($, T) === C || b($, T) === l))) {
                let x = !0;
                if (J === '`') {
                  if ($.slice(T, S).indexOf('`') !== -1) x = !1;
                }
                if (x) break;
              }
            }
          }
        } else if (U === 4 && V === 0 && y === 4) {
          let N = A9($, R, J, S - R);
          if (N >= X && w1($, R + N, S)) {
            v = !0;
            break;
          }
        }
        W = k($, S);
      }
      let A =
        W > D &&
        $[W - 1] ===
          `
`
          ? W - 1
          : W;
      if (A > D && $[A - 1] === '\r') A--;
      let E = p1($.slice(D, A));
      if (U) E = r$(E, U);
      let w = v && W < $.length ? k($, I($, W)) : W;
      return {
        type: O.codeBlock,
        text: E,
        lang: F,
        attrs: j,
        endPos: w,
      };
    }
    function p6($, Z, Y) {
      for (var G = 0; G < $.length; G++)
        if (!d$($[G])) {
          let X = e$($, Z, Y, {
            inline: !1,
            inBlockQuote: !0,
          });
          for (var J = 0; J < X.length; J++) {
            let K = X[J];
            if ('endPos' in K) delete K.endPos;
          }
          return X;
        }
      return [];
    }
    function uZ($, Z, Y, G) {
      if (Y.inline) return null;
      let J = Z;
      while (J < $.length && ($[J] === ' ' || $[J] === '\t')) J++;
      if (J >= $.length || $[J] !== '>') return null;
      let X = Z;
      var K = [],
        Q = void 0,
        V = !1,
        U = -1,
        H = !1,
        M = null,
        z = null,
        q = 0,
        F = !1;
      while (X < $.length) {
        let w = I($, X),
          S = X;
        while (S < w && ($[S] === ' ' || $[S] === '\t')) S++;
        if (S < w && $[S] === '>') {
          let R = S + 1;
          if (R < w && $[R] === ' ') R++;
          let N = t($, R, w).spaceEquivalent >= 4,
            B = !1,
            T = null,
            f = 0;
          if (R < w) {
            let P = $[R];
            if (P === '`' || P === '~') {
              let g = 0,
                h = R;
              while (h < w && $[h] === P && g < 20) g++, h++;
              if (g >= 3) (B = !0), (T = P), (f = g);
            }
          }
          if (H && M === 'fenced' && T === z && f >= q)
            (H = !1), (M = null), (z = null), (q = 0);
          else if (N || B)
            (H = !0), (M = N ? 'indented' : 'fenced'), (z = T), (q = f);
          var _ = !N && !B;
          if (_) {
            for (var j = R; j < w; j++)
              if (!d$($[j])) {
                _ = !1;
                break;
              }
          }
          if (((F = _), U === -1 && !_)) U = K.length;
          if (!_) V = !0;
          let x = S + 1;
          if (x < w && $[x] === '\t') {
            K.push('  ');
            let P = 4;
            for (let g = x + 1; g < w; g++) {
              let h = $[g];
              var D = b(h);
              if (D === l) {
                let L = 4 - (P % 4);
                if (L === 1) K.push(' ');
                else if (L === 2) K.push('  ');
                else if (L === 3) K.push('   ');
                else K.push(' '.repeat(L));
                P += L;
              } else K.push(h), P++;
            }
            if (w < $.length)
              K.push(`
`);
          } else {
            let P = x;
            if (P < w && $[P] === ' ') P++;
            if ((K.push($.slice(P, w)), w < $.length))
              K.push(`
`);
          }
        } else {
          var W = !0;
          for (var j = X; j < w; j++)
            if (!d$($[j])) {
              W = !1;
              break;
            }
          if (W || H) break;
          if (t($, X, w).spaceEquivalent === 0) {
            let y = l9($, X, Y, G);
            if (y && y.type !== O.ref && y.type !== O.codeBlock) break;
            if (F) break;
          }
          if ((K.push($.slice(X, w)), w < $.length))
            K.push(`
`);
        }
        X = k($, w);
      }
      if (X === Z) return null;
      if (
        K.length > 0 &&
        K[K.length - 1] ===
          `
`
      )
        K.pop();
      let v = K.join('');
      if (v.length >= 4 && v.charCodeAt(0) === g1 && v.charCodeAt(1) === F9) {
        let w = v.indexOf(
          `]
`,
          2,
        );
        if (w > 2) (Q = v.slice(2, w)), (v = v.slice(w + 2));
      }
      let A = p6(v, Y, G),
        E = {
          type: O.blockQuote,
          children: A,
          endPos: X,
        };
      if (Q) E.alert = Q;
      return E;
    }
    function r$($, Z) {
      return $.split(`
`)
        .map(function (Y) {
          if (Y.length === 0) return Y;
          let G = Z,
            J = 0,
            X = 0,
            K = 0;
          while (X < Y.length && J < G)
            if (Y[X] === ' ') J++, K++, X++;
            else if (Y[X] === '\t') {
              let Q = 4 - (K % 4);
              if (J + Q <= G) (J += Q), (K += Q), X++;
              else {
                let V = G - J,
                  U = Math.max(0, Q - V);
                return ' '.repeat(U) + Y.slice(X + 1);
              }
            } else break;
          return Y.slice(X);
        })
        .join(`
`);
    }
    function K$($, Z, Y, G, J = !0) {
      let X =
          (J
            ? `
`
            : '') + $,
        K = u9(X, 0, X.length, Y, G);
      if (Z.length > 0 && Z[Z.length - 1].type === O.paragraph)
        Z[Z.length - 1].children.push(...K);
      else Z.push(...K);
    }
    function k9($) {
      return $.some(function (Z) {
        return (
          Z.type === O.codeBlock ||
          Z.type === O.paragraph ||
          Z.type === O.blockQuote ||
          Z.type === O.orderedList ||
          Z.type === O.unorderedList ||
          Z.type === O.heading
        );
      });
    }
    function g$($) {
      return !!$.match(n$);
    }
    function lZ($) {
      if ($.length === 0) return $;
      var Z = $[$.length - 1];
      if (
        (Z.type === O.orderedList || Z.type === O.unorderedList) &&
        Z.items?.length > 0
      )
        return lZ(Z.items.slice(-1)[0]);
      return $;
    }
    function s$($, Z, Y, G, J, X, K) {
      if (!c(J, '[')) return null;
      var Q = {
          inline: !1,
          list: !1,
          refs: X.refs || {},
        },
        V = B9($, Z + G.charCount, Q, K, !1);
      return V ? V.endPos : null;
    }
    function TZ($, Z, Y, G) {
      if ($.length !== 1 || !Y) return !1;
      if ($[0].length !== 0) return !1;
      if (Z) return !0;
      if (!Z && G.trim() === '') return !0;
      return !1;
    }
    function SZ($, Z) {
      var Y = $.index || 0;
      return Z ? Y + $[1].length + $[2].length + 1 : Y + $[1].length + 1;
    }
    function j$($, Z, Y, G, J) {
      var X = 0,
        K = G + J,
        Q = Z;
      while (Q < Y && X < 4) {
        var V = b($, Q);
        if (V === C) X++, K++;
        else if (V === l) {
          var U = 4 - (K % 4);
          if (X + U > 4) break;
          (X += U), (K += U);
        } else break;
        Q++;
      }
      return {
        contentStartColumn: K,
        contentStartPos: Q,
      };
    }
    function C$($) {
      var Z = $.match(n$);
      if (!Z) return null;
      if (Z[1])
        return {
          match: [$, Z[1], Z[2], Z[3]],
          ordered: !0,
          listItemRegex: u$,
        };
      if (Z[4])
        return {
          match: [$, Z[4], Z[5], ''],
          ordered: !0,
          listItemRegex: u$,
        };
      if (Z[6])
        return {
          match: [$, Z[6], Z[7]],
          ordered: !1,
          listItemRegex: l$,
        };
      if (Z[8])
        return {
          match: [$, Z[8], ''],
          ordered: !1,
          listItemRegex: l$,
        };
      return null;
    }
    function o1($, Z, Y, G, J, X, K) {
      if (Z.spaceEquivalent !== X) return !1;
      var Q = $.match(K);
      if (Q) return Y ? Q[2] === J : Q[1] === G;
      var V = $.match(n$);
      if (!V) return !1;
      if (Y) return V[4] && V[5] === J;
      else return V[8] === G;
    }
    function dZ($, Z, Y, G) {
      var J = Z,
        X = Y,
        K = Z[0];
      while (X < $.length) {
        var Q = I($, X),
          V = $.slice(X, Q),
          U = c(V, ' '.repeat(G)) ? V.slice(G) : V;
        if (c(U.trim(), K) && A9(U.trim(), 0, K) >= 3)
          return {
            content: J,
            endPos: k($, Q),
          };
        (J +=
          `
` + U),
          (X = k($, Q));
      }
      return {
        content: J,
        endPos: X,
      };
    }
    function Y$($, Z, Y, G, J, X, K, Q, V, U, H, M, z) {
      var q = U ? void 0 : V[1],
        F = U ? V[2] : void 0,
        _ = U ? u$ : l$,
        j = H;
      if (!H) {
        var D = k($, X),
          W = D;
        while (W < $.length) {
          var v = I($, W),
            A = $.slice(W, v),
            E = t($, W, v),
            w = E.spaceEquivalent;
          if (w1($, W, v)) {
            var S = k($, v);
            if (S < $.length) {
              var R = I($, S),
                y = t($, S, R),
                N = y.spaceEquivalent,
                f = SZ(V, U),
                x = J + Q + f,
                P = j$($, x, X, K, f),
                g = P.contentStartColumn;
              if (N + 1 > g) {
                j = !0;
                break;
              }
            }
            break;
          } else if (w <= K) {
            var B = A.slice(E.charCount),
              T = B.match(_);
            if (T && (U ? T[2] === F : T[1] === q)) break;
          }
          W = k($, v);
        }
      }
      var f = SZ(V, U),
        x = J + Q + f,
        P = j$($, x, X, K, f),
        g = P.contentStartColumn,
        h = G,
        L = k($, X);
      if (c(G, '```') || c(G, '~~~')) {
        var a = U ? V[1].length + V[2].length + 1 : V[1].length + 1,
          i = dZ($, G, L, a);
        (h = i.content), (L = i.endPos);
      }
      return (
        Z.push(iZ(h, j, M, z)),
        Y.push(g),
        {
          newCurrentPos: L,
          itemHasBlankLine: j,
        }
      );
    }
    function EZ($, Z, Y, G, J, X) {
      if (J > G || X.disableParsingRawHTML) return !1;
      let K = Z + Y;
      if (K >= $.length || $[K] !== '<') return !1;
      return u6($, K);
    }
    function u6($, Z) {
      if (Z >= $.length || $[Z] !== '<') return !1;
      let Y = $.length,
        G = Z + 1;
      if (G < Y && $[G] === '/') G++;
      if (G >= Y) return !1;
      let J = b($, G);
      if (!U9(J)) return !1;
      G++;
      while (G < Y) {
        let K = $[G],
          Q = b($, G);
        if (
          K === '>' ||
          K === ' ' ||
          K === '\t' ||
          K ===
            `
` ||
          K === '\r' ||
          K === '/'
        )
          break;
        if (K === '-' || K === '_' || U9(Q) || (Q >= 48 && Q <= 57)) G++;
        else return !1;
      }
      let X = 0;
      while (G < Y) {
        let K = $[G],
          Q = b($, G);
        if (X === 1) {
          if (K === '"') X = 0;
          G++;
        } else if (X === 2) {
          if (K === "'") X = 0;
          G++;
        } else if (K === '"') (X = 1), G++;
        else if (K === "'") (X = 2), G++;
        else if (K === '>') return !0;
        else if (K === '/' && G + 1 < Y && $[G + 1] === '>') return !0;
        else if (Q === 10 || Q === 13) return !1;
        else G++;
      }
      return !1;
    }
    function xZ($, Z, Y, G, J, X, K, Q, V, U, H, M) {
      let z = G,
        q = !1;
      while (z < $.length) {
        let F = I($, z),
          _ = t($, z, F),
          j = _.spaceEquivalent;
        if (w1($, z, F)) {
          (q = !0), (z = k($, F));
          continue;
        }
        let D = $.slice(z + _.charCount, F);
        if (j <= J && o1(D, _, X, K, Q, J, V)) break;
        if (j >= Y) {
          if (M && q) {
            let v = s$($, z, F, _, D, U, H);
            if (v) {
              (z = v), (q = !1);
              continue;
            }
          }
          let W = V$($, z, F, _, Y - 1, Y, Z, q, U, H, void 0, J);
          if (W.processed) {
            (z = W.newPos), (q = W.wasBlank);
            continue;
          }
        } else break;
      }
      return z;
    }
    function PZ($, Z, Y, G) {
      let J = e$($, Y, G, {
        inline: !1,
        list: !0,
      });
      if (J.length > 0)
        return !Z && J.length === 1 && J[0].type === O.paragraph
          ? J[0].children
          : J;
      let X = W$(Y, !0, () => l1($, 0, $.length, Y, G));
      return Z && X.length > 0
        ? [
            {
              type: O.paragraph,
              children: X,
            },
          ]
        : X;
    }
    function iZ($, Z, Y, G) {
      let J = k6($, 0, Y);
      if (!(J && (J.endPos >= $.length || $[J.endPos] === ' ')))
        return PZ($, Z, Y, G);
      let K = J.endPos < $.length ? J.endPos + 1 : J.endPos,
        Q = $.slice(K),
        V = PZ(Q, Z, Y, G),
        U = [J];
      if (J.endPos < $.length)
        U.push({
          type: O.text,
          text: ' ',
        });
      return U.push(...V), U;
    }
    function IZ($, Z) {
      if (!$[0]) return !1;
      let Y = $[0].indexOf(Z);
      if (Y === -1) return !1;
      let G = Y + Z.length;
      if (G >= $[0].length) return !1;
      let J = $[0][G];
      return J ? b(J) === _Z : !1;
    }
    function cZ($, Z, Y) {
      if ($.length === 0) return !1;
      let G = $[$.length - 1],
        J = Z.trim();
      if (
        (!c(J, '=') && !c(J, '-')) ||
        J.length < 1 ||
        !/^[=-]+[ \t]*$/.test(J)
      )
        return !1;
      let X = [],
        K = '';
      if (G.type === O.paragraph) {
        let U = G;
        (X = U.children),
          (K = U.children
            .map((H) => (H.type === O.text ? H.text : ''))
            .join('')
            .trim());
      } else if (G.type === O.text) {
        let U = [],
          H = $.length - 1;
        while (H >= 0 && $[H].type === O.text) U.unshift($[H]), H--;
        if (U.length > 0)
          (X = U),
            (K = U.map((M) => M.text)
              .join('')
              .trim());
      }
      if (!K) return !1;
      let V = J[0] === '=' ? 1 : 2;
      if (G.type === O.paragraph) $.pop();
      else if (G.type === O.text)
        while ($.length > 0 && $[$.length - 1].type === O.text) $.pop();
      return $.push(z$(V, X, K, Y.slugify)), !0;
    }
    function V$($, Z, Y, G, J, X, K, Q, V, U, H, M) {
      let z = G.spaceEquivalent,
        q = $.slice(Z + G.charCount, Y);
      if (z >= J + 4) {
        let D = X$($, Z, V);
        if (D) {
          let W = D,
            v = r$(W.text || '', X);
          return (
            K.push({
              ...W,
              text: v,
            }),
            {
              processed: !0,
              newPos: W.endPos,
              wasBlank: !1,
            }
          );
        }
      }
      let F = z - (X - 1);
      if (z + 1 >= X && F <= 3) {
        let D = Z + G.charCount;
        if (D < Y) {
          let W = $[D];
          if (W === '`' || W === '~') {
            let v = $Z($, D, V, U);
            if (v) {
              let A = v,
                E = r$(A.text || '', X - 1);
              return (
                K.push({
                  ...A,
                  text: E,
                  endPos: A.endPos,
                }),
                {
                  processed: !0,
                  newPos: A.endPos,
                  wasBlank: !1,
                }
              );
            }
          }
          if (W === '|') {
            let v = aZ($, D, V, U);
            if (v) {
              let A = v;
              return (
                K.push(A),
                {
                  processed: !0,
                  newPos: A.endPos,
                  wasBlank: !1,
                }
              );
            }
          }
        }
      }
      if (
        q.length > 0 &&
        (q[0] === '-' ||
          q[0] === '*' ||
          q[0] === '+' ||
          (q[0] >= '0' && q[0] <= '9'))
      ) {
        if (/^([-*+]|\d{1,9}[.)])\s+/.test(q)) {
          let W = u9(q, 0, q.length, V, U);
          return (
            K.push(
              {
                type: O.text,
                text: `
`,
              },
              ...W,
            ),
            {
              processed: !0,
              newPos: k($, Y),
              wasBlank: !1,
            }
          );
        }
      }
      let _ = M6($, Z, K, q, V, U);
      if (_ !== null)
        return {
          processed: !0,
          newPos: _,
          wasBlank: !1,
        };
      let j = e$(q, V, U, {
        inline: !1,
        list: !0,
      });
      if (j.length > 0) {
        if (H && j[0].type === O.paragraph) {
          let D = j[0];
          if (
            (K.push(
              {
                type: O.text,
                text: `
`,
              },
              ...D.children,
            ),
            j.length > 1)
          )
            K.push(...j.slice(1));
        } else if (!Q && j[0].type === O.paragraph && K.length > 0) {
          let D = K[K.length - 1],
            W = j[0];
          if (D.type === O.paragraph)
            D.children.push(
              {
                type: O.text,
                text: `
`,
              },
              ...W.children,
            );
          else if (D.type === O.heading) K.push(...W.children);
          else if (!k9(K))
            K.push(
              {
                type: O.text,
                text: ' ',
              },
              ...W.children,
            );
          else K.push(...j);
          if (j.length > 1) K.push(...j.slice(1));
        } else K.push(...j);
        return {
          processed: !0,
          newPos: k($, Y),
          wasBlank: !1,
        };
      }
      if (Q) {
        let D = W$(V, !0, () => l1(q, 0, q.length, V, U));
        K.push({
          type: O.paragraph,
          children: D,
        });
      } else K$(q, K, V, U);
      return {
        processed: !0,
        newPos: k($, Y),
        wasBlank: !1,
      };
    }
    function o$($, Z, Y, G) {
      if (Y.inline) return null;
      var J = Y.inList;
      if (((Y.inList = !0), Z > 0)) {
        var X = b($, Z - 1);
        if (X !== d && X !== V0) return (Y.inList = J), null;
      }
      var K = I($, Z),
        Q = t($, Z, K);
      if (Q.spaceEquivalent > 3 && !Y.inList) return (Y.inList = J), null;
      var V = $.slice(Z, K),
        U = Q.charCount,
        H = V.slice(U),
        M = C$(H);
      if (!M) return (Y.inList = J), null;
      var { match: z, ordered: q, listItemRegex: F } = M,
        _ = Q.spaceEquivalent,
        j = q ? parseInt(z[1], 10) : void 0,
        D = q ? z[2] : void 0,
        W = q ? void 0 : z[1],
        v = q ? z[3] === '' : z[2] === '';
      function A(n, S0) {
        if (n === 0) return !0;
        var b0 = b($, n - 1);
        if (b0 !== d) return !1;
        if (!S0) return !0;
        var U0 = n - 2;
        while (U0 >= 0) {
          var u = b($, U0);
          if (u !== C && u !== l) break;
          U0--;
        }
        return U0 < 0 || b($, U0) === d;
      }
      if (v && !A(Z, !0)) return (Y.inList = J), null;
      if (q && j !== 1 && !A(Z, !1)) return null;
      if (!q && IZ(z, W)) return null;
      var E = z.index || 0,
        w = q
          ? E + z[1].length + z[2].length + 1
          : v
            ? E + z[1].length
            : E + z[1].length + 1,
        S = Z + U + w,
        R = j$($, S, K, _, w),
        y = R.contentStartColumn,
        N = _ + E + z[1].length,
        B = q ? N + z[2].length + 1 : v ? N : N + 1,
        T = [],
        f = [];
      function x(n, S0, b0) {
        return b0 ? n >= S0 : n > S0;
      }
      function P() {
        return T[T.length - 1];
      }
      function g() {
        return f[f.length - 1] ?? y;
      }
      function h(n, S0) {
        let b0 = lZ(S0),
          U0 = Y.inList;
        Y.inList = !0;
        let u = o$($, n, Y, G);
        if (((Y.inList = U0), u)) return b0.push(u), u;
        return null;
      }
      var L = k($, K),
        a = L,
        i = !1;
      while (a < $.length) {
        var j0 = I($, a),
          w0 = $.slice(a, j0);
        if (w0.trim() === '') {
          var z0 = k($, j0);
          while (z0 < $.length) {
            var T0 = b($, z0);
            if (T0 === d);
            else if (!x6.has($[z0])) break;
            z0++;
          }
          var p = I($, z0),
            V1 = $.slice(z0, p),
            J0 = t($, z0, p),
            P0 = V1.slice(J0.charCount);
          if (o1(P0, J0, q, W, D, _, F)) i = !0;
          else {
            var M0 = s$($, z0, p, J0, P0, Y, G);
            if (M0) {
              var Q0 = M0;
              while (Q0 < $.length && b($, Q0) === d) Q0++;
              if (Q0 < $.length) {
                var a0 = I($, Q0),
                  I0 = $.slice(Q0, a0),
                  k0 = t($, Q0, a0),
                  B1 = I0.slice(k0.charCount);
                if (o1(B1, k0, q, W, D, _, F)) i = !0;
              }
            }
          }
          break;
        }
        var r = t($, a, j0),
          K0 = w0.slice(r.charCount),
          B0 = C$(K0);
        if (!B0) break;
        var m0 = B0.match;
        if (q) {
          if (m0[2] !== D) break;
        } else if (m0[1] !== W) break;
        a = k($, j0);
      }
      var H0 = q ? z[3] : z[2];
      H0 = H0.trimStart();
      var q0 = Z + U + (z.index || 0),
        e = q ? q0 + z[1].length + z[2].length : q0 + z[1].length,
        l0 = e;
      while (l0 < $.length) {
        var T0 = b($, l0);
        if (T0 !== C && T0 !== l) break;
        l0++;
      }
      var Y0 = 0,
        $0 = e;
      while ($0 < K) {
        var T0 = b($, $0);
        if (T0 === l) Y0 += 4 - (Y0 % 4);
        else if (T0 === C) Y0++;
        else break;
        $0++;
      }
      var s = !1;
      if (e < $.length && b($, e) === l) {
        var r0 = 1,
          $1 = e + 1;
        while ($1 < $.length && b($, $1) === l) r0++, $1++;
        if (r0 >= 2) (H0 = '      ' + H0), (s = !0);
      }
      if (!q) v = v && Y0 === 0;
      if (Y0 >= 4 && !s) H0 = ' '.repeat(Y0 - 1) + H0.trimStart();
      var U1 = H0.trim() === '';
      let F1 = i;
      if (!i && L < $.length) {
        var Q1 = L;
        while (Q1 < $.length) {
          var N1 = I($, Q1),
            F0 = $.slice(Q1, N1);
          if (w1($, Q1, N1)) {
            var s0 = k($, N1);
            while (s0 < $.length) {
              var O1 = I($, s0);
              if (w1($, s0, O1)) s0 = k($, O1);
              else break;
            }
            if (s0 < $.length) {
              var P1 = t($, s0, $.length),
                z1 = P1.spaceEquivalent;
              if (z1 >= _) {
                var h0 = $.slice(s0, I($, s0)),
                  _1 = h0.slice(P1.charCount).match(F),
                  y1 = _1 && (q ? _1[2] === D : _1[1] === W),
                  W1 = null;
                for (var o = L; o < Q1; o = I($, o) + 1) {
                  var Z1 = I($, o),
                    q1 = t($, o, Z1),
                    o0 = $.slice(o, Z1).slice(q1.charCount).match(F),
                    Q9 =
                      o0 &&
                      q1.spaceEquivalent > _ &&
                      q1.spaceEquivalent >= y &&
                      (q ? o0[2] === D : o0[1] === W);
                  if (Q9) {
                    var b1 = q1.spaceEquivalent + 1,
                      R1 = q
                        ? b1 + o0[1].length + o0[2].length + 1
                        : b1 + o0[1].length + 1,
                      z9 = o + q1.charCount + o0[0].length,
                      N9 = j$($, z9, Z1, b1, R1 - b1);
                    W1 = N9.contentStartColumn;
                    break;
                  }
                }
                var _9 = Y0 >= 5 ? B : y;
                if (!y1 && z1 >= _9 && (W1 === null || z1 + 1 < W1)) F1 = !0;
              }
            }
            break;
          }
          var M1 = t($, Q1, N1),
            I1 = M1.spaceEquivalent,
            L1 = F0.slice(M1.charCount),
            T1 = L1.match(F),
            v0 = T1 && (q ? T1[2] === D : T1[1] === W);
          if (v0) {
            if (I1 <= _) break;
          }
          Q1 = k($, N1);
        }
      }
      var N0 = H0;
      if (c(H0, '```') || c(H0, '~~~')) {
        var p0 = q ? z[1].length + z[2].length + 1 : z[1].length + 1,
          S1 = dZ($, H0, L, p0);
        (N0 = S1.content), (L = S1.endPos);
      }
      var u0 = !v && H0.trim() === '' && Y0 > 0 && Y0 < 5;
      if (!F1) {
        var f0 = N0.length > 0 ? N0[0] : '',
          X1 = f0 === '>',
          Z = L;
        while (Z < $.length) {
          var K = I($, Z),
            V = $.slice(Z, K);
          if (V.trim() === '') break;
          var Q = t($, Z, K);
          if (Q.spaceEquivalent < B) break;
          var H = V.slice(Q.charCount);
          if (Q.spaceEquivalent <= _ && o1(H, Q, q, W, D, _, F)) break;
          if (g$(H) && Q.spaceEquivalent > _) break;
          var y0 = H.length > 0 ? H[0] : '',
            t1 = y0 === '>' && X1;
          if ((y0 === '>' && !t1) || y0 === '#' || c(H, '```') || c(H, '~~~'))
            break;
          (N0 +=
            `
` + H),
            (L = Z = k($, K));
        }
      }
      if ((T.push(iZ(N0, F1, Y, G)), f.push(y), F1 && (Y0 >= 5 || u0))) {
        let n = P();
        L = xZ($, n, B, L, _, q, W, D, F, Y, G, !0);
      } else if (!F1) {
        let n = B - 1;
        while (L < $.length) {
          let S0 = I($, L),
            b0 = $.slice(L, S0),
            U0 = t($, L, S0),
            u = U0.spaceEquivalent,
            _0 = b0.slice(U0.charCount);
          if (
            b0.trim() === '' ||
            (u <= _ && o1(_0, U0, q, W, D, _, F)) ||
            (g$(_0) && u > _) ||
            u < n
          )
            break;
          let n0 = P(),
            E0 = V$($, L, S0, U0, n, y, n0, !1, Y, G, !0, _);
          if (E0.processed) L = E0.newPos;
          else break;
        }
      }
      var Z0 = !1;
      while (L < $.length) {
        let n = I($, L),
          S0 = $.slice(L, n),
          b0 = t($, L, n),
          U0 = b0.charCount,
          u = b0.spaceEquivalent;
        if (S0.trim() === '') (i = !0), (Z0 = !0), (L = k($, n));
        else if (u < _) {
          let _0 = S0.slice(U0);
          if (_0.startsWith('<') && EZ($, L, U0, _, u, G)) break;
          let n0 = _0.trim();
          if (
            n0.length > 0 &&
            T.length > 0 &&
            !p9(n0[0]) &&
            !o1(_0, b0, q, W, D, _, F)
          ) {
            let E0 = P();
            if (E0.length > 0) {
              let X0 = E0[E0.length - 1];
              if (!Z0 && (X0.type === O.paragraph || X0.type === O.text)) {
                K$(_0, E0, Y, G), (Z0 = !1), (L = k($, n));
                continue;
              }
            }
          }
          break;
        } else {
          let _0 = S0.slice(U0);
          if (T.length > 0) {
            let m = f[T.length - 1] || y;
            if (u + 1 >= m && !o1(_0, b0, q, W, D, _, F)) {
              let C0 = P();
              if (C0.length > 0 && cZ(C0, _0, G)) {
                L = k($, n);
                continue;
              }
            }
          }
          if (D$($, L, Y, G)) break;
          if (Z0) {
            let m = s$($, L, n, b0, _0, Y, G);
            if (m) {
              (L = m), (Z0 = !1);
              continue;
            }
          }
          if (u <= _) {
            if (_0.startsWith('<') && EZ($, L, U0, _, u, G)) break;
            if (!o1(_0, b0, q, W, D, _, F)) {
              if (u === _ && !Z0) {
                let m = _0.trim();
                if (m.length > 0 && !p9(m[0])) {
                  let C0 = l9($, L, Y, G);
                  if (C0 && C0.type !== O.paragraph) break;
                  let R0 = P();
                  if (R0.length > 0 && !k9(R0)) {
                    K$(_0, R0, Y, G, !0), (Z0 = !1), (L = k($, n));
                    continue;
                  }
                }
              }
              break;
            }
          }
          if (TZ(T, v, Z0, H0)) break;
          let E0 = C$(_0),
            X0 = E0 ? E0.match : null,
            A1 = X0 && (q ? X0[2] === D : X0[1] === W);
          if (A1 && u > 3 && Z0) break;
          if (A1 && u <= _ + 3) {
            if (u >= 4 && Z0) break;
            if (u === _) {
              let m = q ? X0[3] : X0[2];
              if (
                ((m = m.trimStart()),
                (L = Y$($, T, f, m, L, n, u, U0, X0, q, i, Y, G).newCurrentPos),
                (Z0 = !1),
                m.trim() === '')
              ) {
                let R0 = T[T.length - 1],
                  O0 = g();
                L = xZ($, R0, O0, L, _, q, W, D, F, Y, G);
              }
              continue;
            }
            if (u > _) {
              if (Z0) {
                let O0 = q ? X0[3] : X0[2];
                (O0 = O0.trimStart()),
                  (L = Y$(
                    $,
                    T,
                    f,
                    O0,
                    L,
                    n,
                    u,
                    U0,
                    X0,
                    q,
                    i,
                    Y,
                    G,
                  ).newCurrentPos),
                  (Z0 = !1);
                continue;
              }
              let m = P(),
                C0 = u + 1,
                R0 = x(C0, g(), k9(m));
              if (R0) {
                let O0 = h(L, m);
                if (O0) {
                  (L = O0.endPos), (Z0 = !1);
                  continue;
                }
              }
              if (!R0 && A1) {
                let O0 = q ? X0[3] : X0[2];
                if (((O0 = O0.trimStart()), !i)) {
                  let d0 = k($, n);
                  while (d0 < $.length) {
                    let L0 = I($, d0),
                      i0 = $.slice(d0, L0),
                      D0 = t($, d0, L0),
                      Y1 = D0.spaceEquivalent;
                    if (i0.trim() === '') {
                      let b9 = k($, L0);
                      if (b9 < $.length) {
                        let f1 = t($, b9, $.length).spaceEquivalent,
                          w$ =
                            u +
                            (q
                              ? X0[1].length + X0[2].length + 1
                              : X0[1].length + 1);
                        if (f1 + 1 > w$) break;
                      }
                      break;
                    } else if (Y1 <= _) {
                      let W0 = i0.slice(D0.charCount).match(F);
                      if (W0 && (q ? W0[2] === D : W0[1] === W) && Y1 <= _)
                        break;
                    }
                    d0 = k($, L0);
                  }
                }
                (L = Y$(
                  $,
                  T,
                  f,
                  O0,
                  L,
                  n,
                  u,
                  U0,
                  X0,
                  q,
                  i,
                  Y,
                  G,
                ).newCurrentPos),
                  (Z0 = !1);
                continue;
              } else if (!R0 && !A1) break;
              {
                let O0 = P(),
                  A0 = O0.length === 0;
                if (A0 && TZ(T, v, Z0, H0)) break;
                let d0 = O0.some(
                    (D0) =>
                      D0.type === O.codeBlock ||
                      D0.type === O.paragraph ||
                      D0.type === O.blockQuote ||
                      D0.type === O.orderedList ||
                      D0.type === O.unorderedList ||
                      D0.type === O.heading,
                  ),
                  L0 = A0 && T.length === 1 ? B : y;
                if (d0 ? u >= L0 : u > L0) {
                  let D0 = V$($, L, n, b0, L0, y, P(), Z0, Y, G, void 0, _);
                  if (D0.processed) {
                    (Z0 = D0.wasBlank), (L = D0.newPos);
                    continue;
                  }
                } else break;
              }
            } else if (u === _) {
              if (!q && X0 && IZ(X0, X0[1])) break;
              let m = q ? X0[3] : X0[2];
              (m = m.trimStart()),
                (L = Y$($, T, f, m, L, n, _, U0, X0, q, i, Y, G).newCurrentPos),
                (Z0 = !1);
            }
          } else if (u > _) {
            let m = P();
            if (g$(_0)) {
              let A0 = u + 1;
              if (x(A0, g(), k9(m))) {
                let i0 = h(L, m);
                if (i0) {
                  (L = i0.endPos), (Z0 = !1);
                  continue;
                }
              }
              if (u - _ > 3) {
                let i0 = m.length > 0 ? m[m.length - 1] : null;
                if (i0 && (i0.type === O.paragraph || i0.type === O.text)) {
                  K$(_0, m, Y, G), (Z0 = !1), (L = k($, n));
                  continue;
                }
              } else break;
            } else {
              let A0 = h(L, m);
              if (A0) {
                (L = A0.endPos), (Z0 = !1);
                continue;
              }
            }
            let R0 = y;
            if (k9(m) ? u >= R0 - 1 : u > R0 - 1) {
              let A0 = V$($, L, n, b0, R0 - 1, y, P(), Z0, Y, G, void 0, _);
              if (A0.processed) {
                (Z0 = A0.wasBlank), (L = A0.newPos);
                continue;
              }
            } else break;
          } else break;
        }
      }
      if (
        i &&
        T.length > 1 &&
        T[0].length > 0 &&
        T[0][0].type !== O.paragraph
      ) {
        for (var G0 = 1; G0 < T.length; G0++)
          if (T[G0].length > 0 && T[G0][0].type === O.paragraph) {
            var E1 = !1;
            for (var v1 = 0; v1 < T[0].length; v1++) {
              var G1 = T[0][v1].type;
              if (
                G1 === O.codeBlock ||
                G1 === O.heading ||
                G1 === O.blockQuote ||
                G1 === O.orderedList ||
                G1 === O.unorderedList ||
                G1 === O.htmlBlock ||
                G1 === O.breakThematic
              ) {
                E1 = !0;
                break;
              }
            }
            if (!E1)
              T[0] = [
                {
                  type: O.paragraph,
                  children: T[0],
                },
              ];
            break;
          }
      }
      let y9 = q
        ? {
            type: O.orderedList,
            items: T,
            ordered: !0,
            start: j,
          }
        : {
            type: O.unorderedList,
            items: T,
            ordered: !1,
          };
      return (
        (Y.inList = J),
        {
          ...y9,
          endPos: L,
        }
      );
    }
    function aZ($, Z, Y, G) {
      if (Y.inline) return null;
      let J = [],
        X = Z;
      while (X < $.length) {
        let F = I($, X);
        if (w1($, X, F)) break;
        let _ = $.slice(X, F).trim();
        if (!(_.indexOf('|') !== -1 || (J.length >= 3 && _ && !p9(_[0]))))
          break;
        J.push(_), (X = k($, F));
      }
      if (J.length < 2) return null;
      let K = (F) =>
          F[0] === '|' && F[F.length - 1] === '|' ? F.slice(1, -1) : F,
        Q = (F) => {
          let _ = [],
            j = '',
            D = !1;
          for (let W = 0; W < F.length; W++) {
            let v = F[W];
            if (v === '\\' && W + 1 < F.length && F[W + 1] === '|')
              (j += '|'), W++;
            else if (v === '`') (D = !D), (j += v);
            else if (v === '|' && !D) _.push(j.trim()), (j = '');
            else j += v;
          }
          return _.push(j.trim()), _;
        },
        V = Q(K(J[0]));
      if (!V.length) return null;
      let U = Q(K(J[1]));
      if (U.length !== V.length || U.some((F) => !/^:?-+:?$/.test(F)))
        return null;
      let H = U.map((F) => {
        let _ = F[0] === ':',
          j = F[F.length - 1] === ':';
        return _ && j ? 'center' : _ ? 'left' : j ? 'right' : null;
      });
      if (G.optimizeForStreaming && J.length === 2) return null;
      let M = (F) => W$(Y, !0, () => F.map((_) => l1(_, 0, _.length, Y, G))),
        z = M(V),
        q = J.slice(2).map((F) => {
          let _ = F.indexOf('|') !== -1 ? Q(K(F)) : [F.trim()],
            j = V.length;
          while (_.length < j) _.push('');
          return (_.length = j), M(_);
        });
      return {
        type: O.table,
        header: z,
        cells: q,
        align: H,
        endPos: X,
      };
    }
    var l6 = [
        'div',
        'p',
        'section',
        'article',
        'aside',
        'nav',
        'header',
        'footer',
        'main',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'ul',
        'ol',
        'li',
        'dl',
        'dt',
        'dd',
        'table',
        'thead',
        'tbody',
        'tfoot',
        'tr',
        'td',
        'th',
        'form',
        'fieldset',
        'hr',
        'pre',
        'details',
        'summary',
        'figure',
        'figcaption',
      ],
      d6 = new Set(['pre', 'script', 'style', 'textarea']);
    function m9($) {
      return l6.indexOf($.toLowerCase()) !== -1;
    }
    function w9($) {
      return d6.has($);
    }
    function w1($, Z, Y) {
      for (var G = Z; G < Y; G++) {
        let J = b($, G);
        if (J !== C && J !== l && J !== V0) return !1;
      }
      return !0;
    }
    function W$($, Z, Y) {
      let G = $.inline;
      $.inline = Z;
      try {
        return Y();
      } finally {
        $.inline = G;
      }
    }
    function k$($, Z, Y) {
      var G = Z;
      while (G < Y) {
        var J = I($, G);
        if (w1($, G, J)) return G;
        G = k($, J);
      }
      return Y;
    }
    function m$($, Z, Y) {
      return {
        type: O.htmlComment,
        text: p1($),
        endPos: Z,
        ...Y,
      };
    }
    function v9($, Z, Y, G, J, X, K, Q, V) {
      var U = p1(Z),
        H = U;
      if (Q && (Q.forceBlock || Q.optimizeForStreaming) && Z && !X) {
        var M = new RegExp('^<' + $.toLowerCase() + '(\\s[^>]*)?>$', 'i');
        if (M.test(Z.trim())) H = '';
      }
      var z = H,
        q = $.toLowerCase(),
        F = new RegExp('^<' + q + '[\\s>]', 'i');
      if (F.test(z)) {
        var _ = z.indexOf('>');
        if (_ !== -1) {
          z = z.slice(_ + 1);
          var j = '</' + q + '>',
            D = z.indexOf(j);
          if (D !== -1) z = z.slice(0, D);
        }
      } else {
        var W = '</' + q + '>',
          v = z.indexOf(W);
        if (v !== -1) z = z.slice(0, v);
      }
      var A = [];
      if (z && Q && !Q.optimizeForStreaming) {
        var E = V || {
            inline: !1,
            inHTML: !0,
            inAnchor: !1,
          },
          w = z.trim(),
          S = F$.test(w),
          R = O$.test(w),
          y = H$.test(w);
        if (S || R || y) {
          var N = {
            ...E,
            inline: !1,
            inHTML: !0,
            inAnchor: E.inAnchor || q === 'a',
          };
          A = d9(w, N, Q);
        } else if (w) {
          var B = {
            ...E,
            inline: !0,
            inHTML: !0,
            inAnchor: E.inAnchor || q === 'a',
          };
          A = l1(w, 0, w.length, B, Q);
        }
      }
      return {
        type: O.htmlBlock,
        tag: $,
        attrs: G || {},
        rawAttrs: J,
        children: A,
        rawText: H,
        text: z,
        verbatim: !0,
        isClosingTag: X,
        canInterruptParagraph: K,
        endPos: Y,
      };
    }
    function h9($) {
      let Z = O$.test($),
        Y = F$.test($),
        G = N6.test($);
      return Z || (Y && !G);
    }
    function fZ($, Z, Y, G, J, X, K, Q, V, U) {
      if (
        !Q.inHTML &&
        !Q.inline &&
        !n9(
          J,
          `
`,
        )
      ) {
        let J0 = X,
          P0 = K.length;
        while (J0 < P0) {
          let M0 = I(K, J0);
          if (w1(K, J0, M0)) break;
          let Q0 = K.slice(J0, M0).trim();
          if (Q0.length > 0 && p9(Q0[0])) {
            let a0 = M$(K, J0, Q, U);
            if (a0) {
              J0 = a0.endPos;
              continue;
            }
            let I0 = n1(K, J0);
            if (I0) {
              J0 = I0.endPos;
              continue;
            }
            return null;
          }
          J0 = k(K, M0);
        }
      }
      let H = Z,
        M = w9(H);
      var z = !M && !K9(Z),
        q = void 0;
      if (J) {
        var F = J.indexOf('>');
        if (F !== -1) {
          var _ = J.slice(0, F + 1);
          if (
            _.indexOf(`
`) !== -1
          )
            q = _;
          var j = F;
          for (var D = 1; D < F; D++) {
            var W = _[D];
            if (
              W === ' ' ||
              W === '\t' ||
              W ===
                `
` ||
              W === '>'
            ) {
              j = D;
              break;
            }
          }
          Y = _.slice(j, F);
        }
      }
      var v = Y.replace(/^[\s\n\r\t]+/, ''),
        A = u1(v, Z, $, U),
        E = {
          ...A,
        },
        w = !1,
        S = !1;
      if (z && G.length > 0) {
        var R = '</' + H,
          y = G.indexOf(R);
        if (y >= 0) {
          var N = y + R.length;
          while (N < G.length && (G[N] === ' ' || G[N] === '\t')) N++;
          if (N < G.length && G[N] === '>') {
            var B = G.slice(0, y);
            if (h9(B)) (G = B), (S = !0);
            else w = !0;
          }
        }
        if (!S) {
          var T = G.length - 1;
          if (
            G[T] ===
            `
`
          ) {
            T--;
            while (T >= 0 && (G[T] === ' ' || G[T] === '\t' || G[T] === '\r'))
              T--;
            if (
              T >= 0 &&
              G[T] ===
                `
`
            )
              w = !0;
          }
        }
      }
      var f = M || (z && w && !h9(G)),
        x = p1(G),
        P = x;
      if (f) {
        if (
          x.length > 0 &&
          x[0] ===
            `
`
        )
          (x = x.slice(1)), (P = x);
        if (
          x.length > 0 &&
          x[x.length - 1] ===
            `
`
        )
          (x = x.slice(0, -1)), (P = x);
        var R = '</' + H + '>',
          y = x.indexOf(R);
        if (y !== -1) x = x.slice(0, y);
      }
      let g = x.match(/^([ \t]*)/),
        h = g ? g[1] : '',
        L = new RegExp(`^${h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'gm'),
        a = x.replace(L, ''),
        i = F$.test(a),
        j0 = O$.test(a),
        w0 = H === 'p',
        z0 = H$.test(a),
        T0 = w0 ? i : i || j0 || (Q.inHTML && z0),
        p = [];
      if (a)
        if (T0 || z0) {
          let J0 = {
            ...Q,
            inline: !1,
            inHTML: !0,
            inAnchor: Q.inAnchor || H === 'a',
          };
          p = d9(a, J0, U);
        } else {
          let J0 = {
            ...Q,
            inline: !0,
            inHTML: U.optimizeForStreaming ? !0 : Q.inHTML,
            inAnchor: V || Q.inAnchor || H === 'a',
          };
          p = l1(a, 0, a.length, J0, U);
        }
      var V1 = void 0;
      if (f)
        if (q !== void 0) V1 = q + P;
        else V1 = P;
      return {
        type: O.htmlBlock,
        tag: f ? Z : $,
        attrs: E,
        rawAttrs: Y,
        children: p,
        rawText: V1,
        text: a,
        verbatim: f,
        canInterruptParagraph: !0,
        endPos: X,
      };
    }
    function M$($, Z, Y, G) {
      if ($[Z] !== '<') return null;
      if (G.optimizeForStreaming && Y.inHTML) return null;
      if (!Y.inline);
      if (Z + 1 < $.length) {
        if ($[Z + 1] === '?') {
          var J = U$($, Z);
          if (J && J.kind === 'pi')
            return m$(J.text || '', J.endPos, {
              raw: !0,
            });
        } else if ($[Z + 1] === '!') {
          if (Z + 3 < $.length && $.slice(Z, Z + 4) === '<!--') {
            if (Y.inline);
            var X = U$($, Z);
            if (X && X.kind === 'comment') {
              var K = X.text || '',
                Q = !1;
              if (K === '<!-->') (K = ''), (Q = !0);
              else if (K === '<!--->') (K = '-'), (Q = !0);
              else if (K.startsWith('<!--') && K.endsWith('-->'))
                K = K.slice(4, -3);
              if (Y.inline);
              return m$(K, X.endPos, {
                endsWithGreaterThan: Q,
              });
            }
          }
          var V = U$($, Z);
          if (V && (V.kind === 'declaration' || V.kind === 'cdata'))
            return m$(V.text || '', V.endPos, {
              raw: !0,
            });
        }
      }
      if (Z + 1 < $.length) {
        let q9 = $[Z + 1];
        if (
          q9 === ' ' ||
          q9 ===
            `
` ||
          q9 === '\t' ||
          q9 === '\r'
        )
          return null;
      }
      var U = $.indexOf('>', Z + 1);
      if (U !== -1) {
        var H = $.slice(Z + 1, U),
          M = H.indexOf(' ') !== -1 || H.indexOf('\t') !== -1;
        if (!M && (c(H, 'http://') || c(H, 'https://'))) return null;
        if (!M && mZ(H)) return null;
      }
      var z = n1($, Z);
      if (!z && !Y.inline) {
        var q = $.length,
          F = I($, Z),
          _ = Z,
          j = 0;
        while (_ < F && j < 3 && ($[_] === ' ' || $[_] === '\t')) j++, _++;
        if (_ >= F || $[_] !== '<') return null;
        if (_ + 1 < F) {
          var D0 = i$($, _ + 1);
          if (D0) {
            var Y1 = D0.tagName,
              D = m9(Y1);
            if (!D) return null;
            var W = D0.nextPos,
              v = !1,
              A = !1,
              E = '',
              w = F,
              S = !1;
            while (w < q && !S) {
              var R = !1;
              while (W < w) {
                var y = $[W];
                if (A) {
                  if (y === E) (A = !1), (E = '');
                  if (
                    y ===
                      `
` ||
                    y === '\r'
                  )
                    v = !0;
                  W++, (R = !0);
                } else if (y === '"' || y === "'")
                  (A = !0), (E = y), W++, (R = !0);
                else if (
                  y ===
                    `
` ||
                  y === '\r'
                ) {
                  (v = !0), W++, (R = !0);
                  var N = I($, W);
                  if (N === W) break;
                  w = N;
                } else if (y === '>') {
                  W++, (S = !0);
                  break;
                } else W++, (R = !0);
              }
              if (S) break;
              if (!R && W >= w) {
                var B = I($, w + 1);
                if (B <= w) break;
                w = B;
              } else if (W >= w && w < q) {
                var B = I($, w + 1);
                if (B <= w) break;
                w = B;
              } else break;
            }
            if (!v && S) return null;
            if (W >= F && F < q) W = F;
            var T = D ? 'type6' : 'type7',
              f = W,
              x = k$($, k($, F), q),
              P = $.slice(f, x),
              g = Z + 1 < $.length && $[Z + 1] === '/';
            if (T === 'type7' && P.trim() === '') {
              var h = $.slice(Z, x),
                L = I(h, 0);
              if (L < h.length) L++;
              var a = h.slice(0, L);
              return v9(Y1, a, x, {}, void 0, g, !1, G, Y);
            }
            var i = $.slice(Z, x);
            return v9(Y1, i, x, {}, void 0, g, T === 'type6', G, Y);
          }
        }
        return null;
      }
      if (!z) return null;
      if (U !== -1) {
        var j0 = $.slice(Z + 1, U);
        if (
          (c(j0, 'http://') || c(j0, 'https://')) &&
          (j0.indexOf(' ') !== -1 || j0.indexOf('\t') !== -1)
        )
          return null;
      }
      var P0 = Z + (z.isClosing ? 2 : 1);
      if (P0 < $.length) {
        var w0 = $[P0],
          z0 = b(w0);
        if ((z0 >= 97 && z0 <= 122) || (z0 >= 65 && z0 <= 90)) {
          if (P0 + 1 < $.length && $[P0 + 1] === ':') return null;
        }
      }
      if (z.isClosing) {
        var T0 = z.attrs.trim();
        if (T0.length > 0) return null;
        if (!Y.inline) {
          var q = $.length,
            F = I($, Z),
            f = z.endPos,
            p = f;
          while (p < F && ($[p] === ' ' || $[p] === '\t' || $[p] === '\r')) p++;
          var V1 =
            p >= F ||
            ($[p] === '<' &&
              (function () {
                var KZ = n1($, p);
                return KZ && m9(KZ.tagLower);
              })());
          if (V1) {
            var x = k$($, k($, F), q),
              P = $.slice(f, x);
            if (P.length > 0) {
              if (
                P[0] === '\r' &&
                P[1] ===
                  `
`
              )
                P = P.slice(2);
              else if (
                P[0] ===
                  `
` ||
                P[0] === '\r'
              )
                P = P.slice(1);
            }
            let $6 = z.tagLower || z.tagName.toLowerCase();
            return v9(
              z.tagName,
              P,
              x,
              u1(z.whitespaceBeforeAttrs + z.attrs, $6, z.tagName, G),
              z.whitespaceBeforeAttrs + z.attrs,
              !0,
              !1,
              G,
              Y,
            );
          }
        }
        var J0 = $.slice(Z, z.endPos);
        return {
          type: O.htmlSelfClosing,
          tag: z.tagName,
          attrs: {},
          endPos: z.endPos,
          isClosingTag: !0,
          rawText: J0,
        };
      }
      var P0 = Z + (z.isClosing ? 2 : 1);
      if (P0 < $.length) {
        var M0 = $[P0];
        if (
          M0 === ' ' ||
          M0 === '\t' ||
          M0 ===
            `
` ||
          M0 === '\r'
        )
          return null;
      }
      var Q0 = z.tagLower,
        a0 = K9(z.tagName);
      let I0 =
        z.tagName.length > 0 && z.tagName[0] >= 'A' && z.tagName[0] <= 'Z';
      if (z.isSelfClosing || (a0 && Q0 !== 'a')) {
        if (z.hasNewline && !I0) return null;
        if (!Y.inHTML && !Y.inline && !I0) return null;
        var k0 = z.attrs.replace(/\/\s*$/, ''),
          B1 = u1(k0, Q0, z.tagName, G),
          J0 = Y.inline ? $.slice(Z, z.endPos) : void 0;
        let XZ = {
          type: O.htmlSelfClosing,
          tag: z.tagName,
          attrs: B1,
          endPos: z.endPos,
        };
        if (J0 !== void 0) XZ.rawText = J0;
        return XZ;
      }
      if (Y.inline) {
        var r = z.attrs.replace(/\/\s*$/, ''),
          K0 = z.whitespaceBeforeAttrs + r,
          B0 = u1(r, Q0, z.tagName, G),
          m0 = {
            ...B0,
          },
          H0 = z.endPos,
          q0 = [];
        if (!K9(z.tagName)) {
          var e = w6($, z.endPos, Q0);
          if (e !== null) {
            var l0 = $.slice(z.endPos, e[0]);
            if (l0)
              if ((Y.inHTML && H$.test(l0)) || h9(l0))
                q0 = d9(
                  l0,
                  {
                    ...Y,
                    inline: !1,
                    inHTML: !0,
                    inAnchor: Y.inAnchor || Q0 === 'a',
                  },
                  G,
                );
              else
                q0 = l1(
                  l0,
                  0,
                  l0.length,
                  {
                    ...Y,
                    inline: !0,
                    inHTML: G.optimizeForStreaming ? !0 : Y.inHTML,
                    inAnchor: Y.inAnchor || Q0 === 'a',
                  },
                  G,
                );
            H0 = e[1];
          }
        }
        return {
          type: O.htmlBlock,
          tag: z.tagName,
          attrs: m0,
          rawAttrs: K0,
          children: q0,
          verbatim: !1,
          endPos: H0,
        };
      }
      if (!Y.inline) {
        var q = $.length,
          F = I($, Z),
          Y0 = z.tagLower,
          $0 = w9(Y0),
          s = !$0 && m9(z.tagName),
          r0 = !1,
          $1 = Z;
        while ($1 < z.endPos) {
          if ($[$1] === '>') {
            r0 = !0;
            break;
          }
          $1++;
        }
        var p = z.endPos;
        while (p < F && ($[p] === ' ' || $[p] === '\t')) p++;
        var U1 =
          p >= F ||
          $[p] ===
            `
` ||
          $[p] === '\r' ||
          (s && p < F) ||
          !r0;
        if ($0 && r0 && !z.isClosing) {
          var { tagName: F1, endPos: Q1, attrs: N1 } = z,
            F0 = Q1;
          if (
            $[F0] ===
            `
`
          )
            F0++;
          var s0 = F0,
            O1 = F0,
            P1 = 1,
            z1 = Y0.length + 1;
          while (P1 > 0) {
            var h0 = $.indexOf('<', F0);
            if (h0 === -1) {
              (O1 = q), (F0 = q);
              break;
            }
            var _1 = -1,
              y1 = -1;
            if ($[h0 + 1] === '/') y1 = h0;
            else if (
              h0 + z1 + 1 <= q &&
              ($[h0 + 1] === Y0[0] || $[h0 + 1] === F1[0])
            ) {
              var W1 = $.substring(h0 + 1, h0 + z1);
              if (
                W1.toLowerCase() === Y0 &&
                ($[h0 + z1] === ' ' || $[h0 + z1] === '>')
              )
                _1 = h0;
            }
            if (_1 === -1 && y1 === -1) {
              F0 = h0 + 1;
              continue;
            }
            if (_1 !== -1 && (y1 === -1 || _1 < y1)) (F0 = _1 + z1 + 1), P1++;
            else {
              var o = y1 + 2;
              while (o < q) {
                var Z1 = $[o];
                if (
                  Z1 !== ' ' &&
                  Z1 !== '\t' &&
                  Z1 !==
                    `
` &&
                  Z1 !== '\r'
                )
                  break;
                o++;
              }
              if (o + Y0.length > q) break;
              var q1 = $.substring(o, o + Y0.length);
              if (q1.toLowerCase() !== Y0) {
                F0 = o;
                continue;
              }
              o += Y0.length;
              while (o < q) {
                var o0 = $[o];
                if (
                  o0 !== ' ' &&
                  o0 !== '\t' &&
                  o0 !==
                    `
` &&
                  o0 !== '\r'
                )
                  break;
                o++;
              }
              if (o >= q || $[o] !== '>') {
                F0 = o;
                continue;
              }
              var Q9 = o + 1,
                b1 = I($, Q9);
              (O1 = b1), (F0 = b1 + 1), P1--;
            }
          }
          var R1 = 0;
          while (
            F0 + R1 < q &&
            $[F0 + R1] ===
              `
`
          )
            R1++;
          var z9 = $.slice(Z, F0 + R1),
            N9 = $.slice(s0, O1),
            _9 = F0 + R1;
          return fZ(z.tagName, z.tagName, N1, N9, z9, _9, $, Y, !1, G);
        }
        if (U1 || !r0) {
          var T = s ? 'type6' : 'type7',
            f = z.endPos,
            x = k$($, k($, F), q);
          if (T === 'type6' && !z.isClosing) {
            let a9 = I0 ? z.tagName : z.tagLower || z.tagName.toLowerCase();
            var M1 = '</' + a9,
              I1 = '<' + a9,
              L1 = f,
              T1 = 1,
              v0 = -1;
            while (L1 < x && T1 > 0) {
              var N0 = $.indexOf(I1, L1),
                p0 = $.indexOf(M1, L1);
              while (N0 !== -1 && N0 < x) {
                var S1 = N0 + I1.length;
                if (S1 >= q) {
                  N0 = -1;
                  break;
                }
                var u0 = $[S1];
                if (
                  u0 === ' ' ||
                  u0 === '\t' ||
                  u0 ===
                    `
` ||
                  u0 === '\r' ||
                  u0 === '>'
                )
                  break;
                N0 = $.indexOf(I1, S1);
              }
              if (N0 === -1 || N0 >= x) N0 = x;
              if (p0 === -1 || p0 >= x) p0 = x;
              if (N0 < p0) T1++, (L1 = N0 + I1.length);
              else if (p0 < x) {
                if ((T1--, T1 === 0)) {
                  v0 = p0;
                  break;
                }
                L1 = p0 + M1.length;
              } else break;
            }
            if (v0 !== -1 && v0 < x) {
              var f0 = v0 + M1.length;
              while (f0 < q && ($[f0] === ' ' || $[f0] === '\t')) f0++;
              if (f0 < q && $[f0] === '>') {
                var X1 = f0 + 1,
                  y0 = X1;
                while (
                  y0 < q &&
                  $[y0] !==
                    `
`
                )
                  y0++;
                if (y0 < q) y0++;
                while (y0 < q && ($[y0] === ' ' || $[y0] === '\t')) y0++;
                if (y0 < q && $[y0] === '<' && !c($.slice(y0), M1)) {
                  var t1 = n1($, y0);
                  if (t1) x = X1;
                }
              }
            } else if (((v0 = $.indexOf(M1, f)), v0 !== -1)) {
              var c9 = $.slice(f, v0),
                Z0 = I0 || h9(c9);
              if (Z0) {
                var G0 = v0 + M1.length;
                while (G0 < q && ($[G0] === ' ' || $[G0] === '\t')) G0++;
                if (G0 < q && $[G0] === '>') {
                  var E1 = I($, G0 + 1);
                  x = E1;
                }
              }
            }
          }
          var P = $.slice(f, x),
            v1 = z.whitespaceBeforeAttrs + z.attrs,
            g = z.isClosing;
          let VZ = () => {
            let a9 = z.tagLower || z.tagName.toLowerCase(),
              L9 = z.whitespaceBeforeAttrs + z.attrs;
            return {
              parsed: u1(L9, a9, z.tagName, G),
              raw: L9,
            };
          };
          if (T === 'type7' && P.trim() === '') {
            var G1 = $.slice(Z, z.endPos),
              y9 =
                G1.indexOf(`
`) !== -1;
            if (y9) return null;
            var n = z.endPos,
              L = I($, n);
            if (L < $.length) L++;
            var a = $.slice(Z, L);
            let QZ = VZ();
            return v9(z.tagName, a, x, QZ.parsed, QZ.raw, g, !1, G, Y);
          }
          var S0 = z.hasNewline,
            b0 = !r0;
          if ((S0 || b0) && T === 'type7') {
            var U0 = z.endPos,
              u = $.slice(Z, U0),
              _0 = P,
              i = u + _0;
            let L9 = VZ();
            return v9(z.tagName, i, x, L9.parsed, L9.raw, g, !1, G, Y);
          }
          let UZ = z.tagLower || z.tagName.toLowerCase();
          var n0 = u1(v1, UZ, z.tagName, G),
            E0 = {
              ...n0,
            };
          if (T === 'type6') {
            var X0 = P,
              A1 = P.indexOf('</' + UZ);
            if (A1 >= 0) {
              var p = A1 + 2 + z.tagName.length;
              while (p < P.length && (P[p] === ' ' || P[p] === '\t')) p++;
              if (p < P.length && P[p] === '>') X0 = P.slice(0, A1);
            }
            if (h9(X0))
              return fZ(
                z.tagName,
                z.tagName,
                v1,
                X0,
                $.slice(Z, z.endPos),
                x,
                $,
                Y,
                !1,
                G,
              );
          }
          var m = P;
          if (m.length > 0) {
            if (
              m[0] === '\r' &&
              m[1] ===
                `
`
            )
              m = m.slice(2);
            else if (
              m[0] ===
                `
` ||
              m[0] === '\r'
            )
              m = m.slice(1);
          }
          var C0 = m.split(`
`),
            R0 = 1 / 0;
          for (var O0 = 0; O0 < C0.length; O0++) {
            var A0 = C0[O0];
            if (A0.trim().length === 0) continue;
            var j = 0;
            while (j < A0.length && (A0[j] === ' ' || A0[j] === '\t')) j++;
            if (j < R0) R0 = j;
          }
          if (R0 > 0 && R0 < 1 / 0) {
            var d0 = [];
            for (var L0 = 0; L0 < C0.length; L0++) {
              var i0 = C0[L0];
              if (i0.trim().length === 0) d0.push(i0);
              else d0.push(i0.slice(R0));
            }
            m = d0.join(`
`);
          }
          return v9(z.tagName, m, x, E0, v1, g, T === 'type6' ? !0 : !1, G, Y);
        }
      }
      if (Y.inline) return null;
      var D0 = i$($, Z + 1);
      if (!D0) return null;
      var Y1 = D0.tagName;
      if (!K9(Y1)) return null;
      let b9 = D0.tagLower;
      var W0 = D0.nextPos,
        f1 = $.length;
      while (W0 < f1 && j1($[W0])) W0++;
      var YZ = W0;
      while (W0 < f1 && $[W0] !== '>') W0++;
      if (W0 >= f1) return null;
      let w$ = $.slice(YZ, W0).trim(),
        R9 = W0 + 1;
      while (R9 < f1 && j1($[R9])) R9++;
      let nZ = '</' + b9 + '>',
        JZ = $.toLowerCase().indexOf(nZ, R9);
      if (JZ !== -1) {
        if ($.slice(R9, JZ).trim()) return null;
      }
      W0++;
      let tZ = W0;
      while (W0 < f1 && j1($[W0])) W0++;
      if (
        W0 < f1 &&
        $[W0] ===
          `
`
      )
        W0++;
      let eZ = u1(w$, Y1, Y1, G);
      return {
        type: O.htmlSelfClosing,
        tag: Y1,
        attrs: eZ,
        endPos: tZ,
      };
    }
    function i6($, Z) {
      if ($[Z] !== '<') return null;
      var Y = $.length,
        G = !1,
        J = Z + 1;
      if (Z + 1 < Y && $[Z + 1] === '/') (G = !0), (J = Z + 2);
      var X = i$($, J);
      if (!X) return null;
      var { tagName: K, tagLower: Q, nextPos: V } = X;
      if (V < Y) {
        var U = $[V];
        if (U === '>' || U === '/') {
          var H = U === '>' ? V + 1 : V + 2;
          if (U === '/' && (V + 1 >= Y || $[V + 1] !== '>')) return null;
          var M = U === '/',
            z = m9(K),
            q = !w9(Q) && !z;
          return {
            kind: 'tag',
            tagNameLower: Q,
            tagName: K,
            isClosing: G,
            isSelfClosing: M,
            hasNewline: !1,
            type6Candidate: z,
            type7Candidate: q,
            endPos: H,
            attrs: '',
            whitespaceBeforeAttrs: '',
          };
        }
      }
      var F = V,
        _ = !1;
      while (V < Y) {
        var j = $[V],
          D = b($, V);
        if (j === ' ' || j === '\t');
        else if (D === 10 || D === 13) _ = !0;
        else break;
        V++;
      }
      var W = $.slice(F, V),
        v = V,
        A = !1,
        E = '',
        w = 0,
        S = !1,
        R = !1,
        y = 0;
      while (v < Y) {
        var N = $[v],
          D = b($, v);
        if (y === 1) {
          if (N === '"') {
            if (v + 1 < Y && $[v + 1] === '"') return null;
            y = 0;
          }
          v++;
        } else if (y === 2) {
          if (N === "'") y = 0;
          v++;
        } else if (N === '"') (y = 1), v++;
        else if (N === "'") (y = 2), v++;
        else if (N === '{' || (N === '}' && w > 0))
          (w += N === '{' ? 1 : -1), v++;
        else if (N === '>' && w === 0) {
          if (v > V) {
            var B = v - 1;
            while (B >= V) {
              var T = $[B];
              if (T !== ' ' && T !== '\t') break;
              B--;
            }
            if (B >= V && $[B] === '/') (S = !0), (R = B < v - 1);
          }
          v++;
          break;
        } else {
          if (N === '*' || N === '#' || N === '!') {
            var f = v + 1;
            while (f < Y) {
              var x = $[f];
              if (
                x === '=' ||
                x === ' ' ||
                x === '\t' ||
                x ===
                  `
` ||
                x === '\r' ||
                x === '>'
              )
                break;
              f++;
            }
            if (f < Y && $[f] === '=') return null;
          }
          if (D === 10 || D === 13) _ = !0;
          v++;
        }
      }
      if (v > Y || $[v - 1] !== '>') return null;
      if (y === 1 || y === 2) return null;
      if (w > 0) return null;
      if (R) return null;
      var P = v - 1;
      if (S) P--;
      var g = $.slice(V, P),
        h = S,
        L = -1,
        a = !1,
        i = '',
        j0 = !1;
      for (var w0 = 0; w0 < g.length; w0++) {
        var j = g[w0];
        if (a) {
          if (j === i) (a = !1), (L = w0), (i = ''), (j0 = !1);
        } else if (j === '"' || j === "'") (a = !0), (i = j), (j0 = !1);
        else if (j === '=') j0 = !0;
        else if (L !== -1 && w0 === L + 1) {
          var D = j.charCodeAt(0);
          if (U9(D)) return null;
        } else if (j0 && !a && (j === '*' || j === '#' || j === '!'))
          return null;
        else if (j1(j)) j0 = !1;
      }
      var z0 = m9(K),
        T0 = !w9(Q) && !z0;
      return {
        kind: 'tag',
        tagNameLower: Q,
        tagName: K,
        isClosing: G,
        isSelfClosing: h,
        hasNewline: _,
        type6Candidate: z0,
        type7Candidate: T0,
        endPos: v,
        attrs: g,
        whitespaceBeforeAttrs: W,
      };
    }
    function U$($, Z) {
      if (Z >= $.length || $[Z] !== '<') return null;
      var Y = $.length;
      if (Z + 1 >= Y) return null;
      var G = $[Z + 1];
      if (G === '!') {
        if (Z + 4 <= Y && $.slice(Z, Z + 4) === '<!--') {
          var J = Z + 4;
          if (J < Y && $[J] === '>')
            return {
              kind: 'comment',
              hasNewline: !1,
              endPos: J + 1,
              text: $.slice(Z, J + 1),
              raw: !0,
            };
          if (J + 1 < Y && $[J] === '-' && $[J + 1] === '>')
            return {
              kind: 'comment',
              hasNewline: !1,
              endPos: J + 2,
              text: $.slice(Z, J + 2),
              raw: !0,
            };
          while (J + 2 < Y) {
            if ($.slice(J, J + 3) === '-->')
              return {
                kind: 'comment',
                hasNewline: !1,
                endPos: J + 3,
                text: $.slice(Z, J + 3),
                raw: !0,
              };
            J++;
          }
          return null;
        }
        if (Z + 9 <= Y && $.slice(Z, Z + 9) === '<![CDATA[') {
          var J = Z + 9;
          while (J + 2 < Y) {
            if ($.slice(J, J + 3) === ']]>')
              return {
                kind: 'cdata',
                hasNewline: !1,
                endPos: J + 3,
                text: $.slice(Z, J + 3),
                raw: !0,
              };
            J++;
          }
          return null;
        }
        if (Z + 2 < Y && U9($.charCodeAt(Z + 2))) {
          var J = Z + 2;
          while (J < Y && $[J] !== '>') J++;
          if (J >= Y) return null;
          return {
            kind: 'declaration',
            hasNewline: !1,
            endPos: J + 1,
            text: $.slice(Z, J + 1),
            raw: !0,
          };
        }
        return null;
      }
      if (G === '?') {
        var J = Z + 2;
        while (J + 1 < Y) {
          if ($.slice(J, J + 2) === '?>')
            return {
              kind: 'pi',
              hasNewline: !1,
              endPos: J + 2,
              text: $.slice(Z, J + 2),
              raw: !0,
            };
          J++;
        }
        return null;
      }
      return i6($, Z);
    }
    function h$($, Z) {
      if (Z >= $.length) return !1;
      var Y = $[Z];
      return (
        Y === '=' ||
        Y === '-' ||
        Y === '_' ||
        Y === '*' ||
        Y === '#' ||
        Y === '>' ||
        Y === '`' ||
        Y === '~' ||
        Y === '[' ||
        (Y >= '0' && Y <= '9')
      );
    }
    function J$($, Z) {
      if (Z >= $.length) return !1;
      var Y = $[Z];
      return Y === '"' || Y === "'" || Y === '(';
    }
    function c6($, Z, Y) {
      var G = $.length;
      if (Z >= G || $[Z] !== Y) return null;
      Z++;
      var J = Z,
        X = !1;
      while (Z < G && $[Z] !== Y) {
        var K = $.charCodeAt(Z);
        if (K === d) {
          if (X) return null;
          (X = !0), Z++;
        } else if (K === V0)
          if (Z + 1 < G && $.charCodeAt(Z + 1) === d) {
            if (X) return null;
            (X = !0), (Z += 2);
          } else (X = !1), Z++;
        else {
          if (((X = !1), K === k1 && Z + 1 < G)) Z++;
          Z++;
        }
      }
      if (Z >= G) return null;
      return {
        value: $.slice(J, Z),
        endPos: Z + 1,
      };
    }
    function a6($, Z) {
      var Y = $.length;
      if (Z >= Y || $[Z] !== '(') return null;
      Z++;
      var G = Z,
        J = 1,
        X = !1;
      while (Z < Y && J > 0) {
        var K = $.charCodeAt(Z);
        if (K === d) {
          if (X) return null;
          (X = !0), Z++;
        } else if (K === V0)
          if (Z + 1 < Y && $.charCodeAt(Z + 1) === d) {
            if (X) return null;
            (X = !0), (Z += 2);
          } else (X = !1), Z++;
        else {
          if (((X = !1), K === k1 && Z + 1 < Y)) Z++;
          else if (K === FZ) J++;
          else if (K === OZ) J--;
          Z++;
        }
      }
      if (J !== 0) return null;
      return {
        value: $.slice(G, Z - 1),
        endPos: Z,
      };
    }
    function r6($, Z) {
      var Y = $.length,
        G = Z;
      while (G < Y) {
        var J =
            G === 0 ||
            $[G - 1] ===
              `
`,
          X = $.charCodeAt(G);
        if (X === d && G > Z) {
          var K = G + 1;
          if (K < Y && $.charCodeAt(K) === V0) K++;
          if (K < Y && $.charCodeAt(K) === d) {
            var Q = K + 1;
            while (Q < Y && ($[Q] === ' ' || $[Q] === '\t')) Q++;
            var V = Q - (G + 1);
            if ($.charCodeAt(G + 1) === V0) V--;
            if (
              Q < Y &&
              $.charCodeAt(Q) !== d &&
              $.charCodeAt(Q) !== V0 &&
              V < 4
            )
              return G;
          }
        }
        if (J && c($, '[^', G)) {
          var U = G + 2;
          while (U < Y && $[U] !== ']') U++;
          if (U < Y && $[U] === ']' && U + 1 < Y && $[U + 1] === ':') return G;
        }
        G++;
      }
      return Y;
    }
    function s6($, Z, Y) {
      let G = $.length,
        J = Z,
        X = J < G && $[J] === '<';
      if (X) J++;
      let K = J,
        Q = K;
      if (K >= G) {
        if (!X) return null;
        Q = K;
      } else if (
        Y > 0 &&
        K < G &&
        $[K] ===
          `
`
      )
        return null;
      else
        while (Q < G) {
          if (X && $[Q] === '>') break;
          if (
            $[Q] ===
            `
`
          ) {
            let y = Q + 1;
            if (y >= G) break;
            if (
              y < G &&
              $[y] ===
                `
`
            )
              break;
            let N = y;
            while (N < G && ($[N] === ' ' || $[N] === '\t')) N++;
            if (N < G && J$($, N)) break;
            if (N < G && $[N] === '[') break;
            if (N < G) {
              let B = $[N];
              if (h$($, N)) break;
              if (B >= 'a' && B <= 'z') {
                let T = N + 1;
                while (
                  T < G &&
                  T < N + 32 &&
                  (($[T] >= 'a' && $[T] <= 'z') ||
                    ($[T] >= 'A' && $[T] <= 'Z') ||
                    ($[T] >= '0' && $[T] <= '9') ||
                    $[T] === '+' ||
                    $[T] === '.' ||
                    $[T] === '-')
                )
                  T++;
                if (T < G && $[T] === ':');
                else break;
              }
            }
            Q = N;
            continue;
          }
          if (!X && ($[Q] === ' ' || $[Q] === '\t')) {
            let y = Q + 1;
            while (y < G && ($[y] === ' ' || $[y] === '\t')) y++;
            if (y < G && J$($, y)) break;
            if (
              y < G &&
              $[y] ===
                `
`
            ) {
              let N = y + 1;
              if (
                N < G &&
                $[N] ===
                  `
`
              )
                break;
              let B = N;
              while (B < G && ($[B] === ' ' || $[B] === '\t')) B++;
              if (B < G && J$($, B)) break;
            }
          }
          Q++;
        }
      if (X && (Q >= G || $[Q] !== '>')) return null;
      let V = $.slice(K, Q),
        U = [],
        H = 0;
      for (let y = 0; y <= V.length; y++)
        if (
          y === V.length ||
          V[y] ===
            `
`
        ) {
          let N = V.slice(H, y);
          if (((N = N.trim()), N.length > 0 || U.length === 0)) {
            if ((U.push(N), y < V.length))
              U.push(`
`);
          } else if (y < V.length)
            U.push(`
`);
          H = y + 1;
        }
      (V = U.join('')), (V = V.trim()), (J = X ? Q + 1 : Q);
      var M = !1;
      if (
        J < G &&
        $[J] ===
          `
`
      ) {
        var z = J + 1,
          q = z;
        while (q < G && ($[q] === ' ' || $[q] === '\t')) q++;
        if (q < G) {
          let y = $[q];
          if (h$($, q)) M = !0;
          if (!M && y !== '=' && y !== '-') {
            var F = I($, q);
            if (F < G) {
              var _ = k($, F),
                j = _;
              while (j < G && ($[j] === ' ' || $[j] === '\t')) j++;
              if (j < G) {
                var D = $[j];
                if (D === '=' || D === '-') M = !0;
              }
            }
          }
        }
      }
      if (!M && J < G && J$($, J)) return null;
      let W = 0;
      while (J < G && !M) {
        let y = $[J];
        if (
          y ===
          `
`
        ) {
          if ((W++, W > 1)) break;
          J++;
          var v = J;
          if (
            ((J = g0($, J)),
            J < G &&
              V9($[J]) &&
              $[J] !==
                `
`)
          ) {
            J = v - 1;
            break;
          }
          if (J < G) {
            let N = $[J];
            if (h$($, J)) {
              (M = !0), (J = v - 1);
              break;
            }
          }
        } else if (y === ' ' || y === '\t') J++;
        else if (V9(y)) break;
        else break;
      }
      let A = void 0;
      if (J < G) {
        let y = $[J];
        var E =
          y === '(' ? a6($, J) : y === '"' || y === "'" ? c6($, J, y) : null;
        if (E === null && (y === '"' || y === "'" || y === '(')) return null;
        if (E) {
          (A = E.value), (J = E.endPos);
          var w = J;
          while (w < G && ($[w] === ' ' || $[w] === '\t')) w++;
          if (
            w < G &&
            $[w] !==
              `
` &&
            $[w] !== '\r'
          )
            return null;
          J = w;
        }
      }
      if (
        ((J = g0($, J)),
        J < G &&
          $[J] !==
            `
`)
      ) {
        var S = J;
        while (
          S < G &&
          $[S] !==
            `
`
        ) {
          if ($[S] !== ' ' && $[S] !== '\t') return null;
          S++;
        }
      }
      if (
        A === void 0 &&
        J < G &&
        $[J] !==
          `
`
      ) {
        var R = J;
        while (
          R < G &&
          $[R] !==
            `
`
        ) {
          if ($[R] !== ' ' && $[R] !== '\t') return null;
          R++;
        }
      }
      return {
        endPos:
          J < G &&
          $[J] ===
            `
`
            ? J + 1
            : J,
        target: V,
        title: A,
      };
    }
    function o6($, Z) {
      let Y = Z,
        G = r6($, Z),
        J =
          G < $.length &&
          $[G] ===
            `
` &&
          $[G + 1] ===
            `
`,
        X = G,
        K = Z;
      var Q = [];
      let V = K,
        U = 0,
        H = !1;
      while (V < X) {
        let F = I($, V);
        if (F > X) F = X;
        if (U === 0) {
          let _ = F;
          while (_ > V && ($[_ - 1] === ' ' || $[_ - 1] === '\t')) _--;
          let j = $.slice(V, _);
          Q.push(j), (H = j.length === 0);
        } else {
          let _ = 0,
            j = V;
          while (j < F && j < V + 4 && $[j] === ' ') _++, j++;
          let D = !1;
          for (let v = V; v < F; v++)
            if ($[v] !== ' ' && $[v] !== '\t' && $[v] !== '\r') {
              D = !0;
              break;
            }
          let W = !D;
          if (_ >= 4 && H) Q.push($.slice(V, F));
          else if (_ === 4 && !H) Q.push($.slice(V + 4, F));
          else Q.push($.slice(V, F));
          H = W;
        }
        if (F < X) {
          let _ = b($, F);
          if (_ === V0 || _ === d)
            Q.push(`
`),
              (V = k($, F));
          else V = X;
        } else V = X;
        U++;
      }
      let M = Q.join('');
      if (J) M = M.replace(/\n$/, '');
      var z = M.length;
      while (z > 0) {
        var q = M[z - 1];
        if (
          q ===
            `
` ||
          q === ' '
        )
          z--;
        else break;
      }
      if (z < M.length) M = M.slice(0, z);
      return {
        endPos: G,
        target: M,
        title: void 0,
      };
    }
    function B9($, Z, Y, G, J) {
      if ($[Z] !== '[') return null;
      var X = Z + 1 < $.length && $[Z + 1] === '^';
      if (J ? !X : X) return null;
      var K = Z;
      while (
        K > 0 &&
        $[K - 1] !==
          `
`
      )
        K--;
      if (t($, K, Z).spaceEquivalent >= 4 || Y.inline) return null;
      var Q = Z + (J ? 2 : 1),
        V = $.length,
        U = R6($, Q, V, ']');
      if (U === -1) return null;
      var H = $.slice(Q, U);
      if (H.length > 999) return null;
      var M = !1,
        z = !1,
        q = !1;
      for (var F = 0; F < H.length; F++) {
        var _ = H[F];
        if (_ === '\\' && F + 1 < H.length) {
          F++;
          continue;
        }
        var j = b(_);
        if (j === g1 || j === H9) z = !0;
        else if (j === d || j === V0) q = !0;
        else if (j !== C && j !== l) M = !0;
      }
      if (!M || z) return null;
      var D = U + 1;
      if (q) {
        var W = b($, Q),
          v = b($, U - 1);
        if (
          W === d ||
          W === V0 ||
          v === d ||
          v === V0 ||
          D >= V ||
          $[D] !== ':'
        )
          return null;
      } else if (D >= V || $[D] !== ':') {
        if (((D = g0($, D)), D < V && b($, D) === d)) D = g0($, D + 1);
        if (D >= V || $[D] !== ':') return null;
      }
      D++;
      var A = 0;
      while (D < V) {
        var E = b($, D);
        if (E === d) {
          if (++A > 1) break;
          D = g0($, D + 1);
        } else if (E === C || E === l) D++;
        else break;
      }
      let w = J ? o6($, D) : s6($, D, A);
      if (!w) return null;
      let S = hZ(H),
        R = Y.refs || {},
        y = J ? `^${S}` : S;
      if (!R[y])
        (R[y] = {
          target: Q$(w.target.trim()),
          title: w.title ? Q$(w.title) : void 0,
        }),
          (Y.refs = R);
      return {
        type: J ? O.footnote : O.ref,
        endPos: w.endPos,
      };
    }
    function rZ($, Z, Y) {
      var G = [],
        J = Y === null ? 0 : Y + 1;
      while (J < Z.length) {
        var X = Z[J];
        if (
          !X ||
          (X.type !== '*' && X.type !== '_' && X.type !== '~' && X.type !== '=')
        ) {
          J++;
          continue;
        }
        if (!X.canClose || !X.active) {
          J++;
          continue;
        }
        var K =
            X.type === '*' ? 0 : X.type === '_' ? 1 : X.type === '~' ? 2 : 3,
          Q = K * 6 + (X.length % 3) * 2 + (X.canOpen ? 1 : 0),
          V = G[Q] !== void 0 ? G[Q] : Y === null ? -1 : Y,
          U = -1,
          H = X.type,
          M = X.inAnchor,
          z = X.canOpen,
          q = X.length,
          F = q % 3;
        for (var _ = J - 1; _ > V; _--) {
          var j = Z[_];
          if (!j || !j.active || j.type !== H || !j.canOpen || j.inAnchor !== M)
            continue;
          var D = j.length;
          if ((!z && !j.canClose) || F === 0 || (D + q) % 3 !== 0) {
            U = _;
            break;
          }
        }
        if (U >= 0) {
          var W = Z[U],
            D = W.length,
            v = D >= 2 && q >= 2,
            A = v ? 2 : 1;
          if (A > D || A > q) {
            J++;
            continue;
          }
          var E = W.nodeIndex,
            w = X.nodeIndex,
            S = E + 1,
            R = w,
            y = $.slice(S, R);
          if (y.length > 0) {
            var N = R - S;
            $.splice(S, N);
            for (var B = 0; B < Z.length; B++)
              if (Z[B].nodeIndex > S) Z[B].nodeIndex -= N;
            if (w > S) w -= N;
          }
          var T =
              W.type === '~'
                ? 'del'
                : W.type === '='
                  ? 'mark'
                  : v
                    ? 'strong'
                    : 'em',
            f = {
              type: O.textFormatted,
              tag: T,
              children: y,
            },
            x = $[E];
          if (!x || !x.text) {
            W.active = X.active = !1;
            continue;
          }
          var P = x.text.length <= A;
          if (P) {
            $.splice(E, 1);
            for (var B = 0; B < Z.length; B++)
              if (Z[B].nodeIndex > E) Z[B].nodeIndex--;
            if (w > E) w--;
          } else x.text = x.text.slice(A);
          var g = $[w];
          if (!g || !g.text) {
            W.active = X.active = !1;
            continue;
          }
          var h = g.text.length <= A;
          if (h) {
            $.splice(w, 1);
            for (var B = 0; B < Z.length; B++)
              if (Z[B].nodeIndex > w) Z[B].nodeIndex--;
          } else g.text = g.text.slice(A);
          var L = P ? (E < w ? w - 1 : E) : E + 1;
          if (L < 0 || L > $.length) L = L < 0 ? 0 : $.length;
          $.splice(L, 0, f);
          for (var B = 0; B < Z.length; B++)
            if (Z[B].nodeIndex >= L) Z[B].nodeIndex++;
          for (var B = U + 1; B < J; B++) Z[B].active = !1;
          if (P) W.active = !1;
          else if (((W.length -= A), W.length === 0)) W.active = !1;
          if (h) (X.active = !1), J++;
          else if (((X.length -= A), X.length === 0)) (X.active = !1), J++;
        } else {
          if (((G[Q] = J - 1), !X.canOpen)) X.active = !1;
          J++;
        }
      }
      var a = 0;
      for (var _ = 0; _ < Z.length; _++) if (Z[_].active) Z[a++] = Z[_];
      Z.length = a;
    }
    function i9($, Z, Y) {
      var G = [],
        J = 0,
        X = -3,
        K = X;
      if (Z.inline) return l1($, 0, $.length, Z, Y);
      if (J === 0 && $.startsWith('---')) {
        var Q = h6($, J);
        if (Q) G.push(Q), (J = Q.endPos);
      }
      while (J < $.length) {
        while (
          J < $.length &&
          $[J] ===
            `
`
        )
          J++;
        if (J >= $.length) break;
        K = X;
        let M = $[J],
          z = l9($, J, Z, Y);
        if (z) {
          let D = z.type;
          if (D === O.codeBlock) {
            var V = M === '`' || M === '~';
            if (!V && (M === ' ' || M === '\t')) {
              let W = I($, J),
                v = t($, J, W);
              V =
                v.spaceEquivalent <= 3 &&
                J + v.charCount < $.length &&
                ($[J + v.charCount] === '`' || $[J + v.charCount] === '~');
            }
          } else if (D === O.breakThematic);
          else if (D === O.blockQuote);
          else if (D === O.heading);
          else if (D === O.orderedList || D === O.unorderedList);
          else if (D === O.table);
          else if (D === O.htmlComment);
          else if (D === O.htmlBlock);
          else if (D === O.ref);
          if (z.type === O.htmlComment) {
            G.push(z);
            let W = J;
            J = z.endPos;
            let v = I($, W);
            if (J < v) {
              let A = $.slice(J, v);
              if (A.trim().length > 0)
                G.push({
                  type: O.text,
                  text: A,
                });
              if (
                ((J = v),
                J < $.length &&
                  $[J] ===
                    `
`)
              )
                J++;
            }
            continue;
          }
          if (z.type === O.htmlBlock || z.type === O.htmlSelfClosing)
            if (
              z.type === O.htmlSelfClosing &&
              z.isClosingTag === !0 &&
              !Z.inline &&
              !Z.inHTML
            );
            else {
              G.push(z), (J = z.endPos);
              continue;
            }
          else {
            G.push(z), (J = z.endPos);
            continue;
          }
        }
        let q = K !== X ? K : J;
        if (K === X) {
          if (j1(M)) {
            let D = I($, J),
              W = t($, J, D),
              v = J + W.charCount;
            if (W.spaceEquivalent <= 3 && v < $.length && $[v] === '[') q = v;
            else q = -1;
          } else if (M === '[') q = J;
          else q = -1;
          K = q;
        }
        if (q >= 0 && q + 1 < $.length && $[q + 1] === '^') q = -1;
        if (q >= 0) {
          let D = B9($, q, Z, Y, !1);
          if (D) {
            G.push(D), (J = D.endPos);
            continue;
          }
          let W = S6($, q, J === 0);
          if (W.shouldSkip) {
            J = W.newPos;
            continue;
          }
        }
        let F = pZ($, J, Z, Y);
        if (F) {
          G.push(F), (J = F.endPos);
          continue;
        }
        let _ = J;
        if (j1($[_])) {
          let D = I($, J),
            W = t($, J, D);
          _ = J + W.charCount;
        }
        if (
          _ < $.length &&
          $[_] === '[' &&
          _ + 1 < $.length &&
          $[_ + 1] === '^'
        ) {
          let D = B9($, _, Z, Y, !0);
          if (D) {
            J = D.endPos;
            continue;
          }
        }
        let j = a$($, J, Z, Y);
        if (j) {
          G.push(j), (J = j.endPos);
          continue;
        }
        J++;
      }
      let U = Z.refs || {},
        H = {};
      for (let M in U) H[M] = U[M];
      if (e9(H))
        return [
          {
            type: O.refCollection,
            refs: H,
          },
          ...G,
        ];
      return G;
    }
    function v$($, Z, Y) {
      var G = 0,
        J = !0;
      let X = $.length;
      while (G < X) {
        var K = 0;
        while (G < X && b($, G) === d) K++, G++;
        if (G >= X) break;
        if (K > 0) J = !0;
        let v = b($, G);
        if (v === t0 || v === e1) {
          var Q = $Z(
            $,
            G,
            {
              inline: !1,
            },
            Y,
          );
          if (Q) {
            (G = Q.endPos), (J = !0);
            continue;
          }
        }
        var V = G,
          U = 0;
        while (V < X && U < 4) {
          let A = b($, V);
          if (A === C) U++, V++;
          else if (A === l) (U += 4 - (U % 4)), V++;
          else break;
        }
        if (U < 4 && V < X && b($, V) === g1 && J)
          if (V + 1 < X && b($, V + 1) === D9) {
            J = !1;
            var D = I($, G);
            G = D >= X ? X : k($, D);
            continue;
          } else {
            var H = B9(
              $,
              V,
              {
                inline: !1,
                refs: Z,
              },
              Y,
              !1,
            );
            if (H) {
              (G = H.endPos), (J = !0);
              continue;
            }
            var D = I($, G),
              M = $.indexOf(':', V + 1);
            if (M === -1 || M >= D) {
              var z = t($, G, D);
              if (
                !w1($, G, D) &&
                v !== T9 &&
                v !== C1 &&
                v !== D1 &&
                v !== d1 &&
                z.spaceEquivalent < 4
              )
                J = !1;
            }
            G = D >= X ? X : k($, D);
            continue;
          }
        if (v === C1 && J) {
          var q = G,
            F = [];
          while (q < X) {
            var D = I($, q),
              _ = q;
            while (_ < D) {
              let E = b($, _);
              if (E === C || E === l) _++;
              else break;
            }
            if (_ >= D || b($, _) !== C1) break;
            var j = _ + 1;
            if (j < D && (b($, j) === C || b($, j) === l)) j++;
            F.push($.slice(j, D)), (q = k($, D));
          }
          if (F.length) {
            v$(
              F.join(`
`),
              Z,
              Y,
            ),
              (G = q),
              (J = !0);
            continue;
          }
        }
        var D = I($, G);
        if (D >= X) G = X;
        else {
          var W = w1($, G, D),
            z = t($, G, D);
          (G = k($, D)),
            (J =
              v === T9 ||
              v === C1 ||
              v === D1 ||
              v === d1 ||
              W ||
              z.spaceEquivalent >= 4);
        }
      }
    }
    function sZ($, Z) {
      if ($.charCodeAt(0) === 65279) $ = $.slice(1);
      $ = p1($);
      let G = {
          ...{
            inline: !1,
            refs: {},
          },
        },
        J = {
          ...Z,
          slugify: Z?.slugify ? (K) => Z.slugify(K, J1) : J1,
          sanitizer: Z?.sanitizer || s1,
          tagfilter: Z?.tagfilter !== !1,
        };
      if (!G.inline) v$($, G.refs || {}, J);
      return i9($, G, J);
    }
    var t6 = /^\n+/,
      ZZ =
        typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'createContext'
        ] < 'u'
          ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'createContext'
            ](void 0)
          : void 0;
    function e6($) {
      let Z = !1;
      for (let G = 0; G < $.length; G++) {
        let J = $.charCodeAt(G);
        if (J > 127 || J === k1 || J === t0) {
          Z = !0;
          break;
        }
      }
      if (!Z) return $;
      let Y = '';
      for (let G = 0; G < $.length; G++) {
        let J = $[G];
        if (
          J === '%' &&
          G + 2 < $.length &&
          /[0-9A-Fa-f]/.test($[G + 1]) &&
          /[0-9A-Fa-f]/.test($[G + 2])
        )
          (Y += $[G] + $[G + 1] + $[G + 2]), (G += 2);
        else if (J.charCodeAt(0) === k1) Y += '%5C';
        else if (J.charCodeAt(0) === t0) Y += '%60';
        else {
          let X = J.charCodeAt(0);
          Y += X > 127 ? encodeURIComponent(J) : J;
        }
      }
      return Y;
    }
    function $5($, Z, Y, G, J, X, K, Q) {
      switch ($.type) {
        case O.blockQuote: {
          let U = {
            key: Y.key,
          };
          if ($.alert)
            (U.className = 'markdown-alert-' + X($.alert.toLowerCase(), J1)),
              $.children.unshift({
                attrs: {},
                children: [
                  {
                    type: O.text,
                    text: $.alert,
                  },
                ],
                verbatim: !0,
                type: O.htmlBlock,
                tag: 'header',
              });
          return G('blockquote', U, Z($.children, Y));
        }
        case O.breakLine:
          return G('br', {
            key: Y.key,
          });
        case O.breakThematic:
          return G('hr', {
            key: Y.key,
          });
        case O.frontmatter:
          if (Q.preserveFrontmatter)
            return G(
              'pre',
              {
                key: Y.key,
              },
              $.text,
            );
          return null;
        case O.codeBlock:
          let V = $.lang ? M9($.lang) : '';
          return G(
            'pre',
            {
              key: Y.key,
            },
            G(
              'code',
              {
                ...s9($.attrs || {}),
                className: V ? `language-${V} lang-${V}` : '',
              },
              $.text,
            ),
          );
        case O.codeInline:
          return G(
            'code',
            {
              key: Y.key,
            },
            $.text,
          );
        case O.footnoteReference:
          return G(
            'a',
            {
              key: Y.key,
              href: J($.target, 'a', 'href'),
            },
            G(
              'sup',
              {
                key: Y.key,
              },
              $.text,
            ),
          );
        case O.gfmTask:
          return G('input', {
            checked: $.completed,
            key: Y.key,
            readOnly: !0,
            type: 'checkbox',
          });
        case O.heading:
          return G(
            `h${$.level}`,
            {
              id: $.id,
              key: Y.key,
            },
            Z($.children, Y),
          );
        case O.htmlBlock: {
          let U = $;
          if (Q.tagfilter && $$(U.tag)) {
            let H;
            if ('rawText' in U && typeof U.rawText === 'string') H = U.rawText;
            else {
              let M = '';
              if (U.attrs) {
                for (let [z, q] of Object.entries(U.attrs))
                  if (q === !0) M += ` ${z}`;
                  else if (q !== void 0 && q !== null && q !== !1)
                    M += ` ${z}="${String(q)}"`;
              }
              H = `<${U.tag}${M}>`;
            }
            return G(
              'span',
              {
                key: Y.key,
              },
              H,
            );
          }
          if (U.rawText && U.verbatim) {
            let D = function (N) {
                if (
                  N.type === O.htmlSelfClosing &&
                  'isClosingTag' in N &&
                  N.isClosingTag
                )
                  return [];
                if (N.type === O.paragraph) {
                  let B = N.children;
                  return B ? B.flatMap(D) : [];
                }
                if (N.type === O.text) return N.text?.trim() ? [N] : [];
                if (N.type === O.htmlBlock && N.children)
                  return [
                    {
                      ...N,
                      children: N.children?.flatMap(D),
                    },
                  ];
                return [N];
              },
              H = U.tag.toLowerCase(),
              M = w9(H),
              z = /<[a-z][^>]{0,100}>/i.test(U.rawText),
              q = /<\/?pre\b/i.test(U.rawText);
            if (M && !z) {
              let N = U.rawText.replace(
                new RegExp('\\s*</' + H + '>\\s*$', 'i'),
                '',
              );
              if (Q.tagfilter) N = Z$(N);
              return G(
                $.tag,
                {
                  key: Y.key,
                  ...$.attrs,
                },
                N,
              );
            }
            if (q) {
              let N = Q.tagfilter ? Z$(U.rawText) : U.rawText;
              return G($.tag, {
                key: Y.key,
                ...$.attrs,
                dangerouslySetInnerHTML: {
                  __html: N,
                },
              });
            }
            let F = {
                slugify: (N) => X(N, J1),
                sanitizer: J,
                tagfilter: !0,
              },
              _ = U.rawText.replace(/>\s+</g, '><').replace(/\n+/g, ' ').trim();
            if (
              new RegExp(`^<${U.tag}(\\s[^>]*)?>(\\s*</${U.tag}>)?$`, 'i').test(
                _,
              )
            )
              return G($.tag, {
                key: Y.key,
                ...$.attrs,
              });
            let W = i9(
                _,
                {
                  inline: !1,
                  refs: K,
                  inHTML: !1,
                },
                F,
              ),
              A = '</' + U.tag.toLowerCase() + '>',
              E = new RegExp(`^<${U.tag}(\\s|>)`, 'i').test(_),
              w = _.toLowerCase().trimEnd().endsWith(A),
              S = E && w,
              R = !U.attrs || Object.keys(U.attrs).length === 0,
              y = U.children && U.children.length > 0;
            if (S && R) return Z(W.flatMap(D), Y);
            if (S && y)
              return G(
                $.tag,
                {
                  key: Y.key,
                  ...$.attrs,
                },
                Z(U.children, Y),
              );
            return G(
              $.tag,
              {
                key: Y.key,
                ...$.attrs,
              },
              Z(W.flatMap(D), Y),
            );
          }
          return G(
            $.tag,
            {
              key: Y.key,
              ...$.attrs,
            },
            $.children ? Z($.children, Y) : '',
          );
        }
        case O.htmlSelfClosing: {
          let U = $;
          if (Q.tagfilter && $$(U.tag)) {
            let H;
            if ('rawText' in U && typeof U.rawText === 'string') H = U.rawText;
            else {
              let M = '';
              if (U.attrs) {
                for (let [z, q] of Object.entries(U.attrs))
                  if (q === !0) M += ` ${z}`;
                  else if (q !== void 0 && q !== null && q !== !1)
                    M += ` ${z}="${String(q)}"`;
              }
              H = `<${U.tag}${M} />`;
            }
            return G(
              'span',
              {
                key: Y.key,
              },
              H,
            );
          }
          return G($.tag, {
            key: Y.key,
            ...$.attrs,
          });
        }
        case O.image:
          return G('img', {
            key: Y.key,
            alt: $.alt && $.alt.length > 0 ? $.alt : void 0,
            title: $.title || void 0,
            src: J($.target, 'img', 'src'),
          });
        case O.link: {
          let U = {
            key: Y.key,
          };
          if ($.target != null) U.href = e6($.target);
          if ($.title) U.title = $.title;
          return G('a', U, Z($.children, Y));
        }
        case O.table: {
          let U = $;
          return G(
            'table',
            {
              key: Y.key,
            },
            G(
              'thead',
              null,
              G(
                'tr',
                null,
                U.header.map(function (M, z) {
                  return G(
                    'th',
                    {
                      key: z,
                      style:
                        U.align[z] == null
                          ? {}
                          : {
                              textAlign: U.align[z],
                            },
                    },
                    Z(M, Y),
                  );
                }),
              ),
            ),
            G(
              'tbody',
              null,
              U.cells.map(function (M, z) {
                return G(
                  'tr',
                  {
                    key: z,
                  },
                  M.map(function (F, _) {
                    return G(
                      'td',
                      {
                        key: _,
                        style:
                          U.align[_] == null
                            ? {}
                            : {
                                textAlign: U.align[_],
                              },
                      },
                      Z(F, Y),
                    );
                  }),
                );
              }),
            ),
          );
        }
        case O.text:
          return $.text;
        case O.textFormatted:
          return G(
            $.tag,
            {
              key: Y.key,
            },
            Z($.children, Y),
          );
        case O.orderedList:
        case O.unorderedList: {
          let U = $.type === O.orderedList ? 'ol' : 'ul';
          return G(
            U,
            {
              key: Y.key,
              start: $.type === O.orderedList ? $.start : void 0,
            },
            $.items.map(function (M, z) {
              return G(
                'li',
                {
                  key: z,
                },
                Z(M, Y),
              );
            }),
          );
        }
        case O.paragraph:
          return G(
            'p',
            {
              key: Y.key,
            },
            Z($.children, Y),
          );
        case O.ref:
          return null;
        default:
          return null;
      }
    }
    var Z5 = ($, Z, Y, G, J, X) => {
        let K = (U, H, M) => {
            let z = () => $5(U, H, M, Z, Y, G, J, X);
            return $ ? $(z, U, H, M) : z();
          },
          Q = (U) => U.map((H) => ('text' in H ? H.text : '')),
          V = (U, H = {}) => {
            let M = (H.renderDepth || 0) + 1;
            if (M > 2500) return Q(U);
            H.renderDepth = M;
            let z = H.key,
              q = [],
              F = !1;
            for (let _ = 0; _ < U.length; _++) {
              H.key = _;
              let j = K(U[_], V, H),
                D = typeof j === 'string';
              if (D && F) q[q.length - 1] += j;
              else if (j !== null)
                if (Array.isArray(j))
                  for (let W = 0; W < j.length; W++) q.push(j[W]);
                else q.push(j);
              F = D;
            }
            return (H.key = z), (H.renderDepth = M - 1), q;
          };
        return V;
      },
      G5 = (...$) => $.filter(Boolean).join(' '),
      GZ = ($, Z, Y) => {
        let G = $,
          J = Z.split('.'),
          X = 0;
        while (X < J.length) {
          if (((G = G?.[J[X]]), G === void 0)) break;
          X++;
        }
        return G || Y;
      },
      Y5 = ($, Z) => {
        let Y = GZ(Z, $, void 0);
        return !Y
          ? $
          : typeof Y === 'function' || (typeof Y === 'object' && 'render' in Y)
            ? Y
            : GZ(Z, `${$}.component`, $);
      };
    function J5($, Z) {
      let Y = {
        ...(Z || {}),
      };
      Y.overrides = Y.overrides || {};
      let G = Y.slugify || J1,
        J = Y.sanitizer || s1,
        X =
          Y.createElement ||
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'createElement'
          ],
        K = (j) =>
          A$(j, {
            ...Y,
            wrapper: null,
          });
      function Q(j, D, ...W) {
        let v = GZ(Y.overrides, `${j}.props`, {}),
          A = s9(D || {});
        if (('TURBOPACK compile-time truthy', 1)) {
          for (let [E, w] of Object.entries(A))
            if (
              typeof w === 'string' &&
              w.length > 0 &&
              w[0] === '<' &&
              (gZ.test(w) || CZ.test(w) || n1(w, 0))
            )
              A[E] = K(w.trim());
        }
        return X(
          Y5(j, Y.overrides),
          {
            ...A,
            ...v,
            className: G5(A?.className, v.className) || void 0,
          },
          ...W,
        );
      }
      let V = [];
      for (let j = 0; j < $.length; j++) {
        let D = $[j];
        if (
          D.type === O.htmlBlock &&
          'rawText' in D &&
          D.rawText &&
          /<\/?pre\b/i.test(D.rawText) &&
          j + 1 < $.length &&
          $[j + 1].type === O.paragraph &&
          'removedClosingTags' in $[j + 1] &&
          $[j + 1].removedClosingTags
        ) {
          let A = function (w) {
              let S = '';
              for (let R of w) {
                let y = R.type;
                if (y === O.text) S += R.text;
                else if (y === O.htmlSelfClosing && 'rawText' in R && R.rawText)
                  S += R.rawText;
                else if (y === O.textFormatted) {
                  let N = R,
                    B = N.tag === 'em' ? '_' : N.tag === 'strong' ? '**' : '';
                  S += B + A(N.children) + B;
                } else if ('children' in R && R.children) S += A(R.children);
              }
              return S;
            },
            W = D,
            v = $[j + 1],
            E = A(v.children);
          if (v.removedClosingTags)
            E += v.removedClosingTags
              .filter(
                (w) =>
                  w.type === O.htmlSelfClosing &&
                  'rawText' in w &&
                  w.rawText &&
                  w.rawText.indexOf(`</${W.tag}>`) === -1,
              )
              .map((w) =>
                w.type === O.htmlSelfClosing && 'rawText' in w
                  ? w.rawText || ''
                  : '',
              )
              .join('');
          (W.rawText =
            (W.rawText || '') +
            `
` +
            E),
            (W.text = W.rawText),
            j++;
        }
        V.push(D);
      }
      $ = V;
      let U = {
          ...Y,
          slugify: (j) => G(j, J1),
          sanitizer: J,
          tagfilter: Y.tagfilter !== !1,
        },
        H = $[0] && $[0].type === O.refCollection ? $[0].refs : {},
        M = Z5(Y.renderRule, Q, J, G, H, Y),
        z = M($, {
          inline: Y.forceInline,
          refs: H,
        }),
        q = [];
      for (let j in H)
        if (j.charCodeAt(0) === D9)
          q.push({
            identifier: j,
            footnote: H[j].target,
          });
      if (q.length)
        z.push(
          Q(
            'footer',
            {
              key: 'footer',
            },
            q.map(function (D) {
              let W =
                  D.identifier.charCodeAt(0) === D9
                    ? D.identifier.slice(1)
                    : D.identifier,
                v = i9(
                  D.footnote,
                  {
                    inline: !0,
                    refs: H,
                  },
                  U,
                );
              return Q(
                'div',
                {
                  id: G(W, J1),
                  key: D.identifier,
                },
                W + ': ',
                M(v, {
                  inline: !0,
                  refs: H,
                }),
              );
            }),
          ),
        );
      if (Y.wrapper === null) return z;
      let F = Y.wrapper || (Y.forceInline ? 'span' : 'div'),
        _;
      if (z.length > 1 || Y.forceWrapper) _ = z;
      else if (z.length === 1) return z[0];
      else return null;
      return X(
        F,
        {
          key: 'outer',
          ...Y.wrapperProps,
        },
        _,
      );
    }
    function A$($ = '', Z = {}) {
      let Y = {
        ...(Z || {}),
      };
      Y.overrides = Y.overrides || {};
      let G = Y.slugify || J1,
        J = Y.sanitizer || s1;
      function X(V) {
        let U = Y.forceInline || (!Y.forceBlock && !T$.test(V)),
          H = {
            ...Y,
            slugify: (q) => G(q, J1),
            sanitizer: J,
            tagfilter: Y.tagfilter !== !1,
          };
        if (!U) v$(V, K, H);
        let M = V;
        if (!U) {
          let q = M.length;
          while (
            q > 0 &&
            (M[q - 1] ===
              `
` ||
              M[q - 1] === '\r')
          )
            q--;
          (M = M.slice(0, q)),
            (M = `${M.replace(t6, '')}

`);
        }
        if (Y.optimizeForStreaming) {
          let q = M.lastIndexOf('<');
          if (q !== -1) {
            if (M.slice(q).indexOf('>') === -1) M = M.slice(0, q);
          }
        }
        let z = i9(
          U ? V : M,
          {
            inline: U,
            refs: K,
          },
          H,
        );
        return J5(z, {
          ...H,
          forceInline: U,
        });
      }
      let K = {};
      return X($);
    }
    var O5 = ({ options: $, children: Z }) => {
        if (!ZZ) return Z;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'createElement'
        ](
          ZZ.Provider,
          {
            value: $,
          },
          Z,
        );
      },
      oZ = ({ children: $, options: Z, ...Y }) => {
        if (
          !(
            typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'useContext'
            ] < 'u'
          )
        ) {
          let V = {
            ...Z,
            overrides: {
              ...Z?.overrides,
            },
            wrapperProps: {
              ...Z?.wrapperProps,
              ...Y,
            },
          };
          return A$($ === null || $ === void 0 ? '' : $, V);
        }
        let J =
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'useContext'
            ](ZZ),
          X =
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'useMemo'
            ](
              () => ({
                ...J,
                ...Z,
                overrides: {
                  ...J?.overrides,
                  ...Z?.overrides,
                },
                wrapperProps: {
                  ...J?.wrapperProps,
                  ...Z?.wrapperProps,
                  ...Y,
                },
              }),
              [J, Z, Y],
            ),
          K = $ === null || $ === void 0 ? '' : $;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'useMemo'
        ](() => A$(K, X), [K, X]);
      },
      X5 = oZ;
    //# debugId=B90A6F69CB80E38E64756E2164756E21
    //# sourceMappingURL=index.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/fontawesome-svg-core/index.mjs [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'api',
      () => api,
      'config',
      () => config$1,
      'counter',
      () => counter,
      'dom',
      () => dom$1,
      'findIconDefinition',
      () => findIconDefinition$1,
      'icon',
      () => icon,
      'layer',
      () => layer,
      'library',
      () => library$1,
      'noAuto',
      () => noAuto$1,
      'parse',
      () => parse$1,
      'text',
      () => text,
      'toHtml',
      () => toHtml$1,
    ]);
    /*!
     * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     * Copyright 2025 Fonticons, Inc.
     */ function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    function _arrayWithHoles(r) {
      if (Array.isArray(r)) return r;
    }
    function _arrayWithoutHoles(r) {
      if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
    function _classCallCheck(a, n) {
      if (!(a instanceof n))
        throw new TypeError('Cannot call a class as a function');
    }
    function _defineProperties(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, _toPropertyKey(o.key), o);
      }
    }
    function _createClass(e, r, t) {
      return (
        r && _defineProperties(e.prototype, r),
        t && _defineProperties(e, t),
        Object.defineProperty(e, 'prototype', {
          writable: !1,
        }),
        e
      );
    }
    function _createForOfIteratorHelper(r, e) {
      var t =
        ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
      if (!t) {
        if (
          Array.isArray(r) ||
          (t = _unsupportedIterableToArray(r)) ||
          (e && r && 'number' == typeof r.length)
        ) {
          t && (r = t);
          var n = 0,
            F = function () {};
          return {
            s: F,
            n: function () {
              return n >= r.length
                ? {
                    done: !0,
                  }
                : {
                    done: !1,
                    value: r[n++],
                  };
            },
            e: function (r) {
              throw r;
            },
            f: F,
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      var o,
        a = !0,
        u = !1;
      return {
        s: function () {
          t = t.call(r);
        },
        n: function () {
          var r = t.next();
          return (a = r.done), r;
        },
        e: function (r) {
          (u = !0), (o = r);
        },
        f: function () {
          try {
            a || null == t.return || t.return();
          } finally {
            if (u) throw o;
          }
        },
      };
    }
    function _defineProperty(e, r, t) {
      return (
        (r = _toPropertyKey(r)) in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    function _inherits(t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0,
        },
      })),
        Object.defineProperty(t, 'prototype', {
          writable: !1,
        }),
        e && _setPrototypeOf(t, e);
    }
    function _iterableToArray(r) {
      if (
        ('undefined' != typeof Symbol && null != r[Symbol.iterator]) ||
        null != r['@@iterator']
      )
        return Array.from(r);
    }
    function _iterableToArrayLimit(r, l) {
      var t =
        null == r
          ? null
          : ('undefined' != typeof Symbol && r[Symbol.iterator]) ||
            r['@@iterator'];
      if (null != t) {
        var e,
          n,
          i,
          u,
          a = [],
          f = !0,
          o = !1;
        try {
          if (((i = (t = t.call(r)).next), 0 === l)) {
            if (Object(t) !== t) return;
            f = !1;
          } else
            for (
              ;
              !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
              f = !0
            );
        } catch (r) {
          (o = !0), (n = r);
        } finally {
          try {
            if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
              return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _nonIterableRest() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
    function _nonIterableSpread() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
    function ownKeys(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r &&
          (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? ownKeys(Object(t), !0).forEach(function (r) {
              _defineProperty(e, r, t[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r),
                );
              });
      }
      return e;
    }
    function _setPrototypeOf(t, e) {
      return (
        (_setPrototypeOf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            }),
        _setPrototypeOf(t, e)
      );
    }
    function _slicedToArray(r, e) {
      return (
        _arrayWithHoles(r) ||
        _iterableToArrayLimit(r, e) ||
        _unsupportedIterableToArray(r, e) ||
        _nonIterableRest()
      );
    }
    function _toConsumableArray(r) {
      return (
        _arrayWithoutHoles(r) ||
        _iterableToArray(r) ||
        _unsupportedIterableToArray(r) ||
        _nonIterableSpread()
      );
    }
    function _toPrimitive(t, r) {
      if ('object' != typeof t || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || 'default');
        if ('object' != typeof i) return i;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return ('string' === r ? String : Number)(t);
    }
    function _toPropertyKey(t) {
      var i = _toPrimitive(t, 'string');
      return 'symbol' == typeof i ? i : i + '';
    }
    function _typeof(o) {
      '@babel/helpers - typeof';
      return (
        (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  'function' == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? 'symbol'
                  : typeof o;
              }),
        _typeof(o)
      );
    }
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ('string' == typeof r) return _arrayLikeToArray(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return (
          'Object' === t && r.constructor && (t = r.constructor.name),
          'Map' === t || 'Set' === t
            ? Array.from(r)
            : 'Arguments' === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? _arrayLikeToArray(r, a)
              : void 0
        );
      }
    }
    function _wrapRegExp() {
      _wrapRegExp = function (e, r) {
        return new BabelRegExp(e, void 0, r);
      };
      var e = RegExp.prototype,
        r = new WeakMap();
      function BabelRegExp(e, t, p) {
        var o = RegExp(e, t);
        return (
          r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype)
        );
      }
      function buildGroups(e, t) {
        var p = r.get(t);
        return Object.keys(p).reduce(function (r, t) {
          var o = p[t];
          if ('number' == typeof o) r[t] = e[o];
          else {
            for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length; ) i++;
            r[t] = e[o[i]];
          }
          return r;
        }, Object.create(null));
      }
      return (
        _inherits(BabelRegExp, RegExp),
        (BabelRegExp.prototype.exec = function (r) {
          var t = e.exec.call(this, r);
          if (t) {
            t.groups = buildGroups(t, this);
            var p = t.indices;
            p && (p.groups = buildGroups(p, this));
          }
          return t;
        }),
        (BabelRegExp.prototype[Symbol.replace] = function (t, p) {
          if ('string' == typeof p) {
            var o = r.get(this);
            return e[Symbol.replace].call(
              this,
              t,
              p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
                if ('' === t) return e;
                var p = o[r];
                return Array.isArray(p)
                  ? '$' + p.join('$')
                  : 'number' == typeof p
                    ? '$' + p
                    : '';
              }),
            );
          }
          if ('function' == typeof p) {
            var i = this;
            return e[Symbol.replace].call(this, t, function () {
              var e = arguments;
              return (
                'object' != typeof e[e.length - 1] &&
                  (e = [].slice.call(e)).push(buildGroups(e, i)),
                p.apply(this, e)
              );
            });
          }
          return e[Symbol.replace].call(this, t, p);
        }),
        _wrapRegExp.apply(this, arguments)
      );
    }
    var noop = function noop() {};
    var _WINDOW = {};
    var _DOCUMENT = {};
    var _MUTATION_OBSERVER = null;
    var _PERFORMANCE = {
      mark: noop,
      measure: noop,
    };
    try {
      if (
        ('TURBOPACK compile-time falsy', 0) //TURBOPACK unreachable
      );
      if (typeof document !== 'undefined') _DOCUMENT = document;
      if (typeof MutationObserver !== 'undefined')
        _MUTATION_OBSERVER = MutationObserver;
      if (typeof performance !== 'undefined') _PERFORMANCE = performance;
    } catch (e) {} // eslint-disable-line no-empty
    var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
    var WINDOW = _WINDOW;
    var DOCUMENT = _DOCUMENT;
    var MUTATION_OBSERVER = _MUTATION_OBSERVER;
    var PERFORMANCE = _PERFORMANCE;
    var IS_BROWSER = !!WINDOW.document;
    var IS_DOM =
      !!DOCUMENT.documentElement &&
      !!DOCUMENT.head &&
      typeof DOCUMENT.addEventListener === 'function' &&
      typeof DOCUMENT.createElement === 'function';
    var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
    var _dt;
    var E =
        /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      _ =
        /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;
    var q = {
        classic: {
          fa: 'solid',
          fas: 'solid',
          'fa-solid': 'solid',
          far: 'regular',
          'fa-regular': 'regular',
          fal: 'light',
          'fa-light': 'light',
          fat: 'thin',
          'fa-thin': 'thin',
          fab: 'brands',
          'fa-brands': 'brands',
        },
        duotone: {
          fa: 'solid',
          fad: 'solid',
          'fa-solid': 'solid',
          'fa-duotone': 'solid',
          fadr: 'regular',
          'fa-regular': 'regular',
          fadl: 'light',
          'fa-light': 'light',
          fadt: 'thin',
          'fa-thin': 'thin',
        },
        sharp: {
          fa: 'solid',
          fass: 'solid',
          'fa-solid': 'solid',
          fasr: 'regular',
          'fa-regular': 'regular',
          fasl: 'light',
          'fa-light': 'light',
          fast: 'thin',
          'fa-thin': 'thin',
        },
        'sharp-duotone': {
          fa: 'solid',
          fasds: 'solid',
          'fa-solid': 'solid',
          fasdr: 'regular',
          'fa-regular': 'regular',
          fasdl: 'light',
          'fa-light': 'light',
          fasdt: 'thin',
          'fa-thin': 'thin',
        },
        slab: {
          'fa-regular': 'regular',
          faslr: 'regular',
        },
        'slab-press': {
          'fa-regular': 'regular',
          faslpr: 'regular',
        },
        thumbprint: {
          'fa-light': 'light',
          fatl: 'light',
        },
        whiteboard: {
          'fa-semibold': 'semibold',
          fawsb: 'semibold',
        },
        notdog: {
          'fa-solid': 'solid',
          fans: 'solid',
        },
        'notdog-duo': {
          'fa-solid': 'solid',
          fands: 'solid',
        },
        etch: {
          'fa-solid': 'solid',
          faes: 'solid',
        },
        jelly: {
          'fa-regular': 'regular',
          fajr: 'regular',
        },
        'jelly-fill': {
          'fa-regular': 'regular',
          fajfr: 'regular',
        },
        'jelly-duo': {
          'fa-regular': 'regular',
          fajdr: 'regular',
        },
        chisel: {
          'fa-regular': 'regular',
          facr: 'regular',
        },
        utility: {
          'fa-semibold': 'semibold',
          fausb: 'semibold',
        },
        'utility-duo': {
          'fa-semibold': 'semibold',
          faudsb: 'semibold',
        },
        'utility-fill': {
          'fa-semibold': 'semibold',
          faufsb: 'semibold',
        },
      },
      H = {
        GROUP: 'duotone-group',
        SWAP_OPACITY: 'swap-opacity',
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
      },
      Q = [
        'fa-classic',
        'fa-duotone',
        'fa-sharp',
        'fa-sharp-duotone',
        'fa-thumbprint',
        'fa-whiteboard',
        'fa-notdog',
        'fa-notdog-duo',
        'fa-chisel',
        'fa-etch',
        'fa-jelly',
        'fa-jelly-fill',
        'fa-jelly-duo',
        'fa-slab',
        'fa-slab-press',
        'fa-utility',
        'fa-utility-duo',
        'fa-utility-fill',
      ];
    var i = 'classic',
      t = 'duotone',
      d = 'sharp',
      l = 'sharp-duotone',
      f = 'chisel',
      n = 'etch',
      h = 'jelly',
      o = 'jelly-duo',
      u = 'jelly-fill',
      g = 'notdog',
      s = 'notdog-duo',
      y = 'slab',
      m = 'slab-press',
      e = 'thumbprint',
      p = 'utility',
      a = 'utility-duo',
      w = 'utility-fill',
      x = 'whiteboard',
      b = 'Classic',
      c = 'Duotone',
      I = 'Sharp',
      F = 'Sharp Duotone',
      v = 'Chisel',
      S = 'Etch',
      A = 'Jelly',
      P = 'Jelly Duo',
      j = 'Jelly Fill',
      B = 'Notdog',
      N = 'Notdog Duo',
      k = 'Slab',
      D = 'Slab Press',
      T = 'Thumbprint',
      C = 'Utility',
      W = 'Utility Duo',
      K = 'Utility Fill',
      R = 'Whiteboard',
      rt = [i, t, d, l, f, n, h, o, u, g, s, y, m, e, p, a, w, x],
      dt =
        ((_dt = {}),
        _defineProperty(
          _defineProperty(
            _defineProperty(
              _defineProperty(
                _defineProperty(
                  _defineProperty(
                    _defineProperty(
                      _defineProperty(
                        _defineProperty(_defineProperty(_dt, i, b), t, c),
                        d,
                        I,
                      ),
                      l,
                      F,
                    ),
                    f,
                    v,
                  ),
                  n,
                  S,
                ),
                h,
                A,
              ),
              o,
              P,
            ),
            u,
            j,
          ),
          g,
          B,
        ),
        _defineProperty(
          _defineProperty(
            _defineProperty(
              _defineProperty(
                _defineProperty(
                  _defineProperty(
                    _defineProperty(_defineProperty(_dt, s, N), y, k),
                    m,
                    D,
                  ),
                  e,
                  T,
                ),
                p,
                C,
              ),
              a,
              W,
            ),
            w,
            K,
          ),
          x,
          R,
        ));
    var gt = {
      classic: {
        900: 'fas',
        400: 'far',
        normal: 'far',
        300: 'fal',
        100: 'fat',
      },
      duotone: {
        900: 'fad',
        400: 'fadr',
        300: 'fadl',
        100: 'fadt',
      },
      sharp: {
        900: 'fass',
        400: 'fasr',
        300: 'fasl',
        100: 'fast',
      },
      'sharp-duotone': {
        900: 'fasds',
        400: 'fasdr',
        300: 'fasdl',
        100: 'fasdt',
      },
      slab: {
        400: 'faslr',
      },
      'slab-press': {
        400: 'faslpr',
      },
      whiteboard: {
        600: 'fawsb',
      },
      thumbprint: {
        300: 'fatl',
      },
      notdog: {
        900: 'fans',
      },
      'notdog-duo': {
        900: 'fands',
      },
      etch: {
        900: 'faes',
      },
      chisel: {
        400: 'facr',
      },
      jelly: {
        400: 'fajr',
      },
      'jelly-fill': {
        400: 'fajfr',
      },
      'jelly-duo': {
        400: 'fajdr',
      },
      utility: {
        600: 'fausb',
      },
      'utility-duo': {
        600: 'faudsb',
      },
      'utility-fill': {
        600: 'faufsb',
      },
    };
    var Ct = {
      'Font Awesome 7 Free': {
        900: 'fas',
        400: 'far',
      },
      'Font Awesome 7 Pro': {
        900: 'fas',
        400: 'far',
        normal: 'far',
        300: 'fal',
        100: 'fat',
      },
      'Font Awesome 7 Brands': {
        400: 'fab',
        normal: 'fab',
      },
      'Font Awesome 7 Duotone': {
        900: 'fad',
        400: 'fadr',
        normal: 'fadr',
        300: 'fadl',
        100: 'fadt',
      },
      'Font Awesome 7 Sharp': {
        900: 'fass',
        400: 'fasr',
        normal: 'fasr',
        300: 'fasl',
        100: 'fast',
      },
      'Font Awesome 7 Sharp Duotone': {
        900: 'fasds',
        400: 'fasdr',
        normal: 'fasdr',
        300: 'fasdl',
        100: 'fasdt',
      },
      'Font Awesome 7 Jelly': {
        400: 'fajr',
        normal: 'fajr',
      },
      'Font Awesome 7 Jelly Fill': {
        400: 'fajfr',
        normal: 'fajfr',
      },
      'Font Awesome 7 Jelly Duo': {
        400: 'fajdr',
        normal: 'fajdr',
      },
      'Font Awesome 7 Slab': {
        400: 'faslr',
        normal: 'faslr',
      },
      'Font Awesome 7 Slab Press': {
        400: 'faslpr',
        normal: 'faslpr',
      },
      'Font Awesome 7 Thumbprint': {
        300: 'fatl',
        normal: 'fatl',
      },
      'Font Awesome 7 Notdog': {
        900: 'fans',
        normal: 'fans',
      },
      'Font Awesome 7 Notdog Duo': {
        900: 'fands',
        normal: 'fands',
      },
      'Font Awesome 7 Etch': {
        900: 'faes',
        normal: 'faes',
      },
      'Font Awesome 7 Chisel': {
        400: 'facr',
        normal: 'facr',
      },
      'Font Awesome 7 Whiteboard': {
        600: 'fawsb',
        normal: 'fawsb',
      },
      'Font Awesome 7 Utility': {
        600: 'fausb',
        normal: 'fausb',
      },
      'Font Awesome 7 Utility Duo': {
        600: 'faudsb',
        normal: 'faudsb',
      },
      'Font Awesome 7 Utility Fill': {
        600: 'faufsb',
        normal: 'faufsb',
      },
    };
    var Ut = new Map([
        [
          'classic',
          {
            defaultShortPrefixId: 'fas',
            defaultStyleId: 'solid',
            styleIds: ['solid', 'regular', 'light', 'thin', 'brands'],
            futureStyleIds: [],
            defaultFontWeight: 900,
          },
        ],
        [
          'duotone',
          {
            defaultShortPrefixId: 'fad',
            defaultStyleId: 'solid',
            styleIds: ['solid', 'regular', 'light', 'thin'],
            futureStyleIds: [],
            defaultFontWeight: 900,
          },
        ],
        [
          'sharp',
          {
            defaultShortPrefixId: 'fass',
            defaultStyleId: 'solid',
            styleIds: ['solid', 'regular', 'light', 'thin'],
            futureStyleIds: [],
            defaultFontWeight: 900,
          },
        ],
        [
          'sharp-duotone',
          {
            defaultShortPrefixId: 'fasds',
            defaultStyleId: 'solid',
            styleIds: ['solid', 'regular', 'light', 'thin'],
            futureStyleIds: [],
            defaultFontWeight: 900,
          },
        ],
        [
          'chisel',
          {
            defaultShortPrefixId: 'facr',
            defaultStyleId: 'regular',
            styleIds: ['regular'],
            futureStyleIds: [],
            defaultFontWeight: 400,
          },
        ],
        [
          'etch',
          {
            defaultShortPrefixId: 'faes',
            defaultStyleId: 'solid',
            styleIds: ['solid'],
            futureStyleIds: [],
            defaultFontWeight: 900,
          },
        ],
        [
          'jelly',
          {
            defaultShortPrefixId: 'fajr',
            defaultStyleId: 'regular',
            styleIds: ['regular'],
            futureStyleIds: [],
            defaultFontWeight: 400,
          },
        ],
        [
          'jelly-duo',
          {
            defaultShortPrefixId: 'fajdr',
            defaultStyleId: 'regular',
            styleIds: ['regular'],
            futureStyleIds: [],
            defaultFontWeight: 400,
          },
        ],
        [
          'jelly-fill',
          {
            defaultShortPrefixId: 'fajfr',
            defaultStyleId: 'regular',
            styleIds: ['regular'],
            futureStyleIds: [],
            defaultFontWeight: 400,
          },
        ],
        [
          'notdog',
          {
            defaultShortPrefixId: 'fans',
            defaultStyleId: 'solid',
            styleIds: ['solid'],
            futureStyleIds: [],
            defaultFontWeight: 900,
          },
        ],
        [
          'notdog-duo',
          {
            defaultShortPrefixId: 'fands',
            defaultStyleId: 'solid',
            styleIds: ['solid'],
            futureStyleIds: [],
            defaultFontWeight: 900,
          },
        ],
        [
          'slab',
          {
            defaultShortPrefixId: 'faslr',
            defaultStyleId: 'regular',
            styleIds: ['regular'],
            futureStyleIds: [],
            defaultFontWeight: 400,
          },
        ],
        [
          'slab-press',
          {
            defaultShortPrefixId: 'faslpr',
            defaultStyleId: 'regular',
            styleIds: ['regular'],
            futureStyleIds: [],
            defaultFontWeight: 400,
          },
        ],
        [
          'thumbprint',
          {
            defaultShortPrefixId: 'fatl',
            defaultStyleId: 'light',
            styleIds: ['light'],
            futureStyleIds: [],
            defaultFontWeight: 300,
          },
        ],
        [
          'utility',
          {
            defaultShortPrefixId: 'fausb',
            defaultStyleId: 'semibold',
            styleIds: ['semibold'],
            futureStyleIds: [],
            defaultFontWeight: 600,
          },
        ],
        [
          'utility-duo',
          {
            defaultShortPrefixId: 'faudsb',
            defaultStyleId: 'semibold',
            styleIds: ['semibold'],
            futureStyleIds: [],
            defaultFontWeight: 600,
          },
        ],
        [
          'utility-fill',
          {
            defaultShortPrefixId: 'faufsb',
            defaultStyleId: 'semibold',
            styleIds: ['semibold'],
            futureStyleIds: [],
            defaultFontWeight: 600,
          },
        ],
        [
          'whiteboard',
          {
            defaultShortPrefixId: 'fawsb',
            defaultStyleId: 'semibold',
            styleIds: ['semibold'],
            futureStyleIds: [],
            defaultFontWeight: 600,
          },
        ],
      ]),
      _t = {
        chisel: {
          regular: 'facr',
        },
        classic: {
          brands: 'fab',
          light: 'fal',
          regular: 'far',
          solid: 'fas',
          thin: 'fat',
        },
        duotone: {
          light: 'fadl',
          regular: 'fadr',
          solid: 'fad',
          thin: 'fadt',
        },
        etch: {
          solid: 'faes',
        },
        jelly: {
          regular: 'fajr',
        },
        'jelly-duo': {
          regular: 'fajdr',
        },
        'jelly-fill': {
          regular: 'fajfr',
        },
        notdog: {
          solid: 'fans',
        },
        'notdog-duo': {
          solid: 'fands',
        },
        sharp: {
          light: 'fasl',
          regular: 'fasr',
          solid: 'fass',
          thin: 'fast',
        },
        'sharp-duotone': {
          light: 'fasdl',
          regular: 'fasdr',
          solid: 'fasds',
          thin: 'fasdt',
        },
        slab: {
          regular: 'faslr',
        },
        'slab-press': {
          regular: 'faslpr',
        },
        thumbprint: {
          light: 'fatl',
        },
        utility: {
          semibold: 'fausb',
        },
        'utility-duo': {
          semibold: 'faudsb',
        },
        'utility-fill': {
          semibold: 'faufsb',
        },
        whiteboard: {
          semibold: 'fawsb',
        },
      };
    var Yt = ['fak', 'fa-kit', 'fakd', 'fa-kit-duotone'],
      qt = {
        kit: {
          fak: 'kit',
          'fa-kit': 'kit',
        },
        'kit-duotone': {
          fakd: 'kit-duotone',
          'fa-kit-duotone': 'kit-duotone',
        },
      },
      Ht = ['kit'];
    var L = 'kit',
      r = 'kit-duotone',
      U = 'Kit',
      J = 'Kit Duotone',
      $t = _defineProperty(_defineProperty({}, L, U), r, J);
    var ol = {
      kit: {
        'fa-kit': 'fak',
      },
      'kit-duotone': {
        'fa-kit-duotone': 'fakd',
      },
    };
    var dl = {
        'Font Awesome Kit': {
          400: 'fak',
          normal: 'fak',
        },
        'Font Awesome Kit Duotone': {
          400: 'fakd',
          normal: 'fakd',
        },
      },
      fl = {
        kit: {
          fak: 'fa-kit',
        },
        'kit-duotone': {
          fakd: 'fa-kit-duotone',
        },
      };
    var ul = {
      kit: {
        kit: 'fak',
      },
      'kit-duotone': {
        'kit-duotone': 'fakd',
      },
    };
    var _ml;
    var l$1 = {
        GROUP: 'duotone-group',
        SWAP_OPACITY: 'swap-opacity',
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
      },
      f$1 = [
        'fa-classic',
        'fa-duotone',
        'fa-sharp',
        'fa-sharp-duotone',
        'fa-thumbprint',
        'fa-whiteboard',
        'fa-notdog',
        'fa-notdog-duo',
        'fa-chisel',
        'fa-etch',
        'fa-jelly',
        'fa-jelly-fill',
        'fa-jelly-duo',
        'fa-slab',
        'fa-slab-press',
        'fa-utility',
        'fa-utility-duo',
        'fa-utility-fill',
      ];
    var n$1 = 'classic',
      o$1 = 'duotone',
      u$1 = 'sharp',
      s$1 = 'sharp-duotone',
      h$1 = 'chisel',
      g$1 = 'etch',
      y$1 = 'jelly',
      e$1 = 'jelly-duo',
      m$1 = 'jelly-fill',
      p$1 = 'notdog',
      a$1 = 'notdog-duo',
      w$1 = 'slab',
      b$1 = 'slab-press',
      r$1 = 'thumbprint',
      c$1 = 'utility',
      i$1 = 'utility-duo',
      x$1 = 'utility-fill',
      I$1 = 'whiteboard',
      F$1 = 'Classic',
      v$1 = 'Duotone',
      S$1 = 'Sharp',
      A$1 = 'Sharp Duotone',
      P$1 = 'Chisel',
      j$1 = 'Etch',
      B$1 = 'Jelly',
      N$1 = 'Jelly Duo',
      k$1 = 'Jelly Fill',
      D$1 = 'Notdog',
      C$1 = 'Notdog Duo',
      T$1 = 'Slab',
      L$1 = 'Slab Press',
      W$1 = 'Thumbprint',
      R$1 = 'Utility',
      K$1 = 'Utility Duo',
      U$1 = 'Utility Fill',
      J$1 = 'Whiteboard',
      ml$1 =
        ((_ml = {}),
        _defineProperty(
          _defineProperty(
            _defineProperty(
              _defineProperty(
                _defineProperty(
                  _defineProperty(
                    _defineProperty(
                      _defineProperty(
                        _defineProperty(
                          _defineProperty(_ml, n$1, F$1),
                          o$1,
                          v$1,
                        ),
                        u$1,
                        S$1,
                      ),
                      s$1,
                      A$1,
                    ),
                    h$1,
                    P$1,
                  ),
                  g$1,
                  j$1,
                ),
                y$1,
                B$1,
              ),
              e$1,
              N$1,
            ),
            m$1,
            k$1,
          ),
          p$1,
          D$1,
        ),
        _defineProperty(
          _defineProperty(
            _defineProperty(
              _defineProperty(
                _defineProperty(
                  _defineProperty(
                    _defineProperty(_defineProperty(_ml, a$1, C$1), w$1, T$1),
                    b$1,
                    L$1,
                  ),
                  r$1,
                  W$1,
                ),
                c$1,
                R$1,
              ),
              i$1,
              K$1,
            ),
            x$1,
            U$1,
          ),
          I$1,
          J$1,
        ));
    var E$1 = 'kit',
      d$1 = 'kit-duotone',
      _$1 = 'Kit',
      M$1 = 'Kit Duotone',
      rt$1 = _defineProperty(_defineProperty({}, E$1, _$1), d$1, M$1);
    var $t$1 = {
        classic: {
          'fa-brands': 'fab',
          'fa-duotone': 'fad',
          'fa-light': 'fal',
          'fa-regular': 'far',
          'fa-solid': 'fas',
          'fa-thin': 'fat',
        },
        duotone: {
          'fa-regular': 'fadr',
          'fa-light': 'fadl',
          'fa-thin': 'fadt',
        },
        sharp: {
          'fa-solid': 'fass',
          'fa-regular': 'fasr',
          'fa-light': 'fasl',
          'fa-thin': 'fast',
        },
        'sharp-duotone': {
          'fa-solid': 'fasds',
          'fa-regular': 'fasdr',
          'fa-light': 'fasdl',
          'fa-thin': 'fasdt',
        },
        slab: {
          'fa-regular': 'faslr',
        },
        'slab-press': {
          'fa-regular': 'faslpr',
        },
        whiteboard: {
          'fa-semibold': 'fawsb',
        },
        thumbprint: {
          'fa-light': 'fatl',
        },
        notdog: {
          'fa-solid': 'fans',
        },
        'notdog-duo': {
          'fa-solid': 'fands',
        },
        etch: {
          'fa-solid': 'faes',
        },
        jelly: {
          'fa-regular': 'fajr',
        },
        'jelly-fill': {
          'fa-regular': 'fajfr',
        },
        'jelly-duo': {
          'fa-regular': 'fajdr',
        },
        chisel: {
          'fa-regular': 'facr',
        },
        utility: {
          'fa-semibold': 'fausb',
        },
        'utility-duo': {
          'fa-semibold': 'faudsb',
        },
        'utility-fill': {
          'fa-semibold': 'faufsb',
        },
      },
      z = {
        classic: ['fas', 'far', 'fal', 'fat', 'fad'],
        duotone: ['fadr', 'fadl', 'fadt'],
        sharp: ['fass', 'fasr', 'fasl', 'fast'],
        'sharp-duotone': ['fasds', 'fasdr', 'fasdl', 'fasdt'],
        slab: ['faslr'],
        'slab-press': ['faslpr'],
        whiteboard: ['fawsb'],
        thumbprint: ['fatl'],
        notdog: ['fans'],
        'notdog-duo': ['fands'],
        etch: ['faes'],
        jelly: ['fajr'],
        'jelly-fill': ['fajfr'],
        'jelly-duo': ['fajdr'],
        chisel: ['facr'],
        utility: ['fausb'],
        'utility-duo': ['faudsb'],
        'utility-fill': ['faufsb'],
      },
      Ht$1 = {
        classic: {
          fab: 'fa-brands',
          fad: 'fa-duotone',
          fal: 'fa-light',
          far: 'fa-regular',
          fas: 'fa-solid',
          fat: 'fa-thin',
        },
        duotone: {
          fadr: 'fa-regular',
          fadl: 'fa-light',
          fadt: 'fa-thin',
        },
        sharp: {
          fass: 'fa-solid',
          fasr: 'fa-regular',
          fasl: 'fa-light',
          fast: 'fa-thin',
        },
        'sharp-duotone': {
          fasds: 'fa-solid',
          fasdr: 'fa-regular',
          fasdl: 'fa-light',
          fasdt: 'fa-thin',
        },
        slab: {
          faslr: 'fa-regular',
        },
        'slab-press': {
          faslpr: 'fa-regular',
        },
        whiteboard: {
          fawsb: 'fa-semibold',
        },
        thumbprint: {
          fatl: 'fa-light',
        },
        notdog: {
          fans: 'fa-solid',
        },
        'notdog-duo': {
          fands: 'fa-solid',
        },
        etch: {
          faes: 'fa-solid',
        },
        jelly: {
          fajr: 'fa-regular',
        },
        'jelly-fill': {
          fajfr: 'fa-regular',
        },
        'jelly-duo': {
          fajdr: 'fa-regular',
        },
        chisel: {
          facr: 'fa-regular',
        },
        utility: {
          fausb: 'fa-semibold',
        },
        'utility-duo': {
          faudsb: 'fa-semibold',
        },
        'utility-fill': {
          faufsb: 'fa-semibold',
        },
      },
      Y$1 = [
        'fa-solid',
        'fa-regular',
        'fa-light',
        'fa-thin',
        'fa-duotone',
        'fa-brands',
        'fa-semibold',
      ],
      Zt$1 = [
        'fa',
        'fas',
        'far',
        'fal',
        'fat',
        'fad',
        'fadr',
        'fadl',
        'fadt',
        'fab',
        'fass',
        'fasr',
        'fasl',
        'fast',
        'fasds',
        'fasdr',
        'fasdl',
        'fasdt',
        'faslr',
        'faslpr',
        'fawsb',
        'fatl',
        'fans',
        'fands',
        'faes',
        'fajr',
        'fajfr',
        'fajdr',
        'facr',
        'fausb',
        'faudsb',
        'faufsb',
      ].concat(f$1, Y$1),
      G$1 = [
        'solid',
        'regular',
        'light',
        'thin',
        'duotone',
        'brands',
        'semibold',
      ],
      O$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      V$1 = O$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      $$1 = ['aw', 'fw', 'pull-left', 'pull-right'],
      to = []
        .concat(_toConsumableArray(Object.keys(z)), G$1, $$1, [
          '2xs',
          'xs',
          'sm',
          'lg',
          'xl',
          '2xl',
          'beat',
          'border',
          'fade',
          'beat-fade',
          'bounce',
          'flip-both',
          'flip-horizontal',
          'flip-vertical',
          'flip',
          'inverse',
          'layers',
          'layers-bottom-left',
          'layers-bottom-right',
          'layers-counter',
          'layers-text',
          'layers-top-left',
          'layers-top-right',
          'li',
          'pull-end',
          'pull-start',
          'pulse',
          'rotate-180',
          'rotate-270',
          'rotate-90',
          'rotate-by',
          'shake',
          'spin-pulse',
          'spin-reverse',
          'spin',
          'stack-1x',
          'stack-2x',
          'stack',
          'ul',
          'width-auto',
          'width-fixed',
          l$1.GROUP,
          l$1.SWAP_OPACITY,
          l$1.PRIMARY,
          l$1.SECONDARY,
        ])
        .concat(
          O$1.map(function (t) {
            return ''.concat(t, 'x');
          }),
        )
        .concat(
          V$1.map(function (t) {
            return 'w-'.concat(t);
          }),
        );
    var ro = {
      'Font Awesome 5 Free': {
        900: 'fas',
        400: 'far',
      },
      'Font Awesome 5 Pro': {
        900: 'fas',
        400: 'far',
        normal: 'far',
        300: 'fal',
      },
      'Font Awesome 5 Brands': {
        400: 'fab',
        normal: 'fab',
      },
      'Font Awesome 5 Duotone': {
        900: 'fad',
      },
    };
    var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
    var UNITS_IN_GRID = 16;
    var DEFAULT_CSS_PREFIX = 'fa';
    var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
    var DATA_FA_I2SVG = 'data-fa-i2svg';
    var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
    var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
    var DATA_PREFIX = 'data-prefix';
    var DATA_ICON = 'data-icon';
    var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
    var MUTATION_APPROACH_ASYNC = 'async';
    var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = [
      'HTML',
      'HEAD',
      'STYLE',
      'SCRIPT',
    ];
    var PSEUDO_ELEMENTS = ['::before', '::after', ':before', ':after'];
    var PRODUCTION = (function () {
      try {
        return ('TURBOPACK compile-time value', 'development') === 'production';
      } catch (e$$1) {
        return false;
      }
    })();
    function familyProxy(obj) {
      // Defaults to the classic family if family is not available
      return new Proxy(obj, {
        get: function get(target, prop) {
          return prop in target ? target[prop] : target[i];
        },
      });
    }
    var _PREFIX_TO_STYLE = _objectSpread2({}, q);
    // We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
    // duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
    // {'fa-duotone': 'duotone'}
    _PREFIX_TO_STYLE[i] = _objectSpread2(
      _objectSpread2(
        _objectSpread2(
          _objectSpread2(
            {},
            {
              'fa-duotone': 'duotone',
            },
          ),
          q[i],
        ),
        qt['kit'],
      ),
      qt['kit-duotone'],
    );
    var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
    var _STYLE_TO_PREFIX = _objectSpread2({}, _t);
    // We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
    // duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
    _STYLE_TO_PREFIX[i] = _objectSpread2(
      _objectSpread2(
        _objectSpread2(
          _objectSpread2(
            {},
            {
              duotone: 'fad',
            },
          ),
          _STYLE_TO_PREFIX[i],
        ),
        ul['kit'],
      ),
      ul['kit-duotone'],
    );
    var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
    var _PREFIX_TO_LONG_STYLE = _objectSpread2({}, Ht$1);
    _PREFIX_TO_LONG_STYLE[i] = _objectSpread2(
      _objectSpread2({}, _PREFIX_TO_LONG_STYLE[i]),
      fl['kit'],
    );
    var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
    var _LONG_STYLE_TO_PREFIX = _objectSpread2({}, $t$1);
    _LONG_STYLE_TO_PREFIX[i] = _objectSpread2(
      _objectSpread2({}, _LONG_STYLE_TO_PREFIX[i]),
      ol['kit'],
    );
    var LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
    var ICON_SELECTION_SYNTAX_PATTERN = E;
    var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
    var FONT_FAMILY_PATTERN = _;
    var _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, gt);
    var FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
    var ATTRIBUTES_WATCHED_FOR_MUTATION = [
      'class',
      'data-prefix',
      'data-icon',
      'data-fa-transform',
      'data-fa-mask',
    ];
    var DUOTONE_CLASSES = H;
    var RESERVED_CLASSES = [].concat(
      _toConsumableArray(Ht),
      _toConsumableArray(to),
    );
    var initial = WINDOW.FontAwesomeConfig || {};
    function getAttrConfig(attr) {
      var element = DOCUMENT.querySelector('script[' + attr + ']');
      if (element) {
        return element.getAttribute(attr);
      }
    }
    function coerce(val) {
      // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
      // We'll assume that this is an indication that it should be toggled to true
      if (val === '') return true;
      if (val === 'false') return false;
      if (val === 'true') return true;
      return val;
    }
    if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
      var attrs = [
        ['data-family-prefix', 'familyPrefix'],
        ['data-css-prefix', 'cssPrefix'],
        ['data-family-default', 'familyDefault'],
        ['data-style-default', 'styleDefault'],
        ['data-replacement-class', 'replacementClass'],
        ['data-auto-replace-svg', 'autoReplaceSvg'],
        ['data-auto-add-css', 'autoAddCss'],
        ['data-search-pseudo-elements', 'searchPseudoElements'],
        [
          'data-search-pseudo-elements-warnings',
          'searchPseudoElementsWarnings',
        ],
        [
          'data-search-pseudo-elements-full-scan',
          'searchPseudoElementsFullScan',
        ],
        ['data-observe-mutations', 'observeMutations'],
        ['data-mutate-approach', 'mutateApproach'],
        ['data-keep-original-source', 'keepOriginalSource'],
        ['data-measure-performance', 'measurePerformance'],
        ['data-show-missing-icons', 'showMissingIcons'],
      ];
      attrs.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];
        var val = coerce(getAttrConfig(attr));
        if (val !== undefined && val !== null) {
          initial[key] = val;
        }
      });
    }
    var _default = {
      styleDefault: 'solid',
      familyDefault: i,
      cssPrefix: DEFAULT_CSS_PREFIX,
      replacementClass: DEFAULT_REPLACEMENT_CLASS,
      autoReplaceSvg: true,
      autoAddCss: true,
      searchPseudoElements: false,
      searchPseudoElementsWarnings: true,
      searchPseudoElementsFullScan: false,
      observeMutations: true,
      mutateApproach: 'async',
      keepOriginalSource: true,
      measurePerformance: false,
      showMissingIcons: true,
    };
    // familyPrefix is deprecated but we must still support it if present
    if (initial.familyPrefix) {
      initial.cssPrefix = initial.familyPrefix;
    }
    var _config = _objectSpread2(_objectSpread2({}, _default), initial);
    if (!_config.autoReplaceSvg) _config.observeMutations = false;
    var config = {};
    Object.keys(_default).forEach(function (key) {
      Object.defineProperty(config, key, {
        enumerable: true,
        set: function set(val) {
          _config[key] = val;
          _onChangeCb.forEach(function (cb) {
            return cb(config);
          });
        },
        get: function get() {
          return _config[key];
        },
      });
    });
    // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
    Object.defineProperty(config, 'familyPrefix', {
      enumerable: true,
      set: function set(val) {
        _config.cssPrefix = val;
        _onChangeCb.forEach(function (cb) {
          return cb(config);
        });
      },
      get: function get() {
        return _config.cssPrefix;
      },
    });
    WINDOW.FontAwesomeConfig = config;
    var _onChangeCb = [];
    function onChange(cb) {
      _onChangeCb.push(cb);
      return function () {
        _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
      };
    }
    var d$2 = UNITS_IN_GRID;
    var meaninglessTransform = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: false,
      flipY: false,
    };
    function insertCss(css) {
      if (!css || !IS_DOM) {
        return;
      }
      var style = DOCUMENT.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      var headChildren = DOCUMENT.head.childNodes;
      var beforeChild = null;
      for (var i = headChildren.length - 1; i > -1; i--) {
        var child = headChildren[i];
        var tagName = (child.tagName || '').toUpperCase();
        if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
          beforeChild = child;
        }
      }
      DOCUMENT.head.insertBefore(style, beforeChild);
      return css;
    }
    var idPool =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function nextUniqueId() {
      var size = 12;
      var id = '';
      while (size-- > 0) {
        id += idPool[(Math.random() * 62) | 0];
      }
      return id;
    }
    function toArray(obj) {
      var array = [];
      for (var i = (obj || []).length >>> 0; i--; ) {
        array[i] = obj[i];
      }
      return array;
    }
    function classArray(node) {
      if (node.classList) {
        return toArray(node.classList);
      } else {
        return (node.getAttribute('class') || '')
          .split(' ')
          .filter(function (i) {
            return i;
          });
      }
    }
    function htmlEscape(str) {
      return ''
        .concat(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
    function joinAttributes(attributes) {
      return Object.keys(attributes || {})
        .reduce(function (acc, attributeName) {
          return (
            acc +
            ''
              .concat(attributeName, '="')
              .concat(htmlEscape(attributes[attributeName]), '" ')
          );
        }, '')
        .trim();
    }
    function joinStyles(styles) {
      return Object.keys(styles || {}).reduce(function (acc, styleName) {
        return (
          acc + ''.concat(styleName, ': ').concat(styles[styleName].trim(), ';')
        );
      }, '');
    }
    function transformIsMeaningful(transform) {
      return (
        transform.size !== meaninglessTransform.size ||
        transform.x !== meaninglessTransform.x ||
        transform.y !== meaninglessTransform.y ||
        transform.rotate !== meaninglessTransform.rotate ||
        transform.flipX ||
        transform.flipY
      );
    }
    function transformForSvg(_ref) {
      var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
      var outer = {
        transform: 'translate('.concat(containerWidth / 2, ' 256)'),
      };
      var innerTranslate = 'translate('
        .concat(transform.x * 32, ', ')
        .concat(transform.y * 32, ') ');
      var innerScale = 'scale('
        .concat((transform.size / 16) * (transform.flipX ? -1 : 1), ', ')
        .concat((transform.size / 16) * (transform.flipY ? -1 : 1), ') ');
      var innerRotate = 'rotate('.concat(transform.rotate, ' 0 0)');
      var inner = {
        transform: ''
          .concat(innerTranslate, ' ')
          .concat(innerScale, ' ')
          .concat(innerRotate),
      };
      var path = {
        transform: 'translate('.concat((iconWidth / 2) * -1, ' -256)'),
      };
      return {
        outer: outer,
        inner: inner,
        path: path,
      };
    }
    function transformForCss(_ref2) {
      var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered =
          _ref2$startCentered === void 0 ? false : _ref2$startCentered;
      var val = '';
      if (startCentered && IS_IE) {
        val += 'translate('
          .concat(transform.x / d$2 - width / 2, 'em, ')
          .concat(transform.y / d$2 - height / 2, 'em) ');
      } else if (startCentered) {
        val += 'translate(calc(-50% + '
          .concat(transform.x / d$2, 'em), calc(-50% + ')
          .concat(transform.y / d$2, 'em)) ');
      } else {
        val += 'translate('
          .concat(transform.x / d$2, 'em, ')
          .concat(transform.y / d$2, 'em) ');
      }
      val += 'scale('
        .concat((transform.size / d$2) * (transform.flipX ? -1 : 1), ', ')
        .concat((transform.size / d$2) * (transform.flipY ? -1 : 1), ') ');
      val += 'rotate('.concat(transform.rotate, 'deg) ');
      return val;
    }
    var baseStyles =
      ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';
    function css() {
      var dcp = DEFAULT_CSS_PREFIX;
      var drc = DEFAULT_REPLACEMENT_CLASS;
      var fp = config.cssPrefix;
      var rc = config.replacementClass;
      var s = baseStyles;
      if (fp !== dcp || rc !== drc) {
        var dPatt = new RegExp('\\.'.concat(dcp, '\\-'), 'g');
        var customPropPatt = new RegExp('\\--'.concat(dcp, '\\-'), 'g');
        var rPatt = new RegExp('\\.'.concat(drc), 'g');
        s = s
          .replace(dPatt, '.'.concat(fp, '-'))
          .replace(customPropPatt, '--'.concat(fp, '-'))
          .replace(rPatt, '.'.concat(rc));
      }
      return s;
    }
    var _cssInserted = false;
    function ensureCss() {
      if (config.autoAddCss && !_cssInserted) {
        insertCss(css());
        _cssInserted = true;
      }
    }
    var InjectCSS = {
      mixout: function mixout() {
        return {
          dom: {
            css: css,
            insertCss: ensureCss,
          },
        };
      },
      hooks: function hooks() {
        return {
          beforeDOMElementCreation: function beforeDOMElementCreation() {
            ensureCss();
          },
          beforeI2svg: function beforeI2svg() {
            ensureCss();
          },
        };
      },
    };
    var w$2 = WINDOW || {};
    if (!w$2[NAMESPACE_IDENTIFIER]) w$2[NAMESPACE_IDENTIFIER] = {};
    if (!w$2[NAMESPACE_IDENTIFIER].styles)
      w$2[NAMESPACE_IDENTIFIER].styles = {};
    if (!w$2[NAMESPACE_IDENTIFIER].hooks) w$2[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w$2[NAMESPACE_IDENTIFIER].shims) w$2[NAMESPACE_IDENTIFIER].shims = [];
    var namespace = w$2[NAMESPACE_IDENTIFIER];
    var functions = [];
    var _listener = function listener() {
      DOCUMENT.removeEventListener('DOMContentLoaded', _listener);
      loaded = 1;
      functions.map(function (fn) {
        return fn();
      });
    };
    var loaded = false;
    if (IS_DOM) {
      loaded = (
        DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
      ).test(DOCUMENT.readyState);
      if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', _listener);
    }
    function domready(fn) {
      if (!IS_DOM) return;
      loaded ? setTimeout(fn, 0) : functions.push(fn);
    }
    function toHtml(abstractNodes) {
      var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes =
          _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children =
          _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
      if (typeof abstractNodes === 'string') {
        return htmlEscape(abstractNodes);
      } else {
        return '<'
          .concat(tag, ' ')
          .concat(joinAttributes(attributes), '>')
          .concat(children.map(toHtml).join(''), '</')
          .concat(tag, '>');
      }
    }
    function iconFromMapping(mapping, prefix, iconName) {
      if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
        return {
          prefix: prefix,
          iconName: iconName,
          icon: mapping[prefix][iconName],
        };
      }
    }
    /**
     * Internal helper to bind a function known to have 4 arguments
     * to a given context.
     */ var bindInternal4 = function bindInternal4(func, thisContext) {
      return function (a, b, c, d) {
        return func.call(thisContext, a, b, c, d);
      };
    };
    /**
     * # Reduce
     *
     * A fast object `.reduce()` implementation.
     *
     * @param  {Object}   subject      The object to reduce over.
     * @param  {Function} fn           The reducer function.
     * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
     * @param  {Object}   thisContext  The context for the reducer.
     * @return {mixed}                 The final result.
     */ var reduce = function fastReduceObject(
      subject,
      fn,
      initialValue,
      thisContext,
    ) {
      var keys = Object.keys(subject),
        length = keys.length,
        iterator =
          thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;
      if (initialValue === undefined) {
        i = 1;
        result = subject[keys[0]];
      } else {
        i = 0;
        result = initialValue;
      }
      for (; i < length; i++) {
        key = keys[i];
        result = iterator(result, subject[key], key, subject);
      }
      return result;
    };
    /**
     * Return hexadecimal string for a unicode character
     * Returns `null` when more than one character (not bytes!) are passed
     * For example: 'K' → '7B'
     */ function toHex(unicode) {
      if (_toConsumableArray(unicode).length !== 1) return null;
      return unicode.codePointAt(0).toString(16);
    }
    function normalizeIcons(icons) {
      return Object.keys(icons).reduce(function (acc, iconName) {
        var icon = icons[iconName];
        var expanded = !!icon.icon;
        if (expanded) {
          acc[icon.iconName] = icon.icon;
        } else {
          acc[iconName] = icon;
        }
        return acc;
      }, {});
    }
    function defineIcons(prefix, icons) {
      var params =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
      var normalized = normalizeIcons(icons);
      if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
        namespace.hooks.addPack(prefix, normalizeIcons(icons));
      } else {
        namespace.styles[prefix] = _objectSpread2(
          _objectSpread2({}, namespace.styles[prefix] || {}),
          normalized,
        );
      }
      /**
       * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
       * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
       * for `fas` so we'll ease the upgrade process for our users by automatically defining
       * this as well.
       */ if (prefix === 'fas') {
        defineIcons('fa', icons);
      }
    }
    var MONO = 0x1;
    var DUO = 0x2;
    // New v7 compatible matchers using the style attribute to determine layer membership
    var modernMatches = [
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path opacity="([^"]*)".*d="([^"]*)".*path.*d="([^"]*)"/,
          {
            d2: 2,
            d1: 3,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(/path opacity="([^"]*)".*d="([^"]*)"/, {
          d2: 2,
        }),
      ],
      [
        MONO,
        /*#__PURE__*/ _wrapRegExp(/path fill="currentColor".*d="([^"]+)"/, {
          d1: 1,
        }),
      ],
    ];
    // Old <= v6 matchers, these should rarely get used.
    //
    // Why are there so many? Over the lifecycle of version 5 and 6 we modified the
    // syntax for our source SVG files several times. These patterns match the
    // historical record and attempt to handle backwards-compatibility in rare edge
    // cases (loading version 6 SVG source files using the version 7 SVG parser)
    var legacyMatches = [
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path class="([^"]*secondary[^"]*)".*d="([^"]+)".*path class="([^"]*primary[^"]*)".*d="([^"]+)"/,
          {
            attr2: 1,
            d2: 2,
            attr1: 3,
            d1: 4,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path class="([^"]*primary[^"]*)".*d="([^"]+)".*path class="([^"]*secondary[^"]*)".*d="([^"]+)"/,
          {
            attr1: 1,
            d1: 2,
            attr2: 3,
            d2: 4,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path class="([^"]*primary[^"]*)".*d="([^"]+)"/,
          {
            attr1: 1,
            d1: 2,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path class="([^"]*secondary[^"]*)".*d="([^"]+)"/,
          {
            attr2: 1,
            d2: 2,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path d="([^"]+)".*class="([^"]*secondary[^"]*)".*path d="([^"]+)".*class="([^"]*primary[^"]*)"/,
          {
            d2: 1,
            attr2: 2,
            d1: 3,
            attr1: 4,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path d="([^"]+)".*class="([^"]*primary[^"]*)".*path d="([^"]+)".*class="([^"]*secondary[^"]*)"/,
          {
            d1: 1,
            attr1: 2,
            d2: 3,
            attr2: 4,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path d="([^"]+)".*class="([^"]*primary[^"]*)"/,
          {
            d1: 1,
            attr1: 2,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(
          /path d="([^"]+)".*class="([^"]*secondary[^"]*)"/,
          {
            d2: 1,
            attr2: 2,
          },
        ),
      ],
      [
        DUO,
        /*#__PURE__*/ _wrapRegExp(/path d="([^"]+)".*path d="([^"]+)"/, {
          d1: 1,
          d2: 2,
        }),
      ],
      [
        MONO,
        /*#__PURE__*/ _wrapRegExp(/path d="([^"]+)"/, {
          d1: 1,
        }),
      ],
      [
        MONO,
        /*#__PURE__*/ _wrapRegExp(/path style="([^"]+)".*d="([^"]+)"/, {
          attr1: 1,
          d1: 2,
        }),
      ],
    ];
    var styles = namespace.styles,
      shims = namespace.shims;
    var FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
    var PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce(function (acc, familyId) {
      acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
      return acc;
    }, {});
    var _defaultUsablePrefix = null;
    var _byUnicode = {};
    var _byLigature = {};
    var _byOldName = {};
    var _byOldUnicode = {};
    var _byAlias = {};
    function isReserved(name) {
      return ~RESERVED_CLASSES.indexOf(name);
    }
    function getIconName(cssPrefix, cls) {
      var parts = cls.split('-');
      var prefix = parts[0];
      var iconName = parts.slice(1).join('-');
      if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
        return iconName;
      } else {
        return null;
      }
    }
    var build = function build() {
      var lookup = function lookup(reducer) {
        return reduce(
          styles,
          function (o$$1, style, prefix) {
            o$$1[prefix] = reduce(style, reducer, {});
            return o$$1;
          },
          {},
        );
      };
      _byUnicode = lookup(function (acc, icon, iconName) {
        if (icon[3]) {
          acc[icon[3]] = iconName;
        }
        if (icon[2]) {
          var aliases = icon[2].filter(function (a$$1) {
            return typeof a$$1 === 'number';
          });
          aliases.forEach(function (alias) {
            acc[alias.toString(16)] = iconName;
          });
        }
        return acc;
      });
      _byLigature = lookup(function (acc, icon, iconName) {
        acc[iconName] = iconName;
        if (icon[2]) {
          var aliases = icon[2].filter(function (a$$1) {
            return typeof a$$1 === 'string';
          });
          aliases.forEach(function (alias) {
            acc[alias] = iconName;
          });
        }
        return acc;
      });
      _byAlias = lookup(function (acc, icon, iconName) {
        var aliases = icon[2];
        acc[iconName] = iconName;
        aliases.forEach(function (alias) {
          acc[alias] = iconName;
        });
        return acc;
      });
      // If we have a Kit, we can't determine if regular is available since we
      // could be auto-fetching it. We'll have to assume that it is available.
      var hasRegular = 'far' in styles || config.autoFetchSvg;
      var shimLookups = reduce(
        shims,
        function (acc, shim) {
          var maybeNameMaybeUnicode = shim[0];
          var prefix = shim[1];
          var iconName = shim[2];
          if (prefix === 'far' && !hasRegular) {
            prefix = 'fas';
          }
          if (typeof maybeNameMaybeUnicode === 'string') {
            acc.names[maybeNameMaybeUnicode] = {
              prefix: prefix,
              iconName: iconName,
            };
          }
          if (typeof maybeNameMaybeUnicode === 'number') {
            acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
              prefix: prefix,
              iconName: iconName,
            };
          }
          return acc;
        },
        {
          names: {},
          unicodes: {},
        },
      );
      _byOldName = shimLookups.names;
      _byOldUnicode = shimLookups.unicodes;
      _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
        family: config.familyDefault,
      });
    };
    onChange(function (c$$1) {
      _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
        family: config.familyDefault,
      });
    });
    build();
    function byUnicode(prefix, unicode) {
      return (_byUnicode[prefix] || {})[unicode];
    }
    function byLigature(prefix, ligature) {
      return (_byLigature[prefix] || {})[ligature];
    }
    function byAlias(prefix, alias) {
      return (_byAlias[prefix] || {})[alias];
    }
    function byOldName(name) {
      return (
        _byOldName[name] || {
          prefix: null,
          iconName: null,
        }
      );
    }
    function byOldUnicode(unicode) {
      var oldUnicode = _byOldUnicode[unicode];
      var newUnicode = byUnicode('fas', unicode);
      return (
        oldUnicode ||
        (newUnicode
          ? {
              prefix: 'fas',
              iconName: newUnicode,
            }
          : null) || {
          prefix: null,
          iconName: null,
        }
      );
    }
    function getDefaultUsablePrefix() {
      return _defaultUsablePrefix;
    }
    var emptyCanonicalIcon = function emptyCanonicalIcon() {
      return {
        prefix: null,
        iconName: null,
        rest: [],
      };
    };
    function getFamilyId(values) {
      var family = i;
      var famProps = FAMILY_NAMES.reduce(function (acc, familyId) {
        acc[familyId] = ''.concat(config.cssPrefix, '-').concat(familyId);
        return acc;
      }, {});
      rt.forEach(function (familyId) {
        if (
          values.includes(famProps[familyId]) ||
          values.some(function (v$$1) {
            return PREFIXES_FOR_FAMILY[familyId].includes(v$$1);
          })
        ) {
          family = familyId;
        }
      });
      return family;
    }
    function getCanonicalPrefix(styleOrPrefix) {
      var params =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$family = params.family,
        family = _params$family === void 0 ? i : _params$family;
      var style = PREFIX_TO_STYLE[family][styleOrPrefix];
      // handles the exception of passing in only a family of 'duotone' with no style
      if (family === t && !styleOrPrefix) {
        return 'fad';
      }
      var prefix =
        STYLE_TO_PREFIX[family][styleOrPrefix] ||
        STYLE_TO_PREFIX[family][style];
      var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
      var result = prefix || defined || null;
      return result;
    }
    function moveNonFaClassesToRest(classNames) {
      var rest = [];
      var iconName = null;
      classNames.forEach(function (cls) {
        var result = getIconName(config.cssPrefix, cls);
        if (result) {
          iconName = result;
        } else if (cls) {
          rest.push(cls);
        }
      });
      return {
        iconName: iconName,
        rest: rest,
      };
    }
    function sortedUniqueValues(arr) {
      return arr.sort().filter(function (value, index, arr) {
        return arr.indexOf(value) === index;
      });
    }
    var _faCombinedClasses = Zt$1.concat(Yt);
    function getCanonicalIcon(values) {
      var params =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$skipLookups = params.skipLookups,
        skipLookups =
          _params$skipLookups === void 0 ? false : _params$skipLookups;
      var givenPrefix = null;
      var faStyleOrFamilyClasses = sortedUniqueValues(
        values.filter(function (cls) {
          return _faCombinedClasses.includes(cls);
        }),
      );
      var nonStyleOrFamilyClasses = sortedUniqueValues(
        values.filter(function (cls) {
          return !_faCombinedClasses.includes(cls);
        }),
      );
      var faStyles = faStyleOrFamilyClasses.filter(function (cls) {
        givenPrefix = cls;
        return !Q.includes(cls);
      });
      var _faStyles = _slicedToArray(faStyles, 1),
        _faStyles$ = _faStyles[0],
        styleFromValues = _faStyles$ === void 0 ? null : _faStyles$;
      var family = getFamilyId(faStyleOrFamilyClasses);
      var canonical = _objectSpread2(
        _objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)),
        {},
        {
          prefix: getCanonicalPrefix(styleFromValues, {
            family: family,
          }),
        },
      );
      return _objectSpread2(
        _objectSpread2(
          _objectSpread2({}, canonical),
          getDefaultCanonicalPrefix({
            values: values,
            family: family,
            styles: styles,
            config: config,
            canonical: canonical,
            givenPrefix: givenPrefix,
          }),
        ),
        applyShimAndAlias(skipLookups, givenPrefix, canonical),
      );
    }
    function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
      var prefix = canonical.prefix,
        iconName = canonical.iconName;
      if (skipLookups || !prefix || !iconName) {
        return {
          prefix: prefix,
          iconName: iconName,
        };
      }
      var shim = givenPrefix === 'fa' ? byOldName(iconName) : {};
      var aliasIconName = byAlias(prefix, iconName);
      iconName = shim.iconName || aliasIconName || iconName;
      prefix = shim.prefix || prefix;
      if (
        prefix === 'far' &&
        !styles['far'] &&
        styles['fas'] &&
        !config.autoFetchSvg
      ) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        prefix = 'fas';
      }
      return {
        prefix: prefix,
        iconName: iconName,
      };
    }
    var newCanonicalFamilies = rt.filter(function (familyId) {
      return familyId !== i || familyId !== t;
    });
    var newCanonicalStyles = Object.keys(Ht$1)
      .filter(function (key) {
        return key !== i;
      })
      .map(function (key) {
        return Object.keys(Ht$1[key]);
      })
      .flat();
    function getDefaultCanonicalPrefix(prefixOptions) {
      var values = prefixOptions.values,
        family = prefixOptions.family,
        canonical = prefixOptions.canonical,
        _prefixOptions$givenP = prefixOptions.givenPrefix,
        givenPrefix =
          _prefixOptions$givenP === void 0 ? '' : _prefixOptions$givenP,
        _prefixOptions$styles = prefixOptions.styles,
        styles = _prefixOptions$styles === void 0 ? {} : _prefixOptions$styles,
        _prefixOptions$config = prefixOptions.config,
        config$$1 =
          _prefixOptions$config === void 0 ? {} : _prefixOptions$config;
      var isDuotoneFamily = family === t;
      var valuesHasDuotone =
        values.includes('fa-duotone') || values.includes('fad');
      var defaultFamilyIsDuotone = config$$1.familyDefault === 'duotone';
      var canonicalPrefixIsDuotone =
        canonical.prefix === 'fad' || canonical.prefix === 'fa-duotone';
      if (
        !isDuotoneFamily &&
        (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)
      ) {
        canonical.prefix = 'fad';
      }
      if (values.includes('fa-brands') || values.includes('fab')) {
        canonical.prefix = 'fab';
      }
      if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
        var validPrefix = Object.keys(styles).find(function (key) {
          return newCanonicalStyles.includes(key);
        });
        if (validPrefix || config$$1.autoFetchSvg) {
          var defaultPrefix = Ut.get(family).defaultShortPrefixId;
          canonical.prefix = defaultPrefix;
          canonical.iconName =
            byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
        }
      }
      if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
        // The fa prefix is not canonical. So if it has made it through until this point
        // we will shift it to the correct prefix.
        canonical.prefix = getDefaultUsablePrefix() || 'fas';
      }
      return canonical;
    }
    var Library = /*#__PURE__*/ (function () {
      function Library() {
        _classCallCheck(this, Library);
        this.definitions = {};
      }
      return _createClass(Library, [
        {
          key: 'add',
          value: function add() {
            var _this = this;
            for (
              var _len = arguments.length,
                definitions = new Array(_len),
                _key = 0;
              _key < _len;
              _key++
            ) {
              definitions[_key] = arguments[_key];
            }
            var additions = definitions.reduce(this._pullDefinitions, {});
            Object.keys(additions).forEach(function (key) {
              _this.definitions[key] = _objectSpread2(
                _objectSpread2({}, _this.definitions[key] || {}),
                additions[key],
              );
              defineIcons(key, additions[key]);
              // To keep support for older Classic styles, also add longer prefixes
              var longPrefix = PREFIX_TO_LONG_STYLE[i][key];
              if (longPrefix) defineIcons(longPrefix, additions[key]);
              build();
            });
          },
        },
        {
          key: 'reset',
          value: function reset() {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function _pullDefinitions(additions, definition) {
            var normalized =
              definition.prefix && definition.iconName && definition.icon
                ? {
                    0: definition,
                  }
                : definition;
            Object.keys(normalized).map(function (key) {
              var _normalized$key = normalized[key],
                prefix = _normalized$key.prefix,
                iconName = _normalized$key.iconName,
                icon = _normalized$key.icon;
              var aliases = icon[2];
              if (!additions[prefix]) additions[prefix] = {};
              if (aliases.length > 0) {
                aliases.forEach(function (alias) {
                  if (typeof alias === 'string') {
                    additions[prefix][alias] = icon;
                  }
                });
              }
              additions[prefix][iconName] = icon;
            });
            return additions;
          },
        },
      ]);
    })();
    var _plugins = [];
    var _hooks = {};
    var providers = {};
    var defaultProviderKeys = Object.keys(providers);
    function registerPlugins(nextPlugins, _ref) {
      var obj = _ref.mixoutsTo;
      _plugins = nextPlugins;
      _hooks = {};
      Object.keys(providers).forEach(function (k) {
        if (defaultProviderKeys.indexOf(k) === -1) {
          delete providers[k];
        }
      });
      _plugins.forEach(function (plugin) {
        var mixout = plugin.mixout ? plugin.mixout() : {};
        Object.keys(mixout).forEach(function (tk) {
          if (typeof mixout[tk] === 'function') {
            obj[tk] = mixout[tk];
          }
          if (_typeof(mixout[tk]) === 'object') {
            Object.keys(mixout[tk]).forEach(function (sk) {
              if (!obj[tk]) {
                obj[tk] = {};
              }
              obj[tk][sk] = mixout[tk][sk];
            });
          }
        });
        if (plugin.hooks) {
          var hooks = plugin.hooks();
          Object.keys(hooks).forEach(function (hook) {
            if (!_hooks[hook]) {
              _hooks[hook] = [];
            }
            _hooks[hook].push(hooks[hook]);
          });
        }
        if (plugin.provides) {
          plugin.provides(providers);
        }
      });
      return obj;
    }
    function chainHooks(hook, accumulator) {
      for (
        var _len = arguments.length,
          args = new Array(_len > 2 ? _len - 2 : 0),
          _key = 2;
        _key < _len;
        _key++
      ) {
        args[_key - 2] = arguments[_key];
      }
      var hookFns = _hooks[hook] || [];
      hookFns.forEach(function (hookFn) {
        accumulator = hookFn.apply(null, [accumulator].concat(args));
      });
      return accumulator;
    }
    function callHooks(hook) {
      for (
        var _len2 = arguments.length,
          args = new Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2 - 1] = arguments[_key2];
      }
      var hookFns = _hooks[hook] || [];
      hookFns.forEach(function (hookFn) {
        hookFn.apply(null, args);
      });
      return undefined;
    }
    function callProvided() {
      var hook = arguments[0];
      var args = Array.prototype.slice.call(arguments, 1);
      return providers[hook] ? providers[hook].apply(null, args) : undefined;
    }
    function findIconDefinition(iconLookup) {
      if (iconLookup.prefix === 'fa') {
        iconLookup.prefix = 'fas';
      }
      var iconName = iconLookup.iconName;
      var prefix = iconLookup.prefix || getDefaultUsablePrefix();
      if (!iconName) return;
      iconName = byAlias(prefix, iconName) || iconName;
      return (
        iconFromMapping(library.definitions, prefix, iconName) ||
        iconFromMapping(namespace.styles, prefix, iconName)
      );
    }
    var library = new Library();
    var noAuto = function noAuto() {
      config.autoReplaceSvg = false;
      config.observeMutations = false;
      callHooks('noAuto');
    };
    var dom = {
      i2svg: function i2svg() {
        var params =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        if (IS_DOM) {
          callHooks('beforeI2svg', params);
          callProvided('pseudoElements2svg', params);
          return callProvided('i2svg', params);
        } else {
          return Promise.reject(
            new Error('Operation requires a DOM of some kind.'),
          );
        }
      },
      watch: function watch() {
        var params =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
        if (config.autoReplaceSvg === false) {
          config.autoReplaceSvg = true;
        }
        config.observeMutations = true;
        domready(function () {
          autoReplace({
            autoReplaceSvgRoot: autoReplaceSvgRoot,
          });
          callHooks('watch', params);
        });
      },
    };
    var parse = {
      icon: function icon(_icon) {
        if (_icon === null) {
          return null;
        }
        if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
          return {
            prefix: _icon.prefix,
            iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName,
          };
        }
        if (Array.isArray(_icon) && _icon.length === 2) {
          var iconName =
            _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
          var prefix = getCanonicalPrefix(_icon[0]);
          return {
            prefix: prefix,
            iconName: byAlias(prefix, iconName) || iconName,
          };
        }
        if (
          typeof _icon === 'string' &&
          (_icon.indexOf(''.concat(config.cssPrefix, '-')) > -1 ||
            _icon.match(ICON_SELECTION_SYNTAX_PATTERN))
        ) {
          var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
            skipLookups: true,
          });
          return {
            prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
            iconName:
              byAlias(canonicalIcon.prefix, canonicalIcon.iconName) ||
              canonicalIcon.iconName,
          };
        }
        if (typeof _icon === 'string') {
          var _prefix = getDefaultUsablePrefix();
          return {
            prefix: _prefix,
            iconName: byAlias(_prefix, _icon) || _icon,
          };
        }
      },
    };
    var api = {
      noAuto: noAuto,
      config: config,
      dom: dom,
      parse: parse,
      library: library,
      findIconDefinition: findIconDefinition,
      toHtml: toHtml,
    };
    var autoReplace = function autoReplace() {
      var params =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot =
          _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
      if (
        (Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) &&
        IS_DOM &&
        config.autoReplaceSvg
      )
        api.dom.i2svg({
          node: autoReplaceSvgRoot,
        });
    };
    function domVariants(val, abstractCreator) {
      Object.defineProperty(val, 'abstract', {
        get: abstractCreator,
      });
      Object.defineProperty(val, 'html', {
        get: function get() {
          return val.abstract.map(function (a) {
            return toHtml(a);
          });
        },
      });
      Object.defineProperty(val, 'node', {
        get: function get() {
          if (!IS_DOM) return undefined;
          var container = DOCUMENT.createElement('div');
          container.innerHTML = val.html;
          return container.children;
        },
      });
      return val;
    }
    function asIcon(_ref) {
      var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;
      if (transformIsMeaningful(transform) && main.found && !mask.found) {
        var width = main.width,
          height = main.height;
        var offset = {
          x: width / height / 2,
          y: 0.5,
        };
        attributes['style'] = joinStyles(
          _objectSpread2(
            _objectSpread2({}, styles),
            {},
            {
              'transform-origin': ''
                .concat(offset.x + transform.x / 16, 'em ')
                .concat(offset.y + transform.y / 16, 'em'),
            },
          ),
        );
      }
      return [
        {
          tag: 'svg',
          attributes: attributes,
          children: children,
        },
      ];
    }
    function asSymbol(_ref) {
      var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
      var id =
        symbol === true
          ? ''
              .concat(prefix, '-')
              .concat(config.cssPrefix, '-')
              .concat(iconName)
          : symbol;
      return [
        {
          tag: 'svg',
          attributes: {
            style: 'display: none;',
          },
          children: [
            {
              tag: 'symbol',
              attributes: _objectSpread2(
                _objectSpread2({}, attributes),
                {},
                {
                  id: id,
                },
              ),
              children: children,
            },
          ],
        },
      ];
    }
    // If any of these attributes are present, don't assume the icon is decorative
    function isLabeled(attributes) {
      var labels = ['aria-label', 'aria-labelledby', 'title', 'role'];
      return labels.some(function (label) {
        return label in attributes;
      });
    }
    function makeInlineSvgAbstract(params) {
      var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        maskId = params.maskId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;
      var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;
      var attrClass = [
        config.replacementClass,
        iconName ? ''.concat(config.cssPrefix, '-').concat(iconName) : '',
      ]
        .filter(function (c) {
          return extra.classes.indexOf(c) === -1;
        })
        .filter(function (c) {
          return c !== '' || !!c;
        })
        .concat(extra.classes)
        .join(' ');
      var content = {
        children: [],
        attributes: _objectSpread2(
          _objectSpread2({}, extra.attributes),
          {},
          {
            'data-prefix': prefix,
            'data-icon': iconName,
            class: attrClass,
            role: extra.attributes.role || 'img',
            viewBox: '0 0 '.concat(width, ' ').concat(height),
          },
        ),
      };
      if (!isLabeled(extra.attributes) && !extra.attributes['aria-hidden']) {
        content.attributes['aria-hidden'] = 'true';
      }
      if (watchable) {
        content.attributes[DATA_FA_I2SVG] = '';
      }
      var args = _objectSpread2(
        _objectSpread2({}, content),
        {},
        {
          prefix: prefix,
          iconName: iconName,
          main: main,
          mask: mask,
          maskId: maskId,
          transform: transform,
          symbol: symbol,
          styles: _objectSpread2({}, extra.styles),
        },
      );
      var _ref2 =
          mask.found && main.found
            ? callProvided('generateAbstractMask', args) || {
                children: [],
                attributes: {},
              }
            : callProvided('generateAbstractIcon', args) || {
                children: [],
                attributes: {},
              },
        children = _ref2.children,
        attributes = _ref2.attributes;
      args.children = children;
      args.attributes = attributes;
      if (symbol) {
        return asSymbol(args);
      } else {
        return asIcon(args);
      }
    }
    function makeLayersTextAbstract(params) {
      var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
      var attributes = _objectSpread2(
        _objectSpread2({}, extra.attributes),
        {},
        {
          class: extra.classes.join(' '),
        },
      );
      if (watchable) {
        attributes[DATA_FA_I2SVG] = '';
      }
      var styles = _objectSpread2({}, extra.styles);
      if (transformIsMeaningful(transform)) {
        styles['transform'] = transformForCss({
          transform: transform,
          startCentered: true,
          width: width,
          height: height,
        });
        styles['-webkit-transform'] = styles['transform'];
      }
      var styleString = joinStyles(styles);
      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }
      var val = [];
      val.push({
        tag: 'span',
        attributes: attributes,
        children: [content],
      });
      return val;
    }
    function makeLayersCounterAbstract(params) {
      var content = params.content,
        extra = params.extra;
      var attributes = _objectSpread2(
        _objectSpread2({}, extra.attributes),
        {},
        {
          class: extra.classes.join(' '),
        },
      );
      var styleString = joinStyles(extra.styles);
      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }
      var val = [];
      val.push({
        tag: 'span',
        attributes: attributes,
        children: [content],
      });
      return val;
    }
    var styles$1 = namespace.styles;
    function asFoundIcon(icon) {
      var width = icon[0];
      var height = icon[1];
      var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];
      var element = null;
      if (Array.isArray(vectorData)) {
        element = {
          tag: 'g',
          attributes: {
            class: ''
              .concat(config.cssPrefix, '-')
              .concat(DUOTONE_CLASSES.GROUP),
          },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''
                  .concat(config.cssPrefix, '-')
                  .concat(DUOTONE_CLASSES.SECONDARY),
                fill: 'currentColor',
                d: vectorData[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''
                  .concat(config.cssPrefix, '-')
                  .concat(DUOTONE_CLASSES.PRIMARY),
                fill: 'currentColor',
                d: vectorData[1],
              },
            },
          ],
        };
      } else {
        element = {
          tag: 'path',
          attributes: {
            fill: 'currentColor',
            d: vectorData,
          },
        };
      }
      return {
        found: true,
        width: width,
        height: height,
        icon: element,
      };
    }
    var missingIconResolutionMixin = {
      found: false,
      width: 512,
      height: 512,
    };
    function maybeNotifyMissing(iconName, prefix) {
      if (!PRODUCTION && !config.showMissingIcons && iconName) {
        console.error(
          'Icon with name "'
            .concat(iconName, '" and prefix "')
            .concat(prefix, '" is missing.'),
        );
      }
    }
    function findIcon(iconName, prefix) {
      var givenPrefix = prefix;
      if (prefix === 'fa' && config.styleDefault !== null) {
        prefix = getDefaultUsablePrefix();
      }
      return new Promise(function (resolve, reject) {
        if (givenPrefix === 'fa') {
          var shim = byOldName(iconName) || {};
          iconName = shim.iconName || iconName;
          prefix = shim.prefix || prefix;
        }
        if (
          iconName &&
          prefix &&
          styles$1[prefix] &&
          styles$1[prefix][iconName]
        ) {
          var icon = styles$1[prefix][iconName];
          return resolve(asFoundIcon(icon));
        }
        maybeNotifyMissing(iconName, prefix);
        resolve(
          _objectSpread2(
            _objectSpread2({}, missingIconResolutionMixin),
            {},
            {
              icon:
                config.showMissingIcons && iconName
                  ? callProvided('missingIconAbstract') || {}
                  : {},
            },
          ),
        );
      });
    }
    var noop$1 = function noop() {};
    var p$2 =
      config.measurePerformance &&
      PERFORMANCE &&
      PERFORMANCE.mark &&
      PERFORMANCE.measure
        ? PERFORMANCE
        : {
            mark: noop$1,
            measure: noop$1,
          };
    var preamble = 'FA "7.1.0"';
    var begin = function begin(name) {
      p$2.mark(''.concat(preamble, ' ').concat(name, ' begins'));
      return function () {
        return end(name);
      };
    };
    var end = function end(name) {
      p$2.mark(''.concat(preamble, ' ').concat(name, ' ends'));
      p$2.measure(
        ''.concat(preamble, ' ').concat(name),
        ''.concat(preamble, ' ').concat(name, ' begins'),
        ''.concat(preamble, ' ').concat(name, ' ends'),
      );
    };
    var perf = {
      begin: begin,
      end: end,
    };
    var noop$2 = function noop() {};
    function isWatched(node) {
      var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
      return typeof i2svg === 'string';
    }
    function hasPrefixAndIcon(node) {
      var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
      var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
      return prefix && icon;
    }
    function hasBeenReplaced(node) {
      return (
        node &&
        node.classList &&
        node.classList.contains &&
        node.classList.contains(config.replacementClass)
      );
    }
    function getMutator() {
      if (config.autoReplaceSvg === true) {
        return mutators.replace;
      }
      var mutator = mutators[config.autoReplaceSvg];
      return mutator || mutators.replace;
    }
    function createElementNS(tag) {
      return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
    }
    function createElement(tag) {
      return DOCUMENT.createElement(tag);
    }
    function convertSVG(abstractObj) {
      var params =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$ceFn = params.ceFn,
        ceFn =
          _params$ceFn === void 0
            ? abstractObj.tag === 'svg'
              ? createElementNS
              : createElement
            : _params$ceFn;
      if (typeof abstractObj === 'string') {
        return DOCUMENT.createTextNode(abstractObj);
      }
      var tag = ceFn(abstractObj.tag);
      Object.keys(abstractObj.attributes || []).forEach(function (key) {
        tag.setAttribute(key, abstractObj.attributes[key]);
      });
      var children = abstractObj.children || [];
      children.forEach(function (child) {
        tag.appendChild(
          convertSVG(child, {
            ceFn: ceFn,
          }),
        );
      });
      return tag;
    }
    function nodeAsComment(node) {
      var comment = ' '.concat(node.outerHTML, ' ');
      /* BEGIN.ATTRIBUTION */ comment = ''.concat(
        comment,
        'Font Awesome fontawesome.com ',
      );
      /* END.ATTRIBUTION */ return comment;
    }
    var mutators = {
      replace: function replace(mutation) {
        var node = mutation[0];
        if (node.parentNode) {
          mutation[1].forEach(function (abstract) {
            node.parentNode.insertBefore(convertSVG(abstract), node);
          });
          if (
            node.getAttribute(DATA_FA_I2SVG) === null &&
            config.keepOriginalSource
          ) {
            var comment = DOCUMENT.createComment(nodeAsComment(node));
            node.parentNode.replaceChild(comment, node);
          } else {
            node.remove();
          }
        }
      },
      nest: function nest(mutation) {
        var node = mutation[0];
        var abstract = mutation[1];
        // If we already have a replaced node we do not want to continue nesting within it.
        // Short-circuit to the standard replacement
        if (~classArray(node).indexOf(config.replacementClass)) {
          return mutators.replace(mutation);
        }
        var forSvg = new RegExp(''.concat(config.cssPrefix, '-.*'));
        delete abstract[0].attributes.id;
        if (abstract[0].attributes.class) {
          var splitClasses = abstract[0].attributes.class.split(' ').reduce(
            function (acc, cls) {
              if (cls === config.replacementClass || cls.match(forSvg)) {
                acc.toSvg.push(cls);
              } else {
                acc.toNode.push(cls);
              }
              return acc;
            },
            {
              toNode: [],
              toSvg: [],
            },
          );
          abstract[0].attributes.class = splitClasses.toSvg.join(' ');
          if (splitClasses.toNode.length === 0) {
            node.removeAttribute('class');
          } else {
            node.setAttribute('class', splitClasses.toNode.join(' '));
          }
        }
        var newInnerHTML = abstract
          .map(function (a) {
            return toHtml(a);
          })
          .join('\n');
        node.setAttribute(DATA_FA_I2SVG, '');
        node.innerHTML = newInnerHTML;
      },
    };
    function performOperationSync(op) {
      op();
    }
    function perform(mutations, callback) {
      var callbackFunction = typeof callback === 'function' ? callback : noop$2;
      if (mutations.length === 0) {
        callbackFunction();
      } else {
        var frame = performOperationSync;
        if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
          frame = WINDOW.requestAnimationFrame || performOperationSync;
        }
        frame(function () {
          var mutator = getMutator();
          var mark = perf.begin('mutate');
          mutations.map(mutator);
          mark();
          callbackFunction();
        });
      }
    }
    var disabled = false;
    function disableObservation() {
      disabled = true;
    }
    function enableObservation() {
      disabled = false;
    }
    var mo = null;
    function observe(options) {
      if (!MUTATION_OBSERVER) {
        return;
      }
      if (!config.observeMutations) {
        return;
      }
      var _options$treeCallback = options.treeCallback,
        treeCallback =
          _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
        _options$nodeCallback = options.nodeCallback,
        nodeCallback =
          _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
        _options$pseudoElemen = options.pseudoElementsCallback,
        pseudoElementsCallback =
          _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot =
          _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
      mo = new MUTATION_OBSERVER(function (objects) {
        if (disabled) return;
        var defaultPrefix = getDefaultUsablePrefix();
        toArray(objects).forEach(function (mutationRecord) {
          if (
            mutationRecord.type === 'childList' &&
            mutationRecord.addedNodes.length > 0 &&
            !isWatched(mutationRecord.addedNodes[0])
          ) {
            if (config.searchPseudoElements) {
              pseudoElementsCallback(mutationRecord.target);
            }
            treeCallback(mutationRecord.target);
          }
          if (
            mutationRecord.type === 'attributes' &&
            mutationRecord.target.parentNode &&
            config.searchPseudoElements
          ) {
            pseudoElementsCallback([mutationRecord.target], true);
          }
          if (
            mutationRecord.type === 'attributes' &&
            isWatched(mutationRecord.target) &&
            ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(
              mutationRecord.attributeName,
            )
          ) {
            if (
              mutationRecord.attributeName === 'class' &&
              hasPrefixAndIcon(mutationRecord.target)
            ) {
              var _getCanonicalIcon = getCanonicalIcon(
                  classArray(mutationRecord.target),
                ),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;
              mutationRecord.target.setAttribute(
                DATA_PREFIX,
                prefix || defaultPrefix,
              );
              if (iconName)
                mutationRecord.target.setAttribute(DATA_ICON, iconName);
            } else if (hasBeenReplaced(mutationRecord.target)) {
              nodeCallback(mutationRecord.target);
            }
          }
        });
      });
      if (!IS_DOM) return;
      mo.observe(observeMutationsRoot, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
      });
    }
    function disconnect() {
      if (!mo) return;
      mo.disconnect();
    }
    function styleParser(node) {
      var style = node.getAttribute('style');
      var val = [];
      if (style) {
        val = style.split(';').reduce(function (acc, style) {
          var styles = style.split(':');
          var prop = styles[0];
          var value = styles.slice(1);
          if (prop && value.length > 0) {
            acc[prop] = value.join(':').trim();
          }
          return acc;
        }, {});
      }
      return val;
    }
    function classParser(node) {
      var existingPrefix = node.getAttribute('data-prefix');
      var existingIconName = node.getAttribute('data-icon');
      var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
      var val = getCanonicalIcon(classArray(node));
      if (!val.prefix) {
        val.prefix = getDefaultUsablePrefix();
      }
      if (existingPrefix && existingIconName) {
        val.prefix = existingPrefix;
        val.iconName = existingIconName;
      }
      if (val.iconName && val.prefix) {
        return val;
      }
      if (val.prefix && innerText.length > 0) {
        val.iconName =
          byLigature(val.prefix, node.innerText) ||
          byUnicode(val.prefix, toHex(node.innerText));
      }
      if (
        !val.iconName &&
        config.autoFetchSvg &&
        node.firstChild &&
        node.firstChild.nodeType === Node.TEXT_NODE
      ) {
        val.iconName = node.firstChild.data;
      }
      return val;
    }
    function attributesParser(node) {
      var extraAttributes = toArray(node.attributes).reduce(function (
        acc,
        attr,
      ) {
        if (acc.name !== 'class' && acc.name !== 'style') {
          acc[attr.name] = attr.value;
        }
        return acc;
      }, {});
      return extraAttributes;
    }
    function blankMeta() {
      return {
        iconName: null,
        prefix: null,
        transform: meaninglessTransform,
        symbol: false,
        mask: {
          iconName: null,
          prefix: null,
          rest: [],
        },
        maskId: null,
        extra: {
          classes: [],
          styles: {},
          attributes: {},
        },
      };
    }
    function parseMeta(node) {
      var parser =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : {
              styleParser: true,
            };
      var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;
      var extraAttributes = attributesParser(node);
      var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
      var extraStyles = parser.styleParser ? styleParser(node) : [];
      return _objectSpread2(
        {
          iconName: iconName,
          prefix: prefix,
          transform: meaninglessTransform,
          mask: {
            iconName: null,
            prefix: null,
            rest: [],
          },
          maskId: null,
          symbol: false,
          extra: {
            classes: extraClasses,
            styles: extraStyles,
            attributes: extraAttributes,
          },
        },
        pluginMeta,
      );
    }
    var styles$2 = namespace.styles;
    function generateMutation(node) {
      var nodeMeta =
        config.autoReplaceSvg === 'nest'
          ? parseMeta(node, {
              styleParser: false,
            })
          : parseMeta(node);
      if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
        return callProvided('generateLayersText', node, nodeMeta);
      } else {
        return callProvided('generateSvgReplacementMutation', node, nodeMeta);
      }
    }
    function getKnownPrefixes() {
      return [].concat(_toConsumableArray(Yt), _toConsumableArray(Zt$1));
    }
    function onTree(root) {
      var callback =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : null;
      if (!IS_DOM) return Promise.resolve();
      var htmlClassList = DOCUMENT.documentElement.classList;
      var hclAdd = function hclAdd(suffix) {
        return htmlClassList.add(
          ''.concat(HTML_CLASS_I2SVG_BASE_CLASS, '-').concat(suffix),
        );
      };
      var hclRemove = function hclRemove(suffix) {
        return htmlClassList.remove(
          ''.concat(HTML_CLASS_I2SVG_BASE_CLASS, '-').concat(suffix),
        );
      };
      var prefixes = config.autoFetchSvg
        ? getKnownPrefixes()
        : Q.concat(Object.keys(styles$2));
      if (!prefixes.includes('fa')) {
        prefixes.push('fa');
      }
      var prefixesDomQuery = [
        '.'.concat(LAYERS_TEXT_CLASSNAME, ':not([').concat(DATA_FA_I2SVG, '])'),
      ]
        .concat(
          prefixes.map(function (p$$1) {
            return '.'.concat(p$$1, ':not([').concat(DATA_FA_I2SVG, '])');
          }),
        )
        .join(', ');
      if (prefixesDomQuery.length === 0) {
        return Promise.resolve();
      }
      var candidates = [];
      try {
        candidates = toArray(root.querySelectorAll(prefixesDomQuery));
      } catch (e$$1) {
        // noop
      }
      if (candidates.length > 0) {
        hclAdd('pending');
        hclRemove('complete');
      } else {
        return Promise.resolve();
      }
      var mark = perf.begin('onTree');
      var mutations = candidates.reduce(function (acc, node) {
        try {
          var mutation = generateMutation(node);
          if (mutation) {
            acc.push(mutation);
          }
        } catch (e$$1) {
          if (!PRODUCTION) {
            if (e$$1.name === 'MissingIcon') {
              console.error(e$$1);
            }
          }
        }
        return acc;
      }, []);
      return new Promise(function (resolve, reject) {
        Promise.all(mutations)
          .then(function (resolvedMutations) {
            perform(resolvedMutations, function () {
              hclAdd('active');
              hclAdd('complete');
              hclRemove('pending');
              if (typeof callback === 'function') callback();
              mark();
              resolve();
            });
          })
          .catch(function (e$$1) {
            mark();
            reject(e$$1);
          });
      });
    }
    function onNode(node) {
      var callback =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : null;
      generateMutation(node).then(function (mutation) {
        if (mutation) {
          perform([mutation], callback);
        }
      });
    }
    function resolveIcons(next) {
      return function (maybeIconDefinition) {
        var params =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        var iconDefinition = (maybeIconDefinition || {}).icon
          ? maybeIconDefinition
          : findIconDefinition(maybeIconDefinition || {});
        var mask = params.mask;
        if (mask) {
          mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
        }
        return next(
          iconDefinition,
          _objectSpread2(
            _objectSpread2({}, params),
            {},
            {
              mask: mask,
            },
          ),
        );
      };
    }
    var render = function render(iconDefinition) {
      var params =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$transform = params.transform,
        transform =
          _params$transform === void 0
            ? meaninglessTransform
            : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
      if (!iconDefinition) return;
      var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
      return domVariants(
        _objectSpread2(
          {
            type: 'icon',
          },
          iconDefinition,
        ),
        function () {
          callHooks('beforeDOMElementCreation', {
            iconDefinition: iconDefinition,
            params: params,
          });
          return makeInlineSvgAbstract({
            icons: {
              main: asFoundIcon(icon),
              mask: mask
                ? asFoundIcon(mask.icon)
                : {
                    found: false,
                    width: null,
                    height: null,
                    icon: {},
                  },
            },
            prefix: prefix,
            iconName: iconName,
            transform: _objectSpread2(
              _objectSpread2({}, meaninglessTransform),
              transform,
            ),
            symbol: symbol,
            maskId: maskId,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: classes,
            },
          });
        },
      );
    };
    var ReplaceElements = {
      mixout: function mixout() {
        return {
          icon: resolveIcons(render),
        };
      },
      hooks: function hooks() {
        return {
          mutationObserverCallbacks: function mutationObserverCallbacks(
            accumulator,
          ) {
            accumulator.treeCallback = onTree;
            accumulator.nodeCallback = onNode;
            return accumulator;
          },
        };
      },
      provides: function provides(providers$$1) {
        providers$$1.i2svg = function (params) {
          var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback =
              _params$callback === void 0 ? function () {} : _params$callback;
          return onTree(node, callback);
        };
        providers$$1.generateSvgReplacementMutation = function (
          node,
          nodeMeta,
        ) {
          var iconName = nodeMeta.iconName,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            maskId = nodeMeta.maskId,
            extra = nodeMeta.extra;
          return new Promise(function (resolve, reject) {
            Promise.all([
              findIcon(iconName, prefix),
              mask.iconName
                ? findIcon(mask.iconName, mask.prefix)
                : Promise.resolve({
                    found: false,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  main = _ref2[0],
                  mask = _ref2[1];
                resolve([
                  node,
                  makeInlineSvgAbstract({
                    icons: {
                      main: main,
                      mask: mask,
                    },
                    prefix: prefix,
                    iconName: iconName,
                    transform: transform,
                    symbol: symbol,
                    maskId: maskId,
                    extra: extra,
                    watchable: true,
                  }),
                ]);
              })
              .catch(reject);
          });
        };
        providers$$1.generateAbstractIcon = function (_ref3) {
          var children = _ref3.children,
            attributes = _ref3.attributes,
            main = _ref3.main,
            transform = _ref3.transform,
            styles = _ref3.styles;
          var styleString = joinStyles(styles);
          if (styleString.length > 0) {
            attributes['style'] = styleString;
          }
          var nextChild;
          if (transformIsMeaningful(transform)) {
            nextChild = callProvided('generateAbstractTransformGrouping', {
              main: main,
              transform: transform,
              containerWidth: main.width,
              iconWidth: main.width,
            });
          }
          children.push(nextChild || main.icon);
          return {
            children: children,
            attributes: attributes,
          };
        };
      },
    };
    var Layers = {
      mixout: function mixout() {
        return {
          layer: function layer(assembler) {
            var params =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes;
            return domVariants(
              {
                type: 'layer',
              },
              function () {
                callHooks('beforeDOMElementCreation', {
                  assembler: assembler,
                  params: params,
                });
                var children = [];
                assembler(function (args) {
                  Array.isArray(args)
                    ? args.map(function (a) {
                        children = children.concat(a.abstract);
                      })
                    : (children = children.concat(args.abstract));
                });
                return [
                  {
                    tag: 'span',
                    attributes: {
                      class: [''.concat(config.cssPrefix, '-layers')]
                        .concat(_toConsumableArray(classes))
                        .join(' '),
                    },
                    children: children,
                  },
                ];
              },
            );
          },
        };
      },
    };
    var LayersCounter = {
      mixout: function mixout() {
        return {
          counter: function counter(content) {
            var params =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes =
                _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
            return domVariants(
              {
                type: 'counter',
                content: content,
              },
              function () {
                callHooks('beforeDOMElementCreation', {
                  content: content,
                  params: params,
                });
                return makeLayersCounterAbstract({
                  content: content.toString(),
                  title: title,
                  extra: {
                    attributes: attributes,
                    styles: styles,
                    classes: [
                      ''.concat(config.cssPrefix, '-layers-counter'),
                    ].concat(_toConsumableArray(classes)),
                  },
                });
              },
            );
          },
        };
      },
    };
    var LayersText = {
      mixout: function mixout() {
        return {
          text: function text(content) {
            var params =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var _params$transform = params.transform,
              transform =
                _params$transform === void 0
                  ? meaninglessTransform
                  : _params$transform,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes =
                _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
            return domVariants(
              {
                type: 'text',
                content: content,
              },
              function () {
                callHooks('beforeDOMElementCreation', {
                  content: content,
                  params: params,
                });
                return makeLayersTextAbstract({
                  content: content,
                  transform: _objectSpread2(
                    _objectSpread2({}, meaninglessTransform),
                    transform,
                  ),
                  extra: {
                    attributes: attributes,
                    styles: styles,
                    classes: [
                      ''.concat(config.cssPrefix, '-layers-text'),
                    ].concat(_toConsumableArray(classes)),
                  },
                });
              },
            );
          },
        };
      },
      provides: function provides(providers$$1) {
        providers$$1.generateLayersText = function (node, nodeMeta) {
          var transform = nodeMeta.transform,
            extra = nodeMeta.extra;
          var width = null;
          var height = null;
          if (IS_IE) {
            var computedFontSize = parseInt(
              getComputedStyle(node).fontSize,
              10,
            );
            var boundingClientRect = node.getBoundingClientRect();
            width = boundingClientRect.width / computedFontSize;
            height = boundingClientRect.height / computedFontSize;
          }
          return Promise.resolve([
            node,
            makeLayersTextAbstract({
              content: node.innerHTML,
              width: width,
              height: height,
              transform: transform,
              extra: extra,
              watchable: true,
            }),
          ]);
        };
      },
    };
    var CLEAN_CONTENT_PATTERN = new RegExp('"', 'ug');
    var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
    var _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(
      _objectSpread2(
        _objectSpread2(
          _objectSpread2(
            {},
            {
              FontAwesome: {
                normal: 'fas',
                400: 'fas',
              },
            },
          ),
          Ct,
        ),
        ro,
      ),
      dl,
    );
    var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(
      _FONT_FAMILY_WEIGHT_TO_PREFIX,
    ).reduce(function (acc, key) {
      acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
      return acc;
    }, {});
    var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(
      FONT_FAMILY_WEIGHT_TO_PREFIX,
    ).reduce(function (acc, fontFamily) {
      var weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
      acc[fontFamily] =
        weights[900] || _toConsumableArray(Object.entries(weights))[0][1];
      return acc;
    }, {});
    // Return hex value of *first* character in `content`
    function hexValueFromContent(content) {
      var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
      return toHex(_toConsumableArray(cleaned)[0] || '');
    }
    // Check if it's a secondary Duotone layer, by checking if:
    // - Unicode value in `content` is repeated
    // - Unicode value in `content` is above 0x10000
    // - The "ss01" font feature is enabled on the `content`
    function isSecondaryLayer(styles) {
      var hasStylisticSet = styles
        .getPropertyValue('font-feature-settings')
        .includes('ss01');
      var content = styles.getPropertyValue('content');
      var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
      var codePoint = cleaned.codePointAt(0);
      var isPrependTen =
        codePoint >= SECONDARY_UNICODE_RANGE[0] &&
        codePoint <= SECONDARY_UNICODE_RANGE[1];
      var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
      return isPrependTen || isDoubled || hasStylisticSet;
    }
    function getPrefix(fontFamily, fontWeight) {
      var fontFamilySanitized = fontFamily
        .replace(/^['"]|['"]$/g, '')
        .toLowerCase();
      var fontWeightInteger = parseInt(fontWeight);
      var fontWeightSanitized = isNaN(fontWeightInteger)
        ? 'normal'
        : fontWeightInteger;
      return (
        (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[
          fontWeightSanitized
        ] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized]
      );
    }
    function replaceForPosition(node, position) {
      var pendingAttribute = ''
        .concat(DATA_FA_PSEUDO_ELEMENT_PENDING)
        .concat(position.replace(':', '-'));
      return new Promise(function (resolve, reject) {
        if (node.getAttribute(pendingAttribute) !== null) {
          // This node is already being processed
          return resolve();
        }
        var children = toArray(node.children);
        var alreadyProcessedPseudoElement = children.filter(function (c$$1) {
          return c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
        })[0];
        var styles = WINDOW.getComputedStyle(node, position);
        var fontFamily = styles.getPropertyValue('font-family');
        var fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
        var fontWeight = styles.getPropertyValue('font-weight');
        var content = styles.getPropertyValue('content');
        if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
          // If we've already processed it but the current computed style does not result in a font-family,
          // that probably means that a class name that was previously present to make the icon has been
          // removed. So we now should delete the icon.
          node.removeChild(alreadyProcessedPseudoElement);
          return resolve();
        } else if (fontFamilyMatch && content !== 'none' && content !== '') {
          var _content = styles.getPropertyValue('content');
          var prefix = getPrefix(fontFamily, fontWeight);
          var hexValue = hexValueFromContent(_content);
          var isV4 = fontFamilyMatch[0].startsWith('FontAwesome');
          var isSecondary = isSecondaryLayer(styles);
          var iconName = byUnicode(prefix, hexValue);
          var iconIdentifier = iconName;
          if (isV4) {
            var iconName4 = byOldUnicode(hexValue);
            if (iconName4.iconName && iconName4.prefix) {
              iconName = iconName4.iconName;
              prefix = iconName4.prefix;
            }
          }
          // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
          // already done so with the same prefix and iconName
          if (
            iconName &&
            !isSecondary &&
            (!alreadyProcessedPseudoElement ||
              alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !==
                prefix ||
              alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !==
                iconIdentifier)
          ) {
            node.setAttribute(pendingAttribute, iconIdentifier);
            if (alreadyProcessedPseudoElement) {
              // Delete the old one, since we're replacing it with a new one
              node.removeChild(alreadyProcessedPseudoElement);
            }
            var meta = blankMeta();
            var extra = meta.extra;
            extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
            findIcon(iconName, prefix)
              .then(function (main) {
                var abstract = makeInlineSvgAbstract(
                  _objectSpread2(
                    _objectSpread2({}, meta),
                    {},
                    {
                      icons: {
                        main: main,
                        mask: emptyCanonicalIcon(),
                      },
                      prefix: prefix,
                      iconName: iconIdentifier,
                      extra: extra,
                      watchable: true,
                    },
                  ),
                );
                var element = DOCUMENT.createElementNS(
                  'http://www.w3.org/2000/svg',
                  'svg',
                );
                if (position === '::before') {
                  node.insertBefore(element, node.firstChild);
                } else {
                  node.appendChild(element);
                }
                element.outerHTML = abstract
                  .map(function (a$$1) {
                    return toHtml(a$$1);
                  })
                  .join('\n');
                node.removeAttribute(pendingAttribute);
                resolve();
              })
              .catch(reject);
          } else {
            resolve();
          }
        } else {
          resolve();
        }
      });
    }
    function replace(node) {
      return Promise.all([
        replaceForPosition(node, '::before'),
        replaceForPosition(node, '::after'),
      ]);
    }
    function processable(node) {
      return (
        node.parentNode !== document.head &&
        !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(
          node.tagName.toUpperCase(),
        ) &&
        !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) &&
        (!node.parentNode || node.parentNode.tagName !== 'svg')
      );
    }
    var hasPseudoElement = function hasPseudoElement(selector) {
      return (
        !!selector &&
        PSEUDO_ELEMENTS.some(function (pseudoSelector) {
          return selector.includes(pseudoSelector);
        })
      );
    };
    // Return selectors from all available stylesheets that have
    // pseudo-elements defined.
    var parseCSSRuleForPseudos = function parseCSSRuleForPseudos(selectorText) {
      if (!selectorText) return [];
      var selectorSet = new Set();
      var selectors = selectorText.split(/,(?![^()]*\))/).map(function (s$$1) {
        return s$$1.trim();
      });
      selectors = selectors.flatMap(function (selector) {
        return selector.includes('(')
          ? selector
          : selector.split(',').map(function (s$$1) {
              return s$$1.trim();
            });
      });
      var _iterator = _createForOfIteratorHelper(selectors),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var selector = _step.value;
          if (hasPseudoElement(selector)) {
            // Remove pseudo-elements from the selector
            var selectorWithoutPseudo = PSEUDO_ELEMENTS.reduce(function (
              acc,
              pseudoSelector,
            ) {
              return acc.replace(pseudoSelector, '');
            }, selector);
            if (selectorWithoutPseudo !== '' && selectorWithoutPseudo !== '*') {
              selectorSet.add(selectorWithoutPseudo);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return selectorSet;
    };
    function searchPseudoElements(root) {
      var useAsNodeList =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : false;
      if (!IS_DOM) return;
      var nodeList;
      if (useAsNodeList) {
        nodeList = root;
      } else if (config.searchPseudoElementsFullScan) {
        nodeList = root.querySelectorAll('*');
      } else {
        // Get elements that have pseudo elements defined in the CSS
        var selectorSet = new Set();
        var _iterator2 = _createForOfIteratorHelper(document.styleSheets),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var stylesheet = _step2.value;
            try {
              var _iterator3 = _createForOfIteratorHelper(stylesheet.cssRules),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  var rule = _step3.value;
                  var parsedSelectors = parseCSSRuleForPseudos(
                    rule.selectorText,
                  );
                  var _iterator4 = _createForOfIteratorHelper(parsedSelectors),
                    _step4;
                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                      var selector = _step4.value;
                      selectorSet.add(selector);
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            } catch (e$$1) {
              if (config.searchPseudoElementsWarnings) {
                console.warn(
                  'Font Awesome: cannot parse stylesheet: '
                    .concat(stylesheet.href, ' (')
                    .concat(
                      e$$1.message,
                      ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.',
                    ),
                );
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        if (!selectorSet.size) return;
        var cleanSelectors = Array.from(selectorSet).join(', ');
        try {
          nodeList = root.querySelectorAll(cleanSelectors);
        } catch (_unused) {} // eslint-disable-line no-empty
      }
      return new Promise(function (resolve, reject) {
        var operations = toArray(nodeList).filter(processable).map(replace);
        var end = perf.begin('searchPseudoElements');
        disableObservation();
        Promise.all(operations)
          .then(function () {
            end();
            enableObservation();
            resolve();
          })
          .catch(function () {
            end();
            enableObservation();
            reject();
          });
      });
    }
    var PseudoElements = {
      hooks: function hooks() {
        return {
          mutationObserverCallbacks: function mutationObserverCallbacks(
            accumulator,
          ) {
            accumulator.pseudoElementsCallback = searchPseudoElements;
            return accumulator;
          },
        };
      },
      provides: function provides(providers) {
        providers.pseudoElements2svg = function (params) {
          var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node;
          if (config.searchPseudoElements) {
            searchPseudoElements(node);
          }
        };
      },
    };
    var _unwatched = false;
    var MutationObserver$1 = {
      mixout: function mixout() {
        return {
          dom: {
            unwatch: function unwatch() {
              disableObservation();
              _unwatched = true;
            },
          },
        };
      },
      hooks: function hooks() {
        return {
          bootstrap: function bootstrap() {
            observe(chainHooks('mutationObserverCallbacks', {}));
          },
          noAuto: function noAuto() {
            disconnect();
          },
          watch: function watch(params) {
            var observeMutationsRoot = params.observeMutationsRoot;
            if (_unwatched) {
              enableObservation();
            } else {
              observe(
                chainHooks('mutationObserverCallbacks', {
                  observeMutationsRoot: observeMutationsRoot,
                }),
              );
            }
          },
        };
      },
    };
    var parseTransformString = function parseTransformString(transformString) {
      var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0,
      };
      return transformString
        .toLowerCase()
        .split(' ')
        .reduce(function (acc, n) {
          var parts = n.toLowerCase().split('-');
          var first = parts[0];
          var rest = parts.slice(1).join('-');
          if (first && rest === 'h') {
            acc.flipX = true;
            return acc;
          }
          if (first && rest === 'v') {
            acc.flipY = true;
            return acc;
          }
          rest = parseFloat(rest);
          if (isNaN(rest)) {
            return acc;
          }
          switch (first) {
            case 'grow':
              acc.size = acc.size + rest;
              break;
            case 'shrink':
              acc.size = acc.size - rest;
              break;
            case 'left':
              acc.x = acc.x - rest;
              break;
            case 'right':
              acc.x = acc.x + rest;
              break;
            case 'up':
              acc.y = acc.y - rest;
              break;
            case 'down':
              acc.y = acc.y + rest;
              break;
            case 'rotate':
              acc.rotate = acc.rotate + rest;
              break;
          }
          return acc;
        }, transform);
    };
    var PowerTransforms = {
      mixout: function mixout() {
        return {
          parse: {
            transform: function transform(transformString) {
              return parseTransformString(transformString);
            },
          },
        };
      },
      hooks: function hooks() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
            var transformString = node.getAttribute('data-fa-transform');
            if (transformString) {
              accumulator.transform = parseTransformString(transformString);
            }
            return accumulator;
          },
        };
      },
      provides: function provides(providers) {
        providers.generateAbstractTransformGrouping = function (_ref) {
          var main = _ref.main,
            transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;
          var outer = {
            transform: 'translate('.concat(containerWidth / 2, ' 256)'),
          };
          var innerTranslate = 'translate('
            .concat(transform.x * 32, ', ')
            .concat(transform.y * 32, ') ');
          var innerScale = 'scale('
            .concat((transform.size / 16) * (transform.flipX ? -1 : 1), ', ')
            .concat((transform.size / 16) * (transform.flipY ? -1 : 1), ') ');
          var innerRotate = 'rotate('.concat(transform.rotate, ' 0 0)');
          var inner = {
            transform: ''
              .concat(innerTranslate, ' ')
              .concat(innerScale, ' ')
              .concat(innerRotate),
          };
          var path = {
            transform: 'translate('.concat((iconWidth / 2) * -1, ' -256)'),
          };
          var operations = {
            outer: outer,
            inner: inner,
            path: path,
          };
          return {
            tag: 'g',
            attributes: _objectSpread2({}, operations.outer),
            children: [
              {
                tag: 'g',
                attributes: _objectSpread2({}, operations.inner),
                children: [
                  {
                    tag: main.icon.tag,
                    children: main.icon.children,
                    attributes: _objectSpread2(
                      _objectSpread2({}, main.icon.attributes),
                      operations.path,
                    ),
                  },
                ],
              },
            ],
          };
        };
      },
    };
    var ALL_SPACE = {
      x: 0,
      y: 0,
      width: '100%',
      height: '100%',
    };
    function fillBlack(abstract) {
      var force =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : true;
      if (abstract.attributes && (abstract.attributes.fill || force)) {
        abstract.attributes.fill = 'black';
      }
      return abstract;
    }
    function deGroup(abstract) {
      if (abstract.tag === 'g') {
        return abstract.children;
      } else {
        return [abstract];
      }
    }
    var Masks = {
      hooks: function hooks() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
            var maskData = node.getAttribute('data-fa-mask');
            var mask = !maskData
              ? emptyCanonicalIcon()
              : getCanonicalIcon(
                  maskData.split(' ').map(function (i) {
                    return i.trim();
                  }),
                );
            if (!mask.prefix) {
              mask.prefix = getDefaultUsablePrefix();
            }
            accumulator.mask = mask;
            accumulator.maskId = node.getAttribute('data-fa-mask-id');
            return accumulator;
          },
        };
      },
      provides: function provides(providers) {
        providers.generateAbstractMask = function (_ref) {
          var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            explicitMaskId = _ref.maskId,
            transform = _ref.transform;
          var mainWidth = main.width,
            mainPath = main.icon;
          var maskWidth = mask.width,
            maskPath = mask.icon;
          var trans = transformForSvg({
            transform: transform,
            containerWidth: maskWidth,
            iconWidth: mainWidth,
          });
          var maskRect = {
            tag: 'rect',
            attributes: _objectSpread2(
              _objectSpread2({}, ALL_SPACE),
              {},
              {
                fill: 'white',
              },
            ),
          };
          var maskInnerGroupChildrenMixin = mainPath.children
            ? {
                children: mainPath.children.map(fillBlack),
              }
            : {};
          var maskInnerGroup = {
            tag: 'g',
            attributes: _objectSpread2({}, trans.inner),
            children: [
              fillBlack(
                _objectSpread2(
                  {
                    tag: mainPath.tag,
                    attributes: _objectSpread2(
                      _objectSpread2({}, mainPath.attributes),
                      trans.path,
                    ),
                  },
                  maskInnerGroupChildrenMixin,
                ),
              ),
            ],
          };
          var maskOuterGroup = {
            tag: 'g',
            attributes: _objectSpread2({}, trans.outer),
            children: [maskInnerGroup],
          };
          var maskId = 'mask-'.concat(explicitMaskId || nextUniqueId());
          var clipId = 'clip-'.concat(explicitMaskId || nextUniqueId());
          var maskTag = {
            tag: 'mask',
            attributes: _objectSpread2(
              _objectSpread2({}, ALL_SPACE),
              {},
              {
                id: maskId,
                maskUnits: 'userSpaceOnUse',
                maskContentUnits: 'userSpaceOnUse',
              },
            ),
            children: [maskRect, maskOuterGroup],
          };
          var defs = {
            tag: 'defs',
            children: [
              {
                tag: 'clipPath',
                attributes: {
                  id: clipId,
                },
                children: deGroup(maskPath),
              },
              maskTag,
            ],
          };
          children.push(defs, {
            tag: 'rect',
            attributes: _objectSpread2(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(clipId, ')'),
                mask: 'url(#'.concat(maskId, ')'),
              },
              ALL_SPACE,
            ),
          });
          return {
            children: children,
            attributes: attributes,
          };
        };
      },
    };
    var MissingIconIndicator = {
      provides: function provides(providers) {
        var reduceMotion = false;
        if (WINDOW.matchMedia) {
          reduceMotion = WINDOW.matchMedia(
            '(prefers-reduced-motion: reduce)',
          ).matches;
        }
        providers.missingIconAbstract = function () {
          var gChildren = [];
          var FILL = {
            fill: 'currentColor',
          };
          var ANIMATION_BASE = {
            attributeType: 'XML',
            repeatCount: 'indefinite',
            dur: '2s',
          };
          // Ring
          gChildren.push({
            tag: 'path',
            attributes: _objectSpread2(
              _objectSpread2({}, FILL),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              },
            ),
          });
          var OPACITY_ANIMATE = _objectSpread2(
            _objectSpread2({}, ANIMATION_BASE),
            {},
            {
              attributeName: 'opacity',
            },
          );
          var dot = {
            tag: 'circle',
            attributes: _objectSpread2(
              _objectSpread2({}, FILL),
              {},
              {
                cx: '256',
                cy: '364',
                r: '28',
              },
            ),
            children: [],
          };
          if (!reduceMotion) {
            dot.children.push(
              {
                tag: 'animate',
                attributes: _objectSpread2(
                  _objectSpread2({}, ANIMATION_BASE),
                  {},
                  {
                    attributeName: 'r',
                    values: '28;14;28;28;14;28;',
                  },
                ),
              },
              {
                tag: 'animate',
                attributes: _objectSpread2(
                  _objectSpread2({}, OPACITY_ANIMATE),
                  {},
                  {
                    values: '1;0;1;1;0;1;',
                  },
                ),
              },
            );
          }
          gChildren.push(dot);
          gChildren.push({
            tag: 'path',
            attributes: _objectSpread2(
              _objectSpread2({}, FILL),
              {},
              {
                opacity: '1',
                d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
              },
            ),
            children: reduceMotion
              ? []
              : [
                  {
                    tag: 'animate',
                    attributes: _objectSpread2(
                      _objectSpread2({}, OPACITY_ANIMATE),
                      {},
                      {
                        values: '1;0;0;0;0;1;',
                      },
                    ),
                  },
                ],
          });
          if (!reduceMotion) {
            // Exclamation
            gChildren.push({
              tag: 'path',
              attributes: _objectSpread2(
                _objectSpread2({}, FILL),
                {},
                {
                  opacity: '0',
                  d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                },
              ),
              children: [
                {
                  tag: 'animate',
                  attributes: _objectSpread2(
                    _objectSpread2({}, OPACITY_ANIMATE),
                    {},
                    {
                      values: '0;0;1;1;0;0;',
                    },
                  ),
                },
              ],
            });
          }
          return {
            tag: 'g',
            attributes: {
              class: 'missing',
            },
            children: gChildren,
          };
        };
      },
    };
    var SvgSymbols = {
      hooks: function hooks() {
        return {
          parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
            var symbolData = node.getAttribute('data-fa-symbol');
            var symbol =
              symbolData === null
                ? false
                : symbolData === ''
                  ? true
                  : symbolData;
            accumulator['symbol'] = symbol;
            return accumulator;
          },
        };
      },
    };
    var plugins = [
      InjectCSS,
      ReplaceElements,
      Layers,
      LayersCounter,
      LayersText,
      PseudoElements,
      MutationObserver$1,
      PowerTransforms,
      Masks,
      MissingIconIndicator,
      SvgSymbols,
    ];
    registerPlugins(plugins, {
      mixoutsTo: api,
    });
    var noAuto$1 = api.noAuto;
    var config$1 = api.config;
    var library$1 = api.library;
    var dom$1 = api.dom;
    var parse$1 = api.parse;
    var findIconDefinition$1 = api.findIconDefinition;
    var toHtml$1 = api.toHtml;
    var icon = api.icon;
    var layer = api.layer;
    var text = api.text;
    var counter = api.counter;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'FontAwesomeIcon',
      () => FontAwesomeIcon,
      'FontAwesomeLayers',
      () => FontAwesomeLayers,
      'LayersCounter',
      () => LayersCounter,
      'LayersText',
      () => LayersText,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/fontawesome-svg-core/index.mjs [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)',
      );
    // src/components/FontAwesomeIcon.tsx
    // src/utils/camelize.ts
    function _isNumerical(object) {
      object = object - 0;
      return object === object;
    }
    function camelize(string) {
      if (_isNumerical(string)) {
        return string;
      }
      string = string.replace(/[_-]+(.)?/g, (_, chr) => {
        return chr ? chr.toUpperCase() : '';
      });
      return string.charAt(0).toLowerCase() + string.slice(1);
    }
    // src/converter.ts
    function capitalize(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    }
    var styleCache = /* @__PURE__ */ new Map();
    var STYLE_CACHE_LIMIT = 1e3;
    function styleToObject(style) {
      if (styleCache.has(style)) {
        return styleCache.get(style);
      }
      const result = {};
      let start = 0;
      const len = style.length;
      while (start < len) {
        const semicolonIndex = style.indexOf(';', start);
        const end = semicolonIndex === -1 ? len : semicolonIndex;
        const pair = style.slice(start, end).trim();
        if (pair) {
          const colonIndex = pair.indexOf(':');
          if (colonIndex > 0) {
            const rawProp = pair.slice(0, colonIndex).trim();
            const value = pair.slice(colonIndex + 1).trim();
            if (rawProp && value) {
              const prop = camelize(rawProp);
              result[prop.startsWith('webkit') ? capitalize(prop) : prop] =
                value;
            }
          }
        }
        start = end + 1;
      }
      if (styleCache.size === STYLE_CACHE_LIMIT) {
        const oldestKey = styleCache.keys().next().value;
        if (oldestKey) {
          styleCache.delete(oldestKey);
        }
      }
      styleCache.set(style, result);
      return result;
    }
    function convert(createElement, element, extraProps = {}) {
      if (typeof element === 'string') {
        return element;
      }
      const children = (element.children || []).map((child) => {
        return convert(createElement, child);
      });
      const elementAttributes = element.attributes || {};
      const attrs = {};
      for (const [key, val] of Object.entries(elementAttributes)) {
        switch (true) {
          case key === 'class': {
            attrs.className = val;
            break;
          }
          case key === 'style': {
            attrs.style = styleToObject(String(val));
            break;
          }
          case key.startsWith('aria-'):
          case key.startsWith('data-'): {
            attrs[key.toLowerCase()] = val;
            break;
          }
          default: {
            attrs[camelize(key)] = val;
          }
        }
      }
      const {
        style: existingStyle,
        role: existingRole,
        'aria-label': ariaLabel,
        ...remaining
      } = extraProps;
      if (existingStyle) {
        attrs.style = attrs.style
          ? {
              ...attrs.style,
              ...existingStyle,
            }
          : existingStyle;
      }
      if (existingRole) {
        attrs.role = existingRole;
      }
      if (ariaLabel) {
        attrs['aria-label'] = ariaLabel;
        attrs['aria-hidden'] = 'false';
      }
      return createElement(
        element.tag,
        {
          ...remaining,
          ...attrs,
        },
        ...children,
      );
    }
    var makeReactConverter = convert.bind(
      null,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'default'
      ].createElement,
    );
    var useAccessibilityId = (id, hasAccessibleProps) => {
      const generatedId = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'useId'
      ])();
      return id || (hasAccessibleProps ? generatedId : void 0);
    };
    // src/logger.ts
    var Logger = class {
      constructor(scope = 'react-fontawesome') {
        this.enabled = false;
        let IS_DEV = false;
        try {
          IS_DEV =
            typeof process !== 'undefined' &&
            ('TURBOPACK compile-time value', 'development') === 'development';
        } catch {}
        this.scope = scope;
        this.enabled = IS_DEV;
      }
      /**
       * Logs messages to the console if not in production.
       * @param args - The message and/or data to log.
       */ log(...args) {
        if (!this.enabled) return;
        console.log(`[${this.scope}]`, ...args);
      }
      /**
       * Logs warnings to the console if not in production.
       * @param args - The warning message and/or data to log.
       */ warn(...args) {
        if (!this.enabled) return;
        console.warn(`[${this.scope}]`, ...args);
      }
      /**
       * Logs errors to the console if not in production.
       * @param args - The error message and/or data to log.
       */ error(...args) {
        if (!this.enabled) return;
        console.error(`[${this.scope}]`, ...args);
      }
    };
    (typeof process !== 'undefined' && process.env.FA_VERSION) || '7.0.0';
    var SVG_CORE_VERSION =
      'searchPseudoElementsFullScan' in
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'config'
      ]
        ? '7.0.0'
        : '6.0.0';
    var IS_VERSION_7_OR_LATER = Number.parseInt(SVG_CORE_VERSION) >= 7;
    var DEFAULT_CLASSNAME_PREFIX = 'fa';
    var ANIMATION_CLASSES = {
      beat: 'fa-beat',
      fade: 'fa-fade',
      beatFade: 'fa-beat-fade',
      bounce: 'fa-bounce',
      shake: 'fa-shake',
      spin: 'fa-spin',
      spinPulse: 'fa-spin-pulse',
      spinReverse: 'fa-spin-reverse',
      pulse: 'fa-pulse',
    };
    var PULL_CLASSES = {
      left: 'fa-pull-left',
      right: 'fa-pull-right',
    };
    var ROTATE_CLASSES = {
      90: 'fa-rotate-90',
      180: 'fa-rotate-180',
      270: 'fa-rotate-270',
    };
    var SIZE_CLASSES = {
      '2xs': 'fa-2xs',
      xs: 'fa-xs',
      sm: 'fa-sm',
      lg: 'fa-lg',
      xl: 'fa-xl',
      '2xl': 'fa-2xl',
      '1x': 'fa-1x',
      '2x': 'fa-2x',
      '3x': 'fa-3x',
      '4x': 'fa-4x',
      '5x': 'fa-5x',
      '6x': 'fa-6x',
      '7x': 'fa-7x',
      '8x': 'fa-8x',
      '9x': 'fa-9x',
      '10x': 'fa-10x',
    };
    var STYLE_CLASSES = {
      border: 'fa-border',
      /** @deprecated */ fixedWidth: 'fa-fw',
      flip: 'fa-flip',
      flipHorizontal: 'fa-flip-horizontal',
      flipVertical: 'fa-flip-vertical',
      inverse: 'fa-inverse',
      rotateBy: 'fa-rotate-by',
      swapOpacity: 'fa-swap-opacity',
      widthAuto: 'fa-width-auto',
    };
    var LAYER_CLASSES = {
      default: 'fa-layers',
    };
    // src/utils/get-class-list-from-props.ts
    function withPrefix(cls) {
      const prefix =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'config'
        ].cssPrefix ||
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'config'
        ].familyPrefix ||
        DEFAULT_CLASSNAME_PREFIX;
      return prefix === DEFAULT_CLASSNAME_PREFIX
        ? cls
        : cls.replace(
            new RegExp(String.raw`(?<=^|\s)${DEFAULT_CLASSNAME_PREFIX}-`, 'g'),
            `${prefix}-`,
          );
    }
    function getClassListFromProps(props) {
      const {
        beat,
        fade,
        beatFade,
        bounce,
        shake,
        spin,
        spinPulse,
        spinReverse,
        pulse,
        fixedWidth,
        inverse,
        border,
        flip,
        size,
        rotation,
        pull,
        swapOpacity,
        rotateBy,
        widthAuto,
        className,
      } = props;
      const result = [];
      if (className) result.push(...className.split(' '));
      if (beat) result.push(ANIMATION_CLASSES.beat);
      if (fade) result.push(ANIMATION_CLASSES.fade);
      if (beatFade) result.push(ANIMATION_CLASSES.beatFade);
      if (bounce) result.push(ANIMATION_CLASSES.bounce);
      if (shake) result.push(ANIMATION_CLASSES.shake);
      if (spin) result.push(ANIMATION_CLASSES.spin);
      if (spinReverse) result.push(ANIMATION_CLASSES.spinReverse);
      if (spinPulse) result.push(ANIMATION_CLASSES.spinPulse);
      if (pulse) result.push(ANIMATION_CLASSES.pulse);
      if (fixedWidth) result.push(STYLE_CLASSES.fixedWidth);
      if (inverse) result.push(STYLE_CLASSES.inverse);
      if (border) result.push(STYLE_CLASSES.border);
      if (flip === true) result.push(STYLE_CLASSES.flip);
      if (flip === 'horizontal' || flip === 'both') {
        result.push(STYLE_CLASSES.flipHorizontal);
      }
      if (flip === 'vertical' || flip === 'both') {
        result.push(STYLE_CLASSES.flipVertical);
      }
      if (size !== void 0 && size !== null) result.push(SIZE_CLASSES[size]);
      if (rotation !== void 0 && rotation !== null && rotation !== 0) {
        result.push(ROTATE_CLASSES[rotation]);
      }
      if (pull !== void 0 && pull !== null) result.push(PULL_CLASSES[pull]);
      if (swapOpacity) result.push(STYLE_CLASSES.swapOpacity);
      if (!IS_VERSION_7_OR_LATER) return result;
      if (rotateBy) result.push(STYLE_CLASSES.rotateBy);
      if (widthAuto) result.push(STYLE_CLASSES.widthAuto);
      const prefix =
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'config'
        ].cssPrefix ||
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'config'
        ].familyPrefix ||
        DEFAULT_CLASSNAME_PREFIX;
      return prefix === DEFAULT_CLASSNAME_PREFIX
        ? result
        : // TODO: see if we can achieve custom prefix support without iterating
          // eslint-disable-next-line unicorn/no-array-callback-reference
          result.map(withPrefix);
    }
    var isIconDefinition = (icon) =>
      typeof icon === 'object' && 'icon' in icon && !!icon.icon;
    function normalizeIconArgs(icon) {
      if (!icon) {
        return void 0;
      }
      if (isIconDefinition(icon)) {
        return icon;
      }
      return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'parse'
      ].icon(icon);
    }
    // src/utils/typed-object-keys.ts
    function typedObjectKeys(obj) {
      return Object.keys(obj);
    }
    // src/components/FontAwesomeIcon.tsx
    var logger = new Logger('FontAwesomeIcon');
    var DEFAULT_PROPS = {
      border: false,
      className: '',
      mask: void 0,
      maskId: void 0,
      fixedWidth: false,
      inverse: false,
      flip: false,
      icon: void 0,
      listItem: false,
      pull: void 0,
      pulse: false,
      rotation: void 0,
      rotateBy: false,
      size: void 0,
      spin: false,
      spinPulse: false,
      spinReverse: false,
      beat: false,
      fade: false,
      beatFade: false,
      bounce: false,
      shake: false,
      symbol: false,
      title: '',
      titleId: void 0,
      transform: void 0,
      swapOpacity: false,
      widthAuto: false,
    };
    var DEFAULT_PROP_KEYS = new Set(Object.keys(DEFAULT_PROPS));
    var FontAwesomeIcon =
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'default'
      ].forwardRef((props, ref) => {
        const allProps = {
          ...DEFAULT_PROPS,
          ...props,
        };
        const {
          icon: iconArgs,
          mask: maskArgs,
          symbol,
          title,
          titleId: titleIdFromProps,
          maskId: maskIdFromProps,
          transform,
        } = allProps;
        const maskId = useAccessibilityId(maskIdFromProps, Boolean(maskArgs));
        const titleId = useAccessibilityId(titleIdFromProps, Boolean(title));
        const iconLookup = normalizeIconArgs(iconArgs);
        if (!iconLookup) {
          logger.error('Icon lookup is undefined', iconArgs);
          return null;
        }
        const classList = getClassListFromProps(allProps);
        const transformProps =
          typeof transform === 'string'
            ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'parse'
              ].transform(transform)
            : transform;
        const normalizedMaskArgs = normalizeIconArgs(maskArgs);
        const renderedIcon = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'icon'
        ])(iconLookup, {
          ...(classList.length > 0 && {
            classes: classList,
          }),
          ...(transformProps && {
            transform: transformProps,
          }),
          ...(normalizedMaskArgs && {
            mask: normalizedMaskArgs,
          }),
          symbol,
          title,
          titleId,
          maskId,
        });
        if (!renderedIcon) {
          logger.error('Could not find icon', iconLookup);
          return null;
        }
        const { abstract } = renderedIcon;
        const extraProps = {
          ref,
        };
        for (const key of typedObjectKeys(allProps)) {
          if (DEFAULT_PROP_KEYS.has(key)) {
            continue;
          }
          extraProps[key] = allProps[key];
        }
        return makeReactConverter(abstract[0], extraProps);
      });
    FontAwesomeIcon.displayName = 'FontAwesomeIcon';
    var DEFAULT_CLASSNAMES = `${LAYER_CLASSES.default} ${STYLE_CLASSES.fixedWidth}`;
    var FontAwesomeLayers = ({ children, className, size, ...attributes }) => {
      const prefixedDefaultClasses = withPrefix(DEFAULT_CLASSNAMES);
      const classes = className
        ? `${prefixedDefaultClasses} ${className}`
        : prefixedDefaultClasses;
      const element = /* @__PURE__ */ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'jsx'
      ])('span', {
        ...attributes,
        className: classes,
        children,
      });
      if (size) {
        return /* @__PURE__ */ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'jsx'
        ])('div', {
          className: withPrefix(`fa-${size}`),
          children: element,
        });
      }
      return element;
    };
    var LayersText = ({
      text: text$1,
      className,
      inverse,
      transform,
      style,
      ...attributes
    }) => {
      const textAbstractElement = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'useMemo'
      ])(() => {
        const textObject = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'text'
        ])(text$1, {
          classes: [
            ...(className?.split(' ') || []),
            ...(inverse ? [STYLE_CLASSES.inverse] : []),
          ],
          transform:
            typeof transform === 'string'
              ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'parse'
                ].transform(transform)
              : transform,
        });
        return textObject.abstract[0];
      }, [text$1, transform, className, inverse]);
      return makeReactConverter(textAbstractElement, {
        ...attributes,
        style,
      });
    };
    var LayersCounter = ({ count, className, style, ...attributes }) => {
      const counterAbstractElement = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'useMemo'
      ])(
        () =>
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f40$fortawesome$2f$fontawesome$2d$svg$2d$core$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'counter'
          ])(count, {
            classes: className?.split(' '),
          }).abstract[0],
        [count, className],
      );
      return makeReactConverter(counterAbstractElement, {
        ...attributes,
        style,
      });
    };
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/free-brands-svg-icons/faAngellist.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    var prefix = 'fab';
    var iconName = 'angellist';
    var width = 384;
    var height = 512;
    var aliases = [];
    var unicode = 'f209';
    var svgPathData =
      'M315.6 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1-9.7-28.5-55.1-172.5-95.1-172.5-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7-.1 72.2 68.3 148.6 164.5 148.6 118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM280.2 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM110.8 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM108.5 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7 .1-7.7 12.7-21.1 20.4-21.1zM292.8 430.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3 .3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7 .1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z';
    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [width, height, aliases, unicode, svgPathData],
    };
    exports.faAngellist = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    var prefix = 'fab';
    var iconName = 'facebook-f';
    var width = 320;
    var height = 512;
    var aliases = [];
    var unicode = 'f39e';
    var svgPathData =
      'M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z';
    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [width, height, aliases, unicode, svgPathData],
    };
    exports.faFacebookF = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/free-brands-svg-icons/faGithub.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    var prefix = 'fab';
    var iconName = 'github';
    var width = 512;
    var height = 512;
    var aliases = [];
    var unicode = 'f09b';
    var svgPathData =
      'M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z';
    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [width, height, aliases, unicode, svgPathData],
    };
    exports.faGithub = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/free-brands-svg-icons/faInstagram.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    var prefix = 'fab';
    var iconName = 'instagram';
    var width = 448;
    var height = 512;
    var aliases = [];
    var unicode = 'f16d';
    var svgPathData =
      'M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z';
    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [width, height, aliases, unicode, svgPathData],
    };
    exports.faInstagram = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/free-brands-svg-icons/faLinkedinIn.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    var prefix = 'fab';
    var iconName = 'linkedin-in';
    var width = 448;
    var height = 512;
    var aliases = [];
    var unicode = 'f0e1';
    var svgPathData =
      'M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z';
    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [width, height, aliases, unicode, svgPathData],
    };
    exports.faLinkedinIn = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    var prefix = 'fab';
    var iconName = 'twitter';
    var width = 512;
    var height = 512;
    var aliases = [];
    var unicode = 'f099';
    var svgPathData =
      'M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z';
    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [width, height, aliases, unicode, svgPathData],
    };
    exports.faTwitter = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@fortawesome/free-regular-svg-icons/faEnvelope.js [app-rsc] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    var prefix = 'far';
    var iconName = 'envelope';
    var width = 512;
    var height = 512;
    var aliases = [128386, 9993, 61443];
    var unicode = 'f0e0';
    var svgPathData =
      'M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z';
    exports.definition = {
      prefix: prefix,
      iconName: iconName,
      icon: [width, height, aliases, unicode, svgPathData],
    };
    exports.faEnvelope = exports.definition;
    exports.prefix = prefix;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = aliases;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
    exports.aliases = aliases;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/templates/app-page.js?page=/about/page { GLOBAL_ERROR_MODULE => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/Documents/priya-profile/priya-new-site/app/favicon.ico.mjs { IMAGE => \\"[project]/Documents/priya-profile/priya-new-site/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Documents/priya-profile/priya-new-site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Documents/priya-profile/priya-new-site/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/Documents/priya-profile/priya-new-site/app/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      '__next_app__',
      () => __next_app__,
      'handler',
      () => handler,
      'routeModule',
      () => routeModule,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/app/favicon.ico.mjs { IMAGE => "[project]/Documents/priya-profile/priya-new-site/app/favicon.ico (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/manifests-singleton.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ =
      __turbopack_context__.i(
        '[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/size-limit.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)',
      );
    const __TURBOPACK__layout__$23$1__ = () =>
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)',
      );
    const __TURBOPACK__not$2d$found__$23$2__ = () =>
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)',
      );
    const __TURBOPACK__forbidden__$23$3__ = () =>
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)',
      );
    const __TURBOPACK__unauthorized__$23$4__ = () =>
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)',
      );
    const __TURBOPACK__global$2d$error__$23$5__ = () =>
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)',
      );
    const __TURBOPACK__page__$23$6__ = () =>
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/app/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)',
      );
    // We inject the tree and pages here so that we can use them in the route
    // module.
    const tree = [
      '',
      {
        children: [
          'about',
          {
            children: [
              '__PAGE__',
              {},
              {
                metadata: {},
                page: [
                  __TURBOPACK__page__$23$6__,
                  '[project]/Documents/priya-profile/priya-new-site/app/about/page.tsx',
                ],
              },
            ],
          },
          {
            metadata: {},
          },
        ],
      },
      {
        metadata: {
          icon: [
            async (props) => [
              {
                url:
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
                    'fillMetadataSegment'
                  ])('//', await props.params, 'favicon.ico') +
                  `?${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__['default'].src.split('/').splice(-1)[0]}`,
                sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__['default'].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__['default'].height}`,
                type: `image/x-icon`,
              },
            ],
          ],
        },
        layout: [
          __TURBOPACK__layout__$23$1__,
          '[project]/Documents/priya-profile/priya-new-site/app/layout.tsx',
        ],
        'not-found': [
          __TURBOPACK__not$2d$found__$23$2__,
          '[project]/Documents/priya-profile/priya-new-site/app/not-found.tsx',
        ],
        forbidden: [
          __TURBOPACK__forbidden__$23$3__,
          '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js',
        ],
        unauthorized: [
          __TURBOPACK__unauthorized__$23$4__,
          '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js',
        ],
        'global-error': [
          __TURBOPACK__global$2d$error__$23$5__,
          '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js',
        ],
      },
    ];
    const __next_app_require__ = __turbopack_context__.r.bind(
      __turbopack_context__,
    );
    const __next_app_load_chunk__ = __turbopack_context__.l.bind(
      __turbopack_context__,
    );
    const __next_app__ = {
      require: __next_app_require__,
      loadChunk: __next_app_load_chunk__,
    };
    const routeModule =
      new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        'AppPageRouteModule'
      ]({
        definition: {
          kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
            'RouteKind'
          ].APP_PAGE,
          page: '/about/page',
          pathname: '/about',
          // The following aren't used in production.
          bundlePath: '',
          filename: '',
          appPaths: [],
        },
        userland: {
          loaderTree: tree,
        },
        distDir: ('TURBOPACK compile-time value', '.next/dev') || '',
        relativeProjectDir: ('TURBOPACK compile-time value', '') || '',
      });
    async function handler(req, res, ctx) {
      var _this;
      if (routeModule.isDev) {
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'addRequestMeta'
        ])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
      }
      const isMinimalMode = Boolean(
        ('TURBOPACK compile-time value', false) ||
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'getRequestMeta'
          ])(req, 'minimalMode'),
      );
      let srcPage = '/about/page';
      // turbopack doesn't normalize `/index` in the page name
      // so we need to to process dynamic routes properly
      // TODO: fix turbopack providing differing value from webpack
      if (('TURBOPACK compile-time truthy', 1)) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
      } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
      }
      const multiZoneDraftMode = ('TURBOPACK compile-time value', false);
      const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode,
      });
      if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null
          ? void 0
          : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
      }
      const {
        buildId,
        query,
        params,
        pageIsDynamic,
        buildManifest,
        nextFontManifest,
        reactLoadableManifest,
        serverActionsManifest,
        clientReferenceManifest,
        subresourceIntegrityManifest,
        prerenderManifest,
        isDraftMode,
        resolvedPathname,
        revalidateOnlyGenerated,
        routerServerContext,
        nextConfig,
        parsedUrl,
        interceptionRoutePatterns,
        deploymentId,
      } = prepareResult;
      const normalizedSrcPage = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'normalizeAppPath'
      ])(srcPage);
      let { isOnDemandRevalidate } = prepareResult;
      // We use the resolvedPathname instead of the parsedUrl.pathname because it
      // is not rewritten as resolvedPathname is. This will ensure that the correct
      // prerender info is used instead of using the original pathname as the
      // source. If however PPR is enabled and cacheComponents is disabled, we
      // treat the pathname as dynamic. Currently, there's a bug in the PPR
      // implementation that incorrectly leaves %%drp placeholders in the output of
      // parallel routes. This is addressed with cacheComponents.
      const prerenderInfo =
        nextConfig.experimental.ppr &&
        !nextConfig.cacheComponents &&
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'isInterceptionRouteAppPath'
        ])(resolvedPathname)
          ? null
          : routeModule.match(resolvedPathname, prerenderManifest);
      const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
      const userAgent = req.headers['user-agent'] || '';
      const botType = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
        'getBotType'
      ])(userAgent);
      const isHtmlBot = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'isHtmlBotRequest'
      ])(req);
      /**
       * If true, this indicates that the request being made is for an app
       * prefetch request.
       */ const isPrefetchRSCRequest =
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'getRequestMeta'
        ])(req, 'isPrefetchRSCRequest') ??
        req.headers[
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'NEXT_ROUTER_PREFETCH_HEADER'
          ]
        ] === '1'; // exclude runtime prefetches, which use '2'
      // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
      const isRSCRequest =
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'getRequestMeta'
        ])(req, 'isRSCRequest') ??
        Boolean(
          req.headers[
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'RSC_HEADER'
            ]
          ],
        );
      const isPossibleServerAction = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'getIsPossibleServerAction'
      ])(req);
      /**
       * If the route being rendered is an app page, and the ppr feature has been
       * enabled, then the given route _could_ support PPR.
       */ const couldSupportPPR = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'checkIsAppPPREnabled'
      ])(nextConfig.experimental.ppr);
      if (
        !(0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'getRequestMeta'
        ])(req, 'postponed') &&
        couldSupportPPR &&
        req.headers[
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'NEXT_RESUME_HEADER'
          ]
        ] === '1' &&
        req.method === 'POST'
      ) {
        // Decode the postponed state from the request body, it will come as
        // an array of buffers, so collect them and then concat them to form
        // the string.
        const body = [];
        for await (const chunk of req) {
          body.push(chunk);
        }
        const postponed = Buffer.concat(body).toString('utf8');
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'addRequestMeta'
        ])(req, 'postponed', postponed);
      }
      // When enabled, this will allow the use of the `?__nextppronly` query to
      // enable debugging of the static shell.
      const hasDebugStaticShellQuery =
        ('TURBOPACK compile-time value', false) === '1' &&
        typeof query.__nextppronly !== 'undefined' &&
        couldSupportPPR;
      // When enabled, this will allow the use of the `?__nextppronly` query
      // to enable debugging of the fallback shell.
      const hasDebugFallbackShellQuery =
        hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
      // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
      // prerender manifest and this is an app page.
      const isRoutePPREnabled =
        couldSupportPPR &&
        (((_this =
          prerenderManifest.routes[normalizedSrcPage] ??
          prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null
          ? void 0
          : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
          // enabled or not, but that would require plumbing the appConfig through
          // to the server during development. We assume that the page supports it
          // but only during development.
          (hasDebugStaticShellQuery &&
            (routeModule.isDev === true ||
              (routerServerContext == null
                ? void 0
                : routerServerContext.experimentalTestProxy) === true)));
      const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
      // We should enable debugging dynamic accesses when the static shell
      // debugging has been enabled and we're also in development mode.
      const isDebugDynamicAccesses =
        isDebugStaticShell && routeModule.isDev === true;
      const isDebugFallbackShell =
        hasDebugFallbackShellQuery && isRoutePPREnabled;
      // If we're in minimal mode, then try to get the postponed information from
      // the request metadata. If available, use it for resuming the postponed
      // render.
      const minimalPostponed = isRoutePPREnabled
        ? (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'getRequestMeta'
          ])(req, 'postponed')
        : undefined;
      // If PPR is enabled, and this is a RSC request (but not a prefetch), then
      // we can use this fact to only generate the flight data for the request
      // because we can't cache the HTML (as it's also dynamic).
      let isDynamicRSCRequest =
        isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
      // During a PPR revalidation, the RSC request is not dynamic if we do not have the postponed data.
      // We only attach the postponed data during a resume. If there's no postponed data, then it must be a revalidation.
      // This is to ensure that we don't bypass the cache during a revalidation.
      if (isMinimalMode) {
        isDynamicRSCRequest = isDynamicRSCRequest && !!minimalPostponed;
      }
      // Need to read this before it's stripped by stripFlightHeaders. We don't
      // need to transfer it to the request meta because it's only read
      // within this function; the static segment data should have already been
      // generated, so we will always either return a static response or a 404.
      const segmentPrefetchHeader = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'getRequestMeta'
      ])(req, 'segmentPrefetchRSCRequest');
      // TODO: investigate existing bug with shouldServeStreamingMetadata always
      // being true for a revalidate due to modifying the base-server this.renderOpts
      // when fixing this to correct logic it causes hydration issue since we set
      // serveStreamingMetadata to true during export
      const serveStreamingMetadata =
        isHtmlBot && isRoutePPREnabled
          ? false
          : !userAgent
            ? true
            : (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'shouldServeStreamingMetadata'
              ])(userAgent, nextConfig.htmlLimitedBots);
      const isSSG = Boolean(
        (prerenderInfo ||
          isPrerendered ||
          prerenderManifest.routes[normalizedSrcPage]) && // If this is a html bot request and PPR is enabled, then we don't want
          // to serve a static response.
          !(isHtmlBot && isRoutePPREnabled),
      );
      // When a page supports cacheComponents, we can support RDC for Navigations
      const supportsRDCForNavigations =
        isRoutePPREnabled && nextConfig.cacheComponents === true;
      // In development, we always want to generate dynamic HTML.
      const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
        routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
        // dynamic HTML.
        !isSSG || // If this request has provided postponed data, it supports dynamic
        // HTML.
        typeof minimalPostponed === 'string' || // If this handler supports onCacheEntryV2, then we can only support
        // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
        // doesn't support it we must fallback to the default behavior.
        (supportsRDCForNavigations &&
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'getRequestMeta'
        ])(req, 'onCacheEntryV2')
          ? // RSC request, we'll pass the minimal postponed data to the render
            // which will trigger the `supportsDynamicResponse` to be true.
            isDynamicRSCRequest && !isMinimalMode
          : isDynamicRSCRequest);
      // When html bots request PPR page, perform the full dynamic rendering.
      const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
      let ssgCacheKey = null;
      if (
        !isDraftMode &&
        isSSG &&
        !supportsDynamicResponse &&
        !isPossibleServerAction &&
        !minimalPostponed &&
        !isDynamicRSCRequest
      ) {
        ssgCacheKey = resolvedPathname;
      }
      // the staticPathKey differs from ssgCacheKey since
      // ssgCacheKey is null in dev since we're always in "dynamic"
      // mode in dev to bypass the cache, but we still need to honor
      // dynamicParams = false in dev mode
      let staticPathKey = ssgCacheKey;
      if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
      }
      // If this is a request for an app path that should be statically generated
      // and we aren't in the edge runtime, strip the flight headers so it will
      // generate the static response.
      if (
        !routeModule.isDev &&
        !isDraftMode &&
        isSSG &&
        isRSCRequest &&
        !isDynamicRSCRequest
      ) {
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'stripFlightHeaders'
        ])(req.headers);
      }
      const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        GlobalError:
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__[
            'default'
          ],
        handler,
        routeModule,
        __next_app__,
      };
      // Before rendering (which initializes component tree modules), we have to
      // set the reference manifests to our global store so Server Action's
      // encryption util can access to them at the top level of the page module.
      if (serverActionsManifest && clientReferenceManifest) {
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$manifests$2d$singleton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'setManifestsSingleton'
        ])({
          page: srcPage,
          clientReferenceManifest,
          serverActionsManifest,
        });
      }
      const method = req.method || 'GET';
      const tracer = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'getTracer'
      ])();
      const activeSpan = tracer.getActiveScopeSpan();
      const render404 = async () => {
        // TODO: should route-module itself handle rendering the 404
        if (
          routerServerContext == null ? void 0 : routerServerContext.render404
        ) {
          await routerServerContext.render404(req, res, parsedUrl, false);
        } else {
          res.end('This page could not be found');
        }
        return null;
      };
      try {
        const varyHeader = routeModule.getVaryHeader(
          resolvedPathname,
          interceptionRoutePatterns,
        );
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context) => {
          const nextReq =
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'NodeNextRequest'
            ](req);
          const nextRes =
            new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'NodeNextResponse'
            ](res);
          return routeModule.render(nextReq, nextRes, context).finally(() => {
            if (!span) return;
            span.setAttributes({
              'http.status_code': res.statusCode,
              'next.rsc': false,
            });
            const rootSpanAttributes = tracer.getRootSpanAttributes();
            // We were unable to get attributes, probably OTEL is not enabled
            if (!rootSpanAttributes) {
              return;
            }
            if (
              rootSpanAttributes.get('next.span_type') !==
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'BaseServerSpan'
              ].handleRequest
            ) {
              console.warn(
                `Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`,
              );
              return;
            }
            const route = rootSpanAttributes.get('next.route');
            if (route) {
              const name = `${method} ${route}`;
              span.setAttributes({
                'next.route': route,
                'http.route': route,
                'next.span_name': name,
              });
              span.updateName(name);
            } else {
              span.updateName(`${method} ${srcPage}`);
            }
          });
        };
        const incrementalCache = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'getRequestMeta'
        ])(req, 'incrementalCache');
        const doRender = async ({
          span,
          postponed,
          fallbackRouteParams,
          forceStaticRender,
        }) => {
          const context = {
            query,
            params,
            page: normalizedSrcPage,
            sharedContext: {
              buildId,
            },
            serverComponentsHmrCache: (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getRequestMeta'
            ])(req, 'serverComponentsHmrCache'),
            fallbackRouteParams,
            renderOpts: {
              App: () => null,
              Document: () => null,
              pageConfig: {},
              ComponentMod,
              Component: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'interopDefault'
              ])(ComponentMod),
              params,
              routeModule,
              page: srcPage,
              postponed,
              shouldWaitOnAllReady,
              serveStreamingMetadata,
              supportsDynamicResponse:
                typeof postponed === 'string' || supportsDynamicResponse,
              buildManifest,
              nextFontManifest,
              reactLoadableManifest,
              subresourceIntegrityManifest,
              setCacheStatus:
                routerServerContext == null
                  ? void 0
                  : routerServerContext.setCacheStatus,
              setIsrStatus:
                routerServerContext == null
                  ? void 0
                  : routerServerContext.setIsrStatus,
              setReactDebugChannel:
                routerServerContext == null
                  ? void 0
                  : routerServerContext.setReactDebugChannel,
              sendErrorsToBrowser:
                routerServerContext == null
                  ? void 0
                  : routerServerContext.sendErrorsToBrowser,
              dir: ('TURBOPACK compile-time truthy', 1)
                ? require('path').join(
                    /* turbopackIgnore: true */ process.cwd(),
                    routeModule.relativeProjectDir,
                  )
                : 'TURBOPACK unreachable',
              isDraftMode,
              botType,
              isOnDemandRevalidate,
              isPossibleServerAction,
              assetPrefix: nextConfig.assetPrefix,
              nextConfigOutput: nextConfig.output,
              crossOrigin: nextConfig.crossOrigin,
              trailingSlash: nextConfig.trailingSlash,
              images: nextConfig.images,
              previewProps: prerenderManifest.preview,
              deploymentId: deploymentId,
              enableTainting: nextConfig.experimental.taint,
              htmlLimitedBots: nextConfig.htmlLimitedBots,
              reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
              multiZoneDraftMode,
              incrementalCache,
              cacheLifeProfiles: nextConfig.cacheLife,
              basePath: nextConfig.basePath,
              serverActions: nextConfig.experimental.serverActions,
              ...(isDebugStaticShell ||
              isDebugDynamicAccesses ||
              isDebugFallbackShell
                ? {
                    nextExport: true,
                    supportsDynamicResponse: false,
                    isStaticGeneration: true,
                    isDebugDynamicAccesses: isDebugDynamicAccesses,
                  }
                : {}),
              cacheComponents: Boolean(nextConfig.cacheComponents),
              experimental: {
                isRoutePPREnabled,
                expireTime: nextConfig.expireTime,
                staleTimes: nextConfig.experimental.staleTimes,
                dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                inlineCss: Boolean(nextConfig.experimental.inlineCss),
                authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                clientTraceMetadata:
                  nextConfig.experimental.clientTraceMetadata || [],
                clientParamParsingOrigins:
                  nextConfig.experimental.clientParamParsingOrigins,
                maxPostponedStateSizeBytes: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$size$2d$limit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'parseMaxPostponedStateSize'
                ])(nextConfig.experimental.maxPostponedStateSize),
              },
              waitUntil: ctx.waitUntil,
              onClose: (cb) => {
                res.on('close', cb);
              },
              onAfterTaskError: () => {},
              onInstrumentationRequestError: (
                error,
                _request,
                errorContext,
                silenceLog,
              ) =>
                routeModule.onRequestError(
                  req,
                  error,
                  errorContext,
                  silenceLog,
                  routerServerContext,
                ),
              err: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getRequestMeta'
              ])(req, 'invokeError'),
              dev: routeModule.isDev,
            },
          };
          if (isDebugStaticShell || isDebugDynamicAccesses) {
            context.renderOpts.nextExport = true;
            context.renderOpts.supportsDynamicResponse = false;
            context.renderOpts.isDebugDynamicAccesses = isDebugDynamicAccesses;
          }
          // When we're revalidating in the background, we should not allow dynamic
          // responses.
          if (forceStaticRender) {
            context.renderOpts.supportsDynamicResponse = false;
          }
          const result = await invokeRouteModule(span, context);
          const { metadata } = result;
          const {
            cacheControl,
            headers = {},
            fetchTags: cacheTags,
            fetchMetrics,
          } = metadata;
          if (cacheTags) {
            headers[
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'NEXT_CACHE_TAGS_HEADER'
              ]
            ] = cacheTags;
          }
          // Pull any fetch metrics from the render onto the request.
          req.fetchMetrics = fetchMetrics;
          // we don't throw static to dynamic errors in dev as isSSG
          // is a best guess in dev since we don't have the prerender pass
          // to know whether the path is actually static or not
          if (
            isSSG &&
            (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 &&
            !routeModule.isDev &&
            !isRoutePPREnabled
          ) {
            const staticBailoutInfo = metadata.staticBailoutInfo;
            const err = Object.defineProperty(
              new Error(
                `Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` +
                  `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`,
              ),
              '__NEXT_ERROR_CODE',
              {
                value: 'E132',
                enumerable: false,
                configurable: true,
              },
            );
            if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
              const stack = staticBailoutInfo.stack;
              err.stack = err.message + stack.substring(stack.indexOf('\n'));
            }
            throw err;
          }
          return {
            value: {
              kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CachedRouteKind'
              ].APP_PAGE,
              html: result,
              headers,
              rscData: metadata.flightData,
              postponed: metadata.postponed,
              status: metadata.statusCode,
              segmentData: metadata.segmentData,
            },
            cacheControl,
          };
        };
        const responseGenerator = async ({
          hasResolved,
          previousCacheEntry: previousIncrementalCacheEntry,
          isRevalidating,
          span,
          forceStaticRender = false,
        }) => {
          const isProduction = routeModule.isDev === false;
          const didRespond = hasResolved || res.writableEnded;
          // skip on-demand revalidate if cache is not present and
          // revalidate-if-generated is set
          if (
            isOnDemandRevalidate &&
            revalidateOnlyGenerated &&
            !previousIncrementalCacheEntry &&
            !isMinimalMode
          ) {
            if (
              routerServerContext == null
                ? void 0
                : routerServerContext.render404
            ) {
              await routerServerContext.render404(req, res);
            } else {
              res.statusCode = 404;
              res.end('This page could not be found');
            }
            return null;
          }
          let fallbackMode;
          if (prerenderInfo) {
            fallbackMode = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'parseFallbackField'
            ])(prerenderInfo.fallback);
          }
          // When serving a HTML bot request, we want to serve a blocking render and
          // not the prerendered page. This ensures that the correct content is served
          // to the bot in the head.
          if (
            fallbackMode ===
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'FallbackMode'
              ].PRERENDER &&
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
              'isBot'
            ])(userAgent)
          ) {
            if (!isRoutePPREnabled || isHtmlBot) {
              fallbackMode =
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'FallbackMode'
                ].BLOCKING_STATIC_RENDER;
            }
          }
          if (
            (previousIncrementalCacheEntry == null
              ? void 0
              : previousIncrementalCacheEntry.isStale) === -1
          ) {
            isOnDemandRevalidate = true;
          }
          // TODO: adapt for PPR
          // only allow on-demand revalidate for fallback: true/blocking
          // or for prerendered fallback: false paths
          if (
            isOnDemandRevalidate &&
            (fallbackMode !==
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'FallbackMode'
              ].NOT_FOUND ||
              previousIncrementalCacheEntry)
          ) {
            fallbackMode =
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'FallbackMode'
              ].BLOCKING_STATIC_RENDER;
          }
          if (
            !isMinimalMode &&
            fallbackMode !==
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'FallbackMode'
              ].BLOCKING_STATIC_RENDER &&
            staticPathKey &&
            !didRespond &&
            !isDraftMode &&
            pageIsDynamic &&
            (isProduction || !isPrerendered)
          ) {
            // if the page has dynamicParams: false and this pathname wasn't
            // prerendered trigger the no fallback handling
            if (
              // getStaticPaths.
              (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
              fallbackMode ===
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'FallbackMode'
                ].NOT_FOUND
            ) {
              if (nextConfig.experimental.adapterPath) {
                return await render404();
              }
              throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__[
                'NoFallbackError'
              ]();
            }
            // When cacheComponents is enabled, we can use the fallback
            // response if the request is not a dynamic RSC request because the
            // RSC data when this feature flag is enabled does not contain any
            // param references. Without this feature flag enabled, the RSC data
            // contains param references, and therefore we can't use the fallback.
            if (
              isRoutePPREnabled &&
              (nextConfig.cacheComponents
                ? !isDynamicRSCRequest
                : !isRSCRequest)
            ) {
              const cacheKey =
                isProduction &&
                typeof (prerenderInfo == null
                  ? void 0
                  : prerenderInfo.fallback) === 'string'
                  ? prerenderInfo.fallback
                  : normalizedSrcPage;
              const fallbackRouteParams = // can use the manifest fallback route params.
                isProduction &&
                (prerenderInfo == null
                  ? void 0
                  : prerenderInfo.fallbackRouteParams)
                  ? (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'createOpaqueFallbackRouteParams'
                    ])(prerenderInfo.fallbackRouteParams)
                  : isDebugFallbackShell
                    ? (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'getFallbackRouteParams'
                      ])(normalizedSrcPage, routeModule)
                    : null;
              // We use the response cache here to handle the revalidation and
              // management of the fallback shell.
              const fallbackResponse = await routeModule.handleResponse({
                cacheKey,
                req,
                nextConfig,
                routeKind:
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
                    'RouteKind'
                  ].APP_PAGE,
                isFallback: true,
                prerenderManifest,
                isRoutePPREnabled,
                responseGenerator: async () =>
                  doRender({
                    span,
                    // We pass `undefined` as rendering a fallback isn't resumed
                    // here.
                    postponed: undefined,
                    fallbackRouteParams,
                    forceStaticRender: false,
                  }),
                waitUntil: ctx.waitUntil,
                isMinimalMode,
              });
              // If the fallback response was set to null, then we should return null.
              if (fallbackResponse === null) return null;
              // Otherwise, if we did get a fallback response, we should return it.
              if (fallbackResponse) {
                // Remove the cache control from the response to prevent it from being
                // used in the surrounding cache.
                delete fallbackResponse.cacheControl;
                return fallbackResponse;
              }
            }
          }
          // Only requests that aren't revalidating can be resumed. If we have the
          // minimal postponed data, then we should resume the render with it.
          let postponed =
            !isOnDemandRevalidate && !isRevalidating && minimalPostponed
              ? minimalPostponed
              : undefined;
          // If this is a dynamic RSC request, we should use the postponed data from
          // the static render (if available). This ensures that we can utilize the
          // resume data cache (RDC) from the static render to ensure that the data
          // is consistent between the static and dynamic renders.
          if (
            supportsRDCForNavigations &&
            ('TURBOPACK compile-time value', 'nodejs') !== 'edge' &&
            !isMinimalMode &&
            incrementalCache &&
            isDynamicRSCRequest && // We don't typically trigger an on-demand revalidation for dynamic RSC
            // requests, as we're typically revalidating the page in the background
            // instead. However, if the cache entry is stale, we should trigger a
            // background revalidation on dynamic RSC requests. This prevents us
            // from entering an infinite loop of revalidations.
            !forceStaticRender
          ) {
            const incrementalCacheEntry = await incrementalCache.get(
              resolvedPathname,
              {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'IncrementalCacheKind'
                ].APP_PAGE,
                isRoutePPREnabled: true,
                isFallback: false,
              },
            );
            // If the cache entry is found, we should use the postponed data from
            // the cache.
            if (
              incrementalCacheEntry &&
              incrementalCacheEntry.value &&
              incrementalCacheEntry.value.kind ===
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CachedRouteKind'
                ].APP_PAGE
            ) {
              // CRITICAL: we're assigning the postponed data from the cache entry
              // here as we're using the RDC to resume the render.
              postponed = incrementalCacheEntry.value.postponed;
              // If the cache entry is stale, we should trigger a background
              // revalidation so that subsequent requests will get a fresh response.
              if (
                incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                // the requested revalidation flow is either foreground or
                // background.
                (incrementalCacheEntry.isStale === -1 ||
                  incrementalCacheEntry.isStale === true)
              ) {
                // We want to schedule this on the next tick to ensure that the
                // render is not blocked on it.
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'scheduleOnNextTick'
                ])(async () => {
                  const responseCache = routeModule.getResponseCache(req);
                  try {
                    await responseCache.revalidate(
                      resolvedPathname,
                      incrementalCache,
                      isRoutePPREnabled,
                      false,
                      (c) =>
                        responseGenerator({
                          ...c,
                          // CRITICAL: we need to set this to true as we're
                          // revalidating in the background and typically this dynamic
                          // RSC request is not treated as static.
                          forceStaticRender: true,
                        }), // previous cache entry here (which is stale) will switch on
                      // isOnDemandRevalidate and break the prerendering.
                      null,
                      hasResolved,
                      ctx.waitUntil,
                    );
                  } catch (err) {
                    console.error(
                      'Error revalidating the page in the background',
                      err,
                    );
                  }
                });
              }
            }
          }
          // When we're in minimal mode, if we're trying to debug the static shell,
          // we should just return nothing instead of resuming the dynamic render.
          if (
            (isDebugStaticShell || isDebugDynamicAccesses) &&
            typeof postponed !== 'undefined'
          ) {
            return {
              cacheControl: {
                revalidate: 1,
                expire: undefined,
              },
              value: {
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CachedRouteKind'
                ].PAGES,
                html: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'default'
                ].EMPTY,
                pageData: {},
                headers: undefined,
                status: undefined,
              },
            };
          }
          const fallbackRouteParams = // can use the manifest fallback route params if we need to render the
            // fallback shell.
            isProduction &&
            (prerenderInfo == null
              ? void 0
              : prerenderInfo.fallbackRouteParams) &&
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'getRequestMeta'
            ])(req, 'renderFallbackShell')
              ? (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'createOpaqueFallbackRouteParams'
                ])(prerenderInfo.fallbackRouteParams)
              : isDebugFallbackShell
                ? (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'getFallbackRouteParams'
                  ])(normalizedSrcPage, routeModule)
                : null;
          // Perform the render.
          return doRender({
            span,
            postponed,
            fallbackRouteParams,
            forceStaticRender,
          });
        };
        const handleResponse = async (span) => {
          var _cacheEntry_value, _cachedData_headers;
          const cacheEntry = await routeModule.handleResponse({
            cacheKey: ssgCacheKey,
            responseGenerator: (c) =>
              responseGenerator({
                span,
                ...c,
              }),
            routeKind:
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
                'RouteKind'
              ].APP_PAGE,
            isOnDemandRevalidate,
            isRoutePPREnabled,
            req,
            nextConfig,
            prerenderManifest,
            waitUntil: ctx.waitUntil,
            isMinimalMode,
          });
          if (isDraftMode) {
            res.setHeader(
              'Cache-Control',
              'private, no-cache, no-store, max-age=0, must-revalidate',
            );
          }
          // In dev, we should not cache pages for any reason.
          if (routeModule.isDev) {
            res.setHeader('Cache-Control', 'no-store, must-revalidate');
          }
          if (!cacheEntry) {
            if (ssgCacheKey) {
              // A cache entry might not be generated if a response is written
              // in `getInitialProps` or `getServerSideProps`, but those shouldn't
              // have a cache key. If we do have a cache key but we don't end up
              // with a cache entry, then either Next.js or the application has a
              // bug that needs fixing.
              throw Object.defineProperty(
                new Error('invariant: cache entry required but not generated'),
                '__NEXT_ERROR_CODE',
                {
                  value: 'E62',
                  enumerable: false,
                  configurable: true,
                },
              );
            }
            return null;
          }
          if (
            ((_cacheEntry_value = cacheEntry.value) == null
              ? void 0
              : _cacheEntry_value.kind) !==
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'CachedRouteKind'
            ].APP_PAGE
          ) {
            var _cacheEntry_value1;
            throw Object.defineProperty(
              new Error(
                `Invariant app-page handler received invalid cache entry ${((_cacheEntry_value1 = cacheEntry.value)) == null ? void 0 : _cacheEntry_value1.kind}`,
              ),
              '__NEXT_ERROR_CODE',
              {
                value: 'E707',
                enumerable: false,
                configurable: true,
              },
            );
          }
          const didPostpone = typeof cacheEntry.value.postponed === 'string';
          if (
            isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest &&
            (!didPostpone || isPrefetchRSCRequest)
          ) {
            if (!isMinimalMode) {
              // set x-nextjs-cache header to match the header
              // we set for the image-optimizer
              res.setHeader(
                'x-nextjs-cache',
                isOnDemandRevalidate
                  ? 'REVALIDATED'
                  : cacheEntry.isMiss
                    ? 'MISS'
                    : cacheEntry.isStale
                      ? 'STALE'
                      : 'HIT',
              );
            }
            // Set a header used by the client router to signal the response is static
            // and should respect the `static` cache staleTime value.
            res.setHeader(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'NEXT_IS_PRERENDER_HEADER'
              ],
              '1',
            );
          }
          const { value: cachedData } = cacheEntry;
          // Coerce the cache control parameter from the render.
          let cacheControl;
          // If this is a resume request in minimal mode it is streamed with dynamic
          // content and should not be cached.
          if (minimalPostponed) {
            cacheControl = {
              revalidate: 0,
              expire: undefined,
            };
          } else if (isDynamicRSCRequest) {
            cacheControl = {
              revalidate: 0,
              expire: undefined,
            };
          } else if (!routeModule.isDev) {
            // If this is a preview mode request, we shouldn't cache it
            if (isDraftMode) {
              cacheControl = {
                revalidate: 0,
                expire: undefined,
              };
            } else if (!isSSG) {
              if (!res.getHeader('Cache-Control')) {
                cacheControl = {
                  revalidate: 0,
                  expire: undefined,
                };
              }
            } else if (cacheEntry.cacheControl) {
              // If the cache entry has a cache control with a revalidate value that's
              // a number, use it.
              if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                var _cacheEntry_cacheControl;
                if (cacheEntry.cacheControl.revalidate < 1) {
                  throw Object.defineProperty(
                    new Error(
                      `Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`,
                    ),
                    '__NEXT_ERROR_CODE',
                    {
                      value: 'E22',
                      enumerable: false,
                      configurable: true,
                    },
                  );
                }
                cacheControl = {
                  revalidate: cacheEntry.cacheControl.revalidate,
                  expire:
                    ((_cacheEntry_cacheControl = cacheEntry.cacheControl) ==
                    null
                      ? void 0
                      : _cacheEntry_cacheControl.expire) ??
                    nextConfig.expireTime,
                };
              } else {
                cacheControl = {
                  revalidate:
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'CACHE_ONE_YEAR'
                    ],
                  expire: undefined,
                };
              }
            }
          }
          cacheEntry.cacheControl = cacheControl;
          if (
            typeof segmentPrefetchHeader === 'string' &&
            (cachedData == null ? void 0 : cachedData.kind) ===
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'CachedRouteKind'
              ].APP_PAGE &&
            cachedData.segmentData
          ) {
            var _cachedData_headers1;
            // This is a prefetch request issued by the client Segment Cache. These
            // should never reach the application layer (lambda). We should either
            // respond from the cache (HIT) or respond with 204 No Content (MISS).
            // Set a header to indicate that PPR is enabled for this route. This
            // lets the client distinguish between a regular cache miss and a cache
            // miss due to PPR being disabled. In other contexts this header is used
            // to indicate that the response contains dynamic data, but here we're
            // only using it to indicate that the feature is enabled — the segment
            // response itself contains whether the data is dynamic.
            res.setHeader(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'NEXT_DID_POSTPONE_HEADER'
              ],
              '2',
            );
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags =
              (_cachedData_headers1 = cachedData.headers) == null
                ? void 0
                : _cachedData_headers1[
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'NEXT_CACHE_TAGS_HEADER'
                    ]
                  ];
            if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
              res.setHeader(
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'NEXT_CACHE_TAGS_HEADER'
                ],
                tags,
              );
            }
            const matchedSegment = cachedData.segmentData.get(
              segmentPrefetchHeader,
            );
            if (matchedSegment !== undefined) {
              // Cache hit
              return (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'sendRenderResult'
              ])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result:
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'default'
                  ].fromStatic(
                    matchedSegment,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'RSC_CONTENT_TYPE_HEADER'
                    ],
                  ),
                cacheControl: cacheEntry.cacheControl,
              });
            }
            // Cache miss. Either a cache entry for this route has not been generated
            // (which technically should not be possible when PPR is enabled, because
            // at a minimum there should always be a fallback entry) or there's no
            // match for the requested segment. Respond with a 204 No Content. We
            // don't bother to respond with 404, because these requests are only
            // issued as part of a prefetch.
            res.statusCode = 204;
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'sendRenderResult'
            ])({
              req,
              res,
              generateEtags: nextConfig.generateEtags,
              poweredByHeader: nextConfig.poweredByHeader,
              result:
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'default'
                ].EMPTY,
              cacheControl: cacheEntry.cacheControl,
            });
          }
          // If there's a callback for `onCacheEntry`, call it with the cache entry
          // and the revalidate options. If we support RDC for Navigations, we
          // prefer the `onCacheEntryV2` callback. Once RDC for Navigations is the
          // default, we can remove the fallback to `onCacheEntry` as
          // `onCacheEntryV2` is now fully supported.
          const onCacheEntry = supportsRDCForNavigations
            ? ((0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getRequestMeta'
              ])(req, 'onCacheEntryV2') ??
              (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getRequestMeta'
              ])(req, 'onCacheEntry'))
            : (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getRequestMeta'
              ])(req, 'onCacheEntry');
          if (onCacheEntry) {
            const finished = await onCacheEntry(cacheEntry, {
              url:
                (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'getRequestMeta'
                ])(req, 'initURL') ?? req.url,
            });
            if (finished) return null;
          }
          if (cachedData.headers) {
            const headers = {
              ...cachedData.headers,
            };
            if (!isMinimalMode || !isSSG) {
              delete headers[
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'NEXT_CACHE_TAGS_HEADER'
                ]
              ];
            }
            for (let [key, value] of Object.entries(headers)) {
              if (typeof value === 'undefined') continue;
              if (Array.isArray(value)) {
                for (const v of value) {
                  res.appendHeader(key, v);
                }
              } else if (typeof value === 'number') {
                value = value.toString();
                res.appendHeader(key, value);
              } else {
                res.appendHeader(key, value);
              }
            }
          }
          // Add the cache tags header to the response if it exists and we're in
          // minimal mode while rendering a static page.
          const tags =
            (_cachedData_headers = cachedData.headers) == null
              ? void 0
              : _cachedData_headers[
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'NEXT_CACHE_TAGS_HEADER'
                  ]
                ];
          if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
            res.setHeader(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'NEXT_CACHE_TAGS_HEADER'
              ],
              tags,
            );
          }
          // If the request is a data request, then we shouldn't set the status code
          // from the response because it should always be 200. This should be gated
          // behind the experimental PPR flag.
          if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
            res.statusCode = cachedData.status;
          }
          // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
          if (
            !isMinimalMode &&
            cachedData.status &&
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'RedirectStatusCode'
            ][cachedData.status] &&
            isRSCRequest
          ) {
            res.statusCode = 200;
          }
          // Mark that the request did postpone.
          if (didPostpone && !isDynamicRSCRequest) {
            res.setHeader(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'NEXT_DID_POSTPONE_HEADER'
              ],
              '1',
            );
          }
          // we don't go through this block when preview mode is true
          // as preview mode is a dynamic request (bypasses cache) and doesn't
          // generate both HTML and payloads in the same request so continue to just
          // return the generated payload
          if (isRSCRequest && !isDraftMode) {
            // If this is a dynamic RSC request, then stream the response.
            if (typeof cachedData.rscData === 'undefined') {
              // If the response is not an RSC response, then we can't serve it.
              if (
                cachedData.html.contentType !==
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'RSC_CONTENT_TYPE_HEADER'
                ]
              ) {
                if (nextConfig.cacheComponents) {
                  res.statusCode = 404;
                  return (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'sendRenderResult'
                  ])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result:
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'default'
                      ].EMPTY,
                    cacheControl: cacheEntry.cacheControl,
                  });
                } else {
                  // Otherwise this case is not expected.
                  throw Object.defineProperty(
                    new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'InvariantError'
                    ](
                      `Expected RSC response, got ${cachedData.html.contentType}`,
                    ),
                    '__NEXT_ERROR_CODE',
                    {
                      value: 'E789',
                      enumerable: false,
                      configurable: true,
                    },
                  );
                }
              }
              return (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'sendRenderResult'
              ])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: cachedData.html,
                cacheControl: cacheEntry.cacheControl,
              });
            }
            // As this isn't a prefetch request, we should serve the static flight
            // data.
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'sendRenderResult'
            ])({
              req,
              res,
              generateEtags: nextConfig.generateEtags,
              poweredByHeader: nextConfig.poweredByHeader,
              result:
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'default'
                ].fromStatic(
                  cachedData.rscData,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'RSC_CONTENT_TYPE_HEADER'
                  ],
                ),
              cacheControl: cacheEntry.cacheControl,
            });
          }
          // This is a request for HTML data.
          const body = cachedData.html;
          // If there's no postponed state, we should just serve the HTML. This
          // should also be the case for a resume request because it's completed
          // as a server render (rather than a static render).
          if (!didPostpone || isMinimalMode || isRSCRequest) {
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if (
              ('TURBOPACK compile-time falsy', 0) //TURBOPACK unreachable
            );
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'sendRenderResult'
            ])({
              req,
              res,
              generateEtags: nextConfig.generateEtags,
              poweredByHeader: nextConfig.poweredByHeader,
              result: body,
              cacheControl: cacheEntry.cacheControl,
            });
          }
          // If we're debugging the static shell or the dynamic API accesses, we
          // should just serve the HTML without resuming the render. The returned
          // HTML will be the static shell so all the Dynamic API's will be used
          // during static generation.
          if (isDebugStaticShell || isDebugDynamicAccesses) {
            // Since we're not resuming the render, we need to at least add the
            // closing body and html tags to create valid HTML.
            body.push(
              new ReadableStream({
                start(controller) {
                  controller.enqueue(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      'ENCODED_TAGS'
                    ].CLOSED.BODY_AND_HTML,
                  );
                  controller.close();
                },
              }),
            );
            return (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'sendRenderResult'
            ])({
              req,
              res,
              generateEtags: nextConfig.generateEtags,
              poweredByHeader: nextConfig.poweredByHeader,
              result: body,
              cacheControl: {
                revalidate: 0,
                expire: undefined,
              },
            });
          }
          // If we're in test mode, we should add a sentinel chunk to the response
          // that's between the static and dynamic parts so we can compare the
          // chunks and add assertions.
          if (
            ('TURBOPACK compile-time falsy', 0) //TURBOPACK unreachable
          );
          // This request has postponed, so let's create a new transformer that the
          // dynamic data can pipe to that will attach the dynamic data to the end
          // of the response.
          const transformer = new TransformStream();
          body.push(transformer.readable);
          // Perform the render again, but this time, provide the postponed state.
          // We don't await because we want the result to start streaming now, and
          // we've already chained the transformer's readable to the render result.
          doRender({
            span,
            postponed: cachedData.postponed,
            // This is a resume render, not a fallback render, so we don't need to
            // set this.
            fallbackRouteParams: null,
            forceStaticRender: false,
          })
            .then(async (result) => {
              var _result_value;
              if (!result) {
                throw Object.defineProperty(
                  new Error('Invariant: expected a result to be returned'),
                  '__NEXT_ERROR_CODE',
                  {
                    value: 'E463',
                    enumerable: false,
                    configurable: true,
                  },
                );
              }
              if (
                ((_result_value = result.value) == null
                  ? void 0
                  : _result_value.kind) !==
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'CachedRouteKind'
                ].APP_PAGE
              ) {
                var _result_value1;
                throw Object.defineProperty(
                  new Error(
                    `Invariant: expected a page response, got ${((_result_value1 = result.value)) == null ? void 0 : _result_value1.kind}`,
                  ),
                  '__NEXT_ERROR_CODE',
                  {
                    value: 'E305',
                    enumerable: false,
                    configurable: true,
                  },
                );
              }
              // Pipe the resume result to the transformer.
              await result.value.html.pipeTo(transformer.writable);
            })
            .catch((err) => {
              // An error occurred during piping or preparing the render, abort
              // the transformers writer so we can terminate the stream.
              transformer.writable.abort(err).catch((e) => {
                console.error("couldn't abort transformer", e);
              });
            });
          return (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'sendRenderResult'
          ])({
            req,
            res,
            generateEtags: nextConfig.generateEtags,
            poweredByHeader: nextConfig.poweredByHeader,
            result: body,
            // We don't want to cache the response if it has postponed data because
            // the response being sent to the client it's dynamic parts are streamed
            // to the client on the same request.
            cacheControl: {
              revalidate: 0,
              expire: undefined,
            },
          });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
          await handleResponse(activeSpan);
        } else {
          return await tracer.withPropagatedContext(req.headers, () =>
            tracer.trace(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'BaseServerSpan'
              ].handleRequest,
              {
                spanName: `${method} ${srcPage}`,
                kind: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'SpanKind'
                ].SERVER,
                attributes: {
                  'http.method': method,
                  'http.target': req.url,
                },
              },
              handleResponse,
            ),
          );
        }
      } catch (err) {
        if (
          !(
            err instanceof
            __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__[
              'NoFallbackError'
            ]
          )
        ) {
          const silenceLog = false;
          await routeModule.onRequestError(
            req,
            err,
            {
              routerKind: 'App Router',
              routePath: srcPage,
              routeType: 'render',
              revalidateReason: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                'getRevalidateReason'
              ])({
                isStaticGeneration: isSSG,
                isOnDemandRevalidate,
              }),
            },
            silenceLog,
            routerServerContext,
          );
        }
        // rethrow so that we can handle serving error page
        throw err;
      }
    }
    // TODO: omit this from production builds, only test builds should include it
    /**
     * Creates a readable stream that emits a PPR boundary sentinel.
     *
     * @returns A readable stream that emits a PPR boundary sentinel.
     */ function createPPRBoundarySentinel() {
      return new ReadableStream({
        start(controller) {
          controller.enqueue(
            new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'),
          );
          controller.close();
        },
      });
    } //# sourceMappingURL=app-page.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/templates/app-page.js?page=/about/page { GLOBAL_ERROR_MODULE => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/Documents/priya-profile/priya-new-site/app/favicon.ico.mjs { IMAGE => \\"[project]/Documents/priya-profile/priya-new-site/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Documents/priya-profile/priya-new-site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Documents/priya-profile/priya-new-site/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/Documents/priya-profile/priya-new-site/app/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      'ClientPageRoot',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'ClientPageRoot'
        ],
      'ClientSegmentRoot',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'ClientSegmentRoot'
        ],
      'Fragment',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'Fragment'
        ],
      'GlobalError',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__[
          'default'
        ],
      'HTTPAccessFallbackBoundary',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'HTTPAccessFallbackBoundary'
        ],
      'LayoutRouter',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'LayoutRouter'
        ],
      'Postpone',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'Postpone'
        ],
      'RenderFromTemplateContext',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'RenderFromTemplateContext'
        ],
      'RootLayoutBoundary',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'RootLayoutBoundary'
        ],
      'SegmentViewNode',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'SegmentViewNode'
        ],
      'SegmentViewStateNode',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'SegmentViewStateNode'
        ],
      '__next_app__',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$about$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$about$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
          '__next_app__'
        ],
      'actionAsyncStorage',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'actionAsyncStorage'
        ],
      'captureOwnerStack',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'captureOwnerStack'
        ],
      'collectSegmentData',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'collectSegmentData'
        ],
      'createElement',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'createElement'
        ],
      'createMetadataComponents',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'createMetadataComponents'
        ],
      'createPrerenderParamsForClientSegment',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'createPrerenderParamsForClientSegment'
        ],
      'createPrerenderSearchParamsForClientPage',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'createPrerenderSearchParamsForClientPage'
        ],
      'createServerParamsForServerSegment',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'createServerParamsForServerSegment'
        ],
      'createServerSearchParamsForServerPage',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'createServerSearchParamsForServerPage'
        ],
      'createTemporaryReferenceSet',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'createTemporaryReferenceSet'
        ],
      'decodeAction',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'decodeAction'
        ],
      'decodeFormState',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'decodeFormState'
        ],
      'decodeReply',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'decodeReply'
        ],
      'handler',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$about$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$about$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
          'handler'
        ],
      'patchFetch',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'patchFetch'
        ],
      'preconnect',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'preconnect'
        ],
      'preloadFont',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'preloadFont'
        ],
      'preloadStyle',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'preloadStyle'
        ],
      'prerender',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'prerender'
        ],
      'renderToReadableStream',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'renderToReadableStream'
        ],
      'routeModule',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$about$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$about$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
          'routeModule'
        ],
      'serverHooks',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'serverHooks'
        ],
      'taintObjectReference',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'taintObjectReference'
        ],
      'workAsyncStorage',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'workAsyncStorage'
        ],
      'workUnitAsyncStorage',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__[
          'workUnitAsyncStorage'
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$about$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$about$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/templates/app-page.js?page=/about/page { GLOBAL_ERROR_MODULE => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/Documents/priya-profile/priya-new-site/app/favicon.ico.mjs { IMAGE => \\"[project]/Documents/priya-profile/priya-new-site/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Documents/priya-profile/priya-new-site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Documents/priya-profile/priya-new-site/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/Documents/priya-profile/priya-new-site/app/about/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)',
      );
  },
];

//# sourceMappingURL=82d99_9d6fe47a._.js.map
