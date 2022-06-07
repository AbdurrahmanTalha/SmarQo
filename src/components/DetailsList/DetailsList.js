import React from 'react';
import { IoShieldCheckmark } from 'react-icons/io5';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const DetailsList = () => {
    return (
        <div className="main_container_wrapper">
            <div className="lg:md:pt-[47px] mx-auto lg:md:pb-[53px] lg:md:pl-[53px] rounded-[10px] lg:md:shadow-[#6361613d] lg:md:shadow-md  lg:md:bg-[#FFFFFF]  lg:md:w-[738px] w-auto mt-[40px] lg:md:mx-auto">
                <div className="flex">
                    <div className='border-r-[1px] border-b-[1px] border-solid border-[#707070]'>
                        <h2 className='text-[24px] text-[#1B3548]'>Filters</h2>
                        <h2 className='text-[20px] text-[#1D1D1D] mt-[38px]'>Profile Type</h2>

                        <div className='flex mt-[10px]'>
                            <div className="flex items-center justify-center mr-[80px]">
                                <h2 className='text-[50px] p-4'><IoShieldCheckmark /></h2>
                                <div>
                                    <h2 className="text-[#1D1D1D] text-lg">Verified Profiles</h2>
                                    <h2 className="text-[#1D1D1D] text-[15px]">(Show only verified profiles)</h2>
                                </div>
                            </div>
                            <Checkbox
                                {...label}
                                className="mr-[45px]"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 50 } }}
                            />
                        </div>
                        <div>
                            <h2 className="mt-[34px] text-xl text-[#1D1D1D]">Price Range <span className='text-[13px]'>(per hour)</span></h2>

                            <div className="flex justify-start items-center pl-[14px] mt-[42px] mb-[28px]">
                                <Box width={400}>
                                    <Slider aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </div>

                            <div className="flex justify-between mb-[28px]">
                                <Button variant="outlined" className="text-[#707070] 
                        border-[#707070]">High</Button>
                                <Button variant="outlined" className="text-[#707070] 
                        border-[#707070] mr-[45px]">Low</Button>
                            </div>
                        </div>

                        <div>
                            <h2 className="mt-[34px] text-xl text-[#1D1D1D]">Experience<span className='text-[13px]'>(years)</span></h2>

                            <div className="flex justify-start items-center pl-[14px] mt-[42px] mb-[28px]">
                                <Box width={400}>
                                    <Slider aria-label="Default" valueLabelDisplay="auto" />
                                </Box>
                            </div>

                            <div className="flex justify-between mb-[28px]">
                                <Button variant="outlined" className="text-[#707070] 
                        border-[#707070]">High</Button>
                                <Button variant="outlined" className="text-[#707070] 
                        border-[#707070] mr-[45px]">Low</Button>
                            </div>
                        </div>

                        <div>
                            <h2 className="mt-[34px] mb-[21px] text-xl text-[#1D1D1D]">Location</h2>
                            <div className="flex items-center">
                                <Box sx={{
                                    width: 415,
                                    maxWidth: '100%',
                                }}>
                                    <TextField fullWidth id="fullWidth" />
                                </Box>
                            </div>
                        </div>

                        <div>
                            <h2 className="mt-[34px] mb-[21px] text-xl text-[#1D1D1D]">Specialization</h2>
                            <div className="flex items-center">
                                <Box sx={{
                                    width: 415,
                                    maxWidth: '100%',
                                }}>
                                    <TextField fullWidth id="fullWidth" />
                                </Box>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
// 576
export default DetailsList;