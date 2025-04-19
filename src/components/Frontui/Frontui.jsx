import React, { useContext } from 'react'
import Home from '../Home'
import Header from '../Header'
import { LoginContext } from '../../context/LoginContext'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom' 
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import ContactUs from '../ContactUS/ContactUs'
import Layout from '../Layout/Layout'


const Frontui = () => {

  const {setdisplayName,displayName} = useContext(LoginContext) ;

  
  const router = createBrowserRouter([
    {
      path : "/" ,
      element :  <Layout/>,
      children:[
        {
          path : "/" ,
          element :  <Home/> 
    
        },
        {
          path : "contactus" ,
          element : <ContactUs/>
        },
        {
          path : "Home" ,
          element : <Home/>
        }
      ]
    
      
    }
   
  ]) ;
  
  return (
    <div  className='bg-[#181818] h-[100vh] w-[100vw]' >
   <RouterProvider router={router}/>
    </div>
  )
}

export default Frontui