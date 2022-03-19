import React from 'react'
import Image from 'next/image'
import avatar from '../assets/avatar.JPEG'
import {useTheme} from 'next-themes'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineCloudDownload } from "react-icons/ai";
import { GoLocation } from "react-icons/go";


const Sidebar = () => {
    const {theme,setTheme} = useTheme();
    const changeTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }
    return (
        <div>
            <Image
                className='w-32 h-32 rounded-full mx-auto'
                height="128px"
                width="128px"
                src={avatar}
                alt='anthoni avatar'
            >
            </Image>
            <h3 className='my-4 text-3xl font-bold tracking-wider font-orbitron  '>
                <span className='text-green-500' >Anthoni </span>
                <span className='text-2xl'>Portocarrero Rodriguez</span>
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200  rounded-full'>Web Developer</p>

            <a
                className='px-2 py-1 my-3 bg-gray-200  dark:bg-dark-200 rounded-full flex items-center justify-center'
                href=''
                download='name'
            >
                <AiOutlineCloudDownload className='w-6 h-6' />
                <span className='mx-1'>Download CV</span>
            </a>
            <div className='flex my-5 justify-around text-green-500 md:w-full  '>
                <a href=''> <AiFillGithub className='w-8 h-8' /></a>
                <a href=''> <AiFillLinkedin className='w-8 h-8' /> </a>
                <a href=''> <AiFillInstagram className='w-8 h-8' /></a>
            </div>

            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 '
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex justify-center items-center'>
                    <GoLocation className='w-4 h-4 mx-2' />
                    <span>Lima,Perú</span>
                </div>
                <p className='my-2'>softwaretoni21@gmail.com</p>
                <p className='my-2'>958920823</p>
            </div>

            <button
                onClick={() => window.open('mailto:softwaretoni21@gmail.com')}
                className='focus:outline-none bg-gradient-to-r from-green-400 to-blue-500 w-8/12 rounded-full py-2 px-5 my-2 text-white'>
                Email me
            </button>
            <button onClick={changeTheme} className='bg-gradient-to-r from-green-400 to-blue-500 w-8/12 rounded-full py-2 px-5 text-white'>Toggle theme</button>
        </div>
    )
}

export default Sidebar

