import { useState } from "react"
import { HabitCategory, type Habit } from "../../types/habit.types"
import { useAppDispatch } from "../../store/hooks"
import { CATEGORY_COLORS } from "../../utils/constants"
import { addHabit } from "../../store/slices/habitsSlice"


export function AddHabitForm () {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState<HabitCategory | ''>('')
    const [error, setError] = useState<string | null>(null)
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if(!name.trim() || !category){
            setError('Заполните все поля')
            return
        }
        const newHabit:Habit = {
                id: Date.now().toString(),
                name,
                description: description || undefined,
                category,
                createdAt: new Date().toISOString(),
                color: CATEGORY_COLORS[category]
            }

        dispatch(addHabit(newHabit))

        setName('');
        setDescription('');
        setCategory('');
        setError(null);
        


    }
    return(

        <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        >
        
        <div className="px-4 py-4">
            <h3>Новая привычка</h3>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Название
            </label>

            <input 
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"  value={name} onChange={(e) => setName(e.target.value)}/>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Описание
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <select name="" id=""
        value={category}
        onChange={(e)=> setCategory(e.target.value as HabitCategory)}
        className="block appearance-none w-full 
        bg-white border border-gray-400 
        hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
            <option value="">Выберите категорию</option>
            <option value={HabitCategory.Health}>Здоровье</option>
            <option value={HabitCategory.Sport}>Спорт</option>
            <option value={HabitCategory.Work}>Работа</option>
            <option value={HabitCategory.Study}>Образование</option>
            <option value={HabitCategory.Personal}>Другая</option>
        </select>
        
        {error ? <p className="text-red-500">{error}</p> : null}
        
        <button className="bg-blue-500 
        hover:bg-blue-700 text-white font-bold py-2 px-4 
        rounded focus:outline-none focus:shadow-outline" 
        type="submit">
            Добавить привычку
        </button>
        </form>
    )
}