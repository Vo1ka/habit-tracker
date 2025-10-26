export const getTodayDate = (): string => {
    return new Date().toISOString().split('T')[0];
}

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
}

export const getDaysAgo = (days: number): string => {
    const date = new Date();
    date.setDate(date.getDate() - days)
    return date.toISOString().split('T')[0]
}

export const isToday = (dateString: string): boolean => {
    return dateString === getTodayDate();
}

//Разница в днях
export const getDaysDifference = (date1: string, date2: string): number => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}