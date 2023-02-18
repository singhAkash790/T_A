import React from 'react'

const Text = (props) => {
  return (
    <div className='flex justify-center items-Center w-[200px] relative z-10 text-white flex-col '>
        <div className=" text-[50px] font-medium text-[#b69a58] font-[Time] text-center"> {props.figure_Number}</div>
        <div className=" text-[20px] font-san uppercase text-center ">{props.Other_content}</div>
        <div className=" text-[20px] font-san uppercase text-center">{props.Other_content1}</div>
    </div>
  )
}

export default Text