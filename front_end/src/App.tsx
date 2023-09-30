import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SignupPage from './pages/SignupPage'
import './App.css'
<<<<<<< HEAD
import TransactionTable from './components/TransactionTable'
// import SideBar from './components/SideBar'
<<<<<<< HEAD
=======
import DashboardGrid from './components/DashboardGrid'
import SideBar from './components/SideBar'
import Welcome from './components/Welcome'
>>>>>>> frontend-admin
=======
import LoginPage from './pages/LoginPage'

>>>>>>> ccdaf5d097fe1eb9a577684d6bf721deb47a0464

function App() {

  return (
<<<<<<< HEAD
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
=======
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/transactions" element={<TransactionTable />} />
    </Routes>
    </BrowserRouter>
>>>>>>> ccdaf5d097fe1eb9a577684d6bf721deb47a0464
  )
}

export default App

