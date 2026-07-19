export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  return date.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getPriorityColorClass(priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'): string {
  switch (priority) {
    case 'LOW':
      return 'text-slate-400 border-slate-700 bg-slate-900/30';
    case 'MEDIUM':
      return 'text-blue-400 border-blue-700 bg-blue-900/30';
    case 'HIGH':
      return 'text-amber-400 border-amber-700 bg-amber-900/30';
    case 'URGENT':
      return 'text-rose-400 border-rose-700 bg-rose-900/30';
    default:
      return 'text-slate-400 border-slate-700 bg-slate-900/30';
  }
}
