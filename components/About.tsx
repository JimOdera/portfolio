import React from 'react'
import SectionTitle from './SectionTitle'
import { FaStarOfLife } from "react-icons/fa";
import Image from 'next/image';
import { image } from '@/public/assets';

const About = () => {
  return (
    <section id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle titleNo='01' title='About Me' />

        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                    Hello! I am <span className='text-textGreen'>James {"Nyang'oma"}</span>, a dedicated Software Developer with a passion for transforming innovative ideas into powerful digital solutions. 
                    My journey in software development began in 2019, fueled by a fascination with the limitless possibilities of code. 
                    From the outset, I immersed myself in the dynamic world of technology, laying the foundation for what has become an exciting and fulfilling career.
                </p>
                <p>
                    Fast-forward to today, and I am privileged to be a part of the vibrant ecosystem at an advertising agency. 
                    Here, {"I've"} honed my skills in crafting captivating web applications that not only meet but exceed client expectations. 
                    My experience extends across a spectrum of technologies, with a focus on React, Next.js, and PHP. 
                    Whether {"it's"} developing responsive front-end interfaces or architecting robust back-end solutions, 
                    I thrive on the challenge of delivering high-quality, user-centric experiences that make an impact.
                </p>
                <p>
                    Beyond the code, I bring a collaborative spirit and a commitment to continuous learning to every project. 
                    I am excited about the prospect of contributing my skills to a dynamic team, where creativity, innovation, and a shared passion for technology converge. 
                    {"Let's"} connect and explore how my unique blend of expertise and enthusiasm can elevate your {"team's"} projects to new heights.
                </p>

                <p>Here are a few Technologies I Have been working with recently:</p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><FaStarOfLife /></span> Javascipt (ES6+)
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><FaStarOfLife /></span> React
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen/60'><FaStarOfLife /></span> MongoDB
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen/60'><FaStarOfLife /></span> Next.js
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><FaStarOfLife /></span> Tailwind CSS
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen/70'><FaStarOfLife /></span> PHP/(Laravel)
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen/80'><FaStarOfLife /></span> MYSQL
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen/90'><FaStarOfLife /></span> Python/Django
                    </li>
                </ul>
            </div>

            <div className='w-full lgl:w-1/3 h-80 relative group'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-md'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                        <Image className='rounded-md h-full object-cover' src={image} alt='image' />
                        {/* <Image className='rounded-md h-full object-cover transition-transform duration-300 group-hover:saturate-0 saturate-1' src={image} alt='image' /> */}
                        <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                    </div>
                </div>
                <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
            </div>
        </div>
    </section>
  )
}

export default About