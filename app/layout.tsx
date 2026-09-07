import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joshua Rego — Product Manager · Designer · Builder',
  description:
    'Joshua Rego builds digital products, AI prototypes and game systems from problem discovery through design and go-to-market.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
