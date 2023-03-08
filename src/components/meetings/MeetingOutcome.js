import {
  AddBoxSharp,
  AddCircleOutline,
  AddCircleOutlineTwoTone,
  DeleteForever,
} from '@mui/icons-material';
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

const MeetingOutcome = ({ data }) => {
  const params = useParams();
  const { outcome } = data;

  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('');
  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddOutcome = async () => {
    if (!value) {
      alert('Please fill all the fields');
      return;
    }
    const updatedOutcomes = [...outcome, { value }];

    console.log(updatedOutcomes);

    await axios
      .put(
        `${url}/api/v2/meeting/single/${params.id}`,
        {
          outcome: updatedOutcomes,
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

  const handleDeleteOutcome = async (id) => {
    const updatedOutcomes = outcome.filter((item) => item._id !== id);

    console.log(updatedOutcomes);

    await axios
      .put(
        `${url}/api/v2/meeting/single/${params.id}`,
        {
          outcome: updatedOutcomes,
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
        <IconButton sx={{ float: 'right' }} size="xl" onClick={handleClickOpen}>
          <AddBoxSharp color="primary" />
        </IconButton>
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" mt="10px">
        <List sx={{ width: '100%', overflow: 'auto' }}>
          {outcome?.map((process) => (
            <ListItem
              alignItems="flex-start"
              style={{
                marginTop: '10px',
                maxHeight: '100px',
                overflow: 'auto',
                backgroundColor: '#fff',
              }}
              //   onClick={() => handleClickOpen(process)}
            >
              <ListItemText primary={<> {process?.value}</>} />
              <IconButton
                sx={{ float: 'right' }}
                onClick={() => handleDeleteOutcome(process._id)}
              >
                <DeleteForever color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* ------------------------------ */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Outcome</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new outcome, please enter the title here.
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
          <Button onClick={handleAddOutcome}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MeetingOutcome;
