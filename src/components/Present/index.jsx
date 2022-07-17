import React from 'react'
import Shur from './Shur.jsx'
import ShurPic from './ShurPic.jsx'
import ImgBox from '../../assets/present.png'
import { Typography } from '@mui/material'
import './present.scss'
import { motion } from 'framer-motion'

const shurAnimation = {
    hidden: {
        x: -150,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const picAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

export default function Present() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.4, once: true }} className="present">
        <div className="present__container">
            <div className="present__1 ps-1">
                <motion.div variants={picAnimation} custom={1} className="ps-1__pic">
                    <img src={ImgBox} alt="" />
                </motion.div>
                <motion.div variants={shurAnimation} custom={3} className='ps-1__shur'>
                    <Shur />
                </motion.div>
            </div>
            <div className="present__2 ps-2">
                <div className="ps-2__pre-title">
                    <span>LEAD MAGNET</span>
                    <ShurPic />
                </div>
                <Typography variant='h2'>Что такое лид-магнит? 
                </Typography>
                <Typography variant='inherit'>Лид-магнит это что-то полезное, что вы готовы отдать посетителю вашего сайта за подписку. Лид-магнит также должен повышать лояльность к вашей компании.
</Typography>
            </div>
        </div>
    </motion.div>
  )
}
