import React, { useEffect, useState } from 'react'

function Nothing() { 
      const color = document.getElementById("color");
      const [left, setleft] = useState([]);
      const [right, setright] = useState([]);
      const [top, settop] = useState([]);
      const [bottom, setbottom] = useState([]);

      const increase = () => {
            let e;
            e++
      }
      const leftSide = Math.floor(Math.random() * 100);
      const rightSide = Math.floor(Math.random() * 100);
      const topSide = Math.floor(Math.random() * 100);
      const bottomSide = Math.floor(Math.random() * 100); 
  
      useEffect(() => {
                 
         setright(rightSide)
         settop(topSide)
         setbottom(bottomSide)
         setleft(leftSide)   
      },[left, right, top, bottom])

  return (
      
    <div className='text-[40px] bg-[#46753f] w-[60%] rounded-3xl h-[500px] flex justify-between items-center text-center'>
     <div className='w-fit h-full flex justify-center  items-center'><img className='rounded-tl-3xl rounded-bl-3xl w-full h-full ' src="/newerror.png" alt="" /></div>
     <div className='text-white w-[60%]  h-full relative  rounded-tr-3xl rounded-br-3xl bg-gradient-to-r from-purple-500 to-purple-900 flex justify-center items-center text-center'>
     <div id='colour' onChange={increase()} style={{borderRadius:`${left}% ${right}% ${top}% ${bottom}% `}} className='w-[100px] h-[100px] transition-all bg-opacity-50 bg-gradient-to-r from-purple-500 to-purple-900 absolute top-10 right-40 '></div>
     <div id='colour' onChange={increase()} style={{borderRadius:`${left}% ${right}% ${top}% ${bottom}% `}} className='w-[50px] h-[50px] transition-all bg-opacity-50 bg-gradient-to-r from-purple-500 to-purple-900 absolute top-[400px] right-20 '></div>
     <div id='colour' onChange={increase()} style={{borderRadius:`${left}% ${right}% ${top}% ${bottom}% `}} className='w-[60px] h-[60px] transition-all bg-opacity-50 bg-gradient-to-r from-purple-500 to-purple-900 absolute top-[120px] right-50 '></div>
      <h1 className='animate-pulse text-[70px] text-center flex justify-center font-Archivo underline font-extrabold items-center'>Nothing Found</h1></div>
    </div>
  )
}

export default Nothing