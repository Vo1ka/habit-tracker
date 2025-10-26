import { HabitCategory } from '../types/habit.types';

export const CATEGORY_COLORS: Record<HabitCategory, string> = {
  [HabitCategory.Health]: '#10B981',  
  [HabitCategory.Sport]: '#3B82F6',    
  [HabitCategory.Study]: '#8B5CF6',    
  [HabitCategory.Work]: '#F59E0B',    
  [HabitCategory.Personal]: '#EC4899', 
};

export const CATEGORY_NAMES: Record<HabitCategory, string> = {
  [HabitCategory.Health]: 'Здоровье',
  [HabitCategory.Sport]: 'Спорт',
  [HabitCategory.Study]: 'Учёба',
  [HabitCategory.Work]: 'Работа',
  [HabitCategory.Personal]: 'Личное',
};

export const CATEGORY_ICONS: Record<HabitCategory, string> = {
  [HabitCategory.Health]: '🏥',
  [HabitCategory.Sport]: '💪',
  [HabitCategory.Study]: '📚',
  [HabitCategory.Work]: '💼',
  [HabitCategory.Personal]: '✨',
};
