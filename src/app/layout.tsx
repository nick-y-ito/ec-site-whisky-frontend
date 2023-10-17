import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Whisky',
  description: '',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
};

export default RootLayout;
