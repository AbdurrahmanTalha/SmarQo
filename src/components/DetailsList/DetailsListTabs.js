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
        <div className="border-0 m-0 p-0 ">
            <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white border-0 pb-[1px] pt-[53px] ">
                <p className="text-center mb-[32px] lg:md:text-[21px] text-[13px] text-[#ffffff] font-extralight">House Plans for a 2400 sqft land in Whitefield Banglore</p>
                <p className="lg:md:text-[36px] mb-[30px] text-center font-bold">Congratulations on connecting with “Full Name”</p>
                <Tabs
                    TabIndicatorProps={{ style: { backgroundColor: "#FFFFFF", border: "2px solid #FFFFFF" } }}
                    value={selectedTab}
                    onChange={handleSelectedTab}
                    centered
                >
                    <Tab label={<span className="text-[#ffffff]">Details List</span>} />
                    <Tab label={<span className="text-[#ffffff]">Smart quotes</span>} />
                </Tabs>
            </Box>
            {selectedTab === 0 && <DetailsList />}
            {selectedTab === 1 && <Connected />}
        </div>
    );
};

export default DetailsListTabs;