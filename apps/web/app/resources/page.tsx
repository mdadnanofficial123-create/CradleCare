import { PageShell } from '../../components/layout/PageShell';

type Article = { id: string; title: string; excerpt?: string };

async function getArticles(): Promise<Article[]> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';
  const res = await fetch(`${base}/articles`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function ResourcesPage() {
  const articles = await getArticles();

  return (
    <main>
      <PageShell title="Parenting Resources" subtitle="Articles, guides and tips for parents">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
          {articles.map((a) => (
            <a key={a.id} className="card p-4" href={`/resources/${a.id}`}>
              <div className="font-extrabold">{a.title}</div>
              <div className="text-muted mt-2">{a.excerpt ?? 'Read more'}</div>
            </a>
          ))}
        </div>
      </PageShell>
    </main>
  );
}
import { PageShell } from '../../components/layout/PageShell';

export default function ResourcesPage() {
  return (
    <main>
      <PageShell title="Parenting Resources" subtitle="Blog-style expert content to help parents">
        <div className="card p-4">
          <p className="text-base text-muted">Articles, guides, and quick tips: baby sleep, vaccination guides, feeding, and development.</p>
        </div>
      </PageShell>
    </main>
  );
}
