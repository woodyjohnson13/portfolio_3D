/* eslint-disable no-unused-vars */
import React from 'react'
import {motion} from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { styles } from '../utils/styles'

const SectionWrapper = (Component,idName) => function HOC () {
    return (
        <motion.section
        variants={staggerContainer()}
        intital="hidden"
        whileInView={"show"}
        viewport={{once:true,amount:0.2}}
        className={`${styles.padding} max-w-7xl mx-auto realtive z-0` }>
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    )    
}

export default SectionWrapper
