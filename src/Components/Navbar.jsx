import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
<nav className='w-full h-[10vh] bg-[#F8EDE8]  flex justify-center items-center gap-[6vw] text-xl font-light relative'>
<Link className=' hover:bg-black hover:text-white ease-in-out transition duration-500 px-6 py-2 rounded-full ' to='/'>Home</Link>
   <Link className='hover:bg-black hover:text-white ease-in-out transition duration-500 px-6 py-2 rounded-full '  to='about'>About</Link>
   <Link className='hover:bg-black hover:text-white ease-in-out transition duration-500 px-6 py-2 rounded-full '  to='contact'>Contact</Link>
</nav>
   </>
  )
}

export default Navbar