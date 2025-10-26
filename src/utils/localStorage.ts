import type { Habit, HabitLog } from "../types/habit.types";


const STORAGE_KEY = 'habit-tracker-data';

interface StorageData {
    habits: Habit[],
    logs: HabitLog[]
}

export const loadFromLocalStorage = (): StorageData | null => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return null;
        return JSON.parse(data)
    } catch(error){
        console.error('Ошибка загрузки из LocalStorage', error)
        return null
    }
}

export const saveToLocalStorage = (data: StorageData): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    } catch (error) {
        console.error("Ошибка сохранения в LocalStorage", error)
    }
}

export const clearLocalStorage = (): void => {
    localStorage.removeItem(STORAGE_KEY)
}