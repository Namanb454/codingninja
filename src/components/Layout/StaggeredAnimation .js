import React from 'react';
import { delay, motion } from 'framer-motion';
import { useAnimate, stagger } from "framer-motion"

const StaggeredAnimation = () => {
    const text = () => {
        "namndowbfjdbbbbbajfajkfbkfbdrfjwfioowehfdjfbq3iu4fwej24fgebfug4unamndowbfjdbbbbbajfajkfbkfbdrfjwfioowehfdjfbq3iu4fwej24fgebfug4unamndowbfjdbbbbbajfajkfbkfbdrfjwfioowehfdjfbq3iu4fwej24fgebfug4unamndowbfjdbbbbbajfajkfbkfbdrfjwfioowehfdjfbq3iu4fwej24fgebfug4unamndowbfjdbbbbbajfajkfbkfbdrfjwfioowehfdjfbq3iu4fwej24fgebfug4unamndowbfjdbbbbbajfajkfbkfbdrfjwfioowehfdjfbq3iu4fwej24fgebfug4unamndowbfjdbbbbbajfajkfbkfbdrfjwfioowehfdjfbq3iu4fwej24fgebfug4u"
    }

    return (
        <motion.div
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, delay: stagger(0.5) }}
            >
                {text.split("").map((char) => (
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {char}
                    </motion.span>
                ))}

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, delay: stagger(0.5) }}
            >
                Element 2
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
            >
                Element 3
            </motion.div>
        </motion.div>
    );
};

export default StaggeredAnimation;
