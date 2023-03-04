import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


import {NavSideBarLayout} from '../../routes'

import councliningImg from '../resource/creditTransfer/counclining.png'
import backgroundHeaderImg from '../resource/backgroundHeader.png'
import downArrowImg from '../resource/creditTransfer/downArrow.png'
import frequentlyAskedImg from '../resource/creditTransfer/frequentlyAsked.png'
import guidelinesImg from '../resource/creditTransfer/guidelines.png'
import policyImg from '../resource/creditTransfer/policy.png'
import processDetailsImg from '../resource/creditTransfer/processDetails.png'


import Guidelines2020PDF from '../resource/creditTransfer/pdf/2020_Guidelines_for_taking_Credit_Transfer_as_an_Option.pdf'
import Guidelines2021PDF from '../resource/creditTransfer/pdf/2021_International_Credit_Transfer_Option_Guidelines_Students.pdf'
export default function CreditTransferTraining(props){

	const navigate = useNavigate()

	const topHeaderCss = {
		height:"10rem",
		width:"100%",
		backgroundColor:"yellow",
		backgroundImage: `url(${backgroundHeaderImg})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	
		display:"flex",justifyContent:"center",
		alignItems:"center"
	}

	const [containers,setContainers] = useState([
		{text:"Frequently Asked Question",img:frequentlyAskedImg,url:"/training/creditTransfer/faq",active:true,value:<FAQs/>},
		{text:"Guidelines of Credit Transfer",img:guidelinesImg,url:"/training/creditTransfer/guidelines",active:false,value:<Guidelines/>},
		{text:"Policies of Credit Transfer",img:policyImg,url:"/training/creditTransfer/policy",active:false,value:<Policies/>},
		{text:"Counselling Script of Credit Transfer",img:councliningImg,url:"/training/creditTransfer/counselling",active:false,value:<FAQs/>},
		{text:"Process Details of Credit Transfer",img:processDetailsImg,url:"/training/creditTransfer/processDetails",active:false,value:<FAQs/>},
	])

	const [activeIndex,setActiveIndex] = useState(0)
	

	const containersCardCSS = {cursor:"pointer",width:"15rem",minHeight:"10rem",padding:"12px",display:"flex",alignItems:"center",flexDirection:"column",border:"2px solid #F07F1A",boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.25)",borderRadius:"4px"}


	function change(index){
		var item = containers
		for(var i=0;i<item.length;i++){
			item[i].active = false
		}
		setActiveIndex(index)
		item[index].active = true
		setContainers(item)
		window.history.replaceState(null, item[index].text, item[index].url)
	}

	return (
		<div>
			<NavSideBarLayout childCSS={{}} childSX={{flexGrow:1}}>
				<div style={topHeaderCss}>
					<span style={{fontSize:"4rem",fontWeight:"900"}}>Credit Transfer</span>
				</div>
				<div style={{width:"100%"}}>
					<div style={{width:"100%",display:"flex",justifyContent:"space-around",margin:"1rem 2rem 1rem 2rem",}}>
						{
							containers.map((item,index)=>(
								<div onClick={(e)=>change(index)} style={item?.active ? {...containersCardCSS,background:"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"} : containersCardCSS }>
									<img src={item?.img} style={{maxWidth:"80%",maxHeight:"8rem"}}/>
									<span style={{textAlign:"center"}}>{item?.text}</span>
								</div>
							))
						}
					</div>
					<div >

						{containers[activeIndex].value}						

					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}


function FAQs(props){
	const faq = [
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
	]

	return (
		<div style={{marginBottom:"5rem",width:"100%",display:"flex",alignItems:"center",marginTop:"4rem",flexDirection:"column",rowGap:"2rem"}}>
			{faq.map((item,key)=>(
				<FAQ data={item} key={key} sNo={key+1}/>						
			))}
		</div>
	)
}

function FAQ(props){
	
	const [active,setActive] = useState(false)

	return (
		<div style={{width:"80%",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"}}>
			<div style={{display:"flex",justifyContent:"flex-start",padding:"0.5rem 1rem 0.5rem 1rem",flexDirection:"column"}}>
				<div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
					<span style={{fontSize:"1.3rem"}}>{props?.sNo}. {props?.data?.question}</span>
					<img src={downArrowImg} onClick={(e)=>setActive(!active)} style={{cursor:"pointer",width:"2rem",height:"2rem",border:"1px solid black",padding:"0.5rem",borderRadius:"50%"}}/>
				</div>
				{ active && <span style={{fontSize:"1.2rem",padding:"0.5rem"}}>
					{props?.data?.answer}
				</span>}
			</div>
		</div>
	)
}



function Guidelines(props){
	const guidelines = [
		{text:"2021_International_Credit_Transfer_Option_Guidelines_Students",item:Guidelines2021PDF},
		{text:"2020_Guidelines_for_taking_Credit_Transfer_as_an_Option",item:Guidelines2020PDF},
	]

	return (
		<div style={{marginBottom:"5rem",width:"100%",display:"flex",alignItems:"center",marginTop:"4rem",flexDirection:"column",rowGap:"2rem"}}>
			{guidelines.map((item,key)=>(
				<Guideline data={item} key={key} sNo={key+1}/>						
			))}
		</div>
	)
}

function Guideline(props){
	

	return (
		<div style={{width:"80%",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"}}>
			<div style={{display:"flex",justifyContent:"flex-start",padding:"0.5rem 1rem 0.5rem 1rem",flexDirection:"column"}}>
				<div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
					<a href={props?.data?.item} target="_blank"  style={{fontSize:"1.3rem",textDecoration:"none",cursor:"pointer"}}>{props?.sNo}. {props?.data?.text}</a>
				</div>
			</div>
		</div>
	)
}


function Policies(props){
	const guidelines = [
		// {text:"2020_Guidelines_for_taking_Credit_Transfer_as_an_Option",item:Guidelines2020PDF},
	]

	return (
		<div style={{marginBottom:"5rem",width:"100%",display:"flex",alignItems:"center",marginTop:"4rem",flexDirection:"column",rowGap:"2rem"}}>
			{guidelines.map((item,key)=>(
				<Policie data={item} key={key} sNo={key+1}/>						
			))}
			{guidelines.length===0 ? <Policie data={{"text":"No Data Available"}} /> : "" }
		</div>
	)
}

function Policie(props){
	

	return (
		<div style={{width:"80%",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)"}}>
			<div style={{display:"flex",justifyContent:"flex-start",padding:"0.5rem 1rem 0.5rem 1rem",flexDirection:"column"}}>
				<div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
					<a href={props?.data?.item} target="_blank"  style={{fontSize:"1.3rem",textDecoration:"none",cursor:"pointer"}}>{props?.sNo}. {props?.data?.text}</a>
				</div>
			</div>
		</div>
	)
}