import React,{useEffect} from 'react'
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'
import {useDispatch} from 'react-redux'

import {BasicDetailsGuestVisitCard,RecentUpdateGuestVisitCard,MeetingsGuestVisitCard} from './countryProfileCard'

import {VisaProcessCountryProfileCard,FessCountryProfileCard,OtherExpenseCountryProfileCard} from './countryProfileCard'

export default function CountryProfile(props){

	const dispatch = useDispatch()

	// useEffect()

	const commonCardCSS = {
		border:"1px solid black",
	}

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
						<div style={{border:"1px solid black",display:"flex",justifyContent:"center",alignItems:"center"}}>
							<span style={{fontSize:"2rem",fontWeight:"800"}}>United States of America</span>
						</div>

						<div style={{display:"flex",columnGap:"0.5rem",flexWrap:"wrap"}}>
							<Card heading={"Visit Process"} style={{...commonCardCSS}}>
								<VisaProcessCountryProfileCard />
							</Card>

							<Card heading={"Fess"} style={{...commonCardCSS}}>
								<FessCountryProfileCard />
							</Card>

							<Card heading={"Other Expense"} style={{...commonCardCSS}}>
								<OtherExpenseCountryProfileCard />
							</Card>
						</div>

						<div style={{display:"flex",columnGap:"0.5rem",flexWrap:"wrap"}}>
							<Card heading={"Statstics"} style={{...commonCardCSS}}>
								<div style={{minHeight:"20rem"}}>
								</div>
							</Card>
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

				<div style={{marginTop:"3rem"}}>
					<MeetingsGuestVisitCard />
				</div>

			</NavSideBarLayout>
		</div>
	)
}