import React from 'react';
import ChairGuy from "../../asserts/Mask Group 6.png"
import Box from '@mui/material/Box';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

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
    width: 643px;
  font-size: 13px;
  font-family: Be Vietnam Pro;
  font-weight: 400;
  line-height: 1.2;
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
    width: 354px;
  }
`,
);
const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
        <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});

const AccountSettings = () => {
    return (
        <div className="border-0 m-0 p-0 pb-24 bg-[#F5F5F5]">
            <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white border-0 lg:md:h-[333px] h-[62px]">
                <div className="flex items-center">
                    <div className="flex items-center ml-[17px] pt-[20px]">
                        <button className="b-triangle lg:md:hidden block"></button>
                        <button className="lg:md:hidden  text-[#707070] text-[15px] flex items-center pl-[5px]">Back</button>
                    </div>
                    <h2 className="text-[16px] text-[#FFFFFF] mt-[20px] ml-[33px] lg:md:hidden block"><span className="font-medium">Account</span> <span className="font-light">Settings</span></h2>
                </div>
            </Box>
            {/* Card Start */}
            <div className="pt-[26px] pb-[53px] lg:md:w-[1082px] rounded-[10px] lg:md:shadow-[#6361613d] lg:md:shadow-md bg-[#FFFFFF] lg:md:mx-auto
            lg:md:mt-[-220px] mt-0 lg:md:pl-[36px] pl-[37px] lg:md:pr-[83px] pr-[30px]">
                <h2 className="lg:md:text-[30px] text-[#FFFFFF] lg:md:mt-[-100px] mt-0 lg:md:mb-[55px] mb-0  lg:md:ml-[-245px] ml-0"><span className="font-medium">Account</span> <span className="font-light">Settings</span></h2>
                <div>
                    <h2 className="lg:md:text-[58px] text-[34px] text-[#171717] lg:md:mb-[26px] mb-[17px]">Profile</h2>
                </div>

                <div>
                    <div className="flex items-start">
                        <img src={ChairGuy} alt="" className="lg:md:w-[227px] w-[136px] 
                lg:md:h-[246px] h-[147px] lg:md:mb-[26px] lg:md:mr-[50px] mr-[18px]" />

                        <div className="lg:md:block hidden">
                            <div className="lg:md:mb-[17px] mb-0">
                                <p className="lg:md:mb-[8px] mb-0 lg:md:text-[17px] text-[12px]">Name</p>
                                <CustomInput aria-label="Demo input" placeholder="Name" />
                            </div>
                            <div className="lg:md:mb-[17px] mb-0">
                                <p className="lg:md:mb-[8px] mb-0 lg:md:text-[17px] text-[12px]">Telephone Number</p>
                                <CustomInput aria-label="Demo input" placeholder="Telephone Number " />
                            </div>
                            <div className="lg:md:mb-[17px] mb-0">
                                <p className="lg:md:mb-[8px] mb-0 lg:md:text-[17px] text-[12px]">E-mail</p>
                                <CustomInput aria-label="Demo input" placeholder="E-mail" />
                            </div>
                        </div>

                        <div className="lg:md:hidden block">
                            <div className="flex flex-col items-center justify-start 
                            pr-[23px]">
                                <button className="btn py-[10px] w-[203px] bg-[#0C0C0C] 
                                mb-[7px] text-[13px] text-[#ffffff] rounded text-center">
                                    Upload New Picture</button>
                                <button className="btn py-[10px] w-[203px] bg-[#707070] text-[13px] text-[#ffffff] rounded text-center">
                                    Upload using Webcam</button>
                            </div>
                            <p className="text-[11px] italic text-[#1D43A2] mt-[12px]">(Upload a personal headshot for your profile pic so that people know who they are talking to)</p>
                        </div>
                    </div>

                    <div className="lg:md:hidden block mt-[39px]">
                            <div className="mb-[15px]">
                                <p className="mb-[11px] text-[14px]">Name</p>
                                <CustomInput aria-label="Demo input" placeholder="Name" />
                            </div>
                            <div className="mb-[15px]">
                                <p className="mb-[11px] text-[14px]">Telephone Number</p>
                                <CustomInput aria-label="Demo input" placeholder="Telephone Number " />
                            </div>
                            <div className="mb-[15px]">
                                <p className="mb-[11px] text-[14px]">E-mail</p>
                                <CustomInput aria-label="Demo input" placeholder="E-mail" />
                            </div>
                        </div>

                    <div className="lg:md:block hidden">
                        <div className="flex items-center">
                            <div className="flex flex-col items-center justify-start 
                        lg:md:mr-[50px] mr-0">
                                <button className="btn lg:md:py-[10px] py-[8px] lg:md:w-[232px] w-[321px] bg-[#0C0C0C] 
                            lg:md:mb-[9px] mb-[11px] lg:md:text-[15px] text-[15px] text-[#ffffff] rounded text-center">
                                    Upload New Picture</button>
                                <button className="btn lg:md:py-[10px] py-[8px] lg:md:w-[232px] w-[321px] bg-[#707070] lg:md:text-[15px] text-[15px] text-[#ffffff] rounded text-center">
                                    Upload using Webcam</button>
                            </div>
                            <p className="lg:md:text-[12px] italic text-[#1D43A2] 
                        lg:md:w-[238px]">(Upload a personal headshot for your profile pic so that people know who they are talking to)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Password Card */}
            <div className="lg:md:pt-[16px] pb-[28px] lg:md:w-[1082px] rounded-[10px] lg:md:shadow-[#6361613d] lg:md:shadow-md bg-[#FFFFFF] lg:md:mx-auto
            lg:md:mt-[30px] mt-[71px] lg:md:pl-[36px] pl-[37px]">
                <h2 className="lg:md:text-[58px] text-[35px] text-[#171717] lg:md:mb-[11px]">Password</h2>
                <p className="text-[#707070] lg:md:text-[15px] text-[12px] lg:md:mb-[21px] mb-[28px]">Its important to keep your account details up to date</p>
                <button className="btn lg:md:py-[10px] py-[8px] lg:md:w-[232px] w-[195px] bg-[#0C0C0C] lg:md:mb-[9px] mb-[107px] lg:md:text-[15px] text-[12px] 
                text-[#ffffff] rounded text-center">Change your Password</button>
            </div>
        </div>
    );
};

export default AccountSettings;