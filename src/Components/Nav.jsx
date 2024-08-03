import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      const close1 = document.getElementById("closing1");
      const close2 = document.getElementById("closing2");
      const close3 = document.getElementById("closing3");
      close2.style.display = "none";
      close1.style.rotate = "45deg";
      close1.style.top = "7px";
      close3.style.rotate = "135deg";
      close3.style.top = "7px";
      console.log("true");
    } else {
      const close1 = document.getElementById("closing1");
      const close2 = document.getElementById("closing2");
      const close3 = document.getElementById("closing3");
      close2.style.display = "block";
      close1.style.rotate = "0deg";
      close1.style.top = "-5px";
      close3.style.rotate = "0deg";
      close2.style.top = "7.5px";
      close3.style.top = "20px";
      console.log("true");
    }
  }, [show]);
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/container",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Cart",
      path: "/Cart",
    },
  ];
  return (
    <>
      <div className="flex border-b-2 border-[#ffffff38] justify-between will-change-scroll fixed w-full items-center px-20 p-4 text-center top-0 text-[#a4ac86] h-[70px]  z-50 shadow-[#092e0e32] bg-[#0e1106]">
        <div className="w-[250px] h-full flex justify-between text-center items-center">
      <div
            className="w-9 h-9  relative transtion-all flex justify-center items-center flex-col  bg-transparent transition-all  "
            onClick={() => (show ? setShow(false) : setShow(true))}
          >
            <div
              id="closing1"
              className="absolute top-[-5px] transition-all w-full h-[3px] rounded-full mt-2 bg-[#485dd3]"
            ></div>
            <div
              id="closing2"
              className="absolute top-[7.5px] transition-all w-full h-[3px] rounded-full mt-2 bg-[#485dd3]"
            ></div>
            <div
              id="closing3"
              className="absolute top-5 transition-all w-full h-[3px] rounded-full mt-2 bg-[#485dd3]"
            ></div>
          </div>
          <NavLink to="/" className="cursor-pointer">
        <h1  className="flex kenia-regular text-5xl justify-center cursor-pointer relative after:absolute after:w-[0px] hover:overflow-hidden overflow-hidden hover:after:w-[232px] after:left-[73px] after:top-10 after:h-[2px] after:rounded-full  after:bg-[#d8e5f8] transition-all hover:text-shadow-2xl hover:shadow-[#f1f8d8] after: after:font-thin hover:text-[#bcccf8] items-center text-[40px]  font-bold text-center text-[#eff4ff]">
          E-commerce
        </h1>
      </NavLink>
        </div>

        <ul className="flex justify-between items-center w-[30%] text-center">
          {navItems?.map((item) => {
            return <NavLink to={item.path} className="cursor-pointer"> <li className="text-[20px] rounded bg-[#26262e] hover:mb-[3px] hover:shadow-[3px_3px_3px_3px_#4557bb7a] hover:bg-[#4556bb] transition-all duration-500 text-[#ffffff] font-bold p-1 px-2 cursor-pointer">
              {item.name}
            </li></NavLink>;
        })}
        </ul>

        <div className="buttons flex justify-between items-center gap-5  mr-4 w-[10%]">
          <button className="text-[20px] rounded-xl border-[#ffffff] mb-[3px] shadow-[3px_3px_3px_3px_#4557bb7a] bg-[#4557bb] hover:bg-[#4556bb]  transition-all duration-500 text-[#ffffff] font-bold p-1 px-3 cursor-pointer">
            Login
          </button>
          <button className="text-[20px] rounded-xl hover:border-[#ffffff] mb-[3px]  shadow-[3px_3px_3px_3px_#4557bb7a] bg-[#4557bb] hover:bg-[#4556bb] transition-all duration-500 text-[#ffffff] font-bold p-1 px-3 cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
