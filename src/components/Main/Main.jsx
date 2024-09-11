import { Outlet } from 'react-router-dom'
import './Main.css'
import React from 'react'

const Main = () => {
  console.log('soy el MAIN y me renderizo')

  return (
    <main>
      <Outlet />
    </main>
  )
}

export default Main
