import { a as pe, b as Ht } from "/build/_shared/chunk-UNNMHWP3.js";
import {
  a as Je,
  b as H,
  d as ae,
  f as S,
} from "/build/_shared/chunk-AKSB5QXU.js";
var qe = Je((ye, We) => {
  S();
  (function (e, t) {
    typeof ye == "object" && typeof We != "undefined"
      ? t(ye, ae(), pe(), Ht())
      : typeof define == "function" && define.amd
      ? define(["exports", "react", "history", "react-router"], t)
      : t(
          ((e = e || self).ReactRouterDOM = {}),
          e.React,
          e.HistoryLibrary,
          e.ReactRouter
        );
  })(ye, function (e, t, n, r) {
    "use strict";
    function a() {
      return (
        (a =
          Object.assign ||
          function (d) {
            for (var R = 1; R < arguments.length; R++) {
              var p = arguments[R];
              for (var v in p)
                Object.prototype.hasOwnProperty.call(p, v) && (d[v] = p[v]);
            }
            return d;
          }),
        a.apply(this, arguments)
      );
    }
    function o(d, R) {
      if (d == null) return {};
      var p,
        v,
        L = {},
        E = Object.keys(d);
      for (v = 0; v < E.length; v++)
        (p = E[v]), R.indexOf(p) >= 0 || (L[p] = d[p]);
      return L;
    }
    let c = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      h = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "children",
      ],
      i = t.forwardRef(function (d, R) {
        let {
            onClick: p,
            reloadDocument: v,
            replace: L = !1,
            state: E,
            target: C,
            to: B,
          } = d,
          A = o(d, c),
          O = r.useHref(B),
          N = y(B, { replace: L, state: E, target: C });
        return t.createElement(
          "a",
          a({}, A, {
            href: O,
            onClick: function (K) {
              p && p(K), K.defaultPrevented || v || N(K);
            },
            ref: R,
            target: C,
          })
        );
      }),
      m = t.forwardRef(function (d, R) {
        let {
            "aria-current": p = "page",
            caseSensitive: v = !1,
            className: L = "",
            end: E = !1,
            style: C,
            to: B,
            children: A,
          } = d,
          O = o(d, h),
          N = r.useLocation(),
          K = r.useResolvedPath(B),
          J = N.pathname,
          X = K.pathname;
        v || ((J = J.toLowerCase()), (X = X.toLowerCase()));
        let he,
          q = J === X || (!E && J.startsWith(X) && J.charAt(X.length) === "/"),
          Ce = q ? p : void 0;
        he =
          typeof L == "function"
            ? L({ isActive: q })
            : [L, q ? "active" : null].filter(Boolean).join(" ");
        let Me = typeof C == "function" ? C({ isActive: q }) : C;
        return t.createElement(
          i,
          a({}, O, {
            "aria-current": Ce,
            className: he,
            ref: R,
            style: Me,
            to: B,
          }),
          typeof A == "function" ? A({ isActive: q }) : A
        );
      });
    function y(d, R) {
      let { target: p, replace: v, state: L } = R === void 0 ? {} : R,
        E = r.useNavigate(),
        C = r.useLocation(),
        B = r.useResolvedPath(d);
      return t.useCallback(
        (A) => {
          if (
            !(
              A.button !== 0 ||
              (p && p !== "_self") ||
              (function (O) {
                return !!(O.metaKey || O.altKey || O.ctrlKey || O.shiftKey);
              })(A)
            )
          ) {
            A.preventDefault();
            let O = !!v || n.createPath(C) === n.createPath(B);
            E(d, { replace: O, state: L });
          }
        },
        [C, E, B, v, L, p, d]
      );
    }
    function w(d) {
      return (
        d === void 0 && (d = ""),
        new URLSearchParams(
          typeof d == "string" ||
          Array.isArray(d) ||
          d instanceof URLSearchParams
            ? d
            : Object.keys(d).reduce((R, p) => {
                let v = d[p];
                return R.concat(
                  Array.isArray(v) ? v.map((L) => [p, L]) : [[p, v]]
                );
              }, [])
        )
      );
    }
    Object.defineProperty(e, "MemoryRouter", {
      enumerable: !0,
      get: function () {
        return r.MemoryRouter;
      },
    }),
      Object.defineProperty(e, "Navigate", {
        enumerable: !0,
        get: function () {
          return r.Navigate;
        },
      }),
      Object.defineProperty(e, "Outlet", {
        enumerable: !0,
        get: function () {
          return r.Outlet;
        },
      }),
      Object.defineProperty(e, "Route", {
        enumerable: !0,
        get: function () {
          return r.Route;
        },
      }),
      Object.defineProperty(e, "Router", {
        enumerable: !0,
        get: function () {
          return r.Router;
        },
      }),
      Object.defineProperty(e, "Routes", {
        enumerable: !0,
        get: function () {
          return r.Routes;
        },
      }),
      Object.defineProperty(e, "UNSAFE_LocationContext", {
        enumerable: !0,
        get: function () {
          return r.UNSAFE_LocationContext;
        },
      }),
      Object.defineProperty(e, "UNSAFE_NavigationContext", {
        enumerable: !0,
        get: function () {
          return r.UNSAFE_NavigationContext;
        },
      }),
      Object.defineProperty(e, "UNSAFE_RouteContext", {
        enumerable: !0,
        get: function () {
          return r.UNSAFE_RouteContext;
        },
      }),
      Object.defineProperty(e, "createRoutesFromChildren", {
        enumerable: !0,
        get: function () {
          return r.createRoutesFromChildren;
        },
      }),
      Object.defineProperty(e, "generatePath", {
        enumerable: !0,
        get: function () {
          return r.generatePath;
        },
      }),
      Object.defineProperty(e, "matchPath", {
        enumerable: !0,
        get: function () {
          return r.matchPath;
        },
      }),
      Object.defineProperty(e, "matchRoutes", {
        enumerable: !0,
        get: function () {
          return r.matchRoutes;
        },
      }),
      Object.defineProperty(e, "renderMatches", {
        enumerable: !0,
        get: function () {
          return r.renderMatches;
        },
      }),
      Object.defineProperty(e, "resolvePath", {
        enumerable: !0,
        get: function () {
          return r.resolvePath;
        },
      }),
      Object.defineProperty(e, "useHref", {
        enumerable: !0,
        get: function () {
          return r.useHref;
        },
      }),
      Object.defineProperty(e, "useInRouterContext", {
        enumerable: !0,
        get: function () {
          return r.useInRouterContext;
        },
      }),
      Object.defineProperty(e, "useLocation", {
        enumerable: !0,
        get: function () {
          return r.useLocation;
        },
      }),
      Object.defineProperty(e, "useMatch", {
        enumerable: !0,
        get: function () {
          return r.useMatch;
        },
      }),
      Object.defineProperty(e, "useNavigate", {
        enumerable: !0,
        get: function () {
          return r.useNavigate;
        },
      }),
      Object.defineProperty(e, "useNavigationType", {
        enumerable: !0,
        get: function () {
          return r.useNavigationType;
        },
      }),
      Object.defineProperty(e, "useOutlet", {
        enumerable: !0,
        get: function () {
          return r.useOutlet;
        },
      }),
      Object.defineProperty(e, "useOutletContext", {
        enumerable: !0,
        get: function () {
          return r.useOutletContext;
        },
      }),
      Object.defineProperty(e, "useParams", {
        enumerable: !0,
        get: function () {
          return r.useParams;
        },
      }),
      Object.defineProperty(e, "useResolvedPath", {
        enumerable: !0,
        get: function () {
          return r.useResolvedPath;
        },
      }),
      Object.defineProperty(e, "useRoutes", {
        enumerable: !0,
        get: function () {
          return r.useRoutes;
        },
      }),
      (e.BrowserRouter = function (d) {
        let { basename: R, children: p, window: v } = d,
          L = t.useRef();
        L.current == null &&
          (L.current = n.createBrowserHistory({ window: v }));
        let E = L.current,
          [C, B] = t.useState({ action: E.action, location: E.location });
        return (
          t.useLayoutEffect(() => E.listen(B), [E]),
          t.createElement(r.Router, {
            basename: R,
            children: p,
            location: C.location,
            navigationType: C.action,
            navigator: E,
          })
        );
      }),
      (e.HashRouter = function (d) {
        let { basename: R, children: p, window: v } = d,
          L = t.useRef();
        L.current == null && (L.current = n.createHashHistory({ window: v }));
        let E = L.current,
          [C, B] = t.useState({ action: E.action, location: E.location });
        return (
          t.useLayoutEffect(() => E.listen(B), [E]),
          t.createElement(r.Router, {
            basename: R,
            children: p,
            location: C.location,
            navigationType: C.action,
            navigator: E,
          })
        );
      }),
      (e.Link = i),
      (e.NavLink = m),
      (e.createSearchParams = w),
      (e.unstable_HistoryRouter = function (d) {
        let { basename: R, children: p, history: v } = d,
          [L, E] = t.useState({ action: v.action, location: v.location });
        return (
          t.useLayoutEffect(() => v.listen(E), [v]),
          t.createElement(r.Router, {
            basename: R,
            children: p,
            location: L.location,
            navigationType: L.action,
            navigator: v,
          })
        );
      }),
      (e.useLinkClickHandler = y),
      (e.useSearchParams = function (d) {
        let R = t.useRef(w(d)),
          p = r.useLocation(),
          v = t.useMemo(() => {
            let E = w(p.search);
            for (let C of R.current.keys())
              E.has(C) ||
                R.current.getAll(C).forEach((B) => {
                  E.append(C, B);
                });
            return E;
          }, [p.search]),
          L = r.useNavigate();
        return [
          v,
          t.useCallback(
            (E, C) => {
              L("?" + w(E), C);
            },
            [L]
          ),
        ];
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  });
});
var se = Je((xr, Ge) => {
  S();
  ("use strict");
  Ge.exports = qe();
});
S();
var kt = H(pe()),
  V = H(ae());
S();
S();
function j() {
  return (
    (j =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    j.apply(this, arguments)
  );
}
var f = H(ae()),
  _ = H(se());
S();
var P = H(ae());
var Re = class extends P.default.Component {
  constructor(t) {
    super(t);
    this.state = { error: t.error || null, location: t.location };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  render() {
    return this.state.error
      ? P.default.createElement(this.props.component, {
          error: this.state.error,
        })
      : this.props.children;
  }
};
function Ve({ error: e }) {
  return (
    console.error(e),
    P.default.createElement(
      "html",
      { lang: "en" },
      P.default.createElement(
        "head",
        null,
        P.default.createElement("meta", { charSet: "utf-8" }),
        P.default.createElement("meta", {
          name: "viewport",
          content: "width=device-width,initial-scale=1,viewport-fit=cover",
        }),
        P.default.createElement("title", null, "Application Error!")
      ),
      P.default.createElement(
        "body",
        null,
        P.default.createElement(
          "main",
          { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
          P.default.createElement(
            "h1",
            { style: { fontSize: "24px" } },
            "Application Error"
          ),
          P.default.createElement(
            "pre",
            {
              style: {
                padding: "2rem",
                background: "hsla(10, 50%, 50%, 0.1)",
                color: "red",
                overflow: "auto",
              },
            },
            e.stack
          )
        ),
        P.default.createElement("script", {
          dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws errors than this. Check out https://remix.run/guides/errors for more information."
              );
            `,
          },
        })
      )
    )
  );
}
var Xe = P.default.createContext(void 0);
function ze() {
  return (0, P.useContext)(Xe);
}
function Oe({ catch: e, component: t, children: n }) {
  return e
    ? P.default.createElement(
        Xe.Provider,
        { value: e },
        P.default.createElement(t, null)
      )
    : P.default.createElement(P.default.Fragment, null, n);
}
function Qe() {
  let e = ze();
  return P.default.createElement(
    "html",
    { lang: "en" },
    P.default.createElement(
      "head",
      null,
      P.default.createElement("meta", { charSet: "utf-8" }),
      P.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover",
      }),
      P.default.createElement("title", null, "Unhandled Thrown Response!")
    ),
    P.default.createElement(
      "body",
      null,
      P.default.createElement(
        "h1",
        { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
        e.status,
        " ",
        e.statusText
      ),
      P.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws 404s (and other responses) than this. Check out https://remix.run/guides/not-found for more information."
              );
            `,
        },
      })
    )
  );
}
S();
function D(e, t) {
  if (e === !1 || e === null || typeof e == "undefined") throw new Error(t);
}
S();
var Ze = H(pe());
S();
async function ge(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch {
    return window.location.reload(), new Promise(() => {});
  }
}
function et(e, t, n) {
  let r = e
      .map((o) => {
        var c;
        let h = t[o.route.id];
        return (
          ((c = h.links) === null || c === void 0 ? void 0 : c.call(h)) || []
        );
      })
      .flat(1),
    a = Yt(e, n);
  return Kt(r, a);
}
async function tt(e) {
  if (!e.links) return;
  let t = e.links();
  if (!t) return;
  let n = [];
  for (let a of t)
    !we(a) &&
      a.rel === "stylesheet" &&
      n.push({ ...a, rel: "preload", as: "style" });
  let r = n.filter((a) => !a.media || window.matchMedia(a.media).matches);
  await Promise.all(r.map($t));
}
async function $t(e) {
  return new Promise((t) => {
    let n = document.createElement("link");
    Object.assign(n, e);
    function r() {
      document.head.contains(n) && document.head.removeChild(n);
    }
    (n.onload = () => {
      r(), t();
    }),
      (n.onerror = () => {
        r(), t();
      }),
      document.head.appendChild(n);
  });
}
function we(e) {
  return e != null && typeof e.page == "string";
}
function Ut(e) {
  return e != null && typeof e.rel == "string" && typeof e.href == "string";
}
async function rt(e, t) {
  return (
    await Promise.all(
      e.map(async (r) => {
        let a = await ge(r.route, t);
        return a.links ? a.links() : [];
      })
    )
  )
    .flat(1)
    .filter(Ut)
    .filter((r) => r.rel === "stylesheet" || r.rel === "preload")
    .map(({ rel: r, ...a }) =>
      r === "preload"
        ? { rel: "prefetch", ...a }
        : { rel: "prefetch", as: "style", ...a }
    );
}
function De(e, t, n, r, a) {
  let o = ot(e),
    c = (m, y) => (n[y] ? m.route.id !== n[y].route.id : !0),
    h = (m, y) => {
      var w;
      return (
        n[y].pathname !== m.pathname ||
        (((w = n[y].route.path) === null || w === void 0
          ? void 0
          : w.endsWith("*")) &&
          n[y].params["*"] !== m.params["*"])
      );
    };
  return a === "data" && r.search !== o.search
    ? t.filter((m, y) =>
        m.route.hasLoader
          ? c(m, y) || h(m, y)
            ? !0
            : m.route.shouldReload
            ? m.route.shouldReload({
                params: m.params,
                prevUrl: new URL(r.pathname + r.search + r.hash, window.origin),
                url: new URL(e, window.origin),
              })
            : !0
          : !1
      )
    : t.filter((m, y) => m.route.hasLoader && (c(m, y) || h(m, y)));
}
function nt(e, t, n) {
  let r = ot(e);
  return Ne(
    t
      .filter((a) => n.routes[a.route.id].hasLoader)
      .map((a) => {
        let { pathname: o, search: c } = r,
          h = new URLSearchParams(c);
        return h.set("_data", a.route.id), `${o}?${h}`;
      })
  );
}
function at(e, t) {
  return Ne(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          a = [r.module];
        return r.imports && (a = a.concat(r.imports)), a;
      })
      .flat(1)
  );
}
function Yt(e, t) {
  return Ne(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          a = [r.module];
        return r.imports && (a = a.concat(r.imports)), a;
      })
      .flat(1)
  );
}
function Ne(e) {
  return [...new Set(e)];
}
function Kt(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((a, o) => {
    if (!we(o) && o.as === "script" && o.href && r.has(o.href)) return a;
    let h = JSON.stringify(o);
    return n.has(h) || (n.add(h), a.push(o)), a;
  }, []);
}
function ot(e) {
  let t = (0, Ze.parsePath)(e);
  return t.search === void 0 && (t.search = ""), t;
}
S();
function Fe(e) {
  return { __html: e };
}
S();
var yt = H(ae());
S();
function Te(e) {
  return e instanceof Response && e.headers.get("X-Remix-Catch") != null;
}
function Jt(e) {
  return e instanceof Response && e.headers.get("X-Remix-Error") != null;
}
function it(e) {
  return e instanceof Response && e.headers.get("X-Remix-Redirect") != null;
}
async function Ie(e, t, n, r) {
  e.searchParams.set("_data", t);
  let a = r ? Wt(r, n) : { credentials: "same-origin", signal: n },
    o = await fetch(e.href, a);
  if (Jt(o)) {
    let c = await o.json(),
      h = new Error(c.message);
    return (h.stack = c.stack), h;
  }
  return o;
}
async function le(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
}
function Wt(e, t) {
  let { encType: n, method: r, formData: a } = e,
    o,
    c = a;
  if (n === "application/x-www-form-urlencoded") {
    c = new URLSearchParams();
    for (let [h, i] of a)
      D(
        typeof i == "string",
        'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
      ),
        c.append(h, i);
    o = { "Content-Type": n };
  }
  return {
    method: r,
    body: c,
    signal: t,
    credentials: "same-origin",
    headers: o,
  };
}
S();
var st = H(pe());
S();
var ut = H(se());
function ee(e, t) {
  let n = (0, ut.matchRoutes)(e, t);
  return n
    ? n.map((r) => ({ params: r.params, pathname: r.pathname, route: r.route }))
    : null;
}
var ce = class {
  constructor(t, n, r) {
    (this.status = t), (this.statusText = n), (this.data = r);
  }
};
function lt(e) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(e.method);
}
function ct(e) {
  return e.method === "GET";
}
function be(e) {
  return Boolean(e.state) && e.state.isRedirect;
}
function qt(e) {
  return be(e) && e.state.type === "loader";
}
function Gt(e) {
  return be(e) && e.state.type === "action";
}
function Vt(e) {
  return be(e) && e.state.type === "fetchAction";
}
function Xt(e) {
  return be(e) && e.state.type === "loaderSubmission";
}
var ve = class {
    constructor(t) {
      this.location = typeof t == "string" ? t : t.pathname + t.search;
    }
  },
  te = { state: "idle", submission: void 0, location: void 0, type: "idle" },
  zt = { state: "idle", type: "init", data: void 0, submission: void 0 };
function dt(e) {
  let { routes: t } = e,
    n,
    r = new Map(),
    a = 0,
    o = -1,
    c = new Map(),
    h = ee(t, e.location);
  h || (h = [{ params: {}, pathname: "", route: t[0] }]);
  let i = {
    location: e.location,
    loaderData: e.loaderData || {},
    actionData: e.actionData,
    catch: e.catch,
    error: e.error,
    catchBoundaryId: e.catchBoundaryId || null,
    errorBoundaryId: e.errorBoundaryId || null,
    matches: h,
    nextMatches: void 0,
    transition: te,
    fetchers: new Map(),
  };
  function m(u) {
    (i = Object.assign({}, i, u)), e.onChange(i);
  }
  function y() {
    return i;
  }
  function w(u) {
    return i.fetchers.get(u) || zt;
  }
  function d(u) {
    r.has(u) && ke(u), c.delete(u), i.fetchers.delete(u);
  }
  async function R(u) {
    switch (u.type) {
      case "navigation": {
        let { action: s, location: l, submission: g } = u,
          b = ee(t, l);
        b
          ? !g && It(l)
            ? await he(l, b)
            : s === st.Action.Pop
            ? await q(l, b)
            : g && lt(g)
            ? await J(l, g, b)
            : g && ct(g)
            ? await X(l, g, b)
            : Gt(l)
            ? await Tt(l, b)
            : Xt(l)
            ? await Me(l, b)
            : qt(l)
            ? await Ce(l, b)
            : Vt(l)
            ? await Ft(l, b)
            : await q(l, b)
          : ((b = [{ params: {}, pathname: "", route: t[0] }]), await K(l, b)),
          (o = -1);
        break;
      }
      case "fetcher": {
        let { key: s, submission: l, href: g } = u,
          b = ee(t, g);
        D(b, "No matches found");
        let M = b.slice(-1)[0];
        r.has(s) && ke(s),
          l && lt(l)
            ? await v(s, l, M)
            : l && ct(l)
            ? await B(g, s, l, M)
            : await A(g, s, M);
        break;
      }
      default:
        throw new Error(`Unknown data event type: ${u.type}`);
    }
  }
  function p() {
    U();
    for (let [, u] of r) u.abort();
  }
  async function v(u, s, l) {
    let g = i.fetchers.get(u),
      b = {
        state: "submitting",
        type: "actionSubmission",
        submission: s,
        data: (g == null ? void 0 : g.data) || void 0,
      };
    i.fetchers.set(u, b), m({ fetchers: new Map(i.fetchers) });
    let M = new AbortController();
    r.set(u, M);
    let x = await mt(s, l, M.signal);
    if (M.signal.aborted) return;
    if (de(x)) {
      let Z = { isRedirect: !0, type: "fetchAction" };
      e.onRedirect(x.value.location, Z);
      return;
    }
    if (N(l, u, x) || (await O(l, u, x))) return;
    let F = {
      state: "loading",
      type: "actionReload",
      data: x.value,
      submission: s,
    };
    i.fetchers.set(u, F), m({ fetchers: new Map(i.fetchers) });
    let T = Le(x) ? x : void 0,
      Y = fe(x) ? x : void 0,
      ie = ++a;
    c.set(u, ie);
    let ue = i.nextMatches || i.matches,
      Be = re(i.transition.location || i.location),
      Q = await ft(i, oe(Be), ue, M.signal, T, Y, s, l.route.id, F);
    if (M.signal.aborted) return;
    c.delete(u), r.delete(u);
    let ne = ht(Q);
    if (ne) {
      let Z = { isRedirect: !0, type: "loader" };
      e.onRedirect(ne.location, Z);
      return;
    }
    let [G, Ye] = pt(Q, i.matches, T),
      [At, jt] = await je(Q, i.matches, Y),
      _t = { state: "idle", type: "done", data: x.value, submission: void 0 };
    i.fetchers.set(u, _t);
    let Ke = C(ie);
    if ((Ke && E(Ke), L(ie))) {
      let { transition: Z } = i;
      D(Z.state === "loading", "Expected loading transition"),
        m({
          location: Z.location,
          matches: i.nextMatches,
          error: G,
          errorBoundaryId: Ye,
          catch: At,
          catchBoundaryId: jt,
          loaderData: _e(i, Q, ue),
          actionData: Z.type === "actionReload" ? i.actionData : void 0,
          transition: te,
          fetchers: new Map(i.fetchers),
        });
    } else
      m({
        fetchers: new Map(i.fetchers),
        error: G,
        errorBoundaryId: Ye,
        loaderData: _e(i, Q, ue),
      });
  }
  function L(u) {
    return i.transition.state === "loading" && o < u ? (U(), !0) : !1;
  }
  function E(u) {
    for (let s of u) {
      let l = w(s),
        g = { state: "idle", type: "done", data: l.data, submission: void 0 };
      i.fetchers.set(s, g);
    }
  }
  function C(u) {
    let s = [];
    for (let [l, g] of c)
      if (g < u) {
        let b = i.fetchers.get(l);
        D(b, `Expected fetcher: ${l}`),
          b.state === "loading" && (ke(l), c.delete(l), s.push(l));
      }
    return s.length ? s : !1;
  }
  async function B(u, s, l, g) {
    let b = i.fetchers.get(s),
      M = {
        state: "submitting",
        type: "loaderSubmission",
        submission: l,
        data: (b == null ? void 0 : b.data) || void 0,
      };
    i.fetchers.set(s, M), m({ fetchers: new Map(i.fetchers) });
    let x = new AbortController();
    r.set(s, x);
    let F = await Ae(g, oe(u), x.signal);
    if ((r.delete(s), x.signal.aborted)) return;
    if (de(F)) {
      let Y = { isRedirect: !0, type: "loader" };
      e.onRedirect(F.value.location, Y);
      return;
    }
    if (N(g, s, F) || (await O(g, s, F))) return;
    let T = { state: "idle", type: "done", data: F.value, submission: void 0 };
    i.fetchers.set(s, T), m({ fetchers: new Map(i.fetchers) });
  }
  async function A(u, s, l) {
    let g = i.fetchers.get(s),
      b = {
        state: "loading",
        type: "normalLoad",
        submission: void 0,
        data: (g == null ? void 0 : g.data) || void 0,
      };
    i.fetchers.set(s, b), m({ fetchers: new Map(i.fetchers) });
    let M = new AbortController();
    r.set(s, M);
    let x = await Ae(l, oe(u), M.signal);
    if (M.signal.aborted) return;
    if ((r.delete(s), de(x))) {
      let T = { isRedirect: !0, type: "loader" };
      e.onRedirect(x.value.location, T);
      return;
    }
    if (N(l, s, x) || (await O(l, s, x))) return;
    let F = { state: "idle", type: "done", data: x.value, submission: void 0 };
    i.fetchers.set(s, F), m({ fetchers: new Map(i.fetchers) });
  }
  async function O(u, s, l) {
    if (fe(l)) {
      let g = Ee(u, i.matches);
      return (
        i.fetchers.delete(s),
        m({
          transition: te,
          fetchers: new Map(i.fetchers),
          catch: {
            data: l.value.data,
            status: l.value.status,
            statusText: l.value.statusText,
          },
          catchBoundaryId: g,
        }),
        !0
      );
    }
    return !1;
  }
  function N(u, s, l) {
    if (Le(l)) {
      let g = Se(u, i.matches);
      return (
        i.fetchers.delete(s),
        m({
          fetchers: new Map(i.fetchers),
          error: l.value,
          errorBoundaryId: g,
        }),
        !0
      );
    }
    return !1;
  }
  async function K(u, s) {
    U(),
      m({
        transition: {
          state: "loading",
          type: "normalLoad",
          submission: void 0,
          location: u,
        },
        nextMatches: s,
      }),
      await Promise.resolve();
    let g = Ee(s[0], s);
    m({
      location: u,
      matches: s,
      catch: { data: null, status: 404, statusText: "Not Found" },
      catchBoundaryId: g,
      transition: te,
    });
  }
  async function J(u, s, l) {
    U(),
      m({
        transition: {
          state: "submitting",
          type: "actionSubmission",
          submission: s,
          location: u,
        },
        nextMatches: l,
      });
    let b = new AbortController();
    (n = b),
      !Qt(s.action) &&
        l[l.length - 1].route.id.endsWith("/index") &&
        (l = l.slice(0, -1));
    let M = l.slice(-1)[0],
      x = await mt(s, M, b.signal);
    if (b.signal.aborted) return;
    if (de(x)) {
      let T = { isRedirect: !0, type: "action" };
      e.onRedirect(x.value.location, T);
      return;
    }
    if (fe(x)) {
      let [T, Y] = await je([x], l, x);
      m({ transition: te, catch: T, catchBoundaryId: Y });
      return;
    }
    m({
      transition: {
        state: "loading",
        type: "actionReload",
        submission: s,
        location: u,
      },
      actionData: { [M.route.id]: x.value },
    }),
      await z(u, l, s, M.route.id, x);
  }
  async function X(u, s, l) {
    U(),
      m({
        transition: {
          state: "submitting",
          type: "loaderSubmission",
          submission: s,
          location: u,
        },
        nextMatches: l,
      }),
      await z(u, l, s);
  }
  async function he(u, s) {
    U(),
      m({
        transition: {
          state: "loading",
          type: "normalLoad",
          submission: void 0,
          location: u,
        },
        nextMatches: s,
      }),
      await Promise.resolve(),
      m({ location: u, matches: s, transition: te });
  }
  async function q(u, s) {
    U(),
      m({
        transition: {
          state: "loading",
          type: "normalLoad",
          submission: void 0,
          location: u,
        },
        nextMatches: s,
      }),
      await z(u, s);
  }
  async function Ce(u, s) {
    U(),
      m({
        transition: {
          state: "loading",
          type: "normalRedirect",
          submission: void 0,
          location: u,
        },
        nextMatches: s,
      }),
      await z(u, s);
  }
  async function Me(u, s) {
    U(),
      D(
        i.transition.type === "loaderSubmission",
        `Unexpected transition: ${JSON.stringify(i.transition)}`
      );
    let { submission: l } = i.transition;
    m({
      transition: {
        state: "loading",
        type: "loaderSubmissionRedirect",
        submission: l,
        location: u,
      },
      nextMatches: s,
    }),
      await z(u, s, l);
  }
  async function Ft(u, s) {
    U(),
      m({
        transition: {
          state: "loading",
          type: "fetchActionRedirect",
          submission: void 0,
          location: u,
        },
        nextMatches: s,
      }),
      await z(u, s);
  }
  async function Tt(u, s) {
    U(),
      D(
        i.transition.type === "actionSubmission" ||
          i.transition.type === "actionReload",
        `Unexpected transition: ${JSON.stringify(i.transition)}`
      );
    let { submission: l } = i.transition;
    m({
      transition: {
        state: "loading",
        type: "actionRedirect",
        submission: l,
        location: u,
      },
      nextMatches: s,
    }),
      await z(u, s, l);
  }
  function It(u) {
    return re(i.location) === re(u) && i.location.hash !== u.hash;
  }
  async function z(u, s, l, g, b) {
    let M = b && Le(b) ? b : void 0,
      x = b && fe(b) ? b : void 0,
      F = new AbortController();
    (n = F), (o = ++a);
    let T = await ft(i, oe(re(u)), s, F.signal, M, x, l, g);
    if (F.signal.aborted) return;
    let Y = ht(T);
    if (Y) {
      if (i.transition.type === "actionReload") {
        let G = { isRedirect: !0, type: "action" };
        e.onRedirect(Y.location, G);
      } else if (i.transition.type === "loaderSubmission") {
        let G = { isRedirect: !0, type: "loaderSubmission" };
        e.onRedirect(Y.location, G);
      } else {
        let G = { isRedirect: !0, type: "loader" };
        e.onRedirect(Y.location, G);
      }
      return;
    }
    let [ie, ue] = pt(T, s, M),
      [Be, Q] = await je(T, s, M),
      ne = C(o);
    ne && E(ne),
      m({
        location: u,
        matches: s,
        error: ie,
        errorBoundaryId: ue,
        catch: Be,
        catchBoundaryId: Q,
        loaderData: _e(i, T, s),
        actionData:
          i.transition.type === "actionReload" ? i.actionData : void 0,
        transition: te,
        fetchers: ne ? new Map(i.fetchers) : i.fetchers,
      });
  }
  function U() {
    var u;
    (u = n) === null || u === void 0 || u.abort();
  }
  function ke(u) {
    let s = r.get(u);
    D(s, `Expected fetch controller: ${u}`), s.abort(), r.delete(u);
  }
  return {
    send: R,
    getState: y,
    getFetcher: w,
    deleteFetcher: d,
    dispose: p,
    get _internalFetchControllers() {
      return r;
    },
  };
}
function Qt(e) {
  let t = !1,
    n = new URLSearchParams(e.split("?", 2)[1] || "");
  for (let r of n.getAll("index")) r || (t = !0);
  return t;
}
async function ft(e, t, n, r, a, o, c, h, i) {
  let m = Zt(e, t, n, a, o, c, h, i);
  return Promise.all(m.map((y) => Ae(y, t, r)));
}
async function Ae(e, t, n) {
  D(e.route.loader, `Expected loader for ${e.route.id}`);
  try {
    let { params: r } = e,
      a = await e.route.loader({ params: r, url: t, signal: n });
    return { match: e, value: a };
  } catch (r) {
    return { match: e, value: r };
  }
}
async function mt(e, t, n) {
  if (!t.route.action)
    throw new Error(
      `Route "${t.route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`
    );
  try {
    let r = await t.route.action({
      url: oe(e.action),
      params: t.params,
      submission: e,
      signal: n,
    });
    return { match: t, value: r };
  } catch (r) {
    return { match: t, value: r };
  }
}
function Zt(e, t, n, r, a, o, c, h) {
  if (c && (a || r)) {
    let d = !1;
    n = n.filter((R) => (d ? !1 : R.route.id === c ? ((d = !0), !1) : !0));
  }
  let i = (d, R) => (e.matches[R] ? d.route.id !== e.matches[R].route.id : !0),
    m = (d, R) => {
      var p;
      return (
        e.matches[R].pathname !== d.pathname ||
        (((p = e.matches[R].route.path) === null || p === void 0
          ? void 0
          : p.endsWith("*")) &&
          e.matches[R].params["*"] !== d.params["*"])
      );
    },
    y = (d, R) => {
      if (!d.route.loader) return !1;
      if (i(d, R) || m(d, R)) return !0;
      if (d.route.shouldReload) {
        let p = oe(re(e.location));
        return d.route.shouldReload({
          prevUrl: p,
          url: t,
          submission: o,
          params: d.params,
        });
      }
      return !0;
    };
  return e.matches.length === 1
    ? n.filter((d) => !!d.route.loader)
    : (h == null ? void 0 : h.type) === "actionReload" ||
      e.transition.type === "actionReload" ||
      e.transition.type === "actionRedirect" ||
      re(t) === re(e.location) ||
      t.searchParams.toString() !== e.location.search
    ? n.filter(y)
    : n.filter((d, R, p) =>
        (r || a) && p.length - 1 === R
          ? !1
          : d.route.loader && (i(d, R) || m(d, R))
      );
}
function de(e) {
  return e.value instanceof ve;
}
function re(e) {
  return e.pathname + e.search;
}
function ht(e) {
  for (let t of e) if (de(t)) return t.value;
  return null;
}
async function je(e, t, n) {
  let r;
  for (let o of e)
    if (fe(o)) {
      r = o;
      break;
    }
  let a = async (o) => ({
    status: o.status,
    statusText: o.statusText,
    data: o.data,
  });
  if (n && r) {
    let o = Ee(r.match, t);
    return [await a(n.value), o];
  }
  if (r) {
    let o = Ee(r.match, t);
    return [await a(r.value), o];
  }
  return [void 0, void 0];
}
function pt(e, t, n) {
  let r;
  for (let a of e)
    if (Le(a)) {
      r = a;
      break;
    }
  if (n && r) {
    let a = Se(r.match, t);
    return [n.value, a];
  }
  if (n) {
    let a = Se(n.match, t);
    return [n.value, a];
  }
  if (r) {
    let a = Se(r.match, t);
    return [r.value, a];
  }
  return [void 0, void 0];
}
function Ee(e, t) {
  let n = null;
  for (let r of t)
    if ((r.route.CatchBoundary && (n = r.route.id), r === e)) break;
  return n;
}
function Se(e, t) {
  let n = null;
  for (let r of t)
    if ((r.route.ErrorBoundary && (n = r.route.id), r === e)) break;
  return n;
}
function _e(e, t, n) {
  let r = {};
  for (let { match: o, value: c } of t) r[o.route.id] = c;
  let a = {};
  for (let { route: o } of n) {
    let c = r[o.id] !== void 0 ? r[o.id] : e.loaderData[o.id];
    c !== void 0 && (a[o.id] = c);
  }
  return a;
}
function fe(e) {
  return e.value instanceof ce;
}
function Le(e) {
  return e.value instanceof Error;
}
function oe(e) {
  return new URL(e, window.location.origin);
}
function er(e, t, n) {
  return {
    caseSensitive: !!e.caseSensitive,
    element: yt.createElement(n, { id: e.id }),
    id: e.id,
    path: e.path,
    index: e.index,
    module: e.module,
    loader: rr(e, t),
    action: nr(e),
    shouldReload: tr(e, t),
    ErrorBoundary: e.hasErrorBoundary,
    CatchBoundary: e.hasCatchBoundary,
    hasLoader: e.hasLoader,
  };
}
function He(e, t, n, r) {
  return Object.keys(e)
    .filter((a) => e[a].parentId === r)
    .map((a) => {
      let o = er(e[a], t, n),
        c = He(e, t, n, o.id);
      return c.length > 0 && (o.children = c), o;
    });
}
function tr(e, t) {
  return (r) => {
    let a = t[e.id];
    return (
      D(a, `Expected route module to be loaded for ${e.id}`),
      a.unstable_shouldReload ? a.unstable_shouldReload(r) : !0
    );
  };
}
async function Rt(e, t) {
  let n = await ge(e, t);
  return await tt(n), n;
}
function rr(e, t) {
  return async ({ url: r, signal: a, submission: o }) => {
    if (e.hasLoader) {
      let [c] = await Promise.all([Ie(r, e.id, a, o), Rt(e, t)]);
      if (c instanceof Error) throw c;
      let h = await gt(c);
      if (h) return h;
      if (Te(c)) throw new ce(c.status, c.statusText, await le(c.clone()));
      return le(c);
    } else await Rt(e, t);
  };
}
function nr(e) {
  return e.hasAction
    ? async ({ url: n, signal: r, submission: a }) => {
        let o = await Ie(n, e.id, r, a);
        if (o instanceof Error) throw o;
        let c = await gt(o);
        if (c) return c;
        if (Te(o)) throw new ce(o.status, o.statusText, await le(o.clone()));
        return le(o);
      }
    : void 0;
}
async function gt(e) {
  if (it(e)) {
    let t = new URL(e.headers.get("X-Remix-Redirect"), window.location.origin);
    if (t.origin !== window.location.origin)
      await new Promise(() => {
        window.location.replace(t.href);
      });
    else return new ve(t.pathname + t.search);
  }
  return null;
}
var wt = f.createContext(void 0);
function W() {
  let e = f.useContext(wt);
  return D(e, "You must render this element inside a <Remix> element"), e;
}
function bt({
  context: e,
  action: t,
  location: n,
  navigator: r,
  static: a = !1,
}) {
  let {
      manifest: o,
      routeData: c,
      actionData: h,
      routeModules: i,
      serverHandoffString: m,
      appState: y,
    } = e,
    w = f.useMemo(() => He(o.routes, i, ur), [o, i]),
    [d, R] = f.useState(y),
    [p] = f.useState(() =>
      dt({
        routes: w,
        actionData: h,
        loaderData: c,
        location: n,
        catch: y.catch,
        catchBoundaryId: y.catchBoundaryRouteId,
        onRedirect: r.replace,
        onChange: (N) => {
          R({
            catch: N.catch,
            error: N.error,
            catchBoundaryRouteId: N.catchBoundaryId,
            loaderBoundaryRouteId: N.errorBoundaryId,
            renderBoundaryRouteId: null,
            trackBoundaries: !1,
            trackCatchBoundaries: !1,
          });
        },
      })
    ),
    v = f.useMemo(
      () => ({
        ...r,
        push: (K, J) =>
          p.getState().transition.state !== "idle"
            ? r.replace(K, J)
            : r.push(K, J),
      }),
      [r, p]
    ),
    { location: L, matches: E, loaderData: C, actionData: B } = p.getState();
  f.useEffect(() => {
    let { location: N } = p.getState();
    n !== N &&
      p.send({ type: "navigation", location: n, submission: dr(), action: t });
  }, [p, n, t]);
  let A =
      d.error &&
      d.renderBoundaryRouteId === null &&
      d.loaderBoundaryRouteId === null
        ? vt(d.error)
        : void 0,
    O = d.catch && d.catchBoundaryRouteId === null ? d.catch : void 0;
  return f.createElement(
    wt.Provider,
    {
      value: {
        matches: E,
        manifest: o,
        appState: d,
        routeModules: i,
        serverHandoffString: m,
        clientRoutes: w,
        routeData: C,
        actionData: B,
        transitionManager: p,
      },
    },
    f.createElement(
      Re,
      { location: L, component: Ve, error: A },
      f.createElement(
        Oe,
        { location: L, component: Qe, catch: O },
        f.createElement(
          _.Router,
          { navigationType: t, location: L, navigator: v, static: a },
          f.createElement(ar, null)
        )
      )
    )
  );
}
function vt(e) {
  let t = new Error(e.message);
  return (t.stack = e.stack), t;
}
function ar() {
  let { clientRoutes: e } = W();
  return (0, _.useRoutes)(e) || e[0].element;
}
var Et = f.createContext(void 0);
function or() {
  let e = f.useContext(Et);
  return D(e, "You must render this element in a remix route element"), e;
}
function ir({ id: e }) {
  throw new Error(`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function ur({ id: e }) {
  let t = (0, _.useLocation)(),
    { routeData: n, routeModules: r, appState: a } = W(),
    o = n[e],
    { default: c, CatchBoundary: h, ErrorBoundary: i } = r[e],
    m = c ? f.createElement(c, null) : f.createElement(ir, { id: e }),
    y = { data: o, id: e };
  if (h) {
    let w = a.catch && a.catchBoundaryRouteId === e ? a.catch : void 0;
    a.trackCatchBoundaries && (a.catchBoundaryRouteId = e),
      (y = w
        ? {
            id: e,
            get data() {
              console.error("You cannot `useLoaderData` in a catch boundary.");
            },
          }
        : { id: e, data: o }),
      (m = f.createElement(Oe, { location: t, component: h, catch: w }, m));
  }
  if (i) {
    let w =
      a.error &&
      (a.renderBoundaryRouteId === e || a.loaderBoundaryRouteId === e)
        ? vt(a.error)
        : void 0;
    a.trackBoundaries && (a.renderBoundaryRouteId = e),
      (y = w
        ? {
            id: e,
            get data() {
              console.error("You cannot `useLoaderData` in an error boundary.");
            },
          }
        : { id: e, data: o }),
      (m = f.createElement(Re, { location: t, component: i, error: w }, m));
  }
  return f.createElement(Et.Provider, { value: y }, m);
}
function St() {
  let { matches: e, routeModules: t, manifest: n } = W(),
    r = f.useMemo(() => et(e, t, n), [e, t, n]);
  return f.createElement(
    f.Fragment,
    null,
    r.map((a) =>
      we(a)
        ? f.createElement($e, j({ key: a.page }, a))
        : f.createElement("link", j({ key: a.rel + a.href }, a))
    )
  );
}
function $e({ page: e, ...t }) {
  let { clientRoutes: n } = W(),
    r = f.useMemo(() => ee(n, e), [n, e]);
  return r
    ? f.createElement(lr, j({ page: e, matches: r }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function sr(e) {
  let { routeModules: t } = W(),
    [n, r] = f.useState([]);
  return (
    f.useEffect(() => {
      let a = !1;
      return (
        rt(e, t).then((o) => {
          a || r(o);
        }),
        () => {
          a = !0;
        }
      );
    }, [e, t]),
    n
  );
}
function lr({ page: e, matches: t, ...n }) {
  let r = (0, _.useLocation)(),
    { matches: a, manifest: o } = W(),
    c = f.useMemo(() => De(e, t, a, r, "data"), [e, t, a, r]),
    h = f.useMemo(() => De(e, t, a, r, "assets"), [e, t, a, r]),
    i = f.useMemo(() => nt(e, c, o), [c, e, o]),
    m = f.useMemo(() => at(h, o), [h, o]),
    y = sr(h);
  return f.createElement(
    f.Fragment,
    null,
    i.map((w) =>
      f.createElement(
        "link",
        j({ key: w, rel: "prefetch", as: "fetch", href: w }, n)
      )
    ),
    m.map((w) =>
      f.createElement("link", j({ key: w, rel: "modulepreload", href: w }, n))
    ),
    y.map((w) => f.createElement("link", j({ key: w.href }, w)))
  );
}
function Lt() {
  let { matches: e, routeData: t, routeModules: n } = W(),
    r = (0, _.useLocation)(),
    a = {},
    o = {};
  for (let c of e) {
    let h = c.route.id,
      i = t[h],
      m = c.params,
      y = n[h];
    if (y.meta) {
      let w =
        typeof y.meta == "function"
          ? y.meta({ data: i, parentsData: o, params: m, location: r })
          : y.meta;
      Object.assign(a, w);
    }
    o[h] = i;
  }
  return f.createElement(
    f.Fragment,
    null,
    Object.entries(a).map(([c, h]) => {
      let i = c.startsWith("og:");
      return c === "title"
        ? f.createElement("title", { key: "title" }, h)
        : Array.isArray(h)
        ? h.map((m) =>
            i
              ? f.createElement("meta", { key: c + m, property: c, content: m })
              : f.createElement("meta", { key: c + m, name: c, content: m })
          )
        : i
        ? f.createElement("meta", { key: c, property: c, content: h })
        : f.createElement("meta", { key: c, name: c, content: h });
    })
  );
}
var xt = !1;
function Pt(e) {
  let {
    manifest: t,
    matches: n,
    pendingLocation: r,
    clientRoutes: a,
    serverHandoffString: o,
  } = W();
  f.useEffect(() => {
    xt = !0;
  }, []);
  let c = f.useMemo(() => {
      let y = o ? `window.__remixContext = ${o};` : "",
        w = `${n.map(
          (d, R) =>
            `import * as route${R} from ${JSON.stringify(
              t.routes[d.route.id].module
            )};`
        ).join(`
`)}
window.__remixRouteModules = {${n
          .map((d, R) => `${JSON.stringify(d.route.id)}:route${R}`)
          .join(",")}};`;
      return f.createElement(
        f.Fragment,
        null,
        f.createElement(
          "script",
          j({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Fe(y),
          })
        ),
        f.createElement("script", j({}, e, { src: t.url })),
        f.createElement(
          "script",
          j({}, e, { dangerouslySetInnerHTML: Fe(w), type: "module" })
        ),
        f.createElement(
          "script",
          j({}, e, { src: t.entry.module, type: "module" })
        )
      );
    }, []),
    h = f.useMemo(() => {
      if (r) {
        let y = ee(a, r);
        return D(y, `No routes match path "${r.pathname}"`), y;
      }
      return [];
    }, [r, a]),
    i = n
      .concat(h)
      .map((y) => {
        let w = t.routes[y.route.id];
        return (w.imports || []).concat([w.module]);
      })
      .flat(1),
    m = t.entry.imports.concat(i);
  return f.createElement(
    f.Fragment,
    null,
    cr(m).map((y) =>
      f.createElement("link", {
        key: y,
        rel: "modulepreload",
        href: y,
        crossOrigin: e.crossOrigin,
      })
    ),
    xt ? null : c
  );
}
function cr(e) {
  return [...new Set(e)];
}
var Ct;
function dr() {
  let e = Ct;
  return (Ct = void 0), e;
}
function me(e) {
  f.useEffect(
    () => (
      window.addEventListener("beforeunload", e),
      () => {
        window.removeEventListener("beforeunload", e);
      }
    ),
    [e]
  );
}
function Mt() {
  return or().data;
}
function xe() {
  let { transitionManager: e } = W();
  return e.getState().transition;
}
function Bt(e) {
  let t = V.useRef();
  t.current == null && (t.current = (0, kt.createBrowserHistory)({ window }));
  let n = t.current,
    [r, a] = V.useReducer((c, h) => h, {
      action: n.action,
      location: n.location,
    });
  V.useLayoutEffect(() => n.listen(a), [n]);
  let o = window.__remixContext;
  return (
    (o.manifest = window.__remixManifest),
    (o.routeModules = window.__remixRouteModules),
    (o.appState.trackBoundaries = !1),
    (o.appState.trackCatchBoundaries = !1),
    V.createElement(bt, {
      context: o,
      action: r.action,
      location: r.location,
      navigator: n,
    })
  );
}
S();
var k = H(se());
S();
var I = H(ae()),
  Ot = H(se());
var Ue = "positions",
  Pe = {};
if (typeof document != "undefined") {
  let e = sessionStorage.getItem(Ue);
  e && (Pe = JSON.parse(e));
}
function Dt() {
  return (
    fr(),
    I.useEffect(() => {
      window.history.scrollRestoration = "manual";
    }, []),
    me(
      I.useCallback(() => {
        window.history.scrollRestoration = "auto";
      }, [])
    ),
    I.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
          let STORAGE_KEY = ${JSON.stringify(Ue)};
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
        `,
      },
    })
  );
}
var Nt = !1;
function fr() {
  let e = (0, Ot.useLocation)(),
    t = xe(),
    n = I.useRef(!1);
  I.useEffect(() => {
    t.submission && (n.current = !0);
  }, [t]),
    I.useEffect(() => {
      t.location && (Pe[e.key] = window.scrollY);
    }, [t, e]),
    me(
      I.useCallback(() => {
        sessionStorage.setItem(Ue, JSON.stringify(Pe));
      }, [])
    ),
    typeof document != "undefined" &&
      I.useLayoutEffect(() => {
        if (!Nt) {
          Nt = !0;
          return;
        }
        let r = Pe[e.key];
        if (r) {
          window.scrollTo(0, r);
          return;
        }
        if (e.hash) {
          let a = document.querySelector(e.hash);
          if (a) {
            a.scrollIntoView();
            return;
          }
        }
        if (n.current === !0) {
          n.current = !1;
          return;
        }
        window.scrollTo(0, 0);
      }, [e]),
    I.useEffect(() => {
      t.submission && (n.current = !0);
    }, [t]);
}
S();
export { St as a, Lt as b, Pt as c, Mt as d, Bt as e, Dt as f, k as g };
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
