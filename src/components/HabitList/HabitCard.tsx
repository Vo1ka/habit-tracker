import { HabitCategory, type Habit } from "../../types/habit.types";
import { CATEGORY_COLORS, CATEGORY_ICONS, CATEGORY_NAMES } from "../../utils/constants";


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
        <div style={{borderLeftColor: color, borderLeftWidth: '4px'}}
        className={`border rounded-lg p-4 shadow hover:shadow-lg transition ${
            isCompletedToday ? 'bg-green-50 border-green-300' : 'bg-white'}`}
        >
            <div className="flex items-center gap-2">
                <span>{icon}</span>
                <h3 className="text-lg font-semibold">{habit.name}</h3>
            </div>

            <div className="flex items-center gap-2">
                <input 
                    type="checkbox"
                    checked={isCompletedToday}
                    onChange={()=> onToggleComplete(habit.id)}
                    className="w-6 h-6 cursor-pointer"
                />

                <button 
                className="text-red-500 hover:text-red-700 transition" 
                onClick={() => onDelete(habit.id)}
                title="Удалить привычку">
                    X
                </button>

             
            </div>
           <p className="text-sm text-gray-500 mt-1">{name}</p>
            {habit.description && (
                <p className="text-gray-600 mt-2">{habit.description}</p>
            )}   
           
        </div>
    )

}