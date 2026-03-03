const badges = [
  { title: 'Pediatrician‑Approved', desc: 'Reviewed by MBBS Doctor' },
  { title: 'Toxin‑Free', desc: 'Non‑toxic materials focus' },
  { title: 'BIS‑Certified', desc: 'White‑label compliance' },
  { title: 'Doctor‑Verified Catalog', desc: 'Curated essentials & toys' },
];

export function TrustBadges() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {badges.map((b) => (
        <div key={b.title} className="pill" style={{ gap: 10 }}>
          <span
            aria-hidden
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: 'linear-gradient(180deg, var(--brand), #8bc3ff)',
              boxShadow: '0 0 0 3px rgba(42, 127, 219, 0.12)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontSize: 12, fontWeight: 750, color: 'var(--brand-ink)' }}>{b.title}</span>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>{b.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

