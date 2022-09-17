// react imports
import React from 'react';
import {useState} from 'react'

// component import
import {ModalPopUp} from '../routes'

// other imports
// import CallMadeIcon from '@mui/icons-material/CallMade'; // heading pop icon
import IconButton from '@mui/material/IconButton'; // Parent component to fit icon inside it
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

// function defination

export default function Card(props){

	const CardCSS = { 
		backgroundColor: props?.backgroundColor ? props?.backgroundColor : "white", 
		borderRadius : props?.borderRadius ? props?.borderRadius : "8px" ,
		boxShadow: "3px 3px 3px 3px rgba(207, 200, 184, 0.3)",
		marginTop:"15px",
		flexGrow: "4",
		...props?.style
	}

	const CardDataCSS = {
		margin: props?.cardData?.margin ? props?.cardData?.margin : "8px",
		overflow: "scroll",
		maxHeight:"80%",
		width:"100%",
		...props?.cardDataCSS
	}

	const HeadingCSS = {
		display: "flex",
		justifyContent:"center",
		fontSize: props?.heading?.fontSize ? props?.heading?.fontSize : "24px",
		width:"100%",
		maxHeight:"5rem",
		...props?.styleHeading
	}

	return (
		<div style={CardCSS}>

			<div style={HeadingCSS}>
					<div style={{width:"90%",display:"flex",justifyContent:"center",...props?.headingTabCSS}}>
						<div style={{marginLeft:"10%",padding:"0%",minWidth:"10rem",height:"3.2rem"}}>
							<div style={{textAlign:"center",color:"white",width:"100%",height:"100%",backgroundColor:"#f07f1a",color:"#ffffff",borderRadius:"0% 0% 50% 50% / 0% 0% 0.8rem 0.8rem",position:"relative",top:"-15px",...props?.headingComponetCSS}}>
								<span style={{padding:"8px",fontWeight:"700",padding:"8px"}}>{props?.heading}</span>
							</div>
						</div>
					</div>
					<div style={{margin:"11px 8px 0px 0px"}}>
						<ModalPopUp>
							{props?.popup ? props?.popup : "Not Available"}
						</ModalPopUp>		
					</div>
			</div>
			
			<div style={CardDataCSS}>
				{props?.children}
			</div>
		</div>
	)
}



export function ObjectCard(props) {
	var keys = []
	keys = Object.keys(props?.data)
	// console.log(props)
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

	return (
		<div style={{display:"flex",borderBottom:"1px solid black",backgroundColor:bgColor,justifyContent:"space-between"}} onMouseEnter={()=>setBgColor("#dbdbd9")} onMouseLeave={()=>setBgColor("white")}>
			<div><IconButton><InsertDriveFileIcon sx={{ fontSize: "80px" }}/></IconButton></div>
			<div>
				<table style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
					<tr style={{display:"flex",justifyContent:"space-between"}}>
						<td style={{fontWeight:"800"}}>Type</td>
						<td style={{padding:"4px"}}>:</td>-
						<td>{props?.data["type"]}</td>
					</tr>
					<tr>
						<td style={{fontWeight:"800"}}>Start Date</td>
						<td style={{padding:"4px"}}>:</td>
						<td>{props?.data["start"]}</td>
					</tr>
					<tr>
						<td style={{fontWeight:"800"}}>End Date</td>
						<td style={{padding:"4px"}}>:</td>
						<td>{props?.data["end"]}</td>
					</tr>
				</table>
			</div>
			<div style={{display:"flex",justifyContent:"center"}}>
				<IconButton><FileDownloadIcon sx={{fontSize:"35px"}} /></IconButton>
			</div>
		</div>
	)
}

export function ContactCard(props){
	const [bgColor,setBgColor] = useState("white")

	return (
		<div onClick={()=>console.log(props?.id)} style={{display:"flex",borderBottom:"1px solid black",backgroundColor:bgColor}} onMouseEnter={()=>setBgColor("#dbdbd9")} onMouseLeave={()=>setBgColor("white")}>
			<div><img style={{width:"90px",borderRadius:"50px",marginRight:"12px"}} src={props?.data["img"] ? props?.data["img"] : "/"} /></div>
			<div>
				<table style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
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
			</div>
		</div>
	)
}


export function RecentUpdateCard(props){
	return (
		<div style={{marginBottom:"1rem"}}>
			<div>{props?.data["title"]}</div>
			<div style={{paddingTop:"4px",display:"flex",justifyContent:"space-between"}}>
				<span style={{color:"red",fontWeight:"700"}}>Read more...</span>
				<span>{props?.data["date"]}</span>
			</div>
		</div>
	)
}





export function MeetingCard(props){
	return (
		<div style={{marginBottom:"1rem",width:"100%"}}>
			<div>{props?.data["title"]}</div>
			<div style={{paddingTop:"4px",display:"flex",justifyContent:"space-between"}}>
				<span style={{color:"red",fontWeight:"700"}}>Read more...</span>
				<span>{props?.data["date"]}</span>
			</div>
		</div>
	)
}
