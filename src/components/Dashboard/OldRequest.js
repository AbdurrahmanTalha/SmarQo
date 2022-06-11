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
                            <TableCell align="left" className="text-[14px]  lg:md:font-normal font-bold">
                                <div className="lg:md:block hidden">
                                    {row.name}
                                </div>
                            </TableCell>
                            <TableCell align="left" className="lg:md:hidden block ml-[34px]">
                                <div className="flex">
                                    <div className="mr-[-144px]">
                                        <p className="text-[15px] font-bold mb-[24px] whitespace-nowrap">{row.name}</p>
                                        {
                                            row.liked
                                                ?
                                                <button className="rounded-full flex items-center justify-center text-[13px] font-light h-[24px] w-[92px] bg-[#1B4830] mr-[270px] px-[49px] text-white">Liked</button>
                                                :
                                                <button className="rounded-full flex items-center justify-center text-[13px] h-[24px]  font-normal text-[#000] border-2 mr-[270px] w-[92px] border-[#707070] px-[49px]">Disliked</button>

                                        }
                                    </div>
                                    <div className="lg:md:hidden block">
                                        <p className="text-[12px] font-light text-center underline text-[#274962] mb-[22px]">{row.date}</p>
                                        {
                                            row.completed ?
                                                <button className="lg:md:w-[139px] w-[108px] h-[28px] lg:md:h-[36px] bg-[#0C0C0C] text-white rounded-[5px] text-[15px] font-light">View Quotes</button> :
                                                <button className="lg:md:w-[139px] w-[108px] lg:md:h-[36px] h-[28px] bg-[#707070] text-white rounded-[5px] text-[15px] font-light">Waiting...</button>
                                        }
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="lg:md:block hidden" align="left">
                                <div>
                                    {
                                        row.liked
                                            ?
                                            <button className="rounded-full py-[7px] flex items-center justify-center text-[16px] font-normal bg-[#1B4830] mr-[192px] h-[28px] w-[108px] px-[49px] mb-[10px] text-white">Liked</button>
                                            :
                                            <button className="rounded-full mb-[10px] py-[7px] flex items-center justify-center text-[16px] font-normal text-[#000]  w-[108px] h-[28px] border-2 mr-[192px] border-[#707070] px-[49px]">Disliked</button>

                                    }</div>
                            </TableCell>
                            <TableCell align="center" className="">
                                <div className="lg:md:block hidden">

                                    {
                                        row.completed ? <button className="w-[139px] h-[36px] bg-[#0C0C0C] text-white rounded-[5px] text-[15px] font-light">View Quotes</button> : <button className="w-[139px] h-[36px] bg-[#707070] text-white rounded-[5px] text-[15px] font-light">Waiting...</button>
                                    }
                                </div>
                            </TableCell>

                            <TableCell align="right"><span className="lg:md:block hidden">{row.date}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OldRequest;