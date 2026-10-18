import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Play, 
  ArrowRight, 
  Bus, 
  Heart, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function HeroBanner({ soundEnabled, onOpenAdmission }) {
  const heroSlides = [
    {
      img: '/school1.jpg',
      title: 'Our Beautiful Green Campus',
      tag: 'Spacious & Welcoming'
    },
    {
      img: '/students.jpg',
      title: 'Curious Minds in Class',
      tag: 'Interactive Learning'
    },
    {
      img: '/prayer.jpg',
      title: 'Morning Prayer & Assembly',
      tag: 'Moral Discipline'
    },
    {
      img: '/childrens.jpg',
      title: 'Joyful Play & Creativity',
      tag: 'Arts & Crafts'
    },
    {
      img: '/admission.jpg',
      title: 'Welcome to Kindergarten!',
      tag: 'Caring Teachers'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrev = () => {
    playSound('pop', soundEnabled);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    playSound('pop', soundEnabled);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section id="home" style={{
      background: 'linear-gradient(180deg, #FFF1F2 0%, #FEF9C3 40%, #E0F2FE 80%, #FFFFFF 100%)',
      padding: '3rem 0 5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Floating Clouds and Rainbow Bubbles */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '5%',
        fontSize: '3rem',
        opacity: 0.35,
        userSelect: 'none'
      }} className="animate-float">
        ☁️
      </div>
      <div style={{
        position: 'absolute',
        top: '80px',
        right: '8%',
        fontSize: '3.5rem',
        opacity: 0.4,
        userSelect: 'none',
        animationDelay: '1.5s'
      }} className="animate-float">
        🌈
      </div>
      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '3%',
        fontSize: '2.5rem',
        opacity: 0.3,
        userSelect: 'none',
        animationDelay: '2.5s'
      }} className="animate-float">
        🎈
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Welcoming Headlines & CTAs */}
          <div>
            {/* Playful Tag */}
            <div className="kid-pill-tag pink" style={{ marginBottom: '1.2rem' }}>
              <Sparkles size={16} />
              <span>Welcoming Children Aged 2 to 11 Years</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.3rem, 5vw, 3.6rem)',
              color: '#0F172A',
              marginBottom: '1.2rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.15
            }}>
              Where Young Minds <br />
              <span style={{
                background: 'linear-gradient(135deg, #FF5964 0%, #FFB703 50%, #38BDF8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Grow, Explore & Shine!
              </span>
            </h1>

            {/* School Introduction Text */}
            <p style={{
              fontSize: '1.18rem',
              color: '#475569',
              marginBottom: '2rem',
              maxWidth: '580px',
              lineHeight: 1.7
            }}>
              Welcome to <strong>VETRI VIVEKANANDA Nursery and Primary School</strong> in T.Mariyur. 
              With over <strong>33+ years of excellence</strong>, we provide a joyful foundation through play-based nursery, 
              phonics, mental mathematics, Silambam martial arts, and loving teachers.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              <button 
                onClick={() => {
                  playSound('celebrate', soundEnabled);
                  onOpenAdmission();
                }}
                className="kid-btn kid-btn-primary"
              >
                <GraduationCap size={22} />
                <span>Admissions 2026-27</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="#videos" 
                onClick={() => playSound('pop', soundEnabled)}
                className="kid-btn kid-btn-yellow"
              >
                <Play size={18} fill="#78350F" />
                <span>Watch School Videos</span>
              </a>

              <a 
                href="#vans" 
                onClick={() => playSound('pop', soundEnabled)}
                className="kid-btn kid-btn-outline"
              >
                <Bus size={18} color="#0284C7" />
                <span>Van Routes</span>
              </a>
            </div>

            {/* Highlights Bar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '2px dashed rgba(203, 213, 225, 0.7)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#FFE3E5',
                  color: '#FF5964',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '0.95rem' }}>33+ Years</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Trusted Legacy</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#FEF3C7',
                  color: '#D97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '0.95rem' }}>5+ School Vans</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Safe Doorstep Pick</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#E0F2FE',
                  color: '#0284C7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Heart size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '0.95rem' }}>Child-Centric</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B' }}>Loving & Safe Care</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Mascot + School Visual Carousel */}
          <div style={{ position: 'relative' }}>
            {/* Mascot Badge Hovering */}
            <div style={{
              position: 'absolute',
              top: '-35px',
              right: '-15px',
              zIndex: 30,
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              background: '#FFFFFF',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
              border: '4px solid #FFB703',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="animate-bounce-slow"
            onClick={() => playSound('chime', soundEnabled)}
            title="Hi! I am Vetri, the school mascot! Click me!"
            >
              <img 
                src={schoolInfo.mascot} 
                alt="Vetri School Mascot" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Hero Image Showcase Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '32px',
              padding: '1rem',
              boxShadow: '0 20px 45px rgba(255, 89, 100, 0.15)',
              border: '4px solid #FFFFFF',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Image with smooth slide transition */}
              <div style={{
                width: '100%',
                height: '380px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={heroSlides[currentSlide].img} 
                  alt={heroSlides[currentSlide].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.6s ease-in-out'
                  }}
                />

                {/* Gradient Overlay for Caption */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.5rem',
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 100%)',
                  color: '#FFFFFF'
                }}>
                  <span style={{
                    background: '#FFB703',
                    color: '#78350F',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                    marginBottom: '0.4rem'
                  }}>
                    {heroSlides[currentSlide].tag}
                  </span>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', margin: 0 }}>
                    {heroSlides[currentSlide].title}
                  </h3>
                </div>

                {/* Carousel Controls */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '12px',
                    transform: 'translateY(-50%)',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.85)',
                    color: '#FF5964',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    zIndex: 20
                  }}
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '12px',
                    transform: 'translateY(-50%)',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.85)',
                    color: '#FF5964',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    zIndex: 20
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Dots Indicator */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1rem'
              }}>
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playSound('click', soundEnabled);
                      setCurrentSlide(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: currentSlide === idx ? '28px' : '10px',
                      height: '10px',
                      borderRadius: 'var(--radius-full)',
                      background: currentSlide === idx ? '#FF5964' : '#E2E8F0',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      padding: 0
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Speech Bubble */}
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              left: '20px',
              background: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '0.65rem 1.2rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '2px solid #FFD166',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              zIndex: 25
            }}>
              <span style={{ fontSize: '1.4rem' }}>🌟</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '0.9rem', color: '#1E293B' }}>
                Join our cheerful family!
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Hero Bottom Wavy Curve */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        lineHeight: 0
      }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#F8FAFC"></path>
        </svg>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
