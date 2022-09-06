import React from 'react'


export function BasicDetails(props){
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