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
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
