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
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import TextRow from '../../text/TextRow';

const StudentProfileBasic = ({ data }) => {
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
        maxHeight="500px"
        minWidth="400px"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          align="center"
          // color={colors.greenAccent[400]}
        >
          Basic Details
        </Typography>

        <Box>
          <Avatar
            sx={{
              width: '120px',
              height: '120px',
              mx: 'auto',
              mt: '10px',
            }}
            alt="Remy Sharp"
          />
        </Box>

        <Box
          display="flex"
          width="100%"
          justifyContent="space-between"
          gap="20px"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
            width="100%"
          >
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Name</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.name || 'no name'}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Email</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.email}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Reg No</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.regNo}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Opted For</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.optedFor}</Typography>
            </TextRow>

            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Phone</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.phone}</Typography>
            </TextRow>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: '10px',
              mt: '30px',
            }}
          />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
            width="100%"
          >
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Name</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.name || 'no name'}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Email</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.email}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Reg No</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.regNo}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Opted For</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.optedFor}</Typography>
            </TextRow>

            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Phone</b>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: '10px',
                }}
              />

              <Typography variant="h5">{data?.phone}</Typography>
            </TextRow>
          </Box>
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

export default StudentProfileBasic;
