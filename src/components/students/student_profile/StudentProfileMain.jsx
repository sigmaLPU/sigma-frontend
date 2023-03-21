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
        <Tab label="Document" {...a11yProps(1)} />
        <Tab label="Payment" {...a11yProps(2)} />
        <Tab label="Foreign Approval" {...a11yProps(3)} />
        <Tab label="Visa" {...a11yProps(4)} />
        <Tab label="Done" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box
          display="flex"
          flexWrap="wrap"
          gap="30px"
          justifyContent="space-between"
          width="650px"
        >
          <TextField
            sx={{
              width: '300px',
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            sx={{
              width: '300px',
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            sx={{
              width: '300px',
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            sx={{
              width: '300px',
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            sx={{
              width: '300px',
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            sx={{
              width: '300px',
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            sx={{
              width: '300px',
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <TextField
            sx={{
              width: '300px',
            }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          display="flex"
          flexWrap="wrap"
          gap="30px"
          justifyContent="space-between"
          flexDirection="column"
          width="650px"
        >
          <Alert severity="error">
            <AlertTitle>Passport</AlertTitle>
            <Box
              display="flex"
              justifyContent="space-between"
              minWidth="650px"
              alignItems="center"
            >
              This is an error alert —{' '}
              <strong
                style={{
                  marginRight: '250px',
                }}
              >
                check it out!
              </strong>
              <IconButton float="right">
                <Upload />
              </IconButton>
            </Box>
          </Alert>
          <Alert severity="success">
            <AlertTitle>IELTS</AlertTitle>
            <Box
              display="flex"
              justifyContent="space-between"
              minWidth="650px"
              alignItems="center"
            >
             itelts.jpg
              <strong
                style={{
                  marginRight: '250px',
                }}
              >
                check it out!
              </strong>
              <IconButton float="right">
                <Upload />
              </IconButton>
            </Box>
          </Alert>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
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
