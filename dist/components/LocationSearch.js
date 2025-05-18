var yE = Object.defineProperty;
var vE = (e, n, r) => n in e ? yE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var Pi = (e, n, r) => vE(e, typeof n != "symbol" ? n + "" : n, r);
import { jsx as oe, jsxs as Dt, Fragment as bE } from "react/jsx-runtime";
import * as I from "react";
import or, { forwardRef as xE, useContext as EE, isValidElement as ss, cloneElement as ls, Children as TE, useRef as wE, useState as ed, useCallback as td, useEffect as nd } from "react";
var Ka = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $h(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ya = { exports: {} }, Xa = { exports: {} }, rt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rd;
function SE() {
  if (rd) return rt;
  rd = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, l = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function _(T) {
    if (typeof T == "object" && T !== null) {
      var N = T.$$typeof;
      switch (N) {
        case n:
          switch (T = T.type, T) {
            case d:
            case h:
            case a:
            case u:
            case l:
            case m:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case p:
                case y:
                case O:
                case w:
                case c:
                  return T;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function C(T) {
    return _(T) === h;
  }
  return rt.AsyncMode = d, rt.ConcurrentMode = h, rt.ContextConsumer = p, rt.ContextProvider = c, rt.Element = n, rt.ForwardRef = y, rt.Fragment = a, rt.Lazy = O, rt.Memo = w, rt.Portal = r, rt.Profiler = u, rt.StrictMode = l, rt.Suspense = m, rt.isAsyncMode = function(T) {
    return C(T) || _(T) === d;
  }, rt.isConcurrentMode = C, rt.isContextConsumer = function(T) {
    return _(T) === p;
  }, rt.isContextProvider = function(T) {
    return _(T) === c;
  }, rt.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }, rt.isForwardRef = function(T) {
    return _(T) === y;
  }, rt.isFragment = function(T) {
    return _(T) === a;
  }, rt.isLazy = function(T) {
    return _(T) === O;
  }, rt.isMemo = function(T) {
    return _(T) === w;
  }, rt.isPortal = function(T) {
    return _(T) === r;
  }, rt.isProfiler = function(T) {
    return _(T) === u;
  }, rt.isStrictMode = function(T) {
    return _(T) === l;
  }, rt.isSuspense = function(T) {
    return _(T) === m;
  }, rt.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === a || T === h || T === u || T === l || T === m || T === v || typeof T == "object" && T !== null && (T.$$typeof === O || T.$$typeof === w || T.$$typeof === c || T.$$typeof === p || T.$$typeof === y || T.$$typeof === R || T.$$typeof === A || T.$$typeof === M || T.$$typeof === b);
  }, rt.typeOf = _, rt;
}
var ot = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od;
function OE() {
  return od || (od = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, l = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function _(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === a || D === h || D === u || D === l || D === m || D === v || typeof D == "object" && D !== null && (D.$$typeof === O || D.$$typeof === w || D.$$typeof === c || D.$$typeof === p || D.$$typeof === y || D.$$typeof === R || D.$$typeof === A || D.$$typeof === M || D.$$typeof === b);
    }
    function C(D) {
      if (typeof D == "object" && D !== null) {
        var Ae = D.$$typeof;
        switch (Ae) {
          case n:
            var Te = D.type;
            switch (Te) {
              case d:
              case h:
              case a:
              case u:
              case l:
              case m:
                return Te;
              default:
                var _e = Te && Te.$$typeof;
                switch (_e) {
                  case p:
                  case y:
                  case O:
                  case w:
                  case c:
                    return _e;
                  default:
                    return Ae;
                }
            }
          case r:
            return Ae;
        }
      }
    }
    var T = d, N = h, F = p, V = c, Q = n, E = y, B = a, U = O, te = w, re = r, ee = u, q = l, ae = m, pe = !1;
    function K(D) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(D) || C(D) === d;
    }
    function z(D) {
      return C(D) === h;
    }
    function Z(D) {
      return C(D) === p;
    }
    function be(D) {
      return C(D) === c;
    }
    function fe(D) {
      return typeof D == "object" && D !== null && D.$$typeof === n;
    }
    function se(D) {
      return C(D) === y;
    }
    function ie(D) {
      return C(D) === a;
    }
    function me(D) {
      return C(D) === O;
    }
    function ye(D) {
      return C(D) === w;
    }
    function le(D) {
      return C(D) === r;
    }
    function ce(D) {
      return C(D) === u;
    }
    function ue(D) {
      return C(D) === l;
    }
    function ve(D) {
      return C(D) === m;
    }
    ot.AsyncMode = T, ot.ConcurrentMode = N, ot.ContextConsumer = F, ot.ContextProvider = V, ot.Element = Q, ot.ForwardRef = E, ot.Fragment = B, ot.Lazy = U, ot.Memo = te, ot.Portal = re, ot.Profiler = ee, ot.StrictMode = q, ot.Suspense = ae, ot.isAsyncMode = K, ot.isConcurrentMode = z, ot.isContextConsumer = Z, ot.isContextProvider = be, ot.isElement = fe, ot.isForwardRef = se, ot.isFragment = ie, ot.isLazy = me, ot.isMemo = ye, ot.isPortal = le, ot.isProfiler = ce, ot.isStrictMode = ue, ot.isSuspense = ve, ot.isValidElementType = _, ot.typeOf = C;
  }()), ot;
}
var id;
function Nh() {
  return id || (id = 1, process.env.NODE_ENV === "production" ? Xa.exports = SE() : Xa.exports = OE()), Xa.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mu, ad;
function CE() {
  if (ad) return mu;
  ad = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function a(u) {
    if (u == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(u);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var u = new String("abc");
      if (u[5] = "de", Object.getOwnPropertyNames(u)[0] === "5")
        return !1;
      for (var c = {}, p = 0; p < 10; p++)
        c["_" + String.fromCharCode(p)] = p;
      var d = Object.getOwnPropertyNames(c).map(function(y) {
        return c[y];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        h[y] = y;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return mu = l() ? Object.assign : function(u, c) {
    for (var p, d = a(u), h, y = 1; y < arguments.length; y++) {
      p = Object(arguments[y]);
      for (var m in p)
        n.call(p, m) && (d[m] = p[m]);
      if (e) {
        h = e(p);
        for (var v = 0; v < h.length; v++)
          r.call(p, h[v]) && (d[h[v]] = p[h[v]]);
      }
    }
    return d;
  }, mu;
}
var yu, sd;
function Yu() {
  if (sd) return yu;
  sd = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yu = e, yu;
}
var vu, ld;
function Mh() {
  return ld || (ld = 1, vu = Function.call.bind(Object.prototype.hasOwnProperty)), vu;
}
var bu, ud;
function _E() {
  if (ud) return bu;
  ud = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = /* @__PURE__ */ Yu(), r = {}, a = /* @__PURE__ */ Mh();
    e = function(u) {
      var c = "Warning: " + u;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function l(u, c, p, d, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in u)
        if (a(u, y)) {
          var m;
          try {
            if (typeof u[y] != "function") {
              var v = Error(
                (d || "React class") + ": " + p + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = u[y](c, y, d, p, null, n);
          } catch (O) {
            m = O;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + p + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var w = h ? h() : "";
            e(
              "Failed " + p + " type: " + m.message + (w ?? "")
            );
          }
        }
    }
  }
  return l.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, bu = l, bu;
}
var xu, cd;
function RE() {
  if (cd) return xu;
  cd = 1;
  var e = Nh(), n = CE(), r = /* @__PURE__ */ Yu(), a = /* @__PURE__ */ Mh(), l = /* @__PURE__ */ _E(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(p) {
    var d = "Warning: " + p;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return xu = function(p, d) {
    var h = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function m(z) {
      var Z = z && (h && z[h] || z[y]);
      if (typeof Z == "function")
        return Z;
    }
    var v = "<<anonymous>>", w = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: M(),
      arrayOf: _,
      element: C(),
      elementType: T(),
      instanceOf: N,
      node: E(),
      objectOf: V,
      oneOf: F,
      oneOfType: Q,
      shape: U,
      exact: te
    };
    function O(z, Z) {
      return z === Z ? z !== 0 || 1 / z === 1 / Z : z !== z && Z !== Z;
    }
    function b(z, Z) {
      this.message = z, this.data = Z && typeof Z == "object" ? Z : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function R(z) {
      if (process.env.NODE_ENV !== "production")
        var Z = {}, be = 0;
      function fe(ie, me, ye, le, ce, ue, ve) {
        if (le = le || v, ue = ue || ye, ve !== r) {
          if (d) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ae = le + ":" + ye;
            !Z[Ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            be < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + ue + "` prop on `" + le + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Z[Ae] = !0, be++);
          }
        }
        return me[ye] == null ? ie ? me[ye] === null ? new b("The " + ce + " `" + ue + "` is marked as required " + ("in `" + le + "`, but its value is `null`.")) : new b("The " + ce + " `" + ue + "` is marked as required in " + ("`" + le + "`, but its value is `undefined`.")) : null : z(me, ye, le, ce, ue);
      }
      var se = fe.bind(null, !1);
      return se.isRequired = fe.bind(null, !0), se;
    }
    function A(z) {
      function Z(be, fe, se, ie, me, ye) {
        var le = be[fe], ce = q(le);
        if (ce !== z) {
          var ue = ae(le);
          return new b(
            "Invalid " + ie + " `" + me + "` of type " + ("`" + ue + "` supplied to `" + se + "`, expected ") + ("`" + z + "`."),
            { expectedType: z }
          );
        }
        return null;
      }
      return R(Z);
    }
    function M() {
      return R(c);
    }
    function _(z) {
      function Z(be, fe, se, ie, me) {
        if (typeof z != "function")
          return new b("Property `" + me + "` of component `" + se + "` has invalid PropType notation inside arrayOf.");
        var ye = be[fe];
        if (!Array.isArray(ye)) {
          var le = q(ye);
          return new b("Invalid " + ie + " `" + me + "` of type " + ("`" + le + "` supplied to `" + se + "`, expected an array."));
        }
        for (var ce = 0; ce < ye.length; ce++) {
          var ue = z(ye, ce, se, ie, me + "[" + ce + "]", r);
          if (ue instanceof Error)
            return ue;
        }
        return null;
      }
      return R(Z);
    }
    function C() {
      function z(Z, be, fe, se, ie) {
        var me = Z[be];
        if (!p(me)) {
          var ye = q(me);
          return new b("Invalid " + se + " `" + ie + "` of type " + ("`" + ye + "` supplied to `" + fe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return R(z);
    }
    function T() {
      function z(Z, be, fe, se, ie) {
        var me = Z[be];
        if (!e.isValidElementType(me)) {
          var ye = q(me);
          return new b("Invalid " + se + " `" + ie + "` of type " + ("`" + ye + "` supplied to `" + fe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return R(z);
    }
    function N(z) {
      function Z(be, fe, se, ie, me) {
        if (!(be[fe] instanceof z)) {
          var ye = z.name || v, le = K(be[fe]);
          return new b("Invalid " + ie + " `" + me + "` of type " + ("`" + le + "` supplied to `" + se + "`, expected ") + ("instance of `" + ye + "`."));
        }
        return null;
      }
      return R(Z);
    }
    function F(z) {
      if (!Array.isArray(z))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), c;
      function Z(be, fe, se, ie, me) {
        for (var ye = be[fe], le = 0; le < z.length; le++)
          if (O(ye, z[le]))
            return null;
        var ce = JSON.stringify(z, function(ve, D) {
          var Ae = ae(D);
          return Ae === "symbol" ? String(D) : D;
        });
        return new b("Invalid " + ie + " `" + me + "` of value `" + String(ye) + "` " + ("supplied to `" + se + "`, expected one of " + ce + "."));
      }
      return R(Z);
    }
    function V(z) {
      function Z(be, fe, se, ie, me) {
        if (typeof z != "function")
          return new b("Property `" + me + "` of component `" + se + "` has invalid PropType notation inside objectOf.");
        var ye = be[fe], le = q(ye);
        if (le !== "object")
          return new b("Invalid " + ie + " `" + me + "` of type " + ("`" + le + "` supplied to `" + se + "`, expected an object."));
        for (var ce in ye)
          if (a(ye, ce)) {
            var ue = z(ye, ce, se, ie, me + "." + ce, r);
            if (ue instanceof Error)
              return ue;
          }
        return null;
      }
      return R(Z);
    }
    function Q(z) {
      if (!Array.isArray(z))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var Z = 0; Z < z.length; Z++) {
        var be = z[Z];
        if (typeof be != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(be) + " at index " + Z + "."
          ), c;
      }
      function fe(se, ie, me, ye, le) {
        for (var ce = [], ue = 0; ue < z.length; ue++) {
          var ve = z[ue], D = ve(se, ie, me, ye, le, r);
          if (D == null)
            return null;
          D.data && a(D.data, "expectedType") && ce.push(D.data.expectedType);
        }
        var Ae = ce.length > 0 ? ", expected one of type [" + ce.join(", ") + "]" : "";
        return new b("Invalid " + ye + " `" + le + "` supplied to " + ("`" + me + "`" + Ae + "."));
      }
      return R(fe);
    }
    function E() {
      function z(Z, be, fe, se, ie) {
        return re(Z[be]) ? null : new b("Invalid " + se + " `" + ie + "` supplied to " + ("`" + fe + "`, expected a ReactNode."));
      }
      return R(z);
    }
    function B(z, Z, be, fe, se) {
      return new b(
        (z || "React class") + ": " + Z + " type `" + be + "." + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + se + "`."
      );
    }
    function U(z) {
      function Z(be, fe, se, ie, me) {
        var ye = be[fe], le = q(ye);
        if (le !== "object")
          return new b("Invalid " + ie + " `" + me + "` of type `" + le + "` " + ("supplied to `" + se + "`, expected `object`."));
        for (var ce in z) {
          var ue = z[ce];
          if (typeof ue != "function")
            return B(se, ie, me, ce, ae(ue));
          var ve = ue(ye, ce, se, ie, me + "." + ce, r);
          if (ve)
            return ve;
        }
        return null;
      }
      return R(Z);
    }
    function te(z) {
      function Z(be, fe, se, ie, me) {
        var ye = be[fe], le = q(ye);
        if (le !== "object")
          return new b("Invalid " + ie + " `" + me + "` of type `" + le + "` " + ("supplied to `" + se + "`, expected `object`."));
        var ce = n({}, be[fe], z);
        for (var ue in ce) {
          var ve = z[ue];
          if (a(z, ue) && typeof ve != "function")
            return B(se, ie, me, ue, ae(ve));
          if (!ve)
            return new b(
              "Invalid " + ie + " `" + me + "` key `" + ue + "` supplied to `" + se + "`.\nBad object: " + JSON.stringify(be[fe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(z), null, "  ")
            );
          var D = ve(ye, ue, se, ie, me + "." + ue, r);
          if (D)
            return D;
        }
        return null;
      }
      return R(Z);
    }
    function re(z) {
      switch (typeof z) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !z;
        case "object":
          if (Array.isArray(z))
            return z.every(re);
          if (z === null || p(z))
            return !0;
          var Z = m(z);
          if (Z) {
            var be = Z.call(z), fe;
            if (Z !== z.entries) {
              for (; !(fe = be.next()).done; )
                if (!re(fe.value))
                  return !1;
            } else
              for (; !(fe = be.next()).done; ) {
                var se = fe.value;
                if (se && !re(se[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(z, Z) {
      return z === "symbol" ? !0 : Z ? Z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Z instanceof Symbol : !1;
    }
    function q(z) {
      var Z = typeof z;
      return Array.isArray(z) ? "array" : z instanceof RegExp ? "object" : ee(Z, z) ? "symbol" : Z;
    }
    function ae(z) {
      if (typeof z > "u" || z === null)
        return "" + z;
      var Z = q(z);
      if (Z === "object") {
        if (z instanceof Date)
          return "date";
        if (z instanceof RegExp)
          return "regexp";
      }
      return Z;
    }
    function pe(z) {
      var Z = ae(z);
      switch (Z) {
        case "array":
        case "object":
          return "an " + Z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Z;
        default:
          return Z;
      }
    }
    function K(z) {
      return !z.constructor || !z.constructor.name ? v : z.constructor.name;
    }
    return w.checkPropTypes = l, w.resetWarningCache = l.resetWarningCache, w.PropTypes = w, w;
  }, xu;
}
var Eu, fd;
function PE() {
  if (fd) return Eu;
  fd = 1;
  var e = /* @__PURE__ */ Yu();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, Eu = function() {
    function a(c, p, d, h, y, m) {
      if (m !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    a.isRequired = a;
    function l() {
      return a;
    }
    var u = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: l,
      element: a,
      elementType: a,
      instanceOf: l,
      node: a,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return u.PropTypes = u, u;
  }, Eu;
}
var pd;
function IE() {
  if (pd) return Ya.exports;
  if (pd = 1, process.env.NODE_ENV !== "production") {
    var e = Nh(), n = !0;
    Ya.exports = /* @__PURE__ */ RE()(e.isElement, n);
  } else
    Ya.exports = /* @__PURE__ */ PE()();
  return Ya.exports;
}
var AE = /* @__PURE__ */ IE();
const i = /* @__PURE__ */ $h(AE);
function kh(e) {
  var n, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (n = 0; n < l; n++) e[n] && (r = kh(e[n])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function Le() {
  for (var e, n, r = 0, a = "", l = arguments.length; r < l; r++) (e = arguments[r]) && (n = kh(e)) && (a && (a += " "), a += n);
  return a;
}
function bt(e, n, r = void 0) {
  const a = {};
  for (const l in e) {
    const u = e[l];
    let c = "", p = !0;
    for (let d = 0; d < u.length; d += 1) {
      const h = u[d];
      h && (c += (p === !0 ? "" : " ") + n(h), p = !1, r && r[h] && (c += " " + r[h]));
    }
    a[l] = c;
  }
  return a;
}
let dd = 0;
function $E(e) {
  const [n, r] = I.useState(e), a = e || n;
  return I.useEffect(() => {
    n == null && (dd += 1, r(`mui-${dd}`));
  }, [n]), a;
}
const NE = {
  ...I
}, hd = NE.useId;
function Is(e) {
  if (hd !== void 0) {
    const n = hd();
    return e ?? n;
  }
  return $E(e);
}
const ar = i.oneOfType([i.func, i.object]);
function br(e, ...n) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return n.forEach((a) => r.searchParams.append("args[]", a)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Se(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : br(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Za = { exports: {} }, ut = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gd;
function ME() {
  if (gd) return ut;
  gd = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), c = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.for("react.client.reference");
  function O(b) {
    if (typeof b == "object" && b !== null) {
      var R = b.$$typeof;
      switch (R) {
        case e:
          switch (b = b.type, b) {
            case r:
            case l:
            case a:
            case d:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case p:
                case m:
                case y:
                  return b;
                case u:
                  return b;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  return ut.ContextConsumer = u, ut.ContextProvider = c, ut.Element = e, ut.ForwardRef = p, ut.Fragment = r, ut.Lazy = m, ut.Memo = y, ut.Portal = n, ut.Profiler = l, ut.StrictMode = a, ut.Suspense = d, ut.SuspenseList = h, ut.isContextConsumer = function(b) {
    return O(b) === u;
  }, ut.isContextProvider = function(b) {
    return O(b) === c;
  }, ut.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, ut.isForwardRef = function(b) {
    return O(b) === p;
  }, ut.isFragment = function(b) {
    return O(b) === r;
  }, ut.isLazy = function(b) {
    return O(b) === m;
  }, ut.isMemo = function(b) {
    return O(b) === y;
  }, ut.isPortal = function(b) {
    return O(b) === n;
  }, ut.isProfiler = function(b) {
    return O(b) === l;
  }, ut.isStrictMode = function(b) {
    return O(b) === a;
  }, ut.isSuspense = function(b) {
    return O(b) === d;
  }, ut.isSuspenseList = function(b) {
    return O(b) === h;
  }, ut.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === l || b === a || b === d || b === h || b === v || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === y || b.$$typeof === c || b.$$typeof === u || b.$$typeof === p || b.$$typeof === w || b.getModuleId !== void 0);
  }, ut.typeOf = O, ut;
}
var ct = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var md;
function kE() {
  return md || (md = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (typeof b == "object" && b !== null) {
        var R = b.$$typeof;
        switch (R) {
          case n:
            switch (b = b.type, b) {
              case a:
              case u:
              case l:
              case h:
              case y:
                return b;
              default:
                switch (b = b && b.$$typeof, b) {
                  case p:
                  case d:
                  case v:
                  case m:
                    return b;
                  case c:
                    return b;
                  default:
                    return R;
                }
            }
          case r:
            return R;
        }
      }
    }
    var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), p = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O = Symbol.for("react.client.reference");
    ct.ContextConsumer = c, ct.ContextProvider = p, ct.Element = n, ct.ForwardRef = d, ct.Fragment = a, ct.Lazy = v, ct.Memo = m, ct.Portal = r, ct.Profiler = u, ct.StrictMode = l, ct.Suspense = h, ct.SuspenseList = y, ct.isContextConsumer = function(b) {
      return e(b) === c;
    }, ct.isContextProvider = function(b) {
      return e(b) === p;
    }, ct.isElement = function(b) {
      return typeof b == "object" && b !== null && b.$$typeof === n;
    }, ct.isForwardRef = function(b) {
      return e(b) === d;
    }, ct.isFragment = function(b) {
      return e(b) === a;
    }, ct.isLazy = function(b) {
      return e(b) === v;
    }, ct.isMemo = function(b) {
      return e(b) === m;
    }, ct.isPortal = function(b) {
      return e(b) === r;
    }, ct.isProfiler = function(b) {
      return e(b) === u;
    }, ct.isStrictMode = function(b) {
      return e(b) === l;
    }, ct.isSuspense = function(b) {
      return e(b) === h;
    }, ct.isSuspenseList = function(b) {
      return e(b) === y;
    }, ct.isValidElementType = function(b) {
      return typeof b == "string" || typeof b == "function" || b === a || b === u || b === l || b === h || b === y || b === w || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === m || b.$$typeof === p || b.$$typeof === c || b.$$typeof === d || b.$$typeof === O || b.getModuleId !== void 0);
    }, ct.typeOf = e;
  }()), ct;
}
var yd;
function DE() {
  return yd || (yd = 1, process.env.NODE_ENV === "production" ? Za.exports = /* @__PURE__ */ ME() : Za.exports = /* @__PURE__ */ kE()), Za.exports;
}
var wo = /* @__PURE__ */ DE();
function Lr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Dh(e) {
  if (/* @__PURE__ */ I.isValidElement(e) || wo.isValidElementType(e) || !Lr(e))
    return e;
  const n = {};
  return Object.keys(e).forEach((r) => {
    n[r] = Dh(e[r]);
  }), n;
}
function ln(e, n, r = {
  clone: !0
}) {
  const a = r.clone ? {
    ...e
  } : e;
  return Lr(e) && Lr(n) && Object.keys(n).forEach((l) => {
    /* @__PURE__ */ I.isValidElement(n[l]) || wo.isValidElementType(n[l]) ? a[l] = n[l] : Lr(n[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && Lr(e[l]) ? a[l] = ln(e[l], n[l], r) : r.clone ? a[l] = Lr(n[l]) ? Dh(n[l]) : n[l] : a[l] = n[l];
  }), a;
}
function Bi(e, n) {
  return n ? ln(e, n, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const no = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.string, i.object, i.array]) : {};
function LE(e, n) {
  if (!e.containerQueries)
    return n;
  const r = Object.keys(n).filter((a) => a.startsWith("@container")).sort((a, l) => {
    var c, p;
    const u = /min-width:\s*([0-9.]+)/;
    return +(((c = a.match(u)) == null ? void 0 : c[1]) || 0) - +(((p = l.match(u)) == null ? void 0 : p[1]) || 0);
  });
  return r.length ? r.reduce((a, l) => {
    const u = n[l];
    return delete a[l], a[l] = u, a;
  }, {
    ...n
  }) : n;
}
function FE(e, n) {
  return n === "@" || n.startsWith("@") && (e.some((r) => n.startsWith(`@${r}`)) || !!n.match(/^@\d/));
}
function BE(e, n) {
  const r = n.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${n})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : br(18, `(${n})`));
    return null;
  }
  const [, a, l] = r, u = Number.isNaN(+a) ? a || 0 : +a;
  return e.containerQueries(l).up(u);
}
function WE(e) {
  const n = (u, c) => u.replace("@media", c ? `@container ${c}` : "@container");
  function r(u, c) {
    u.up = (...p) => n(e.breakpoints.up(...p), c), u.down = (...p) => n(e.breakpoints.down(...p), c), u.between = (...p) => n(e.breakpoints.between(...p), c), u.only = (...p) => n(e.breakpoints.only(...p), c), u.not = (...p) => {
      const d = n(e.breakpoints.not(...p), c);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const a = {}, l = (u) => (r(a, u), a);
  return r(l), {
    ...e,
    containerQueries: l
  };
}
const As = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, vd = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${As[e]}px)`
}, UE = {
  containerQueries: (e) => ({
    up: (n) => {
      let r = typeof n == "number" ? n : As[n] || n;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Fr(e, n, r) {
  const a = e.theme || {};
  if (Array.isArray(n)) {
    const u = a.breakpoints || vd;
    return n.reduce((c, p, d) => (c[u.up(u.keys[d])] = r(n[d]), c), {});
  }
  if (typeof n == "object") {
    const u = a.breakpoints || vd;
    return Object.keys(n).reduce((c, p) => {
      if (FE(u.keys, p)) {
        const d = BE(a.containerQueries ? a : UE, p);
        d && (c[d] = r(n[p], p));
      } else if (Object.keys(u.values || As).includes(p)) {
        const d = u.up(p);
        c[d] = r(n[p], p);
      } else {
        const d = p;
        c[d] = n[d];
      }
      return c;
    }, {});
  }
  return r(n);
}
function zE(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((a, l) => {
    const u = e.up(l);
    return a[u] = {}, a;
  }, {})) || {};
}
function VE(e, n) {
  return e.reduce((r, a) => {
    const l = r[a];
    return (!l || Object.keys(l).length === 0) && delete r[a], r;
  }, n);
}
function $s(e, n, r = !0) {
  if (!n || typeof n != "string")
    return null;
  if (e && e.vars && r) {
    const a = `vars.${n}`.split(".").reduce((l, u) => l && l[u] ? l[u] : null, e);
    if (a != null)
      return a;
  }
  return n.split(".").reduce((a, l) => a && a[l] != null ? a[l] : null, e);
}
function gs(e, n, r, a = r) {
  let l;
  return typeof e == "function" ? l = e(r) : Array.isArray(e) ? l = e[r] || a : l = $s(e, r) || a, n && (l = n(l, a, e)), l;
}
function Lt(e) {
  const {
    prop: n,
    cssProperty: r = e.prop,
    themeKey: a,
    transform: l
  } = e, u = (c) => {
    if (c[n] == null)
      return null;
    const p = c[n], d = c.theme, h = $s(d, a) || {};
    return Fr(c, p, (m) => {
      let v = gs(h, l, m);
      return m === v && typeof m == "string" && (v = gs(h, l, `${n}${m === "default" ? "" : Se(m)}`, m)), r === !1 ? v : {
        [r]: v
      };
    });
  };
  return u.propTypes = process.env.NODE_ENV !== "production" ? {
    [n]: no
  } : {}, u.filterProps = [n], u;
}
function jE(e) {
  const n = {};
  return (r) => (n[r] === void 0 && (n[r] = e(r)), n[r]);
}
const HE = {
  m: "margin",
  p: "padding"
}, qE = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, bd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, GE = jE((e) => {
  if (e.length > 2)
    if (bd[e])
      e = bd[e];
    else
      return [e];
  const [n, r] = e.split(""), a = HE[n], l = qE[r] || "";
  return Array.isArray(l) ? l.map((u) => a + u) : [a + l];
}), Ns = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ms = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], KE = [...Ns, ...Ms];
function Ji(e, n, r, a) {
  const l = $s(e, n, !0) ?? r;
  return typeof l == "number" || typeof l == "string" ? (u) => typeof u == "string" ? u : (process.env.NODE_ENV !== "production" && typeof u != "number" && console.error(`MUI: Expected ${a} argument to be a number or a string, got ${u}.`), typeof l == "string" ? `calc(${u} * ${l})` : l * u) : Array.isArray(l) ? (u) => {
    if (typeof u == "string")
      return u;
    const c = Math.abs(u);
    process.env.NODE_ENV !== "production" && (Number.isInteger(c) ? c > l.length - 1 && console.error([`MUI: The value provided (${c}) overflows.`, `The supported values are: ${JSON.stringify(l)}.`, `${c} > ${l.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${n}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${n}\` as a number.`].join(`
`)));
    const p = l[c];
    return u >= 0 ? p : typeof p == "number" ? -p : `-${p}`;
  } : typeof l == "function" ? l : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${n}\` value (${l}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Xu(e) {
  return Ji(e, "spacing", 8, "spacing");
}
function Qi(e, n) {
  return typeof n == "string" || n == null ? n : e(n);
}
function YE(e, n) {
  return (r) => e.reduce((a, l) => (a[l] = Qi(n, r), a), {});
}
function XE(e, n, r, a) {
  if (!n.includes(r))
    return null;
  const l = GE(r), u = YE(l, a), c = e[r];
  return Fr(e, c, u);
}
function Lh(e, n) {
  const r = Xu(e.theme);
  return Object.keys(e).map((a) => XE(e, n, a, r)).reduce(Bi, {});
}
function It(e) {
  return Lh(e, Ns);
}
It.propTypes = process.env.NODE_ENV !== "production" ? Ns.reduce((e, n) => (e[n] = no, e), {}) : {};
It.filterProps = Ns;
function At(e) {
  return Lh(e, Ms);
}
At.propTypes = process.env.NODE_ENV !== "production" ? Ms.reduce((e, n) => (e[n] = no, e), {}) : {};
At.filterProps = Ms;
process.env.NODE_ENV !== "production" && KE.reduce((e, n) => (e[n] = no, e), {});
function ks(...e) {
  const n = e.reduce((a, l) => (l.filterProps.forEach((u) => {
    a[u] = l;
  }), a), {}), r = (a) => Object.keys(a).reduce((l, u) => n[u] ? Bi(l, n[u](a)) : l, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((a, l) => Object.assign(a, l.propTypes), {}) : {}, r.filterProps = e.reduce((a, l) => a.concat(l.filterProps), []), r;
}
function Gn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Zn(e, n) {
  return Lt({
    prop: e,
    themeKey: "borders",
    transform: n
  });
}
const ZE = Zn("border", Gn), JE = Zn("borderTop", Gn), QE = Zn("borderRight", Gn), eT = Zn("borderBottom", Gn), tT = Zn("borderLeft", Gn), nT = Zn("borderColor"), rT = Zn("borderTopColor"), oT = Zn("borderRightColor"), iT = Zn("borderBottomColor"), aT = Zn("borderLeftColor"), sT = Zn("outline", Gn), lT = Zn("outlineColor"), Ds = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const n = Ji(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (a) => ({
      borderRadius: Qi(n, a)
    });
    return Fr(e, e.borderRadius, r);
  }
  return null;
};
Ds.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: no
} : {};
Ds.filterProps = ["borderRadius"];
ks(ZE, JE, QE, eT, tT, nT, rT, oT, iT, aT, Ds, sT, lT);
const Ls = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = Ji(e.theme, "spacing", 8, "gap"), r = (a) => ({
      gap: Qi(n, a)
    });
    return Fr(e, e.gap, r);
  }
  return null;
};
Ls.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: no
} : {};
Ls.filterProps = ["gap"];
const Fs = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = Ji(e.theme, "spacing", 8, "columnGap"), r = (a) => ({
      columnGap: Qi(n, a)
    });
    return Fr(e, e.columnGap, r);
  }
  return null;
};
Fs.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: no
} : {};
Fs.filterProps = ["columnGap"];
const Bs = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = Ji(e.theme, "spacing", 8, "rowGap"), r = (a) => ({
      rowGap: Qi(n, a)
    });
    return Fr(e, e.rowGap, r);
  }
  return null;
};
Bs.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: no
} : {};
Bs.filterProps = ["rowGap"];
const uT = Lt({
  prop: "gridColumn"
}), cT = Lt({
  prop: "gridRow"
}), fT = Lt({
  prop: "gridAutoFlow"
}), pT = Lt({
  prop: "gridAutoColumns"
}), dT = Lt({
  prop: "gridAutoRows"
}), hT = Lt({
  prop: "gridTemplateColumns"
}), gT = Lt({
  prop: "gridTemplateRows"
}), mT = Lt({
  prop: "gridTemplateAreas"
}), yT = Lt({
  prop: "gridArea"
});
ks(Ls, Fs, Bs, uT, cT, fT, pT, dT, hT, gT, mT, yT);
function Jo(e, n) {
  return n === "grey" ? n : e;
}
const vT = Lt({
  prop: "color",
  themeKey: "palette",
  transform: Jo
}), bT = Lt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Jo
}), xT = Lt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Jo
});
ks(vT, bT, xT);
function In(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ET = Lt({
  prop: "width",
  transform: In
}), Zu = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const n = (r) => {
      var l, u, c, p, d;
      const a = ((c = (u = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : u.values) == null ? void 0 : c[r]) || As[r];
      return a ? ((d = (p = e.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : d.unit) !== "px" ? {
        maxWidth: `${a}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: In(r)
      };
    };
    return Fr(e, e.maxWidth, n);
  }
  return null;
};
Zu.filterProps = ["maxWidth"];
const TT = Lt({
  prop: "minWidth",
  transform: In
}), wT = Lt({
  prop: "height",
  transform: In
}), ST = Lt({
  prop: "maxHeight",
  transform: In
}), OT = Lt({
  prop: "minHeight",
  transform: In
});
Lt({
  prop: "size",
  cssProperty: "width",
  transform: In
});
Lt({
  prop: "size",
  cssProperty: "height",
  transform: In
});
const CT = Lt({
  prop: "boxSizing"
});
ks(ET, Zu, TT, wT, ST, OT, CT);
const Ws = {
  // borders
  border: {
    themeKey: "borders",
    transform: Gn
  },
  borderTop: {
    themeKey: "borders",
    transform: Gn
  },
  borderRight: {
    themeKey: "borders",
    transform: Gn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Gn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Gn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Gn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ds
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Jo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Jo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Jo
  },
  // spacing
  p: {
    style: At
  },
  pt: {
    style: At
  },
  pr: {
    style: At
  },
  pb: {
    style: At
  },
  pl: {
    style: At
  },
  px: {
    style: At
  },
  py: {
    style: At
  },
  padding: {
    style: At
  },
  paddingTop: {
    style: At
  },
  paddingRight: {
    style: At
  },
  paddingBottom: {
    style: At
  },
  paddingLeft: {
    style: At
  },
  paddingX: {
    style: At
  },
  paddingY: {
    style: At
  },
  paddingInline: {
    style: At
  },
  paddingInlineStart: {
    style: At
  },
  paddingInlineEnd: {
    style: At
  },
  paddingBlock: {
    style: At
  },
  paddingBlockStart: {
    style: At
  },
  paddingBlockEnd: {
    style: At
  },
  m: {
    style: It
  },
  mt: {
    style: It
  },
  mr: {
    style: It
  },
  mb: {
    style: It
  },
  ml: {
    style: It
  },
  mx: {
    style: It
  },
  my: {
    style: It
  },
  margin: {
    style: It
  },
  marginTop: {
    style: It
  },
  marginRight: {
    style: It
  },
  marginBottom: {
    style: It
  },
  marginLeft: {
    style: It
  },
  marginX: {
    style: It
  },
  marginY: {
    style: It
  },
  marginInline: {
    style: It
  },
  marginInlineStart: {
    style: It
  },
  marginInlineEnd: {
    style: It
  },
  marginBlock: {
    style: It
  },
  marginBlockStart: {
    style: It
  },
  marginBlockEnd: {
    style: It
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ls
  },
  rowGap: {
    style: Bs
  },
  columnGap: {
    style: Fs
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: In
  },
  maxWidth: {
    style: Zu
  },
  minWidth: {
    transform: In
  },
  height: {
    transform: In
  },
  maxHeight: {
    transform: In
  },
  minHeight: {
    transform: In
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function _T(...e) {
  const n = e.reduce((a, l) => a.concat(Object.keys(l)), []), r = new Set(n);
  return e.every((a) => r.size === Object.keys(a).length);
}
function RT(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function PT() {
  function e(r, a, l, u) {
    const c = {
      [r]: a,
      theme: l
    }, p = u[r];
    if (!p)
      return {
        [r]: a
      };
    const {
      cssProperty: d = r,
      themeKey: h,
      transform: y,
      style: m
    } = p;
    if (a == null)
      return null;
    if (h === "typography" && a === "inherit")
      return {
        [r]: a
      };
    const v = $s(l, h) || {};
    return m ? m(c) : Fr(c, a, (O) => {
      let b = gs(v, y, O);
      return O === b && typeof O == "string" && (b = gs(v, y, `${r}${O === "default" ? "" : Se(O)}`, O)), d === !1 ? b : {
        [d]: b
      };
    });
  }
  function n(r) {
    const {
      sx: a,
      theme: l = {}
    } = r || {};
    if (!a)
      return null;
    const u = l.unstable_sxConfig ?? Ws;
    function c(p) {
      let d = p;
      if (typeof p == "function")
        d = p(l);
      else if (typeof p != "object")
        return p;
      if (!d)
        return null;
      const h = zE(l.breakpoints), y = Object.keys(h);
      let m = h;
      return Object.keys(d).forEach((v) => {
        const w = RT(d[v], l);
        if (w != null)
          if (typeof w == "object")
            if (u[v])
              m = Bi(m, e(v, w, l, u));
            else {
              const O = Fr({
                theme: l
              }, w, (b) => ({
                [v]: b
              }));
              _T(O, w) ? m[v] = n({
                sx: w,
                theme: l
              }) : m = Bi(m, O);
            }
          else
            m = Bi(m, e(v, w, l, u));
      }), LE(l, VE(y, m));
    }
    return Array.isArray(a) ? a.map(c) : c(a);
  }
  return n;
}
const ei = PT();
ei.filterProps = ["sx"];
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ms.apply(null, arguments);
}
function IT(e) {
  if (e.sheet)
    return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e)
      return document.styleSheets[n];
}
function AT(e) {
  var n = document.createElement("style");
  return n.setAttribute("data-emotion", e.key), e.nonce !== void 0 && n.setAttribute("nonce", e.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n;
}
var $T = /* @__PURE__ */ function() {
  function e(r) {
    var a = this;
    this._insertTag = function(l) {
      var u;
      a.tags.length === 0 ? a.insertionPoint ? u = a.insertionPoint.nextSibling : a.prepend ? u = a.container.firstChild : u = a.before : u = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(l, u), a.tags.push(l);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var n = e.prototype;
  return n.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, n.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(AT(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var u = IT(l);
      try {
        u.insertRule(a, u.cssRules.length);
      } catch {
      }
    } else
      l.appendChild(document.createTextNode(a));
    this.ctr++;
  }, n.flush = function() {
    this.tags.forEach(function(a) {
      var l;
      return (l = a.parentNode) == null ? void 0 : l.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), sn = "-ms-", ys = "-moz-", et = "-webkit-", Fh = "comm", Ju = "rule", Qu = "decl", NT = "@import", Bh = "@keyframes", MT = "@layer", kT = Math.abs, Us = String.fromCharCode, DT = Object.assign;
function LT(e, n) {
  return Zt(e, 0) ^ 45 ? (((n << 2 ^ Zt(e, 0)) << 2 ^ Zt(e, 1)) << 2 ^ Zt(e, 2)) << 2 ^ Zt(e, 3) : 0;
}
function Wh(e) {
  return e.trim();
}
function FT(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function tt(e, n, r) {
  return e.replace(n, r);
}
function Au(e, n) {
  return e.indexOf(n);
}
function Zt(e, n) {
  return e.charCodeAt(n) | 0;
}
function Hi(e, n, r) {
  return e.slice(n, r);
}
function hr(e) {
  return e.length;
}
function ec(e) {
  return e.length;
}
function Ja(e, n) {
  return n.push(e), e;
}
function BT(e, n) {
  return e.map(n).join("");
}
var zs = 1, ti = 1, Uh = 0, xn = 0, zt = 0, ai = "";
function Vs(e, n, r, a, l, u, c) {
  return { value: e, root: n, parent: r, type: a, props: l, children: u, line: zs, column: ti, length: c, return: "" };
}
function Ii(e, n) {
  return DT(Vs("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function WT() {
  return zt;
}
function UT() {
  return zt = xn > 0 ? Zt(ai, --xn) : 0, ti--, zt === 10 && (ti = 1, zs--), zt;
}
function An() {
  return zt = xn < Uh ? Zt(ai, xn++) : 0, ti++, zt === 10 && (ti = 1, zs++), zt;
}
function yr() {
  return Zt(ai, xn);
}
function us() {
  return xn;
}
function ea(e, n) {
  return Hi(ai, e, n);
}
function qi(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function zh(e) {
  return zs = ti = 1, Uh = hr(ai = e), xn = 0, [];
}
function Vh(e) {
  return ai = "", e;
}
function cs(e) {
  return Wh(ea(xn - 1, $u(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zT(e) {
  for (; (zt = yr()) && zt < 33; )
    An();
  return qi(e) > 2 || qi(zt) > 3 ? "" : " ";
}
function VT(e, n) {
  for (; --n && An() && !(zt < 48 || zt > 102 || zt > 57 && zt < 65 || zt > 70 && zt < 97); )
    ;
  return ea(e, us() + (n < 6 && yr() == 32 && An() == 32));
}
function $u(e) {
  for (; An(); )
    switch (zt) {
      // ] ) " '
      case e:
        return xn;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && $u(zt);
        break;
      // (
      case 40:
        e === 41 && $u(e);
        break;
      // \
      case 92:
        An();
        break;
    }
  return xn;
}
function jT(e, n) {
  for (; An() && e + zt !== 57; )
    if (e + zt === 84 && yr() === 47)
      break;
  return "/*" + ea(n, xn - 1) + "*" + Us(e === 47 ? e : An());
}
function HT(e) {
  for (; !qi(yr()); )
    An();
  return ea(e, xn);
}
function qT(e) {
  return Vh(fs("", null, null, null, [""], e = zh(e), 0, [0], e));
}
function fs(e, n, r, a, l, u, c, p, d) {
  for (var h = 0, y = 0, m = c, v = 0, w = 0, O = 0, b = 1, R = 1, A = 1, M = 0, _ = "", C = l, T = u, N = a, F = _; R; )
    switch (O = M, M = An()) {
      // (
      case 40:
        if (O != 108 && Zt(F, m - 1) == 58) {
          Au(F += tt(cs(M), "&", "&\f"), "&\f") != -1 && (A = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        F += cs(M);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        F += zT(O);
        break;
      // \
      case 92:
        F += VT(us() - 1, 7);
        continue;
      // /
      case 47:
        switch (yr()) {
          case 42:
          case 47:
            Ja(GT(jT(An(), us()), n, r), d);
            break;
          default:
            F += "/";
        }
        break;
      // {
      case 123 * b:
        p[h++] = hr(F) * A;
      // } ; \0
      case 125 * b:
      case 59:
      case 0:
        switch (M) {
          // \0 }
          case 0:
          case 125:
            R = 0;
          // ;
          case 59 + y:
            A == -1 && (F = tt(F, /\f/g, "")), w > 0 && hr(F) - m && Ja(w > 32 ? Ed(F + ";", a, r, m - 1) : Ed(tt(F, " ", "") + ";", a, r, m - 2), d);
            break;
          // @ ;
          case 59:
            F += ";";
          // { rule/at-rule
          default:
            if (Ja(N = xd(F, n, r, h, y, l, p, _, C = [], T = [], m), u), M === 123)
              if (y === 0)
                fs(F, n, N, N, C, u, m, p, T);
              else
                switch (v === 99 && Zt(F, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fs(e, N, N, a && Ja(xd(e, N, N, 0, 0, l, p, _, l, C = [], m), T), l, T, m, p, a ? C : T);
                    break;
                  default:
                    fs(F, N, N, N, [""], T, 0, p, T);
                }
        }
        h = y = w = 0, b = A = 1, _ = F = "", m = c;
        break;
      // :
      case 58:
        m = 1 + hr(F), w = O;
      default:
        if (b < 1) {
          if (M == 123)
            --b;
          else if (M == 125 && b++ == 0 && UT() == 125)
            continue;
        }
        switch (F += Us(M), M * b) {
          // &
          case 38:
            A = y > 0 ? 1 : (F += "\f", -1);
            break;
          // ,
          case 44:
            p[h++] = (hr(F) - 1) * A, A = 1;
            break;
          // @
          case 64:
            yr() === 45 && (F += cs(An())), v = yr(), y = m = hr(_ = F += HT(us())), M++;
            break;
          // -
          case 45:
            O === 45 && hr(F) == 2 && (b = 0);
        }
    }
  return u;
}
function xd(e, n, r, a, l, u, c, p, d, h, y) {
  for (var m = l - 1, v = l === 0 ? u : [""], w = ec(v), O = 0, b = 0, R = 0; O < a; ++O)
    for (var A = 0, M = Hi(e, m + 1, m = kT(b = c[O])), _ = e; A < w; ++A)
      (_ = Wh(b > 0 ? v[A] + " " + M : tt(M, /&\f/g, v[A]))) && (d[R++] = _);
  return Vs(e, n, r, l === 0 ? Ju : p, d, h, y);
}
function GT(e, n, r) {
  return Vs(e, n, r, Fh, Us(WT()), Hi(e, 2, -2), 0);
}
function Ed(e, n, r, a) {
  return Vs(e, n, r, Qu, Hi(e, 0, a), Hi(e, a + 1, -1), a);
}
function Qo(e, n) {
  for (var r = "", a = ec(e), l = 0; l < a; l++)
    r += n(e[l], l, e, n) || "";
  return r;
}
function KT(e, n, r, a) {
  switch (e.type) {
    case MT:
      if (e.children.length) break;
    case NT:
    case Qu:
      return e.return = e.return || e.value;
    case Fh:
      return "";
    case Bh:
      return e.return = e.value + "{" + Qo(e.children, a) + "}";
    case Ju:
      e.value = e.props.join(",");
  }
  return hr(r = Qo(e.children, a)) ? e.return = e.value + "{" + r + "}" : "";
}
function YT(e) {
  var n = ec(e);
  return function(r, a, l, u) {
    for (var c = "", p = 0; p < n; p++)
      c += e[p](r, a, l, u) || "";
    return c;
  };
}
function XT(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function jh(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return n[r] === void 0 && (n[r] = e(r)), n[r];
  };
}
var ZT = function(n, r, a) {
  for (var l = 0, u = 0; l = u, u = yr(), l === 38 && u === 12 && (r[a] = 1), !qi(u); )
    An();
  return ea(n, xn);
}, JT = function(n, r) {
  var a = -1, l = 44;
  do
    switch (qi(l)) {
      case 0:
        l === 38 && yr() === 12 && (r[a] = 1), n[a] += ZT(xn - 1, r, a);
        break;
      case 2:
        n[a] += cs(l);
        break;
      case 4:
        if (l === 44) {
          n[++a] = yr() === 58 ? "&\f" : "", r[a] = n[a].length;
          break;
        }
      // fallthrough
      default:
        n[a] += Us(l);
    }
  while (l = An());
  return n;
}, QT = function(n, r) {
  return Vh(JT(zh(n), r));
}, Td = /* @__PURE__ */ new WeakMap(), ew = function(n) {
  if (!(n.type !== "rule" || !n.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  n.length < 1)) {
    for (var r = n.value, a = n.parent, l = n.column === a.column && n.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(n.props.length === 1 && r.charCodeAt(0) !== 58 && !Td.get(a)) && !l) {
      Td.set(n, !0);
      for (var u = [], c = QT(r, u), p = a.props, d = 0, h = 0; d < c.length; d++)
        for (var y = 0; y < p.length; y++, h++)
          n.props[h] = u[d] ? c[d].replace(/&\f/g, p[y]) : p[y] + " " + c[d];
    }
  }
}, tw = function(n) {
  if (n.type === "decl") {
    var r = n.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (n.return = "", n.value = "");
  }
};
function Hh(e, n) {
  switch (LT(e, n)) {
    // color-adjust
    case 5103:
      return et + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return et + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return et + e + ys + e + sn + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return et + e + sn + e + e;
    // order
    case 6165:
      return et + e + sn + "flex-" + e + e;
    // align-items
    case 5187:
      return et + e + tt(e, /(\w+).+(:[^]+)/, et + "box-$1$2" + sn + "flex-$1$2") + e;
    // align-self
    case 5443:
      return et + e + sn + "flex-item-" + tt(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return et + e + sn + "flex-line-pack" + tt(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return et + e + sn + tt(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return et + e + sn + tt(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return et + "box-" + tt(e, "-grow", "") + et + e + sn + tt(e, "grow", "positive") + e;
    // transition
    case 4554:
      return et + tt(e, /([^-])(transform)/g, "$1" + et + "$2") + e;
    // cursor
    case 6187:
      return tt(tt(tt(e, /(zoom-|grab)/, et + "$1"), /(image-set)/, et + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return tt(e, /(image-set\([^]*)/, et + "$1$`$1");
    // justify-content
    case 4968:
      return tt(tt(e, /(.+:)(flex-)?(.*)/, et + "box-pack:$3" + sn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + et + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return tt(e, /(.+)-inline(.+)/, et + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (hr(e) - 1 - n > 6) switch (Zt(e, n + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Zt(e, n + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return tt(e, /(.+:)(.+)-([^]+)/, "$1" + et + "$2-$3$1" + ys + (Zt(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Au(e, "stretch") ? Hh(tt(e, "stretch", "fill-available"), n) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Zt(e, n + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Zt(e, hr(e) - 3 - (~Au(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return tt(e, ":", ":" + et) + e;
        // (inline-)?fl(e)x
        case 101:
          return tt(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + et + (Zt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + et + "$2$3$1" + sn + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Zt(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return et + e + sn + tt(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return et + e + sn + tt(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return et + e + sn + tt(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return et + e + sn + e + e;
  }
  return e;
}
var nw = function(n, r, a, l) {
  if (n.length > -1 && !n.return) switch (n.type) {
    case Qu:
      n.return = Hh(n.value, n.length);
      break;
    case Bh:
      return Qo([Ii(n, {
        value: tt(n.value, "@", "@" + et)
      })], l);
    case Ju:
      if (n.length) return BT(n.props, function(u) {
        switch (FT(u, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Qo([Ii(n, {
              props: [tt(u, /:(read-\w+)/, ":" + ys + "$1")]
            })], l);
          // :placeholder
          case "::placeholder":
            return Qo([Ii(n, {
              props: [tt(u, /:(plac\w+)/, ":" + et + "input-$1")]
            }), Ii(n, {
              props: [tt(u, /:(plac\w+)/, ":" + ys + "$1")]
            }), Ii(n, {
              props: [tt(u, /:(plac\w+)/, sn + "input-$1")]
            })], l);
        }
        return "";
      });
  }
}, rw = [nw], ow = function(n) {
  var r = n.key;
  if (r === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(b) {
      var R = b.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var l = n.stylisPlugins || rw, u = {}, c, p = [];
  c = n.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(b) {
      for (var R = b.getAttribute("data-emotion").split(" "), A = 1; A < R.length; A++)
        u[R[A]] = !0;
      p.push(b);
    }
  );
  var d, h = [ew, tw];
  {
    var y, m = [KT, XT(function(b) {
      y.insert(b);
    })], v = YT(h.concat(l, m)), w = function(R) {
      return Qo(qT(R), v);
    };
    d = function(R, A, M, _) {
      y = M, w(R ? R + "{" + A.styles + "}" : A.styles), _ && (O.inserted[A.name] = !0);
    };
  }
  var O = {
    key: r,
    sheet: new $T({
      key: r,
      container: c,
      nonce: n.nonce,
      speedy: n.speedy,
      prepend: n.prepend,
      insertionPoint: n.insertionPoint
    }),
    nonce: n.nonce,
    inserted: u,
    registered: {},
    insert: d
  };
  return O.sheet.hydrate(p), O;
}, Qa = { exports: {} }, it = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function iw() {
  if (wd) return it;
  wd = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, l = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function _(T) {
    if (typeof T == "object" && T !== null) {
      var N = T.$$typeof;
      switch (N) {
        case n:
          switch (T = T.type, T) {
            case d:
            case h:
            case a:
            case u:
            case l:
            case m:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case p:
                case y:
                case O:
                case w:
                case c:
                  return T;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function C(T) {
    return _(T) === h;
  }
  return it.AsyncMode = d, it.ConcurrentMode = h, it.ContextConsumer = p, it.ContextProvider = c, it.Element = n, it.ForwardRef = y, it.Fragment = a, it.Lazy = O, it.Memo = w, it.Portal = r, it.Profiler = u, it.StrictMode = l, it.Suspense = m, it.isAsyncMode = function(T) {
    return C(T) || _(T) === d;
  }, it.isConcurrentMode = C, it.isContextConsumer = function(T) {
    return _(T) === p;
  }, it.isContextProvider = function(T) {
    return _(T) === c;
  }, it.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }, it.isForwardRef = function(T) {
    return _(T) === y;
  }, it.isFragment = function(T) {
    return _(T) === a;
  }, it.isLazy = function(T) {
    return _(T) === O;
  }, it.isMemo = function(T) {
    return _(T) === w;
  }, it.isPortal = function(T) {
    return _(T) === r;
  }, it.isProfiler = function(T) {
    return _(T) === u;
  }, it.isStrictMode = function(T) {
    return _(T) === l;
  }, it.isSuspense = function(T) {
    return _(T) === m;
  }, it.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === a || T === h || T === u || T === l || T === m || T === v || typeof T == "object" && T !== null && (T.$$typeof === O || T.$$typeof === w || T.$$typeof === c || T.$$typeof === p || T.$$typeof === y || T.$$typeof === R || T.$$typeof === A || T.$$typeof === M || T.$$typeof === b);
  }, it.typeOf = _, it;
}
var at = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd;
function aw() {
  return Sd || (Sd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, l = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, p = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
    function _(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === a || D === h || D === u || D === l || D === m || D === v || typeof D == "object" && D !== null && (D.$$typeof === O || D.$$typeof === w || D.$$typeof === c || D.$$typeof === p || D.$$typeof === y || D.$$typeof === R || D.$$typeof === A || D.$$typeof === M || D.$$typeof === b);
    }
    function C(D) {
      if (typeof D == "object" && D !== null) {
        var Ae = D.$$typeof;
        switch (Ae) {
          case n:
            var Te = D.type;
            switch (Te) {
              case d:
              case h:
              case a:
              case u:
              case l:
              case m:
                return Te;
              default:
                var _e = Te && Te.$$typeof;
                switch (_e) {
                  case p:
                  case y:
                  case O:
                  case w:
                  case c:
                    return _e;
                  default:
                    return Ae;
                }
            }
          case r:
            return Ae;
        }
      }
    }
    var T = d, N = h, F = p, V = c, Q = n, E = y, B = a, U = O, te = w, re = r, ee = u, q = l, ae = m, pe = !1;
    function K(D) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z(D) || C(D) === d;
    }
    function z(D) {
      return C(D) === h;
    }
    function Z(D) {
      return C(D) === p;
    }
    function be(D) {
      return C(D) === c;
    }
    function fe(D) {
      return typeof D == "object" && D !== null && D.$$typeof === n;
    }
    function se(D) {
      return C(D) === y;
    }
    function ie(D) {
      return C(D) === a;
    }
    function me(D) {
      return C(D) === O;
    }
    function ye(D) {
      return C(D) === w;
    }
    function le(D) {
      return C(D) === r;
    }
    function ce(D) {
      return C(D) === u;
    }
    function ue(D) {
      return C(D) === l;
    }
    function ve(D) {
      return C(D) === m;
    }
    at.AsyncMode = T, at.ConcurrentMode = N, at.ContextConsumer = F, at.ContextProvider = V, at.Element = Q, at.ForwardRef = E, at.Fragment = B, at.Lazy = U, at.Memo = te, at.Portal = re, at.Profiler = ee, at.StrictMode = q, at.Suspense = ae, at.isAsyncMode = K, at.isConcurrentMode = z, at.isContextConsumer = Z, at.isContextProvider = be, at.isElement = fe, at.isForwardRef = se, at.isFragment = ie, at.isLazy = me, at.isMemo = ye, at.isPortal = le, at.isProfiler = ce, at.isStrictMode = ue, at.isSuspense = ve, at.isValidElementType = _, at.typeOf = C;
  }()), at;
}
var Od;
function sw() {
  return Od || (Od = 1, process.env.NODE_ENV === "production" ? Qa.exports = iw() : Qa.exports = aw()), Qa.exports;
}
var Tu, Cd;
function lw() {
  if (Cd) return Tu;
  Cd = 1;
  var e = sw(), n = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, a = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, l = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, u = {};
  u[e.ForwardRef] = a, u[e.Memo] = l;
  function c(O) {
    return e.isMemo(O) ? l : u[O.$$typeof] || n;
  }
  var p = Object.defineProperty, d = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, y = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, v = Object.prototype;
  function w(O, b, R) {
    if (typeof b != "string") {
      if (v) {
        var A = m(b);
        A && A !== v && w(O, A, R);
      }
      var M = d(b);
      h && (M = M.concat(h(b)));
      for (var _ = c(O), C = c(b), T = 0; T < M.length; ++T) {
        var N = M[T];
        if (!r[N] && !(R && R[N]) && !(C && C[N]) && !(_ && _[N])) {
          var F = y(b, N);
          try {
            p(O, N, F);
          } catch {
          }
        }
      }
    }
    return O;
  }
  return Tu = w, Tu;
}
lw();
var uw = !0;
function qh(e, n, r) {
  var a = "";
  return r.split(" ").forEach(function(l) {
    e[l] !== void 0 ? n.push(e[l] + ";") : l && (a += l + " ");
  }), a;
}
var tc = function(n, r, a) {
  var l = n.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  uw === !1) && n.registered[l] === void 0 && (n.registered[l] = r.styles);
}, nc = function(n, r, a) {
  tc(n, r, a);
  var l = n.key + "-" + r.name;
  if (n.inserted[r.name] === void 0) {
    var u = r;
    do
      n.insert(r === u ? "." + l : "", u, n.sheet, !0), u = u.next;
    while (u !== void 0);
  }
};
function cw(e) {
  for (var n = 0, r, a = 0, l = e.length; l >= 4; ++a, l -= 4)
    r = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, n = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      n ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(a) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
var fw = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, pw = /[A-Z]|^ms/g, dw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Gh = function(n) {
  return n.charCodeAt(1) === 45;
}, _d = function(n) {
  return n != null && typeof n != "boolean";
}, wu = /* @__PURE__ */ jh(function(e) {
  return Gh(e) ? e : e.replace(pw, "-$&").toLowerCase();
}), Rd = function(n, r) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(dw, function(a, l, u) {
          return gr = {
            name: l,
            styles: u,
            next: gr
          }, l;
        });
  }
  return fw[n] !== 1 && !Gh(n) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Gi(e, n, r) {
  if (r == null)
    return "";
  var a = r;
  if (a.__emotion_styles !== void 0)
    return a;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var l = r;
      if (l.anim === 1)
        return gr = {
          name: l.name,
          styles: l.styles,
          next: gr
        }, l.name;
      var u = r;
      if (u.styles !== void 0) {
        var c = u.next;
        if (c !== void 0)
          for (; c !== void 0; )
            gr = {
              name: c.name,
              styles: c.styles,
              next: gr
            }, c = c.next;
        var p = u.styles + ";";
        return p;
      }
      return hw(e, n, r);
    }
    case "function": {
      if (e !== void 0) {
        var d = gr, h = r(e);
        return gr = d, Gi(e, n, h);
      }
      break;
    }
  }
  var y = r;
  if (n == null)
    return y;
  var m = n[y];
  return m !== void 0 ? m : y;
}
function hw(e, n, r) {
  var a = "";
  if (Array.isArray(r))
    for (var l = 0; l < r.length; l++)
      a += Gi(e, n, r[l]) + ";";
  else
    for (var u in r) {
      var c = r[u];
      if (typeof c != "object") {
        var p = c;
        n != null && n[p] !== void 0 ? a += u + "{" + n[p] + "}" : _d(p) && (a += wu(u) + ":" + Rd(u, p) + ";");
      } else if (Array.isArray(c) && typeof c[0] == "string" && (n == null || n[c[0]] === void 0))
        for (var d = 0; d < c.length; d++)
          _d(c[d]) && (a += wu(u) + ":" + Rd(u, c[d]) + ";");
      else {
        var h = Gi(e, n, c);
        switch (u) {
          case "animation":
          case "animationName": {
            a += wu(u) + ":" + h + ";";
            break;
          }
          default:
            a += u + "{" + h + "}";
        }
      }
    }
  return a;
}
var Pd = /label:\s*([^\s;{]+)\s*(;|$)/g, gr;
function ta(e, n, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var a = !0, l = "";
  gr = void 0;
  var u = e[0];
  if (u == null || u.raw === void 0)
    a = !1, l += Gi(r, n, u);
  else {
    var c = u;
    l += c[0];
  }
  for (var p = 1; p < e.length; p++)
    if (l += Gi(r, n, e[p]), a) {
      var d = u;
      l += d[p];
    }
  Pd.lastIndex = 0;
  for (var h = "", y; (y = Pd.exec(l)) !== null; )
    h += "-" + y[1];
  var m = cw(l) + h;
  return {
    name: m,
    styles: l,
    next: gr
  };
}
var gw = function(n) {
  return n();
}, Kh = I.useInsertionEffect ? I.useInsertionEffect : !1, Yh = Kh || gw, Id = Kh || I.useLayoutEffect, Xh = /* @__PURE__ */ I.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ow({
    key: "css"
  }) : null
);
Xh.Provider;
var rc = function(n) {
  return /* @__PURE__ */ xE(function(r, a) {
    var l = EE(Xh);
    return n(r, l, a);
  });
}, js = /* @__PURE__ */ I.createContext({}), oc = {}.hasOwnProperty, Nu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", mw = function(n, r) {
  var a = {};
  for (var l in r)
    oc.call(r, l) && (a[l] = r[l]);
  return a[Nu] = n, a;
}, yw = function(n) {
  var r = n.cache, a = n.serialized, l = n.isStringTag;
  return tc(r, a, l), Yh(function() {
    return nc(r, a, l);
  }), null;
}, vw = /* @__PURE__ */ rc(function(e, n, r) {
  var a = e.css;
  typeof a == "string" && n.registered[a] !== void 0 && (a = n.registered[a]);
  var l = e[Nu], u = [a], c = "";
  typeof e.className == "string" ? c = qh(n.registered, u, e.className) : e.className != null && (c = e.className + " ");
  var p = ta(u, void 0, I.useContext(js));
  c += n.key + "-" + p.name;
  var d = {};
  for (var h in e)
    oc.call(e, h) && h !== "css" && h !== Nu && (d[h] = e[h]);
  return d.className = c, r && (d.ref = r), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(yw, {
    cache: n,
    serialized: p,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ I.createElement(l, d));
}), bw = vw, Ad = function(n, r) {
  var a = arguments;
  if (r == null || !oc.call(r, "css"))
    return I.createElement.apply(void 0, a);
  var l = a.length, u = new Array(l);
  u[0] = bw, u[1] = mw(n, r);
  for (var c = 2; c < l; c++)
    u[c] = a[c];
  return I.createElement.apply(null, u);
};
(function(e) {
  var n;
  n || (n = e.JSX || (e.JSX = {}));
})(Ad || (Ad = {}));
var xw = /* @__PURE__ */ rc(function(e, n) {
  var r = e.styles, a = ta([r], void 0, I.useContext(js)), l = I.useRef();
  return Id(function() {
    var u = n.key + "-global", c = new n.sheet.constructor({
      key: u,
      nonce: n.sheet.nonce,
      container: n.sheet.container,
      speedy: n.sheet.isSpeedy
    }), p = !1, d = document.querySelector('style[data-emotion="' + u + " " + a.name + '"]');
    return n.sheet.tags.length && (c.before = n.sheet.tags[0]), d !== null && (p = !0, d.setAttribute("data-emotion", u), c.hydrate([d])), l.current = [c, p], function() {
      c.flush();
    };
  }, [n]), Id(function() {
    var u = l.current, c = u[0], p = u[1];
    if (p) {
      u[1] = !1;
      return;
    }
    if (a.next !== void 0 && nc(n, a.next, !0), c.tags.length) {
      var d = c.tags[c.tags.length - 1].nextElementSibling;
      c.before = d, c.flush();
    }
    n.insert("", a, c, !1);
  }, [n, a.name]), null;
});
function ic() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return ta(n);
}
function na() {
  var e = ic.apply(void 0, arguments), n = "animation-" + e.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Ew = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Tw = /* @__PURE__ */ jh(
  function(e) {
    return Ew.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ww = Tw, Sw = function(n) {
  return n !== "theme";
}, $d = function(n) {
  return typeof n == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  n.charCodeAt(0) > 96 ? ww : Sw;
}, Nd = function(n, r, a) {
  var l;
  if (r) {
    var u = r.shouldForwardProp;
    l = n.__emotion_forwardProp && u ? function(c) {
      return n.__emotion_forwardProp(c) && u(c);
    } : u;
  }
  return typeof l != "function" && a && (l = n.__emotion_forwardProp), l;
}, Ow = function(n) {
  var r = n.cache, a = n.serialized, l = n.isStringTag;
  return tc(r, a, l), Yh(function() {
    return nc(r, a, l);
  }), null;
}, Cw = function e(n, r) {
  var a = n.__emotion_real === n, l = a && n.__emotion_base || n, u, c;
  r !== void 0 && (u = r.label, c = r.target);
  var p = Nd(n, r, a), d = p || $d(l), h = !d("as");
  return function() {
    var y = arguments, m = a && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
    if (u !== void 0 && m.push("label:" + u + ";"), y[0] == null || y[0].raw === void 0)
      m.push.apply(m, y);
    else {
      var v = y[0];
      m.push(v[0]);
      for (var w = y.length, O = 1; O < w; O++)
        m.push(y[O], v[O]);
    }
    var b = rc(function(R, A, M) {
      var _ = h && R.as || l, C = "", T = [], N = R;
      if (R.theme == null) {
        N = {};
        for (var F in R)
          N[F] = R[F];
        N.theme = I.useContext(js);
      }
      typeof R.className == "string" ? C = qh(A.registered, T, R.className) : R.className != null && (C = R.className + " ");
      var V = ta(m.concat(T), A.registered, N);
      C += A.key + "-" + V.name, c !== void 0 && (C += " " + c);
      var Q = h && p === void 0 ? $d(_) : d, E = {};
      for (var B in R)
        h && B === "as" || Q(B) && (E[B] = R[B]);
      return E.className = C, M && (E.ref = M), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement(Ow, {
        cache: A,
        serialized: V,
        isStringTag: typeof _ == "string"
      }), /* @__PURE__ */ I.createElement(_, E));
    });
    return b.displayName = u !== void 0 ? u : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", b.defaultProps = n.defaultProps, b.__emotion_real = b, b.__emotion_base = l, b.__emotion_styles = m, b.__emotion_forwardProp = p, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + c;
      }
    }), b.withComponent = function(R, A) {
      var M = e(R, ms({}, r, A, {
        shouldForwardProp: Nd(b, A, !0)
      }));
      return M.apply(void 0, m);
    }, b;
  };
}, _w = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Mu = Cw.bind(null);
_w.forEach(function(e) {
  Mu[e] = Mu(e);
});
function Rw(e) {
  return e == null || Object.keys(e).length === 0;
}
function Zh(e) {
  const {
    styles: n,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ oe(xw, {
    styles: typeof n == "function" ? (l) => n(Rw(l) ? r : l) : n
  });
}
process.env.NODE_ENV !== "production" && (Zh.propTypes = {
  defaultTheme: i.object,
  styles: i.oneOfType([i.array, i.string, i.object, i.func])
});
/**
 * @mui/styled-engine v6.4.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Pw(e, n) {
  const r = Mu(e, n);
  return process.env.NODE_ENV !== "production" ? (...a) => {
    const l = typeof e == "string" ? `"${e}"` : "component";
    return a.length === 0 ? console.error([`MUI: Seems like you called \`styled(${l})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : a.some((u) => u === void 0) && console.error(`MUI: the styled(${l})(...args) API requires all its args to be defined.`), r(...a);
  } : r;
}
function Iw(e, n) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = n(e.__emotion_styles));
}
const Md = [];
function kd(e) {
  return Md[0] = e, ta(Md);
}
const Aw = (e) => {
  const n = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return n.sort((r, a) => r.val - a.val), n.reduce((r, a) => ({
    ...r,
    [a.key]: a.val
  }), {});
};
function $w(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: n = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: a = 5,
    ...l
  } = e, u = Aw(n), c = Object.keys(u);
  function p(v) {
    return `@media (min-width:${typeof n[v] == "number" ? n[v] : v}${r})`;
  }
  function d(v) {
    return `@media (max-width:${(typeof n[v] == "number" ? n[v] : v) - a / 100}${r})`;
  }
  function h(v, w) {
    const O = c.indexOf(w);
    return `@media (min-width:${typeof n[v] == "number" ? n[v] : v}${r}) and (max-width:${(O !== -1 && typeof n[c[O]] == "number" ? n[c[O]] : w) - a / 100}${r})`;
  }
  function y(v) {
    return c.indexOf(v) + 1 < c.length ? h(v, c[c.indexOf(v) + 1]) : p(v);
  }
  function m(v) {
    const w = c.indexOf(v);
    return w === 0 ? p(c[1]) : w === c.length - 1 ? d(c[w]) : h(v, c[c.indexOf(v) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: c,
    values: u,
    up: p,
    down: d,
    between: h,
    only: y,
    not: m,
    unit: r,
    ...l
  };
}
const Nw = {
  borderRadius: 4
};
function Jh(e = 8, n = Xu({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...a) => (process.env.NODE_ENV !== "production" && (a.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${a.length}`)), (a.length === 0 ? [1] : a).map((u) => {
    const c = n(u);
    return typeof c == "number" ? `${c}px` : c;
  }).join(" "));
  return r.mui = !0, r;
}
function Mw(e, n) {
  var a;
  const r = this;
  if (r.vars) {
    if (!((a = r.colorSchemes) != null && a[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let l = r.getColorSchemeSelector(e);
    return l === "&" ? n : ((l.includes("data-") || l.includes(".")) && (l = `*:where(${l.replace(/\s*&$/, "")}) &`), {
      [l]: n
    });
  }
  return r.palette.mode === e ? n : {};
}
function ac(e = {}, ...n) {
  const {
    breakpoints: r = {},
    palette: a = {},
    spacing: l,
    shape: u = {},
    ...c
  } = e, p = $w(r), d = Jh(l);
  let h = ln({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...a
    },
    spacing: d,
    shape: {
      ...Nw,
      ...u
    }
  }, c);
  return h = WE(h), h.applyStyles = Mw, h = n.reduce((y, m) => ln(y, m), h), h.unstable_sxConfig = {
    ...Ws,
    ...c == null ? void 0 : c.unstable_sxConfig
  }, h.unstable_sx = function(m) {
    return ei({
      sx: m,
      theme: this
    });
  }, h;
}
function kw(e) {
  return Object.keys(e).length === 0;
}
function Dw(e = null) {
  const n = I.useContext(js);
  return !n || kw(n) ? e : n;
}
const Lw = ac();
function Qh(e = Lw) {
  return Dw(e);
}
function eg({
  styles: e,
  themeId: n,
  defaultTheme: r = {}
}) {
  const a = Qh(r), l = typeof e == "function" ? e(n && a[n] || a) : e;
  return /* @__PURE__ */ oe(Zh, {
    styles: l
  });
}
process.env.NODE_ENV !== "production" && (eg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: i.object,
  /**
   * @ignore
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool]),
  /**
   * @ignore
   */
  themeId: i.string
});
const Dd = (e) => e, Fw = () => {
  let e = Dd;
  return {
    configure(n) {
      e = n;
    },
    generate(n) {
      return e(n);
    },
    reset() {
      e = Dd;
    }
  };
}, Bw = Fw(), Ww = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function mt(e, n, r = "Mui") {
  const a = Ww[n];
  return a ? `${r}-${a}` : `${Bw.generate(e)}-${n}`;
}
function xt(e, n, r = "Mui") {
  const a = {};
  return n.forEach((l) => {
    a[l] = mt(e, l, r);
  }), a;
}
function tg(e, n = "") {
  return e.displayName || e.name || n;
}
function Ld(e, n, r) {
  const a = tg(n);
  return e.displayName || (a !== "" ? `${r}(${a})` : r);
}
function Uw(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return tg(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case wo.ForwardRef:
          return Ld(e, e.render, "ForwardRef");
        case wo.Memo:
          return Ld(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ng(e) {
  const {
    variants: n,
    ...r
  } = e, a = {
    variants: n,
    style: kd(r),
    isProcessed: !0
  };
  return a.style === r || n && n.forEach((l) => {
    typeof l.style != "function" && (l.style = kd(l.style));
  }), a;
}
const zw = ac();
function Su(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Vw(e) {
  return e ? (n, r) => r[e] : null;
}
function jw(e, n, r) {
  e.theme = Kw(e.theme) ? r : e.theme[n] || e.theme;
}
function ps(e, n) {
  const r = typeof n == "function" ? n(e) : n;
  if (Array.isArray(r))
    return r.flatMap((a) => ps(e, a));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let a;
    if (r.isProcessed)
      a = r.style;
    else {
      const {
        variants: l,
        ...u
      } = r;
      a = u;
    }
    return rg(e, r.variants, [a]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function rg(e, n, r = []) {
  var l;
  let a;
  e: for (let u = 0; u < n.length; u += 1) {
    const c = n[u];
    if (typeof c.props == "function") {
      if (a ?? (a = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !c.props(a))
        continue;
    } else
      for (const p in c.props)
        if (e[p] !== c.props[p] && ((l = e.ownerState) == null ? void 0 : l[p]) !== c.props[p])
          continue e;
    typeof c.style == "function" ? (a ?? (a = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(c.style(a))) : r.push(c.style);
  }
  return r;
}
function Hw(e = {}) {
  const {
    themeId: n,
    defaultTheme: r = zw,
    rootShouldForwardProp: a = Su,
    slotShouldForwardProp: l = Su
  } = e;
  function u(p) {
    jw(p, n, r);
  }
  return (p, d = {}) => {
    Iw(p, (T) => T.filter((N) => N !== ei));
    const {
      name: h,
      slot: y,
      skipVariantsResolver: m,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: w = Vw(og(y)),
      ...O
    } = d, b = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      y && y !== "Root" && y !== "root" || !1
    ), R = v || !1;
    let A = Su;
    y === "Root" || y === "root" ? A = a : y ? A = l : Yw(p) && (A = void 0);
    const M = Pw(p, {
      shouldForwardProp: A,
      label: Gw(h, y),
      ...O
    }), _ = (T) => {
      if (typeof T == "function" && T.__emotion_real !== T)
        return function(F) {
          return ps(F, T);
        };
      if (Lr(T)) {
        const N = ng(T);
        return N.variants ? function(V) {
          return ps(V, N);
        } : N.style;
      }
      return T;
    }, C = (...T) => {
      const N = [], F = T.map(_), V = [];
      if (N.push(u), h && w && V.push(function(U) {
        var q, ae;
        const re = (ae = (q = U.theme.components) == null ? void 0 : q[h]) == null ? void 0 : ae.styleOverrides;
        if (!re)
          return null;
        const ee = {};
        for (const pe in re)
          ee[pe] = ps(U, re[pe]);
        return w(U, ee);
      }), h && !b && V.push(function(U) {
        var ee, q;
        const te = U.theme, re = (q = (ee = te == null ? void 0 : te.components) == null ? void 0 : ee[h]) == null ? void 0 : q.variants;
        return re ? rg(U, re) : null;
      }), R || V.push(ei), Array.isArray(F[0])) {
        const B = F.shift(), U = new Array(N.length).fill(""), te = new Array(V.length).fill("");
        let re;
        re = [...U, ...B, ...te], re.raw = [...U, ...B.raw, ...te], N.unshift(re);
      }
      const Q = [...N, ...F, ...V], E = M(...Q);
      return p.muiName && (E.muiName = p.muiName), process.env.NODE_ENV !== "production" && (E.displayName = qw(h, y, p)), E;
    };
    return M.withConfig && (C.withConfig = M.withConfig), C;
  };
}
function qw(e, n, r) {
  return e ? `${e}${Se(n || "")}` : `Styled(${Uw(r)})`;
}
function Gw(e, n) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${og(n || "Root")}`), r;
}
function Kw(e) {
  for (const n in e)
    return !1;
  return !0;
}
function Yw(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function og(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function ku(e, n) {
  const r = {
    ...n
  };
  for (const a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      const l = a;
      if (l === "components" || l === "slots")
        r[l] = {
          ...e[l],
          ...r[l]
        };
      else if (l === "componentsProps" || l === "slotProps") {
        const u = e[l], c = n[l];
        if (!c)
          r[l] = u || {};
        else if (!u)
          r[l] = c;
        else {
          r[l] = {
            ...c
          };
          for (const p in u)
            if (Object.prototype.hasOwnProperty.call(u, p)) {
              const d = p;
              r[l][d] = ku(u[d], c[d]);
            }
        }
      } else r[l] === void 0 && (r[l] = e[l]);
    }
  return r;
}
const Br = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function Xw(e, n = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(e, r));
}
function sc(e, n = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < n || e > r) && console.error(`MUI: The value provided ${e} is out of range [${n}, ${r}].`), Xw(e, n, r);
}
function Zw(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(n);
  return r && r[0].length === 1 && (r = r.map((a) => a + a)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((a, l) => l < 3 ? parseInt(a, 16) : Math.round(parseInt(a, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function to(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return to(Zw(e));
  const n = e.indexOf("("), r = e.substring(0, n);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : br(9, e));
  let a = e.substring(n + 1, e.length - 1), l;
  if (r === "color") {
    if (a = a.split(" "), l = a.shift(), a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(l))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${l}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : br(10, l));
  } else
    a = a.split(",");
  return a = a.map((u) => parseFloat(u)), {
    type: r,
    values: a,
    colorSpace: l
  };
}
const Jw = (e) => {
  const n = to(e);
  return n.values.slice(0, 3).map((r, a) => n.type.includes("hsl") && a !== 0 ? `${r}%` : r).join(" ");
}, ki = (e, n) => {
  try {
    return Jw(e);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
};
function Hs(e) {
  const {
    type: n,
    colorSpace: r
  } = e;
  let {
    values: a
  } = e;
  return n.includes("rgb") ? a = a.map((l, u) => u < 3 ? parseInt(l, 10) : l) : n.includes("hsl") && (a[1] = `${a[1]}%`, a[2] = `${a[2]}%`), n.includes("color") ? a = `${r} ${a.join(" ")}` : a = `${a.join(", ")}`, `${n}(${a})`;
}
function ig(e) {
  e = to(e);
  const {
    values: n
  } = e, r = n[0], a = n[1] / 100, l = n[2] / 100, u = a * Math.min(l, 1 - l), c = (h, y = (h + r / 30) % 12) => l - u * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let p = "rgb";
  const d = [Math.round(c(0) * 255), Math.round(c(8) * 255), Math.round(c(4) * 255)];
  return e.type === "hsla" && (p += "a", d.push(n[3])), Hs({
    type: p,
    values: d
  });
}
function Du(e) {
  e = to(e);
  let n = e.type === "hsl" || e.type === "hsla" ? to(ig(e)).values : e.values;
  return n = n.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
function Fd(e, n) {
  const r = Du(e), a = Du(n);
  return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
}
function Kt(e, n) {
  return e = to(e), n = sc(n), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${n}` : e.values[3] = n, Hs(e);
}
function es(e, n, r) {
  try {
    return Kt(e, n);
  } catch {
    return e;
  }
}
function lc(e, n) {
  if (e = to(e), n = sc(n), e.type.includes("hsl"))
    e.values[2] *= 1 - n;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - n;
  return Hs(e);
}
function ht(e, n, r) {
  try {
    return lc(e, n);
  } catch {
    return e;
  }
}
function uc(e, n) {
  if (e = to(e), n = sc(n), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * n;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * n;
  return Hs(e);
}
function gt(e, n, r) {
  try {
    return uc(e, n);
  } catch {
    return e;
  }
}
function Qw(e, n = 0.15) {
  return Du(e) > 0.5 ? lc(e, n) : uc(e, n);
}
function ts(e, n, r) {
  try {
    return Qw(e, n);
  } catch {
    return e;
  }
}
function xr(e, n) {
  return process.env.NODE_ENV === "production" ? () => null : function(...a) {
    return e(...a) || n(...a);
  };
}
function eS(e) {
  const {
    prototype: n = {}
  } = e;
  return !!n.isReactComponent;
}
function ag(e, n, r, a, l) {
  const u = e[n], c = l || n;
  if (u == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let p;
  const d = u.type;
  return typeof d == "function" && !eS(d) && (p = "Did you accidentally use a plain function component for an element instead?"), p !== void 0 ? new Error(`Invalid ${a} \`${c}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${p} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ra = xr(i.element, ag);
ra.isRequired = xr(i.element.isRequired, ag);
function tS(e) {
  const {
    prototype: n = {}
  } = e;
  return !!n.isReactComponent;
}
function nS(e, n, r, a, l) {
  const u = e[n], c = l || n;
  if (u == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let p;
  return typeof u == "function" && !tS(u) && (p = "Did you accidentally provide a plain function component instead?"), p !== void 0 ? new Error(`Invalid ${a} \`${c}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${p} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const cc = xr(i.elementType, nS), rS = "exact-prop: ​";
function sg(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [rS]: (n) => {
      const r = Object.keys(n).filter((a) => !e.hasOwnProperty(a));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((a) => `\`${a}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function Wr(e, n, r, a, l) {
  if (process.env.NODE_ENV === "production")
    return null;
  const u = e[n], c = l || n;
  return u == null ? null : u && u.nodeType !== 1 ? new Error(`Invalid ${a} \`${c}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
function Bd(...e) {
  return e.reduce((n, r) => r == null ? n : function(...l) {
    n.apply(this, l), r.apply(this, l);
  }, () => {
  });
}
function lg(e, n = 166) {
  let r;
  function a(...l) {
    const u = () => {
      e.apply(this, l);
    };
    clearTimeout(r), r = setTimeout(u, n);
  }
  return a.clear = () => {
    clearTimeout(r);
  }, a;
}
function Ou(e, n) {
  var r, a, l;
  return /* @__PURE__ */ I.isValidElement(e) && n.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((l = (a = (r = e.type) == null ? void 0 : r._payload) == null ? void 0 : a.value) == null ? void 0 : l.muiName)
  ) !== -1;
}
function $n(e) {
  return e && e.ownerDocument || document;
}
function Ur(e) {
  return $n(e).defaultView || window;
}
function vs(e, n) {
  typeof e == "function" ? e(n) : e && (e.current = n);
}
function oS(e, n, r, a, l) {
  if (process.env.NODE_ENV === "production")
    return null;
  const u = l || n;
  return typeof e[n] < "u" ? new Error(`The prop \`${u}\` is not supported. Please remove it.`) : null;
}
function Wi({
  controlled: e,
  default: n,
  name: r,
  state: a = "value"
}) {
  const {
    current: l
  } = I.useRef(e !== void 0), [u, c] = I.useState(n), p = l ? e : u;
  if (process.env.NODE_ENV !== "production") {
    I.useEffect(() => {
      l !== (e !== void 0) && console.error([`MUI: A component is changing the ${l ? "" : "un"}controlled ${a} state of ${r} to be ${l ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [a, r, e]);
    const {
      current: h
    } = I.useRef(n);
    I.useEffect(() => {
      !l && !Object.is(h, n) && console.error([`MUI: A component is changing the default ${a} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(n)]);
  }
  const d = I.useCallback((h) => {
    l || c(h);
  }, []);
  return [p, d];
}
function mr(e) {
  const n = I.useRef(e);
  return Br(() => {
    n.current = e;
  }), I.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, n.current)(...r)
  )).current;
}
function Qt(...e) {
  return I.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    e.forEach((r) => {
      vs(r, n);
    });
  }, e);
}
const Wd = {};
function ug(e, n) {
  const r = I.useRef(Wd);
  return r.current === Wd && (r.current = e(n)), r;
}
const iS = [];
function aS(e) {
  I.useEffect(e, iS);
}
class fc {
  constructor() {
    Pi(this, "currentId", null);
    Pi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Pi(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new fc();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(n, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, n);
  }
}
function cg() {
  const e = ug(fc.create).current;
  return aS(e.disposeEffect), e;
}
function Ud(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function fg(e = window) {
  const n = e.document.documentElement.clientWidth;
  return e.innerWidth - n;
}
const sS = (e) => {
  const n = I.useRef({});
  return I.useEffect(() => {
    n.current = e;
  }), n.current;
};
function lS(e) {
  const n = typeof e;
  switch (n) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return n;
  }
}
function pg(e, n, r, a) {
  const l = e[n];
  if (l == null || !Number.isInteger(l)) {
    const u = lS(l);
    return new RangeError(`Invalid ${a} \`${n}\` of type \`${u}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function dg(e, n, ...r) {
  return e[n] === void 0 ? null : pg(e, n, ...r);
}
function Lu() {
  return null;
}
dg.isRequired = pg;
Lu.isRequired = Lu;
const pc = process.env.NODE_ENV === "production" ? Lu : dg;
function uS(e) {
  return typeof e == "string";
}
function hg(e, n, r) {
  return e === void 0 || uS(e) ? n : {
    ...n,
    ownerState: {
      ...n.ownerState,
      ...r
    }
  };
}
function gg(e, n = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((a) => a.match(/^on[A-Z]/) && typeof e[a] == "function" && !n.includes(a)).forEach((a) => {
    r[a] = e[a];
  }), r;
}
function zd(e) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function mg(e) {
  const {
    getSlotProps: n,
    additionalProps: r,
    externalSlotProps: a,
    externalForwardedProps: l,
    className: u
  } = e;
  if (!n) {
    const w = Le(r == null ? void 0 : r.className, u, l == null ? void 0 : l.className, a == null ? void 0 : a.className), O = {
      ...r == null ? void 0 : r.style,
      ...l == null ? void 0 : l.style,
      ...a == null ? void 0 : a.style
    }, b = {
      ...r,
      ...l,
      ...a
    };
    return w.length > 0 && (b.className = w), Object.keys(O).length > 0 && (b.style = O), {
      props: b,
      internalRef: void 0
    };
  }
  const c = gg({
    ...l,
    ...a
  }), p = zd(a), d = zd(l), h = n(c), y = Le(h == null ? void 0 : h.className, r == null ? void 0 : r.className, u, l == null ? void 0 : l.className, a == null ? void 0 : a.className), m = {
    ...h == null ? void 0 : h.style,
    ...r == null ? void 0 : r.style,
    ...l == null ? void 0 : l.style,
    ...a == null ? void 0 : a.style
  }, v = {
    ...h,
    ...r,
    ...d,
    ...p
  };
  return y.length > 0 && (v.className = y), Object.keys(m).length > 0 && (v.style = m), {
    props: v,
    internalRef: h.ref
  };
}
function yg(e, n, r) {
  return typeof e == "function" ? e(n, r) : e;
}
function vg(e) {
  var m;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: l = !1,
    ...u
  } = e, c = l ? {} : yg(r, a), {
    props: p,
    internalRef: d
  } = mg({
    ...u,
    externalSlotProps: c
  }), h = Qt(d, c == null ? void 0 : c.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return hg(n, {
    ...p,
    ref: h
  }, a);
}
function oa(e) {
  var n;
  return parseInt(I.version, 10) >= 19 ? ((n = e == null ? void 0 : e.props) == null ? void 0 : n.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const cS = /* @__PURE__ */ I.createContext();
process.env.NODE_ENV !== "production" && (i.node, i.bool);
const bg = () => I.useContext(cS) ?? !1, fS = /* @__PURE__ */ I.createContext(void 0);
process.env.NODE_ENV !== "production" && (i.node, i.object);
function pS(e) {
  const {
    theme: n,
    name: r,
    props: a
  } = e;
  if (!n || !n.components || !n.components[r])
    return a;
  const l = n.components[r];
  return l.defaultProps ? ku(l.defaultProps, a) : !l.styleOverrides && !l.variants ? ku(l, a) : a;
}
function dS({
  props: e,
  name: n
}) {
  const r = I.useContext(fS);
  return pS({
    props: e,
    name: n,
    theme: {
      components: r
    }
  });
}
const Vd = {
  theme: void 0
};
function hS(e) {
  let n, r;
  return function(l) {
    let u = n;
    return (u === void 0 || l.theme !== r) && (Vd.theme = l.theme, u = ng(e(Vd)), n = u, r = l.theme), u;
  };
}
function gS(e = "") {
  function n(...a) {
    if (!a.length)
      return "";
    const l = a[0];
    return typeof l == "string" && !l.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${l}${n(...a.slice(1))})` : `, ${l}`;
  }
  return (a, ...l) => `var(--${e ? `${e}-` : ""}${a}${n(...l)})`;
}
const jd = (e, n, r, a = []) => {
  let l = e;
  n.forEach((u, c) => {
    c === n.length - 1 ? Array.isArray(l) ? l[Number(u)] = r : l && typeof l == "object" && (l[u] = r) : l && typeof l == "object" && (l[u] || (l[u] = a.includes(u) ? [] : {}), l = l[u]);
  });
}, mS = (e, n, r) => {
  function a(l, u = [], c = []) {
    Object.entries(l).forEach(([p, d]) => {
      (!r || r && !r([...u, p])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? a(d, [...u, p], Array.isArray(d) ? [...c, p] : c) : n([...u, p], d, c));
    });
  }
  a(e);
}, yS = (e, n) => typeof n == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((a) => e.includes(a)) || e[e.length - 1].toLowerCase().includes("opacity") ? n : `${n}px` : n;
function Cu(e, n) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: a
  } = n || {}, l = {}, u = {}, c = {};
  return mS(
    e,
    (p, d, h) => {
      if ((typeof d == "string" || typeof d == "number") && (!a || !a(p, d))) {
        const y = `--${r ? `${r}-` : ""}${p.join("-")}`, m = yS(p, d);
        Object.assign(l, {
          [y]: m
        }), jd(u, p, `var(${y})`, h), jd(c, p, `var(${y}, ${m})`, h);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: l,
    vars: u,
    varsWithDefaults: c
  };
}
function vS(e, n = {}) {
  const {
    getSelector: r = R,
    disableCssColorScheme: a,
    colorSchemeSelector: l
  } = n, {
    colorSchemes: u = {},
    components: c,
    defaultColorScheme: p = "light",
    ...d
  } = e, {
    vars: h,
    css: y,
    varsWithDefaults: m
  } = Cu(d, n);
  let v = m;
  const w = {}, {
    [p]: O,
    ...b
  } = u;
  if (Object.entries(b || {}).forEach(([_, C]) => {
    const {
      vars: T,
      css: N,
      varsWithDefaults: F
    } = Cu(C, n);
    v = ln(v, F), w[_] = {
      css: N,
      vars: T
    };
  }), O) {
    const {
      css: _,
      vars: C,
      varsWithDefaults: T
    } = Cu(O, n);
    v = ln(v, T), w[p] = {
      css: _,
      vars: C
    };
  }
  function R(_, C) {
    var N, F;
    let T = l;
    if (l === "class" && (T = ".%s"), l === "data" && (T = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (T = `[${l}="%s"]`), _) {
      if (T === "media")
        return e.defaultColorScheme === _ ? ":root" : {
          [`@media (prefers-color-scheme: ${((F = (N = u[_]) == null ? void 0 : N.palette) == null ? void 0 : F.mode) || _})`]: {
            ":root": C
          }
        };
      if (T)
        return e.defaultColorScheme === _ ? `:root, ${T.replace("%s", String(_))}` : T.replace("%s", String(_));
    }
    return ":root";
  }
  return {
    vars: v,
    generateThemeVars: () => {
      let _ = {
        ...h
      };
      return Object.entries(w).forEach(([, {
        vars: C
      }]) => {
        _ = ln(_, C);
      }), _;
    },
    generateStyleSheets: () => {
      var V, Q;
      const _ = [], C = e.defaultColorScheme || "light";
      function T(E, B) {
        Object.keys(B).length && _.push(typeof E == "string" ? {
          [E]: {
            ...B
          }
        } : E);
      }
      T(r(void 0, {
        ...y
      }), y);
      const {
        [C]: N,
        ...F
      } = w;
      if (N) {
        const {
          css: E
        } = N, B = (Q = (V = u[C]) == null ? void 0 : V.palette) == null ? void 0 : Q.mode, U = !a && B ? {
          colorScheme: B,
          ...E
        } : {
          ...E
        };
        T(r(C, {
          ...U
        }), U);
      }
      return Object.entries(F).forEach(([E, {
        css: B
      }]) => {
        var re, ee;
        const U = (ee = (re = u[E]) == null ? void 0 : re.palette) == null ? void 0 : ee.mode, te = !a && U ? {
          colorScheme: U,
          ...B
        } : {
          ...B
        };
        T(r(E, {
          ...te
        }), te);
      }), _;
    }
  };
}
function bS(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Ki = {
  black: "#000",
  white: "#fff"
}, xS = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ho = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, qo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ai = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Go = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ko = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Yo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function xg() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Ki.white,
      default: Ki.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const ES = xg();
function Eg() {
  return {
    text: {
      primary: Ki.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Ki.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Hd = Eg();
function qd(e, n, r, a) {
  const l = a.light || a, u = a.dark || a * 1.5;
  e[n] || (e.hasOwnProperty(r) ? e[n] = e[r] : n === "light" ? e.light = uc(e.main, l) : n === "dark" && (e.dark = lc(e.main, u)));
}
function TS(e = "light") {
  return e === "dark" ? {
    main: Go[200],
    light: Go[50],
    dark: Go[400]
  } : {
    main: Go[700],
    light: Go[400],
    dark: Go[800]
  };
}
function wS(e = "light") {
  return e === "dark" ? {
    main: Ho[200],
    light: Ho[50],
    dark: Ho[400]
  } : {
    main: Ho[500],
    light: Ho[300],
    dark: Ho[700]
  };
}
function SS(e = "light") {
  return e === "dark" ? {
    main: qo[500],
    light: qo[300],
    dark: qo[700]
  } : {
    main: qo[700],
    light: qo[400],
    dark: qo[800]
  };
}
function OS(e = "light") {
  return e === "dark" ? {
    main: Ko[400],
    light: Ko[300],
    dark: Ko[700]
  } : {
    main: Ko[700],
    light: Ko[500],
    dark: Ko[900]
  };
}
function CS(e = "light") {
  return e === "dark" ? {
    main: Yo[400],
    light: Yo[300],
    dark: Yo[700]
  } : {
    main: Yo[800],
    light: Yo[500],
    dark: Yo[900]
  };
}
function _S(e = "light") {
  return e === "dark" ? {
    main: Ai[400],
    light: Ai[300],
    dark: Ai[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ai[500],
    dark: Ai[900]
  };
}
function dc(e) {
  const {
    mode: n = "light",
    contrastThreshold: r = 3,
    tonalOffset: a = 0.2,
    ...l
  } = e, u = e.primary || TS(n), c = e.secondary || wS(n), p = e.error || SS(n), d = e.info || OS(n), h = e.success || CS(n), y = e.warning || _S(n);
  function m(b) {
    const R = Fd(b, Hd.text.primary) >= r ? Hd.text.primary : ES.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const A = Fd(b, R);
      A < 3 && console.error([`MUI: The contrast ratio of ${A}:1 for ${R} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return R;
  }
  const v = ({
    color: b,
    name: R,
    mainShade: A = 500,
    lightShade: M = 300,
    darkShade: _ = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[A] && (b.main = b[A]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${A}\` property.` : br(11, R ? ` (${R})` : "", A));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${R ? ` (${R})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : br(12, R ? ` (${R})` : "", JSON.stringify(b.main)));
    return qd(b, "light", M, a), qd(b, "dark", _, a), b.contrastText || (b.contrastText = m(b.main)), b;
  };
  let w;
  return n === "light" ? w = xg() : n === "dark" && (w = Eg()), process.env.NODE_ENV !== "production" && (w || console.error(`MUI: The palette mode \`${n}\` is not supported.`)), ln({
    // A collection of common colors.
    common: {
      ...Ki
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: n,
    // The colors used to represent primary interface elements for a user.
    primary: v({
      color: u,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: v({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: v({
      color: p,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: v({
      color: y,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: v({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: v({
      color: h,
      name: "success"
    }),
    // The grey colors.
    grey: xS,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: v,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: a,
    // The light and dark mode object.
    ...w
  }, l);
}
function RS(e) {
  const n = {};
  return Object.entries(e).forEach((a) => {
    const [l, u] = a;
    typeof u == "object" && (n[l] = `${u.fontStyle ? `${u.fontStyle} ` : ""}${u.fontVariant ? `${u.fontVariant} ` : ""}${u.fontWeight ? `${u.fontWeight} ` : ""}${u.fontStretch ? `${u.fontStretch} ` : ""}${u.fontSize || ""}${u.lineHeight ? `/${u.lineHeight} ` : ""}${u.fontFamily || ""}`);
  }), n;
}
function PS(e, n) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...n
  };
}
function IS(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Gd = {
  textTransform: "uppercase"
}, Kd = '"Roboto", "Helvetica", "Arial", sans-serif';
function AS(e, n) {
  const {
    fontFamily: r = Kd,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: l = 300,
    fontWeightRegular: u = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: y,
    ...m
  } = typeof n == "function" ? n(e) : n;
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = a / 14, w = y || ((R) => `${R / d * v}rem`), O = (R, A, M, _, C) => ({
    fontFamily: r,
    fontWeight: R,
    fontSize: w(A),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: M,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Kd ? {
      letterSpacing: `${IS(_ / A)}em`
    } : {},
    ...C,
    ...h
  }), b = {
    h1: O(l, 96, 1.167, -1.5),
    h2: O(l, 60, 1.2, -0.5),
    h3: O(u, 48, 1.167, 0),
    h4: O(u, 34, 1.235, 0.25),
    h5: O(u, 24, 1.334, 0),
    h6: O(c, 20, 1.6, 0.15),
    subtitle1: O(u, 16, 1.75, 0.15),
    subtitle2: O(c, 14, 1.57, 0.1),
    body1: O(u, 16, 1.5, 0.15),
    body2: O(u, 14, 1.43, 0.15),
    button: O(c, 14, 1.75, 0.4, Gd),
    caption: O(u, 12, 1.66, 0.4),
    overline: O(u, 12, 2.66, 1, Gd),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ln({
    htmlFontSize: d,
    pxToRem: w,
    fontFamily: r,
    fontSize: a,
    fontWeightLight: l,
    fontWeightRegular: u,
    fontWeightMedium: c,
    fontWeightBold: p,
    ...b
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const $S = 0.2, NS = 0.14, MS = 0.12;
function Ct(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${$S})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${NS})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${MS})`].join(",");
}
const kS = ["none", Ct(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ct(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ct(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ct(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ct(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ct(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ct(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ct(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ct(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ct(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ct(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ct(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ct(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ct(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ct(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ct(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ct(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ct(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ct(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ct(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ct(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ct(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ct(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ct(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], DS = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, LS = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Yd(e) {
  return `${Math.round(e)}ms`;
}
function FS(e) {
  if (!e)
    return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function BS(e) {
  const n = {
    ...DS,
    ...e.easing
  }, r = {
    ...LS,
    ...e.duration
  };
  return {
    getAutoHeightDuration: FS,
    create: (l = ["all"], u = {}) => {
      const {
        duration: c = r.standard,
        easing: p = n.easeInOut,
        delay: d = 0,
        ...h
      } = u;
      if (process.env.NODE_ENV !== "production") {
        const y = (v) => typeof v == "string", m = (v) => !Number.isNaN(parseFloat(v));
        !y(l) && !Array.isArray(l) && console.error('MUI: Argument "props" must be a string or Array.'), !m(c) && !y(c) && console.error(`MUI: Argument "duration" must be a number or a string but found ${c}.`), y(p) || console.error('MUI: Argument "easing" must be a string.'), !m(d) && !y(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof u != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(h).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(h).join(",")}].`);
      }
      return (Array.isArray(l) ? l : [l]).map((y) => `${y} ${typeof c == "string" ? c : Yd(c)} ${p} ${typeof d == "string" ? d : Yd(d)}`).join(",");
    },
    ...e,
    easing: n,
    duration: r
  };
}
const WS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function US(e) {
  return Lr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Tg(e = {}) {
  const n = {
    ...e
  };
  function r(a) {
    const l = Object.entries(a);
    for (let u = 0; u < l.length; u++) {
      const [c, p] = l[u];
      !US(p) || c.startsWith("unstable_") ? delete a[c] : Lr(p) && (a[c] = {
        ...p
      }, r(a[c]));
    }
  }
  return r(n), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Fu(e = {}, ...n) {
  const {
    breakpoints: r,
    mixins: a = {},
    spacing: l,
    palette: u = {},
    transitions: c = {},
    typography: p = {},
    shape: d,
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : br(20));
  const y = dc(u), m = ac(e);
  let v = ln(m, {
    mixins: PS(m.breakpoints, a),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: kS.slice(),
    typography: AS(y, p),
    transitions: BS(c),
    zIndex: {
      ...WS
    }
  });
  if (v = ln(v, h), v = n.reduce((w, O) => ln(w, O), v), process.env.NODE_ENV !== "production") {
    const w = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], O = (b, R) => {
      let A;
      for (A in b) {
        const M = b[A];
        if (w.includes(A) && Object.keys(M).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const _ = mt("", A);
            console.error([`MUI: The \`${R}\` component increases the CSS specificity of the \`${A}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${_}' syntax:`, JSON.stringify({
              root: {
                [`&.${_}`]: M
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[A] = {};
        }
      }
    };
    Object.keys(v.components).forEach((b) => {
      const R = v.components[b].styleOverrides;
      R && b.startsWith("Mui") && O(R, b);
    });
  }
  return v.unstable_sxConfig = {
    ...Ws,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, v.unstable_sx = function(O) {
    return ei({
      sx: O,
      theme: this
    });
  }, v.toRuntimeSource = Tg, v;
}
function Bu(e) {
  let n;
  return e < 1 ? n = 5.11916 * e ** 2 : n = 4.5 * Math.log(e + 1) + 2, Math.round(n * 10) / 1e3;
}
const zS = [...Array(25)].map((e, n) => {
  if (n === 0)
    return "none";
  const r = Bu(n);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function wg(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Sg(e) {
  return e === "dark" ? zS : [];
}
function VS(e) {
  const {
    palette: n = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: a,
    ...l
  } = e, u = dc(n);
  return {
    palette: u,
    opacity: {
      ...wg(u.mode),
      ...r
    },
    overlays: a || Sg(u.mode),
    ...l
  };
}
function jS(e) {
  var n;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((n = e[1]) != null && n.match(/(mode|contrastThreshold|tonalOffset)/));
}
const HS = (e) => [...[...Array(25)].map((n, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], qS = (e) => (n, r) => {
  const a = e.rootSelector || ":root", l = e.colorSchemeSelector;
  let u = l;
  if (l === "class" && (u = ".%s"), l === "data" && (u = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (u = `[${l}="%s"]`), e.defaultColorScheme === n) {
    if (n === "dark") {
      const c = {};
      return HS(e.cssVarPrefix).forEach((p) => {
        c[p] = r[p], delete r[p];
      }), u === "media" ? {
        [a]: r,
        "@media (prefers-color-scheme: dark)": {
          [a]: c
        }
      } : u ? {
        [u.replace("%s", n)]: c,
        [`${a}, ${u.replace("%s", n)}`]: r
      } : {
        [a]: {
          ...r,
          ...c
        }
      };
    }
    if (u && u !== "media")
      return `${a}, ${u.replace("%s", String(n))}`;
  } else if (n) {
    if (u === "media")
      return {
        [`@media (prefers-color-scheme: ${String(n)})`]: {
          [a]: r
        }
      };
    if (u)
      return u.replace("%s", String(n));
  }
  return a;
};
function GS(e, n) {
  n.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function H(e, n, r) {
  !e[n] && r && (e[n] = r);
}
function Di(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ig(e);
}
function kr(e, n) {
  `${n}Channel` in e || (e[`${n}Channel`] = ki(Di(e[n]), `MUI: Can't create \`palette.${n}Channel\` because \`palette.${n}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${n}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function KS(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const dr = (e) => {
  try {
    return e();
  } catch {
  }
}, YS = (e = "mui") => gS(e);
function _u(e, n, r, a) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const l = a === "dark" ? "dark" : "light";
  if (!r) {
    e[a] = VS({
      ...n,
      palette: {
        mode: l,
        ...n == null ? void 0 : n.palette
      }
    });
    return;
  }
  const {
    palette: u,
    ...c
  } = Fu({
    ...r,
    palette: {
      mode: l,
      ...n == null ? void 0 : n.palette
    }
  });
  return e[a] = {
    ...n,
    palette: u,
    opacity: {
      ...wg(l),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || Sg(l)
  }, c;
}
function XS(e = {}, ...n) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: a,
    disableCssColorScheme: l = !1,
    cssVarPrefix: u = "mui",
    shouldSkipGeneratingVar: c = jS,
    colorSchemeSelector: p = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...h
  } = e, y = Object.keys(r)[0], m = a || (r.light && y !== "light" ? "light" : y), v = YS(u), {
    [m]: w,
    light: O,
    dark: b,
    ...R
  } = r, A = {
    ...R
  };
  let M = w;
  if ((m === "dark" && !("dark" in r) || m === "light" && !("light" in r)) && (M = !0), !M)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : br(21, m));
  const _ = _u(A, M, h, m);
  O && !A.light && _u(A, O, void 0, "light"), b && !A.dark && _u(A, b, void 0, "dark");
  let C = {
    defaultColorScheme: m,
    ..._,
    cssVarPrefix: u,
    colorSchemeSelector: p,
    rootSelector: d,
    getCssVar: v,
    colorSchemes: A,
    font: {
      ...RS(_.typography),
      ..._.font
    },
    spacing: KS(h.spacing)
  };
  Object.keys(C.colorSchemes).forEach((Q) => {
    const E = C.colorSchemes[Q].palette, B = (U) => {
      const te = U.split("-"), re = te[1], ee = te[2];
      return v(U, E[re][ee]);
    };
    if (E.mode === "light" && (H(E.common, "background", "#fff"), H(E.common, "onBackground", "#000")), E.mode === "dark" && (H(E.common, "background", "#000"), H(E.common, "onBackground", "#fff")), GS(E, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), E.mode === "light") {
      H(E.Alert, "errorColor", ht(E.error.light, 0.6)), H(E.Alert, "infoColor", ht(E.info.light, 0.6)), H(E.Alert, "successColor", ht(E.success.light, 0.6)), H(E.Alert, "warningColor", ht(E.warning.light, 0.6)), H(E.Alert, "errorFilledBg", B("palette-error-main")), H(E.Alert, "infoFilledBg", B("palette-info-main")), H(E.Alert, "successFilledBg", B("palette-success-main")), H(E.Alert, "warningFilledBg", B("palette-warning-main")), H(E.Alert, "errorFilledColor", dr(() => E.getContrastText(E.error.main))), H(E.Alert, "infoFilledColor", dr(() => E.getContrastText(E.info.main))), H(E.Alert, "successFilledColor", dr(() => E.getContrastText(E.success.main))), H(E.Alert, "warningFilledColor", dr(() => E.getContrastText(E.warning.main))), H(E.Alert, "errorStandardBg", gt(E.error.light, 0.9)), H(E.Alert, "infoStandardBg", gt(E.info.light, 0.9)), H(E.Alert, "successStandardBg", gt(E.success.light, 0.9)), H(E.Alert, "warningStandardBg", gt(E.warning.light, 0.9)), H(E.Alert, "errorIconColor", B("palette-error-main")), H(E.Alert, "infoIconColor", B("palette-info-main")), H(E.Alert, "successIconColor", B("palette-success-main")), H(E.Alert, "warningIconColor", B("palette-warning-main")), H(E.AppBar, "defaultBg", B("palette-grey-100")), H(E.Avatar, "defaultBg", B("palette-grey-400")), H(E.Button, "inheritContainedBg", B("palette-grey-300")), H(E.Button, "inheritContainedHoverBg", B("palette-grey-A100")), H(E.Chip, "defaultBorder", B("palette-grey-400")), H(E.Chip, "defaultAvatarColor", B("palette-grey-700")), H(E.Chip, "defaultIconColor", B("palette-grey-700")), H(E.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), H(E.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), H(E.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), H(E.LinearProgress, "primaryBg", gt(E.primary.main, 0.62)), H(E.LinearProgress, "secondaryBg", gt(E.secondary.main, 0.62)), H(E.LinearProgress, "errorBg", gt(E.error.main, 0.62)), H(E.LinearProgress, "infoBg", gt(E.info.main, 0.62)), H(E.LinearProgress, "successBg", gt(E.success.main, 0.62)), H(E.LinearProgress, "warningBg", gt(E.warning.main, 0.62)), H(E.Skeleton, "bg", `rgba(${B("palette-text-primaryChannel")} / 0.11)`), H(E.Slider, "primaryTrack", gt(E.primary.main, 0.62)), H(E.Slider, "secondaryTrack", gt(E.secondary.main, 0.62)), H(E.Slider, "errorTrack", gt(E.error.main, 0.62)), H(E.Slider, "infoTrack", gt(E.info.main, 0.62)), H(E.Slider, "successTrack", gt(E.success.main, 0.62)), H(E.Slider, "warningTrack", gt(E.warning.main, 0.62));
      const U = ts(E.background.default, 0.8);
      H(E.SnackbarContent, "bg", U), H(E.SnackbarContent, "color", dr(() => E.getContrastText(U))), H(E.SpeedDialAction, "fabHoverBg", ts(E.background.paper, 0.15)), H(E.StepConnector, "border", B("palette-grey-400")), H(E.StepContent, "border", B("palette-grey-400")), H(E.Switch, "defaultColor", B("palette-common-white")), H(E.Switch, "defaultDisabledColor", B("palette-grey-100")), H(E.Switch, "primaryDisabledColor", gt(E.primary.main, 0.62)), H(E.Switch, "secondaryDisabledColor", gt(E.secondary.main, 0.62)), H(E.Switch, "errorDisabledColor", gt(E.error.main, 0.62)), H(E.Switch, "infoDisabledColor", gt(E.info.main, 0.62)), H(E.Switch, "successDisabledColor", gt(E.success.main, 0.62)), H(E.Switch, "warningDisabledColor", gt(E.warning.main, 0.62)), H(E.TableCell, "border", gt(es(E.divider, 1), 0.88)), H(E.Tooltip, "bg", es(E.grey[700], 0.92));
    }
    if (E.mode === "dark") {
      H(E.Alert, "errorColor", gt(E.error.light, 0.6)), H(E.Alert, "infoColor", gt(E.info.light, 0.6)), H(E.Alert, "successColor", gt(E.success.light, 0.6)), H(E.Alert, "warningColor", gt(E.warning.light, 0.6)), H(E.Alert, "errorFilledBg", B("palette-error-dark")), H(E.Alert, "infoFilledBg", B("palette-info-dark")), H(E.Alert, "successFilledBg", B("palette-success-dark")), H(E.Alert, "warningFilledBg", B("palette-warning-dark")), H(E.Alert, "errorFilledColor", dr(() => E.getContrastText(E.error.dark))), H(E.Alert, "infoFilledColor", dr(() => E.getContrastText(E.info.dark))), H(E.Alert, "successFilledColor", dr(() => E.getContrastText(E.success.dark))), H(E.Alert, "warningFilledColor", dr(() => E.getContrastText(E.warning.dark))), H(E.Alert, "errorStandardBg", ht(E.error.light, 0.9)), H(E.Alert, "infoStandardBg", ht(E.info.light, 0.9)), H(E.Alert, "successStandardBg", ht(E.success.light, 0.9)), H(E.Alert, "warningStandardBg", ht(E.warning.light, 0.9)), H(E.Alert, "errorIconColor", B("palette-error-main")), H(E.Alert, "infoIconColor", B("palette-info-main")), H(E.Alert, "successIconColor", B("palette-success-main")), H(E.Alert, "warningIconColor", B("palette-warning-main")), H(E.AppBar, "defaultBg", B("palette-grey-900")), H(E.AppBar, "darkBg", B("palette-background-paper")), H(E.AppBar, "darkColor", B("palette-text-primary")), H(E.Avatar, "defaultBg", B("palette-grey-600")), H(E.Button, "inheritContainedBg", B("palette-grey-800")), H(E.Button, "inheritContainedHoverBg", B("palette-grey-700")), H(E.Chip, "defaultBorder", B("palette-grey-700")), H(E.Chip, "defaultAvatarColor", B("palette-grey-300")), H(E.Chip, "defaultIconColor", B("palette-grey-300")), H(E.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), H(E.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), H(E.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), H(E.LinearProgress, "primaryBg", ht(E.primary.main, 0.5)), H(E.LinearProgress, "secondaryBg", ht(E.secondary.main, 0.5)), H(E.LinearProgress, "errorBg", ht(E.error.main, 0.5)), H(E.LinearProgress, "infoBg", ht(E.info.main, 0.5)), H(E.LinearProgress, "successBg", ht(E.success.main, 0.5)), H(E.LinearProgress, "warningBg", ht(E.warning.main, 0.5)), H(E.Skeleton, "bg", `rgba(${B("palette-text-primaryChannel")} / 0.13)`), H(E.Slider, "primaryTrack", ht(E.primary.main, 0.5)), H(E.Slider, "secondaryTrack", ht(E.secondary.main, 0.5)), H(E.Slider, "errorTrack", ht(E.error.main, 0.5)), H(E.Slider, "infoTrack", ht(E.info.main, 0.5)), H(E.Slider, "successTrack", ht(E.success.main, 0.5)), H(E.Slider, "warningTrack", ht(E.warning.main, 0.5));
      const U = ts(E.background.default, 0.98);
      H(E.SnackbarContent, "bg", U), H(E.SnackbarContent, "color", dr(() => E.getContrastText(U))), H(E.SpeedDialAction, "fabHoverBg", ts(E.background.paper, 0.15)), H(E.StepConnector, "border", B("palette-grey-600")), H(E.StepContent, "border", B("palette-grey-600")), H(E.Switch, "defaultColor", B("palette-grey-300")), H(E.Switch, "defaultDisabledColor", B("palette-grey-600")), H(E.Switch, "primaryDisabledColor", ht(E.primary.main, 0.55)), H(E.Switch, "secondaryDisabledColor", ht(E.secondary.main, 0.55)), H(E.Switch, "errorDisabledColor", ht(E.error.main, 0.55)), H(E.Switch, "infoDisabledColor", ht(E.info.main, 0.55)), H(E.Switch, "successDisabledColor", ht(E.success.main, 0.55)), H(E.Switch, "warningDisabledColor", ht(E.warning.main, 0.55)), H(E.TableCell, "border", ht(es(E.divider, 1), 0.68)), H(E.Tooltip, "bg", es(E.grey[700], 0.92));
    }
    kr(E.background, "default"), kr(E.background, "paper"), kr(E.common, "background"), kr(E.common, "onBackground"), kr(E, "divider"), Object.keys(E).forEach((U) => {
      const te = E[U];
      U !== "tonalOffset" && te && typeof te == "object" && (te.main && H(E[U], "mainChannel", ki(Di(te.main))), te.light && H(E[U], "lightChannel", ki(Di(te.light))), te.dark && H(E[U], "darkChannel", ki(Di(te.dark))), te.contrastText && H(E[U], "contrastTextChannel", ki(Di(te.contrastText))), U === "text" && (kr(E[U], "primary"), kr(E[U], "secondary")), U === "action" && (te.active && kr(E[U], "active"), te.selected && kr(E[U], "selected")));
    });
  }), C = n.reduce((Q, E) => ln(Q, E), C);
  const T = {
    prefix: u,
    disableCssColorScheme: l,
    shouldSkipGeneratingVar: c,
    getSelector: qS(C)
  }, {
    vars: N,
    generateThemeVars: F,
    generateStyleSheets: V
  } = vS(C, T);
  return C.vars = N, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([Q, E]) => {
    C[Q] = E;
  }), C.generateThemeVars = F, C.generateStyleSheets = V, C.generateSpacing = function() {
    return Jh(h.spacing, Xu(this));
  }, C.getColorSchemeSelector = bS(p), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = c, C.unstable_sxConfig = {
    ...Ws,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, C.unstable_sx = function(E) {
    return ei({
      sx: E,
      theme: this
    });
  }, C.toRuntimeSource = Tg, C;
}
function Xd(e, n, r) {
  e.colorSchemes && r && (e.colorSchemes[n] = {
    ...r !== !0 && r,
    palette: dc({
      ...r === !0 ? {} : r.palette,
      mode: n
    })
    // cast type to skip module augmentation test
  });
}
function ZS(e = {}, ...n) {
  const {
    palette: r,
    cssVariables: a = !1,
    colorSchemes: l = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: u = r == null ? void 0 : r.mode,
    ...c
  } = e, p = u || "light", d = l == null ? void 0 : l[p], h = {
    ...l,
    ...r ? {
      [p]: {
        ...typeof d != "boolean" && d,
        palette: r
      }
    } : void 0
  };
  if (a === !1) {
    if (!("colorSchemes" in e))
      return Fu(e, ...n);
    let y = r;
    "palette" in e || h[p] && (h[p] !== !0 ? y = h[p].palette : p === "dark" && (y = {
      mode: "dark"
    }));
    const m = Fu({
      ...e,
      palette: y
    }, ...n);
    return m.defaultColorScheme = p, m.colorSchemes = h, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: m.palette
    }, Xd(m, "dark", h.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: m.palette
    }, Xd(m, "light", h.light)), m;
  }
  return !r && !("light" in h) && p === "light" && (h.light = !0), XS({
    ...c,
    colorSchemes: h,
    defaultColorScheme: p,
    ...typeof a != "boolean" && a
  }, ...n);
}
const hc = ZS(), gc = "$$material";
function mc() {
  const e = Qh(hc);
  return process.env.NODE_ENV !== "production" && I.useDebugValue(e), e[gc] || e;
}
function Og(e) {
  return /* @__PURE__ */ oe(eg, {
    ...e,
    defaultTheme: hc,
    themeId: gc
  });
}
process.env.NODE_ENV !== "production" && (Og.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: i.oneOfType([i.array, i.func, i.number, i.object, i.string, i.bool])
});
function Cg(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Tr = (e) => Cg(e) && e !== "classes", Oe = Hw({
  themeId: gc,
  defaultTheme: hc,
  rootShouldForwardProp: Tr
});
function JS(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ oe(Og, {
        styles: typeof e == "function" ? (a) => e({
          theme: a,
          ...r
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (i.node, i.object.isRequired);
function St(e) {
  return dS(e);
}
function ns(e) {
  return parseInt(e, 10) || 0;
}
const QS = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function eO(e) {
  for (const n in e)
    return !1;
  return !0;
}
function tO(e) {
  return eO(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const _g = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const {
    onChange: a,
    maxRows: l,
    minRows: u = 1,
    style: c,
    value: p,
    ...d
  } = n, {
    current: h
  } = I.useRef(p != null), y = I.useRef(null), m = Qt(r, y), v = I.useRef(null), w = I.useRef(null), O = I.useCallback(() => {
    const M = y.current, _ = w.current;
    if (!M || !_)
      return;
    const T = Ur(M).getComputedStyle(M);
    if (T.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    _.style.width = T.width, _.value = M.value || n.placeholder || "x", _.value.slice(-1) === `
` && (_.value += " ");
    const N = T.boxSizing, F = ns(T.paddingBottom) + ns(T.paddingTop), V = ns(T.borderBottomWidth) + ns(T.borderTopWidth), Q = _.scrollHeight;
    _.value = "x";
    const E = _.scrollHeight;
    let B = Q;
    u && (B = Math.max(Number(u) * E, B)), l && (B = Math.min(Number(l) * E, B)), B = Math.max(B, E);
    const U = B + (N === "border-box" ? F + V : 0), te = Math.abs(B - Q) <= 1;
    return {
      outerHeightStyle: U,
      overflowing: te
    };
  }, [l, u, n.placeholder]), b = I.useCallback(() => {
    const M = y.current, _ = O();
    if (!M || !_ || tO(_))
      return;
    const C = _.outerHeightStyle;
    v.current !== C && (v.current = C, M.style.height = `${C}px`), M.style.overflow = _.overflowing ? "hidden" : "";
  }, [O]), R = I.useRef(-1);
  Br(() => {
    const M = lg(() => b()), _ = y == null ? void 0 : y.current;
    if (!_)
      return;
    const C = Ur(_);
    C.addEventListener("resize", M);
    let T;
    return typeof ResizeObserver < "u" && (T = new ResizeObserver(() => {
      T.unobserve(_), cancelAnimationFrame(R.current), b(), R.current = requestAnimationFrame(() => {
        T.observe(_);
      });
    }), T.observe(_)), () => {
      M.clear(), cancelAnimationFrame(R.current), C.removeEventListener("resize", M), T && T.disconnect();
    };
  }, [O, b]), Br(() => {
    b();
  });
  const A = (M) => {
    h || b(), a && a(M);
  };
  return /* @__PURE__ */ Dt(I.Fragment, {
    children: [/* @__PURE__ */ oe("textarea", {
      value: p,
      onChange: A,
      ref: m,
      rows: u,
      style: c,
      ...d
    }), /* @__PURE__ */ oe("textarea", {
      "aria-hidden": !0,
      className: n.className,
      readOnly: !0,
      ref: w,
      tabIndex: -1,
      style: {
        ...QS.shadow,
        ...c,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" && (_g.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: i.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  onChange: i.func,
  /**
   * @ignore
   */
  placeholder: i.string,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * @ignore
   */
  value: i.oneOfType([i.arrayOf(i.string), i.number, i.string])
});
function Wu(e) {
  return typeof e == "string";
}
function si({
  props: e,
  states: n,
  muiFormControl: r
}) {
  return n.reduce((a, l) => (a[l] = e[l], r && typeof e[l] > "u" && (a[l] = r[l]), a), {});
}
const qs = /* @__PURE__ */ I.createContext(void 0);
process.env.NODE_ENV !== "production" && (qs.displayName = "FormControlContext");
function li() {
  return I.useContext(qs);
}
const ft = hS;
function Zd(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function bs(e, n = !1) {
  return e && (Zd(e.value) && e.value !== "" || n && Zd(e.defaultValue) && e.defaultValue !== "");
}
function nO(e) {
  return e.startAdornment;
}
function rO(e) {
  return mt("MuiInputBase", e);
}
const Rn = xt("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var Jd;
const Gs = (e, n) => {
  const {
    ownerState: r
  } = e;
  return [n.root, r.formControl && n.formControl, r.startAdornment && n.adornedStart, r.endAdornment && n.adornedEnd, r.error && n.error, r.size === "small" && n.sizeSmall, r.multiline && n.multiline, r.color && n[`color${Se(r.color)}`], r.fullWidth && n.fullWidth, r.hiddenLabel && n.hiddenLabel];
}, Ks = (e, n) => {
  const {
    ownerState: r
  } = e;
  return [n.input, r.size === "small" && n.inputSizeSmall, r.multiline && n.inputMultiline, r.type === "search" && n.inputTypeSearch, r.startAdornment && n.inputAdornedStart, r.endAdornment && n.inputAdornedEnd, r.hiddenLabel && n.inputHiddenLabel];
}, oO = (e) => {
  const {
    classes: n,
    color: r,
    disabled: a,
    error: l,
    endAdornment: u,
    focused: c,
    formControl: p,
    fullWidth: d,
    hiddenLabel: h,
    multiline: y,
    readOnly: m,
    size: v,
    startAdornment: w,
    type: O
  } = e, b = {
    root: ["root", `color${Se(r)}`, a && "disabled", l && "error", d && "fullWidth", c && "focused", p && "formControl", v && v !== "medium" && `size${Se(v)}`, y && "multiline", w && "adornedStart", u && "adornedEnd", h && "hiddenLabel", m && "readOnly"],
    input: ["input", a && "disabled", O === "search" && "inputTypeSearch", y && "inputMultiline", v === "small" && "inputSizeSmall", h && "inputHiddenLabel", w && "inputAdornedStart", u && "inputAdornedEnd", m && "readOnly"]
  };
  return bt(b, rO, n);
}, Ys = Oe("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Gs
})(ft(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${Rn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: n
    }) => n.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: n,
      size: r
    }) => n.multiline && r === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: n
    }) => n.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), Xs = Oe("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Ks
})(ft(({
  theme: e
}) => {
  const n = e.palette.mode === "light", r = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: n ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, a = {
    opacity: "0 !important"
  }, l = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${Rn.formControl} &`]: {
      "&::-webkit-input-placeholder": a,
      "&::-moz-placeholder": a,
      // Firefox 19+
      "&::-ms-input-placeholder": a,
      // Edge
      "&:focus::-webkit-input-placeholder": l,
      "&:focus::-moz-placeholder": l,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": l
      // Edge
    },
    [`&.${Rn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: u
      }) => !u.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: u
      }) => u.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), Qd = JS({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), Zs = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiInputBase"
  }), {
    "aria-describedby": l,
    autoComplete: u,
    autoFocus: c,
    className: p,
    color: d,
    components: h = {},
    componentsProps: y = {},
    defaultValue: m,
    disabled: v,
    disableInjectingGlobalStyles: w,
    endAdornment: O,
    error: b,
    fullWidth: R = !1,
    id: A,
    inputComponent: M = "input",
    inputProps: _ = {},
    inputRef: C,
    margin: T,
    maxRows: N,
    minRows: F,
    multiline: V = !1,
    name: Q,
    onBlur: E,
    onChange: B,
    onClick: U,
    onFocus: te,
    onKeyDown: re,
    onKeyUp: ee,
    placeholder: q,
    readOnly: ae,
    renderSuffix: pe,
    rows: K,
    size: z,
    slotProps: Z = {},
    slots: be = {},
    startAdornment: fe,
    type: se = "text",
    value: ie,
    ...me
  } = a, ye = _.value != null ? _.value : ie, {
    current: le
  } = I.useRef(ye != null), ce = I.useRef(), ue = I.useCallback((Me) => {
    process.env.NODE_ENV !== "production" && Me && Me.nodeName !== "INPUT" && !Me.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ve = Qt(ce, C, _.ref, ue), [D, Ae] = I.useState(!1), Te = li();
  process.env.NODE_ENV !== "production" && I.useEffect(() => {
    if (Te)
      return Te.registerEffect();
  }, [Te]);
  const _e = si({
    props: a,
    muiFormControl: Te,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  _e.focused = Te ? Te.focused : D, I.useEffect(() => {
    !Te && v && D && (Ae(!1), E && E());
  }, [Te, v, D, E]);
  const Et = Te && Te.onFilled, ge = Te && Te.onEmpty, pt = I.useCallback((Me) => {
    bs(Me) ? Et && Et() : ge && ge();
  }, [Et, ge]);
  Br(() => {
    le && pt({
      value: ye
    });
  }, [ye, pt, le]);
  const $e = (Me) => {
    te && te(Me), _.onFocus && _.onFocus(Me), Te && Te.onFocus ? Te.onFocus(Me) : Ae(!0);
  }, Ge = (Me) => {
    E && E(Me), _.onBlur && _.onBlur(Me), Te && Te.onBlur ? Te.onBlur(Me) : Ae(!1);
  }, Ne = (Me, ...cn) => {
    if (!le) {
      const Ht = Me.target || ce.current;
      if (Ht == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : br(1));
      pt({
        value: Ht.value
      });
    }
    _.onChange && _.onChange(Me, ...cn), B && B(Me, ...cn);
  };
  I.useEffect(() => {
    pt(ce.current);
  }, []);
  const we = (Me) => {
    ce.current && Me.currentTarget === Me.target && ce.current.focus(), U && U(Me);
  };
  let $t = M, st = _;
  V && $t === "input" && (K ? (process.env.NODE_ENV !== "production" && (F || N) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), st = {
    type: void 0,
    minRows: K,
    maxRows: K,
    ...st
  }) : st = {
    type: void 0,
    maxRows: N,
    minRows: F,
    ...st
  }, $t = _g);
  const Nt = (Me) => {
    pt(Me.animationName === "mui-auto-fill-cancel" ? ce.current : {
      value: "x"
    });
  };
  I.useEffect(() => {
    Te && Te.setAdornedStart(!!fe);
  }, [Te, fe]);
  const un = {
    ...a,
    color: _e.color || "primary",
    disabled: _e.disabled,
    endAdornment: O,
    error: _e.error,
    focused: _e.focused,
    formControl: Te,
    fullWidth: R,
    hiddenLabel: _e.hiddenLabel,
    multiline: V,
    size: _e.size,
    startAdornment: fe,
    type: se
  }, Ft = oO(un), Bt = be.root || h.Root || Ys, yt = Z.root || y.root || {}, Je = be.input || h.Input || Xs;
  return st = {
    ...st,
    ...Z.input ?? y.input
  }, /* @__PURE__ */ Dt(I.Fragment, {
    children: [!w && typeof Qd == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Jd || (Jd = /* @__PURE__ */ oe(Qd, {}))), /* @__PURE__ */ Dt(Bt, {
      ...yt,
      ref: r,
      onClick: we,
      ...me,
      ...!Wu(Bt) && {
        ownerState: {
          ...un,
          ...yt.ownerState
        }
      },
      className: Le(Ft.root, yt.className, p, ae && "MuiInputBase-readOnly"),
      children: [fe, /* @__PURE__ */ oe(qs.Provider, {
        value: null,
        children: /* @__PURE__ */ oe(Je, {
          "aria-invalid": _e.error,
          "aria-describedby": l,
          autoComplete: u,
          autoFocus: c,
          defaultValue: m,
          disabled: _e.disabled,
          id: A,
          onAnimationStart: Nt,
          name: Q,
          placeholder: q,
          readOnly: ae,
          required: _e.required,
          rows: K,
          value: ye,
          onKeyDown: re,
          onKeyUp: ee,
          type: se,
          ...st,
          ...!Wu(Je) && {
            as: $t,
            ownerState: {
              ...un,
              ...st.ownerState
            }
          },
          ref: ve,
          className: Le(Ft.input, st.className, ae && "MuiInputBase-readOnly"),
          onBlur: Ge,
          onChange: Ne,
          onFocus: $e
        })
      }), O, pe ? pe({
        ..._e,
        startAdornment: fe
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: cc,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ar,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * @ignore
   */
  renderSuffix: i.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The size of the component.
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
function iO(e) {
  return typeof e.main == "string";
}
function aO(e, n = []) {
  if (!iO(e))
    return !1;
  for (const r of n)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function ir(e = []) {
  return ([, n]) => n && aO(n, e);
}
function sO(e) {
  return mt("MuiInput", e);
}
const eo = {
  ...Rn,
  ...xt("MuiInput", ["root", "underline", "input"])
}, lO = (e) => {
  const {
    classes: n,
    disableUnderline: r
  } = e, l = bt({
    root: ["root", !r && "underline"],
    input: ["input"]
  }, sO, n);
  return {
    ...n,
    // forward classes to the InputBase
    ...l
  };
}, uO = Oe(Ys, {
  shouldForwardProp: (e) => Tr(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [...Gs(e, n), !r.disableUnderline && n.underline];
  }
})(ft(({
  theme: e
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: a
      }) => a.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: a
      }) => !a.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${eo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${eo.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${r}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${eo.disabled}, .${eo.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${r}`
          }
        },
        [`&.${eo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(ir()).map(([a]) => ({
      props: {
        color: a,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[a].main}`
        }
      }
    }))]
  };
})), cO = Oe(Xs, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Ks
})({}), Js = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiInput"
  }), {
    disableUnderline: l = !1,
    components: u = {},
    componentsProps: c,
    fullWidth: p = !1,
    inputComponent: d = "input",
    multiline: h = !1,
    slotProps: y,
    slots: m = {},
    type: v = "text",
    ...w
  } = a, O = lO(a), R = {
    root: {
      ownerState: {
        disableUnderline: l
      }
    }
  }, A = y ?? c ? ln(y ?? c, R) : R, M = m.root ?? u.Root ?? uO, _ = m.input ?? u.Input ?? cO;
  return /* @__PURE__ */ oe(Zs, {
    slots: {
      root: M,
      input: _
    },
    slotProps: A,
    fullWidth: p,
    inputComponent: d,
    multiline: h,
    ref: r,
    type: v,
    ...w,
    classes: O
  });
});
process.env.NODE_ENV !== "production" && (Js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ar,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
Js.muiName = "Input";
function fO(e) {
  return mt("MuiFilledInput", e);
}
const Pn = {
  ...Rn,
  ...xt("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function pO(e) {
  return mt("MuiSvgIcon", e);
}
xt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const dO = (e) => {
  const {
    color: n,
    fontSize: r,
    classes: a
  } = e, l = {
    root: ["root", n !== "inherit" && `color${Se(n)}`, `fontSize${Se(r)}`]
  };
  return bt(l, pO, a);
}, hO = Oe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, r.color !== "inherit" && n[`color${Se(r.color)}`], n[`fontSize${Se(r.fontSize)}`]];
  }
})(ft(({
  theme: e
}) => {
  var n, r, a, l, u, c, p, d, h, y, m, v, w, O;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (l = (n = e.transitions) == null ? void 0 : n.create) == null ? void 0 : l.call(n, "fill", {
      duration: (a = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : a.shorter
    }),
    variants: [
      {
        props: (b) => !b.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : c.call(u, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((d = (p = e.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : d.call(p, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((y = (h = e.typography) == null ? void 0 : h.pxToRem) == null ? void 0 : y.call(h, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, b]) => b && b.main).map(([b]) => {
        var R, A;
        return {
          props: {
            color: b
          },
          style: {
            color: (A = (R = (e.vars ?? e).palette) == null ? void 0 : R[b]) == null ? void 0 : A.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (v = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : v.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (O = (w = (e.vars ?? e).palette) == null ? void 0 : w.action) == null ? void 0 : O.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), xs = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiSvgIcon"
  }), {
    children: l,
    className: u,
    color: c = "inherit",
    component: p = "svg",
    fontSize: d = "medium",
    htmlColor: h,
    inheritViewBox: y = !1,
    titleAccess: m,
    viewBox: v = "0 0 24 24",
    ...w
  } = a, O = /* @__PURE__ */ I.isValidElement(l) && l.type === "svg", b = {
    ...a,
    color: c,
    component: p,
    fontSize: d,
    instanceFontSize: n.fontSize,
    inheritViewBox: y,
    viewBox: v,
    hasSvgAsChild: O
  }, R = {};
  y || (R.viewBox = v);
  const A = dO(b);
  return /* @__PURE__ */ Dt(hO, {
    as: p,
    className: Le(A.root, u),
    focusable: "false",
    color: h,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...R,
    ...w,
    ...O && l.props,
    ownerState: b,
    children: [O ? l.props.children : l, m ? /* @__PURE__ */ oe("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (xs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: i.oneOfType([i.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: i.oneOfType([i.oneOf(["inherit", "large", "medium", "small"]), i.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: i.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: i.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: i.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: i.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: i.string
});
xs.muiName = "SvgIcon";
function Qs(e, n) {
  function r(a, l) {
    return /* @__PURE__ */ oe(xs, {
      "data-testid": `${n}Icon`,
      ref: l,
      ...a,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${n}Icon`), r.muiName = xs.muiName, /* @__PURE__ */ I.memo(/* @__PURE__ */ I.forwardRef(r));
}
function gO(e, n) {
  if (!e)
    return n;
  if (typeof e == "function" || typeof n == "function")
    return (l) => {
      const u = typeof n == "function" ? n(l) : n, c = typeof e == "function" ? e({
        ...l,
        ...u
      }) : e, p = Le(l == null ? void 0 : l.className, u == null ? void 0 : u.className, c == null ? void 0 : c.className);
      return {
        ...u,
        ...c,
        ...!!p && {
          className: p
        },
        ...(u == null ? void 0 : u.style) && (c == null ? void 0 : c.style) && {
          style: {
            ...u.style,
            ...c.style
          }
        },
        ...(u == null ? void 0 : u.sx) && (c == null ? void 0 : c.sx) && {
          sx: [...Array.isArray(u.sx) ? u.sx : [u.sx], ...Array.isArray(c.sx) ? c.sx : [c.sx]]
        }
      };
    };
  const r = n, a = Le(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
  return {
    ...n,
    ...e,
    ...!!a && {
      className: a
    },
    ...(r == null ? void 0 : r.style) && (e == null ? void 0 : e.style) && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...(r == null ? void 0 : r.sx) && (e == null ? void 0 : e.sx) && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
const mO = (e) => {
  const {
    classes: n,
    disableUnderline: r,
    startAdornment: a,
    endAdornment: l,
    size: u,
    hiddenLabel: c,
    multiline: p
  } = e, d = {
    root: ["root", !r && "underline", a && "adornedStart", l && "adornedEnd", u === "small" && `size${Se(u)}`, c && "hiddenLabel", p && "multiline"],
    input: ["input"]
  }, h = bt(d, fO, n);
  return {
    ...n,
    // forward classes to the InputBase
    ...h
  };
}, yO = Oe(Ys, {
  shouldForwardProp: (e) => Tr(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [...Gs(e, n), !r.disableUnderline && n.underline];
  }
})(ft(({
  theme: e
}) => {
  const n = e.palette.mode === "light", r = n ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", a = n ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", l = n ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", u = n ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : l,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
      }
    },
    [`&.${Pn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : a
    },
    [`&.${Pn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : u
    },
    variants: [{
      props: ({
        ownerState: c
      }) => !c.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Pn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Pn.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : r}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Pn.disabled}, .${Pn.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Pn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(ir()).map(([c]) => {
      var p;
      return {
        props: {
          disableUnderline: !1,
          color: c
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(p = (e.vars || e).palette[c]) == null ? void 0 : p.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: c
      }) => c.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: c
      }) => c.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: c
      }) => c.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: c,
        size: p
      }) => c.multiline && p === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: c
      }) => c.multiline && c.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: c
      }) => c.multiline && c.hiddenLabel && c.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), vO = Oe(Xs, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Ks
})(ft(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: n
    }) => n.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: n
    }) => n.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: n
    }) => n.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: n
    }) => n.hiddenLabel && n.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: n
    }) => n.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), el = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiFilledInput"
  }), {
    disableUnderline: l = !1,
    components: u = {},
    componentsProps: c,
    fullWidth: p = !1,
    hiddenLabel: d,
    // declare here to prevent spreading to DOM
    inputComponent: h = "input",
    multiline: y = !1,
    slotProps: m,
    slots: v = {},
    type: w = "text",
    ...O
  } = a, b = {
    ...a,
    disableUnderline: l,
    fullWidth: p,
    inputComponent: h,
    multiline: y,
    type: w
  }, R = mO(a), A = {
    root: {
      ownerState: b
    },
    input: {
      ownerState: b
    }
  }, M = m ?? c ? ln(A, m ?? c) : A, _ = v.root ?? u.Root ?? yO, C = v.input ?? u.Input ?? vO;
  return /* @__PURE__ */ oe(Zs, {
    slots: {
      root: _,
      input: C
    },
    slotProps: M,
    fullWidth: p,
    inputComponent: h,
    multiline: y,
    ref: r,
    type: w,
    ...O,
    classes: R
  });
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ar,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: i.shape({
    input: i.object,
    root: i.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
el.muiName = "Input";
var eh;
const bO = Oe("fieldset", {
  shouldForwardProp: Tr
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), xO = Oe("legend", {
  shouldForwardProp: Tr
})(ft(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: n
    }) => !n.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: n
    }) => n.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: n
    }) => n.withLabel && n.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function Rg(e) {
  const {
    children: n,
    classes: r,
    className: a,
    label: l,
    notched: u,
    ...c
  } = e, p = l != null && l !== "", d = {
    ...e,
    notched: u,
    withLabel: p
  };
  return /* @__PURE__ */ oe(bO, {
    "aria-hidden": !0,
    className: a,
    ownerState: d,
    ...c,
    children: /* @__PURE__ */ oe(xO, {
      ownerState: d,
      children: p ? /* @__PURE__ */ oe("span", {
        children: l
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        eh || (eh = /* @__PURE__ */ oe("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" && (Rg.propTypes = {
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The label.
   */
  label: i.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool.isRequired,
  /**
   * @ignore
   */
  style: i.object
});
function EO(e) {
  return mt("MuiOutlinedInput", e);
}
const Hn = {
  ...Rn,
  ...xt("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, TO = (e) => {
  const {
    classes: n
  } = e, a = bt({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, EO, n);
  return {
    ...n,
    // forward classes to the InputBase
    ...a
  };
}, wO = Oe(Ys, {
  shouldForwardProp: (e) => Tr(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Gs
})(ft(({
  theme: e
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Hn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Hn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${Hn.focused} .${Hn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(ir()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        [`&.${Hn.focused} .${Hn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[r].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${Hn.error} .${Hn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Hn.disabled} .${Hn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => r.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: r
      }) => r.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: r
      }) => r.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: r,
        size: a
      }) => r.multiline && a === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), SO = Oe(Rg, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, n) => n.notchedOutline
})(ft(({
  theme: e
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
  };
})), OO = Oe(Xs, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Ks
})(ft(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: n
    }) => n.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: n
    }) => n.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: n
    }) => n.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), tl = /* @__PURE__ */ I.forwardRef(function(n, r) {
  var a;
  const l = St({
    props: n,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: c = !1,
    inputComponent: p = "input",
    label: d,
    multiline: h = !1,
    notched: y,
    slots: m = {},
    type: v = "text",
    ...w
  } = l, O = TO(l), b = li(), R = si({
    props: l,
    muiFormControl: b,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), A = {
    ...l,
    color: R.color || "primary",
    disabled: R.disabled,
    error: R.error,
    focused: R.focused,
    formControl: b,
    fullWidth: c,
    hiddenLabel: R.hiddenLabel,
    multiline: h,
    size: R.size,
    type: v
  }, M = m.root ?? u.Root ?? wO, _ = m.input ?? u.Input ?? OO;
  return /* @__PURE__ */ oe(Zs, {
    slots: {
      root: M,
      input: _
    },
    renderSuffix: (C) => /* @__PURE__ */ oe(SO, {
      ownerState: A,
      className: O.notchedOutline,
      label: d != null && d !== "" && R.required ? a || (a = /* @__PURE__ */ Dt(I.Fragment, {
        children: [d, " ", "*"]
      })) : d,
      notched: typeof y < "u" ? y : !!(C.startAdornment || C.filled || C.focused)
    }),
    fullWidth: c,
    inputComponent: p,
    multiline: h,
    ref: r,
    type: v,
    ...w,
    classes: {
      ...O,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary"]), i.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Input: i.elementType,
    Root: i.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: i.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: i.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: i.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The id of the `input` element.
   */
  id: i.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: i.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ar,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: i.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: i.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: i.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: i.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: i.shape({
    input: i.elementType,
    root: i.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any
});
tl.muiName = "Input";
function CO(e) {
  return mt("MuiFormLabel", e);
}
const Ui = xt("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), _O = (e) => {
  const {
    classes: n,
    color: r,
    focused: a,
    disabled: l,
    error: u,
    filled: c,
    required: p
  } = e, d = {
    root: ["root", `color${Se(r)}`, l && "disabled", u && "error", c && "filled", a && "focused", p && "required"],
    asterisk: ["asterisk", u && "error"]
  };
  return bt(d, CO, n);
}, RO = Oe("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, r.color === "secondary" && n.colorSecondary, r.filled && n.filled];
  }
})(ft(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(ir()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      [`&.${Ui.focused}`]: {
        color: (e.vars || e).palette[n].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ui.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Ui.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), PO = Oe("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, n) => n.asterisk
})(ft(({
  theme: e
}) => ({
  [`&.${Ui.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), Pg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiFormLabel"
  }), {
    children: l,
    className: u,
    color: c,
    component: p = "label",
    disabled: d,
    error: h,
    filled: y,
    focused: m,
    required: v,
    ...w
  } = a, O = li(), b = si({
    props: a,
    muiFormControl: O,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), R = {
    ...a,
    color: b.color || "primary",
    component: p,
    disabled: b.disabled,
    error: b.error,
    filled: b.filled,
    focused: b.focused,
    required: b.required
  }, A = _O(R);
  return /* @__PURE__ */ Dt(RO, {
    as: p,
    ownerState: R,
    className: Le(A.root, u),
    ref: r,
    ...w,
    children: [l, b.required && /* @__PURE__ */ Dt(PO, {
      ownerState: R,
      "aria-hidden": !0,
      className: A.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" && (Pg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: i.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function IO(e) {
  return mt("MuiInputLabel", e);
}
xt("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const AO = (e) => {
  const {
    classes: n,
    formControl: r,
    size: a,
    shrink: l,
    disableAnimation: u,
    variant: c,
    required: p
  } = e, d = {
    root: ["root", r && "formControl", !u && "animated", l && "shrink", a && a !== "normal" && `size${Se(a)}`, c],
    asterisk: [p && "asterisk"]
  }, h = bt(d, IO, n);
  return {
    ...n,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...h
  };
}, $O = Oe(Pg, {
  shouldForwardProp: (e) => Tr(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Ui.asterisk}`]: n.asterisk
    }, n.root, r.formControl && n.formControl, r.size === "small" && n.sizeSmall, r.shrink && n.shrink, !r.disableAnimation && n.animated, r.focused && n.focused, n[r.variant]];
  }
})(ft(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: n
    }) => n.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: n
    }) => n.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: n
    }) => !n.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: n,
      ownerState: r
    }) => n === "filled" && r.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: n,
      ownerState: r,
      size: a
    }) => n === "filled" && r.shrink && a === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: n,
      ownerState: r
    }) => n === "outlined" && r.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), Ig = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    name: "MuiInputLabel",
    props: n
  }), {
    disableAnimation: l = !1,
    margin: u,
    shrink: c,
    variant: p,
    className: d,
    ...h
  } = a, y = li();
  let m = c;
  typeof m > "u" && y && (m = y.filled || y.focused || y.adornedStart);
  const v = si({
    props: a,
    muiFormControl: y,
    states: ["size", "variant", "required", "focused"]
  }), w = {
    ...a,
    disableAnimation: l,
    formControl: y,
    shrink: m,
    size: v.size,
    variant: v.variant,
    required: v.required,
    focused: v.focused
  }, O = AO(w);
  return /* @__PURE__ */ oe($O, {
    "data-shrink": m,
    ref: r,
    className: Le(O.root, d),
    ...h,
    ownerState: w,
    classes: O
  });
});
process.env.NODE_ENV !== "production" && (Ig.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: i.oneOfType([i.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), i.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: i.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: i.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: i.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: i.oneOfType([i.oneOf(["normal", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function NO(e) {
  return mt("MuiFormControl", e);
}
xt("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const MO = (e) => {
  const {
    classes: n,
    margin: r,
    fullWidth: a
  } = e, l = {
    root: ["root", r !== "none" && `margin${Se(r)}`, a && "fullWidth"]
  };
  return bt(l, NO, n);
}, kO = Oe("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, n[`margin${Se(r.margin)}`], r.fullWidth && n.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), Ag = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiFormControl"
  }), {
    children: l,
    className: u,
    color: c = "primary",
    component: p = "div",
    disabled: d = !1,
    error: h = !1,
    focused: y,
    fullWidth: m = !1,
    hiddenLabel: v = !1,
    margin: w = "none",
    required: O = !1,
    size: b = "medium",
    variant: R = "outlined",
    ...A
  } = a, M = {
    ...a,
    color: c,
    component: p,
    disabled: d,
    error: h,
    fullWidth: m,
    hiddenLabel: v,
    margin: w,
    required: O,
    size: b,
    variant: R
  }, _ = MO(M), [C, T] = I.useState(() => {
    let q = !1;
    return l && I.Children.forEach(l, (ae) => {
      if (!Ou(ae, ["Input", "Select"]))
        return;
      const pe = Ou(ae, ["Select"]) ? ae.props.input : ae;
      pe && nO(pe.props) && (q = !0);
    }), q;
  }), [N, F] = I.useState(() => {
    let q = !1;
    return l && I.Children.forEach(l, (ae) => {
      Ou(ae, ["Input", "Select"]) && (bs(ae.props, !0) || bs(ae.props.inputProps, !0)) && (q = !0);
    }), q;
  }), [V, Q] = I.useState(!1);
  d && V && Q(!1);
  const E = y !== void 0 && !d ? y : V;
  let B;
  const U = I.useRef(!1);
  process.env.NODE_ENV !== "production" && (B = () => (U.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), U.current = !0, () => {
    U.current = !1;
  }));
  const te = I.useCallback(() => {
    F(!0);
  }, []), re = I.useCallback(() => {
    F(!1);
  }, []), ee = I.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: T,
    color: c,
    disabled: d,
    error: h,
    filled: N,
    focused: E,
    fullWidth: m,
    hiddenLabel: v,
    size: b,
    onBlur: () => {
      Q(!1);
    },
    onFocus: () => {
      Q(!0);
    },
    onEmpty: re,
    onFilled: te,
    registerEffect: B,
    required: O,
    variant: R
  }), [C, c, d, h, N, E, m, v, B, re, te, O, b, R]);
  return /* @__PURE__ */ oe(qs.Provider, {
    value: ee,
    children: /* @__PURE__ */ oe(kO, {
      as: p,
      ownerState: M,
      className: Le(_.root, u),
      ref: r,
      ...A,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (Ag.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: i.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: i.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function DO(e) {
  return mt("MuiFormHelperText", e);
}
const th = xt("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var nh;
const LO = (e) => {
  const {
    classes: n,
    contained: r,
    size: a,
    disabled: l,
    error: u,
    filled: c,
    focused: p,
    required: d
  } = e, h = {
    root: ["root", l && "disabled", u && "error", a && `size${Se(a)}`, r && "contained", p && "focused", c && "filled", d && "required"]
  };
  return bt(h, DO, n);
}, FO = Oe("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, r.size && n[`size${Se(r.size)}`], r.contained && n.contained, r.filled && n.filled];
  }
})(ft(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${th.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${th.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: n
    }) => n.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), $g = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiFormHelperText"
  }), {
    children: l,
    className: u,
    component: c = "p",
    disabled: p,
    error: d,
    filled: h,
    focused: y,
    margin: m,
    required: v,
    variant: w,
    ...O
  } = a, b = li(), R = si({
    props: a,
    muiFormControl: b,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), A = {
    ...a,
    component: c,
    contained: R.variant === "filled" || R.variant === "outlined",
    variant: R.variant,
    size: R.size,
    disabled: R.disabled,
    error: R.error,
    filled: R.filled,
    focused: R.focused,
    required: R.required
  };
  delete A.ownerState;
  const M = LO(A);
  return /* @__PURE__ */ oe(FO, {
    as: c,
    className: Le(M.root, u),
    ref: r,
    ...O,
    ownerState: A,
    children: l === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      nh || (nh = /* @__PURE__ */ oe("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : l
  });
});
process.env.NODE_ENV !== "production" && ($g.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: i.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: i.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: i.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: i.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: i.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined", "standard"]), i.string])
});
const Ng = /* @__PURE__ */ I.createContext({});
process.env.NODE_ENV !== "production" && (Ng.displayName = "ListContext");
function BO(e) {
  return mt("MuiList", e);
}
xt("MuiList", ["root", "padding", "dense", "subheader"]);
const WO = (e) => {
  const {
    classes: n,
    disablePadding: r,
    dense: a,
    subheader: l
  } = e;
  return bt({
    root: ["root", !r && "padding", a && "dense", l && "subheader"]
  }, BO, n);
}, UO = Oe("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, !r.disablePadding && n.padding, r.dense && n.dense, r.subheader && n.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), Mg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiList"
  }), {
    children: l,
    className: u,
    component: c = "ul",
    dense: p = !1,
    disablePadding: d = !1,
    subheader: h,
    ...y
  } = a, m = I.useMemo(() => ({
    dense: p
  }), [p]), v = {
    ...a,
    component: c,
    dense: p,
    disablePadding: d
  }, w = WO(v);
  return /* @__PURE__ */ oe(Ng.Provider, {
    value: m,
    children: /* @__PURE__ */ Dt(UO, {
      as: c,
      className: Le(w.root, u),
      ref: r,
      ownerState: v,
      ...y,
      children: [h, l]
    })
  });
});
process.env.NODE_ENV !== "production" && (Mg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: i.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: i.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: i.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function Ru(e, n, r) {
  return e === n ? e.firstChild : n && n.nextElementSibling ? n.nextElementSibling : r ? null : e.firstChild;
}
function rh(e, n, r) {
  return e === n ? r ? e.firstChild : e.lastChild : n && n.previousElementSibling ? n.previousElementSibling : r ? null : e.lastChild;
}
function kg(e, n) {
  if (n === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : n.repeating ? r[0] === n.keys[0] : r.startsWith(n.keys.join(""));
}
function $i(e, n, r, a, l, u) {
  let c = !1, p = l(e, n, n ? r : !1);
  for (; p; ) {
    if (p === e.firstChild) {
      if (c)
        return !1;
      c = !0;
    }
    const d = a ? !1 : p.disabled || p.getAttribute("aria-disabled") === "true";
    if (!p.hasAttribute("tabindex") || !kg(p, u) || d)
      p = l(e, p, r);
    else
      return p.focus(), !0;
  }
  return !1;
}
const Dg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: a,
    autoFocus: l = !1,
    autoFocusItem: u = !1,
    children: c,
    className: p,
    disabledItemsFocusable: d = !1,
    disableListWrap: h = !1,
    onKeyDown: y,
    variant: m = "selectedMenu",
    ...v
  } = n, w = I.useRef(null), O = I.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Br(() => {
    l && w.current.focus();
  }, [l]), I.useImperativeHandle(a, () => ({
    adjustStyleForScrollbar: (_, {
      direction: C
    }) => {
      const T = !w.current.style.width;
      if (_.clientHeight < w.current.clientHeight && T) {
        const N = `${fg(Ur(_))}px`;
        w.current.style[C === "rtl" ? "paddingLeft" : "paddingRight"] = N, w.current.style.width = `calc(100% + ${N})`;
      }
      return w.current;
    }
  }), []);
  const b = (_) => {
    const C = w.current, T = _.key;
    if (_.ctrlKey || _.metaKey || _.altKey) {
      y && y(_);
      return;
    }
    const F = $n(C).activeElement;
    if (T === "ArrowDown")
      _.preventDefault(), $i(C, F, h, d, Ru);
    else if (T === "ArrowUp")
      _.preventDefault(), $i(C, F, h, d, rh);
    else if (T === "Home")
      _.preventDefault(), $i(C, null, h, d, Ru);
    else if (T === "End")
      _.preventDefault(), $i(C, null, h, d, rh);
    else if (T.length === 1) {
      const V = O.current, Q = T.toLowerCase(), E = performance.now();
      V.keys.length > 0 && (E - V.lastTime > 500 ? (V.keys = [], V.repeating = !0, V.previousKeyMatched = !0) : V.repeating && Q !== V.keys[0] && (V.repeating = !1)), V.lastTime = E, V.keys.push(Q);
      const B = F && !V.repeating && kg(F, V);
      V.previousKeyMatched && (B || $i(C, F, !1, d, Ru, V)) ? _.preventDefault() : V.previousKeyMatched = !1;
    }
    y && y(_);
  }, R = Qt(w, r);
  let A = -1;
  I.Children.forEach(c, (_, C) => {
    if (!/* @__PURE__ */ I.isValidElement(_)) {
      A === C && (A += 1, A >= c.length && (A = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && wo.isFragment(_) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), _.props.disabled || (m === "selectedMenu" && _.props.selected || A === -1) && (A = C), A === C && (_.props.disabled || _.props.muiSkipListHighlight || _.type.muiSkipListHighlight) && (A += 1, A >= c.length && (A = -1));
  });
  const M = I.Children.map(c, (_, C) => {
    if (C === A) {
      const T = {};
      return u && (T.autoFocus = !0), _.props.tabIndex === void 0 && m === "selectedMenu" && (T.tabIndex = 0), /* @__PURE__ */ I.cloneElement(_, T);
    }
    return _;
  });
  return /* @__PURE__ */ oe(Mg, {
    role: "menu",
    ref: R,
    className: p,
    onKeyDown: b,
    tabIndex: l ? 0 : -1,
    ...v,
    children: M
  });
});
process.env.NODE_ENV !== "production" && (Dg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: i.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function Lg(e, n) {
  if (e == null) return {};
  var r = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (n.indexOf(a) !== -1) continue;
    r[a] = e[a];
  }
  return r;
}
function Uu(e, n) {
  return Uu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Uu(e, n);
}
function Fg(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Uu(e, n);
}
var rs = { exports: {} }, on = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh;
function zO() {
  if (oh) return on;
  oh = 1;
  var e = or;
  function n(d) {
    var h = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        h += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return "Minified React error #" + d + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var a = {
    d: {
      f: r,
      r: function() {
        throw Error(n(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, l = Symbol.for("react.portal");
  function u(d, h, y) {
    var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: m == null ? null : "" + m,
      children: d,
      containerInfo: h,
      implementation: y
    };
  }
  var c = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(d, h) {
    if (d === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, on.createPortal = function(d, h) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(n(299));
    return u(d, h, null, y);
  }, on.flushSync = function(d) {
    var h = c.T, y = a.p;
    try {
      if (c.T = null, a.p = 2, d) return d();
    } finally {
      c.T = h, a.p = y, a.d.f();
    }
  }, on.preconnect = function(d, h) {
    typeof d == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, a.d.C(d, h));
  }, on.prefetchDNS = function(d) {
    typeof d == "string" && a.d.D(d);
  }, on.preinit = function(d, h) {
    if (typeof d == "string" && h && typeof h.as == "string") {
      var y = h.as, m = p(y, h.crossOrigin), v = typeof h.integrity == "string" ? h.integrity : void 0, w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      y === "style" ? a.d.S(
        d,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: m,
          integrity: v,
          fetchPriority: w
        }
      ) : y === "script" && a.d.X(d, {
        crossOrigin: m,
        integrity: v,
        fetchPriority: w,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, on.preinitModule = function(d, h) {
    if (typeof d == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var y = p(
            h.as,
            h.crossOrigin
          );
          a.d.M(d, {
            crossOrigin: y,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0
          });
        }
      } else h == null && a.d.M(d);
  }, on.preload = function(d, h) {
    if (typeof d == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var y = h.as, m = p(y, h.crossOrigin);
      a.d.L(d, y, {
        crossOrigin: m,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, on.preloadModule = function(d, h) {
    if (typeof d == "string")
      if (h) {
        var y = p(h.as, h.crossOrigin);
        a.d.m(d, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: y,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0
        });
      } else a.d.m(d);
  }, on.requestFormReset = function(d) {
    a.d.r(d);
  }, on.unstable_batchedUpdates = function(d, h) {
    return d(h);
  }, on.useFormState = function(d, h, y) {
    return c.H.useFormState(d, h, y);
  }, on.useFormStatus = function() {
    return c.H.useHostTransitionStatus();
  }, on.version = "19.0.0", on;
}
var an = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ih;
function VO() {
  return ih || (ih = 1, process.env.NODE_ENV !== "production" && function() {
    function e() {
    }
    function n(m) {
      return "" + m;
    }
    function r(m, v, w) {
      var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        n(O);
        var b = !1;
      } catch {
        b = !0;
      }
      return b && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && O[Symbol.toStringTag] || O.constructor.name || "Object"
      ), n(O)), {
        $$typeof: h,
        key: O == null ? null : "" + O,
        children: m,
        containerInfo: v,
        implementation: w
      };
    }
    function a(m, v) {
      if (m === "font") return "";
      if (typeof v == "string")
        return v === "use-credentials" ? v : "";
    }
    function l(m) {
      return m === null ? "`null`" : m === void 0 ? "`undefined`" : m === "" ? "an empty string" : 'something with type "' + typeof m + '"';
    }
    function u(m) {
      return m === null ? "`null`" : m === void 0 ? "`undefined`" : m === "" ? "an empty string" : typeof m == "string" ? JSON.stringify(m) : typeof m == "number" ? "`" + m + "`" : 'something with type "' + typeof m + '"';
    }
    function c() {
      var m = y.H;
      return m === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var p = or, d = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, h = Symbol.for("react.portal"), y = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d, an.createPortal = function(m, v) {
      var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return r(m, v, null, w);
    }, an.flushSync = function(m) {
      var v = y.T, w = d.p;
      try {
        if (y.T = null, d.p = 2, m)
          return m();
      } finally {
        y.T = v, d.p = w, d.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, an.preconnect = function(m, v) {
      typeof m == "string" && m ? v != null && typeof v != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        u(v)
      ) : v != null && typeof v.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        l(v.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        l(m)
      ), typeof m == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, d.d.C(m, v));
    }, an.prefetchDNS = function(m) {
      if (typeof m != "string" || !m)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          l(m)
        );
      else if (1 < arguments.length) {
        var v = arguments[1];
        typeof v == "object" && v.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          u(v)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          u(v)
        );
      }
      typeof m == "string" && d.d.D(m);
    }, an.preinit = function(m, v) {
      if (typeof m == "string" && m ? v == null || typeof v != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        u(v)
      ) : v.as !== "style" && v.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        u(v.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        l(m)
      ), typeof m == "string" && v && typeof v.as == "string") {
        var w = v.as, O = a(w, v.crossOrigin), b = typeof v.integrity == "string" ? v.integrity : void 0, R = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        w === "style" ? d.d.S(
          m,
          typeof v.precedence == "string" ? v.precedence : void 0,
          {
            crossOrigin: O,
            integrity: b,
            fetchPriority: R
          }
        ) : w === "script" && d.d.X(m, {
          crossOrigin: O,
          integrity: b,
          fetchPriority: R,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0
        });
      }
    }, an.preinitModule = function(m, v) {
      var w = "";
      if (typeof m == "string" && m || (w += " The `href` argument encountered was " + l(m) + "."), v !== void 0 && typeof v != "object" ? w += " The `options` argument encountered was " + l(v) + "." : v && "as" in v && v.as !== "script" && (w += " The `as` option encountered was " + u(v.as) + "."), w)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          w
        );
      else
        switch (w = v && typeof v.as == "string" ? v.as : "script", w) {
          case "script":
            break;
          default:
            w = u(w), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              w,
              m
            );
        }
      typeof m == "string" && (typeof v == "object" && v !== null ? (v.as == null || v.as === "script") && (w = a(
        v.as,
        v.crossOrigin
      ), d.d.M(m, {
        crossOrigin: w,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      })) : v == null && d.d.M(m));
    }, an.preload = function(m, v) {
      var w = "";
      if (typeof m == "string" && m || (w += " The `href` argument encountered was " + l(m) + "."), v == null || typeof v != "object" ? w += " The `options` argument encountered was " + l(v) + "." : typeof v.as == "string" && v.as || (w += " The `as` option encountered was " + l(v.as) + "."), w && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        w
      ), typeof m == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
        w = v.as;
        var O = a(
          w,
          v.crossOrigin
        );
        d.d.L(m, w, {
          crossOrigin: O,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0
        });
      }
    }, an.preloadModule = function(m, v) {
      var w = "";
      typeof m == "string" && m || (w += " The `href` argument encountered was " + l(m) + "."), v !== void 0 && typeof v != "object" ? w += " The `options` argument encountered was " + l(v) + "." : v && "as" in v && typeof v.as != "string" && (w += " The `as` option encountered was " + l(v.as) + "."), w && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        w
      ), typeof m == "string" && (v ? (w = a(
        v.as,
        v.crossOrigin
      ), d.d.m(m, {
        as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
        crossOrigin: w,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0
      })) : d.d.m(m));
    }, an.requestFormReset = function(m) {
      d.d.r(m);
    }, an.unstable_batchedUpdates = function(m, v) {
      return m(v);
    }, an.useFormState = function(m, v, w) {
      return c().useFormState(m, v, w);
    }, an.useFormStatus = function() {
      return c().useHostTransitionStatus();
    }, an.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), an;
}
var ah;
function jO() {
  if (ah) return rs.exports;
  ah = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (e(), rs.exports = zO()) : rs.exports = VO(), rs.exports;
}
var Bg = jO();
const os = /* @__PURE__ */ $h(Bg), sh = {
  disabled: !1
};
var HO = process.env.NODE_ENV !== "production" ? i.oneOfType([i.number, i.shape({
  enter: i.number,
  exit: i.number,
  appear: i.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && i.oneOfType([i.string, i.shape({
  enter: i.string,
  exit: i.string,
  active: i.string
}), i.shape({
  enter: i.string,
  enterDone: i.string,
  enterActive: i.string,
  exit: i.string,
  exitDone: i.string,
  exitActive: i.string
})]);
const Es = or.createContext(null);
var qO = function(n) {
  return n.scrollTop;
}, Li = "unmounted", bo = "exited", xo = "entering", Zo = "entered", zu = "exiting", wr = /* @__PURE__ */ function(e) {
  Fg(n, e);
  function n(a, l) {
    var u;
    u = e.call(this, a, l) || this;
    var c = l, p = c && !c.isMounting ? a.enter : a.appear, d;
    return u.appearStatus = null, a.in ? p ? (d = bo, u.appearStatus = xo) : d = Zo : a.unmountOnExit || a.mountOnEnter ? d = Li : d = bo, u.state = {
      status: d
    }, u.nextCallback = null, u;
  }
  n.getDerivedStateFromProps = function(l, u) {
    var c = l.in;
    return c && u.status === Li ? {
      status: bo
    } : null;
  };
  var r = n.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(l) {
    var u = null;
    if (l !== this.props) {
      var c = this.state.status;
      this.props.in ? c !== xo && c !== Zo && (u = xo) : (c === xo || c === Zo) && (u = zu);
    }
    this.updateStatus(!1, u);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var l = this.props.timeout, u, c, p;
    return u = c = p = l, l != null && typeof l != "number" && (u = l.exit, c = l.enter, p = l.appear !== void 0 ? l.appear : c), {
      exit: u,
      enter: c,
      appear: p
    };
  }, r.updateStatus = function(l, u) {
    if (l === void 0 && (l = !1), u !== null)
      if (this.cancelNextCallback(), u === xo) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var c = this.props.nodeRef ? this.props.nodeRef.current : os.findDOMNode(this);
          c && qO(c);
        }
        this.performEnter(l);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === bo && this.setState({
      status: Li
    });
  }, r.performEnter = function(l) {
    var u = this, c = this.props.enter, p = this.context ? this.context.isMounting : l, d = this.props.nodeRef ? [p] : [os.findDOMNode(this), p], h = d[0], y = d[1], m = this.getTimeouts(), v = p ? m.appear : m.enter;
    if (!l && !c || sh.disabled) {
      this.safeSetState({
        status: Zo
      }, function() {
        u.props.onEntered(h);
      });
      return;
    }
    this.props.onEnter(h, y), this.safeSetState({
      status: xo
    }, function() {
      u.props.onEntering(h, y), u.onTransitionEnd(v, function() {
        u.safeSetState({
          status: Zo
        }, function() {
          u.props.onEntered(h, y);
        });
      });
    });
  }, r.performExit = function() {
    var l = this, u = this.props.exit, c = this.getTimeouts(), p = this.props.nodeRef ? void 0 : os.findDOMNode(this);
    if (!u || sh.disabled) {
      this.safeSetState({
        status: bo
      }, function() {
        l.props.onExited(p);
      });
      return;
    }
    this.props.onExit(p), this.safeSetState({
      status: zu
    }, function() {
      l.props.onExiting(p), l.onTransitionEnd(c.exit, function() {
        l.safeSetState({
          status: bo
        }, function() {
          l.props.onExited(p);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(l, u) {
    u = this.setNextCallback(u), this.setState(l, u);
  }, r.setNextCallback = function(l) {
    var u = this, c = !0;
    return this.nextCallback = function(p) {
      c && (c = !1, u.nextCallback = null, l(p));
    }, this.nextCallback.cancel = function() {
      c = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(l, u) {
    this.setNextCallback(u);
    var c = this.props.nodeRef ? this.props.nodeRef.current : os.findDOMNode(this), p = l == null && !this.props.addEndListener;
    if (!c || p) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var d = this.props.nodeRef ? [this.nextCallback] : [c, this.nextCallback], h = d[0], y = d[1];
      this.props.addEndListener(h, y);
    }
    l != null && setTimeout(this.nextCallback, l);
  }, r.render = function() {
    var l = this.state.status;
    if (l === Li)
      return null;
    var u = this.props, c = u.children;
    u.in, u.mountOnEnter, u.unmountOnExit, u.appear, u.enter, u.exit, u.timeout, u.addEndListener, u.onEnter, u.onEntering, u.onEntered, u.onExit, u.onExiting, u.onExited, u.nodeRef;
    var p = Lg(u, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ or.createElement(Es.Provider, {
        value: null
      }, typeof c == "function" ? c(l, p) : or.cloneElement(or.Children.only(c), p))
    );
  }, n;
}(or.Component);
wr.contextType = Es;
wr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: i.shape({
    current: typeof Element > "u" ? i.any : function(e, n, r, a, l, u) {
      var c = e[n];
      return i.instanceOf(c && "ownerDocument" in c ? c.ownerDocument.defaultView.Element : Element)(e, n, r, a, l, u);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: i.oneOfType([i.func.isRequired, i.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: i.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: i.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: i.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: i.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: i.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: i.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(n) {
    var r = HO;
    n.addEndListener || (r = r.isRequired);
    for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      l[u - 1] = arguments[u];
    return r.apply(void 0, [n].concat(l));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: i.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: i.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: i.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: i.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: i.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: i.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: i.func
} : {};
function Xo() {
}
wr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Xo,
  onEntering: Xo,
  onEntered: Xo,
  onExit: Xo,
  onExiting: Xo,
  onExited: Xo
};
wr.UNMOUNTED = Li;
wr.EXITED = bo;
wr.ENTERING = xo;
wr.ENTERED = Zo;
wr.EXITING = zu;
function GO(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yc(e, n) {
  var r = function(u) {
    return n && ss(u) ? n(u) : u;
  }, a = /* @__PURE__ */ Object.create(null);
  return e && TE.map(e, function(l) {
    return l;
  }).forEach(function(l) {
    a[l.key] = r(l);
  }), a;
}
function KO(e, n) {
  e = e || {}, n = n || {};
  function r(y) {
    return y in n ? n[y] : e[y];
  }
  var a = /* @__PURE__ */ Object.create(null), l = [];
  for (var u in e)
    u in n ? l.length && (a[u] = l, l = []) : l.push(u);
  var c, p = {};
  for (var d in n) {
    if (a[d])
      for (c = 0; c < a[d].length; c++) {
        var h = a[d][c];
        p[a[d][c]] = r(h);
      }
    p[d] = r(d);
  }
  for (c = 0; c < l.length; c++)
    p[l[c]] = r(l[c]);
  return p;
}
function Eo(e, n, r) {
  return r[n] != null ? r[n] : e.props[n];
}
function YO(e, n) {
  return yc(e.children, function(r) {
    return ls(r, {
      onExited: n.bind(null, r),
      in: !0,
      appear: Eo(r, "appear", e),
      enter: Eo(r, "enter", e),
      exit: Eo(r, "exit", e)
    });
  });
}
function XO(e, n, r) {
  var a = yc(e.children), l = KO(n, a);
  return Object.keys(l).forEach(function(u) {
    var c = l[u];
    if (ss(c)) {
      var p = u in n, d = u in a, h = n[u], y = ss(h) && !h.props.in;
      d && (!p || y) ? l[u] = ls(c, {
        onExited: r.bind(null, c),
        in: !0,
        exit: Eo(c, "exit", e),
        enter: Eo(c, "enter", e)
      }) : !d && p && !y ? l[u] = ls(c, {
        in: !1
      }) : d && p && ss(h) && (l[u] = ls(c, {
        onExited: r.bind(null, c),
        in: h.props.in,
        exit: Eo(c, "exit", e),
        enter: Eo(c, "enter", e)
      }));
    }
  }), l;
}
var ZO = Object.values || function(e) {
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}, JO = {
  component: "div",
  childFactory: function(n) {
    return n;
  }
}, vc = /* @__PURE__ */ function(e) {
  Fg(n, e);
  function n(a, l) {
    var u;
    u = e.call(this, a, l) || this;
    var c = u.handleExited.bind(GO(u));
    return u.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: c,
      firstRender: !0
    }, u;
  }
  var r = n.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, n.getDerivedStateFromProps = function(l, u) {
    var c = u.children, p = u.handleExited, d = u.firstRender;
    return {
      children: d ? YO(l, p) : XO(l, c, p),
      firstRender: !1
    };
  }, r.handleExited = function(l, u) {
    var c = yc(this.props.children);
    l.key in c || (l.props.onExited && l.props.onExited(u), this.mounted && this.setState(function(p) {
      var d = ms({}, p.children);
      return delete d[l.key], {
        children: d
      };
    }));
  }, r.render = function() {
    var l = this.props, u = l.component, c = l.childFactory, p = Lg(l, ["component", "childFactory"]), d = this.state.contextValue, h = ZO(this.state.children).map(c);
    return delete p.appear, delete p.enter, delete p.exit, u === null ? /* @__PURE__ */ or.createElement(Es.Provider, {
      value: d
    }, h) : /* @__PURE__ */ or.createElement(Es.Provider, {
      value: d
    }, /* @__PURE__ */ or.createElement(u, p, h));
  }, n;
}(or.Component);
vc.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: i.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: i.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: i.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: i.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: i.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: i.func
} : {};
vc.defaultProps = JO;
const Wg = (e) => e.scrollTop;
function Ts(e, n) {
  const {
    timeout: r,
    easing: a,
    style: l = {}
  } = e;
  return {
    duration: l.transitionDuration ?? (typeof r == "number" ? r : r[n.mode] || 0),
    easing: l.transitionTimingFunction ?? (typeof a == "object" ? a[n.mode] : a),
    delay: l.transitionDelay
  };
}
function Vu(e) {
  return `scale(${e}, ${e ** 2})`;
}
const QO = {
  entering: {
    opacity: 1,
    transform: Vu(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Pu = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), ws = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const {
    addEndListener: a,
    appear: l = !0,
    children: u,
    easing: c,
    in: p,
    onEnter: d,
    onEntered: h,
    onEntering: y,
    onExit: m,
    onExited: v,
    onExiting: w,
    style: O,
    timeout: b = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = wr,
    ...A
  } = n, M = cg(), _ = I.useRef(), C = mc(), T = I.useRef(null), N = Qt(T, oa(u), r), F = (ee) => (q) => {
    if (ee) {
      const ae = T.current;
      q === void 0 ? ee(ae) : ee(ae, q);
    }
  }, V = F(y), Q = F((ee, q) => {
    Wg(ee);
    const {
      duration: ae,
      delay: pe,
      easing: K
    } = Ts({
      style: O,
      timeout: b,
      easing: c
    }, {
      mode: "enter"
    });
    let z;
    b === "auto" ? (z = C.transitions.getAutoHeightDuration(ee.clientHeight), _.current = z) : z = ae, ee.style.transition = [C.transitions.create("opacity", {
      duration: z,
      delay: pe
    }), C.transitions.create("transform", {
      duration: Pu ? z : z * 0.666,
      delay: pe,
      easing: K
    })].join(","), d && d(ee, q);
  }), E = F(h), B = F(w), U = F((ee) => {
    const {
      duration: q,
      delay: ae,
      easing: pe
    } = Ts({
      style: O,
      timeout: b,
      easing: c
    }, {
      mode: "exit"
    });
    let K;
    b === "auto" ? (K = C.transitions.getAutoHeightDuration(ee.clientHeight), _.current = K) : K = q, ee.style.transition = [C.transitions.create("opacity", {
      duration: K,
      delay: ae
    }), C.transitions.create("transform", {
      duration: Pu ? K : K * 0.666,
      delay: Pu ? ae : ae || K * 0.333,
      easing: pe
    })].join(","), ee.style.opacity = 0, ee.style.transform = Vu(0.75), m && m(ee);
  }), te = F(v);
  return /* @__PURE__ */ oe(R, {
    appear: l,
    in: p,
    nodeRef: T,
    onEnter: Q,
    onEntered: E,
    onEntering: V,
    onExit: U,
    onExited: te,
    onExiting: B,
    addEndListener: (ee) => {
      b === "auto" && M.start(_.current || 0, ee), a && a(T.current, ee);
    },
    timeout: b === "auto" ? null : b,
    ...A,
    children: (ee, {
      ownerState: q,
      ...ae
    }) => /* @__PURE__ */ I.cloneElement(u, {
      style: {
        opacity: 0,
        transform: Vu(0.75),
        visibility: ee === "exited" && !p ? "hidden" : void 0,
        ...QO[ee],
        ...O,
        ...u.props.style
      },
      ref: N,
      ...ae
    })
  });
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: ra.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
ws && (ws.muiSupportAuto = !0);
function eC(e) {
  const n = $n(e);
  return n.body === e ? Ur(e).innerWidth > n.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function zi(e, n) {
  n ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function lh(e) {
  return parseInt(Ur(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function tC(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), a = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || a;
}
function uh(e, n, r, a, l) {
  const u = [n, r, ...a];
  [].forEach.call(e.children, (c) => {
    const p = !u.includes(c), d = !tC(c);
    p && d && zi(c, l);
  });
}
function Iu(e, n) {
  let r = -1;
  return e.some((a, l) => n(a) ? (r = l, !0) : !1), r;
}
function nC(e, n) {
  const r = [], a = e.container;
  if (!n.disableScrollLock) {
    if (eC(a)) {
      const c = fg(Ur(a));
      r.push({
        value: a.style.paddingRight,
        property: "padding-right",
        el: a
      }), a.style.paddingRight = `${lh(a) + c}px`;
      const p = $n(a).querySelectorAll(".mui-fixed");
      [].forEach.call(p, (d) => {
        r.push({
          value: d.style.paddingRight,
          property: "padding-right",
          el: d
        }), d.style.paddingRight = `${lh(d) + c}px`;
      });
    }
    let u;
    if (a.parentNode instanceof DocumentFragment)
      u = $n(a).body;
    else {
      const c = a.parentElement, p = Ur(a);
      u = (c == null ? void 0 : c.nodeName) === "HTML" && p.getComputedStyle(c).overflowY === "scroll" ? c : a;
    }
    r.push({
      value: u.style.overflow,
      property: "overflow",
      el: u
    }, {
      value: u.style.overflowX,
      property: "overflow-x",
      el: u
    }, {
      value: u.style.overflowY,
      property: "overflow-y",
      el: u
    }), u.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: u,
      el: c,
      property: p
    }) => {
      u ? c.style.setProperty(p, u) : c.style.removeProperty(p);
    });
  };
}
function rC(e) {
  const n = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && n.push(r);
  }), n;
}
class oC {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(n, r) {
    let a = this.modals.indexOf(n);
    if (a !== -1)
      return a;
    a = this.modals.length, this.modals.push(n), n.modalRef && zi(n.modalRef, !1);
    const l = rC(r);
    uh(r, n.mount, n.modalRef, l, !0);
    const u = Iu(this.containers, (c) => c.container === r);
    return u !== -1 ? (this.containers[u].modals.push(n), a) : (this.containers.push({
      modals: [n],
      container: r,
      restore: null,
      hiddenSiblings: l
    }), a);
  }
  mount(n, r) {
    const a = Iu(this.containers, (u) => u.modals.includes(n)), l = this.containers[a];
    l.restore || (l.restore = nC(l, r));
  }
  remove(n, r = !0) {
    const a = this.modals.indexOf(n);
    if (a === -1)
      return a;
    const l = Iu(this.containers, (c) => c.modals.includes(n)), u = this.containers[l];
    if (u.modals.splice(u.modals.indexOf(n), 1), this.modals.splice(a, 1), u.modals.length === 0)
      u.restore && u.restore(), n.modalRef && zi(n.modalRef, r), uh(u.container, n.mount, n.modalRef, u.hiddenSiblings, !1), this.containers.splice(l, 1);
    else {
      const c = u.modals[u.modals.length - 1];
      c.modalRef && zi(c.modalRef, !1);
    }
    return a;
  }
  isTopModal(n) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === n;
  }
}
const iC = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function aC(e) {
  const n = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(n) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : n;
}
function sC(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const n = (a) => e.ownerDocument.querySelector(`input[type="radio"]${a}`);
  let r = n(`[name="${e.name}"]:checked`);
  return r || (r = n(`[name="${e.name}"]`)), r !== e;
}
function lC(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || sC(e));
}
function uC(e) {
  const n = [], r = [];
  return Array.from(e.querySelectorAll(iC)).forEach((a, l) => {
    const u = aC(a);
    u === -1 || !lC(a) || (u === 0 ? n.push(a) : r.push({
      documentOrder: l,
      tabIndex: u,
      node: a
    }));
  }), r.sort((a, l) => a.tabIndex === l.tabIndex ? a.documentOrder - l.documentOrder : a.tabIndex - l.tabIndex).map((a) => a.node).concat(n);
}
function cC() {
  return !0;
}
function Ss(e) {
  const {
    children: n,
    disableAutoFocus: r = !1,
    disableEnforceFocus: a = !1,
    disableRestoreFocus: l = !1,
    getTabbable: u = uC,
    isEnabled: c = cC,
    open: p
  } = e, d = I.useRef(!1), h = I.useRef(null), y = I.useRef(null), m = I.useRef(null), v = I.useRef(null), w = I.useRef(!1), O = I.useRef(null), b = Qt(oa(n), O), R = I.useRef(null);
  I.useEffect(() => {
    !p || !O.current || (w.current = !r);
  }, [r, p]), I.useEffect(() => {
    if (!p || !O.current)
      return;
    const _ = $n(O.current);
    return O.current.contains(_.activeElement) || (O.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), O.current.setAttribute("tabIndex", "-1")), w.current && O.current.focus()), () => {
      l || (m.current && m.current.focus && (d.current = !0, m.current.focus()), m.current = null);
    };
  }, [p]), I.useEffect(() => {
    if (!p || !O.current)
      return;
    const _ = $n(O.current), C = (F) => {
      R.current = F, !(a || !c() || F.key !== "Tab") && _.activeElement === O.current && F.shiftKey && (d.current = !0, y.current && y.current.focus());
    }, T = () => {
      var Q, E;
      const F = O.current;
      if (F === null)
        return;
      if (!_.hasFocus() || !c() || d.current) {
        d.current = !1;
        return;
      }
      if (F.contains(_.activeElement) || a && _.activeElement !== h.current && _.activeElement !== y.current)
        return;
      if (_.activeElement !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!w.current)
        return;
      let V = [];
      if ((_.activeElement === h.current || _.activeElement === y.current) && (V = u(O.current)), V.length > 0) {
        const B = !!((Q = R.current) != null && Q.shiftKey && ((E = R.current) == null ? void 0 : E.key) === "Tab"), U = V[0], te = V[V.length - 1];
        typeof U != "string" && typeof te != "string" && (B ? te.focus() : U.focus());
      } else
        F.focus();
    };
    _.addEventListener("focusin", T), _.addEventListener("keydown", C, !0);
    const N = setInterval(() => {
      _.activeElement && _.activeElement.tagName === "BODY" && T();
    }, 50);
    return () => {
      clearInterval(N), _.removeEventListener("focusin", T), _.removeEventListener("keydown", C, !0);
    };
  }, [r, a, l, c, p, u]);
  const A = (_) => {
    m.current === null && (m.current = _.relatedTarget), w.current = !0, v.current = _.target;
    const C = n.props.onFocus;
    C && C(_);
  }, M = (_) => {
    m.current === null && (m.current = _.relatedTarget), w.current = !0;
  };
  return /* @__PURE__ */ Dt(I.Fragment, {
    children: [/* @__PURE__ */ oe("div", {
      tabIndex: p ? 0 : -1,
      onFocus: M,
      ref: h,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ I.cloneElement(n, {
      ref: b,
      onFocus: A
    }), /* @__PURE__ */ oe("div", {
      tabIndex: p ? 0 : -1,
      onFocus: M,
      ref: y,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: ra,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: i.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: i.func,
  /**
   * If `true`, focus is locked.
   */
  open: i.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = sg(Ss.propTypes));
function fC(e) {
  return typeof e == "function" ? e() : e;
}
const Yi = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const {
    children: a,
    container: l,
    disablePortal: u = !1
  } = n, [c, p] = I.useState(null), d = Qt(/* @__PURE__ */ I.isValidElement(a) ? oa(a) : null, r);
  if (Br(() => {
    u || p(fC(l) || document.body);
  }, [l, u]), Br(() => {
    if (c && !u)
      return vs(r, c), () => {
        vs(r, null);
      };
  }, [r, c, u]), u) {
    if (/* @__PURE__ */ I.isValidElement(a)) {
      const h = {
        ref: d
      };
      return /* @__PURE__ */ I.cloneElement(a, h);
    }
    return a;
  }
  return c && /* @__PURE__ */ Bg.createPortal(a, c);
});
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: i.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Wr, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool
});
process.env.NODE_ENV !== "production" && (Yi.propTypes = sg(Yi.propTypes));
function Jt(e, n) {
  const {
    className: r,
    elementType: a,
    ownerState: l,
    externalForwardedProps: u,
    internalForwardedProps: c,
    shouldForwardComponentProp: p = !1,
    ...d
  } = n, {
    component: h,
    slots: y = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...v
  } = u, w = y[e] || a, O = yg(m[e], l), {
    props: {
      component: b,
      ...R
    },
    internalRef: A
  } = mg({
    className: r,
    ...d,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: O
  }), M = Qt(A, O == null ? void 0 : O.ref, n.ref), _ = e === "root" ? b || h : b, C = hg(w, {
    ...e === "root" && !h && !y[e] && c,
    ...e !== "root" && !y[e] && c,
    ...R,
    ..._ && !p && {
      as: _
    },
    ..._ && p && {
      component: _
    },
    ref: M
  }, l);
  return [w, C];
}
const pC = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ug = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = mc(), l = {
    enter: a.transitions.duration.enteringScreen,
    exit: a.transitions.duration.leavingScreen
  }, {
    addEndListener: u,
    appear: c = !0,
    children: p,
    easing: d,
    in: h,
    onEnter: y,
    onEntered: m,
    onEntering: v,
    onExit: w,
    onExited: O,
    onExiting: b,
    style: R,
    timeout: A = l,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: M = wr,
    ..._
  } = n, C = I.useRef(null), T = Qt(C, oa(p), r), N = (re) => (ee) => {
    if (re) {
      const q = C.current;
      ee === void 0 ? re(q) : re(q, ee);
    }
  }, F = N(v), V = N((re, ee) => {
    Wg(re);
    const q = Ts({
      style: R,
      timeout: A,
      easing: d
    }, {
      mode: "enter"
    });
    re.style.webkitTransition = a.transitions.create("opacity", q), re.style.transition = a.transitions.create("opacity", q), y && y(re, ee);
  }), Q = N(m), E = N(b), B = N((re) => {
    const ee = Ts({
      style: R,
      timeout: A,
      easing: d
    }, {
      mode: "exit"
    });
    re.style.webkitTransition = a.transitions.create("opacity", ee), re.style.transition = a.transitions.create("opacity", ee), w && w(re);
  }), U = N(O);
  return /* @__PURE__ */ oe(M, {
    appear: c,
    in: h,
    nodeRef: C,
    onEnter: V,
    onEntered: Q,
    onEntering: F,
    onExit: B,
    onExited: U,
    onExiting: E,
    addEndListener: (re) => {
      u && u(C.current, re);
    },
    timeout: A,
    ..._,
    children: (re, {
      ownerState: ee,
      ...q
    }) => /* @__PURE__ */ I.cloneElement(p, {
      style: {
        opacity: 0,
        visibility: re === "exited" && !h ? "hidden" : void 0,
        ...pC[re],
        ...R,
        ...p.props.style
      },
      ref: T,
      ...q
    })
  });
});
process.env.NODE_ENV !== "production" && (Ug.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: i.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: i.bool,
  /**
   * A single child content element.
   */
  children: ra.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: i.oneOfType([i.shape({
    enter: i.string,
    exit: i.string
  }), i.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: i.bool,
  /**
   * @ignore
   */
  onEnter: i.func,
  /**
   * @ignore
   */
  onEntered: i.func,
  /**
   * @ignore
   */
  onEntering: i.func,
  /**
   * @ignore
   */
  onExit: i.func,
  /**
   * @ignore
   */
  onExited: i.func,
  /**
   * @ignore
   */
  onExiting: i.func,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function dC(e) {
  return mt("MuiBackdrop", e);
}
xt("MuiBackdrop", ["root", "invisible"]);
const hC = (e) => {
  const {
    classes: n,
    invisible: r
  } = e;
  return bt({
    root: ["root", r && "invisible"]
  }, dC, n);
}, gC = Oe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, r.invisible && n.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), zg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: u,
    component: c = "div",
    invisible: p = !1,
    open: d,
    components: h = {},
    componentsProps: y = {},
    slotProps: m = {},
    slots: v = {},
    TransitionComponent: w,
    transitionDuration: O,
    ...b
  } = a, R = {
    ...a,
    component: c,
    invisible: p
  }, A = hC(R), M = {
    transition: w,
    root: h.Root,
    ...v
  }, _ = {
    ...y,
    ...m
  }, C = {
    slots: M,
    slotProps: _
  }, [T, N] = Jt("root", {
    elementType: gC,
    externalForwardedProps: C,
    className: Le(A.root, u),
    ownerState: R
  }), [F, V] = Jt("transition", {
    elementType: Ug,
    externalForwardedProps: C,
    ownerState: R
  });
  return /* @__PURE__ */ oe(F, {
    in: d,
    timeout: O,
    ...b,
    ...V,
    children: /* @__PURE__ */ oe(T, {
      "aria-hidden": !0,
      ...N,
      classes: A,
      ref: r,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (zg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    root: i.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: i.bool,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: i.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: i.oneOfType([i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })])
});
function mC(e) {
  return typeof e == "function" ? e() : e;
}
function yC(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ch = () => {
}, is = new oC();
function vC(e) {
  const {
    container: n,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: a = !1,
    closeAfterTransition: l = !1,
    onTransitionEnter: u,
    onTransitionExited: c,
    children: p,
    onClose: d,
    open: h,
    rootRef: y
  } = e, m = I.useRef({}), v = I.useRef(null), w = I.useRef(null), O = Qt(w, y), [b, R] = I.useState(!h), A = yC(p);
  let M = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (M = !1);
  const _ = () => $n(v.current), C = () => (m.current.modalRef = w.current, m.current.mount = v.current, m.current), T = () => {
    is.mount(C(), {
      disableScrollLock: a
    }), w.current && (w.current.scrollTop = 0);
  }, N = mr(() => {
    const ee = mC(n) || _().body;
    is.add(C(), ee), w.current && T();
  }), F = () => is.isTopModal(C()), V = mr((ee) => {
    v.current = ee, ee && (h && F() ? T() : w.current && zi(w.current, M));
  }), Q = I.useCallback(() => {
    is.remove(C(), M);
  }, [M]);
  I.useEffect(() => () => {
    Q();
  }, [Q]), I.useEffect(() => {
    h ? N() : (!A || !l) && Q();
  }, [h, Q, A, l, N]);
  const E = (ee) => (q) => {
    var ae;
    (ae = ee.onKeyDown) == null || ae.call(ee, q), !(q.key !== "Escape" || q.which === 229 || // Wait until IME is settled.
    !F()) && (r || (q.stopPropagation(), d && d(q, "escapeKeyDown")));
  }, B = (ee) => (q) => {
    var ae;
    (ae = ee.onClick) == null || ae.call(ee, q), q.target === q.currentTarget && d && d(q, "backdropClick");
  };
  return {
    getRootProps: (ee = {}) => {
      const q = gg(e);
      delete q.onTransitionEnter, delete q.onTransitionExited;
      const ae = {
        ...q,
        ...ee
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...ae,
        onKeyDown: E(ae),
        ref: O
      };
    },
    getBackdropProps: (ee = {}) => {
      const q = ee;
      return {
        "aria-hidden": !0,
        ...q,
        onClick: B(q),
        open: h
      };
    },
    getTransitionProps: () => {
      const ee = () => {
        R(!1), u && u();
      }, q = () => {
        R(!0), c && c(), l && Q();
      };
      return {
        onEnter: Bd(ee, (p == null ? void 0 : p.props.onEnter) ?? ch),
        onExited: Bd(q, (p == null ? void 0 : p.props.onExited) ?? ch)
      };
    },
    rootRef: O,
    portalRef: V,
    isTopModal: F,
    exited: b,
    hasTransition: A
  };
}
function bC(e) {
  return mt("MuiModal", e);
}
xt("MuiModal", ["root", "hidden", "backdrop"]);
const xC = (e) => {
  const {
    open: n,
    exited: r,
    classes: a
  } = e;
  return bt({
    root: ["root", !n && r && "hidden"],
    backdrop: ["backdrop"]
  }, bC, a);
}, EC = Oe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, !r.open && r.exited && n.hidden];
  }
})(ft(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: n
    }) => !n.open && n.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), TC = Oe(zg, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, n) => n.backdrop
})({
  zIndex: -1
}), Vg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    name: "MuiModal",
    props: n
  }), {
    BackdropComponent: l = TC,
    BackdropProps: u,
    classes: c,
    className: p,
    closeAfterTransition: d = !1,
    children: h,
    container: y,
    component: m,
    components: v = {},
    componentsProps: w = {},
    disableAutoFocus: O = !1,
    disableEnforceFocus: b = !1,
    disableEscapeKeyDown: R = !1,
    disablePortal: A = !1,
    disableRestoreFocus: M = !1,
    disableScrollLock: _ = !1,
    hideBackdrop: C = !1,
    keepMounted: T = !1,
    onBackdropClick: N,
    onClose: F,
    onTransitionEnter: V,
    onTransitionExited: Q,
    open: E,
    slotProps: B = {},
    slots: U = {},
    // eslint-disable-next-line react/prop-types
    theme: te,
    ...re
  } = a, ee = {
    ...a,
    closeAfterTransition: d,
    disableAutoFocus: O,
    disableEnforceFocus: b,
    disableEscapeKeyDown: R,
    disablePortal: A,
    disableRestoreFocus: M,
    disableScrollLock: _,
    hideBackdrop: C,
    keepMounted: T
  }, {
    getRootProps: q,
    getBackdropProps: ae,
    getTransitionProps: pe,
    portalRef: K,
    isTopModal: z,
    exited: Z,
    hasTransition: be
  } = vC({
    ...ee,
    rootRef: r
  }), fe = {
    ...ee,
    exited: Z
  }, se = xC(fe), ie = {};
  if (h.props.tabIndex === void 0 && (ie.tabIndex = "-1"), be) {
    const {
      onEnter: ve,
      onExited: D
    } = pe();
    ie.onEnter = ve, ie.onExited = D;
  }
  const me = {
    slots: {
      root: v.Root,
      backdrop: v.Backdrop,
      ...U
    },
    slotProps: {
      ...w,
      ...B
    }
  }, [ye, le] = Jt("root", {
    ref: r,
    elementType: EC,
    externalForwardedProps: {
      ...me,
      ...re,
      component: m
    },
    getSlotProps: q,
    ownerState: fe,
    className: Le(p, se == null ? void 0 : se.root, !fe.open && fe.exited && (se == null ? void 0 : se.hidden))
  }), [ce, ue] = Jt("backdrop", {
    ref: u == null ? void 0 : u.ref,
    elementType: l,
    externalForwardedProps: me,
    shouldForwardComponentProp: !0,
    additionalProps: u,
    getSlotProps: (ve) => ae({
      ...ve,
      onClick: (D) => {
        N && N(D), ve != null && ve.onClick && ve.onClick(D);
      }
    }),
    className: Le(u == null ? void 0 : u.className, se == null ? void 0 : se.backdrop),
    ownerState: fe
  });
  return !T && !E && (!be || Z) ? null : /* @__PURE__ */ oe(Yi, {
    ref: K,
    container: y,
    disablePortal: A,
    children: /* @__PURE__ */ Dt(ye, {
      ...le,
      children: [!C && l ? /* @__PURE__ */ oe(ce, {
        ...ue
      }) : null, /* @__PURE__ */ oe(Ss, {
        disableEnforceFocus: b,
        disableAutoFocus: O,
        disableRestoreFocus: M,
        isEnabled: z,
        open: E,
        children: /* @__PURE__ */ I.cloneElement(h, ie)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Vg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: i.object,
  /**
   * A single child content element.
   */
  children: ra.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: i.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: i.shape({
    Backdrop: i.elementType,
    Root: i.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Wr, i.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: i.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: i.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: i.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: i.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: i.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: i.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
function wC(e) {
  return mt("MuiPaper", e);
}
xt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const SC = (e) => {
  const {
    square: n,
    elevation: r,
    variant: a,
    classes: l
  } = e, u = {
    root: ["root", a, !n && "rounded", a === "elevation" && `elevation${r}`]
  };
  return bt(u, wC, l);
}, OC = Oe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, n[r.variant], !r.square && n.rounded, r.variant === "elevation" && n[`elevation${r.elevation}`]];
  }
})(ft(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: n
    }) => !n.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), nl = /* @__PURE__ */ I.forwardRef(function(n, r) {
  var w;
  const a = St({
    props: n,
    name: "MuiPaper"
  }), l = mc(), {
    className: u,
    component: c = "div",
    elevation: p = 1,
    square: d = !1,
    variant: h = "elevation",
    ...y
  } = a, m = {
    ...a,
    component: c,
    elevation: p,
    square: d,
    variant: h
  }, v = SC(m);
  return process.env.NODE_ENV !== "production" && l.shadows[p] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${p}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${p}]\` is defined.`].join(`
`)), /* @__PURE__ */ oe(OC, {
    as: c,
    ownerState: m,
    className: Le(v.root, u),
    ref: r,
    ...y,
    style: {
      ...h === "elevation" && {
        "--Paper-shadow": (l.vars || l).shadows[p],
        ...l.vars && {
          "--Paper-overlay": (w = l.vars.overlays) == null ? void 0 : w[p]
        },
        ...!l.vars && l.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Kt("#fff", Bu(p))}, ${Kt("#fff", Bu(p))})`
        }
      },
      ...y.style
    }
  });
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: xr(pc, (e) => {
    const {
      elevation: n,
      variant: r
    } = e;
    return n > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${n}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: i.bool,
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: i.oneOfType([i.oneOf(["elevation", "outlined"]), i.string])
});
function CC(e) {
  return mt("MuiPopover", e);
}
xt("MuiPopover", ["root", "paper"]);
function fh(e, n) {
  let r = 0;
  return typeof n == "number" ? r = n : n === "center" ? r = e.height / 2 : n === "bottom" && (r = e.height), r;
}
function ph(e, n) {
  let r = 0;
  return typeof n == "number" ? r = n : n === "center" ? r = e.width / 2 : n === "right" && (r = e.width), r;
}
function dh(e) {
  return [e.horizontal, e.vertical].map((n) => typeof n == "number" ? `${n}px` : n).join(" ");
}
function ds(e) {
  return typeof e == "function" ? e() : e;
}
const _C = (e) => {
  const {
    classes: n
  } = e;
  return bt({
    root: ["root"],
    paper: ["paper"]
  }, CC, n);
}, RC = Oe(Vg, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({}), jg = Oe(nl, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, n) => n.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Hg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: u,
    anchorOrigin: c = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: p,
    anchorReference: d = "anchorEl",
    children: h,
    className: y,
    container: m,
    elevation: v = 8,
    marginThreshold: w = 16,
    open: O,
    PaperProps: b = {},
    // TODO: remove in v7
    slots: R = {},
    slotProps: A = {},
    transformOrigin: M = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: _,
    // TODO: remove in v7
    transitionDuration: C = "auto",
    TransitionProps: T = {},
    // TODO: remove in v7
    disableScrollLock: N = !1,
    ...F
  } = a, V = I.useRef(), Q = {
    ...a,
    anchorOrigin: c,
    anchorReference: d,
    elevation: v,
    marginThreshold: w,
    transformOrigin: M,
    TransitionComponent: _,
    transitionDuration: C,
    TransitionProps: T
  }, E = _C(Q), B = I.useCallback(() => {
    if (d === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (p || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), p;
    const ue = ds(u), ve = ue && ue.nodeType === 1 ? ue : $n(V.current).body, D = ve.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Ae = ve.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Ae.top === 0 && Ae.left === 0 && Ae.right === 0 && Ae.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: D.top + fh(D, c.vertical),
      left: D.left + ph(D, c.horizontal)
    };
  }, [u, c.horizontal, c.vertical, p, d]), U = I.useCallback((ue) => ({
    vertical: fh(ue, M.vertical),
    horizontal: ph(ue, M.horizontal)
  }), [M.horizontal, M.vertical]), te = I.useCallback((ue) => {
    const ve = {
      width: ue.offsetWidth,
      height: ue.offsetHeight
    }, D = U(ve);
    if (d === "none")
      return {
        top: null,
        left: null,
        transformOrigin: dh(D)
      };
    const Ae = B();
    let Te = Ae.top - D.vertical, _e = Ae.left - D.horizontal;
    const Et = Te + ve.height, ge = _e + ve.width, pt = Ur(ds(u)), $e = pt.innerHeight - w, Ge = pt.innerWidth - w;
    if (w !== null && Te < w) {
      const Ne = Te - w;
      Te -= Ne, D.vertical += Ne;
    } else if (w !== null && Et > $e) {
      const Ne = Et - $e;
      Te -= Ne, D.vertical += Ne;
    }
    if (process.env.NODE_ENV !== "production" && ve.height > $e && ve.height && $e && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ve.height - $e}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), w !== null && _e < w) {
      const Ne = _e - w;
      _e -= Ne, D.horizontal += Ne;
    } else if (ge > Ge) {
      const Ne = ge - Ge;
      _e -= Ne, D.horizontal += Ne;
    }
    return {
      top: `${Math.round(Te)}px`,
      left: `${Math.round(_e)}px`,
      transformOrigin: dh(D)
    };
  }, [u, d, B, U, w]), [re, ee] = I.useState(O), q = I.useCallback(() => {
    const ue = V.current;
    if (!ue)
      return;
    const ve = te(ue);
    ve.top !== null && ue.style.setProperty("top", ve.top), ve.left !== null && (ue.style.left = ve.left), ue.style.transformOrigin = ve.transformOrigin, ee(!0);
  }, [te]);
  I.useEffect(() => (N && window.addEventListener("scroll", q), () => window.removeEventListener("scroll", q)), [u, N, q]);
  const ae = () => {
    q();
  }, pe = () => {
    ee(!1);
  };
  I.useEffect(() => {
    O && q();
  }), I.useImperativeHandle(l, () => O ? {
    updatePosition: () => {
      q();
    }
  } : null, [O, q]), I.useEffect(() => {
    if (!O)
      return;
    const ue = lg(() => {
      q();
    }), ve = Ur(u);
    return ve.addEventListener("resize", ue), () => {
      ue.clear(), ve.removeEventListener("resize", ue);
    };
  }, [u, O, q]);
  let K = C;
  const z = {
    slots: {
      transition: _,
      ...R
    },
    slotProps: {
      transition: T,
      paper: b,
      ...A
    }
  }, [Z, be] = Jt("transition", {
    elementType: ws,
    externalForwardedProps: z,
    ownerState: Q,
    getSlotProps: (ue) => ({
      ...ue,
      onEntering: (ve, D) => {
        var Ae;
        (Ae = ue.onEntering) == null || Ae.call(ue, ve, D), ae();
      },
      onExited: (ve) => {
        var D;
        (D = ue.onExited) == null || D.call(ue, ve), pe();
      }
    }),
    additionalProps: {
      appear: !0,
      in: O
    }
  });
  C === "auto" && !Z.muiSupportAuto && (K = void 0);
  const fe = m || (u ? $n(ds(u)).body : void 0), [se, {
    slots: ie,
    slotProps: me,
    ...ye
  }] = Jt("root", {
    ref: r,
    elementType: RC,
    externalForwardedProps: {
      ...z,
      ...F
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: R.backdrop
      },
      slotProps: {
        backdrop: gO(typeof A.backdrop == "function" ? A.backdrop(Q) : A.backdrop, {
          invisible: !0
        })
      },
      container: fe,
      open: O
    },
    ownerState: Q,
    className: Le(E.root, y)
  }), [le, ce] = Jt("paper", {
    ref: V,
    className: E.paper,
    elementType: jg,
    externalForwardedProps: z,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: v,
      style: re ? void 0 : {
        opacity: 0
      }
    },
    ownerState: Q
  });
  return /* @__PURE__ */ oe(se, {
    ...ye,
    ...!Wu(se) && {
      slots: ie,
      slotProps: me,
      disableScrollLock: N
    },
    children: /* @__PURE__ */ oe(Z, {
      ...be,
      timeout: K,
      children: /* @__PURE__ */ oe(le, {
        ...ce,
        children: h
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Hg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: ar,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: xr(i.oneOfType([Wr, i.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const n = ds(e.anchorEl);
      if (n && n.nodeType === 1) {
        const r = n.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${n}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: i.shape({
    left: i.number.isRequired,
    top: i.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: i.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: i.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: i.object,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Wr, i.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: i.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: pc,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: i.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: i.shape({
    component: cc
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    paper: i.elementType,
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: i.shape({
    horizontal: i.oneOfType([i.oneOf(["center", "left", "right"]), i.number]).isRequired,
    vertical: i.oneOfType([i.oneOf(["bottom", "center", "top"]), i.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: i.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: i.object
});
function PC(e) {
  return mt("MuiMenu", e);
}
xt("MuiMenu", ["root", "paper", "list"]);
const IC = {
  vertical: "top",
  horizontal: "right"
}, AC = {
  vertical: "top",
  horizontal: "left"
}, $C = (e) => {
  const {
    classes: n
  } = e;
  return bt({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, PC, n);
}, NC = Oe(Hg, {
  shouldForwardProp: (e) => Tr(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({}), MC = Oe(jg, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, n) => n.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), kC = Oe(Dg, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, n) => n.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), qg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiMenu"
  }), {
    autoFocus: l = !0,
    children: u,
    className: c,
    disableAutoFocusItem: p = !1,
    MenuListProps: d = {},
    onClose: h,
    open: y,
    PaperProps: m = {},
    PopoverClasses: v,
    transitionDuration: w = "auto",
    TransitionProps: {
      onEntering: O,
      ...b
    } = {},
    variant: R = "selectedMenu",
    slots: A = {},
    slotProps: M = {},
    ..._
  } = a, C = bg(), T = {
    ...a,
    autoFocus: l,
    disableAutoFocusItem: p,
    MenuListProps: d,
    onEntering: O,
    PaperProps: m,
    transitionDuration: w,
    TransitionProps: b,
    variant: R
  }, N = $C(T), F = l && !p && y, V = I.useRef(null), Q = (K, z) => {
    V.current && V.current.adjustStyleForScrollbar(K, {
      direction: C ? "rtl" : "ltr"
    }), O && O(K, z);
  }, E = (K) => {
    K.key === "Tab" && (K.preventDefault(), h && h(K, "tabKeyDown"));
  };
  let B = -1;
  I.Children.map(u, (K, z) => {
    /* @__PURE__ */ I.isValidElement(K) && (process.env.NODE_ENV !== "production" && wo.isFragment(K) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), K.props.disabled || (R === "selectedMenu" && K.props.selected || B === -1) && (B = z));
  });
  const U = {
    slots: A,
    slotProps: {
      list: d,
      transition: b,
      paper: m,
      ...M
    }
  }, te = vg({
    elementType: A.root,
    externalSlotProps: M.root,
    ownerState: T,
    className: [N.root, c]
  }), [re, ee] = Jt("paper", {
    className: N.paper,
    elementType: MC,
    externalForwardedProps: U,
    shouldForwardComponentProp: !0,
    ownerState: T
  }), [q, ae] = Jt("list", {
    className: Le(N.list, d.className),
    elementType: kC,
    shouldForwardComponentProp: !0,
    externalForwardedProps: U,
    getSlotProps: (K) => ({
      ...K,
      onKeyDown: (z) => {
        var Z;
        E(z), (Z = K.onKeyDown) == null || Z.call(K, z);
      }
    }),
    ownerState: T
  }), pe = typeof U.slotProps.transition == "function" ? U.slotProps.transition(T) : U.slotProps.transition;
  return /* @__PURE__ */ oe(NC, {
    onClose: h,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: C ? "right" : "left"
    },
    transformOrigin: C ? IC : AC,
    slots: {
      root: A.root,
      paper: re,
      backdrop: A.backdrop,
      ...A.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: A.transition
      }
    },
    slotProps: {
      root: te,
      paper: ee,
      backdrop: typeof M.backdrop == "function" ? M.backdrop(T) : M.backdrop,
      transition: {
        ...pe,
        onEntering: (...K) => {
          var z;
          Q(...K), (z = pe == null ? void 0 : pe.onEntering) == null || z.call(pe, ...K);
        }
      }
    },
    open: y,
    ref: r,
    transitionDuration: w,
    ownerState: T,
    ..._,
    classes: v,
    children: /* @__PURE__ */ oe(q, {
      actions: V,
      autoFocus: l && (B === -1 || p),
      autoFocusItem: F,
      variant: R,
      ...ae,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (qg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: i.oneOfType([Wr, i.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: i.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: i.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: i.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: i.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: i.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    backdrop: i.oneOfType([i.func, i.object]),
    list: i.oneOfType([i.func, i.object]),
    paper: i.oneOfType([i.func, i.object]),
    root: i.oneOfType([i.func, i.object]),
    transition: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    backdrop: i.elementType,
    list: i.elementType,
    paper: i.elementType,
    root: i.elementType,
    transition: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: i.oneOfType([i.oneOf(["auto"]), i.number, i.shape({
    appear: i.number,
    enter: i.number,
    exit: i.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: i.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: i.oneOf(["menu", "selectedMenu"])
});
function DC(e) {
  return mt("MuiNativeSelect", e);
}
const bc = xt("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), LC = (e) => {
  const {
    classes: n,
    variant: r,
    disabled: a,
    multiple: l,
    open: u,
    error: c
  } = e, p = {
    select: ["select", r, a && "disabled", l && "multiple", c && "error"],
    icon: ["icon", `icon${Se(r)}`, u && "iconOpen", a && "disabled"]
  };
  return bt(p, DC, n);
}, Gg = Oe("select")(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${bc.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: n
    }) => n.variant !== "filled" && n.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), FC = Oe(Gg, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Tr,
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.select, n[r.variant], r.error && n.error, {
      [`&.${bc.multiple}`]: n.multiple
    }];
  }
})({}), Kg = Oe("svg")(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${bc.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: n
    }) => n.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), BC = Oe(Kg, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.icon, r.variant && n[`icon${Se(r.variant)}`], r.open && n.iconOpen];
  }
})({}), Yg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const {
    className: a,
    disabled: l,
    error: u,
    IconComponent: c,
    inputRef: p,
    variant: d = "standard",
    ...h
  } = n, y = {
    ...n,
    disabled: l,
    variant: d,
    error: u
  }, m = LC(y);
  return /* @__PURE__ */ Dt(I.Fragment, {
    children: [/* @__PURE__ */ oe(FC, {
      ownerState: y,
      className: Le(m.select, a),
      disabled: l,
      ref: p || r,
      ...h
    }), n.multiple ? null : /* @__PURE__ */ oe(BC, {
      as: c,
      ownerState: y,
      className: m.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Yg.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: ar,
  /**
   * @ignore
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
function Xg(e) {
  return mt("MuiSelect", e);
}
const Ni = xt("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var hh;
const WC = Oe(Gg, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Ni.select}`]: n.select
      },
      {
        [`&.${Ni.select}`]: n[r.variant]
      },
      {
        [`&.${Ni.error}`]: n.error
      },
      {
        [`&.${Ni.multiple}`]: n.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Ni.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), UC = Oe(Kg, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.icon, r.variant && n[`icon${Se(r.variant)}`], r.open && n.iconOpen];
  }
})({}), zC = Oe("input", {
  shouldForwardProp: (e) => Cg(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, n) => n.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function gh(e, n) {
  return typeof n == "object" && n !== null ? e === n : String(e) === String(n);
}
function VC(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const jC = (e) => {
  const {
    classes: n,
    variant: r,
    disabled: a,
    multiple: l,
    open: u,
    error: c
  } = e, p = {
    select: ["select", r, a && "disabled", l && "multiple", c && "error"],
    icon: ["icon", `icon${Se(r)}`, u && "iconOpen", a && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return bt(p, Xg, n);
}, Zg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  var en;
  const {
    "aria-describedby": a,
    "aria-label": l,
    autoFocus: u,
    autoWidth: c,
    children: p,
    className: d,
    defaultOpen: h,
    defaultValue: y,
    disabled: m,
    displayEmpty: v,
    error: w = !1,
    IconComponent: O,
    inputRef: b,
    labelId: R,
    MenuProps: A = {},
    multiple: M,
    name: _,
    onBlur: C,
    onChange: T,
    onClose: N,
    onFocus: F,
    onOpen: V,
    open: Q,
    readOnly: E,
    renderValue: B,
    required: U,
    SelectDisplayProps: te = {},
    tabIndex: re,
    // catching `type` from Input which makes no sense for SelectInput
    type: ee,
    value: q,
    variant: ae = "standard",
    ...pe
  } = n, [K, z] = Wi({
    controlled: q,
    default: y,
    name: "Select"
  }), [Z, be] = Wi({
    controlled: Q,
    default: h,
    name: "Select"
  }), fe = I.useRef(null), se = I.useRef(null), [ie, me] = I.useState(null), {
    current: ye
  } = I.useRef(Q != null), [le, ce] = I.useState(), ue = Qt(r, b), ve = I.useCallback((xe) => {
    se.current = xe, xe && me(xe);
  }, []), D = ie == null ? void 0 : ie.parentNode;
  I.useImperativeHandle(ue, () => ({
    focus: () => {
      se.current.focus();
    },
    node: fe.current,
    value: K
  }), [K]), I.useEffect(() => {
    h && Z && ie && !ye && (ce(c ? null : D.clientWidth), se.current.focus());
  }, [ie, c]), I.useEffect(() => {
    u && se.current.focus();
  }, [u]), I.useEffect(() => {
    if (!R)
      return;
    const xe = $n(se.current).getElementById(R);
    if (xe) {
      const Ue = () => {
        getSelection().isCollapsed && se.current.focus();
      };
      return xe.addEventListener("click", Ue), () => {
        xe.removeEventListener("click", Ue);
      };
    }
  }, [R]);
  const Ae = (xe, Ue) => {
    xe ? V && V(Ue) : N && N(Ue), ye || (ce(c ? null : D.clientWidth), be(xe));
  }, Te = (xe) => {
    xe.button === 0 && (xe.preventDefault(), se.current.focus(), Ae(!0, xe));
  }, _e = (xe) => {
    Ae(!1, xe);
  }, Et = I.Children.toArray(p), ge = (xe) => {
    const Ue = Et.find((Tt) => Tt.props.value === xe.target.value);
    Ue !== void 0 && (z(Ue.props.value), T && T(xe, Ue));
  }, pt = (xe) => (Ue) => {
    let Tt;
    if (Ue.currentTarget.hasAttribute("tabindex")) {
      if (M) {
        Tt = Array.isArray(K) ? K.slice() : [];
        const Mn = K.indexOf(xe.props.value);
        Mn === -1 ? Tt.push(xe.props.value) : Tt.splice(Mn, 1);
      } else
        Tt = xe.props.value;
      if (xe.props.onClick && xe.props.onClick(Ue), K !== Tt && (z(Tt), T)) {
        const Mn = Ue.nativeEvent || Ue, tn = new Mn.constructor(Mn.type, Mn);
        Object.defineProperty(tn, "target", {
          writable: !0,
          value: {
            value: Tt,
            name: _
          }
        }), T(tn, xe);
      }
      M || Ae(!1, Ue);
    }
  }, $e = (xe) => {
    E || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(xe.key) && (xe.preventDefault(), Ae(!0, xe));
  }, Ge = ie !== null && Z, Ne = (xe) => {
    !Ge && C && (Object.defineProperty(xe, "target", {
      writable: !0,
      value: {
        value: K,
        name: _
      }
    }), C(xe));
  };
  delete pe["aria-invalid"];
  let we, $t;
  const st = [];
  let Nt = !1, un = !1;
  (bs({
    value: K
  }) || v) && (B ? we = B(K) : Nt = !0);
  const Ft = Et.map((xe) => {
    if (!/* @__PURE__ */ I.isValidElement(xe))
      return null;
    process.env.NODE_ENV !== "production" && wo.isFragment(xe) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Ue;
    if (M) {
      if (!Array.isArray(K))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : br(2));
      Ue = K.some((Tt) => gh(Tt, xe.props.value)), Ue && Nt && st.push(xe.props.children);
    } else
      Ue = gh(K, xe.props.value), Ue && Nt && ($t = xe.props.children);
    return Ue && (un = !0), /* @__PURE__ */ I.cloneElement(xe, {
      "aria-selected": Ue ? "true" : "false",
      onClick: pt(xe),
      onKeyUp: (Tt) => {
        Tt.key === " " && Tt.preventDefault(), xe.props.onKeyUp && xe.props.onKeyUp(Tt);
      },
      role: "option",
      selected: Ue,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": xe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && I.useEffect(() => {
    if (!un && !M && K !== "") {
      const xe = Et.map((Ue) => Ue.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${K}\` for the select ${_ ? `(name="${_}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${xe.filter((Ue) => Ue != null).map((Ue) => `\`${Ue}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [un, Et, M, _, K]), Nt && (M ? st.length === 0 ? we = null : we = st.reduce((xe, Ue, Tt) => (xe.push(Ue), Tt < st.length - 1 && xe.push(", "), xe), []) : we = $t);
  let Bt = le;
  !c && ye && ie && (Bt = D.clientWidth);
  let yt;
  typeof re < "u" ? yt = re : yt = m ? null : 0;
  const Je = te.id || (_ ? `mui-component-select-${_}` : void 0), Me = {
    ...n,
    variant: ae,
    value: K,
    open: Ge,
    error: w
  }, cn = jC(Me), Ht = {
    ...A.PaperProps,
    ...(en = A.slotProps) == null ? void 0 : en.paper
  }, sr = Is();
  return /* @__PURE__ */ Dt(I.Fragment, {
    children: [/* @__PURE__ */ oe(WC, {
      as: "div",
      ref: ve,
      tabIndex: yt,
      role: "combobox",
      "aria-controls": Ge ? sr : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": Ge ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": l,
      "aria-labelledby": [R, Je].filter(Boolean).join(" ") || void 0,
      "aria-describedby": a,
      "aria-required": U ? "true" : void 0,
      "aria-invalid": w ? "true" : void 0,
      onKeyDown: $e,
      onMouseDown: m || E ? null : Te,
      onBlur: Ne,
      onFocus: F,
      ...te,
      ownerState: Me,
      className: Le(te.className, cn.select, d),
      id: Je,
      children: VC(we) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        hh || (hh = /* @__PURE__ */ oe("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : we
    }), /* @__PURE__ */ oe(zC, {
      "aria-invalid": w,
      value: Array.isArray(K) ? K.join(",") : K,
      name: _,
      ref: fe,
      "aria-hidden": !0,
      onChange: ge,
      tabIndex: -1,
      disabled: m,
      className: cn.nativeInput,
      autoFocus: u,
      required: U,
      ...pe,
      ownerState: Me
    }), /* @__PURE__ */ oe(UC, {
      as: O,
      className: cn.icon,
      ownerState: Me
    }), /* @__PURE__ */ oe(qg, {
      id: `menu-${_ || ""}`,
      anchorEl: D,
      open: Ge,
      onClose: _e,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...A,
      slotProps: {
        ...A.slotProps,
        list: {
          "aria-labelledby": R,
          role: "listbox",
          "aria-multiselectable": M ? "true" : void 0,
          disableListWrap: !0,
          id: sr,
          ...A.MenuListProps
        },
        paper: {
          ...Ht,
          style: {
            minWidth: Bt,
            ...Ht != null ? Ht.style : null
          }
        }
      },
      children: Ft
    })]
  });
});
process.env.NODE_ENV !== "production" && (Zg.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": i.string,
  /**
   * @ignore
   */
  "aria-label": i.string,
  /**
   * @ignore
   */
  autoFocus: i.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * The CSS class name of the select element.
   */
  className: i.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: i.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: i.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: i.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: i.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: ar,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: i.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * @ignore
   */
  readOnly: i.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * If `true`, the component is required.
   */
  required: i.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * @ignore
   */
  tabIndex: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  type: i.any,
  /**
   * The input value.
   */
  value: i.any,
  /**
   * The variant to use.
   */
  variant: i.oneOf(["standard", "outlined", "filled"])
});
const Jg = Qs(/* @__PURE__ */ oe("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), HC = (e) => {
  const {
    classes: n
  } = e, a = bt({
    root: ["root"]
  }, Xg, n);
  return {
    ...n,
    ...a
  };
}, xc = {
  name: "MuiSelect",
  overridesResolver: (e, n) => n.root,
  shouldForwardProp: (e) => Tr(e) && e !== "variant",
  slot: "Root"
}, qC = Oe(Js, xc)(""), GC = Oe(tl, xc)(""), KC = Oe(el, xc)(""), Ec = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    name: "MuiSelect",
    props: n
  }), {
    autoWidth: l = !1,
    children: u,
    classes: c = {},
    className: p,
    defaultOpen: d = !1,
    displayEmpty: h = !1,
    IconComponent: y = Jg,
    id: m,
    input: v,
    inputProps: w,
    label: O,
    labelId: b,
    MenuProps: R,
    multiple: A = !1,
    native: M = !1,
    onClose: _,
    onOpen: C,
    open: T,
    renderValue: N,
    SelectDisplayProps: F,
    variant: V = "outlined",
    ...Q
  } = a, E = M ? Yg : Zg, B = li(), U = si({
    props: a,
    muiFormControl: B,
    states: ["variant", "error"]
  }), te = U.variant || V, re = {
    ...a,
    variant: te,
    classes: c
  }, ee = HC(re), {
    root: q,
    ...ae
  } = ee, pe = v || {
    standard: /* @__PURE__ */ oe(qC, {
      ownerState: re
    }),
    outlined: /* @__PURE__ */ oe(GC, {
      label: O,
      ownerState: re
    }),
    filled: /* @__PURE__ */ oe(KC, {
      ownerState: re
    })
  }[te], K = Qt(r, oa(pe));
  return /* @__PURE__ */ oe(I.Fragment, {
    children: /* @__PURE__ */ I.cloneElement(pe, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: E,
      inputProps: {
        children: u,
        error: U.error,
        IconComponent: y,
        variant: te,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: A,
        ...M ? {
          id: m
        } : {
          autoWidth: l,
          defaultOpen: d,
          displayEmpty: h,
          labelId: b,
          MenuProps: R,
          onClose: _,
          onOpen: C,
          open: T,
          renderValue: N,
          SelectDisplayProps: {
            id: m,
            ...F
          }
        },
        ...w,
        classes: w ? ln(ae, w.classes) : ae,
        ...v ? v.props.inputProps : {}
      },
      ...(A && M || h) && te === "outlined" ? {
        notched: !0
      } : {},
      ref: K,
      className: Le(pe.props.className, p, ee.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: te
      },
      ...Q
    })
  });
});
process.env.NODE_ENV !== "production" && (Ec.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: i.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: i.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: i.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: i.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: i.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: i.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: i.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: i.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: i.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: i.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: i.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: i.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: i.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: i.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: i.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: i.oneOfType([i.oneOf([""]), i.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
Ec.muiName = "Select";
function YC(e) {
  return mt("MuiTextField", e);
}
xt("MuiTextField", ["root"]);
const XC = {
  standard: Js,
  filled: el,
  outlined: tl
}, ZC = (e) => {
  const {
    classes: n
  } = e;
  return bt({
    root: ["root"]
  }, YC, n);
}, JC = Oe(Ag, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({}), Qg = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiTextField"
  }), {
    autoComplete: l,
    autoFocus: u = !1,
    children: c,
    className: p,
    color: d = "primary",
    defaultValue: h,
    disabled: y = !1,
    error: m = !1,
    FormHelperTextProps: v,
    fullWidth: w = !1,
    helperText: O,
    id: b,
    InputLabelProps: R,
    inputProps: A,
    InputProps: M,
    inputRef: _,
    label: C,
    maxRows: T,
    minRows: N,
    multiline: F = !1,
    name: V,
    onBlur: Q,
    onChange: E,
    onFocus: B,
    placeholder: U,
    required: te = !1,
    rows: re,
    select: ee = !1,
    SelectProps: q,
    slots: ae = {},
    slotProps: pe = {},
    type: K,
    value: z,
    variant: Z = "outlined",
    ...be
  } = a, fe = {
    ...a,
    autoFocus: u,
    color: d,
    disabled: y,
    error: m,
    fullWidth: w,
    multiline: F,
    required: te,
    select: ee,
    variant: Z
  }, se = ZC(fe);
  process.env.NODE_ENV !== "production" && ee && !c && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const ie = Is(b), me = O && ie ? `${ie}-helper-text` : void 0, ye = C && ie ? `${ie}-label` : void 0, le = XC[Z], ce = {
    slots: ae,
    slotProps: {
      input: M,
      inputLabel: R,
      htmlInput: A,
      formHelperText: v,
      select: q,
      ...pe
    }
  }, ue = {}, ve = ce.slotProps.inputLabel;
  Z === "outlined" && (ve && typeof ve.shrink < "u" && (ue.notched = ve.shrink), ue.label = C), ee && ((!q || !q.native) && (ue.id = void 0), ue["aria-describedby"] = void 0);
  const [D, Ae] = Jt("input", {
    elementType: le,
    externalForwardedProps: ce,
    additionalProps: ue,
    ownerState: fe
  }), [Te, _e] = Jt("inputLabel", {
    elementType: Ig,
    externalForwardedProps: ce,
    ownerState: fe
  }), [Et, ge] = Jt("htmlInput", {
    elementType: "input",
    externalForwardedProps: ce,
    ownerState: fe
  }), [pt, $e] = Jt("formHelperText", {
    elementType: $g,
    externalForwardedProps: ce,
    ownerState: fe
  }), [Ge, Ne] = Jt("select", {
    elementType: Ec,
    externalForwardedProps: ce,
    ownerState: fe
  }), we = /* @__PURE__ */ oe(D, {
    "aria-describedby": me,
    autoComplete: l,
    autoFocus: u,
    defaultValue: h,
    fullWidth: w,
    multiline: F,
    name: V,
    rows: re,
    maxRows: T,
    minRows: N,
    type: K,
    value: z,
    id: ie,
    inputRef: _,
    onBlur: Q,
    onChange: E,
    onFocus: B,
    placeholder: U,
    inputProps: ge,
    slots: {
      input: ae.htmlInput ? Et : void 0
    },
    ...Ae
  });
  return /* @__PURE__ */ Dt(JC, {
    className: Le(se.root, p),
    disabled: y,
    error: m,
    fullWidth: w,
    ref: r,
    required: te,
    color: d,
    variant: Z,
    ownerState: fe,
    ...be,
    children: [C != null && C !== "" && /* @__PURE__ */ oe(Te, {
      htmlFor: ie,
      id: ye,
      ..._e,
      children: C
    }), ee ? /* @__PURE__ */ oe(Ge, {
      "aria-describedby": me,
      id: ie,
      labelId: ye,
      value: z,
      input: we,
      ...Ne,
      children: c
    }) : we, O && /* @__PURE__ */ oe(pt, {
      id: me,
      ...$e,
      children: O
    })]
  });
});
process.env.NODE_ENV !== "production" && (Qg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: i.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: i.bool,
  /**
   * @ignore
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: i.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: i.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: i.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The helper text content.
   */
  helperText: i.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: i.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: i.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: i.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: i.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ar,
  /**
   * The label content.
   */
  label: i.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: i.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: i.oneOfType([i.number, i.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: i.oneOfType([i.number, i.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: i.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: i.string,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: i.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: i.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: i.oneOfType([i.number, i.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: i.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: i.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    formHelperText: i.oneOfType([i.func, i.object]),
    htmlInput: i.oneOfType([i.func, i.object]),
    input: i.oneOfType([i.func, i.object]),
    inputLabel: i.oneOfType([i.func, i.object]),
    select: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    formHelperText: i.elementType,
    htmlInput: i.elementType,
    input: i.elementType,
    inputLabel: i.elementType,
    select: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: i.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: i.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: i.oneOf(["filled", "outlined", "standard"])
});
function mh(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function QC(e = {}) {
  const {
    ignoreAccents: n = !0,
    ignoreCase: r = !0,
    limit: a,
    matchFrom: l = "any",
    stringify: u,
    trim: c = !1
  } = e;
  return (p, {
    inputValue: d,
    getOptionLabel: h
  }) => {
    let y = c ? d.trim() : d;
    r && (y = y.toLowerCase()), n && (y = mh(y));
    const m = y ? p.filter((v) => {
      let w = (u || h)(v);
      return r && (w = w.toLowerCase()), n && (w = mh(w)), l === "start" ? w.startsWith(y) : w.includes(y);
    }) : p;
    return typeof a == "number" ? m.slice(0, a) : m;
  };
}
const e_ = QC(), t_ = 5, n_ = (e) => {
  var n;
  return e.current !== null && ((n = e.current.parentElement) == null ? void 0 : n.contains(document.activeElement));
}, r_ = [];
function yh(e, n, r) {
  if (n || e == null)
    return "";
  const a = r(e);
  return typeof a == "string" ? a : "";
}
function o_(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: n = n_,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: r = "Mui",
    autoComplete: a = !1,
    autoHighlight: l = !1,
    autoSelect: u = !1,
    blurOnSelect: c = !1,
    clearOnBlur: p = !e.freeSolo,
    clearOnEscape: d = !1,
    componentName: h = "useAutocomplete",
    defaultValue: y = e.multiple ? r_ : null,
    disableClearable: m = !1,
    disableCloseOnSelect: v = !1,
    disabled: w,
    disabledItemsFocusable: O = !1,
    disableListWrap: b = !1,
    filterOptions: R = e_,
    filterSelectedOptions: A = !1,
    freeSolo: M = !1,
    getOptionDisabled: _,
    getOptionKey: C,
    getOptionLabel: T = (Y) => Y.label ?? Y,
    groupBy: N,
    handleHomeEndKeys: F = !e.freeSolo,
    id: V,
    includeInputInList: Q = !1,
    inputValue: E,
    isOptionEqualToValue: B = (Y, j) => Y === j,
    multiple: U = !1,
    onChange: te,
    onClose: re,
    onHighlightChange: ee,
    onInputChange: q,
    onOpen: ae,
    open: pe,
    openOnFocus: K = !1,
    options: z,
    readOnly: Z = !1,
    selectOnFocus: be = !e.freeSolo,
    value: fe
  } = e, se = Is(V);
  let ie = T;
  ie = (Y) => {
    const j = T(Y);
    if (typeof j != "string") {
      if (process.env.NODE_ENV !== "production") {
        const de = j === void 0 ? "undefined" : `${typeof j} (${j})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${h} returned ${de} instead of a string for ${JSON.stringify(Y)}.`);
      }
      return String(j);
    }
    return j;
  };
  const me = I.useRef(!1), ye = I.useRef(!0), le = I.useRef(null), ce = I.useRef(null), [ue, ve] = I.useState(null), [D, Ae] = I.useState(-1), Te = l ? 0 : -1, _e = I.useRef(Te), Et = I.useRef(yh(y, U, ie)).current, [ge, pt] = Wi({
    controlled: fe,
    default: y,
    name: h
  }), [$e, Ge] = Wi({
    controlled: E,
    default: Et,
    name: h,
    state: "inputValue"
  }), [Ne, we] = I.useState(!1), $t = I.useCallback((Y, j, de) => {
    if (!(U ? ge.length < j.length : j !== null) && !p)
      return;
    const Be = yh(j, U, ie);
    $e !== Be && (Ge(Be), q && q(Y, Be, de));
  }, [ie, $e, U, q, Ge, p, ge]), [st, Nt] = Wi({
    controlled: pe,
    default: !1,
    name: h,
    state: "open"
  }), [un, Ft] = I.useState(!0), Bt = !U && ge != null && $e === ie(ge), yt = st && !Z, Je = yt ? R(
    z.filter((Y) => !(A && (U ? ge : [ge]).some((j) => j !== null && B(Y, j)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Bt && un ? "" : $e,
      getOptionLabel: ie
    }
  ) : [], Me = sS({
    filteredOptions: Je,
    value: ge,
    inputValue: $e
  });
  I.useEffect(() => {
    const Y = ge !== Me.value;
    Ne && !Y || M && !Y || $t(null, ge, "reset");
  }, [ge, $t, Ne, Me.value, M]);
  const cn = st && Je.length > 0 && !Z, Ht = mr((Y) => {
    Y === -1 ? le.current.focus() : ue.querySelector(`[data-tag-index="${Y}"]`).focus();
  });
  I.useEffect(() => {
    U && D > ge.length - 1 && (Ae(-1), Ht(-1));
  }, [ge, U, D, Ht]);
  function sr(Y, j) {
    if (!ce.current || Y < 0 || Y >= Je.length)
      return -1;
    let de = Y;
    for (; ; ) {
      const ke = ce.current.querySelector(`[data-option-index="${de}"]`), Be = O ? !1 : !ke || ke.disabled || ke.getAttribute("aria-disabled") === "true";
      if (ke && ke.hasAttribute("tabindex") && !Be)
        return de;
      if (j === "next" ? de = (de + 1) % Je.length : de = (de - 1 + Je.length) % Je.length, de === Y)
        return -1;
    }
  }
  const en = mr(({
    event: Y,
    index: j,
    reason: de = "auto"
  }) => {
    if (_e.current = j, j === -1 ? le.current.removeAttribute("aria-activedescendant") : le.current.setAttribute("aria-activedescendant", `${se}-option-${j}`), ee && ee(Y, j === -1 ? null : Je[j], de), !ce.current)
      return;
    const ke = ce.current.querySelector(`[role="option"].${r}-focused`);
    ke && (ke.classList.remove(`${r}-focused`), ke.classList.remove(`${r}-focusVisible`));
    let Be = ce.current;
    if (ce.current.getAttribute("role") !== "listbox" && (Be = ce.current.parentElement.querySelector('[role="listbox"]')), !Be)
      return;
    if (j === -1) {
      Be.scrollTop = 0;
      return;
    }
    const Ye = ce.current.querySelector(`[data-option-index="${j}"]`);
    if (Ye && (Ye.classList.add(`${r}-focused`), de === "keyboard" && Ye.classList.add(`${r}-focusVisible`), Be.scrollHeight > Be.clientHeight && de !== "mouse" && de !== "touch")) {
      const Rt = Ye, Ut = Be.clientHeight + Be.scrollTop, so = Rt.offsetTop + Rt.offsetHeight;
      so > Ut ? Be.scrollTop = so - Be.clientHeight : Rt.offsetTop - Rt.offsetHeight * (N ? 1.3 : 0) < Be.scrollTop && (Be.scrollTop = Rt.offsetTop - Rt.offsetHeight * (N ? 1.3 : 0));
    }
  }), xe = mr(({
    event: Y,
    diff: j,
    direction: de = "next",
    reason: ke = "auto"
  }) => {
    if (!yt)
      return;
    const Ye = sr((() => {
      const Rt = Je.length - 1;
      if (j === "reset")
        return Te;
      if (j === "start")
        return 0;
      if (j === "end")
        return Rt;
      const Ut = _e.current + j;
      return Ut < 0 ? Ut === -1 && Q ? -1 : b && _e.current !== -1 || Math.abs(j) > 1 ? 0 : Rt : Ut > Rt ? Ut === Rt + 1 && Q ? -1 : b || Math.abs(j) > 1 ? Rt : 0 : Ut;
    })(), de);
    if (en({
      index: Ye,
      reason: ke,
      event: Y
    }), a && j !== "reset")
      if (Ye === -1)
        le.current.value = $e;
      else {
        const Rt = ie(Je[Ye]);
        le.current.value = Rt, Rt.toLowerCase().indexOf($e.toLowerCase()) === 0 && $e.length > 0 && le.current.setSelectionRange($e.length, Rt.length);
      }
  }), Ue = () => {
    const Y = (j, de) => {
      const ke = j ? ie(j) : "", Be = de ? ie(de) : "";
      return ke === Be;
    };
    if (_e.current !== -1 && Me.filteredOptions && Me.filteredOptions.length !== Je.length && Me.inputValue === $e && (U ? ge.length === Me.value.length && Me.value.every((j, de) => ie(ge[de]) === ie(j)) : Y(Me.value, ge))) {
      const j = Me.filteredOptions[_e.current];
      if (j)
        return Je.findIndex((de) => ie(de) === ie(j));
    }
    return -1;
  }, Tt = I.useCallback(() => {
    if (!yt)
      return;
    const Y = Ue();
    if (Y !== -1) {
      _e.current = Y;
      return;
    }
    const j = U ? ge[0] : ge;
    if (Je.length === 0 || j == null) {
      xe({
        diff: "reset"
      });
      return;
    }
    if (ce.current) {
      if (j != null) {
        const de = Je[_e.current];
        if (U && de && ge.findIndex((Be) => B(de, Be)) !== -1)
          return;
        const ke = Je.findIndex((Be) => B(Be, j));
        ke === -1 ? xe({
          diff: "reset"
        }) : en({
          index: ke
        });
        return;
      }
      if (_e.current >= Je.length - 1) {
        en({
          index: Je.length - 1
        });
        return;
      }
      en({
        index: _e.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Je.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    U ? !1 : ge,
    A,
    xe,
    en,
    yt,
    $e,
    U
  ]), Mn = mr((Y) => {
    vs(ce, Y), Y && Tt();
  });
  process.env.NODE_ENV !== "production" && I.useEffect(() => {
    (!le.current || le.current.nodeName !== "INPUT") && (le.current && le.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${h} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${le.current} while an HTMLInputElement was expected.`, `Instead, ${h} expects an input element.`, "", h === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [h]), I.useEffect(() => {
    Tt();
  }, [Tt]);
  const tn = (Y) => {
    st || (Nt(!0), Ft(!0), ae && ae(Y));
  }, lr = (Y, j) => {
    st && (Nt(!1), re && re(Y, j));
  }, Jn = (Y, j, de, ke) => {
    if (U) {
      if (ge.length === j.length && ge.every((Be, Ye) => Be === j[Ye]))
        return;
    } else if (ge === j)
      return;
    te && te(Y, j, de, ke), pt(j);
  }, Vr = I.useRef(!1), kn = (Y, j, de = "selectOption", ke = "options") => {
    let Be = de, Ye = j;
    if (U) {
      if (Ye = Array.isArray(ge) ? ge.slice() : [], process.env.NODE_ENV !== "production") {
        const Ut = Ye.filter((so) => B(j, so));
        Ut.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${h} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ut.length} matches.`].join(`
`));
      }
      const Rt = Ye.findIndex((Ut) => B(j, Ut));
      Rt === -1 ? Ye.push(j) : ke !== "freeSolo" && (Ye.splice(Rt, 1), Be = "removeOption");
    }
    $t(Y, Ye, Be), Jn(Y, Ye, Be, {
      option: j
    }), !v && (!Y || !Y.ctrlKey && !Y.metaKey) && lr(Y, Be), (c === !0 || c === "touch" && Vr.current || c === "mouse" && !Vr.current) && le.current.blur();
  };
  function Oo(Y, j) {
    if (Y === -1)
      return -1;
    let de = Y;
    for (; ; ) {
      if (j === "next" && de === ge.length || j === "previous" && de === -1)
        return -1;
      const ke = ue.querySelector(`[data-tag-index="${de}"]`);
      if (!ke || !ke.hasAttribute("tabindex") || ke.disabled || ke.getAttribute("aria-disabled") === "true")
        de += j === "next" ? 1 : -1;
      else
        return de;
    }
  }
  const Co = (Y, j) => {
    if (!U)
      return;
    $e === "" && lr(Y, "toggleInput");
    let de = D;
    D === -1 ? $e === "" && j === "previous" && (de = ge.length - 1) : (de += j === "next" ? 1 : -1, de < 0 && (de = 0), de === ge.length && (de = -1)), de = Oo(de, j), Ae(de), Ht(de);
  }, ur = (Y) => {
    me.current = !0, Ge(""), q && q(Y, "", "clear"), Jn(Y, U ? [] : null, "clear");
  }, ui = (Y) => (j) => {
    if (Y.onKeyDown && Y.onKeyDown(j), !j.defaultMuiPrevented && (D !== -1 && !["ArrowLeft", "ArrowRight"].includes(j.key) && (Ae(-1), Ht(-1)), j.which !== 229))
      switch (j.key) {
        case "Home":
          yt && F && (j.preventDefault(), xe({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: j
          }));
          break;
        case "End":
          yt && F && (j.preventDefault(), xe({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: j
          }));
          break;
        case "PageUp":
          j.preventDefault(), xe({
            diff: -5,
            direction: "previous",
            reason: "keyboard",
            event: j
          }), tn(j);
          break;
        case "PageDown":
          j.preventDefault(), xe({
            diff: t_,
            direction: "next",
            reason: "keyboard",
            event: j
          }), tn(j);
          break;
        case "ArrowDown":
          j.preventDefault(), xe({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: j
          }), tn(j);
          break;
        case "ArrowUp":
          j.preventDefault(), xe({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: j
          }), tn(j);
          break;
        case "ArrowLeft":
          Co(j, "previous");
          break;
        case "ArrowRight":
          Co(j, "next");
          break;
        case "Enter":
          if (_e.current !== -1 && yt) {
            const de = Je[_e.current], ke = _ ? _(de) : !1;
            if (j.preventDefault(), ke)
              return;
            kn(j, de, "selectOption"), a && le.current.setSelectionRange(le.current.value.length, le.current.value.length);
          } else M && $e !== "" && Bt === !1 && (U && j.preventDefault(), kn(j, $e, "createOption", "freeSolo"));
          break;
        case "Escape":
          yt ? (j.preventDefault(), j.stopPropagation(), lr(j, "escape")) : d && ($e !== "" || U && ge.length > 0) && (j.preventDefault(), j.stopPropagation(), ur(j));
          break;
        case "Backspace":
          if (U && !Z && $e === "" && ge.length > 0) {
            const de = D === -1 ? ge.length - 1 : D, ke = ge.slice();
            ke.splice(de, 1), Jn(j, ke, "removeOption", {
              option: ge[de]
            });
          }
          break;
        case "Delete":
          if (U && !Z && $e === "" && ge.length > 0 && D !== -1) {
            const de = D, ke = ge.slice();
            ke.splice(de, 1), Jn(j, ke, "removeOption", {
              option: ge[de]
            });
          }
          break;
      }
  }, ci = (Y) => {
    we(!0), K && !me.current && tn(Y);
  }, Sr = (Y) => {
    if (n(ce)) {
      le.current.focus();
      return;
    }
    we(!1), ye.current = !0, me.current = !1, u && _e.current !== -1 && yt ? kn(Y, Je[_e.current], "blur") : u && M && $e !== "" ? kn(Y, $e, "blur", "freeSolo") : p && $t(Y, ge, "blur"), lr(Y, "blur");
  }, Or = (Y) => {
    const j = Y.target.value;
    $e !== j && (Ge(j), Ft(!1), q && q(Y, j, "input")), j === "" ? !m && !U && Jn(Y, null, "clear") : tn(Y);
  }, oo = (Y) => {
    const j = Number(Y.currentTarget.getAttribute("data-option-index"));
    _e.current !== j && en({
      event: Y,
      index: j,
      reason: "mouse"
    });
  }, io = (Y) => {
    en({
      event: Y,
      index: Number(Y.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Vr.current = !0;
  }, fi = (Y) => {
    const j = Number(Y.currentTarget.getAttribute("data-option-index"));
    kn(Y, Je[j], "selectOption"), Vr.current = !1;
  }, pi = (Y) => (j) => {
    const de = ge.slice();
    de.splice(Y, 1), Jn(j, de, "removeOption", {
      option: ge[Y]
    });
  }, di = (Y) => {
    st ? lr(Y, "toggleInput") : tn(Y);
  }, ao = (Y) => {
    Y.currentTarget.contains(Y.target) && Y.target.getAttribute("id") !== se && Y.preventDefault();
  }, qt = (Y) => {
    Y.currentTarget.contains(Y.target) && (le.current.focus(), be && ye.current && le.current.selectionEnd - le.current.selectionStart === 0 && le.current.select(), ye.current = !1);
  }, Wt = (Y) => {
    !w && ($e === "" || !st) && di(Y);
  };
  let Dn = M && $e.length > 0;
  Dn = Dn || (U ? ge.length > 0 : ge !== null);
  let _o = Je;
  if (N) {
    const Y = /* @__PURE__ */ new Map();
    let j = !1;
    _o = Je.reduce((de, ke, Be) => {
      const Ye = N(ke);
      return de.length > 0 && de[de.length - 1].group === Ye ? de[de.length - 1].options.push(ke) : (process.env.NODE_ENV !== "production" && (Y.get(Ye) && !j && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${h} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), j = !0), Y.set(Ye, !0)), de.push({
        key: Be,
        index: Be,
        group: Ye,
        options: [ke]
      })), de;
    }, []);
  }
  return w && Ne && Sr(), {
    getRootProps: (Y = {}) => ({
      ...Y,
      onKeyDown: ui(Y),
      onMouseDown: ao,
      onClick: qt
    }),
    getInputLabelProps: () => ({
      id: `${se}-label`,
      htmlFor: se
    }),
    getInputProps: () => ({
      id: se,
      value: $e,
      onBlur: Sr,
      onFocus: ci,
      onChange: Or,
      onMouseDown: Wt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": yt ? "" : null,
      "aria-autocomplete": a ? "both" : "list",
      "aria-controls": cn ? `${se}-listbox` : void 0,
      "aria-expanded": cn,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: le,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: w
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: ur
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: di
    }),
    getTagProps: ({
      index: Y
    }) => ({
      key: Y,
      "data-tag-index": Y,
      tabIndex: -1,
      ...!Z && {
        onDelete: pi(Y)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${se}-listbox`,
      "aria-labelledby": `${se}-label`,
      ref: Mn,
      onMouseDown: (Y) => {
        Y.preventDefault();
      }
    }),
    getOptionProps: ({
      index: Y,
      option: j
    }) => {
      const de = (U ? ge : [ge]).some((Be) => Be != null && B(j, Be)), ke = _ ? _(j) : !1;
      return {
        key: (C == null ? void 0 : C(j)) ?? ie(j),
        tabIndex: -1,
        role: "option",
        id: `${se}-option-${Y}`,
        onMouseMove: oo,
        onClick: fi,
        onTouchStart: io,
        "data-option-index": Y,
        "aria-disabled": ke,
        "aria-selected": de
      };
    },
    id: se,
    inputValue: $e,
    value: ge,
    dirty: Dn,
    expanded: yt && ue,
    popupOpen: yt,
    focused: Ne || D !== -1,
    anchorEl: ue,
    setAnchorEl: ve,
    focusedTag: D,
    groupedOptions: _o
  };
}
var vn = "top", Yn = "bottom", Xn = "right", bn = "left", Tc = "auto", ia = [vn, Yn, Xn, bn], ni = "start", Xi = "end", i_ = "clippingParents", em = "viewport", Mi = "popper", a_ = "reference", vh = /* @__PURE__ */ ia.reduce(function(e, n) {
  return e.concat([n + "-" + ni, n + "-" + Xi]);
}, []), tm = /* @__PURE__ */ [].concat(ia, [Tc]).reduce(function(e, n) {
  return e.concat([n, n + "-" + ni, n + "-" + Xi]);
}, []), s_ = "beforeRead", l_ = "read", u_ = "afterRead", c_ = "beforeMain", f_ = "main", p_ = "afterMain", d_ = "beforeWrite", h_ = "write", g_ = "afterWrite", m_ = [s_, l_, u_, c_, f_, p_, d_, h_, g_];
function Er(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Nn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function So(e) {
  var n = Nn(e).Element;
  return e instanceof n || e instanceof Element;
}
function Kn(e) {
  var n = Nn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function wc(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Nn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function y_(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, l = n.attributes[r] || {}, u = n.elements[r];
    !Kn(u) || !Er(u) || (Object.assign(u.style, a), Object.keys(l).forEach(function(c) {
      var p = l[c];
      p === !1 ? u.removeAttribute(c) : u.setAttribute(c, p === !0 ? "" : p);
    }));
  });
}
function v_(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var l = n.elements[a], u = n.attributes[a] || {}, c = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), p = c.reduce(function(d, h) {
        return d[h] = "", d;
      }, {});
      !Kn(l) || !Er(l) || (Object.assign(l.style, p), Object.keys(u).forEach(function(d) {
        l.removeAttribute(d);
      }));
    });
  };
}
const b_ = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: y_,
  effect: v_,
  requires: ["computeStyles"]
};
function vr(e) {
  return e.split("-")[0];
}
var To = Math.max, Os = Math.min, ri = Math.round;
function ju() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function nm() {
  return !/^((?!chrome|android).)*safari/i.test(ju());
}
function oi(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), l = 1, u = 1;
  n && Kn(e) && (l = e.offsetWidth > 0 && ri(a.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && ri(a.height) / e.offsetHeight || 1);
  var c = So(e) ? Nn(e) : window, p = c.visualViewport, d = !nm() && r, h = (a.left + (d && p ? p.offsetLeft : 0)) / l, y = (a.top + (d && p ? p.offsetTop : 0)) / u, m = a.width / l, v = a.height / u;
  return {
    width: m,
    height: v,
    top: y,
    right: h + m,
    bottom: y + v,
    left: h,
    x: h,
    y
  };
}
function Sc(e) {
  var n = oi(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function rm(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && wc(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function zr(e) {
  return Nn(e).getComputedStyle(e);
}
function x_(e) {
  return ["table", "td", "th"].indexOf(Er(e)) >= 0;
}
function ro(e) {
  return ((So(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function rl(e) {
  return Er(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (wc(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ro(e)
  );
}
function bh(e) {
  return !Kn(e) || // https://github.com/popperjs/popper-core/issues/837
  zr(e).position === "fixed" ? null : e.offsetParent;
}
function E_(e) {
  var n = /firefox/i.test(ju()), r = /Trident/i.test(ju());
  if (r && Kn(e)) {
    var a = zr(e);
    if (a.position === "fixed")
      return null;
  }
  var l = rl(e);
  for (wc(l) && (l = l.host); Kn(l) && ["html", "body"].indexOf(Er(l)) < 0; ) {
    var u = zr(l);
    if (u.transform !== "none" || u.perspective !== "none" || u.contain === "paint" || ["transform", "perspective"].indexOf(u.willChange) !== -1 || n && u.willChange === "filter" || n && u.filter && u.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
function aa(e) {
  for (var n = Nn(e), r = bh(e); r && x_(r) && zr(r).position === "static"; )
    r = bh(r);
  return r && (Er(r) === "html" || Er(r) === "body" && zr(r).position === "static") ? n : r || E_(e) || n;
}
function Oc(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vi(e, n, r) {
  return To(e, Os(n, r));
}
function T_(e, n, r) {
  var a = Vi(e, n, r);
  return a > r ? r : a;
}
function om() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function im(e) {
  return Object.assign({}, om(), e);
}
function am(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
var w_ = function(n, r) {
  return n = typeof n == "function" ? n(Object.assign({}, r.rects, {
    placement: r.placement
  })) : n, im(typeof n != "number" ? n : am(n, ia));
};
function S_(e) {
  var n, r = e.state, a = e.name, l = e.options, u = r.elements.arrow, c = r.modifiersData.popperOffsets, p = vr(r.placement), d = Oc(p), h = [bn, Xn].indexOf(p) >= 0, y = h ? "height" : "width";
  if (!(!u || !c)) {
    var m = w_(l.padding, r), v = Sc(u), w = d === "y" ? vn : bn, O = d === "y" ? Yn : Xn, b = r.rects.reference[y] + r.rects.reference[d] - c[d] - r.rects.popper[y], R = c[d] - r.rects.reference[d], A = aa(u), M = A ? d === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, _ = b / 2 - R / 2, C = m[w], T = M - v[y] - m[O], N = M / 2 - v[y] / 2 + _, F = Vi(C, N, T), V = d;
    r.modifiersData[a] = (n = {}, n[V] = F, n.centerOffset = F - N, n);
  }
}
function O_(e) {
  var n = e.state, r = e.options, a = r.element, l = a === void 0 ? "[data-popper-arrow]" : a;
  l != null && (typeof l == "string" && (l = n.elements.popper.querySelector(l), !l) || rm(n.elements.popper, l) && (n.elements.arrow = l));
}
const C_ = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: S_,
  effect: O_,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ii(e) {
  return e.split("-")[1];
}
var __ = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function R_(e, n) {
  var r = e.x, a = e.y, l = n.devicePixelRatio || 1;
  return {
    x: ri(r * l) / l || 0,
    y: ri(a * l) / l || 0
  };
}
function xh(e) {
  var n, r = e.popper, a = e.popperRect, l = e.placement, u = e.variation, c = e.offsets, p = e.position, d = e.gpuAcceleration, h = e.adaptive, y = e.roundOffsets, m = e.isFixed, v = c.x, w = v === void 0 ? 0 : v, O = c.y, b = O === void 0 ? 0 : O, R = typeof y == "function" ? y({
    x: w,
    y: b
  }) : {
    x: w,
    y: b
  };
  w = R.x, b = R.y;
  var A = c.hasOwnProperty("x"), M = c.hasOwnProperty("y"), _ = bn, C = vn, T = window;
  if (h) {
    var N = aa(r), F = "clientHeight", V = "clientWidth";
    if (N === Nn(r) && (N = ro(r), zr(N).position !== "static" && p === "absolute" && (F = "scrollHeight", V = "scrollWidth")), N = N, l === vn || (l === bn || l === Xn) && u === Xi) {
      C = Yn;
      var Q = m && N === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[F]
      );
      b -= Q - a.height, b *= d ? 1 : -1;
    }
    if (l === bn || (l === vn || l === Yn) && u === Xi) {
      _ = Xn;
      var E = m && N === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[V]
      );
      w -= E - a.width, w *= d ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: p
  }, h && __), U = y === !0 ? R_({
    x: w,
    y: b
  }, Nn(r)) : {
    x: w,
    y: b
  };
  if (w = U.x, b = U.y, d) {
    var te;
    return Object.assign({}, B, (te = {}, te[C] = M ? "0" : "", te[_] = A ? "0" : "", te.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", te));
  }
  return Object.assign({}, B, (n = {}, n[C] = M ? b + "px" : "", n[_] = A ? w + "px" : "", n.transform = "", n));
}
function P_(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, l = a === void 0 ? !0 : a, u = r.adaptive, c = u === void 0 ? !0 : u, p = r.roundOffsets, d = p === void 0 ? !0 : p, h = {
    placement: vr(n.placement),
    variation: ii(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: l,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, xh(Object.assign({}, h, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: c,
    roundOffsets: d
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, xh(Object.assign({}, h, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const I_ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: P_,
  data: {}
};
var as = {
  passive: !0
};
function A_(e) {
  var n = e.state, r = e.instance, a = e.options, l = a.scroll, u = l === void 0 ? !0 : l, c = a.resize, p = c === void 0 ? !0 : c, d = Nn(n.elements.popper), h = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return u && h.forEach(function(y) {
    y.addEventListener("scroll", r.update, as);
  }), p && d.addEventListener("resize", r.update, as), function() {
    u && h.forEach(function(y) {
      y.removeEventListener("scroll", r.update, as);
    }), p && d.removeEventListener("resize", r.update, as);
  };
}
const $_ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: A_,
  data: {}
};
var N_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function hs(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return N_[n];
  });
}
var M_ = {
  start: "end",
  end: "start"
};
function Eh(e) {
  return e.replace(/start|end/g, function(n) {
    return M_[n];
  });
}
function Cc(e) {
  var n = Nn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function _c(e) {
  return oi(ro(e)).left + Cc(e).scrollLeft;
}
function k_(e, n) {
  var r = Nn(e), a = ro(e), l = r.visualViewport, u = a.clientWidth, c = a.clientHeight, p = 0, d = 0;
  if (l) {
    u = l.width, c = l.height;
    var h = nm();
    (h || !h && n === "fixed") && (p = l.offsetLeft, d = l.offsetTop);
  }
  return {
    width: u,
    height: c,
    x: p + _c(e),
    y: d
  };
}
function D_(e) {
  var n, r = ro(e), a = Cc(e), l = (n = e.ownerDocument) == null ? void 0 : n.body, u = To(r.scrollWidth, r.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), c = To(r.scrollHeight, r.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), p = -a.scrollLeft + _c(e), d = -a.scrollTop;
  return zr(l || r).direction === "rtl" && (p += To(r.clientWidth, l ? l.clientWidth : 0) - u), {
    width: u,
    height: c,
    x: p,
    y: d
  };
}
function Rc(e) {
  var n = zr(e), r = n.overflow, a = n.overflowX, l = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + l + a);
}
function sm(e) {
  return ["html", "body", "#document"].indexOf(Er(e)) >= 0 ? e.ownerDocument.body : Kn(e) && Rc(e) ? e : sm(rl(e));
}
function ji(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = sm(e), l = a === ((r = e.ownerDocument) == null ? void 0 : r.body), u = Nn(a), c = l ? [u].concat(u.visualViewport || [], Rc(a) ? a : []) : a, p = n.concat(c);
  return l ? p : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    p.concat(ji(rl(c)))
  );
}
function Hu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function L_(e, n) {
  var r = oi(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Th(e, n, r) {
  return n === em ? Hu(k_(e, r)) : So(n) ? L_(n, r) : Hu(D_(ro(e)));
}
function F_(e) {
  var n = ji(rl(e)), r = ["absolute", "fixed"].indexOf(zr(e).position) >= 0, a = r && Kn(e) ? aa(e) : e;
  return So(a) ? n.filter(function(l) {
    return So(l) && rm(l, a) && Er(l) !== "body";
  }) : [];
}
function B_(e, n, r, a) {
  var l = n === "clippingParents" ? F_(e) : [].concat(n), u = [].concat(l, [r]), c = u[0], p = u.reduce(function(d, h) {
    var y = Th(e, h, a);
    return d.top = To(y.top, d.top), d.right = Os(y.right, d.right), d.bottom = Os(y.bottom, d.bottom), d.left = To(y.left, d.left), d;
  }, Th(e, c, a));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
function lm(e) {
  var n = e.reference, r = e.element, a = e.placement, l = a ? vr(a) : null, u = a ? ii(a) : null, c = n.x + n.width / 2 - r.width / 2, p = n.y + n.height / 2 - r.height / 2, d;
  switch (l) {
    case vn:
      d = {
        x: c,
        y: n.y - r.height
      };
      break;
    case Yn:
      d = {
        x: c,
        y: n.y + n.height
      };
      break;
    case Xn:
      d = {
        x: n.x + n.width,
        y: p
      };
      break;
    case bn:
      d = {
        x: n.x - r.width,
        y: p
      };
      break;
    default:
      d = {
        x: n.x,
        y: n.y
      };
  }
  var h = l ? Oc(l) : null;
  if (h != null) {
    var y = h === "y" ? "height" : "width";
    switch (u) {
      case ni:
        d[h] = d[h] - (n[y] / 2 - r[y] / 2);
        break;
      case Xi:
        d[h] = d[h] + (n[y] / 2 - r[y] / 2);
        break;
    }
  }
  return d;
}
function Zi(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, l = a === void 0 ? e.placement : a, u = r.strategy, c = u === void 0 ? e.strategy : u, p = r.boundary, d = p === void 0 ? i_ : p, h = r.rootBoundary, y = h === void 0 ? em : h, m = r.elementContext, v = m === void 0 ? Mi : m, w = r.altBoundary, O = w === void 0 ? !1 : w, b = r.padding, R = b === void 0 ? 0 : b, A = im(typeof R != "number" ? R : am(R, ia)), M = v === Mi ? a_ : Mi, _ = e.rects.popper, C = e.elements[O ? M : v], T = B_(So(C) ? C : C.contextElement || ro(e.elements.popper), d, y, c), N = oi(e.elements.reference), F = lm({
    reference: N,
    element: _,
    placement: l
  }), V = Hu(Object.assign({}, _, F)), Q = v === Mi ? V : N, E = {
    top: T.top - Q.top + A.top,
    bottom: Q.bottom - T.bottom + A.bottom,
    left: T.left - Q.left + A.left,
    right: Q.right - T.right + A.right
  }, B = e.modifiersData.offset;
  if (v === Mi && B) {
    var U = B[l];
    Object.keys(E).forEach(function(te) {
      var re = [Xn, Yn].indexOf(te) >= 0 ? 1 : -1, ee = [vn, Yn].indexOf(te) >= 0 ? "y" : "x";
      E[te] += U[ee] * re;
    });
  }
  return E;
}
function W_(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, l = r.boundary, u = r.rootBoundary, c = r.padding, p = r.flipVariations, d = r.allowedAutoPlacements, h = d === void 0 ? tm : d, y = ii(a), m = y ? p ? vh : vh.filter(function(O) {
    return ii(O) === y;
  }) : ia, v = m.filter(function(O) {
    return h.indexOf(O) >= 0;
  });
  v.length === 0 && (v = m);
  var w = v.reduce(function(O, b) {
    return O[b] = Zi(e, {
      placement: b,
      boundary: l,
      rootBoundary: u,
      padding: c
    })[vr(b)], O;
  }, {});
  return Object.keys(w).sort(function(O, b) {
    return w[O] - w[b];
  });
}
function U_(e) {
  if (vr(e) === Tc)
    return [];
  var n = hs(e);
  return [Eh(e), n, Eh(n)];
}
function z_(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var l = r.mainAxis, u = l === void 0 ? !0 : l, c = r.altAxis, p = c === void 0 ? !0 : c, d = r.fallbackPlacements, h = r.padding, y = r.boundary, m = r.rootBoundary, v = r.altBoundary, w = r.flipVariations, O = w === void 0 ? !0 : w, b = r.allowedAutoPlacements, R = n.options.placement, A = vr(R), M = A === R, _ = d || (M || !O ? [hs(R)] : U_(R)), C = [R].concat(_).reduce(function(se, ie) {
      return se.concat(vr(ie) === Tc ? W_(n, {
        placement: ie,
        boundary: y,
        rootBoundary: m,
        padding: h,
        flipVariations: O,
        allowedAutoPlacements: b
      }) : ie);
    }, []), T = n.rects.reference, N = n.rects.popper, F = /* @__PURE__ */ new Map(), V = !0, Q = C[0], E = 0; E < C.length; E++) {
      var B = C[E], U = vr(B), te = ii(B) === ni, re = [vn, Yn].indexOf(U) >= 0, ee = re ? "width" : "height", q = Zi(n, {
        placement: B,
        boundary: y,
        rootBoundary: m,
        altBoundary: v,
        padding: h
      }), ae = re ? te ? Xn : bn : te ? Yn : vn;
      T[ee] > N[ee] && (ae = hs(ae));
      var pe = hs(ae), K = [];
      if (u && K.push(q[U] <= 0), p && K.push(q[ae] <= 0, q[pe] <= 0), K.every(function(se) {
        return se;
      })) {
        Q = B, V = !1;
        break;
      }
      F.set(B, K);
    }
    if (V)
      for (var z = O ? 3 : 1, Z = function(ie) {
        var me = C.find(function(ye) {
          var le = F.get(ye);
          if (le)
            return le.slice(0, ie).every(function(ce) {
              return ce;
            });
        });
        if (me)
          return Q = me, "break";
      }, be = z; be > 0; be--) {
        var fe = Z(be);
        if (fe === "break") break;
      }
    n.placement !== Q && (n.modifiersData[a]._skip = !0, n.placement = Q, n.reset = !0);
  }
}
const V_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: z_,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function wh(e, n, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - n.height - r.y,
    right: e.right - n.width + r.x,
    bottom: e.bottom - n.height + r.y,
    left: e.left - n.width - r.x
  };
}
function Sh(e) {
  return [vn, Xn, Yn, bn].some(function(n) {
    return e[n] >= 0;
  });
}
function j_(e) {
  var n = e.state, r = e.name, a = n.rects.reference, l = n.rects.popper, u = n.modifiersData.preventOverflow, c = Zi(n, {
    elementContext: "reference"
  }), p = Zi(n, {
    altBoundary: !0
  }), d = wh(c, a), h = wh(p, l, u), y = Sh(d), m = Sh(h);
  n.modifiersData[r] = {
    referenceClippingOffsets: d,
    popperEscapeOffsets: h,
    isReferenceHidden: y,
    hasPopperEscaped: m
  }, n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-reference-hidden": y,
    "data-popper-escaped": m
  });
}
const H_ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: j_
};
function q_(e, n, r) {
  var a = vr(e), l = [bn, vn].indexOf(a) >= 0 ? -1 : 1, u = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, c = u[0], p = u[1];
  return c = c || 0, p = (p || 0) * l, [bn, Xn].indexOf(a) >= 0 ? {
    x: p,
    y: c
  } : {
    x: c,
    y: p
  };
}
function G_(e) {
  var n = e.state, r = e.options, a = e.name, l = r.offset, u = l === void 0 ? [0, 0] : l, c = tm.reduce(function(y, m) {
    return y[m] = q_(m, n.rects, u), y;
  }, {}), p = c[n.placement], d = p.x, h = p.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += d, n.modifiersData.popperOffsets.y += h), n.modifiersData[a] = c;
}
const K_ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: G_
};
function Y_(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = lm({
    reference: n.rects.reference,
    element: n.rects.popper,
    placement: n.placement
  });
}
const X_ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Y_,
  data: {}
};
function Z_(e) {
  return e === "x" ? "y" : "x";
}
function J_(e) {
  var n = e.state, r = e.options, a = e.name, l = r.mainAxis, u = l === void 0 ? !0 : l, c = r.altAxis, p = c === void 0 ? !1 : c, d = r.boundary, h = r.rootBoundary, y = r.altBoundary, m = r.padding, v = r.tether, w = v === void 0 ? !0 : v, O = r.tetherOffset, b = O === void 0 ? 0 : O, R = Zi(n, {
    boundary: d,
    rootBoundary: h,
    padding: m,
    altBoundary: y
  }), A = vr(n.placement), M = ii(n.placement), _ = !M, C = Oc(A), T = Z_(C), N = n.modifiersData.popperOffsets, F = n.rects.reference, V = n.rects.popper, Q = typeof b == "function" ? b(Object.assign({}, n.rects, {
    placement: n.placement
  })) : b, E = typeof Q == "number" ? {
    mainAxis: Q,
    altAxis: Q
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Q), B = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (N) {
    if (u) {
      var te, re = C === "y" ? vn : bn, ee = C === "y" ? Yn : Xn, q = C === "y" ? "height" : "width", ae = N[C], pe = ae + R[re], K = ae - R[ee], z = w ? -V[q] / 2 : 0, Z = M === ni ? F[q] : V[q], be = M === ni ? -V[q] : -F[q], fe = n.elements.arrow, se = w && fe ? Sc(fe) : {
        width: 0,
        height: 0
      }, ie = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : om(), me = ie[re], ye = ie[ee], le = Vi(0, F[q], se[q]), ce = _ ? F[q] / 2 - z - le - me - E.mainAxis : Z - le - me - E.mainAxis, ue = _ ? -F[q] / 2 + z + le + ye + E.mainAxis : be + le + ye + E.mainAxis, ve = n.elements.arrow && aa(n.elements.arrow), D = ve ? C === "y" ? ve.clientTop || 0 : ve.clientLeft || 0 : 0, Ae = (te = B == null ? void 0 : B[C]) != null ? te : 0, Te = ae + ce - Ae - D, _e = ae + ue - Ae, Et = Vi(w ? Os(pe, Te) : pe, ae, w ? To(K, _e) : K);
      N[C] = Et, U[C] = Et - ae;
    }
    if (p) {
      var ge, pt = C === "x" ? vn : bn, $e = C === "x" ? Yn : Xn, Ge = N[T], Ne = T === "y" ? "height" : "width", we = Ge + R[pt], $t = Ge - R[$e], st = [vn, bn].indexOf(A) !== -1, Nt = (ge = B == null ? void 0 : B[T]) != null ? ge : 0, un = st ? we : Ge - F[Ne] - V[Ne] - Nt + E.altAxis, Ft = st ? Ge + F[Ne] + V[Ne] - Nt - E.altAxis : $t, Bt = w && st ? T_(un, Ge, Ft) : Vi(w ? un : we, Ge, w ? Ft : $t);
      N[T] = Bt, U[T] = Bt - Ge;
    }
    n.modifiersData[a] = U;
  }
}
const Q_ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: J_,
  requiresIfExists: ["offset"]
};
function eR(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tR(e) {
  return e === Nn(e) || !Kn(e) ? Cc(e) : eR(e);
}
function nR(e) {
  var n = e.getBoundingClientRect(), r = ri(n.width) / e.offsetWidth || 1, a = ri(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function rR(e, n, r) {
  r === void 0 && (r = !1);
  var a = Kn(n), l = Kn(n) && nR(n), u = ro(n), c = oi(e, l, r), p = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Er(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Rc(u)) && (p = tR(n)), Kn(n) ? (d = oi(n, !0), d.x += n.clientLeft, d.y += n.clientTop) : u && (d.x = _c(u))), {
    x: c.left + p.scrollLeft - d.x,
    y: c.top + p.scrollTop - d.y,
    width: c.width,
    height: c.height
  };
}
function oR(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(u) {
    n.set(u.name, u);
  });
  function l(u) {
    r.add(u.name);
    var c = [].concat(u.requires || [], u.requiresIfExists || []);
    c.forEach(function(p) {
      if (!r.has(p)) {
        var d = n.get(p);
        d && l(d);
      }
    }), a.push(u);
  }
  return e.forEach(function(u) {
    r.has(u.name) || l(u);
  }), a;
}
function iR(e) {
  var n = oR(e);
  return m_.reduce(function(r, a) {
    return r.concat(n.filter(function(l) {
      return l.phase === a;
    }));
  }, []);
}
function aR(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function sR(e) {
  var n = e.reduce(function(r, a) {
    var l = r[a.name];
    return r[a.name] = l ? Object.assign({}, l, a, {
      options: Object.assign({}, l.options, a.options),
      data: Object.assign({}, l.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var Oh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ch() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function lR(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, l = n.defaultOptions, u = l === void 0 ? Oh : l;
  return function(p, d, h) {
    h === void 0 && (h = u);
    var y = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Oh, u),
      modifiersData: {},
      elements: {
        reference: p,
        popper: d
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, w = {
      state: y,
      setOptions: function(A) {
        var M = typeof A == "function" ? A(y.options) : A;
        b(), y.options = Object.assign({}, u, y.options, M), y.scrollParents = {
          reference: So(p) ? ji(p) : p.contextElement ? ji(p.contextElement) : [],
          popper: ji(d)
        };
        var _ = iR(sR([].concat(a, y.options.modifiers)));
        return y.orderedModifiers = _.filter(function(C) {
          return C.enabled;
        }), O(), w.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var A = y.elements, M = A.reference, _ = A.popper;
          if (Ch(M, _)) {
            y.rects = {
              reference: rR(M, aa(_), y.options.strategy === "fixed"),
              popper: Sc(_)
            }, y.reset = !1, y.placement = y.options.placement, y.orderedModifiers.forEach(function(E) {
              return y.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var C = 0; C < y.orderedModifiers.length; C++) {
              if (y.reset === !0) {
                y.reset = !1, C = -1;
                continue;
              }
              var T = y.orderedModifiers[C], N = T.fn, F = T.options, V = F === void 0 ? {} : F, Q = T.name;
              typeof N == "function" && (y = N({
                state: y,
                options: V,
                name: Q,
                instance: w
              }) || y);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: aR(function() {
        return new Promise(function(R) {
          w.forceUpdate(), R(y);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Ch(p, d))
      return w;
    w.setOptions(h).then(function(R) {
      !v && h.onFirstUpdate && h.onFirstUpdate(R);
    });
    function O() {
      y.orderedModifiers.forEach(function(R) {
        var A = R.name, M = R.options, _ = M === void 0 ? {} : M, C = R.effect;
        if (typeof C == "function") {
          var T = C({
            state: y,
            name: A,
            instance: w,
            options: _
          }), N = function() {
          };
          m.push(T || N);
        }
      });
    }
    function b() {
      m.forEach(function(R) {
        return R();
      }), m = [];
    }
    return w;
  };
}
var uR = [$_, X_, I_, b_, K_, V_, Q_, C_, H_], cR = /* @__PURE__ */ lR({
  defaultModifiers: uR
});
function fR(e) {
  return mt("MuiPopper", e);
}
xt("MuiPopper", ["root"]);
function pR(e, n) {
  if (n === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Cs(e) {
  return typeof e == "function" ? e() : e;
}
function ol(e) {
  return e.nodeType !== void 0;
}
function dR(e) {
  return !ol(e);
}
const hR = (e) => {
  const {
    classes: n
  } = e;
  return bt({
    root: ["root"]
  }, fR, n);
}, gR = {}, mR = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const {
    anchorEl: a,
    children: l,
    direction: u,
    disablePortal: c,
    modifiers: p,
    open: d,
    placement: h,
    popperOptions: y,
    popperRef: m,
    slotProps: v = {},
    slots: w = {},
    TransitionProps: O,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...R
  } = n, A = I.useRef(null), M = Qt(A, r), _ = I.useRef(null), C = Qt(_, m), T = I.useRef(C);
  Br(() => {
    T.current = C;
  }, [C]), I.useImperativeHandle(m, () => _.current, []);
  const N = pR(h, u), [F, V] = I.useState(N), [Q, E] = I.useState(Cs(a));
  I.useEffect(() => {
    _.current && _.current.forceUpdate();
  }), I.useEffect(() => {
    a && E(Cs(a));
  }, [a]), Br(() => {
    if (!Q || !d)
      return;
    const ee = (pe) => {
      V(pe.placement);
    };
    if (process.env.NODE_ENV !== "production" && Q && ol(Q) && Q.nodeType === 1) {
      const pe = Q.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && pe.top === 0 && pe.left === 0 && pe.right === 0 && pe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let q = [{
      name: "preventOverflow",
      options: {
        altBoundary: c
      }
    }, {
      name: "flip",
      options: {
        altBoundary: c
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: pe
      }) => {
        ee(pe);
      }
    }];
    p != null && (q = q.concat(p)), y && y.modifiers != null && (q = q.concat(y.modifiers));
    const ae = cR(Q, A.current, {
      placement: N,
      ...y,
      modifiers: q
    });
    return T.current(ae), () => {
      ae.destroy(), T.current(null);
    };
  }, [Q, c, p, d, y, N]);
  const B = {
    placement: F
  };
  O !== null && (B.TransitionProps = O);
  const U = hR(n), te = w.root ?? "div", re = vg({
    elementType: te,
    externalSlotProps: v.root,
    externalForwardedProps: R,
    additionalProps: {
      role: "tooltip",
      ref: M
    },
    ownerState: n,
    className: U.root
  });
  return /* @__PURE__ */ oe(te, {
    ...re,
    children: typeof l == "function" ? l(B) : l
  });
}), um = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const {
    anchorEl: a,
    children: l,
    container: u,
    direction: c = "ltr",
    disablePortal: p = !1,
    keepMounted: d = !1,
    modifiers: h,
    open: y,
    placement: m = "bottom",
    popperOptions: v = gR,
    popperRef: w,
    style: O,
    transition: b = !1,
    slotProps: R = {},
    slots: A = {},
    ...M
  } = n, [_, C] = I.useState(!0), T = () => {
    C(!1);
  }, N = () => {
    C(!0);
  };
  if (!d && !y && (!b || _))
    return null;
  let F;
  if (u)
    F = u;
  else if (a) {
    const E = Cs(a);
    F = E && ol(E) ? $n(E).body : $n(null).body;
  }
  const V = !y && d && (!b || _) ? "none" : void 0, Q = b ? {
    in: y,
    onEnter: T,
    onExited: N
  } : void 0;
  return /* @__PURE__ */ oe(Yi, {
    disablePortal: p,
    container: F,
    children: /* @__PURE__ */ oe(mR, {
      anchorEl: a,
      direction: c,
      disablePortal: p,
      modifiers: h,
      ref: r,
      open: b ? !_ : y,
      placement: m,
      popperOptions: v,
      popperRef: w,
      slotProps: R,
      slots: A,
      ...M,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: V,
        ...O
      },
      TransitionProps: Q,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (um.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: xr(i.oneOfType([Wr, i.object, i.func]), (e) => {
    if (e.open) {
      const n = Cs(e.anchorEl);
      if (n && ol(n) && n.nodeType === 1) {
        const r = n.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!n || typeof n.getBoundingClientRect != "function" || dR(n) && n.contextElement != null && n.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: i.oneOfType([i.node, i.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Wr, i.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: i.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: i.arrayOf(i.shape({
    data: i.object,
    effect: i.func,
    enabled: i.bool,
    fn: i.func,
    name: i.any,
    options: i.object,
    phase: i.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: i.arrayOf(i.string),
    requiresIfExists: i.arrayOf(i.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: i.shape({
    modifiers: i.array,
    onFirstUpdate: i.func,
    placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: i.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ar,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: i.bool
});
const yR = Oe(um, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({}), Pc = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = bg(), l = St({
    props: n,
    name: "MuiPopper"
  }), {
    anchorEl: u,
    component: c,
    components: p,
    componentsProps: d,
    container: h,
    disablePortal: y,
    keepMounted: m,
    modifiers: v,
    open: w,
    placement: O,
    popperOptions: b,
    popperRef: R,
    transition: A,
    slots: M,
    slotProps: _,
    ...C
  } = l, T = (M == null ? void 0 : M.root) ?? (p == null ? void 0 : p.Root), N = {
    anchorEl: u,
    container: h,
    disablePortal: y,
    keepMounted: m,
    modifiers: v,
    open: w,
    placement: O,
    popperOptions: b,
    popperRef: R,
    transition: A,
    ...C
  };
  return /* @__PURE__ */ oe(yR, {
    as: c,
    direction: a ? "rtl" : "ltr",
    slots: {
      root: T
    },
    slotProps: _ ?? d,
    ...N,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (Pc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: i.oneOfType([Wr, i.object, i.func]),
  /**
   * Popper render function or node.
   */
  children: i.oneOfType([i.node, i.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: i.shape({
    Root: i.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: i.oneOfType([Wr, i.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: i.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: i.arrayOf(i.shape({
    data: i.object,
    effect: i.func,
    enabled: i.bool,
    fn: i.func,
    name: i.any,
    options: i.object,
    phase: i.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: i.arrayOf(i.string),
    requiresIfExists: i.arrayOf(i.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: i.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: i.shape({
    modifiers: i.array,
    onFirstUpdate: i.func,
    placement: i.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: i.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ar,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: i.shape({
    root: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: i.shape({
    root: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: i.bool
});
function vR(e) {
  return mt("MuiListSubheader", e);
}
xt("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const bR = (e) => {
  const {
    classes: n,
    color: r,
    disableGutters: a,
    inset: l,
    disableSticky: u
  } = e, c = {
    root: ["root", r !== "default" && `color${Se(r)}`, !a && "gutters", l && "inset", !u && "sticky"]
  };
  return bt(c, vR, n);
}, xR = Oe("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, r.color !== "default" && n[`color${Se(r.color)}`], !r.disableGutters && n.gutters, r.inset && n.inset, !r.disableSticky && n.sticky];
  }
})(ft(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: n
    }) => !n.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: n
    }) => n.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: n
    }) => !n.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), _s = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiListSubheader"
  }), {
    className: l,
    color: u = "default",
    component: c = "li",
    disableGutters: p = !1,
    disableSticky: d = !1,
    inset: h = !1,
    ...y
  } = a, m = {
    ...a,
    color: u,
    component: c,
    disableGutters: p,
    disableSticky: d,
    inset: h
  }, v = bR(m);
  return /* @__PURE__ */ oe(xR, {
    as: c,
    className: Le(v.root, l),
    ref: r,
    ownerState: m,
    ...y
  });
});
_s && (_s.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (_s.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: i.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: i.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: i.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
class Rs {
  constructor() {
    Pi(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Rs();
  }
  static use() {
    const n = ug(Rs.create).current, [r, a] = I.useState(!1);
    return n.shouldMount = r, n.setShouldMount = a, I.useEffect(n.mountEffect, [r]), n;
  }
  mount() {
    return this.mounted || (this.mounted = TR(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...n) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...n);
    });
  }
  stop(...n) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...n);
    });
  }
  pulsate(...n) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...n);
    });
  }
}
function ER() {
  return Rs.use();
}
function TR() {
  let e, n;
  const r = new Promise((a, l) => {
    e = a, n = l;
  });
  return r.resolve = e, r.reject = n, r;
}
function cm(e) {
  const {
    className: n,
    classes: r,
    pulsate: a = !1,
    rippleX: l,
    rippleY: u,
    rippleSize: c,
    in: p,
    onExited: d,
    timeout: h
  } = e, [y, m] = I.useState(!1), v = Le(n, r.ripple, r.rippleVisible, a && r.ripplePulsate), w = {
    width: c,
    height: c,
    top: -(c / 2) + u,
    left: -(c / 2) + l
  }, O = Le(r.child, y && r.childLeaving, a && r.childPulsate);
  return !p && !y && m(!0), I.useEffect(() => {
    if (!p && d != null) {
      const b = setTimeout(d, h);
      return () => {
        clearTimeout(b);
      };
    }
  }, [d, p, h]), /* @__PURE__ */ oe("span", {
    className: v,
    style: w,
    children: /* @__PURE__ */ oe("span", {
      className: O
    })
  });
}
process.env.NODE_ENV !== "production" && (cm.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object.isRequired,
  className: i.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: i.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: i.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: i.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: i.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: i.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: i.number,
  /**
   * exit delay
   */
  timeout: i.number.isRequired
});
const qn = xt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), qu = 550, wR = 80, SR = na`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, OR = na`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, CR = na`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, _R = Oe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), RR = Oe(cm, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${qn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${SR};
    animation-duration: ${qu}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${qn.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${qn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${qn.childLeaving} {
    opacity: 0;
    animation-name: ${OR};
    animation-duration: ${qu}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${qn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${CR};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, fm = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiTouchRipple"
  }), {
    center: l = !1,
    classes: u = {},
    className: c,
    ...p
  } = a, [d, h] = I.useState([]), y = I.useRef(0), m = I.useRef(null);
  I.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [d]);
  const v = I.useRef(!1), w = cg(), O = I.useRef(null), b = I.useRef(null), R = I.useCallback((C) => {
    const {
      pulsate: T,
      rippleX: N,
      rippleY: F,
      rippleSize: V,
      cb: Q
    } = C;
    h((E) => [...E, /* @__PURE__ */ oe(RR, {
      classes: {
        ripple: Le(u.ripple, qn.ripple),
        rippleVisible: Le(u.rippleVisible, qn.rippleVisible),
        ripplePulsate: Le(u.ripplePulsate, qn.ripplePulsate),
        child: Le(u.child, qn.child),
        childLeaving: Le(u.childLeaving, qn.childLeaving),
        childPulsate: Le(u.childPulsate, qn.childPulsate)
      },
      timeout: qu,
      pulsate: T,
      rippleX: N,
      rippleY: F,
      rippleSize: V
    }, y.current)]), y.current += 1, m.current = Q;
  }, [u]), A = I.useCallback((C = {}, T = {}, N = () => {
  }) => {
    const {
      pulsate: F = !1,
      center: V = l || T.pulsate,
      fakeElement: Q = !1
      // For test purposes
    } = T;
    if ((C == null ? void 0 : C.type) === "mousedown" && v.current) {
      v.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (v.current = !0);
    const E = Q ? null : b.current, B = E ? E.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let U, te, re;
    if (V || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      U = Math.round(B.width / 2), te = Math.round(B.height / 2);
    else {
      const {
        clientX: ee,
        clientY: q
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      U = Math.round(ee - B.left), te = Math.round(q - B.top);
    }
    if (V)
      re = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), re % 2 === 0 && (re += 1);
    else {
      const ee = Math.max(Math.abs((E ? E.clientWidth : 0) - U), U) * 2 + 2, q = Math.max(Math.abs((E ? E.clientHeight : 0) - te), te) * 2 + 2;
      re = Math.sqrt(ee ** 2 + q ** 2);
    }
    C != null && C.touches ? O.current === null && (O.current = () => {
      R({
        pulsate: F,
        rippleX: U,
        rippleY: te,
        rippleSize: re,
        cb: N
      });
    }, w.start(wR, () => {
      O.current && (O.current(), O.current = null);
    })) : R({
      pulsate: F,
      rippleX: U,
      rippleY: te,
      rippleSize: re,
      cb: N
    });
  }, [l, R, w]), M = I.useCallback(() => {
    A({}, {
      pulsate: !0
    });
  }, [A]), _ = I.useCallback((C, T) => {
    if (w.clear(), (C == null ? void 0 : C.type) === "touchend" && O.current) {
      O.current(), O.current = null, w.start(0, () => {
        _(C, T);
      });
      return;
    }
    O.current = null, h((N) => N.length > 0 ? N.slice(1) : N), m.current = T;
  }, [w]);
  return I.useImperativeHandle(r, () => ({
    pulsate: M,
    start: A,
    stop: _
  }), [M, A, _]), /* @__PURE__ */ oe(_R, {
    className: Le(qn.root, u.root, c),
    ref: b,
    ...p,
    children: /* @__PURE__ */ oe(vc, {
      component: null,
      exit: !0,
      children: d
    })
  });
});
process.env.NODE_ENV !== "production" && (fm.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: i.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string
});
function PR(e) {
  return mt("MuiButtonBase", e);
}
const IR = xt("MuiButtonBase", ["root", "disabled", "focusVisible"]), AR = (e) => {
  const {
    disabled: n,
    focusVisible: r,
    focusVisibleClassName: a,
    classes: l
  } = e, c = bt({
    root: ["root", n && "disabled", r && "focusVisible"]
  }, PR, l);
  return r && a && (c.root += ` ${a}`), c;
}, $R = Oe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${IR.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ps = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiButtonBase"
  }), {
    action: l,
    centerRipple: u = !1,
    children: c,
    className: p,
    component: d = "button",
    disabled: h = !1,
    disableRipple: y = !1,
    disableTouchRipple: m = !1,
    focusRipple: v = !1,
    focusVisibleClassName: w,
    LinkComponent: O = "a",
    onBlur: b,
    onClick: R,
    onContextMenu: A,
    onDragLeave: M,
    onFocus: _,
    onFocusVisible: C,
    onKeyDown: T,
    onKeyUp: N,
    onMouseDown: F,
    onMouseLeave: V,
    onMouseUp: Q,
    onTouchEnd: E,
    onTouchMove: B,
    onTouchStart: U,
    tabIndex: te = 0,
    TouchRippleProps: re,
    touchRippleRef: ee,
    type: q,
    ...ae
  } = a, pe = I.useRef(null), K = ER(), z = Qt(K.ref, ee), [Z, be] = I.useState(!1);
  h && Z && be(!1), I.useImperativeHandle(l, () => ({
    focusVisible: () => {
      be(!0), pe.current.focus();
    }
  }), []);
  const fe = K.shouldMount && !y && !h;
  I.useEffect(() => {
    Z && v && !y && K.pulsate();
  }, [y, v, Z, K]);
  const se = Dr(K, "start", F, m), ie = Dr(K, "stop", A, m), me = Dr(K, "stop", M, m), ye = Dr(K, "stop", Q, m), le = Dr(K, "stop", (we) => {
    Z && we.preventDefault(), V && V(we);
  }, m), ce = Dr(K, "start", U, m), ue = Dr(K, "stop", E, m), ve = Dr(K, "stop", B, m), D = Dr(K, "stop", (we) => {
    Ud(we.target) || be(!1), b && b(we);
  }, !1), Ae = mr((we) => {
    pe.current || (pe.current = we.currentTarget), Ud(we.target) && (be(!0), C && C(we)), _ && _(we);
  }), Te = () => {
    const we = pe.current;
    return d && d !== "button" && !(we.tagName === "A" && we.href);
  }, _e = mr((we) => {
    v && !we.repeat && Z && we.key === " " && K.stop(we, () => {
      K.start(we);
    }), we.target === we.currentTarget && Te() && we.key === " " && we.preventDefault(), T && T(we), we.target === we.currentTarget && Te() && we.key === "Enter" && !h && (we.preventDefault(), R && R(we));
  }), Et = mr((we) => {
    v && we.key === " " && Z && !we.defaultPrevented && K.stop(we, () => {
      K.pulsate(we);
    }), N && N(we), R && we.target === we.currentTarget && Te() && we.key === " " && !we.defaultPrevented && R(we);
  });
  let ge = d;
  ge === "button" && (ae.href || ae.to) && (ge = O);
  const pt = {};
  ge === "button" ? (pt.type = q === void 0 ? "button" : q, pt.disabled = h) : (!ae.href && !ae.to && (pt.role = "button"), h && (pt["aria-disabled"] = h));
  const $e = Qt(r, pe), Ge = {
    ...a,
    centerRipple: u,
    component: d,
    disabled: h,
    disableRipple: y,
    disableTouchRipple: m,
    focusRipple: v,
    tabIndex: te,
    focusVisible: Z
  }, Ne = AR(Ge);
  return /* @__PURE__ */ Dt($R, {
    as: ge,
    className: Le(Ne.root, p),
    ownerState: Ge,
    onBlur: D,
    onClick: R,
    onContextMenu: ie,
    onFocus: Ae,
    onKeyDown: _e,
    onKeyUp: Et,
    onMouseDown: se,
    onMouseLeave: le,
    onMouseUp: ye,
    onDragLeave: me,
    onTouchEnd: ue,
    onTouchMove: ve,
    onTouchStart: ce,
    ref: $e,
    tabIndex: h ? -1 : te,
    type: q,
    ...pt,
    ...ae,
    children: [c, fe ? /* @__PURE__ */ oe(fm, {
      ref: z,
      center: u,
      ...re
    }) : null]
  });
});
function Dr(e, n, r, a = !1) {
  return mr((l) => (r && r(l), a || e[n](l), !0));
}
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ar,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: i.bool,
  /**
   * The content of the component.
   */
  children: i.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: cc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: i.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: i.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: i.string,
  /**
   * @ignore
   */
  href: i.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: i.elementType,
  /**
   * @ignore
   */
  onBlur: i.func,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * @ignore
   */
  onContextMenu: i.func,
  /**
   * @ignore
   */
  onDragLeave: i.func,
  /**
   * @ignore
   */
  onFocus: i.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * @ignore
   */
  onMouseDown: i.func,
  /**
   * @ignore
   */
  onMouseLeave: i.func,
  /**
   * @ignore
   */
  onMouseUp: i.func,
  /**
   * @ignore
   */
  onTouchEnd: i.func,
  /**
   * @ignore
   */
  onTouchMove: i.func,
  /**
   * @ignore
   */
  onTouchStart: i.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @default 0
   */
  tabIndex: i.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: i.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: i.oneOfType([i.func, i.shape({
    current: i.shape({
      pulsate: i.func.isRequired,
      start: i.func.isRequired,
      stop: i.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: i.oneOfType([i.oneOf(["button", "reset", "submit"]), i.string])
});
function NR(e) {
  return mt("MuiCircularProgress", e);
}
xt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Qr = 44, Gu = na`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ku = na`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, MR = typeof Gu != "string" ? ic`
        animation: ${Gu} 1.4s linear infinite;
      ` : null, kR = typeof Ku != "string" ? ic`
        animation: ${Ku} 1.4s ease-in-out infinite;
      ` : null, DR = (e) => {
  const {
    classes: n,
    variant: r,
    color: a,
    disableShrink: l
  } = e, u = {
    root: ["root", r, `color${Se(a)}`],
    svg: ["svg"],
    circle: ["circle", `circle${Se(r)}`, l && "circleDisableShrink"]
  };
  return bt(u, NR, n);
}, LR = Oe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, n[r.variant], n[`color${Se(r.color)}`]];
  }
})(ft(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: MR || {
      animation: `${Gu} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ir()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  }))]
}))), FR = Oe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, n) => n.svg
})({
  display: "block"
  // Keeps the progress centered
}), BR = Oe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.circle, n[`circle${Se(r.variant)}`], r.disableShrink && n.circleDisableShrink];
  }
})(ft(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: n
    }) => n.variant === "indeterminate" && !n.disableShrink,
    style: kR || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ku} 1.4s ease-in-out infinite`
    }
  }]
}))), pm = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiCircularProgress"
  }), {
    className: l,
    color: u = "primary",
    disableShrink: c = !1,
    size: p = 40,
    style: d,
    thickness: h = 3.6,
    value: y = 0,
    variant: m = "indeterminate",
    ...v
  } = a, w = {
    ...a,
    color: u,
    disableShrink: c,
    size: p,
    thickness: h,
    value: y,
    variant: m
  }, O = DR(w), b = {}, R = {}, A = {};
  if (m === "determinate") {
    const M = 2 * Math.PI * ((Qr - h) / 2);
    b.strokeDasharray = M.toFixed(3), A["aria-valuenow"] = Math.round(y), b.strokeDashoffset = `${((100 - y) / 100 * M).toFixed(3)}px`, R.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ oe(LR, {
    className: Le(O.root, l),
    style: {
      width: p,
      height: p,
      ...R,
      ...d
    },
    ownerState: w,
    ref: r,
    role: "progressbar",
    ...A,
    ...v,
    children: /* @__PURE__ */ oe(FR, {
      className: O.svg,
      ownerState: w,
      viewBox: `${Qr / 2} ${Qr / 2} ${Qr} ${Qr}`,
      children: /* @__PURE__ */ oe(BR, {
        className: O.circle,
        style: b,
        ownerState: w,
        cx: Qr,
        cy: Qr,
        r: (Qr - h) / 2,
        fill: "none",
        strokeWidth: h
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (pm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: i.oneOfType([i.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: xr(i.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: i.oneOfType([i.number, i.string]),
  /**
   * @ignore
   */
  style: i.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: i.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: i.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: i.oneOf(["determinate", "indeterminate"])
});
function WR(e) {
  return mt("MuiIconButton", e);
}
const _h = xt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), UR = (e) => {
  const {
    classes: n,
    disabled: r,
    color: a,
    edge: l,
    size: u,
    loading: c
  } = e, p = {
    root: ["root", c && "loading", r && "disabled", a !== "default" && `color${Se(a)}`, l && `edge${Se(l)}`, `size${Se(u)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return bt(p, WR, n);
}, zR = Oe(Ps, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.root, r.loading && n.loading, r.color !== "default" && n[`color${Se(r.color)}`], r.edge && n[`edge${Se(r.edge)}`], n[`size${Se(r.size)}`]];
  }
})(ft(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (n) => !n.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Kt(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), ft(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(ir()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  })), ...Object.entries(e.palette).filter(ir()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Kt((e.vars || e).palette[n].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${_h.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${_h.loading}`]: {
    color: "transparent"
  }
}))), VR = Oe("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, n) => n.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Ic = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiIconButton"
  }), {
    edge: l = !1,
    children: u,
    className: c,
    color: p = "default",
    disabled: d = !1,
    disableFocusRipple: h = !1,
    size: y = "medium",
    id: m,
    loading: v = null,
    loadingIndicator: w,
    ...O
  } = a, b = Is(m), R = w ?? /* @__PURE__ */ oe(pm, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), A = {
    ...a,
    edge: l,
    color: p,
    disabled: d,
    disableFocusRipple: h,
    loading: v,
    loadingIndicator: R,
    size: y
  }, M = UR(A);
  return /* @__PURE__ */ Dt(zR, {
    id: v ? b : m,
    className: Le(M.root, c),
    centerRipple: !0,
    focusRipple: !h,
    disabled: d || v,
    ref: r,
    ...O,
    ownerState: A,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ oe("span", {
      className: M.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ oe(VR, {
        className: M.loadingIndicator,
        ownerState: A,
        children: v && R
      })
    }), u]
  });
});
process.env.NODE_ENV !== "production" && (Ic.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: xr(i.node, (e) => I.Children.toArray(e.children).some((r) => /* @__PURE__ */ I.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: i.oneOfType([i.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: i.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: i.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: i.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: i.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: i.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: i.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium", "large"]), i.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object])
});
const jR = Qs(/* @__PURE__ */ oe("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function HR(e) {
  return mt("MuiChip", e);
}
const qe = xt("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), qR = (e) => {
  const {
    classes: n,
    disabled: r,
    size: a,
    color: l,
    iconColor: u,
    onDelete: c,
    clickable: p,
    variant: d
  } = e, h = {
    root: ["root", d, r && "disabled", `size${Se(a)}`, `color${Se(l)}`, p && "clickable", p && `clickableColor${Se(l)}`, c && "deletable", c && `deletableColor${Se(l)}`, `${d}${Se(l)}`],
    label: ["label", `label${Se(a)}`],
    avatar: ["avatar", `avatar${Se(a)}`, `avatarColor${Se(l)}`],
    icon: ["icon", `icon${Se(a)}`, `iconColor${Se(u)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${Se(a)}`, `deleteIconColor${Se(l)}`, `deleteIcon${Se(d)}Color${Se(l)}`]
  };
  return bt(h, HR, n);
}, GR = Oe("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e, {
      color: a,
      iconColor: l,
      clickable: u,
      onDelete: c,
      size: p,
      variant: d
    } = r;
    return [{
      [`& .${qe.avatar}`]: n.avatar
    }, {
      [`& .${qe.avatar}`]: n[`avatar${Se(p)}`]
    }, {
      [`& .${qe.avatar}`]: n[`avatarColor${Se(a)}`]
    }, {
      [`& .${qe.icon}`]: n.icon
    }, {
      [`& .${qe.icon}`]: n[`icon${Se(p)}`]
    }, {
      [`& .${qe.icon}`]: n[`iconColor${Se(l)}`]
    }, {
      [`& .${qe.deleteIcon}`]: n.deleteIcon
    }, {
      [`& .${qe.deleteIcon}`]: n[`deleteIcon${Se(p)}`]
    }, {
      [`& .${qe.deleteIcon}`]: n[`deleteIconColor${Se(a)}`]
    }, {
      [`& .${qe.deleteIcon}`]: n[`deleteIcon${Se(d)}Color${Se(a)}`]
    }, n.root, n[`size${Se(p)}`], n[`color${Se(a)}`], u && n.clickable, u && a !== "default" && n[`clickableColor${Se(a)})`], c && n.deletable, c && a !== "default" && n[`deletableColor${Se(a)}`], n[d], n[`${d}${Se(a)}`]];
  }
})(ft(({
  theme: e
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${qe.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${qe.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${qe.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${qe.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${qe.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${qe.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${qe.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Kt(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Kt(e.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${qe.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${qe.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(ir(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${qe.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].contrastTextChannel} / 0.7)` : Kt(e.palette[r].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].contrastText
          }
        }
      }
    })), {
      props: (r) => r.iconColor === r.color,
      style: {
        [`& .${qe.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : n
        }
      }
    }, {
      props: (r) => r.iconColor === r.color && r.color !== "default",
      style: {
        [`& .${qe.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${qe.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Kt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(e.palette).filter(ir(["dark"])).map(([r]) => ({
      props: {
        color: r,
        onDelete: !0
      },
      style: {
        [`&.${qe.focusVisible}`]: {
          background: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Kt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
        },
        [`&.${qe.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Kt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(ir(["dark"])).map(([r]) => ({
      props: {
        color: r,
        clickable: !0
      },
      style: {
        [`&:hover, &.${qe.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${qe.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${qe.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${qe.avatar}`]: {
          marginLeft: 4
        },
        [`& .${qe.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${qe.icon}`]: {
          marginLeft: 4
        },
        [`& .${qe.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${qe.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${qe.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(ir()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Kt(e.palette[r].main, 0.7)}`,
        [`&.${qe.clickable}:hover`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Kt(e.palette[r].main, e.palette.action.hoverOpacity)
        },
        [`&.${qe.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Kt(e.palette[r].main, e.palette.action.focusOpacity)
        },
        [`& .${qe.deleteIcon}`]: {
          color: e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.7)` : Kt(e.palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), KR = Oe("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e, {
      size: a
    } = r;
    return [n.label, n[`label${Se(a)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Rh(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const dm = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiChip"
  }), {
    avatar: l,
    className: u,
    clickable: c,
    color: p = "default",
    component: d,
    deleteIcon: h,
    disabled: y = !1,
    icon: m,
    label: v,
    onClick: w,
    onDelete: O,
    onKeyDown: b,
    onKeyUp: R,
    size: A = "medium",
    variant: M = "filled",
    tabIndex: _,
    skipFocusWhenDisabled: C = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...T
  } = a, N = I.useRef(null), F = Qt(N, r), V = (K) => {
    K.stopPropagation(), O && O(K);
  }, Q = (K) => {
    K.currentTarget === K.target && Rh(K) && K.preventDefault(), b && b(K);
  }, E = (K) => {
    K.currentTarget === K.target && O && Rh(K) && O(K), R && R(K);
  }, B = c !== !1 && w ? !0 : c, U = B || O ? Ps : d || "div", te = {
    ...a,
    component: U,
    disabled: y,
    size: A,
    color: p,
    iconColor: /* @__PURE__ */ I.isValidElement(m) && m.props.color || p,
    onDelete: !!O,
    clickable: B,
    variant: M
  }, re = qR(te), ee = U === Ps ? {
    component: d || "div",
    focusVisibleClassName: re.focusVisible,
    ...O && {
      disableRipple: !0
    }
  } : {};
  let q = null;
  O && (q = h && /* @__PURE__ */ I.isValidElement(h) ? /* @__PURE__ */ I.cloneElement(h, {
    className: Le(h.props.className, re.deleteIcon),
    onClick: V
  }) : /* @__PURE__ */ oe(jR, {
    className: Le(re.deleteIcon),
    onClick: V
  }));
  let ae = null;
  l && /* @__PURE__ */ I.isValidElement(l) && (ae = /* @__PURE__ */ I.cloneElement(l, {
    className: Le(re.avatar, l.props.className)
  }));
  let pe = null;
  return m && /* @__PURE__ */ I.isValidElement(m) && (pe = /* @__PURE__ */ I.cloneElement(m, {
    className: Le(re.icon, m.props.className)
  })), process.env.NODE_ENV !== "production" && ae && pe && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ Dt(GR, {
    as: U,
    className: Le(re.root, u),
    disabled: B && y ? !0 : void 0,
    onClick: w,
    onKeyDown: Q,
    onKeyUp: E,
    ref: F,
    tabIndex: C && y ? -1 : _,
    ownerState: te,
    ...ee,
    ...T,
    children: [ae || pe, /* @__PURE__ */ oe(KR, {
      className: Le(re.label),
      ownerState: te,
      children: v
    }), q]
  });
});
process.env.NODE_ENV !== "production" && (dm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: i.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: oS,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: i.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: i.oneOfType([i.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), i.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: i.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: i.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * Icon element.
   */
  icon: i.element,
  /**
   * The content of the component.
   */
  label: i.node,
  /**
   * @ignore
   */
  onClick: i.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * @ignore
   */
  onKeyUp: i.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["medium", "small"]), i.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: i.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * @ignore
   */
  tabIndex: i.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: i.oneOfType([i.oneOf(["filled", "outlined"]), i.string])
});
const YR = Qs(/* @__PURE__ */ oe("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function XR(e) {
  return mt("MuiAutocomplete", e);
}
const Ve = xt("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var Ph, Ih;
const ZR = (e) => {
  const {
    classes: n,
    disablePortal: r,
    expanded: a,
    focused: l,
    fullWidth: u,
    hasClearIcon: c,
    hasPopupIcon: p,
    inputFocused: d,
    popupOpen: h,
    size: y
  } = e, m = {
    root: ["root", a && "expanded", l && "focused", u && "fullWidth", c && "hasClearIcon", p && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", d && "inputFocused"],
    tag: ["tag", `tagSize${Se(y)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", h && "popupIndicatorOpen"],
    popper: ["popper", r && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return bt(m, XR, n);
}, JR = Oe("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e, {
      fullWidth: a,
      hasClearIcon: l,
      hasPopupIcon: u,
      inputFocused: c,
      size: p
    } = r;
    return [{
      [`& .${Ve.tag}`]: n.tag
    }, {
      [`& .${Ve.tag}`]: n[`tagSize${Se(p)}`]
    }, {
      [`& .${Ve.inputRoot}`]: n.inputRoot
    }, {
      [`& .${Ve.input}`]: n.input
    }, {
      [`& .${Ve.input}`]: c && n.inputFocused
    }, n.root, a && n.fullWidth, u && n.hasPopupIcon, l && n.hasClearIcon];
  }
})({
  [`&.${Ve.focused} .${Ve.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${Ve.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${Ve.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${Ve.inputRoot}`]: {
    [`.${Ve.hasPopupIcon}&, .${Ve.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${Ve.hasPopupIcon}.${Ve.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${Ve.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${eo.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${eo.root}.${Rn.sizeSmall}`]: {
    [`& .${eo.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${Hn.root}`]: {
    padding: 9,
    [`.${Ve.hasPopupIcon}&, .${Ve.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${Ve.hasPopupIcon}.${Ve.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Ve.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${Ve.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Hn.root}.${Rn.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${Ve.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${Pn.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${Ve.hasPopupIcon}&, .${Ve.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${Ve.hasPopupIcon}.${Ve.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${Pn.input}`]: {
      padding: "7px 4px"
    },
    [`& .${Ve.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Pn.root}.${Rn.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${Pn.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${Rn.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${Pn.root}.${Rn.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${Ve.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${Pn.root}.${Rn.hiddenLabel}.${Rn.sizeSmall}`]: {
    [`& .${Ve.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${Ve.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${Ve.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${Ve.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${Ve.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), QR = Oe("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, n) => n.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), eP = Oe(Ic, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, n) => n.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), tP = Oe(Ic, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [n.popupIndicator, r.popupOpen && n.popupIndicatorOpen];
  }
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), nP = Oe(Pc, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, n) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${Ve.option}`]: n.option
    }, n.popper, r.disablePortal && n.popperDisablePortal];
  }
})(ft(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
}))), rP = Oe(nl, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, n) => n.paper
})(ft(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), oP = Oe("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, n) => n.loading
})(ft(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), iP = Oe("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, n) => n.noOptions
})(ft(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), aP = Oe("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, n) => n.listbox
})(ft(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${Ve.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${Ve.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${Ve.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Kt(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Ve.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Kt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${Ve.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Kt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
}))), sP = Oe(_s, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, n) => n.groupLabel
})(ft(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), lP = Oe("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, n) => n.groupUl
})({
  padding: 0,
  [`& .${Ve.option}`]: {
    paddingLeft: 24
  }
}), hm = /* @__PURE__ */ I.forwardRef(function(n, r) {
  const a = St({
    props: n,
    name: "MuiAutocomplete"
  }), {
    autoComplete: l = !1,
    autoHighlight: u = !1,
    autoSelect: c = !1,
    blurOnSelect: p = !1,
    ChipProps: d,
    className: h,
    clearIcon: y = Ph || (Ph = /* @__PURE__ */ oe(YR, {
      fontSize: "small"
    })),
    clearOnBlur: m = !a.freeSolo,
    clearOnEscape: v = !1,
    clearText: w = "Clear",
    closeText: O = "Close",
    componentsProps: b,
    defaultValue: R = a.multiple ? [] : null,
    disableClearable: A = !1,
    disableCloseOnSelect: M = !1,
    disabled: _ = !1,
    disabledItemsFocusable: C = !1,
    disableListWrap: T = !1,
    disablePortal: N = !1,
    filterOptions: F,
    filterSelectedOptions: V = !1,
    forcePopupIcon: Q = "auto",
    freeSolo: E = !1,
    fullWidth: B = !1,
    getLimitTagsText: U = (Ze) => `+${Ze}`,
    getOptionDisabled: te,
    getOptionKey: re,
    getOptionLabel: ee,
    isOptionEqualToValue: q,
    groupBy: ae,
    handleHomeEndKeys: pe = !a.freeSolo,
    id: K,
    includeInputInList: z = !1,
    inputValue: Z,
    limitTags: be = -1,
    ListboxComponent: fe,
    ListboxProps: se,
    loading: ie = !1,
    loadingText: me = "Loading…",
    multiple: ye = !1,
    noOptionsText: le = "No options",
    onChange: ce,
    onClose: ue,
    onHighlightChange: ve,
    onInputChange: D,
    onOpen: Ae,
    open: Te,
    openOnFocus: _e = !1,
    openText: Et = "Open",
    options: ge,
    PaperComponent: pt,
    PopperComponent: $e,
    popupIcon: Ge = Ih || (Ih = /* @__PURE__ */ oe(Jg, {})),
    readOnly: Ne = !1,
    renderGroup: we,
    renderInput: $t,
    renderOption: st,
    renderTags: Nt,
    selectOnFocus: un = !a.freeSolo,
    size: Ft = "medium",
    slots: Bt = {},
    slotProps: yt = {},
    value: Je,
    ...Me
  } = a, {
    getRootProps: cn,
    getInputProps: Ht,
    getInputLabelProps: sr,
    getPopupIndicatorProps: en,
    getClearProps: xe,
    getTagProps: Ue,
    getListboxProps: Tt,
    getOptionProps: Mn,
    value: tn,
    dirty: lr,
    expanded: Jn,
    id: Vr,
    popupOpen: kn,
    focused: Oo,
    focusedTag: Co,
    anchorEl: ur,
    setAnchorEl: ui,
    inputValue: ci,
    groupedOptions: Sr
  } = o_({
    ...a,
    componentName: "Autocomplete"
  }), Or = !A && !_ && lr && !Ne, oo = (!E || Q === !0) && Q !== !1, {
    onMouseDown: io
  } = Ht(), {
    ref: fi,
    ...pi
  } = Tt(), ao = ee || ((Ze) => Ze.label ?? Ze), qt = {
    ...a,
    disablePortal: N,
    expanded: Jn,
    focused: Oo,
    fullWidth: B,
    getOptionLabel: ao,
    hasClearIcon: Or,
    hasPopupIcon: oo,
    inputFocused: Co === -1,
    popupOpen: kn,
    size: Ft
  }, Wt = ZR(qt), Dn = {
    slots: {
      paper: pt,
      popper: $e,
      ...Bt
    },
    slotProps: {
      chip: d,
      listbox: se,
      ...b,
      ...yt
    }
  }, [_o, Y] = Jt("listbox", {
    elementType: aP,
    externalForwardedProps: Dn,
    ownerState: qt,
    className: Wt.listbox,
    additionalProps: pi,
    ref: fi
  }), [j, de] = Jt("paper", {
    elementType: nl,
    externalForwardedProps: Dn,
    ownerState: qt,
    className: Wt.paper
  }), [ke, Be] = Jt("popper", {
    elementType: Pc,
    externalForwardedProps: Dn,
    ownerState: qt,
    className: Wt.popper,
    additionalProps: {
      disablePortal: N,
      style: {
        width: ur ? ur.clientWidth : null
      },
      role: "presentation",
      anchorEl: ur,
      open: kn
    }
  });
  let Ye;
  if (ye && tn.length > 0) {
    const Ze = (En) => ({
      className: Wt.tag,
      disabled: _,
      ...Ue(En)
    });
    Nt ? Ye = Nt(tn, Ze, qt) : Ye = tn.map((En, Qn) => {
      const {
        key: lo,
        ...il
      } = Ze({
        index: Qn
      });
      return /* @__PURE__ */ oe(dm, {
        label: ao(En),
        size: Ft,
        ...il,
        ...Dn.slotProps.chip
      }, lo);
    });
  }
  if (be > -1 && Array.isArray(Ye)) {
    const Ze = Ye.length - be;
    !Oo && Ze > 0 && (Ye = Ye.splice(0, be), Ye.push(/* @__PURE__ */ oe("span", {
      className: Wt.tag,
      children: U(Ze)
    }, Ye.length)));
  }
  const Ut = we || ((Ze) => /* @__PURE__ */ Dt("li", {
    children: [/* @__PURE__ */ oe(sP, {
      className: Wt.groupLabel,
      ownerState: qt,
      component: "div",
      children: Ze.group
    }), /* @__PURE__ */ oe(lP, {
      className: Wt.groupUl,
      ownerState: qt,
      children: Ze.children
    })]
  }, Ze.key)), Ro = st || ((Ze, En) => {
    const {
      key: Qn,
      ...lo
    } = Ze;
    return /* @__PURE__ */ oe("li", {
      ...lo,
      children: ao(En)
    }, Qn);
  }), sa = (Ze, En) => {
    const Qn = Mn({
      option: Ze,
      index: En
    });
    return Ro({
      ...Qn,
      className: Wt.option
    }, Ze, {
      selected: Qn["aria-selected"],
      index: En,
      inputValue: ci
    }, qt);
  }, Po = Dn.slotProps.clearIndicator, Io = Dn.slotProps.popupIndicator;
  return /* @__PURE__ */ Dt(I.Fragment, {
    children: [/* @__PURE__ */ oe(JR, {
      ref: r,
      className: Le(Wt.root, h),
      ownerState: qt,
      ...cn(Me),
      children: $t({
        id: Vr,
        disabled: _,
        fullWidth: !0,
        size: Ft === "small" ? "small" : void 0,
        InputLabelProps: sr(),
        InputProps: {
          ref: ui,
          className: Wt.inputRoot,
          startAdornment: Ye,
          onMouseDown: (Ze) => {
            Ze.target === Ze.currentTarget && io(Ze);
          },
          ...(Or || oo) && {
            endAdornment: /* @__PURE__ */ Dt(QR, {
              className: Wt.endAdornment,
              ownerState: qt,
              children: [Or ? /* @__PURE__ */ oe(eP, {
                ...xe(),
                "aria-label": w,
                title: w,
                ownerState: qt,
                ...Po,
                className: Le(Wt.clearIndicator, Po == null ? void 0 : Po.className),
                children: y
              }) : null, oo ? /* @__PURE__ */ oe(tP, {
                ...en(),
                disabled: _,
                "aria-label": kn ? O : Et,
                title: kn ? O : Et,
                ownerState: qt,
                ...Io,
                className: Le(Wt.popupIndicator, Io == null ? void 0 : Io.className),
                children: Ge
              }) : null]
            })
          }
        },
        inputProps: {
          className: Wt.input,
          disabled: _,
          readOnly: Ne,
          ...Ht()
        }
      })
    }), ur ? /* @__PURE__ */ oe(nP, {
      as: ke,
      ...Be,
      children: /* @__PURE__ */ Dt(rP, {
        as: j,
        ...de,
        children: [ie && Sr.length === 0 ? /* @__PURE__ */ oe(oP, {
          className: Wt.loading,
          ownerState: qt,
          children: me
        }) : null, Sr.length === 0 && !E && !ie ? /* @__PURE__ */ oe(iP, {
          className: Wt.noOptions,
          ownerState: qt,
          role: "presentation",
          onMouseDown: (Ze) => {
            Ze.preventDefault();
          },
          children: le
        }) : null, Sr.length > 0 ? /* @__PURE__ */ oe(_o, {
          as: fe,
          ...Y,
          children: Sr.map((Ze, En) => ae ? Ut({
            key: Ze.key,
            group: Ze.group,
            children: Ze.options.map((Qn, lo) => sa(Qn, Ze.index + lo))
          }) : sa(Ze, En))
        }) : null]
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (hm.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: i.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: i.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: i.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: i.oneOfType([i.oneOf(["mouse", "touch"]), i.bool]),
  /**
   * Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.
   * @deprecated Use `slotProps.chip` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ChipProps: i.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: i.object,
  /**
   * @ignore
   */
  className: i.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: i.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: i.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: i.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: i.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: i.string,
  /**
   * The props used for each slot inside.
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: i.shape({
    clearIndicator: i.object,
    paper: i.object,
    popper: i.object,
    popupIndicator: i.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: xr(i.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: i.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: i.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: i.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: i.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: i.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: i.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: i.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: i.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: i.oneOfType([i.oneOf(["auto"]), i.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: i.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: i.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: i.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: i.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: i.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: i.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} option The Autocomplete option.
   * @returns {string}
   */
  groupBy: i.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: i.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: i.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: i.bool,
  /**
   * The input value.
   */
  inputValue: i.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: i.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: pc,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   * @deprecated Use `slotProps.listbox.component` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxComponent: i.elementType,
  /**
   * Props applied to the Listbox element.
   * @deprecated Use `slotProps.listbox` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxProps: i.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: i.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: i.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: i.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: i.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: i.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: i.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: i.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   */
  onInputChange: i.func,
  /**
   * @ignore
   */
  onKeyDown: i.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: i.func,
  /**
   * If `true`, the component is shown.
   */
  open: i.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: i.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: i.string,
  /**
   * A list of options that will be shown in the Autocomplete.
   */
  options: i.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   * @deprecated Use `slots.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperComponent: i.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   * @deprecated Use `slots.popper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: i.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: i.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: i.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: i.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: i.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: i.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: i.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: i.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: i.oneOfType([i.oneOf(["small", "medium"]), i.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: i.shape({
    chip: i.oneOfType([i.func, i.object]),
    clearIndicator: i.oneOfType([i.func, i.object]),
    listbox: i.oneOfType([i.func, i.object]),
    paper: i.oneOfType([i.func, i.object]),
    popper: i.oneOfType([i.func, i.object]),
    popupIndicator: i.oneOfType([i.func, i.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: i.shape({
    listbox: i.elementType,
    paper: i.elementType,
    popper: i.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: i.oneOfType([i.arrayOf(i.oneOfType([i.func, i.object, i.bool])), i.func, i.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: xr(i.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const uP = Qs(/* @__PURE__ */ oe("path", {
  d: "M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z"
}), "NearMe");
var Fi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var cP = Fi.exports, Ah;
function fP() {
  return Ah || (Ah = 1, function(e, n) {
    (function() {
      var r, a = "4.17.21", l = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", p = "Invalid `variable` option passed into `_.template`", d = "__lodash_hash_undefined__", h = 500, y = "__lodash_placeholder__", m = 1, v = 2, w = 4, O = 1, b = 2, R = 1, A = 2, M = 4, _ = 8, C = 16, T = 32, N = 64, F = 128, V = 256, Q = 512, E = 30, B = "...", U = 800, te = 16, re = 1, ee = 2, q = 3, ae = 1 / 0, pe = 9007199254740991, K = 17976931348623157e292, z = NaN, Z = 4294967295, be = Z - 1, fe = Z >>> 1, se = [
        ["ary", F],
        ["bind", R],
        ["bindKey", A],
        ["curry", _],
        ["curryRight", C],
        ["flip", Q],
        ["partial", T],
        ["partialRight", N],
        ["rearg", V]
      ], ie = "[object Arguments]", me = "[object Array]", ye = "[object AsyncFunction]", le = "[object Boolean]", ce = "[object Date]", ue = "[object DOMException]", ve = "[object Error]", D = "[object Function]", Ae = "[object GeneratorFunction]", Te = "[object Map]", _e = "[object Number]", Et = "[object Null]", ge = "[object Object]", pt = "[object Promise]", $e = "[object Proxy]", Ge = "[object RegExp]", Ne = "[object Set]", we = "[object String]", $t = "[object Symbol]", st = "[object Undefined]", Nt = "[object WeakMap]", un = "[object WeakSet]", Ft = "[object ArrayBuffer]", Bt = "[object DataView]", yt = "[object Float32Array]", Je = "[object Float64Array]", Me = "[object Int8Array]", cn = "[object Int16Array]", Ht = "[object Int32Array]", sr = "[object Uint8Array]", en = "[object Uint8ClampedArray]", xe = "[object Uint16Array]", Ue = "[object Uint32Array]", Tt = /\b__p \+= '';/g, Mn = /\b(__p \+=) '' \+/g, tn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, lr = /&(?:amp|lt|gt|quot|#39);/g, Jn = /[&<>"']/g, Vr = RegExp(lr.source), kn = RegExp(Jn.source), Oo = /<%-([\s\S]+?)%>/g, Co = /<%([\s\S]+?)%>/g, ur = /<%=([\s\S]+?)%>/g, ui = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ci = /^\w*$/, Sr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Or = /[\\^$.*+?()[\]{}|]/g, oo = RegExp(Or.source), io = /^\s+/, fi = /\s/, pi = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, di = /\{\n\/\* \[wrapped with (.+)\] \*/, ao = /,? & /, qt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Wt = /[()=,{}\[\]\/\s]/, Dn = /\\(\\)?/g, _o = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Y = /\w*$/, j = /^[-+]0x[0-9a-f]+$/i, de = /^0b[01]+$/i, ke = /^\[object .+?Constructor\]$/, Be = /^0o[0-7]+$/i, Ye = /^(?:0|[1-9]\d*)$/, Rt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ut = /($^)/, so = /['\n\r\u2028\u2029\\]/g, Ro = "\\ud800-\\udfff", sa = "\\u0300-\\u036f", Po = "\\ufe20-\\ufe2f", Io = "\\u20d0-\\u20ff", Ze = sa + Po + Io, En = "\\u2700-\\u27bf", Qn = "a-z\\xdf-\\xf6\\xf8-\\xff", lo = "\\xac\\xb1\\xd7\\xf7", il = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gm = "\\u2000-\\u206f", mm = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ac = "A-Z\\xc0-\\xd6\\xd8-\\xde", $c = "\\ufe0e\\ufe0f", Nc = lo + il + gm + mm, al = "['’]", ym = "[" + Ro + "]", Mc = "[" + Nc + "]", la = "[" + Ze + "]", kc = "\\d+", vm = "[" + En + "]", Dc = "[" + Qn + "]", Lc = "[^" + Ro + Nc + kc + En + Qn + Ac + "]", sl = "\\ud83c[\\udffb-\\udfff]", bm = "(?:" + la + "|" + sl + ")", Fc = "[^" + Ro + "]", ll = "(?:\\ud83c[\\udde6-\\uddff]){2}", ul = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ao = "[" + Ac + "]", Bc = "\\u200d", Wc = "(?:" + Dc + "|" + Lc + ")", xm = "(?:" + Ao + "|" + Lc + ")", Uc = "(?:" + al + "(?:d|ll|m|re|s|t|ve))?", zc = "(?:" + al + "(?:D|LL|M|RE|S|T|VE))?", Vc = bm + "?", jc = "[" + $c + "]?", Em = "(?:" + Bc + "(?:" + [Fc, ll, ul].join("|") + ")" + jc + Vc + ")*", Tm = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", wm = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Hc = jc + Vc + Em, Sm = "(?:" + [vm, ll, ul].join("|") + ")" + Hc, Om = "(?:" + [Fc + la + "?", la, ll, ul, ym].join("|") + ")", Cm = RegExp(al, "g"), _m = RegExp(la, "g"), cl = RegExp(sl + "(?=" + sl + ")|" + Om + Hc, "g"), Rm = RegExp([
        Ao + "?" + Dc + "+" + Uc + "(?=" + [Mc, Ao, "$"].join("|") + ")",
        xm + "+" + zc + "(?=" + [Mc, Ao + Wc, "$"].join("|") + ")",
        Ao + "?" + Wc + "+" + Uc,
        Ao + "+" + zc,
        wm,
        Tm,
        kc,
        Sm
      ].join("|"), "g"), Pm = RegExp("[" + Bc + Ro + Ze + $c + "]"), Im = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Am = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], $m = -1, wt = {};
      wt[yt] = wt[Je] = wt[Me] = wt[cn] = wt[Ht] = wt[sr] = wt[en] = wt[xe] = wt[Ue] = !0, wt[ie] = wt[me] = wt[Ft] = wt[le] = wt[Bt] = wt[ce] = wt[ve] = wt[D] = wt[Te] = wt[_e] = wt[ge] = wt[Ge] = wt[Ne] = wt[we] = wt[Nt] = !1;
      var vt = {};
      vt[ie] = vt[me] = vt[Ft] = vt[Bt] = vt[le] = vt[ce] = vt[yt] = vt[Je] = vt[Me] = vt[cn] = vt[Ht] = vt[Te] = vt[_e] = vt[ge] = vt[Ge] = vt[Ne] = vt[we] = vt[$t] = vt[sr] = vt[en] = vt[xe] = vt[Ue] = !0, vt[ve] = vt[D] = vt[Nt] = !1;
      var Nm = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Mm = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, km = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Dm = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Lm = parseFloat, Fm = parseInt, qc = typeof Ka == "object" && Ka && Ka.Object === Object && Ka, Bm = typeof self == "object" && self && self.Object === Object && self, Yt = qc || Bm || Function("return this")(), fl = n && !n.nodeType && n, uo = fl && !0 && e && !e.nodeType && e, Gc = uo && uo.exports === fl, pl = Gc && qc.process, Ln = function() {
        try {
          var k = uo && uo.require && uo.require("util").types;
          return k || pl && pl.binding && pl.binding("util");
        } catch {
        }
      }(), Kc = Ln && Ln.isArrayBuffer, Yc = Ln && Ln.isDate, Xc = Ln && Ln.isMap, Zc = Ln && Ln.isRegExp, Jc = Ln && Ln.isSet, Qc = Ln && Ln.isTypedArray;
      function Tn(k, G, W) {
        switch (W.length) {
          case 0:
            return k.call(G);
          case 1:
            return k.call(G, W[0]);
          case 2:
            return k.call(G, W[0], W[1]);
          case 3:
            return k.call(G, W[0], W[1], W[2]);
        }
        return k.apply(G, W);
      }
      function Wm(k, G, W, Ee) {
        for (var De = -1, Qe = k == null ? 0 : k.length; ++De < Qe; ) {
          var Vt = k[De];
          G(Ee, Vt, W(Vt), k);
        }
        return Ee;
      }
      function Fn(k, G) {
        for (var W = -1, Ee = k == null ? 0 : k.length; ++W < Ee && G(k[W], W, k) !== !1; )
          ;
        return k;
      }
      function Um(k, G) {
        for (var W = k == null ? 0 : k.length; W-- && G(k[W], W, k) !== !1; )
          ;
        return k;
      }
      function ef(k, G) {
        for (var W = -1, Ee = k == null ? 0 : k.length; ++W < Ee; )
          if (!G(k[W], W, k))
            return !1;
        return !0;
      }
      function jr(k, G) {
        for (var W = -1, Ee = k == null ? 0 : k.length, De = 0, Qe = []; ++W < Ee; ) {
          var Vt = k[W];
          G(Vt, W, k) && (Qe[De++] = Vt);
        }
        return Qe;
      }
      function ua(k, G) {
        var W = k == null ? 0 : k.length;
        return !!W && $o(k, G, 0) > -1;
      }
      function dl(k, G, W) {
        for (var Ee = -1, De = k == null ? 0 : k.length; ++Ee < De; )
          if (W(G, k[Ee]))
            return !0;
        return !1;
      }
      function Ot(k, G) {
        for (var W = -1, Ee = k == null ? 0 : k.length, De = Array(Ee); ++W < Ee; )
          De[W] = G(k[W], W, k);
        return De;
      }
      function Hr(k, G) {
        for (var W = -1, Ee = G.length, De = k.length; ++W < Ee; )
          k[De + W] = G[W];
        return k;
      }
      function hl(k, G, W, Ee) {
        var De = -1, Qe = k == null ? 0 : k.length;
        for (Ee && Qe && (W = k[++De]); ++De < Qe; )
          W = G(W, k[De], De, k);
        return W;
      }
      function zm(k, G, W, Ee) {
        var De = k == null ? 0 : k.length;
        for (Ee && De && (W = k[--De]); De--; )
          W = G(W, k[De], De, k);
        return W;
      }
      function gl(k, G) {
        for (var W = -1, Ee = k == null ? 0 : k.length; ++W < Ee; )
          if (G(k[W], W, k))
            return !0;
        return !1;
      }
      var Vm = ml("length");
      function jm(k) {
        return k.split("");
      }
      function Hm(k) {
        return k.match(qt) || [];
      }
      function tf(k, G, W) {
        var Ee;
        return W(k, function(De, Qe, Vt) {
          if (G(De, Qe, Vt))
            return Ee = Qe, !1;
        }), Ee;
      }
      function ca(k, G, W, Ee) {
        for (var De = k.length, Qe = W + (Ee ? 1 : -1); Ee ? Qe-- : ++Qe < De; )
          if (G(k[Qe], Qe, k))
            return Qe;
        return -1;
      }
      function $o(k, G, W) {
        return G === G ? ry(k, G, W) : ca(k, nf, W);
      }
      function qm(k, G, W, Ee) {
        for (var De = W - 1, Qe = k.length; ++De < Qe; )
          if (Ee(k[De], G))
            return De;
        return -1;
      }
      function nf(k) {
        return k !== k;
      }
      function rf(k, G) {
        var W = k == null ? 0 : k.length;
        return W ? vl(k, G) / W : z;
      }
      function ml(k) {
        return function(G) {
          return G == null ? r : G[k];
        };
      }
      function yl(k) {
        return function(G) {
          return k == null ? r : k[G];
        };
      }
      function of(k, G, W, Ee, De) {
        return De(k, function(Qe, Vt, dt) {
          W = Ee ? (Ee = !1, Qe) : G(W, Qe, Vt, dt);
        }), W;
      }
      function Gm(k, G) {
        var W = k.length;
        for (k.sort(G); W--; )
          k[W] = k[W].value;
        return k;
      }
      function vl(k, G) {
        for (var W, Ee = -1, De = k.length; ++Ee < De; ) {
          var Qe = G(k[Ee]);
          Qe !== r && (W = W === r ? Qe : W + Qe);
        }
        return W;
      }
      function bl(k, G) {
        for (var W = -1, Ee = Array(k); ++W < k; )
          Ee[W] = G(W);
        return Ee;
      }
      function Km(k, G) {
        return Ot(G, function(W) {
          return [W, k[W]];
        });
      }
      function af(k) {
        return k && k.slice(0, cf(k) + 1).replace(io, "");
      }
      function wn(k) {
        return function(G) {
          return k(G);
        };
      }
      function xl(k, G) {
        return Ot(G, function(W) {
          return k[W];
        });
      }
      function hi(k, G) {
        return k.has(G);
      }
      function sf(k, G) {
        for (var W = -1, Ee = k.length; ++W < Ee && $o(G, k[W], 0) > -1; )
          ;
        return W;
      }
      function lf(k, G) {
        for (var W = k.length; W-- && $o(G, k[W], 0) > -1; )
          ;
        return W;
      }
      function Ym(k, G) {
        for (var W = k.length, Ee = 0; W--; )
          k[W] === G && ++Ee;
        return Ee;
      }
      var Xm = yl(Nm), Zm = yl(Mm);
      function Jm(k) {
        return "\\" + Dm[k];
      }
      function Qm(k, G) {
        return k == null ? r : k[G];
      }
      function No(k) {
        return Pm.test(k);
      }
      function ey(k) {
        return Im.test(k);
      }
      function ty(k) {
        for (var G, W = []; !(G = k.next()).done; )
          W.push(G.value);
        return W;
      }
      function El(k) {
        var G = -1, W = Array(k.size);
        return k.forEach(function(Ee, De) {
          W[++G] = [De, Ee];
        }), W;
      }
      function uf(k, G) {
        return function(W) {
          return k(G(W));
        };
      }
      function qr(k, G) {
        for (var W = -1, Ee = k.length, De = 0, Qe = []; ++W < Ee; ) {
          var Vt = k[W];
          (Vt === G || Vt === y) && (k[W] = y, Qe[De++] = W);
        }
        return Qe;
      }
      function fa(k) {
        var G = -1, W = Array(k.size);
        return k.forEach(function(Ee) {
          W[++G] = Ee;
        }), W;
      }
      function ny(k) {
        var G = -1, W = Array(k.size);
        return k.forEach(function(Ee) {
          W[++G] = [Ee, Ee];
        }), W;
      }
      function ry(k, G, W) {
        for (var Ee = W - 1, De = k.length; ++Ee < De; )
          if (k[Ee] === G)
            return Ee;
        return -1;
      }
      function oy(k, G, W) {
        for (var Ee = W + 1; Ee--; )
          if (k[Ee] === G)
            return Ee;
        return Ee;
      }
      function Mo(k) {
        return No(k) ? ay(k) : Vm(k);
      }
      function er(k) {
        return No(k) ? sy(k) : jm(k);
      }
      function cf(k) {
        for (var G = k.length; G-- && fi.test(k.charAt(G)); )
          ;
        return G;
      }
      var iy = yl(km);
      function ay(k) {
        for (var G = cl.lastIndex = 0; cl.test(k); )
          ++G;
        return G;
      }
      function sy(k) {
        return k.match(cl) || [];
      }
      function ly(k) {
        return k.match(Rm) || [];
      }
      var uy = function k(G) {
        G = G == null ? Yt : ko.defaults(Yt.Object(), G, ko.pick(Yt, Am));
        var W = G.Array, Ee = G.Date, De = G.Error, Qe = G.Function, Vt = G.Math, dt = G.Object, Tl = G.RegExp, cy = G.String, Bn = G.TypeError, pa = W.prototype, fy = Qe.prototype, Do = dt.prototype, da = G["__core-js_shared__"], ha = fy.toString, lt = Do.hasOwnProperty, py = 0, ff = function() {
          var t = /[^.]+$/.exec(da && da.keys && da.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        }(), ga = Do.toString, dy = ha.call(dt), hy = Yt._, gy = Tl(
          "^" + ha.call(lt).replace(Or, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), ma = Gc ? G.Buffer : r, Gr = G.Symbol, ya = G.Uint8Array, pf = ma ? ma.allocUnsafe : r, va = uf(dt.getPrototypeOf, dt), df = dt.create, hf = Do.propertyIsEnumerable, ba = pa.splice, gf = Gr ? Gr.isConcatSpreadable : r, gi = Gr ? Gr.iterator : r, co = Gr ? Gr.toStringTag : r, xa = function() {
          try {
            var t = mo(dt, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        }(), my = G.clearTimeout !== Yt.clearTimeout && G.clearTimeout, yy = Ee && Ee.now !== Yt.Date.now && Ee.now, vy = G.setTimeout !== Yt.setTimeout && G.setTimeout, Ea = Vt.ceil, Ta = Vt.floor, wl = dt.getOwnPropertySymbols, by = ma ? ma.isBuffer : r, mf = G.isFinite, xy = pa.join, Ey = uf(dt.keys, dt), jt = Vt.max, nn = Vt.min, Ty = Ee.now, wy = G.parseInt, yf = Vt.random, Sy = pa.reverse, Sl = mo(G, "DataView"), mi = mo(G, "Map"), Ol = mo(G, "Promise"), Lo = mo(G, "Set"), yi = mo(G, "WeakMap"), vi = mo(dt, "create"), wa = yi && new yi(), Fo = {}, Oy = yo(Sl), Cy = yo(mi), _y = yo(Ol), Ry = yo(Lo), Py = yo(yi), Sa = Gr ? Gr.prototype : r, bi = Sa ? Sa.valueOf : r, vf = Sa ? Sa.toString : r;
        function x(t) {
          if (Pt(t) && !Fe(t) && !(t instanceof Ke)) {
            if (t instanceof Wn)
              return t;
            if (lt.call(t, "__wrapped__"))
              return bp(t);
          }
          return new Wn(t);
        }
        var Bo = /* @__PURE__ */ function() {
          function t() {
          }
          return function(o) {
            if (!_t(o))
              return {};
            if (df)
              return df(o);
            t.prototype = o;
            var s = new t();
            return t.prototype = r, s;
          };
        }();
        function Oa() {
        }
        function Wn(t, o) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
        }
        x.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Oo,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Co,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: ur,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: x
          }
        }, x.prototype = Oa.prototype, x.prototype.constructor = x, Wn.prototype = Bo(Oa.prototype), Wn.prototype.constructor = Wn;
        function Ke(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Z, this.__views__ = [];
        }
        function Iy() {
          var t = new Ke(this.__wrapped__);
          return t.__actions__ = hn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = hn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = hn(this.__views__), t;
        }
        function Ay() {
          if (this.__filtered__) {
            var t = new Ke(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function $y() {
          var t = this.__wrapped__.value(), o = this.__dir__, s = Fe(t), f = o < 0, g = s ? t.length : 0, S = jv(0, g, this.__views__), P = S.start, $ = S.end, L = $ - P, X = f ? $ : P - 1, J = this.__iteratees__, ne = J.length, he = 0, Ce = nn(L, this.__takeCount__);
          if (!s || !f && g == L && Ce == L)
            return zf(t, this.__actions__);
          var Pe = [];
          e:
            for (; L-- && he < Ce; ) {
              X += o;
              for (var ze = -1, Ie = t[X]; ++ze < ne; ) {
                var He = J[ze], Xe = He.iteratee, Cn = He.type, dn = Xe(Ie);
                if (Cn == ee)
                  Ie = dn;
                else if (!dn) {
                  if (Cn == re)
                    continue e;
                  break e;
                }
              }
              Pe[he++] = Ie;
            }
          return Pe;
        }
        Ke.prototype = Bo(Oa.prototype), Ke.prototype.constructor = Ke;
        function fo(t) {
          var o = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++o < s; ) {
            var f = t[o];
            this.set(f[0], f[1]);
          }
        }
        function Ny() {
          this.__data__ = vi ? vi(null) : {}, this.size = 0;
        }
        function My(t) {
          var o = this.has(t) && delete this.__data__[t];
          return this.size -= o ? 1 : 0, o;
        }
        function ky(t) {
          var o = this.__data__;
          if (vi) {
            var s = o[t];
            return s === d ? r : s;
          }
          return lt.call(o, t) ? o[t] : r;
        }
        function Dy(t) {
          var o = this.__data__;
          return vi ? o[t] !== r : lt.call(o, t);
        }
        function Ly(t, o) {
          var s = this.__data__;
          return this.size += this.has(t) ? 0 : 1, s[t] = vi && o === r ? d : o, this;
        }
        fo.prototype.clear = Ny, fo.prototype.delete = My, fo.prototype.get = ky, fo.prototype.has = Dy, fo.prototype.set = Ly;
        function Cr(t) {
          var o = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++o < s; ) {
            var f = t[o];
            this.set(f[0], f[1]);
          }
        }
        function Fy() {
          this.__data__ = [], this.size = 0;
        }
        function By(t) {
          var o = this.__data__, s = Ca(o, t);
          if (s < 0)
            return !1;
          var f = o.length - 1;
          return s == f ? o.pop() : ba.call(o, s, 1), --this.size, !0;
        }
        function Wy(t) {
          var o = this.__data__, s = Ca(o, t);
          return s < 0 ? r : o[s][1];
        }
        function Uy(t) {
          return Ca(this.__data__, t) > -1;
        }
        function zy(t, o) {
          var s = this.__data__, f = Ca(s, t);
          return f < 0 ? (++this.size, s.push([t, o])) : s[f][1] = o, this;
        }
        Cr.prototype.clear = Fy, Cr.prototype.delete = By, Cr.prototype.get = Wy, Cr.prototype.has = Uy, Cr.prototype.set = zy;
        function _r(t) {
          var o = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++o < s; ) {
            var f = t[o];
            this.set(f[0], f[1]);
          }
        }
        function Vy() {
          this.size = 0, this.__data__ = {
            hash: new fo(),
            map: new (mi || Cr)(),
            string: new fo()
          };
        }
        function jy(t) {
          var o = Fa(this, t).delete(t);
          return this.size -= o ? 1 : 0, o;
        }
        function Hy(t) {
          return Fa(this, t).get(t);
        }
        function qy(t) {
          return Fa(this, t).has(t);
        }
        function Gy(t, o) {
          var s = Fa(this, t), f = s.size;
          return s.set(t, o), this.size += s.size == f ? 0 : 1, this;
        }
        _r.prototype.clear = Vy, _r.prototype.delete = jy, _r.prototype.get = Hy, _r.prototype.has = qy, _r.prototype.set = Gy;
        function po(t) {
          var o = -1, s = t == null ? 0 : t.length;
          for (this.__data__ = new _r(); ++o < s; )
            this.add(t[o]);
        }
        function Ky(t) {
          return this.__data__.set(t, d), this;
        }
        function Yy(t) {
          return this.__data__.has(t);
        }
        po.prototype.add = po.prototype.push = Ky, po.prototype.has = Yy;
        function tr(t) {
          var o = this.__data__ = new Cr(t);
          this.size = o.size;
        }
        function Xy() {
          this.__data__ = new Cr(), this.size = 0;
        }
        function Zy(t) {
          var o = this.__data__, s = o.delete(t);
          return this.size = o.size, s;
        }
        function Jy(t) {
          return this.__data__.get(t);
        }
        function Qy(t) {
          return this.__data__.has(t);
        }
        function ev(t, o) {
          var s = this.__data__;
          if (s instanceof Cr) {
            var f = s.__data__;
            if (!mi || f.length < l - 1)
              return f.push([t, o]), this.size = ++s.size, this;
            s = this.__data__ = new _r(f);
          }
          return s.set(t, o), this.size = s.size, this;
        }
        tr.prototype.clear = Xy, tr.prototype.delete = Zy, tr.prototype.get = Jy, tr.prototype.has = Qy, tr.prototype.set = ev;
        function bf(t, o) {
          var s = Fe(t), f = !s && vo(t), g = !s && !f && Jr(t), S = !s && !f && !g && Vo(t), P = s || f || g || S, $ = P ? bl(t.length, cy) : [], L = $.length;
          for (var X in t)
            (o || lt.call(t, X)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
            (X == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            g && (X == "offset" || X == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            S && (X == "buffer" || X == "byteLength" || X == "byteOffset") || // Skip index properties.
            Ar(X, L))) && $.push(X);
          return $;
        }
        function xf(t) {
          var o = t.length;
          return o ? t[Dl(0, o - 1)] : r;
        }
        function tv(t, o) {
          return Ba(hn(t), ho(o, 0, t.length));
        }
        function nv(t) {
          return Ba(hn(t));
        }
        function Cl(t, o, s) {
          (s !== r && !nr(t[o], s) || s === r && !(o in t)) && Rr(t, o, s);
        }
        function xi(t, o, s) {
          var f = t[o];
          (!(lt.call(t, o) && nr(f, s)) || s === r && !(o in t)) && Rr(t, o, s);
        }
        function Ca(t, o) {
          for (var s = t.length; s--; )
            if (nr(t[s][0], o))
              return s;
          return -1;
        }
        function rv(t, o, s, f) {
          return Kr(t, function(g, S, P) {
            o(f, g, s(g), P);
          }), f;
        }
        function Ef(t, o) {
          return t && fr(o, Gt(o), t);
        }
        function ov(t, o) {
          return t && fr(o, mn(o), t);
        }
        function Rr(t, o, s) {
          o == "__proto__" && xa ? xa(t, o, {
            configurable: !0,
            enumerable: !0,
            value: s,
            writable: !0
          }) : t[o] = s;
        }
        function _l(t, o) {
          for (var s = -1, f = o.length, g = W(f), S = t == null; ++s < f; )
            g[s] = S ? r : su(t, o[s]);
          return g;
        }
        function ho(t, o, s) {
          return t === t && (s !== r && (t = t <= s ? t : s), o !== r && (t = t >= o ? t : o)), t;
        }
        function Un(t, o, s, f, g, S) {
          var P, $ = o & m, L = o & v, X = o & w;
          if (s && (P = g ? s(t, f, g, S) : s(t)), P !== r)
            return P;
          if (!_t(t))
            return t;
          var J = Fe(t);
          if (J) {
            if (P = qv(t), !$)
              return hn(t, P);
          } else {
            var ne = rn(t), he = ne == D || ne == Ae;
            if (Jr(t))
              return Hf(t, $);
            if (ne == ge || ne == ie || he && !g) {
              if (P = L || he ? {} : cp(t), !$)
                return L ? kv(t, ov(P, t)) : Mv(t, Ef(P, t));
            } else {
              if (!vt[ne])
                return g ? t : {};
              P = Gv(t, ne, $);
            }
          }
          S || (S = new tr());
          var Ce = S.get(t);
          if (Ce)
            return Ce;
          S.set(t, P), Bp(t) ? t.forEach(function(Ie) {
            P.add(Un(Ie, o, s, Ie, t, S));
          }) : Lp(t) && t.forEach(function(Ie, He) {
            P.set(He, Un(Ie, o, s, He, t, S));
          });
          var Pe = X ? L ? Gl : ql : L ? mn : Gt, ze = J ? r : Pe(t);
          return Fn(ze || t, function(Ie, He) {
            ze && (He = Ie, Ie = t[He]), xi(P, He, Un(Ie, o, s, He, t, S));
          }), P;
        }
        function iv(t) {
          var o = Gt(t);
          return function(s) {
            return Tf(s, t, o);
          };
        }
        function Tf(t, o, s) {
          var f = s.length;
          if (t == null)
            return !f;
          for (t = dt(t); f--; ) {
            var g = s[f], S = o[g], P = t[g];
            if (P === r && !(g in t) || !S(P))
              return !1;
          }
          return !0;
        }
        function wf(t, o, s) {
          if (typeof t != "function")
            throw new Bn(c);
          return _i(function() {
            t.apply(r, s);
          }, o);
        }
        function Ei(t, o, s, f) {
          var g = -1, S = ua, P = !0, $ = t.length, L = [], X = o.length;
          if (!$)
            return L;
          s && (o = Ot(o, wn(s))), f ? (S = dl, P = !1) : o.length >= l && (S = hi, P = !1, o = new po(o));
          e:
            for (; ++g < $; ) {
              var J = t[g], ne = s == null ? J : s(J);
              if (J = f || J !== 0 ? J : 0, P && ne === ne) {
                for (var he = X; he--; )
                  if (o[he] === ne)
                    continue e;
                L.push(J);
              } else S(o, ne, f) || L.push(J);
            }
          return L;
        }
        var Kr = Xf(cr), Sf = Xf(Pl, !0);
        function av(t, o) {
          var s = !0;
          return Kr(t, function(f, g, S) {
            return s = !!o(f, g, S), s;
          }), s;
        }
        function _a(t, o, s) {
          for (var f = -1, g = t.length; ++f < g; ) {
            var S = t[f], P = o(S);
            if (P != null && ($ === r ? P === P && !On(P) : s(P, $)))
              var $ = P, L = S;
          }
          return L;
        }
        function sv(t, o, s, f) {
          var g = t.length;
          for (s = We(s), s < 0 && (s = -s > g ? 0 : g + s), f = f === r || f > g ? g : We(f), f < 0 && (f += g), f = s > f ? 0 : Up(f); s < f; )
            t[s++] = o;
          return t;
        }
        function Of(t, o) {
          var s = [];
          return Kr(t, function(f, g, S) {
            o(f, g, S) && s.push(f);
          }), s;
        }
        function Xt(t, o, s, f, g) {
          var S = -1, P = t.length;
          for (s || (s = Yv), g || (g = []); ++S < P; ) {
            var $ = t[S];
            o > 0 && s($) ? o > 1 ? Xt($, o - 1, s, f, g) : Hr(g, $) : f || (g[g.length] = $);
          }
          return g;
        }
        var Rl = Zf(), Cf = Zf(!0);
        function cr(t, o) {
          return t && Rl(t, o, Gt);
        }
        function Pl(t, o) {
          return t && Cf(t, o, Gt);
        }
        function Ra(t, o) {
          return jr(o, function(s) {
            return $r(t[s]);
          });
        }
        function go(t, o) {
          o = Xr(o, t);
          for (var s = 0, f = o.length; t != null && s < f; )
            t = t[pr(o[s++])];
          return s && s == f ? t : r;
        }
        function _f(t, o, s) {
          var f = o(t);
          return Fe(t) ? f : Hr(f, s(t));
        }
        function fn(t) {
          return t == null ? t === r ? st : Et : co && co in dt(t) ? Vv(t) : nb(t);
        }
        function Il(t, o) {
          return t > o;
        }
        function lv(t, o) {
          return t != null && lt.call(t, o);
        }
        function uv(t, o) {
          return t != null && o in dt(t);
        }
        function cv(t, o, s) {
          return t >= nn(o, s) && t < jt(o, s);
        }
        function Al(t, o, s) {
          for (var f = s ? dl : ua, g = t[0].length, S = t.length, P = S, $ = W(S), L = 1 / 0, X = []; P--; ) {
            var J = t[P];
            P && o && (J = Ot(J, wn(o))), L = nn(J.length, L), $[P] = !s && (o || g >= 120 && J.length >= 120) ? new po(P && J) : r;
          }
          J = t[0];
          var ne = -1, he = $[0];
          e:
            for (; ++ne < g && X.length < L; ) {
              var Ce = J[ne], Pe = o ? o(Ce) : Ce;
              if (Ce = s || Ce !== 0 ? Ce : 0, !(he ? hi(he, Pe) : f(X, Pe, s))) {
                for (P = S; --P; ) {
                  var ze = $[P];
                  if (!(ze ? hi(ze, Pe) : f(t[P], Pe, s)))
                    continue e;
                }
                he && he.push(Pe), X.push(Ce);
              }
            }
          return X;
        }
        function fv(t, o, s, f) {
          return cr(t, function(g, S, P) {
            o(f, s(g), S, P);
          }), f;
        }
        function Ti(t, o, s) {
          o = Xr(o, t), t = hp(t, o);
          var f = t == null ? t : t[pr(Vn(o))];
          return f == null ? r : Tn(f, t, s);
        }
        function Rf(t) {
          return Pt(t) && fn(t) == ie;
        }
        function pv(t) {
          return Pt(t) && fn(t) == Ft;
        }
        function dv(t) {
          return Pt(t) && fn(t) == ce;
        }
        function wi(t, o, s, f, g) {
          return t === o ? !0 : t == null || o == null || !Pt(t) && !Pt(o) ? t !== t && o !== o : hv(t, o, s, f, wi, g);
        }
        function hv(t, o, s, f, g, S) {
          var P = Fe(t), $ = Fe(o), L = P ? me : rn(t), X = $ ? me : rn(o);
          L = L == ie ? ge : L, X = X == ie ? ge : X;
          var J = L == ge, ne = X == ge, he = L == X;
          if (he && Jr(t)) {
            if (!Jr(o))
              return !1;
            P = !0, J = !1;
          }
          if (he && !J)
            return S || (S = new tr()), P || Vo(t) ? sp(t, o, s, f, g, S) : Uv(t, o, L, s, f, g, S);
          if (!(s & O)) {
            var Ce = J && lt.call(t, "__wrapped__"), Pe = ne && lt.call(o, "__wrapped__");
            if (Ce || Pe) {
              var ze = Ce ? t.value() : t, Ie = Pe ? o.value() : o;
              return S || (S = new tr()), g(ze, Ie, s, f, S);
            }
          }
          return he ? (S || (S = new tr()), zv(t, o, s, f, g, S)) : !1;
        }
        function gv(t) {
          return Pt(t) && rn(t) == Te;
        }
        function $l(t, o, s, f) {
          var g = s.length, S = g, P = !f;
          if (t == null)
            return !S;
          for (t = dt(t); g--; ) {
            var $ = s[g];
            if (P && $[2] ? $[1] !== t[$[0]] : !($[0] in t))
              return !1;
          }
          for (; ++g < S; ) {
            $ = s[g];
            var L = $[0], X = t[L], J = $[1];
            if (P && $[2]) {
              if (X === r && !(L in t))
                return !1;
            } else {
              var ne = new tr();
              if (f)
                var he = f(X, J, L, t, o, ne);
              if (!(he === r ? wi(J, X, O | b, f, ne) : he))
                return !1;
            }
          }
          return !0;
        }
        function Pf(t) {
          if (!_t(t) || Zv(t))
            return !1;
          var o = $r(t) ? gy : ke;
          return o.test(yo(t));
        }
        function mv(t) {
          return Pt(t) && fn(t) == Ge;
        }
        function yv(t) {
          return Pt(t) && rn(t) == Ne;
        }
        function vv(t) {
          return Pt(t) && Ha(t.length) && !!wt[fn(t)];
        }
        function If(t) {
          return typeof t == "function" ? t : t == null ? yn : typeof t == "object" ? Fe(t) ? Nf(t[0], t[1]) : $f(t) : Jp(t);
        }
        function Nl(t) {
          if (!Ci(t))
            return Ey(t);
          var o = [];
          for (var s in dt(t))
            lt.call(t, s) && s != "constructor" && o.push(s);
          return o;
        }
        function bv(t) {
          if (!_t(t))
            return tb(t);
          var o = Ci(t), s = [];
          for (var f in t)
            f == "constructor" && (o || !lt.call(t, f)) || s.push(f);
          return s;
        }
        function Ml(t, o) {
          return t < o;
        }
        function Af(t, o) {
          var s = -1, f = gn(t) ? W(t.length) : [];
          return Kr(t, function(g, S, P) {
            f[++s] = o(g, S, P);
          }), f;
        }
        function $f(t) {
          var o = Yl(t);
          return o.length == 1 && o[0][2] ? pp(o[0][0], o[0][1]) : function(s) {
            return s === t || $l(s, t, o);
          };
        }
        function Nf(t, o) {
          return Zl(t) && fp(o) ? pp(pr(t), o) : function(s) {
            var f = su(s, t);
            return f === r && f === o ? lu(s, t) : wi(o, f, O | b);
          };
        }
        function Pa(t, o, s, f, g) {
          t !== o && Rl(o, function(S, P) {
            if (g || (g = new tr()), _t(S))
              xv(t, o, P, s, Pa, f, g);
            else {
              var $ = f ? f(Ql(t, P), S, P + "", t, o, g) : r;
              $ === r && ($ = S), Cl(t, P, $);
            }
          }, mn);
        }
        function xv(t, o, s, f, g, S, P) {
          var $ = Ql(t, s), L = Ql(o, s), X = P.get(L);
          if (X) {
            Cl(t, s, X);
            return;
          }
          var J = S ? S($, L, s + "", t, o, P) : r, ne = J === r;
          if (ne) {
            var he = Fe(L), Ce = !he && Jr(L), Pe = !he && !Ce && Vo(L);
            J = L, he || Ce || Pe ? Fe($) ? J = $ : Mt($) ? J = hn($) : Ce ? (ne = !1, J = Hf(L, !0)) : Pe ? (ne = !1, J = qf(L, !0)) : J = [] : Ri(L) || vo(L) ? (J = $, vo($) ? J = zp($) : (!_t($) || $r($)) && (J = cp(L))) : ne = !1;
          }
          ne && (P.set(L, J), g(J, L, f, S, P), P.delete(L)), Cl(t, s, J);
        }
        function Mf(t, o) {
          var s = t.length;
          if (s)
            return o += o < 0 ? s : 0, Ar(o, s) ? t[o] : r;
        }
        function kf(t, o, s) {
          o.length ? o = Ot(o, function(S) {
            return Fe(S) ? function(P) {
              return go(P, S.length === 1 ? S[0] : S);
            } : S;
          }) : o = [yn];
          var f = -1;
          o = Ot(o, wn(Re()));
          var g = Af(t, function(S, P, $) {
            var L = Ot(o, function(X) {
              return X(S);
            });
            return { criteria: L, index: ++f, value: S };
          });
          return Gm(g, function(S, P) {
            return Nv(S, P, s);
          });
        }
        function Ev(t, o) {
          return Df(t, o, function(s, f) {
            return lu(t, f);
          });
        }
        function Df(t, o, s) {
          for (var f = -1, g = o.length, S = {}; ++f < g; ) {
            var P = o[f], $ = go(t, P);
            s($, P) && Si(S, Xr(P, t), $);
          }
          return S;
        }
        function Tv(t) {
          return function(o) {
            return go(o, t);
          };
        }
        function kl(t, o, s, f) {
          var g = f ? qm : $o, S = -1, P = o.length, $ = t;
          for (t === o && (o = hn(o)), s && ($ = Ot(t, wn(s))); ++S < P; )
            for (var L = 0, X = o[S], J = s ? s(X) : X; (L = g($, J, L, f)) > -1; )
              $ !== t && ba.call($, L, 1), ba.call(t, L, 1);
          return t;
        }
        function Lf(t, o) {
          for (var s = t ? o.length : 0, f = s - 1; s--; ) {
            var g = o[s];
            if (s == f || g !== S) {
              var S = g;
              Ar(g) ? ba.call(t, g, 1) : Bl(t, g);
            }
          }
          return t;
        }
        function Dl(t, o) {
          return t + Ta(yf() * (o - t + 1));
        }
        function wv(t, o, s, f) {
          for (var g = -1, S = jt(Ea((o - t) / (s || 1)), 0), P = W(S); S--; )
            P[f ? S : ++g] = t, t += s;
          return P;
        }
        function Ll(t, o) {
          var s = "";
          if (!t || o < 1 || o > pe)
            return s;
          do
            o % 2 && (s += t), o = Ta(o / 2), o && (t += t);
          while (o);
          return s;
        }
        function je(t, o) {
          return eu(dp(t, o, yn), t + "");
        }
        function Sv(t) {
          return xf(jo(t));
        }
        function Ov(t, o) {
          var s = jo(t);
          return Ba(s, ho(o, 0, s.length));
        }
        function Si(t, o, s, f) {
          if (!_t(t))
            return t;
          o = Xr(o, t);
          for (var g = -1, S = o.length, P = S - 1, $ = t; $ != null && ++g < S; ) {
            var L = pr(o[g]), X = s;
            if (L === "__proto__" || L === "constructor" || L === "prototype")
              return t;
            if (g != P) {
              var J = $[L];
              X = f ? f(J, L, $) : r, X === r && (X = _t(J) ? J : Ar(o[g + 1]) ? [] : {});
            }
            xi($, L, X), $ = $[L];
          }
          return t;
        }
        var Ff = wa ? function(t, o) {
          return wa.set(t, o), t;
        } : yn, Cv = xa ? function(t, o) {
          return xa(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: cu(o),
            writable: !0
          });
        } : yn;
        function _v(t) {
          return Ba(jo(t));
        }
        function zn(t, o, s) {
          var f = -1, g = t.length;
          o < 0 && (o = -o > g ? 0 : g + o), s = s > g ? g : s, s < 0 && (s += g), g = o > s ? 0 : s - o >>> 0, o >>>= 0;
          for (var S = W(g); ++f < g; )
            S[f] = t[f + o];
          return S;
        }
        function Rv(t, o) {
          var s;
          return Kr(t, function(f, g, S) {
            return s = o(f, g, S), !s;
          }), !!s;
        }
        function Ia(t, o, s) {
          var f = 0, g = t == null ? f : t.length;
          if (typeof o == "number" && o === o && g <= fe) {
            for (; f < g; ) {
              var S = f + g >>> 1, P = t[S];
              P !== null && !On(P) && (s ? P <= o : P < o) ? f = S + 1 : g = S;
            }
            return g;
          }
          return Fl(t, o, yn, s);
        }
        function Fl(t, o, s, f) {
          var g = 0, S = t == null ? 0 : t.length;
          if (S === 0)
            return 0;
          o = s(o);
          for (var P = o !== o, $ = o === null, L = On(o), X = o === r; g < S; ) {
            var J = Ta((g + S) / 2), ne = s(t[J]), he = ne !== r, Ce = ne === null, Pe = ne === ne, ze = On(ne);
            if (P)
              var Ie = f || Pe;
            else X ? Ie = Pe && (f || he) : $ ? Ie = Pe && he && (f || !Ce) : L ? Ie = Pe && he && !Ce && (f || !ze) : Ce || ze ? Ie = !1 : Ie = f ? ne <= o : ne < o;
            Ie ? g = J + 1 : S = J;
          }
          return nn(S, be);
        }
        function Bf(t, o) {
          for (var s = -1, f = t.length, g = 0, S = []; ++s < f; ) {
            var P = t[s], $ = o ? o(P) : P;
            if (!s || !nr($, L)) {
              var L = $;
              S[g++] = P === 0 ? 0 : P;
            }
          }
          return S;
        }
        function Wf(t) {
          return typeof t == "number" ? t : On(t) ? z : +t;
        }
        function Sn(t) {
          if (typeof t == "string")
            return t;
          if (Fe(t))
            return Ot(t, Sn) + "";
          if (On(t))
            return vf ? vf.call(t) : "";
          var o = t + "";
          return o == "0" && 1 / t == -1 / 0 ? "-0" : o;
        }
        function Yr(t, o, s) {
          var f = -1, g = ua, S = t.length, P = !0, $ = [], L = $;
          if (s)
            P = !1, g = dl;
          else if (S >= l) {
            var X = o ? null : Bv(t);
            if (X)
              return fa(X);
            P = !1, g = hi, L = new po();
          } else
            L = o ? [] : $;
          e:
            for (; ++f < S; ) {
              var J = t[f], ne = o ? o(J) : J;
              if (J = s || J !== 0 ? J : 0, P && ne === ne) {
                for (var he = L.length; he--; )
                  if (L[he] === ne)
                    continue e;
                o && L.push(ne), $.push(J);
              } else g(L, ne, s) || (L !== $ && L.push(ne), $.push(J));
            }
          return $;
        }
        function Bl(t, o) {
          return o = Xr(o, t), t = hp(t, o), t == null || delete t[pr(Vn(o))];
        }
        function Uf(t, o, s, f) {
          return Si(t, o, s(go(t, o)), f);
        }
        function Aa(t, o, s, f) {
          for (var g = t.length, S = f ? g : -1; (f ? S-- : ++S < g) && o(t[S], S, t); )
            ;
          return s ? zn(t, f ? 0 : S, f ? S + 1 : g) : zn(t, f ? S + 1 : 0, f ? g : S);
        }
        function zf(t, o) {
          var s = t;
          return s instanceof Ke && (s = s.value()), hl(o, function(f, g) {
            return g.func.apply(g.thisArg, Hr([f], g.args));
          }, s);
        }
        function Wl(t, o, s) {
          var f = t.length;
          if (f < 2)
            return f ? Yr(t[0]) : [];
          for (var g = -1, S = W(f); ++g < f; )
            for (var P = t[g], $ = -1; ++$ < f; )
              $ != g && (S[g] = Ei(S[g] || P, t[$], o, s));
          return Yr(Xt(S, 1), o, s);
        }
        function Vf(t, o, s) {
          for (var f = -1, g = t.length, S = o.length, P = {}; ++f < g; ) {
            var $ = f < S ? o[f] : r;
            s(P, t[f], $);
          }
          return P;
        }
        function Ul(t) {
          return Mt(t) ? t : [];
        }
        function zl(t) {
          return typeof t == "function" ? t : yn;
        }
        function Xr(t, o) {
          return Fe(t) ? t : Zl(t, o) ? [t] : vp(nt(t));
        }
        var Pv = je;
        function Zr(t, o, s) {
          var f = t.length;
          return s = s === r ? f : s, !o && s >= f ? t : zn(t, o, s);
        }
        var jf = my || function(t) {
          return Yt.clearTimeout(t);
        };
        function Hf(t, o) {
          if (o)
            return t.slice();
          var s = t.length, f = pf ? pf(s) : new t.constructor(s);
          return t.copy(f), f;
        }
        function Vl(t) {
          var o = new t.constructor(t.byteLength);
          return new ya(o).set(new ya(t)), o;
        }
        function Iv(t, o) {
          var s = o ? Vl(t.buffer) : t.buffer;
          return new t.constructor(s, t.byteOffset, t.byteLength);
        }
        function Av(t) {
          var o = new t.constructor(t.source, Y.exec(t));
          return o.lastIndex = t.lastIndex, o;
        }
        function $v(t) {
          return bi ? dt(bi.call(t)) : {};
        }
        function qf(t, o) {
          var s = o ? Vl(t.buffer) : t.buffer;
          return new t.constructor(s, t.byteOffset, t.length);
        }
        function Gf(t, o) {
          if (t !== o) {
            var s = t !== r, f = t === null, g = t === t, S = On(t), P = o !== r, $ = o === null, L = o === o, X = On(o);
            if (!$ && !X && !S && t > o || S && P && L && !$ && !X || f && P && L || !s && L || !g)
              return 1;
            if (!f && !S && !X && t < o || X && s && g && !f && !S || $ && s && g || !P && g || !L)
              return -1;
          }
          return 0;
        }
        function Nv(t, o, s) {
          for (var f = -1, g = t.criteria, S = o.criteria, P = g.length, $ = s.length; ++f < P; ) {
            var L = Gf(g[f], S[f]);
            if (L) {
              if (f >= $)
                return L;
              var X = s[f];
              return L * (X == "desc" ? -1 : 1);
            }
          }
          return t.index - o.index;
        }
        function Kf(t, o, s, f) {
          for (var g = -1, S = t.length, P = s.length, $ = -1, L = o.length, X = jt(S - P, 0), J = W(L + X), ne = !f; ++$ < L; )
            J[$] = o[$];
          for (; ++g < P; )
            (ne || g < S) && (J[s[g]] = t[g]);
          for (; X--; )
            J[$++] = t[g++];
          return J;
        }
        function Yf(t, o, s, f) {
          for (var g = -1, S = t.length, P = -1, $ = s.length, L = -1, X = o.length, J = jt(S - $, 0), ne = W(J + X), he = !f; ++g < J; )
            ne[g] = t[g];
          for (var Ce = g; ++L < X; )
            ne[Ce + L] = o[L];
          for (; ++P < $; )
            (he || g < S) && (ne[Ce + s[P]] = t[g++]);
          return ne;
        }
        function hn(t, o) {
          var s = -1, f = t.length;
          for (o || (o = W(f)); ++s < f; )
            o[s] = t[s];
          return o;
        }
        function fr(t, o, s, f) {
          var g = !s;
          s || (s = {});
          for (var S = -1, P = o.length; ++S < P; ) {
            var $ = o[S], L = f ? f(s[$], t[$], $, s, t) : r;
            L === r && (L = t[$]), g ? Rr(s, $, L) : xi(s, $, L);
          }
          return s;
        }
        function Mv(t, o) {
          return fr(t, Xl(t), o);
        }
        function kv(t, o) {
          return fr(t, lp(t), o);
        }
        function $a(t, o) {
          return function(s, f) {
            var g = Fe(s) ? Wm : rv, S = o ? o() : {};
            return g(s, t, Re(f, 2), S);
          };
        }
        function Wo(t) {
          return je(function(o, s) {
            var f = -1, g = s.length, S = g > 1 ? s[g - 1] : r, P = g > 2 ? s[2] : r;
            for (S = t.length > 3 && typeof S == "function" ? (g--, S) : r, P && pn(s[0], s[1], P) && (S = g < 3 ? r : S, g = 1), o = dt(o); ++f < g; ) {
              var $ = s[f];
              $ && t(o, $, f, S);
            }
            return o;
          });
        }
        function Xf(t, o) {
          return function(s, f) {
            if (s == null)
              return s;
            if (!gn(s))
              return t(s, f);
            for (var g = s.length, S = o ? g : -1, P = dt(s); (o ? S-- : ++S < g) && f(P[S], S, P) !== !1; )
              ;
            return s;
          };
        }
        function Zf(t) {
          return function(o, s, f) {
            for (var g = -1, S = dt(o), P = f(o), $ = P.length; $--; ) {
              var L = P[t ? $ : ++g];
              if (s(S[L], L, S) === !1)
                break;
            }
            return o;
          };
        }
        function Dv(t, o, s) {
          var f = o & R, g = Oi(t);
          function S() {
            var P = this && this !== Yt && this instanceof S ? g : t;
            return P.apply(f ? s : this, arguments);
          }
          return S;
        }
        function Jf(t) {
          return function(o) {
            o = nt(o);
            var s = No(o) ? er(o) : r, f = s ? s[0] : o.charAt(0), g = s ? Zr(s, 1).join("") : o.slice(1);
            return f[t]() + g;
          };
        }
        function Uo(t) {
          return function(o) {
            return hl(Xp(Yp(o).replace(Cm, "")), t, "");
          };
        }
        function Oi(t) {
          return function() {
            var o = arguments;
            switch (o.length) {
              case 0:
                return new t();
              case 1:
                return new t(o[0]);
              case 2:
                return new t(o[0], o[1]);
              case 3:
                return new t(o[0], o[1], o[2]);
              case 4:
                return new t(o[0], o[1], o[2], o[3]);
              case 5:
                return new t(o[0], o[1], o[2], o[3], o[4]);
              case 6:
                return new t(o[0], o[1], o[2], o[3], o[4], o[5]);
              case 7:
                return new t(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
            }
            var s = Bo(t.prototype), f = t.apply(s, o);
            return _t(f) ? f : s;
          };
        }
        function Lv(t, o, s) {
          var f = Oi(t);
          function g() {
            for (var S = arguments.length, P = W(S), $ = S, L = zo(g); $--; )
              P[$] = arguments[$];
            var X = S < 3 && P[0] !== L && P[S - 1] !== L ? [] : qr(P, L);
            if (S -= X.length, S < s)
              return rp(
                t,
                o,
                Na,
                g.placeholder,
                r,
                P,
                X,
                r,
                r,
                s - S
              );
            var J = this && this !== Yt && this instanceof g ? f : t;
            return Tn(J, this, P);
          }
          return g;
        }
        function Qf(t) {
          return function(o, s, f) {
            var g = dt(o);
            if (!gn(o)) {
              var S = Re(s, 3);
              o = Gt(o), s = function($) {
                return S(g[$], $, g);
              };
            }
            var P = t(o, s, f);
            return P > -1 ? g[S ? o[P] : P] : r;
          };
        }
        function ep(t) {
          return Ir(function(o) {
            var s = o.length, f = s, g = Wn.prototype.thru;
            for (t && o.reverse(); f--; ) {
              var S = o[f];
              if (typeof S != "function")
                throw new Bn(c);
              if (g && !P && La(S) == "wrapper")
                var P = new Wn([], !0);
            }
            for (f = P ? f : s; ++f < s; ) {
              S = o[f];
              var $ = La(S), L = $ == "wrapper" ? Kl(S) : r;
              L && Jl(L[0]) && L[1] == (F | _ | T | V) && !L[4].length && L[9] == 1 ? P = P[La(L[0])].apply(P, L[3]) : P = S.length == 1 && Jl(S) ? P[$]() : P.thru(S);
            }
            return function() {
              var X = arguments, J = X[0];
              if (P && X.length == 1 && Fe(J))
                return P.plant(J).value();
              for (var ne = 0, he = s ? o[ne].apply(this, X) : J; ++ne < s; )
                he = o[ne].call(this, he);
              return he;
            };
          });
        }
        function Na(t, o, s, f, g, S, P, $, L, X) {
          var J = o & F, ne = o & R, he = o & A, Ce = o & (_ | C), Pe = o & Q, ze = he ? r : Oi(t);
          function Ie() {
            for (var He = arguments.length, Xe = W(He), Cn = He; Cn--; )
              Xe[Cn] = arguments[Cn];
            if (Ce)
              var dn = zo(Ie), _n = Ym(Xe, dn);
            if (f && (Xe = Kf(Xe, f, g, Ce)), S && (Xe = Yf(Xe, S, P, Ce)), He -= _n, Ce && He < X) {
              var kt = qr(Xe, dn);
              return rp(
                t,
                o,
                Na,
                Ie.placeholder,
                s,
                Xe,
                kt,
                $,
                L,
                X - He
              );
            }
            var rr = ne ? s : this, Mr = he ? rr[t] : t;
            return He = Xe.length, $ ? Xe = rb(Xe, $) : Pe && He > 1 && Xe.reverse(), J && L < He && (Xe.length = L), this && this !== Yt && this instanceof Ie && (Mr = ze || Oi(Mr)), Mr.apply(rr, Xe);
          }
          return Ie;
        }
        function tp(t, o) {
          return function(s, f) {
            return fv(s, t, o(f), {});
          };
        }
        function Ma(t, o) {
          return function(s, f) {
            var g;
            if (s === r && f === r)
              return o;
            if (s !== r && (g = s), f !== r) {
              if (g === r)
                return f;
              typeof s == "string" || typeof f == "string" ? (s = Sn(s), f = Sn(f)) : (s = Wf(s), f = Wf(f)), g = t(s, f);
            }
            return g;
          };
        }
        function jl(t) {
          return Ir(function(o) {
            return o = Ot(o, wn(Re())), je(function(s) {
              var f = this;
              return t(o, function(g) {
                return Tn(g, f, s);
              });
            });
          });
        }
        function ka(t, o) {
          o = o === r ? " " : Sn(o);
          var s = o.length;
          if (s < 2)
            return s ? Ll(o, t) : o;
          var f = Ll(o, Ea(t / Mo(o)));
          return No(o) ? Zr(er(f), 0, t).join("") : f.slice(0, t);
        }
        function Fv(t, o, s, f) {
          var g = o & R, S = Oi(t);
          function P() {
            for (var $ = -1, L = arguments.length, X = -1, J = f.length, ne = W(J + L), he = this && this !== Yt && this instanceof P ? S : t; ++X < J; )
              ne[X] = f[X];
            for (; L--; )
              ne[X++] = arguments[++$];
            return Tn(he, g ? s : this, ne);
          }
          return P;
        }
        function np(t) {
          return function(o, s, f) {
            return f && typeof f != "number" && pn(o, s, f) && (s = f = r), o = Nr(o), s === r ? (s = o, o = 0) : s = Nr(s), f = f === r ? o < s ? 1 : -1 : Nr(f), wv(o, s, f, t);
          };
        }
        function Da(t) {
          return function(o, s) {
            return typeof o == "string" && typeof s == "string" || (o = jn(o), s = jn(s)), t(o, s);
          };
        }
        function rp(t, o, s, f, g, S, P, $, L, X) {
          var J = o & _, ne = J ? P : r, he = J ? r : P, Ce = J ? S : r, Pe = J ? r : S;
          o |= J ? T : N, o &= ~(J ? N : T), o & M || (o &= -4);
          var ze = [
            t,
            o,
            g,
            Ce,
            ne,
            Pe,
            he,
            $,
            L,
            X
          ], Ie = s.apply(r, ze);
          return Jl(t) && gp(Ie, ze), Ie.placeholder = f, mp(Ie, t, o);
        }
        function Hl(t) {
          var o = Vt[t];
          return function(s, f) {
            if (s = jn(s), f = f == null ? 0 : nn(We(f), 292), f && mf(s)) {
              var g = (nt(s) + "e").split("e"), S = o(g[0] + "e" + (+g[1] + f));
              return g = (nt(S) + "e").split("e"), +(g[0] + "e" + (+g[1] - f));
            }
            return o(s);
          };
        }
        var Bv = Lo && 1 / fa(new Lo([, -0]))[1] == ae ? function(t) {
          return new Lo(t);
        } : du;
        function op(t) {
          return function(o) {
            var s = rn(o);
            return s == Te ? El(o) : s == Ne ? ny(o) : Km(o, t(o));
          };
        }
        function Pr(t, o, s, f, g, S, P, $) {
          var L = o & A;
          if (!L && typeof t != "function")
            throw new Bn(c);
          var X = f ? f.length : 0;
          if (X || (o &= -97, f = g = r), P = P === r ? P : jt(We(P), 0), $ = $ === r ? $ : We($), X -= g ? g.length : 0, o & N) {
            var J = f, ne = g;
            f = g = r;
          }
          var he = L ? r : Kl(t), Ce = [
            t,
            o,
            s,
            f,
            g,
            J,
            ne,
            S,
            P,
            $
          ];
          if (he && eb(Ce, he), t = Ce[0], o = Ce[1], s = Ce[2], f = Ce[3], g = Ce[4], $ = Ce[9] = Ce[9] === r ? L ? 0 : t.length : jt(Ce[9] - X, 0), !$ && o & (_ | C) && (o &= -25), !o || o == R)
            var Pe = Dv(t, o, s);
          else o == _ || o == C ? Pe = Lv(t, o, $) : (o == T || o == (R | T)) && !g.length ? Pe = Fv(t, o, s, f) : Pe = Na.apply(r, Ce);
          var ze = he ? Ff : gp;
          return mp(ze(Pe, Ce), t, o);
        }
        function ip(t, o, s, f) {
          return t === r || nr(t, Do[s]) && !lt.call(f, s) ? o : t;
        }
        function ap(t, o, s, f, g, S) {
          return _t(t) && _t(o) && (S.set(o, t), Pa(t, o, r, ap, S), S.delete(o)), t;
        }
        function Wv(t) {
          return Ri(t) ? r : t;
        }
        function sp(t, o, s, f, g, S) {
          var P = s & O, $ = t.length, L = o.length;
          if ($ != L && !(P && L > $))
            return !1;
          var X = S.get(t), J = S.get(o);
          if (X && J)
            return X == o && J == t;
          var ne = -1, he = !0, Ce = s & b ? new po() : r;
          for (S.set(t, o), S.set(o, t); ++ne < $; ) {
            var Pe = t[ne], ze = o[ne];
            if (f)
              var Ie = P ? f(ze, Pe, ne, o, t, S) : f(Pe, ze, ne, t, o, S);
            if (Ie !== r) {
              if (Ie)
                continue;
              he = !1;
              break;
            }
            if (Ce) {
              if (!gl(o, function(He, Xe) {
                if (!hi(Ce, Xe) && (Pe === He || g(Pe, He, s, f, S)))
                  return Ce.push(Xe);
              })) {
                he = !1;
                break;
              }
            } else if (!(Pe === ze || g(Pe, ze, s, f, S))) {
              he = !1;
              break;
            }
          }
          return S.delete(t), S.delete(o), he;
        }
        function Uv(t, o, s, f, g, S, P) {
          switch (s) {
            case Bt:
              if (t.byteLength != o.byteLength || t.byteOffset != o.byteOffset)
                return !1;
              t = t.buffer, o = o.buffer;
            case Ft:
              return !(t.byteLength != o.byteLength || !S(new ya(t), new ya(o)));
            case le:
            case ce:
            case _e:
              return nr(+t, +o);
            case ve:
              return t.name == o.name && t.message == o.message;
            case Ge:
            case we:
              return t == o + "";
            case Te:
              var $ = El;
            case Ne:
              var L = f & O;
              if ($ || ($ = fa), t.size != o.size && !L)
                return !1;
              var X = P.get(t);
              if (X)
                return X == o;
              f |= b, P.set(t, o);
              var J = sp($(t), $(o), f, g, S, P);
              return P.delete(t), J;
            case $t:
              if (bi)
                return bi.call(t) == bi.call(o);
          }
          return !1;
        }
        function zv(t, o, s, f, g, S) {
          var P = s & O, $ = ql(t), L = $.length, X = ql(o), J = X.length;
          if (L != J && !P)
            return !1;
          for (var ne = L; ne--; ) {
            var he = $[ne];
            if (!(P ? he in o : lt.call(o, he)))
              return !1;
          }
          var Ce = S.get(t), Pe = S.get(o);
          if (Ce && Pe)
            return Ce == o && Pe == t;
          var ze = !0;
          S.set(t, o), S.set(o, t);
          for (var Ie = P; ++ne < L; ) {
            he = $[ne];
            var He = t[he], Xe = o[he];
            if (f)
              var Cn = P ? f(Xe, He, he, o, t, S) : f(He, Xe, he, t, o, S);
            if (!(Cn === r ? He === Xe || g(He, Xe, s, f, S) : Cn)) {
              ze = !1;
              break;
            }
            Ie || (Ie = he == "constructor");
          }
          if (ze && !Ie) {
            var dn = t.constructor, _n = o.constructor;
            dn != _n && "constructor" in t && "constructor" in o && !(typeof dn == "function" && dn instanceof dn && typeof _n == "function" && _n instanceof _n) && (ze = !1);
          }
          return S.delete(t), S.delete(o), ze;
        }
        function Ir(t) {
          return eu(dp(t, r, Tp), t + "");
        }
        function ql(t) {
          return _f(t, Gt, Xl);
        }
        function Gl(t) {
          return _f(t, mn, lp);
        }
        var Kl = wa ? function(t) {
          return wa.get(t);
        } : du;
        function La(t) {
          for (var o = t.name + "", s = Fo[o], f = lt.call(Fo, o) ? s.length : 0; f--; ) {
            var g = s[f], S = g.func;
            if (S == null || S == t)
              return g.name;
          }
          return o;
        }
        function zo(t) {
          var o = lt.call(x, "placeholder") ? x : t;
          return o.placeholder;
        }
        function Re() {
          var t = x.iteratee || fu;
          return t = t === fu ? If : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function Fa(t, o) {
          var s = t.__data__;
          return Xv(o) ? s[typeof o == "string" ? "string" : "hash"] : s.map;
        }
        function Yl(t) {
          for (var o = Gt(t), s = o.length; s--; ) {
            var f = o[s], g = t[f];
            o[s] = [f, g, fp(g)];
          }
          return o;
        }
        function mo(t, o) {
          var s = Qm(t, o);
          return Pf(s) ? s : r;
        }
        function Vv(t) {
          var o = lt.call(t, co), s = t[co];
          try {
            t[co] = r;
            var f = !0;
          } catch {
          }
          var g = ga.call(t);
          return f && (o ? t[co] = s : delete t[co]), g;
        }
        var Xl = wl ? function(t) {
          return t == null ? [] : (t = dt(t), jr(wl(t), function(o) {
            return hf.call(t, o);
          }));
        } : hu, lp = wl ? function(t) {
          for (var o = []; t; )
            Hr(o, Xl(t)), t = va(t);
          return o;
        } : hu, rn = fn;
        (Sl && rn(new Sl(new ArrayBuffer(1))) != Bt || mi && rn(new mi()) != Te || Ol && rn(Ol.resolve()) != pt || Lo && rn(new Lo()) != Ne || yi && rn(new yi()) != Nt) && (rn = function(t) {
          var o = fn(t), s = o == ge ? t.constructor : r, f = s ? yo(s) : "";
          if (f)
            switch (f) {
              case Oy:
                return Bt;
              case Cy:
                return Te;
              case _y:
                return pt;
              case Ry:
                return Ne;
              case Py:
                return Nt;
            }
          return o;
        });
        function jv(t, o, s) {
          for (var f = -1, g = s.length; ++f < g; ) {
            var S = s[f], P = S.size;
            switch (S.type) {
              case "drop":
                t += P;
                break;
              case "dropRight":
                o -= P;
                break;
              case "take":
                o = nn(o, t + P);
                break;
              case "takeRight":
                t = jt(t, o - P);
                break;
            }
          }
          return { start: t, end: o };
        }
        function Hv(t) {
          var o = t.match(di);
          return o ? o[1].split(ao) : [];
        }
        function up(t, o, s) {
          o = Xr(o, t);
          for (var f = -1, g = o.length, S = !1; ++f < g; ) {
            var P = pr(o[f]);
            if (!(S = t != null && s(t, P)))
              break;
            t = t[P];
          }
          return S || ++f != g ? S : (g = t == null ? 0 : t.length, !!g && Ha(g) && Ar(P, g) && (Fe(t) || vo(t)));
        }
        function qv(t) {
          var o = t.length, s = new t.constructor(o);
          return o && typeof t[0] == "string" && lt.call(t, "index") && (s.index = t.index, s.input = t.input), s;
        }
        function cp(t) {
          return typeof t.constructor == "function" && !Ci(t) ? Bo(va(t)) : {};
        }
        function Gv(t, o, s) {
          var f = t.constructor;
          switch (o) {
            case Ft:
              return Vl(t);
            case le:
            case ce:
              return new f(+t);
            case Bt:
              return Iv(t, s);
            case yt:
            case Je:
            case Me:
            case cn:
            case Ht:
            case sr:
            case en:
            case xe:
            case Ue:
              return qf(t, s);
            case Te:
              return new f();
            case _e:
            case we:
              return new f(t);
            case Ge:
              return Av(t);
            case Ne:
              return new f();
            case $t:
              return $v(t);
          }
        }
        function Kv(t, o) {
          var s = o.length;
          if (!s)
            return t;
          var f = s - 1;
          return o[f] = (s > 1 ? "& " : "") + o[f], o = o.join(s > 2 ? ", " : " "), t.replace(pi, `{
/* [wrapped with ` + o + `] */
`);
        }
        function Yv(t) {
          return Fe(t) || vo(t) || !!(gf && t && t[gf]);
        }
        function Ar(t, o) {
          var s = typeof t;
          return o = o ?? pe, !!o && (s == "number" || s != "symbol" && Ye.test(t)) && t > -1 && t % 1 == 0 && t < o;
        }
        function pn(t, o, s) {
          if (!_t(s))
            return !1;
          var f = typeof o;
          return (f == "number" ? gn(s) && Ar(o, s.length) : f == "string" && o in s) ? nr(s[o], t) : !1;
        }
        function Zl(t, o) {
          if (Fe(t))
            return !1;
          var s = typeof t;
          return s == "number" || s == "symbol" || s == "boolean" || t == null || On(t) ? !0 : ci.test(t) || !ui.test(t) || o != null && t in dt(o);
        }
        function Xv(t) {
          var o = typeof t;
          return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null;
        }
        function Jl(t) {
          var o = La(t), s = x[o];
          if (typeof s != "function" || !(o in Ke.prototype))
            return !1;
          if (t === s)
            return !0;
          var f = Kl(s);
          return !!f && t === f[0];
        }
        function Zv(t) {
          return !!ff && ff in t;
        }
        var Jv = da ? $r : gu;
        function Ci(t) {
          var o = t && t.constructor, s = typeof o == "function" && o.prototype || Do;
          return t === s;
        }
        function fp(t) {
          return t === t && !_t(t);
        }
        function pp(t, o) {
          return function(s) {
            return s == null ? !1 : s[t] === o && (o !== r || t in dt(s));
          };
        }
        function Qv(t) {
          var o = Va(t, function(f) {
            return s.size === h && s.clear(), f;
          }), s = o.cache;
          return o;
        }
        function eb(t, o) {
          var s = t[1], f = o[1], g = s | f, S = g < (R | A | F), P = f == F && s == _ || f == F && s == V && t[7].length <= o[8] || f == (F | V) && o[7].length <= o[8] && s == _;
          if (!(S || P))
            return t;
          f & R && (t[2] = o[2], g |= s & R ? 0 : M);
          var $ = o[3];
          if ($) {
            var L = t[3];
            t[3] = L ? Kf(L, $, o[4]) : $, t[4] = L ? qr(t[3], y) : o[4];
          }
          return $ = o[5], $ && (L = t[5], t[5] = L ? Yf(L, $, o[6]) : $, t[6] = L ? qr(t[5], y) : o[6]), $ = o[7], $ && (t[7] = $), f & F && (t[8] = t[8] == null ? o[8] : nn(t[8], o[8])), t[9] == null && (t[9] = o[9]), t[0] = o[0], t[1] = g, t;
        }
        function tb(t) {
          var o = [];
          if (t != null)
            for (var s in dt(t))
              o.push(s);
          return o;
        }
        function nb(t) {
          return ga.call(t);
        }
        function dp(t, o, s) {
          return o = jt(o === r ? t.length - 1 : o, 0), function() {
            for (var f = arguments, g = -1, S = jt(f.length - o, 0), P = W(S); ++g < S; )
              P[g] = f[o + g];
            g = -1;
            for (var $ = W(o + 1); ++g < o; )
              $[g] = f[g];
            return $[o] = s(P), Tn(t, this, $);
          };
        }
        function hp(t, o) {
          return o.length < 2 ? t : go(t, zn(o, 0, -1));
        }
        function rb(t, o) {
          for (var s = t.length, f = nn(o.length, s), g = hn(t); f--; ) {
            var S = o[f];
            t[f] = Ar(S, s) ? g[S] : r;
          }
          return t;
        }
        function Ql(t, o) {
          if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
            return t[o];
        }
        var gp = yp(Ff), _i = vy || function(t, o) {
          return Yt.setTimeout(t, o);
        }, eu = yp(Cv);
        function mp(t, o, s) {
          var f = o + "";
          return eu(t, Kv(f, ob(Hv(f), s)));
        }
        function yp(t) {
          var o = 0, s = 0;
          return function() {
            var f = Ty(), g = te - (f - s);
            if (s = f, g > 0) {
              if (++o >= U)
                return arguments[0];
            } else
              o = 0;
            return t.apply(r, arguments);
          };
        }
        function Ba(t, o) {
          var s = -1, f = t.length, g = f - 1;
          for (o = o === r ? f : o; ++s < o; ) {
            var S = Dl(s, g), P = t[S];
            t[S] = t[s], t[s] = P;
          }
          return t.length = o, t;
        }
        var vp = Qv(function(t) {
          var o = [];
          return t.charCodeAt(0) === 46 && o.push(""), t.replace(Sr, function(s, f, g, S) {
            o.push(g ? S.replace(Dn, "$1") : f || s);
          }), o;
        });
        function pr(t) {
          if (typeof t == "string" || On(t))
            return t;
          var o = t + "";
          return o == "0" && 1 / t == -1 / 0 ? "-0" : o;
        }
        function yo(t) {
          if (t != null) {
            try {
              return ha.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function ob(t, o) {
          return Fn(se, function(s) {
            var f = "_." + s[0];
            o & s[1] && !ua(t, f) && t.push(f);
          }), t.sort();
        }
        function bp(t) {
          if (t instanceof Ke)
            return t.clone();
          var o = new Wn(t.__wrapped__, t.__chain__);
          return o.__actions__ = hn(t.__actions__), o.__index__ = t.__index__, o.__values__ = t.__values__, o;
        }
        function ib(t, o, s) {
          (s ? pn(t, o, s) : o === r) ? o = 1 : o = jt(We(o), 0);
          var f = t == null ? 0 : t.length;
          if (!f || o < 1)
            return [];
          for (var g = 0, S = 0, P = W(Ea(f / o)); g < f; )
            P[S++] = zn(t, g, g += o);
          return P;
        }
        function ab(t) {
          for (var o = -1, s = t == null ? 0 : t.length, f = 0, g = []; ++o < s; ) {
            var S = t[o];
            S && (g[f++] = S);
          }
          return g;
        }
        function sb() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var o = W(t - 1), s = arguments[0], f = t; f--; )
            o[f - 1] = arguments[f];
          return Hr(Fe(s) ? hn(s) : [s], Xt(o, 1));
        }
        var lb = je(function(t, o) {
          return Mt(t) ? Ei(t, Xt(o, 1, Mt, !0)) : [];
        }), ub = je(function(t, o) {
          var s = Vn(o);
          return Mt(s) && (s = r), Mt(t) ? Ei(t, Xt(o, 1, Mt, !0), Re(s, 2)) : [];
        }), cb = je(function(t, o) {
          var s = Vn(o);
          return Mt(s) && (s = r), Mt(t) ? Ei(t, Xt(o, 1, Mt, !0), r, s) : [];
        });
        function fb(t, o, s) {
          var f = t == null ? 0 : t.length;
          return f ? (o = s || o === r ? 1 : We(o), zn(t, o < 0 ? 0 : o, f)) : [];
        }
        function pb(t, o, s) {
          var f = t == null ? 0 : t.length;
          return f ? (o = s || o === r ? 1 : We(o), o = f - o, zn(t, 0, o < 0 ? 0 : o)) : [];
        }
        function db(t, o) {
          return t && t.length ? Aa(t, Re(o, 3), !0, !0) : [];
        }
        function hb(t, o) {
          return t && t.length ? Aa(t, Re(o, 3), !0) : [];
        }
        function gb(t, o, s, f) {
          var g = t == null ? 0 : t.length;
          return g ? (s && typeof s != "number" && pn(t, o, s) && (s = 0, f = g), sv(t, o, s, f)) : [];
        }
        function xp(t, o, s) {
          var f = t == null ? 0 : t.length;
          if (!f)
            return -1;
          var g = s == null ? 0 : We(s);
          return g < 0 && (g = jt(f + g, 0)), ca(t, Re(o, 3), g);
        }
        function Ep(t, o, s) {
          var f = t == null ? 0 : t.length;
          if (!f)
            return -1;
          var g = f - 1;
          return s !== r && (g = We(s), g = s < 0 ? jt(f + g, 0) : nn(g, f - 1)), ca(t, Re(o, 3), g, !0);
        }
        function Tp(t) {
          var o = t == null ? 0 : t.length;
          return o ? Xt(t, 1) : [];
        }
        function mb(t) {
          var o = t == null ? 0 : t.length;
          return o ? Xt(t, ae) : [];
        }
        function yb(t, o) {
          var s = t == null ? 0 : t.length;
          return s ? (o = o === r ? 1 : We(o), Xt(t, o)) : [];
        }
        function vb(t) {
          for (var o = -1, s = t == null ? 0 : t.length, f = {}; ++o < s; ) {
            var g = t[o];
            f[g[0]] = g[1];
          }
          return f;
        }
        function wp(t) {
          return t && t.length ? t[0] : r;
        }
        function bb(t, o, s) {
          var f = t == null ? 0 : t.length;
          if (!f)
            return -1;
          var g = s == null ? 0 : We(s);
          return g < 0 && (g = jt(f + g, 0)), $o(t, o, g);
        }
        function xb(t) {
          var o = t == null ? 0 : t.length;
          return o ? zn(t, 0, -1) : [];
        }
        var Eb = je(function(t) {
          var o = Ot(t, Ul);
          return o.length && o[0] === t[0] ? Al(o) : [];
        }), Tb = je(function(t) {
          var o = Vn(t), s = Ot(t, Ul);
          return o === Vn(s) ? o = r : s.pop(), s.length && s[0] === t[0] ? Al(s, Re(o, 2)) : [];
        }), wb = je(function(t) {
          var o = Vn(t), s = Ot(t, Ul);
          return o = typeof o == "function" ? o : r, o && s.pop(), s.length && s[0] === t[0] ? Al(s, r, o) : [];
        });
        function Sb(t, o) {
          return t == null ? "" : xy.call(t, o);
        }
        function Vn(t) {
          var o = t == null ? 0 : t.length;
          return o ? t[o - 1] : r;
        }
        function Ob(t, o, s) {
          var f = t == null ? 0 : t.length;
          if (!f)
            return -1;
          var g = f;
          return s !== r && (g = We(s), g = g < 0 ? jt(f + g, 0) : nn(g, f - 1)), o === o ? oy(t, o, g) : ca(t, nf, g, !0);
        }
        function Cb(t, o) {
          return t && t.length ? Mf(t, We(o)) : r;
        }
        var _b = je(Sp);
        function Sp(t, o) {
          return t && t.length && o && o.length ? kl(t, o) : t;
        }
        function Rb(t, o, s) {
          return t && t.length && o && o.length ? kl(t, o, Re(s, 2)) : t;
        }
        function Pb(t, o, s) {
          return t && t.length && o && o.length ? kl(t, o, r, s) : t;
        }
        var Ib = Ir(function(t, o) {
          var s = t == null ? 0 : t.length, f = _l(t, o);
          return Lf(t, Ot(o, function(g) {
            return Ar(g, s) ? +g : g;
          }).sort(Gf)), f;
        });
        function Ab(t, o) {
          var s = [];
          if (!(t && t.length))
            return s;
          var f = -1, g = [], S = t.length;
          for (o = Re(o, 3); ++f < S; ) {
            var P = t[f];
            o(P, f, t) && (s.push(P), g.push(f));
          }
          return Lf(t, g), s;
        }
        function tu(t) {
          return t == null ? t : Sy.call(t);
        }
        function $b(t, o, s) {
          var f = t == null ? 0 : t.length;
          return f ? (s && typeof s != "number" && pn(t, o, s) ? (o = 0, s = f) : (o = o == null ? 0 : We(o), s = s === r ? f : We(s)), zn(t, o, s)) : [];
        }
        function Nb(t, o) {
          return Ia(t, o);
        }
        function Mb(t, o, s) {
          return Fl(t, o, Re(s, 2));
        }
        function kb(t, o) {
          var s = t == null ? 0 : t.length;
          if (s) {
            var f = Ia(t, o);
            if (f < s && nr(t[f], o))
              return f;
          }
          return -1;
        }
        function Db(t, o) {
          return Ia(t, o, !0);
        }
        function Lb(t, o, s) {
          return Fl(t, o, Re(s, 2), !0);
        }
        function Fb(t, o) {
          var s = t == null ? 0 : t.length;
          if (s) {
            var f = Ia(t, o, !0) - 1;
            if (nr(t[f], o))
              return f;
          }
          return -1;
        }
        function Bb(t) {
          return t && t.length ? Bf(t) : [];
        }
        function Wb(t, o) {
          return t && t.length ? Bf(t, Re(o, 2)) : [];
        }
        function Ub(t) {
          var o = t == null ? 0 : t.length;
          return o ? zn(t, 1, o) : [];
        }
        function zb(t, o, s) {
          return t && t.length ? (o = s || o === r ? 1 : We(o), zn(t, 0, o < 0 ? 0 : o)) : [];
        }
        function Vb(t, o, s) {
          var f = t == null ? 0 : t.length;
          return f ? (o = s || o === r ? 1 : We(o), o = f - o, zn(t, o < 0 ? 0 : o, f)) : [];
        }
        function jb(t, o) {
          return t && t.length ? Aa(t, Re(o, 3), !1, !0) : [];
        }
        function Hb(t, o) {
          return t && t.length ? Aa(t, Re(o, 3)) : [];
        }
        var qb = je(function(t) {
          return Yr(Xt(t, 1, Mt, !0));
        }), Gb = je(function(t) {
          var o = Vn(t);
          return Mt(o) && (o = r), Yr(Xt(t, 1, Mt, !0), Re(o, 2));
        }), Kb = je(function(t) {
          var o = Vn(t);
          return o = typeof o == "function" ? o : r, Yr(Xt(t, 1, Mt, !0), r, o);
        });
        function Yb(t) {
          return t && t.length ? Yr(t) : [];
        }
        function Xb(t, o) {
          return t && t.length ? Yr(t, Re(o, 2)) : [];
        }
        function Zb(t, o) {
          return o = typeof o == "function" ? o : r, t && t.length ? Yr(t, r, o) : [];
        }
        function nu(t) {
          if (!(t && t.length))
            return [];
          var o = 0;
          return t = jr(t, function(s) {
            if (Mt(s))
              return o = jt(s.length, o), !0;
          }), bl(o, function(s) {
            return Ot(t, ml(s));
          });
        }
        function Op(t, o) {
          if (!(t && t.length))
            return [];
          var s = nu(t);
          return o == null ? s : Ot(s, function(f) {
            return Tn(o, r, f);
          });
        }
        var Jb = je(function(t, o) {
          return Mt(t) ? Ei(t, o) : [];
        }), Qb = je(function(t) {
          return Wl(jr(t, Mt));
        }), e0 = je(function(t) {
          var o = Vn(t);
          return Mt(o) && (o = r), Wl(jr(t, Mt), Re(o, 2));
        }), t0 = je(function(t) {
          var o = Vn(t);
          return o = typeof o == "function" ? o : r, Wl(jr(t, Mt), r, o);
        }), n0 = je(nu);
        function r0(t, o) {
          return Vf(t || [], o || [], xi);
        }
        function o0(t, o) {
          return Vf(t || [], o || [], Si);
        }
        var i0 = je(function(t) {
          var o = t.length, s = o > 1 ? t[o - 1] : r;
          return s = typeof s == "function" ? (t.pop(), s) : r, Op(t, s);
        });
        function Cp(t) {
          var o = x(t);
          return o.__chain__ = !0, o;
        }
        function a0(t, o) {
          return o(t), t;
        }
        function Wa(t, o) {
          return o(t);
        }
        var s0 = Ir(function(t) {
          var o = t.length, s = o ? t[0] : 0, f = this.__wrapped__, g = function(S) {
            return _l(S, t);
          };
          return o > 1 || this.__actions__.length || !(f instanceof Ke) || !Ar(s) ? this.thru(g) : (f = f.slice(s, +s + (o ? 1 : 0)), f.__actions__.push({
            func: Wa,
            args: [g],
            thisArg: r
          }), new Wn(f, this.__chain__).thru(function(S) {
            return o && !S.length && S.push(r), S;
          }));
        });
        function l0() {
          return Cp(this);
        }
        function u0() {
          return new Wn(this.value(), this.__chain__);
        }
        function c0() {
          this.__values__ === r && (this.__values__ = Wp(this.value()));
          var t = this.__index__ >= this.__values__.length, o = t ? r : this.__values__[this.__index__++];
          return { done: t, value: o };
        }
        function f0() {
          return this;
        }
        function p0(t) {
          for (var o, s = this; s instanceof Oa; ) {
            var f = bp(s);
            f.__index__ = 0, f.__values__ = r, o ? g.__wrapped__ = f : o = f;
            var g = f;
            s = s.__wrapped__;
          }
          return g.__wrapped__ = t, o;
        }
        function d0() {
          var t = this.__wrapped__;
          if (t instanceof Ke) {
            var o = t;
            return this.__actions__.length && (o = new Ke(this)), o = o.reverse(), o.__actions__.push({
              func: Wa,
              args: [tu],
              thisArg: r
            }), new Wn(o, this.__chain__);
          }
          return this.thru(tu);
        }
        function h0() {
          return zf(this.__wrapped__, this.__actions__);
        }
        var g0 = $a(function(t, o, s) {
          lt.call(t, s) ? ++t[s] : Rr(t, s, 1);
        });
        function m0(t, o, s) {
          var f = Fe(t) ? ef : av;
          return s && pn(t, o, s) && (o = r), f(t, Re(o, 3));
        }
        function y0(t, o) {
          var s = Fe(t) ? jr : Of;
          return s(t, Re(o, 3));
        }
        var v0 = Qf(xp), b0 = Qf(Ep);
        function x0(t, o) {
          return Xt(Ua(t, o), 1);
        }
        function E0(t, o) {
          return Xt(Ua(t, o), ae);
        }
        function T0(t, o, s) {
          return s = s === r ? 1 : We(s), Xt(Ua(t, o), s);
        }
        function _p(t, o) {
          var s = Fe(t) ? Fn : Kr;
          return s(t, Re(o, 3));
        }
        function Rp(t, o) {
          var s = Fe(t) ? Um : Sf;
          return s(t, Re(o, 3));
        }
        var w0 = $a(function(t, o, s) {
          lt.call(t, s) ? t[s].push(o) : Rr(t, s, [o]);
        });
        function S0(t, o, s, f) {
          t = gn(t) ? t : jo(t), s = s && !f ? We(s) : 0;
          var g = t.length;
          return s < 0 && (s = jt(g + s, 0)), qa(t) ? s <= g && t.indexOf(o, s) > -1 : !!g && $o(t, o, s) > -1;
        }
        var O0 = je(function(t, o, s) {
          var f = -1, g = typeof o == "function", S = gn(t) ? W(t.length) : [];
          return Kr(t, function(P) {
            S[++f] = g ? Tn(o, P, s) : Ti(P, o, s);
          }), S;
        }), C0 = $a(function(t, o, s) {
          Rr(t, s, o);
        });
        function Ua(t, o) {
          var s = Fe(t) ? Ot : Af;
          return s(t, Re(o, 3));
        }
        function _0(t, o, s, f) {
          return t == null ? [] : (Fe(o) || (o = o == null ? [] : [o]), s = f ? r : s, Fe(s) || (s = s == null ? [] : [s]), kf(t, o, s));
        }
        var R0 = $a(function(t, o, s) {
          t[s ? 0 : 1].push(o);
        }, function() {
          return [[], []];
        });
        function P0(t, o, s) {
          var f = Fe(t) ? hl : of, g = arguments.length < 3;
          return f(t, Re(o, 4), s, g, Kr);
        }
        function I0(t, o, s) {
          var f = Fe(t) ? zm : of, g = arguments.length < 3;
          return f(t, Re(o, 4), s, g, Sf);
        }
        function A0(t, o) {
          var s = Fe(t) ? jr : Of;
          return s(t, ja(Re(o, 3)));
        }
        function $0(t) {
          var o = Fe(t) ? xf : Sv;
          return o(t);
        }
        function N0(t, o, s) {
          (s ? pn(t, o, s) : o === r) ? o = 1 : o = We(o);
          var f = Fe(t) ? tv : Ov;
          return f(t, o);
        }
        function M0(t) {
          var o = Fe(t) ? nv : _v;
          return o(t);
        }
        function k0(t) {
          if (t == null)
            return 0;
          if (gn(t))
            return qa(t) ? Mo(t) : t.length;
          var o = rn(t);
          return o == Te || o == Ne ? t.size : Nl(t).length;
        }
        function D0(t, o, s) {
          var f = Fe(t) ? gl : Rv;
          return s && pn(t, o, s) && (o = r), f(t, Re(o, 3));
        }
        var L0 = je(function(t, o) {
          if (t == null)
            return [];
          var s = o.length;
          return s > 1 && pn(t, o[0], o[1]) ? o = [] : s > 2 && pn(o[0], o[1], o[2]) && (o = [o[0]]), kf(t, Xt(o, 1), []);
        }), za = yy || function() {
          return Yt.Date.now();
        };
        function F0(t, o) {
          if (typeof o != "function")
            throw new Bn(c);
          return t = We(t), function() {
            if (--t < 1)
              return o.apply(this, arguments);
          };
        }
        function Pp(t, o, s) {
          return o = s ? r : o, o = t && o == null ? t.length : o, Pr(t, F, r, r, r, r, o);
        }
        function Ip(t, o) {
          var s;
          if (typeof o != "function")
            throw new Bn(c);
          return t = We(t), function() {
            return --t > 0 && (s = o.apply(this, arguments)), t <= 1 && (o = r), s;
          };
        }
        var ru = je(function(t, o, s) {
          var f = R;
          if (s.length) {
            var g = qr(s, zo(ru));
            f |= T;
          }
          return Pr(t, f, o, s, g);
        }), Ap = je(function(t, o, s) {
          var f = R | A;
          if (s.length) {
            var g = qr(s, zo(Ap));
            f |= T;
          }
          return Pr(o, f, t, s, g);
        });
        function $p(t, o, s) {
          o = s ? r : o;
          var f = Pr(t, _, r, r, r, r, r, o);
          return f.placeholder = $p.placeholder, f;
        }
        function Np(t, o, s) {
          o = s ? r : o;
          var f = Pr(t, C, r, r, r, r, r, o);
          return f.placeholder = Np.placeholder, f;
        }
        function Mp(t, o, s) {
          var f, g, S, P, $, L, X = 0, J = !1, ne = !1, he = !0;
          if (typeof t != "function")
            throw new Bn(c);
          o = jn(o) || 0, _t(s) && (J = !!s.leading, ne = "maxWait" in s, S = ne ? jt(jn(s.maxWait) || 0, o) : S, he = "trailing" in s ? !!s.trailing : he);
          function Ce(kt) {
            var rr = f, Mr = g;
            return f = g = r, X = kt, P = t.apply(Mr, rr), P;
          }
          function Pe(kt) {
            return X = kt, $ = _i(He, o), J ? Ce(kt) : P;
          }
          function ze(kt) {
            var rr = kt - L, Mr = kt - X, Qp = o - rr;
            return ne ? nn(Qp, S - Mr) : Qp;
          }
          function Ie(kt) {
            var rr = kt - L, Mr = kt - X;
            return L === r || rr >= o || rr < 0 || ne && Mr >= S;
          }
          function He() {
            var kt = za();
            if (Ie(kt))
              return Xe(kt);
            $ = _i(He, ze(kt));
          }
          function Xe(kt) {
            return $ = r, he && f ? Ce(kt) : (f = g = r, P);
          }
          function Cn() {
            $ !== r && jf($), X = 0, f = L = g = $ = r;
          }
          function dn() {
            return $ === r ? P : Xe(za());
          }
          function _n() {
            var kt = za(), rr = Ie(kt);
            if (f = arguments, g = this, L = kt, rr) {
              if ($ === r)
                return Pe(L);
              if (ne)
                return jf($), $ = _i(He, o), Ce(L);
            }
            return $ === r && ($ = _i(He, o)), P;
          }
          return _n.cancel = Cn, _n.flush = dn, _n;
        }
        var B0 = je(function(t, o) {
          return wf(t, 1, o);
        }), W0 = je(function(t, o, s) {
          return wf(t, jn(o) || 0, s);
        });
        function U0(t) {
          return Pr(t, Q);
        }
        function Va(t, o) {
          if (typeof t != "function" || o != null && typeof o != "function")
            throw new Bn(c);
          var s = function() {
            var f = arguments, g = o ? o.apply(this, f) : f[0], S = s.cache;
            if (S.has(g))
              return S.get(g);
            var P = t.apply(this, f);
            return s.cache = S.set(g, P) || S, P;
          };
          return s.cache = new (Va.Cache || _r)(), s;
        }
        Va.Cache = _r;
        function ja(t) {
          if (typeof t != "function")
            throw new Bn(c);
          return function() {
            var o = arguments;
            switch (o.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, o[0]);
              case 2:
                return !t.call(this, o[0], o[1]);
              case 3:
                return !t.call(this, o[0], o[1], o[2]);
            }
            return !t.apply(this, o);
          };
        }
        function z0(t) {
          return Ip(2, t);
        }
        var V0 = Pv(function(t, o) {
          o = o.length == 1 && Fe(o[0]) ? Ot(o[0], wn(Re())) : Ot(Xt(o, 1), wn(Re()));
          var s = o.length;
          return je(function(f) {
            for (var g = -1, S = nn(f.length, s); ++g < S; )
              f[g] = o[g].call(this, f[g]);
            return Tn(t, this, f);
          });
        }), ou = je(function(t, o) {
          var s = qr(o, zo(ou));
          return Pr(t, T, r, o, s);
        }), kp = je(function(t, o) {
          var s = qr(o, zo(kp));
          return Pr(t, N, r, o, s);
        }), j0 = Ir(function(t, o) {
          return Pr(t, V, r, r, r, o);
        });
        function H0(t, o) {
          if (typeof t != "function")
            throw new Bn(c);
          return o = o === r ? o : We(o), je(t, o);
        }
        function q0(t, o) {
          if (typeof t != "function")
            throw new Bn(c);
          return o = o == null ? 0 : jt(We(o), 0), je(function(s) {
            var f = s[o], g = Zr(s, 0, o);
            return f && Hr(g, f), Tn(t, this, g);
          });
        }
        function G0(t, o, s) {
          var f = !0, g = !0;
          if (typeof t != "function")
            throw new Bn(c);
          return _t(s) && (f = "leading" in s ? !!s.leading : f, g = "trailing" in s ? !!s.trailing : g), Mp(t, o, {
            leading: f,
            maxWait: o,
            trailing: g
          });
        }
        function K0(t) {
          return Pp(t, 1);
        }
        function Y0(t, o) {
          return ou(zl(o), t);
        }
        function X0() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return Fe(t) ? t : [t];
        }
        function Z0(t) {
          return Un(t, w);
        }
        function J0(t, o) {
          return o = typeof o == "function" ? o : r, Un(t, w, o);
        }
        function Q0(t) {
          return Un(t, m | w);
        }
        function e1(t, o) {
          return o = typeof o == "function" ? o : r, Un(t, m | w, o);
        }
        function t1(t, o) {
          return o == null || Tf(t, o, Gt(o));
        }
        function nr(t, o) {
          return t === o || t !== t && o !== o;
        }
        var n1 = Da(Il), r1 = Da(function(t, o) {
          return t >= o;
        }), vo = Rf(/* @__PURE__ */ function() {
          return arguments;
        }()) ? Rf : function(t) {
          return Pt(t) && lt.call(t, "callee") && !hf.call(t, "callee");
        }, Fe = W.isArray, o1 = Kc ? wn(Kc) : pv;
        function gn(t) {
          return t != null && Ha(t.length) && !$r(t);
        }
        function Mt(t) {
          return Pt(t) && gn(t);
        }
        function i1(t) {
          return t === !0 || t === !1 || Pt(t) && fn(t) == le;
        }
        var Jr = by || gu, a1 = Yc ? wn(Yc) : dv;
        function s1(t) {
          return Pt(t) && t.nodeType === 1 && !Ri(t);
        }
        function l1(t) {
          if (t == null)
            return !0;
          if (gn(t) && (Fe(t) || typeof t == "string" || typeof t.splice == "function" || Jr(t) || Vo(t) || vo(t)))
            return !t.length;
          var o = rn(t);
          if (o == Te || o == Ne)
            return !t.size;
          if (Ci(t))
            return !Nl(t).length;
          for (var s in t)
            if (lt.call(t, s))
              return !1;
          return !0;
        }
        function u1(t, o) {
          return wi(t, o);
        }
        function c1(t, o, s) {
          s = typeof s == "function" ? s : r;
          var f = s ? s(t, o) : r;
          return f === r ? wi(t, o, r, s) : !!f;
        }
        function iu(t) {
          if (!Pt(t))
            return !1;
          var o = fn(t);
          return o == ve || o == ue || typeof t.message == "string" && typeof t.name == "string" && !Ri(t);
        }
        function f1(t) {
          return typeof t == "number" && mf(t);
        }
        function $r(t) {
          if (!_t(t))
            return !1;
          var o = fn(t);
          return o == D || o == Ae || o == ye || o == $e;
        }
        function Dp(t) {
          return typeof t == "number" && t == We(t);
        }
        function Ha(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pe;
        }
        function _t(t) {
          var o = typeof t;
          return t != null && (o == "object" || o == "function");
        }
        function Pt(t) {
          return t != null && typeof t == "object";
        }
        var Lp = Xc ? wn(Xc) : gv;
        function p1(t, o) {
          return t === o || $l(t, o, Yl(o));
        }
        function d1(t, o, s) {
          return s = typeof s == "function" ? s : r, $l(t, o, Yl(o), s);
        }
        function h1(t) {
          return Fp(t) && t != +t;
        }
        function g1(t) {
          if (Jv(t))
            throw new De(u);
          return Pf(t);
        }
        function m1(t) {
          return t === null;
        }
        function y1(t) {
          return t == null;
        }
        function Fp(t) {
          return typeof t == "number" || Pt(t) && fn(t) == _e;
        }
        function Ri(t) {
          if (!Pt(t) || fn(t) != ge)
            return !1;
          var o = va(t);
          if (o === null)
            return !0;
          var s = lt.call(o, "constructor") && o.constructor;
          return typeof s == "function" && s instanceof s && ha.call(s) == dy;
        }
        var au = Zc ? wn(Zc) : mv;
        function v1(t) {
          return Dp(t) && t >= -9007199254740991 && t <= pe;
        }
        var Bp = Jc ? wn(Jc) : yv;
        function qa(t) {
          return typeof t == "string" || !Fe(t) && Pt(t) && fn(t) == we;
        }
        function On(t) {
          return typeof t == "symbol" || Pt(t) && fn(t) == $t;
        }
        var Vo = Qc ? wn(Qc) : vv;
        function b1(t) {
          return t === r;
        }
        function x1(t) {
          return Pt(t) && rn(t) == Nt;
        }
        function E1(t) {
          return Pt(t) && fn(t) == un;
        }
        var T1 = Da(Ml), w1 = Da(function(t, o) {
          return t <= o;
        });
        function Wp(t) {
          if (!t)
            return [];
          if (gn(t))
            return qa(t) ? er(t) : hn(t);
          if (gi && t[gi])
            return ty(t[gi]());
          var o = rn(t), s = o == Te ? El : o == Ne ? fa : jo;
          return s(t);
        }
        function Nr(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = jn(t), t === ae || t === -1 / 0) {
            var o = t < 0 ? -1 : 1;
            return o * K;
          }
          return t === t ? t : 0;
        }
        function We(t) {
          var o = Nr(t), s = o % 1;
          return o === o ? s ? o - s : o : 0;
        }
        function Up(t) {
          return t ? ho(We(t), 0, Z) : 0;
        }
        function jn(t) {
          if (typeof t == "number")
            return t;
          if (On(t))
            return z;
          if (_t(t)) {
            var o = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = _t(o) ? o + "" : o;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = af(t);
          var s = de.test(t);
          return s || Be.test(t) ? Fm(t.slice(2), s ? 2 : 8) : j.test(t) ? z : +t;
        }
        function zp(t) {
          return fr(t, mn(t));
        }
        function S1(t) {
          return t ? ho(We(t), -9007199254740991, pe) : t === 0 ? t : 0;
        }
        function nt(t) {
          return t == null ? "" : Sn(t);
        }
        var O1 = Wo(function(t, o) {
          if (Ci(o) || gn(o)) {
            fr(o, Gt(o), t);
            return;
          }
          for (var s in o)
            lt.call(o, s) && xi(t, s, o[s]);
        }), Vp = Wo(function(t, o) {
          fr(o, mn(o), t);
        }), Ga = Wo(function(t, o, s, f) {
          fr(o, mn(o), t, f);
        }), C1 = Wo(function(t, o, s, f) {
          fr(o, Gt(o), t, f);
        }), _1 = Ir(_l);
        function R1(t, o) {
          var s = Bo(t);
          return o == null ? s : Ef(s, o);
        }
        var P1 = je(function(t, o) {
          t = dt(t);
          var s = -1, f = o.length, g = f > 2 ? o[2] : r;
          for (g && pn(o[0], o[1], g) && (f = 1); ++s < f; )
            for (var S = o[s], P = mn(S), $ = -1, L = P.length; ++$ < L; ) {
              var X = P[$], J = t[X];
              (J === r || nr(J, Do[X]) && !lt.call(t, X)) && (t[X] = S[X]);
            }
          return t;
        }), I1 = je(function(t) {
          return t.push(r, ap), Tn(jp, r, t);
        });
        function A1(t, o) {
          return tf(t, Re(o, 3), cr);
        }
        function $1(t, o) {
          return tf(t, Re(o, 3), Pl);
        }
        function N1(t, o) {
          return t == null ? t : Rl(t, Re(o, 3), mn);
        }
        function M1(t, o) {
          return t == null ? t : Cf(t, Re(o, 3), mn);
        }
        function k1(t, o) {
          return t && cr(t, Re(o, 3));
        }
        function D1(t, o) {
          return t && Pl(t, Re(o, 3));
        }
        function L1(t) {
          return t == null ? [] : Ra(t, Gt(t));
        }
        function F1(t) {
          return t == null ? [] : Ra(t, mn(t));
        }
        function su(t, o, s) {
          var f = t == null ? r : go(t, o);
          return f === r ? s : f;
        }
        function B1(t, o) {
          return t != null && up(t, o, lv);
        }
        function lu(t, o) {
          return t != null && up(t, o, uv);
        }
        var W1 = tp(function(t, o, s) {
          o != null && typeof o.toString != "function" && (o = ga.call(o)), t[o] = s;
        }, cu(yn)), U1 = tp(function(t, o, s) {
          o != null && typeof o.toString != "function" && (o = ga.call(o)), lt.call(t, o) ? t[o].push(s) : t[o] = [s];
        }, Re), z1 = je(Ti);
        function Gt(t) {
          return gn(t) ? bf(t) : Nl(t);
        }
        function mn(t) {
          return gn(t) ? bf(t, !0) : bv(t);
        }
        function V1(t, o) {
          var s = {};
          return o = Re(o, 3), cr(t, function(f, g, S) {
            Rr(s, o(f, g, S), f);
          }), s;
        }
        function j1(t, o) {
          var s = {};
          return o = Re(o, 3), cr(t, function(f, g, S) {
            Rr(s, g, o(f, g, S));
          }), s;
        }
        var H1 = Wo(function(t, o, s) {
          Pa(t, o, s);
        }), jp = Wo(function(t, o, s, f) {
          Pa(t, o, s, f);
        }), q1 = Ir(function(t, o) {
          var s = {};
          if (t == null)
            return s;
          var f = !1;
          o = Ot(o, function(S) {
            return S = Xr(S, t), f || (f = S.length > 1), S;
          }), fr(t, Gl(t), s), f && (s = Un(s, m | v | w, Wv));
          for (var g = o.length; g--; )
            Bl(s, o[g]);
          return s;
        });
        function G1(t, o) {
          return Hp(t, ja(Re(o)));
        }
        var K1 = Ir(function(t, o) {
          return t == null ? {} : Ev(t, o);
        });
        function Hp(t, o) {
          if (t == null)
            return {};
          var s = Ot(Gl(t), function(f) {
            return [f];
          });
          return o = Re(o), Df(t, s, function(f, g) {
            return o(f, g[0]);
          });
        }
        function Y1(t, o, s) {
          o = Xr(o, t);
          var f = -1, g = o.length;
          for (g || (g = 1, t = r); ++f < g; ) {
            var S = t == null ? r : t[pr(o[f])];
            S === r && (f = g, S = s), t = $r(S) ? S.call(t) : S;
          }
          return t;
        }
        function X1(t, o, s) {
          return t == null ? t : Si(t, o, s);
        }
        function Z1(t, o, s, f) {
          return f = typeof f == "function" ? f : r, t == null ? t : Si(t, o, s, f);
        }
        var qp = op(Gt), Gp = op(mn);
        function J1(t, o, s) {
          var f = Fe(t), g = f || Jr(t) || Vo(t);
          if (o = Re(o, 4), s == null) {
            var S = t && t.constructor;
            g ? s = f ? new S() : [] : _t(t) ? s = $r(S) ? Bo(va(t)) : {} : s = {};
          }
          return (g ? Fn : cr)(t, function(P, $, L) {
            return o(s, P, $, L);
          }), s;
        }
        function Q1(t, o) {
          return t == null ? !0 : Bl(t, o);
        }
        function ex(t, o, s) {
          return t == null ? t : Uf(t, o, zl(s));
        }
        function tx(t, o, s, f) {
          return f = typeof f == "function" ? f : r, t == null ? t : Uf(t, o, zl(s), f);
        }
        function jo(t) {
          return t == null ? [] : xl(t, Gt(t));
        }
        function nx(t) {
          return t == null ? [] : xl(t, mn(t));
        }
        function rx(t, o, s) {
          return s === r && (s = o, o = r), s !== r && (s = jn(s), s = s === s ? s : 0), o !== r && (o = jn(o), o = o === o ? o : 0), ho(jn(t), o, s);
        }
        function ox(t, o, s) {
          return o = Nr(o), s === r ? (s = o, o = 0) : s = Nr(s), t = jn(t), cv(t, o, s);
        }
        function ix(t, o, s) {
          if (s && typeof s != "boolean" && pn(t, o, s) && (o = s = r), s === r && (typeof o == "boolean" ? (s = o, o = r) : typeof t == "boolean" && (s = t, t = r)), t === r && o === r ? (t = 0, o = 1) : (t = Nr(t), o === r ? (o = t, t = 0) : o = Nr(o)), t > o) {
            var f = t;
            t = o, o = f;
          }
          if (s || t % 1 || o % 1) {
            var g = yf();
            return nn(t + g * (o - t + Lm("1e-" + ((g + "").length - 1))), o);
          }
          return Dl(t, o);
        }
        var ax = Uo(function(t, o, s) {
          return o = o.toLowerCase(), t + (s ? Kp(o) : o);
        });
        function Kp(t) {
          return uu(nt(t).toLowerCase());
        }
        function Yp(t) {
          return t = nt(t), t && t.replace(Rt, Xm).replace(_m, "");
        }
        function sx(t, o, s) {
          t = nt(t), o = Sn(o);
          var f = t.length;
          s = s === r ? f : ho(We(s), 0, f);
          var g = s;
          return s -= o.length, s >= 0 && t.slice(s, g) == o;
        }
        function lx(t) {
          return t = nt(t), t && kn.test(t) ? t.replace(Jn, Zm) : t;
        }
        function ux(t) {
          return t = nt(t), t && oo.test(t) ? t.replace(Or, "\\$&") : t;
        }
        var cx = Uo(function(t, o, s) {
          return t + (s ? "-" : "") + o.toLowerCase();
        }), fx = Uo(function(t, o, s) {
          return t + (s ? " " : "") + o.toLowerCase();
        }), px = Jf("toLowerCase");
        function dx(t, o, s) {
          t = nt(t), o = We(o);
          var f = o ? Mo(t) : 0;
          if (!o || f >= o)
            return t;
          var g = (o - f) / 2;
          return ka(Ta(g), s) + t + ka(Ea(g), s);
        }
        function hx(t, o, s) {
          t = nt(t), o = We(o);
          var f = o ? Mo(t) : 0;
          return o && f < o ? t + ka(o - f, s) : t;
        }
        function gx(t, o, s) {
          t = nt(t), o = We(o);
          var f = o ? Mo(t) : 0;
          return o && f < o ? ka(o - f, s) + t : t;
        }
        function mx(t, o, s) {
          return s || o == null ? o = 0 : o && (o = +o), wy(nt(t).replace(io, ""), o || 0);
        }
        function yx(t, o, s) {
          return (s ? pn(t, o, s) : o === r) ? o = 1 : o = We(o), Ll(nt(t), o);
        }
        function vx() {
          var t = arguments, o = nt(t[0]);
          return t.length < 3 ? o : o.replace(t[1], t[2]);
        }
        var bx = Uo(function(t, o, s) {
          return t + (s ? "_" : "") + o.toLowerCase();
        });
        function xx(t, o, s) {
          return s && typeof s != "number" && pn(t, o, s) && (o = s = r), s = s === r ? Z : s >>> 0, s ? (t = nt(t), t && (typeof o == "string" || o != null && !au(o)) && (o = Sn(o), !o && No(t)) ? Zr(er(t), 0, s) : t.split(o, s)) : [];
        }
        var Ex = Uo(function(t, o, s) {
          return t + (s ? " " : "") + uu(o);
        });
        function Tx(t, o, s) {
          return t = nt(t), s = s == null ? 0 : ho(We(s), 0, t.length), o = Sn(o), t.slice(s, s + o.length) == o;
        }
        function wx(t, o, s) {
          var f = x.templateSettings;
          s && pn(t, o, s) && (o = r), t = nt(t), o = Ga({}, o, f, ip);
          var g = Ga({}, o.imports, f.imports, ip), S = Gt(g), P = xl(g, S), $, L, X = 0, J = o.interpolate || Ut, ne = "__p += '", he = Tl(
            (o.escape || Ut).source + "|" + J.source + "|" + (J === ur ? _o : Ut).source + "|" + (o.evaluate || Ut).source + "|$",
            "g"
          ), Ce = "//# sourceURL=" + (lt.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$m + "]") + `
`;
          t.replace(he, function(Ie, He, Xe, Cn, dn, _n) {
            return Xe || (Xe = Cn), ne += t.slice(X, _n).replace(so, Jm), He && ($ = !0, ne += `' +
__e(` + He + `) +
'`), dn && (L = !0, ne += `';
` + dn + `;
__p += '`), Xe && (ne += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), X = _n + Ie.length, Ie;
          }), ne += `';
`;
          var Pe = lt.call(o, "variable") && o.variable;
          if (!Pe)
            ne = `with (obj) {
` + ne + `
}
`;
          else if (Wt.test(Pe))
            throw new De(p);
          ne = (L ? ne.replace(Tt, "") : ne).replace(Mn, "$1").replace(tn, "$1;"), ne = "function(" + (Pe || "obj") + `) {
` + (Pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ne + `return __p
}`;
          var ze = Zp(function() {
            return Qe(S, Ce + "return " + ne).apply(r, P);
          });
          if (ze.source = ne, iu(ze))
            throw ze;
          return ze;
        }
        function Sx(t) {
          return nt(t).toLowerCase();
        }
        function Ox(t) {
          return nt(t).toUpperCase();
        }
        function Cx(t, o, s) {
          if (t = nt(t), t && (s || o === r))
            return af(t);
          if (!t || !(o = Sn(o)))
            return t;
          var f = er(t), g = er(o), S = sf(f, g), P = lf(f, g) + 1;
          return Zr(f, S, P).join("");
        }
        function _x(t, o, s) {
          if (t = nt(t), t && (s || o === r))
            return t.slice(0, cf(t) + 1);
          if (!t || !(o = Sn(o)))
            return t;
          var f = er(t), g = lf(f, er(o)) + 1;
          return Zr(f, 0, g).join("");
        }
        function Rx(t, o, s) {
          if (t = nt(t), t && (s || o === r))
            return t.replace(io, "");
          if (!t || !(o = Sn(o)))
            return t;
          var f = er(t), g = sf(f, er(o));
          return Zr(f, g).join("");
        }
        function Px(t, o) {
          var s = E, f = B;
          if (_t(o)) {
            var g = "separator" in o ? o.separator : g;
            s = "length" in o ? We(o.length) : s, f = "omission" in o ? Sn(o.omission) : f;
          }
          t = nt(t);
          var S = t.length;
          if (No(t)) {
            var P = er(t);
            S = P.length;
          }
          if (s >= S)
            return t;
          var $ = s - Mo(f);
          if ($ < 1)
            return f;
          var L = P ? Zr(P, 0, $).join("") : t.slice(0, $);
          if (g === r)
            return L + f;
          if (P && ($ += L.length - $), au(g)) {
            if (t.slice($).search(g)) {
              var X, J = L;
              for (g.global || (g = Tl(g.source, nt(Y.exec(g)) + "g")), g.lastIndex = 0; X = g.exec(J); )
                var ne = X.index;
              L = L.slice(0, ne === r ? $ : ne);
            }
          } else if (t.indexOf(Sn(g), $) != $) {
            var he = L.lastIndexOf(g);
            he > -1 && (L = L.slice(0, he));
          }
          return L + f;
        }
        function Ix(t) {
          return t = nt(t), t && Vr.test(t) ? t.replace(lr, iy) : t;
        }
        var Ax = Uo(function(t, o, s) {
          return t + (s ? " " : "") + o.toUpperCase();
        }), uu = Jf("toUpperCase");
        function Xp(t, o, s) {
          return t = nt(t), o = s ? r : o, o === r ? ey(t) ? ly(t) : Hm(t) : t.match(o) || [];
        }
        var Zp = je(function(t, o) {
          try {
            return Tn(t, r, o);
          } catch (s) {
            return iu(s) ? s : new De(s);
          }
        }), $x = Ir(function(t, o) {
          return Fn(o, function(s) {
            s = pr(s), Rr(t, s, ru(t[s], t));
          }), t;
        });
        function Nx(t) {
          var o = t == null ? 0 : t.length, s = Re();
          return t = o ? Ot(t, function(f) {
            if (typeof f[1] != "function")
              throw new Bn(c);
            return [s(f[0]), f[1]];
          }) : [], je(function(f) {
            for (var g = -1; ++g < o; ) {
              var S = t[g];
              if (Tn(S[0], this, f))
                return Tn(S[1], this, f);
            }
          });
        }
        function Mx(t) {
          return iv(Un(t, m));
        }
        function cu(t) {
          return function() {
            return t;
          };
        }
        function kx(t, o) {
          return t == null || t !== t ? o : t;
        }
        var Dx = ep(), Lx = ep(!0);
        function yn(t) {
          return t;
        }
        function fu(t) {
          return If(typeof t == "function" ? t : Un(t, m));
        }
        function Fx(t) {
          return $f(Un(t, m));
        }
        function Bx(t, o) {
          return Nf(t, Un(o, m));
        }
        var Wx = je(function(t, o) {
          return function(s) {
            return Ti(s, t, o);
          };
        }), Ux = je(function(t, o) {
          return function(s) {
            return Ti(t, s, o);
          };
        });
        function pu(t, o, s) {
          var f = Gt(o), g = Ra(o, f);
          s == null && !(_t(o) && (g.length || !f.length)) && (s = o, o = t, t = this, g = Ra(o, Gt(o)));
          var S = !(_t(s) && "chain" in s) || !!s.chain, P = $r(t);
          return Fn(g, function($) {
            var L = o[$];
            t[$] = L, P && (t.prototype[$] = function() {
              var X = this.__chain__;
              if (S || X) {
                var J = t(this.__wrapped__), ne = J.__actions__ = hn(this.__actions__);
                return ne.push({ func: L, args: arguments, thisArg: t }), J.__chain__ = X, J;
              }
              return L.apply(t, Hr([this.value()], arguments));
            });
          }), t;
        }
        function zx() {
          return Yt._ === this && (Yt._ = hy), this;
        }
        function du() {
        }
        function Vx(t) {
          return t = We(t), je(function(o) {
            return Mf(o, t);
          });
        }
        var jx = jl(Ot), Hx = jl(ef), qx = jl(gl);
        function Jp(t) {
          return Zl(t) ? ml(pr(t)) : Tv(t);
        }
        function Gx(t) {
          return function(o) {
            return t == null ? r : go(t, o);
          };
        }
        var Kx = np(), Yx = np(!0);
        function hu() {
          return [];
        }
        function gu() {
          return !1;
        }
        function Xx() {
          return {};
        }
        function Zx() {
          return "";
        }
        function Jx() {
          return !0;
        }
        function Qx(t, o) {
          if (t = We(t), t < 1 || t > pe)
            return [];
          var s = Z, f = nn(t, Z);
          o = Re(o), t -= Z;
          for (var g = bl(f, o); ++s < t; )
            o(s);
          return g;
        }
        function eE(t) {
          return Fe(t) ? Ot(t, pr) : On(t) ? [t] : hn(vp(nt(t)));
        }
        function tE(t) {
          var o = ++py;
          return nt(t) + o;
        }
        var nE = Ma(function(t, o) {
          return t + o;
        }, 0), rE = Hl("ceil"), oE = Ma(function(t, o) {
          return t / o;
        }, 1), iE = Hl("floor");
        function aE(t) {
          return t && t.length ? _a(t, yn, Il) : r;
        }
        function sE(t, o) {
          return t && t.length ? _a(t, Re(o, 2), Il) : r;
        }
        function lE(t) {
          return rf(t, yn);
        }
        function uE(t, o) {
          return rf(t, Re(o, 2));
        }
        function cE(t) {
          return t && t.length ? _a(t, yn, Ml) : r;
        }
        function fE(t, o) {
          return t && t.length ? _a(t, Re(o, 2), Ml) : r;
        }
        var pE = Ma(function(t, o) {
          return t * o;
        }, 1), dE = Hl("round"), hE = Ma(function(t, o) {
          return t - o;
        }, 0);
        function gE(t) {
          return t && t.length ? vl(t, yn) : 0;
        }
        function mE(t, o) {
          return t && t.length ? vl(t, Re(o, 2)) : 0;
        }
        return x.after = F0, x.ary = Pp, x.assign = O1, x.assignIn = Vp, x.assignInWith = Ga, x.assignWith = C1, x.at = _1, x.before = Ip, x.bind = ru, x.bindAll = $x, x.bindKey = Ap, x.castArray = X0, x.chain = Cp, x.chunk = ib, x.compact = ab, x.concat = sb, x.cond = Nx, x.conforms = Mx, x.constant = cu, x.countBy = g0, x.create = R1, x.curry = $p, x.curryRight = Np, x.debounce = Mp, x.defaults = P1, x.defaultsDeep = I1, x.defer = B0, x.delay = W0, x.difference = lb, x.differenceBy = ub, x.differenceWith = cb, x.drop = fb, x.dropRight = pb, x.dropRightWhile = db, x.dropWhile = hb, x.fill = gb, x.filter = y0, x.flatMap = x0, x.flatMapDeep = E0, x.flatMapDepth = T0, x.flatten = Tp, x.flattenDeep = mb, x.flattenDepth = yb, x.flip = U0, x.flow = Dx, x.flowRight = Lx, x.fromPairs = vb, x.functions = L1, x.functionsIn = F1, x.groupBy = w0, x.initial = xb, x.intersection = Eb, x.intersectionBy = Tb, x.intersectionWith = wb, x.invert = W1, x.invertBy = U1, x.invokeMap = O0, x.iteratee = fu, x.keyBy = C0, x.keys = Gt, x.keysIn = mn, x.map = Ua, x.mapKeys = V1, x.mapValues = j1, x.matches = Fx, x.matchesProperty = Bx, x.memoize = Va, x.merge = H1, x.mergeWith = jp, x.method = Wx, x.methodOf = Ux, x.mixin = pu, x.negate = ja, x.nthArg = Vx, x.omit = q1, x.omitBy = G1, x.once = z0, x.orderBy = _0, x.over = jx, x.overArgs = V0, x.overEvery = Hx, x.overSome = qx, x.partial = ou, x.partialRight = kp, x.partition = R0, x.pick = K1, x.pickBy = Hp, x.property = Jp, x.propertyOf = Gx, x.pull = _b, x.pullAll = Sp, x.pullAllBy = Rb, x.pullAllWith = Pb, x.pullAt = Ib, x.range = Kx, x.rangeRight = Yx, x.rearg = j0, x.reject = A0, x.remove = Ab, x.rest = H0, x.reverse = tu, x.sampleSize = N0, x.set = X1, x.setWith = Z1, x.shuffle = M0, x.slice = $b, x.sortBy = L0, x.sortedUniq = Bb, x.sortedUniqBy = Wb, x.split = xx, x.spread = q0, x.tail = Ub, x.take = zb, x.takeRight = Vb, x.takeRightWhile = jb, x.takeWhile = Hb, x.tap = a0, x.throttle = G0, x.thru = Wa, x.toArray = Wp, x.toPairs = qp, x.toPairsIn = Gp, x.toPath = eE, x.toPlainObject = zp, x.transform = J1, x.unary = K0, x.union = qb, x.unionBy = Gb, x.unionWith = Kb, x.uniq = Yb, x.uniqBy = Xb, x.uniqWith = Zb, x.unset = Q1, x.unzip = nu, x.unzipWith = Op, x.update = ex, x.updateWith = tx, x.values = jo, x.valuesIn = nx, x.without = Jb, x.words = Xp, x.wrap = Y0, x.xor = Qb, x.xorBy = e0, x.xorWith = t0, x.zip = n0, x.zipObject = r0, x.zipObjectDeep = o0, x.zipWith = i0, x.entries = qp, x.entriesIn = Gp, x.extend = Vp, x.extendWith = Ga, pu(x, x), x.add = nE, x.attempt = Zp, x.camelCase = ax, x.capitalize = Kp, x.ceil = rE, x.clamp = rx, x.clone = Z0, x.cloneDeep = Q0, x.cloneDeepWith = e1, x.cloneWith = J0, x.conformsTo = t1, x.deburr = Yp, x.defaultTo = kx, x.divide = oE, x.endsWith = sx, x.eq = nr, x.escape = lx, x.escapeRegExp = ux, x.every = m0, x.find = v0, x.findIndex = xp, x.findKey = A1, x.findLast = b0, x.findLastIndex = Ep, x.findLastKey = $1, x.floor = iE, x.forEach = _p, x.forEachRight = Rp, x.forIn = N1, x.forInRight = M1, x.forOwn = k1, x.forOwnRight = D1, x.get = su, x.gt = n1, x.gte = r1, x.has = B1, x.hasIn = lu, x.head = wp, x.identity = yn, x.includes = S0, x.indexOf = bb, x.inRange = ox, x.invoke = z1, x.isArguments = vo, x.isArray = Fe, x.isArrayBuffer = o1, x.isArrayLike = gn, x.isArrayLikeObject = Mt, x.isBoolean = i1, x.isBuffer = Jr, x.isDate = a1, x.isElement = s1, x.isEmpty = l1, x.isEqual = u1, x.isEqualWith = c1, x.isError = iu, x.isFinite = f1, x.isFunction = $r, x.isInteger = Dp, x.isLength = Ha, x.isMap = Lp, x.isMatch = p1, x.isMatchWith = d1, x.isNaN = h1, x.isNative = g1, x.isNil = y1, x.isNull = m1, x.isNumber = Fp, x.isObject = _t, x.isObjectLike = Pt, x.isPlainObject = Ri, x.isRegExp = au, x.isSafeInteger = v1, x.isSet = Bp, x.isString = qa, x.isSymbol = On, x.isTypedArray = Vo, x.isUndefined = b1, x.isWeakMap = x1, x.isWeakSet = E1, x.join = Sb, x.kebabCase = cx, x.last = Vn, x.lastIndexOf = Ob, x.lowerCase = fx, x.lowerFirst = px, x.lt = T1, x.lte = w1, x.max = aE, x.maxBy = sE, x.mean = lE, x.meanBy = uE, x.min = cE, x.minBy = fE, x.stubArray = hu, x.stubFalse = gu, x.stubObject = Xx, x.stubString = Zx, x.stubTrue = Jx, x.multiply = pE, x.nth = Cb, x.noConflict = zx, x.noop = du, x.now = za, x.pad = dx, x.padEnd = hx, x.padStart = gx, x.parseInt = mx, x.random = ix, x.reduce = P0, x.reduceRight = I0, x.repeat = yx, x.replace = vx, x.result = Y1, x.round = dE, x.runInContext = k, x.sample = $0, x.size = k0, x.snakeCase = bx, x.some = D0, x.sortedIndex = Nb, x.sortedIndexBy = Mb, x.sortedIndexOf = kb, x.sortedLastIndex = Db, x.sortedLastIndexBy = Lb, x.sortedLastIndexOf = Fb, x.startCase = Ex, x.startsWith = Tx, x.subtract = hE, x.sum = gE, x.sumBy = mE, x.template = wx, x.times = Qx, x.toFinite = Nr, x.toInteger = We, x.toLength = Up, x.toLower = Sx, x.toNumber = jn, x.toSafeInteger = S1, x.toString = nt, x.toUpper = Ox, x.trim = Cx, x.trimEnd = _x, x.trimStart = Rx, x.truncate = Px, x.unescape = Ix, x.uniqueId = tE, x.upperCase = Ax, x.upperFirst = uu, x.each = _p, x.eachRight = Rp, x.first = wp, pu(x, function() {
          var t = {};
          return cr(x, function(o, s) {
            lt.call(x.prototype, s) || (t[s] = o);
          }), t;
        }(), { chain: !1 }), x.VERSION = a, Fn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          x[t].placeholder = x;
        }), Fn(["drop", "take"], function(t, o) {
          Ke.prototype[t] = function(s) {
            s = s === r ? 1 : jt(We(s), 0);
            var f = this.__filtered__ && !o ? new Ke(this) : this.clone();
            return f.__filtered__ ? f.__takeCount__ = nn(s, f.__takeCount__) : f.__views__.push({
              size: nn(s, Z),
              type: t + (f.__dir__ < 0 ? "Right" : "")
            }), f;
          }, Ke.prototype[t + "Right"] = function(s) {
            return this.reverse()[t](s).reverse();
          };
        }), Fn(["filter", "map", "takeWhile"], function(t, o) {
          var s = o + 1, f = s == re || s == q;
          Ke.prototype[t] = function(g) {
            var S = this.clone();
            return S.__iteratees__.push({
              iteratee: Re(g, 3),
              type: s
            }), S.__filtered__ = S.__filtered__ || f, S;
          };
        }), Fn(["head", "last"], function(t, o) {
          var s = "take" + (o ? "Right" : "");
          Ke.prototype[t] = function() {
            return this[s](1).value()[0];
          };
        }), Fn(["initial", "tail"], function(t, o) {
          var s = "drop" + (o ? "" : "Right");
          Ke.prototype[t] = function() {
            return this.__filtered__ ? new Ke(this) : this[s](1);
          };
        }), Ke.prototype.compact = function() {
          return this.filter(yn);
        }, Ke.prototype.find = function(t) {
          return this.filter(t).head();
        }, Ke.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, Ke.prototype.invokeMap = je(function(t, o) {
          return typeof t == "function" ? new Ke(this) : this.map(function(s) {
            return Ti(s, t, o);
          });
        }), Ke.prototype.reject = function(t) {
          return this.filter(ja(Re(t)));
        }, Ke.prototype.slice = function(t, o) {
          t = We(t);
          var s = this;
          return s.__filtered__ && (t > 0 || o < 0) ? new Ke(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), o !== r && (o = We(o), s = o < 0 ? s.dropRight(-o) : s.take(o - t)), s);
        }, Ke.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, Ke.prototype.toArray = function() {
          return this.take(Z);
        }, cr(Ke.prototype, function(t, o) {
          var s = /^(?:filter|find|map|reject)|While$/.test(o), f = /^(?:head|last)$/.test(o), g = x[f ? "take" + (o == "last" ? "Right" : "") : o], S = f || /^find/.test(o);
          g && (x.prototype[o] = function() {
            var P = this.__wrapped__, $ = f ? [1] : arguments, L = P instanceof Ke, X = $[0], J = L || Fe(P), ne = function(He) {
              var Xe = g.apply(x, Hr([He], $));
              return f && he ? Xe[0] : Xe;
            };
            J && s && typeof X == "function" && X.length != 1 && (L = J = !1);
            var he = this.__chain__, Ce = !!this.__actions__.length, Pe = S && !he, ze = L && !Ce;
            if (!S && J) {
              P = ze ? P : new Ke(this);
              var Ie = t.apply(P, $);
              return Ie.__actions__.push({ func: Wa, args: [ne], thisArg: r }), new Wn(Ie, he);
            }
            return Pe && ze ? t.apply(this, $) : (Ie = this.thru(ne), Pe ? f ? Ie.value()[0] : Ie.value() : Ie);
          });
        }), Fn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var o = pa[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(t);
          x.prototype[t] = function() {
            var g = arguments;
            if (f && !this.__chain__) {
              var S = this.value();
              return o.apply(Fe(S) ? S : [], g);
            }
            return this[s](function(P) {
              return o.apply(Fe(P) ? P : [], g);
            });
          };
        }), cr(Ke.prototype, function(t, o) {
          var s = x[o];
          if (s) {
            var f = s.name + "";
            lt.call(Fo, f) || (Fo[f] = []), Fo[f].push({ name: o, func: s });
          }
        }), Fo[Na(r, A).name] = [{
          name: "wrapper",
          func: r
        }], Ke.prototype.clone = Iy, Ke.prototype.reverse = Ay, Ke.prototype.value = $y, x.prototype.at = s0, x.prototype.chain = l0, x.prototype.commit = u0, x.prototype.next = c0, x.prototype.plant = p0, x.prototype.reverse = d0, x.prototype.toJSON = x.prototype.valueOf = x.prototype.value = h0, x.prototype.first = x.prototype.head, gi && (x.prototype[gi] = f0), x;
      }, ko = uy();
      uo ? ((uo.exports = ko)._ = ko, fl._ = ko) : Yt._ = ko;
    }).call(cP);
  }(Fi, Fi.exports)), Fi.exports;
}
var pP = fP();
const mP = ({ id: e, handleLocationSelect: n, handleSearchTermChange: r, handleEnterClick: a, label: l, defaultId: u, defaultText: c, sx: p, countryCodeLimit: d, allowCurrentLocation: h = !0 }) => {
  const y = wE(""), m = { label: "Current Location", id: "currentLocation" }, [v, w] = ed(h ? [m] : []), [O, b] = ed(), R = td(pP.debounce((C, T) => {
    if (r && r({ searchTerm: T }), T.length < 1 || T == "Current Location")
      w(h ? [m] : []);
    else {
      const N = new AbortController(), F = {
        text: T,
        location: y.current,
        countryCode: d,
        maxSuggestions: "5",
        f: "json",
        token: ""
      };
      return fetch("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?" + new URLSearchParams(F).toString(), {
        method: "GET",
        signal: N.signal
      }).then((V) => V.json()).then((V) => {
        w(V.suggestions.map((Q) => ({ label: Q.text, id: Q.magicKey })));
      }).catch((V) => {
        console.log("error calling /suggest", V);
      }), () => N.abort();
    }
  }, 300), []), A = td((C, T) => {
    const N = new AbortController(), F = {
      magicKey: C,
      f: "json",
      token: ""
    };
    return fetch("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?" + new URLSearchParams(F).toString(), {
      method: "GET",
      signal: N.signal
    }).then((V) => V.json()).then((V) => {
      T({ latitude: V.candidates[0].location.y, longitude: V.candidates[0].location.x, title: V.candidates[0].address });
    }).catch((V) => {
      console.log("error calling /findAddressCandidates", V);
    }), () => N.abort();
  }, []), M = (C) => {
    navigator.geolocation && navigator.geolocation.getCurrentPosition(
      (T) => {
        C({ latitude: T.coords.latitude.toString(), longitude: T.coords.longitude.toString() });
      },
      () => {
        C({});
      }
    );
  }, _ = (C) => C.id == "currentLocation" ? /* @__PURE__ */ Dt(bE, { children: [
    /* @__PURE__ */ oe(uP, { sx: { pr: 0.5 } }),
    "  ",
    C.label
  ] }) : C.label;
  return nd(() => {
    if (!O)
      w(h ? [m] : []), n({ coords: {}, id: "", title: "" });
    else {
      const C = O.label, T = O.id;
      T == "currentLocation" ? y.current.length ? n({ coords: { latitude: y.current.split(",")[0], longitude: y.current.split(",")[1] }, id: T, title: "Current Location" }) : M((N) => {
        N.latitude && N.longitude ? (y.current = N.latitude.toString() + "," + N.longitude.toString(), n({ coords: { latitude: N.latitude, longitude: N.longitude }, id: T, title: "Current Location" })) : n({ coords: {}, id: "", title: "" });
      }) : C && T ? A(T, (N) => {
        N.latitude && N.longitude ? n({ coords: { latitude: N.latitude, longitude: N.longitude }, id: T, title: N.title }) : (console.log("error finding location data"), n({ coords: {}, id: "", title: "" }));
      }) : n({ coords: {}, id: "", title: "" });
    }
  }, [O]), nd(() => {
    !(O != null && O.id) && u.length > 0 && (v.find((C) => C.id == u) ? b(v.find((C) => C.id == u)) : A(u, (C) => {
      C.latitude && C.longitude ? b({ label: C.title, id: u }) : (console.log("could not find location data"), b(null));
    }));
  }, [u]), /* @__PURE__ */ oe(
    hm,
    {
      id: e,
      onChange: (C, T) => b(T && typeof T != "string" ? { label: T.label, id: T.id } : null),
      sx: p,
      filterOptions: (C) => C,
      renderOption: ({ key: C, ...T }, N) => /* @__PURE__ */ oe("li", { ...T, children: _(N) }, C),
      disablePortal: !0,
      fullWidth: !0,
      freeSolo: !0,
      selectOnFocus: !0,
      value: O || c || "",
      onInputChange: R,
      getOptionLabel: (C) => typeof C == "string" ? C : C.label,
      options: v,
      renderInput: (C) => /* @__PURE__ */ oe(
        Qg,
        {
          ...C,
          label: l,
          onKeyDown: (T) => {
            T.key === "Enter" && a && (T.preventDefault(), setTimeout(() => {
              a();
            }, 1e3));
          }
        }
      )
    }
  );
};
export {
  mP as default
};
