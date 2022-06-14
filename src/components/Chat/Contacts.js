import { Divider } from '@mui/material';
import React from 'react';
import ChairGuy from "../../asserts/Mask Group 6.png"

const Contacts = () => {
    return (
        <div className='lg:md:px-[8px] px-[4px] lg:md:w-[300px] xl:w-[350px] mx-auto mt-[15px] w-screen'>
            <Divider variant="middle" className="shadow-sm lg:md:w-[100%] w-[90%]
                    lg:md:mb-[9.9px] mx-auto bg-[#f5ecec]" />
            <div className="flex w-full p-1">
                <img src={ChairGuy} alt="" className="lg:md:w-[54px] lg:md:h-[54px] w-[51px] h-[51px] rounded-full lg:md:mr-[13px] mr-[12px]" />
                <div>
                    <h2 className="lg:md:text-[16px] text-[15px] font-medium lg:md:mb-[4px]">Name</h2>
                    <p className="lg:md:text-[13px] text-[12px] font-light">Message here</p>
                </div>
            </div>
            <Divider variant="middle" className="shadow-sm lg:md:w-[100%] w-[90%]
                    lg:md:mb-[9.9px] mx-auto bg-[#f5ecec] lg:md:mt-[12px]" />

            <Divider variant="middle" className="shadow-sm lg:md:w-[100%] w-[90%]
                    lg:md:mb-[9.9px] mx-auto bg-[#f5ecec] lg:md:block hidden" />
            <div className="flex w-full p-1">
                <img src={ChairGuy} alt="" className="lg:md:w-[54px] lg:md:h-[54px] w-[51px] h-[51px] rounded-full lg:md:mr-[13px] mr-[12px]" />
                <div>
                    <h2 className="lg:md:text-[16px] text-[15px] font-medium lg:md:mb-[4px]">Name</h2>
                    <p className="lg:md:text-[13px] text-[12px] font-light">Message here</p>
                </div>
            </div>
            <Divider variant="middle" className="shadow-sm lg:md:w-[100%] w-[90%]
                    lg:md:mb-[9.9px] mx-auto bg-[#f5ecec] lg:md:mt-[12px]" />

            <Divider variant="middle" className="shadow-sm lg:md:w-[100%] w-[90%]
                    lg:md:mb-[9.9px] mx-auto bg-[#f5ecec] lg:md:block hidden" />
            <div className="flex w-full p-1">
                <img src={ChairGuy} alt="" className="lg:md:w-[54px] lg:md:h-[54px] w-[51px] h-[51px] rounded-full lg:md:mr-[13px] mr-[12px]" />
                <div>
                    <h2 className="lg:md:text-[16px] text-[15px] font-medium lg:md:mb-[4px]">Name</h2>
                    <p className="lg:md:text-[13px] text-[12px] font-light">Message here</p>
                </div>
            </div>
            <Divider variant="middle" className="shadow-sm lg:md:w-[100%] w-[90%]
                    lg:md:mb-[9.9px] mx-auto bg-[#f5ecec] lg:md:mt-[12px]" />

            <Divider variant="middle" className="shadow-sm lg:md:w-[100%] w-[90%]
                    lg:md:mb-[9.9px] mx-auto bg-[#f5ecec] lg:md:block hidden" />
            <div className="flex w-full p-1">
                <img src={ChairGuy} alt="" className="lg:md:w-[54px] lg:md:h-[54px] w-[51px] h-[51px] rounded-full lg:md:mr-[13px] mr-[12px]" />
                <div>
                    <h2 className="lg:md:text-[16px] text-[15px] font-medium lg:md:mb-[4px]">Name</h2>
                    <p className="lg:md:text-[13px] text-[12px] font-light">Message here</p>
                </div>
            </div>
            <Divider variant="middle" className="shadow-sm lg:md:w-[100%] w-[90%]
                    lg:md:mb-[9.9px] mx-auto bg-[#f5ecec] lg:md:mt-[12px]" />



        </div>
    );
};

export default Contacts;