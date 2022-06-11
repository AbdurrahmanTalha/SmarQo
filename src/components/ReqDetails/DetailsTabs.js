import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './DetailsTabs.css';
import Details from './Details';
import SmartQuotes from './SmartQuotes';

const DetailsTabs = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleSelectedTab = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <div className="border-0 m-0 p-0 bg-[#F5F5F5]">
            <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white border-0 pb-[1px] pt-[53px] ">
                <p className="text-center mb-[28px] lg:md:text-[21px] text-[13px] text-[#ffffff] font-extralight">House Plans for a 2400 sqft land in Whitefield Banglore</p>
                <Tabs
                    TabIndicatorProps={{ style: { backgroundColor: "#FFFFFF", border: "2px solid #FFFFFF" } }}
                    value={selectedTab}
                    onChange={handleSelectedTab}
                    centered
                >
                    <Tab label={<span className="text-[#ffffff]">Details</span>} />
                    <Tab label={<span className="text-[#ffffff]">Smart quotes</span>} />
                </Tabs>
            </Box>
            {selectedTab === 0 && <Details />}
            {selectedTab === 1 && <SmartQuotes />}
        </div>
    );
};

export default DetailsTabs;