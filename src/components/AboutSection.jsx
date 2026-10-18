import React from 'react';
import { 
  HeartHandshake, 
  Compass, 
  ShieldAlert, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle,
  BookOpen,
  Award,
  Users
} from 'lucide-react';
import { coreValues, schoolInfo } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function AboutSection({ soundEnabled, onOpenAdmission }) {
  const iconMap = {
    HeartHandshake: HeartHandshake,
    Compass: Compass,
    ShieldAlert: ShieldAlert,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="about" className="section-wrapper" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="kid-pill-tag sky">
            <Sparkles size={16} />
            <span>Discover Our Story</span>
          </div>
          <h2 className="section-title">
            About <span>VETRI VIVEKANANDA</span>
          </h2>
          <p className="section-subtitle">
            Providing high-quality, joyful primary and nursery education for over 33 years in T.Mariyur, Ramanathapuram.
          </p>
        </div>

        {/* Story Grid: Story on left, Image & Highlights on right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }} className="about-story-grid">
          
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#FF5964',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              fontSize: '1.1rem',
              marginBottom: '0.8rem'
            }}>
              <Award size={22} />
              <span>Founded in 1992 • 33+ Years of Educational Dedication</span>
            </div>

            <h3 style={{ fontSize: '1.85rem', color: '#0F172A', marginBottom: '1.2rem', lineHeight: 1.3 }}>
              A Safe, Loving Second Home Where Every Child Flourishes
            </h3>

            <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '1.2rem', lineHeight: 1.7 }}>
              Started under the visionary guidance of Correspondent <strong>Mrs. SULOCHANA.K</strong> and management, 
              <strong> VETRI VIVEKANANDA Nursery & Primary School</strong> began with 30 enthusiastic students. 
              Today, it stands as a cornerstone of primary and early childhood education in Ramanathapuram district.
            </p>

            <p style={{ fontSize: '1.05rem', color: '#475569', marginBottom: '1.8rem', lineHeight: 1.7 }}>
              We believe childhood is a precious window of wonder. Our campus combines playful nursery facilities, 
              spacious airy classrooms, a vibrant reading library, traditional Tamil martial arts (Silambam), 
              interactive phonics, and safe van transportation across nearby villages.
            </p>

            {/* Key Bullet Points */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem', marginBottom: '2rem' }}>
              {[
                "Recognized Nursery & Primary Curriculum",
                "Play-Way Phonics & Spoken English",
                "Silambam & Physical Fitness Drills",
                "Daily Nutritious Routine & Loving Teachers",
                "Doorstep GPS Van Fleet Coverage",
                "Strong Cultural & Moral Foundations"
              ].map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="#10B981" />
                  <span style={{ fontWeight: '700', fontSize: '0.95rem', color: '#334155' }}>{feat}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => {
                playSound('celebrate', soundEnabled);
                onOpenAdmission();
              }}
              className="kid-btn kid-btn-primary"
            >
              <span>Schedule a Campus Visit</span>
            </button>
          </div>

          {/* Right Image Feature */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.12)',
              border: '6px solid #FEF3C7',
              position: 'relative'
            }}>
              <img 
                src="/school.jpg" 
                alt="Vetri Vivekananda School Main Building" 
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
              
              {/* Badge overlay */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#FFFFFF',
                borderRadius: 'var(--radius-full)',
                padding: '0.5rem 1.2rem',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                color: '#FF5964'
              }}>
                <Sparkles size={18} color="#FFB703" />
                <span>Estd. 1992</span>
              </div>
            </div>

            {/* Overlapping Secondary Photo */}
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              left: '-25px',
              width: '180px',
              height: '140px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '4px solid #FFFFFF',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)',
              display: 'none'
            }} className="overlap-photo">
              <img 
                src="/clAss.jpg" 
                alt="Classroom" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Cards */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#0F172A' }}>Our Core Pillars of Excellence</h3>
            <p style={{ color: '#64748B' }}>Values that shape confident, compassionate, and bright young thinkers.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {coreValues.map((val, idx) => {
              const Icon = iconMap[val.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="kid-card"
                  style={{
                    background: '#F8FAFC',
                    border: `2px dashed ${val.color}50`,
                    padding: '2rem 1.6rem',
                    borderRadius: '28px',
                    transition: 'var(--transition-bounce)'
                  }}
                  onMouseEnter={() => playSound('pop', soundEnabled)}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.2rem'
                  }}>
                    <div style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '18px',
                      background: `${val.color}25`,
                      color: val.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={28} />
                    </div>
                    <span style={{
                      background: val.color,
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {val.badge}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.3rem', color: '#1E293B', marginBottom: '0.6rem' }}>
                    {val.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-story-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
          .overlap-photo {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
