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
import processfile from '../resource/creditTransfer/pdf/processct.pdf'


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
		// {text:"Frequently Asked Question",img:frequentlyAskedImg,url:"/training/creditTransfer/faq",active:true,value:<FAQs/>},
		{text:"Guidelines of Credit Transfer",img:guidelinesImg,url:"/training/creditTransfer/guidelines",active:false,value:<Guidelines/>},
		// {text:"Policies of Credit Transfer",img:policyImg,url:"/training/creditTransfer/policy",active:false,value:<Policies/>},
		{text:"Counselling Script of Credit Transfer",img:councliningImg,url:"/training/creditTransfer/counselling",active:false,value:<FAQs/>},
		{text:"Process Details of Credit Transfer",img:processDetailsImg,url:"/training/creditTransfer/processDetails",active:false,value:<Poli/>},
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
					<div style={{width:"100%",display:"flex",justifyContent:"center",gap:"20px" ,margin:"1rem 2rem 1rem 2rem",}}>
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
		{question:"Introduction:",answer:"Good morning/afternoon/evening. May I know who am I speaking with?"},
		{question:"Confirmation:",answer:"Thank you for confirming, [Name]. I am [Your Name] from the Division of International Affairs at Lovely Professional University (LPU). I understand that you have expressed your interest in the Semester Exchange program. Is that correct?"},
		{question:"Explaining the Program:",answer:"If I may ask, what do you know about the Credit Transfer program? Can you please explain it to me briefly?"},
		{question:"Clarifying the Program:",answer:"Thank you for sharing your understanding of the program, [Name]. Let me explain it to you in more detail.If the answer is need more clarity for program then explain the program.The International Credit transfer program works like this that students will be doing their first two years study at LPU and rest two to three of the study at foreign university. After successful completion of the program in the foreign University the student will eventually get degree from foreign partner university. For first two years the students will be paying fee to LPU and after two years the LPU will stop and for the period of the study at foreign university you will be paying fee to foreign university."},
        {question:"Benefits",answer:<ul style={{marginLeft:'30px'}}>
        <li>Cost-Effective- Students can save up to 50% of their money as they would be paying 2 years fees only rather than 4 years fees.</li>
        <li>Work 20 hours per week while studying as per the different country regulations.</li>
        <li>Students can easily cover their living expenses with earnings from a part-time job.</li>
        <li>Students may get PSWR (Post-Study Work Rights) after successful completion of the program at the foreign University</li>
        <li>Paid industrial training opportunity of 12000 GBP to 15000 GBP in UK universities. The payment will be given to you</li>
      </ul>
      },
      {question:"Eligiblity",answer:"To be eligible for the program, you should have a CGPA of 6.5 and above with no backlogs and reappearances at the time of application, no pending cases of indiscipline, an IELTS score of 6.5 band overall, not less than 6 in each module. There is a possibility of waiver in UK Universities if you are from CBSE or ICSE board and have more than 70% marks only in English, not overall. You should also have enough funds to sustain yourself at the foreign University."},
        {question:"Interest Email:",answer:"Great, if you are interested in applying for the program, please send an email to studyabroad@lpu.co.in with your details such as Name, Registration Number, Course Name, Current Semester, and Contact Number. I would like to suggest that you come and meet us at block 32-310 for detailed counseling to get your queries solved. I can book your slot for counseling with a counselor, and the counseling is entirely free. What time should I book your slot? We are available until 5:30 PM."},
        {question:"Closing:",answer:"Thank you for your time, [Name], and I wish you all the best."},






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

function Guideline(props) {
	const [showPdf, setShowPdf] = React.useState(false);
  
	return (
	  <div style={{ width: "80%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
		<div style={{ display: "flex", justifyContent: "flex-start", padding: "0.5rem 1rem 0.5rem 1rem", flexDirection: "column" }}>
		  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
			<span onClick={() => setShowPdf(!showPdf)} style={{ fontSize: "1.3rem", textDecoration: "none", cursor: "pointer" }}>{props.sNo}. {props.data.text}</span>
		  </div>
		  {showPdf && (
			<div style={{ width: "100%", height: "600px", marginTop: "1rem" }}>
			  <iframe src={props.data.item} title={props.data.text} width="100%" height="100%" style={{ border: "none" }}></iframe>
			</div>
		  )}
		</div>
	  </div>
	);
  }

  function Poli(props){
	const guidelines = [
	
        {text:"Credit Transfer Policy",item:processfile},
	]

	return (
		<div style={{marginBottom:"5rem",width:"100%",display:"flex",alignItems:"center",marginTop:"4rem",flexDirection:"column",rowGap:"2rem"}}>
			{guidelines.map((item,key)=>(
				<Polis data={item} key={key} sNo={key+1}/>						
			))}
		</div>
	)
}

function Polis(props) {
	const [showPdf, setShowPdf] = React.useState(false);
  
	return (
	  <div style={{ width: "80%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
		<div style={{ display: "flex", justifyContent: "flex-start", padding: "0.5rem 1rem 0.5rem 1rem", flexDirection: "column" }}>
		  <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
			<span onClick={() => setShowPdf(!showPdf)} style={{ fontSize: "1.3rem", textDecoration: "none", cursor: "pointer" }}>{props.sNo}. {props.data.text}</span>
		  </div>
		  {showPdf && (
			<div style={{ width: "100%", height: "600px", marginTop: "1rem" }}>
			  <iframe src={props.data.item} title={props.data.text} width="100%" height="100%" style={{ border: "none" }}></iframe>
			</div>
		  )}
		</div>
	  </div>
	);
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