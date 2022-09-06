// react imports
import React, {useEffect, useState} from 'react';

// component import
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'
import {BasicDetails} from '../routes'

// other imports


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
		{"img":"","name":"Animesh","position":"Intern","from":"LPU"},
		{"img":"","name":"Animesh","position":"SDE","from":"LPU"},
		{"img":"","name":"Animesh","position":"","from":""},
		{"img":"","name":"Animesh","position":"","from":""},
		{"img":"","name":"Animesh","position":"","from":""},
		{"img":"","name":"Animesh","position":"","from":""},
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
							<BasicDetails/>
						</Card>
						<div style={{display:"flex",columnGap:"1rem"}}>
							<Card heading={"OutCome"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
							
								<ul>{
									data.map(item=>(
										<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
									))}
								</ul>

							</Card>

							<Card heading={"OutCome"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
								<ul>{
									data.map(item=>(
										<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
									))}
								</ul>
							</Card>
						</div>

						<div style={{display:"flex",columnGap:"1rem"}}>
							<Card heading={"OutCome"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
							
								<ul>{
									data.map(item=>(
										<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
									))}
								</ul>

							</Card>

							<Card heading={"OutCome"} headingComponetCSS={{color:"black"}} style={{border:"1px solid #F07F1A"}}>
								<ul>{
									data.map(item=>(
										<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
									))}
								</ul>
							</Card>
						</div>




					</div>
				{/*Side bar*/}
					<div style={{minWidth:"28rem",textAlign:"center",display:"flex",flexDirection:"column",rowGap:"1rem"}}>

						<div style={{border:"1px solid #F07F1A",borderRadius:"8px",display:"flex",minHeight:"5rem",alignItems:"center",padding:"1rem",justifyContent:"space-between"}}>
							<div>Add To Calendar</div>
							<div>Join</div>
						</div>


						<div style={{border:"1px solid #F07F1A",borderRadius:"8px",display:"flex",minHeight:"60vh",flexDirection:"column",alignItems:"flex-start",padding:"1rem"}}>
							<div>Participants</div>
							<div style={{display:"flex",flexDirection:"column",rowGap:"0.5rem",marginTop:"1rem"}}>
								{
									participants.map((item)=>(
										<div style={{display:"flex",columnGap:"1.5rem",width:"100%",justifyContent:"space-between"}}>
											<img src={item?.img} style={{height:"65px",width:"65px"}}/>
											<div style={{}}>
												<span>{item?.name}</span>
												<span>{item?.position}</span>
												<span>{item?.from}</span>
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