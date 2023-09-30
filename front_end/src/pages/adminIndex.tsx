// import { useState } from 'react'
import '../App.css'
import DashboardGrid from '../components/DashboardGrid'
import SideBar from '../components/AdminSideBar'
import Welcome from '../components/Welcome'

function AdminIndex() {

  return (
    <div className='flex h-full w-full'>
      <SideBar />
      <div className='flex flex-col'>
        <Welcome />
        <DashboardGrid />
      </div>
    </div>
  )
}

export default AdminIndex