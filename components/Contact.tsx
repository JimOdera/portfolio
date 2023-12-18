import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
        <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
            <span>04.</span> {"What's"} Next
        </p>
        <h2 className='font-titleFont text-5xl font-semibold'>
            Get In Touch
        </h2>
        <p className='max-w-[600px] text-center text-textDark'>
            My Inbox is always open for questions and getting to know me and also 
            available for any opportunity available.
        </p>
        <a href="mailto:james.nyangoma4@gmail.com">
            <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
                Say Hello!
            </button>
        </a>
        {/* bottom form */}
        <div className='mt-10 md:gap-10 flex flex-col md:flex-row md:items-center justify-between font-titleFont'>
            <div className='mb-3 md:mb-0 flex gap-3 items-center'>
                <span className='flex justify-center items-center border border-textGreen hover:bg-hoverColor rounded-full p-7 duration-300'>
                    <FaPhone />
                </span>
                <p className='text-center md:text-left'>+254 701 740229</p>
            </div>
            <div className='mb-3 md:mb-0 flex gap-3 items-center'>
                <span className='flex justify-center items-center border border-textGreen hover:bg-hoverColor rounded-full p-7 duration-300'>
                    <SiGmail />
                </span>
                <p className='text-center md:text-left'>james.nyangoma4@gmail.com</p>
            </div>
            <div className='flex gap-3 items-center'>
                <a href="https://wa.me/+254701740229" target="_blank" rel="noopener noreferrer">
                <span className='flex justify-center items-center border border-textGreen hover:bg-hoverColor rounded-full p-7 duration-300'>
                    <BsWhatsapp />
                </span>
                </a>

                <a href="https://www.linkedin.com/in/james-nyang%E2%80%99oma-08b02528b/" target="_blank" rel="noopener noreferrer">
                    <span className='flex justify-center items-center border border-textGreen hover:bg-hoverColor rounded-full p-7 duration-300'>
                        <BsLinkedin />
                    </span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact