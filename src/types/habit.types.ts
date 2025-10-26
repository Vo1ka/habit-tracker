//Категория привычек

export enum HabitCategory {
    Health = 'health',
    Sport = 'sport',
    Study = 'study',
    Work = 'work',
    Personal = 'personal'
}

//Привычка

export interface Habit {
    id: string, 
    name: string,
    description?: string,
    category: HabitCategory,
    createdAt: string,
    color: string;
}

export interface HabitLog {
    id: string,
    habitId: string,
    date: string,
    completed: boolean;
}