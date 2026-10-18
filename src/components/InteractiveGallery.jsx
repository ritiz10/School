import React, { useState } from 'react';
import { 
  Sparkles, 
  Image as ImageIcon, 
  Play, 
  ExternalLink, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Filter 
} from 'lucide-react';
import { galleryItems } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function InteractiveGallery({ soundEnabled }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos (47+)' },
    { id: 'life', label: '🏫 Campus & Classrooms' },
    { id: 'vans', label: '🚌 Van Transport' },
    { id: 'events', label: '🎉 Events & Annual Day' },
    { id: 'tours', label: '🎒 Educational Tours' },
    { id: 'extracurricular', label: '🥋 Silambam & Sports' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    playSound('pop', soundEnabled);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    playSound('click', soundEnabled);
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    playSound('pop', soundEnabled);
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevLightbox = () => {
    playSound('pop', soundEnabled);
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="life" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 50%, #FFFFFF 100%)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="kid-pill-tag sky">
            <ImageIcon size={16} />
            <span>Vibrant Memories</span>
          </div>
          <h2 className="section-title">
            School Life & <span>Photo Gallery</span>
          </h2>
          <p className="section-subtitle">
            Take a joyful peek into our classrooms, annual day galas, cultural festivals, van fleet, and sports championships!
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playSound('click', soundEnabled);
                setActiveCategory(cat.id);
              }}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'var(--transition-bounce)',
                background: activeCategory === cat.id ? '#FF5964' : '#FFFFFF',
                color: activeCategory === cat.id ? '#FFFFFF' : '#475569',
                boxShadow: activeCategory === cat.id ? '0 8px 18px rgba(255, 89, 100, 0.35)' : 'var(--shadow-sm)',
                border: activeCategory === cat.id ? '2px solid #FF5964' : '2px solid #E2E8F0'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="kid-card"
              style={{
                padding: 0,
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#FFFFFF',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                border: '3px solid #F8FAFC',
                cursor: 'pointer'
              }}
              onClick={() => openLightbox(index)}
            >
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden'
              }}>
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />

                {/* Tag Badge */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {item.tag}
                </span>

                {/* Video Indicator if videoUrl exists */}
                {item.videoUrl && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: '#FF0000',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(255, 0, 0, 0.4)'
                  }}
                  title="Has YouTube Video"
                  >
                    <Play size={16} fill="#FFFFFF" />
                  </div>
                )}

                {/* Hover Zoom Icon */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(255, 89, 100, 0.25)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    color: '#FF5964',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
                  }}>
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>

              {/* Title Card Bottom */}
              <div style={{ padding: '1rem 1.2rem' }}>
                <h4 style={{
                  fontSize: '1.05rem',
                  color: '#1E293B',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease-out'
          }}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 100
              }}
            >
              <X size={26} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevLightbox}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#FFFFFF',
                color: '#FF5964',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                zIndex: 100
              }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Lightbox Content */}
            <div style={{
              maxWidth: '900px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
            }}>
              <div style={{ maxHeight: '70vh', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  style={{
                    maxHeight: '70vh',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <div style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                background: '#FFFFFF'
              }}>
                <div>
                  <span style={{
                    background: '#FFE3E5',
                    color: '#FF5964',
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {filteredItems[lightboxIndex].tag}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginTop: '0.4rem', margin: 0 }}>
                    {filteredItems[lightboxIndex].title}
                  </h3>
                </div>

                {filteredItems[lightboxIndex].videoUrl && (
                  <a
                    href={filteredItems[lightboxIndex].videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kid-btn kid-btn-primary"
                    style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}
                  >
                    <Play size={16} fill="#FFFFFF" />
                    <span>Watch Video on YouTube</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextLightbox}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#FFFFFF',
                color: '#FF5964',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                zIndex: 100
              }}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
