import './globals.css';
import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import StoreProvider from '../store/StoreProvider';
import Navigation from '../components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <UserProvider>
            <header className="fixed w-full z-50 bg-black/80 backdrop-blur-lg">
              <div className="container mx-auto px-4">
                <Navigation />
              </div>
            </header>
            <main className="pt-20">{children}</main>
          </UserProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
