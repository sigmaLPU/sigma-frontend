import {
  Box,
  Checkbox,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import React from 'react';

const StudentProfileExtra = () => {
  return (
    <Box
      backgroundColor={'#f5f5f5'}
      p="30px"
      overflow="auto"
      gridArea="extra"
      height="100%"
      width="100%"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        // color={colors.greenAccent[400]}
        marginBottom={'20px'}
      >
        Status
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        gap="30px"
      >
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>{' '}
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Basic Form
          </Typography>

          <Switch />
        </Box>
      </Box>
    </Box>
  );
};

export default StudentProfileExtra;
