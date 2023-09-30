import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import TransactionTable from './components/TransactionTable'
import SideBar from './components/SideBar'
import AdminCustomers from './pages/adminCustomers'
import AdminFeedback from './pages/adminFeedback'
import AdminIndex from './pages/adminIndex'
import AdminSales from './pages/adminSales'
import UserIndex from './pages/userIndex'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/transactions" element={<TransactionTable />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/admin/ustomers" element={<AdminCustomers />} />
      <Route path="/admin/feedback" element={<AdminFeedback />} />
      <Route path="/admin/index" element={<AdminIndex />} />
      <Route path="/admin/sales" element={<AdminSales />} />
      <Route path="customer/index" element={<UserIndex />} />
      <Route path="customer/"
    </Routes>
    </BrowserRouter>
  )
}

export default App

