import React from "react";
import { createContext,useContext } from "react";

const songs = [
    {
      id: 1,
      singer: "Arijit Singh",
      songName: "Tum Hi Ho",
      image: "https://via.placeholder.com/150?text=Tum+Hi+Ho",
      imageName: "Tum Hi Ho Cover"
    },
    {
      id: 2,
      singer: "Shreya Ghoshal",
      songName: "Sun Raha Hai",
      image: "https://via.placeholder.com/150?text=Sun+Raha+Hai",
      imageName: "Sun Raha Hai Cover"
    },
    {
      id: 3,
      singer: "KK",
      songName: "Zara Sa",
      image: "https://via.placeholder.com/150?text=Zara+Sa",
      imageName: "Zara Sa Cover"
    },
    {
      id: 4,
      singer: "Jubin Nautiyal",
      songName: "Lut Gaye",
      image: "https://via.placeholder.com/150?text=Lut+Gaye",
      imageName: "Lut Gaye Cover"
    },
    {
      id: 5,
      singer: "Neha Kakkar",
      songName: "Dilbar",
      image: "https://via.placeholder.com/150?text=Dilbar",
      imageName: "Dilbar Cover"
    }
  ];
  const Recentsongs = [
    {
      id: 1,
      singer: "Raghav Chaitanya",
      songName: "Tere Hawale",
      image: "https://via.placeholder.com/150?text=Tere+Hawale",
      imageName: "Tere Hawale Cover"
    },
    {
      id: 2,
      singer: "Arijit Singh",
      songName: "O Maahi",
      image: "https://via.placeholder.com/150?text=O+Maahi",
      imageName: "O Maahi Cover"
    },
    {
      id: 3,
      singer: "Shreya Ghoshal",
      songName: "Jee Ve Sohaneya",
      image: "https://via.placeholder.com/150?text=Jee+Ve+Sohaneya",
      imageName: "Jee Ve Sohaneya Cover"
    },
    {
      id: 4,
      singer: "Vishal Mishra",
      songName: "Pehle Bhi Main",
      image: "https://via.placeholder.com/150?text=Pehle+Bhi+Main",
      imageName: "Pehle Bhi Main Cover"
    },
    {
      id: 5,
      singer: "Diljit Dosanjh",
      songName: "Naina",
      image: "https://via.placeholder.com/150?text=Naina",
      imageName: "Naina Cover"
    }
  ];
  
  



 const SongContext = React.createContext() ;



const  SongContextProvider = (props)=>{ 
    return <SongContext.Provider value={{songs , Recentsongs}} >{props.children}</SongContext.Provider>

} ;

export {SongContext ,SongContextProvider}