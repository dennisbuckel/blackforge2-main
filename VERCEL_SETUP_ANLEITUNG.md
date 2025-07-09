# Vercel Setup Anleitung für Black Forge Consulting

## Schritt 1: GitHub Repository vorbereiten

Ihr Code ist bereits auf GitHub: `https://github.com/dennisbuckel/blackforge2.git`

**Wichtig:** Stellen Sie sicher, dass alle aktuellen Änderungen gepusht sind:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## Schritt 2: Vercel Account erstellen

1. Gehen Sie zu: https://vercel.com
2. Klicken Sie auf "Sign Up"
3. Wählen Sie "Continue with GitHub"
4. Autorisieren Sie Vercel für Ihr GitHub-Konto

## Schritt 3: Projekt auf Vercel deployen

1. Nach dem Login klicken Sie auf "New Project"
2. Wählen Sie Ihr Repository: `dennisbuckel/blackforge2`
3. Vercel erkennt automatisch, dass es sich um ein Next.js-Projekt handelt
4. **Framework Preset**: Next.js (wird automatisch erkannt)
5. **Root Directory**: `./` (Standard)
6. **Build Command**: `npm run build` (Standard)
7. **Output Directory**: `.next` (Standard)
8. Klicken Sie auf "Deploy"

## Schritt 4: Deployment abwarten

- Vercel baut Ihre Website automatisch
- Dauert ca. 2-3 Minuten
- Sie erhalten eine temporäre URL wie: `blackforge2-xyz.vercel.app`

## Schritt 5: Custom Domain (Ihre IONOS Domain) hinzufügen

1. In Ihrem Vercel Dashboard → Projekt auswählen
2. Gehen Sie zu "Settings" → "Domains"
3. Klicken Sie auf "Add Domain"
4. Geben Sie Ihre Domain ein (z.B. `blackforge-consulting.de`)
5. Vercel zeigt Ihnen DNS-Einstellungen an

## Schritt 6: DNS bei IONOS konfigurieren

1. Loggen Sie sich in Ihr IONOS-Konto ein
2. Gehen Sie zu "Domains & SSL" → Ihre Domain
3. Klicken Sie auf "DNS" (wie in Ihrem Screenshot)
4. Fügen Sie folgende Records hinzu:

**Für Hauptdomain (blackforge-consulting.de):**
- Type: `A`
- Name: `@`
- Value: `76.76.19.19`

**Für www-Subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

## Schritt 7: SSL-Zertifikat

- Vercel erstellt automatisch ein kostenloses SSL-Zertifikat
- Dauert ca. 24-48 Stunden nach DNS-Änderung
- Ihre Website ist dann über HTTPS erreichbar

## Schritt 8: Automatische Deployments

- Jeder Push zu GitHub löst automatisch ein neues Deployment aus
- Sie können auch manuell in Vercel deployen
- Preview-Deployments für Pull Requests

## Kosten

- **Vercel**: 0€ (Hobby Plan)
- **IONOS Domain**: Ihre bestehenden Domain-Kosten
- **Gesamt**: Nur Domain-Kosten

## Support & Monitoring

- Vercel Dashboard zeigt Analytics
- Automatische Error-Logs
- Performance-Monitoring inklusive

## Nächste Schritte nach Setup

1. Testen Sie Ihre Website
2. Überprüfen Sie alle Funktionen (Kontaktformular, etc.)
3. Einrichtung von Analytics (optional)
4. SEO-Optimierung

---

**Hinweis**: Falls Sie Probleme haben, kann ich Ihnen bei jedem Schritt helfen!
