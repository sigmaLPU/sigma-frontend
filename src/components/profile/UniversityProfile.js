import React,{useState,useEffect} from 'react'

// other import
import {NavSideBarLayout} from '../routes'
import {Card , Table,ObjectCard,FileCard,MeetingCard,ContactCard,RecentUpdateCard,ModalPopUp} from '../routes'
import { useDispatch, useSelector } from 'react-redux'

import { getSingleUniversityReducer,getSingleUniversityContactReducer } from '../../redux/university/getSingleUniversity'
import { getRequestReducer } from '../../redux/getRequestAsync'
import { GET_SINGLE_UNIVERSITY_CONTACT_URL, GET_SINGLE_UNIVERSITY_MEETING_URL,GET_SINGLE_UNIVERSITY_PROGRAM_URL } from '../../redux/constants'


import { universityBasicDetailsReducer } from '../../redux/temp/universityBasicDetails'
import { universityContactReducer } from '../../redux/temp/universityContactPerson'



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

	// contact data state
	const [ContactData,setContactData] = useState({"data":[],"ids":[]})
	// recent update state
	const [RecentUpdateData,setRecentUpdateData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])


	return (
		<div>
			<NavSideBarLayout childCSS={{marginTop:"5rem"}}>
				{/*Full screen div*/}
				<div style={{}}>
					{/*top screen div*/}
					<div style={{display:"flex",justifyContent:"space-between",maxHeight:"790px"}}>

						<div style={{display:"flex",rowGap:"2rem",flexWrap:"wrap",alignContent:"space-between"}}>						
							<BasicDetails/>							
							<MOUcontract/>
							<ContactPerson/>
							<ApplicationProcess/>
							<FacultyMobiliy/>								
							<FinancialAgreements/>
						</div>

						<div style={{position:"relative",top:"-15px"}}>
							<RecentUpdate/>
						</div>

					</div>
					{/*Middle Screeen*/}
					
					<div style={{display:"flex",justifyContent:"space-between",marginTop:"2rem",flexWrap:"wrap",height:"380px"}}>
						<Meetings/>
						<GuestVisit/>
						<DocumentRequired/>
					</div>

					<div style={{marginTop:"2rem"}}>
						<Table 
							heading={"Program of colaboration"}
							style={{
							minHeight:"15rem"
							}}
						/>
					</div>
				</div>					
				<ModalPopUp>
					Hello world
				</ModalPopUp>
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
			<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Basic Details">
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
			<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Mou / Contract">
				{data.map(item=>(
					<FileCard data={item}/>
				))}
			</Card>
		</>
	)
}

function ContactPerson(props){

	const dispatch = useDispatch()

	const contactData = useSelector((state)=>state.universityContactSlice.data)?.data

	useEffect(()=>{console.log("state contact ---> ",contactData)},[contactData])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url
		dispatch(universityContactReducer({id}))
	},[])

	return (
		<>
			{/* Contact Person */}
			<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Contact Person">
				{
					contactData?.data?.map((item,key)=>(
						<ContactCard data={item} id={contactData?.ids[key]}/>
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
			<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Application Process">
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
			<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Student/ faculty mobility">
				
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
			<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Financial Agreements">
			
			</Card>
		</>
	)
}

function RecentUpdate(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	return (
		<>
			{/* RECENT UPDATE*/}
			<Card cardDataCSS={{maxHeight:"90%"}}  heading="Recent Update" style={{width:"411px",height:"100%",border:"1px solid black"}}>
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

	const [meetingData,setMeetingData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url

		// fetching meetings details from server
		dispatch(getRequestReducer({url:`${GET_SINGLE_UNIVERSITY_MEETING_URL}/${id}`})).then((data)=>{
			data = data?.payload?.data?.meetings
			if(data){
				var temp = {}
				var arr = []
				for(const obj of data){
					var temp2 = {}
					temp2["title"] = obj?.title
					temp2["meetingTime"] = obj?.meetingTime
				}
			}else{
				console.log("No data found")
			}
		}).catch((error)=>{
			console.log(error)
		})
		},[])

	useEffect(()=>{console.log(meetingData)},[meetingData])

	return (
		<>
			{/* Meetings */}
			<Card style={{display:"flex",alignContent:"start",flexWrap:"wrap",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"641px"}} heading="Meetings">
				<ul>
					{		meetingData.map(item=>(
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
			<Card style={{display:"flex",alignContent:"start",flexWrap:"wrap",alignItems:"stretch",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"641px"}} heading="Guest Visit">

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
			<Card style={{display:"flex",alignContent:"start",flexWrap:"wrap",alignItems:"stretch",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"411px",height:"100%"}} heading="Document Required">
			<ul>
					{		data.map(item=>(
							<li><RecentUpdateCard data={item}/></li>
					))}
					</ul>
			</Card>

		</>
	)
}

