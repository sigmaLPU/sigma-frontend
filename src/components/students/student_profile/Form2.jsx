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
    <Box sx={{ bgcolor: 'background.paper', width: 1000, marginTop:-2 }}>
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
            <div className='main'>
        <div className="form-container">
            <div className='inputfield1'>
      <label className="form-label" htmlFor="option-select">Type Of Document</label>
      <select id="option-select" className="form-input1" value={selectedOption} onChange={handleOptionChange}>
        <option value={'Option 1'}>Aadhar card</option>
        <option value={'Option 2'}>10th Certificate</option>
        <option value={'Option 3'}>12th Certificate</option>
      </select>
      </div>
      <div className='inputfield2'>
      <label className="form-label" htmlFor="date-input">Select a date:</label>
      <input id="date-input" className="form-input2" type="date" value={selectedDate} onChange={(event) => handleDateChange(event.target.value)} />
    </div>
    </div>
    <div>
      <label className='form-label' htmlFor="file-upload">Choose a file:</label>
      <div className="file-input-container">
        <input
        className='form-input3'
          type="text"
          id="file-upload"
          value={selectedFile ? selectedFile.name : ''}
          placeholder="No file chosen"
          readOnly
        />
       
       
          <input className='input-button' type="file" id="file-input" onChange={handleFileChange} />
        
      </div>
    </div>
    <button className='upload-button'>upload</button>
    </div>
      
  
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
