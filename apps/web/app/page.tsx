export default function HomePage() {
  return (
    <main className="container flex flex-col gap-6">
      <div className="card p-6">
        <div className="flex flex-col" style={{ gap: 10 }}>
          <h1 className="text-2xl font-extrabold" style={{ margin: 0 }}>
            Clinical clarity. Warm care. <span style={{ color: 'var(--brand)' }}>Doctor‑verified</span> essentials.
          </h1>
          <p className="text-base text-muted" style={{ margin: 0, maxWidth: 820 }}>
            CradleCare is a premium “Pregnancy to 5 Years” support system led by an MBBS Doctor—combining a verified
            product catalog, milestone-based recommendations, and an expert resource library.
          </p>

          <div className="flex flex-wrap" style={{ gap: 10, marginTop: 8 }}>
            <a className="btn btnPrimary" href="/products">
              Browse catalog
            </a>
            <a className="btn" href="/milestones">
              Milestone tracker
            </a>
            <a className="btn" href="/library">
              Resource library
            </a>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
        {[
          {
            title: 'Doctor‑Verified Catalog',
            desc: 'BIS‑certified toys and organic essentials with doctor notes and trust badges.',
          },
          {
            title: 'Milestone Tracker',
            desc: 'Enter your child’s age to get “Doctor‑Prescribed” recommendations by developmental stage.',
          },
          {
            title: 'Expert Resource Library',
            desc: 'Pregnancy and pediatric guidance with a premium, clinic‑grade reading experience.',
          },
          {
            title: 'Subscription Boxes',
            desc: 'Monthly developmental kits—curated for the stage your child is in.',
          },
        ].map((item) => (
          <div key={item.title} className="card p-4">
            <div className="font-extrabold" style={{ color: 'var(--brand-ink)' }}>{item.title}</div>
            <div className="text-muted mt-1">{item.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

