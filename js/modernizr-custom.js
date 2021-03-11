/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backdropfilter-webp-webplossless_webp_lossless-setclasses !*/
! function(e, n, t) {
    function r(e, n) { return typeof e === n }

    function o() {
        var e, n, t, o, i, s, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (e = [], n = b[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), w.push((o ? "" : "no-") + a.join("-"))
            }
    }

    function i(e) {
        var n = B.className,
            t = Modernizr._config.classPrefix || "";
        if (S && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? B.className.baseVal = n : B.className = n)
    }

    function s(e, n) {
        if ("object" == typeof e)
            for (var t in e) C(e, t) && s(t, e[t]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                o = Modernizr[r[0]];
            if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
            n = "function" == typeof n ? n() : n, 1 == r.length ? Modernizr[r[0]] = n : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = n), i([(n && 0 != n ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, n)
        }
        return Modernizr
    }

    function a(e, n) { return !!~("" + e).indexOf(n) }

    function l() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) }

    function A(e) { return e.replace(/([a-z])-([a-z])/g, function(e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") }

    function u(e) { return e.replace(/([A-Z])/g, function(e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") }

    function f(n, t, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }

    function c(e, n) { return function() { return e.apply(n, arguments) } }

    function p(e, n, t) {
        var o;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? c(o, t || n) : o);
        return !1
    }

    function d() { var e = n.body; return e || (e = l(S ? "svg" : "body"), e.fake = !0), e }

    function m(e, t, r, o) {
        var i, s, a, A, u = "modernizr",
            f = l("div"),
            c = d();
        if (parseInt(r, 10))
            for (; r--;) a = l("div"), a.id = o ? o[r] : u + (r + 1), f.appendChild(a);
        return i = l("style"), i.type = "text/css", i.id = "s" + u, (c.fake ? c : f).appendChild(i), c.appendChild(f), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), f.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", A = B.style.overflow, B.style.overflow = "hidden", B.appendChild(c)), s = t(f, e), c.fake ? (c.parentNode.removeChild(c), B.style.overflow = A, B.offsetHeight) : f.parentNode.removeChild(f), !!s
    }

    function g(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(u(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) { for (var i = []; o--;) i.push("(" + u(n[o]) + ":" + r + ")"); return i = i.join(" or "), m("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == f(e, null, "position") }) }
        return t
    }

    function h(e, n, o, i) {
        function s() { f && (delete E.style, delete E.modElem) }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) { var u = g(e, o); if (!r(u, "undefined")) return u }
        for (var f, c, p, d, m, h = ["modernizr", "tspan", "samp"]; !E.style && h.length;) f = !0, E.modElem = l(h.shift()), E.style = E.modElem.style;
        for (p = e.length, c = 0; p > c; c++)
            if (d = e[c], m = E.style[d], a(d, "-") && (d = A(d)), E.style[d] !== t) { if (i || r(o, "undefined")) return s(), "pfx" == n ? d : !0; try { E.style[d] = o } catch (v) {} if (E.style[d] != m) return s(), "pfx" == n ? d : !0 }
        return s(), !1
    }

    function v(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + T.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? h(a, n, o, i) : (a = (e + " " + x.join(s + " ") + s).split(" "), p(a, n, t))
    }

    function y(e, n, r) { return v(e, t, t, n, r) }
    var w = [],
        b = [],
        _ = {
            _version: "3.6.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() { n(t[e]) }, 0)
            },
            addTest: function(e, n, t) { b.push({ name: e, fn: n, options: t }) },
            addAsyncTest: function(e) { b.push({ name: null, fn: e }) }
        },
        Modernizr = function() {};
    Modernizr.prototype = _, Modernizr = new Modernizr;
    var C, B = n.documentElement,
        S = "svg" === B.nodeName.toLowerCase();
    ! function() {
        var e = {}.hasOwnProperty;
        C = r(e, "undefined") || r(e.call, "undefined") ? function(e, n) { return n in e && r(e.constructor.prototype[n], "undefined") } : function(n, t) { return e.call(n, t) }
    }(), _._l = {}, _.on = function(e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, _._trigger = function(e, n) {
        if (this._l[e]) {
            var t = this._l[e];
            setTimeout(function() { var e, r; for (e = 0; e < t.length; e++)(r = t[e])(n) }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() { _.addTest = s }), Modernizr.addAsyncTest(function() {
        var e = new Image;
        e.onerror = function() { s("webplossless", !1, { aliases: ["webp-lossless"] }) }, e.onload = function() { s("webplossless", 1 == e.width, { aliases: ["webp-lossless"] }) }, e.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    }), Modernizr.addAsyncTest(function() {
        function e(e, n, t) {
            function r(n) {
                var r = n && "load" === n.type ? 1 == o.width : !1,
                    i = "webp" === e;
                s(e, i && r ? new Boolean(r) : r), t && t(n)
            }
            var o = new Image;
            o.onerror = r, o.onload = r, o.src = n
        }
        var n = [{ uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" }, { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" }, { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" }, { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" }],
            t = n.shift();
        e(t.name, t.uri, function(t) {
            if (t && "load" === t.type)
                for (var r = 0; r < n.length; r++) e(n[r].name, n[r].uri)
        })
    });
    var Q = "Moz O ms Webkit",
        x = _._config.usePrefixes ? Q.toLowerCase().split(" ") : [];
    _._domPrefixes = x;
    var T = _._config.usePrefixes ? Q.split(" ") : [];
    _._cssomPrefixes = T;
    var U = { elem: l("modernizr") };
    Modernizr._q.push(function() { delete U.elem });
    var E = { style: U.elem.style };
    Modernizr._q.unshift(function() { delete E.style }), _.testAllProps = v, _.testAllProps = y, Modernizr.addTest("backdropfilter", y("backdropFilter")), o(), i(w), delete _.addTest, delete _.addAsyncTest;
    for (var R = 0; R < Modernizr._q.length; R++) Modernizr._q[R]();
    e.Modernizr = Modernizr
}(window, document);