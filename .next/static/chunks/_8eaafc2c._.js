(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/PrivacyConsent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PrivacyConsent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PrivacyConsent({ onChange, checked = false }) {
    _s();
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(checked);
    const handleChange = (e)=>{
        setIsChecked(e.target.checked);
        if (onChange) {
            onChange(e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 form-check",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                className: "form-check-input",
                id: "privacy",
                name: "privacy",
                checked: isChecked,
                onChange: handleChange,
                required: true
            }, void 0, false, {
                fileName: "[project]/src/components/PrivacyConsent.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "form-check-label text-white",
                htmlFor: "privacy",
                children: [
                    "Ich habe die ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/datenschutz",
                        className: "text-gold",
                        target: "_blank",
                        children: "Datenschutzerklärung"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PrivacyConsent.js",
                        lineNumber: 27,
                        columnNumber: 22
                    }, this),
                    " gelesen und stimme zu, dass meine angegebenen Daten zwecks Kontaktaufnahme gespeichert und verarbeitet werden."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PrivacyConsent.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PrivacyConsent.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(PrivacyConsent, "PhP7ZOkwJBhoZyPv2N65OySr648=");
_c = PrivacyConsent;
var _c;
__turbopack_context__.k.register(_c, "PrivacyConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ContactFormClient.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContactFormClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyConsent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PrivacyConsent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ContactFormClient() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        privacy: false
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        success: false,
        error: null
    });
    // Kürzere Vorlagen für verschiedene Anfragetypen
    const messageTemplates = {
        personalvermittlung: 'Ich interessiere mich für Ihre Personalvermittlungsdienstleistungen und bitte um Kontaktaufnahme zur Besprechung der Möglichkeiten.',
        unternehmensberatung: 'Ich möchte Ihre Unternehmensberatungsleistungen in Anspruch nehmen und bitte um ein Beratungsgespräch.',
        munda: 'Ich interessiere mich für Ihre M&A-Dienstleistungen und bitte um weitere Informationen zur Begleitung bei Unternehmenskäufen/-verkäufen.',
        andere: 'Ich habe eine Anfrage und bitte um Kontaktaufnahme.'
    };
    // Anfragetyp in lesbaren Text umwandeln
    const getInquiryTypeText = (type)=>{
        switch(type){
            case 'personalvermittlung':
                return 'Personalvermittlung';
            case 'unternehmensberatung':
                return 'Unternehmensberatung';
            case 'munda':
                return 'M&A';
            case 'andere':
                return 'Andere Anfrage';
            default:
                return '';
        }
    };
    // Änderung im Formular behandeln
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        // Wenn Checkbox, dann den "checked"-Wert verwenden, ansonsten den "value"-Wert
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prev)=>({
                ...prev,
                [name]: newValue
            }));
        // Wenn der Anfragetyp geändert wird, aktualisiere die Nachrichtenvorlage
        if (name === 'inquiryType' && value !== '') {
            setFormData((prev)=>({
                    ...prev,
                    message: messageTemplates[value] || ''
                }));
        }
    };
    // Formular absenden
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Prüfe, ob die Datenschutzerklärung akzeptiert wurde
        if (!formData.privacy) {
            alert('Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.');
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus({
            success: false,
            error: null
        });
        // Bereite Daten für EmailJS vor
        const inquiryTypeText = getInquiryTypeText(formData.inquiryType);
        const currentDate = new Date().toLocaleDateString('de-DE');
        // EmailJS Template Parameter
        const emailParams = {
            // Empfänger
            to_email: 'info@blackforge-consulting.de',
            // Absender-Informationen
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            // Betreff
            subject: `Neue Anfrage über Website: ${inquiryTypeText}`,
            // Template Variablen für EmailJS
            inquiry_type: inquiryTypeText,
            phone: formData.phone || 'Nicht angegeben',
            date: currentDate,
            message: formData.message.replace(/\n/g, '<br>'),
            // Fallback Text-Version für E-Mail-Clients ohne HTML-Unterstützung
            text_message: `
Neue Kontaktanfrage über die Website

Datum: ${currentDate}
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone || 'Nicht angegeben'}
Anfragetyp: ${inquiryTypeText}

Nachricht:
${formData.message}
      `
        };
        // EmailJS Service und Public Key
        const serviceId = "blackforge"; // Deine Service-ID
        const publicKey = "TXO7tV_mlkGfsf_td"; // Dein öffentlicher Schlüssel
        const templateId = "template_tnleshf"; // Deine Template-ID
        // E-Mail mit EmailJS Template senden
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(serviceId, templateId, emailParams, publicKey).then((response)=>{
            console.log('Email erfolgreich gesendet!', response);
            setSubmitStatus({
                success: true,
                error: null
            });
            // Formular zurücksetzen
            setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                message: '',
                privacy: false
            });
        }).catch((error)=>{
            console.error('Fehler beim Senden:', error);
            setSubmitStatus({
                success: false,
                error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt per E-Mail.'
            });
        }).finally(()=>{
            setIsSubmitting(false);
        });
    };
    const resetForm = ()=>{
        setSubmitStatus({
            success: false,
            error: null
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card bg-black-custom p-4 mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-body",
            children: submitStatus.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "bi bi-check-circle text-success",
                            style: {
                                fontSize: "3rem"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactFormClient.js",
                            lineNumber: 163,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "mb-3 text-white",
                        children: "Vielen Dank für Ihre Nachricht!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white mb-4",
                        children: "Wir werden uns umgehend bei Ihnen melden."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-outline-gold",
                        onClick: resetForm,
                        children: "Neues Formular"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactFormClient.js",
                lineNumber: 161,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    submitStatus.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "alert alert-danger mb-4",
                        role: "alert",
                        children: submitStatus.error
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 177,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "name",
                                className: "form-label text-white",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "form-control bg-dark text-white border-secondary",
                                id: "name",
                                name: "name",
                                value: formData.name,
                                onChange: handleChange,
                                placeholder: "Ihr Name",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                className: "form-label text-white",
                                children: "E-Mail"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 197,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                className: "form-control bg-dark text-white border-secondary",
                                id: "email",
                                name: "email",
                                value: formData.email,
                                onChange: handleChange,
                                placeholder: "Ihre E-Mail-Adresse",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 196,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "phone",
                                className: "form-label text-white",
                                children: "Telefon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                className: "form-control bg-dark text-white border-secondary",
                                id: "phone",
                                name: "phone",
                                value: formData.phone,
                                onChange: handleChange,
                                placeholder: "Ihre Telefonnummer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 210,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "inquiryType",
                                className: "form-label text-white",
                                children: "Anfragetyp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "form-select bg-dark text-white border-secondary",
                                id: "inquiryType",
                                name: "inquiryType",
                                value: formData.inquiryType,
                                onChange: handleChange,
                                required: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Bitte wählen..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactFormClient.js",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "personalvermittlung",
                                        children: "Personalvermittlung"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactFormClient.js",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "unternehmensberatung",
                                        children: "Unternehmensberatung"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactFormClient.js",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "munda",
                                        children: "M&A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactFormClient.js",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "andere",
                                        children: "Andere Anfrage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactFormClient.js",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "message",
                                className: "form-label text-white",
                                children: "Nachricht"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 242,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "form-control bg-dark text-white border-secondary",
                                id: "message",
                                name: "message",
                                value: formData.message,
                                onChange: handleChange,
                                rows: "6",
                                placeholder: "Ihre Nachricht an uns",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactFormClient.js",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 241,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PrivacyConsent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onChange: handleChange,
                        checked: formData.privacy
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 255,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-gold",
                        disabled: isSubmitting,
                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spinner-border spinner-border-sm me-2",
                                    role: "status",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactFormClient.js",
                                    lineNumber: 267,
                                    columnNumber: 19
                                }, this),
                                "Wird gesendet..."
                            ]
                        }, void 0, true) : 'Nachricht senden'
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormClient.js",
                        lineNumber: 260,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactFormClient.js",
                lineNumber: 175,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ContactFormClient.js",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactFormClient.js",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(ContactFormClient, "OzDLWXicAr0hCma9UJjicn0RnVY=");
_c = ContactFormClient;
var _c;
__turbopack_context__.k.register(_c, "ContactFormClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EmailJSResponseStatus": (()=>EmailJSResponseStatus)
});
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error'){
        this.status = _status;
        this.text = _text;
    }
}
}}),
"[project]/node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createWebStorage": (()=>createWebStorage)
});
const createWebStorage = ()=>{
    if (typeof localStorage === 'undefined') return;
    return {
        get: (key)=>Promise.resolve(localStorage.getItem(key)),
        set: (key, value)=>Promise.resolve(localStorage.setItem(key, value)),
        remove: (key)=>Promise.resolve(localStorage.removeItem(key))
    };
};
}}),
"[project]/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$createWebStorage$2f$createWebStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js [app-client] (ecmascript)");
;
const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$createWebStorage$2f$createWebStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWebStorage"])()
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "buildOptions": (()=>buildOptions)
});
const buildOptions = (options)=>{
    if (!options) return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};
}}),
"[project]/node_modules/@emailjs/browser/es/methods/init/init.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "init": (()=>init)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-client] (ecmascript)");
;
;
const init = (options, origin = 'https://api.emailjs.com')=>{
    if (!options) return;
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].publicKey = opts.publicKey;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockHeadless = opts.blockHeadless;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].storageProvider = opts.storageProvider;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockList = opts.blockList;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].limitRate = opts.limitRate;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].origin = opts.origin || origin;
};
}}),
"[project]/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendPost": (()=>sendPost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
;
;
const sendPost = async (url, data, headers = {})=>{
    const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].origin + url, {
        method: 'POST',
        headers,
        body: data
    });
    const message = await response.text();
    const responseStatus = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateParams": (()=>validateParams)
});
const validateParams = (publicKey, serviceID, templateID)=>{
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateTemplateParams": (()=>validateTemplateParams)
});
const validateTemplateParams = (templateParams)=>{
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isHeadless": (()=>isHeadless)
});
const isHeadless = (navigator)=>{
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};
}}),
"[project]/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "headlessError": (()=>headlessError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
;
const headlessError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](451, 'Unavailable For Headless Browser');
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateBlockListParams": (()=>validateBlockListParams)
});
const validateBlockListParams = (list, watchVariable)=>{
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isBlockedValueInParams": (()=>isBlockedValueInParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateBlockListParams$2f$validateBlockListParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js [app-client] (ecmascript)");
;
const isBlockListDisabled = (options)=>{
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name)=>{
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params)=>{
    if (isBlockListDisabled(options)) return false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateBlockListParams$2f$validateBlockListParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateBlockListParams"])(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string') return false;
    return options.list.includes(value);
};
}}),
"[project]/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "blockedEmailError": (()=>blockedEmailError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
;
const blockedEmailError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](403, 'Forbidden');
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateLimitRateParams": (()=>validateLimitRateParams)
});
const validateLimitRateParams = (throttle, id)=>{
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isLimitRateHit": (()=>isLimitRateHit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateLimitRateParams$2f$validateLimitRateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js [app-client] (ecmascript)");
;
const getLeftTime = async (id, throttle, storage)=>{
    const lastTime = Number(await storage.get(id) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage)=>{
    if (!options.throttle || !storage) {
        return false;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateLimitRateParams$2f$validateLimitRateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateLimitRateParams"])(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};
}}),
"[project]/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "limitRateError": (()=>limitRateError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
;
const limitRateError = ()=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"](429, 'Too Many Requests');
};
}}),
"[project]/node_modules/@emailjs/browser/es/methods/send/send.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "send": (()=>send)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateTemplateParams$2f$validateTemplateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const send = async (serviceID, templateID, templateParams, options)=>{
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    const publicKey = opts.publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].publicKey;
    const blockHeadless = opts.blockHeadless || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockHeadless;
    const storageProvider = opts.storageProvider || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].storageProvider;
    const blockList = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeadless"])(navigator)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headlessError"])());
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateParams"])(publicKey, serviceID, templateID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateTemplateParams$2f$validateTemplateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTemplateParams"])(templateParams);
    if (templateParams && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockedValueInParams"])(blockList, templateParams)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedEmailError"])());
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLimitRateHit"])(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitRateError"])());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPost"])('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
};
}}),
"[project]/node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "validateForm": (()=>validateForm)
});
const validateForm = (form)=>{
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};
}}),
"[project]/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendForm": (()=>sendForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/api/sendPost.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateForm$2f$validateForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const findHTMLForm = (form)=>{
    return typeof form === 'string' ? document.querySelector(form) : form;
};
const sendForm = async (serviceID, templateID, form, options)=>{
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$buildOptions$2f$buildOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    const publicKey = opts.publicKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].publicKey;
    const blockHeadless = opts.blockHeadless || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockHeadless;
    const storageProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].storageProvider || opts.storageProvider;
    const blockList = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].blockList,
        ...opts.blockList
    };
    const limitRate = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"].limitRate,
        ...opts.limitRate
    };
    if (blockHeadless && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isHeadless$2f$isHeadless$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeadless"])(navigator)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$headlessError$2f$headlessError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headlessError"])());
    }
    const currentForm = findHTMLForm(form);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateParams$2f$validateParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateParams"])(publicKey, serviceID, templateID);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$validateForm$2f$validateForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateForm"])(currentForm);
    const formData = new FormData(currentForm);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isBlockedValueInParams$2f$isBlockedValueInParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBlockedValueInParams"])(blockList, formData)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$blockedEmailError$2f$blockedEmailError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedEmailError"])());
    }
    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$utils$2f$isLimitRateHit$2f$isLimitRateHit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLimitRateHit"])(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$errors$2f$limitRateError$2f$limitRateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitRateError"])());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$api$2f$sendPost$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendPost"])('/api/v1.0/email/send-form', formData);
};
}}),
"[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/init/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/send/send.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-client] (ecmascript)");
;
;
;
;
;
const __TURBOPACK__default__export__ = {
    init: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"],
    send: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["send"],
    sendForm: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendForm"],
    EmailJSResponseStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmailJSResponseStatus"]
};
}}),
"[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$models$2f$EmailJSResponseStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$init$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/init/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$send$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/send/send.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$methods$2f$sendForm$2f$sendForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=_8eaafc2c._.js.map