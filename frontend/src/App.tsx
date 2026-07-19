import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Pages
import Landing from './pages/Landing.tsx';
import Dashboard from './pages/Dashboard.tsx';
import WeeklyTimetable from './pages/WeeklyTimetable.tsx';
import Calendar from './pages/Calendar.tsx';
import Tasks from './pages/Tasks.tsx';
import Projects from './pages/Projects.tsx';
import Goals from './pages/Goals.tsx';
import Analytics from './pages/Analytics.tsx';
import Settings from './pages/Settings.tsx';

// Layout
import AppLayout from './layouts/AppLayout.tsx';

// Query Client setup
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* App Workspace Shell */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="timetable" element={<WeeklyTimetable />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="projects" element={<Projects />} />
            <Route path="goals" element={<Goals />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Fallback redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
