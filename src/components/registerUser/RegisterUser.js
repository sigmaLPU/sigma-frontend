import React, { useEffect } from 'react';
import { NavSideBarLayout } from '../routes';
import { Box, Button, Dialog, DialogContent, FormControlLabel, IconButton, Switch, TextField } from '@mui/material';
import axios from 'axios';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
import { AddCircle, Delete, Edit } from '@mui/icons-material';

const RegisterUser = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('123456');
  const [regNo, setRegNo] = React.useState('');

  const [users, setUsers] = React.useState([]);


  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(
          'https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/user/getAllUsers',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        );

        setUsers(data && data.users);
      } catch (error) {
        alert(error && error.response.data.error);
      }
    }
    fetchUser();
  }, []);
    
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
        'https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/user/register',

        {
          name,
          email,
          regNo,
          password,
        }
      );

      alert(data && data.data.message);
      setOpen(false)
    } catch (error) {
      alert(error && error.response.data.error);
    }
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'regNo',
      headerName: 'UID / Reg No',
      flex: 1,
    },
    {
      field: 'authorization',
      headerName: 'Role',
      flex: 1,
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
              alignItems:"center",
              height:'100%'
            }}
          >
            <IconButton>
              <Edit />
            </IconButton>

            
            <FormControlLabel
              control={<Switch defaultChecked />}
             
            />
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
            disabled={users.length === 0}
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
                rows={users || []}
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
                  <h3 style={{ textAlign: 'center' }}>Register User - Admin</h3>
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
                        label="Enter Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <TextField
                        label="Enter Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <TextField
                        type="number"
                        label="UID / Reg No"
                        variant="outlined"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                      />{' '}
                      <TextField
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Button type="submit" variant="contained" color="primary">
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

export default RegisterUser;
