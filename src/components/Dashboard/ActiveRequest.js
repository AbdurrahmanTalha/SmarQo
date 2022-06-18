import React from 'react';
import { IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
const ActiveRequest = () => {
    const useStyles = makeStyles({
        table: {
            minWidth: "auto",
            borderSpacing: "0 4px",
            border: "none"
        }
    })
    const classes = useStyles()

    const tableData = [
        {
            id: 1,
            quote_type: "Construction Plan",
            pending: true,
            action: false
        },
        {
            id: 2,
            quote_type: "Construction Plan",
            pending: false,
            action: true
        },
        {
            id: 3,
            quote_type: "Construction Plan",
            pending: false,
            action: true
        }
    ]
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const options = [
        "View request post",
        "Post Similar request"
    ]
    return (
        <TableContainer className="p-5">
            <Table sx={{ overflow: "hidden" }} className={classes.table}>
                <TableHead>
                    <TableCell align="center">
                        <span className="text-[16px] lg:md:block hidden  font-medium mr-[149px] text-[#274962]">Quotes type</span>
                    </TableCell>
                    <TableCell align="center">
                        <span className="text-[16px] lg:md:block hidden font-medium mr-[212px] text-[#274962]">Status</span></TableCell>
                    <TableCell align="center" >
                        <span className="text-[16px] lg:md:block hidden font-medium  text-[#274962] ">Action</span>
                    </TableCell>
                    <TableCell align="center">
                        <span className="ml-[201px] lg:md:block hidden text-[16px] font-medium  text-[#274962" >Details</span>
                    </TableCell>
                </TableHead>
                <TableBody className="align-middle px-10">
                    {
                        tableData.map((row) => (
                            <TableRow
                                key={row.id}

                            >
                                <TableCell align="left" className="text-[14px]  lg:md:font-normal font-bold">
                                    <div className="lg:md:block hidden">
                                        {row.quote_type}
                                    </div>
                                </TableCell>
                                <TableCell align="left" className="lg:md:hidden ml-[34px]">
                                    <div className="flex">
                                        <div className="mr-[34px]">
                                            <p className="text-[15px] font-bold mb-[24px] whitespace-nowrap">{row.quote_type}</p>
                                            {
                                                row.pending
                                                    ?
                                                    <button className="rounded-full w-[92px] flex items-center justify-center text-[13px] font-normal text-[#000] border-2 h-[24px] border-[#707070] ">Pending</button>
                                                    :
                                                    <button className="rounded-full  flex items-center justify-center text-[13px] font-normal  bg-[#1B3548]  w-[92px]  h-[24px] text-white">Active</button>

                                            }
                                        </div>
                                        <div className="lg:md:hidden block">
                                            <p className="text-[12px] font-light text-center underline text-[#274962] mb-[22px]">Details</p>
                                            {
                                                row.action ?
                                                    <button className="lg:md:w-[139px] w-[108px] h-[28px] lg:md:h-[36px] bg-[#0C0C0C] text-white rounded-[5px] text-[15px] font-light">View Quotes</button> :
                                                    <button className="lg:md:w-[139px] w-[108px] lg:md:h-[36px] h-[28px] bg-[#707070] text-white rounded-[5px] text-[15px] font-light">Waiting...</button>
                                            }
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="lg:md:flex justify-center items-center hidden" align="left">
                                    <div>
                                        {
                                            row.pending
                                                ?
                                                <button className="rounded-full mb-[10px] w-[92px] lg:md:w-[160px] py-[7px] flex items-center justify-center text-[16px] font-normal text-[#000] border-2 lg:md:mr-[192px] border-[#707070] px-[49px]">Pending</button>
                                                :
                                                <button className="rounded-full mb-[10px] lg:md:mr-[192px] py-[7px] flex items-center justify-center text-[16px] font-normal lg:md:w-[160px] bg-[#1B3548] lg:md:px-[49px] w-[92px] text-white">Active</button>

                                        }</div>
                                </TableCell>
                                <TableCell align="center" className="">
                                    <div className="lg:md:block hidden">

                                        {
                                            row.action ? <button className="w-[139px] h-[36px] bg-[#0C0C0C] text-white rounded-[5px] text-[15px] font-light">View Quotes</button> : <button className="w-[139px] h-[36px] bg-[#707070] text-white rounded-[5px] text-[15px] font-light">Waiting...</button>
                                        }
                                    </div>
                                </TableCell>
                                <TableCell align="right" className="lg:md:block hidden">
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}

                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                // maxHeight: 2 * 4.5,
                                                width: '191px',
                                            },
                                        }}
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ActiveRequest;