import useReveal from '../hooks/useReveal';
import programmes from '../data/programmes';

export default function Programmes() {
  const [headRef, headVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  return (
    <section className="programmes" id="programmes">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' in' : ''}`}>
          <p className="eyebrow">Programmes &amp; curriculum</p>
          <h2>Structured beyond the timetable.</h2>
          <p>
            Academic life runs alongside a deliberate set of intra-school,
            inter-school, and international tracks, plus dedicated support for
            special education needs.
          </p>
        </div>

        <div ref={gridRef} className={`prog-grid reveal${gridVisible ? ' in' : ''}`}>
          {programmes.map((prog) => (
            <div className="prog-card" key={prog.title}>
              <div>
                <span className="idx">{prog.idx}</span>
                <h3>{prog.title}</h3>
                <p>{prog.body}</p>
              </div>
              <div className="go">
                Read more <span className="arrow">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
