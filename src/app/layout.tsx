import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/lib/redux/provider';
import { Header } from '@/components/base/Header';

export const metadata: Metadata = {
  title: 'Whisky Voyage',
  description: '',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          {children}
          </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
