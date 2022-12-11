import React from  'react'
import {useNavigate} from  'react-router-dom'

import {NavSideBarLayout} from '../routes'

import backgroundImg from './resource/background.png'
import toolImg from './resource/tool.png'
import bugImg from './resource/bug.jpg'
import moduleImg from './resource/module.png'
import surveyImg from './resource/survey.png'
import wotImg from './resource/wot.png'

export default function Tools(props){
	const navigate = useNavigate()

	const topCSS = {
		height:"50%",
		width:"100%",
		backgroundColor:"yellow",
		backgroundImage: `url(${backgroundImg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	
		display:"flex",justifyContent:"center",
		alignItems:"center"
	}

	const containers = [
		{text:"Bug Reporting",img:bugImg,url:"/tools/bugReporting"},
		{text:"Surveys",img:surveyImg,url:"/tools/surveys"},
		{text:"Sigma WOT",img:wotImg,url:"/tools/wot"},
		{text:"Learning Modules",img:moduleImg,url:"/tools/learningModules"},
	]

	return (
		<NavSideBarLayout childCSS={{}} childSX={{flexGrow:1}}>
			<div style={topCSS}>
				<span style={{fontSize:"4rem",fontWeight:"900"}}>Tools</span>			
			</div>
			<div style={{display:"flex",justifyContent:"space-around",marginTop:"8rem"}}>
				{containers.map((item)=>(
					<div style={{maxWidth:"22rem",cursor:"pointer"}} onClick={(e)=>navigate(item.url)}>
						<img src={item?.img} style={{borderRadius:"50%",height:"15rem",width:"15rem"}}/>
						<div style={{textAlign:"center"}}>
							<span style={{textAlign:"center",fontSize:"1.5rem"}}>{item?.text}</span>
						</div>
					</div>
				))}
			</div>
		</NavSideBarLayout>
	)
}