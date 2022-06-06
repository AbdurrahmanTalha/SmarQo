import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import pencil from "../../asserts/icons/pencil.png"
import './ReqDetails.css';

const ReqDetails = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className=''>
                <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white pt-4">
                    <p className="text-center text-[21px] text-[#707070] font-extralight">House Plans for a 2400 sqft land in Whitefield Banglore</p>
                    <Tabs
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#707070",

                            }
                        }}
                        value={value}
                        onChange={handleChange}
                        centered
                    >
                        <Tab label={<span className="text-white">Details</span>} />
                        <Tab label={<span className="text-white">Smart quotes</span>} />
                    </Tabs>
                </Box>
            </div>
            <div className="main_container_wrapper ">
                <div className="card-detail lg:md:w-[738px] w-auto mt-[40px] lg:md:mx-auto">
                    <div className="flex lg:md:justify-between">
                        <div style={{ marginBottom: "37px" }} className="text-[42px] sm:flex justify-end self-end w-full lg:text-[58px] font-medium">Requirement
                            Details</div>
                        <div className="text-center lg:md:flex lg:md:flex-col lg:md:justify-center mr-[55px]">
                            <img src={pencil} alt="" className="lg:md:w-[76px] w-[100px] lg:md:mt-0 mt-[135px]" />
                            <div className="lg:md:block hidden">
                                <p className="font-bold text-[12px]">Posted Data:</p>
                                <p className="text-[12px] font-light italic">Jan 3rd 2022<br></br>
                                    ( 6:25pm)</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[18px] mb-[14px]">Select <span className="font-bold">Category/ Industry</span></h2>
                    <p className="text-[#1D43A2] text-[16px] mb-[47px]">House Construction</p>
                    <h2 className="text-[18px] mb-[13px]">Select your <span className="font-bold">location</span></h2>
                    <p className="text-[#1D43A2] text-[16px] mb-[48px]">Location detected - Whitefield, Bangalore</p>
                    <h2 className="text-[18px] mb-[13px]">Tell us more about your <span className="font-bold">requirements</span> here.</h2>
                    <p className='text-[#1D43A2] text-[16px] mb-[47px]'>Require a plan for a small site of 2400 Sqf, just the plan only. </p>
                    <h2 className="text-[18px] mb-[13px]"><span>How</span> do you like to connect?</h2>
                    <p className="text-[#1D43A2] mb-[54px] text-[16px]">Allow professionals to contact me back ( Your contact number is
                        shared )</p>
                    <p className="text-center my-[43px] text-[13px] text-[#212121] italic font-thin flex justify-end">Post requirement  ID: 32533382</p>

                </div>

            </div>
        </div>
    );
};

export default ReqDetails;