import React,{useState} from 'react'
import {ModalPopUp} from '../../routes'

import IconButton from '@mui/material/IconButton'; // Parent component to fit icon inside it
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


export function ObjectCard(props) {
	var keys = []
	keys = Object.keys(props?.data)

	return (
		<div style={{width:"100%",display:"flex",justifyContent:"center"}}>
			<table>
				{
					keys.map(key=>(
						<tr>
							<td style={{fontWeight:"800",fontSize:"20px"}}>{key}</td>
							<td style={{padding:"4px",fontWeight:"800",fontSize:"20px"}}>:</td>
							<td style={{fontWeight:"400",fontSize:"20px"}}>{props?.data[key]}</td>
						</tr>
					))
				}
				
			</table>
		</div>
	)
}


export function FileCard(props) {
	const [bgColor,setBgColor] = useState("white")

	const activeComponent = <table style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
					<tr style={{display:"flex",justifyContent:"space-between"}}>
						<td style={{fontWeight:"800"}}>Type</td>
						<td style={{padding:"4px"}}>:</td>-
						<td>{props?.data["type"]}</td>
					</tr>
					<tr>
						<td style={{fontWeight:"800"}}>Start Date</td>
						<td style={{padding:"4px"}}>:</td>
						<td>{props?.data["startDate"]}</td>
					</tr>
					<tr>
						<td style={{fontWeight:"800"}}>End Date</td>
						<td style={{padding:"4px"}}>:</td>
						<td>{props?.data["endDate"]}</td>
					</tr>
				</table>

	return (
		<div style={{display:"flex",borderBottom:"1px solid black",backgroundColor:bgColor,justifyContent:"space-between"}} onMouseEnter={()=>setBgColor("#dbdbd9")} onMouseLeave={()=>setBgColor("white")}>
			<div><IconButton><InsertDriveFileIcon sx={{ fontSize: "80px" }}/></IconButton></div>
			<div>
				<ModalPopUp activeComponent={activeComponent}>
					{props?.mouContractUpdateUniversityModal ? props?.mouContractUpdateUniversityModal : "Not Available"}
				</ModalPopUp>
			</div>
			<div style={{display:"flex",justifyContent:"center"}}>
				<IconButton><FileDownloadIcon sx={{fontSize:"35px"}} /></IconButton>
			</div>
		</div>
	)
}

export function ContactCard(props){
	const [bgColor,setBgColor] = useState("white")

	const activeComponent = <table style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
					<tr style={{}}>
						<td style={{fontWeight:"800"}}>Name</td>
						<td style={{padding:"4px"}}>:</td>
						<td>{props?.data["name"]}</td>
					</tr>
					<tr>
						<td style={{fontWeight:"800"}}>Email</td>
						<td style={{padding:"4px"}}>:</td>
						<td>{props?.data["mail"]}</td>
					</tr>
					<tr>
						<td style={{fontWeight:"800"}}>Contact</td>
						<td style={{padding:"4px"}}>:</td>
						<td>{props?.data["mobile"]}</td>
					</tr>
				</table>



	return (
		<div style={{display:"flex",borderBottom:"1px solid black",backgroundColor:bgColor}} onMouseEnter={()=>setBgColor("#dbdbd9")} onMouseLeave={()=>setBgColor("white")}>
			<div><img style={{width:"90px",borderRadius:"50px",marginRight:"12px"}} src={props?.data["img"] ? props?.data["img"] : "/"} /></div>
			<div>
				<ModalPopUp activeComponent={activeComponent}>
					{props?.contactDetailsUpdateModal ? props?.contactDetailsUpdateModal : "Not Available"}
				</ModalPopUp>
			</div>
		</div>
	)
}


export function RecentUpdateCard(props){
	return (
		<div style={{marginBottom:"1rem"}}>
			<div>{props?.data["title"]}</div>
			<div style={{paddingTop:"4px",display:"flex",justifyContent:"space-between"}}>
				<span style={{color:"red",fontWeight:"700"}}>
					<ModalPopUp activeComponent={<span>Read more...</span>}>
						{props?.recentUpdateUpdateUniversityModal ? props?.recentUpdateUpdateUniversityModal : "Not Available"}
					</ModalPopUp>
				</span>
				<span>{props?.data["date"]}</span>
			</div>
		</div>
	)
}





export function MeetingCard(props){
	return (
		<div style={{marginBottom:"1rem",width:"100%"}}>
			<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
				<span>{props?.data["title"]}</span>
			</div>
			<div style={{paddingTop:"4px",display:"flex",justifyContent:"space-between"}}>
				<span style={{color:"red",fontWeight:"700"}}>
					<ModalPopUp activeComponent={<span>Read more...</span>}>
						{props?.meetingUpdateUniversityModal ? props?.meetingUpdateUniversityModal : "Not Available"}
					</ModalPopUp>
				</span>
				<span>{props?.data["meetingTime"]}</span>
			</div>
		</div>
	)
}
