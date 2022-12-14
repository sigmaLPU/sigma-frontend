// react imports
import React, {useEffect, useState} from 'react';

// component import
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'
import {BasicDetailsMeetingCard,AttachementCard} from '../routes'
import {BasicDetailsMeetingModal,OutcomeMeetingModal,ActionPlanMeetingModal,
	MoMNotesMeetingModal,AttachmentMeetingModal,ParticipantsMeetingModal,
} from '../routes'

// other imports
import video_icon from './resource/video_icon.png'
import profile_1 from './resource/profile_1.jpg'

import {useNavigate,useDispatch,useSelector} from 'react-redux'
import {getMeetingsSlice,getMeetingsReducer} from '../../redux/routes' 

function getUniId(url){
	var id = ""
	for(var i=url.length-1;i>=0;i--){
		if(url[i]==='/') return id
		id = url[i] + id
	}
	return id
}


// function defination
export default function MeetingProfile(props){

	const dispatch = useDispatch()
	const [id,setId] = useState("")
	const rawData = useSelector((state)=>state.getMeetingsSlice.data)

	const BasicDetailsheadingComponetCSS = {
		borderRadius:"20px",
		display:"flex",justifyContent:"center",alignItems:"center",
		color:"black",
		top:"-1.5rem",
		// bottom:"-1.5rem",
	}

	const [data,setData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])


	const [attachement,setAttachement] = useState([
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
	])

	useEffect(()=>{
		const id = getUniId(window.location.href)
		// dispatch(getMeetingsReducer({id}))
		setId(id)
	},[])

	return (
		<div>
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				{/*Whole window*/}
				<div style={{display:"flex",columnGap:"1rem"}}>
					<div style={{flexGrow:"1",display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<Card 
							popup = {<BasicDetailsMeetingModal/>}
							heading={rawData?.data?.title}
							headingComponetCSS = {BasicDetailsheadingComponetCSS}
							style={{border:"1px solid #F07F1A"}}
							cardDataCSS = {{maxHeight:"10rem"}}
						>
							<BasicDetailsMeetingCard data={rawData?.data} id={id}/>
						</Card>
						<div style={{display:"flex",columnGap:"1rem"}}>
							<Card popup = {<OutcomeMeetingModal/>} heading={"OutCome"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}} cardDataCSS={{maxHeight:"15rem"}}>
							
								<ul>{
									rawData?.data?.outcome?.map(item=>(
										<li style={{paddingBottom:"1rem"}}>{item["value"].length<50 ? item["value"]:item["value"].substr(0,50)+"..."}</li>
									))}
								</ul>

							</Card>

							<Card popup = {<ActionPlanMeetingModal/>} heading={"Action Plan"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}} cardDataCSS={{maxHeight:"15rem"}}>
								<ul>{
									rawData?.data?.actionPlan?.map(item=>(
										<li style={{paddingBottom:"1rem"}}>{item["value"].length<50 ? item["value"]:item["value"].substr(0,50)+"..."}</li>
									))}
								</ul>
							</Card>
						</div>

						<div style={{display:"flex",columnGap:"1rem",maxHeight:"20rem"}}>
							<Card popup = {<MoMNotesMeetingModal/>} heading={"MOM notes"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}} >
							
								<ul>{
									rawData?.data?.momNotes?.map(item=>(
										<li style={{marginBottom:"1rem"}}>{item["value"].length<50 ? item["value"]:item["value"].substr(0,50)+"..."}</li>
									))}
								</ul>

							</Card>

							<Card popup = {<AttachmentMeetingModal/>} heading={"Attachement"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
								<AttachementCard data={attachement} />
							</Card>
						</div>




					</div>
				{/*Side bar*/}
					<div style={{minWidth:"28rem",textAlign:"center",display:"flex",flexDirection:"column",rowGap:"1rem",maxHeight:"100vh",justifyContent:"flex-start"}}>


						<Card headingComponetCSS={{display:"none"}} style={{border:"1px solid #F07F1A",maxHeight:"8rem"}} styleHeading={{height:"2rem"}}>
							<div style={{display:"flex",justifyContent:"space-between",paddingRight:"3rem",alignItems:"center"}}>
								<img src={video_icon} style={{height:"3.5rem"}} alt="profile img"/>
								<div style={{color:"#F07F1A",fontWeight:"700",fontSize:"1.1rem",border: "1px solid #F07F1A",padding:"7px",borderRadius:"8px",cursor:"pointer"}}>
									<span>Add To Calendar</span>
								</div>
								<div style={{backgroundColor:"#F07F1A",color:"black",borderRadius:"8px",padding:"0.5rem 1.9rem"}}>
									<span>Join</span>
								</div>
							</div>
						</Card>



						<Card popup = {<ParticipantsMeetingModal/>} heading={"Participants"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}} >
							{
								rawData?.data?.participants?.map((item,key)=>(
									<div style={{display:"flex",flexDirection:"column",borderBottom:"1px solid black",flexWrap:"wrap"}}>
										<div>{item?.name}</div>
										<div>{item?.email}</div>
										<div>{item?.designation}</div>
									</div>
								))
							}
						</Card>
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}

/*
<div>Participants</div>
							<div style={{display:"flex",overflow:"scroll",paddingRight:"1.5rem",flexDirection:"column",rowGap:"0.5rem",marginTop:"1rem",width:"100%"}}>
								{
									participants.map((item)=>(
										<div style={{display:"flex",columnGap:"1.5rem",width:"100%",justifyContent:"flex-start",alignItems:"center"}}>
											<img src={item?.img} style={{height:"65px",width:"65px",borderRadius:"50%"}}/>
											<div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
												<span style={{fontWeight:"500",fontSize:"1.1rem"}}>{item?.name}</span>
												<span style={{fontWeight:"300",fontStyle:"italic",fontSize:"0.9rem"}}>{item?.position}</span>
												<span style={{fontWeight:"300",fontStyle:"italic",fontSize:"0.9rem"}}>{item?.from}</span>
											</div>
											<div style={{}}>
												<span>-</span>
											</div>
										</div>
									))
								}
*/