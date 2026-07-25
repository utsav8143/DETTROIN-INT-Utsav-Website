import { NAV_LINKS } from './Header';

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`drawer-scrim${isOpen ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`drawer${isOpen ? ' open' : ''}`}
        id="drawer"
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <button className="drawer-close" onClick={onClose} aria-label="Close menu">
          &times;
        </button>
        <div className="brand">
          <div className="brand-mark">VV</div>
          <div className="brand-text">
            <strong>Vasant Valley</strong>
            <span>New Delhi</span>
          </div>
        </div>
        <nav>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
