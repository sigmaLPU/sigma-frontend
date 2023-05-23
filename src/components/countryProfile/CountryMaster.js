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
import { AddCircle, Delete, Edit, OpenInBrowser } from '@mui/icons-material';

const CountryMaster = () => {
  const navigate = useNavigate();

  const [countries, setCountries] = React.useState([]);

  const [name, setName] = React.useState('');
  const [code, setCode] = React.useState('');
  
  const [open, setOpen] = React.useState(false);

  
    const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  // const url = 'http://localhost:5000';


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await axios.get(url + '/api/v2/country/all', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setCountries(data.data.countries);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

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
        url + '/api/v2/country/add',

        {
          name,
          code,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );

      alert('Country Added Successfully');
      setOpen(false);
      window.location.reload();
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Country',

      flex: 1,
    },
    {
      field: 'code',
      headerName: 'Country Code',
      flex: 1,
    },
    {
      field: 'No. of Partners',
      headerName: 'No. of Partners',
      flex: 1,
    },

    {
      field: 'action',
      headerName: 'Details',
      flex: 1,
      renderCell: (params) => (
        <strong>
          <Link
            to={`/country/${params.row._id}`}
            style={{
              textDecoration: 'none',
              color: '#F07F1A',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <OpenInBrowser />
          </Link>
        </strong>
      ),
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
                rows={countries || []}
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
                  <h3 style={{ textAlign: 'center' }}>Add Country - Admin</h3>
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
                        label="Enter Country Code"
                        type="number"
                        variant="outlined"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />

                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Create
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
