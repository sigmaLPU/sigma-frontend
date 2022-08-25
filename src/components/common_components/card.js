// react imports
import React from 'react';
import {useState} from 'react'

// component import


// other imports
import CallMadeIcon from '@mui/icons-material/CallMade'; // heading pop icon
import IconButton from '@mui/material/IconButton'; // Parent component to fit icon inside it


// function defination

export default function Card(props){

	const CardCSS = { 
		backgroundColor: props?.backgroundColor ? props?.backgroundColor : "white", 
		borderRadius : props?.borderRadius ? props?.borderRadius : "8px" ,
		boxShadow: "3px 3px 3px 3px rgba(207, 200, 184, 0.3)",
		marginTop:"15px",
		// overflow:"scroll",
		...props?.style
	}

	const CardDataCSS = {
		margin: props?.cardData?.margin ? props?.cardData?.margin : "8px",
		overflow: "scroll",
		maxHeight:"80%",
		...props?.cardDataCSS
	}

	const HeadingCSS = {
		display: "flex",
		justifyContent:"center",
		fontSize: props?.heading?.fontSize ? props?.heading?.fontSize : "1.4rem",
		width:"100%",
		...props?.styleHeading
	}

	return (
		<div style={CardCSS}>
			<div style={HeadingCSS}>
					<div style={{width:"90%",display:"flex",justifyContent:"center"}}>
						<div style={{marginLeft:"10%",minWidth:"10rem",height:"2.5rem"}}>
							<div style={{textAlign:"center",width:"100%",height:"100%",backgroundColor:"#f07f1a",color:"#ffffff",borderRadius:"0% 0% 50% 50%",position:"relative",top:"-15px"}}>
								<span style={{paddingLeft:"4px",paddingRight:"4px",color:"black",fontWeight:"700"}}>{props?.heading}</span>
							</div>
						</div>
					</div>
					<div style={{width:"10%"}}>
						<IconButton color="inherit" onClick={()=>props?.setOpen(true)} aria-label="open drawer" style={{float:"right",border:"1px solid black" , borderRadius:"8px"}}>
							<CallMadeIcon />
						</IconButton>
					</div>
			</div>
			<div style={CardDataCSS}>
				{props?.children}
			</div>
		</div>
	)
}