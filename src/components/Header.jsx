import React, { useContext } from 'react'
import logo from '../assets/logo.png';
import { useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import ContactUs from './ContactUS/ContactUs';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  const {setisLoggedIn} = useContext(LoginContext) ;
  const [value, setvalue] = useState('') ;
  console.log(props) ;
  const inputHandler = (e) =>{
    e.preventDefault() ;

    console.log(e.target.value) ;
     setvalue(e.target.value) ;

  }

  const HandleLogOut = (e)=>{
e.preventDefault() ;
setisLoggedIn(false) ;

  }



  return (
    <div className='bg-[#181818] h-[70px] w-full text-[#d4cfcf] font-bold text-[15px] gap-[10px] flex justify-evenly items-center p-2'>
      
      <div className='m-[15px] flex flex-shrink-0'>
        <img 
          className='rounded-4xl size-[50px] border-none hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out' 
          src={logo} 
          alt="logo" 
        />
      </div>

      <div className='m-[15px] hover:-translate-y-1 hover:scale-110 hover:text-white transition duration-300 ease-in-out'>
  
      <NavLink className={(e)=>{ return e.isActive ? 'text-green-500' : "text-gray-400" }} to="/Home" >Home</NavLink>

      </div>

      <div className='bg-[#242323] h-[45px] w-[380px] rounded-4xl flex justify-between  ' >
        <input onChange={inputHandler} 
          value={value}
          className='bg-[#242323] h-[45px] w-[380px] p-4 hover:-translate-y-1 hover:scale-110 hover:text-white rounded-4xl placeholder:text-[#696969] placeholder:font-extrabold placeholder:text-center placeholder:p-2 transition duration-300 ease-in-out' 
          placeholder='What do you want to Play ?     🔍' 
        /> 
      </div>

      <div className='flex justify-evenly w-[300px]'>
        <span className='hover:-translate-y-1 hover:scale-110 hover:text-white transition duration-300 ease-in-out'>Premium</span>
        <span className='hover:-translate-y-1 hover:scale-110 hover:text-white transition duration-300 ease-in-out'>Support</span>
        <span className='hover:-translate-y-1 hover:scale-110 hover:text-white transition duration-300 ease-in-out'>Download</span>
      </div>

      <div className='m-[15px] text-2xl'>|</div>

      {props.name? 
      <div  className='m-[15px] hover:-translate-y-1 hover:scale-110 hover:text-white transition duration-300 ease-in-out'>
       
       <NavLink className={(e)=>{ return e.isActive ? "text-green-300" : "text-gray-500" }} to="/contactus" >Contact us </NavLink>

      </div> :  <div className='m-[15px] hover:-translate-y-1 hover:scale-110 hover:text-white transition duration-300 ease-in-out'>
        
        Install App
        </div> }

      <div className=' text-[#cbf79f] text-xl m-[15px] hover:-translate-y-1 hover:scale-110 hover:text-white transition duration-300 ease-in-out'>
     
      {props.name? "hey, "+ props.name : "Sign Up"}
  
      </div>
      
      {props.name?   <div onClick={HandleLogOut} className='m-[15px] hover:-translate-y-1 hover:scale-110 hover:text-white bg-red-400 text-black h-[40px] w-[100px] p-2 text-center border-none rounded-4xl transition duration-300 ease-in-out'>
     Log Out
     </div>  :   <div className='m-[15px] hover:-translate-y-1 hover:scale-110 hover:text-white bg-white text-black h-[40px] w-[100px] p-2 text-center border-none rounded-4xl transition duration-300 ease-in-out'>
    Login 
     </div>}
     

    </div>
  )
}

export default Header
