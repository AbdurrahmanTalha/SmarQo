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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';

const Header = () => {
  const [islogin, setislogin] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header_container">
      <div className="header">

        <div className="left_header lg:ml-[14%]">
          <div className="logo mr-[-45px] ml-[-45px] lg:md:ml-0">

            <img src={logo} alt="logo" />
          </div>
          <Link to="/" className="company_name text-3xl mr-[85px]  hidden lg:md:block">
            SmarQo
          </Link>
          <Select
            options={["option1", "option2", "optiom3"]}
            placeholder="Explore"
            className="explore mt-[15px]"
            id="companyExplore"
          />
        </div>
        <div className="right_header">
          {
            islogin ? (
              <></>
            ) : <div className="right_header_section1 text-[1rem]">Join as a Professional</div>
          }
          <div
            className="right_header_section2"
            style={islogin ? { gap: "10px" } : {}}
          >
            {islogin ? (
              <div className="login_signup_btns">
                <NotificationsIcon />
                <EmailIcon />
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"

                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className="ml-0" sx={{ width: "20px", height: "20px", fontSize: ".9rem" }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 191,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem>
                    Old Requests
                  </MenuItem>
                  <MenuItem>
                    Notifactions
                  </MenuItem>
                  <MenuItem>
                    Account Settings
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    Switch to seller
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div className="login_signup_btns">
                <Link to="/login" className="login_btn text-[16px] btn hidden lg:md:block">
                  Login
                </Link>
                <Link to="/signup" className="signup_btn text-[16px] btn hidden lg:md:block">
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