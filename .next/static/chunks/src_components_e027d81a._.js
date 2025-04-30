(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/videoHero.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "activeIndicator": "videoHero-module__KD2MTa__activeIndicator",
  "backgroundVideo": "videoHero-module__KD2MTa__backgroundVideo",
  "fadeIn": "videoHero-module__KD2MTa__fadeIn",
  "fadeOut": "videoHero-module__KD2MTa__fadeOut",
  "fallbackImage": "videoHero-module__KD2MTa__fallbackImage",
  "hiddenVideo": "videoHero-module__KD2MTa__hiddenVideo",
  "indicator": "videoHero-module__KD2MTa__indicator",
  "videoContainer": "videoHero-module__KD2MTa__videoContainer",
  "videoHeroSection": "videoHero-module__KD2MTa__videoHeroSection",
  "videoIndicators": "videoHero-module__KD2MTa__videoIndicators",
  "videoOverlay": "videoHero-module__KD2MTa__videoOverlay",
});
}}),
"[project]/src/components/EnhancedVideoHero.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EnhancedVideoHero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/videoHero.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function EnhancedVideoHero() {
    _s();
    // Reference for video element
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State management
    const [isVideoLoaded, setIsVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Single combined video in different formats
    const videoSources = {
        desktop: {
            mp4: "/videos/optimized/hero-background-combined.mp4",
            webm: "/videos/optimized/hero-background-combined.webm"
        },
        mobile: "/videos/optimized/hero-background-combined-mobile.mp4"
    };
    // Mobile device detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedVideoHero.useEffect": ()=>{
            const checkMobile = {
                "EnhancedVideoHero.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["EnhancedVideoHero.useEffect.checkMobile"];
            // Initial check
            checkMobile();
            // Event listener for resize
            window.addEventListener('resize', checkMobile);
            // Cleanup
            return ({
                "EnhancedVideoHero.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["EnhancedVideoHero.useEffect"];
        }
    }["EnhancedVideoHero.useEffect"], []);
    // Video load handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedVideoHero.useEffect": ()=>{
            if (!videoRef.current) return;
            const video = videoRef.current;
            const handleCanPlay = {
                "EnhancedVideoHero.useEffect.handleCanPlay": ()=>{
                    setIsVideoLoaded(true);
                }
            }["EnhancedVideoHero.useEffect.handleCanPlay"];
            video.addEventListener('canplay', handleCanPlay);
            // If the video is already in cache and loads immediately
            if (video.readyState >= 3) {
                setIsVideoLoaded(true);
            }
            // Make the video loop
            video.loop = true;
            return ({
                "EnhancedVideoHero.useEffect": ()=>{
                    video.removeEventListener('canplay', handleCanPlay);
                }
            })["EnhancedVideoHero.useEffect"];
        }
    }["EnhancedVideoHero.useEffect"], []);
    // Get video sources based on device
    const getVideoSources = ()=>{
        if (isMobile) {
            return {
                mp4: videoSources.mobile
            };
        } else {
            return videoSources.desktop;
        }
    };
    // Current video sources
    const currentVideoSources = getVideoSources();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoHeroSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallbackImage} ${isVideoLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeOut : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnhancedVideoHero.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundVideo} ${isVideoLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeIn : ''}`,
                        autoPlay: true,
                        muted: true,
                        playsInline: true,
                        loop: true,
                        preload: "auto",
                        children: [
                            !isMobile && currentVideoSources.webm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: currentVideoSources.webm,
                                type: "video/webm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnhancedVideoHero.js",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: currentVideoSources.mp4,
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnhancedVideoHero.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            "Ihr Browser unterstützt keine Video-Wiedergabe."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EnhancedVideoHero.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoOverlay
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnhancedVideoHero.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EnhancedVideoHero.js",
                lineNumber: 82,
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
                                fileName: "[project]/src/components/EnhancedVideoHero.js",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "lead mb-5 text-white",
                                children: "Expertise für Unternehmensberatung, Personalvermittlung, M&A-Lösungen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnhancedVideoHero.js",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/kontakt",
                                className: "btn btn-gold btn-lg px-4 py-2",
                                children: "KONTAKT AUFNEHMEN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnhancedVideoHero.js",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EnhancedVideoHero.js",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/EnhancedVideoHero.js",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EnhancedVideoHero.js",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EnhancedVideoHero.js",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(EnhancedVideoHero, "uZ+bstQLcooh5lRfcYl9ey/H1CQ=");
_c = EnhancedVideoHero;
var _c;
__turbopack_context__.k.register(_c, "EnhancedVideoHero");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EnhancedVideoHero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EnhancedVideoHero.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/videoHero.module.css [app-client] (css module)"); // Wir importieren die Styles auch hier
;
var _s = __turbopack_context__.k.signature();
'use client';
;
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
    // Falls noch nicht gemounted, zeigen wir ein Fallback an
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoHeroSection,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fallbackImage
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoHeroWrapper.js",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoOverlay
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoHeroWrapper.js",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/VideoHeroWrapper.js",
                    lineNumber: 20,
                    columnNumber: 9
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
                                    fileName: "[project]/src/components/VideoHeroWrapper.js",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "lead mb-5 text-white",
                                    children: "Expertise für Unternehmensberatung, Personalvermittlung, M&A-Lösungen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VideoHeroWrapper.js",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "btn btn-gold btn-lg px-4 py-2",
                                    children: "KONTAKT AUFNEHMEN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VideoHeroWrapper.js",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VideoHeroWrapper.js",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoHeroWrapper.js",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoHeroWrapper.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VideoHeroWrapper.js",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    // Sobald die Komponente clientseitig gemounted ist, zeigen wir das verbesserte Video-Hero
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EnhancedVideoHero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/components/VideoHeroWrapper.js",
        lineNumber: 45,
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
"[project]/src/components/VideoHeroWrapper.js [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/VideoHeroWrapper.js [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_e027d81a._.js.map