import { motion } from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

const MediaPal = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Software Developer <span className="text-textGreen tracking-wide">@MediaPal</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            Aug 2023 - Present
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1"><IoArrowRedoSharp /></span>
                Write Modern, performant, maintainable code for a diverse array of
                client and internal projects
            </li>
            <li className="text-base flex gap-2 text-textDark mt-4">
                <span className="text-textGreen mt-1"><IoArrowRedoSharp /></span>
                Work with a variety of different languages, platforms, frameworks, and
                content management systems such as Javascript, Typescript, React, Netlify,
                and WordPress.
            </li>
            <li className="text-base flex gap-2 text-textDark mt-4">
                <span className="text-textGreen mt-1"><IoArrowRedoSharp /></span>
                Communicate with multi-disciplinary team of engineers, designers, developers
                and clients on a daily basis
            </li>
        </ul>
    </motion.div>
  )
}

export default MediaPal