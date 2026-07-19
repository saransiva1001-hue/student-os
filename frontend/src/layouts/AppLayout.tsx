import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.tsx';
import { Menu } from 'lucide-react';

export default function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#0b0f19] text-[#f8fafc] overflow-hidden">
      {/* Sidebar - Desktop collapsible & Mobile responsive drawer */}
      <Sidebar 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed}
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Top Header Panel - For mobile menu and top bar widgets */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#1f293d] md:border-none glass-panel md:bg-transparent h-16 shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileOpen(true)}
              className="p-1.5 rounded-lg border border-[#1f293d] hover:bg-[#131a2c]/50 transition md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              <Menu size={20} className="text-slate-400" />
            </button>
            <span className="font-heading text-lg font-bold tracking-tight text-slate-100 md:hidden">
              StudentOS
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
            <span>Workspace: Personal</span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
        </header>

        {/* Scrollable Page Body */}
        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-10 md:py-10 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
