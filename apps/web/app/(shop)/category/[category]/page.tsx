type Product = {
  id: string;
  name: string;
  price: number;
};

async function getByCategory(category: string): Promise<Product[]> {
  const base =
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "http://localhost:3001";

  try {
    const res = await fetch(
      `${base}/products/category/${encodeURIComponent(category)}`,
      { cache: "no-store" }
    );

    if (!res.ok) return [];

    const data: Product[] = await res.json();
    return data;
  } catch {
    return [];
  }
}

type PageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  const products = await getByCategory(category);

  return (
    <main className="container">
      <div className="card p-4">
        <h1 className="text-2xl font-bold">
          {category}
        </h1>
        <p className="text-muted mt-2">
          Products in {category}
        </p>
      </div>

      <div
        className="mt-4 grid"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
        }}
      >
        {products.length === 0 && (
          <div className="text-muted">
            No products found.
          </div>
        )}

        {products.map((p) => (
          <div key={p.id} className="card p-4">
            <div className="font-extrabold text-lg">
              {p.name}
            </div>
            <div className="text-muted mt-1">
              ₹{(p.price / 100).toFixed(2)}
            </div>
            <div className="flex gap-2 mt-3">
              <button className="btn btnPrimary">
                Add to kit
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}