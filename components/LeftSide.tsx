import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinFill } from "react-icons/ri";
// import { FaTwitter } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/JimOdera" target="_blank" rel="noopener noreferrer">
        <span className='w-10 h-10 text-xl rounded-md inline-flex items-center justify-center hover:text-textGreen cursor-pointer transition-all duration-300'>
            <FiGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/james-nyang%E2%80%99oma-08b02528b/" target="_blank" rel="noopener noreferrer">
          <span className='w-10 h-10 text-xl rounded-md inline-flex items-center justify-center hover:text-textGreen cursor-pointer transition-all duration-300'>
            <RiLinkedinFill />
          </span>
        </a>
        {/* <span className='w-10 h-10 text-xl rounded-md inline-flex items-center justify-center hover:text-textGreen cursor-pointer transition-all duration-300'>
          <FaTwitter />
        </span> */}
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide