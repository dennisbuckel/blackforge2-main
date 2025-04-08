"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/' && pathname === '/') {
      return true;
    }
    return path !== '/' && pathname.startsWith(path);
  };
 
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-black-custom fixed-top">
      <div className="container">
        {/* Logo mit größeren Dimensionen */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/logo.svg"
            alt="Black Forge Consulting Logo"
            width={60}
            height={60}
            className="me-3"
            priority
          />
          <span className="text-gold fw-bold">BLACK FORGE CONSULTING</span>
        </Link>
       
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Navigation umschalten"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       
        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/uber-uns" className={`nav-link ${isActive('/uber-uns') ? 'active' : ''}`}>
                ÜBER UNS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/leistungen" className={`nav-link ${isActive('/leistungen') ? 'active' : ''}`}>
                LEISTUNGEN
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/kontakt" className={`nav-link ${isActive('/kontakt') ? 'active' : ''}`}>
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}