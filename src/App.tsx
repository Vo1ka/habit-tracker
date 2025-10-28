import { AddHabitForm } from './components/AddHabitForm/AddHabitForm';
import { HabitList } from './components/HabitList/HabitList';
import './index.css'


function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AddHabitForm />
      <HabitList></HabitList>

    </div>
  );
}

export default App; 