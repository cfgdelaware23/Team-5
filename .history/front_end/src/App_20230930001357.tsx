import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SignupPage from './pages/signupPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import TransactionTable from './components/TransactionTable'
<<<<<<< HEAD
// import SideBar from './components/SideBar'

=======
import SideBar from './components/SideBar'
import AdminCustomers from './pages/adminCustomers'
import AdminFeedback from './pages/adminFeedback'
import AdminIndex from './pages/adminIndex'
import AdminSales from './pages/adminSales'
>>>>>>> 5645d4b5791d3488a17b90843594cf581c369e56

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/transactions" element={<TransactionTable />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/admin/Customers" element={<AdminCustomers />} />
      <Route path="/admin/Feedback" element={<AdminFeedback />} />
      <Route path="/admin/Index" element={<AdminIndex />} />
      <Route path="/adminSales" element={<AdminSales />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

