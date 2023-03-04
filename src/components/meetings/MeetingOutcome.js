import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const MeetingOutcome = ({ data }) => {
  const { outcome } = data;
  return (
    <Box
      backgroundColor={'#f5f5f5'}
      p="30px"
      overflow="auto"
      gridArea="outcome"
      height={'300px'}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        // color={colors.greenAccent[400]}
      >
        Meeting Outcome
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {outcome?.map((process) => (
            <ListItemButton
              alignItems="flex-start"
              style={{
                marginTop: '10px',
                maxHeight: '100px',
                overflow: 'auto',
              }}
              //   onClick={() => handleClickOpen(process)}
            >
              <ListItemText primary={<> {process?.value}</>} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default MeetingOutcome;
