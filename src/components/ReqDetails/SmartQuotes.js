import React from 'react';
import { BsFillClockFill } from 'react-icons/bs';

const SmartQuotes = () => {
    return (
        <div className="main_container_wrapper ">
            <div className="lg:md:pt-[47px] mx-auto lg:md:pb-[53px] lg:md:pl-[53px] rounded-[10px] lg:md:shadow-[#6361613d] lg:md:shadow-md  lg:md:bg-[#FFFFFF]  w-auto mt-[40px] lg:md:mx-auto lg:md:w-[70%]">
                <div style={{ marginBottom: "37px" }} className="text-[42px] lg:text-[58px] font-medium"><h2 className='w-full lg:md:text-left text-center'>Your requirement is
                     posted and being reviewed. </h2> </div>
                <div className="my-12 flex justify-center items-center">
                    <div className="text-[#707070] text-9xl text-center">
                        <BsFillClockFill></BsFillClockFill>
                    </div>
                </div>

                <h2 className="lg:md:text-[18px] text-[14px] mb-[13px] lg:md:text-left text-center">Please be patient and wait for smart quotes from professionals.
                </h2>
            </div>

        </div>
    );
};

export default SmartQuotes;