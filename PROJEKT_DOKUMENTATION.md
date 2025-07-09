# Black Forge Consulting - Projekt Dokumentation

> **Wichtig:** Diese Dokumentation wurde erstellt, damit Sie auch nach Jahren ohne Vorkenntnisse wieder produktiv mit diesem Projekt arbeiten können.

## 📋 Inhaltsverzeichnis

1. [Projekt-Übersicht & Schnellstart](#projekt-übersicht--schnellstart)
2. [Technische Architektur](#technische-architektur)
3. [Komponenten-Dokumentation](#komponenten-dokumentation)
4. [Styling & Design-System](#styling--design-system)
5. [Deployment & Hosting](#deployment--hosting)
6. [Wartung & Troubleshooting](#wartung--troubleshooting)
7. [Entwickler-Notizen](#entwickler-notizen)

---

## 🚀 Projekt-Übersicht & Schnellstart

### Was ist dieses Projekt?

**Black Forge Consulting** ist eine moderne, responsive Website für ein Beratungsunternehmen, das sich auf:
- Unternehmensberatung
- Personalvermittlung  
- M&A (Mergers & Acquisitions)

spezialisiert hat.

### Technologie-Stack

- **Framework:** Next.js 15 (React 19)
- **Styling:** Bootstrap 5.3.5 + Custom CSS
- **Animationen:** Framer Motion
- **E-Mail:** EmailJS für Kontaktformular
- **Hosting:** Vercel
- **Domain:** IONOS (blackforge-consulting.de)

### Schnellstart (Lokale Entwicklung)

```bash
# 1. Repository klonen (falls nötig)
git clone https://github.com/dennisbuckel/blackforge2-main.git
cd black-forge-consulting

# 2. Dependencies installieren
npm install

# 3. Development Server starten
npm run dev

# 4. Im Browser öffnen
# http://localhost:3000
```

### Wichtige Befehle

```bash
# Development mit Turbopack (schneller)
npm run dev

# Production Build erstellen
npm run build

# Production Server starten
npm run start

# Code-Qualität prüfen
npm run lint
```

---

## 🏗️ Technische Architektur

### Dateistruktur

```
black-forge-consulting/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.js          # Root Layout (Header, Footer, Fonts)
│   │   ├── page.js            # Homepage
│   │   ├── globals.css        # Globale Styles
│   │   ├── uber-uns/          # Über Uns Seite
│   │   ├── leistungen/        # Leistungen Seite
│   │   ├── kontakt/           # Kontakt Seite
│   │   ├── datenschutz/       # Datenschutz Seite
│   │   └── impressum/         # Impressum Seite
│   ├── components/            # React Komponenten
│   │   ├── Header.js          # Navigation
│   │   ├── Footer.js          # Footer
│   │   ├── VideoHeroWrapper.js # Video Hero System
│   │   ├── ContactFormClient.js # Kontaktformular
│   │   └── ...
│   └── hooks/                 # Custom React Hooks
├── public/                    # Statische Assets
│   ├── images/               # Bilder
│   ├── videos/               # Video-Dateien
│   │   └── optimized/        # Optimierte Videos
│   ├── logo.svg              # Logo
│   ├── sitemap.xml           # SEO Sitemap
│   └── robots.txt            # SEO Robots
├── package.json              # Dependencies & Scripts
├── next.config.js            # Next.js Konfiguration
├── vercel.json              # Vercel Deployment Config
└── VERCEL_SETUP_ANLEITUNG.md # Deployment Anleitung
```

### Wichtige Konfigurationsdateien

#### `next.config.js`
```javascript
// Wichtige Einstellungen:
- reactStrictMode: true        // Fehler-Erkennung
- images: { unoptimized: true } // Für statischen Export
- logging: { fetches: { fullUrl: false } } // Saubere Konsole
```

#### `package.json` - Wichtige Dependencies
```json
{
  "next": "^15.3.0",           // Framework
  "react": "^19.0.0",          // UI Library
  "bootstrap": "^5.3.5",       // CSS Framework
  "@emailjs/browser": "^4.4.1", // E-Mail Service
  "framer-motion": "^12.6.3"   // Animationen
}
```

#### `vercel.json`
```json
{
  "framework": "nextjs",
  "regions": ["fra1"]          // Frankfurt Server (EU)
}
```

---

## 🧩 Komponenten-Dokumentation

### Layout-Komponenten

#### `src/app/layout.js` - Root Layout
**Zweck:** Definiert die grundlegende HTML-Struktur für alle Seiten

**Wichtige Features:**
- Lädt Google Fonts (Inter, Cinzel, Playfair Display, Libre Baskerville)
- Integriert Bootstrap CSS und JavaScript
- Definiert SEO Metadata
- Enthält Header und Footer auf allen Seiten

**SEO Metadata:**
```javascript
export const metadata = {
  title: 'Black Forge Consulting | Premium medizinisches Fachpersonal',
  description: 'Professionelle Vermittlung von qualifizierten Ärzten...',
  keywords: 'Ärztevermittlung, Pflegekräfte, Pflegevermittlung...',
  // ... weitere SEO-Einstellungen
}
```

#### `src/components/Header.js` - Navigation
**Zweck:** Responsive Navigation mit Logo und Menü

**Features:**
- Responsive Bootstrap Navbar
- Aktive Link-Hervorhebung
- Mobile Hamburger-Menü
- Logo mit SVG

**Wichtige Funktionen:**
```javascript
const isActive = (path) => {
  // Prüft ob aktueller Pfad aktiv ist
}

const handleNavLinkClick = () => {
  // Schließt Mobile-Menü nach Klick
}
```

#### `src/components/Footer.js` - Footer
**Zweck:** Website-Footer mit Links und Kontaktdaten

### Video-Hero-System (Komplex!)

#### `src/components/VideoHeroWrapper.js` - Wrapper
**Zweck:** Löst Hydration-Probleme zwischen Server und Client

**Wichtig:** Zeigt Fallback-Bild bis Client-seitige Komponente geladen ist

#### `src/components/SimpleVideoHero.js` - Video Player
**Zweck:** Spielt optimierte Videos als Hero-Hintergrund ab

**Features:**
- Automatische Mobile/Desktop-Erkennung
- Verschiedene Video-Formate (MP4, WebM)
- Fallback-Bild bei Problemen
- Performance-optimiert

**Video-Dateien:**
```
public/videos/optimized/
├── hero-background.mp4          # Desktop
├── hero-background-mobile.mp4   # Mobile
├── hero-background.webm         # Desktop WebM
└── ...
```

### Kontaktformular-System

#### `src/components/ContactFormClient.js` - Hauptformular
**Zweck:** Vollständiges Kontaktformular mit EmailJS-Integration

**Features:**
- Verschiedene Anfragetypen (Personalvermittlung, Beratung, M&A)
- Automatische Nachrichtenvorlagen
- Datenschutz-Checkbox
- Spam-Schutz
- Erfolgs-/Fehler-Behandlung

**EmailJS-Konfiguration:**
```javascript
const serviceId = "blackforge";
const publicKey = "TXO7tV_mlkGfsf_td";
const templateId = "template_tnleshf";
```

**Anfragetypen:**
- `personalvermittlung` → Personalvermittlung
- `unternehmensberatung` → Unternehmensberatung  
- `munda` → M&A
- `andere` → Andere Anfrage

#### `src/components/PrivacyConsent.js` - Datenschutz
**Zweck:** DSGVO-konforme Datenschutz-Checkbox

### Weitere Komponenten

#### `src/components/ServiceCard.js` - Service-Karten
**Zweck:** Wiederverwendbare Karten für Dienstleistungen

#### `src/components/Button.js` - Button-Komponente
**Zweck:** Einheitliche Button-Styles

---

## 🎨 Styling & Design-System

### Farbschema

```css
:root {
  --bf-gold: #D4AF37;        /* Hauptfarbe - Gold */
  --bf-black: #111111;       /* Hintergrund - Schwarz */
  --bf-dark-gray: #333333;   /* Sekundärer Hintergrund */
  --bf-light-gray: #f5f5f5;  /* Heller Text */
}
```

### Schriftarten

```css
/* Verfügbare Font-Klassen: */
.font-cinzel      /* Elegante Überschriften */
.font-playfair    /* Dekorative Überschriften */
.font-baskerville /* Klassische Texte */
/* Standard: Inter (sans-serif) */
```

### Bootstrap-Integration

**Wichtig:** Das Projekt nutzt Bootstrap 5.3.5 als Basis, erweitert durch Custom CSS

**Custom CSS-Klassen:**
```css
.bg-black-custom    /* Schwarzer Hintergrund */
.text-gold          /* Goldener Text */
.btn-gold           /* Goldener Button */
.btn-outline-gold   /* Goldener Outline-Button */
.border-gold        /* Goldener Rahmen */
.service-card       /* Service-Karten mit Hover-Effekt */
```

### Responsive Design

**Breakpoints (Bootstrap Standard):**
- `xs`: < 576px (Mobile)
- `sm`: ≥ 576px (Mobile Landscape)
- `md`: ≥ 768px (Tablet)
- `lg`: ≥ 992px (Desktop)
- `xl`: ≥ 1200px (Large Desktop)

**Mobile-First-Ansatz:** Alle Styles sind zuerst für Mobile optimiert

### Animationen

**CSS-Animationen:**
```css
.service-card:hover {
  transform: translateY(-8px);  /* Hover-Effekt */
}

.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
}
```

**Framer Motion:** Wird für komplexere Animationen verwendet

---

## 🚀 Deployment & Hosting

### Vercel-Setup

**Aktueller Status:**
- Repository: `https://github.com/dennisbuckel/blackforge2-main.git`
- Hosting: Vercel (kostenlos)
- Domain: blackforge-consulting.de (IONOS)
- Region: Frankfurt (fra1)

### Automatische Deployments

**Trigger:**
- Jeder `git push` zu `main` Branch
- Manuell über Vercel Dashboard

**Build-Prozess:**
```bash
npm run build  # Erstellt optimierte Production-Version
```

### Domain-Konfiguration (IONOS)

**DNS-Einstellungen:**
```
A Record:    @ → 76.76.19.19
CNAME Record: www → cname.vercel-dns.com
```

**SSL:** Automatisch durch Vercel (Let's Encrypt)

### Deployment-Befehle

```bash
# Lokaler Test vor Deployment
npm run build
npm run start

# Git-Workflow für Deployment
git add .
git commit -m "Beschreibung der Änderungen"
git push origin main
# → Automatisches Deployment auf Vercel
```

---

## 🔧 Wartung & Troubleshooting

### Häufige Probleme & Lösungen

#### 1. Video lädt nicht
**Problem:** Hero-Video wird nicht angezeigt
**Lösung:** 
- Prüfen Sie `public/videos/optimized/` Ordner
- Fallback-Bild wird automatisch angezeigt
- Browser-Konsole auf Fehler prüfen

#### 2. Kontaktformular funktioniert nicht
**Problem:** E-Mails kommen nicht an
**Lösung:**
- EmailJS-Konfiguration prüfen:
  ```javascript
  serviceId: "blackforge"
  publicKey: "TXO7tV_mlkGfsf_td"
  templateId: "template_tnleshf"
  ```
- EmailJS-Dashboard auf Quota prüfen
- Browser-Konsole auf Fehler prüfen

#### 3. Styles werden nicht geladen
**Problem:** Website sieht kaputt aus
**Lösung:**
- Bootstrap CSS wird korrekt geladen? (`layout.js`)
- `globals.css` wird importiert?
- Browser-Cache leeren

#### 4. Mobile-Ansicht problematisch
**Problem:** Layout auf Mobile kaputt
**Lösung:**
- Bootstrap-Klassen prüfen (`col-md-*`, `d-md-*`)
- Custom CSS Media Queries prüfen
- Viewport Meta-Tag vorhanden?

### Updates durchführen

#### Dependencies aktualisieren
```bash
# Alle Packages prüfen
npm outdated

# Sicherheitsupdates
npm audit fix

# Major Updates (VORSICHTIG!)
npm update
```

#### Next.js Update
```bash
# Nächste Minor-Version
npm install next@latest

# Major-Version (TESTEN!)
npm install next@15
```

### Performance-Optimierung

#### Bilder optimieren
- Nutzen Sie WebP-Format wenn möglich
- Komprimieren Sie Bilder vor Upload
- Next.js Image-Komponente verwenden

#### Videos optimieren
- Aktuelle Videos sind bereits optimiert
- Separate Mobile/Desktop-Versionen vorhanden
- WebM-Format für bessere Kompression

### Backup-Strategie

**Wichtig:** Regelmäßige Backups erstellen!

```bash
# Git-Repository ist Ihr Backup
git push origin main

# Zusätzlich: Lokale Kopie
cp -r . ../backup-$(date +%Y%m%d)
```

---

## 💡 Entwickler-Notizen

### Wichtige Design-Entscheidungen

#### Warum Next.js App Router?
- Moderne React-Architektur
- Bessere Performance durch Server Components
- Einfachere Routing-Struktur
- Zukunftssicher

#### Warum Bootstrap statt Tailwind?
- Schnellere Entwicklung
- Bewährte Komponenten
- Gute Dokumentation
- Einfache Anpassung

#### Warum EmailJS?
- Keine Backend-Infrastruktur nötig
- Kostenlos für kleine Websites
- Einfache Integration
- Spam-Schutz integriert

### Code-Patterns

#### Client Components
```javascript
'use client';  // Immer am Anfang für interaktive Komponenten
```

#### Server Components (Standard)
```javascript
// Keine 'use client' → Server Component
// Gut für statische Inhalte, SEO
```

#### Dynamic Imports
```javascript
const VideoHeroWrapper = dynamic(() => import('@/components/VideoHeroWrapper'), {
  ssr: false  // Verhindert Server-Side-Rendering-Probleme
});
```

### Fallstricke & Workarounds

#### 1. Hydration Mismatch
**Problem:** Server und Client rendern unterschiedlich
**Lösung:** `VideoHeroWrapper` mit `useState` und `useEffect`

#### 2. Bootstrap JavaScript
**Problem:** Bootstrap JS muss nach React geladen werden
**Lösung:** `Script`-Komponente mit `strategy="afterInteractive"`

#### 3. Font Loading
**Problem:** FOUC (Flash of Unstyled Content)
**Lösung:** Next.js Font-Optimierung mit `variable`-Klassen

### Nützliche Debugging-Tipps

#### React DevTools
```bash
# Installation
npm install -g react-devtools
```

#### Next.js Debugging
```javascript
// In next.config.js für detaillierte Logs
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

#### Performance-Analyse
```bash
# Bundle-Analyse
npm install -g @next/bundle-analyzer
```

### Zukünftige Verbesserungen

#### Mögliche Erweiterungen
1. **CMS-Integration:** Strapi oder Contentful für einfache Inhaltspflege
2. **Analytics:** Google Analytics oder Plausible
3. **A/B-Testing:** Verschiedene Hero-Versionen testen
4. **Mehrsprachigkeit:** i18n für internationale Kunden
5. **Blog-System:** Für Content-Marketing

#### Performance-Optimierungen
1. **Image-Optimierung:** WebP + AVIF-Format
2. **Code-Splitting:** Weitere Dynamic Imports
3. **Caching:** Redis für API-Calls
4. **CDN:** Für statische Assets

---

## 📞 Support & Kontakt

### Bei Problemen

1. **Dokumentation prüfen** (diese Datei)
2. **Browser-Konsole** auf Fehler prüfen
3. **Vercel-Dashboard** für Deployment-Logs
4. **GitHub Issues** für Code-Probleme

### Wichtige Links

- **Live-Website:** https://blackforge-consulting.de
- **GitHub:** https://github.com/dennisbuckel/blackforge2-main
- **Vercel-Dashboard:** https://vercel.com/dashboard
- **EmailJS-Dashboard:** https://dashboard.emailjs.com

### Notfall-Kontakte

- **Domain:** IONOS-Account
- **Hosting:** Vercel-Account  
- **E-Mail:** EmailJS-Account
- **Code:** GitHub-Repository

---

**Letzte Aktualisierung:** Januar 2025
**Version:** 1.0
**Erstellt für:** Zukünftiges Ich in 5 Jahren 😊

> **Tipp:** Speichern Sie diese Dokumentation an einem sicheren Ort und aktualisieren Sie sie bei größeren Änderungen!
