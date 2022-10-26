import {
  require_main,
  require_main2
} from "/build/_shared/chunk-EZYFFJFJ.js";
import {
  __commonJS,
  __require,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// node_modules/@remix-run/react/_virtual/_rollupPluginBabelHelpers.js
var require_rollupPluginBabelHelpers = __commonJS({
  "node_modules/@remix-run/react/_virtual/_rollupPluginBabelHelpers.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    exports["extends"] = _extends;
  }
});

// node_modules/react-router-dom/umd/react-router-dom.development.js
var require_react_router_dom_development = __commonJS({
  "node_modules/react-router-dom/umd/react-router-dom.development.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react(), require_main(), require_main2()) : typeof define === "function" && define.amd ? define(["exports", "react", "history", "react-router"], factory) : (global = global || self, factory(global.ReactRouterDOM = {}, global.React, global.HistoryLibrary, global.ReactRouter));
    })(exports, function(exports2, React2, history, reactRouter) {
      "use strict";
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
      function warning(cond, message) {
        if (!cond) {
          if (typeof console !== "undefined")
            console.warn(message);
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
      function BrowserRouter(_ref) {
        let {
          basename,
          children,
          window: window2
        } = _ref;
        let historyRef = React2.useRef();
        if (historyRef.current == null) {
          historyRef.current = history.createBrowserHistory({
            window: window2
          });
        }
        let history$1 = historyRef.current;
        let [state, setState] = React2.useState({
          action: history$1.action,
          location: history$1.location
        });
        React2.useLayoutEffect(() => history$1.listen(setState), [history$1]);
        return /* @__PURE__ */ React2.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history$1
        });
      }
      function HashRouter(_ref2) {
        let {
          basename,
          children,
          window: window2
        } = _ref2;
        let historyRef = React2.useRef();
        if (historyRef.current == null) {
          historyRef.current = history.createHashHistory({
            window: window2
          });
        }
        let history$1 = historyRef.current;
        let [state, setState] = React2.useState({
          action: history$1.action,
          location: history$1.location
        });
        React2.useLayoutEffect(() => history$1.listen(setState), [history$1]);
        return /* @__PURE__ */ React2.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history$1
        });
      }
      function HistoryRouter(_ref3) {
        let {
          basename,
          children,
          history: history2
        } = _ref3;
        const [state, setState] = React2.useState({
          action: history2.action,
          location: history2.location
        });
        React2.useLayoutEffect(() => history2.listen(setState), [history2]);
        return /* @__PURE__ */ React2.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history2
        });
      }
      {
        HistoryRouter.displayName = "unstable_HistoryRouter";
      }
      function isModifiedEvent(event) {
        return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
      }
      const Link2 = /* @__PURE__ */ React2.forwardRef(function LinkWithRef(_ref4, ref) {
        let {
          onClick,
          reloadDocument,
          replace = false,
          state,
          target,
          to
        } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
        let href = reactRouter.useHref(to);
        let internalOnClick = useLinkClickHandler(to, {
          replace,
          state,
          target
        });
        function handleClick(event) {
          if (onClick)
            onClick(event);
          if (!event.defaultPrevented && !reloadDocument) {
            internalOnClick(event);
          }
        }
        return /* @__PURE__ */ React2.createElement("a", _extends({}, rest, {
          href,
          onClick: handleClick,
          ref,
          target
        }));
      });
      {
        Link2.displayName = "Link";
      }
      const NavLink2 = /* @__PURE__ */ React2.forwardRef(function NavLinkWithRef(_ref5, ref) {
        let {
          "aria-current": ariaCurrentProp = "page",
          caseSensitive = false,
          className: classNameProp = "",
          end = false,
          style: styleProp,
          to,
          children
        } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
        let location = reactRouter.useLocation();
        let path = reactRouter.useResolvedPath(to);
        let locationPathname = location.pathname;
        let toPathname = path.pathname;
        if (!caseSensitive) {
          locationPathname = locationPathname.toLowerCase();
          toPathname = toPathname.toLowerCase();
        }
        let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
        let ariaCurrent = isActive ? ariaCurrentProp : void 0;
        let className;
        if (typeof classNameProp === "function") {
          className = classNameProp({
            isActive
          });
        } else {
          className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
        }
        let style = typeof styleProp === "function" ? styleProp({
          isActive
        }) : styleProp;
        return /* @__PURE__ */ React2.createElement(Link2, _extends({}, rest, {
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to
        }), typeof children === "function" ? children({
          isActive
        }) : children);
      });
      {
        NavLink2.displayName = "NavLink";
      }
      function useLinkClickHandler(to, _temp) {
        let {
          target,
          replace: replaceProp,
          state
        } = _temp === void 0 ? {} : _temp;
        let navigate = reactRouter.useNavigate();
        let location = reactRouter.useLocation();
        let path = reactRouter.useResolvedPath(to);
        return React2.useCallback((event) => {
          if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
            event.preventDefault();
            let replace = !!replaceProp || history.createPath(location) === history.createPath(path);
            navigate(to, {
              replace,
              state
            });
          }
        }, [location, navigate, path, replaceProp, state, target, to]);
      }
      function useSearchParams2(defaultInit) {
        warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
        let defaultSearchParamsRef = React2.useRef(createSearchParams(defaultInit));
        let location = reactRouter.useLocation();
        let searchParams = React2.useMemo(() => {
          let searchParams2 = createSearchParams(location.search);
          for (let key of defaultSearchParamsRef.current.keys()) {
            if (!searchParams2.has(key)) {
              defaultSearchParamsRef.current.getAll(key).forEach((value) => {
                searchParams2.append(key, value);
              });
            }
          }
          return searchParams2;
        }, [location.search]);
        let navigate = reactRouter.useNavigate();
        let setSearchParams = React2.useCallback((nextInit, navigateOptions) => {
          navigate("?" + createSearchParams(nextInit), navigateOptions);
        }, [navigate]);
        return [searchParams, setSearchParams];
      }
      function createSearchParams(init) {
        if (init === void 0) {
          init = "";
        }
        return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
          let value = init[key];
          return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
        }, []));
      }
      Object.defineProperty(exports2, "MemoryRouter", {
        enumerable: true,
        get: function() {
          return reactRouter.MemoryRouter;
        }
      });
      Object.defineProperty(exports2, "Navigate", {
        enumerable: true,
        get: function() {
          return reactRouter.Navigate;
        }
      });
      Object.defineProperty(exports2, "Outlet", {
        enumerable: true,
        get: function() {
          return reactRouter.Outlet;
        }
      });
      Object.defineProperty(exports2, "Route", {
        enumerable: true,
        get: function() {
          return reactRouter.Route;
        }
      });
      Object.defineProperty(exports2, "Router", {
        enumerable: true,
        get: function() {
          return reactRouter.Router;
        }
      });
      Object.defineProperty(exports2, "Routes", {
        enumerable: true,
        get: function() {
          return reactRouter.Routes;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_LocationContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_LocationContext;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_NavigationContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_NavigationContext;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_RouteContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_RouteContext;
        }
      });
      Object.defineProperty(exports2, "createRoutesFromChildren", {
        enumerable: true,
        get: function() {
          return reactRouter.createRoutesFromChildren;
        }
      });
      Object.defineProperty(exports2, "generatePath", {
        enumerable: true,
        get: function() {
          return reactRouter.generatePath;
        }
      });
      Object.defineProperty(exports2, "matchPath", {
        enumerable: true,
        get: function() {
          return reactRouter.matchPath;
        }
      });
      Object.defineProperty(exports2, "matchRoutes", {
        enumerable: true,
        get: function() {
          return reactRouter.matchRoutes;
        }
      });
      Object.defineProperty(exports2, "renderMatches", {
        enumerable: true,
        get: function() {
          return reactRouter.renderMatches;
        }
      });
      Object.defineProperty(exports2, "resolvePath", {
        enumerable: true,
        get: function() {
          return reactRouter.resolvePath;
        }
      });
      Object.defineProperty(exports2, "useHref", {
        enumerable: true,
        get: function() {
          return reactRouter.useHref;
        }
      });
      Object.defineProperty(exports2, "useInRouterContext", {
        enumerable: true,
        get: function() {
          return reactRouter.useInRouterContext;
        }
      });
      Object.defineProperty(exports2, "useLocation", {
        enumerable: true,
        get: function() {
          return reactRouter.useLocation;
        }
      });
      Object.defineProperty(exports2, "useMatch", {
        enumerable: true,
        get: function() {
          return reactRouter.useMatch;
        }
      });
      Object.defineProperty(exports2, "useNavigate", {
        enumerable: true,
        get: function() {
          return reactRouter.useNavigate;
        }
      });
      Object.defineProperty(exports2, "useNavigationType", {
        enumerable: true,
        get: function() {
          return reactRouter.useNavigationType;
        }
      });
      Object.defineProperty(exports2, "useOutlet", {
        enumerable: true,
        get: function() {
          return reactRouter.useOutlet;
        }
      });
      Object.defineProperty(exports2, "useOutletContext", {
        enumerable: true,
        get: function() {
          return reactRouter.useOutletContext;
        }
      });
      Object.defineProperty(exports2, "useParams", {
        enumerable: true,
        get: function() {
          return reactRouter.useParams;
        }
      });
      Object.defineProperty(exports2, "useResolvedPath", {
        enumerable: true,
        get: function() {
          return reactRouter.useResolvedPath;
        }
      });
      Object.defineProperty(exports2, "useRoutes", {
        enumerable: true,
        get: function() {
          return reactRouter.useRoutes;
        }
      });
      exports2.BrowserRouter = BrowserRouter;
      exports2.HashRouter = HashRouter;
      exports2.Link = Link2;
      exports2.NavLink = NavLink2;
      exports2.createSearchParams = createSearchParams;
      exports2.unstable_HistoryRouter = HistoryRouter;
      exports2.useLinkClickHandler = useLinkClickHandler;
      exports2.useSearchParams = useSearchParams2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/react-router-dom/main.js
var require_main3 = __commonJS({
  "node_modules/react-router-dom/main.js"(exports, module) {
    init_react();
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_router_dom_development();
    }
  }
});

// node_modules/@remix-run/react/errorBoundaries.js
var require_errorBoundaries = __commonJS({
  "node_modules/@remix-run/react/errorBoundaries.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React2 = require_react();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var React__default = /* @__PURE__ */ _interopDefaultLegacy(React2);
    var RemixErrorBoundary = class extends React__default["default"].Component {
      constructor(props) {
        super(props);
        this.state = {
          error: props.error || null,
          location: props.location
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location) {
          return {
            error: props.error || null,
            location: props.location
          };
        }
        return {
          error: props.error || state.error,
          location: state.location
        };
      }
      render() {
        if (this.state.error) {
          return /* @__PURE__ */ React__default["default"].createElement(this.props.component, {
            error: this.state.error
          });
        } else {
          return this.props.children;
        }
      }
    };
    function RemixRootDefaultErrorBoundary({
      error
    }) {
      console.error(error);
      return /* @__PURE__ */ React__default["default"].createElement("html", {
        lang: "en"
      }, /* @__PURE__ */ React__default["default"].createElement("head", null, /* @__PURE__ */ React__default["default"].createElement("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ React__default["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover"
      }), /* @__PURE__ */ React__default["default"].createElement("title", null, "Application Error!")), /* @__PURE__ */ React__default["default"].createElement("body", null, /* @__PURE__ */ React__default["default"].createElement("main", {
        style: {
          fontFamily: "system-ui, sans-serif",
          padding: "2rem"
        }
      }, /* @__PURE__ */ React__default["default"].createElement("h1", {
        style: {
          fontSize: "24px"
        }
      }, "Application Error"), /* @__PURE__ */ React__default["default"].createElement("pre", {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto"
        }
      }, error.stack)), /* @__PURE__ */ React__default["default"].createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws errors than this. Check out https://remix.run/guides/errors for more information."
              );
            `
        }
      })));
    }
    var RemixCatchContext = /* @__PURE__ */ React__default["default"].createContext(void 0);
    function useCatch2() {
      return React2.useContext(RemixCatchContext);
    }
    function RemixCatchBoundary({
      catch: catchVal,
      component: Component,
      children
    }) {
      if (catchVal) {
        return /* @__PURE__ */ React__default["default"].createElement(RemixCatchContext.Provider, {
          value: catchVal
        }, /* @__PURE__ */ React__default["default"].createElement(Component, null));
      }
      return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, children);
    }
    function RemixRootDefaultCatchBoundary() {
      let caught = useCatch2();
      return /* @__PURE__ */ React__default["default"].createElement("html", {
        lang: "en"
      }, /* @__PURE__ */ React__default["default"].createElement("head", null, /* @__PURE__ */ React__default["default"].createElement("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ React__default["default"].createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover"
      }), /* @__PURE__ */ React__default["default"].createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ React__default["default"].createElement("body", null, /* @__PURE__ */ React__default["default"].createElement("h1", {
        style: {
          fontFamily: "system-ui, sans-serif",
          padding: "2rem"
        }
      }, caught.status, " ", caught.statusText), /* @__PURE__ */ React__default["default"].createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws 404s (and other responses) than this. Check out https://remix.run/guides/not-found for more information."
              );
            `
        }
      })));
    }
    exports.RemixCatchBoundary = RemixCatchBoundary;
    exports.RemixErrorBoundary = RemixErrorBoundary;
    exports.RemixRootDefaultCatchBoundary = RemixRootDefaultCatchBoundary;
    exports.RemixRootDefaultErrorBoundary = RemixRootDefaultErrorBoundary;
    exports.useCatch = useCatch2;
  }
});

// node_modules/@remix-run/react/invariant.js
var require_invariant = __commonJS({
  "node_modules/@remix-run/react/invariant.js"(exports, module) {
    init_react();
    "use strict";
    function invariant(value, message) {
      if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
      }
    }
    module.exports = invariant;
  }
});

// node_modules/@remix-run/react/routeModules.js
var require_routeModules = __commonJS({
  "node_modules/@remix-run/react/routeModules.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    async function loadRouteModule(route, routeModulesCache) {
      if (route.id in routeModulesCache) {
        return routeModulesCache[route.id];
      }
      try {
        let routeModule = await function(t) {
          return Promise.resolve().then(function() {
            return /* @__PURE__ */ _interopNamespace(__require(t));
          });
        }(route.module);
        routeModulesCache[route.id] = routeModule;
        return routeModule;
      } catch (error) {
        window.location.reload();
        return new Promise(() => {
        });
      }
    }
    exports.loadRouteModule = loadRouteModule;
  }
});

// node_modules/@remix-run/react/links.js
var require_links = __commonJS({
  "node_modules/@remix-run/react/links.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var history = require_main();
    var routeModules = require_routeModules();
    function getLinksForMatches(matches, routeModules2, manifest) {
      let descriptors = matches.map((match) => {
        var _module$links;
        let module2 = routeModules2[match.route.id];
        return ((_module$links = module2.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module2)) || [];
      }).flat(1);
      let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
      return dedupe(descriptors, preloads);
    }
    async function prefetchStyleLinks(routeModule) {
      if (!routeModule.links)
        return;
      let descriptors = routeModule.links();
      if (!descriptors)
        return;
      let styleLinks = [];
      for (let descriptor of descriptors) {
        if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
          styleLinks.push({
            ...descriptor,
            rel: "preload",
            as: "style"
          });
        }
      }
      let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
      await Promise.all(matchingLinks.map(prefetchStyleLink));
    }
    async function prefetchStyleLink(descriptor) {
      return new Promise((resolve) => {
        let link = document.createElement("link");
        Object.assign(link, descriptor);
        function removeLink() {
          if (document.head.contains(link)) {
            document.head.removeChild(link);
          }
        }
        link.onload = () => {
          removeLink();
          resolve();
        };
        link.onerror = () => {
          removeLink();
          resolve();
        };
        document.head.appendChild(link);
      });
    }
    function isPageLinkDescriptor(object) {
      return object != null && typeof object.page === "string";
    }
    function isHtmlLinkDescriptor(object) {
      return object != null && typeof object.rel === "string" && typeof object.href === "string";
    }
    async function getStylesheetPrefetchLinks(matches, routeModules$1) {
      let links = await Promise.all(matches.map(async (match) => {
        let mod = await routeModules.loadRouteModule(match.route, routeModules$1);
        return mod.links ? mod.links() : [];
      }));
      return links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(({
        rel,
        ...attrs
      }) => {
        if (rel === "preload") {
          return {
            rel: "prefetch",
            ...attrs
          };
        }
        return {
          rel: "prefetch",
          as: "style",
          ...attrs
        };
      });
    }
    function getNewMatchesForLinks(page, nextMatches, currentMatches, location, mode) {
      let path = parsePathPatch(page);
      let isNew = (match, index) => {
        if (!currentMatches[index])
          return true;
        return match.route.id !== currentMatches[index].route.id;
      };
      let matchPathChanged = (match, index) => {
        var _currentMatches$index;
        return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
      };
      let newMatches = mode === "data" && location.search !== path.search ? nextMatches.filter((match, index) => {
        if (!match.route.hasLoader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldReload) {
          return match.route.shouldReload({
            params: match.params,
            prevUrl: new URL(location.pathname + location.search + location.hash, window.origin),
            url: new URL(page, window.origin)
          });
        }
        return true;
      }) : nextMatches.filter((match, index) => {
        return match.route.hasLoader && (isNew(match, index) || matchPathChanged(match, index));
      });
      return newMatches;
    }
    function getDataLinkHrefs(page, matches, manifest) {
      let path = parsePathPatch(page);
      return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
        let {
          pathname,
          search
        } = path;
        let searchParams = new URLSearchParams(search);
        searchParams.set("_data", match.route.id);
        return `${pathname}?${searchParams}`;
      }));
    }
    function getModuleLinkHrefs(matches, manifestPatch) {
      return dedupeHrefs(matches.map((match) => {
        let route = manifestPatch.routes[match.route.id];
        let hrefs = [route.module];
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1));
    }
    function getCurrentPageModulePreloadHrefs(matches, manifest) {
      return dedupeHrefs(matches.map((match) => {
        let route = manifest.routes[match.route.id];
        let hrefs = [route.module];
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1));
    }
    function dedupeHrefs(hrefs) {
      return [...new Set(hrefs)];
    }
    function dedupe(descriptors, preloads) {
      let set = new Set();
      let preloadsSet = new Set(preloads);
      return descriptors.reduce((deduped, descriptor) => {
        let alreadyModulePreload = !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
        if (alreadyModulePreload) {
          return deduped;
        }
        let str = JSON.stringify(descriptor);
        if (!set.has(str)) {
          set.add(str);
          deduped.push(descriptor);
        }
        return deduped;
      }, []);
    }
    function parsePathPatch(href) {
      let path = history.parsePath(href);
      if (path.search === void 0)
        path.search = "";
      return path;
    }
    exports.dedupe = dedupe;
    exports.getDataLinkHrefs = getDataLinkHrefs;
    exports.getLinksForMatches = getLinksForMatches;
    exports.getModuleLinkHrefs = getModuleLinkHrefs;
    exports.getNewMatchesForLinks = getNewMatchesForLinks;
    exports.getStylesheetPrefetchLinks = getStylesheetPrefetchLinks;
    exports.isHtmlLinkDescriptor = isHtmlLinkDescriptor;
    exports.isPageLinkDescriptor = isPageLinkDescriptor;
    exports.prefetchStyleLinks = prefetchStyleLinks;
  }
});

// node_modules/@remix-run/react/markup.js
var require_markup = __commonJS({
  "node_modules/@remix-run/react/markup.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createHtml(html) {
      return {
        __html: html
      };
    }
    exports.createHtml = createHtml;
  }
});

// node_modules/@remix-run/react/data.js
var require_data = __commonJS({
  "node_modules/@remix-run/react/data.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var invariant = require_invariant();
    function isCatchResponse(response) {
      return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
    }
    function isErrorResponse(response) {
      return response instanceof Response && response.headers.get("X-Remix-Error") != null;
    }
    function isRedirectResponse(response) {
      return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
    }
    async function fetchData(url, routeId, signal, submission) {
      url.searchParams.set("_data", routeId);
      let init = submission ? getActionInit(submission, signal) : {
        credentials: "same-origin",
        signal
      };
      let response = await fetch(url.href, init);
      if (isErrorResponse(response)) {
        let data = await response.json();
        let error = new Error(data.message);
        error.stack = data.stack;
        return error;
      }
      return response;
    }
    async function extractData(response) {
      let contentType = response.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        return response.json();
      }
      return response.text();
    }
    function getActionInit(submission, signal) {
      let {
        encType,
        method,
        formData
      } = submission;
      let headers = void 0;
      let body = formData;
      if (encType === "application/x-www-form-urlencoded") {
        body = new URLSearchParams();
        for (let [key, value] of formData) {
          invariant(typeof value === "string", `File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.`);
          body.append(key, value);
        }
        headers = {
          "Content-Type": encType
        };
      }
      return {
        method,
        body,
        signal,
        credentials: "same-origin",
        headers
      };
    }
    exports.extractData = extractData;
    exports.fetchData = fetchData;
    exports.isCatchResponse = isCatchResponse;
    exports.isErrorResponse = isErrorResponse;
    exports.isRedirectResponse = isRedirectResponse;
  }
});

// node_modules/@remix-run/react/routeMatching.js
var require_routeMatching = __commonJS({
  "node_modules/@remix-run/react/routeMatching.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reactRouterDom = require_main3();
    function matchClientRoutes(routes, location) {
      let matches = reactRouterDom.matchRoutes(routes, location);
      if (!matches)
        return null;
      return matches.map((match) => ({
        params: match.params,
        pathname: match.pathname,
        route: match.route
      }));
    }
    exports.matchClientRoutes = matchClientRoutes;
  }
});

// node_modules/@remix-run/react/transition.js
var require_transition = __commonJS({
  "node_modules/@remix-run/react/transition.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var history = require_main();
    var routeMatching = require_routeMatching();
    var invariant = require_invariant();
    var CatchValue = class {
      constructor(status, statusText, data) {
        this.status = status;
        this.statusText = statusText;
        this.data = data;
      }
    };
    function isActionSubmission(submission) {
      return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
    }
    function isLoaderSubmission(submission) {
      return submission.method === "GET";
    }
    function isRedirectLocation(location) {
      return Boolean(location.state) && location.state.isRedirect;
    }
    function isLoaderRedirectLocation(location) {
      return isRedirectLocation(location) && location.state.type === "loader";
    }
    function isActionRedirectLocation(location) {
      return isRedirectLocation(location) && location.state.type === "action";
    }
    function isFetchActionRedirect(location) {
      return isRedirectLocation(location) && location.state.type === "fetchAction";
    }
    function isLoaderSubmissionRedirectLocation(location) {
      return isRedirectLocation(location) && location.state.type === "loaderSubmission";
    }
    var TransitionRedirect = class {
      constructor(location) {
        this.location = typeof location === "string" ? location : location.pathname + location.search;
      }
    };
    var IDLE_TRANSITION = {
      state: "idle",
      submission: void 0,
      location: void 0,
      type: "idle"
    };
    var IDLE_FETCHER = {
      state: "idle",
      type: "init",
      data: void 0,
      submission: void 0
    };
    function createTransitionManager(init) {
      let {
        routes
      } = init;
      let pendingNavigationController;
      let fetchControllers = new Map();
      let incrementingLoadId = 0;
      let navigationLoadId = -1;
      let fetchReloadIds = new Map();
      let matches = routeMatching.matchClientRoutes(routes, init.location);
      if (!matches) {
        matches = [{
          params: {},
          pathname: "",
          route: routes[0]
        }];
      }
      let state = {
        location: init.location,
        loaderData: init.loaderData || {},
        actionData: init.actionData,
        catch: init.catch,
        error: init.error,
        catchBoundaryId: init.catchBoundaryId || null,
        errorBoundaryId: init.errorBoundaryId || null,
        matches,
        nextMatches: void 0,
        transition: IDLE_TRANSITION,
        fetchers: new Map()
      };
      function update(updates) {
        state = Object.assign({}, state, updates);
        init.onChange(state);
      }
      function getState() {
        return state;
      }
      function getFetcher(key) {
        return state.fetchers.get(key) || IDLE_FETCHER;
      }
      function deleteFetcher(key) {
        if (fetchControllers.has(key))
          abortFetcher(key);
        fetchReloadIds.delete(key);
        state.fetchers.delete(key);
      }
      async function send(event) {
        switch (event.type) {
          case "navigation": {
            let {
              action,
              location,
              submission
            } = event;
            let matches2 = routeMatching.matchClientRoutes(routes, location);
            if (!matches2) {
              matches2 = [{
                params: {},
                pathname: "",
                route: routes[0]
              }];
              await handleNotFoundNavigation(location, matches2);
            } else if (!submission && isHashChangeOnly(location)) {
              await handleHashChange(location, matches2);
            } else if (action === history.Action.Pop) {
              await handleLoad(location, matches2);
            } else if (submission && isActionSubmission(submission)) {
              await handleActionSubmissionNavigation(location, submission, matches2);
            } else if (submission && isLoaderSubmission(submission)) {
              await handleLoaderSubmissionNavigation(location, submission, matches2);
            } else if (isActionRedirectLocation(location)) {
              await handleActionRedirect(location, matches2);
            } else if (isLoaderSubmissionRedirectLocation(location)) {
              await handleLoaderSubmissionRedirect(location, matches2);
            } else if (isLoaderRedirectLocation(location)) {
              await handleLoaderRedirect(location, matches2);
            } else if (isFetchActionRedirect(location)) {
              await handleFetchActionRedirect(location, matches2);
            } else {
              await handleLoad(location, matches2);
            }
            navigationLoadId = -1;
            break;
          }
          case "fetcher": {
            let {
              key,
              submission,
              href
            } = event;
            let matches2 = routeMatching.matchClientRoutes(routes, href);
            invariant(matches2, "No matches found");
            let match = matches2.slice(-1)[0];
            if (fetchControllers.has(key))
              abortFetcher(key);
            if (submission && isActionSubmission(submission)) {
              await handleActionFetchSubmission(key, submission, match);
            } else if (submission && isLoaderSubmission(submission)) {
              await handleLoaderFetchSubmission(href, key, submission, match);
            } else {
              await handleLoaderFetch(href, key, match);
            }
            break;
          }
          default: {
            throw new Error(`Unknown data event type: ${event.type}`);
          }
        }
      }
      function dispose() {
        abortNormalNavigation();
        for (let [, controller] of fetchControllers) {
          controller.abort();
        }
      }
      async function handleActionFetchSubmission(key, submission, match) {
        let currentFetcher = state.fetchers.get(key);
        let fetcher = {
          state: "submitting",
          type: "actionSubmission",
          submission,
          data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
        };
        state.fetchers.set(key, fetcher);
        update({
          fetchers: new Map(state.fetchers)
        });
        let controller = new AbortController();
        fetchControllers.set(key, controller);
        let result = await callAction(submission, match, controller.signal);
        if (controller.signal.aborted) {
          return;
        }
        if (isRedirectResult(result)) {
          let locationState = {
            isRedirect: true,
            type: "fetchAction"
          };
          init.onRedirect(result.value.location, locationState);
          return;
        }
        if (maybeBailOnError(match, key, result)) {
          return;
        }
        if (await maybeBailOnCatch(match, key, result)) {
          return;
        }
        let loadFetcher = {
          state: "loading",
          type: "actionReload",
          data: result.value,
          submission
        };
        state.fetchers.set(key, loadFetcher);
        update({
          fetchers: new Map(state.fetchers)
        });
        let maybeActionErrorResult = isErrorResult(result) ? result : void 0;
        let maybeActionCatchResult = isCatchResult(result) ? result : void 0;
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let matchesToLoad = state.nextMatches || state.matches;
        let hrefToLoad = createHref(state.transition.location || state.location);
        let results = await callLoaders(state, createUrl(hrefToLoad), matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, match.route.id, loadFetcher);
        if (controller.signal.aborted) {
          return;
        }
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        let redirect = findRedirect(results);
        if (redirect) {
          let locationState = {
            isRedirect: true,
            type: "loader"
          };
          init.onRedirect(redirect.location, locationState);
          return;
        }
        let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult);
        let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult);
        let doneFetcher = {
          state: "idle",
          type: "done",
          data: result.value,
          submission: void 0
        };
        state.fetchers.set(key, doneFetcher);
        let abortedKeys = abortStaleFetchLoads(loadId);
        if (abortedKeys) {
          markFetchersDone(abortedKeys);
        }
        let yeetedNavigation = yeetStaleNavigationLoad(loadId);
        if (yeetedNavigation) {
          let {
            transition
          } = state;
          invariant(transition.state === "loading", "Expected loading transition");
          update({
            location: transition.location,
            matches: state.nextMatches,
            error,
            errorBoundaryId,
            catch: catchVal,
            catchBoundaryId,
            loaderData: makeLoaderData(state, results, matchesToLoad),
            actionData: transition.type === "actionReload" ? state.actionData : void 0,
            transition: IDLE_TRANSITION,
            fetchers: new Map(state.fetchers)
          });
        } else {
          update({
            fetchers: new Map(state.fetchers),
            error,
            errorBoundaryId,
            loaderData: makeLoaderData(state, results, matchesToLoad)
          });
        }
      }
      function yeetStaleNavigationLoad(landedId) {
        let isLoadingNavigation = state.transition.state === "loading";
        if (isLoadingNavigation && navigationLoadId < landedId) {
          abortNormalNavigation();
          return true;
        }
        return false;
      }
      function markFetchersDone(keys) {
        for (let key of keys) {
          let fetcher = getFetcher(key);
          let doneFetcher = {
            state: "idle",
            type: "done",
            data: fetcher.data,
            submission: void 0
          };
          state.fetchers.set(key, doneFetcher);
        }
      }
      function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds) {
          if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            invariant(fetcher, `Expected fetcher: ${key}`);
            if (fetcher.state === "loading") {
              abortFetcher(key);
              fetchReloadIds.delete(key);
              yeetedKeys.push(key);
            }
          }
        }
        return yeetedKeys.length ? yeetedKeys : false;
      }
      async function handleLoaderFetchSubmission(href, key, submission, match) {
        let currentFetcher = state.fetchers.get(key);
        let fetcher = {
          state: "submitting",
          type: "loaderSubmission",
          submission,
          data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
        };
        state.fetchers.set(key, fetcher);
        update({
          fetchers: new Map(state.fetchers)
        });
        let controller = new AbortController();
        fetchControllers.set(key, controller);
        let result = await callLoader(match, createUrl(href), controller.signal);
        fetchControllers.delete(key);
        if (controller.signal.aborted) {
          return;
        }
        if (isRedirectResult(result)) {
          let locationState = {
            isRedirect: true,
            type: "loader"
          };
          init.onRedirect(result.value.location, locationState);
          return;
        }
        if (maybeBailOnError(match, key, result)) {
          return;
        }
        if (await maybeBailOnCatch(match, key, result)) {
          return;
        }
        let doneFetcher = {
          state: "idle",
          type: "done",
          data: result.value,
          submission: void 0
        };
        state.fetchers.set(key, doneFetcher);
        update({
          fetchers: new Map(state.fetchers)
        });
      }
      async function handleLoaderFetch(href, key, match) {
        let currentFetcher = state.fetchers.get(key);
        let fetcher = {
          state: "loading",
          type: "normalLoad",
          submission: void 0,
          data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
        };
        state.fetchers.set(key, fetcher);
        update({
          fetchers: new Map(state.fetchers)
        });
        let controller = new AbortController();
        fetchControllers.set(key, controller);
        let result = await callLoader(match, createUrl(href), controller.signal);
        if (controller.signal.aborted)
          return;
        fetchControllers.delete(key);
        if (isRedirectResult(result)) {
          let locationState = {
            isRedirect: true,
            type: "loader"
          };
          init.onRedirect(result.value.location, locationState);
          return;
        }
        if (maybeBailOnError(match, key, result)) {
          return;
        }
        if (await maybeBailOnCatch(match, key, result)) {
          return;
        }
        let doneFetcher = {
          state: "idle",
          type: "done",
          data: result.value,
          submission: void 0
        };
        state.fetchers.set(key, doneFetcher);
        update({
          fetchers: new Map(state.fetchers)
        });
      }
      async function maybeBailOnCatch(match, key, result) {
        if (isCatchResult(result)) {
          let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
          state.fetchers.delete(key);
          update({
            transition: IDLE_TRANSITION,
            fetchers: new Map(state.fetchers),
            catch: {
              data: result.value.data,
              status: result.value.status,
              statusText: result.value.statusText
            },
            catchBoundaryId
          });
          return true;
        }
        return false;
      }
      function maybeBailOnError(match, key, result) {
        if (isErrorResult(result)) {
          let errorBoundaryId = findNearestBoundary(match, state.matches);
          state.fetchers.delete(key);
          update({
            fetchers: new Map(state.fetchers),
            error: result.value,
            errorBoundaryId
          });
          return true;
        }
        return false;
      }
      async function handleNotFoundNavigation(location, matches2) {
        abortNormalNavigation();
        let transition = {
          state: "loading",
          type: "normalLoad",
          submission: void 0,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        await Promise.resolve();
        let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
        update({
          location,
          matches: matches2,
          catch: {
            data: null,
            status: 404,
            statusText: "Not Found"
          },
          catchBoundaryId,
          transition: IDLE_TRANSITION
        });
      }
      async function handleActionSubmissionNavigation(location, submission, matches2) {
        abortNormalNavigation();
        let transition = {
          state: "submitting",
          type: "actionSubmission",
          submission,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        let controller = new AbortController();
        pendingNavigationController = controller;
        if (!isIndexRequestAction(submission.action) && matches2[matches2.length - 1].route.id.endsWith("/index")) {
          matches2 = matches2.slice(0, -1);
        }
        let leafMatch = matches2.slice(-1)[0];
        let result = await callAction(submission, leafMatch, controller.signal);
        if (controller.signal.aborted) {
          return;
        }
        if (isRedirectResult(result)) {
          let locationState = {
            isRedirect: true,
            type: "action"
          };
          init.onRedirect(result.value.location, locationState);
          return;
        }
        if (isCatchResult(result)) {
          let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], matches2, result);
          update({
            transition: IDLE_TRANSITION,
            catch: catchVal,
            catchBoundaryId
          });
          return;
        }
        let loadTransition = {
          state: "loading",
          type: "actionReload",
          submission,
          location
        };
        update({
          transition: loadTransition,
          actionData: {
            [leafMatch.route.id]: result.value
          }
        });
        await loadPageData(location, matches2, submission, leafMatch.route.id, result);
      }
      async function handleLoaderSubmissionNavigation(location, submission, matches2) {
        abortNormalNavigation();
        let transition = {
          state: "submitting",
          type: "loaderSubmission",
          submission,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        await loadPageData(location, matches2, submission);
      }
      async function handleHashChange(location, matches2) {
        abortNormalNavigation();
        let transition = {
          state: "loading",
          type: "normalLoad",
          submission: void 0,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        await Promise.resolve();
        update({
          location,
          matches: matches2,
          transition: IDLE_TRANSITION
        });
      }
      async function handleLoad(location, matches2) {
        abortNormalNavigation();
        let transition = {
          state: "loading",
          type: "normalLoad",
          submission: void 0,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        await loadPageData(location, matches2);
      }
      async function handleLoaderRedirect(location, matches2) {
        abortNormalNavigation();
        let transition = {
          state: "loading",
          type: "normalRedirect",
          submission: void 0,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        await loadPageData(location, matches2);
      }
      async function handleLoaderSubmissionRedirect(location, matches2) {
        abortNormalNavigation();
        invariant(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
        let {
          submission
        } = state.transition;
        let transition = {
          state: "loading",
          type: "loaderSubmissionRedirect",
          submission,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        await loadPageData(location, matches2, submission);
      }
      async function handleFetchActionRedirect(location, matches2) {
        abortNormalNavigation();
        let transition = {
          state: "loading",
          type: "fetchActionRedirect",
          submission: void 0,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        await loadPageData(location, matches2);
      }
      async function handleActionRedirect(location, matches2) {
        abortNormalNavigation();
        invariant(state.transition.type === "actionSubmission" || state.transition.type === "actionReload", `Unexpected transition: ${JSON.stringify(state.transition)}`);
        let {
          submission
        } = state.transition;
        let transition = {
          state: "loading",
          type: "actionRedirect",
          submission,
          location
        };
        update({
          transition,
          nextMatches: matches2
        });
        await loadPageData(location, matches2, submission);
      }
      function isHashChangeOnly(location) {
        return createHref(state.location) === createHref(location) && state.location.hash !== location.hash;
      }
      async function loadPageData(location, matches2, submission, submissionRouteId, actionResult) {
        let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0;
        let maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0;
        let controller = new AbortController();
        pendingNavigationController = controller;
        navigationLoadId = ++incrementingLoadId;
        let results = await callLoaders(state, createUrl(createHref(location)), matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, submissionRouteId);
        if (controller.signal.aborted) {
          return;
        }
        let redirect = findRedirect(results);
        if (redirect) {
          if (state.transition.type === "actionReload") {
            let locationState = {
              isRedirect: true,
              type: "action"
            };
            init.onRedirect(redirect.location, locationState);
          } else if (state.transition.type === "loaderSubmission") {
            let locationState = {
              isRedirect: true,
              type: "loaderSubmission"
            };
            init.onRedirect(redirect.location, locationState);
          } else {
            let locationState = {
              isRedirect: true,
              type: "loader"
            };
            init.onRedirect(redirect.location, locationState);
          }
          return;
        }
        let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
        let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult);
        let abortedIds = abortStaleFetchLoads(navigationLoadId);
        if (abortedIds) {
          markFetchersDone(abortedIds);
        }
        update({
          location,
          matches: matches2,
          error,
          errorBoundaryId,
          catch: catchVal,
          catchBoundaryId,
          loaderData: makeLoaderData(state, results, matches2),
          actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
          transition: IDLE_TRANSITION,
          fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
        });
      }
      function abortNormalNavigation() {
        var _pendingNavigationCon;
        (_pendingNavigationCon = pendingNavigationController) === null || _pendingNavigationCon === void 0 ? void 0 : _pendingNavigationCon.abort();
      }
      function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        invariant(controller, `Expected fetch controller: ${key}`);
        controller.abort();
        fetchControllers.delete(key);
      }
      return {
        send,
        getState,
        getFetcher,
        deleteFetcher,
        dispose,
        get _internalFetchControllers() {
          return fetchControllers;
        }
      };
    }
    function isIndexRequestAction(action) {
      let indexRequest = false;
      let searchParams = new URLSearchParams(action.split("?", 2)[1] || "");
      for (let param of searchParams.getAll("index")) {
        if (!param) {
          indexRequest = true;
        }
      }
      return indexRequest;
    }
    async function callLoaders(state, url, matches, signal, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher) {
      let matchesToLoad = filterMatchesToLoad(state, url, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher);
      return Promise.all(matchesToLoad.map((match) => callLoader(match, url, signal)));
    }
    async function callLoader(match, url, signal) {
      invariant(match.route.loader, `Expected loader for ${match.route.id}`);
      try {
        let {
          params
        } = match;
        let value = await match.route.loader({
          params,
          url,
          signal
        });
        return {
          match,
          value
        };
      } catch (error) {
        return {
          match,
          value: error
        };
      }
    }
    async function callAction(submission, match, signal) {
      if (!match.route.action) {
        throw new Error(`Route "${match.route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
      }
      try {
        let value = await match.route.action({
          url: createUrl(submission.action),
          params: match.params,
          submission,
          signal
        });
        return {
          match,
          value
        };
      } catch (error) {
        return {
          match,
          value: error
        };
      }
    }
    function filterMatchesToLoad(state, url, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher) {
      if (submissionRouteId && (actionCatchResult || actionErrorResult)) {
        let foundProblematicRoute = false;
        matches = matches.filter((match) => {
          if (foundProblematicRoute) {
            return false;
          }
          if (match.route.id === submissionRouteId) {
            foundProblematicRoute = true;
            return false;
          }
          return true;
        });
      }
      let isNew = (match, index) => {
        if (!state.matches[index])
          return true;
        return match.route.id !== state.matches[index].route.id;
      };
      let matchPathChanged = (match, index) => {
        var _state$matches$index$;
        return state.matches[index].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index].params["*"] !== match.params["*"];
      };
      let filterByRouteProps = (match, index) => {
        if (!match.route.loader) {
          return false;
        }
        if (isNew(match, index) || matchPathChanged(match, index)) {
          return true;
        }
        if (match.route.shouldReload) {
          let prevUrl = createUrl(createHref(state.location));
          return match.route.shouldReload({
            prevUrl,
            url,
            submission,
            params: match.params
          });
        }
        return true;
      };
      let isInRootCatchBoundary = state.matches.length === 1;
      if (isInRootCatchBoundary) {
        return matches.filter((match) => !!match.route.loader);
      }
      if ((fetcher === null || fetcher === void 0 ? void 0 : fetcher.type) === "actionReload") {
        return matches.filter(filterByRouteProps);
      } else if (state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || createHref(url) === createHref(state.location) || url.searchParams.toString() !== state.location.search) {
        return matches.filter(filterByRouteProps);
      }
      return matches.filter((match, index, arr) => {
        if ((actionErrorResult || actionCatchResult) && arr.length - 1 === index) {
          return false;
        }
        return match.route.loader && (isNew(match, index) || matchPathChanged(match, index));
      });
    }
    function isRedirectResult(result) {
      return result.value instanceof TransitionRedirect;
    }
    function createHref(location) {
      return location.pathname + location.search;
    }
    function findRedirect(results) {
      for (let result of results) {
        if (isRedirectResult(result)) {
          return result.value;
        }
      }
      return null;
    }
    async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
      let loaderCatchResult;
      for (let result of results) {
        if (isCatchResult(result)) {
          loaderCatchResult = result;
          break;
        }
      }
      let extractCatchData = async (res) => ({
        status: res.status,
        statusText: res.statusText,
        data: res.data
      });
      if (actionCatchResult && loaderCatchResult) {
        let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
        return [await extractCatchData(actionCatchResult.value), boundaryId];
      }
      if (loaderCatchResult) {
        let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
        return [await extractCatchData(loaderCatchResult.value), boundaryId];
      }
      return [void 0, void 0];
    }
    function findErrorAndBoundaryId(results, matches, actionErrorResult) {
      let loaderErrorResult;
      for (let result of results) {
        if (isErrorResult(result)) {
          loaderErrorResult = result;
          break;
        }
      }
      if (actionErrorResult && loaderErrorResult) {
        let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
        return [actionErrorResult.value, boundaryId];
      }
      if (actionErrorResult) {
        let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
        return [actionErrorResult.value, boundaryId];
      }
      if (loaderErrorResult) {
        let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
        return [loaderErrorResult.value, boundaryId];
      }
      return [void 0, void 0];
    }
    function findNearestCatchBoundary(matchWithError, matches) {
      let nearestBoundaryId = null;
      for (let match of matches) {
        if (match.route.CatchBoundary) {
          nearestBoundaryId = match.route.id;
        }
        if (match === matchWithError) {
          break;
        }
      }
      return nearestBoundaryId;
    }
    function findNearestBoundary(matchWithError, matches) {
      let nearestBoundaryId = null;
      for (let match of matches) {
        if (match.route.ErrorBoundary) {
          nearestBoundaryId = match.route.id;
        }
        if (match === matchWithError) {
          break;
        }
      }
      return nearestBoundaryId;
    }
    function makeLoaderData(state, results, matches) {
      let newData = {};
      for (let {
        match,
        value
      } of results) {
        newData[match.route.id] = value;
      }
      let loaderData = {};
      for (let {
        route
      } of matches) {
        let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
        if (value !== void 0) {
          loaderData[route.id] = value;
        }
      }
      return loaderData;
    }
    function isCatchResult(result) {
      return result.value instanceof CatchValue;
    }
    function isErrorResult(result) {
      return result.value instanceof Error;
    }
    function createUrl(href) {
      return new URL(href, window.location.origin);
    }
    exports.CatchValue = CatchValue;
    exports.IDLE_FETCHER = IDLE_FETCHER;
    exports.IDLE_TRANSITION = IDLE_TRANSITION;
    exports.TransitionRedirect = TransitionRedirect;
    exports.createTransitionManager = createTransitionManager;
  }
});

// node_modules/@remix-run/react/routes.js
var require_routes = __commonJS({
  "node_modules/@remix-run/react/routes.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React2 = require_react();
    var routeModules = require_routeModules();
    var data = require_data();
    var transition = require_transition();
    var links = require_links();
    var invariant = require_invariant();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React2);
    function createClientRoute(entryRoute, routeModulesCache, Component) {
      return {
        caseSensitive: !!entryRoute.caseSensitive,
        element: /* @__PURE__ */ React__namespace.createElement(Component, {
          id: entryRoute.id
        }),
        id: entryRoute.id,
        path: entryRoute.path,
        index: entryRoute.index,
        module: entryRoute.module,
        loader: createLoader(entryRoute, routeModulesCache),
        action: createAction(entryRoute),
        shouldReload: createShouldReload(entryRoute, routeModulesCache),
        ErrorBoundary: entryRoute.hasErrorBoundary,
        CatchBoundary: entryRoute.hasCatchBoundary,
        hasLoader: entryRoute.hasLoader
      };
    }
    function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
      return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
        let route = createClientRoute(routeManifest[key], routeModulesCache, Component);
        let children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
        if (children.length > 0)
          route.children = children;
        return route;
      });
    }
    function createShouldReload(route, routeModules2) {
      let shouldReload = (arg) => {
        let module2 = routeModules2[route.id];
        invariant(module2, `Expected route module to be loaded for ${route.id}`);
        if (module2.unstable_shouldReload) {
          return module2.unstable_shouldReload(arg);
        }
        return true;
      };
      return shouldReload;
    }
    async function loadRouteModuleWithBlockingLinks(route, routeModules$1) {
      let routeModule = await routeModules.loadRouteModule(route, routeModules$1);
      await links.prefetchStyleLinks(routeModule);
      return routeModule;
    }
    function createLoader(route, routeModules2) {
      let loader = async ({
        url,
        signal,
        submission
      }) => {
        if (route.hasLoader) {
          let [result] = await Promise.all([data.fetchData(url, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules2)]);
          if (result instanceof Error)
            throw result;
          let redirect = await checkRedirect(result);
          if (redirect)
            return redirect;
          if (data.isCatchResponse(result)) {
            throw new transition.CatchValue(result.status, result.statusText, await data.extractData(result.clone()));
          }
          return data.extractData(result);
        } else {
          await loadRouteModuleWithBlockingLinks(route, routeModules2);
        }
      };
      return loader;
    }
    function createAction(route) {
      if (!route.hasAction)
        return void 0;
      let action = async ({
        url,
        signal,
        submission
      }) => {
        let result = await data.fetchData(url, route.id, signal, submission);
        if (result instanceof Error) {
          throw result;
        }
        let redirect = await checkRedirect(result);
        if (redirect)
          return redirect;
        if (data.isCatchResponse(result)) {
          throw new transition.CatchValue(result.status, result.statusText, await data.extractData(result.clone()));
        }
        return data.extractData(result);
      };
      return action;
    }
    async function checkRedirect(response) {
      if (data.isRedirectResponse(response)) {
        let url = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
        if (url.origin !== window.location.origin) {
          await new Promise(() => {
            window.location.replace(url.href);
          });
        } else {
          return new transition.TransitionRedirect(url.pathname + url.search);
        }
      }
      return null;
    }
    exports.createClientRoute = createClientRoute;
    exports.createClientRoutes = createClientRoutes;
  }
});

// node_modules/@remix-run/react/components.js
var require_components = __commonJS({
  "node_modules/@remix-run/react/components.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _rollupPluginBabelHelpers = require_rollupPluginBabelHelpers();
    var React2 = require_react();
    var reactRouterDom = require_main3();
    var errorBoundaries = require_errorBoundaries();
    var invariant = require_invariant();
    var links = require_links();
    var markup = require_markup();
    var routes = require_routes();
    var routeMatching = require_routeMatching();
    var transition = require_transition();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React2);
    var RemixEntryContext = /* @__PURE__ */ React__namespace.createContext(void 0);
    function useRemixEntryContext() {
      let context = React__namespace.useContext(RemixEntryContext);
      invariant(context, "You must render this element inside a <Remix> element");
      return context;
    }
    function RemixEntry({
      context: entryContext,
      action,
      location: historyLocation,
      navigator: _navigator,
      static: staticProp = false
    }) {
      let {
        manifest,
        routeData: documentLoaderData,
        actionData: documentActionData,
        routeModules,
        serverHandoffString,
        appState: entryComponentDidCatchEmulator
      } = entryContext;
      let clientRoutes = React__namespace.useMemo(() => routes.createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]);
      let [clientState, setClientState] = React__namespace.useState(entryComponentDidCatchEmulator);
      let [transitionManager] = React__namespace.useState(() => {
        return transition.createTransitionManager({
          routes: clientRoutes,
          actionData: documentActionData,
          loaderData: documentLoaderData,
          location: historyLocation,
          catch: entryComponentDidCatchEmulator.catch,
          catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
          onRedirect: _navigator.replace,
          onChange: (state) => {
            setClientState({
              catch: state.catch,
              error: state.error,
              catchBoundaryRouteId: state.catchBoundaryId,
              loaderBoundaryRouteId: state.errorBoundaryId,
              renderBoundaryRouteId: null,
              trackBoundaries: false,
              trackCatchBoundaries: false
            });
          }
        });
      });
      let navigator = React__namespace.useMemo(() => {
        let push = (to, state) => {
          return transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state);
        };
        return {
          ..._navigator,
          push
        };
      }, [_navigator, transitionManager]);
      let {
        location,
        matches,
        loaderData,
        actionData
      } = transitionManager.getState();
      React__namespace.useEffect(() => {
        let {
          location: location2
        } = transitionManager.getState();
        if (historyLocation === location2)
          return;
        transitionManager.send({
          type: "navigation",
          location: historyLocation,
          submission: consumeNextNavigationSubmission(),
          action
        });
      }, [transitionManager, historyLocation, action]);
      let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0;
      let ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
      return /* @__PURE__ */ React__namespace.createElement(RemixEntryContext.Provider, {
        value: {
          matches,
          manifest,
          appState: clientState,
          routeModules,
          serverHandoffString,
          clientRoutes,
          routeData: loaderData,
          actionData,
          transitionManager
        }
      }, /* @__PURE__ */ React__namespace.createElement(errorBoundaries.RemixErrorBoundary, {
        location,
        component: errorBoundaries.RemixRootDefaultErrorBoundary,
        error: ssrErrorBeforeRoutesRendered
      }, /* @__PURE__ */ React__namespace.createElement(errorBoundaries.RemixCatchBoundary, {
        location,
        component: errorBoundaries.RemixRootDefaultCatchBoundary,
        catch: ssrCatchBeforeRoutesRendered
      }, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.Router, {
        navigationType: action,
        location,
        navigator,
        static: staticProp
      }, /* @__PURE__ */ React__namespace.createElement(Routes, null)))));
    }
    function deserializeError(data) {
      let error = new Error(data.message);
      error.stack = data.stack;
      return error;
    }
    function Routes() {
      let {
        clientRoutes
      } = useRemixEntryContext();
      let element = reactRouterDom.useRoutes(clientRoutes) || clientRoutes[0].element;
      return element;
    }
    var RemixRouteContext = /* @__PURE__ */ React__namespace.createContext(void 0);
    function useRemixRouteContext() {
      let context = React__namespace.useContext(RemixRouteContext);
      invariant(context, "You must render this element in a remix route element");
      return context;
    }
    function DefaultRouteComponent({
      id
    }) {
      throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
    }
    function RemixRoute({
      id
    }) {
      let location = reactRouterDom.useLocation();
      let {
        routeData,
        routeModules,
        appState
      } = useRemixEntryContext();
      let data = routeData[id];
      let {
        default: Component,
        CatchBoundary,
        ErrorBoundary
      } = routeModules[id];
      let element = Component ? /* @__PURE__ */ React__namespace.createElement(Component, null) : /* @__PURE__ */ React__namespace.createElement(DefaultRouteComponent, {
        id
      });
      let context = {
        data,
        id
      };
      if (CatchBoundary) {
        let maybeServerCaught = appState.catch && appState.catchBoundaryRouteId === id ? appState.catch : void 0;
        if (appState.trackCatchBoundaries) {
          appState.catchBoundaryRouteId = id;
        }
        context = maybeServerCaught ? {
          id,
          get data() {
            console.error("You cannot `useLoaderData` in a catch boundary.");
            return void 0;
          }
        } : {
          id,
          data
        };
        element = /* @__PURE__ */ React__namespace.createElement(errorBoundaries.RemixCatchBoundary, {
          location,
          component: CatchBoundary,
          catch: maybeServerCaught
        }, element);
      }
      if (ErrorBoundary) {
        let maybeServerRenderError = appState.error && (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id) ? deserializeError(appState.error) : void 0;
        if (appState.trackBoundaries) {
          appState.renderBoundaryRouteId = id;
        }
        context = maybeServerRenderError ? {
          id,
          get data() {
            console.error("You cannot `useLoaderData` in an error boundary.");
            return void 0;
          }
        } : {
          id,
          data
        };
        element = /* @__PURE__ */ React__namespace.createElement(errorBoundaries.RemixErrorBoundary, {
          location,
          component: ErrorBoundary,
          error: maybeServerRenderError
        }, element);
      }
      return /* @__PURE__ */ React__namespace.createElement(RemixRouteContext.Provider, {
        value: context
      }, element);
    }
    function usePrefetchBehavior(prefetch, theirElementProps) {
      let [maybePrefetch, setMaybePrefetch] = React__namespace.useState(false);
      let [shouldPrefetch, setShouldPrefetch] = React__namespace.useState(false);
      let {
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave,
        onTouchStart
      } = theirElementProps;
      React__namespace.useEffect(() => {
        if (prefetch === "render") {
          setShouldPrefetch(true);
        }
      }, [prefetch]);
      let setIntent = () => {
        if (prefetch === "intent") {
          setMaybePrefetch(true);
        }
      };
      let cancelIntent = () => {
        if (prefetch === "intent") {
          setMaybePrefetch(false);
        }
      };
      React__namespace.useEffect(() => {
        if (maybePrefetch) {
          let id = setTimeout(() => {
            setShouldPrefetch(true);
          }, 100);
          return () => {
            clearTimeout(id);
          };
        }
      }, [maybePrefetch]);
      return [shouldPrefetch, {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }];
    }
    var NavLink2 = /* @__PURE__ */ React__namespace.forwardRef(({
      to,
      prefetch = "none",
      ...props
    }, forwardedRef) => {
      let href = reactRouterDom.useHref(to);
      let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.NavLink, _rollupPluginBabelHelpers["extends"]({
        ref: forwardedRef,
        to
      }, prefetchHandlers, props)), shouldPrefetch ? /* @__PURE__ */ React__namespace.createElement(PrefetchPageLinks2, {
        page: href
      }) : null);
    });
    var Link2 = /* @__PURE__ */ React__namespace.forwardRef(({
      to,
      prefetch = "none",
      ...props
    }, forwardedRef) => {
      let href = reactRouterDom.useHref(to);
      let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.Link, _rollupPluginBabelHelpers["extends"]({
        ref: forwardedRef,
        to
      }, prefetchHandlers, props)), shouldPrefetch ? /* @__PURE__ */ React__namespace.createElement(PrefetchPageLinks2, {
        page: href
      }) : null);
    });
    function composeEventHandlers(theirHandler, ourHandler) {
      return (event) => {
        theirHandler && theirHandler(event);
        if (!event.defaultPrevented) {
          ourHandler(event);
        }
      };
    }
    function Links2() {
      let {
        matches,
        routeModules,
        manifest
      } = useRemixEntryContext();
      let links$1 = React__namespace.useMemo(() => links.getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, links$1.map((link) => links.isPageLinkDescriptor(link) ? /* @__PURE__ */ React__namespace.createElement(PrefetchPageLinks2, _rollupPluginBabelHelpers["extends"]({
        key: link.page
      }, link)) : /* @__PURE__ */ React__namespace.createElement("link", _rollupPluginBabelHelpers["extends"]({
        key: link.rel + link.href
      }, link))));
    }
    function PrefetchPageLinks2({
      page,
      ...dataLinkProps
    }) {
      let {
        clientRoutes
      } = useRemixEntryContext();
      let matches = React__namespace.useMemo(() => routeMatching.matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
      if (!matches) {
        console.warn(`Tried to prefetch ${page} but no routes matched.`);
        return null;
      }
      return /* @__PURE__ */ React__namespace.createElement(PrefetchPageLinksImpl, _rollupPluginBabelHelpers["extends"]({
        page,
        matches
      }, dataLinkProps));
    }
    function usePrefetchedStylesheets(matches) {
      let {
        routeModules
      } = useRemixEntryContext();
      let [styleLinks, setStyleLinks] = React__namespace.useState([]);
      React__namespace.useEffect(() => {
        let interrupted = false;
        links.getStylesheetPrefetchLinks(matches, routeModules).then((links2) => {
          if (!interrupted)
            setStyleLinks(links2);
        });
        return () => {
          interrupted = true;
        };
      }, [matches, routeModules]);
      return styleLinks;
    }
    function PrefetchPageLinksImpl({
      page,
      matches: nextMatches,
      ...linkProps
    }) {
      let location = reactRouterDom.useLocation();
      let {
        matches,
        manifest
      } = useRemixEntryContext();
      let newMatchesForData = React__namespace.useMemo(() => links.getNewMatchesForLinks(page, nextMatches, matches, location, "data"), [page, nextMatches, matches, location]);
      let newMatchesForAssets = React__namespace.useMemo(() => links.getNewMatchesForLinks(page, nextMatches, matches, location, "assets"), [page, nextMatches, matches, location]);
      let dataHrefs = React__namespace.useMemo(() => links.getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]);
      let moduleHrefs = React__namespace.useMemo(() => links.getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
      let styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React__namespace.createElement("link", _rollupPluginBabelHelpers["extends"]({
        key: href,
        rel: "prefetch",
        as: "fetch",
        href
      }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React__namespace.createElement("link", _rollupPluginBabelHelpers["extends"]({
        key: href,
        rel: "modulepreload",
        href
      }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React__namespace.createElement("link", _rollupPluginBabelHelpers["extends"]({
        key: link.href
      }, link))));
    }
    function Meta2() {
      let {
        matches,
        routeData,
        routeModules
      } = useRemixEntryContext();
      let location = reactRouterDom.useLocation();
      let meta = {};
      let parentsData = {};
      for (let match of matches) {
        let routeId = match.route.id;
        let data = routeData[routeId];
        let params = match.params;
        let routeModule = routeModules[routeId];
        if (routeModule.meta) {
          let routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
            data,
            parentsData,
            params,
            location
          }) : routeModule.meta;
          Object.assign(meta, routeMeta);
        }
        parentsData[routeId] = data;
      }
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, Object.entries(meta).map(([name, value]) => {
        let isOpenGraphTag = name.startsWith("og:");
        return name === "title" ? /* @__PURE__ */ React__namespace.createElement("title", {
          key: "title"
        }, value) : Array.isArray(value) ? value.map((content) => isOpenGraphTag ? /* @__PURE__ */ React__namespace.createElement("meta", {
          key: name + content,
          property: name,
          content
        }) : /* @__PURE__ */ React__namespace.createElement("meta", {
          key: name + content,
          name,
          content
        })) : isOpenGraphTag ? /* @__PURE__ */ React__namespace.createElement("meta", {
          key: name,
          property: name,
          content: value
        }) : /* @__PURE__ */ React__namespace.createElement("meta", {
          key: name,
          name,
          content: value
        });
      }));
    }
    var isHydrated = false;
    function Scripts2(props) {
      let {
        manifest,
        matches,
        pendingLocation,
        clientRoutes,
        serverHandoffString
      } = useRemixEntryContext();
      React__namespace.useEffect(() => {
        isHydrated = true;
      }, []);
      let initialScripts = React__namespace.useMemo(() => {
        let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "";
        let routeModulesScript = `${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join("\n")}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};`;
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, props, {
          suppressHydrationWarning: true,
          dangerouslySetInnerHTML: markup.createHtml(contextScript)
        })), /* @__PURE__ */ React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, props, {
          src: manifest.url
        })), /* @__PURE__ */ React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, props, {
          dangerouslySetInnerHTML: markup.createHtml(routeModulesScript),
          type: "module"
        })), /* @__PURE__ */ React__namespace.createElement("script", _rollupPluginBabelHelpers["extends"]({}, props, {
          src: manifest.entry.module,
          type: "module"
        })));
      }, []);
      let nextMatches = React__namespace.useMemo(() => {
        if (pendingLocation) {
          let matches2 = routeMatching.matchClientRoutes(clientRoutes, pendingLocation);
          invariant(matches2, `No routes match path "${pendingLocation.pathname}"`);
          return matches2;
        }
        return [];
      }, [pendingLocation, clientRoutes]);
      let routePreloads = matches.concat(nextMatches).map((match) => {
        let route = manifest.routes[match.route.id];
        return (route.imports || []).concat([route.module]);
      }).flat(1);
      let preloads = manifest.entry.imports.concat(routePreloads);
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, dedupe(preloads).map((path) => /* @__PURE__ */ React__namespace.createElement("link", {
        key: path,
        rel: "modulepreload",
        href: path,
        crossOrigin: props.crossOrigin
      })), isHydrated ? null : initialScripts);
    }
    function dedupe(array) {
      return [...new Set(array)];
    }
    var Form2 = /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
      return /* @__PURE__ */ React__namespace.createElement(FormImpl, _rollupPluginBabelHelpers["extends"]({}, props, {
        ref
      }));
    });
    var FormImpl = /* @__PURE__ */ React__namespace.forwardRef(({
      reloadDocument = false,
      replace = false,
      method = "get",
      action = ".",
      encType = "application/x-www-form-urlencoded",
      fetchKey,
      onSubmit,
      ...props
    }, forwardedRef) => {
      let submit = useSubmitImpl(fetchKey);
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let formAction = useFormAction2(action, formMethod);
      let formRef = React__namespace.useRef();
      let ref = useComposedRefs(forwardedRef, formRef);
      let clickedButtonRef = React__namespace.useRef();
      React__namespace.useEffect(() => {
        let form = formRef.current;
        if (!form)
          return;
        function handleClick(event) {
          if (!(event.target instanceof HTMLElement))
            return;
          let submitButton = event.target.closest("button,input[type=submit]");
          if (submitButton && submitButton.type === "submit") {
            clickedButtonRef.current = submitButton;
          }
        }
        form.addEventListener("click", handleClick);
        return () => {
          form && form.removeEventListener("click", handleClick);
        };
      }, []);
      return /* @__PURE__ */ React__namespace.createElement("form", _rollupPluginBabelHelpers["extends"]({
        ref,
        method: formMethod,
        action: formAction,
        encType,
        onSubmit: reloadDocument ? void 0 : (event) => {
          onSubmit && onSubmit(event);
          if (event.defaultPrevented)
            return;
          event.preventDefault();
          submit(clickedButtonRef.current || event.currentTarget, {
            method,
            replace
          });
          clickedButtonRef.current = null;
        }
      }, props));
    });
    function isActionRequestMethod(method) {
      method = method.toLowerCase();
      return method === "post" || method === "put" || method === "patch" || method === "delete";
    }
    function useFormAction2(action = ".", method = "get") {
      let {
        id
      } = useRemixRouteContext();
      let path = reactRouterDom.useResolvedPath(action);
      let search = path.search;
      let isIndexRoute = id.endsWith("/index");
      if (action === "." && isIndexRoute && isActionRequestMethod(method)) {
        search = search ? search.replace(/^\?/, "?index&") : "?index";
      }
      return path.pathname + search;
    }
    function useSubmit2() {
      return useSubmitImpl();
    }
    function useSubmitImpl(key) {
      let navigate = reactRouterDom.useNavigate();
      let defaultAction = useFormAction2();
      let {
        transitionManager
      } = useRemixEntryContext();
      return React__namespace.useCallback((target, options = {}) => {
        let method;
        let action;
        let encType;
        let formData;
        if (isFormElement(target)) {
          let submissionTrigger = options.submissionTrigger;
          method = options.method || target.method;
          action = options.action || target.action;
          encType = options.encType || target.enctype;
          formData = new FormData(target);
          if (submissionTrigger && submissionTrigger.name) {
            formData.append(submissionTrigger.name, submissionTrigger.value);
          }
        } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
          let form = target.form;
          if (form == null) {
            throw new Error(`Cannot submit a <button> without a <form>`);
          }
          method = options.method || target.getAttribute("formmethod") || form.method;
          action = options.action || target.getAttribute("formaction") || form.action;
          encType = options.encType || target.getAttribute("formenctype") || form.enctype;
          formData = new FormData(form);
          if (target.name) {
            formData.set(target.name, target.value);
          }
        } else {
          if (isHtmlElement(target)) {
            throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
          }
          method = options.method || "get";
          action = options.action || defaultAction;
          encType = options.encType || "application/x-www-form-urlencoded";
          if (target instanceof FormData) {
            formData = target;
          } else {
            formData = new FormData();
            if (target instanceof URLSearchParams) {
              for (let [name, value] of target) {
                formData.append(name, value);
              }
            } else if (target != null) {
              for (let name of Object.keys(target)) {
                formData.append(name, target[name]);
              }
            }
          }
        }
        let {
          protocol,
          host
        } = window.location;
        let url = new URL(action, `${protocol}//${host}`);
        if (method.toLowerCase() === "get") {
          for (let [name, value] of formData) {
            if (typeof value === "string") {
              url.searchParams.append(name, value);
            } else {
              throw new Error(`Cannot submit binary form data using GET`);
            }
          }
        }
        let submission = {
          formData,
          action: url.pathname + url.search,
          method: method.toUpperCase(),
          encType,
          key: Math.random().toString(36).substr(2, 8)
        };
        if (key) {
          transitionManager.send({
            type: "fetcher",
            href: submission.action,
            submission,
            key
          });
        } else {
          setNextNavigationSubmission(submission);
          navigate(url.pathname + url.search, {
            replace: options.replace
          });
        }
      }, [defaultAction, key, navigate, transitionManager]);
    }
    var nextNavigationSubmission;
    function setNextNavigationSubmission(submission) {
      nextNavigationSubmission = submission;
    }
    function consumeNextNavigationSubmission() {
      let submission = nextNavigationSubmission;
      nextNavigationSubmission = void 0;
      return submission;
    }
    function isHtmlElement(object) {
      return object != null && typeof object.tagName === "string";
    }
    function isButtonElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
    }
    function isFormElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
    }
    function isInputElement(object) {
      return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
    }
    function useBeforeUnload2(callback) {
      React__namespace.useEffect(() => {
        window.addEventListener("beforeunload", callback);
        return () => {
          window.removeEventListener("beforeunload", callback);
        };
      }, [callback]);
    }
    function useMatches2() {
      let {
        matches,
        routeData,
        routeModules
      } = useRemixEntryContext();
      return matches.map((match) => {
        var _routeModules$match$r;
        let {
          pathname,
          params
        } = match;
        return {
          id: match.route.id,
          pathname,
          params,
          data: routeData[match.route.id],
          handle: (_routeModules$match$r = routeModules[match.route.id]) === null || _routeModules$match$r === void 0 ? void 0 : _routeModules$match$r.handle
        };
      });
    }
    function useLoaderData2() {
      return useRemixRouteContext().data;
    }
    function useActionData2() {
      let {
        id: routeId
      } = useRemixRouteContext();
      let {
        transitionManager
      } = useRemixEntryContext();
      let {
        actionData
      } = transitionManager.getState();
      return actionData ? actionData[routeId] : void 0;
    }
    function useTransition2() {
      let {
        transitionManager
      } = useRemixEntryContext();
      return transitionManager.getState().transition;
    }
    function createFetcherForm(fetchKey) {
      return /* @__PURE__ */ React__namespace.forwardRef((props, ref) => {
        return /* @__PURE__ */ React__namespace.createElement(FormImpl, _rollupPluginBabelHelpers["extends"]({}, props, {
          ref,
          fetchKey
        }));
      });
    }
    var fetcherId = 0;
    function useFetcher2() {
      let {
        transitionManager
      } = useRemixEntryContext();
      let [key] = React__namespace.useState(() => String(++fetcherId));
      let [Form3] = React__namespace.useState(() => createFetcherForm(key));
      let [load] = React__namespace.useState(() => (href) => {
        transitionManager.send({
          type: "fetcher",
          href,
          key
        });
      });
      let submit = useSubmitImpl(key);
      let fetcher = transitionManager.getFetcher(key);
      let fetcherWithComponents = React__namespace.useMemo(() => ({
        Form: Form3,
        submit,
        load,
        ...fetcher
      }), [fetcher, Form3, submit, load]);
      React__namespace.useEffect(() => {
        return () => transitionManager.deleteFetcher(key);
      }, [transitionManager, key]);
      return fetcherWithComponents;
    }
    function useFetchers2() {
      let {
        transitionManager
      } = useRemixEntryContext();
      let {
        fetchers
      } = transitionManager.getState();
      return [...fetchers.values()];
    }
    function LiveReload2({
      port = 8002
    }) {
      if (false)
        return null;
      return /* @__PURE__ */ React__namespace.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
          let ws = new WebSocket("ws://localhost:${port}/socket");
          ws.onmessage = message => {
            let event = JSON.parse(message.data);
            if (event.type === "LOG") {
              console.log(event.message);
            }
            if (event.type === "RELOAD") {
              console.log("\u{1F4BF} Reloading window ...");
              window.location.reload();
            }
          };
          ws.onerror = error => {
            console.log("Remix dev asset server web socket error:");
            console.error(error);
          };
      `
        }
      });
    }
    function useComposedRefs(...refs) {
      return React__namespace.useCallback((node) => {
        for (let ref of refs) {
          if (ref == null)
            continue;
          if (typeof ref === "function") {
            ref(node);
          } else {
            try {
              ref.current = node;
            } catch (_) {
            }
          }
        }
      }, refs);
    }
    exports.Form = Form2;
    exports.FormImpl = FormImpl;
    exports.Link = Link2;
    exports.Links = Links2;
    exports.LiveReload = LiveReload2;
    exports.Meta = Meta2;
    exports.NavLink = NavLink2;
    exports.PrefetchPageLinks = PrefetchPageLinks2;
    exports.RemixEntry = RemixEntry;
    exports.RemixRoute = RemixRoute;
    exports.Scripts = Scripts2;
    exports.composeEventHandlers = composeEventHandlers;
    exports.useActionData = useActionData2;
    exports.useBeforeUnload = useBeforeUnload2;
    exports.useFetcher = useFetcher2;
    exports.useFetchers = useFetchers2;
    exports.useFormAction = useFormAction2;
    exports.useLoaderData = useLoaderData2;
    exports.useMatches = useMatches2;
    exports.useSubmit = useSubmit2;
    exports.useSubmitImpl = useSubmitImpl;
    exports.useTransition = useTransition2;
  }
});

// node_modules/@remix-run/react/browser.js
var require_browser = __commonJS({
  "node_modules/@remix-run/react/browser.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var history = require_main();
    var React2 = require_react();
    var components = require_components();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React2);
    function RemixBrowser2(_props) {
      let historyRef = React__namespace.useRef();
      if (historyRef.current == null) {
        historyRef.current = history.createBrowserHistory({
          window
        });
      }
      let history$1 = historyRef.current;
      let [state, dispatch] = React__namespace.useReducer((_, update) => update, {
        action: history$1.action,
        location: history$1.location
      });
      React__namespace.useLayoutEffect(() => history$1.listen(dispatch), [history$1]);
      let entryContext = window.__remixContext;
      entryContext.manifest = window.__remixManifest;
      entryContext.routeModules = window.__remixRouteModules;
      entryContext.appState.trackBoundaries = false;
      entryContext.appState.trackCatchBoundaries = false;
      return /* @__PURE__ */ React__namespace.createElement(components.RemixEntry, {
        context: entryContext,
        action: state.action,
        location: state.location,
        navigator: history$1
      });
    }
    exports.RemixBrowser = RemixBrowser2;
  }
});

// node_modules/@remix-run/react/scroll-restoration.js
var require_scroll_restoration = __commonJS({
  "node_modules/@remix-run/react/scroll-restoration.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var React2 = require_react();
    var reactRouterDom = require_main3();
    var components = require_components();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React2);
    var STORAGE_KEY = "positions";
    var positions = {};
    if (typeof document !== "undefined") {
      let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
      if (sessionPositions) {
        positions = JSON.parse(sessionPositions);
      }
    }
    function ScrollRestoration2() {
      useScrollRestoration();
      React__namespace.useEffect(() => {
        window.history.scrollRestoration = "manual";
      }, []);
      components.useBeforeUnload(React__namespace.useCallback(() => {
        window.history.scrollRestoration = "auto";
      }, []));
      return /* @__PURE__ */ React__namespace.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
          let STORAGE_KEY = ${JSON.stringify(STORAGE_KEY)};
          if (!window.history.state || !window.history.state.key) {
            window.history.replaceState({ key: Math.random().toString(32).slice(2) }, null);
          }
          try {
            let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}')
            let storedY = positions[window.history.state.key];
            if (typeof storedY === 'number') {
              window.scrollTo(0, storedY)
            }
          } catch(error) {
            console.error(error)
            sessionStorage.removeItem(STORAGE_KEY)
          }
        `
        }
      });
    }
    var hydrated = false;
    function useScrollRestoration() {
      let location = reactRouterDom.useLocation();
      let transition = components.useTransition();
      let wasSubmissionRef = React__namespace.useRef(false);
      React__namespace.useEffect(() => {
        if (transition.submission) {
          wasSubmissionRef.current = true;
        }
      }, [transition]);
      React__namespace.useEffect(() => {
        if (transition.location) {
          positions[location.key] = window.scrollY;
        }
      }, [transition, location]);
      components.useBeforeUnload(React__namespace.useCallback(() => {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
      }, []));
      if (typeof document !== "undefined") {
        React__namespace.useLayoutEffect(() => {
          if (!hydrated) {
            hydrated = true;
            return;
          }
          let y = positions[location.key];
          if (y) {
            window.scrollTo(0, y);
            return;
          }
          if (location.hash) {
            let el = document.querySelector(location.hash);
            if (el) {
              el.scrollIntoView();
              return;
            }
          }
          if (wasSubmissionRef.current === true) {
            wasSubmissionRef.current = false;
            return;
          }
          window.scrollTo(0, 0);
        }, [location]);
      }
      React__namespace.useEffect(() => {
        if (transition.submission) {
          wasSubmissionRef.current = true;
        }
      }, [transition]);
    }
    exports.ScrollRestoration = ScrollRestoration2;
  }
});

// node_modules/@remix-run/react/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/react/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var history = require_main();
    var React2 = require_react();
    var components = require_components();
    function _interopNamespace(e) {
      if (e && e.__esModule)
        return e;
      var n = Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React2);
    function RemixServer2({
      context,
      url
    }) {
      if (typeof url === "string") {
        url = new URL(url);
      }
      let location = {
        pathname: url.pathname,
        search: url.search,
        hash: "",
        state: null,
        key: "default"
      };
      let staticNavigator = {
        createHref(to) {
          return typeof to === "string" ? to : history.createPath(to);
        },
        push(to) {
          throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
        },
        replace(to) {
          throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
        },
        go(delta) {
          throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
        },
        back() {
          throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
        },
        forward() {
          throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
        },
        block() {
          throw new Error(`You cannot use navigator.block() on the server because it is a stateless environment.`);
        }
      };
      return /* @__PURE__ */ React__namespace.createElement(components.RemixEntry, {
        context,
        action: history.Action.Pop,
        location,
        navigator: staticNavigator,
        static: true
      });
    }
    exports.RemixServer = RemixServer2;
  }
});

// node_modules/@remix-run/react/index.js
var require_react2 = __commonJS({
  "node_modules/@remix-run/react/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var browser = require_browser();
    var reactRouterDom = require_main3();
    var components = require_components();
    var errorBoundaries = require_errorBoundaries();
    var scrollRestoration = require_scroll_restoration();
    var server = require_server();
    exports.RemixBrowser = browser.RemixBrowser;
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return reactRouterDom.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return reactRouterDom.useSearchParams;
      }
    });
    exports.Form = components.Form;
    exports.Link = components.Link;
    exports.Links = components.Links;
    exports.LiveReload = components.LiveReload;
    exports.Meta = components.Meta;
    exports.NavLink = components.NavLink;
    exports.PrefetchPageLinks = components.PrefetchPageLinks;
    exports.Scripts = components.Scripts;
    exports.useActionData = components.useActionData;
    exports.useBeforeUnload = components.useBeforeUnload;
    exports.useFetcher = components.useFetcher;
    exports.useFetchers = components.useFetchers;
    exports.useFormAction = components.useFormAction;
    exports.useLoaderData = components.useLoaderData;
    exports.useMatches = components.useMatches;
    exports.useSubmit = components.useSubmit;
    exports.useTransition = components.useTransition;
    exports.useCatch = errorBoundaries.useCatch;
    exports.ScrollRestoration = scrollRestoration.ScrollRestoration;
    exports.RemixServer = server.RemixServer;
  }
});

// node_modules/remix/esm/client.js
init_react();
var import_react = __toModule(require_react2());

export {
  import_react
};
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=/build/_shared/chunk-5MZN4VEM.js.map
