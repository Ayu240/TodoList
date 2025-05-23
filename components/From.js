"use client"
import React, { useState } from 'react'

const Form = ({ mainTask, setMainTask }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, description }])
    setTitle("")
    setDescription("")
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className='text-2xl text-black border-zinc-800 border-4 m-5 px-4 py-2 '
          placeholder='Enter task here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className='text-2xl text-black border-zinc-800 border-4 m-5 px-4 py-2'
          placeholder='Enter description here'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className='bg-black text-white hover:bg-gray-500 px-4 py-2 text-2xl font-bold rounded m-5'>
          Add Task
        </button>
      </form>
    </>
  )
}

export default Form