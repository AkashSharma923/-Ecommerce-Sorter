import React from 'react'

function Color({bgColor}) {
  return (
      <div style={{backgroundColor:bgColor}} className='h-[40px] w-[60px] opacity-100 cursor-pointer relative -top-[-178px] -left-[-365px] z-10 flex justify-between p-1 items-center rounded-xl'>
            <div style={{borderColor:bgColor}} class="h-0 w-0 border-t-[15px]  border-l-[25px] border-b-[15px] rotate-180 border-[#555]  absolute -top-[-5px] left-[-23px]
border-solid border-t-transparent border-b-transparent border-l-[#555]"></div>
      </div>
  )
}

export default Color