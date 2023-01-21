
import React, {useState,useEffect} from 'react'
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton'; // Parent component to fit icon inside it
import CallMadeIcon from '@mui/icons-material/CallMade'; // heading pop icon
import CloseIcon from '@mui/icons-material/Close';

import { LoadingComponent } from '../../routes';

import { useDispatch, useSelector } from 'react-redux'

import {useNavigate} from 'react-router-dom'

import {
	universityContactAddReducer,universityMeetingAddReducer,
	universityBasicDetailsUpdateReducer,universityProgramAddReducer,
	universityRecentUpdateAddReducer,universityMeetingUpdateReducer,
	universityMeetingReducer,universityContactUpdateReducer,
	universityRecentUpdateUpdateReducer, universityMouContractReducer,
	universityMouContractAddReducer,universityMouContractUpdateReducer,
	universityApplicationProcessAddReducer,
	universityDocumentRequiredAddReducer,
	universityFinancialAgreementAddReducer,
	universityGuestVisitAddReducer,
	setMouContractSliceLoading,
	redirectToGuestVisitProfile,
} from '../../../redux/routes'


import {
	uploadFile
} from '../../../firebase/routes'
import axios from 'axios';

function getUniId(url){
	var id = ""
	for(var i=url.length-1;i>=0;i--){
		if(url[i]==='/') return id
		id = url[i] + id
	}
	return id
}

export function Button(props){

	const buttonCSS = {background: "none",color: "inherit",border: "none",padding: "0",font: "inherit",cursor: "pointer",outline: "inherit",...props?.childCSS}
	
	const containerCSS = {
		cursor:"pointer",
		marginTop:"79px",
		background:"#F07F1A",
		borderRadius:"6px",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		maxWidth:"607px",
		...props?.style
	}
	
	return (
		<div onClick={(e)=>props?.submit(e)} style={containerCSS}>
			<button type="submit" style={buttonCSS}>
				<span style={{fontWeight:900,fontSize:"20px",color:"white"}}>{props?.buttonText}</span>
			</button>
		</div>
	)
}

export function BasicDetailsModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const details = useSelector((state)=>state.universityBasicDetailsSlice.data)

	const dispatch = useDispatch()

	const [data,setData] = useState({
		"name":"",
		"country":"",
		"address":"",
		"website":"",
	})


	useEffect(()=>{
		var d = details?.data
		if(d){

			setData({...data,...d})
		}
	},[])

	function submit(e){
		e.preventDefault()
		const id = getUniId(window.location.href)
		dispatch(universityBasicDetailsUpdateReducer({id,data:data}))
	}

	const reduxData = useSelector((state)=>state.universityBasicDetailsSlice.data)
	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Basic Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,name:e.target.value})} value={data.name} type="text" placeholder="University name"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,country:e.target.value})} value={data.country} type="text" placeholder="Country name"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,address:e.target.value})} value={data.address} type="text" placeholder="Address name"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,website:e.target.value})} value={data.website} type="text" placeholder="Website"/>
					</div>
					<Button submit={submit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>
	)
}

export function ContactDetailsModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();


	const [data,setData] = useState({
		name:"",email:"",phone:"",description:""
	})

	useEffect(()=>{
	},[])

	function onSubmit(e){
		e.preventDefault();
		const id = getUniId(window.location.href)
		dispatch(universityContactAddReducer({data,id}))
	}

	const reduxData = useSelector((state)=>state.universityContactSlice.data)
	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}
	
	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Contact Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input onChange={(e)=>setData({...data,name:e.target.value})} style={textFeildCSS} type="text" placeholder="Name"/>
						<input onChange={(e)=>setData({...data,email:e.target.value})} style={textFeildCSS} type="email" placeholder="Email"/>
						<input onChange={(e)=>setData({...data,phone:e.target.value})} style={textFeildCSS} type="mobile" placeholder="Phone no."/>
						<input onChange={(e)=>setData({...data,description:e.target.value})} style={textFeildCSS} type="text" placeholder="Designation"/>
					</div>
					<Button submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>
	)
}

export function ContactDetailsUpdateModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",
		justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();
	const reduxData = useSelector((state)=>state.universityContactSlice.data)


	const [data,setData] = useState({
		name:"",email:"",phone:"",description:""
	})

	useEffect(()=>{
		if(props?.data){
			var phone = props?.data?.mobile
			var name = props?.data?.name
			var email = props?.data?.mail
			var description = props?.data?.description
			setData({...data,phone,name,email,description})
		}
	},[])

	useEffect(()=>{
		console.log(reduxData)
		console.log(props?.data?.id)
	},[reduxData])

	function onSubmit(e){
		e.preventDefault();
		const id = props?.data?.id
		dispatch(universityContactUpdateReducer({data,id}))
	}

	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}
	
	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Update Contact Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input value={data?.name} onChange={(e)=>setData({...data,name:e.target.value})} style={textFeildCSS} type="text" placeholder="Name"/>
						<input value={data?.email} onChange={(e)=>setData({...data,email:e.target.value})} style={textFeildCSS} type="email" placeholder="Email"/>
						<input value={data?.phone} onChange={(e)=>setData({...data,phone:e.target.value})} style={textFeildCSS} type="mobile" placeholder="Phone no."/>
						<input value={data?.description} onChange={(e)=>setData({...data,description:e.target.value})} style={textFeildCSS} type="text" placeholder="Designation"/>
					</div>
					<Button submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>
	)
}


export function MeetingUniversityModal(props){
	const style = {
		maxHeight: "500px",
		minWidth: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();

	const [participants,setParticipants] = useState({
		"name":"",
		"email":"",
		"designation":""
	})

	const [data,setData] = useState(
		{
		"title":"",
		"createdBy":"",
		"meetingTime":"",
		"agenda":"",
		"participants":[],
		"link":"N/A"
		}
	)

	useEffect(()=>{
		var name = localStorage.getItem('name')
		if(name){
			setData({...data,"createdBy":name})
		}
	},[])

	function onSubmit(e){
		e.preventDefault();
		const id = getUniId(window.location.href)
		dispatch(universityMeetingAddReducer({data:data,id}))
	}

	const reduxData = useSelector((state)=>state.universityMeetingSlice.data)
	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Meeting Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"0.5rem"}}>
					
						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Meeting Agenda</span>
							<input type="text" value={data?.agenda} style={textFeildCSS} onChange={(e)=>setData({...data,"agenda":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Created By</span>
							<input type="text" value={data?.createdBy} style={textFeildCSS}/>
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Meeting between</span>
							<input type="text" value={data?.title} style={textFeildCSS} onChange={(e)=>setData({...data,"title":e.target.value})} />
						</div>
									

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Link</span>
							<input type="text" value={data?.link} style={textFeildCSS} onChange={(e)=>setData({...data,"link":e.target.value})} />
						</div>
									

						<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Date</span>
								<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"meetingTime":e.target.value})} />
							</div>
						</div>

					</div>

					<Button style={{marginTop:"1rem"}} submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>

	)
}

export function MeetingUpdateUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const buttonCSS = {

	}

	const dispatch = useDispatch();

	const reduxData = useSelector((state)=>state.universityMeetingSlice.data)

	const [data,setData] = useState(
		{
		"title":"",
		"createdBy":"",
		"meetingTime":"",
		"agenda":"",
		"participants":[],
		"link":"N/A"
		}
	)

	useEffect(()=>{
		var name = localStorage.getItem('name')
		if(name){
			setData({...data,...props?.data})
		}
	},[])

	function onSubmit(e){
		e.preventDefault();
		const id = data["id"]
		// delete data["id"]
		// delete data["university"]
		dispatch(universityMeetingUpdateReducer({
			data:{"title":data?.title,"agenda":data?.agenda},id
		}))
	}

	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Meeting Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"0.5rem"}}>
					
						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Meeting Agenda</span>
							<input type="text" value={data?.agenda} style={textFeildCSS} onChange={(e)=>setData({...data,"agenda":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Created By</span>
							<input type="text" value={data?.createdBy} style={textFeildCSS} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Meeting between</span>
							<input type="text" value={data?.title} style={textFeildCSS} onChange={(e)=>setData({...data,"title":e.target.value})} />
						</div>
									

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Link</span>
							<input type="text" value={data?.link} style={textFeildCSS} onChange={(e)=>setData({...data,"link":e.target.value})} />
						</div>
									

						<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Date</span>
								<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"meetingTime":e.target.value})} />
							</div>
						</div>

					</div>

					<Button style={{marginTop:"1rem",...buttonCSS}} submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>

	)
}

export function GuestVisitUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();

	const reduxData = useSelector((state)=>state.universityGuestVisitSlice.data)

	const navigate = useNavigate()

	const [data,setData] = useState(
		{
			"title":"n/a",
			"description":"n/a",
			"visitDate":"n/a",
			"visitPeriod":"n/a",
			"visitors":[],
			"host":"n/a",
			"hostEmail":"n/a",
			"hostPhone":"n/a",
			"university":"n/a",	
		}
	)

	useEffect(()=>{
		var name = localStorage.getItem('name')
		if(name){
			setData({...data,host:name})
		}
		var hostEmail = localStorage.getItem('email')
		if(hostEmail){
			setData({...data,hostEmail})
		}
		var hostPhone = localStorage.getItem('phone')
		if(hostPhone){
			setData({...data,hostPhone})
		}
		const id = getUniId(window.location.href)
		if(id){
			setData({...data,university:id})
		}
	},[])


	useEffect(()=>{
		console.log(reduxData)
		if(reduxData?.redirect==true && reduxData?.id!==""){
			var temp_id = reduxData?.id
			dispatch(redirectToGuestVisitProfile())
			navigate(`/guest_visit/${temp_id}`)			
		}
	},[reduxData])

	function onSubmit(e){
		e.preventDefault();
		const id = getUniId(window.location.href)
		dispatch(universityGuestVisitAddReducer({data:data,id}))
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}


	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Guest Visit
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Title</span>
							<input type="text" style={textFeildCSS} onChange={(e)=>setData({...data,"title":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Description</span>
							<input type="text" style={textFeildCSS} onChange={(e)=>setData({...data,"description":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
							<span>Date</span>
							<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"visitDate":e.target.value})} />
						</div>

					</div>

					<Button style={{marginBottom:"5rem"}} submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>

	)
}

export function GuestVisitUpdateUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();

	const [data,setData] = useState(
		{
			"title":"n/a",
			"description":"n/a",
			"visitDate":"n/a",
			"visitPeriod":"n/a",
			"visitors":[],
			"host":"n/a",
			"hostEmail":"n/a",
			"hostPhone":"n/a",
			"university":"n/a",	
		}
	)

	useEffect(()=>{
		var name = localStorage.getItem('name')
		if(name){
			setData({...data,host:name})
		}
		var hostEmail = localStorage.getItem('email')
		if(hostEmail){
			setData({...data,hostEmail})
		}
		var hostPhone = localStorage.getItem('phone')
		if(hostPhone){
			setData({...data,hostPhone})
		}
		const id = getUniId(window.location.href)
		if(id){
			setData({...data,university:id})
		}
	},[])

	function onSubmit(e){
		e.preventDefault();
		const id = getUniId(window.location.href)
		// dispatch(universityGuestVisitAddReducer({data:data,id}))
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Guest Visit
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Title</span>
							<input type="text" style={textFeildCSS} onChange={(e)=>setData({...data,"title":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Description</span>
							<input type="text" style={textFeildCSS} onChange={(e)=>setData({...data,"description":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
							<span>Date</span>
							<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"visitDate":e.target.value})} />
						</div>

					</div>

					<Button style={{marginBottom:"5rem"}} submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>

	)
}


export function ProgramOfColaborationUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const reduxData = useSelector((state)=>state.universityProgramSlice.data)


	const dispatch = useDispatch()

	const [data,setData] = useState({
    "lpu_name":"",
    "forign_name":"",
    "tutionFees":"",
    "scholarship":"",
	"model": "",
	})


	useEffect(()=>{
	},[])

	function submit(e){
		e.preventDefault()
		const id = getUniId(window.location.href)
		dispatch(universityProgramAddReducer({id,data:data}))
	}


	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Program of Colaboration
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,lpu_name:e.target.value})} value={data.lpu_name} type="text" placeholder="LPU Degree name"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,forign_name:e.target.value})} value={data.forign_name} type="text" placeholder="Final Degree name"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,tutionFees:e.target.value})} value={data.tutionFees} type="text" placeholder="Fees"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,scholarship:e.target.value})} value={data.scholarship} type="text" placeholder="Scholarship"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,model:e.target.value})} value={data.model} type="text" placeholder="Model"/>
					</div>
					<Button submit={submit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>


	)
}

export function RecentUpdateUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}


	const dispatch = useDispatch()

	const [data,setData] = useState({
		"type":"text",
		"value":""
	})


	useEffect(()=>{
	},[])

	function submit(e){
		e.preventDefault()
		const id = getUniId(window.location.href)
		dispatch(universityRecentUpdateAddReducer({id,data:data}))
	}

	const reduxData = useSelector((state)=>state.universityRecentUpdateSlice.data)

	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Add New Recent Update
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,value:e.target.value})} value={data.lpu_name} type="text" placeholder="Write Here"/>
					</div>
					<Button submit={submit} buttonText={"Save"}/>					
				</form>
			</div>
		</div>
	)
}

export function RecentUpdateUpdateUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}


	const dispatch = useDispatch()

	const [data,setData] = useState({
		"type":"text",
		"value":""
	})


	useEffect(()=>{
		if(props?.data){
			var value = props?.data?.title
			var type = props?.data?.type
			setData({value,type})
		}
	},[])


	function submit(e){
		e.preventDefault()
		const id = props?.data?.id
		dispatch(universityRecentUpdateUpdateReducer({id,data:data}))
	}

	const reduxData = useSelector((state)=>state.universityRecentUpdateSlice.data)
	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	return(

		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Update the Recent Update
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input value={data?.value} style={textFeildCSS} onChange={(e)=>setData({...data,value:e.target.value})} type="text"/>

					</div>
					<Button submit={submit} buttonText={"Save"}/>					
				</form>
			</div>
		</div>
	)
}

export function MouContractAddUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();

	const [data,setData] = useState({
		"file":{},
		"startDate":"",
		"endDate":"",
		"type":"general",
		"title":""
	})

	const [file, setFile] = useState({});
	const [fileName, setFileName] = useState("");

	const options = [
		"general",
		"articulation_aggrement",
		"exchange_aggrement",
		"research",
		"collaboration",
		"other"
	]

	

	const reduxData = useSelector((state)=>state.universityMouContractSlice.data)


	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}



	async function onSubmit(e){
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", data?.file);
		formData.append("startDate", data?.startDate);
		formData.append("endDate", data?.endDate);
		formData.append("type", data?.type);
		formData.append("title", data?.title);

		const id = getUniId(window.location.href)

		dispatch(universityMouContractAddReducer({id,data:formData}))
	}

	function handleFile(e){
		// setFile(e.target?.files[0]);
        // setFileName(e.target?.files[0]?.name);
		setData({...data,file:e.target?.files[0]})
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Mou Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Type</span>

							<select value={data?.type} style={textFeildCSS} onChange={(e)=>setData({...data,"type":e.target.value})}>
								{options.map( (item)=>(
									<option value={item}>{item}</option>
								))}
							</select>

						</div>

						<input style={textFeildCSS} onChange={(e)=>setData({...data,title:e.target.value})} value={data.title} type="text" placeholder="Mou Title"/>

						
						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
							
							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Start Date</span>
								<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"startDate":e.target.value})} />
							</div>

							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Start Date</span>
								<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"endDate":e.target.value})} />
							</div>
						
						</div>


						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Upload File</span>
							<input type="file" style={textFeildCSS} onChange={(e)=>handleFile(e)} />
						</div>


					</div>
					<Button submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>


	)
}


export function MouContractAddUniversityModal2(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();

	const [data,setData] = useState({
		"file":"",
		"startDate":"",
		"endDate":"",
		"type":"general",
		"title":""
	})

	const [file,setFile] = useState(null);

	const options = [
		"general",
		"articulation_aggrement",
		"exchange_aggrement",
		"research",
		"collaboration",
		"other"
	]

	

	const reduxData = useSelector((state)=>state.universityMouContractSlice.data)


	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}



	function onSubmit(e){
		e.preventDefault();
		const uni_id = getUniId(window.location.href)

		dispatch(setMouContractSliceLoading({loading:true,message:"Please Wait"}))

		let file_name = `${uni_id}_MouContract_${data?.startDate}_${data?.endDate}_${data?.type}`
		if(!file){
			dispatch(setMouContractSliceLoading({loading:false,message:"File is not Present"}))
			return ;
		}
		uploadFile(file,`files/${file_name}`).then((fileURL)=>{
			var d = {...data}
			d["file"] = fileURL
			setData(d)
			if(d["file"]===""){
				dispatch(setMouContractSliceLoading({loading:false,message:"Error in uploading file please try after some time"}))
				return ;
			}
			dispatch(universityMouContractAddReducer({id:uni_id,data:d}))
		})

		dispatch(setMouContractSliceLoading({loading:false,message:""}))
	}

	function handleFile(e){
		e.preventDefault()
		let file = e.target?.files[0]
		if(!file){
			return ;
		}
		setFile(file)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Mou Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Type</span>

							<select value={data?.type} style={textFeildCSS} onChange={(e)=>setData({...data,"type":e.target.value})}>
								{options.map( (item)=>(
									<option value={item}>{item}</option>
								))}
							</select>

						</div>

						<input style={textFeildCSS} onChange={(e)=>setData({...data,title:e.target.value})} value={data.title} type="text" placeholder="Mou Title"/>

						
						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
							
							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Start Date</span>
								<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"startDate":e.target.value})} />
							</div>

							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Start Date</span>
								<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"endDate":e.target.value})} />
							</div>
						
						</div>


						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Upload File</span>
							<input type="file" style={textFeildCSS} onChange={(e)=>handleFile(e)} />
						</div>


					</div>
					<Button submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>


	)
}


export function MouContractUpdateUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();

	const [data,setData] = useState({
		"file":"",
		"startDate":"",
		"endDate":"",
		"type":"",
		"title":""
	})

	const [file,setFile] = useState(null);

	const options = [
		"general",
		"articulation_aggrement",
		"exchange_aggrement",
		"research",
		"collaboration",
		"other"
	]

	useEffect(()=>{
		if(props?.data){
			var file = props?.data?.file
			var title = props?.data?.title
			var startDate = props?.data?.startDate
			var endDate = props?.data?.endDate
			var type = props?.data?.type
			setData({file,title,startDate,endDate,type})
		}
	},[])

	function onSubmit(e){
		e.preventDefault();
		const uni_id = props?.data?.id
		
		dispatch(setMouContractSliceLoading({loading:true,message:"Please Wait"}))
		
		let file_name = `${uni_id}_MouContract_${data?.startDate}_${data?.endDate}_${data?.type}`
		
		if(file){
			uploadFile(file,`files/${file_name}`).then((fileURL)=>{
				var d = {...data}
				d["file"] = fileURL
				setData(d)
				if(d["file"]===""){
					dispatch(setMouContractSliceLoading({loading:false,message:"Error in uploading file please try after some time"}))
					return ;
				}
				dispatch(universityMouContractUpdateReducer({id:uni_id,data:d}))
			})
		}else{
			dispatch(universityMouContractUpdateReducer({id:uni_id,data:data}))
		}
		dispatch(setMouContractSliceLoading({loading:false,message:""}))
	}

	function handleFile(e){
		e.preventDefault()
		let file = e.target?.files[0]
		if(!file){
			return ;
		}
		setFile(file)
	}

	const reduxData = useSelector((state)=>state.universityMouContractSlice.data)
	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				MOU Details Update
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Type</span>

							<select value={data?.type} style={textFeildCSS} onChange={(e)=>setData({...data,"type":e.target.value})}>
								{options.map( (item)=>(
									<option value={item}>{item}</option>
								))}
							</select>

						</div>

						<input style={textFeildCSS} onChange={(e)=>setData({...data,title:e.target.value})} value={data.title} type="text" placeholder="Mou Title"/>

						
						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Start Date</span>
								<input value={data?.startDate} type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"startDate":e.target.value})} />
							</div>

							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Start Date</span>
								<input value={data?.endDate} type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"endDate":e.target.value})} />
							</div>
						</div>


						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Upload File</span>
							<input type="file" style={textFeildCSS} onChange={(e)=>handleFile(e)} />
						</div>

					</div>
					<Button submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>
	)
}


export function ApplicationProcessAddUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}


	const dispatch = useDispatch()

	const [data,setData] = useState({
		"general":false,
		"title":""
	})

	useEffect(()=>{
	},[])

	function submit(e){
		e.preventDefault()
		const id = getUniId(window.location.href)
		dispatch(universityApplicationProcessAddReducer({id,data:data}))
	}

	const reduxData = useSelector((state)=>state.universityApplicationProcessSlice.data)

	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Add New Application Process
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,title:e.target.value})} type="text" placeholder="Write Here"/>
					</div>

					<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem"}}>
						<span>Apply For All University</span>
						<input style={{paddingLeft:"1rem"}} type="checkbox" onChange={(e)=>setData({...data,"general":!data?.general})}/>
					</div>

					<Button submit={submit} buttonText={"Save"}/>					
				</form>
			</div>
		</div>
	)
}

export function FinancialAgreementAddUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}


	const dispatch = useDispatch()

	const [data,setData] = useState({
		"general":false,
		"title":""
	})

	useEffect(()=>{
	},[])

	function submit(e){
		e.preventDefault()
		const id = getUniId(window.location.href)
		dispatch(universityFinancialAgreementAddReducer({id,data:data}))
	}

	const reduxData = useSelector((state)=>state.universityFinancialAgreementSlice.data)

	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Add New Financial Agrement
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,title:e.target.value})} type="text" placeholder="Write Here"/>
					</div>

					<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem"}}>
						<span>Apply For All University</span>
						<input style={{paddingLeft:"1rem"}} type="checkbox" onChange={(e)=>setData({...data,"general":!data?.general})}/>
					</div>

					<Button submit={submit} buttonText={"Save"}/>					
				</form>
			</div>
		</div>
	)
}


export function DocumentAddUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}


	const dispatch = useDispatch()

	const [data,setData] = useState({
		"general":false,
		"title":""
	})

	useEffect(()=>{
	},[])

	function submit(e){
		e.preventDefault()
		const id = getUniId(window.location.href)
		dispatch(universityDocumentRequiredAddReducer({id,data:data}))
	}

	const reduxData = useSelector((state)=>state.universityApplicationProcessSlice.data)

	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Add New Document
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,title:e.target.value})} type="text" placeholder="Write Here"/>
					</div>

					<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem"}}>
						<span>Apply For All University</span>
						<input style={{paddingLeft:"1rem"}} type="checkbox" onChange={(e)=>setData({...data,"general":!data?.general})}/>
					</div>

					<Button submit={submit} buttonText={"Save"}/>					
				</form>
			</div>
		</div>
	)
}
