import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import "./globals.css";

export const metadata: Metadata = { title: "Cashup Demo", description: "AI-powered Instant Uplift Demo" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (<html lang="en"><body className="bg-black text-white font-sans">{children}</body></html>);
}
