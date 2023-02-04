// react imports
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'

// component import
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table, NewTable} from '../routes'
import {GuestVisitMasterModal} from '../routes'

// other imports
import { getAllUniversityReducer,setRedirectFunction, updateViewDetails,activateYourTagChip,deleteYourTagChip,addYourTagChip, } from '../../redux/routes'
import {basicGuestVisitSlice,getAllGuestVisitReducer,universityMeetingsAddReducer,setRedirectFunctionMeetings,updateViewDetailsMeetings,} from '../../redux/routes'

import {Button}  from '@mui/material';

// function defination
export default function GuestVisitMaster(props){
	const ChipCSS = {
		minWidth: "126px",
		height: "28px",
		background: "#FFFFFF",
		border: "1px solid #F07F1A",borderRadius: "7px",
		margin:"4px"
	}
	const CardCSS = {
		minHeight:"418px",
		width:"372px",
		border: "1px solid #F07F1A",
		boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
		color:"black",
	}


	useEffect(()=>{
		// ToggleChip(yourTags,setYourTags,0)
	},[])

	return (
		<div>
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				<div style={{display:"flex"}}>
					{/*Left part*/}
					<div style={{borderRight:"1px solid #D9D9D9",maxWidth:"372px"}}>
						<div>
							<input type="text" placeholder="Search" style={{width:"372px",fontSize:"20px",marginBottom:"2rem"}}/>
						</div>

						<YourTags />
						<PopularTags/>						
						
					
					</div>
					{/*Right Part*/}
					<div style={{marginLeft:"1rem",width:"100%"}}>
						<GuestVisitTable popup={<GuestVisitMasterModal />}/>
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}



function YourTags(props){


	const rawData = useSelector((state)=>state.tagsMouMasterSlice.data)

	useEffect(()=>{
	},[])

	const ChipCSS = {
		minWidth: "126px",
		height: "28px",
		background: "#FFFFFF",
		border: "1px solid #F07F1A",borderRadius: "7px",
		margin:"4px"
	}
	const CardCSS = {
		minHeight:"218px",
		width:"372px",
		border: "1px solid #F07F1A",
		boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
		color:"black",
	}


	const [yourTags,setYourTags] = useState([
		{title:"USA",active:false},{title:"India",active:false},{title:"Canada",active:false},{title:"Bhutan",active:false},{title:"Nepal",active:true}
	])


	return (
		<Card style={CardCSS} heading={"Your Tags"} styleHeading={{color:"black"}}>
			<div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap",}}>
				{
					yourTags.map((item,key)=>(
						<Chip style={ChipCSS} text={item.title} active={item.active}/>
					))
				}
			</div>
		</Card>

	)
}


function PopularTags(props){

	const ChipCSS = {
		minWidth: "126px",
		height: "28px",
		background: "#FFFFFF",
		border: "1px solid #F07F1A",borderRadius: "7px",
		margin:"4px"
	}
	const CardCSS = {
		minHeight:"218px",
		width:"372px",
		border: "1px solid #F07F1A",
		boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
		color:"black",
	}

	// tags state
	const [popularTags,setPopularTags] = useState([
		{title:"USA",active:false},{title:"India",active:false},{title:"Canada",active:false},{title:"Bhutan",active:false},{title:"Nepal",active:true}
	]) 

	return (
		<Card style={{...CardCSS,marginTop:"2rem"}} heading={"Popular Tags"}>
			<div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap",}}>
				{
					popularTags.map((item,key)=>(
						<Chip style={ChipCSS} text={item.title} active = {item.active}/>
					))
				}
			</div>
		</Card>
	)
}
	
function GuestVisitTable(props) {
	const dispatch = useDispatch()

	const rawData = useSelector((state)=>state.basicGuestVisitSlice.data)

	const [data,setData] = useState(rawData)

	useEffect(()=>{
		setData(rawData)
	},[rawData])

	const replace = [{"name":"link","value":function(id){return <div onClick={()=>redirectTo(id)} style={{color:"#F07F1A",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>Link</div>}}]


	useEffect(()=>{
		// dispatch(getAllUniversityReducer({}))
		dispatch(getAllGuestVisitReducer({}))
	},[])

	const navigate = useNavigate()
	// table state
	const [message,setMessage] = useState("loading the tables");
	const [column,setColumn] = useState(["Title","Visit Date","Host","Participants","Visitors","link"])
	const [rows,setRows] = useState([])

	function getData(){
		return {
			pagenation_id : "1234",
			column : column,
			rows : rows,
		}
	}

	function redirectTo(id){
		const url = `/guest_visit/${id}`
		navigate(url)
	}

	function ToggleChip(array,setArray,id){
		var arr = array;arr[id].active=!arr[id].active;
		setArray(arr)
	}

	const columns = [
    {
      field: 'Title',
      headerName: 'Title',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'Visit Date',
      headerName: 'Visit Date',
      flex: 1,
    },
    {
      field: 'Host',
      headerName: 'Host',
      flex: 1,
    },
    {
      field: 'Participants',
      headerName: 'Participants',
      flex: 1,
    },
    {
      field: 'Visitors',
      headerName: 'Visitors',
      flex: 1,
    },
    {
      field: 'link',
      headerName: 'Link',
      flex: 0.5,
      renderCell: (cellValue) => {
        return (
          <Link
            to={`/guest_visit/${cellValue.row.id}`}
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
		<>
			
            <NewTable title={"Guest Visit Master"} popup={props?.popup} rows={data?.data?.rows || []} columns={columns} />

		</>
	)
}
