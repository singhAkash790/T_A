import React from "react";
import Logo from "../../Logo/Logo";
import DataSection from "./Components/DataSection";

// Data Section props Location, Department, Type_Office,Address
// logo props height and width

const index = () => {
  return (
    <>
      <div className=" flex justify-center gap-[200px] items-center h-[610px] w-[1940px]">
        <Logo Height='100px' Width="100px" />
        <div className=" gap-[40px] pt-6">
          <DataSection
            Location="Gurugram"
            Type_Office="corporate & Registered office"
            Department="sales"
            Address=" Puri Construction  Private   Limited    4-7B, Ground Floor,  Tolstoy House, 15 & 17, Tolstoy Marg New Delhi - 110 001. CIN : U45201DL1971PTC005522"
          />
          <DataSection
            Location="Faridabad"
            Type_Office="marketing"
            Department="marketing"
            Address="Puri Construction Private Limited
11 - 12A, Ground Floor Tolstoy House,
15 & 17, Tolstoy Marg
New Delhi - 110001"
          />
        </div>
      </div>
    </>
  );
};

export default index;
