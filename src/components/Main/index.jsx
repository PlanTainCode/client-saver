import React from 'react'
import './main.scss'
// import Img1 from '../../assets/laptop.png'
import Img1 from '../../assets/laptop-2.png'
import Img2 from '../../assets/ShurMain.png'
import { Button, Typography } from '@mui/material'
import TypeAnimation from 'react-type-animation';

export default function Main() {
  return (
    <div className="main">
        <div className="main__container">
            <div className="main__f1 f1">
                <Typography variant='h2'>
                    <span>ClientSaver</span> 
                    <TypeAnimation 
                    cursor={false}
                    sequence={['конвертирует', 4000, 'превращает', 4000]}
                    wrapper="h2"
                    repeat={Infinity}
                    className='type-auto'
                    /> 
                    посетителей сайта в клиентов
                </Typography>
                <Typography variant='inherit'>
                Сервис, в котором можно за 10 минут создать виджет, который превратит посетителей вашего сайта в покупателя
                </Typography>
                <Button variant='contained'>Попробовать бесплатно</Button>
            </div>
            <div className="main__f2 f2">
                <div className="f2__pic">
                    <img src={Img1} alt="" />
                </div>
                <div className="f2__fone">
                    <img src={Img2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
