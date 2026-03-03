import { PageShell } from '../../../components/layout/PageShell';

type PageProps = {
  params: Promise<{ age: string }>;
};

export default async function AgePage({ params }: PageProps) {
  const { age } = await params;

  const titleMap: Record<string, string> = {
    '0-6-months': '0–6 months',
    '6-12-months': '6–12 months',
    '1-2-years': '1–2 years',
    '2-5-years': '2–5 years',
  };

  const title = titleMap[age] ?? age;

  return (
    <main>
      <PageShell
        title={`${title} — Development`}
        subtitle={`Milestones, activities and recommended toys for ${title}`}
      >
        <div className="card p-4">
          <h3 className="font-extrabold">Key milestones</h3>
          <ul className="mt-2 text-muted">
            <li>Milestone A for {title}</li>
            <li>Milestone B for {title}</li>
            <li>Milestone C for {title}</li>
          </ul>

          <h3 className="font-extrabold mt-4">Activities</h3>
          <div className="text-muted mt-2">
            Simple, daily activities parents can do to support development.
          </div>

          <h3 className="font-extrabold mt-4">Recommended toys</h3>
          <div
            className="mt-2 grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 12,
            }}
          >
            <div className="card p-3">Toy suggestion 1</div>
            <div className="card p-3">Toy suggestion 2</div>
            <div className="card p-3">Toy suggestion 3</div>
          </div>
        </div>
      </PageShell>
    </main>
  );
}