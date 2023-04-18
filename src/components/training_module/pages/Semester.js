import { useNavigate } from "react-router-dom";
import { NavSideBarLayout } from "../../routes";
import React,{useState} from 'react'


import councliningImg from '../resource/creditTransfer/counclining.png'
import backgroundHeaderImg from '../resource/backgroundHeader.png'
import downArrowImg from '../resource/creditTransfer/downArrow.png'
import frequentlyAskedImg from '../resource/creditTransfer/frequentlyAsked.png'
import guidelinesImg from '../resource/creditTransfer/guidelines.png'
import policyImg from '../resource/creditTransfer/policy.png'
import processDetailsImg from '../resource/creditTransfer/processDetails.png'


import Guidelines2020PDF from '../resource/semesterexchange/pdf/semabroad.pdf'
import Guidelines2021PDF from '../resource/semesterexchange/pdf/refund.pdf'
import Policy2021PDF from '../resource/semesterexchange/pdf/policy.pdf'
import Processfile from '../resource/semesterexchange/pdf/process.pdf'

export default function Semester(props){

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
		// {text:"Frequently Asked Question",img:frequentlyAskedImg,url:"/training/semesterExhange/faq",active:true,value:<FAQs/>},
		{text:"Guidelines of Semester Exchange",img:guidelinesImg,url:"/training/semesterExchange/guidelines",active:false,value:<Guidelines/>},
		// {text:"Policies of Semester Exchange",img:policyImg,url:"/training/semesterExchange/policy",active:false,value:<Policies/>},
		{text:"Counselling Script of Semester Exchange",img:councliningImg,url:"/training/semesterExchange/counselling",active:false,value:<FAQs/>},
		{text:"Process Details of Semester Exchange",img:processDetailsImg,url:"/training/semesterExchange/processDetails",active:false,value:<Poli/>},
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
					<span style={{fontSize:"4rem",fontWeight:"900"}}>Semester Exchange</span>
				</div>
				<div style={{width:"100%"}}>
					<div style={{width:"100%",display:"flex",justifyContent:"center",gap:"20px",margin:"1rem 2rem 1rem 2rem",}}>
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
		{question:"Explaining the Program:",answer:"If I may ask, what do you know about the Semester Exchange program? Can you please explain it to me briefly?"},
		{question:"Clarifying the Program:",answer:"Thank you for sharing your understanding of the program, [Name]. Let me explain it to you in more detail. The Semester Exchange program is available to eligible students like you, and it provides an opportunity to study abroad for a semester at a partner university. As part of this program, you will get a scholarship for tuition fees at the foreign university. However, you will be responsible for paying the semester fees at LPU, as well as your travel expenses, including flights, visa filing charges, and living expenses. When you return to LPU after the semester exchange program, you will need to complete any backlogged courses (if any). Additionally, your course mapping will be done in consultation with the foreign university's curriculum."},
        {question:"Steps for Selection:",answer:<ul style={{marginLeft:'30px'}}>
        <li>Registration Fees: To apply for the program, you will need to pay a non-refundable registration fee of Rs.2000.</li>
        <li>Sending Application: You will need to send your completed application form, your CV, photos, and passport copy to studyabroad@lpu.co.in.</li>
        <li>Interview Rounds: After receiving your application, you will have to go through two rounds of interviews. One with the Division of International Affairs (DIA) Specialist and another with the Subject HOD.</li>
        <li>Course Mapping: Once you clear the interviews, your application will go to the academics team for course mapping. They will verify your completed and to-be-completed modules in sync with the foreign university's course curriculum. If any of your modules are not covered in the respective semester of the foreign university, those will be considered as backlog, and you will have to clear them during your studies at LPU after the semester exchange program.</li>
        <li>Evaluation by Foreign University: Your application will then be evaluated by the foreign university.</li>
        <li>Visa Application: If the foreign university approves your application, you can apply for a short-term visa.</li>
      </ul>
      },
      {question:"Clarification:",answer:"I hope that clears up any questions you had about the Semester Exchange program, [Name]. Do you need any further clarification on any of these steps?"},
        {question:"Interest Email:",answer:"Great, if you are interested in applying for the program, please send an email to studyabroad@lpu.co.in with your details such as Name, Registration Number, Course Name, Current Semester, and Contact Number."},
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
		{text:"SOP for refund in Semester Abroad ",item:Guidelines2021PDF},
		{text:"SOP for semester Abroad",item:Guidelines2020PDF},
        {text:"Semester Abroad Policy",item:Policy2021PDF},
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
	
        {text:"Semester Abroad Policy",item:Processfile},
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