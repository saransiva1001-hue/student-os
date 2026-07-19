import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function Calendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Hardcoded mockup dates representing July 2026
  const startOffset = 3; // Wednesday starts 1st
  const daysInMonth = 31;
  const calendarCells = [];

  // Fill calendar offsets
  for (let i = 0; i < startOffset; i++) {
    calendarCells.push({ dayNumber: null, isCurrentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push({ dayNumber: d, isCurrentMonth: true });
  }

  // Active mock events inside calendar display
  const events = [
    { date: 15, title: 'Exam: DBMS', color: 'bg-rose-500/10 border-rose-500/30 text-rose-400' },
    { date: 20, title: 'Prj Milestone 1', color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' },
    { date: 28, title: 'Leetcode Target', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <CalendarIcon size={28} className="text-indigo-400" />
            <span>Calendar</span>
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            View aggregated events from local tasks and third-party synced calendars.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#131a2c]/60 border border-[#1f293d] rounded-xl overflow-hidden">
            <button className="p-2.5 hover:bg-[#1f293d]/50 text-slate-400 hover:text-slate-200 transition">
              <ChevronLeft size={16} />
            </button>
            <span className="px-4 text-xs font-bold text-slate-300">July 2026</span>
            <button className="p-2.5 hover:bg-[#1f293d]/50 text-slate-400 hover:text-slate-200 transition">
              <ChevronRight size={16} />
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition">
            <Plus size={16} />
            <span>New Event</span>
          </button>
        </div>
      </div>

      {/* Calendar Month Grid */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        {/* Days labels */}
        <div className="grid grid-cols-7 border-b border-[#1f293d] bg-[#131a2c]/50">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-3 text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
              {day}
            </div>
          ))}
        </div>

        {/* Days grid cells */}
        <div className="grid grid-cols-7 divide-x divide-y divide-[#1f293d] border-[#1f293d]">
          {calendarCells.map((cell, idx) => {
            const cellEvents = cell.dayNumber 
              ? events.filter(e => e.date === cell.dayNumber) 
              : [];

            return (
              <div 
                key={idx} 
                className={`min-h-[110px] p-2 flex flex-col justify-between hover:bg-[#131a2c]/10 transition-colors border-b border-r border-[#1f293d]/50 relative group`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-semibold ${
                    cell.isCurrentMonth ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {cell.dayNumber}
                  </span>
                  {cell.dayNumber && (
                    <button className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-[#1f293d] text-slate-400 transition">
                      <Plus size={10} />
                    </button>
                  )}
                </div>

                <div className="space-y-1 mt-2">
                  {cellEvents.map((evt, eIdx) => (
                    <div 
                      key={eIdx} 
                      className={`px-2 py-1 rounded text-[10px] font-bold border truncate ${evt.color}`}
                    >
                      {evt.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
