import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Contacts from './Contacts';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: be vietnam pro;
  color: #1D1D1D;
  cursor: pointer;
  font-size: 12px;
  background-color: #FFFFFF;
  width: 100%;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  padding: 9px 15px;
  

  &.${tabUnstyledClasses.selected} {
    color:  #FFFFFF;
    background-color: #1D1D1D;
    border-radius: 9999px;
    
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: be vietnam pro;
  font-size: 12px;
  
`;

const TabsList = styled(TabsListUnstyled)`
  width: 220px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;  
  border: 1px solid #707070;
`;

const MessageTab = () => {
  return (
    <div className='mx-auto flex justify-center'>
      <TabsUnstyled defaultValue={0} className='flex flex-col items-center justify-center'>
        <TabsList>
          <Tab>All messages</Tab>
          <Tab>Unread</Tab>
        </TabsList>
        <TabPanel value={0}><Contacts /></TabPanel>
        <TabPanel value={1}><h2 className="text-center text-slate-400 mt-[10px]">No Unread Message</h2></TabPanel>
      </TabsUnstyled>
    </div>
  );
};

export default MessageTab;