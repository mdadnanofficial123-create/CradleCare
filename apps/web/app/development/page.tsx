import { PageShell } from '../../components/layout/PageShell';

export default function DevelopmentIndex() {
  return (
    <main>
      <PageShell title="Baby Development" subtitle="Milestones and activities by age group">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          <a className="card p-4" href="/development/0-6-months">
            <div className="font-extrabold">0–6 months</div>
            <div className="text-muted mt-2">Early milestones, activities and recommended toys.</div>
          </a>
          <a className="card p-4" href="/development/6-12-months">
            <div className="font-extrabold">6–12 months</div>
            <div className="text-muted mt-2">Sitting, crawling, first words and sensory play.</div>
          </a>
          <a className="card p-4" href="/development/1-2-years">
            <div className="font-extrabold">1–2 years</div>
            <div className="text-muted mt-2">Walking, language and early problem solving.</div>
          </a>
          <a className="card p-4" href="/development/2-5-years">
            <div className="font-extrabold">2–5 years</div>
            <div className="text-muted mt-2">Imaginative play, motor skills and school readiness.</div>
          </a>
        </div>
      </PageShell>
    </main>
  );
}
import { PageShell } from '../../components/layout/PageShell';

export default function DevelopmentPage() {
  return (
    <main>
      <PageShell title="Baby Development" subtitle="Age‑based milestones, activities, and toy recommendations">
        <div className="card p-4">
          <p className="text-base text-muted">
            Explore milestones and activities by stage: 0–6 months, 6–12 months, 1–2 years, 2–5 years. Each stage includes
            recommended toys and learning activities.
          </p>
        </div>
      </PageShell>
    </main>
  );
}
