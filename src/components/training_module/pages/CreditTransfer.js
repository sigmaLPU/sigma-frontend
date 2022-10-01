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
		{text:"Frequently Asked Question",img:frequentlyAskedImg,url:"/training/creditTransfer/faq",active:true},
		{text:"Guidelines of Credit Transfer",img:guidelinesImg,url:"/training/creditTransfer/guidelines",active:false},
		{text:"Policies of Credit Transfer",img:policyImg,url:"/training/creditTransfer/policy",active:false},
		{text:"Counselling Script of Credit Transfer",img:councliningImg,url:"/training/creditTransfer/counselling",active:false},
		{text:"Process Details of Credit Transfer",img:processDetailsImg,url:"/training/creditTransfer/processDetails",active:false},
	])


	const faq = [
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
		{question:"dlnsdfskldf klnsdfkldsfsdkl lkfndslknfdsklnf klnfdslkfds ?",answer:"dlfnsd lksndflksdfnk dsfklsdf nkdslfndsn kfdnkdd fkndsklf"},
	]

	const containersCardCSS = {cursor:"pointer",width:"15rem",minHeight:"10rem",padding:"12px",display:"flex",alignItems:"center",flexDirection:"column",border:"2px solid #F07F1A",boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.25)",borderRadius:"4px"}

	return (
		<div>
			<NavSideBarLayout childCSS={{}} childSX={{flexGrow:1}}>
				<div style={topHeaderCss}>
					<span style={{fontSize:"4rem",fontWeight:"900"}}>Credit Transfer</span>
				</div>
				<div style={{width:"100%"}}>
					<div style={{width:"100%",display:"flex",justifyContent:"space-around",margin:"1rem 2rem 1rem 2rem",}}>
						{
							containers.map((item)=>(
								<div onClick={(e)=>navigate(item?.url)} style={item?.active ? {...containersCardCSS,background:"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"} : containersCardCSS }>
									<img src={item?.img} style={{maxWidth:"80%",maxHeight:"8rem"}}/>
									<span style={{textAlign:"center"}}>{item?.text}</span>
								</div>
							))
						}
					</div>
					<div style={{marginBottom:"5rem",width:"100%",display:"flex",alignItems:"center",marginTop:"4rem",flexDirection:"column",rowGap:"2rem"}}>

						{faq.map((item,key)=>(
							<FAQ data={item} key={key} sNo={key+1}/>						
						))}

					</div>
				</div>
			</NavSideBarLayout>
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