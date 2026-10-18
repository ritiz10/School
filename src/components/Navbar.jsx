import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  GraduationCap, 
  Heart, 
  PhoneCall,
  Bus,
  Image as ImageIcon,
  Video,
  Smile
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function Navbar({ soundEnabled, setSoundEnabled, onOpenAdmission }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Our Teachers', href: '#faculty' },
    { label: 'School Life', href: '#life' },
    { label: 'Van Fleet', href: '#vans' },
    { label: 'Watch Videos', href: '#videos' },
    { label: 'Kids Fun Zone', href: '#fun-zone' },
  ];

  const handleNavClick = (href) => {
    playSound('pop', soundEnabled);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) {
      playSound('chime', true);
    }
  };

  return (
    <>
      {/* Top Welcome Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #FF5964, #FFB703, #38BDF8, #8B5CF6)',
        color: '#FFFFFF',
        padding: '0.4rem 1rem',
        fontSize: '0.85rem',
        fontWeight: '700',
        fontFamily: 'var(--font-heading)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1rem' }}>🎉</span>
            <span>Admissions Open for Academic Year 2026-27 | Pre-KG to Std 5th</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <a 
              href={`tel:${schoolInfo.phoneNumbers[0]}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#FFFFFF' }}
            >
              <PhoneCall size={14} />
              <span>{schoolInfo.phoneNumbers[0]}</span>
            </a>
            <span style={{ opacity: 0.8 }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Bus size={14} />
              <span>Free Van Inquiry</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.6rem 0' : '0.9rem 0',
        transition: 'all 0.3s ease',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.03)',
        borderBottom: '2px solid rgba(255, 183, 3, 0.3)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo & School Name */}
          <a 
            href="#home" 
            onClick={() => handleNavClick('#home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <div style={{
              width: isScrolled ? '50px' : '58px',
              height: isScrolled ? '50px' : '58px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(255, 89, 100, 0.3)',
              border: '3px solid #FFB703',
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-bounce)'
            }}
            className="animate-wiggle"
            >
              <img 
                src={schoolInfo.logo} 
                alt={schoolInfo.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: isScrolled ? '1.35rem' : '1.55rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#FF5964',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <span>VETRI VIVEKANANDA</span>
                <Sparkles size={18} color="#FFB703" />
              </div>
              <div style={{
                fontSize: '0.78rem',
                fontWeight: '700',
                color: '#0284C7',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                Nursery & Primary School • Estd. 1992
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              alignItems: 'center',
              gap: '1.2rem'
            }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: 'var(--text-main)',
                      padding: '0.4rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FF5964';
                      e.currentTarget.style.backgroundColor = '#FFE3E5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-main)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Sound FX Toggle + Apply CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Interactive Sound Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute playful sounds" : "Enable playful sounds"}
              aria-label="Toggle Sound Effects"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: soundEnabled ? '#FEF3C7' : '#F1F5F9',
                color: soundEnabled ? '#D97706' : '#94A3B8',
                border: '2px solid',
                borderColor: soundEnabled ? '#F59E0B' : '#CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-bounce)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            {/* Admission Button */}
            <button
              onClick={() => {
                playSound('celebrate', soundEnabled);
                onOpenAdmission();
              }}
              className="kid-btn kid-btn-primary"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: '0.95rem',
                display: 'none'
              }}
              id="desktopApplyBtn"
            >
              <GraduationCap size={18} />
              <span>Enroll Now</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                playSound('click', soundEnabled);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                background: '#FFE3E5',
                color: '#FF5964',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#FFFFFF',
            borderTop: '2px dashed #FFD166',
            padding: '1.2rem 1.5rem',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            animation: 'floatGentle 0.3s ease-out'
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'var(--text-main)',
                      padding: '0.5rem 0.8rem',
                      borderRadius: 'var(--radius-sm)',
                      background: '#F8FAFC'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    playSound('celebrate', soundEnabled);
                    onOpenAdmission();
                  }}
                  className="kid-btn kid-btn-primary"
                  style={{ width: '100%' }}
                >
                  <GraduationCap size={20} />
                  <span>Apply for Admission</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Media query styling for responsive navbar */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: block !important;
          }
          #desktopApplyBtn {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
