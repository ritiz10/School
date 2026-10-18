import React, { useState } from 'react';
import { 
  Sparkles, 
  Play, 
  Video, 
  ExternalLink, 
  X,
  Volume2,
  Tv
} from 'lucide-react';

const YoutubeIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill={color} />
  </svg>
);
import { youtubeShowcases, schoolInfo } from '../data/schoolData';
import { playSound } from '../utils/audio';

export default function VideoSection({ soundEnabled }) {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const openVideoModal = (videoId) => {
    playSound('pop', soundEnabled);
    setActiveVideoId(videoId);
  };

  const closeVideoModal = () => {
    playSound('click', soundEnabled);
    setActiveVideoId(null);
  };

  return (
    <section id="videos" className="section-wrapper" style={{
      background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF1F2 50%, #FFFBEB 100%)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="kid-pill-tag pink">
            <YoutubeIcon size={16} />
            <span>School In Motion</span>
          </div>
          <h2 className="section-title">
            Watch Our <span>Stars in Action!</span>
          </h2>
          <p className="section-subtitle">
            Experience our annual day dance galas, traditional Silambam, sports day parades, and phonics rhymes!
          </p>
        </div>

        {/* Feature Local Video Player: Sports Parade */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '2rem',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '4rem',
          border: '4px solid #FFE4E6'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#FFE3E5',
                color: '#FF5964',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Tv size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#0F172A', margin: 0 }}>
                  Sports Day Parade & March-Past
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748B', margin: 0 }}>
                  Witness our students marching with discipline, pride, and patriotic fervor!
                </p>
              </div>
            </div>

            <span style={{
              background: '#FEF3C7',
              color: '#B45309',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: '800',
              fontFamily: 'var(--font-heading)'
            }}>
              🏆 Annual Sports Highlight
            </span>
          </div>

          {/* HTML5 Video */}
          <div style={{
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            background: '#0F172A'
          }}>
            <video 
              controls 
              style={{ width: '100%', maxHeight: '520px', display: 'block' }}
              poster="/paraid.jpg"
            >
              <source src="/paraid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* YouTube Showcases Grid */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.7rem', color: '#0F172A', margin: 0 }}>
                Featured YouTube Performances
              </h3>
              <p style={{ color: '#64748B', margin: '0.3rem 0 0 0' }}>
                Tap any performance to watch or open on YouTube!
              </p>
            </div>

            <a
              href={schoolInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="kid-btn kid-btn-primary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.95rem' }}
            >
              <YoutubeIcon size={20} />
              <span>Visit Official Channel</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.8rem'
          }}>
            {youtubeShowcases.map((video, idx) => (
              <div
                key={idx}
                className="kid-card"
                style={{
                  padding: 0,
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  overflow: 'hidden',
                  border: '2px solid #F1F5F9',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                  cursor: 'pointer'
                }}
                onClick={() => openVideoModal(video.videoId)}
              >
                {/* Thumbnail Container */}
                <div style={{
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />

                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: '#FF0000',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(255, 0, 0, 0.5)',
                      transform: 'scale(1)',
                      transition: 'var(--transition-bounce)'
                    }}>
                      <Play size={24} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {video.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.4rem' }}>
                  <h4 style={{
                    fontSize: '1.15rem',
                    color: '#0F172A',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {video.title}
                  </h4>
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#64748B',
                    lineHeight: 1.5,
                    marginBottom: '1rem'
                  }}>
                    {video.desc}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#FF0000',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    <Play size={14} fill="#FF0000" />
                    <span>Watch Performance</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Video Modal */}
        {activeVideoId && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.94)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <button
              onClick={closeVideoModal}
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
                cursor: 'pointer'
              }}
            >
              <X size={26} />
            </button>

            <div style={{
              maxWidth: '850px',
              width: '100%',
              background: '#000000',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
            }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
