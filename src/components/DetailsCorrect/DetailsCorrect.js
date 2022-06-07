import * as React from 'react';
import Button from '../helper/buttons/Button';
import { FaPen } from 'react-icons/fa';
import "./DetailsCorrect.css"

const DetailsCard = () => {
    return (
        <div className="main_container_wrapper ml-[25px]">
            <div className="lg:md:pt-[47px] mt-[105px] mx-auto h-auto  lg:md:pb-[53px] lg:md:pl-[53px] rounded-[10px] lg:md:shadow-[#6361613d] lg:md:shadow-md  lg:md:bg-[#FFFFFF]  lg:md:w-[738px] w-auto lg:md:mx-auto">
                <div className="flex lg:md:justify-between">
                    <div style={{ marginBottom: "37px" }} className="text-[42px] sm:flex justify-end self-end  lg:text-[58px] font-medium">Are these details
                        Correct?</div>
                    <div className="text-center lg:md:flex lg:md:flex-col lg:md:justify-center lg:md:mr-[55px] items-center">
                        <div className="bg-[#0C0C0C] text-[#ffffff] text-center p-4 flex justify-center items-center lg:md:text-3xl text-[1.5rem] rounded-[50%] lg:md:mt-0 mt-[60px] ">
                            <FaPen></FaPen>
                        </div>
                        <div className="lg:md:block hidden">
                            <p className="font-bold text-xs">Posted Date: </p>
                            <p className="text-xs font-light italic">Jan 3rd 2022<br></br>
                                ( 6:25pm)</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-lg mb-[14px]">Select <span className="font-bold">Category/ Industry</span></h2>
                <p className="text-[#1D43A2] text-base mb-[47px]">House Construction</p>
                <h2 className="text-lg mb-[13px]">Select your <span className="font-bold">location</span></h2>
                <p className="text-[#1D43A2] text-base mb-[48px]">Location detected - Whitefield, Bangalore</p>
                <h2 className="text-lg mb-[13px]">Tell us more about your <span className="font-bold">requirements</span> here.</h2>
                <p className='text-[#1D43A2] text-base mb-[47px]'>Require a plan for a small site of 2400 Sqf, just the plan only. </p>
                <h2 className="text-lg mb-[13px]">How do you like to <span className="font-bold">connect</span>?</h2>
                <p className="text-[#1D43A2] mb-[54px] text-base">Allow professionals to contact me back ( Your contact number is
                    shared )</p>
                <div className="flex justify-center items-center">
                    <Button
                        btn_text="Yes Post My Request"
                        style={{ fontSize: "1rem" }}

                    />
                </div>
            </div>
            <p className="text-center mt-[65px] ml-[15px] mb-[150px] text-sm text-[#212121] italic font-thin">By clicking 'Yes, post my requirement' , you agree to the Terms & Conditions and Privacy Policy Copyright © 2022 SmarQo.com</p>
        </div>
    );
}
export default DetailsCard;