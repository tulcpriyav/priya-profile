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
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/templates/app-page.js?page=/stats/page { GLOBAL_ERROR_MODULE => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/Documents/priya-profile/priya-new-site/app/favicon.ico.mjs { IMAGE => \\"[project]/Documents/priya-profile/priya-new-site/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Documents/priya-profile/priya-new-site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Documents/priya-profile/priya-new-site/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/Documents/priya-profile/priya-new-site/app/stats/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>',
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
        '[project]/Documents/priya-profile/priya-new-site/app/stats/page.tsx [app-rsc] (ecmascript, Next.js Server Component)',
      );
    // We inject the tree and pages here so that we can use them in the route
    // module.
    const tree = [
      '',
      {
        children: [
          'stats',
          {
            children: [
              '__PAGE__',
              {},
              {
                metadata: {},
                page: [
                  __TURBOPACK__page__$23$6__,
                  '[project]/Documents/priya-profile/priya-new-site/app/stats/page.tsx',
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
          page: '/stats/page',
          pathname: '/stats',
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
      let srcPage = '/stats/page';
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
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/templates/app-page.js?page=/stats/page { GLOBAL_ERROR_MODULE => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/Documents/priya-profile/priya-new-site/app/favicon.ico.mjs { IMAGE => \\"[project]/Documents/priya-profile/priya-new-site/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Documents/priya-profile/priya-new-site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Documents/priya-profile/priya-new-site/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/Documents/priya-profile/priya-new-site/app/stats/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript)',
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$stats$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$stats$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$stats$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$stats$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$stats$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$stats$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__[
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
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$stats$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$app$2f$stats$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/esm/build/templates/app-page.js?page=/stats/page { GLOBAL_ERROR_MODULE => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/Documents/priya-profile/priya-new-site/app/favicon.ico.mjs { IMAGE => \\"[project]/Documents/priya-profile/priya-new-site/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/Documents/priya-profile/priya-new-site/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/Documents/priya-profile/priya-new-site/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/Documents/priya-profile/priya-new-site/app/stats/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>',
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

//# sourceMappingURL=82d99_c578e645._.js.map
