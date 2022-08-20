// react imports
import React from 'react';


// component import
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'

// other imports


// function defination
export default function MouMaster(props){

	const ChipCSS = {
		minWidth: "126px",
		height: "28px",
		background: "#FFFFFF",
		border: "1px solid #F07F1A",borderRadius: "7px",
		margin:"4px"
	}

	const CardCSS = {
		minHeight:"418px",
		width:"372px",
		border: "1px solid #F07F1A",
		boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
	}

	return (
		<div>
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				<div style={{display:"flex"}}>
					{/*Left part*/}
					<div style={{borderRight:"1px solid #D9D9D9",maxWidth:"372px"}}>
						<div>
							<input type="text" placeholder="Search" style={{width:"372px",fontSize:"20px",marginBottom:"48px"}}/>
						</div>

						<Card style={CardCSS} heading={"Your Tags"}>
							<div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap",}}>
								<Chip style={ChipCSS} text="asdasdasasddsfdfds" active = {true}/>
								<Chip style={ChipCSS} active = {false}/>
								<Chip style={ChipCSS} active = {true}/>
								<Chip style={ChipCSS} active = {true}/>
							</div>
						</Card>
						
						<Card style={CardCSS} heading={"Your Tags"}>
							<div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap",}}>
								<Chip style={ChipCSS} text="asdasdasasddsfdfds" active = {true}/>
								<Chip style={ChipCSS} active = {false}/>
								<Chip style={ChipCSS} active = {true}/>
								<Chip style={ChipCSS} active = {true}/>
							</div>
						</Card>
					
					</div>
					{/*Right Part*/}
					<div style={{marginLeft:"1rem",width:"100%"}}>
						<Table/>
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}