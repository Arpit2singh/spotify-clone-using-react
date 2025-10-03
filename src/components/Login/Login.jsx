import React from 'react'
import logo from '../../assets/logo.jpg';
import google from '../../assets/google.png';
import { useContext , useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import Frontui from '../Frontui/Frontui';

const Login = () => {

    const {loginData ,setisLoggedIn , displayName , setdisplayName } = useContext(LoginContext) ;

    console.log(loginData)

    const handleUserpass = (e)=>{
        console.log(e.target.value) ;
        setpass(e.target.value) ;
    }

    const handleUser = (e)=>{
        console.log(e.target.value) ;
        setuser(e.target.value) ;
    }

    const [user, setuser] = useState('') 
    const [pass, setpass] = useState('')

    const AuthHandle =(userName , passValue)=>{
        const person = loginData.find(user => user.email === userName ) 
        const personName = person.name ;
        if(person &&  person.password === passValue){
            console.log("successfully login")
            setdisplayName(personName) ;
            console.log(displayName) ;
            setisLoggedIn(true) ;
        }
        else{
            console.log("failed")
            setisLoggedIn(false) ;
        }
    }

  return (
    <div className='h-screen w-screen bg-[#282828] flex justify-center items-center '>
 
        <div className='h-[500px] w-[450px] bg-[#1c1c1c] rounded-2xl p-4 flex flex-col gap-[20px] ' >

            {/* Logo */}
            <div className='flex justify-center mt-[10px] items-center'> 
                <img src={logo} className='h-[50px] w-[50px] rounded-4xl ' /> 
            </div> 

            {/* Google Sign-in */}
            <div className='mt-[40px] flex justify-center items-center'> 
                <button className='h-[40px] w-[300px] bg-[#282828] text-white font-bold rounded-4xl hover:scale-105 hover:translate-y-1 duration-300 ease-in-out flex justify-center items-center gap-[10px] ' >
                    Sign in With Google 
                    <img src={google} className='h-[20px] w-[20px] rounded-4xl flex justify-center items-center' /> 
                </button> 
            </div>

            <div className='p-[20px] pt-[10px] pb-[0px]'>
                <hr className=' text-[#484848]' />
            </div>

            {/* Hardcoded demo account details */}
            <h1 className='text-white text-center mb-2'>
                Demo Account: Name: Arpit Singh | Email: arpit@example.com | Password: Arpit@123
            </h1>

            {/* Login form */}
            <form onSubmit={(e)=>{
                e.preventDefault() ;
                AuthHandle(user, pass)
            }}>
                <div className='p-[60px] text-white'>
                    <label className='text-sm font-medium p-[5px]'>Username</label>
                    <div>
                        <input onChange={handleUser} value={user} className='h-[40px] w-[300px] bg-[#353535] p-3 rounded-2xl' placeholder='Enter the Email' />
                    </div>

                    <label className='text-sm font-medium p-[5px]'>Password</label>
                    <div>
                        <input onChange={handleUserpass} value={pass} className='h-[40px] w-[300px] bg-[#353535] p-3 rounded-2xl' placeholder='Enter the Password' />
                    </div>

                    <div className='flex justify-center items-center mt-[20px]'> 
                        <button className='h-[45px] w-[250px] font-bold border-0 bg-emerald-500 rounded-2xl'>Login</button> 
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
