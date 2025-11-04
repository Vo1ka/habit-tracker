import { useAppSelector } from "../../store/hooks"
import { calculateCompletionRate, calculateCurrentStreak, calculateLongestStreak, calculateTotalCompletions } from "../../utils/statsHelpers";

interface HabitStatsProps {
    habitId: string,
    habitName: string
}

export function HabitStats ({habitId, habitName}: HabitStatsProps) {

    const logs = useAppSelector((state)=>state.habits.logs);

    const currentStreak = calculateCurrentStreak(habitId, logs);
    const longestStreak = calculateLongestStreak(habitId, logs);
    const percentage = calculateCompletionRate(habitId,logs);
    const totalCompletion = calculateTotalCompletions (habitId, logs);
    return(
       <div className="bg-gray-50 p-4 rounded-lg mt-4 border-t pt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">📊 Статистика</h4>

        <div className="grid grid-cols-2 gap-4">
            <div>
            <p className="text-xs text-gray-500">Текущая серия</p>
            <p className="text-xl font-bold text-blue-600">{currentStreak} дней</p>
            </div>

            <div>
            <p className="text-xs text-gray-500">Лучшая серия</p>
            <p className="text-xl font-bold text-purple-600">{longestStreak} дней</p>
            </div>

            <div>
            <p className="text-xs text-gray-500">Всего выполнений</p>
            <p className="text-xl font-bold text-green-600">{totalCompletion}</p>
            </div>

            <div>
            <p className="text-xs text-gray-500">% Выполнения (7 дней)</p>
            <p className="text-xl font-bold text-orange-600">{percentage}%</p>
            </div>
        </div>
        </div>

    )
}