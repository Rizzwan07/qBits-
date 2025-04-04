import './globals.css';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Learning Platform',
  description: 'A modern e-learning platform for educational institutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="py-10">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
} 