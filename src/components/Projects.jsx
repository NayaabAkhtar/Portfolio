import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Projects = () => {
    const project=[
        {
            id: 1,
            src: arrayDestruct,
            dlink: "https://www.linkedin.com",
            clink: "https://www.linkedin.com",
            demo: "Demo",
            code: "Code"   
        },
        {
            id: 2,
            src: reactParallax,
            dlink: "https://www.linkedin.com",
            clink: "https://www.linkedin.com",
            demo: "Demo",
            code: "Code"
        },
        {
            id: 3,
            src: navbar,
            dlink: "https://www.linkedin.com",
            clink: "https://www.linkedin.com", 
            demo: "Demo",
            code: "Code"   
        },
        {
            id: 4,
            src: reactSmooth,
            dlink: "https://www.linkedin.com",
            clink: "https://www.linkedin.com",
            demo: "Demo",
            code: "Code"
        },
        {
            id: 5,
            src: reactWeather,
            dlink: "https://www.linkedin.com",
            clink: "https://www.linkedin.com",
            demo: "Demo",
            code: "Code"
        },
    ]


  return (
    <div name="projects" className='text-white w-full bg-gradient-to-b from-black to-gray-800 md:h-dvh'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-12 md:mt-0'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            project.map(({id,src,demo,code,dlink,clink})=>(
                
                <div key={id} className='shadow-lg shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-lg duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                    <a href={dlink} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer' target='_blank' rel='noreferrer'>{demo}</a>
                    <a href={clink} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer' target='_blank' rel='noreferrer'>{code}</a>
                    </div>
                </div>
            ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default Projects
