import { useState } from 'react';
import { Settings as SettingsIcon, Shield, Sliders, Cpu, Bell, Database } from 'lucide-react';

export default function Settings() {
  const [flags, setFlags] = useState({
    aiEnabled: false,
    googleCalendarEnabled: false,
    gmailEnabled: false,
    googleClassroomEnabled: false,
    notificationsEnabled: true
  });

  const toggleFlag = (key: keyof typeof flags) => {
    setFlags(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <SettingsIcon size={28} className="text-indigo-400" />
          <span>Settings</span>
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          Configure local workspace behaviors, modular feature flags, and SQLite database settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Settings categories */}
        <div className="lg:col-span-2 space-y-6">
          {/* Feature Flags Settings */}
          <div className="glass-panel p-6 rounded-2xl space-y-5">
            <h3 className="font-heading text-base font-bold text-slate-200 flex items-center gap-2">
              <Sliders size={18} className="text-indigo-400" />
              <span>Feature Flags (config/featureFlags.js)</span>
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Toggling these modules simulates feature availability in the workspace. In production, these flags are centrally loaded by the server configuration.
            </p>

            <div className="divide-y divide-[#1f293d] pt-2">
              {/* Flag Row */}
              <div className="flex items-center justify-between py-4">
                <div className="space-y-1 pr-4">
                  <span className="text-sm font-semibold text-slate-200 block">AI Agent Core Engine</span>
                  <span className="text-xs text-slate-500 block">Enable multi-agent orchestration (planner, manager, assistant, memory)</span>
                </div>
                <button 
                  onClick={() => toggleFlag('aiEnabled')}
                  className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${
                    flags.aiEnabled ? 'bg-indigo-600' : 'bg-slate-800 border border-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${
                    flags.aiEnabled ? 'right-1' : 'left-1'
                  }`}></div>
                </button>
              </div>

              {/* Flag Row */}
              <div className="flex items-center justify-between py-4">
                <div className="space-y-1 pr-4">
                  <span className="text-sm font-semibold text-slate-200 block">Google Calendar Sync</span>
                  <span className="text-xs text-slate-500 block">Synchronize lectures, study windows, and exam dates automatically</span>
                </div>
                <button 
                  onClick={() => toggleFlag('googleCalendarEnabled')}
                  className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${
                    flags.googleCalendarEnabled ? 'bg-indigo-600' : 'bg-slate-800 border border-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${
                    flags.googleCalendarEnabled ? 'right-1' : 'left-1'
                  }`}></div>
                </button>
              </div>

              {/* Flag Row */}
              <div className="flex items-center justify-between py-4">
                <div className="space-y-1 pr-4">
                  <span className="text-sm font-semibold text-slate-200 block">Google Classroom plugin</span>
                  <span className="text-xs text-slate-500 block">Pull tasks, assignment deadlines, and grade records</span>
                </div>
                <button 
                  onClick={() => toggleFlag('googleClassroomEnabled')}
                  className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${
                    flags.googleClassroomEnabled ? 'bg-indigo-600' : 'bg-slate-800 border border-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${
                    flags.googleClassroomEnabled ? 'right-1' : 'left-1'
                  }`}></div>
                </button>
              </div>

              {/* Flag Row */}
              <div className="flex items-center justify-between py-4">
                <div className="space-y-1 pr-4">
                  <span className="text-sm font-semibold text-slate-200 block">Global Notifications</span>
                  <span className="text-xs text-slate-500 block">Allow push warnings and class schedule reminders</span>
                </div>
                <button 
                  onClick={() => toggleFlag('notificationsEnabled')}
                  className={`w-11 h-6 rounded-full transition-colors relative shrink-0 ${
                    flags.notificationsEnabled ? 'bg-indigo-600' : 'bg-slate-800 border border-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${
                    flags.notificationsEnabled ? 'right-1' : 'left-1'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="space-y-6">
          {/* Environment configs */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="font-heading text-sm font-bold text-slate-200 flex items-center gap-2">
              <Cpu size={16} className="text-indigo-400" />
              <span>Workspace Info</span>
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#1f293d]/50">
                <span className="text-slate-400">Environment</span>
                <span className="text-slate-200 font-semibold">Development</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1f293d]/50">
                <span className="text-slate-400">Port</span>
                <span className="text-slate-200 font-semibold">5173</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1f293d]/50">
                <span className="text-slate-400">API URL</span>
                <span className="text-slate-200 font-semibold text-indigo-400">http://localhost:5000</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">TypeScript</span>
                <span className="text-slate-200 font-semibold">Enabled</span>
              </div>
            </div>
          </div>

          {/* DB Info */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="font-heading text-sm font-bold text-slate-200 flex items-center gap-2">
              <Database size={16} className="text-indigo-400" />
              <span>SQLite Persistence</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Persisting state locally on SQLite `dev.db`. There is no cloud sync or active multi-tenant accounts in this foundation scope.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
