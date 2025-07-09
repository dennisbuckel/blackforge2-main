# 🚀 Schnellstart: Website auf Vercel hosten

## Was Sie jetzt tun müssen:

### 1. Code zu GitHub pushen (falls noch nicht geschehen)
```bash
cd blackforge2-main
git add .
git commit -m "Add Vercel configuration"
git push origin main
```

### 2. Vercel Account erstellen
- Gehen Sie zu: **https://vercel.com**
- Klicken Sie auf "Sign Up"
- Wählen Sie "Continue with GitHub"

### 3. Projekt deployen
- Klicken Sie auf "New Project"
- Wählen Sie Repository: `dennisbuckel/blackforge2`
- Klicken Sie auf "Deploy"
- ⏱️ Warten Sie 2-3 Minuten

### 4. Ihre IONOS Domain verbinden
- In Vercel: Settings → Domains → Add Domain
- Geben Sie Ihre Domain ein
- Bei IONOS DNS-Einstellungen ändern:
  - **A Record**: `@` → `76.76.19.19`
  - **CNAME**: `www` → `cname.vercel-dns.com`

## ✅ Fertig!
- **Kosten**: 0€ (nur Domain-Gebühren bei IONOS)
- **SSL**: Automatisch kostenlos
- **Updates**: Automatisch bei jedem Git Push

## 📞 Hilfe benötigt?
Falls Sie bei einem Schritt Hilfe brauchen, fragen Sie einfach!

---
**Vollständige Anleitung**: Siehe `VERCEL_SETUP_ANLEITUNG.md`
