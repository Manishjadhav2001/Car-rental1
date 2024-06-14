import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'


 function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
export default App