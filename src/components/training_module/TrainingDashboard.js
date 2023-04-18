import React from 'react'
import {useNavigate} from 'react-router-dom'


import {NavSideBarLayout} from '../routes'

import backgroundHeaderImg from './resource/backgroundHeader.png'
import mousImg from './resource/mous.png'
import creditTransferImg from './resource/creditTransfer.png'
import ethicsImg from './resource/ethics.png'
import guidelinesImg from './resource/guidelines.png'
import semesterExchangeImg from './resource/semesterExchange.png'
import technicalImg from './resource/technical.png'

export default function TrainingDashboard(props){

	const navigate = useNavigate()

	const topHeaderCss = {
		height:"14rem",
		width:"100%",
		backgroundColor:"yellow",
		backgroundImage: `url(${backgroundHeaderImg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	
		display:"flex",justifyContent:"center",
		alignItems:"center"
	}

	const containers = [
		{text:"Induction/Policy/Guidelines",img:guidelinesImg,url:"/training/policy"},
		{text:"Team Ethics",img:ethicsImg,url:"/training/ethics"},
		{text:"Credit Transfer",img:creditTransferImg,url:"/training/creditTransfer"},
		{text:"Semester Exchange",img:semesterExchangeImg,url:"/training/semesterExchange"},
		{text:"Outreach & Mou Team",img:mousImg,url:"/training/outreach"},
		{text:"Use of Technical Tools",img:technicalImg,url:"/training/technicalTools"},
	]


	return (
		<div>
			<NavSideBarLayout childCSS={{}} childSX={{flexGrow:1}}>
				<div style={topHeaderCss}>
					<span style={{fontSize:"4rem",fontWeight:"900"}}>Training Modules</span>
				</div>
				<div style={{width:"100%"}}>
					<div style={{width:"100%",display:"flex",justifyContent:"center",margin:"1rem 0rem"}}>
						<span style={{fontSize:"1.8rem",fontStyle:"italic"}}>
							Qoute will come here --Animesh (DeVeLOper)
						</span>
					</div>
					<div style={{width:"100%",display:"flex",flexWrap:"wrap",columnGap:"10rem",rowGap:"1rem",justifyContent:"center"}}>
						{containers.map((item)=>(
							<div style={{maxWidth:"22rem",cursor:"pointer"}} onClick={(e)=>navigate(item.url)}>
								<img src={item?.img} style={{width:"100%",height:"15rem"}}/>
								<div style={{textAlign:"center"}}>
									<span style={{textAlign:"center",fontSize:"1.5rem"}}>{item?.text}</span>
								</div>
							</div>
						))}
						
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}