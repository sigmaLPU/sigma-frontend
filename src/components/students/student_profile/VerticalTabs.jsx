import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicTabs from './BasicTabs.jsx';

import Form1 from './Form1.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import Form4 from './Form4.jsx';
import Form5 from './Form5.jsx';





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  
  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 524, }}
      
    >
      <Tabs
      TabIndicatorProps={{style:{background:'#000000',width:'0.34rem',height:'4.8rem'}}}
        orientation="vertical"
        variant="scrollable"
        scrollButtons={false}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width:'25rem'}}
      >
        <Tab label="Counselling" {...a11yProps(0)} style={{backgroundColor:'#F07F1A', boxSizing:'border-box',borderBottom: '13px solid #FFFFFF', fontWeight:'700',color:'#000000',height:'90px' }} />
        <Tab label="Document Verification" {...a11yProps(1)}  style={{backgroundColor:'#F07F1A', boxSizing:'border-box',borderBottom: '13px solid #FFFFFF',fontWeight:'700',color:'#000000' ,height:'90px'}}/>
        <Tab label="Payment & Approval" {...a11yProps(2)}  style={{backgroundColor:'#F07F1A', boxSizing:'border-box',borderBottom: '13px solid #FFFFFF',fontWeight:'700',color:'#000000',height:'90px' }}/>
        <Tab label="Foreign University Approval" {...a11yProps(3)}  style={{backgroundColor:'#F07F1A', boxSizing:'border-box',borderBottom: '13px solid #FFFFFF',fontWeight:'700',color:'#000000',height:'90px' }}/>
        <Tab label="Visa Approved" {...a11yProps(4)}  style={{backgroundColor:'#F07F1A', boxSizing:'border-box',borderBottom: '13px solid #FFFFFF',fontWeight:'700',color:'#000000',height:'90px' }}/>
        <Tab label="Process Done" {...a11yProps(5)}  style={{backgroundColor:'#F07F1A', boxSizing:'border-box',borderBottom: '13px solid #FFFFFF',fontWeight:'700',color:'#000000',height:'90px' }}/>
       
      </Tabs>
      <TabPanel  value={value} index={0}>
        <Form1/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Form2/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Form3/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Form4/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Form5/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <BasicTabs/>
      </TabPanel>
    
    </Box>
  );
}
