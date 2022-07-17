import { Button, Card, Link, Typography } from '@mui/material'
import React from 'react'
import './price.scss'
import ArrowPrice from './ArrowPrice'
import Cube1 from './Cube-1';
import Cube2 from './Cube-2';
import ShurP from './ShurP';
import StarsP from './StarsP';
import {motion} from 'framer-motion'

const cardAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2},
    }),
}

export default function Price() {
  return (
    <div className="price">
        <div className="price__container">
            <div className="price__left p-l">
                <div className="p-l__title">
                    <span></span>
                    <Typography variant='h2'>Цена</Typography>
                </div>
                <p>
                    Ознакомтесь с нашими предложениями и подберите 
                    подходящий вам тариф, если возникнут вопросы,<b> </b> 
                    <Link href='/'>напишите нам</Link>
                </p>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.4, once: true }} className="price__right p-r">
                <motion.div variants={cardAnimation} custom={2} whileHover={{scale: 1.1}} className="p-r__card-1 c-1">
                    <span>Стандартный</span>
                    <div className="c-1__title">
                        <Typography variant='h3'>
                        399 ₽ 
                        </Typography>
                        <p>В месяц</p>
                    </div>
                    <div className="c-1__ben">
                        <li>
                            <ArrowPrice />
                            <p>1000 подписчиков</p>
                        </li>
                        <li>
                            <ArrowPrice />
                            <p>10 000 сообщений  </p>
                        </li>
                        <li>
                            <ArrowPrice />
                            <p>Далее 1 коп - сообщение</p>
                        </li>
                        <li>
                            <ArrowPrice />
                            <p>Затем 30 коп - подписчик</p>
                        </li>
                    </div>
                    <Button variant='contained' className='c-1__button'>Купить</Button>
                </motion.div>
                <motion.div variants={cardAnimation} custom={4} whileHover={{scale: 1.1}} className="p-r__card-2 c-2">
                    <Typography variant='h3'>Скоро</Typography>
                    <Cube1 />
                    <Cube2 />
                    <StarsP />
                    <ShurP />
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}
