import { Zap, Clock, CheckSquare, Target, GraduationCap, Flame } from 'lucide-react';
import { formatDate } from '@student-os/shared';

export default function Dashboard() {
  const currentDate = formatDate(new Date().toISOString());

  const quickStats = [
    { name: 'Study Streak', value: '5 Days', icon: Flame, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
    { name: 'Tasks Left', value: '4 Pending', icon: CheckSquare, color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { name: 'Today\'s Classes', value: '2 Scheduled', icon: Clock, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' },
    { name: 'Active Goals', value: '3 Tracked', icon: Target, color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' },
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-100">
            Welcome back, Student
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Here's what is happening in your academic workspace today, {currentDate}.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold self-start">
          <Zap size={14} className="animate-pulse" />
          <span>AI Engine: Active</span>
        </div>
      </div>

      {/* Quick stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-panel p-5 rounded-2xl flex items-center gap-4 glass-card-hover">
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${stat.color}`}>
                <Icon size={18} />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">{stat.name}</span>
                <span className="text-lg font-bold text-slate-100 mt-0.5 block">{stat.value}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main sections grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Timetable preview */}
        <div className="glass-panel p-6 rounded-2xl lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold text-slate-100 flex items-center gap-2">
              <GraduationCap size={18} className="text-indigo-400" />
              <span>Today's Classes</span>
            </h2>
            <span className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer">View full timetable</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#131a2c]/50 border border-[#1f293d] hover:border-[#1f293d]/80 transition">
              <div>
                <span className="text-sm font-semibold text-slate-200">CS-301: Database Systems</span>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span>09:00 AM - 10:30 AM</span>
                  <span>•</span>
                  <span>Room 402</span>
                </div>
              </div>
              <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold uppercase tracking-wider">Lecture</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#131a2c]/50 border border-[#1f293d] hover:border-[#1f293d]/80 transition">
              <div>
                <span className="text-sm font-semibold text-slate-200">MATH-341: Linear Algebra</span>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span>11:00 AM - 12:30 PM</span>
                  <span>•</span>
                  <span>Room 105</span>
                </div>
              </div>
              <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold uppercase tracking-wider">Lecture</span>
            </div>
          </div>
        </div>

        {/* Tasks checklist preview */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold text-slate-100 flex items-center gap-2">
              <CheckSquare size={18} className="text-indigo-400" />
              <span>Priority Tasks</span>
            </h2>
            <span className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer">View tasks</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#131a2c]/30 border border-[#1f293d]/50">
              <input type="checkbox" className="mt-1 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900" />
              <div>
                <span className="text-sm font-medium text-slate-200 block">Database Project Milestone 1</span>
                <span className="text-xs text-amber-500 mt-1 block">Due tomorrow</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#131a2c]/30 border border-[#1f293d]/50">
              <input type="checkbox" className="mt-1 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900" />
              <div>
                <span className="text-sm font-medium text-slate-200 block">Read Linear Algebra Chapter 4</span>
                <span className="text-xs text-slate-400 mt-1 block">Due Jul 22</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
