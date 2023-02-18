import React from 'react'
import Button2 from '../../../components/buttonss/Button2'
import Custom_Bg_Launch from './components/Custom_Bg_Launch'
import Text from './components/Text'

const index = () => {
  return (
    <>
    <div className="w-[1940px] h-[920px]  relative   ">
     <div className="">
      <Custom_Bg_Launch/>
     </div>
     <div className="">
        <p className=" text-[40px] font-bold top-[110px] left-[840px] font-[times] absolute">NEW LAUNCH</p>
     </div>
     <hr  className='h-[120px] w-[10px] bg-[#b79a50] absolute top-[40px] left-[800px] '/>
     <div className=" text-[30px]  font-bold tracking-[8px] my-2 absolute top-[410px]  left-[380px]">THE ARAVALLIS</div>
     <div className=" text-[25px] absolute top-[480px] left-[380px] ">
     <Text data="Sector 61, Gurugram"/>
     <Text data="10 min. from horizon center"/>
     <Text data="High end specification"/>
     <Text data="Luxuray club house"/>
     </div>
     <div className=" absolute top-[840px] left-[42%]">
      <Button2 Data_Button=" KNOW MORE" />

     </div>
    </div>
    </>
    )
}

export default index