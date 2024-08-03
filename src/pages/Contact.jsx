import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
  return (
    <div className='w-[100%] h-[100%] flex  justify-center items-center'>
      <img className='w-[50%] h-[50%]' src="/scam2024.gif" alt="" />
      <p className='w-[50%] h-[50%] text-3xl flex justify-center gap-10 items-center text-center'>Yele Audio mute karle<button><FontAwesomeIcon icon={faVolumeXmark} onClick={()=>{document.querySelector("audio").muted==true?document.querySelector("audio").muted=false:document.querySelector("audio").muted=true}} /></button></p>
      <audio loop autoPlay src="/The Title Track Is As Groovy As The Whole Series  SCAM 1992 - The Harshad Mehta Story.mp3"></audio>
    </div>
  )
}

export default Contact ;