import { PageShell } from '../../../components/layout/PageShell';

const boxes = [
  {
    title: 'Starter Development Kit',
    cadence: 'Monthly',
    includes: ['Stage-based toys', 'Organic essentials', 'Doctor guidance card'],
  },
  {
    title: 'Milestone Boost Kit',
    cadence: 'Monthly',
    includes: ['Skill-focused play', 'Sensory tools', 'Parent checklist'],
  },
  {
    title: 'Premium Care Kit',
    cadence: 'Monthly',
    includes: ['Curated essentials', 'Add-on toys', 'Priority support'],
  },
];

export default function SubscriptionBoxPage() {
  return (
    <main>
      <PageShell
        title="Subscription Boxes"
        subtitle="Monthly delivery of developmental kits curated by stage—built for consistency and progress."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          {boxes.map((b) => (
            <div key={b.title} className="card" style={{ padding: 18 }}>
              <div className="pill" style={{ width: 'fit-content' }}>
                <span style={{ fontWeight: 850, color: 'var(--brand-ink)' }}>{b.cadence}</span>
              </div>
              <h2 style={{ margin: '10px 0 0', fontSize: 18 }}>{b.title}</h2>
              <ul style={{ margin: '10px 0 0', color: 'var(--muted)', paddingLeft: 18 }}>
                {b.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button className="btn btnPrimary" type="button">
                  Subscribe
                </button>
                <button className="btn" type="button">
                  See details
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageShell>
    </main>
  );
}

