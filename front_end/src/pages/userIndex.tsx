//import { useState } from 'react'
import React from 'react'
import '../App.css'
import DashboardGrid from '../components/DashboardGrid'
import UserSideBar from '../components/UserSideBar'
import Welcome from '../components/Welcome'

function userIndex() {

  return (
    <div className='flex h-full w-full'>
      <UserSideBar />
      <div className='flex flex-col'>
        <Welcome />
        <DashboardGrid />
      </div>
    </div>
  )
}

export default userIndex