import { Button, Link, Typography } from '@mui/material';
import React from 'react'
import './help.scss';
import Iphone from '../../assets/ipad.png'
import { motion } from 'framer-motion';

const textAnimation = {
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

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function Help() {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.4, once: true}} className="help">
        <div className="help__fone1"></div>
        <div className="help__container">
            <div className="help__p1 hp-1">
                <MotionTypography variant='h2' custom={1} variants={textAnimation}>В этом вам поможет <span>ClientSaver!</span></MotionTypography>
                <motion.div className="hp-1__text-1" custom={1} variants={textAnimation}>
                В нашем сервисе вы за 10 минут можете создать связку <Link href='/'>виджет на сайт+чат-бот+рассылка </Link>
                </motion.div>
                <motion.div className="hp-1__text-2" custom={2} variants={textAnimation}>
                Виджет призывает подписаться на ваше сообщество за подарок, чат-бот проверяет подписку и выдает лид-магнит. В конце вы можете догнать потенциальных клиентов рассылкой в боте. И всё это, не выходя из ClientSaver
                </motion.div>
                <motion.div className="hp-1__text-3" custom={3} variants={textAnimation}> Clientsaver работает в 
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.48C0 6.59685 0 3.65531 1.82765 1.82765C3.65531 0 6.59685 0 12.48 0H13.52C19.4032 0 22.3447 0 24.1724 1.82765C26 3.65531 26 6.59685 26 12.48V13.52C26 19.4032 26 22.3447 24.1724 24.1724C22.3447 26 19.4032 26 13.52 26H12.48C6.59685 26 3.65531 26 1.82765 24.1724C0 22.3447 0 19.4032 0 13.52V12.48Z" fill="#0077FF"/>
                        <path d="M13.7887 18.7199C7.74813 18.7199 4.30274 14.6208 4.15918 7.79993H7.18499C7.28438 12.8063 9.51503 14.9269 11.2819 15.3641V7.79993H14.1312V12.1176C15.876 11.9318 17.7089 9.96425 18.3273 7.79993H21.1765C20.7016 10.4671 18.7139 12.4346 17.3004 13.2435C18.7139 13.8994 20.9778 15.6155 21.8392 18.7199H18.7028C18.0292 16.6431 16.3508 15.0362 14.1312 14.8176V18.7199H13.7887Z" fill="white"/>
                    </svg>
                    и
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="13" fill="url(#paint0_linear_276_1189)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18325 12.8367C10.0219 11.1856 12.5815 10.097 13.8623 9.5711C17.5191 8.06948 18.2789 7.80863 18.7742 7.80002C18.8831 7.79812 19.1267 7.82478 19.2844 7.95116C19.4176 8.05788 19.4543 8.20204 19.4718 8.30322C19.4894 8.4044 19.5112 8.63489 19.4938 8.81498C19.2957 10.8706 18.4382 15.859 18.002 18.1613C17.8174 19.1355 17.454 19.4622 17.1021 19.4941C16.3375 19.5636 15.7568 18.9952 15.0162 18.5159C13.8573 17.7659 13.2026 17.299 12.0776 16.5671C10.7776 15.7213 11.6203 15.2564 12.3612 14.4967C12.5551 14.2979 15.9243 11.2724 15.9895 10.9979C15.9976 10.9636 16.0052 10.8357 15.9282 10.7681C15.8512 10.7005 15.7376 10.7236 15.6556 10.742C15.5394 10.7681 13.688 11.9762 10.1014 14.3664C9.57591 14.7227 9.09992 14.8962 8.67345 14.8871C8.2033 14.8771 7.29892 14.6247 6.6266 14.4089C5.80198 14.1443 5.14659 14.0044 5.20366 13.5549C5.23339 13.3208 5.55991 13.0814 6.18325 12.8367Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_276_1189" x1="13" y1="0" x2="13" y2="26" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4790FB"/>``
                        <stop offset="1" stop-color="#085CD8"/>
                        </linearGradient>
                        </defs>
                    </svg>
                
                </motion.div>
                <MotionButton custom={4} variants={textAnimation}  variant='contained' className='hp-1__button'>Зарегистрироваться</MotionButton>
            </div>
            <div className="help__p1 hp-2">
                <div className="hp-2__pic">
                    <img src={Iphone} alt="" />
                </div>
            </div>
        </div>
        <div className="help__fone2"></div>
    </motion.div>
  )
}
