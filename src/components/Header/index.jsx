import { Button, ButtonGroup, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <Paper className='header'>
      <a href='/' className='header__logo'>
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7515 2.1001C15.1792 2.1001 12.2805 4.9921 12.2805 8.5561C12.2805 12.1201 15.1792 15.0121 18.7515 15.0121C22.3238 15.0121 25.2225 12.1201 25.2225 8.5561C25.2225 4.9921 22.3238 2.1001 18.7515 2.1001Z" fill="url(#paint0_linear_1_15)"/>
          <path d="M7.64969 15.636C5.44859 15.636 3.64441 17.424 3.64441 19.632C3.64441 21.8401 5.43656 23.6281 7.64969 23.6281C9.85079 23.6281 11.655 21.8401 11.655 19.632C11.655 17.424 9.85079 15.636 7.64969 15.636Z" fill="url(#paint1_linear_1_15)"/>
          <path d="M19.9912 19.9442C18.1268 19.9442 16.6113 21.4562 16.6113 23.3162C16.6113 25.1762 18.1268 26.6882 19.9912 26.6882C21.8555 26.6882 23.371 25.1762 23.371 23.3162C23.371 21.4562 21.8555 19.9442 19.9912 19.9442Z" fill="url(#paint2_linear_1_15)"/>
          <defs>
          <linearGradient id="paint0_linear_1_15" x1="12.2805" y1="8.5561" x2="25.2225" y2="8.5561" gradientUnits="userSpaceOnUse">
          <stop stop-color="#3B71FE"/>
          <stop offset="1" stop-color="#01D0FD"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1_15" x1="3.64441" y1="19.632" x2="11.655" y2="19.632" gradientUnits="userSpaceOnUse">
          <stop stop-color="#3B71FE"/>
          <stop offset="1" stop-color="#01D0FD"/>
          </linearGradient>
          <linearGradient id="paint2_linear_1_15" x1="16.6113" y1="23.3162" x2="23.371" y2="23.3162" gradientUnits="userSpaceOnUse">
          <stop stop-color="#3B71FE"/>
          <stop offset="1" stop-color="#01D0FD"/>
          </linearGradient>
          </defs>
        </svg>
        <Typography variant='h1'>ClientSaver</Typography>
      </a>
      <ButtonGroup className='btn-g'>
        <Button variant='text' className='btn-g__1'>Регистрация</Button>
        <Button variant='contained' className='btn-g__2'>Войти</Button>
      </ButtonGroup>
    </Paper>
  )
}
