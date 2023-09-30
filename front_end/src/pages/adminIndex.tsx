// import { useState } from 'react'
import React from 'react'
import '../App.css'
import AdminSideBar from '../components/AdminSideBar'
import Welcome from '../components/Welcome'
import DashboardCard from '../components/DashboardCard'
import DashboardGrid from '../components/DashboardGrid'

function AdminIndex(props) {
  // TODO: display data for quick links
  const resources = [
    {text: 'Website', url:'https://www.wellfare.org/'},
    {text: '', url:''},
    {text: '', url:''},
  ];

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