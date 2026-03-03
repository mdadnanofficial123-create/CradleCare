import { PageShell } from '../../../components/layout/PageShell';

type Article = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  content?: string;
};

async function getArticles(): Promise<Article[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';
  const res = await fetch(`${base}/articles`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load articles');
  return res.json();
}

export default async function LibraryPage() {
  const articles = await getArticles();

  return (
    <main className="container">
      <PageShell
        title="Expert Resource Library"
        subtitle="Doctor-led pregnancy and pediatric guidance with a premium reading experience."
      >
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          {articles.map((a) => (
            <article key={a.id} className="card p-4">
              <div className="pill mb-2">
                <span className="font-bold" style={{ color: 'var(--brand-ink)' }}>{a.tag}</span>
              </div>
              <h2 className="font-extrabold text-lg" style={{ margin: 0 }}>{a.title}</h2>
              <p className="text-muted mt-1">{a.summary}</p>
              <div className="mt-3">
                <a className="btn btnPrimary" href={`/library/${encodeURIComponent(a.id)}`}>
                  Read
                </a>
              </div>
            </article>
          ))}
        </div>
      </PageShell>
    </main>
  );
}

