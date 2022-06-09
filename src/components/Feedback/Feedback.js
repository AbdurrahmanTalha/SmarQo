import React from 'react';
import Box from '@mui/material/Box';

const Feedback = () => {
    return (
        <div className="border-0 m-0 p-0 mb-24">
            <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white border-0 h-[523px] ">
                <div className="flex items-center ml-[17px] pt-[30px]">
                    <button className="b-triangle lg:md:hidden block"></button>
                    <button className="lg:md:hidden  text-[#707070] text-[15px] flex items-center pl-[5px]">Back</button>
                </div>
            </Box>
        </div>    
    );
};

export default Feedback;