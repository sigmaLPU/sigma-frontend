// react imports
import React, {useEffect, useState} from 'react';

// component import
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'
import {BasicDetailsMeetingCard,AttachementCard} from '../routes'

// other imports
import video_icon from './resource/video_icon.png'
import profile_1 from './resource/profile_1.jpg'

// function defination
export default function MeetingProfile(props){

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

	const [participants,setParticipants] = useState([
		{"img":profile_1,"name":"Animesh","position":"Intern","from":"LPU"},
		{"img":profile_1,"name":"Animesh","position":"SDE","from":"LPU"},
		{"img":profile_1,"name":"Animesh","position":"","from":""},
		{"img":profile_1,"name":"Animesh","position":"","from":""},
		{"img":profile_1,"name":"Animesh","position":"","from":""},
		{"img":profile_1,"name":"Animesh","position":"","from":""},
	])

	const [attachement,setAttachement] = useState([
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
		{name:"Temp.pdf",view:"",download:""},
	])


	return (
		<div>
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				{/*Whole window*/}
				<div style={{display:"flex",columnGap:"1rem"}}>
					<div style={{flexGrow:"1",display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<Card 
							heading={"Meeting Regarding Project Sigma"}
							headingComponetCSS = {BasicDetailsheadingComponetCSS}
							style={{border:"1px solid #F07F1A"}}
						>
							<BasicDetailsMeetingCard/>
						</Card>
						<div style={{display:"flex",columnGap:"1rem"}}>
							<Card heading={"OutCome"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
							
								<ul>{
									data.map(item=>(
										<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
									))}
								</ul>

							</Card>

							<Card heading={"Action Plan"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
								<ul>{
									data.map(item=>(
										<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
									))}
								</ul>
							</Card>
						</div>

						<div style={{display:"flex",columnGap:"1rem"}}>
							<Card heading={"MOM notes"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
							
								<ul>{
									data.map(item=>(
										<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
									))}
								</ul>

							</Card>

							<Card heading={"Attachement"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
								<AttachementCard data={attachement} />
							</Card>
						</div>




					</div>
				{/*Side bar*/}
					<div style={{minWidth:"28rem",textAlign:"center",display:"flex",flexDirection:"column",rowGap:"1rem"}}>


						<Card headingComponetCSS={{display:"none"}} style={{border:"1px solid #F07F1A"}} styleHeading={{height:"2rem"}}>
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



						<div style={{border:"1px solid #F07F1A",borderRadius:"8px",display:"flex",minHeight:"60vh",flexDirection:"column",alignItems:"flex-start",padding:"1rem"}}>
							<div>Participants</div>
							<div style={{display:"flex",flexDirection:"column",rowGap:"0.5rem",marginTop:"1rem",width:"100%"}}>
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
							</div>
						</div>


					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}