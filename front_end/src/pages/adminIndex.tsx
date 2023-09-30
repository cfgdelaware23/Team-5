// import { useState } from 'react'
import '../App.css'
import AdminSideBar from '../components/AdminSideBar'
import Welcome from '../components/Welcome'
import DashboardCard from '../components/DashboardCard'

function AdminIndex() {
  return (
    <div className='flex h-full w-full'>
      <AdminSideBar />
      <div className='flex flex-col'>
        <Welcome />
        {/* <DashboardGrid /> */}
        <DashboardCard header='Resources' data='' />
      </div>
    </div>
  )
}

export default AdminIndex