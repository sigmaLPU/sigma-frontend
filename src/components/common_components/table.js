import React from 'react'
import {useState,useEffect} from 'react'

import {ModalPopUp} from '../routes'

import {Box,Button,Dialog,DialogContent} from '@mui/material';
import { AddCircle } from '@mui/icons-material';


import { DataGrid, GridToolbar } from '@mui/x-data-grid';


function replaceProp(rows,column,props){
	// rows
	// console.log("hello ",rows,props?.replace)
	// let rs = []
	// let rp = props?.replace
	// for(let i=0;i<rows.length;i++){
	// 	let r = rows[i];
	// 	if(props?.replace){
	// 		for(let j=0;j<rp.length;j++){
	// 			let fun = rp[j].value;
	// 			console.log("hello called ",fun(r[rp[j].name]))
	// 			r[rp[j].name] = rp[j].value(r[rp[j].name])
	// 		}
	// 	}
	// 	console.log("hello A",r);
	// }

	return rows;	
}


export default function Table(props){	
	const [pagenation,setPagenation] = useState("")
	const [column,setColumn] = useState(["S.No","Name","temp1","temp1","temp1","temp1"])
	const [rows,setRows] = useState([
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
	])
	const [dataSize,setDataSize] = useState(0)



	const style = {
		borderRadius : "8px",
		border: "1px solid #F07F1A",
		boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
		...props?.style
	}



	const headingCSS = {
		width:"100%",
		minHeight:"1.2rem",
		display:"flex",
		justifyContent:"center",
		...props?.headingCSS
	}

	const headingSpanCSS = {
		width:"20%",
		backgroundColor:"#f07f1a",
		color:"white",
		borderRadius:"20px",
		padding:"0.7rem 1.7rem 0.7rem 1.7rem",
		position:"relative",top:"-1rem",
		marginRight:"-5%",
		display:"flex",
		textAlign:"center",
		...props?.headingSpanCSS
	}

	const tableCSS = {
		width:"100%",
		...props?.tableCSS,
	}

	const tableHeadingCSS = {
		backgroundColor:"#f07f1a",
		fontSize:"1.4rem",
		fontWeight:"500",
		...props?.tableHeadingCSS,
	}

	const rowCSS = {
		fontSize:"16px",
		fontWeight:"700",
		height:"51px",

		...props?.rowCSS
	}

	console.log("hello",replaceProp(rows,column,props))

	useEffect(()=>{
		if(props?.data){
			var data = props?.data
			if(data?.pagenation_id)
				setPagenation(data?.pagenation_id)
			// if(data?.column)
				setColumn(props?.column ? props?.column : [])
			// if(data?.rows)
				setRows(props?.rows ? props?.rows : [])
			setDataSize(data?.rows ? data?.rows.length : 0)
		}
	},[props])

	return(
		<>
		<div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
			{/*<span>Showing 12 out of 1022</span>
			<div>Pagination</div>*/}
		</div>
		<div style={style}>
			<div style={headingCSS}>
				<div style={{width:"100%",display:"flex",justifyContent:"center",}}>
					{!props?.noHeading && <div style={headingSpanCSS}>
						<span style={{width:"100%",textAlign:"center"}}>{props?.heading}</span>
					</div>}
				</div>
				<div style={{width:"auto",marginRight:"0.5rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
					<ModalPopUp>
						{props?.popup ? props?.popup : "Not Available"}
					</ModalPopUp>	
				</div>
			</div>
			<div>
				<table style={tableCSS}>
					<tr style={tableHeadingCSS}>
						{column && column.map(col=>{
							var flag = true
							if(props?.replace){
								for(var x of props?.replace){
									if(x.name===col){flag=true;break;}
								}
							}
							if(flag)
								return <td style={{textAlign:"center"}}>{col}</td>
						})}
					</tr>
					{
						rows.map((row,index)=>(
							<tr style={index%2===0 ? {backgroundColor:"rgba(217,217,217,1)",...rowCSS}:{backgroundColor:"white",...rowCSS}}>
								{
									column.map((col,index)=>{
										var flag = true
										if(props?.replace){
											for(var x of props?.replace){
												if(x.name===col){
													return x.value(row[col])
													flag=true;break;
												}
											}
										}
										if(flag)
											return <td style={{borderLeft:"0.5px solid #000000",textAlign:"center"}}>{row[col]}</td>
									}
									)
								}
							</tr>
						))
					}
				</table>
			</div>
		</div>
		</>
	)
}



export function NewTable(props){

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

			<div style={{width:"100%",fontSize:"1.4rem",}}>{props?.title}</div>

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