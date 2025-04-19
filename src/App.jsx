import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import {SongContextProvider} from './context/SongContext'
import { LoginContextProvider } from './context/LoginContext'
import './App.css'
import Login from './components/Login/Login'
import { LoginContext } from './context/LoginContext'
import { useContext } from 'react' 
import Frontui from './components/Frontui/Frontui'





const AppContent = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <>
      {isLoggedIn ? <Frontui props /> : <Login />}
    </>
  );
}

const App = () => {


  return (
    <div className='bg-[#181818] h-[100vh] w-[100vw]'>
      <LoginContextProvider>
        <SongContextProvider>
         <AppContent/>
        </SongContextProvider> 
      </LoginContextProvider>
    </div>
  );
}

export default App;