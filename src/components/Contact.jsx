import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      
     <div className='flex flex-col justify-center p-4 max-w-screen-lg h-screen mx-auto'>
        <div className='pb-8'>
            <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</p>
            <p className='py-6'>Submit the form below to get touch in with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/jawxqvob" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="text" name="email" placeholder='Enter Your E-mail' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name="message" placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                <button className='text-white font-bold rounded-lg bg-gradient-to-b from-cyan-400 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300'>Let's Talk</button>
            </form>
        </div>
     </div>

    </div>
  )
}

export default Contact
