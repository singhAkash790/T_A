import React from 'react'

const Button = (props) => {
  return (
    <>
    <div className=" relative justify-center items-center flex ">
        <input type="text" placeholder= {props.Data_Input_Feild}  width={props.width} className='outline-none border-slate-400 border rounded-full placeholder:text-black w-[370px] px-4 py-3' />
    </div>
    </>
  )
}

export default Button