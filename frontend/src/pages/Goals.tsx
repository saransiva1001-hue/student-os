import { Target, Plus, CheckCircle, Calendar, Compass } from 'lucide-react';

export default function Goals() {
  const goals = [
    { title: 'Maintain GPA above 3.8', cat: 'Academic', status: 'IN_PROGRESS', date: 'Dec 2026', icon: GraduationCap },
    { title: 'Solve 150 Leetcode questions', cat: 'Technical', status: 'IN_PROGRESS', date: 'Oct 2026', icon: Compass },
    { title: 'Secure summer dev internship', cat: 'Career', status: 'COMPLETED', date: 'May 2026', icon: CheckCircle },
  ];

  function GraduationCap() {
    return <span>🎓</span>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Target size={28} className="text-indigo-400" />
            <span>Goals</span>
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Define key academic targets, learning milestones, and skill objectives.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition">
          <Plus size={16} />
          <span>New Goal</span>
        </button>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col justify-between glass-card-hover min-h-[180px]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-950/40 border border-indigo-900/50">
                  {goal.cat}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  goal.status === 'COMPLETED' 
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}>
                  {goal.status}
                </span>
              </div>
              <h3 className="font-heading text-base font-bold text-slate-200">{goal.title}</h3>
            </div>

            <div className="flex items-center justify-between border-t border-[#1f293d]/50 pt-4 mt-6">
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                <Calendar size={12} />
                <span>Target: {goal.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
