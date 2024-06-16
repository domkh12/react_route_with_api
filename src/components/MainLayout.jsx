import React from 'react'
import NavBarComponent from './NavBarComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'

const MainLayout = () => {
  return (
    <>
        <header>
            <NavBarComponent/>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <FooterComponent/>
        </footer>
    </>
  )
}

export default MainLayout
