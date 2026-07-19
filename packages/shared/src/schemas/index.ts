export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateTaskInput(title: string): ValidationResult {
  const errors: Record<string, string> = {};
  
  if (!title || title.trim() === '') {
    errors.title = 'Title is required';
  } else if (title.length > 100) {
    errors.title = 'Title must be 100 characters or less';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
export function validateProjectInput(name: string): ValidationResult {
  const errors: Record<string, string> = {};
  
  if (!name || name.trim() === '') {
    errors.name = 'Name is required';
  } else if (name.length > 50) {
    errors.name = 'Name must be 50 characters or less';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
