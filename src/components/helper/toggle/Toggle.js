import React from 'react';

const Toggle = () => {
    return (
            <label for="red-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" id="red-toggle" class="sr-only peer" />
                <div class="w-[55px] h-[28px] bg-[#AEAEAE] rounded-full peer peer-checked:ring-1 dark:peer-checked:ring-[#707070] dark:[#AEAEAE] peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3.5px] 
                                after:left-[8px] after:bg-[#1D1D1D] 
                                peer-checked:after:bg-[#707070] after:border-[#1D1D1D] peer-checked:after:border-[#707070] after:rounded-full after:h-[21px] after:w-[21px] after:transition-all dark:[#707070] 
                                peer-checked:bg-[#FFFFFF]"></div>
            </label>
    );
};

export default Toggle;