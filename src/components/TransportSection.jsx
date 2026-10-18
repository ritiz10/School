import React from 'react';
import { 
  Bus, 
  ShieldCheck, 
  UserCheck, 
  HeartHandshake, 
  MapPin, 
  PhoneCall,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { transportDetails, schoolInfo } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function TransportSection({ soundEnabled, onOpenAdmission }) {
  const iconMap = {
    UserCheck: UserCheck,
    HeartHandshake: HeartHandshake,
    MapPin: MapPin,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="vans" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="kid-pill-tag mint">
            <Bus size={16} />
            <span>Safe Daily Commute</span>
          </div>
          <h2 className="section-title">
            Our Caring <span>School Van Fleet</span>
          </h2>
          <p className="section-subtitle">
            Reliable, safe, and comfortable doorstep transportation covering T.Mariyur and surrounding villages.
          </p>
        </div>

        {/* 4 Safety Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {transportDetails.highlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="kid-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  border: '2px solid #D1FAE5',
                  padding: '1.8rem 1.4rem'
                }}
                onMouseEnter={() => playSound('pop', soundEnabled)}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  background: '#D1FAE5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Icon size={26} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Van Fleet Photo Grid */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '1.6rem',
            color: '#0F172A',
            textAlign: 'center',
            marginBottom: '1.8rem'
          }}>
            🚌 Meet Our Dedicated Vans
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}>
            {transportDetails.vans.map((van, i) => (
              <div
                key={i}
                className="kid-card"
                style={{
                  padding: 0,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#FFFFFF',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  border: '3px solid #FEF3C7'
                }}
              >
                <div style={{ height: '190px', overflow: 'hidden' }}>
                  <img
                    src={van.img}
                    alt={van.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />
                </div>
                <div style={{ padding: '1rem 1.2rem' }}>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: '800',
                    color: '#D97706',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem'
                  }}>
                    Route #{i + 1}
                  </div>
                  <h4 style={{ fontSize: '1rem', color: '#0F172A', margin: 0 }}>
                    {van.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transport Help Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          borderRadius: '28px',
          padding: '2rem 2.5rem',
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: '0 16px 36px rgba(16, 185, 129, 0.3)'
        }}>
          <div>
            <span style={{
              background: 'rgba(255, 255, 255, 0.25)',
              padding: '0.25rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontWeight: '800',
              fontFamily: 'var(--font-heading)'
            }}>
              Want to check van coverage for your street?
            </span>
            <h3 style={{ fontSize: '1.7rem', color: '#FFFFFF', marginTop: '0.5rem', marginBottom: '0.3rem' }}>
              We Pick Up & Drop Off At Your Nearest Landmark
            </h3>
            <p style={{ opacity: 0.9, margin: 0, fontSize: '1rem' }}>
              Call our transport coordinator at <strong>{schoolInfo.phoneNumbers[0]}</strong> to confirm bus stop details.
            </p>
          </div>

          <button
            onClick={() => {
              playSound('celebrate', soundEnabled);
              onOpenAdmission();
            }}
            className="kid-btn kid-btn-yellow"
          >
            <Bus size={20} />
            <span>Check Van Availability</span>
          </button>
        </div>

      </div>
    </section>
  );
}
