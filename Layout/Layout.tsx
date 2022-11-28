import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'

const Layout = ({children}: any) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout