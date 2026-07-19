import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  CheckSquare, 
  FolderKanban, 
  Target, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  X,
  Zap
} from 'lucide-react';

interface SidebarProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ mobileOpen, setMobileOpen, collapsed, setCollapsed }: SidebarProps) {
  const menuItems = [
    { name: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
    { name: 'Weekly Timetable', path: '/app/timetable', icon: Clock },
    { name: 'Calendar', path: '/app/calendar', icon: Calendar },
    { name: 'Tasks', path: '/app/tasks', icon: CheckSquare },
    { name: 'Projects', path: '/app/projects', icon: FolderKanban },
    { name: 'Goals', path: '/app/goals', icon: Target },
    { name: 'Analytics', path: '/app/analytics', icon: BarChart3 },
    { name: 'Settings', path: '/app/settings', icon: Settings },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#131a2c]/90 border-r border-[#1f293d] p-4 select-none">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between h-14 px-2 shrink-0 border-b border-[#1f293d]/50 pb-3">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 shrink-0">
            <Zap size={18} className="text-white" />
          </div>
          {!collapsed && (
            <span className="font-heading text-lg font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              StudentOS
            </span>
          )}
        </div>
        
        {/* Mobile close button */}
        <button 
          onClick={() => setMobileOpen(false)}
          className="p-1 rounded-lg hover:bg-[#1f293d]/50 text-slate-400 md:hidden"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 mt-6 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group duration-200
                ${isActive 
                  ? 'bg-indigo-600/15 text-indigo-400 border-l-2 border-indigo-500 pl-2.5' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-[#1f293d]/30 border-l-2 border-transparent'
                }
              `}
            >
              <Icon size={18} className="shrink-0 group-hover:scale-105 transition-transform" />
              {!collapsed && <span className="truncate">{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse Trigger - Desktop only */}
      <div className="hidden md:flex shrink-0 pt-4 border-t border-[#1f293d]/50">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full py-2.5 rounded-lg border border-[#1f293d] hover:bg-[#1f293d]/30 text-slate-400 hover:text-slate-200 transition duration-200"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar Slide-in */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:hidden
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {sidebarContent}
      </div>

      {/* Desktop Sidebar (Permanent) */}
      <div className={`
        hidden md:block h-full transition-all duration-300 ease-in-out shrink-0
        ${collapsed ? 'w-20' : 'w-64'}
      `}>
        {sidebarContent}
      </div>
    </>
  );
}
