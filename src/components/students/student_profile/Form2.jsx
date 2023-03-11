import * as React from 'react';
import { useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Form2() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
    


  
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '50vw', marginTop:-2 }}>
      <AppBar position="static"  style={{backgroundColor:'#ffffff'}}>
        <Tabs
          TabIndicatorProps={{style:{background:'#F07F1A'}}}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Upload Now" {...a11yProps(0)}    style={{minWidth:"50%", backgroundColor:'#ffffff',color:'#000000'}}/>
          <Tab label="Uploaded" {...a11yProps(1)}   style={{minWidth:"50%", backgroundColor:'#ffffff',color:'#000000'}}/>
         
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
        <div style={{marginLeft: "2rem"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <label style={{marginBottom: "5px", fontWeight: "600"}} htmlFor="option-select">Type Of Document</label>
          <select id="option-select" style={{width: "40rem", height: "2rem", borderRadius: "8px", border: "1px solid #f07F1A"}} value={selectedOption} onChange={handleOptionChange}>
            <option value={'Option 1'}>Bank Payment slip</option>
            <option value={'Option 2'}>current account balance</option>
            <option value={'Option 3'}>loan Document</option>
          </select>
        </div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "4rem"}}>
          <label style={{marginBottom: "5px", fontWeight: "600"}} htmlFor="date-input">Select a date:</label>
          <input id="date-input" style={{width: "11rem", height: "2rem", borderRadius: "8px", border: "1px solid #f07F1A" }} type="date" value={selectedDate} onChange={(event) => handleDateChange(event.target.value)} />
        </div>
      </div>
      <div>
        <label style={{margin: "0", padding: "0"}} htmlFor="file-upload">Choose a file:</label>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <input style={{height: "2rem", borderRadius: "8px", border: "1px solid #f07F1A"}} type="text" id="file-upload" value={selectedFile ? selectedFile.name : ''} placeholder="No file chosen" readOnly />
          <input style={{marginLeft: "1rem"}} type="file" id="file-input" onChange={handleFileChange} />
        </div>
      </div>
      <button style={{marginTop: "3rem", marginLeft: "22rem", width: "160px", height: "44px", backgroundColor: "#f07F1A", borderRadius: "8px", border: "none", cursor: "pointer"}}>upload</button>
    </div>
      
  
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
