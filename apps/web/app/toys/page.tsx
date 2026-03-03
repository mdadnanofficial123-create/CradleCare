import { PageShell } from '../../components/layout/PageShell';

export default function ToysPage() {
  return (
    <main>
      <PageShell title="Development Toys" subtitle="Toys categorized by developmental stage">
        <div className="card p-4">
          <p className="text-base text-muted">Montessori toys, sensory kits, and age‑based play kits curated for development.</p>
        </div>
      </PageShell>
    </main>
  );
}
