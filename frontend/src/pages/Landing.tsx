import { Link } from 'react-router-dom';
import { Zap, Shield, Sparkles, ArrowRight, Github } from 'lucide-react';

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full bg-[#0b0f19] text-[#f8fafc] overflow-hidden flex flex-col font-sans">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 max-w-7xl w-full mx-auto shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600">
            <Zap size={20} className="text-white" />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight bg-gradient-to-r from-slate-50 to-slate-300 bg-clip-text text-transparent">
            StudentOS
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-slate-200 transition"
          >
            <Github size={20} />
          </a>
          <Link 
            to="/app/dashboard"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-[#1f293d]/80 border border-[#2d3a54] hover:bg-[#2d3a54] text-slate-200 transition"
          >
            Launch App
          </Link>
        </div>
      </header>

      {/* Background Decorative Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-indigo-900/20 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none"></div>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center max-w-5xl w-full mx-auto px-6 py-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-900/50 text-indigo-400 text-xs font-semibold mb-6 mx-auto animate-pulse">
          <Sparkles size={12} />
          <span>Next-Generation Student OS</span>
        </div>
        
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-[1.1] mb-6">
          Your Complete Academic Workspace, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Powered by AI</span>
        </h1>
        
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          StudentOS combines schedules, tasks, projects, exam planners, and multi-agent AI assistants into a single unified desktop experience. Built for maximum efficiency.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link 
            to="/app/dashboard"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 transition duration-200"
          >
            <span>Get Started Free</span>
            <ArrowRight size={18} />
          </Link>
          <a 
            href="#features"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#131a2c]/60 border border-[#1f293d] hover:bg-[#1f293d]/50 text-slate-300 font-semibold rounded-xl transition duration-200"
          >
            Explore Features
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="glass-panel p-6 rounded-2xl glass-card-hover">
            <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <Zap size={20} />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-100 mb-2">Local First</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              StudentOS runs locally with SQLite. Fast load times, responsive UI, and absolute data privacy.
            </p>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl glass-card-hover">
            <div className="w-10 h-10 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-100 mb-2">AI Integrations</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designed with a multi-agent backend architecture ready to connect Ollama, OpenAI, and LangGraph.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl glass-card-hover">
            <div className="w-10 h-10 rounded-lg bg-rose-600/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
              <Shield size={20} />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-100 mb-2">Modular Plugin Hub</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connect Google Classroom, GitHub, Notion, and Gmail to centralize study resources.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1f293d]/50 bg-[#070b12] py-6 text-center text-slate-500 text-xs shrink-0 relative z-10">
        <p>© 2026 StudentOS. Built for high-performance students.</p>
      </footer>
    </div>
  );
}
