import React from "react";

const DataSection = (props) => {
  return (
    <div className="flex  flex-row justify-between items-start w-[1000px] text-[20px]">
        {/* Contact section */}
      <div className=" ">
        <div className=" uppercase text-left font-bold">For {props.Location}</div>
        <div className=" flex flex-row gap-[100px] py-[30px]">
            <p  className=" uppercase fon "> Toll free Number</p>
            <p  className=" uppercase font-normal">1800 123 6244</p>
        </div>
        <div className="  flex flex-row gap-[100px]">
        <p  className=" uppercase w-[180px] ">Email</p>
            <p  className="  font-normal">{props.Department}@puriconstruction.com</p>
        </div>
      </div>
      {/* Address */}
      <div className="w-[300px] pb-[30px]">
        <div className="pb-[30px] pt-4 uppercase font-bold">{props.Type_Office} </div>
        <div className=" ">{props.Address}</div>
      </div>
    </div>
  );
};

export default DataSection;
