import React from "react";
import Color from "../Components/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Card({ image, title, description, price, color }) {
  return (
    <>
      {/* <Color
    bgColor={color}/> */}
      <div className="relative w-[250px] m-3 bg-[#514a8d] rounded-xl h-[400px] flex justify-between  flex-col">
        <div className="h-[69%] bg-white w-full rounded-t-xl  transition-all overflow-hidden ">
          <img
            className="h-[100%] bg-white bg-opacity-50 cursor-pointer hover:scale-[1.2] transition-all w-full  rounded-t-xl object-cover"
            src={image}
            alt=""
          />
          <div className="h-[35px] w-[35px] rounded-full bg-[#514a8d51] hover:bg-[#514a8da8] cursor-pointer relative -top-[40px] -left-[-210px] flex justify-between p-1 items-center">
            <div className="w-2 h-2 rounded-full bg-[#514a8d]"></div>
            <div className="w-2 h-2 rounded-full bg-[#514a8d]"></div>
            <div className="w-2 h-2 rounded-full bg-[#514a8d]"></div>
          </div>
          <div
            id="colour"
            style={{ backgroundColor: color }}
            className="h-[35px] w-[35px] rounded-full border-2 border-[#0000002b] opacity-100  cursor-pointer relative -top-[120px] -left-[-210px] flex justify-between p-1 items-center"
          ></div>
        </div>
        <div className="h-[40%] w-full  truncate p-3 cursor-pointer flex justify-between flex-col hover:rounded-b-xl overflow-hidden transition-all hover:bg-[#615aa0]">
          <div>
            <h1 className="truncate  text-black text-lg font-bold">{title}</h1>
            <p className="truncate text-sm text-black">{description}</p>
          </div>
          <div>
            <p className="text-[#040300] text-xl font-bold">${price}</p>
            <p className="text-[#10085a] transition-all hover:text-[#10085aaf] font-bold hover:underline">
              Read more
            </p>
          </div>
        </div>
        <NavLink to="/cart">
        <div className="tooltip absolute bottom-0 right-0 w-[100px] p-1 bg-[#140e4e] hover:bg-[#2b2261] rounded-tl-xl  rounded-br-xl rounded-none text-white hover:tooltip-open tooltip-right" data-tip="But Now">
  <button className="btn absolute rounded-none bottom-0 right-0 w-[100px] p-1 bg-[#140e4e] rounded-tl-xl hover:bg-[#2b2261]  rounded-br-xl text-white">Buy Now</button>
</div>
</NavLink>
        {/* {absolute bottom-0 right-0 w-[100px] p-1 bg-[#140e4e] rounded-tl-xl  rounded-br-xl text-white} */}
        <div
          className="tooltip absolute top-2 right-2 hover:tooltip-open tooltip-right"
          data-tip="Add to Cart">
            <NavLink to="/cart">
          <button className="btn rounded-full border-none w-10 h-10 bg-transparent hover:bg-transparent">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl bg-transparent" style={{color: "#4d50b3",}} />
          </button>
          </NavLink>
        </div>
        
      </div>
    </>
  );
}

export default Card;
