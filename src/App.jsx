import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Homepage from './components/homepage/Homepage'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
{/* <Dashboard /> */}
<Outlet />
</div>
  )
}

export default App
