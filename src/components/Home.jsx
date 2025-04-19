import React from 'react'
import Cards from './Cards/Cards'
import { useContext ,useState } from 'react'
import {SongContext} from '../context/SongContext'


const Home = () => {




  const {songs , Recentsongs} = useContext(SongContext) ;

  console.log(songs) ;
console.log(Recentsongs) ;




  return (
    <div className='flex g-[5px] justify-between m-[20px]  '>

      <div className='bg-[#222121] h-[80vh] w-[25vw] rounded-2xl flex flex-col gap-[15px] shadow-[inset_-10px_0px_20px_rgba(255,255,255,0.1)] overflow-y-scroll ' >
        <div className='p-4 text-[17px] text-white font-bold flex justify-between  '>Your Library <h1 className='text-2xl flex justify-center items-center font-normal '><div>+</div></h1></div>

        <div className='text-white font-medium flex flex-col gap-[5px] bg-[#353535] rounded-2xl w-[23vw] m-[15px] '>
          <div className='flex flex-col p-4'>
            <h1>Create Your First Playlist</h1>
            <h2>It's easy, we will Help You</h2>
          </div>
          <div className='flex flex-col p-4' >
            <button className='text-black bg-white h-[45px] w-[120px] rounded-4xl active:scale-90 hover:translate-y-1 hover:scale-105 duration-300 ease-in-out' >Create Playlist</button>
          </div>
        </div>

        <div className="text-gray-400 text-[12px] flex flex-wrap gap-3 p-4">
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Safety & Privacy Center</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">About Ads</a>
          <a href="#" className="hover:underline">Accessibility</a>
        </div>

        <div className='ml-[20px]  '>
          <button className='text-white bg-[#222121] border-1 border-white  h-[35px] w-[100px] rounded-4xl active:scale-90 hover:translate-y-1 hover:scale-105 duration-300 ease-in-out' > <span className="text-white text-lg">🌐</span> English</button>
        </div>
      </div>


      <div className='bg-[#222121]  h-[80vh] w-[70vw] rounded-2xl shadow-[inset_-10px_0px_20px_rgba(255,255,255,0.1)] overflow-scroll ' >

        <div className='text-2xl  text-white p-3 font-bold'>Trending Now</div>
        <div className='flex flex-row gap-4 overflow-x-auto p-4 no-scrollbar'>

          {songs.map((item)=>{
              return (
            <Cards 
            key ={item.id}
            singer ={item.singer}
            songName ={item.songName}
            image ={item.image}
            imageName ={item.imageName}
             /> ) ;
          })}
          
        </div>

     

        <div className='text-white text-2xl font-bold p-4 '>Recently Add</div>
       <div className='flex flex-row gap-4 overflow-x-auto p-4 no-scrollbar'>
      
        {Recentsongs.map((item)=>{
          return (
             <Cards 
             key ={item.id}
             singer ={item.singer}
             songName ={item.songName}
             image ={item.image}
             imageName ={item.imageName}
              /> ) ;

        
        })}
          
      </div>
      </div>

     

    </div>
  )
}

export default Home