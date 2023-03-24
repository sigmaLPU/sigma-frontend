// import React,{useEffect} from 'react'
// import {NavSideBarLayout} from '../routes'
// import {Card ,Chip, Table} from '../routes'
// import {useDispatch} from 'react-redux'

// import {BasicDetailsGuestVisitCard,RecentUpdateGuestVisitCard,MeetingsGuestVisitCard} from './guestVisitCards'

// export default function GuestVisitProfile(props){

// 	const dispatch = useDispatch()

// 	// useEffect()

// 	const BasicDetailsheadingComponetCSS = {
// 		borderRadius:"20px",
// 		display:"flex",justifyContent:"center",alignItems:"center",
// 		color:"black",
// 		top:"-1.5rem",
// 		// bottom:"-1.5rem",
// 	}

// 	const BasicDetailsCardComponetCSS = {
// 		border:"1px solid black",
// 	}

// 	const RecentUpadateCardCSS = {
		
// 	}

// 	return (
// 		<div>
// 			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
// 				<div style={{display:"flex",flexWrap:"column",columnGap:"1rem"}}>
// 					<div style={{flexGrow:"1",display:"flex",flexDirection:"column",rowGap:"1rem"}}>
// 						<Card
// 							headingComponetCSS = {BasicDetailsheadingComponetCSS}
// 							heading = {"Guest Visit Details"}
// 							style={BasicDetailsCardComponetCSS}
// 						>
// 							<BasicDetailsGuestVisitCard />
// 						</Card>

// 						<div style={{flexGrow:"1",marginTop:"1rem",border:"1px solid black",minHeight:"40rem"}}>
// 							Card for calender
// 						</div>

// 						<div style={{marginTop:"2rem"}}>
// 							<MeetingsGuestVisitCard />
// 						</div>

// 					</div>
// 					<div style={{minWidth:"28rem",textAlign:"center",display:"flex",flexDirection:"column",rowGap:"1rem",maxHeight:"100vh",justifyContent:"flex-start"}}>
// 						<Card
// 							heading={"Recent Update"}
// 							style={{border:"1px solid black",...RecentUpadateCardCSS}}
// 						>
// 							<RecentUpdateGuestVisitCard />
// 						</Card>
// 					</div>
// 				</div>
// 			</NavSideBarLayout>
// 		</div>
// 	)
// }

// react imports
import React, { useEffect, useState } from 'react';

// component import
import { NavSideBarLayout } from '../routes';


import GuestBasic from './GuestBasic';
import GuestAttachment from './GuestAttachment';
import GuestOutcome from './GuestOutcome';
import GuestNotes from './GuestNotes';
import GuestParticipants from './GuestParticipants';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// function defination
export default function GuestVisitProfile(props) {
  const params = useParams();

  const { id } = params;
  const [data, setData] = useState({});
    // const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';


//   useEffect(() => {
//     const fetchMeeting = async () => {
//       const { data } = await axios.get(
//         `${url}/api/v2/meeting/single/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         }
//       );

//       setData(data.meeting);
//     };
//     fetchMeeting();
//   }, [id]);


  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: '4rem' }}>
        {/*Whole window*/}

        <Box
          display="grid"
          gap="20px"
          gridTemplateAreas={`
          'basic  basic  note'
          'outcome outcome note'
          'attachment attachment participants'          
        `}
        >
          <GuestBasic data={data} />
          <GuestOutcome data={data} />
          <GuestNotes data={data} />
          <GuestParticipants data={data} />
          <GuestAttachment data={data} />
        </Box>
      </NavSideBarLayout>
    </div>
  );
}
