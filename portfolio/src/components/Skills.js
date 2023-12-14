import React from 'react'
import C from '../assets/C_Logo.png'
import GitHub from '../assets/github.png'
import JavaScript from '../assets/javascript.png'
import Python from '../assets/Python-logo-notext.png'
import ReactIMG from '../assets/react.png'
import TailwindCSS from '../assets/TailwindCSS.png'
import TypeScript from '../assets/TypeScript.png'
import Java from '../assets/Java.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#373e98] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the languages I've learened</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={C} alt="C Logo" />
                    <p className='my-4'> C </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={Java} alt="Java Logo" />
                    <p className='my-4'> Java </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={JavaScript} alt="JavaScript Logo" />
                    <p className='my-4'> JavaScript </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={Python} alt="Python Logo" />
                    <p className='my-4'> Python </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={ReactIMG} alt="React Logo" />
                    <p className='my-4'> React </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={TailwindCSS} alt="TailwindCSS Logo" />
                    <p className='my-4'> Tailwind CSS </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={TypeScript} alt="TypeScript Logo" />
                    <p className='my-4'> TypeScript </p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={GitHub} alt="GitHub Logo" />
                    <p className='my-4'> GitHub </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills