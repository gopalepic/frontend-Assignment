// import { TaskCard } from "./AccordionDemo"
import AccordionDemo from './AccordionDemo'
import targett from '../assets/Images/targett.svg'
 import deadline from '../assets/Images/deadline.svg'
import date1 from '../assets/Images/date1.svg'
import date2 from '../assets/Images/date2.svg'
import React from 'react'

export const SearchResultData = () => {
  return (
    <div className='w-full '>
      <AccordionDemo targetImg={targett} text="Hire Top Tier Software Development for IT Team" deadlineImg={deadline} date={date1}/>
      <AccordionDemo targetImg={targett} text="Sell 120 Security Data Dog Software " deadlineImg={deadline} date={date2}></AccordionDemo>
      <AccordionDemo targetImg={targett} text="Sell 120 Security Data Dog Software " deadlineImg={deadline} date={date2}></AccordionDemo>
    </div>
  )
}


