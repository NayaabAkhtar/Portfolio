import React from 'react'

const Education = () => {
  return (
    <div name="education" className='w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black'>    

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen'>
      <div className='pb-8 mt-12 md:mt-0'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Education</p>
      </div>
      <div>
      <p className='inline text-xl mt-4 font-semibold border-b-2 border-gray-500 text-yellow-300'>Master Of Computer Application</p>
      <div className='flex justify-between text-xl font-semibold mt-2'>
        <p>2023-2025</p>
        <p>Grade: 8.7 CGPA</p>
      </div>
      <li className='font-semibold text-lg mt-3'>
      Currently I'm pursuing my Master's in Computer Applications from MADAN MOHAN MALVIYA UNIVERSITY OF TECHNOLOGY, GORAKHPUR. Here, I,m learning about Data Structures, Web Technologies, Databases, and other core subjects of CS.
      </li>
      </div>
      <br />
      <div>
      <p className='inline text-xl font-semibold mt-3 border-b-2 border-gray-500 text-yellow-300'>Bachelor Of Computer Application</p>
      <div className='flex justify-between text-xl font-semibold mt-2'>
        <p>2019-2022</p>
        <p>Grade: 67.4%</p>
      </div>
      <li className='font-semibold text-lg mt-3'>
        I completed My Bachelor's Degree in Computer Application from J.S UNIVERSITY, SHIKOHABAD. Here, I learned about C, Java programming language, MySQL and Basic of Web Development.
      </li>
      </div>
      <br />
      <div>
      <p className='inline text-xl font-semibold mt-3 border-b-2 border-gray-500 text-yellow-300'>Intermediate</p>
      <div className='flex justify-between text-xl font-semibold mt-2'>
        <p>2019</p>
        <p>Grade: 83%</p>
      </div>
      <li className='font-semibold text-lg mt-3'>
        Did My Intermediate from K.V MANAURI, PRAYAGRAJ.
      </li>
      </div>
      <br />
      <div>
      <p className='inline text-xl font-semibold mt-3 border-b-2 border-gray-500 text-yellow-300'>High School</p>
      <div className='flex justify-between text-xl font-semibold mt-2'>
        <p>2017</p>
        <p>Grade: 89.3%</p>
      </div>
      <li className='font-semibold text-lg mt-3'>
        Did My High School from K.V MANAURI, PRAYAGRAJ.
      </li>
      </div>
    </div>

    </div>
  )
}

export default Education
