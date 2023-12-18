'use client';

import { profile } from '@/public/assets';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import { MdOutlineClose } from 'react-icons/md';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Navbar = () => {
    const ref = useRef<string | any>("");
    const [showMenu, setShowMenu] = useState(false);
    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false);
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });

        const links = document.querySelectorAll(".nav-link")
        links.forEach((link) => {
            link.classList.remove("active");
        });
        
        e.currentTarget.classList.add("active");
    };

    function handleClick(e: any) {
        if (e.target.classList.contains("ref.current")) {
            setShowMenu(false);
        }
    }

  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor/50 backdrop-blur-lg px-4'>
        <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='text-4xl font-titleFont'
            >
            <motion.span variants={variants}>J</motion.span>
            <motion.span variants={variants}>a</motion.span>
            <motion.span variants={variants}>m</motion.span>
            <motion.span variants={variants}>e</motion.span>
            <motion.span variants={variants}>s</motion.span>
            </motion.div>
            <div className='hidden mdl:inline-flex items-center gap-7'>
                <ul className='flex text-[13px] gap-7'>
                    <Link onClick={handleScroll} href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }}>
                            Home
                        </motion.li>
                    </Link>
                    <Link onClick={handleScroll} href="#about" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                            <span></span> About
                        </motion.li>
                    </Link>
                    <Link onClick={handleScroll} href="#experience" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                            <span></span> Experience
                        </motion.li>
                    </Link>
                    <Link onClick={handleScroll} href="#project" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.3 }}>
                            <span></span> Projects
                        </motion.li>
                    </Link>
                    <Link onClick={handleScroll} href="#contact" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.4 }}>
                            <span></span> Contacts
                        </motion.li>
                    </Link>
                </ul>
                 <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='w-14 h-14 rounded-full overflow-hidden'
                >
                <Image
                    src={profile}
                    alt='profile'
                    className='w-full h-full object-cover'
                />
                </motion.div>
            </div>
            {/* small devices Icon section for nav */}
            <div onClick={() => setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>     
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>     
                <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>     
            </div>
            {
                showMenu && (
                    <div ref={(node) => (ref.current = node)} onClick={handleClick}
                    className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'>
                        <motion.div initial={{x:20, opacity:0}} animate={{x:0, opacity:1}} transition={{duration: 0.1}}
                        className='w-[80%] h-full overflow-y-scroll bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
                            <MdOutlineClose onClick={() => setShowMenu(false)}
                            className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4 duration-300'/>

                            <div className='flex flex-col items-center gap-7'>
                                <ul className='flex flex-col text-[13px] gap-7'>
                                    <Link onClick={handleScroll} href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                        <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}>
                                            Home
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#about" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                        <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.2, ease: "easeIn"  }}>
                                            <span>01.</span> About
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#experience" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                        <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.3, ease: "easeIn"  }}>
                                            <span>02.</span> Experience
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#project" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                        <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.4, ease: "easeIn"  }}>
                                            <span>03.</span> Projects
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#contact" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link'>
                                        <motion.li initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5, ease: "easeIn"  }}>
                                            <span>04.</span> Contacts
                                        </motion.li>
                                    </Link>
                                </ul>

                                <a href="/assets/James_Odera_n.pdf" target='_blank'>
                                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: "easeIn" }}
                                    className='w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                                        Resume
                                    </motion.button>
                                </a>

                            </div>
                            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: "easeIn" }}
                            className='text-sm w-72 tracking-widest text-textGreen text-center mt-4'>
                                <p>james.nyangoma4@gmail.com</p>
                            </motion.a>
                        </motion.div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Navbar