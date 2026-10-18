import React from 'react';
import { 
  Sparkles, 
  Smile, 
  GraduationCap, 
  Bus, 
  BookOpen, 
  Heart, 
  ShieldCheck, 
  Trophy 
} from 'lucide-react';
import { stats } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function QuickHighlights({ soundEnabled }) {
  const iconMap = {
    Sparkles: Sparkles,
    Smile: Smile,
    GraduationCap: GraduationCap,
    Bus: Bus,
    BookOpen: BookOpen,
    Heart: Heart
  };

  return (
    <section style={{ padding: '2rem 0 3.5rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.2rem'
        }}>
          {stats.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="kid-card"
                style={{
                  padding: '1.5rem 1.2rem',
                  textAlign: 'center',
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  borderTop: `5px solid ${item.color}`,
                  cursor: 'pointer'
                }}
                onMouseEnter={() => playSound('pop', soundEnabled)}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: `${item.color}20`,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <Icon size={26} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#0F172A',
                  lineHeight: 1
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: '#64748B',
                  marginTop: '0.4rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
