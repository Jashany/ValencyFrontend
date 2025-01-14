import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Sidebar } from './Components/UI/Sidebar'
import { Header } from './Components/UI/Header'
function App() {

  return (
    <div className='bg-black flex w-full h-screen'>
        <Sidebar />
        <div className='w-[85%]'>
         <Header />
        </div>
    </div>
  )
}

export default App
