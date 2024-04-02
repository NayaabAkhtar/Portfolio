import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  const links=[
    {
      id: 1,
      child: (
        <>LinkedIn <FaLinkedin size={30}/></>
      ),
      href: "https://www.linkedin.com/in/nayaabakhtar",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>GitHub <FaGithub size={30}/></>
      ),
      href: "https://github.com/NayaabAkhtar",
    },
    {
      id: 3,
      child: (
        <>Mail <HiOutlineMail size={30}/></>
      ),
      href: "mailto:nayaabakhtar154@gmail.com",
    },
    {
      id: 4,
      child: (
        <>Resume <BsFillPersonLinesFill size={30}/></>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ]
  return (
    <div className='flex flex-col fixed top-[55%] sm:top-[35%] left-0'>
      <ul>
        {links.map(({id,href,child,style,download})=>(
        <li key={id} className={`opacity-80 sm:opacity-100 w-40 h-14 flex justify-between items-center px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
        <a href={href} className='w-full flex justify-between items-center text-white' download={download} target='_blank' rel="noreferrer" >{child}</a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
