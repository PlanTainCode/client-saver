import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import './lidmagnets.scss'
import Img1 from '../../assets/lid-1.png';
import Img2 from '../../assets/lid-2.png';
import Img3 from '../../assets/lid-3.png';
import Img4 from '../../assets/lid-4.png';
import Shur from './Shur';
import {motion} from 'framer-motion'

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

const cardAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const textAnimation = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const MotionCard = motion(Card)
const MotionTypography = motion(Typography)


export default function LidMagnets() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.4, once: true }} className="lid">
        <div className="lid__fone"></div>
        <div className="lid__container">
            <div className="lid__left l-l">
                <span className="span-text">
                    LEAD MAGNET
                </span>
                <Typography variant='h2'>
                    Какие бывают лид-магниты?
                </Typography>
                <Button variant='text' className='l-l__button'>
                    
                    Подобрать
                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L21 12L15 6" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 12H20" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 12H20" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </Button>
                <motion.div variants={shurAnimation} custom={2} className='shur'>
                    <Shur />
                </motion.div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.4,  once: true }} className="lid__right l-r">
                <MotionCard variants={cardAnimation} custom={1} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="l-r__card">
                    <img src={Img1} alt="chek-list" />
                    <MotionTypography variants={textAnimation} custom={2} variant='h3'>Чек-лист</MotionTypography>
                </MotionCard>
                <MotionCard variants={cardAnimation} custom={2} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="l-r__card">
                    <img src={Img2} alt="chek-list" />
                    <MotionTypography variants={textAnimation} custom={3} variant='h3'>Гайд</MotionTypography>
                </MotionCard>
                <MotionCard variants={cardAnimation} custom={3} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="l-r__card">
                    <img src={Img3} alt="chek-list" />
                    <MotionTypography variants={textAnimation} custom={4} variant='h3'>Промокод</MotionTypography>
                </MotionCard>
                <MotionCard variants={cardAnimation} custom={4} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="l-r__card">
                    <img src={Img4} alt="chek-list" />
                    <MotionTypography variants={textAnimation} custom={5} variant='h3'>Памятка</MotionTypography>
                </MotionCard>
            </motion.div>
        </div>
    </motion.div>
  )
}
