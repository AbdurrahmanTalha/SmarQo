import React from 'react';

const Toggle = () => {
    return (
            <label for="red-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" id="red-toggle" class="sr-only peer" />
                <div class="lg:md:w-[55px] w-[40px] lg:md:h-[28px] h-[21px] bg-[#AEAEAE] rounded-full peer peer-checked:ring-1 dark:peer-checked:ring-[#707070] dark:[#AEAEAE] peer-checked:after:translate-x-full  after:content-[''] after:absolute lg:md:after:top-[3.5px] after:top-[2.5px]
                                after:left-[4px] after:bg-[#1D1D1D] 
                                peer-checked:after:bg-[#707070] after:border-[#1D1D1D] peer-checked:after:border-[#707070] after:rounded-full lg:md:after:h-[21px] after:h-[15px] lg:md:after:w-[21px] 
                                after:w-[15px] after:transition-all dark:[#707070] 
                                peer-checked:bg-[#FFFFFF]"></div>
            </label>
    );
};

export default Toggle;