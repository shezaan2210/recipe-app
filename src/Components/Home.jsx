import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='w-full h-screen bg-white p-8'>
      <Link className='bg-green-400 px-10 rounded-xl py-4 mx-auto text-lg font-light' to='/create'>Create Recipe</Link>
    </div>
    <div className='w-full h-screen bg-red-300  px-[3vw]'>

     <div className="flex justify-between items-center h-[50vh]">
     <div className="box w-[30vw] h-[40vh] bg-white rounded-3xl">
      <img src="" alt="" />
     </div>
      <div className="box w-[30vw] h-[40vh] bg-white rounded-3xl"></div>
      <div className="box w-[30vw] h-[40vh] bg-white rounded-3xl"></div>
     </div>

   <div className="flex justify-between items-center h-[50vh]">
   <div className="box w-[30vw] h-[40vh] bg-white rounded-3xl"></div>
      <div className="box w-[30vw] h-[40vh] bg-white rounded-3xl"></div>
      <div className="box w-[30vw] h-[40vh] bg-white rounded-3xl"></div>
   </div>

  

    </div>
    </>
  )
}

export default Home