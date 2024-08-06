import React, { useState } from 'react'
import logo from "../Navbar/book.png"
import { Link } from 'react-router-dom';

import { VscThreeBars } from "react-icons/vsc"
const Navbar = () => {

  const links=[
    {
    title:"Home",
    link:"/",
    },
   
      {
        title:"Books",
        link:"/all-books",
        },
      {
        title:"Cart",
        link:"/cart",
        },
        {
          title:"Profile",
          link:"/profile"
        },

];
    const[Mobilenavbar,setMobilenavbar]= useState("hidden")
  return (<>
    <nav style={{height:"60px"}} className='flex z-50 relative bg-zinc-900 text-white px-8  py-3 items-center  justify-between'>
      <Link to ="/" className='flex items-center'>
      <img className='h-10 me-4' src={logo} alt="logo" />
      <h1 className='text-2xl font-semibold'>BookStore</h1></Link>
      <div className='nav-links-book block md:flex items-center gap-4'>
        <div className='hidden md:flex gap-4'>
        {links.map((items,i)=><Link to={items.link} className='hover:text-blue-500 ' key={i}>{items.title}{" "} </Link>)}
        </div>
        <div className='hidden md:flex gap-4'>
          <Link to ="/Login" className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>SignIn</Link>
          <Link to ="/Signup" className='px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>SignUp</Link>
        </div>
        <button className='text-3xl md:hidden block ' onClick={()=>Mobilenavbar=== "hidden" ? setMobilenavbar("block") : setMobilenavbar("hidden")}>< VscThreeBars /></button>
      </div>
    </nav>
    <div className={` ${Mobilenavbar} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>{links.map((items,i)=><Link to={items.link} className='hover:text-blue-500 text-white text-4xl mb-8 font-semibond ' key={i} onClick={()=>Mobilenavbar=== "hidden" ? setMobilenavbar("block") : setMobilenavbar("hidden")}>{items.title}{" "} </Link>)}
    
    <Link to ="/Login" className={` ${Mobilenavbar} px-8 text-3xl font-semibold mb-8 py-2 border border-blue-500 rounded hover:bg-white hover:bg-white hover:text-zinc-800 transition-all duration-300 text-white`}>SignIn</Link>
    <Link to ="/Signup" className={`${Mobilenavbar} px-8 text-3xl font-semibold mb-8 py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}>SignUp</Link>
       

    </div>
    </>
  )
}

export default Navbar
