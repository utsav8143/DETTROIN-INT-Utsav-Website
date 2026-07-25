import useReveal from '../hooks/useReveal';
import newsItems from '../data/newsItems';

export default function NewsEvents() {
  const [headRef, headVisible] = useReveal();
  const [scrollRef, scrollVisible] = useReveal();

  return (
    <section className="news" id="news">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal${headVisible ? ' in' : ''}`}>
          <p className="eyebrow">News &amp; events</p>
          <h2>Recent from the campus.</h2>
          <p>A running record of competitions, festivals, and results — scroll sideways to browse.</p>
        </div>

        <div ref={scrollRef} className={`news-scroll reveal${scrollVisible ? ' in' : ''}`} role="list">
          {newsItems.map((item) => (
            <article className="news-card" role="listitem" key={item.title}>
              <p className="date">{item.date}</p>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
