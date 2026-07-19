import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckSquare, Plus, Search, Calendar, AlertCircle } from 'lucide-react';
import { PRIORITIES, validateTaskInput, getPriorityColorClass } from '@student-os/shared';

interface FormInputs {
  title: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  dueDate: string;
}

interface Task {
  id: string;
  title: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  dueDate: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Prepare DBMS Lecture Notes', priority: 'HIGH', dueDate: '2026-07-20', completed: false },
    { id: '2', title: 'Read compiler design slides', priority: 'LOW', dueDate: '2026-07-25', completed: false },
    { id: '3', title: 'Upload network socket codes', priority: 'MEDIUM', dueDate: '2026-07-22', completed: true },
  ]);

  const [validationError, setValidationError] = useState<string | null>(null);

  const { register, handleSubmit, reset } = useForm<FormInputs>({
    defaultValues: {
      title: '',
      priority: 'MEDIUM',
      dueDate: '',
    }
  });

  const onSubmit = (data: FormInputs) => {
    // Validate inputs using the packages/shared schema helper
    const validation = validateTaskInput(data.title);
    if (!validation.isValid) {
      setValidationError(validation.errors.title);
      return;
    }

    setValidationError(null);
    const newTask: Task = {
      id: Date.now().toString(),
      title: data.title,
      priority: data.priority,
      dueDate: data.dueDate || new Date().toISOString().split('T')[0],
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    reset();
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
          <CheckSquare size={28} className="text-indigo-400" />
          <span>Tasks</span>
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          Plan daily actions, assign priorities, and link milestones.
        </p>
      </div>

      {/* Main Grid: Form on left, Task Lists on right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Task Form Panel */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <h2 className="font-heading text-lg font-bold text-slate-100">Add New Task</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Task Title</label>
              <input 
                {...register('title')}
                type="text" 
                placeholder="e.g. Solve 3 Leetcode questions"
                className="w-full px-4 py-2.5 rounded-xl bg-[#131a2c]/60 border border-[#1f293d] focus:border-indigo-500 focus:outline-none text-slate-200 text-sm placeholder-slate-500 transition"
              />
              {validationError && (
                <span className="flex items-center gap-1 text-xs text-rose-400 mt-1.5">
                  <AlertCircle size={12} />
                  <span>{validationError}</span>
                </span>
              )}
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Priority</label>
              <select 
                {...register('priority')}
                className="w-full px-4 py-2.5 rounded-xl bg-[#131a2c]/60 border border-[#1f293d] focus:border-indigo-500 focus:outline-none text-slate-300 text-sm transition"
              >
                <option value={PRIORITIES.LOW}>Low Priority</option>
                <option value={PRIORITIES.MEDIUM}>Medium Priority</option>
                <option value={PRIORITIES.HIGH}>High Priority</option>
                <option value={PRIORITIES.URGENT}>Urgent</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Due Date</label>
              <input 
                {...register('dueDate')}
                type="date" 
                className="w-full px-4 py-2.5 rounded-xl bg-[#131a2c]/60 border border-[#1f293d] focus:border-indigo-500 focus:outline-none text-slate-300 text-sm transition"
              />
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm transition duration-200"
            >
              <Plus size={16} />
              <span>Create Task</span>
            </button>
          </form>
        </div>

        {/* Task lists panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active tasks list */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="font-heading text-base font-bold text-slate-200">Pending Tasks ({activeTasks.length})</h3>
            
            {activeTasks.length > 0 ? (
              <div className="space-y-3">
                {activeTasks.map(task => (
                  <div 
                    key={task.id} 
                    className="flex items-center justify-between p-4 rounded-xl bg-[#131a2c]/40 border border-[#1f293d] hover:border-[#1f293d]/80 transition duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="mt-1 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer"
                      />
                      <div>
                        <span className="text-sm font-medium text-slate-200">{task.title}</span>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                          <Calendar size={12} />
                          <span>{task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${getPriorityColorClass(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-xs text-slate-500 italic block py-4 text-center">All tasks completed! Nice job.</span>
            )}
          </div>

          {/* Completed tasks list */}
          {completedTasks.length > 0 && (
            <div className="glass-panel p-6 rounded-2xl space-y-4 opacity-75">
              <h3 className="font-heading text-base font-bold text-slate-300">Completed Tasks</h3>
              <div className="space-y-3">
                {completedTasks.map(task => (
                  <div 
                    key={task.id} 
                    className="flex items-center justify-between p-4 rounded-xl bg-[#131a2c]/20 border border-[#1f293d]/50"
                  >
                    <div className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        className="mt-1 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer"
                      />
                      <del className="text-sm font-medium text-slate-500">{task.title}</del>
                    </div>
                    
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${getPriorityColorClass(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
