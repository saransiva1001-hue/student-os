import { Clock, Plus, GraduationCap } from 'lucide-react';

export default function WeeklyTimetable() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM'];

  // Static mock schedule blocks for foundation display
  const classes = [
    { day: 'Monday', time: '09:00 AM', subject: 'CS-301: Databases', room: 'Room 402', color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' },
    { day: 'Monday', time: '12:00 PM', subject: 'MATH-341: Algebra', room: 'Room 105', color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' },
    { day: 'Wednesday', time: '09:00 AM', subject: 'CS-301: Databases', room: 'Room 402', color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' },
    { day: 'Wednesday', time: '12:00 PM', subject: 'MATH-341: Algebra', room: 'Room 105', color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' },
    { day: 'Thursday', time: '01:30 PM', subject: 'ENG-202: Technical Writing', room: 'Room 210', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
    { day: 'Friday', time: '10:30 AM', subject: 'CS-352: Computer Networks', room: 'Lab 2', color: 'bg-rose-500/10 border-rose-500/30 text-rose-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
            <Clock size={28} className="text-indigo-400" />
            <span>Weekly Timetable</span>
          </h1>
          <p className="text-slate-400 mt-1 text-sm">
            Manage your weekly lecture courses, lab hours, and study boundaries.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/10 transition">
          <Plus size={16} />
          <span>Add Slot</span>
        </button>
      </div>

      {/* Timetable Desktop Grid */}
      <div className="hidden lg:block glass-panel rounded-2xl overflow-hidden">
        <div className="grid grid-cols-6 border-b border-[#1f293d] bg-[#131a2c]/50">
          <div className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center border-r border-[#1f293d]/50">Time</div>
          {days.map(day => (
            <div key={day} className="p-4 text-xs font-bold text-slate-300 uppercase tracking-wider text-center border-r border-[#1f293d]/50 last:border-0">{day}</div>
          ))}
        </div>

        <div className="divide-y divide-[#1f293d]">
          {timeSlots.map(time => (
            <div key={time} className="grid grid-cols-6 items-stretch min-h-[90px]">
              {/* Time Label */}
              <div className="p-4 text-xs font-semibold text-slate-400 flex items-center justify-center border-r border-[#1f293d]/50 bg-[#131a2c]/20">
                {time}
              </div>

              {/* Days Columns */}
              {days.map(day => {
                const currentClass = classes.find(c => c.day === day && c.time === time);
                return (
                  <div key={day} className="p-2 border-r border-[#1f293d]/50 last:border-0 flex items-stretch min-h-[90px] relative group hover:bg-[#131a2c]/10 transition-colors">
                    {currentClass ? (
                      <div className={`w-full p-3 rounded-xl border flex flex-col justify-between text-left transition duration-200 ${currentClass.color}`}>
                        <div className="text-xs font-bold leading-tight">{currentClass.subject}</div>
                        <div className="text-[10px] opacity-80 mt-1 flex items-center gap-1">
                          <GraduationCap size={10} />
                          <span>{currentClass.room}</span>
                        </div>
                      </div>
                    ) : (
                      <button className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 flex items-center justify-center text-slate-500 hover:text-indigo-400 transition duration-200">
                        <Plus size={16} />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Timetable Mobile List */}
      <div className="block lg:hidden space-y-6">
        {days.map(day => {
          const dayClasses = classes.filter(c => c.day === day);
          return (
            <div key={day} className="space-y-3">
              <h3 className="font-heading text-sm font-bold text-slate-300 border-b border-[#1f293d] pb-1.5">{day}</h3>
              {dayClasses.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {dayClasses.map((cls, idx) => (
                    <div key={idx} className={`p-4 rounded-xl border flex items-center justify-between ${cls.color}`}>
                      <div>
                        <span className="text-sm font-bold block">{cls.subject}</span>
                        <span className="text-xs opacity-80 block mt-1">{cls.time} • {cls.room}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-xs text-slate-500 italic block pl-2">No lectures scheduled</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
