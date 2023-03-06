import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import TextRow from '../text/TextRow';
import { AddBoxSharp, DeleteForever } from '@mui/icons-material';

const MeetingParticipants = ({ data }) => {
  const { participants } = data;
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [designation, setDesignation] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        <IconButton sx={{ float: 'right' }} size="xl" onClick={handleClickOpen}>
          <AddBoxSharp color="primary" />
        </IconButton>
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {participants?.map((contact) => (
            <ListItem
              // onClick={() => handleClickOpen(contact)}
              alignItems="flex-start"
              style={{
                backgroundColor: '#fff',
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
              <IconButton sx={{ float: 'right' }}>
                <DeleteForever color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* ------------------------------ */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Participant</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new participant, please enter the details here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="designation"
            label="Designation"
            type="text"
            fullWidth
            variant="standard"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MeetingParticipants;
