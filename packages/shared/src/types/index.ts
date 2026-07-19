export interface HealthCheckResponse {
  status: 'ok';
  timestamp: string;
  uptime: number;
  environment: string;
}

export type Priority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export interface TaskType {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  completed: boolean;
  priority: Priority;
  projectId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectType {
  id: string;
  name: string;
  description?: string;
  color?: string;
  tasks?: TaskType[];
  createdAt: string;
  updatedAt: string;
}
