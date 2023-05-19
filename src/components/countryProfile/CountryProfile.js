// import React,{useEffect} from 'react'
// import {NavSideBarLayout} from '../routes'
// import {Card ,Chip, Table} from '../routes'
// import {useDispatch} from 'react-redux'

// import {BasicDetailsGuestVisitCard,RecentUpdateGuestVisitCard,MeetingsGuestVisitCard} from './countryProfileCard'

// import {VisaProcessCountryProfileCard,FessCountryProfileCard,OtherExpenseCountryProfileCard} from './countryProfileCard'

// export default function CountryProfile(props){

// 	const dispatch = useDispatch()

// 	// useEffect()

// 	const commonCardCSS = {
// 		border:"1px solid black",
// 	}

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
// 						<div style={{border:"1px solid black",display:"flex",justifyContent:"center",alignItems:"center"}}>
// 							<span style={{fontSize:"2rem",fontWeight:"800"}}>United States of America</span>
// 						</div>

// 						<div style={{display:"flex",columnGap:"0.5rem",flexWrap:"wrap"}}>
// 							<Card heading={"Visit Process"} style={{...commonCardCSS}}>
// 								<VisaProcessCountryProfileCard />
// 							</Card>

// 							<Card heading={"Fess"} style={{...commonCardCSS}}>
// 								<FessCountryProfileCard />
// 							</Card>

// 							<Card heading={"Other Expense"} style={{...commonCardCSS}}>
// 								<OtherExpenseCountryProfileCard />
// 							</Card>
// 						</div>

// 						<div style={{display:"flex",columnGap:"0.5rem",flexWrap:"wrap"}}>
// 							<Card heading={"Statstics"} style={{...commonCardCSS}}>
// 								<div style={{minHeight:"20rem"}}>
// 								</div>
// 							</Card>
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

// 				<div style={{marginTop:"3rem"}}>
// 					<MeetingsGuestVisitCard />
// 				</div>

// 			</NavSideBarLayout>
// 		</div>
// 	)
// }

import { AddNewUniversity, NavSideBarLayout, NewTable, ProgramOfColaborationUniversityModal } from "../routes";
import style from "./CountryProfile.module.css";
import image from "./flagus.png";
import Card from "./Card";
import Linechart from "./Linechart";
import RecentCard from "./RecentCard";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
	
	universityProgramReducer,
	
} from '../../redux/routes'
import { Button, Link } from "@mui/material";
import {
  getAllUniversityReducer,

} from '../../redux/routes';
import { useNavigate } from "react-router-dom";

function getUniId(url){
	var id = ""
	for(var i=url.length-1;i>=0;i--){
		if(url[i]==='/') return id
		id = url[i] + id
	}
	return id
}


export default function CountryProfile(props) {
  const dispatch = useDispatch();



  const rawData = useSelector((state) => state.getAllUniversitySlice.data);

  const [data, setData] = useState(rawData);
  
  useEffect(() => {
    const filteredData = rawData?.data?.rows?.filter((row) => row.Country === "United States of America");
    setData({ ...rawData, data: { ...rawData.data, rows: filteredData } });
  }, [rawData]);
  


  useEffect(() => {
    dispatch(getAllUniversityReducer({}));
  }, []);

  const navigate = useNavigate();

 

  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (aggrement) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
  }, []);

  const columns = [
    {
      field: 'Name of University',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'Country',
      headerName: 'Country',
      flex: 1,
    },
    {
      field: 'createdBy',
      headerName: 'Created By',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1,
    },

    {
      field: 'details',
      headerName: 'Details',
      flex: 0.5,
      renderCell: (cellValue) => {
        return (
          <Button
          variant="outlined"
          sx={{
            color: "#F07F1A",
            border: "1px solid #F07F1A",
            textDecoration: "none",
          }}
          onClick={() => navigate(`/university/${cellValue.row.id}`)}
        >
              Browse
            </Button>
        
        );
      },
    },
  ];



  return (
    <div className={style.layout}>
      <NavSideBarLayout childCSS={{}} childSX={{ flexGrow: 1 }}>
        <div>
          <div className={style.main}>
            <div className={style.main1}>
              <div className={style.heading}>
                <img className={style.headingimage} src={image} alt="flag" />
                <h1 className={style.heading1}>United States of America</h1>
              </div>
              <div className={style.Card}>
                <Card />
              </div>
            </div>
          </div>
          <div className={style.main2}>
            <div className={style.graph}>
              <div className={style.linegraph}>
                <Linechart />
              </div>
              <div className={style.notes}>
                <RecentCard />
              </div>
            </div>
          </div>
          
          <div style={{ marginLeft: '4rem', width: '92%' }}>
      
       
       
          <NewTable title={"Collaborated University"} popup={<AddNewUniversity/>} rows={data?.data?.rows || []} columns={columns} />
          </div>

        </div>
      </NavSideBarLayout>
    </div>
  );
}
