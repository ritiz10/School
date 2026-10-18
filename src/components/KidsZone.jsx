import React, { useState } from 'react';
import { 
  Sparkles, 
  Gamepad2, 
  Star, 
  Volume2, 
  Award, 
  RotateCcw,
  PartyPopper 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { funQuizCards } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function KidsZone({ soundEnabled }) {
  const [selectedCard, setSelectedCard] = useState(0);
  const [starsCollected, setStarsCollected] = useState(1);
  const [revealed, setRevealed] = useState({});

  const handleCardClick = (idx) => {
    playSound('chime', soundEnabled);
    setSelectedCard(idx);

    if (!revealed[idx]) {
      const nextRevealed = { ...revealed, [idx]: true };
      setRevealed(nextRevealed);
      const newStars = starsCollected + 1;
      setStarsCollected(newStars);

      if (newStars % 5 === 0) {
        playSound('celebrate', soundEnabled);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const current = funQuizCards[selectedCard];

  return (
    <section id="fun-zone" className="section-wrapper" style={{
      background: 'linear-gradient(135deg, #FFF1F2 0%, #FEF9C3 50%, #E0F2FE 100%)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="kid-pill-tag purple">
            <Gamepad2 size={16} />
            <span>Interactive Corner</span>
          </div>
          <h2 className="section-title">
            Kids' <span>Wonder & Phonics Zone</span>
          </h2>
          <p className="section-subtitle">
            Tap the colorful alphabet cards to hear phonics sounds, explore cute friends, and collect stars!
          </p>
        </div>

        {/* Stars Trophy Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-full)',
            padding: '0.6rem 1.6rem',
            boxShadow: 'var(--shadow-md)',
            border: '3px solid #FFD166',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700'
          }}>
            <Star size={24} fill="#FFB703" color="#FFB703" className="animate-wiggle" />
            <span style={{ fontSize: '1.2rem', color: '#0F172A' }}>
              Stars Collected: <strong style={{ color: '#FF5964' }}>{starsCollected}</strong>
            </span>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }} className="kids-zone-grid">
          
          {/* Alphabet Selection Grid */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.9rem'
            }}>
              {funQuizCards.map((card, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCardClick(idx)}
                  style={{
                    padding: '1.2rem 0.5rem',
                    borderRadius: '20px',
                    background: selectedCard === idx ? '#FF5964' : '#FFFFFF',
                    color: selectedCard === idx ? '#FFFFFF' : '#1E293B',
                    boxShadow: selectedCard === idx ? '0 12px 24px rgba(255, 89, 100, 0.4)' : 'var(--shadow-sm)',
                    border: selectedCard === idx ? '3px solid #FF5964' : '3px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-bounce)'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCard !== idx) e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCard !== idx) e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '1.8rem' }}>{card.emoji}</span>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: '800'
                  }}>
                    {card.letter}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Large Hero Card for Active Letter */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '32px',
            padding: '2.5rem',
            textAlign: 'center',
            boxShadow: '0 20px 45px rgba(255, 89, 100, 0.15)',
            border: '4px solid #FEF3C7',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '5.5rem',
              lineHeight: 1,
              marginBottom: '1rem',
              animation: 'floatGentle 3s ease-in-out infinite'
            }}>
              {current.emoji}
            </div>

            <div style={{
              display: 'inline-block',
              background: '#FFE3E5',
              color: '#FF5964',
              padding: '0.35rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '1.1rem',
              fontWeight: '800',
              fontFamily: 'var(--font-heading)',
              marginBottom: '0.8rem'
            }}>
              Letter '{current.letter}'
            </div>

            <h3 style={{
              fontSize: '2rem',
              color: '#0F172A',
              marginBottom: '0.6rem',
              fontFamily: 'var(--font-heading)'
            }}>
              {current.word}
            </h3>

            <p style={{
              fontSize: '1.1rem',
              color: '#475569',
              marginBottom: '1.5rem',
              fontStyle: 'italic'
            }}>
              "{current.hint}"
            </p>

            {/* Phonics Sound Button */}
            <button
              onClick={() => playSound('pop', soundEnabled)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: '#FEF3C7',
                color: '#B45309',
                padding: '0.75rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: '700',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Volume2 size={20} />
              <span>Phonics: <strong>{current.sound}</strong></span>
            </button>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .kids-zone-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
