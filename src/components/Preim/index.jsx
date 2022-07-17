import { Typography } from '@mui/material'
import React from 'react'
import Img1 from '../../assets/preim.png'
import Img2 from '../../assets/preim1.png'
import Img3 from '../../assets/preim2.png'
import './preim.scss'
import ShurPic from './ShurPic.jsx'
import {motion} from 'framer-motion'

const picAnimation = {
    hidden: {
        y: 100,
        x: 150,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const itemAnimation = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const piAnimation = {
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
        y: -30,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

const MotionTypography = motion(Typography);

export default function Preim() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.4, once: true }} className="preim">
        <div className="preim__fone"></div>
        <div className="preim__container">
            <div className="preim__title t-h-p">
                <div className="t-h-p__title">
                    <ShurPic />
                    <span>benefit</span>
                    <Typography variant='h2'>Какие преимущества вы получаете при использовании  CLIENTSAVER </Typography>
                </div>
                <motion.div variants={picAnimation} custom={1} whileHover={{rotate: 5}} whileTap={{rotate: -10}} className="t-h-p__pic">
                    <img src={Img1} alt="" />
                </motion.div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.4, once: true }} className="preim__body b-h-p">
                
                <div className="b-h__item i-bh-p">
                    <div className="i-bh-p__title">
                        <motion.span variants={piAnimation} custom={1}><img src={Img2} alt="" /></motion.span>
                        <MotionTypography variants={itemAnimation} custom={1.5} variant='h3'>Преимущества для бизнеса</MotionTypography>
                    </div>
                    <MotionTypography variants={textAnimation} custom={2} variant='inherit'>Владелец бизнеса получает потенциального клиента, которого можно дальше «прогревать» на покупку 
в социальных сетях. <b>Clientsaver</b> дает возможность запустить рассылку по пользователям чат-бота
                    </MotionTypography>
                </div>
                
                <div className="b-h__item i-bh-p">
                    <div className="i-bh-p__title">
                        <motion.span variants={piAnimation} custom={2}><img src={Img3} alt="" /></motion.span>
                        <MotionTypography variants={itemAnimation} custom={2.5} variant='h3'>Преимущества для посетителя</MotionTypography>
                    </div>
                    <MotionTypography variants={textAnimation} custom={3} variant='inherit'>Посетитель сайта получает какую-то полезную информацию или скидку. Это повышает его лояльность к бренду. Более того, он находит кладезь пользы 
в сообществе компании, на которую он подписался, хотя без  <b>Clientsaver</b> никогда бы и не заметил его.</MotionTypography>
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}
