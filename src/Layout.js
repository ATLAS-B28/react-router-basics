//the 3 - nav,header,footer are described here
import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Layout = ({search,setSearch}) => {
  return (
    <div className='App'>
      <Header title="React JS Blog By BITES"/>
      <Nav search={search} setSearch={setSearch}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
