import React from 'react'
import Custom_Crafting_Bg from './components/Custom_Crafting_Bg'
import Text from './components/Text'

const index = () => {
  return (
         <div className=" w-[1940px] h-[920px] relative">
            <Custom_Crafting_Bg/>
            <div className=" absolute top-[430px] left-[120px]">
            <Text className=""/>
            </div>
            <div className=" absolute top-[510px] left-[130px] -rotate-45">
                <hr className='w-[220px] h-[2px] bg-black border-none' />
            </div>
            <div className=" absolute top-[720px] left-[130px] rotate-90 ">
                <hr className='w-[80px] h-[2px] bg-slate-600 border-none' />
            </div>
        
         </div>
    )
}

export default index