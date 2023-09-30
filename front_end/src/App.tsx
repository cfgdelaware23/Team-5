import { useState } from 'react'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import TransactionTable from './components/TransactionTable'
// import SideBar from './components/SideBar'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/transactions" element={<TransactionTable />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
