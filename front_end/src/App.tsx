import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import TransactionTable from './components/TransactionTable'
// import SideBar from './components/SideBar'

import SideBar from './components/SideBar'
import AdminCustomers from './pages/AdminCustomers'
import AdminFeedback from './pages/AdminFeedback'
import AdminIndex from './pages/AdminIndex'
import AdminSales from './pages/AdminSales'
import UserIndex from './pages/UserIndex'
import UserProducts from './pages/UserProducts'

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
      <Route path="customer/products" element={<UserProducts />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

