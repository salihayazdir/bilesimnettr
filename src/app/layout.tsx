import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/layout/Layout';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Bileşim',
  description: 'Bileşim Finansal Teknolojiler ve Ödeme Sistemleri',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Layout>{children}</Layout>
    </html>
  );
}
