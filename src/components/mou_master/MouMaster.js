// react imports
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

// component import
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'

// other imports
import { getAllUniversityReducer,setRedirectFunction, updateViewDetails,activateYourTagChip,deleteYourTagChip,addYourTagChip, } from '../../redux/routes'


// function defination
export default function MouMaster(props){

	const dispatch = useDispatch()

	const rawData = useSelector((state)=>state.getAllUniversitySlice.data)

	const [data,setData] = useState(rawData)

	useEffect(()=>{
		console.log("pre mou master ---> ",rawData)
		setData(rawData)
	},[rawData])

	const replace = [{"name":"Details","value":function(id){return <div onClick={()=>redirectTo(id)} style={{color:"#F07F1A",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>Details</div>}}]


	useEffect(()=>{
		dispatch(getAllUniversityReducer({}))
	},[])

	const navigate = useNavigate()
	// table state
	const [message,setMessage] = useState("loading the tables");
	const [column,setColumn] = useState(["Name of University","Country","Meetings","Contact Person","Agreement","Details"])
	const [rows,setRows] = useState([])


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


	function getData(){
		return {
			pagenation_id : "1234",
			column : column,
			rows : rows,
		}
	}

	function redirectTo(id){
		const url = `/university/${id}`
		navigate(url)
	}

	function ToggleChip(array,setArray,id){
		var arr = array;arr[id].active=!arr[id].active;
		setArray(arr)
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
						<Table 
							data={data}
							rows = {data?.data?.rows}
							column = {data?.data?.column}
							heading={"Partner University"}
							replace = {replace}
						/>
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}



function YourTags(props){


	const rawData = useSelector((state)=>state.tagsMouMasterSlice.data)

	useEffect(()=>{
		console.log("Tags data ---> ",rawData)
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
	

