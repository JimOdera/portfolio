import { motion } from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

const Adrian = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Front-end Developer <span className="text-textGreen tracking-wide">@AdrianKenya</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            May 2021 - July 2021
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><IoArrowRedoSharp /></span>
                During my time at Adrian Kenya, I excelled as a front-end developer, specializing in user interface design. 
                I crafted meticulous wireframes using Figma and Adobe InDesign, 
                establishing the foundation for user-centric applications. Employing Angular and the Ionic framework, 
                I seamlessly translated these designs into fully functional templates, prioritizing both aesthetics and functionality.
            </li>
            <li className="text-base flex gap-2 text-textDark mt-4">
                <span className="text-textGreen mt-1"><IoArrowRedoSharp /></span>
                My role extended beyond design, as I adeptly fetched APIs and integrated them into the applications. 
                This ensured real-time data updates and maintained dynamic synchronization with external systems. 
                From conceptualizing designs and implementing templates to orchestrating API connections, 
                my contributions showcased versatility and a comprehensive skill set in the end-to-end development process at Adrian Kenya.
            </li>
        </ul>
    </motion.div>
  )
}

export default Adrian