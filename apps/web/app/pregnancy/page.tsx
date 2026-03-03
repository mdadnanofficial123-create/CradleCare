import { PageShell } from '../../components/layout/PageShell';

export default function PregnancyPage() {
  return (
    <main>
      <PageShell title="Pregnancy Support" subtitle="Week-by-week guidance and essentials for expecting parents">
        <div className="card p-4">
          <p className="text-base text-muted">Weekly pregnancy tips, hospital bag checklist, and recommended pregnancy essentials curated by clinicians.</p>
        </div>
      </PageShell>
    </main>
  );
}
