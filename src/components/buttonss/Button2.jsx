import React from 'react'

const Button2 = (props) => {
  return (
    <>
    <div className=" relative justify-center items-center flex ">
        <input type="button"  value={props.Data_Button} onClick="/"   className='outline-none border-slate-400 border rounded-full px-6 py-3 tracking-widest text-black hover:bg-sky-400 hover:text-white hover:scale-110 ease-in-out duration-300  uppercase ' />
    </div>
    </>
  )
}

export default Button2