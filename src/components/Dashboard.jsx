import React from 'react'
import TaskList from './TaskList'

function Dashboard() {

    const username = localStorage.getItem('username') || "Guest";
  return (
    <div className='p-4 big-gray-100 min-h-screen'>
        <h2 className='text-xl font-semibold mb-4'>
            welcome, <span className='text-purple-600'> {username}</span>
        </h2>
        <TaskList/>
    </div>
  )
}

export default Dashboard