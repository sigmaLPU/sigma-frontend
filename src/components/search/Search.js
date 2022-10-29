import React,{useEffect,useState} from 'react'

import {NavSideBarLayout} from '../routes'

import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {searchReducer,searchSlice} from '../../redux/routes'
import {Table} from '../routes'


import downArrowImg from './downArrow.png'
import SearchIcon from '@mui/icons-material/Search';


export default function Search(props){

	const [query,setQuery] = useState("")
	
	const [data,setData] = useState([])

	const dispatch = useDispatch()

	const rawData = useSelector((state)=>state.searchSlice.data)
	const loading = useSelector((state)=>state.searchSlice.loading)

	function searchFunc(e){
		e.preventDefault()
		dispatch(searchReducer({query}))		
	}

	useEffect(()=>{
		setData(rawData)
	},[rawData])


	const inputFeildCSS = {
		width:"50%",
		minHeight:"2.5rem",
		fontSize:"1.8rem",
		borderRadius:"8px",
		border:"2px solid black",
		// flexGrow:"1"
	}

	if(data.length===0){
		console.log("result is empty")
		return (
			<NavSideBarLayout childCSS={{marginTop:"4rem",width:"100%",height:"100%"}}>
				<div style={{marginBottom:"2rem",width:"100vw",height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
					<form onSubmit={(e)=>searchFunc(e)} style={{width:"90%",display:"flex",justifyContent:"center"}}>
						<input
							onChange={(e)=>setQuery(e.target.value)} 
							type="text" placeholder="Search" 
							style={inputFeildCSS}
						/>
					</form>
				</div>
				{loading && "Loading Please wait"}
			</NavSideBarLayout>
		)
	}else{
		return (
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				<div style={{marginBottom:"2rem",width:"100%",display:"flex",justifyContent:"center"}}>
					<form onSubmit={(e)=>searchFunc(e)} style={{width:"90%",display:"flex",justifyContent:"center"}}>
						<input
							onChange={(e)=>setQuery(e.target.value)} 
							type="text" placeholder="Search" 
							style={inputFeildCSS}
						/>
					</form>
				</div>
				<div style={{display:"flex",flexDirection:"column",rowGap:"2rem",alignItems:"center"}}>
					{loading && "Loading Please wait"}
					{
						data.map((item,key)=>(
							<SearchResults data={item} key={key} sNo={key+1}/>						
						))
					}			
				</div>
			</NavSideBarLayout>
		)
}
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
					<span style={{fontSize:"1.3rem"}}>{props?.sNo}. {props?.data?.name} ({props?.data?.response?.rows?.length})</span>
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