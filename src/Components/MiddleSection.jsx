import React from "react";
import { mappedOrganizations } from "../Pages/SideBar";
import threedots from "../assets/Images/threedots.svg";
import plus from "../assets/Images/plus.svg";

const network = [ 
    { text: "Individual", isActive: true },
    { text: "Team", isActive: false },
    { text: "Wide", isActive: false }];

export const MiddleSection = () => {
  return (
    <div className="border my-5">
      <div className="flex justify-between p-4">
        <div>
          <span className=" font-semibold text-3xl flex gap-3">
            {mappedOrganizations}
            <img src={threedots} />
          </span>
        </div>
        <div>
          <button className="bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold py-2 px-4 rounded-md flex items-center">
            <img src={plus} alt="Plus" className="mr-2 h-5 w-5" />
            New OKR
          </button>
        </div>
      </div>
<div className="flex items-center gap-4 p-4">
      {network.map((item, index) => (
  <div key={index} className=" w-24 rounded-3xl py-2 border text-center   ">  
    <span className={`${ item.isActive ? "bg-[#189b92] p-3 rounded-3xl  text-center text-white"  : "  rounded-3xl text-[#555455]" } `}> {item.text} </span>  
  </div>
))}
</div>
    </div>
  );
};
