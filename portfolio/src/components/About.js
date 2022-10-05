import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pd-4 px-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Gianmarco, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p> Currently, I am a 3rd Year Computer Engineering
                            studnet at Toronto Metropolitian University. I 
                            have been putting most of my time into furthering
                            my knowledge of ReactJS to make very functional,
                            UI friendly apps. With my current coding skills,
                            I am looking for a co-op internship regarding either
                            or both front and back end!
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About