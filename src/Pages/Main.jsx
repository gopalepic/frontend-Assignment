import React from 'react'
import { Header } from '../Components/Header'
import { MiddleSection } from '../Components/MiddleSection'
import {Objectives} from '../Pages/Objectives'
import { SearchResultData } from '../Components/SearchResultData'
export const Main = () => {
  return (
    <div className='w-[81%]'>
      <Header/>
      <MiddleSection/>
      <Objectives></Objectives>
      <SearchResultData/>
    </div>
  )
}

