import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { cover, phpblog } from '@/public/assets'
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:py-32 lgl:px-20 py-24'>
        <SectionTitle titleNo='03' title='Some Things I have Built' />

        {/* Projects */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group'>
                    <div>
                        <Image src={phpblog} alt='phpblog' className='w-full h-full object-contain' />
                    </div>
                </a>

                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                        Featured Project
                    </p>
                    <h3 className='text-2xl font-bold'>PHP Blog App</h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                        A PHP Blog Application to enable user Publish their blog Posts.
                        Users are able to create accounts and view other blog posts on login.
                        Users can also delete and edit blog posts.
                        A PHP Blog Application to enable user Publish their blog Posts.
                        Users are able to create accounts and view other blog posts on login.
                        <span className='text-textGreen'>Users </span>.
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>MYSQL</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                    <div className='text-2xl flex gap-4'>
                        <a href='https://github.com/JimOdera/php-blog' target='_blank' className='hover:text-textGreen duration-300'><FiGithub /></a>
                        {/* <a className='hover:text-textGreen duration-300'><FaExternalLinkAlt /></a> */}
                    </div>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group'>
                    <div>
                        <Image src={cover} alt='cover' className='w-full h-full object-contain' />
                    </div>
                </a>

                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left xl:-mr-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                        Featured Project
                    </p>
                    <h3 className='text-2xl font-bold'>Akan Name Generator</h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                        The <span className='text-textGreen'>Akan Name Calculator</span> is a simple web application that calculates your Akan name based on your <span className='text-textGreen'>birthday and gender</span>. 
                        Akan names are traditional names used by the Akan people in Ghana and the Ivory Coast. 
                        These names are often associated with the day of the week on which an individual is born.
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        {/* <li>PHP</li> */}
                        <li>HTML</li>
                        {/* <li>MYSQL</li> */}
                        <li>Tailwind CSS</li>
                        <li>Javascript</li>
                    </ul>
                    <div className='text-2xl flex gap-4'>
                        <a href='https://github.com/JimOdera/akanNameGenerator' target='_blank' className='hover:text-textGreen duration-300'><FiGithub /></a>
                        <a href='https://jimodera.github.io/akanNameGenerator/' target='_blank' className='hover:text-textGreen duration-300'><FaExternalLinkAlt /></a>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col xl:flex-row gap-6'>
                <a className='w-full xl:w-1/2 h-auto relative group'>
                    <div>
                        <Image src={phpblog} alt='phpblog' className='w-full h-full object-contain' />
                    </div>
                </a>

                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                        Featured Project
                    </p>
                    <h3 className='text-2xl font-bold'>Airbnb Clone</h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                        A PHP Blog Application to enable user Publish their blog Posts.
                        Users are able to create accounts and view other blog posts on login.
                        Users can also delete and edit blog posts.
                        A PHP Blog Application to enable user Publish their blog Posts.
                        Users are able to create accounts and view other blog posts on login.
                        <span className='text-textGreen'>Users </span>.
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>MYSQL</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                    <div className='text-2xl flex gap-4'>
                        <a className='hover:text-textGreen duration-300'><FiGithub /></a>
                        <a className='hover:text-textGreen duration-300'><FaExternalLinkAlt /></a>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Projects