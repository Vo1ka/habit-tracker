import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { HabitCategory, type Habit, type HabitLog } from "../../types/habit.types";


interface HabitsState {
    habits: Habit[];
    logs: HabitLog[];
    loading: boolean;
    error: string | null
}

const initialState: HabitsState ={
    habits: [
        {
        id: '1',
        name: 'Зарядка',
        description: 'Утренняя зарядка 15 минут',
        category: HabitCategory.Sport,
        createdAt: new Date().toISOString(),
        color: '#3B82F6',
        },
        {
        id: '2',
        name: 'Выпить воду',
        description: '2 литра воды в день',
        category: HabitCategory.Health,
        createdAt: new Date().toISOString(),
        color: '#10B981',
        },
        {
        id: '3',
        name: 'Учить Redux',
        category: HabitCategory.Study,
        createdAt: new Date().toISOString(),
        color: '#8B5CF6',
        },
    ],
    logs: [],
    loading: false,
    error: null
}

const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<Habit>) =>{
            state.habits.push(action.payload)
        },

        removeHabit: (state, action: PayloadAction<string>) =>{
            state.habits = state.habits.filter(habit => habit.id !== action.payload);
            state.logs = state.logs.filter(log => log.habitId !== action.payload)
        },

        toggleHabitCompletion: (state, action: PayloadAction<{habitId: string; date: string}>) =>{

            const {habitId, date} = action.payload;
            const existingLog = state.logs.find(log => log.habitId === habitId && log.date === date)

            if(existingLog){
                existingLog.completed = !existingLog.completed
            } else {
                state.logs.push({
                    id: Date.now().toString(),
                    habitId,
                    date,
                    completed: true
                })
            }
        },

        loadFromStorage: (state, action: PayloadAction<{habits: Habit[]; logs: HabitLog[]}>) =>{
            state.habits = action.payload.habits;
            state.logs = action.payload.logs;
        }
    }
})

export const {
    addHabit, 
    removeHabit, 
    toggleHabitCompletion, 
    loadFromStorage
    } = habitSlice.actions;
export default habitSlice.reducer;