import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/LoginPage'
import './App.css'

import AdminSideBar from './components/AdminSideBar'
import AdminCustomers from './pages/AdminCustomers'
import AdminIndex from './pages/AdminIndex'
import AdminFeedback from './pages/adminFeedback'
import AdminSales from './pages/adminSales'
import UserIndex from './pages/UserIndex'
import UserProducts from './pages/userProducts'
import SubmitFeedback from './pages/submitFeedback'
import UserUpdate from "./pages/userUpdate"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/submitfeedback" element={<SubmitFeedback />} />
      <Route path="/admin/customers" element={<AdminCustomers />} />
      {<Route path="/admin/feedback" element={<AdminFeedback />} />}
      <Route path="/admin/index" element={<AdminIndex />} />
      <Route path="/admin/sales" element={<AdminSales />} />
      <Route path="customer/products" element={<UserProducts />} />
      <Route path="edit/customer/:id" element={<UserUpdate/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

