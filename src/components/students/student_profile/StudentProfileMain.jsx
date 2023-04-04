import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Alert,
  AlertTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Upload } from '@mui/icons-material';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

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

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [passport, setPassport] = React.useState(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        minHeight: '400px',
        marginTop: '15px',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', padding: '20px' }}
      >
        <Tab label="Basic" {...a11yProps(0)} />
        <Tab label="Payment" {...a11yProps(1)} />
        <Tab label="Document" {...a11yProps(2)} />
        <Tab label="Foreign Approval" {...a11yProps(3)} />
        <Tab label="Visa" {...a11yProps(4)} />
        <Tab label="Done" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tab1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab3 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tab2 />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </Box>
  );
}

const StudentProfileMain = () => {
  return (
    <Box backgroundColor={'#f5f5f5'} p="30px" overflow="auto" gridArea="main">
      <Typography variant="h5" fontWeight="600" align="center">
        Process Flow
      </Typography>

      <Box>
        <VerticalTabs />
      </Box>
    </Box>
  );
};

export default StudentProfileMain;
