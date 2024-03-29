import React, {useState} from 'react'
import Logo from '../assets/GMLOGO.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#373e98] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" className='w-1/3'/>
        </div>
        
        {/* Menu */}
        
            <ul className='hidden md:flex '>
                <li className='hover:text-gray-500'>
                    <Link to="home" smooth={true} duration={500} >
                    Home
                    </Link>
                </li>
                <li className='hover:text-gray-500'>
                    <Link to="about" smooth={true} duration={500} >
                    About
                    </Link>
                </li>
                <li className='hover:text-gray-500'>
                    <Link to="skills" smooth={true} duration={500} >
                    Skills
                    </Link>
                </li>
                <li className='hover:text-gray-500'>
                    <Link to="projects" smooth={true} duration={500} >
                    Projects
                    </Link>
                </li>
            </ul>
       
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#373e98] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500} >
                Projects
                </Link>
            </li>
        </ul>
        
        {/* Social Menu */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/gianmarco-arena-302b57208/" target="_blank">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/Gxarena" target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=gianmarco88arena@gmail.com" target="_blank">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://drive.google.com/file/d/1g-sxrhbecG-fTlWmDr4ze3ZrmuDsFSkx/view?usp=sharing" target="_blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar