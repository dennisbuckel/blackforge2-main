"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function PrivacyConsent({ onChange, checked = false }) {
  const [isChecked, setIsChecked] = useState(checked);
  
  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };
  
  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="privacy"
        name="privacy"
        checked={isChecked}
        onChange={handleChange}
        required
      />
      <label className="form-check-label text-white" htmlFor="privacy">
        Ich habe die <Link href="/datenschutz" className="text-gold" target="_blank">Datenschutzerklärung</Link> gelesen und stimme zu, dass meine angegebenen Daten zwecks Kontaktaufnahme gespeichert und verarbeitet werden. Die Daten werden nur für den Zweck der Bearbeitung meines Anliegens verwendet und nach Abschluss auf meine Anfrage hin gelöscht.
      </label>
    </div>
  );
}