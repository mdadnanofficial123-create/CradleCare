import { PageShell } from '../../components/layout/PageShell';

export default function StorePage() {
  return (
    <main>
      <PageShell title="Baby Essentials Store" subtitle="Curated essentials recommended by pediatricians">
        <div className="card p-4">
          <p className="text-base text-muted">Categories: feeding, clothing, hygiene, safety, and toys. Pediatrician‑recommended only.</p>
        </div>
      </PageShell>
    </main>
  );
}
