import React from 'react'
import Button from '../../../components/buttonss/Button'
import Button2 from "../../../components/buttonss/Button2"
import Text from './components/Text'

// Button Props are Data_Input_Feild
// Button2 props are  Data_Button, width

const index = () => {
  return (
    <div className=" flex justify-center  items-center  flex-col">
        <Text/>
        <div className=" flex justify-center items-center  gap-10 py-10  scale-125 ">
            <Button Data_Input_Feild='NAME*'/>
            <Button Data_Input_Feild='MOBILE*'/>
            <Button Data_Input_Feild='EMAIL*'/>
        </div>
        <div className=" scale-125 pt-[50px]"><Button2 Data_Button="   Submit   " className="w-40" Width="200px"/></div>
    </div>
    )
}

export default index