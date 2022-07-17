import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import './faq.scss'
import Arrow from './Arrow'




export default function Faq() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    <div className="faq">
      <div className="faq__fone1"></div>
      <div className="faq__container">
        <span className="span-text">
          FAQ
        </span>
        <Typography variant='h2'>
          Популярные вопросы
        </Typography>
        <div className="faq-acs">
          <Accordion className='faq-ac' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<Arrow />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='faq-ac-sum'
            >
              <Typography className='faq-ac-sum__t'>Думаете, что всплывающие окна портят ваш сайт?</Typography>
            </AccordionSummary>
            <AccordionDetails className='faq-ac-det'>
              <Typography className='faq-ac-det__t'>
              Мы это предусмотрели. В нашем сервисе вы можете помимо виджета отдельно создать чат-бота 
  в социальной сети всего за минуту.  Вы просто в нужной части сайта пишите текст с призывом 
  подписаться на ваши сообщества в социальных сетях за лид-магнит и даёте ссылку на чат-бота
              </Typography>
            </AccordionDetails>
          </Accordion >
          <Accordion className='faq-ac' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<Arrow />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='faq-ac-sum'
            >
              <Typography className='faq-ac-sum__t'>Думаете, что всплывающие окна портят ваш сайт?</Typography>
            </AccordionSummary>
            <AccordionDetails className='faq-ac-det'>
              <Typography className='faq-ac-det__t'>
              Мы это предусмотрели. В нашем сервисе вы можете помимо виджета отдельно создать чат-бота 
  в социальной сети всего за минуту.  Вы просто в нужной части сайта пишите текст с призывом 
  подписаться на ваши сообщества в социальных сетях за лид-магнит и даёте ссылку на чат-бота
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='faq-ac' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<Arrow />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='faq-ac-sum'
            >
              <Typography className='faq-ac-sum__t'>Думаете, что всплывающие окна портят ваш сайт?</Typography>
            </AccordionSummary>
            <AccordionDetails className='faq-ac-det'>
              <Typography className='faq-ac-det__t'>
              Мы это предусмотрели. В нашем сервисе вы можете помимо виджета отдельно создать чат-бота 
  в социальной сети всего за минуту.  Вы просто в нужной части сайта пишите текст с призывом 
  подписаться на ваши сообщества в социальных сетях за лид-магнит и даёте ссылку на чат-бота
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='faq-ac' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<Arrow />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='faq-ac-sum'
            >
              <Typography className='faq-ac-sum__t'>Думаете, что всплывающие окна портят ваш сайт?</Typography>
            </AccordionSummary>
            <AccordionDetails className='faq-ac-det'>
              <Typography className='faq-ac-det__t'>
              Мы это предусмотрели. В нашем сервисе вы можете помимо виджета отдельно создать чат-бота 
  в социальной сети всего за минуту.  Вы просто в нужной части сайта пишите текст с призывом 
  подписаться на ваши сообщества в социальных сетях за лид-магнит и даёте ссылку на чат-бота
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="faq__fone2"></div>
    </div>
  )
}