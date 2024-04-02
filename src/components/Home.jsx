import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg flex flex-col mx-auto h-full items-center justify-center px-4 md:flex-row'>
        <div className='flex flex-col h-full justify-center'>
          <h2 className='text-4xl sm:text-7xl text-white font-bold'>I'm a Full Stack Developer</h2>
          <p className='text-gray-400 max-w-md py-5 sm:text-xl'>Hi, I'm NAYAAB AKHTAR. I am a passionate and motivated Computer Science graduate with a strong foundation in C++, Java Programming and Web Development. I am eager to leverage my skills and knowledge to contribute to a dynamic team and make a positive impact.</p>
          <div className='flex justify-center sm:justify-normal'>
            <Link to="projects" smooth duration={500} className='group text-white px-6 rounded-lg w-fit py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer text-xl font-semibold'>Projects<span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span></Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className='rounded-2xl w-2/3 mx-auto md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home
