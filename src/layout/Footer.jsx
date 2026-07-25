export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand">
              <div className="brand-mark">VV</div>
              <div className="brand-text">
                <strong style={{ color: 'var(--paper-3)' }}>Vasant Valley</strong>
                <span>School</span>
              </div>
            </div>
            <p>
              Sector C, Vasant Kunj, New Delhi 110070. A self-financing,
              inclusive CBSE day school on an eight-acre campus.
            </p>
          </div>

          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="#about">Vision &amp; philosophy</a></li>
              <li><a href="#learning">Learning experience</a></li>
              <li><a href="#programmes">International curriculum</a></li>
              <li><a href="#programmes">Special education needs</a></li>
            </ul>
          </div>

          <div>
            <h5>School</h5>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#news">News &amp; events</a></li>
              <li><a href="#contact">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+911141767940">+91 11 4176 7940</a></li>
              <li><a href="mailto:info@vasantvalley.edu.in">info@vasantvalley.edu.in</a></li>
              <li><a href="#contact">Sector C, Vasant Kunj</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <p>&copy; 2026 Vasant Valley School. Concept redesign for evaluation purposes only.</p>
          <div className="social-row">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">in</a>
            <a href="#" aria-label="LinkedIn">Ln</a>
            <a href="#" aria-label="YouTube">Yt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
