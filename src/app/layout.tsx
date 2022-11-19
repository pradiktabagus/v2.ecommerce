/* eslint-disable @next/next/no-head-element */
import '@/styles/global.css';

import dynamic from 'next/dynamic';
import React from 'react';

const Header = dynamic(() => import('./header'));
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
