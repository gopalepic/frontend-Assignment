import React from 'react'
import { SideBar } from './SideBar'
import { Main} from './Main'
export const HomePage = () => {
  return (
    <div className='flex'>
      <SideBar className="w-[18%]"/>
     <Main className=" w-[82%]"/>
    </div>
  )
}

