import React, { useEffect, useState } from 'react';

function Choose({check, setCheck}) {
  
  useEffect(() => {
    console.log(check);
  }, [check]);

  const handleCheckboxClick = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setCheck((prevCheck) => [...prevCheck, id]);
    } else {
      setCheck((prevCheck) => prevCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      <h1 className='text-3xl pt-4 ml-14 mt-[70px] pl-[20px] text-[#ffffff] bg-[#0e1106] opacity-100'>
        Choose your category :
      </h1>
      <div className='w-full ml-14 h-[30px] bg-[#0e1106] flex justify-start p-5 pt-6 gap-10 items-center text-center'>
        <label className='text-white text-center flex justify-center items-center '>
          <input onClick={handleCheckboxClick} type="checkbox" id='audio' className="checkbox checkbox-sm checkbox-primary mr-2"/>
          Audio
        </label>
        <label className='text-white text-center flex justify-center items-center '>
          <input onClick={handleCheckboxClick} type="checkbox" id='gaming' className="checkbox checkbox-sm checkbox-primary mr-2"/>
          Gaming
        </label>
        <label className='text-white text-center flex justify-center items-center'>
        <input type="checkbox" id='mobile' defaultChecked onClick={handleCheckboxClick}  className="checkbox checkbox-sm checkbox-primary mr-2" />
          Mobile
        </label>
        <label className='text-white text-center flex justify-center items-center'>
          <input onClick={handleCheckboxClick} type="checkbox" id='tv' className="checkbox checkbox-sm checkbox-primary mr-2"/>
          Television
        </label>
      </div>
    </>
  );
}

export default Choose;
