import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      // Small delay for dramatic reveal
      setTimeout(() => el.classList.add('hero--visible'), 100);
    }
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="hero" ref={heroRef}>
      {/* Ambient background effects */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid-overlay"></div>
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <div className="hero__particle" key={i} style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}></div>
          ))}
        </div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge hero__anim hero__anim--1">
            <span className="hero__badge-dot"></span>
            Available for work
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line hero__anim hero__anim--2">Hi, I'm</span>
            <span className="hero__title-name hero__anim hero__anim--3">
              {'Sohaib Fettah'.split('').map((char, i) => (
                <span className="hero__title-char" key={i} style={{ animationDelay: `${0.6 + i * 0.04}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>

          <div className="hero__subtitle-wrap hero__anim hero__anim--4">
            <div className="hero__subtitle-line"></div>
            <p className="hero__subtitle">Full Stack Web Developer</p>
            <div className="hero__subtitle-line"></div>
          </div>

          <p className="hero__description hero__anim hero__anim--5">
            I craft modern, scalable web applications with clean code and pixel-perfect interfaces.
            Turning complex problems into elegant digital solutions.
          </p>

          <div className="hero__actions hero__anim hero__anim--6">
            <a href="#contact" className="hero__btn hero__btn--primary" onClick={(e) => handleClick(e, '#contact')} id="cta-work-together">
              <span className="hero__btn-bg"></span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Let's Work Together
            </a>
            <a href="#projects" className="hero__btn hero__btn--secondary" onClick={(e) => handleClick(e, '#projects')} id="cta-view-work">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hero__btn-arrow"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>

          <div className="hero__stats hero__anim hero__anim--7">
            <div className="hero__stat">
              <span className="hero__stat-number">4+</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">10+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">Full</span>
              <span className="hero__stat-label">Stack Developer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
