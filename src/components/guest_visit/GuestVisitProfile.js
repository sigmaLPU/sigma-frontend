import React from 'react'
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'


export default function GuestVisitProfile(props){
	return (
		<div>
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				<div style={{width:"100%",backgroundColor:"yellow",minHeight:"4rem"}}>
					Progress Bar
				</div>
				<div style={{display:"flex",justifyContent:"space-between",minHeight:"30rem"}}>
					<div style={{backgroundColor:"red",flexGrow:"1"}}>
						<Card heading="Basic Details" cardDataCSS={{maxHeight:"90%"}} style={{maxWidth:"22rem",height:"80%",border:"1px solid black"}}>
						
						</Card>
					</div>
					<div style={{minWidth:"20%"}}>
						<Card heading="Recent Update" cardDataCSS={{maxHeight:"90%"}} style={{height:"95%",border:"1px solid black"}}>
						</Card>
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}