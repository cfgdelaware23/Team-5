import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SignupPage from './pages/SignupPage'
import './App.css'
import TransactionTable from './components/TransactionTable'
// import SideBar from './components/SideBar'
import LoginPage from './pages/LoginPage'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/transactions" element={<TransactionTable />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

