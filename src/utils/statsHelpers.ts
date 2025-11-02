import type { HabitLog } from "../types/habit.types";
import { getDaysAgo, getDaysDifference, getTodayDate } from "./dateHelpers";


export const calculateCurrentStreak = (
    habitId: string, 
    logs: HabitLog[]
): number => {

    const habitLogs = logs.filter(log => log.habitId === habitId);
    const logsMap = new Map<string, boolean>();
    habitLogs.forEach(log => {
        logsMap.set(log.date, log.completed);
    });

    const today = getTodayDate();
    const todayCompleted = logsMap.get(today) === true;
    let streak = todayCompleted ? 1 : 0;

    for(let i = 0; i < 365; i++){
        const dateToCheck = getDaysAgo(i);
        if(logsMap.get(dateToCheck) === true){
            streak++;
             
        } else {
            break
        }

    }

    return streak;
}

export const calculateLongestStreak = (
    habitId: string, 
    logs: HabitLog[]
): number => {

    const habitLogs = logs.filter((log) => log.habitId === habitId);
    
    const completedLogs = habitLogs.filter(log => log.completed)

    const sortedLogs = completedLogs.sort((a,b) => a.date.localeCompare(b.date));

    let currentStreak = 0;
    let longestStreak = 0;
    let previousDate: string | null = null;

    for(const log of sortedLogs){
        if (previousDate === null){
            currentStreak = 1;
        } else {
            const dayDiff = getDaysDifference(previousDate, log.date);
            if(dayDiff === 1){
                currentStreak++
            } else {
                longestStreak = Math.max(longestStreak, currentStreak);
                currentStreak = 1;
            }
        }
        previousDate = log.date
    }

    longestStreak = Math.max(longestStreak,currentStreak)

    return longestStreak;
}

export const calculateCompletionRate = (
    habitId: string,
    logs: HabitLog[],
    days:number = 7
): number => {
    const today = getTodayDate();
    const startDate = getDaysAgo(days - 1);

    const relevantLogs = logs.filter((log) => {
        return (
            log.habitId === habitId &&
            log.date >= startDate &&
            log.date <= today
        )
    })

    const completedDays = relevantLogs.filter(log => log.completed).length;
    const percentage = days > 0 ? (completedDays / days) * 100 : 0;
    
    return Math.round(percentage)
}

export const calculateTotalCompletions = (
    habitId: string,
    logs: HabitLog[],
): number => {
    const habitLogs = logs.filter(log => log.habitId === habitId && log.completed)
    return habitLogs.length
}