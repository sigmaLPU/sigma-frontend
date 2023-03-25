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
import { useSnackbar } from 'notistack';
import { useTheme } from '@mui/material/styles';

const MeetingNotes = ({ data }) => {
  const params = useParams();
  const { momNotes } = data;
  const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const [value, setValue] = React.useState('');

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
        handleClickVariant('success', 'Note Added')()
                window.location.reload();

      })
      .catch((err) => {
        setOpen(false);
        handleClickVariant('error', 'Error')()
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
        
        handleClickVariant('success', 'Note Deleted')()
                window.location.reload();

        
      })
      .catch((err) => {
          
          handleClickVariant('error', 'Error')()
      });
  };

  
  return (
    <Box backgroundColor={ theme.palette.mode === 'dark' ? '#333' : '#f5f5f5' } p="30px" overflow="auto" gridArea="note">
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
                backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#fff',
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
