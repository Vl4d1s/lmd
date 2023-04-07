import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
