'use client';

import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Container from '@/components/layout/container';
import Navbar from '@/components/layout/navbar/navbar';
import Footer from '@/components/layout/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className="flex flex-col min-h-screen">
        <SessionProvider>
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">
            <Container>{children}</Container>
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
