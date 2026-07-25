import useReveal from '../hooks/useReveal';

export default function Hero() {
  const [factsRef, factsVisible] = useReveal();

  return (
    <section className="hero">
      <svg className="hero-lines" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points="0,420 140,420 160,340 260,340 280,260 520,260 540,180 680,180 700,420 900,420 920,300 1060,300 1080,420 1200,420"
          fill="none"
          stroke="#C99A4E"
          strokeWidth="1"
          opacity="0.35"
        />
        <line x1="0" y1="460" x2="1200" y2="460" stroke="#F2EEDF" strokeWidth="0.6" opacity="0.18" />
      </svg>

      <div className="hero-inner">
        <div>
          <p className="eyebrow">Vasant Kunj, New Delhi · CBSE Day School</p>
          <h1>
            Excellence <em>in deed,</em>
            <br />
            not only in word.
          </h1>
          <p className="lede">
            An eight-acre campus where cerebral rigour meets ethical grounding —
            a place built, since 1990, on the belief that education is
            preparation for life, not just for examinations.
          </p>
          <div className="hero-ctas">
            <a href="#admissions" className="cta-btn">Begin the admissions process</a>
            <a href="#about" className="cta-btn outline">Explore the school</a>
          </div>
        </div>

        <div ref={factsRef} className={`hero-facts reveal${factsVisible ? ' in' : ''}`}>
          <div className="hero-fact"><div className="num">1990</div><div className="lbl">Founding year</div></div>
          <div className="hero-fact"><div className="num">8 acres</div><div className="lbl">Vasant Kunj campus</div></div>
          <div className="hero-fact"><div className="num">8</div><div className="lbl">Dimensions of learning</div></div>
          <div className="hero-fact"><div className="num">36+ yrs</div><div className="lbl">Of continuous practice</div></div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <div className="line"></div>
      </div>
    </section>
  );
}
