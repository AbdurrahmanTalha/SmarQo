import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './DetailsListTabs.css';
import DetailsList from './DetailsList';
import Connected from './Connected';

const DetailsListTabs = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleSelectedTab = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <div className="border-0 m-0 p-0 bg-[#F5F5F5]">
            <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white border-0 pb-[1px] pt-[53px] ">
                {selectedTab === 0 && <>
                    <div className="lg:md:px-[127px] mb-[32px]  lg:md:flex w-auto justify-between">
                        <div>
                            <h2 className="mb-[32px] lg:md:text-[20px]  text-[13px] 
                            lg:md:font-regular font-extralight lg:md:text-left text-center">House Plans for a 2400 sqft land in Whitefield Banglore</h2>
                            <p className="text-[14px] font-extralight lg:md:block hidden  text-[#FFFFFF]">Professionals are viewing your request now!<br></br>
                                Please wait a few more minutes to get all quotes.</p>
                        </div>
                        <div className="text-center flex flex-col justify-center items-center">
                            <p className="lg:md:text-[50px] font-medium text-[23px]">23</p>
                            <p className="lg:md:text-[20px] font-light text-[14px]">QUOTES</p>
                        </div>
                    </div>
                </>}
                {selectedTab === 1 && <>
                    <p className="text-center mb-[32px] lg:md:text-[21px]  text-[#ffffff] font-extralight lg:md:block hidden">House Plans for a 2400 sqft land in Whitefield Banglore</p>
                    <p className="lg:md:text-[30px] mb-[30px] text-center text-[13px] font-bold">Congratulations on connecting with “Full Name”</p>
                </>}
                <Tabs
                    TabIndicatorProps={{ style: { backgroundColor: "#FFFFFF", border: "2px solid #FFFFFF" } }}
                    value={selectedTab}
                    onChange={handleSelectedTab}
                    centered
                >
                    <Tab label={<span className="text-[#ffffff]  text-[13px] lg:md:text-[15px] normal-case mb-[10px]">Details List</span>} />
                    <Tab label={<span className="text-[#ffffff] normal-case text-[13px] lg:md:text-[15px] mb-[10px]">Smart quotes</span>} />
                </Tabs>
            </Box>
            {selectedTab === 0 && <DetailsList />}
            {selectedTab === 1 && <Connected />}
        </div>
    );
};

export default DetailsListTabs;