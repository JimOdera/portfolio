import { motion } from "framer-motion"

const Banner = () => {
  return (
    <section id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 lgl:py-32 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
      <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
      className='text-4xl font-semibold tracking-wide text-textGreen'>
        {/* James Nyang<span>{"'"}</span>oma. */}
        James Nyang
        <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 1, repeat: Infinity }}>
          {"'"}
        </motion.span>
        oma.
      </motion.h2>
      <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
      className=" text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">
         Transforming ideas into <span>captivating digital experiences</span>
      </motion.h1>

      <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}
      className="text-base md:max-w-[650px] text-textDark font-medium">
        Hello! I am an enthusiastic software developer with a year of hands-on experience specializing in React, Next.js, and PHP. 
        My journey in tech has equipped me with a robust foundation in both front-end and back-end development. 
        What sets me apart is not just my technical prowess, but my commitment to crafting exceptional, user-centric web applications. 
        I thrive on the challenge of transforming ideas into seamless digital experiences, leveraging the power of Code and its versatile ecosystem.
        My skills extend beyond code; I understand the delicate dance between aesthetics and functionality, 
        ensuring that each web application I create not only meets but exceeds user expectations.
      </motion.p>
      <a href="/assets/James_Odera_n.pdf" target='_blank'>
        <motion.button initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}
        className="w-52 h-14 text-lg font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
          Resume
        </motion.button>
      </a>

      {/* <div className="text-9xl font-codeFont text-textGreen/5 absolute -z-5 right-64 top-3/4">
        {"<code>"}
      </div> */}
    </section>
  )
}

export default Banner