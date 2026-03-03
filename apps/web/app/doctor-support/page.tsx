import { PageShell } from '../../components/layout/PageShell';

export default function DoctorSupportPage() {
  return (
    <main>
      <PageShell title="Doctor Support" subtitle="Pediatrician advice, health guidance, and parenting tips">
        <div className="card p-4">
          <p className="text-base text-muted">Find pediatrician‑verified guidance on baby care, common illnesses, and parenting.</p>
          <p className="mt-2">Future: teleconsultation booking and expert Q&A.</p>
        </div>
      </PageShell>
    </main>
  );
}
