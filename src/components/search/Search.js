// react imports
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

// component import
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'
import {AddNewUniversity} from '../routes'

// other imports
import { getAllUniversityReducer,setRedirectFunction, updateViewDetails,activateYourTagChip,deleteYourTagChip,addYourTagChip, } from '../../redux/routes'
import {searchReducer,searchSlice} from '../../redux/routes'

// component
import SearchIcon from '@mui/icons-material/Search';
import downArrowImg from './downArrow.png'

// function defination
export default function Search(props){

	const dispatch = useDispatch()

	const rawData = useSelector((state)=>state.searchSlice.data)

	function search(e,data){
		e.preventDefault()
		dispatch(searchReducer({query:data}))
	}

	const faq = [
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
	]

	useEffect(()=>{
		console.log("rawData ",rawData)
	},[rawData])

	return (
		<div>
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				<div style={{display:"flex"}}>
					{/*Left part*/}
					<div style={{borderRight:"1px solid #D9D9D9",maxWidth:"372px"}}>
						<YourTags />
						<PopularTags/>						
					</div>
					{/*Right Part*/}
					<div style={{marginLeft:"1rem",width:"100%"}}>
						<SearchFeild searchFunction={search}/>
						<div style={{marginBottom:"5rem",width:"100%",display:"flex",alignItems:"center",marginTop:"2rem",flexDirection:"column",rowGap:"2rem"}}>
							{rawData.map((item,key)=>(
								<SearchResults data={item} key={key} sNo={key+1}/>						
							))}
						</div>
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}

function SearchResults(props){
	
	const [active,setActive] = useState(false)

	const navigate = useNavigate()
	
	// function redirectTo(id){
	// 	const url = `/meeting/${id}`
	// 	navigate(url)
	// }


	const replace = {
		"universities":[{"name":"Details","value":function(id){return <div onClick={()=>window.location.href = `university/${id}`} style={{color:"#F07F1A",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>Details</div>}}],
		"meetings":[{"name":"link","value":function(id){return <div onClick={()=>window.location.href = `meeting/${id}`} style={{color:"#F07F1A",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>Link</div>}}],
		"contacts":[{"name":"Details","value":function(id){return <div onClick={()=>window.location.href = `contact/${id}`} style={{color:"#F07F1A",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>View Contact</div>}}],
		"users":[{"name":"Details","value":function(id){return <div onClick={()=>window.location.href = `user/${id}`} style={{color:"#F07F1A",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>View Details</div>}}]
	}

	return (
		<div style={{width:"97%",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"}}>
			<div style={{display:"flex",justifyContent:"flex-start",padding:"0.5rem 1rem 0.5rem 1rem",flexDirection:"column"}}>
				<div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
					<span style={{fontSize:"1.3rem"}}>{props?.sNo}. {props?.data?.name}</span>
					<img src={downArrowImg} onClick={(e)=>setActive(!active)} style={{cursor:"pointer",width:"2rem",height:"2rem",border:"1px solid black",padding:"0.5rem",borderRadius:"50%"}}/>
				</div>
				{ active && (props?.data.length>0 ? <Table 
							data={props?.data?.response?.rows}
							rows = {props?.data?.response?.rows}
							column = {props?.data?.response?.column}
							heading={props?.data?.name}
							replace = {replace[props?.data?.name]}
				/> : <span>Not Available</span>)}
			</div>
		</div>
	)
}




function SearchFeild(props){
	const [search,setSearch] = useState("")

	function submit(e){
		e.preventDefault()
		console.log("Search ",search)
		if(props?.searchFunction){
			props?.searchFunction(e,search)
		}
	}

	return(
		<div style={{width:"100%"}}>
			<form style={{width:"100%",display:"flex",alignItems:"center"}}>
				<input 
					onChange = {(e)=>setSearch(e.target.value)}
					type="text" placeholder="Search"  
					style={{minWidth:"90%",minHeight:"2.5rem",fontSize:"1.8rem",borderRadius:"8px",border:"2px solid black",flexGrow:"1"}}
				/>
				<div onClick={(e)=>submit(e)} style={{cursor:"pointer",minWidth:"3rem",display:"flex",justifyContent:"center"}}><SearchIcon fontSize="large"/></div>
			</form>
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
	

