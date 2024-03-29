import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name ='home' className='w-full h-screen bg-[#373e98]'>
        {/* Middle Screen*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Gianmarco Arena</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am currently a fourth year Computer Engineering student
                at Toronto Metropolitian University. Currently focused 
                on full-stack web apps!
            </p>
            <div>
                <Link to="projects" smooth={true} duration={500} >
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Projects
                        
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-4' />
                        </span>
                    </button>
                </Link> 
            </div>
        </div>
    </div>
  )
}

export default Home