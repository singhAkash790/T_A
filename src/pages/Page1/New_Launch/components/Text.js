import React from 'react'

const Text = (props) => {
  return (
    <div>
        {props.data}
        <hr  className='w-[40px] rounded-sm border-none h-[3px] bg-slate-400 my-2'/>
    </div>
  )
}

export default Text