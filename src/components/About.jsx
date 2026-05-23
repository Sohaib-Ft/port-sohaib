import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            About Me
          </span>
          <h2 className="section-title">Get To Know Me</h2>
          <p className="section-subtitle">A brief introduction to who I am and what I do.</p>
        </div>

        <div className="about__grid">
          <div className="about__card about__card--main animate-in">
            <div className="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>
            </div>
            <h3 className="about__card-title">Who I Am</h3>
            <p className="about__card-text">
              I'm <strong>Sohaib Fettah</strong>, a passionate Full Stack Web Developer based in Casablanca.
              I specialize in building modern, responsive, and high-performance web applications
              using cutting-edge technologies. I love turning ideas into clean, functional, and
              beautiful digital products.
            </p>
            <p className="about__card-text">
              With a strong foundation in both frontend and backend development, I bring a
              holistic approach to every project — from intuitive user interfaces to robust
              server-side architecture.
            </p>
          </div>

          <div className="about__info-cards">
            <div className="about__info-card animate-in delay-1">
              <div className="about__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Casablanca, Morocco</span>
              </div>
            </div>

            <div className="about__info-card animate-in delay-2">
              <div className="about__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <span className="about__info-label">Email</span>
                <span className="about__info-value">sohaibfettah01@gmail.com</span>
              </div>
            </div>

            <div className="about__info-card animate-in delay-3">
              <div className="about__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <span className="about__info-label">Focus</span>
                <span className="about__info-value">Full Stack Development</span>
              </div>
            </div>

            <div className="about__info-card animate-in delay-4">
              <div className="about__info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <span className="about__info-label">Availability</span>
                <span className="about__info-value about__info-value--green">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
