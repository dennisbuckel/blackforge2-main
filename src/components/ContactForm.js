// components/ContactForm.js
"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'allgemein',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validierung
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Bitte füllen Sie alle Pflichtfelder aus.'
      });
      return;
    }
    
    // E-Mail-Validierung mit regulärem Ausdruck
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
      });
      return;
    }
    
    // In einer echten Anwendung würden wir hier das Formular an einen Server senden
    // Da dies nur ein Beispiel ist, simulieren wir eine erfolgreiche Übermittlung
    
    // Simulierte Verzögerung für das Absenden
    setFormStatus({
      submitted: false,
      error: false,
      message: 'Formular wird gesendet...'
    });
    
    try {
      // Simulierter API-Aufruf
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.'
      });
      
      // Formular zurücksetzen
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        inquiryType: 'allgemein',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Es gab ein Problem beim Senden des Formulars. Bitte versuchen Sie es später erneut.'
      });
    }
  };

  return (
    <div className="bg-black-custom p-4 rounded shadow">
      {formStatus.submitted ? (
        <div className="text-center p-4">
          <div className="text-gold display-4 mb-3">✓</div>
          <h3 className="fs-3 fw-semibold text-white mb-3">Nachricht gesendet!</h3>
          <p className="text-white mb-4">{formStatus.message}</p>
          <button 
            onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
            className="btn btn-gold px-4 py-2"
            aria-label="Neues Formular beginnen"
          >
            Neues Formular
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} aria-label="Kontaktformular">
          {formStatus.message && (
            <div 
              className={`p-3 rounded mb-4 ${formStatus.error ? 'bg-danger' : 'bg-success'} text-white`}
              role="alert"
              aria-live="polite"
            >
              {formStatus.message}
            </div>
          )}
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name *</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">E-Mail *</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
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
              aria-required="false"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="organization" className="form-label text-white">Organisation/Einrichtung</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              aria-required="false"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="inquiryType" className="form-label text-white">Art der Anfrage</label>
            <select
              className="form-select bg-dark text-white border-secondary"
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              aria-required="false"
            >
              <option value="allgemein">Allgemeine Anfrage</option>
              <option value="arzt">Ärztevermittlung</option>
              <option value="pflege">Pflegekraftvermittlung</option>
              <option value="fachpersonal">Medizinisches Fachpersonal</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-white">Nachricht *</label>
            <textarea
              className="form-control bg-dark text-white border-secondary"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            ></textarea>
          </div>
          
          <div className="text-secondary small mb-3">
            * Pflichtfelder
          </div>
          
          <button
            type="submit"
            className="btn btn-gold w-100 py-2"
            aria-label="Formular absenden"
          >
            Nachricht senden
          </button>
        </form>
      )}
    </div>
  );
}