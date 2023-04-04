import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import TextRow from '../../text/TextRow';
import { Face, Face2, Face3Outlined, Face4, Man } from '@mui/icons-material';

const StudentProfileBasic = ({ data }) => {
  const params = useParams();
  const [open, setOpen] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant, message) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  // const url = 'http://localhost:5000';

  const [allCounsilors, setAllCounsilors] = React.useState([]);

  const [name, setName] = React.useState(data?.name);
  const [email, setEmail] = React.useState(data?.email);
  const [phone, setPhone] = React.useState(data?.phone);
  const [regNo, setRegNo] = React.useState(data?.regNo);
  const [assignedCounsilor, setAssignedCounsilor] = React.useState(
    data.studentDetails?.assignedCounsilor
  );

  const [counsilorName, setCounsilorName] = React.useState('');

  const [optedFor, setOptedFor] = React.useState(
    data?.studentDetails?.optedFor
  );

  useEffect(() => {
    setName(data?.name);
    setEmail(data?.email);
    setPhone(data?.phone);
    setRegNo(data?.regNo);
    setOptedFor(data?.studentDetails?.optedFor);
    setAssignedCounsilor(data?.studentDetails?.assignedCounsilor);

    const fetchCounsilors = async () => {
      await axios
        .get(`${url}/api/v2/user/getAllFaculties`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          setAllCounsilors(res.data.users);
        })
        .catch((err) => {
          alert(err, 'Error in fetching counsilors');
        });
    };
    fetchCounsilors();

    const name = allCounsilors.filter(
      (counsilor) => counsilor._id === assignedCounsilor
    )[0]?.name;
    setCounsilorName(name);
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
        `${url}/api/v2/user/student/${params.id}`,
        {
          name,
          email,
          phone,
          regNo,

          studentDetails: {
            optedFor,
            assignedCounsilor,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setOpen(false);
        handleClickVariant('success', 'Student Details Updated Successfully')();
        window.location.reload();
      })
      .catch((err) => {
        setOpen(false);
        handleClickVariant('error', 'Error in Updating Student Details')();
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

          <Box
            sx={{
              float: 'right',
            }}
          >
            <Chip
              color={assignedCounsilor ? 'success' : 'error'}
              icon={<Face />}
              label={
                allCounsilors.filter(
                  (counsilor) => counsilor._id === assignedCounsilor
                )[0]?.name || 'Not assigned'
              }
              variant="outlined"
            />
          </Box>
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

              <Typography variant="h5">{name}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Email</b>
              </Typography>

              <Typography variant="h5">{email}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Reg No</b>
              </Typography>

              <Typography variant="h5">{regNo}</Typography>
            </TextRow>
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Opted For</b>
              </Typography>

              <Typography variant="h5">{optedFor}</Typography>
            </TextRow>

            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Phone</b>
              </Typography>

              <Typography variant="h5">{phone}</Typography>
            </TextRow>
          </Box>

          {/* <Box
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
                <b>Counsilor</b>
              </Typography>
             

              <Typography variant="h5">{data?.name || 'no name'}</Typography>
            </TextRow>
          
          </Box> */}
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
            To update the student details, please enter the details here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Reg No"
            type="text"
            fullWidth
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Opted For</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={optedFor}
              label="Age"
              onChange={(e) => setOptedFor(e.target.value)}
            >
              <MenuItem value={'semester-exchange'}>Semester Exchange</MenuItem>
              <MenuItem value={'credit-transfer'}>Credit Transfer</MenuItem>
            </Select>
          </FormControl>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type="number"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Counsilor Assigned
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={assignedCounsilor}
              label="Age"
              onChange={(e) => setAssignedCounsilor(e.target.value)}
            >
              {allCounsilors.map((counsilor) => (
                <MenuItem key={counsilor._id} value={counsilor?._id}>
                  {counsilor.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
