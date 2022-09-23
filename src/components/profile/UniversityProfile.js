import React,{useState,useEffect} from 'react'

// other import
import {NavSideBarLayout} from '../routes'
import {
	Card ,
	BasicDetailsModal, 
	Table,ObjectCard,
	FileCard,MeetingCard,
	ContactCard,RecentUpdateCard,
	ModalPopUp,ContactDetailsModal,
	MeetingUniversityModal,GuestVisitUniversityModal,MouContractUniversityModal,
} from '../routes'

import { useDispatch, useSelector } from 'react-redux'


import {
	universityBasicDetailsReducer,
	universityContactReducer,
	universityMeetingReducer,
	universityProgramReducer,
	universityRecentUpdateReducer,
} from '../../redux/routes'


function getUniId(url){
	var id = ""
	for(var i=url.length-1;i>=0;i--){
		if(url[i]==='/') return id
		id = url[i] + id
	}
	return id
}


const default_img = `https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png`

export default function UniversityProfile(props){

	const dispatch = useDispatch();
	// default image for user contact
	const loading_obj = {"STATUS":"LOADING"};

	return (
		<div>
			<NavSideBarLayout childCSS={{marginTop:"5rem"}}>
				{/*Full screen div*/}
				<div style={{}}>
					{/*top screen div*/}
					<div style={{display:"flex",justifyContent:"space-between",maxHeight:"790px"}}>

						<div style={{display:"flex",rowGap:"2rem",flexWrap:"wrap",alignContent:"space-between"}}>						
							<BasicDetails popup={<BasicDetailsModal/>}/>							
							<MOUcontract popup={<MouContractUniversityModal/>}/>
							<ContactPerson popup={<ContactDetailsModal/>}/>
							<ApplicationProcess popup={<BasicDetailsModal/>}/>
							<FacultyMobiliy popup={<BasicDetailsModal/>}/>								
							<FinancialAgreements popup={<BasicDetailsModal/>}/>
						</div>

						<div style={{position:"relative",top:"-15px"}}>
							<RecentUpdate popup={<BasicDetailsModal/>}/>
						</div>

					</div>
					{/*Middle Screeen*/}
					
					<div style={{display:"flex",justifyContent:"space-between",marginTop:"2rem",flexWrap:"wrap",height:"380px"}}>
						<Meetings popup={<MeetingUniversityModal/>}/>
						<GuestVisit popup={<GuestVisitUniversityModal/>}/>
						<DocumentRequired popup={<BasicDetailsModal/>}/>
					</div>

					<div style={{marginTop:"2rem"}}>
						<ProgramOfColaboration props={<BasicDetailsModal/>}/>						
					</div>
				</div>					
				
			</NavSideBarLayout>
		</div>
	)
}



function BasicDetails(props){

	const dispatch = useDispatch()

	const details = useSelector((state)=>state.universityBasicDetailsSlice.data)

	useEffect(()=>{console.log("state ---> ",details)},[details])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url

		// fetching basic details from server using reducers
		dispatch(universityBasicDetailsReducer({id}))
	},[])

	return (
		<>
			{/* basic Details */}
			<Card popup={props?.popup} style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Basic Details">
				<ObjectCard data={details.data}/>
			</Card>
		</>
	)
}

function MOUcontract(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([
		{"type":"General","start":"28-07-2022","end":"29-07-2023"},
		{"type":"General","start":"28-07-2022","end":"29-07-2023"},
		{"type":"General","start":"28-07-2022","end":"29-07-2023"},
		{"type":"General","start":"28-07-2022","end":"29-07-2023"},
	])

	return (
		<>
			{/* Mou contract */}
			<Card popup={props?.popup} style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Mou / Contract">
				{data.map(item=>(
					<FileCard data={item}/>
				))}
			</Card>
		</>
	)
}

function ContactPerson(props){

	const dispatch = useDispatch()

	const contactData = useSelector((state)=>state.universityContactSlice.data)

	useEffect(()=>{console.log("state contact ---> ",contactData)},[contactData])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url
		dispatch(universityContactReducer({id}))
	},[])

	return (
		<>
			{/* Contact Person */}
			<Card  popup={props?.popup}  style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Contact Person">
				{
					contactData?.data?.data?.map((item,key)=>(
						<ContactCard data={item} id={contactData?.data?.ids[key]}/>
					))
				}
			</Card>
		</>
	)
}


function ApplicationProcess(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	return (
		<>
			{/* Application process*/}
			<Card  popup={props?.popup} style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Application Process">
				<ul>
				{
					data.map(item=>(
						<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
					))
				}
				</ul>
			</Card>
		</>
	)
}


function FacultyMobiliy(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([
	])

	return (
		<>
			{/* Student/ faculty mobility */}
			<Card  popup={props?.popup}  style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Student/ faculty mobility">
				
			</Card>
		</>
	)
}

function FinancialAgreements(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	return (
		<>
			{/* Financial Agreements */}
			<Card  popup={props?.popup} style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Financial Agreements">
			
			</Card>
		</>
	)
}

function RecentUpdate(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	const recentUpdateData = useSelector((state)=>state.universityRecentUpdateSlice.data)

	useEffect(()=>{
		console.log("state recentUpdate ---> ",recentUpdateData)
		setData(recentUpdateData?.data?.data ? recentUpdateData?.data?.data : [] )
	},[recentUpdateData])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url
		dispatch(universityRecentUpdateReducer({id}))
	},[])

	return (
		<>
			{/* RECENT UPDATE*/}
			<Card popup={props?.popup}  cardDataCSS={{maxHeight:"90%"}}  heading="Recent Update" style={{width:"411px",height:"100%",border:"1px solid black"}}>
				<ul>
				{		data.map(item=>(
						<li><RecentUpdateCard data={item}/></li>
				))}
				</ul>
			</Card>
		</>
	)
}

function Meetings(props){

	const dispatch = useDispatch()

	const meetingData = useSelector((state)=>state.universityMeetingSlice.data)

	useEffect(()=>{console.log("state meetings ---> ",meetingData)},[meetingData])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url

		dispatch(universityMeetingReducer({id}))
	},[])


	return (
		<>
			{/* Meetings */}
			<Card  popup={props?.popup} style={{display:"flex",alignContent:"start",flexWrap:"wrap",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"641px",maxHeight:"100%"}} heading="Meetings">
				<ul>
					{	meetingData?.data?.data &&	meetingData?.data?.data.map(item=>(
							<li><MeetingCard data={item}/></li>
					))}
				</ul>
			</Card>
		</>
	)
}

function GuestVisit(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([
	])


	return (
		<>
			{/* Guest Visit */}
			<Card popup={props?.popup}  style={{display:"flex",alignContent:"start",flexWrap:"wrap",alignItems:"stretch",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"641px"}} heading="Guest Visit">

			</Card>
		</>
	)
}

function DocumentRequired(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	return (
		<>
			{/* Document Required */}
			<Card  popup={props?.popup} style={{display:"flex",alignContent:"start",flexWrap:"wrap",alignItems:"stretch",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"411px",height:"100%"}} heading="Document Required">
			<ul>
					{		data.map(item=>(
							<li><RecentUpdateCard data={item}/></li>
					))}
					</ul>
			</Card>

		</>
	)
}

function ProgramOfColaboration(props){

	const dispatch = useDispatch()

	const programData = useSelector((state)=>state.universityProgramSlice.data)

	const [data,setData] = useState({rows:[],column:[],pagenation_id:0})

	useEffect(()=>{
		var rows = programData.data.data ? programData.data.data : [] 
		var column = programData.data.column ? programData.data.column : []
		console.log("state Program ---> ",rows,column)
		setData({rows:rows,column:column,pagenation_id:0})
	},[programData])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url
		dispatch(universityProgramReducer({id}))
	},[])


	return (
		<>
			<Table data={data} rows={data.rows} column={data.column} heading={"Program of colaboration"} style={{minHeight:"15rem"}}/>
		</>
	)
}






