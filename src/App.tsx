import { useEffect } from 'react';
import { AddHabitForm } from './components/AddHabitForm/AddHabitForm';
import { HabitList } from './components/HabitList/HabitList';
import './index.css'
import { loadFromLocalStorage } from './utils/localStorage';
import { useAppDispatch } from './store/hooks';
import { loadFromStorage } from './store/slices/habitsSlice';


function App() {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    const response = loadFromLocalStorage();
    if (response){
      dispatch(loadFromStorage(response))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AddHabitForm />
      <HabitList></HabitList>

    </div>
  );
}

export default App; 