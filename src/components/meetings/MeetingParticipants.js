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
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const MeetingParticipants = ({ data }) => {
  const params = useParams();
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
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = (variant, message) => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar(message, { variant });
    };


  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

  const handleAddParticipant = async () => {
    if (!name || !email || !designation) {
      alert('Please fill all the fields');
      return;
    }


    const updatedParticipants = [...participants, { name, email, designation }];

    await axios
      .put(
        `${url}/api/v2/meeting/single/${params.id}`,
        {
          participants: updatedParticipants,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setOpen(false);
        handleClickVariant('success', 'Added')();
                window.location.reload();

      })
      .catch((err) => {
        setOpen(false);
        handleClickVariant('error', 'Error')();
      });
  };

  const handleDeleteParticipant = async (id) => {
    const updatedParticipants = participants.filter((item) => item._id !== id);

    await axios
      .put(
        `${url}/api/v2/meeting/single/${params.id}`,
        {
          participants: updatedParticipants,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        handleClickVariant('success', 'Deleted')();
                window.location.reload();

      })
      .catch((err) => {
        handleClickVariant('error', 'Error')();
      });
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
              <IconButton
                sx={{ float: 'right' }}
                onClick={() => handleDeleteParticipant(contact._id)}
              >
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
          <Button onClick={handleAddParticipant}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MeetingParticipants;
