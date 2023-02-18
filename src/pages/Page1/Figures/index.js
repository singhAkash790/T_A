import React from "react";
import Custom_Bg from "./components/Custom_Bg";
import Text from "./components/Text";

// Text props are figure_Number, Other_content,  Other_content1

const index = () => {
  return (
    <>
      <Custom_Bg />
      <div className="relative flex justify-center items-start  flex-row py-[7%] gap-20 mb-[250px] ">
        <Text figure_Number="50" Other_content="Year" Other_content1="LEGACY" className=" flex justify-center items-center" />
        <hr className=" h-[30px] w-1 bg-white flex justify-center mt-14" />
        <Text Other_content="UNITS DELIVERED IN " figure_Number="2150"  Other_content1="THe Last 36 month"  />
        <hr className=" h-[30px] w-1 bg-white flex justify-center mt-14" />
        <Text figure_Number="2700" Other_content="UPCOMMING UNITS COMING UP FOR" Other_content1="DELIVERD IN Next MONTH " />
      </div>
    </>
  );
};

export default index;
