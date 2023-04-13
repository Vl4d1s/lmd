import './globals.css';
import Container from '@/components/layout/container';
import Navbar from '@/components/layout/navbar/navbar';
import Footer from '@/components/layout/footer';
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
      <body className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
