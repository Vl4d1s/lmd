import './globals.css';
import Container from '@/components/layout/container';
import Navbar from '@/components/layout/navbar/navbar';
export const metadata = {
  title: 'lmd',
  description: 'All your college needs in one place',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
