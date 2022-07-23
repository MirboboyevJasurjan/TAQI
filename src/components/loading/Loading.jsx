import React from 'react'
import './Loading.css'
import header1 from "../assets/images/main/institut.png";

function Loading() {
  return (
    <div className='animation'>
        {/* <div className="content">
            <div className="top-left"></div>
            <div className="left-bot"></div>
            <div className="bot-right"></div>
            <div className="right-top"></div>
        </div> */}
        <img src={header1}/>
    </div>
  )
}

export default Loading