"use client";
import { useState } from 'react';
import PrivacyConsent from './PrivacyConsent';

export default function ContactFormClient() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
      privacy: false
    });

  // Kürzere Vorlagen für verschiedene Anfragetypen
  const messageTemplates = {
    personalvermittlung: 
      'Ich interessiere mich für Ihre Personalvermittlungsdienstleistungen und bitte um Kontaktaufnahme zur Besprechung der Möglichkeiten.',
    
    unternehmensberatung:
      'Ich möchte Ihre Unternehmensberatungsleistungen in Anspruch nehmen und bitte um ein Beratungsgespräch.',
    
    rundumbetreuung:
      'Ich interessiere mich für Ihr Angebot zur Rundumbetreuung und bitte um weitere Informationen.',
    
    andere:
      'Ich habe eine Anfrage und bitte um Kontaktaufnahme.'
  };

 // Änderung im Formular behandeln
 const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Wenn Checkbox, dann den "checked"-Wert verwenden, ansonsten den "value"-Wert
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Wenn der Anfragetyp geändert wird, aktualisiere die Nachrichtenvorlage
    if (name === 'inquiryType' && value !== '') {
      setFormData(prev => ({
        ...prev,
        message: messageTemplates[value] || ''
      }));
    }
  };

  // Formular absenden
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier würde der Code zum Absenden des Formulars stehen
    // z.B. API-Aufruf oder E-Mail-Versand
    console.log('Formular abgesendet:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns umgehend bei Ihnen melden.');
    
    // Formular zurücksetzen
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
      privacy: false
    });
  };

  return (
    <div className="card bg-black-custom p-4 mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ihr Name"
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">E-Mail</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ihre E-Mail-Adresse"
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="phone" className="form-label text-white">Telefon</label>
            <input
              type="tel"
              className="form-control bg-dark text-white border-secondary"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ihre Telefonnummer"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="inquiryType" className="form-label text-white">Anfragetyp</label>
            <select
              className="form-select bg-dark text-white border-secondary"
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option value="">Bitte wählen...</option>
              <option value="personalvermittlung">Personalvermittlung</option>
              <option value="unternehmensberatung">Unternehmensberatung</option>
              <option value="rundumbetreuung">Rundumbetreuung</option>
              <option value="andere">Andere Anfrage</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="form-label text-white">Nachricht</label>
            <textarea 
              className="form-control bg-dark text-white border-secondary" 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Ihre Nachricht an uns"
            ></textarea>
          </div>
          
          <PrivacyConsent 
            onChange={handleChange} 
            checked={formData.privacy}
          />
          
          <button type="submit" className="btn btn-gold">Nachricht senden</button>
        </form>
      </div>
    </div>
  );
}