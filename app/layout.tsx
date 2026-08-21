import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CJPS LLC Services | Commercial Cleaning',
  description: 'Commercial cleaning services and professional cleaning supplies.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}