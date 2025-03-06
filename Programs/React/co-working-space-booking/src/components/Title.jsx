import React from 'react'
import tit_img from "../assets/tit_img.png";

const Title = () => {
  return (
    <div className="title">
        <p style={{fontSize: "30px"}}>Host your meeting with world-class amenities. Starting at <span>₹ 199/-!</span></p>
        <img src={tit_img} alt="logo" />
    </div>
  )
}

export default Title