import useReveal from '../hooks/useReveal';

export default function DayInSchool() {
  const [textRef, textVisible] = useReveal();
  const [artRef, artVisible] = useReveal();

  return (
    <section className="day-band">
      <div className="wrap day-grid">
        <div ref={textRef} className={`reveal${textVisible ? ' in' : ''}`}>
          <p className="eyebrow">A day in school</p>
          <h2>The entire campus is the classroom.</h2>
          <p>
            Academic and non-academic learning experiences are planned
            together, with the day paced around the developmental needs of
            each age group rather than a single fixed bell schedule.
          </p>
          <ul className="day-list">
            <li><span className="t">Morning</span> Core academic blocks, taught with a process-focused framework</li>
            <li><span className="t">Midday</span> House activities, clubs, and cross-grade collaboration</li>
            <li><span className="t">Afternoon</span> Sport, the arts, and open amphitheatre programming</li>
          </ul>
        </div>

        <div ref={artRef} className={`day-art reveal${artVisible ? ' in' : ''}`}>
          <svg
            viewBox="0 0 460 300"
            role="img"
            aria-label="Illustration representing a day's rhythm across the campus"
            style={{ width: '100%', height: 'auto' }}
          >
            <circle cx="230" cy="150" r="110" fill="none" stroke="#C99A4E" strokeWidth="1" opacity="0.5" />
            <circle cx="230" cy="150" r="70" fill="none" stroke="#F2EEDF" strokeWidth="0.7" opacity="0.35" />
            <line x1="230" y1="40" x2="230" y2="260" stroke="#F2EEDF" strokeWidth="0.6" opacity="0.25" />
            <line x1="120" y1="150" x2="340" y2="150" stroke="#F2EEDF" strokeWidth="0.6" opacity="0.25" />
            <circle cx="230" cy="40" r="4" fill="#C99A4E" />
            <circle cx="340" cy="150" r="4" fill="#C99A4E" />
            <circle cx="230" cy="260" r="4" fill="#C99A4E" />
            <text x="230" y="25" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#F2EEDF" opacity="0.7">morning</text>
            <text x="365" y="154" textAnchor="start" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#F2EEDF" opacity="0.7">midday</text>
            <text x="230" y="282" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#F2EEDF" opacity="0.7">afternoon</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
