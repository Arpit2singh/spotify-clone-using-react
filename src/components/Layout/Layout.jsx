import { RouterProvider , createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Footer";
import React, { useContext } from 'react'
import { LoginContext } from "../../context/LoginContext";

const Layout = () => {

    const {displayName} = useContext(LoginContext)
  return (
    <div>
<Header name={displayName} />
<Outlet/>
<Footer/>

    </div>
  )
}

export default Layout