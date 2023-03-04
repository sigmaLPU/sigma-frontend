import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import TextRow from '../text/TextRow';

const MeetingBasic = ({ data }) => {
  return (
    <Box backgroundColor={'#f5f5f5'} p="30px" overflow="auto" gridArea="basic"
    
    minWidth={{ xs: '100%', sm: '100%', md: '50vw', lg: '50vw' }}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        // color={colors.greenAccent[400]}
      >
        Basic Details
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <TextRow>
          <Typography
            sx={{
              width: '120px',
            }}
          >
            <b>Title</b>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: '10px',
            }}
          />

          <Typography variant="h5">{data?.title}</Typography>
        </TextRow>
        <TextRow>
          <Typography
            sx={{
              width: '120px',
            }}
          >
            <b>Meeting Type</b>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: '10px',
            }}
          />

          <Typography variant="h5">{data?.meetingType}</Typography>
        </TextRow>
        <TextRow>
          <Typography
            sx={{
              width: '120px',
            }}
          >
            <b>Meeting Time</b>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: '10px',
            }}
          />

          <Typography variant="h5">{data?.meetingTime}</Typography>
        </TextRow>
        <TextRow>
          <Typography
            sx={{
              width: '120px',
            }}
          >
            <b>End Time</b>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: '10px',
            }}
          />

          <Typography variant="h5">{data?.endTime}</Typography>
        </TextRow>
        <TextRow>
          <Typography
            sx={{
              width: '120px',
            }}
          >
            <b>Meeting Agenda</b>
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: '10px',
            }}
          />

          <Typography variant="h5">{data?.agenda}</Typography>
        </TextRow>
      </Box>
      <Button variant="contained" sx={{ mt: '30px', float: 'right' }}>
        Update Details
      </Button>
    </Box>
  );
};

export default MeetingBasic;
