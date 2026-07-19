import { FolderKanban, Plus, MoreVertical, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    { name: 'DBMS Index Solver', desc: 'Implementing B+ tree structures and query optimizer models.', progress: 45, date: 'Jul 30', color: 'bg-indigo-500' },
    { name: 'React Native GymApp', desc: 'Building mobile interfaces, charts, and push reminders.', progress: 85, date: 'Aug 12', color: 'bg-cyan-500' },
    { name: 'Compiler Backend Parser', desc: 'Lexical analysis rules, token lists, and expression generators.', progress: 10, date: 'Sep 05', color: 'bg-rose-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <FolderKanban size={28} className="text-indigo-400" />
            <span>Projects</span>
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Structure your courses, assignments, and dev projects into milestones.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition">
          <Plus size={16} />
          <span>New Project</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col justify-between glass-card-hover min-h-[220px]">
            {/* Top Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-heading text-base font-bold text-slate-200">{proj.name}</span>
                <button className="p-1 hover:bg-[#1f293d] rounded text-slate-500 hover:text-slate-300 transition">
                  <MoreVertical size={16} />
                </button>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{proj.desc}</p>
            </div>

            {/* Bottom Progress Metrics */}
            <div className="space-y-4 pt-6">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-slate-200">{proj.progress}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#1f293d] overflow-hidden">
                  <div className={`h-full rounded-full ${proj.color}`} style={{ width: `${proj.progress}%` }}></div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#1f293d]/50 pt-3">
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                  <Calendar size={12} />
                  <span>Target: {proj.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
