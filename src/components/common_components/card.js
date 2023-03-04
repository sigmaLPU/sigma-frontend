// react imports
import React from 'react';

// component import
import {ModalPopUp} from '../routes'

// other imports

// function defination

export default function Card(props){

	const CardCSS = { 
		backgroundColor: props?.backgroundColor ? props?.backgroundColor : "white", 
		borderRadius : props?.borderRadius ? props?.borderRadius : "8px" ,
		boxShadow: "3px 3px 3px 3px rgba(207, 200, 184, 0.3)",
		marginTop:"15px",
		flexGrow: "4",
		...props?.style
	}

	const CardDataCSS = {
		margin: props?.cardData?.margin ? props?.cardData?.margin : "0px",
		overflow: "scroll",
		maxHeight:"80%",
		width:"100%",
		...props?.cardDataCSS
	}

	const HeadingCSS = {
		display: "flex",
		justifyContent:"center",
		fontSize: props?.heading?.fontSize ? props?.heading?.fontSize : "24px",
		width:"100%",
		maxHeight:"5rem",
		...props?.styleHeading
	}

	return (
		<div style={CardCSS}>

			<div style={HeadingCSS}>
					<div style={{width:"90%",display:"flex",justifyContent:"center",...props?.headingTabCSS}}>
						<div style={{marginLeft:"10%",padding:"0%",minWidth:"10rem",height:"3.2rem"}}>
							<div style={{textAlign:"center",color:"white",width:"100%",height:"100%",backgroundColor:"#f07f1a",color:"#ffffff",borderRadius:"0% 0% 50% 50% / 0% 0% 0.8rem 0.8rem",position:"relative",top:"-15px",...props?.headingComponetCSS}}>
								<span style={{padding:"8px",fontWeight:"700",padding:"8px"}}>{props?.heading}</span>
							</div>
						</div>
					</div>
					<div style={{margin:"11px 8px 0px 0px"}}>
						<ModalPopUp activeComponent={props?.activeComponent}>
							{props?.popup ? props?.popup : "Not Available"}
						</ModalPopUp>		
					</div>
			</div>
			
			<div style={CardDataCSS}>
				{props?.children}
			</div>
		</div>
	)
}
