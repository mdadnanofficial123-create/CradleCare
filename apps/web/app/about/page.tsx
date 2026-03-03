import { PageShell } from '../../components/layout/PageShell';

export default function AboutPage() {
  return (
    <main>
      <PageShell title="About CradleCare" subtitle="Doctor‑led parenting support from pregnancy to 5 years">
        <div className="card p-4">
          <p className="text-base text-muted">
            CradleCare is a doctor-led baby care platform helping parents through pregnancy and early childhood.
            We combine pediatric guidance, milestone tracking, development toys, and a curated essentials store to
            create a single parenting ecosystem.
          </p>
        </div>
      </PageShell>
    </main>
  );
}
