import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  Send,
  Bus,
  Calendar,
  User,
  MapPin,
  PartyPopper
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { schoolInfo } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function AdmissionModal({ isOpen, onClose, soundEnabled }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    grade: 'Pre-KG',
    parentName: '',
    phone: '',
    location: '',
    needTransport: true,
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound('celebrate', soundEnabled);

    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.2rem',
      overflowY: 'auto'
    }}>
      <div style={{
        background: '#FFFFFF',
        borderRadius: '32px',
        maxWidth: '560px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
        border: '4px solid #FEF3C7',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#F1F5F9',
            color: '#64748B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          /* Success Screen */
          <div style={{ padding: '3.5rem 2.5rem', textAlign: 'center' }}>
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: '#D1FAE5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <PartyPopper size={46} className="animate-wiggle" />
            </div>

            <span className="kid-pill-tag mint">Application Received</span>
            <h3 style={{ fontSize: '1.85rem', color: '#0F172A', marginTop: '0.8rem', marginBottom: '0.8rem' }}>
              Welcome to the Vetri Family!
            </h3>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you for applying for <strong>{formData.childName || 'your child'}</strong> for <strong>{formData.grade}</strong>. 
              Our admissions team will call you within 24 hours to confirm your friendly campus tour.
            </p>

            <div style={{
              background: '#F8FAFC',
              borderRadius: '20px',
              padding: '1.2rem',
              marginBottom: '2rem',
              border: '2px dashed #CBD5E1'
            }}>
              <div style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '0.4rem' }}>
                Need urgent assistance?
              </div>
              <a
                href={`tel:${schoolInfo.phoneNumbers[0]}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#FF5964',
                  fontWeight: '800',
                  fontSize: '1.1rem',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                <PhoneCall size={18} />
                <span>{schoolInfo.phoneNumbers[0]}</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="kid-btn kid-btn-primary"
              style={{ width: '100%' }}
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          /* Form Screen */
          <div style={{ padding: '2.5rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="kid-pill-tag pink">
                <GraduationCap size={16} />
                <span>Admissions 2026-27</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#0F172A', margin: '0.4rem 0' }}>
                Admission Inquiry Form
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.95rem', margin: 0 }}>
                Fill out the quick form below. Our principal will be delighted to meet you!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-two-col">
                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#334155', marginBottom: '0.4rem' }}>
                    Child's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anandha Kumar"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '2px solid #E2E8F0',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#334155', marginBottom: '0.4rem' }}>
                    Applying For Grade *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '2px solid #E2E8F0',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      background: '#FFFFFF'
                    }}
                  >
                    <option value="Pre-KG">Pre-KG (Age 2.5 - 3 yrs)</option>
                    <option value="LKG">LKG (Age 3 - 4 yrs)</option>
                    <option value="UKG">UKG (Age 4 - 5 yrs)</option>
                    <option value="Std 1st">Standard 1st</option>
                    <option value="Std 2nd">Standard 2nd</option>
                    <option value="Std 3rd">Standard 3rd</option>
                    <option value="Std 4th">Standard 4th</option>
                    <option value="Std 5th">Standard 5th</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="form-two-col">
                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#334155', marginBottom: '0.4rem' }}>
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. R. Karthik"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '2px solid #E2E8F0',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#334155', marginBottom: '0.4rem' }}>
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '2px solid #E2E8F0',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#334155', marginBottom: '0.4rem' }}>
                  Village / Residential Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. T.Mariyur / Mariyur coastal road / nearby village"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '2px solid #E2E8F0',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              {/* Van checkbox */}
              <div style={{
                background: '#F0FDF4',
                padding: '0.85rem 1.2rem',
                borderRadius: '16px',
                border: '1px solid #BBF7D0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.2rem',
                cursor: 'pointer'
              }}
              onClick={() => setFormData({ ...formData, needTransport: !formData.needTransport })}
              >
                <input
                  type="checkbox"
                  checked={formData.needTransport}
                  onChange={(e) => setFormData({ ...formData, needTransport: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: '#10B981', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#065F46', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Bus size={18} />
                  <span>Yes, I require school van pick & drop facility</span>
                </span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontWeight: '700', fontSize: '0.88rem', color: '#334155', marginBottom: '0.4rem' }}>
                  Any questions or special notes? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your child or any specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '2px solid #E2E8F0',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="kid-btn kid-btn-primary"
                style={{ width: '100%', padding: '1rem' }}
              >
                <Send size={18} />
                <span>Submit Admission Application</span>
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
