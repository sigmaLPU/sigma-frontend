import React from 'react'

import {NavSideBarLayout} from '../routes'

import {
	Card
} from '../routes'

export default function StudentProfile(props){
	return (
		<div>
			<NavSideBarLayout childCSS={{marginTop:"5rem"}}>
				<div style={{width:"100%",backgroundColor:"yellow",minHeight:"3rem"}}>Process Bar</div>
				<div style={{display:"flex",justifyContent:"space-between",maxHeight:"790px",marginTop:"1rem"}}>

					<div style={{display:"flex",flexWrap:"wrap",alignContent:"space-between",columnGap:"1rem"}}>						
						<BasicDetails />
						<DocumentStudent />
						<DocumentStaff />
						<DocumentAcademic />
						<DocumentForegin />
						<Process />
					</div>

					<div style={{position:"relative"}}>
						<RecentUpdate/>
					</div>

				</div>
			</NavSideBarLayout>
		</div>
	)
}


function RecentUpdate(props){
	const data = [
		{text:"flknsdfkldfndfd fkndsflksdf sdlads"}
	]
	return
(		<div>
			<Card style={{minHeight:"75vh",border:"1px solid black",minWidth:"20vw"}} heading="Recent Update">
			</Card>
		</div>
	)
}

function BasicDetails(props){
	return(
		<div>
			<Card style={{minWidth:"20vw",minHeight:"35vh",border:"1px solid black"}} heading="Basic Details">
				<div style={{width:"100%",display:"flex",justifyContent:"center"}}>
					<table>
						<tr>
							<th>Name</th>
							<td>:</td>
							<td>Animesh</td>
						</tr>
						<tr>
							<th>Name</th>
							<td>:</td>
							<td>Animesh</td>
						</tr>
						<tr>
							<th>Name</th>
							<td>:</td>
							<td>Animesh</td>
						</tr>
						<tr>
							<th>Name</th>
							<td>:</td>
							<td>Animesh</td>
						</tr>
					</table>
				</div>
			</Card>
		</div>
	)
}


function DocumentStudent(props){
	const data = [
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
	]
	return(
		<div>
			<Card style={{minWidth:"20vw",minHeight:"35vh",border:"1px solid black"}} heading="Document Student">
				<DocumentCard data={data} />
			</Card>
		</div>
	)
}

function DocumentStaff(props){
	const data = [
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
	]
	return(
		<div>
			<Card style={{minWidth:"20vw",minHeight:"35vh",border:"1px solid black"}} heading="Document Staff">
				<DocumentCard data={data} />
			</Card>
		</div>
	)
}


function DocumentAcademic(props){

	const data = [
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
	]

	return(
		<div>
			<Card style={{minWidth:"20vw",minHeight:"35vh",border:"1px solid black"}} heading="Document Academic">
				<DocumentCard data={data} />
			</Card>
		</div>
	)
}


function DocumentForegin(props){
	const data = [
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
	]
	return(
		<div>
			<Card style={{minWidth:"20vw",minHeight:"35vh",border:"1px solid black"}} heading="Document Foregin">
				<DocumentCard data={data} />
			</Card>
		</div>
	)
}



function Process(props){
	const data = [
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
		{name:"animesh",url:"dasdsadsdss"},
	]
	return(
		<div>
			<Card style={{minWidth:"20vw",minHeight:"35vh",border:"1px solid black"}} heading="Process">
				<DocumentCard data={data} />
			</Card>
		</div>
	)
}


function DocumentCard(props){

	if(!props?.data || props?.data?.length<=0){
		return(
			<div>No data</div>
		)
	}

	return (
		<div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
			<table style={{width:"100%"}}>
				{props?.data?.map((item)=>(
					<tr style={{width:"100%",padding:"0px 12px 0px 12px",display:"flex",justifyContent:"space-around"}}>
						<td>{item?.name}</td>
						<td><a href={item?.url} target="_blank">Open</a></td>
					</tr>
				))}
			</table>
		</div>
	)
}