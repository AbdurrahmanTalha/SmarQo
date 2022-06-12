import React from 'react';
import Box from '@mui/material/Box';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import Toggle from '../helper/toggle/Toggle';
import "./UserInfo.css";

const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
};
const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#707070',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};
const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 592px;
  font-size: 13px;
  font-family: Be Vietnam Pro;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[300]};  
  outline: 1px solid ${theme.palette.mode === 'dark' ? grey[300] : grey[300]};
  border-radius: 11px;
  padding: 12px 12px;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? blue[100] : blue[100]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? grey[300] : grey[300]};
  }

  @media (max-width: 600px) {
    width: 191px;
  }
`,
);
const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});



const UserInfo = () => {
    return (
        <div className="border-0 m-0 p-0 pb-24 bg-[#F5F5F5]">
            <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white border-0 lg:md:h-[333px] h-[62px]">
                <div className="flex items-center">
                    <div className="flex items-center ml-[17px] pt-[20px]">
                        <button className="b-triangle lg:md:hidden block"></button>
                        <button className="lg:md:hidden  text-[#707070] text-[15px] flex items-center pl-[5px]">Back</button>
                    </div>
                    <h2 className="text-[16px] text-[#FFFFFF] mt-[20px] ml-[33px] lg:md:hidden block"><span className="font-medium">User</span> <span className="font-light">Dashboard</span></h2>
                </div>
            </Box>
            {/* Card Start */}
            <div className="pt-[47px] pb-[53px] lg:md:w-[1082px] rounded-[10px] lg:md:shadow-[#6361613d] lg:md:shadow-md bg-[#FFFFFF] lg:md:mx-auto
            lg:mt-[-220px] sm:mt-0 lg:md:pl-[88px] pl-[37px] lg:md:pr-[83px] pr-[30px] 
            lg:md:pt-[66px] ">
                <h2 className="lg:md:text-[30px] text-[#FFFFFF] lg:md:mt-[-130px] mt-0 lg:md:mb-[85px] mb-0  header"><span className="font-medium">User</span> <span className="font-light">Dashboard</span></h2>
                <div className="w-full">
                    <div className="flex justify-between">
                        <p className="lg:md:text-[16px] text-[14px] text-[#1D1D1D]">Chat remainder</p>
                        <label for="1" class="inline-flex relative items-center cursor-pointer mr-5">
                            <input type="checkbox" value="" id="1" class="sr-only peer" />
                            <div class="lg:md:w-[55px] w-[40px] lg:md:h-[28px] h-[21px] bg-[#AEAEAE] rounded-full peer peer-checked:ring-1 dark:peer-checked:ring-[#707070] dark:[#AEAEAE] peer-checked:after:translate-x-full  after:content-[''] after:absolute lg:md:after:top-[3.5px] after:top-[2.5px]
                                after:left-[4px] after:bg-[#1D1D1D] 
                                peer-checked:after:bg-[#707070] after:border-[#1D1D1D] peer-checked:after:border-[#707070] after:rounded-full lg:md:after:h-[21px] after:h-[15px] lg:md:after:w-[21px] 
                                after:w-[15px] after:transition-all dark:[#707070] 
                                peer-checked:bg-[#FFFFFF]"></div>
                        </label>
                    </div>
                    <div className="flex justify-between lg:md:mt-[39px] mt-[31px]">
                        <p className="lg:md:text-[16px] text-[14px] text-[#1D1D1D]">E-mail remainder</p>
                        <label for="2" class="inline-flex relative items-center cursor-pointer mr-5">
                            <input type="checkbox" value="" id="2" class="sr-only peer" />
                            <div class="lg:md:w-[55px] w-[40px] lg:md:h-[28px] h-[21px] bg-[#AEAEAE] rounded-full peer peer-checked:ring-1 dark:peer-checked:ring-[#707070] dark:[#AEAEAE] peer-checked:after:translate-x-full  after:content-[''] after:absolute lg:md:after:top-[3.5px] after:top-[2.5px]
                                after:left-[4px] after:bg-[#1D1D1D] 
                                peer-checked:after:bg-[#707070] after:border-[#1D1D1D] peer-checked:after:border-[#707070] after:rounded-full lg:md:after:h-[21px] after:h-[15px] lg:md:after:w-[21px] 
                                after:w-[15px] after:transition-all dark:[#707070] 
                                peer-checked:bg-[#FFFFFF]"></div>
                        </label>
                    </div>
                    <div className="flex justify-between lg:md:mt-[39px] mt-[31px] ">
                        <p className="lg:md:text-[16px] text-[14px] text-[#1D1D1D]">Recommendations latest news and updates</p>
                        <label for="4" class="inline-flex relative items-center mr-5 cursor-pointer">
                            <input type="checkbox" value="" id="4" class="sr-only peer" />
                            <div class="toggle lg:md:w-[55px] w-[40px] lg:md:h-[28px] h-[21px] bg-[#AEAEAE] rounded-full peer peer-checked:ring-1 dark:peer-checked:ring-[#707070] dark:[#AEAEAE] peer-checked:after:translate-x-full  after:content-[''] after:absolute lg:after:top-[3.5px] md:after:top-[3px] after:top-[14px]
                                after:left-[4px] after:bg-[#1D1D1D] 
                                peer-checked:after:bg-[#707070] after:border-[#1D1D1D] peer-checked:after:border-[#707070] after:rounded-full lg:md:after:h-[21px] after:h-[15px] lg:md:after:w-[21px] 
                                after:w-[15px] after:transition-all dark:[#707070] 
                                peer-checked:bg-[#FFFFFF]"></div>
                        </label>
                    </div>
                </div>

                <div className="lg:md:mt-[70px] mt-[38px]">
                    <h2 className="lg:md:text-[39px] text-[32px] text-[#1B3548] 
                    lg:md:mb-[52px] mb-[40px]">SMS</h2>

                    <div className="w-full">
                        <div className="flex justify-between">
                            <p className="lg:md:text-[16px] text-[14px] text-[#1D1D1D]">Phone Number</p>
                            <label for="100" class="inline-flex relative items-center mr-5 cursor-pointer">
                                <input type="checkbox" value="" id="100" class="sr-only peer" />
                                <div class="lg:md:w-[55px] w-[40px] lg:md:h-[28px] h-[21px] bg-[#AEAEAE] rounded-full peer peer-checked:ring-1 dark:peer-checked:ring-[#707070] dark:[#AEAEAE] peer-checked:after:translate-x-full  after:content-[''] after:absolute lg:md:after:top-[3.5px] after:top-[2.5px]
                                after:left-[4px] after:bg-[#1D1D1D] 
                                peer-checked:after:bg-[#707070] after:border-[#1D1D1D] peer-checked:after:border-[#707070] after:rounded-full lg:md:after:h-[21px] after:h-[15px] lg:md:after:w-[21px] 
                                after:w-[15px] after:transition-all dark:[#707070] 
                                peer-checked:bg-[#FFFFFF]"></div>
                            </label>
                        </div>
                        <div className="flex justify-between lg:md:mt-[39px] mt-[31px]">
                            <p className="lg:md:text-[16px] text-[14px] text-[#1D1D1D]">E mail remainder</p>
                            <label for="5" class="inline-flex relative items-center mr-5 cursor-pointer">
                                <input type="checkbox" value="" id="5" class="sr-only peer" />
                                <div class="lg:md:w-[55px] w-[40px] lg:md:h-[28px] h-[21px] bg-[#AEAEAE] rounded-full peer peer-checked:ring-1 dark:peer-checked:ring-[#707070] dark:[#AEAEAE] peer-checked:after:translate-x-full  after:content-[''] after:absolute lg:md:after:top-[3.5px] after:top-[2.5px]
                                after:left-[4px] after:bg-[#1D1D1D] 
                                peer-checked:after:bg-[#707070] after:border-[#1D1D1D] peer-checked:after:border-[#707070] after:rounded-full lg:md:after:h-[21px] after:h-[15px] lg:md:after:w-[21px] 
                                after:w-[15px] after:transition-all dark:[#707070] 
                                peer-checked:bg-[#FFFFFF]"></div>
                            </label>
                        </div>
                        <div className="flex justify-between lg:md:mt-[39px] mt-[31px]">
                            <p className="lg:md:text-[16px] text-[14px] text-[#1D1D1D]">E-mail remainder</p>
                            <label for="6" class="inline-flex relative items-center mr-5 cursor-pointer">
                                <input type="checkbox" value="" id="6" class="sr-only peer" />
                                <div class="lg:md:w-[55px] w-[40px] lg:md:h-[28px] h-[21px] bg-[#AEAEAE] rounded-full peer peer-checked:ring-1 dark:peer-checked:ring-[#707070] dark:[#AEAEAE] peer-checked:after:translate-x-full  after:content-[''] after:absolute lg:md:after:top-[3.5px] after:top-[2.5px]
                                after:left-[4px] after:bg-[#1D1D1D] 
                                peer-checked:after:bg-[#707070] after:border-[#1D1D1D] peer-checked:after:border-[#707070] after:rounded-full lg:md:after:h-[21px] after:h-[15px] lg:md:after:w-[21px] 
                                after:w-[15px] after:transition-all dark:[#707070] 
                                peer-checked:bg-[#FFFFFF]"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="lg:md:mt-[70px] mt-[58px] ">
                    <h2 className="lg:md:text-[39px] text-[32px] text-[#1B3548] 
                    lg:md:mb-[41px] mb-[35px]">Password</h2>
                    <div className="mr-[83px]">
                        <div className="flex items-center lg:md:mb-[24px] mb-[20px] justify-between ">
                            <p className="lg:md:mr-[0px] mr-[63px] lg:md:text-[15px] text-[12px]">New Password </p>
                            <CustomInput aria-label="Demo input" placeholder="Password" />
                        </div>
                        <div className="flex items-center lg:md:mb-[24px] mb-[20px] justify-between ">
                            <p className="lg:md:mr-[0px] mr-[63px] lg:md:text-[15px] text-[12px]">Confirm Password </p>

                    <div>
                        <div className="flex items-center lg:md:mb-[24px] mb-[20px]">
                            <p className="lg:md:mr-[81px] whitespace-nowrap	 mr-[32px] lg:md:text-[15px] text-[12px]">New Password </p>
                            <CustomInput aria-label="Demo input" placeholder="Password" />
                        </div>
                        <div className="flex items-center lg:md:mb-[24px] mb-[20px]">
                            <p className="lg:md:mr-[57px] whitespace-nowrap	 mr-[12px] lg:md:text-[15px] text-[12px]">Confirm Password </p>
                            <CustomInput aria-label="Demo input" placeholder="Password" />
                        </div>
                    </div>

                    <button className="btn py-[11px] lg:md:w-[241px] w-[236px] bg-[#0C0C0C] lg:md:mt-[38px] mt-[45px] lg:md:mb-[19px] mb-[193px] lg:md:text-[15px] text-[14px] text-[#ffffff] rounded text-center">Change my password</button>
                </div>
            </div>
        </div >
    );
};

export default UserInfo;