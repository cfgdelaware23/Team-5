import { useState } from 'react'
import SignupPage from './pages/signupPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
<SignupPage></SignupPage> 
    </>
  )
}

export default App
