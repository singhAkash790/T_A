import React from 'react'
import Logo from '../../Logo/Logo'
import Option from './Components/Option'

const Index = () => {
  return (
    <>
    <div className=" justify-between flex items-center  px-[100px]">
        <div className=" flex-row flex">
        <Logo Height='60px' Width='60px'/>
        <a className='text-[60px] uppercase font-serif'>puri</a>
        </div>
        <Option/>
    </div>
    </>
  )
}

export default Index