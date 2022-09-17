import React,{useState} from 'react'
import fileIcon from './resource/file.png'
import visibleIcon from './resource/eye.png'
import downloadIcon from './resource/download.png'

export function BasicDetailsMeetingCard(props){

	const [date,setDate] = useState("01-09-2022");
	const [heading,setHeading] = useState("Meeting about future student exchange")

	const [startTime,setStartTime] = useState("10:00 AM")
	const [endTime,setEndTime] = useState("10:00 AM")

	function cropHeading(s,l){
		if(s.length<l){
			return s
		}
		var ans = s.slice(0,l)+"...";
		return ans;
	}

	const titleCSS = {
		fontSize:"1rem",
		fontWeight:"700"
	}

	return(
		<div style={{display:"flex"}}>
			<div style={{flexGrow:"1"}}>
				<div><span style={titleCSS}>Date</span> : { date }</div>
				<div><span style={titleCSS}>Agenda</span> : {cropHeading(heading,50)}</div>
			</div>
			<div style={{flexGrow:"1",display:"flex",alignItems:"flex-end",flexDirection:"column"}}>
				<div><span style={titleCSS}>Start Time</span> : {startTime}</div>
				<div><span style={titleCSS}>End Time</span> : {endTime}</div>
			</div>
		</div>
	)
}


export function AttachementCard(props){
	const imgStyle={
		height:"38px",
		width:"38px",
		cursor:"pointer",
	}

	if(!props?.data){
		return(
			<div>Data Not found</div>
		)
	}


	return(
		<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
			{
				props?.data.map((item)=>(
					<div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.5rem"}}>
						<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
							<img src={fileIcon} alt="file icon" style={{marginRight:"1.5rem",...imgStyle}} />
							<span>{item.name}</span>
						</div>
						<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
							<img src={visibleIcon} alt="visible icon" style={{marginRight:"1rem",...imgStyle}} />
							<img src={downloadIcon} alt="download icon" style={{marginRight:"1rem",...imgStyle,height:"32px"}}/>
						</div>
					</div>
				))
			}
		</div>
	)
}


export function BasicDetailsMeetingModal(props){
	return (
		<div style={{minWidth:"40rem",minHeight:"30rem",display:"flex",alignItems:"center",flexDirection:"column"}}>
			<span style={{fontWeight:"800",fontSize:"1.5rem"}}>Basic Meeting Details</span>
			<div style={{width:"100%",marginBottom:""}}>
				<div>
					<span style={{fontSize:"1.1rem",fontWeight:"600"}}>Meeting's Topic</span>
					<input style={{width:"90%",height:"40px",borderRadius:"8px"}} type="text" />
				</div>
			</div>
		</div>
	)
}


export function OutcomeMeetingModal(props){
	return (
		<div>
			<span>Outcome</span>
		</div>
	)
}



export function ActionPlanMeetingModal(props){
	return (
		<div>
			<span>Action Plan</span>
		</div>
	)
}


export function MoMNotesMeetingModal(props){
	return (
		<div>
			<span>MOM Notes</span>
		</div>
	)
}



export function AttachmentMeetingModal(props){
	return (
		<div>
			<span>Attachment</span>
		</div>
	)
}