// import { useState } from 'react'
import '../App.css'
import DashboardGrid from '../components/DashboardGrid'
<<<<<<< HEAD
import AdminSideBar from '../components/AdminSideBar'
=======
import SideBar from '../components/AdminSideBar'
>>>>>>> addd0a9ef60814174a3e7787a482240fdbbde70d
import Welcome from '../components/Welcome'

function AdminIndex() {

  return (
    <div className='flex h-full w-full'>
      <AdminSideBar />
      <div className='flex flex-col'>
        <Welcome />
        <DashboardGrid />
      </div>
    </div>
  )
}

export default AdminIndex