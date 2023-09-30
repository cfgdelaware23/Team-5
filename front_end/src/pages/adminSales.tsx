// import { useState } from 'react'
import '../App.css'
import DashboardGrid from '../components/DashboardGrid'
import AdminSideBar from '../components/AdminSideBar'
import Welcome from '../components/Welcome'

function adminSales() {
  return (
    <div className='flex h-full w-full'>
      <AdminSideBar />
      <div className='flex flex-col'>
        <Welcome />
      </div>
    </div>
  )
}

export default adminSales;