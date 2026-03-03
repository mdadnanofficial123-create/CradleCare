import { PageShell } from '../../components/layout/PageShell';

export default function ContactPage() {
  return (
    <main>
      <PageShell title="Contact Us" subtitle="Reach CradleCare support and partnerships">
        <div className="card p-4">
          <p className="text-base text-muted">Email: support@cradlecaredemo.local • Social: @CradleCare</p>
        </div>
      </PageShell>
    </main>
  );
}
