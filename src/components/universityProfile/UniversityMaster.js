// react imports
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from '@mui/material';
// component import
import { NavSideBarLayout } from '../routes';
import { Card, Chip, Table } from '../routes';
import { AddNewUniversity } from '../routes';

// other imports
import {
  getAllUniversityReducer,
  setRedirectFunction,
  updateViewDetails,
  activateYourTagChip,
  deleteYourTagChip,
  addYourTagChip,
} from '../../redux/routes';
import {
  getAllMeetingsSlice,
  getAllUniversityMeetingsReducer,
  universityMeetingsAddReducer,
  setRedirectFunctionMeetings,
  updateViewDetailsMeetings,
} from '../../redux/routes';
import { AddCircle } from '@mui/icons-material';

// function defination
export default function MouMaster(props) {
  const dispatch = useDispatch();

  const rawData = useSelector((state) => state.getAllUniversitySlice.data);

  const [data, setData] = useState(rawData);

  useEffect(() => {
    setData(rawData);
    console.log(data.data.rows);
  }, [rawData]);

  const replace = [
    {
      name: 'Details',
      value: function (id) {
        return (
          <div
            onClick={() => redirectTo(id)}
            style={{
              color: '#F07F1A',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            Details
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getAllUniversityReducer({}));
  }, []);

  const navigate = useNavigate();
  // table state
  const [message, setMessage] = useState('loading the tables');
  const [column, setColumn] = useState([
    'Name of University',
    'Country',
    'Meetings',
    'Contact Person',
    'Agreement',
    'Details',
  ]);
  const [rows, setRows] = useState([]);

  const ChipCSS = {
    minWidth: '126px',
    height: '28px',
    background: '#FFFFFF',
    border: '1px solid #F07F1A',
    borderRadius: '7px',
    margin: '4px',
  };
  const CardCSS = {
    minHeight: '418px',
    width: '372px',
    border: '1px solid #F07F1A',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.25)',
    color: 'black',
  };
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = (aggrement) => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

  function getData() {
    return {
      pagenation_id: '1234',
      column: column,
      rows: rows,
    };
  }

  function redirectTo(id) {
    const url = `/university/${id}`;
    navigate(url);
  }

  function ToggleChip(array, setArray, id) {
    var arr = array;
    arr[id].active = !arr[id].active;
    setArray(arr);
  }

  useEffect(() => {
    // ToggleChip(yourTags,setYourTags,0)
  }, []);

  const columns = [
    {
      field: 'Name of University',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'Country',
      headerName: 'Country',
      flex: 1,
    },
    {
      field: 'createdBy',
      headerName: 'Created By',
      flex: 1,
    },

    {
      field: 'details',
      headerName: 'Details',
      flex: 0.5,
      renderCell: (cellValue) => {
        return (
          <Link to={`/university/${cellValue.row.id}`} style={{
			textDecoration: 'none',
		  }}>
            <Button
              variant="outlined"
              sx={{
                color: '#F07F1A',
                border: '1px solid #F07F1A',
                textDecoration: 'none',

              }}
            >
              Browse
            </Button>
          </Link>
        );
      },
    },
  ];

  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex' }}>
          {/*Left part*/}
          <div style={{ borderRight: '1px solid #D9D9D9', maxWidth: '372px' }}>
            <div>
              <input
                type="text"
                placeholder="Search"
                style={{
                  width: '372px',
                  fontSize: '20px',
                  marginBottom: '2rem',
                }}
              />
            </div>

            <YourTags />
            <PopularTags />
          </div>
          {/*Right Part*/}
          <div style={{ marginLeft: '1rem', width: '100%' }}>
            {/* <Table 
							data={data}
							rows = {data?.data?.rows}
							column = {data?.data?.column}
							heading={"Partner University"}
							replace = {replace}
							popup = {<AddNewUniversity />}
						/> */}
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
              m="40px 0 0 0"
              height="75vh"
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
                rows={data?.data?.rows || []}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
              />
            </Box>
            <Dialog open={open} onClose={handleClose} 
			fullWidth={true}
			maxWidth={'md'}

			>
              <DialogContent sx={{
				display: 'flex',
				justifyContent: 'center',
			  }}>
               
				<AddNewUniversity />
             
              </DialogContent>
            
            </Dialog>
          </div>
        </div>
      </NavSideBarLayout>
    </div>
  );
}

function YourTags(props) {
  const rawData = useSelector((state) => state.tagsMouMasterSlice.data);

  useEffect(() => {}, []);

  const ChipCSS = {
    minWidth: '126px',
    height: '28px',
    background: '#FFFFFF',
    border: '1px solid #F07F1A',
    borderRadius: '7px',
    margin: '4px',
  };
  const CardCSS = {
    minHeight: '218px',
    width: '372px',
    border: '1px solid #F07F1A',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.25)',
    color: 'black',
  };

  const [yourTags, setYourTags] = useState([
    { title: 'USA', active: false },
    { title: 'India', active: false },
    { title: 'Canada', active: false },
    { title: 'Bhutan', active: false },
    { title: 'Nepal', active: true },
  ]);

  return (
    <Card
      style={CardCSS}
      heading={'Your Tags'}
      styleHeading={{ color: 'black' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {yourTags.map((item, key) => (
          <Chip style={ChipCSS} text={item.title} active={item.active} />
        ))}
      </div>
    </Card>
  );
}

function PopularTags(props) {
  const ChipCSS = {
    minWidth: '126px',
    height: '28px',
    background: '#FFFFFF',
    border: '1px solid #F07F1A',
    borderRadius: '7px',
    margin: '4px',
  };
  const CardCSS = {
    minHeight: '218px',
    width: '372px',
    border: '1px solid #F07F1A',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.25)',
    color: 'black',
  };

  // tags state
  const [popularTags, setPopularTags] = useState([
    { title: 'USA', active: false },
    { title: 'India', active: false },
    { title: 'Canada', active: false },
    { title: 'Bhutan', active: false },
    { title: 'Nepal', active: true },
  ]);

  return (
    <Card style={{ ...CardCSS, marginTop: '2rem' }} heading={'Popular Tags'}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {popularTags.map((item, key) => (
          <Chip style={ChipCSS} text={item.title} active={item.active} />
        ))}
      </div>
    </Card>
  );
}
