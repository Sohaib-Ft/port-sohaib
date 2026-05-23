import './Capabilities.css';

const capabilities = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    title: 'Full Stack Development',
    description: 'End-to-end web application development from responsive frontends to robust backend APIs and databases.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: 'Clean Code',
    description: 'Writing maintainable, well-structured, and documented code following industry best practices and design patterns.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    ),
    title: 'API Integration',
    description: 'Designing and consuming RESTful APIs with proper authentication, error handling, and data validation.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
    ),
    title: 'UI/UX Design',
    description: 'Creating intuitive, accessible, and visually stunning user interfaces with attention to every detail.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
    ),
    title: 'Problem Solving',
    description: 'Analytical approach to debugging, optimization, and architecting solutions for complex technical challenges.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: 'Responsive Design',
    description: 'Building websites that look and perform flawlessly across all devices, from mobile phones to large desktops.',
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities section" id="capabilities">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Core Capabilities
          </span>
          <h2 className="section-title">What I Bring To The Table</h2>
          <p className="section-subtitle">Key skills and expertise that I leverage to deliver exceptional results.</p>
        </div>

        <div className="capabilities__grid">
          {capabilities.map((cap, i) => (
            <div className={`capabilities__card animate-in delay-${(i % 3) + 1}`} key={cap.title}>
              <div className="capabilities__card-icon">{cap.icon}</div>
              <h3 className="capabilities__card-title">{cap.title}</h3>
              <p className="capabilities__card-desc">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
