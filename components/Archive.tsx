import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from "framer-motion"

const Archive = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont font-semibold'>
                Other Noteworthy Projects
            </h2>
            <p className='text-sm font-titleFont text-textGreen'>
                View the Archive
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10'>
            <ArchiveCard
            title="Lorem ipsum dolor sit"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
            listItem={["PHP", "Next.js", "Javascript"]}
            link="www.google.com"
            />
            <ArchiveCard
            title="Lorem ipsum dolor sit"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
            listItem={["PHP", "Next.js", "Javascript"]}
            link="www.google.com"
            />
            <ArchiveCard
            title="Lorem ipsum dolor sit"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
            listItem={["PHP", "Next.js", "Javascript"]}
            link="www.google.com"
            />
            <ArchiveCard
            title="Lorem ipsum dolor sit"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
            listItem={["PHP", "Next.js", "Javascript"]}
            link="www.google.com"
            />
            <ArchiveCard
            title="Lorem ipsum dolor sit"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
            listItem={["PHP", "Next.js", "Javascript"]}
            link="www.google.com"
            />
            <ArchiveCard
            title="Lorem ipsum dolor sit"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
            listItem={["PHP", "Next.js", "Javascript"]}
            link="www.google.com"
            />

            {
                showMore && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
                            <ArchiveCard
                            title="Lorem ipsum dolor sit"
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
                            listItem={["PHP", "Next.js", "Javascript"]}
                            link="www.google.com"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                            <ArchiveCard
                            title="Lorem ipsum dolor sit"
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
                            listItem={["PHP", "Next.js", "Javascript"]}
                            link="www.google.com"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                            <ArchiveCard
                            title="Lorem ipsum dolor sit"
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
                            listItem={["PHP", "Next.js", "Javascript"]}
                            link="www.google.com"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                            <ArchiveCard
                            title="Lorem ipsum dolor sit"
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
                            listItem={["PHP", "Next.js", "Javascript"]}
                            link="www.google.com"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                            <ArchiveCard
                            title="Lorem ipsum dolor sit"
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
                            listItem={["PHP", "Next.js", "Javascript"]}
                            link="www.google.com"
                            />
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                            <ArchiveCard
                            title="Lorem ipsum dolor sit"
                            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero impedit odit maiores, consectetur beatae iure labore sint provident voluptas veniam dolor, nobis omnis magni aut ipsum corporis, obcaecati iste?"
                            listItem={["PHP", "Next.js", "Javascript"]}
                            link="www.google.com"
                            />
                        </motion.div>
                    
                    </>
                )
            }
        </div>

        <div className='mt-12 flex items-center justify-center'>
            {
                showMore ? (
                    <button onClick={() => setShowMore(false)}
                    className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                        Show Less
                    </button>
                ):(
                    <button onClick={() => setShowMore(true)}
                    className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                        Browse More
                    </button>
                )
            }
        </div>

    </div>
  )
}

export default Archive