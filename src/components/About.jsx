import useReveal from '../hooks/useReveal';

export default function About() {
  const [textRef, textVisible] = useReveal();
  const [artRef, artVisible] = useReveal();

  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div ref={textRef} className={`reveal${textVisible ? ' in' : ''}`}>
          <p className="eyebrow">About the school</p>
          <h2 style={{ marginTop: '16px', fontSize: 'clamp(1.8rem,2.8vw,2.3rem)' }}>
            A self-financing, inclusive day school founded on individual attention.
          </h2>
          <p style={{ color: 'var(--text-soft)', marginTop: '18px' }}>
            Founded in 1990 by Aroon Purie and Rekha Purie under the Education
            Today Trust, Vasant Valley began with roughly 200 students and
            sixteen teachers. Today the same red-sandstone campus — two wings
            joined by an open amphitheatre — still runs on a process-focused
            framework rather than a purely results-focused one.
          </p>
          <div className="about-facts">
            <div className="about-fact"><div className="num">200</div><div className="lbl">Students at founding, 1990</div></div>
            <div className="about-fact"><div className="num">2</div><div className="lbl">Wings joined by an amphitheatre</div></div>
          </div>
        </div>

        <div ref={artRef} className={`reveal${artVisible ? ' in' : ''}`}>
          <div className="quote-block">
            &ldquo;Individualised attention for each student, a process-focused
            learning framework, equity of all stakeholders, and commitment to
            society.&rdquo;
            <cite>The school&apos;s founding philosophy</cite>
          </div>

          <div className="campus-art" style={{ marginTop: '34px' }}>
            <svg
              className="campus-svg"
              viewBox="0 0 480 220"
              role="img"
              aria-label="Line illustration of the school's two wings joined by an open amphitheatre"
            >
              <rect x="20" y="120" width="140" height="70" fill="none" stroke="#3B5945" strokeWidth="1.4" />
              <rect x="320" y="120" width="140" height="70" fill="none" stroke="#3B5945" strokeWidth="1.4" />
              <path d="M160 190 Q240 130 320 190" fill="none" stroke="#A5732E" strokeWidth="1.4" />
              <line x1="20" y1="120" x2="90" y2="70" stroke="#3B5945" strokeWidth="1.4" fill="none" />
              <line x1="160" y1="120" x2="90" y2="70" stroke="#3B5945" strokeWidth="1.4" fill="none" />
              <line x1="320" y1="120" x2="390" y2="70" stroke="#3B5945" strokeWidth="1.4" fill="none" />
              <line x1="460" y1="120" x2="390" y2="70" stroke="#3B5945" strokeWidth="1.4" fill="none" />
              <circle cx="240" cy="165" r="3" fill="#A5732E" />
              <text x="240" y="210" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#55584F">
                the amphitheatre, between two wings
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
