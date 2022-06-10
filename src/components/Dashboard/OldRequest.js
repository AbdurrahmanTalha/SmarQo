import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';
const OldRequest = () => {
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
            liked: false,
            date: "12th Jan 2022",
            completed: false,
            name: "Professional Name"
        },
        {
            id: 2,
            liked: true,
            date: "12th Jan 2022",
            completed: true,
            name: "Professional Name"
        },
        {
            id: 3,
            liked: true,
            date: "12th Jan 2022",
            completed: true,
            name: "Professional Name"
        }
    ]
    // <button className="w-[139px] h-[36px] bg-[#0C0C0C] text-white rounded-[5px] text-[15px] font-light">Complete</button> :: Complete BTN
    // <button className="rounded-full py-[7px] flex items-center justify-center text-[16px] font-normal w-[160px] bg-[#1B4830] mr-[192px] px-[49px] text-white">Liked</button> :: LINKED BTN
    // <button className="rounded-full py-[7px] flex items-center justify-center text-[16px] font-normal text-[#000] border-2 mr-[192px] border-[#707070] px-[49px]">Disliked</button> :: Disliked / No review BUTTON
    // <button className="w-[139px] h-[36px] bg-[#707070] text-white rounded-[5px] text-[15px] font-light">Waiting...</button> waiting Button / View Quotes Btn


    return (
        <TableContainer>
            <Table sx={{ overflow: "auto" }} className={classes.table}>
                <TableHead>
                    <TableCell align="center">
                        <span className="text-[16px] lg:md:block hidden  font-medium mr-[149px] text-[#274962]">Professional Name</span>
                    </TableCell>
                    <TableCell align="center">
                        <span className="text-[16px] lg:md:block hidden font-medium mr-[212px] text-[#274962]">Review</span></TableCell>
                    <TableCell align="center" >
                        <span className="text-[16px] lg:md:block hidden font-medium  text-[#274962] ">Status</span>
                    </TableCell>
                    <TableCell align="center">
                        <span className="ml-[201px] lg:md:block hidden text-[16px] font-medium  text-[#274962" >Date</span>
                    </TableCell>
                </TableHead>
                <TableBody className="align-middle">
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}

                        >
                            <TableCell align="left" >{row.name}</TableCell>
                            <TableCell align="left" >{
                                row.liked
                                    ?
                                    <button className="rounded-full py-[7px] flex items-center justify-center text-[16px] font-normal w-[160px] bg-[#1B4830] mr-[192px] px-[49px] text-white">Liked</button>
                                    :
                                    <button className="rounded-full py-[7px] flex items-center justify-center text-[16px] font-normal text-[#000] border-2 mr-[192px] border-[#707070] px-[49px]">Disliked</button>


                            }</TableCell>
                            <TableCell align="center">{
                                row.completed ? <button className="w-[139px] h-[36px] bg-[#0C0C0C] text-white rounded-[5px] text-[15px] font-light">Complete</button> : <button className="w-[139px] h-[36px] bg-[#707070] text-white rounded-[5px] text-[15px] font-light">Waiting...</button>
                            }</TableCell>
                            <TableCell align="right">{row.date}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OldRequest;