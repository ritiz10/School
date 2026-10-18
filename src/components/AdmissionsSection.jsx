import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  PhoneCall,
  Clock,
  ArrowRight
} from 'lucide-react';
import { admissionsGuide, schoolInfo } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function AdmissionsSection({ soundEnabled, onOpenAdmission }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    playSound('click', soundEnabled);
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="admissions" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 100%)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="kid-pill-tag yellow">
            <GraduationCap size={16} />
            <span>Join Our School Family</span>
          </div>
          <h2 className="section-title">
            Admission Process <span>2026 - 2027</span>
          </h2>
          <p className="section-subtitle">
            A simple, friendly, and transparent enrollment process for Pre-KG, LKG, UKG and Standards 1st through 5th.
          </p>
        </div>

        {/* 4 Steps Roadmap */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {admissionsGuide.steps.map((item, idx) => (
            <div
              key={idx}
              className="kid-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '2px solid #FEF3C7',
                padding: '2rem 1.6rem',
                position: 'relative'
              }}
              onMouseEnter={() => playSound('pop', soundEnabled)}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#FF5964',
                color: '#FFFFFF',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                boxShadow: '0 8px 18px rgba(255, 89, 100, 0.35)'
              }}>
                {item.step}
              </div>

              <h4 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.6rem' }}>
                {item.title}
              </h4>

              <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Documents Required + Fast Apply Box */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'start',
          marginBottom: '4rem'
        }} className="admissions-grid">
          
          {/* Left: Required Documents Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '28px',
            padding: '2.2rem',
            border: '3px solid #E0F2FE',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <FileText size={24} color="#0284C7" />
              <h3 style={{ fontSize: '1.45rem', color: '#0F172A', margin: 0 }}>
                Required Documents Checklist
              </h3>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Please bring simple photocopies during your campus visit. Our office staff will assist you with xerox copies if needed:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {admissionsGuide.documents.map((doc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <CheckCircle2 size={20} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: '600' }}>
                    {doc}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '2px dashed #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Direct Admissions Helpline</div>
                <div style={{ fontWeight: '800', color: '#FF5964', fontSize: '1.1rem' }}>
                  {schoolInfo.phoneNumbers[0]}
                </div>
              </div>
              <button
                onClick={() => {
                  playSound('celebrate', soundEnabled);
                  onOpenAdmission();
                }}
                className="kid-btn kid-btn-primary"
                style={{ padding: '0.65rem 1.4rem' }}
              >
                <span>Apply Online</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Frequently Asked Questions Accordion */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <HelpCircle size={24} color="#D97706" />
              <h3 style={{ fontSize: '1.45rem', color: '#0F172A', margin: 0 }}>
                Frequently Asked Questions
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {admissionsGuide.faq.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      border: isOpen ? '2px solid #FFB703' : '2px solid #F1F5F9',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-sm)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: '100%',
                        padding: '1.2rem 1.4rem',
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '700',
                        fontSize: '1.05rem',
                        color: isOpen ? '#FF5964' : '#1E293B',
                        background: isOpen ? '#FFFBEB' : '#FFFFFF'
                      }}
                    >
                      <span>{item.q}</span>
                      {isOpen ? <ChevronUp size={20} color="#FF5964" /> : <ChevronDown size={20} color="#64748B" />}
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: '1.2rem 1.4rem',
                        borderTop: '1px solid #FEF3C7',
                        color: '#475569',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        background: '#FFFFFF'
                      }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .admissions-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
