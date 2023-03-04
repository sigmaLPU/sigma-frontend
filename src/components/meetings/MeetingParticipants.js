import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import TextRow from '../text/TextRow';

const MeetingParticipants = ({ data }) => {
  const { participants } = data;
  return (
    <Box
      backgroundColor={'#f5f5f5'}
      p="30px"
      overflow="auto"
      gridArea="participants"
      maxHeight={'400px'}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        // color={colors.greenAccent[400]}
      >
        Participants
      </Typography>
      <Button variant="contained" color="primary" sx={{ m: 2 }}>
        Add
      </Button>

      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {participants?.map((contact) => (
            <ListItemButton
              // onClick={() => handleClickOpen(contact)}
              alignItems="flex-start"
              style={{
                marginTop: '20px',
                // maxHeight: '100px',
                overflow: 'auto',
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                />
              </ListItemAvatar>
              <ListItemText
                primary={<>{contact.name}</>}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <TextRow>
                        <b>Email</b>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            mx: '10px',
                          }}
                        />

                        <Typography variant="h5">{contact.email}</Typography>
                      </TextRow>

                      <TextRow>
                        <b>Designation</b>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            mx: '10px',
                          }}
                        />

                        <Typography variant="h5">
                          {contact.designation}
                        </Typography>
                      </TextRow>
                    </Typography>
                  </React.Fragment>
                }
              />
              <Divider />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default MeetingParticipants;
