import { PageShell } from '../../components/layout/PageShell';

type Article = {
  id: string;
  title: string;
  excerpt?: string;
};

async function getArticles(): Promise<Article[]> {
  const base =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

  try {
    const res = await fetch(`${base}/articles`, {
      cache: 'no-store',
    });

    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function ResourcesPage() {
  const articles = await getArticles();

  return (
    <main>
      <PageShell
        title="Parenting Resources"
        subtitle="Articles, guides and tips for parents"
      >
        <div
          className="grid"
          style={{
            gridTemplateColumns:
              'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 12,
          }}
        >
          {articles.length === 0 ? (
            <div className="text-muted">
              No articles available.
            </div>
          ) : (
            articles.map((a) => (
              <a
                key={a.id}
                className="card p-4"
                href={`/resources/${a.id}`}
              >
                <div className="font-extrabold">
                  {a.title}
                </div>
                <div className="text-muted mt-2">
                  {a.excerpt ?? 'Read more'}
                </div>
              </a>
            ))
          )}
        </div>
      </PageShell>
    </main>
  );
}