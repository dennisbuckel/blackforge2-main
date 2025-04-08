// components/StaticNavigation.js
import Link from 'next/link';

export default function StaticNavigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black-custom fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand text-gold fw-bold">
          BLACK FORGE CONSULTING
        </Link>
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link href="/uber-uns" className="nav-link">ÜBER UNS</Link>
            </li>
            <li className="nav-item">
              <Link href="/leistungen" className="nav-link">LEISTUNGEN</Link>
            </li>
            <li className="nav-item">
              <Link href="/kontakt" className="nav-link">KONTAKT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}