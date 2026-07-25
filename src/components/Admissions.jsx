import useReveal from '../hooks/useReveal';

export default function AdmissionsCTA() {
  const [ref, visible] = useReveal();

  return (
    <section className="admit-band" id="admissions">
      <div ref={ref} className={`wrap reveal${visible ? ' in' : ''}`}>
        <p className="eyebrow" style={{ color: 'rgba(23,36,29,0.6)', justifyContent: 'center' }}>
          Admissions
        </p>
        <h2 style={{ marginTop: '16px' }}>Ready to see the campus for yourself?</h2>
        <p>
          Applications are reviewed on a rolling basis by grade. Book a campus
          walkthrough or start the enquiry form — either way, the admissions
          office replies within two working days.
        </p>
        <div className="admit-ctas">
          <a href="#contact" className="cta-btn">Start an enquiry</a>
          <a href="#contact" className="cta-btn outline">Book a campus visit</a>
        </div>
      </div>
    </section>
  );
}
