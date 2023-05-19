import React, { useEffect } from 'react';
import { NavSideBarLayout } from '../routes';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { display } from '@mui/system';
import { AddCircle, Delete, Edit, OpenInBrowser } from '@mui/icons-material';

const CountryMaster = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [dp, setDp] = React.useState(searchParams.get('dp'));

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('123456');
  const [regNo, setRegNo] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [optedFor, setOptedFor] = React.useState('');

  const [users, setUsers] = React.useState([]);

//   const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  const url = 'http://localhost:5000';

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(url + '/api/v2/user/getAllStudents', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setUsers(data && data.students);
      } catch (error) {
        alert(error && error.response.data.error);
      }
    }
    fetchUser();

    if (dp && dp === 'credit-transfer') {
      setOptedFor('credit-transfer');
    }
    else if(dp && dp === 'semester-exchange') {
      setOptedFor('semester-exchange');
    }
  }, [dp]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        url + '/api/v2/user/register',

        {
          name,
          email,
          regNo,
          password,
          isFaculty: false,
          authorization: 'student',
          phone,
          optedFor,
        }
      );

      alert(data && data.data.message);
      setOpen(false);
      window.location.reload();
    } catch (error) {
      alert(error && error.response.data.error);
      console.log(error);
    }
  };

  const columns = [
   
    {
      field: 'Country',
      headerName: 'Country',
      flex: 1,
    },
    {
        field: 'No. of Partners',
        headerName: 'No. of Partners',
        flex: 1,
      },

   
    
    {
      field: 'assignedTo',
      headerName: 'Assigned To',
      flex: 1,
      valueGetter: (params) => {
        return params.row.studentDetails.assignedCounsilor;
      },
    },

    {
      field: 'details',
      headerName: 'Actions',
      flex: 0.5,
      renderCell: (cellValue) => {
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <IconButton
              onClick={() => {
                navigate(`/student/${cellValue.row._id}`);
              }}
            >
              <OpenInBrowser />
            </IconButton>

            <FormControlLabel control={<Switch defaultChecked />} />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: '1.5rem' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: '1rem', width: '100%' }}>
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={{
                position: 'relative',
                bottom: '-30px',
              }}
            >
              <Button
                disabled={users?.length === 0}
                sx={{
                  backgroundColor: '#F07F1A',

                  color: '#000',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                }}
                endIcon={<AddCircle />}
                onClick={handleClickOpen}
              >
                Add New
              </Button>
            </Box>

            <Box
              m="20px 0 0 0"
              height="85vh"
              sx={{
                '& .MuiDataGrid-root': {
                  border: 'none',
                },
                '& .MuiDataGrid-cell': {
                  borderBottom: 'none',
                },
                '& .name-column--cell': {
                  color: '#F07F1A',
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#F07F1A',
                  borderBottom: 'none',
                },
                '& .MuiDataGrid-virtualScroller': {
                  // backgroundColor: "#F07F1A",
                },
                '& .MuiDataGrid-footerContainer': {
                  borderTop: 'none',
                  backgroundColor: '#F07F1A',
                },
                '& .MuiCheckbox-root': {
                  color: `#F07F1A !important`,
                },
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                  color: `#F07F1A !important`,
                },
              }}
            >
              <DataGrid
                rows={
                  dp
                    ? users.filter(
                        (user) => user.studentDetails.optedFor === dp
                      ) || []
                    : users || []
                }
                columns={columns}
                getRowId={(row) => row._id}
                components={{ Toolbar: GridToolbar }}
                checkboxSelection
                // use multiple filters
              />
            </Box>
            <Dialog
              open={open}
              onClose={handleClose}
              fullWidth={true}
              maxWidth={'md'}
            >
              <DialogContent
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div>
                  <h3 style={{ textAlign: 'center' }}>
                    Register Student - Admin
                  </h3>
                  <div
                    style={{
                      marginTop: '1.5rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <form
                      onSubmit={submitHandler}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '1rem',
                        width: '607px',
                      }}
                    >
                      <TextField
                      fullWidth
                        label="Enter Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <TextField
                      fullWidth
                        label="Enter Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <TextField
                      fullWidth
                        type="number"
                        label="UID / Reg No"
                        variant="outlined"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                      />{' '}
                           <TextField
                      fullWidth
                        type="number"
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />{' '}
                      <FormControl
                      disabled={dp ? true : false}
                      fullWidth
                        variant="outlined"
                        label="Opted For"
                        >
                        <InputLabel id="demo-simple-select-outlined-label">
                          Opted For
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={optedFor}
                          onChange={(e) => setOptedFor(e.target.value)}
                          label="Opted For"
                        >
                          <MenuItem value="">
                            <em>None</em> 
                          </MenuItem>
                          <MenuItem value="semester-exchange">Semester Exchange</MenuItem>
                          <MenuItem value="credit-transfer">Credit Transfer</MenuItem>
                          </Select>

                        </FormControl>
                      <TextField
                      fullWidth
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <Button
                        fullWidth
                      type="submit" variant="contained" color="primary">
                        Register
                      </Button>
                    </form>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </NavSideBarLayout>
    </div>
  );
};

export default CountryMaster;
