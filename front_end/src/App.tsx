import { useState } from 'react'
import SignupPage from './pages/SignupPage'
import './App.css'
<<<<<<< HEAD
import TransactionTable from './components/TransactionTable'
// import SideBar from './components/SideBar'
=======
import DashboardGrid from './components/DashboardGrid'
import SideBar from './components/SideBar'
import Welcome from './components/Welcome'
>>>>>>> frontend-admin

function App() {

  return (
<<<<<<< HEAD
    <>  
<TransactionTable></TransactionTable>
  </>
=======
    <div className='flex h-full w-full'>
      <SideBar />
      <div className='flex flex-col'>
        <Welcome />
        <DashboardGrid />
      </div>
    </div>
>>>>>>> frontend-admin
  )
}

export default App
