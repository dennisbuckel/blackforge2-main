"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(true);

  // Stellen Sie sicher, dass die Komponente nur auf Client-Seite gerendert wird
  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path) => {
    if (!mounted) return false;
    if (path === '/' && pathname === '/') {
      return true;
    }
    return path !== '/' && pathname.startsWith(path);
  };

  // Schließe das mobile Menu beim Klick auf einen Link
  const handleNavLinkClick = () => {
    if (window.innerWidth < 992) {
      setNavCollapsed(true);
    }
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-black-custom fixed-top">
      <div className="container">
        {/* Logo mit angepassten Dimensionen für Mobilgeräte */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/logo.jpeg"
            alt="Black Forge Consulting Logo"
            width={50}
            height={50}
            className="me-2"
            priority
          />
          <div className="logo-text font-baskerville d-none d-sm-block">BLACK FORGE CONSULTING</div>
          <div className="logo-text font-baskerville d-block d-sm-none">BLACK FORGE</div>
        </Link>
       
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!navCollapsed ? 'true' : 'false'}
          aria-label="Navigation umschalten"
          onClick={() => setNavCollapsed(!navCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       
        {/* Navigation Links */}
        <div className={`collapse navbar-collapse justify-content-end ${!navCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" 
                    className={`custom-nav-link ${isActive('/') ? 'active-nav-link' : ''}`}
                    onClick={handleNavLinkClick}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/uber-uns" 
                    className={`custom-nav-link ${isActive('/uber-uns') ? 'active-nav-link' : ''}`}
                    onClick={handleNavLinkClick}>
                ÜBER UNS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/leistungen" 
                    className={`custom-nav-link ${isActive('/leistungen') ? 'active-nav-link' : ''}`}
                    onClick={handleNavLinkClick}>
                LEISTUNGEN
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/kontakt" 
                    className={`custom-nav-link ${isActive('/kontakt') ? 'active-nav-link' : ''}`}
                    onClick={handleNavLinkClick}>
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .logo-text {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          /* Eleganterer Goldverlauf mit tieferen, reicheren Tönen */
          background: linear-gradient(135deg, 
            #966F33 0%, 
            #B8860B 15%, 
            #D4AF37 30%, 
            #E6BE8A 45%, 
            #D4AF37 60%, 
            #B8860B 75%, 
            #966F33 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          /* Subtiler Metallic-Effekt */
          text-shadow: 
            0 0 1px rgba(150, 111, 51, 0.3),
            0 0 2px rgba(150, 111, 51, 0.1);
          /* Sanftere, subtilere Animation */
          animation: goldFlow 10s ease infinite;
          position: relative;
        }

        /* Goldener Textureffekt mit Metallicglanz */
        .logo-text::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.05) 25%, 
            transparent 50%, 
            rgba(255, 255, 255, 0.05) 75%, 
            transparent 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          pointer-events: none;
          animation: shimmerEffect 5s linear infinite;
        }

        @keyframes goldFlow {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }

        @keyframes shimmerEffect {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        /* Media Query für mobile Ansicht */
        @media (max-width: 768px) {
          .logo-text {
            font-size: 1.2rem;
          }
        }
      `}</style>

      {/* Global Styles müssen außerhalb von jsx sein, um auf Komponenten wie Link zu wirken */}
      <style jsx global>{`
        /* Verbessertes Navigations-Styling mit benutzerdefinierten Klassen */
        .custom-nav-link {
          color: #fff;
          position: relative;
          transition: color 0.3s ease;
          padding: 0.5rem 1rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          display: block;
        }

        .custom-nav-link:hover {
          color: #E6BE8A;
        }

        .custom-nav-link:focus {
          outline: none;
          color: #E6BE8A;
        }

        /* Eleganter Unterline-Effekt für aktive und Hover-Zustände */
        .custom-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #B8860B, #D4AF37);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          opacity: 0;
        }

        .custom-nav-link:hover::after,
        .active-nav-link::after,
        .custom-nav-link:focus::after {
          width: 80%;
          opacity: 1;
        }

        /* Barrierefreiheit: Focus-Visible für Tastaturnavigation */
        .custom-nav-link:focus-visible {
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.5);
          border-radius: 3px;
        }
        
        /* Aktiver Link-Style */
        .active-nav-link {
          color: #D4AF37 !important;
        }
        
        /* Mobiles Styling */
        @media (max-width: 768px) {
          .navbar {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }

          .navbar-brand {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }

          .custom-nav-link {
            padding: 0.75rem 1rem;
            border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          }

          .custom-nav-link::after {
            bottom: -3px;
          }
          
          .navbar-toggler {
            padding: 0.25rem 0.5rem;
            border: 1px solid rgba(212, 175, 55, 0.5);
          }
        }
      `}</style>
    </header>
  );
}