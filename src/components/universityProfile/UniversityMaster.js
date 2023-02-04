// react imports
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Box,
  Button,
  Dialog,
  // DialogActions,
  DialogContent,
  // DialogContentText,
  // DialogTitle,
  // TextareaAutosize,
  // TextField,
} from '@mui/material';
// component import
import { NavSideBarLayout } from '../routes';
import { Card, Chip, Table } from '../routes';
import { AddNewUniversity } from '../routes';

import {NewTable}  from '../routes.js';

// other imports
import {
  getAllUniversityReducer,

} from '../../redux/routes';
import {

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
  }, [rawData, data.data.rows]);



  useEffect(() => {
    dispatch(getAllUniversityReducer({}));
  }, []);

  const navigate = useNavigate();

 

  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (aggrement) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
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
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1,
    },

    {
      field: 'details',
      headerName: 'Details',
      flex: 0.5,
      renderCell: (cellValue) => {
        return (
          <Link
            to={`/university/${cellValue.row.id}`}
            style={{
              textDecoration: 'none',
            }}
          >
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
      <NavSideBarLayout childCSS={{ marginTop: '1.5rem' }}>
        <div style={{ display: 'flex' }}>
       
     
          <div style={{ marginLeft: '1rem', width: '100%' }}>
       
            <NewTable title={"University Master"} popup={<AddNewUniversity/>} rows={data?.data?.rows || []} columns={columns} />

          </div>
        </div>
      </NavSideBarLayout>
    </div>
  );
}
