import { BarChart3, TrendingUp, BookOpen, Clock } from 'lucide-react';

export default function Analytics() {
  const stats = [
    { title: 'Total Study Time', value: '42.5 hrs', desc: '+12% from last week', icon: Clock, color: 'text-indigo-400 border-indigo-900/50 bg-indigo-950/20' },
    { title: 'Tasks Completed', value: '18 Tasks', desc: '90% completion rate', icon: BookOpen, color: 'text-cyan-400 border-cyan-900/50 bg-cyan-950/20' },
    { title: 'Focus Rating', value: '8.4 / 10', desc: 'Based on pomodoros', icon: TrendingUp, color: 'text-emerald-400 border-emerald-900/50 bg-emerald-950/20' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <BarChart3 size={28} className="text-indigo-400" />
          <span>Analytics</span>
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          Track study efficiency, weekly trends, and workspace completion rates.
          No business logic.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col justify-between glass-card-hover min-h-[160px]">
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.title}</span>
                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${stat.color}`}>
                  <Icon size={16} />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold text-slate-100">{stat.value}</span>
                <span className="text-xs text-slate-500 block mt-1">{stat.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Graphical grid mockup */}
      <div className="glass-panel p-6 rounded-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-base font-bold text-slate-200">Study Load Distribution</h3>
          <span className="text-xs text-slate-400">Weekly View</span>
        </div>

        {/* Custom pure CSS bar graph representing hours */}
        <div className="flex items-end justify-between h-48 pt-6 px-4">
          {[
            { day: 'Mon', hrs: 6.5, pct: '65%' },
            { day: 'Tue', hrs: 8.0, pct: '80%' },
            { day: 'Wed', hrs: 4.5, pct: '45%' },
            { day: 'Thu', hrs: 7.0, pct: '70%' },
            { day: 'Fri', hrs: 5.5, pct: '55%' },
            { day: 'Sat', hrs: 9.0, pct: '90%' },
            { day: 'Sun', hrs: 2.0, pct: '20%' },
          ].map((bar, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 w-12 group cursor-pointer">
              <div className="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {bar.hrs}h
              </div>
              <div className="w-8 bg-[#1f293d] rounded-t-lg h-36 flex items-end overflow-hidden">
                <div className="w-full bg-indigo-600 group-hover:bg-indigo-500 rounded-t-lg transition-all duration-300" style={{ height: bar.pct }}></div>
              </div>
              <span className="text-xs font-semibold text-slate-400">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
