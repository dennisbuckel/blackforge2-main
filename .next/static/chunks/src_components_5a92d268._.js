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
  "indicator": "videoHero-module__KD2MTa__indicator",
  "videoContainer": "videoHero-module__KD2MTa__videoContainer",
  "videoHeroSection": "videoHero-module__KD2MTa__videoHeroSection",
  "videoIndicators": "videoHero-module__KD2MTa__videoIndicators",
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
    // Referenz für das aktuelle Video-Element
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State-Management
    const [isVideoLoaded, setIsVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentVideoIndex, setCurrentVideoIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Liste der verfügbaren Videos (jeweils für Desktop und Mobile)
    const videos = [
        {
            desktop: "/videos/hero-background.mp4",
            mobile: "/videos/hero-background.mp4"
        },
        {
            desktop: "/videos/hero-background-2.mp4",
            mobile: "/videos/hero-background-2.mp4"
        },
        {
            desktop: "/videos/hero-background-3.mp4",
            mobile: "/videos/hero-background-3.mp4"
        }
    ];
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
    // Video-Rotations-Handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoHero.useEffect": ()=>{
            if (!videoRef.current) return;
            const video = videoRef.current;
            // Handler für das Ende eines Videos
            const handleVideoEnd = {
                "VideoHero.useEffect.handleVideoEnd": ()=>{
                    // Übergangsanimation starten
                    setIsTransitioning(true);
                    // Kurze Verzögerung für die Übergangsanimation
                    setTimeout({
                        "VideoHero.useEffect.handleVideoEnd": ()=>{
                            // Zum nächsten Video wechseln
                            setCurrentVideoIndex({
                                "VideoHero.useEffect.handleVideoEnd": (prevIndex)=>(prevIndex + 1) % videos.length
                            }["VideoHero.useEffect.handleVideoEnd"]);
                            // Übergangsanimation beenden
                            setIsTransitioning(false);
                        }
                    }["VideoHero.useEffect.handleVideoEnd"], 1000); // 1 Sekunde für den Übergang
                }
            }["VideoHero.useEffect.handleVideoEnd"];
            // Wir wollen auch eine automatische Rotation, falls ein Video sehr lang ist
            const rotationTimer = setTimeout({
                "VideoHero.useEffect.rotationTimer": ()=>{
                    handleVideoEnd();
                }
            }["VideoHero.useEffect.rotationTimer"], 15000); // 15 Sekunden pro Video
            // Event-Listener für das Video-Ende
            video.addEventListener('ended', handleVideoEnd);
            return ({
                "VideoHero.useEffect": ()=>{
                    video.removeEventListener('ended', handleVideoEnd);
                    clearTimeout(rotationTimer);
                }
            })["VideoHero.useEffect"];
        }
    }["VideoHero.useEffect"], [
        currentVideoIndex,
        videos.length
    ]);
    // Aktuelle Video-URL basierend auf Gerät und Index
    const currentVideoSrc = isMobile ? videos[currentVideoIndex].mobile : videos[currentVideoIndex].desktop;
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
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundVideo} ${isVideoLoaded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeIn : ''} ${isTransitioning ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeOut : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeIn}`,
                        autoPlay: true,
                        muted: true,
                        playsInline: true,
                        preload: "auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: currentVideoSrc,
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoHero.js",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            "Ihr Browser unterstützt keine Video-Wiedergabe."
                        ]
                    }, currentVideoSrc, true, {
                        fileName: "[project]/src/components/VideoHero.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoOverlay
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoHero.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VideoHero.js",
                lineNumber: 114,
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
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "lead mb-5 text-white",
                                children: "Expertise für Personalvermittlung, Strategieberatung und M&A-Lösungen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoHero.js",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/kontakt",
                                className: "btn btn-gold btn-lg px-4 py-2",
                                children: "KONTAKT AUFNEHMEN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoHero.js",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VideoHero.js",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoHero.js",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/VideoHero.js",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoIndicators,
                children: videos.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].indicator} ${index === currentVideoIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$videoHero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeIndicator : ''}`
                    }, index, false, {
                        fileName: "[project]/src/components/VideoHero.js",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/VideoHero.js",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VideoHero.js",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(VideoHero, "UYY2b6J14UjlWF/S50i+9Hot9Wc=");
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
                                    children: "Expertise für Personalvermittlung, Strategieberatung und M&A-Lösungen"
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
    // Sobald die Komponente clientseitig gemounted ist, zeigen wir das Video-Hero
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoHero$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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

//# sourceMappingURL=src_components_5a92d268._.js.map