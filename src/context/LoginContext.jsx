import { createContext ,useContext } from "react";
import React from "react";
import { useState } from "react";

const loginData = [
    {
      "id": 1,
      "name": "Arpit Singh",
      "email": "arpit@example.com",
      "password": "Arpit@123"
    },
    {
      "id": 2,
      "name": "Priya Sharma",
      "email": "priya.sharma@example.com",
      "password": "Priya@456"
    },
    {
      "id": 3,
      "name": "Rohan Mehta",
      "email": "rohan.mehta@example.com",
      "password": "Rohan@789"
    },
    {
      "id": 4,
      "name": "Sneha Roy",
      "email": "sneha.roy@example.com",
      "password": "Sneha@321"
    },
    {
      "id": 5,
      "name": "Aman Verma",
      "email": "aman.verma@example.com",
      "password": "Aman@654"
    }
  ]

  const LoginContext = createContext() ;

  const LoginContextProvider =(props)=>{ 
      const [displayName, setdisplayName] = useState() ;
    const [isLoggedIn, setisLoggedIn] = useState(false)
  return  <LoginContext.Provider value={{loginData , setisLoggedIn , isLoggedIn , setdisplayName , displayName}}>{props.children}</LoginContext.Provider>

  }
  export {LoginContextProvider ,LoginContext}