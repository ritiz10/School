import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Heart, 
  Award, 
  BookOpen, 
  Smile, 
  Star 
} from 'lucide-react';
import { facultyList } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function FacultySection({ soundEnabled }) {
  return (
    <section id="faculty" className="section-wrapper" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="kid-pill-tag pink">
            <Heart size={16} />
            <span>Dedicated Mentors</span>
          </div>
          <h2 className="section-title">
            Meet Our <span>Leadership & Teachers</span>
          </h2>
          <p className="section-subtitle">
            Caring, qualified, and enthusiastic educators who treat every student like family and nurture their unique talents.
          </p>
        </div>

        {/* Leadership & Faculty Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {facultyList.map((teacher, index) => {
            const isLeadership = index < 4;
            return (
              <div
                key={index}
                className="kid-card"
                style={{
                  background: isLeadership ? '#FFFBEB' : '#FFFFFF',
                  borderRadius: '28px',
                  border: isLeadership ? '3px solid #FEF3C7' : '2px solid #F1F5F9',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative'
                }}
                onMouseEnter={() => playSound('pop', soundEnabled)}
              >
                {/* Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: teacher.color,
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.04em'
                }}>
                  {teacher.role}
                </div>

                {/* Avatar / Photo with Playful Ring */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  margin: '0 auto 1.2rem auto',
                  padding: '4px',
                  background: `linear-gradient(135deg, ${teacher.color}, #FFD166)`,
                  boxShadow: `0 8px 20px ${teacher.color}35`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {teacher.avatar.startsWith('http') ? (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: '#FFE3E5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: teacher.color
                      }}>
                        <GraduationCap size={44} />
                      </div>
                    ) : (
                      <img 
                        src={teacher.avatar} 
                        alt={teacher.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Teacher Name */}
                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#0F172A',
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {teacher.name}
                </h3>

                {/* Qualification & Experience */}
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: '#0284C7',
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {teacher.qualification}
                </div>

                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#D97706',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.3rem'
                }}>
                  <Star size={14} fill="#D97706" />
                  <span>{teacher.experience}</span>
                </div>

                {/* Brief Philosophy */}
                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748B',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {teacher.bio}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
