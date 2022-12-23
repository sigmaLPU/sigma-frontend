import React,{useEffect} from 'react'
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'
import {useDispatch} from 'react-redux'

import {BasicDetailsGuestVisitCard,RecentUpdateGuestVisitCard,MeetingsGuestVisitCard} from './guestVisitCards'

export default function GuestVisitProfile(props){

	const dispatch = useDispatch()

	// useEffect()

	const BasicDetailsheadingComponetCSS = {
		borderRadius:"20px",
		display:"flex",justifyContent:"center",alignItems:"center",
		color:"black",
		top:"-1.5rem",
		// bottom:"-1.5rem",
	}

	const BasicDetailsCardComponetCSS = {
		border:"1px solid black",
	}

	const RecentUpadateCardCSS = {
		
	}

	return (
		<div>
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				<div style={{display:"flex",flexWrap:"column",columnGap:"1rem"}}>
					<div style={{flexGrow:"1",display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<Card
							headingComponetCSS = {BasicDetailsheadingComponetCSS}
							heading = {"Guest Visit Details"}
							style={BasicDetailsCardComponetCSS}
						>
							<BasicDetailsGuestVisitCard />
						</Card>

						<div style={{flexGrow:"1",marginTop:"1rem",border:"1px solid black",minHeight:"40rem"}}>
							Card for calender
						</div>

						<div style={{marginTop:"2rem"}}>
							<MeetingsGuestVisitCard />
						</div>

					</div>
					<div style={{minWidth:"28rem",textAlign:"center",display:"flex",flexDirection:"column",rowGap:"1rem",maxHeight:"100vh",justifyContent:"flex-start"}}>
						<Card
							heading={"Recent Update"}
							style={{border:"1px solid black",...RecentUpadateCardCSS}}
						>
							<RecentUpdateGuestVisitCard />
						</Card>
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}