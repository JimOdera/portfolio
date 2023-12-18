'use client';

import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import MediaPal from './works/MediaPal';
import Adrian from './works/Adrian';

const Experience = () => {

    const [workMediaPal, setWorkMediaPal] = useState(true);
    const [workAdrian, setWorkAdrian] = useState(false);

    const handleMediaPal = () => {
        setWorkMediaPal(true);
        setWorkAdrian(false);
    };
    const handleAdrian = () => {
        setWorkMediaPal(false);
        setWorkAdrian(true);
    };

  return (
    <section id='experience' className='max-w-containerxs mx-auto py-10 lgl:py-32 px-4'>
        <SectionTitle titleNo='02' title='Where I have Worked' />

        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-40 flex flex-col'>
                <li onClick={handleMediaPal} 
                className={`${workMediaPal ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    MediaPal
                </li>
                <li onClick={handleAdrian} 
                className={`${workAdrian ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    AdrianKenya
                </li>
            </ul>
            {workMediaPal && <MediaPal />}
            {workAdrian && <Adrian />}
        </div>
    </section>
  )
}

export default Experience