// import { useState } from 'react'
import React from 'react'
import '../App.css'
import AdminSideBar from '../components/AdminSideBar'
import Welcome from '../components/Welcome'
import DashboardCard from '../components/DashboardCard'
import DashboardGrid from '../components/DashboardGrid'

function AdminIndex() {


  return (
    <div className='flex h-full w-full justify-left align-middle'>
      <AdminSideBar />
      <div>
        <Welcome name={name} />
        <div className='mx-8'>
          <DashboardCard
            header='User Information' data=''
          />
        </div>
      </div>
    </div>
  )
}

export default AdminIndex