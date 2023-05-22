import { useState } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { AddBoxSharp, DeleteForever } from '@mui/icons-material';
import style from './RecentCard.module.css';

function RecentCard() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const momNotes = []; // Update this array with your data

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNote = () => {
    // Add note logic here
  };

  const handleDeleteNote = (id) => {
    // Delete note logic here
  };

  return (
    <div className={style.recent}>
      <Typography variant="h5" fontWeight="600" align="center">
        <p className={style.recentheading}>Notes</p>
        <IconButton sx={{ float: 'right' }} size="large" onClick={handleClickOpen}>
          <AddBoxSharp color="primary" />
        </IconButton>
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="10px"
        maxHeight="400px"
        sx={{
          overflow: 'auto',
          flex: 1, // Allow the box to grow and occupy available space
        }}
       
      >
        <List sx={{ width: '100%' }}>
          {momNotes?.map((process) => (
            <ListItem
              alignItems="flex-start"
              style={{
                backgroundColor: '#fff',
                marginTop: '10px',
                maxHeight: '100px',
                overflow: 'auto',
              }}
              key={process._id}
              // onClick={() => handleClickOpen(process)}
            >
              <ListItemText primary={<>{process?.value}</>} />
              <IconButton sx={{ float: 'right' }} onClick={() => handleDeleteNote(process._id)}>
                <DeleteForever color="error" />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Note</DialogTitle>
        <DialogContent>
          <DialogContentText>To add a new note, please enter the title here.</DialogContentText>
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
    </div>
  );
}

export default RecentCard;
