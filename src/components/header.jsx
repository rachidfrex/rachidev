import React from "react";
import graph from "../assets/graph.png";
import graph1 from "../assets/graph1.png";
function Header() {
  return (
    <div className="flex w-full text-white justify-center  z-50 relative  ">
      <h1 className=" text-9xl font-bold  p-5 float-left w-[50%] text-start flex justify-end items-end  ">
        Hello I am Rachid

        
      </h1>
      {/* <span className=" absolute top-0 right-0 bottom-0 -z-10">
        <img src={graph} alt
        ="graph" className="w-[100%]"  />
        </span> */}
        <span className=" absolute top-[17px] right-[280px] bottom-0 -z-10 ">
        <div
        className=" border-[18px] border-sky-700 w-[60px] h-[60px] rounded-2xl "
        >
        </div>
        </span>
        <span className=" absolute top-[100px] right-[250px]  -z-10 ">
        <div
        className=" border-[10px] border-red-700 w-[20px] h-[20px] rounded-full "
        >
        </div>
        </span>
     
     
    </div>
  );
}

export default Header;
