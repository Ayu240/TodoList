"use client"
import React, { useState } from 'react'
import From from '@/components/From'
import Header from '@/components/Header'

const page = () => {

  const [mainTask, setMainTask] = useState([])

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2 className='text-2xl text-black font-mono'>No Task Available</h2>

  if (mainTask.length > 0) {

    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h5 className='text-black text-xl font-semibold'>{t.title}</h5>
            <h6 className='text-black text-lg font-medium'>{t.description}</h6>
            <hr />
          </div>

          <button onClick={() => {
            deleteHandler(i)
          }}
            className='bg-black text-white hover:bg-red-500
            font-bold px-4 py-2 rounded '>Delete</button>
        </li>
      );
    })
  }

  return (
    <>
      <div className='bg-gray-100 h-screen'>
        <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Shuhham's Todo List</h1>

        <From mainTask ={mainTask} setMainTask={setMainTask} />

        <div className='p-6'>
          <ul className=''>
            {renderTask}
          </ul>
        </div>
      </div>
    </>
  )
}

export default page
