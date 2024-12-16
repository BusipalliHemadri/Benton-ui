import React from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen min-w-screen  bg-background">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};