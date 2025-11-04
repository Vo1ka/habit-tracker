import { HabitCategory, type Habit } from "../../types/habit.types";
import { CATEGORY_COLORS, CATEGORY_ICONS, CATEGORY_NAMES } from "../../utils/constants";
import { HabitStats } from "../HabitStats/HabitStats";
import './../../index.css'

interface HabitCardProps {
    habit: Habit, 
    isCompletedToday: boolean;
    onToggleComplete: (habitId: string) => void;
    onDelete: (habitId: string) => void;
}

export function HabitCard ({
    habit, 
    isCompletedToday,
    onDelete, 
    onToggleComplete
}:HabitCardProps) {

    const color = CATEGORY_COLORS[habit.category];
    const name = CATEGORY_NAMES[habit.category];
    const icon = CATEGORY_ICONS[habit.category];


    return(
        <div
      style={{ borderLeftColor: color, borderLeftWidth: '4px' }}
      className={`border rounded-lg p-4 shadow hover:shadow-lg transition ${
        isCompletedToday ? 'bg-green-50 border-green-300' : 'bg-white'
      }`}
    >
      {/* Верхняя строка: иконка + название | чекбокс + удалить */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold">{habit.name}</h3>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={isCompletedToday}
            onChange={() => onToggleComplete(habit.id)}
            className="w-6 h-6 cursor-pointer"
          />

          <button
            className="text-red-500 hover:text-red-700 transition text-xl"
            onClick={() => onDelete(habit.id)}
            title="Удалить привычку"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Категория */}
      <p className="text-sm text-gray-500 mt-2">{name}</p>

      {/* Описание (если есть) */}
      {habit.description && (
        <p className="text-gray-600 mt-2 text-sm">{habit.description}</p>
      )}

      {/* ✅ Статистика (в конце) */}
      <HabitStats habitId={habit.id} habitName={habit.name} />
    </div>
  );

}