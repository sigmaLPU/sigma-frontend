import React from 'react'
import fileIcon from './resource/file.png'
import visibleIcon from './resource/eye.png'
import downloadIcon from './resource/download.png'

export function BasicDetailsMeetingCard(props){
	return(
		<div style={{display:"flex"}}>
			<div style={{flexGrow:"1"}}>
				<div>Date : </div>
				<div>Agenda : </div>
			</div>
			<div style={{flexGrow:"1",display:"flex",alignItems:"flex-end",flexDirection:"column"}}>
				<div>Start Time</div>
				<div>End Time</div>
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
					<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
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