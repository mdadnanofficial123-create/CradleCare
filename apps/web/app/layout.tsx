import './globals.css';
import type { ReactNode } from 'react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div className="container">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

