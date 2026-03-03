'use client';
import type { ReactNode } from 'react';

export function PageShell({
  title,
  subtitle,
  children,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col" style={{ gap: 14 }}>
      <div className="card p-4">
        <div className="flex justify-between items-start" style={{ gap: 12 }}>
          <div className="flex flex-col" style={{ gap: 6 }}>
            <h1 className="text-2xl font-extrabold" style={{ margin: 0 }}>{title}</h1>
            {subtitle ? <p className="text-muted" style={{ margin: 0 }}>{subtitle}</p> : null}
          </div>
          {actions ? <div className="flex flex-wrap" style={{ gap: 10 }}>{actions}</div> : null}
        </div>
      </div>
      {children}
    </div>
  );
}

