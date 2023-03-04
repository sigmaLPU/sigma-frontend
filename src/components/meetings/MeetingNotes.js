import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const MeetingNotes = ({ data }) => {
  const { momNotes } = data;
  return (
    <Box backgroundColor={'#f5f5f5'} p="30px" overflow="auto" gridArea="note">
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        // color={colors.greenAccent[400]}
      >
        Meeting Notes
      </Typography>
      <Button variant="contained" color="primary" sx={{ m: 2 }}>
        Add
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="10px"
        maxHeight={'400px'}
      >
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {momNotes?.map((process) => (
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

      <Box></Box>
    </Box>
  );
};

export default MeetingNotes;
