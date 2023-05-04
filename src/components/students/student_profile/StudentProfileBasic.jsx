import {
  Alert,
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

const StudentProfileBasic = ({ data, status }) => {
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
  const [photo, setPhoto] = React.useState('');
  const [name, setName] = React.useState(data?.name);
  const [email, setEmail] = React.useState(data?.email);
  const [phone, setPhone] = React.useState(data?.phone);
  const [regNo, setRegNo] = React.useState(data?.regNo);
  const [assignedCounsilor, setAssignedCounsilor] = React.useState(
    data.studentDetails?.assignedCounsilor
  );
  const [referedBy, setReferedBy] = React.useState(
    data?.studentDetails?.referedBy
  );
  const [backedOut, setBackedOut] = React.useState(
    data?.studentDetails?.backedOut
  );

  const [backedOutReason, setBackedOutReason] = React.useState(
    data?.studentDetails?.backedOutReason
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
    setReferedBy(data?.studentDetails?.referedBy);
    setBackedOut(data?.studentDetails?.backedOut);
    setBackedOutReason(data?.studentDetails?.backedOutReason);

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
            referedBy,
            backedOut,
            backedOutReason,
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
        minWidth="60vw"
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
            src={
              'https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=c2e08c92-ce42-4137-ad3c-a7c435175ddc'
            }
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
            {backedOut && (
              <Alert variant="filled" severity="warning">
                Backed Out; Reason: {backedOutReason}
              </Alert>
            )}

            {status && (
              <Alert variant="filled" severity="info">
                {status}
              </Alert>
            )}

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
            <TextRow>
              <Typography
                sx={{
                  width: '120px',
                }}
              >
                <b>Refered By</b>
              </Typography>

              <Typography variant="h5">{referedBy}</Typography>
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Refered By"
            type="text"
            fullWidth
            value={referedBy}
            onChange={(e) => setReferedBy(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Backed Out</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={backedOut}
              label="Backed Out"
              onChange={(e) => setBackedOut(e.target.value)}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>

          <textarea
            aria-label="minimum height"
            rowsMin={6}
            placeholder="Backed Out Reason"
            value={backedOutReason}
            onChange={(e) => setBackedOutReason(e.target.value)}
            style={{
              width: '100%',
              marginTop: '10px',
              border: '1px solid #ccc',
              padding: '10px',
              minHeight: '100px',
            }}
            disabled={backedOut === false}
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
