import React from 'react'

import {Table} from '../routes'


export function VisaProcessCountryProfileCard(props) {
	return (
		<div>
			<ul>
				<li>dlnfadlk lkdmas</li>
				<li>dlnfadlk lkdmas</li>
				<li>dlnfadlk lkdmas</li>
			</ul>
		</div>
	)
}



export function FessCountryProfileCard(props) {
	const styleOfList={
		borderBottom:"1px solid black",
		padding:"0rem 0rem 2rem 0rem",
	}
	return (
		<div>
			<ul>
				<li style={styleOfList} >dlnfadlk lkdmas</li>
				<li style={styleOfList} >dlnfadlk lkdmas</li>
				<li style={styleOfList} >dlnfadlk lkdmas</li>
			</ul>
		</div>
	)
}




export function OtherExpenseCountryProfileCard(props) {

	const styleOfList={
		borderBottom:"1px solid black",
		padding:"0rem 0rem 2rem 0rem",
	}

	return (
		<div>
			<ul>
				<li style={styleOfList} >dlnfadlk lkdmas</li>
				<li style={styleOfList} >dlnfadlk lkdmas</li>
				<li style={styleOfList} >dlnfadlk lkdmas</li>
			</ul>
		</div>
	)
}





export function BasicDetailsGuestVisitCard(props){

	const style = {
		fontSize:"1.2rem",
		fontWeight:"700",
	}

	return (
		<div>
			<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
		
				<div style={{margin:"0rem 2rem 0rem 2rem",}} ><span style={style} >University Name</span> <span style={style}>:</span> <span>MIT USA</span></div>
				<div style={{margin:"0rem 2rem 0rem 2rem",}} ><span style={style} >University Name</span> <span style={style}>:</span> <span>MIT USA</span></div>
			</div>
		
			<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
		
				<div style={{margin:"0rem 2rem 0rem 2rem",}} ><span style={style} >University Name</span> <span style={style}>:</span> <span>MIT USA</span></div>
				<div style={{margin:"0rem 2rem 0rem 2rem",}} ><span style={style} >University Name</span> <span style={style}>:</span> <span>MIT USA</span></div>
			</div>
		</div>
	)
}



export function RecentUpdateGuestVisitCard(props){

	const style = {
		fontSize:"1.2rem",
		fontWeight:"700",
	}

	return (
		<div>
			<ul style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
				<li>Hrllo lfkamsd;samld</li>
				<li>Hrllo</li>
				<li>Hrllo</li>
			</ul>
		</div>
	)
}




export function MeetingsGuestVisitCard(props) {
	
	const data = {
		column:["S.No","Meeting Id","Meeting Type","Meeting Topic","Meeting Date","Meeting Time","Details"],
		rows:[
			{"S.No":"1","Meeting Id":"123132","Meeting Type":"External","Meeting Topic":"Nisndsa","Meeting Date":"2312","Meeting Time":"23123","Details":"link"},
			{"S.No":"1","Meeting Id":"123132","Meeting Type":"External","Meeting Topic":"Nisndsa","Meeting Date":"2312","Meeting Time":"23123","Details":"link"},
			{"S.No":"1","Meeting Id":"123132","Meeting Type":"External","Meeting Topic":"Nisndsa","Meeting Date":"2312","Meeting Time":"23123","Details":"link"},
			{"S.No":"1","Meeting Id":"123132","Meeting Type":"External","Meeting Topic":"Nisndsa","Meeting Date":"2312","Meeting Time":"23123","Details":"link"},
			{"S.No":"1","Meeting Id":"123132","Meeting Type":"External","Meeting Topic":"Nisndsa","Meeting Date":"2312","Meeting Time":"23123","Details":"link"},
			]
	}

	return (
		<div>
			<Table data={data} popup={props?.popup} rows={data.rows} column={data.column} heading={"Program of colaboration"} style={{minHeight:"15rem"}}/>
		</div>
	)
}

