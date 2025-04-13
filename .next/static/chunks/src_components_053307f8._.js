(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_053307f8._.js", {

"[project]/src/components/videoHero.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "backgroundVideo": "videoHero-module__KD2MTa__backgroundVideo",
  "fadeIn": "videoHero-module__KD2MTa__fadeIn",
  "fadeOut": "videoHero-module__KD2MTa__fadeOut",
  "fallbackImage": "videoHero-module__KD2MTa__fallbackImage",
  "videoContainer": "videoHero-module__KD2MTa__videoContainer",
  "videoHeroSection": "videoHero-module__KD2MTa__videoHeroSection",
  "videoOverlay": "videoHero-module__KD2MTa__videoOverlay",
});
}}),
"[project]/src/components/VideoHero.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VideoHero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/VideoHero.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/videoHero.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client'; // Wichtig: Markiert diese Komponente als Client Component
;
;
;
function VideoHero() {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVideoLoaded, setIsVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Erkennung von mobilen Geräten
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoHero.useEffect": ()=>{
            const checkMobile = {
                "VideoHero.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["VideoHero.useEffect.checkMobile"];
            // Initial prüfen
            checkMobile();
            // Event-Listener für Größenänderungen
            window.addEventListener('resize', checkMobile);
            // Cleanup
            return ({
                "VideoHero.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["VideoHero.useEffect"];
        }
    }["VideoHero.useEffect"], []);
    // Video-Lade-Handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoHero.useEffect": ()=>{
            if (!videoRef.current) return;
            const video = videoRef.current;
            const handleCanPlay = {
                "VideoHero.useEffect.handleCanPlay": ()=>{
                    setIsVideoLoaded(true);
                }
            }["VideoHero.useEffect.handleCanPlay"];
            video.addEventListener('canplay', handleCanPlay);
            // Falls das Video bereits im Cache ist und sofort geladen wird
            if (video.readyState >= 3) {
                setIsVideoLoaded(true);
            }
            return ({
                "VideoHero.useEffect": ()=>{
                    video.removeEventListener('canplay', handleCanPlay);
                }
            })["VideoHero.useEffect"];
        }
    }["VideoHero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoHeroSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallbackImage} ${isVideoLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeOut : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoHero.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundVideo} ${isVideoLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeIn : ''}`,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        preload: "auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: isMobile ? "/videos/hero-background-mobile.mp4" : "/videos/hero-background.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoHero.js",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            "Ihr Browser unterstützt keine Video-Wiedergabe."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VideoHero.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoOverlay
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoHero.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VideoHero.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container py-5 position-relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row align-items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-7 mb-5 mb-lg-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "display-4 fw-bold mb-4 text-white",
                                children: "Maßgeschneiderte Lösungen für Ihren Unternehmenserfolg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoHero.js",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "lead mb-5 text-white",
                                children: "Personalvermittlung & Unternehmensberatung aus einer Hand"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoHero.js",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/kontakt",
                                className: "btn btn-gold btn-lg px-4 py-2",
                                children: "KONTAKT AUFNEHMEN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoHero.js",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VideoHero.js",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoHero.js",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/VideoHero.js",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VideoHero.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(VideoHero, "uZ+bstQLcooh5lRfcYl9ey/H1CQ=");
_c = VideoHero;
var _c;
__turbopack_context__.k.register(_c, "VideoHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/VideoHeroWrapper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VideoHeroWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/VideoHeroWrapper.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoHero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VideoHero.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function VideoHeroWrapper() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Stellt sicher, dass wir nur clientseitig rendern
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoHeroWrapper.useEffect": ()=>{
            setMounted(true);
        }
    }["VideoHeroWrapper.useEffect"], []);
    // Auf dem Server oder während des Hydrating zeigen wir nichts an
    // Das eigentliche Fallback-UI ist in page.js definiert
    if (!mounted) {
        return null;
    }
    // Sobald die Komponente clientseitig gemounted ist, zeigen wir das Video-Hero
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoHero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/VideoHeroWrapper.js",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_s(VideoHeroWrapper, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = VideoHeroWrapper;
var _c;
__turbopack_context__.k.register(_c, "VideoHeroWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_053307f8._.js.map