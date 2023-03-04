import React,{useEffect,useState} from 'react'

import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import {Box,Button,Dialog,DialogContent} from '@mui/material';
import { AddCircle } from '@mui/icons-material';


export default function Table(props){


  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (aggrement) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



	const sx = {
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
  }

  console.log("Animesh 12",props)


	return (
		<div>


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
              m="5px 0 0 0"
				height="85vh"
              sx={sx}
            >
              <DataGrid
                rows={props?.rows}
                columns={props?.columns}
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
                {props?.popup}
              </DialogContent>
            </Dialog>
		</div>
	)
}