import React, { useState } from "react";
import logo from "../../asserts/sqo log.png"
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./header.css";
import Button from "../helper/buttons/Button";
import { Link } from "react-router-dom";
import Select from "../helper/select/Select";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  const [islogin, setislogin] = useState(false);
  return (
    <div className="header_container">
      <div className="header">
        <div className="left_header">
          <div className="logo mr-[-45px] ml-[-45px] lg:md:ml-0">
            <img src={logo} alt="logo" />
          </div>
          <Link to="/" className="company_name hidden lg:md:block">
            SmarQo
          </Link>
          {/* <div className="explore">
                        Explore <ArrowDropDownIcon />
                    </div> */}
          <Select
            options={["option1", "option2", "optiom3"]}
            placeholder="Explore"
            className="explore"
            id="companyExplore"
          />
        </div>
        <div className="right_header">
          <div className="right_header_section1">Join as a Professional</div>
          <div
            className="right_header_section2"
            style={islogin ? { gap: "10px" } : {}}
          >
            {islogin ? (
              <div className="login_signup_btns">
                <NotificationsIcon />
                <EmailIcon />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: "20px", height: "20px", fontSize: ".9rem" }}
                />
              </div>
            ) : (
              <div className="login_signup_btns">
                <Link to="/login" className="login_btn btn hidden lg:md:block">
                  Login
                </Link>
                <Link to="/signup" className="signup_btn btn hidden lg:md:block">
                  sign up
                </Link>
                {/* mobile buttons */}
                <div className="block lg:md:hidden mt-[24px] lg:md:mt-[0px]">
                  <Link to="/login" className="bg-[#373737] text-white px-4 py-2  rounded text-[13px]">
                    LOGIN
                  </Link>
                  <Link to="/signup" className="text-[#373737] px-4 py-2 text-[13px]">
                    REGISTER
                  </Link>
                </div>

              </div>
            )}
            <div className="req-btn">
              <Button
                btn_text="post requirement"
                btn_link="/postRequirementNow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
