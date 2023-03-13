import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import TextRow from '../text/TextRow';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const MeetingBasic = ({ data }) => {
  const params = useParams();
  const [open, setOpen] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant, message) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const [title, setTitle] = React.useState(data?.title);
  const [meetingType, setMeetingType] = React.useState(data?.meetingType);
  const [meetingTime, setMeetingTime] = React.useState(data?.meetingTime);
  const [endTime, setEndTime] = React.useState(data?.endTime);
  const [agenda, setAgenda] = React.useState(data?.agenda);
  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

  useEffect(() => {
    setTitle(data?.title);
    setMeetingType(data?.meetingType);
    setMeetingTime(data?.meetingTime);
    setEndTime(data?.endTime);
    setAgenda(data?.agenda);
  }, [data]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
    await axios
      .put(
        `${url}/api/v2/meeting/single/${params.id}`,
        {
          title,
          meetingType,
          meetingTime,
          endTime,
          agenda,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setOpen(false);
        handleClickVariant('success', 'Meeting Details Updated Successfully')();
        window.location.reload();
      })
      .catch((err) => {
        setOpen(false);
        handleClickVariant('error', 'Error in Updating Meeting Details')();
      });
  };

  return (
    <>
      <Box
        backgroundColor={'#f5f5f5'}
        p="30px"
        overflow="auto"
        gridArea="basic"
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="10px"
        >
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
        <Button
          variant="contained"
          sx={{ mt: '30px', float: 'right' }}
          onClick={handleClickOpen}
        >
          Update Details
        </Button>
      </Box>
      {/* ------------------------------ */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Basic Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update the meeting details, please enter the details here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Meeting Type"
            type="text"
            fullWidth
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Meeting Time"
            type="text"
            fullWidth
            value={meetingTime}
            onChange={(e) => setMeetingTime(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="End Time"
            type="text"
            fullWidth
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Meeting Agenda"
            type="text"
            fullWidth
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MeetingBasic;
