(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === 'object' ? document.currentScript : undefined,
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_without_properties_loose.cjs [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    function _object_without_properties_loose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    exports._ = _object_without_properties_loose;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_without_properties.cjs [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var _object_without_properties_loose = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_without_properties_loose.cjs [app-client] (ecmascript)',
    );
    function _object_without_properties(source, excluded) {
      if (source == null) return {};
      var target = _object_without_properties_loose._(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    exports._ = _object_without_properties;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var _type_of = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)',
    );
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    0 &&
      (module.exports = {
        cancelIdleCallback: null,
        requestIdleCallback: null,
      });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name],
        });
    }
    _export(exports, {
      cancelIdleCallback: function cancelIdleCallback1() {
        return cancelIdleCallback;
      },
      requestIdleCallback: function requestIdleCallback1() {
        return requestIdleCallback;
      },
    });
    var requestIdleCallback =
      (typeof self !== 'undefined' &&
        self.requestIdleCallback &&
        self.requestIdleCallback.bind(window)) ||
      function (cb) {
        var start = Date.now();
        return self.setTimeout(function () {
          cb({
            didTimeout: false,
            timeRemaining: function timeRemaining() {
              return Math.max(0, 50 - (Date.now() - start));
            },
          });
        }, 1);
      };
    var cancelIdleCallback =
      (typeof self !== 'undefined' &&
        self.cancelIdleCallback &&
        self.cancelIdleCallback.bind(window)) ||
      function (id) {
        return clearTimeout(id);
      };
    if (
      (typeof exports.default === 'function' ||
        (_type_of._(exports.default) === 'object' &&
          exports.default !== null)) &&
      typeof exports.default.__esModule === 'undefined'
    ) {
      Object.defineProperty(exports.default, '__esModule', {
        value: true,
      });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    } //# sourceMappingURL=request-idle-callback.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/script.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var _object_spread = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)',
    );
    var _object_spread_props = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)',
    );
    var _object_without_properties = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_without_properties.cjs [app-client] (ecmascript)',
    );
    var _to_consumable_array = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)',
    );
    var _type_of = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)',
    );
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    0 &&
      (module.exports = {
        default: null,
        handleClientScriptLoad: null,
        initScriptLoader: null,
      });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name],
        });
    }
    _export(exports, {
      default: function _default1() {
        return _default;
      },
      handleClientScriptLoad: function handleClientScriptLoad1() {
        return handleClientScriptLoad;
      },
      initScriptLoader: function initScriptLoader1() {
        return initScriptLoader;
      },
    });
    var _interop_require_default = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)',
    );
    var _interop_require_wildcard = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)',
    );
    var _jsxruntime = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)',
    );
    var _reactdom = /*#__PURE__*/ _interop_require_default._(
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)',
      ),
    );
    var _react = /*#__PURE__*/ _interop_require_wildcard._(
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      ),
    );
    var _headmanagercontextsharedruntime = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)',
    );
    var _setattributesfromprops = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)',
    );
    var _requestidlecallback = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)',
    );
    var ScriptCache = new Map();
    var LoadCache = new Set();
    var insertStylesheets = function (stylesheets) {
      // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
      //
      // Using ReactDOM.preinit to feature detect appDir and inject styles
      // Stylesheets might have already been loaded if initialized with Script component
      // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
      // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
      if (_reactdom.default.preinit) {
        stylesheets.forEach(function (stylesheet) {
          _reactdom.default.preinit(stylesheet, {
            as: 'style',
          });
        });
        return;
      }
      // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
      //
      // We use this function to load styles when appdir is not detected
      // TODO: Use React float APIs to load styles once available for pages dir
      if (typeof window !== 'undefined') {
        var head = document.head;
        stylesheets.forEach(function (stylesheet) {
          var link = document.createElement('link');
          link.type = 'text/css';
          link.rel = 'stylesheet';
          link.href = stylesheet;
          head.appendChild(link);
        });
      }
    };
    var loadScript = function (props) {
      var src = props.src,
        id = props.id,
        _props_onLoad = props.onLoad,
        onLoad = _props_onLoad === void 0 ? function () {} : _props_onLoad,
        _props_onReady = props.onReady,
        onReady = _props_onReady === void 0 ? null : _props_onReady,
        dangerouslySetInnerHTML = props.dangerouslySetInnerHTML,
        _props_children = props.children,
        children = _props_children === void 0 ? '' : _props_children,
        _props_strategy = props.strategy,
        strategy =
          _props_strategy === void 0 ? 'afterInteractive' : _props_strategy,
        onError = props.onError,
        stylesheets = props.stylesheets;
      var cacheKey = id || src;
      // Script has already loaded
      if (cacheKey && LoadCache.has(cacheKey)) {
        return;
      }
      // Contents of this script are already loading/loaded
      if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
      }
      /** Execute after the script first loaded */ var afterLoad = function () {
        // Run onReady for the first time after load event
        if (onReady) {
          onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
      };
      var el = document.createElement('script');
      var loadPromise = new Promise(function (resolve, reject) {
        el.addEventListener('load', function (e) {
          resolve();
          if (onLoad) {
            onLoad.call(this, e);
          }
          afterLoad();
        });
        el.addEventListener('error', function (e) {
          reject(e);
        });
      }).catch(function (e) {
        if (onError) {
          onError(e);
        }
      });
      if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
      } else if (children) {
        el.textContent =
          typeof children === 'string'
            ? children
            : Array.isArray(children)
              ? children.join('')
              : '';
        afterLoad();
      } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
      }
      (0, _setattributesfromprops.setAttributesFromProps)(el, props);
      if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
      }
      el.setAttribute('data-nscript', strategy);
      // Load styles associated with this script
      if (stylesheets) {
        insertStylesheets(stylesheets);
      }
      document.body.appendChild(el);
    };
    function handleClientScriptLoad(props) {
      var _props_strategy = props.strategy,
        strategy =
          _props_strategy === void 0 ? 'afterInteractive' : _props_strategy;
      if (strategy === 'lazyOnload') {
        window.addEventListener('load', function () {
          (0, _requestidlecallback.requestIdleCallback)(function () {
            return loadScript(props);
          });
        });
      } else {
        loadScript(props);
      }
    }
    function loadLazyScript(props) {
      if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(function () {
          return loadScript(props);
        });
      } else {
        window.addEventListener('load', function () {
          (0, _requestidlecallback.requestIdleCallback)(function () {
            return loadScript(props);
          });
        });
      }
    }
    function addBeforeInteractiveToCache() {
      var scripts = _to_consumable_array
        ._(document.querySelectorAll('[data-nscript="beforeInteractive"]'))
        .concat(
          _to_consumable_array._(
            document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ),
        );
      scripts.forEach(function (script) {
        var cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
      });
    }
    function initScriptLoader(scriptLoaderItems) {
      scriptLoaderItems.forEach(handleClientScriptLoad);
      addBeforeInteractiveToCache();
    }
    /**
     * Load a third-party scripts in an optimized way.
     *
     * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
     */ function Script(props) {
      var id = props.id,
        _props_src = props.src,
        src = _props_src === void 0 ? '' : _props_src,
        _props_onLoad = props.onLoad,
        onLoad = _props_onLoad === void 0 ? function () {} : _props_onLoad,
        _props_onReady = props.onReady,
        onReady = _props_onReady === void 0 ? null : _props_onReady,
        _props_strategy = props.strategy,
        strategy =
          _props_strategy === void 0 ? 'afterInteractive' : _props_strategy,
        onError = props.onError,
        stylesheets = props.stylesheets,
        restProps = _object_without_properties._(props, [
          'id',
          'src',
          'onLoad',
          'onReady',
          'strategy',
          'onError',
          'stylesheets',
        ]);
      // Context is available only during SSR
      var _ref = (0, _react.useContext)(
          _headmanagercontextsharedruntime.HeadManagerContext,
        ),
        updateScripts = _ref.updateScripts,
        scripts = _ref.scripts,
        getIsSsr = _ref.getIsSsr,
        appDir = _ref.appDir,
        nonce = _ref.nonce;
      // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
      nonce = restProps.nonce || nonce;
      /**
       * - First mount:
       *   1. The useEffect for onReady executes
       *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
       *      onReady is skipped, set hasOnReadyEffectCalled.current to true
       *   3. The useEffect for loadScript executes
       *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
       *      Once the script is loaded, the onLoad and onReady will be called by then
       *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
       *   5. The useEffect for onReady executes again
       *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
       *   7. The useEffect for loadScript executes again
       *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
       *
       * - Second mount:
       *   1. The useEffect for onReady executes
       *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
       *      onReady is called, set hasOnReadyEffectCalled.current to true
       *   3. The useEffect for loadScript executes
       *   4. The script is already loaded, loadScript bails out
       *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
       *   5. The useEffect for onReady executes again
       *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
       *   7. The useEffect for loadScript executes again
       *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
       */ var hasOnReadyEffectCalled = (0, _react.useRef)(false);
      (0, _react.useEffect)(
        function () {
          var cacheKey = id || src;
          if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
              onReady();
            }
            hasOnReadyEffectCalled.current = true;
          }
        },
        [onReady, id, src],
      );
      var hasLoadScriptEffectCalled = (0, _react.useRef)(false);
      (0, _react.useEffect)(
        function () {
          if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
              loadScript(props);
            } else if (strategy === 'lazyOnload') {
              loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
          }
        },
        [props, strategy],
      );
      if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
          scripts[strategy] = (scripts[strategy] || []).concat([
            _object_spread_props._(
              _object_spread._(
                {
                  id: id,
                  src: src,
                  onLoad: onLoad,
                  onReady: onReady,
                  onError: onError,
                },
                restProps,
              ),
              {
                nonce: nonce,
              },
            ),
          ]);
          updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
          // Script has already loaded during SSR
          LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
          loadScript(
            _object_spread_props._(_object_spread._({}, props), {
              nonce: nonce,
            }),
          );
        }
      }
      // For the app directory, we need React Float to preload these scripts.
      if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
          stylesheets.forEach(function (styleSrc) {
            _reactdom.default.preinit(styleSrc, {
              as: 'style',
            });
          });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
          if (!src) {
            // For inlined scripts, we put the content in `children`.
            if (restProps.dangerouslySetInnerHTML) {
              // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
              restProps.children = restProps.dangerouslySetInnerHTML.__html;
              delete restProps.dangerouslySetInnerHTML;
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsx)('script', {
              nonce: nonce,
              dangerouslySetInnerHTML: {
                __html: '(self.__next_s=self.__next_s||[]).push('.concat(
                  JSON.stringify([
                    0,
                    _object_spread_props._(_object_spread._({}, restProps), {
                      id: id,
                    }),
                  ]),
                  ')',
                ),
              },
            });
          } else {
            // @ts-ignore
            _reactdom.default.preload(
              src,
              restProps.integrity
                ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce: nonce,
                    crossOrigin: restProps.crossOrigin,
                  }
                : {
                    as: 'script',
                    nonce: nonce,
                    crossOrigin: restProps.crossOrigin,
                  },
            );
            return /*#__PURE__*/ (0, _jsxruntime.jsx)('script', {
              nonce: nonce,
              dangerouslySetInnerHTML: {
                __html: '(self.__next_s=self.__next_s||[]).push('.concat(
                  JSON.stringify([
                    src,
                    _object_spread_props._(_object_spread._({}, restProps), {
                      id: id,
                    }),
                  ]),
                  ')',
                ),
              },
            });
          }
        } else if (strategy === 'afterInteractive') {
          if (src) {
            // @ts-ignore
            _reactdom.default.preload(
              src,
              restProps.integrity
                ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce: nonce,
                    crossOrigin: restProps.crossOrigin,
                  }
                : {
                    as: 'script',
                    nonce: nonce,
                    crossOrigin: restProps.crossOrigin,
                  },
            );
          }
        }
      }
      return null;
    }
    Object.defineProperty(Script, '__nextScript', {
      value: true,
    });
    var _default = Script;
    if (
      (typeof exports.default === 'function' ||
        (_type_of._(exports.default) === 'object' &&
          exports.default !== null)) &&
      typeof exports.default.__esModule === 'undefined'
    ) {
      Object.defineProperty(exports.default, '__esModule', {
        value: true,
      });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    } //# sourceMappingURL=script.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _array_with_holes]);
    function _array_with_holes(arr) {
      if (Array.isArray(arr)) return arr;
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _iterable_to_array_limit]);
    function _iterable_to_array_limit(arr, i) {
      var _i =
        arr == null
          ? null
          : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
            arr['@@iterator'];
      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i['return'] != null) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _non_iterable_rest]);
    function _non_iterable_rest() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _array_like_to_array]);
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _unsupported_iterable_to_array]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)',
      );
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o) return;
      if (typeof o === 'string')
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === 'Object' && o.constructor) n = o.constructor.name;
      if (n === 'Map' || n === 'Set') return Array.from(n);
      if (
        n === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(o, minLen);
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _sliced_to_array]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)',
      );
    function _sliced_to_array(arr, i) {
      return (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(arr) ||
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(arr, i) ||
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(arr, i) ||
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])()
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
      );
    /**
     * @license React
     * react-jsx-dev-runtime.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ ('use strict');
    var _type_of = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)',
    );
    'production' !== ('TURBOPACK compile-time value', 'development') &&
      (function () {
        function getComponentNameFromType(type) {
          if (null == type) return null;
          if ('function' === typeof type)
            return type.$$typeof === REACT_CLIENT_REFERENCE
              ? null
              : type.displayName || type.name || null;
          if ('string' === typeof type) return type;
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return 'Fragment';
            case REACT_PROFILER_TYPE:
              return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
            case REACT_ACTIVITY_TYPE:
              return 'Activity';
            case REACT_VIEW_TRANSITION_TYPE:
              return 'ViewTransition';
          }
          if (
            'object' ===
            (typeof type === 'undefined' ? 'undefined' : _type_of._(type))
          )
            switch (
              ('number' === typeof type.tag &&
                console.error(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                ),
              type.$$typeof)
            ) {
              case REACT_PORTAL_TYPE:
                return 'Portal';
              case REACT_CONTEXT_TYPE:
                return type.displayName || 'Context';
              case REACT_CONSUMER_TYPE:
                return (type._context.displayName || 'Context') + '.Consumer';
              case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type ||
                  ((type = innerType.displayName || innerType.name || ''),
                  (type =
                    '' !== type ? 'ForwardRef(' + type + ')' : 'ForwardRef'));
                return type;
              case REACT_MEMO_TYPE:
                return (
                  (innerType = type.displayName || null),
                  null !== innerType
                    ? innerType
                    : getComponentNameFromType(type.type) || 'Memo'
                );
              case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                  return getComponentNameFromType(type(innerType));
                } catch (x) {}
            }
          return null;
        }
        function testStringCoercion(value) {
          return '' + value;
        }
        function checkKeyStringCoercion(value) {
          try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
          } catch (e) {
            JSCompiler_inline_result = !0;
          }
          if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 =
              ('function' === typeof Symbol &&
                Symbol.toStringTag &&
                value[Symbol.toStringTag]) ||
              value.constructor.name ||
              'Object';
            JSCompiler_temp_const.call(
              JSCompiler_inline_result,
              'The provided key is an unsupported type %s. This value must be coerced to a string before using it here.',
              JSCompiler_inline_result$jscomp$0,
            );
            return testStringCoercion(value);
          }
        }
        function getTaskName(type) {
          if (type === REACT_FRAGMENT_TYPE) return '<>';
          if (
            'object' ===
              (typeof type === 'undefined' ? 'undefined' : _type_of._(type)) &&
            null !== type &&
            type.$$typeof === REACT_LAZY_TYPE
          )
            return '<...>';
          try {
            var name = getComponentNameFromType(type);
            return name ? '<' + name + '>' : '<...>';
          } catch (x) {
            return '<...>';
          }
        }
        function getOwner() {
          var dispatcher = ReactSharedInternals.A;
          return null === dispatcher ? null : dispatcher.getOwner();
        }
        function UnknownOwner() {
          return Error('react-stack-top-frame');
        }
        function hasValidKey(config) {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return !1;
          }
          return void 0 !== config.key;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          function warnAboutAccessingKey() {
            specialPropKeyWarningShown ||
              ((specialPropKeyWarningShown = !0),
              console.error(
                '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)',
                displayName,
              ));
          }
          warnAboutAccessingKey.isReactWarning = !0;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: !0,
          });
        }
        function elementRefGetterWithDeprecationWarning() {
          var componentName = getComponentNameFromType(this.type);
          didWarnAboutElementRef[componentName] ||
            ((didWarnAboutElementRef[componentName] = !0),
            console.error(
              'Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.',
            ));
          componentName = this.props.ref;
          return void 0 !== componentName ? componentName : null;
        }
        function ReactElement(type, key, props, owner, debugStack, debugTask) {
          var refProp = props.ref;
          type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner,
          };
          null !== (void 0 !== refProp ? refProp : null)
            ? Object.defineProperty(type, 'ref', {
                enumerable: !1,
                get: elementRefGetterWithDeprecationWarning,
              })
            : Object.defineProperty(type, 'ref', {
                enumerable: !1,
                value: null,
              });
          type._store = {};
          Object.defineProperty(type._store, 'validated', {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0,
          });
          Object.defineProperty(type, '_debugInfo', {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null,
          });
          Object.defineProperty(type, '_debugStack', {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack,
          });
          Object.defineProperty(type, '_debugTask', {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask,
          });
          Object.freeze && (Object.freeze(type.props), Object.freeze(type));
          return type;
        }
        function jsxDEVImpl(
          type,
          config,
          maybeKey,
          isStaticChildren,
          debugStack,
          debugTask,
        ) {
          var children = config.children;
          if (void 0 !== children)
            if (isStaticChildren)
              if (isArrayImpl(children)) {
                for (
                  isStaticChildren = 0;
                  isStaticChildren < children.length;
                  isStaticChildren++
                )
                  validateChildKeys(children[isStaticChildren]);
                Object.freeze && Object.freeze(children);
              } else
                console.error(
                  'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                );
            else validateChildKeys(children);
          if (hasOwnProperty.call(config, 'key')) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function (k) {
              return 'key' !== k;
            });
            isStaticChildren =
              0 < keys.length
                ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}'
                : '{key: someKey}';
            didWarnAboutKeySpread[children + isStaticChildren] ||
              ((keys =
                0 < keys.length ? '{' + keys.join(': ..., ') + ': ...}' : '{}'),
              console.error(
                'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                isStaticChildren,
                children,
                keys,
                children,
              ),
              (didWarnAboutKeySpread[children + isStaticChildren] = !0));
          }
          children = null;
          void 0 !== maybeKey &&
            (checkKeyStringCoercion(maybeKey), (children = '' + maybeKey));
          hasValidKey(config) &&
            (checkKeyStringCoercion(config.key), (children = '' + config.key));
          if ('key' in config) {
            maybeKey = {};
            for (var propName in config)
              'key' !== propName && (maybeKey[propName] = config[propName]);
          } else maybeKey = config;
          children &&
            defineKeyPropWarningGetter(
              maybeKey,
              'function' === typeof type
                ? type.displayName || type.name || 'Unknown'
                : type,
            );
          return ReactElement(
            type,
            children,
            maybeKey,
            getOwner(),
            debugStack,
            debugTask,
          );
        }
        function validateChildKeys(node) {
          isValidElement(node)
            ? node._store && (node._store.validated = 1)
            : 'object' ===
                (typeof node === 'undefined'
                  ? 'undefined'
                  : _type_of._(node)) &&
              null !== node &&
              node.$$typeof === REACT_LAZY_TYPE &&
              ('fulfilled' === node._payload.status
                ? isValidElement(node._payload.value) &&
                  node._payload.value._store &&
                  (node._payload.value._store.validated = 1)
                : node._store && (node._store.validated = 1));
        }
        function isValidElement(object) {
          return (
            'object' ===
              (typeof object === 'undefined'
                ? 'undefined'
                : _type_of._(object)) &&
            null !== object &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }
        var React = __turbopack_context__.r(
            '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
          ),
          REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element'),
          REACT_PORTAL_TYPE = Symbol.for('react.portal'),
          REACT_FRAGMENT_TYPE = Symbol.for('react.fragment'),
          REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode'),
          REACT_PROFILER_TYPE = Symbol.for('react.profiler'),
          REACT_CONSUMER_TYPE = Symbol.for('react.consumer'),
          REACT_CONTEXT_TYPE = Symbol.for('react.context'),
          REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref'),
          REACT_SUSPENSE_TYPE = Symbol.for('react.suspense'),
          REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list'),
          REACT_MEMO_TYPE = Symbol.for('react.memo'),
          REACT_LAZY_TYPE = Symbol.for('react.lazy'),
          REACT_ACTIVITY_TYPE = Symbol.for('react.activity'),
          REACT_VIEW_TRANSITION_TYPE = Symbol.for('react.view_transition'),
          REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference'),
          ReactSharedInternals =
            React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          hasOwnProperty = Object.prototype.hasOwnProperty,
          isArrayImpl = Array.isArray,
          createTask = console.createTask
            ? console.createTask
            : function createTask() {
                return null;
              };
        React = {
          react_stack_bottom_frame: function react_stack_bottom_frame(
            callStackForError,
          ) {
            return callStackForError();
          },
        };
        var specialPropKeyWarningShown;
        var didWarnAboutElementRef = {};
        var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
          React,
          UnknownOwner,
        )();
        var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
        var didWarnAboutKeySpread = {};
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsxDEV = function (type, config, maybeKey, isStaticChildren) {
          var trackActualOwner =
            1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
          if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error('react-stack-top-frame');
            Error.stackTraceLimit = previousStackTraceLimit;
          } else debugStackDEV = unknownOwnerDebugStack;
          return jsxDEVImpl(
            type,
            config,
            maybeKey,
            isStaticChildren,
            debugStackDEV,
            trackActualOwner
              ? createTask(getTaskName(type))
              : unknownOwnerDebugTask,
          );
        };
      })();
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
      );
    ('use strict');
    if (
      ('TURBOPACK compile-time falsy', 0) //TURBOPACK unreachable
    );
    else {
      module.exports = __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)',
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var _sliced_to_array = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)',
    );
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    0 &&
      (module.exports = {
        assign: null,
        searchParamsToUrlQuery: null,
        urlQueryToSearchParams: null,
      });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name],
        });
    }
    _export(exports, {
      assign: function assign1() {
        return assign;
      },
      searchParamsToUrlQuery: function searchParamsToUrlQuery1() {
        return searchParamsToUrlQuery;
      },
      urlQueryToSearchParams: function urlQueryToSearchParams1() {
        return urlQueryToSearchParams;
      },
    });
    function searchParamsToUrlQuery(searchParams) {
      var query = {};
      var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
      try {
        for (
          var _iterator = searchParams.entries()[Symbol.iterator](), _step;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = true
        ) {
          var _step_value = _sliced_to_array._(_step.value, 2),
            key = _step_value[0],
            value = _step_value[1];
          var existing = query[key];
          if (typeof existing === 'undefined') {
            query[key] = value;
          } else if (Array.isArray(existing)) {
            existing.push(value);
          } else {
            query[key] = [existing, value];
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
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === 'string') {
        return param;
      }
      if (
        (typeof param === 'number' && !isNaN(param)) ||
        typeof param === 'boolean'
      ) {
        return String(param);
      } else {
        return '';
      }
    }
    function urlQueryToSearchParams(query) {
      var searchParams = new URLSearchParams();
      var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
      try {
        for (
          var _iterator = Object.entries(query)[Symbol.iterator](), _step;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = true
        ) {
          var _step_value = _sliced_to_array._(_step.value, 2),
            key = _step_value[0],
            value = _step_value[1];
          if (Array.isArray(value)) {
            var _iteratorNormalCompletion1 = true,
              _didIteratorError1 = false,
              _iteratorError1 = undefined;
            try {
              for (
                var _iterator1 = value[Symbol.iterator](), _step1;
                !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next())
                  .done);
                _iteratorNormalCompletion1 = true
              ) {
                var item = _step1.value;
                searchParams.append(key, stringifyUrlQueryParam(item));
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
          } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
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
      return searchParams;
    }
    function assign(target) {
      for (
        var _len = arguments.length,
          searchParamsList = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        searchParamsList[_key - 1] = arguments[_key];
      }
      var _iteratorNormalCompletion = true,
        _didIteratorError = false,
        _iteratorError = undefined;
      try {
        for (
          var _iterator = searchParamsList[Symbol.iterator](), _step;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = true
        ) {
          var searchParams = _step.value;
          var _iteratorNormalCompletion1 = true,
            _didIteratorError1 = false,
            _iteratorError1 = undefined;
          try {
            for (
              var _iterator1 = searchParams.keys()[Symbol.iterator](), _step1;
              !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done);
              _iteratorNormalCompletion1 = true
            ) {
              var key = _step1.value;
              target.delete(key);
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
          var _iteratorNormalCompletion2 = true,
            _didIteratorError2 = false,
            _iteratorError2 = undefined;
          try {
            for (
              var _iterator2 = searchParams.entries()[Symbol.iterator](),
                _step2;
              !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
              _iteratorNormalCompletion2 = true
            ) {
              var _step_value = _sliced_to_array._(_step2.value, 2),
                key1 = _step_value[0],
                value = _step_value[1];
              target.append(key1, value);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
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
      return target;
    } //# sourceMappingURL=querystring.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
      );
    // Format function modified from nodejs
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    ('use strict');
    var _type_of = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)',
    );
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    0 &&
      (module.exports = {
        formatUrl: null,
        formatWithValidation: null,
        urlObjectKeys: null,
      });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name],
        });
    }
    _export(exports, {
      formatUrl: function formatUrl1() {
        return formatUrl;
      },
      formatWithValidation: function formatWithValidation1() {
        return formatWithValidation;
      },
      urlObjectKeys: function urlObjectKeys1() {
        return urlObjectKeys;
      },
    });
    var _interop_require_wildcard = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)',
    );
    var _querystring = /*#__PURE__*/ _interop_require_wildcard._(
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)',
      ),
    );
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      var auth = urlObj.auth,
        hostname = urlObj.hostname;
      var protocol = urlObj.protocol || '';
      var pathname = urlObj.pathname || '';
      var hash = urlObj.hash || '';
      var query = urlObj.query || '';
      var host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host =
          auth +
          (~hostname.indexOf(':') ? '['.concat(hostname, ']') : hostname);
        if (urlObj.port) {
          host += ':' + urlObj.port;
        }
      }
      if (
        query &&
        (typeof query === 'undefined' ? 'undefined' : _type_of._(query)) ===
          'object'
      ) {
        query = String(_querystring.urlQueryToSearchParams(query));
      }
      var search = urlObj.search || (query && '?'.concat(query)) || '';
      if (protocol && !protocol.endsWith(':')) protocol += ':';
      if (
        urlObj.slashes ||
        ((!protocol || slashedProtocols.test(protocol)) && host !== false)
      ) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
      } else if (!host) {
        host = '';
      }
      if (hash && hash[0] !== '#') hash = '#' + hash;
      if (search && search[0] !== '?') search = '?' + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace('#', '%23');
      return ''
        .concat(protocol)
        .concat(host)
        .concat(pathname)
        .concat(search)
        .concat(hash);
    }
    var urlObjectKeys = [
      'auth',
      'hash',
      'host',
      'hostname',
      'href',
      'path',
      'pathname',
      'port',
      'protocol',
      'query',
      'search',
      'slashes',
    ];
    function formatWithValidation(url) {
      if (('TURBOPACK compile-time truthy', 1)) {
        if (
          url !== null &&
          (typeof url === 'undefined' ? 'undefined' : _type_of._(url)) ===
            'object'
        ) {
          Object.keys(url).forEach(function (key) {
            if (!urlObjectKeys.includes(key)) {
              console.warn(
                'Unknown key passed via urlObject into url.format: '.concat(
                  key,
                ),
              );
            }
          });
        }
      }
      return formatUrl(url);
    } //# sourceMappingURL=format-url.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var _type_of = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)',
    );
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    Object.defineProperty(exports, 'useMergedRef', {
      enumerable: true,
      get: function get() {
        return useMergedRef;
      },
    });
    var _react = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
    );
    function useMergedRef(refA, refB) {
      var cleanupA = (0, _react.useRef)(null);
      var cleanupB = (0, _react.useRef)(null);
      // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
      // (this happens often if the user doesn't pass a ref to Link/Form/Image)
      // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
      // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
      // (because it hasn't been updated for React 19)
      // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
      // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
      return (0, _react.useCallback)(
        function (current) {
          if (current === null) {
            var cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
              cleanupA.current = null;
              cleanupFnA();
            }
            var cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
              cleanupB.current = null;
              cleanupFnB();
            }
          } else {
            if (refA) {
              cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
              cleanupB.current = applyRef(refB, current);
            }
          }
        },
        [refA, refB],
      );
    }
    function applyRef(refA, current) {
      if (typeof refA === 'function') {
        var cleanup = refA(current);
        if (typeof cleanup === 'function') {
          return cleanup;
        } else {
          return function () {
            return refA(null);
          };
        }
      } else {
        refA.current = current;
        return function () {
          refA.current = null;
        };
      }
    }
    if (
      (typeof exports.default === 'function' ||
        (_type_of._(exports.default) === 'object' &&
          exports.default !== null)) &&
      typeof exports.default.__esModule === 'undefined'
    ) {
      Object.defineProperty(exports.default, '__esModule', {
        value: true,
      });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    } //# sourceMappingURL=use-merged-ref.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
      );
    ('use strict');
    var _async_to_generator = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_async_to_generator.cjs [app-client] (ecmascript)',
    );
    var _call_super = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_call_super.cjs [app-client] (ecmascript)',
    );
    var _class_call_check = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_class_call_check.cjs [app-client] (ecmascript)',
    );
    var _inherits = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_inherits.cjs [app-client] (ecmascript)',
    );
    var _to_consumable_array = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_to_consumable_array.cjs [app-client] (ecmascript)',
    );
    var _wrap_native_super = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_wrap_native_super.cjs [app-client] (ecmascript)',
    );
    var _ts_generator = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_ts_generator.cjs [app-client] (ecmascript)',
    );
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    0 &&
      (module.exports = {
        DecodeError: null,
        MiddlewareNotFoundError: null,
        MissingStaticPage: null,
        NormalizeError: null,
        PageNotFoundError: null,
        SP: null,
        ST: null,
        WEB_VITALS: null,
        execOnce: null,
        getDisplayName: null,
        getLocationOrigin: null,
        getURL: null,
        isAbsoluteUrl: null,
        isResSent: null,
        loadGetInitialProps: null,
        normalizeRepeatedSlashes: null,
        stringifyError: null,
      });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name],
        });
    }
    _export(exports, {
      DecodeError: function DecodeError1() {
        return DecodeError;
      },
      MiddlewareNotFoundError: function MiddlewareNotFoundError1() {
        return MiddlewareNotFoundError;
      },
      MissingStaticPage: function MissingStaticPage1() {
        return MissingStaticPage;
      },
      NormalizeError: function NormalizeError1() {
        return NormalizeError;
      },
      PageNotFoundError: function PageNotFoundError1() {
        return PageNotFoundError;
      },
      SP: function SP1() {
        return SP;
      },
      ST: function ST1() {
        return ST;
      },
      WEB_VITALS: function WEB_VITALS1() {
        return WEB_VITALS;
      },
      execOnce: function execOnce1() {
        return execOnce;
      },
      getDisplayName: function getDisplayName1() {
        return getDisplayName;
      },
      getLocationOrigin: function getLocationOrigin1() {
        return getLocationOrigin;
      },
      getURL: function getURL1() {
        return getURL;
      },
      isAbsoluteUrl: function isAbsoluteUrl1() {
        return isAbsoluteUrl;
      },
      isResSent: function isResSent1() {
        return isResSent;
      },
      loadGetInitialProps: function loadGetInitialProps1() {
        return loadGetInitialProps;
      },
      normalizeRepeatedSlashes: function normalizeRepeatedSlashes1() {
        return normalizeRepeatedSlashes;
      },
      stringifyError: function stringifyError1() {
        return stringifyError;
      },
    });
    var WEB_VITALS = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function execOnce(fn) {
      var used = false;
      var result;
      return function () {
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }
        if (!used) {
          used = true;
          result = fn.apply(void 0, _to_consumable_array._(args));
        }
        return result;
      };
    }
    // Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
    // Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = function (url) {
      return ABSOLUTE_URL_REGEX.test(url);
    };
    function getLocationOrigin() {
      var _window_location = window.location,
        protocol = _window_location.protocol,
        hostname = _window_location.hostname,
        port = _window_location.port;
      return ''
        .concat(protocol, '//')
        .concat(hostname)
        .concat(port ? ':' + port : '');
    }
    function getURL() {
      var href = window.location.href;
      var origin = getLocationOrigin();
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
      var urlParts = url.split('?');
      var urlNoQuery = urlParts[0];
      return (
        urlNoQuery // first we replace any non-encoded backslashes with forward
          // then normalize repeated forward slashes
          .replace(/\\/g, '/')
          .replace(/\/\/+/g, '/') +
        (urlParts[1] ? '?'.concat(urlParts.slice(1).join('?')) : '')
      );
    }
    function loadGetInitialProps(App, ctx) {
      return _async_to_generator._(function () {
        var _App_prototype, message, res, _tmp, props, message1;
        return _ts_generator._(this, function (_state) {
          switch (_state.label) {
            case 0:
              if (('TURBOPACK compile-time truthy', 1)) {
                if (
                  (_App_prototype = App.prototype) === null ||
                  _App_prototype === void 0
                    ? void 0
                    : _App_prototype.getInitialProps
                ) {
                  message = '"'.concat(
                    getDisplayName(App),
                    '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.',
                  );
                  throw Object.defineProperty(
                    new Error(message),
                    '__NEXT_ERROR_CODE',
                    {
                      value: 'E394',
                      enumerable: false,
                      configurable: true,
                    },
                  );
                }
              }
              // when called from _app `ctx` is nested in `ctx`
              res = ctx.res || (ctx.ctx && ctx.ctx.res);
              if (!!App.getInitialProps) return [3, 3];
              if (!(ctx.ctx && ctx.Component)) return [3, 2];
              _tmp = {};
              return [4, loadGetInitialProps(ctx.Component, ctx.ctx)];
            case 1:
              // @ts-ignore pageProps default
              return [2, ((_tmp.pageProps = _state.sent()), _tmp)];
            case 2:
              return [2, {}];
            case 3:
              return [4, App.getInitialProps(ctx)];
            case 4:
              props = _state.sent();
              if (res && isResSent(res)) {
                return [2, props];
              }
              if (!props) {
                message1 = '"'
                  .concat(
                    getDisplayName(App),
                    '.getInitialProps()" should resolve to an object. But found "',
                  )
                  .concat(props, '" instead.');
                throw Object.defineProperty(
                  new Error(message1),
                  '__NEXT_ERROR_CODE',
                  {
                    value: 'E394',
                    enumerable: false,
                    configurable: true,
                  },
                );
              }
              if (('TURBOPACK compile-time truthy', 1)) {
                if (Object.keys(props).length === 0 && !ctx.ctx) {
                  console.warn(
                    ''.concat(
                      getDisplayName(App),
                      ' returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps',
                    ),
                  );
                }
              }
              return [2, props];
          }
        });
      })();
    }
    var SP = typeof performance !== 'undefined';
    var ST =
      SP &&
      ['mark', 'measure', 'getEntriesByName'].every(function (method) {
        return typeof performance[method] === 'function';
      });
    var DecodeError = /*#__PURE__*/ (function (Error1) {
      _inherits._(DecodeError, Error1);
      function DecodeError() {
        _class_call_check._(this, DecodeError);
        return _call_super._(this, DecodeError, arguments);
      }
      return DecodeError;
    })(_wrap_native_super._(Error));
    var NormalizeError = /*#__PURE__*/ (function (Error1) {
      _inherits._(NormalizeError, Error1);
      function NormalizeError() {
        _class_call_check._(this, NormalizeError);
        return _call_super._(this, NormalizeError, arguments);
      }
      return NormalizeError;
    })(_wrap_native_super._(Error));
    var PageNotFoundError = /*#__PURE__*/ (function (Error1) {
      _inherits._(PageNotFoundError, Error1);
      function PageNotFoundError(page) {
        _class_call_check._(this, PageNotFoundError);
        var _this;
        _this = _call_super._(this, PageNotFoundError);
        _this.code = 'ENOENT';
        _this.name = 'PageNotFoundError';
        _this.message = 'Cannot find module for page: '.concat(page);
        return _this;
      }
      return PageNotFoundError;
    })(_wrap_native_super._(Error));
    var MissingStaticPage = /*#__PURE__*/ (function (Error1) {
      _inherits._(MissingStaticPage, Error1);
      function MissingStaticPage(page, message) {
        _class_call_check._(this, MissingStaticPage);
        var _this;
        _this = _call_super._(this, MissingStaticPage);
        _this.message = 'Failed to load static file for page: '
          .concat(page, ' ')
          .concat(message);
        return _this;
      }
      return MissingStaticPage;
    })(_wrap_native_super._(Error));
    var MiddlewareNotFoundError = /*#__PURE__*/ (function (Error1) {
      _inherits._(MiddlewareNotFoundError, Error1);
      function MiddlewareNotFoundError() {
        _class_call_check._(this, MiddlewareNotFoundError);
        var _this;
        _this = _call_super._(this, MiddlewareNotFoundError);
        _this.code = 'ENOENT';
        _this.message = 'Cannot find the middleware module';
        return _this;
      }
      return MiddlewareNotFoundError;
    })(_wrap_native_super._(Error));
    function stringifyError(error) {
      return JSON.stringify({
        message: error.message,
        stack: error.stack,
      });
    } //# sourceMappingURL=utils.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    Object.defineProperty(exports, 'isLocalURL', {
      enumerable: true,
      get: function get() {
        return isLocalURL;
      },
    });
    var _utils = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)',
    );
    var _hasbasepath = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)',
    );
    function isLocalURL(url) {
      // prevent a hydration mismatch on href for url with anchor refs
      if (!(0, _utils.isAbsoluteUrl)(url)) return true;
      try {
        // absolute urls can be local if they are on the same origin
        var locationOrigin = (0, _utils.getLocationOrigin)();
        var resolved = new URL(url, locationOrigin);
        return (
          resolved.origin === locationOrigin &&
          (0, _hasbasepath.hasBasePath)(resolved.pathname)
        );
      } catch (_) {
        return false;
      }
    } //# sourceMappingURL=is-local-url.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
      );
    ('use strict');
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    Object.defineProperty(exports, 'errorOnce', {
      enumerable: true,
      get: function get() {
        return errorOnce;
      },
    });
    var errorOnce = function (_) {};
    if (('TURBOPACK compile-time truthy', 1)) {
      var errors = new Set();
      errorOnce = function (msg) {
        if (!errors.has(msg)) {
          console.error(msg);
        }
        errors.add(msg);
      };
    } //# sourceMappingURL=error-once.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      /*#__PURE__*/ __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)',
      );
    ('use client');
    ('use strict');
    var _object_spread = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_spread.cjs [app-client] (ecmascript)',
    );
    var _object_spread_props = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_spread_props.cjs [app-client] (ecmascript)',
    );
    var _object_without_properties = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_object_without_properties.cjs [app-client] (ecmascript)',
    );
    var _sliced_to_array = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs [app-client] (ecmascript)',
    );
    var _type_of = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)',
    );
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    0 &&
      (module.exports = {
        default: null,
        useLinkStatus: null,
      });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name],
        });
    }
    _export(exports, {
      /**
       * A React component that extends the HTML `<a>` element to provide
       * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
       * and client-side navigation. This is the primary way to navigate between routes in Next.js.
       *
       * @remarks
       * - Prefetching is only enabled in production.
       *
       * @see https://nextjs.org/docs/app/api-reference/components/link
       */ default: function _default() {
        return LinkComponent;
      },
      useLinkStatus: function useLinkStatus1() {
        return useLinkStatus;
      },
    });
    var _interop_require_wildcard = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)',
    );
    var _jsxruntime = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)',
    );
    var _react = /*#__PURE__*/ _interop_require_wildcard._(
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
      ),
    );
    var _formaturl = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)',
    );
    var _approutercontextsharedruntime = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)',
    );
    var _usemergedref = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)',
    );
    var _utils = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)',
    );
    var _addbasepath = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)',
    );
    var _warnonce = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)',
    );
    var _links = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)',
    );
    var _islocalurl = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)',
    );
    var _types = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)',
    );
    var _erroronce = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)',
    );
    function isModifiedEvent(event) {
      var eventTarget = event.currentTarget;
      var target = eventTarget.getAttribute('target');
      return (
        (target && target !== '_self') ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey || // triggers resource download
        (event.nativeEvent && event.nativeEvent.which === 2)
      );
    }
    function linkClicked(
      e,
      href,
      as,
      linkInstanceRef,
      replace,
      scroll,
      onNavigate,
    ) {
      if (typeof window !== 'undefined') {
        var nodeName = e.currentTarget.nodeName;
        // anchors inside an svg have a lowercase nodeName
        var isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (
          (isAnchorNodeName && isModifiedEvent(e)) ||
          e.currentTarget.hasAttribute('download')
        ) {
          // ignore click for browser’s default behavior
          return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
          if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
          }
          // ignore click for browser’s default behavior
          return;
        }
        e.preventDefault();
        if (onNavigate) {
          var isDefaultPrevented = false;
          onNavigate({
            preventDefault: function () {
              isDefaultPrevented = true;
            },
          });
          if (isDefaultPrevented) {
            return;
          }
        }
        var dispatchNavigateAction = __turbopack_context__.r(
          '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)',
        ).dispatchNavigateAction;
        _react.default.startTransition(function () {
          dispatchNavigateAction(
            as || href,
            replace ? 'replace' : 'push',
            scroll !== null && scroll !== void 0 ? scroll : true,
            linkInstanceRef.current,
          );
        });
      }
    }
    function formatStringOrUrl(urlObjOrString) {
      if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
      }
      return (0, _formaturl.formatUrl)(urlObjOrString);
    }
    function LinkComponent(props) {
      var _ref = _sliced_to_array._(
          (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS),
          2,
        ),
        linkStatus = _ref[0],
        setOptimisticLinkStatus = _ref[1];
      var children;
      var linkInstanceRef = (0, _react.useRef)(null);
      var hrefProp = props.href,
        asProp = props.as,
        childrenProp = props.children,
        tmp = props.prefetch,
        prefetchProp = tmp === void 0 ? null : tmp,
        passHref = props.passHref,
        replace = props.replace,
        shallow = props.shallow,
        scroll = props.scroll,
        onClick = props.onClick,
        onMouseEnterProp = props.onMouseEnter,
        onTouchStartProp = props.onTouchStart,
        _props_legacyBehavior = props.legacyBehavior,
        legacyBehavior =
          _props_legacyBehavior === void 0 ? false : _props_legacyBehavior,
        onNavigate = props.onNavigate,
        forwardedRef = props.ref,
        unstable_dynamicOnHover = props.unstable_dynamicOnHover,
        restProps = _object_without_properties._(props, [
          'href',
          'as',
          'children',
          'prefetch',
          'passHref',
          'replace',
          'shallow',
          'scroll',
          'onClick',
          'onMouseEnter',
          'onTouchStart',
          'legacyBehavior',
          'onNavigate',
          'ref',
          'unstable_dynamicOnHover',
        ]);
      children = childrenProp;
      if (
        legacyBehavior &&
        (typeof children === 'string' || typeof children === 'number')
      ) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)('a', {
          children: children,
        });
      }
      var router = _react.default.useContext(
        _approutercontextsharedruntime.AppRouterContext,
      );
      var prefetchEnabled = prefetchProp !== false;
      var fetchStrategy =
        prefetchProp !== false
          ? getFetchStrategyFromPrefetchProp(prefetchProp)
          : _types.FetchStrategy.PPR;
      if (('TURBOPACK compile-time truthy', 1)) {
        var createPropError = function createPropError(args) {
          return Object.defineProperty(
            new Error(
              'Failed prop type: The prop `'
                .concat(args.key, '` expects a ')
                .concat(args.expected, ' in `<Link>`, but got `')
                .concat(args.actual, '` instead.') +
                (typeof window !== 'undefined'
                  ? "\nOpen your browser's console to view the Component stack trace."
                  : ''),
            ),
            '__NEXT_ERROR_CODE',
            {
              value: 'E319',
              enumerable: false,
              configurable: true,
            },
          );
        };
        // TypeScript trick for type-guarding:
        var requiredPropsGuard = {
          href: true,
        };
        var requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach(function (key) {
          if (key === 'href') {
            if (
              props[key] == null ||
              (typeof props[key] !== 'string' &&
                _type_of._(props[key]) !== 'object')
            ) {
              throw createPropError({
                key: key,
                expected: '`string` or `object`',
                actual: props[key] === null ? 'null' : _type_of._(props[key]),
              });
            }
          } else {
            // TypeScript trick for type-guarding:
            var _ = key;
          }
        });
        // TypeScript trick for type-guarding:
        var optionalPropsGuard = {
          as: true,
          replace: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          unstable_dynamicOnHover: true,
          onClick: true,
          onMouseEnter: true,
          onTouchStart: true,
          legacyBehavior: true,
          onNavigate: true,
        };
        var optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach(function (key) {
          var valType = _type_of._(props[key]);
          if (key === 'as') {
            if (props[key] && valType !== 'string' && valType !== 'object') {
              throw createPropError({
                key: key,
                expected: '`string` or `object`',
                actual: valType,
              });
            }
          } else if (
            key === 'onClick' ||
            key === 'onMouseEnter' ||
            key === 'onTouchStart' ||
            key === 'onNavigate'
          ) {
            if (props[key] && valType !== 'function') {
              throw createPropError({
                key: key,
                expected: '`function`',
                actual: valType,
              });
            }
          } else if (
            key === 'replace' ||
            key === 'scroll' ||
            key === 'shallow' ||
            key === 'passHref' ||
            key === 'legacyBehavior' ||
            key === 'unstable_dynamicOnHover'
          ) {
            if (props[key] != null && valType !== 'boolean') {
              throw createPropError({
                key: key,
                expected: '`boolean`',
                actual: valType,
              });
            }
          } else if (key === 'prefetch') {
            if (
              props[key] != null &&
              valType !== 'boolean' &&
              props[key] !== 'auto'
            ) {
              throw createPropError({
                key: key,
                expected: '`boolean | "auto"`',
                actual: valType,
              });
            }
          } else {
            // TypeScript trick for type-guarding:
            var _ = key;
          }
        });
      }
      if (('TURBOPACK compile-time truthy', 1)) {
        if (props.locale) {
          (0, _warnonce.warnOnce)(
            'The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization',
          );
        }
        if (!asProp) {
          var href;
          if (typeof hrefProp === 'string') {
            href = hrefProp;
          } else if (
            (typeof hrefProp === 'undefined'
              ? 'undefined'
              : _type_of._(hrefProp)) === 'object' &&
            typeof hrefProp.pathname === 'string'
          ) {
            href = hrefProp.pathname;
          }
          if (href) {
            var hasDynamicSegment = href.split('/').some(function (segment) {
              return segment.startsWith('[') && segment.endsWith(']');
            });
            if (hasDynamicSegment) {
              throw Object.defineProperty(
                new Error(
                  'Dynamic href `'.concat(
                    href,
                    '` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href',
                  ),
                ),
                '__NEXT_ERROR_CODE',
                {
                  value: 'E267',
                  enumerable: false,
                  configurable: true,
                },
              );
            }
          }
        }
      }
      var _react_default_useMemo = _react.default.useMemo(
          {
            'LinkComponent.useMemo[_react_default_useMemo]': function () {
              var resolvedHref = formatStringOrUrl(hrefProp);
              return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref,
              };
            },
          }['LinkComponent.useMemo[_react_default_useMemo]'],
          [hrefProp, asProp],
        ),
        href1 = _react_default_useMemo.href,
        as = _react_default_useMemo.as;
      // This will return the first child, if multiple are provided it will throw an error
      var child;
      if (legacyBehavior) {
        if (
          (children === null || children === void 0
            ? void 0
            : children.$$typeof) === Symbol.for('react.lazy')
        ) {
          throw Object.defineProperty(
            new Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.",
            ),
            '__NEXT_ERROR_CODE',
            {
              value: 'E863',
              enumerable: false,
              configurable: true,
            },
          );
        }
        if (('TURBOPACK compile-time truthy', 1)) {
          if (onClick) {
            console.warn(
              '"onClick" was passed to <Link> with `href` of `'.concat(
                hrefProp,
                '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link',
              ),
            );
          }
          if (onMouseEnterProp) {
            console.warn(
              '"onMouseEnter" was passed to <Link> with `href` of `'.concat(
                hrefProp,
                '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link',
              ),
            );
          }
          try {
            child = _react.default.Children.only(children);
          } catch (err) {
            if (!children) {
              throw Object.defineProperty(
                new Error(
                  'No children were passed to <Link> with `href` of `'.concat(
                    hrefProp,
                    '` but one child is required https://nextjs.org/docs/messages/link-no-children',
                  ),
                ),
                '__NEXT_ERROR_CODE',
                {
                  value: 'E320',
                  enumerable: false,
                  configurable: true,
                },
              );
            }
            throw Object.defineProperty(
              new Error(
                'Multiple children were passed to <Link> with `href` of `'.concat(
                  hrefProp,
                  '` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children',
                ) +
                  (typeof window !== 'undefined'
                    ? " \nOpen your browser's console to view the Component stack trace."
                    : ''),
              ),
              '__NEXT_ERROR_CODE',
              {
                value: 'E266',
                enumerable: false,
                configurable: true,
              },
            );
          }
        } //TURBOPACK unreachable
        else;
      } else {
        if (('TURBOPACK compile-time truthy', 1)) {
          if (
            (children === null || children === void 0
              ? void 0
              : children.type) === 'a'
          ) {
            throw Object.defineProperty(
              new Error(
                'Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor',
              ),
              '__NEXT_ERROR_CODE',
              {
                value: 'E209',
                enumerable: false,
                configurable: true,
              },
            );
          }
        }
      }
      var childRef = legacyBehavior
        ? child &&
          (typeof child === 'undefined' ? 'undefined' : _type_of._(child)) ===
            'object' &&
          child.ref
        : forwardedRef;
      // Use a callback ref to attach an IntersectionObserver to the anchor tag on
      // mount. In the future we will also use this to keep track of all the
      // currently mounted <Link> instances, e.g. so we can re-prefetch them after
      // a revalidation or refresh.
      var observeLinkVisibilityOnMount = _react.default.useCallback(
        {
          'LinkComponent.useCallback[observeLinkVisibilityOnMount]': function (
            element,
          ) {
            if (router !== null) {
              linkInstanceRef.current = (0, _links.mountLinkInstance)(
                element,
                href1,
                router,
                fetchStrategy,
                prefetchEnabled,
                setOptimisticLinkStatus,
              );
            }
            return {
              'LinkComponent.useCallback[observeLinkVisibilityOnMount]':
                function () {
                  if (linkInstanceRef.current) {
                    (0, _links.unmountLinkForCurrentNavigation)(
                      linkInstanceRef.current,
                    );
                    linkInstanceRef.current = null;
                  }
                  (0, _links.unmountPrefetchableInstance)(element);
                },
            }['LinkComponent.useCallback[observeLinkVisibilityOnMount]'];
          },
        }['LinkComponent.useCallback[observeLinkVisibilityOnMount]'],
        [
          prefetchEnabled,
          href1,
          router,
          fetchStrategy,
          setOptimisticLinkStatus,
        ],
      );
      var mergedRef = (0, _usemergedref.useMergedRef)(
        observeLinkVisibilityOnMount,
        childRef,
      );
      var childProps = {
        ref: mergedRef,
        onClick: function onClick1(e) {
          if (('TURBOPACK compile-time truthy', 1)) {
            if (!e) {
              throw Object.defineProperty(
                new Error(
                  'Component rendered inside next/link has to pass click event to "onClick" prop.',
                ),
                '__NEXT_ERROR_CODE',
                {
                  value: 'E312',
                  enumerable: false,
                  configurable: true,
                },
              );
            }
          }
          if (!legacyBehavior && typeof onClick === 'function') {
            onClick(e);
          }
          if (
            legacyBehavior &&
            child.props &&
            typeof child.props.onClick === 'function'
          ) {
            child.props.onClick(e);
          }
          if (!router) {
            return;
          }
          if (e.defaultPrevented) {
            return;
          }
          linkClicked(
            e,
            href1,
            as,
            linkInstanceRef,
            replace,
            scroll,
            onNavigate,
          );
        },
        onMouseEnter: function onMouseEnter(e) {
          if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
            onMouseEnterProp(e);
          }
          if (
            legacyBehavior &&
            child.props &&
            typeof child.props.onMouseEnter === 'function'
          ) {
            child.props.onMouseEnter(e);
          }
          if (!router) {
            return;
          }
          if (('TURBOPACK compile-time truthy', 1)) {
            return;
          }
          //TURBOPACK unreachable
          var upgradeToDynamicPrefetch;
        },
        onTouchStart: ('TURBOPACK compile-time falsy', 0)
          ? 'TURBOPACK unreachable'
          : function onTouchStart(e) {
              if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
              }
              if (
                legacyBehavior &&
                child.props &&
                typeof child.props.onTouchStart === 'function'
              ) {
                child.props.onTouchStart(e);
              }
              if (!router) {
                return;
              }
              if (!prefetchEnabled) {
                return;
              }
              var upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
              (0, _links.onNavigationIntent)(
                e.currentTarget,
                upgradeToDynamicPrefetch,
              );
            },
      };
      // If the url is absolute, we can bypass the logic to prepend the basePath.
      if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
      } else if (
        !legacyBehavior ||
        passHref ||
        (child.type === 'a' && !('href' in child.props))
      ) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
      }
      var link;
      if (legacyBehavior) {
        if (('TURBOPACK compile-time truthy', 1)) {
          (0, _erroronce.errorOnce)(
            '`legacyBehavior` is deprecated and will be removed in a future ' +
              'release. A codemod is available to upgrade your components:\n\n' +
              'npx @next/codemod@latest new-link .\n\n' +
              'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components',
          );
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
      } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)(
          'a',
          _object_spread_props._(_object_spread._({}, restProps, childProps), {
            children: children,
          }),
        );
      }
      return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link,
      });
    }
    var LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(
      _links.IDLE_LINK_STATUS,
    );
    var useLinkStatus = function () {
      return (0, _react.useContext)(LinkStatusContext);
    };
    function getFetchStrategyFromPrefetchProp(prefetchProp) {
      if (
        ('TURBOPACK compile-time falsy', 0) //TURBOPACK unreachable
      );
      else {
        return prefetchProp === null || prefetchProp === 'auto'
          ? _types.FetchStrategy.PPR
          : // (although invalid values should've been filtered out by prop validation in dev)
            _types.FetchStrategy.Full;
      }
    }
    if (
      (typeof exports.default === 'function' ||
        (_type_of._(exports.default) === 'object' &&
          exports.default !== null)) &&
      typeof exports.default.__esModule === 'undefined'
    ) {
      Object.defineProperty(exports.default, '__esModule', {
        value: true,
      });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    } //# sourceMappingURL=link.js.map
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _async_to_generator]);
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) resolve(value);
      else Promise.resolve(value).then(_next, _throw);
    }
    function _async_to_generator(fn) {
      return function () {
        var self = this,
          args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(
              gen,
              resolve,
              reject,
              _next,
              _throw,
              'next',
              value,
            );
          }
          function _throw(err) {
            asyncGeneratorStep(
              gen,
              resolve,
              reject,
              _next,
              _throw,
              'throw',
              err,
            );
          }
          _next(undefined);
        });
      };
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _array_without_holes]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)',
      );
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(arr);
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _iterable_to_array]);
    function _iterable_to_array(iter) {
      if (
        (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
        iter['@@iterator'] != null
      ) {
        return Array.from(iter);
      }
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _non_iterable_spread]);
    function _non_iterable_spread() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s(['_', () => _to_consumable_array]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)',
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)',
      );
    function _to_consumable_array(arr) {
      return (
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(arr) ||
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(arr) ||
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])(arr) ||
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '_'
        ])()
      );
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>',
  (__turbopack_context__) => {
    'use strict';

    __turbopack_context__.s([
      '_',
      () =>
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          '__generator'
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$priya$2d$profile$2f$priya$2d$new$2d$site$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)',
      );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@next/third-parties/dist/ThirdPartyScriptEmbed.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports.default = ThirdPartyScriptEmbed;
    var jsx_runtime_1 = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)',
    );
    var react_1 = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
    );
    function ThirdPartyScriptEmbed(param) {
      var html = param.html,
        _param_height = param.height,
        height = _param_height === void 0 ? null : _param_height,
        _param_width = param.width,
        width = _param_width === void 0 ? null : _param_width,
        children = param.children,
        _param_dataNtpc = param.dataNtpc,
        dataNtpc = _param_dataNtpc === void 0 ? '' : _param_dataNtpc;
      (0, react_1.useEffect)(
        function () {
          if (dataNtpc) {
            // performance.mark is being used as a feature use signal. While it is traditionally used for performance
            // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
            // existing API.
            performance.mark('mark_feature_usage', {
              detail: {
                feature: 'next-third-parties-'.concat(dataNtpc),
              },
            });
          }
        },
        [dataNtpc],
      );
      return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
          children,
          html
            ? (0, jsx_runtime_1.jsx)('div', {
                style: {
                  height: height != null ? ''.concat(height, 'px') : 'auto',
                  width: width != null ? ''.concat(width, 'px') : 'auto',
                },
                'data-ntpc': dataNtpc,
                dangerouslySetInnerHTML: {
                  __html: html,
                },
              })
            : null,
        ],
      });
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/script.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    module.exports = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/script.js [app-client] (ecmascript)',
    );
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@next/third-parties/dist/google/gtm.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var __importDefault =
      /*TURBOPACK member replacement*/ (__turbopack_context__.e &&
        /*TURBOPACK member replacement*/ __turbopack_context__.e
          .__importDefault) ||
      function (mod) {
        return mod && mod.__esModule
          ? mod
          : {
              default: mod,
            };
      };
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports.sendGTMEvent = void 0;
    exports.GoogleTagManager = GoogleTagManager;
    var jsx_runtime_1 = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)',
    );
    // TODO: Evaluate import 'client only'
    var react_1 = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
    );
    var script_1 = __importDefault(
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/script.js [app-client] (ecmascript)',
      ),
    );
    var currDataLayerName = 'dataLayer';
    function GoogleTagManager(props) {
      var gtmId = props.gtmId,
        gtmScriptUrl = props.gtmScriptUrl,
        _props_dataLayerName = props.dataLayerName,
        dataLayerName =
          _props_dataLayerName === void 0 ? 'dataLayer' : _props_dataLayerName,
        auth = props.auth,
        preview = props.preview,
        dataLayer = props.dataLayer,
        nonce = props.nonce;
      currDataLayerName = dataLayerName;
      var scriptUrl = new URL(
        gtmScriptUrl || 'https://www.googletagmanager.com/gtm.js',
      );
      if (gtmId) {
        scriptUrl.searchParams.set('id', gtmId);
      }
      if (dataLayerName !== 'dataLayer') {
        scriptUrl.searchParams.set('l', dataLayerName);
      }
      if (auth) {
        scriptUrl.searchParams.set('gtm_auth', auth);
      }
      if (preview) {
        scriptUrl.searchParams.set('gtm_preview', preview);
        scriptUrl.searchParams.set('gtm_cookies_win', 'x');
      }
      (0, react_1.useEffect)(function () {
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
          detail: {
            feature: 'next-third-parties-gtm',
          },
        });
      }, []);
      return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
          (0, jsx_runtime_1.jsx)(script_1.default, {
            id: '_next-gtm-init',
            dangerouslySetInnerHTML: {
              __html:
                "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                  .concat(
                    dataLayer
                      ? 'w[l].push('.concat(JSON.stringify(dataLayer), ')')
                      : '',
                    "\n      })(window,'",
                  )
                  .concat(dataLayerName, "');"),
            },
            nonce: nonce,
          }),
          (0, jsx_runtime_1.jsx)(script_1.default, {
            id: '_next-gtm',
            'data-ntpc': 'GTM',
            src: scriptUrl.href,
            nonce: nonce,
          }),
        ],
      });
    }
    var sendGTMEvent = function (data, dataLayerName) {
      // special case if we are sending events before GTM init and we have custom dataLayerName
      var dataLayer = dataLayerName || currDataLayerName;
      // define dataLayer so we can still queue up events before GTM init
      window[dataLayer] = window[dataLayer] || [];
      window[dataLayer].push(data);
    };
    exports.sendGTMEvent = sendGTMEvent;
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/@next/third-parties/dist/google/ga.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    'use strict';

    var __importDefault =
      /*TURBOPACK member replacement*/ (__turbopack_context__.e &&
        /*TURBOPACK member replacement*/ __turbopack_context__.e
          .__importDefault) ||
      function (mod) {
        return mod && mod.__esModule
          ? mod
          : {
              default: mod,
            };
      };
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports.GoogleAnalytics = GoogleAnalytics;
    exports.sendGAEvent = sendGAEvent;
    var jsx_runtime_1 = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)',
    );
    // TODO: Evaluate import 'client only'
    var react_1 = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)',
    );
    var script_1 = __importDefault(
      __turbopack_context__.r(
        '[project]/Documents/priya-profile/priya-new-site/node_modules/next/script.js [app-client] (ecmascript)',
      ),
    );
    var currDataLayerName = undefined;
    function GoogleAnalytics(props) {
      var gaId = props.gaId,
        debugMode = props.debugMode,
        _props_dataLayerName = props.dataLayerName,
        dataLayerName =
          _props_dataLayerName === void 0 ? 'dataLayer' : _props_dataLayerName,
        nonce = props.nonce;
      if (currDataLayerName === undefined) {
        currDataLayerName = dataLayerName;
      }
      (0, react_1.useEffect)(function () {
        // performance.mark is being used as a feature use signal. While it is traditionally used for performance
        // benchmarking it is low overhead and thus considered safe to use in production and it is a widely available
        // existing API.
        // The performance measurement will be handled by Chrome Aurora
        performance.mark('mark_feature_usage', {
          detail: {
            feature: 'next-third-parties-ga',
          },
        });
      }, []);
      return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
          (0, jsx_runtime_1.jsx)(script_1.default, {
            id: '_next-ga-init',
            dangerouslySetInnerHTML: {
              __html: "\n          window['"
                .concat(dataLayerName, "'] = window['")
                .concat(
                  dataLayerName,
                  "'] || [];\n          function gtag(){window['",
                )
                .concat(
                  dataLayerName,
                  "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '",
                )
                .concat(gaId, "' ")
                .concat(debugMode ? ",{ 'debug_mode': true }" : '', ');'),
            },
            nonce: nonce,
          }),
          (0, jsx_runtime_1.jsx)(script_1.default, {
            id: '_next-ga',
            src: 'https://www.googletagmanager.com/gtag/js?id='.concat(gaId),
            nonce: nonce,
          }),
        ],
      });
    }
    function sendGAEvent() {
      for (
        var _len = arguments.length, _args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        _args[_key] = arguments[_key];
      }
      if (currDataLayerName === undefined) {
        console.warn('@next/third-parties: GA has not been initialized');
        return;
      }
      if (window[currDataLayerName]) {
        window[currDataLayerName].push(arguments);
      } else {
        console.warn(
          '@next/third-parties: GA dataLayer '.concat(
            currDataLayerName,
            ' does not exist',
          ),
        );
      }
    }
  },
  '[project]/Documents/priya-profile/priya-new-site/node_modules/next/navigation.js [app-client] (ecmascript)',
  (__turbopack_context__, module, exports) => {
    module.exports = __turbopack_context__.r(
      '[project]/Documents/priya-profile/priya-new-site/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)',
    );
  },
]);

//# sourceMappingURL=82d99_db335c54._.js.map
