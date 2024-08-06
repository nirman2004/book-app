import React from 'react'
import bg from "../Home/bookbg.svg"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center">
   
      <div className='w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center'><h1 className='lg:text-6xl lg:text-5xl text-3xl font-semibold text-yellow-100 text-center lg:text-left'>Your Literary Adventure Awaits.</h1>
      <p className='mt-4 lg:text-xl text-l lg:text-left text-center text-zinc-300'>Discover a universe of literary treasures where every book holds the promise of a new adventure.</p>
      <div className='lg:mt-8 mt-10 '>
      <Link to = "/all-books" className='text-yellow-100 lg:text-2xl  text-xl font-semibold border border-yellow-100 hover:bg-white hover:text-black px-10 py-3  rounded-full'>Discover Realms</Link>
      </div>
      </div>
      <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center mt-4'>
      <img style={{paddingBottom:"0px"}} src={bg} alt="" />
      </div>
    </div>
  )
}

export default Hero
