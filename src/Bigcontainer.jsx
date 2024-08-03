import { Container } from 'postcss'
import React from 'react'
import Sidebar from './Components/Sidebar'

function Bigcontainer() {
  return (
    <div className='w-[100%] h-[100%]'>
      {/* <Sidebar/> */}
      <Container/>
    </div>
  )
}

export default Bigcontainer