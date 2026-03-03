type Product = {
  id: string;
  name: string;
  price: number;
};

async function getProducts(): Promise<Product[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

  const res = await fetch(`${baseUrl}/products`, {
    // Disable Next.js fetch caching so you always see latest data in dev.
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="container">
      <div className="card p-4">
        <h1 className="text-2xl font-bold">Doctor‑Verified Catalog</h1>
        <p className="mt-2 text-muted">
          BIS‑certified toys and organic essentials with pediatrician-led curation.
        </p>
      </div>

      <div className="mt-4 grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        {products.map((p) => (
          <div key={p.id} className="card p-4">
            <div className="pill mb-2">
              <span className="text-xs font-bold" style={{ color: 'var(--brand-ink)' }}>
                Pediatrician‑Approved
              </span>
            </div>
            <div className="font-extrabold text-lg">{p.name}</div>
            <div className="text-muted mt-1">
              ₹{(p.price / 100).toFixed(2)} • Toxin‑Free • Doctor‑Verified
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <button className="btn btnPrimary">Add to kit</button>
              <button className="btn">View details</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

