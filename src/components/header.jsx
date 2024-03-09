import React from "react";
import graph from "../assets/graph.png";
function Header() {
  return (
    <div className="flex w-full text-white justify-center  z-50  ">
      <h1 className=" text-9xl font-bold  p-5 float-left w-[50%] text-start flex justify-end items-end  ">
        Hello I am Rachid

        
      </h1>
      <span className=" absolute top-0 right-0 bottom-0 -z-10">
        <img src={graph} alt
        ="graph" className="w-[100%]"  />
        </span>
     
     
    </div>
  );
}

export default Header;
