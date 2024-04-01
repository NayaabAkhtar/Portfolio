import React from 'react'
import cpp from '../assets/c++.png'
import java from '../assets/java.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import next from '../assets/nextjs.png'
import node from '../assets/node.png'
import github from '../assets/github.png'
import mongodb from '../assets/mongodb.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {
  const techs=[
    {
      id: 1,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500"
    },
    {
      id: 2,
      src: java,
      title: "Java",
      style: "shadow-orange-500"
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-red-400"
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-cyan-500"
    },
    {
      id: 5,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500"
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400"
    },
    {
      id: 7,
      src: next,
      title: "Next Js",
      style: "shadow-white"
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-500"
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-white"
    },
    {
      id: 10,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-600"
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500"
    },
  ]
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen '>
      
      <div className='max-w-screen-lg text-white mx-auto p-4 w-full h-full flex flex-col justify-center'>
        <div className='mt-12 md:mt-0'>
          <p className='text-4xl border-b-4 border-gray-500 font-bold inline p-2'>Skills</p>
          <p className='py-6'>These are the Technologies I've worked with-</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({id,src,title,style})=>(
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
          </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills
