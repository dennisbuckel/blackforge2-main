(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ScrollToAnchor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScrollToAnchor)
});
// src/components/ScrollToAnchor.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollToAnchor() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToAnchor.useEffect": ()=>{
            // Diese Funktion wird ausgeführt, wenn die Komponente mounted ist
            const handleAnchorScroll = {
                "ScrollToAnchor.useEffect.handleAnchorScroll": ()=>{
                    // Auf das hash in der URL zugreifen (z.B. #unternehmensberatung)
                    const hash = window.location.hash;
                    if (hash) {
                        // Ein wenig Zeit geben, damit die Seite vollständig geladen ist
                        setTimeout({
                            "ScrollToAnchor.useEffect.handleAnchorScroll": ()=>{
                                // Das Element mit der ID finden
                                const element = document.querySelector(hash);
                                if (element) {
                                    // Zu dem Element scrollen mit einem Offset für die Navbar
                                    const navbarHeight = 80; // Ungefähre Höhe deiner Navbar
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: 'smooth'
                                    });
                                }
                            }
                        }["ScrollToAnchor.useEffect.handleAnchorScroll"], 100);
                    }
                }
            }["ScrollToAnchor.useEffect.handleAnchorScroll"];
            // Beim Laden der Seite prüfen
            handleAnchorScroll();
            // Auch auf Änderungen des Hashes reagieren (für SPA-Navigation)
            window.addEventListener('hashchange', handleAnchorScroll);
            // Cleanup beim Unmount
            return ({
                "ScrollToAnchor.useEffect": ()=>{
                    window.removeEventListener('hashchange', handleAnchorScroll);
                }
            })["ScrollToAnchor.useEffect"];
        }
    }["ScrollToAnchor.useEffect"], []);
    // Diese Komponente rendert nichts sichtbares
    return null;
}
_s(ScrollToAnchor, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ScrollToAnchor;
var _c;
__turbopack_context__.k.register(_c, "ScrollToAnchor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_ScrollToAnchor_1b13de96.js.map