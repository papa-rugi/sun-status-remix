import { d as ae } from "/build/_shared/chunk-D6L7F4Q7.js";
import "/build/_shared/chunk-UNNMHWP3.js";
import {
  a as d,
  b as vr,
  e as c,
  f as o,
} from "/build/_shared/chunk-AKSB5QXU.js";
var k = d((ft, oe) => {
  o();
  ("use strict");
  oe.exports = function (e, t) {
    return function () {
      for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
        n[a] = arguments[a];
      return e.apply(t, n);
    };
  };
});
var m = d((dt, fe) => {
  o();
  ("use strict");
  var yr = k(),
    q = Object.prototype.toString;
  function F(r) {
    return Array.isArray(r);
  }
  function H(r) {
    return typeof r == "undefined";
  }
  function br(r) {
    return (
      r !== null &&
      !H(r) &&
      r.constructor !== null &&
      !H(r.constructor) &&
      typeof r.constructor.isBuffer == "function" &&
      r.constructor.isBuffer(r)
    );
  }
  function ue(r) {
    return q.call(r) === "[object ArrayBuffer]";
  }
  function wr(r) {
    return q.call(r) === "[object FormData]";
  }
  function xr(r) {
    var e;
    return (
      typeof ArrayBuffer != "undefined" && ArrayBuffer.isView
        ? (e = ArrayBuffer.isView(r))
        : (e = r && r.buffer && ue(r.buffer)),
      e
    );
  }
  function Er(r) {
    return typeof r == "string";
  }
  function qr(r) {
    return typeof r == "number";
  }
  function le(r) {
    return r !== null && typeof r == "object";
  }
  function P(r) {
    if (q.call(r) !== "[object Object]") return !1;
    var e = Object.getPrototypeOf(r);
    return e === null || e === Object.prototype;
  }
  function Sr(r) {
    return q.call(r) === "[object Date]";
  }
  function Cr(r) {
    return q.call(r) === "[object File]";
  }
  function Or(r) {
    return q.call(r) === "[object Blob]";
  }
  function ce(r) {
    return q.call(r) === "[object Function]";
  }
  function Rr(r) {
    return le(r) && ce(r.pipe);
  }
  function gr(r) {
    return q.call(r) === "[object URLSearchParams]";
  }
  function Ar(r) {
    return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
  }
  function Nr() {
    return typeof navigator != "undefined" &&
      (navigator.product === "ReactNative" ||
        navigator.product === "NativeScript" ||
        navigator.product === "NS")
      ? !1
      : typeof window != "undefined" && typeof document != "undefined";
  }
  function M(r, e) {
    if (!(r === null || typeof r == "undefined"))
      if ((typeof r != "object" && (r = [r]), F(r)))
        for (var t = 0, s = r.length; t < s; t++) e.call(null, r[t], t, r);
      else
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) &&
            e.call(null, r[n], n, r);
  }
  function J() {
    var r = {};
    function e(n, a) {
      P(r[a]) && P(n)
        ? (r[a] = J(r[a], n))
        : P(n)
        ? (r[a] = J({}, n))
        : F(n)
        ? (r[a] = n.slice())
        : (r[a] = n);
    }
    for (var t = 0, s = arguments.length; t < s; t++) M(arguments[t], e);
    return r;
  }
  function Tr(r, e, t) {
    return (
      M(e, function (n, a) {
        t && typeof n == "function" ? (r[a] = yr(n, t)) : (r[a] = n);
      }),
      r
    );
  }
  function Pr(r) {
    return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
  }
  fe.exports = {
    isArray: F,
    isArrayBuffer: ue,
    isBuffer: br,
    isFormData: wr,
    isArrayBufferView: xr,
    isString: Er,
    isNumber: qr,
    isObject: le,
    isPlainObject: P,
    isUndefined: H,
    isDate: Sr,
    isFile: Cr,
    isBlob: Or,
    isFunction: ce,
    isStream: Rr,
    isURLSearchParams: gr,
    isStandardBrowserEnv: Nr,
    forEach: M,
    merge: J,
    extend: Tr,
    trim: Ar,
    stripBOM: Pr,
  };
});
var z = d((pt, pe) => {
  o();
  ("use strict");
  var O = m();
  function de(r) {
    return encodeURIComponent(r)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  pe.exports = function (e, t, s) {
    if (!t) return e;
    var n;
    if (s) n = s(t);
    else if (O.isURLSearchParams(t)) n = t.toString();
    else {
      var a = [];
      O.forEach(t, function (f, b) {
        f === null ||
          typeof f == "undefined" ||
          (O.isArray(f) ? (b = b + "[]") : (f = [f]),
          O.forEach(f, function (p) {
            O.isDate(p)
              ? (p = p.toISOString())
              : O.isObject(p) && (p = JSON.stringify(p)),
              a.push(de(b) + "=" + de(p));
          }));
      }),
        (n = a.join("&"));
    }
    if (n) {
      var u = e.indexOf("#");
      u !== -1 && (e = e.slice(0, u)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + n);
    }
    return e;
  };
});
var me = d((ht, he) => {
  o();
  ("use strict");
  var Ur = m();
  function U() {
    this.handlers = [];
  }
  U.prototype.use = function (e, t, s) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  };
  U.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null);
  };
  U.prototype.forEach = function (e) {
    Ur.forEach(this.handlers, function (s) {
      s !== null && e(s);
    });
  };
  he.exports = U;
});
var ye = d((mt, ve) => {
  o();
  ("use strict");
  var Lr = m();
  ve.exports = function (e, t) {
    Lr.forEach(e, function (n, a) {
      a !== t &&
        a.toUpperCase() === t.toUpperCase() &&
        ((e[t] = n), delete e[a]);
    });
  };
});
var $ = d((vt, be) => {
  o();
  ("use strict");
  be.exports = function (e, t, s, n, a) {
    return (
      (e.config = t),
      s && (e.code = s),
      (e.request = n),
      (e.response = a),
      (e.isAxiosError = !0),
      (e.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      }),
      e
    );
  };
});
var V = d((yt, we) => {
  o();
  ("use strict");
  var jr = $();
  we.exports = function (e, t, s, n, a) {
    var u = new Error(e);
    return jr(u, t, s, n, a);
  };
});
var Ee = d((bt, xe) => {
  o();
  ("use strict");
  var Dr = V();
  xe.exports = function (e, t, s) {
    var n = s.config.validateStatus;
    !s.status || !n || n(s.status)
      ? e(s)
      : t(
          Dr(
            "Request failed with status code " + s.status,
            s.config,
            null,
            s.request,
            s
          )
        );
  };
});
var Se = d((wt, qe) => {
  o();
  ("use strict");
  var L = m();
  qe.exports = L.isStandardBrowserEnv()
    ? (function () {
        return {
          write: function (t, s, n, a, u, l) {
            var f = [];
            f.push(t + "=" + encodeURIComponent(s)),
              L.isNumber(n) && f.push("expires=" + new Date(n).toGMTString()),
              L.isString(a) && f.push("path=" + a),
              L.isString(u) && f.push("domain=" + u),
              l === !0 && f.push("secure"),
              (document.cookie = f.join("; "));
          },
          read: function (t) {
            var s = document.cookie.match(
              new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
            );
            return s ? decodeURIComponent(s[3]) : null;
          },
          remove: function (t) {
            this.write(t, "", Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();
});
var Oe = d((xt, Ce) => {
  o();
  ("use strict");
  Ce.exports = function (e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  };
});
var ge = d((Et, Re) => {
  o();
  ("use strict");
  Re.exports = function (e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  };
});
var Ne = d((qt, Ae) => {
  o();
  ("use strict");
  var Br = Oe(),
    Ir = ge();
  Ae.exports = function (e, t) {
    return e && !Br(t) ? Ir(e, t) : t;
  };
});
var Pe = d((St, Te) => {
  o();
  ("use strict");
  var W = m(),
    _r = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  Te.exports = function (e) {
    var t = {},
      s,
      n,
      a;
    return (
      e &&
        W.forEach(
          e.split(`
`),
          function (l) {
            if (
              ((a = l.indexOf(":")),
              (s = W.trim(l.substr(0, a)).toLowerCase()),
              (n = W.trim(l.substr(a + 1))),
              s)
            ) {
              if (t[s] && _r.indexOf(s) >= 0) return;
              s === "set-cookie"
                ? (t[s] = (t[s] ? t[s] : []).concat([n]))
                : (t[s] = t[s] ? t[s] + ", " + n : n);
            }
          }
        ),
      t
    );
  };
});
var je = d((Ct, Le) => {
  o();
  ("use strict");
  var Ue = m();
  Le.exports = Ue.isStandardBrowserEnv()
    ? (function () {
        var e = /(msie|trident)/i.test(navigator.userAgent),
          t = document.createElement("a"),
          s;
        function n(a) {
          var u = a;
          return (
            e && (t.setAttribute("href", u), (u = t.href)),
            t.setAttribute("href", u),
            {
              href: t.href,
              protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
              host: t.host,
              search: t.search ? t.search.replace(/^\?/, "") : "",
              hash: t.hash ? t.hash.replace(/^#/, "") : "",
              hostname: t.hostname,
              port: t.port,
              pathname:
                t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname,
            }
          );
        }
        return (
          (s = n(window.location.href)),
          function (u) {
            var l = Ue.isString(u) ? n(u) : u;
            return l.protocol === s.protocol && l.host === s.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
});
var A = d((Ot, De) => {
  o();
  ("use strict");
  function X(r) {
    this.message = r;
  }
  X.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  };
  X.prototype.__CANCEL__ = !0;
  De.exports = X;
});
var G = d((Rt, Be) => {
  o();
  ("use strict");
  var j = m(),
    kr = Ee(),
    Fr = Se(),
    Hr = z(),
    Mr = Ne(),
    Jr = Pe(),
    zr = je(),
    K = V(),
    $r = N(),
    Vr = A();
  Be.exports = function (e) {
    return new Promise(function (s, n) {
      var a = e.data,
        u = e.headers,
        l = e.responseType,
        f;
      function b() {
        e.cancelToken && e.cancelToken.unsubscribe(f),
          e.signal && e.signal.removeEventListener("abort", f);
      }
      j.isFormData(a) && delete u["Content-Type"];
      var i = new XMLHttpRequest();
      if (e.auth) {
        var p = e.auth.username || "",
          x = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : "";
        u.Authorization = "Basic " + btoa(p + ":" + x);
      }
      var v = Mr(e.baseURL, e.url);
      i.open(e.method.toUpperCase(), Hr(v, e.params, e.paramsSerializer), !0),
        (i.timeout = e.timeout);
      function se() {
        if (!!i) {
          var w =
              "getAllResponseHeaders" in i
                ? Jr(i.getAllResponseHeaders())
                : null,
            C =
              !l || l === "text" || l === "json" ? i.responseText : i.response,
            S = {
              data: C,
              status: i.status,
              statusText: i.statusText,
              headers: w,
              config: e,
              request: i,
            };
          kr(
            function (_) {
              s(_), b();
            },
            function (_) {
              n(_), b();
            },
            S
          ),
            (i = null);
        }
      }
      if (
        ("onloadend" in i
          ? (i.onloadend = se)
          : (i.onreadystatechange = function () {
              !i ||
                i.readyState !== 4 ||
                (i.status === 0 &&
                  !(i.responseURL && i.responseURL.indexOf("file:") === 0)) ||
                setTimeout(se);
            }),
        (i.onabort = function () {
          !i || (n(K("Request aborted", e, "ECONNABORTED", i)), (i = null));
        }),
        (i.onerror = function () {
          n(K("Network Error", e, null, i)), (i = null);
        }),
        (i.ontimeout = function () {
          var C = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded",
            S = e.transitional || $r.transitional;
          e.timeoutErrorMessage && (C = e.timeoutErrorMessage),
            n(K(C, e, S.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", i)),
            (i = null);
        }),
        j.isStandardBrowserEnv())
      ) {
        var ie =
          (e.withCredentials || zr(v)) && e.xsrfCookieName
            ? Fr.read(e.xsrfCookieName)
            : void 0;
        ie && (u[e.xsrfHeaderName] = ie);
      }
      "setRequestHeader" in i &&
        j.forEach(u, function (C, S) {
          typeof a == "undefined" && S.toLowerCase() === "content-type"
            ? delete u[S]
            : i.setRequestHeader(S, C);
        }),
        j.isUndefined(e.withCredentials) ||
          (i.withCredentials = !!e.withCredentials),
        l && l !== "json" && (i.responseType = e.responseType),
        typeof e.onDownloadProgress == "function" &&
          i.addEventListener("progress", e.onDownloadProgress),
        typeof e.onUploadProgress == "function" &&
          i.upload &&
          i.upload.addEventListener("progress", e.onUploadProgress),
        (e.cancelToken || e.signal) &&
          ((f = function (w) {
            !i ||
              (n(!w || (w && w.type) ? new Vr("canceled") : w),
              i.abort(),
              (i = null));
          }),
          e.cancelToken && e.cancelToken.subscribe(f),
          e.signal &&
            (e.signal.aborted ? f() : e.signal.addEventListener("abort", f))),
        a || (a = null),
        i.send(a);
    });
  };
});
var N = d((gt, ke) => {
  o();
  ("use strict");
  var h = m(),
    Ie = ye(),
    Wr = $(),
    Xr = { "Content-Type": "application/x-www-form-urlencoded" };
  function _e(r, e) {
    !h.isUndefined(r) &&
      h.isUndefined(r["Content-Type"]) &&
      (r["Content-Type"] = e);
  }
  function Kr() {
    var r;
    return (
      typeof XMLHttpRequest != "undefined"
        ? (r = G())
        : typeof process != "undefined" &&
          Object.prototype.toString.call(process) === "[object process]" &&
          (r = G()),
      r
    );
  }
  function Gr(r, e, t) {
    if (h.isString(r))
      try {
        return (e || JSON.parse)(r), h.trim(r);
      } catch (s) {
        if (s.name !== "SyntaxError") throw s;
      }
    return (t || JSON.stringify)(r);
  }
  var D = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    adapter: Kr(),
    transformRequest: [
      function (e, t) {
        return (
          Ie(t, "Accept"),
          Ie(t, "Content-Type"),
          h.isFormData(e) ||
          h.isArrayBuffer(e) ||
          h.isBuffer(e) ||
          h.isStream(e) ||
          h.isFile(e) ||
          h.isBlob(e)
            ? e
            : h.isArrayBufferView(e)
            ? e.buffer
            : h.isURLSearchParams(e)
            ? (_e(t, "application/x-www-form-urlencoded;charset=utf-8"),
              e.toString())
            : h.isObject(e) || (t && t["Content-Type"] === "application/json")
            ? (_e(t, "application/json"), Gr(e))
            : e
        );
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional || D.transitional,
          s = t && t.silentJSONParsing,
          n = t && t.forcedJSONParsing,
          a = !s && this.responseType === "json";
        if (a || (n && h.isString(e) && e.length))
          try {
            return JSON.parse(e);
          } catch (u) {
            if (a)
              throw u.name === "SyntaxError" ? Wr(u, this, "E_JSON_PARSE") : u;
          }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  h.forEach(["delete", "get", "head"], function (e) {
    D.headers[e] = {};
  });
  h.forEach(["post", "put", "patch"], function (e) {
    D.headers[e] = h.merge(Xr);
  });
  ke.exports = D;
});
var He = d((At, Fe) => {
  o();
  ("use strict");
  var Qr = m(),
    Yr = N();
  Fe.exports = function (e, t, s) {
    var n = this || Yr;
    return (
      Qr.forEach(s, function (u) {
        e = u.call(n, e, t);
      }),
      e
    );
  };
});
var Q = d((Nt, Me) => {
  o();
  ("use strict");
  Me.exports = function (e) {
    return !!(e && e.__CANCEL__);
  };
});
var $e = d((Tt, ze) => {
  o();
  ("use strict");
  var Je = m(),
    Y = He(),
    Zr = Q(),
    et = N(),
    rt = A();
  function Z(r) {
    if (
      (r.cancelToken && r.cancelToken.throwIfRequested(),
      r.signal && r.signal.aborted)
    )
      throw new rt("canceled");
  }
  ze.exports = function (e) {
    Z(e),
      (e.headers = e.headers || {}),
      (e.data = Y.call(e, e.data, e.headers, e.transformRequest)),
      (e.headers = Je.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      Je.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (n) {
          delete e.headers[n];
        }
      );
    var t = e.adapter || et.adapter;
    return t(e).then(
      function (n) {
        return (
          Z(e), (n.data = Y.call(e, n.data, n.headers, e.transformResponse)), n
        );
      },
      function (n) {
        return (
          Zr(n) ||
            (Z(e),
            n &&
              n.response &&
              (n.response.data = Y.call(
                e,
                n.response.data,
                n.response.headers,
                e.transformResponse
              ))),
          Promise.reject(n)
        );
      }
    );
  };
});
var ee = d((Pt, Ve) => {
  o();
  ("use strict");
  var y = m();
  Ve.exports = function (e, t) {
    t = t || {};
    var s = {};
    function n(i, p) {
      return y.isPlainObject(i) && y.isPlainObject(p)
        ? y.merge(i, p)
        : y.isPlainObject(p)
        ? y.merge({}, p)
        : y.isArray(p)
        ? p.slice()
        : p;
    }
    function a(i) {
      if (y.isUndefined(t[i])) {
        if (!y.isUndefined(e[i])) return n(void 0, e[i]);
      } else return n(e[i], t[i]);
    }
    function u(i) {
      if (!y.isUndefined(t[i])) return n(void 0, t[i]);
    }
    function l(i) {
      if (y.isUndefined(t[i])) {
        if (!y.isUndefined(e[i])) return n(void 0, e[i]);
      } else return n(void 0, t[i]);
    }
    function f(i) {
      if (i in t) return n(e[i], t[i]);
      if (i in e) return n(void 0, e[i]);
    }
    var b = {
      url: u,
      method: u,
      data: u,
      baseURL: l,
      transformRequest: l,
      transformResponse: l,
      paramsSerializer: l,
      timeout: l,
      timeoutMessage: l,
      withCredentials: l,
      adapter: l,
      responseType: l,
      xsrfCookieName: l,
      xsrfHeaderName: l,
      onUploadProgress: l,
      onDownloadProgress: l,
      decompress: l,
      maxContentLength: l,
      maxBodyLength: l,
      transport: l,
      httpAgent: l,
      httpsAgent: l,
      cancelToken: l,
      socketPath: l,
      responseEncoding: l,
      validateStatus: f,
    };
    return (
      y.forEach(Object.keys(e).concat(Object.keys(t)), function (p) {
        var x = b[p] || a,
          v = x(p);
        (y.isUndefined(v) && x !== f) || (s[p] = v);
      }),
      s
    );
  };
});
var re = d((Ut, We) => {
  o();
  We.exports = { version: "0.25.0" };
});
var Ge = d((Lt, Ke) => {
  o();
  ("use strict");
  var tt = re().version,
    te = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (r, e) {
      te[r] = function (s) {
        return typeof s === r || "a" + (e < 1 ? "n " : " ") + r;
      };
    }
  );
  var Xe = {};
  te.transitional = function (e, t, s) {
    function n(a, u) {
      return (
        "[Axios v" +
        tt +
        "] Transitional option '" +
        a +
        "'" +
        u +
        (s ? ". " + s : "")
      );
    }
    return function (a, u, l) {
      if (e === !1)
        throw new Error(n(u, " has been removed" + (t ? " in " + t : "")));
      return (
        t &&
          !Xe[u] &&
          ((Xe[u] = !0),
          console.warn(
            n(
              u,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        e ? e(a, u, l) : !0
      );
    };
  };
  function nt(r, e, t) {
    if (typeof r != "object") throw new TypeError("options must be an object");
    for (var s = Object.keys(r), n = s.length; n-- > 0; ) {
      var a = s[n],
        u = e[a];
      if (u) {
        var l = r[a],
          f = l === void 0 || u(l, a, r);
        if (f !== !0) throw new TypeError("option " + a + " must be " + f);
        continue;
      }
      if (t !== !0) throw Error("Unknown option " + a);
    }
  }
  Ke.exports = { assertOptions: nt, validators: te };
});
var tr = d((jt, rr) => {
  o();
  ("use strict");
  var Qe = m(),
    st = z(),
    Ye = me(),
    Ze = $e(),
    B = ee(),
    er = Ge(),
    R = er.validators;
  function T(r) {
    (this.defaults = r),
      (this.interceptors = { request: new Ye(), response: new Ye() });
  }
  T.prototype.request = function (e, t) {
    if (
      (typeof e == "string" ? ((t = t || {}), (t.url = e)) : (t = e || {}),
      !t.url)
    )
      throw new Error("Provided config url is not valid");
    (t = B(this.defaults, t)),
      t.method
        ? (t.method = t.method.toLowerCase())
        : this.defaults.method
        ? (t.method = this.defaults.method.toLowerCase())
        : (t.method = "get");
    var s = t.transitional;
    s !== void 0 &&
      er.assertOptions(
        s,
        {
          silentJSONParsing: R.transitional(R.boolean),
          forcedJSONParsing: R.transitional(R.boolean),
          clarifyTimeoutError: R.transitional(R.boolean),
        },
        !1
      );
    var n = [],
      a = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(t) === !1) ||
        ((a = a && v.synchronous), n.unshift(v.fulfilled, v.rejected));
    });
    var u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    var l;
    if (!a) {
      var f = [Ze, void 0];
      for (
        Array.prototype.unshift.apply(f, n),
          f = f.concat(u),
          l = Promise.resolve(t);
        f.length;

      )
        l = l.then(f.shift(), f.shift());
      return l;
    }
    for (var b = t; n.length; ) {
      var i = n.shift(),
        p = n.shift();
      try {
        b = i(b);
      } catch (x) {
        p(x);
        break;
      }
    }
    try {
      l = Ze(b);
    } catch (x) {
      return Promise.reject(x);
    }
    for (; u.length; ) l = l.then(u.shift(), u.shift());
    return l;
  };
  T.prototype.getUri = function (e) {
    if (!e.url) throw new Error("Provided config url is not valid");
    return (
      (e = B(this.defaults, e)),
      st(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    );
  };
  Qe.forEach(["delete", "get", "head", "options"], function (e) {
    T.prototype[e] = function (t, s) {
      return this.request(
        B(s || {}, { method: e, url: t, data: (s || {}).data })
      );
    };
  });
  Qe.forEach(["post", "put", "patch"], function (e) {
    T.prototype[e] = function (t, s, n) {
      return this.request(B(n || {}, { method: e, url: t, data: s }));
    };
  });
  rr.exports = T;
});
var sr = d((Dt, nr) => {
  o();
  ("use strict");
  var it = A();
  function g(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var e;
    this.promise = new Promise(function (n) {
      e = n;
    });
    var t = this;
    this.promise.then(function (s) {
      if (!!t._listeners) {
        var n,
          a = t._listeners.length;
        for (n = 0; n < a; n++) t._listeners[n](s);
        t._listeners = null;
      }
    }),
      (this.promise.then = function (s) {
        var n,
          a = new Promise(function (u) {
            t.subscribe(u), (n = u);
          }).then(s);
        return (
          (a.cancel = function () {
            t.unsubscribe(n);
          }),
          a
        );
      }),
      r(function (n) {
        t.reason || ((t.reason = new it(n)), e(t.reason));
      });
  }
  g.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  };
  g.prototype.subscribe = function (e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
  };
  g.prototype.unsubscribe = function (e) {
    if (!!this._listeners) {
      var t = this._listeners.indexOf(e);
      t !== -1 && this._listeners.splice(t, 1);
    }
  };
  g.source = function () {
    var e,
      t = new g(function (n) {
        e = n;
      });
    return { token: t, cancel: e };
  };
  nr.exports = g;
});
var ar = d((Bt, ir) => {
  o();
  ("use strict");
  ir.exports = function (e) {
    return function (s) {
      return e.apply(null, s);
    };
  };
});
var ur = d((It, or) => {
  o();
  ("use strict");
  var at = m();
  or.exports = function (e) {
    return at.isObject(e) && e.isAxiosError === !0;
  };
});
var fr = d((_t, ne) => {
  o();
  ("use strict");
  var lr = m(),
    ot = k(),
    I = tr(),
    ut = ee(),
    lt = N();
  function cr(r) {
    var e = new I(r),
      t = ot(I.prototype.request, e);
    return (
      lr.extend(t, I.prototype, e),
      lr.extend(t, e),
      (t.create = function (n) {
        return cr(ut(r, n));
      }),
      t
    );
  }
  var E = cr(lt);
  E.Axios = I;
  E.Cancel = A();
  E.CancelToken = sr();
  E.isCancel = Q();
  E.VERSION = re().version;
  E.all = function (e) {
    return Promise.all(e);
  };
  E.spread = ar();
  E.isAxiosError = ur();
  ne.exports = E;
  ne.exports.default = E;
});
var pr = d((kt, dr) => {
  o();
  dr.exports = fr();
});
o();
o();
var ct = vr(pr());
function hr() {
  let r = ae(),
    e = new Date(`${r.body.sunset}`).toLocaleString(),
    t = new Date(`${r.body.sunrise}`).toLocaleString();
  return c.createElement(
    "div",
    null,
    c.createElement("h1", null, r.postId, " "),
    c.createElement("h2", null, "'sunset'", e),
    c.createElement("h4", null, "'sunrise'", t)
  );
}
export { hr as default };
