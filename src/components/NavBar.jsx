import React, { useState } from 'react'
import { FaBars,FaTimes } from "react-icons/fa"
import {Link} from "react-scroll"

const NavBar = () => {
    const [Nav, setNav] = useState(false)
    const links=[
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "education",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "skills",
        },
        {
            id: 5,
            link: "contact",
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
       <div>
        <h1 className='text-5xl font-signature ml-2'>Nayaab</h1>
       </div>
       <ul className='hidden md:flex'>
        {links.map(({id,link})=>(
            <li key={id} className='px-4 cursor-pointer capitalize text-gray-400 font-medium hover:scale-105 duration-200'>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
        ))}
       </ul>
       
       <div onClick={()=>setNav(!Nav)} className='pr-4 cursor-pointer z-10 text-gray-400 md:hidden'>
       {Nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
       </div>
       {Nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
       {links.map(({id,link})=>(
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                <Link onClick={()=>setNav(!Nav)} to={link} smooth duration={500}>{link}</Link>
                </li>
        ))}
       </ul>}
       
    </div>
  )
}

export default NavBar
 