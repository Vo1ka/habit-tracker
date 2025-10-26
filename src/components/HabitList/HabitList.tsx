import { HabitCard } from "./HabitCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getTodayDate } from "../../utils/dateHelpers";
import { removeHabit, toggleHabitCompletion } from "../../store/slices/habitsSlice";


export function HabitList () {

    const {habits, logs} = useAppSelector((state) => state.habits)
    const dispatch = useAppDispatch();

    const isCompletedToday = (habitId: string): boolean => {
        const today = getTodayDate();
        const log = logs.find(
            (log) => log.habitId === habitId && log.date === today
        )

        return log ? log.completed : false
    }

    const handleToggleComplete = (habitId: string) => {
        const today = getTodayDate();
        dispatch(toggleHabitCompletion({habitId, date: today}))
    }

    const handleDelete = (habitId: string) => {
        dispatch(removeHabit(habitId));
    }
    
    return(
         <div className="max-w-2xl mx-auto space-y-4">
            {habits.length === 0 ?
            (
                <p className="text-gray-500 text-center">
                    Пока нет привычек... Добавьте первую!
                </p>
            )
            : (
            <div className="space-y-4">
                {habits.map(habit => (
                    <HabitCard 
                    key={habit.id}
                    habit={habit} 
                    isCompletedToday={isCompletedToday(habit.id)} 
                    onToggleComplete={handleToggleComplete}
                    onDelete={handleDelete} />))
                }
            </div>)
            }
        </div>
    )
}