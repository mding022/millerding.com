import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from 'react';

interface AnimatedTextProps {
    title: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ title }) => {
    const constraintsRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);

    return (
        
        <div ref={constraintsRef} className="flex flex-col items-center cursor-default relative overflow-hidden p-4 rounded-md">
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.3}
                whileHover={{ x: 1, y: -1 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                style={{
                    x,
                    y,
                    rotateX,
                    rotateY,
                    cursor: "grab"
                }}
                whileTap={{ scale: 1.1 }}
            >
                <motion.h1
                    className="font-black text-6xl cursor-pointer"
                    initial={{ opacity: 1, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                >
                    {title}
                </motion.h1>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.1, ease: 'easeInOut' }}>
                <motion.h2
                    className="text-[#757575] font-extrabold text-3xl pt-2"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: 'easeOut', delay: 0.5 }}
                >
                    CS/Econ @ <span className="text-[#674747]">uOttawa</span> 🏛️
                </motion.h2>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.1, ease: 'easeInOut' }}>
                <motion.h2
                    className="text-[#919191] font-bold text-md pt-3 pb-1"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                >
                    Proficient in backend & UI/UX development
                </motion.h2>
            </motion.div>
        </div>
    );
};

export default AnimatedText;
