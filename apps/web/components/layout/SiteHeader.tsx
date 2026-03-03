'use client';

import Link from 'next/link';
import { TrustBadges } from '../branding/TrustBadges';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/doctor-support', label: 'Doctor Support' },
  { href: '/pregnancy', label: 'Pregnancy' },
  { href: '/development', label: 'Baby Development' },
  { href: '/toys', label: 'Development Toys' },
  { href: '/store', label: 'Store' },
  { href: '/resources', label: 'Resources' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Login' },
];

export function SiteHeader() {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="container mt-4 mb-4">
          <div className="flex justify-between items-center" style={{ gap: 16 }}>
            <div className="flex items-center" style={{ gap: 12 }}>
              <Link href="/" className="text-xl font-extrabold">
                <span style={{ color: 'var(--brand-ink)' }}>Cradle</span>
                <span style={{ color: 'var(--brand)' }}>Care</span>
              </Link>
              <span className="pill text-xs" style={{ color: 'var(--muted)' }}>
                Premium medical-commerce • Pregnancy → 5 Years
              </span>
            </div>

            <nav className="flex flex-wrap" style={{ gap: 14 }}>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted hover:text-brand-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-3">
            <TrustBadges />
          </div>
        </div>
      </div>
    </header>
  );
}