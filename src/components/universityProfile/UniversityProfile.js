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
	MeetingUniversityModal,GuestVisitUniversityModal,
	ProgramOfColaborationUniversityModal,RecentUpdateUniversityModal,
	MeetingUpdateUniversityModal,ContactDetailsUpdateModal,
	MouContractAddUniversityModal,RecentUpdateUpdateUniversityModal,
	MouContractUpdateUniversityModal,ApplicationProcessAddUniversityModal,
	DocumentAddUniversityModal,FinancialAgreementAddUniversityModal,
	GuestVisitCard,

	LoadingPage,
	LoadingComponent,
} from '../routes'

import { useDispatch, useSelector } from 'react-redux'


import {
	universityBasicDetailsReducer,
	universityContactReducer,
	universityMeetingReducer,
	universityProgramReducer,
	universityRecentUpdateReducer,
	universityMouContractReducer,
	universityApplicationProcessReducer,
	universityDocumentRequiredReducer,
	universityFinancialAgreementReducer,
	universityGuestVisitReducer,
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
							<MOUcontract popup={<MouContractAddUniversityModal/>}/>
							<ContactPerson popup={<ContactDetailsModal/>}/>
							<ApplicationProcess popup={<ApplicationProcessAddUniversityModal/>}/>
							<FacultyMobiliy popup={<BasicDetailsModal/>}/>								
							<FinancialAgreements popup={<FinancialAgreementAddUniversityModal/>}/>
						</div>

						<div style={{position:"relative",top:"-15px"}}>
							<RecentUpdate popup={<RecentUpdateUniversityModal/>}/>
						</div>

					</div>
					{/*Middle Screeen*/}
					
					<div style={{display:"flex",justifyContent:"space-between",marginTop:"2rem",flexWrap:"wrap",height:"380px"}}>
						<Meetings popup={<MeetingUniversityModal/>}/>
						<GuestVisit popup={<GuestVisitUniversityModal/>}/>
						<DocumentRequired popup={<DocumentAddUniversityModal/>}/>
					</div>

					<div style={{marginTop:"2rem"}}>
						<ProgramOfColaboration popup={<ProgramOfColaborationUniversityModal/>}/>						
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
				{
					details?.loading ? <LoadingComponent/> : <ObjectCard data={details.data}/>
				}
			</Card>
		</>
	)
}

function MOUcontract(props){

	const dispatch = useDispatch()

	const details = useSelector((state)=>state.universityMouContractSlice.data)

	useEffect(()=>{console.log("mou contract state ---> ",details)},[details])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url

		// fetching basic details from server using reducers
		dispatch(universityMouContractReducer({id}))
	},[])


	return (
		<>
			{/* Mou contract */}
			<Card popup={props?.popup} style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Mou / Contract">
				{details?.data?.data?.map(item=>(
					<FileCard mouContractUpdateUniversityModal={<MouContractUpdateUniversityModal data={item}/>} data={item}/>
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
					contactData?.loading ? <LoadingComponent/> : contactData?.data?.data?.map((item,key)=>(
						<ContactCard contactDetailsUpdateModal={<ContactDetailsUpdateModal data={item}/>} data={item} id={contactData?.data?.ids[key]}/>
					))
				}
			</Card>
		</>
	)
}


function ApplicationProcess(props){

	const dispatch = useDispatch()


	const details = useSelector((state)=>state.universityApplicationProcessSlice.data)

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url
		dispatch(universityApplicationProcessReducer({id}))
	},[])

	useEffect(()=>{
		if(details?.data?.data){
			setData(details?.data?.data)
			console.log("Application Process data -------------> ",details?.data?.data)
		}
	},[details])

	return (
		<>
			{/* Application process*/}
			<Card  popup={props?.popup} style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Application Process">
				<ul>
					{
						data?.map((item)=>(
							<li>{item?.title ? item?.title : ""}</li>
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

	const details = useSelector((state)=>state.universityFinancialAgreementSlice.data)

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url
		dispatch(universityFinancialAgreementReducer({id}))
	},[])

	useEffect(()=>{
		if(details?.data?.data){
			setData(details?.data?.data)
			console.log("Financial Agreements --> ",details)
		}
	},[details])

	return (
		<>
			<Card  popup={props?.popup} style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Financial Agreements">
				<ul>
					{
						data?.map((item)=>(
							<li>{item?.title ? item?.title : ""}</li>
						))
					}
				</ul>
			</Card>
		</>
	)
}

function RecentUpdate(props){

	const dispatch = useDispatch()

	const [data,setData] = useState([])

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
				{	recentUpdateData?.loading ? <LoadingComponent/> :
					<ul>
						{		
							recentUpdateData?.data?.data.map(item=>(
								<li><RecentUpdateCard recentUpdateUpdateUniversityModal={<RecentUpdateUpdateUniversityModal data={item}/>} data={item}/></li>
							))
						}
					</ul>
				}
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
				{
					meetingData?.loading ? <LoadingComponent/> :
						<ul>
							{	
								meetingData?.data?.data &&	meetingData?.data?.data.map(item=>(
									<li><MeetingCard meetingUpdateUniversityModal={<MeetingUpdateUniversityModal data={item}/>} data={item}/></li>
								))
							}
						</ul>
				}
			</Card>
		</>
	)
}

function GuestVisit(props){

	const dispatch = useDispatch()
	const guestVisitData = useSelector((state)=>state.universityGuestVisitSlice.data)

	const [data,setData] = useState([
	])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url

		dispatch(universityGuestVisitReducer({id}))
	},[])

	return (
		<>
			{/* Guest Visit */}
			<Card popup={props?.popup}  style={{display:"flex",alignContent:"start",flexWrap:"wrap",alignItems:"stretch",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"641px"}} heading="Guest Visit">
				{
					guestVisitData?.loading ? <LoadingComponent/> :
						<ul>
							{	
								guestVisitData?.data?.data &&	guestVisitData?.data?.data.map(item=>(
									<li><GuestVisitCard meetingUpdateUniversityModal={<MeetingUpdateUniversityModal data={item}/>} data={item}/></li>
								))
							}
						</ul>
				}
			</Card>
		</>
	)
}


function DocumentRequired(props){

	const dispatch = useDispatch()


	const details = useSelector((state)=>state.universityDocumentRequiredSlice.data)

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])

	useEffect(()=>{
		const id = getUniId(window.location.href) // obtaining university id from url
		dispatch(universityDocumentRequiredReducer({id}))
	},[])

	useEffect(()=>{
		if(details?.data?.data){
			setData(details?.data?.data)
			console.log("document required data -------------> ",details?.data?.data)
		}
	},[details])

	return (
		<>
			{/* Application process*/}
			<Card  popup={props?.popup} style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Document Required">
				<ul>
					{
						data?.map((item)=>(
							<li>{item?.title ? item?.title : ""}</li>
						))
					}
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
			<Table data={data} popup={props?.popup} rows={data.rows} column={data.column} heading={"Program of colaboration"} style={{minHeight:"15rem"}}/>
		</>
	)
}






