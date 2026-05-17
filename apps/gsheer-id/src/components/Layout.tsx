import React from 'react';
import Header from './Header';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
