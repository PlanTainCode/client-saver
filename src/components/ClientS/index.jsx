import React from 'react'
import ShurPic from './ShurPic.jsx'
import Img1 from '../../assets/ClientSaver.png'
import './client.scss'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'


const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3},
    }),
}

const MotionTypography = motion(Typography)


export default function ClientS() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.2, once: true}} className="client">
        <div className="client__fone1"></div>
        <div className="client__container">
            <div className="client__c1 c1">
                <div  className="c1__shurpic">
                    <ShurPic />
                </div>
                <div  className="c1__pic">
                    <img src={Img1} alt="" />
                </div>
            </div>
            <div className="client__c2 c2">
                <div className="c2__item">
                    {/* <Typography variant='h3'>Проблема</Typography> */}
                    <MotionTypography custom={1} variants={textAnimation} variant='h3'>Проблема</MotionTypography>
                    <motion.span custom={2} variants={textAnimation}></motion.span>
                    <MotionTypography custom={2} variants={textAnimation} variant='inherit'>
                        большинство посетителей вашего сайта заходят на него, кликая на рекламу, листают и больше никогда 
                        не возвращаются. Деньги потрачены впустую 
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H0V0H22V2Z" fill="#3B71FE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.38498e-08L22 22L20 22L20 0L22 2.38498e-08Z" fill="#3B71FE"/>
                        </svg>
                    </MotionTypography>
                </div>
                <div className="c2__item">
                    <MotionTypography custom={2} variants={textAnimation} variant='h3'>Решение</MotionTypography>
                    <motion.span custom={3} variants={textAnimation}></motion.span>
                    <MotionTypography custom={3} variants={textAnimation} variant='inherit'>
                        конвертировать посетителя в подписчика сообщества 
                        и/или рассылки компании в социальных сетях 
                        или мессенджерах
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2H0V0H22V2Z" fill="#3B71FE"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.38498e-08L22 22L20 22L20 0L22 2.38498e-08Z" fill="#3B71FE"/>
                        </svg>
                    </MotionTypography>
                </div>
            </div>
        </div>
        <div className="client__fone2"></div>
    </motion.div>
  )
}
