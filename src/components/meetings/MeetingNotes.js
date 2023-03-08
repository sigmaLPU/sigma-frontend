import { AddBoxSharp, DeleteForever } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MeetingNotes = ({ data }) => {
  const params = useParams();
  const { momNotes } = data;

    const [open, setOpen] = React.useState(false);

    const [value, setValue] = React.useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

      const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

  const handleAddNote = async () => {
    if (!value) {
      alert('Please fill all the fields');
      return;
    }
    const updatedNotes = [...momNotes, { value }];


    await axios
      .put(
        `${url}/api/v2/meeting/single/${params.id}`,
        {
          momNotes: updatedNotes,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setOpen(false);
      })
      .catch((err) => {
        setOpen(false);
        alert('Error');
      });
  };

  const handleDeleteNote = async (id) => {
    const updatedNotes = momNotes.filter((item) => item._id !== id);

    await axios
      .put(
        `${url}/api/v2/meeting/single/${params.id}`,
        {
          momNotes: updatedNotes,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        alert('Deleted');
      })
      .catch((err) => {
        alert('Error');
      });
  };


  return (
    <Box backgroundColor={'#f5f5f5'} p="30px" overflow="auto" gridArea="note">
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        // color={colors.greenAccent[400]}
      >
        Meeting Notes
        <IconButton sx={{ float: 'right' }} size="xl" onClick={handleClickOpen}>
          <AddBoxSharp color="primary" />
        </IconButton>
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="10px"
        maxHeight={'400px'}
      >
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {momNotes?.map((process) => (
            <ListItem
              alignItems="flex-start"
              style={{
                backgroundColor: '#fff',
                marginTop: '10px',
                maxHeight: '100px',
                overflow: 'auto',
              }}
              //   onClick={() => handleClickOpen(process)}
            >
              <ListItemText primary={<> {process?.value}</>} />
              <IconButton sx={{ float: 'right' }}
                onClick={() => handleDeleteNote(process._id)}
              >
                <DeleteForever color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* ------------------------------ */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new note, please enter the title here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNote}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MeetingNotes;
