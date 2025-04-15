"use client";
import { useState } from 'react';
import PrivacyConsent from './PrivacyConsent';
import emailjs from '@emailjs/browser';

export default function ContactFormClient() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
      privacy: false
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
      success: false,
      error: null
    });

  // Kürzere Vorlagen für verschiedene Anfragetypen
  const messageTemplates = {
    personalvermittlung: 
      'Ich interessiere mich für Ihre Personalvermittlungsdienstleistungen und bitte um Kontaktaufnahme zur Besprechung der Möglichkeiten.',
    
    unternehmensberatung:
      'Ich möchte Ihre Unternehmensberatungsleistungen in Anspruch nehmen und bitte um ein Beratungsgespräch.',
    
    munda:
      'Ich interessiere mich für Ihre M&A-Dienstleistungen und bitte um weitere Informationen zur Begleitung bei Unternehmenskäufen/-verkäufen.',
    
    andere:
      'Ich habe eine Anfrage und bitte um Kontaktaufnahme.'
  };

  // Anfragetyp in lesbaren Text umwandeln
  const getInquiryTypeText = (type) => {
    switch(type) {
      case 'personalvermittlung': return 'Personalvermittlung';
      case 'unternehmensberatung': return 'Unternehmensberatung';
      case 'munda': return 'M&A';
      case 'andere': return 'Andere Anfrage';
      default: return '';
    }
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
    
    // Prüfe, ob die Datenschutzerklärung akzeptiert wurde
    if (!formData.privacy) {
      alert('Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: null });
    
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
    emailjs.send(serviceId, templateId, emailParams, publicKey)
      .then((response) => {
        console.log('Email erfolgreich gesendet!', response);
        setSubmitStatus({ success: true, error: null });
        
        // Formular zurücksetzen
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
          privacy: false
        });
      })
      .catch((error) => {
        console.error('Fehler beim Senden:', error);
        setSubmitStatus({ 
          success: false, 
          error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt per E-Mail.' 
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const resetForm = () => {
    setSubmitStatus({ success: false, error: null });
  };

  return (
    <div className="card bg-black-custom p-4 mb-4">
      <div className="card-body">
        {submitStatus.success ? (
          <div className="text-center py-4">
            <div className="mb-3">
              <i className="bi bi-check-circle text-success" style={{ fontSize: "3rem" }}></i>
            </div>
            <h4 className="mb-3 text-white">Vielen Dank für Ihre Nachricht!</h4>
            <p className="text-white mb-4">Wir werden uns umgehend bei Ihnen melden.</p>
            <button 
              className="btn btn-outline-gold" 
              onClick={resetForm}
            >
              Neues Formular
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {submitStatus.error && (
              <div className="alert alert-danger mb-4" role="alert">
                {submitStatus.error}
              </div>
            )}
            
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
                required
              >
                <option value="">Bitte wählen...</option>
                <option value="personalvermittlung">Personalvermittlung</option>
                <option value="unternehmensberatung">Unternehmensberatung</option>
                <option value="munda">M&A</option>
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
                required
              ></textarea>
            </div>
            
            <PrivacyConsent 
              onChange={handleChange} 
              checked={formData.privacy}
            />
            
            <button 
              type="submit" 
              className="btn btn-gold" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Wird gesendet...
                </>
              ) : 'Nachricht senden'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}