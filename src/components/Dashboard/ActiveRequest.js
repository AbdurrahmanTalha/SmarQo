import React from 'react';
import {IconButton, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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
        <TableContainer >
            <Table className={classes.table}>
                <TableHead>
                    <TableCell align="center"><span className="text-[16px] font-medium mr-[149px] text-[#274962]">Quotes type</span></TableCell>
                    <TableCell align="center"><span className="text-[16px] font-medium mr-[212px] text-[#274962]">Status</span></TableCell>
                    <TableCell align="center" ><span classname="text-[16px] font-medium  text-[#274962] ">Action</span></TableCell>
                    <TableCell align="center"><span className="ml-[201px] text-[16px] font-medium  text-[#274962" >Details</span></TableCell>
                </TableHead>
                <TableBody className="align-middle">
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}

                        >
                            <TableCell align="left" >{row.quote_type}</TableCell>
                            <TableCell align="left" >{
                                row.pending
                                    ?
                                    <button className="rounded-full py-[7px] flex items-center justify-center text-[16px] font-normal text-[#000] border-2 mr-[192px] border-[#707070] px-[49px]">Pending</button>
                                    :
                                    <button className="rounded-full py-[7px] flex items-center justify-center text-[16px] font-normal w-[160px] bg-[#1B3548] px-[49px] text-white">Active</button>

                            }</TableCell>
                            <TableCell align="center">{
                                row.action ? <button className="w-[139px] h-[36px] bg-[#0C0C0C] text-white rounded-[5px] text-[15px] font-light">View Quotes</button> : <button className="w-[139px] h-[36px] bg-[#707070] text-white rounded-[5px] text-[15px] font-light">Waiting...</button>
                            }</TableCell>
                            <TableCell align="right"><IconButton
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