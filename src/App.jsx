import { useState } from 'react'
import './App.css'
import { Routes,Route,Outlet } from 'react-router-dom'
import { Sidebar } from './Components/UI/Sidebar'
import { Header } from './Components/UI/Header'
import EnergyDetails from './Views/EnergyDetails'
import Home from './Views/Home'
import SellDashboard from './Views/SellDashboard'
import BuyDashboard from './Views/BuyDashboard'
import AdminHome from './Admin/AdminHome'
import AdminGrid from './Admin/AdminGrid'
function App() {

  return (
    <div className='bg-black flex w-full h-screen'>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home /> } />
          <Route path='/dashboard/buy' element={<BuyDashboard />} />
          <Route path='/dashboard/sell' element={<SellDashboard />} />
          <Route path='/energy' element={<EnergyDetails />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='/admin/' element={<AdminHome />} />
          <Route path='/admin/grid' element={<AdminGrid />} />
        </Route>
      </Routes>
    </div>
  )
}

const Layout = () => {
  return (
    <div className='flex flex-grow'>
      <Sidebar />
      <div className='w-[100%] h-[100dvh] overflow-scroll'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

const AdminLayout = () =>{
  return (
    <div className='flex flex-grow'>
      <Sidebar />
      <div className='w-[100%] h-[100dvh] overflow-scroll'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App
