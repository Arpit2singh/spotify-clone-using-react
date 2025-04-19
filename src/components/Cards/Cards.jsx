import React from 'react'


const Cards = ({image, songName , singer ,imageName}) => {
  return (
    <div className='flex items-center justify-evenly  gap-[10px] p-2  '>
      <div id='cards' className='bg-[#282828] h-[220px] w-[200px] flex-shrink-0  justify-center items-start rounded p-[7px] overflow-hidden  ' style={{
     overflow: 'hidden',
    
      }} >

        <div className='h-[150px] w-[185px] bg-amber-100 mt-[10px] rounded '>
          <img src={image} alt={imageName} className='h-full w-full object-cover'/>
        </div>
        <div>
          <h1 className='text-white font-medium truncate'>{songName}</h1>
          <h3 className='text-[#8a8a8a] text-sm truncate'>{singer}</h3>
        </div>
      </div>


    </div>
  )
}

export default Cards