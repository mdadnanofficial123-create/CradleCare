'use client';

import { useMemo, useState, useEffect } from 'react';

type Rec = { title: string; why: string };

type Milestone = {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

function getStage(months: number): string {
  if (months < 0) return 'Unknown';
  if (months <= 3) return '0–3 months';
  if (months <= 6) return '4–6 months';
  if (months <= 12) return '7–12 months';
  if (months <= 24) return '1–2 years';
  if (months <= 36) return '2–3 years';
  if (months <= 60) return '3–5 years';
  return '5+ years';
}

function recommendationsForStage(stage: string): Rec[] {
  switch (stage) {
    case '0–3 months':
      return [
        { title: 'Newborn Essentials Kit', why: 'Skin-safe basics; routine support' },
        { title: 'Swaddle & Sleep Comfort', why: 'Better sleep hygiene for early weeks' },
      ];
    case '4–6 months':
      return [
        { title: 'Teether (BPA-free)', why: 'Soothes gums; sensory exploration' },
        { title: 'Tummy Time Mat', why: 'Supports neck and core strength' },
      ];
    case '7–12 months':
      return [
        { title: 'Stacking Rings', why: 'Hand-eye coordination and grip' },
        { title: 'Baby Monitor', why: 'Safe sleep & supervision' },
      ];
    case '1–2 years':
      return [
        { title: 'Shape Sorter', why: 'Problem solving and fine motor skills' },
        { title: 'Comfort Stroller', why: 'Daily mobility and posture comfort' },
      ];
    case '2–3 years':
      return [
        { title: 'Pretend Play Kit', why: 'Language and social development' },
        { title: 'Activity Book (washable)', why: 'Early learning + attention building' },
      ];
    case '3–5 years':
      return [
        { title: 'STEM Builder Set', why: 'Planning, sequencing, creativity' },
        { title: 'Art & Craft Essentials', why: 'Fine motor control + self-expression' },
      ];
    default:
      return [
        {
          title: 'Start with the tracker',
          why: 'Enter age to get stage-based recommendations',
        },
      ];
  }
}

export function MilestoneTracker() {
  const [months, setMonths] = useState<number>(6);
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  const stage = useMemo(() => getStage(months), [months]);
  const recs = useMemo(() => recommendationsForStage(stage), [stage]);

  useEffect(() => {
    (async () => {
      try {
        const raw = process.env.NEXT_PUBLIC_API_BASE_URL;

        const envBase = raw
          ? raw.replace(/^"|"$/g, '')
          : undefined;

        const fallback =
          typeof window !== 'undefined'
            ? `${window.location.protocol}//${window.location.hostname}:3001`
            : undefined;

        const bases = [envBase, fallback].filter(Boolean) as string[];

        for (const b of bases) {
          try {
            const res = await fetch(`${b}/milestones`);
            if (res.ok) {
              const data: Milestone[] = await res.json();
              setMilestones(data);
              break;
            }
          } catch {
            // try next base
          }
        }
      } catch {
        // ignore outer errors
      }
    })();
  }, []);

  return (
    <div className="card p-4">
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'minmax(220px, 320px) 1fr',
          gap: 14,
        }}
      >
        <div className="flex flex-col" style={{ gap: 10 }}>
          <label className="font-bold">Baby age (months)</label>

          <input
            type="number"
            min={0}
            max={72}
            value={Number.isFinite(months) ? months : 0}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="p-3 rounded-lg border border-border bg-surface text-base outline-none"
          />

          <div className="pill" style={{ width: 'fit-content' }}>
            <span
              className="font-extrabold"
              style={{ color: 'var(--brand-ink)' }}
            >
              Stage:
            </span>
            <span className="text-muted"> {stage}</span>
          </div>

          <div className="text-muted text-sm">
            “Doctor-Prescribed” recommendations are stage-based and will
            be refined as we add your child’s profile.
          </div>
        </div>

        <div>
          <div
            className="font-extrabold"
            style={{ color: 'var(--brand-ink)' }}
          >
            Recommended for this stage
          </div>

          <div
            className="mt-2 grid"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 12,
            }}
          >
            {recs.map((r) => (
              <div
                key={r.title}
                className="card p-3"
                style={{ boxShadow: 'none' }}
              >
                <div className="font-bold">{r.title}</div>
                <div className="text-muted mt-1">{r.why}</div>
                <div className="mt-2">
                  <a className="btn btnPrimary" href="/products">
                    View in catalog
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {milestones.length > 0 && (
        <div className="mt-6">
          <div className="font-extrabold mb-2">
            Your milestones
          </div>

          <ul className="list-disc list-inside text-sm text-muted">
            {milestones.map((m) => (
              <li key={m.id}>
                {m.title} — due{' '}
                {new Date(m.dueDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}