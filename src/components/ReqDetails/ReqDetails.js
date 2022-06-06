import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './ReqDetails.css';
import Details from './Details';
import SmartQuotes from './SmartQuotes';

const ReqDetails = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleSelectedTab = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <div>
            <div className=''>
                <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white pt-[53px] mb-[38px]">
                    <p className="text-center text-[21px] text-[#707070] font-extralight">House Plans for a 2400 sqft land in Whitefield Banglore</p>
                    <Tabs
                        TabIndicatorProps={{ style: { backgroundColor: "#707070", } }}
                        value={selectedTab}
                        onChange={handleSelectedTab}
                        centered
                    >
                        <Tab label={<span className="text-white">Details</span>} />
                        <Tab label={<span className="text-white">Smart quotes</span>} />
                    </Tabs>
                </Box>
                {selectedTab === 0 && <Details />}
                {selectedTab === 1 && <SmartQuotes />}
            </div>

        </div>
    );
};

export default ReqDetails;