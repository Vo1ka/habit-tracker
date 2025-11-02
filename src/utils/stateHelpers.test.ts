import { describe, it, expect } from 'vitest';
import {
  calculateCurrentStreak,
  calculateLongestStreak,
  calculateCompletionRate,
  calculateTotalCompletions,
} from './statsHelpers';
import type { HabitLog } from '../types/habit.types';
import { getDaysAgo, getTodayDate } from './dateHelpers';

describe('statsHelpers', () => {
  // Тестовые данные

  const today = getTodayDate();
  const yesterday = getDaysAgo(1);
  const twoDaysAgo = getDaysAgo(2)
  const mockLogs: HabitLog[] = [
    {
    id: '1',
    habitId: 'habit-1',
    date: today,
    completed: true,
    },
    {
        id: '2',
        habitId: 'habit-1',
        date: yesterday,
        completed: true,
    },
    {
        id: '3',
        habitId: 'habit-1',
        date: twoDaysAgo,
        completed: false,  // Пропущен
    },
  ];

  describe('calculateCurrentStreak', () => {
    it('должен вернуть 0 если нет логов', () => {
      const result = calculateCurrentStreak('habit-1',[]);
      expect(result).toBe(0)
    });

    it('должен вернуть 1 если выполнено только сегодня', () => {
      const logs:HabitLog[] = [
        {
            id: '1',
            habitId: 'habit-1',
            date: getTodayDate(),
            completed: true
        }
      ]
      const result = calculateCurrentStreak('habit-1', logs);
      expect(result).toBe(1);
    });

    it('должен посчитать серию из нескольких дней', () => {
      const logs: HabitLog[] = mockLogs
      const result = calculateCurrentStreak('habit-1', logs)
      expect(result).toBe(3);
    });

    it('должен остановиться на пропущенном дне', () => {
      // TODO: Напиши тест
    });
  });

  describe('calculateLongestStreak', () => {
    // TODO: Тесты для longest streak
  });

  describe('calculateCompletionRate', () => {
    // TODO: Тесты для completion rate
  });

  describe('calculateTotalCompletions', () => {
    // TODO: Тесты для total completions
  });
});