import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import TransactionTable from './components/TransactionTable'
// import SideBar from './components/SideBar'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/transactions" element={<TransactionTable />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

