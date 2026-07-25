import useScrolled from '../hooks/useScrolled';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#learning', label: 'Learning experience' },
  { href: '#programmes', label: 'Programmes' },
  { href: '#news', label: 'News & events' },
  { href: '#contact', label: 'Contact' }
];

export default function Header({ onMenuOpen }) {
  const scrolled = useScrolled(12);

  return (
    <header className={`site${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#main" className="brand" aria-label="Vasant Valley School home">
          <div className="brand-mark" aria-hidden="true">VV</div>
          <div className="brand-text">
            <strong>Vasant Valley</strong>
            <span>School · Est. 1990</span>
          </div>
        </a>

        <nav className="primary" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="#admissions" className="cta-btn">Enquire now</a>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="drawer"
            onClick={onMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export { NAV_LINKS };
