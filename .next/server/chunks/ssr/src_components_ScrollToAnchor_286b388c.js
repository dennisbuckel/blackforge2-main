module.exports = {

"[project]/src/components/ScrollToAnchor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScrollToAnchor)
});
// src/components/ScrollToAnchor.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function ScrollToAnchor() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Diese Funktion wird ausgeführt, wenn die Komponente mounted ist
        const handleAnchorScroll = ()=>{
            // Auf das hash in der URL zugreifen (z.B. #unternehmensberatung)
            const hash = window.location.hash;
            if (hash) {
                // Ein wenig Zeit geben, damit die Seite vollständig geladen ist
                setTimeout(()=>{
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
                }, 100);
            }
        };
        // Beim Laden der Seite prüfen
        handleAnchorScroll();
        // Auch auf Änderungen des Hashes reagieren (für SPA-Navigation)
        window.addEventListener('hashchange', handleAnchorScroll);
        // Cleanup beim Unmount
        return ()=>{
            window.removeEventListener('hashchange', handleAnchorScroll);
        };
    }, []);
    // Diese Komponente rendert nichts sichtbares
    return null;
}
}}),

};

//# sourceMappingURL=src_components_ScrollToAnchor_286b388c.js.map