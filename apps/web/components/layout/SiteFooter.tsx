export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.6)' }}>
      <div className="container" style={{ paddingTop: 18, paddingBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ color: 'var(--muted)', fontSize: 13 }}>
            <div style={{ fontWeight: 700, color: 'var(--text)' }}>CradleCare</div>
            <div>Doctor-led support system for parents (Pregnancy → 5 Years).</div>
          </div>
          <div style={{ color: 'var(--muted)', fontSize: 12, maxWidth: 520 }}>
            Medical disclaimer: Content is educational and not a substitute for professional medical advice. For urgent
            concerns, consult a licensed clinician.
          </div>
        </div>
      </div>
    </footer>
  );
}

