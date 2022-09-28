import React,{useState,useEffect} from 'react'
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

	const [available,setAvailable] = useState("Not Available")

	function isValidDate(date){
		var parts = date.split("-");
		if(parts.length!==3){
			return false
		}
		return true;
	}

	function monthDiff(d1, d2) {
	    var months;
	    months = (d2.getFullYear() - d1.getFullYear()) * 12;
	    months -= d1.getMonth();
	    months += d2.getMonth();
	    return months;
	}

	function dateDifference(date1,date2){
		// console.log("dates --> ",isValidDate(date1),isValidDate(date2))
		if(!isValidDate(date1) || !isValidDate(date2)){
			setAvailable("Not Available")
			return ;
		}else{
			var p1 = date1.split("-")
			var p2 = date2.split("-")

			var d1 = new Date(p1[0],p1[1],p1[2]);
			var d2 = new Date(p2[0],p2[1],p2[2]);

			var monthsLeft = Math.abs(monthDiff(d1,d2))
			setAvailable(`${monthsLeft} months`)
			console.log("date ",monthsLeft)
		}
	}

	useEffect(()=>{
		dateDifference(props?.data["startDate"],props?.data["endDate"])
	},[])

	const activeComponent = <table style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
					<tr style={{display:"flex",justifyContent:"space-between"}}>
						<td style={{fontWeight:"800"}}>Months</td>
						<td style={{padding:"4px"}}>:</td>-
						<td>{available}</td>
					</tr>
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
				<IconButton>
					<a href={props?.data["file"]} target="_blank">
						<FileDownloadIcon sx={{fontSize:"35px"}} />
					</a>
				</IconButton>
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
