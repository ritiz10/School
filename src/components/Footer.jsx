import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Heart, 
  ArrowUp,
  Bus,
  GraduationCap
} from 'lucide-react';

const YoutubeIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill={color} />
  </svg>
);
import { schoolInfo } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function Footer({ soundEnabled, onOpenAdmission }) {
  const scrollToTop = () => {
    playSound('pop', soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#0F172A',
      color: '#FFFFFF',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative'
    }}>
      {/* Top Wave */}
      <div style={{
        position: 'absolute',
        top: '-1px',
        left: 0,
        right: 0,
        lineHeight: 0,
        transform: 'rotate(180deg)'
      }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" fill="#0F172A"></path>
        </svg>
      </div>

      <div className="container">
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Col 1: School Identity & Mascot */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: '#FFFFFF',
                overflow: 'hidden',
                border: '3px solid #FFB703',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img src={schoolInfo.logo} alt={schoolInfo.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#FF5964',
                  margin: 0,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em'
                }}>
                  VETRI VIVEKANANDA
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: '700' }}>
                  Nursery & Primary School • Estd. 1992
                </div>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Nurturing joyful minds, character, phonics excellence, mental mathematics, Silambam martial arts, 
              and lifelong curiosity for 33+ memorable years in Ramanathapuram district.
            </p>

            <button
              onClick={() => {
                playSound('celebrate', soundEnabled);
                onOpenAdmission();
              }}
              className="kid-btn kid-btn-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.92rem' }}
            >
              <GraduationCap size={18} />
              <span>Admissions 2026-27</span>
            </button>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              color: '#FFFFFF',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { label: 'Home Page', href: '#home' },
                { label: 'About School & History', href: '#about' },
                { label: 'Academic Curriculum', href: '#academics' },
                { label: 'Meet Our Teachers', href: '#faculty' },
                { label: 'Campus & Activity Gallery', href: '#life' },
                { label: 'Van Transportation Routes', href: '#vans' },
                { label: 'School YouTube Videos', href: '#videos' },
                { label: 'Kids Phonics Zone', href: '#fun-zone' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={() => playSound('pop', soundEnabled)}
                    style={{
                      color: '#CBD5E1',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FFB703';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ color: '#FF5964' }}>•</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Campus Location */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              color: '#FFFFFF',
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Visit & Contact Us
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={20} color="#FF5964" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {schoolInfo.address}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <PhoneCall size={20} color="#FFB703" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {schoolInfo.phoneNumbers.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      style={{ color: '#CBD5E1', fontSize: '0.95rem', fontWeight: '700' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={20} color="#38BDF8" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  style={{ color: '#CBD5E1', fontSize: '0.95rem' }}
                >
                  {schoolInfo.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Clock size={20} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>
                  {schoolInfo.workingHours}
                </span>
              </div>
            </div>

            {/* Social Button */}
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={schoolInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: '#FF0000',
                  color: '#FFFFFF',
                  padding: '0.5rem 1.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                <YoutubeIcon size={18} />
                <span>Subscribe on YouTube</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#64748B', fontSize: '0.9rem', margin: 0 }}>
            © {new Date().getFullYear()} VETRI VIVEKANANDA Nursery & Primary School. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FFB703',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              fontSize: '0.9rem',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
