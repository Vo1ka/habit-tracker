import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { saveToLocalStorage } from './utils/localStorage.ts'

store.subscribe(()=>{
  const state = store.getState();
  saveToLocalStorage({
    habits: state.habits.habits,
    logs: state.habits.logs
  })
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
