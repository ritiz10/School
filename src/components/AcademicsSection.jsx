import React, { useState } from 'react';
import { 
  Sparkles, 
  Baby, 
  BookOpen, 
  Clock, 
  Sun, 
  Music, 
  Coffee, 
  Puzzle, 
  Moon, 
  Palette, 
  Trophy,
  Flag,
  Calculator,
  Feather,
  Apple,
  FlaskConical,
  Smile,
  BookMarked,
  Swords,
  Bike,
  CheckCircle2
} from 'lucide-react';
import { academicsData } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function AcademicsSection({ soundEnabled, onOpenAdmission }) {
  const [activeTab, setActiveTab] = useState('nursery');

  const iconMap = {
    Sun: Sun,
    Music: Music,
    BookOpen: BookOpen,
    Coffee: Coffee,
    Puzzle: Puzzle,
    Moon: Moon,
    Palette: Palette,
    Trophy: Trophy,
    Flag: Flag,
    Calculator: Calculator,
    Feather: Feather,
    Apple: Apple,
    FlaskConical: FlaskConical,
    Smile: Smile,
    BookMarked: BookMarked,
    Swords: Swords,
    Bike: Bike
  };

  const program = activeTab === 'nursery' ? academicsData.nursery : academicsData.primary;

  return (
    <section id="academics" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFBEB 50%, #F0FDF4 100%)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="kid-pill-tag yellow">
            <BookOpen size={16} />
            <span>Inspiring Curriculum</span>
          </div>
          <h2 className="section-title">
            Academic <span>Programs & Daily Routine</span>
          </h2>
          <p className="section-subtitle">
            A balanced harmony of play-way foundational discovery, bilingual eloquence, science exploration, and traditional skills.
          </p>
        </div>

        {/* Big Playful Tab Switcher */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => {
              playSound('pop', soundEnabled);
              setActiveTab('nursery');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1rem 2.2rem',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'var(--transition-bounce)',
              background: activeTab === 'nursery' ? '#FF5964' : '#FFFFFF',
              color: activeTab === 'nursery' ? '#FFFFFF' : '#475569',
              boxShadow: activeTab === 'nursery' ? '0 12px 25px rgba(255, 89, 100, 0.35)' : 'var(--shadow-sm)',
              border: activeTab === 'nursery' ? '3px solid #FF5964' : '3px solid #E2E8F0'
            }}
          >
            <Baby size={24} />
            <span>Nursery & KG (Ages 2.5 - 5)</span>
          </button>

          <button
            onClick={() => {
              playSound('pop', soundEnabled);
              setActiveTab('primary');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1rem 2.2rem',
              borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'var(--transition-bounce)',
              background: activeTab === 'primary' ? '#0284C7' : '#FFFFFF',
              color: activeTab === 'primary' ? '#FFFFFF' : '#475569',
              boxShadow: activeTab === 'primary' ? '0 12px 25px rgba(2, 132, 199, 0.35)' : 'var(--shadow-sm)',
              border: activeTab === 'primary' ? '3px solid #0284C7' : '3px solid #E2E8F0'
            }}
          >
            <BookOpen size={24} />
            <span>Primary School (Std 1 to 5)</span>
          </button>
        </div>

        {/* Program Overview Banner */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '2rem 2.5rem',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '3rem',
          border: '3px solid #FEF3C7',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div>
            <span style={{
              background: activeTab === 'nursery' ? '#FFE3E5' : '#E0F2FE',
              color: activeTab === 'nursery' ? '#FF5964' : '#0284C7',
              padding: '0.3rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: '800',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-heading)'
            }}>
              {program.age}
            </span>
            <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '0.5rem', color: '#0F172A' }}>
              {program.title}
            </h3>
            <p style={{ color: '#64748B', maxWidth: '750px', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {program.overview}
            </p>
          </div>

          <button
            onClick={() => {
              playSound('celebrate', soundEnabled);
              onOpenAdmission();
            }}
            className="kid-btn kid-btn-yellow"
          >
            <span>Inquire for {activeTab === 'nursery' ? 'Nursery' : 'Primary'}</span>
          </button>
        </div>

        {/* Primary Subjects Grid if activeTab === 'primary' */}
        {activeTab === 'primary' && program.subjects && (
          <div style={{ marginBottom: '3.5rem' }}>
            <h4 style={{
              textAlign: 'center',
              fontSize: '1.5rem',
              marginBottom: '1.8rem',
              color: '#0F172A'
            }}>
              🌟 Key Subject Highlights & Special Skills
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '1rem'
            }}>
              {program.subjects.map((sub, i) => (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '1.2rem',
                    border: '2px solid #F1F5F9',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    transition: 'var(--transition-bounce)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = sub.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#F1F5F9';
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: `${sub.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: sub.color,
                    flexShrink: 0
                  }}>
                    <BookOpen size={20} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    color: '#1E293B'
                  }}>
                    {sub.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nursery Features if activeTab === 'nursery' */}
        {activeTab === 'nursery' && program.features && (
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.2rem'
            }}>
              {program.features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '1.4rem',
                    boxShadow: 'var(--shadow-sm)',
                    border: '2px solid #FFE4E6',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.8rem'
                  }}
                >
                  <CheckCircle2 size={24} color="#FF5964" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{
                    fontWeight: '700',
                    fontSize: '1rem',
                    color: '#334155',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Daily Schedule Timeline */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '2rem'
          }}>
            <Clock size={24} color="#D97706" />
            <h4 style={{ fontSize: '1.6rem', color: '#0F172A', margin: 0 }}>
              Daily Schedule & Routine
            </h4>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.2rem'
          }}>
            {program.schedule.map((item, idx) => {
              const Icon = iconMap[item.icon] || Clock;
              return (
                <div
                  key={idx}
                  className="kid-card"
                  style={{
                    background: '#FFFFFF',
                    padding: '1.5rem',
                    borderRadius: '24px',
                    border: '2px solid #F1F5F9',
                    position: 'relative'
                  }}
                  onMouseEnter={() => playSound('pop', soundEnabled)}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.8rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#0284C7',
                      fontWeight: '800',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      <Clock size={16} />
                      <span>{item.time}</span>
                    </div>

                    <span style={{
                      background: '#FEF3C7',
                      color: '#B45309',
                      fontSize: '0.72rem',
                      fontWeight: '800',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)'
                    }}>
                      {item.tag}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#FFF1F2',
                      color: '#FF5964',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={20} />
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      color: '#1E293B'
                    }}>
                      {item.activity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
