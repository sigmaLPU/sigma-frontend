import React,{useState,useEffect} from 'react'

// other import
import {NavSideBarLayout} from '../routes'
import {Card , Table,ObjectCard,FileCard,ContactCard,RecentUpdateCard,ModalPopUp} from '../routes'
import { useDispatch } from 'react-redux'

import { getSingleUniversityReducer } from '../../redux/university/getSingleUniversity'

function getUniId(url){
	var id = ""
	for(var i=url.length-1;i>=0;i--){
		if(url[i]==='/') return id
		id = url[i] + id
	}
	return id
}


export default function UniversityProfile(props){

	const dispatch = useDispatch();

	const [BasicDetails,setBasicDetails] = useState({
		"name":"L",
		"country":"india",
		"address":"phagwara, india",
		"website":"www.lpu.in"
	})

	const [MOUcontract,setMOUcontract] = useState([
		{"type":"General","start":"28-07-2022","end":"29-07-2023"},
		{"type":"General","start":"28-07-2022","end":"29-07-2023"},
		{"type":"General","start":"28-07-2022","end":"29-07-2023"},
		{"type":"General","start":"28-07-2022","end":"29-07-2023"},
	])

	const [ContactData,setContactData] = useState([
		{"name":"animesh Shrivatri","mobile":"0987654321","mail":"animesh.shrivatri2002@gmail.com","img":"https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png"},
		{"name":"animesh Shrivatri","mobile":"0987654321","mail":"animesh.shrivatri2002@gmail.com","img":"https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png"},
		{"name":"animesh Shrivatri","mobile":"0987654321","mail":"animesh.shrivatri2002@gmail.com","img":"https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png"},
		{"name":"animesh Shrivatri","mobile":"0987654321","mail":"animesh.shrivatri2002@gmail.com","img":"https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png"},
		{"name":"animesh Shrivatri","mobile":"0987654321","mail":"animesh.shrivatri2002@gmail.com","img":"https://anchorandcontrol.com/wp-content/themes/cera-child/assets/images/avatars/user-avatar.png"},
	])

	const [RecentUpdateData,setRecentUpdateData] = useState([
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
		{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text","date":"27-07-2022"},
	])


	useEffect(()=>{
		const id = getUniId(window.location.href)
		dispatch(getSingleUniversityReducer({id})).then((data)=>{
			console.log(data?.payload?.data)
			var obj = {
				"name":data?.payload?.data?.university?.name ? data?.payload?.data?.university?.name : "Not available",
				"country":data?.payload?.data?.university?.country ? data?.payload?.data?.university?.country : "Not available",
				"address":(data?.payload?.data?.university?.country+", "+data?.payload?.data?.university?.city) ? data?.payload?.data?.university?.country+", "+data?.payload?.data?.university?.city : "Not available",
				"website":data?.payload?.data?.university?.website ? data?.payload?.data?.university?.website : "Not available",
			}
			setBasicDetails(obj)
		}).catch((error)=>{
			console.log(error)
		})
	},[])


	return (
		<div>
			<NavSideBarLayout childCSS={{marginTop:"5rem"}}>
				{/*Full screen div*/}
				<div style={{}}>
					{/*top screen div*/}
					<div style={{display:"flex",justifyContent:"space-between",maxHeight:"790px"}}>

						<div style={{display:"flex",flexWrap:"wrap",alignContent:"space-between"}}>
						
							{/* basic Details */}
							<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Basic Details">
								<ObjectCard data={BasicDetails}/>
							</Card>

							{/* Mou contract */}
							<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Mou / Contract">
								{MOUcontract.map(item=>(
									<FileCard data={item}/>
								))}
							</Card>

							{/* Contact Person */}
							<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Contact Person">
								{
									ContactData.map(item=>(
										<ContactCard data={item}/>
									))
								}
							</Card>

							{/* Application process*/}
							<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Contact Person">
								<ul>
								{
									RecentUpdateData.map(item=>(
										<li style={{}}>{item["title"].length<50 ? item["title"]:item["title"].substr(0,50)+"..."}</li>
									))
								}
								</ul>
							</Card>

							{/* Student/ faculty mobility */}
							<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Student/ faculty mobility">
								
							</Card>

							{/* Financial Agreements */}
							<Card style={{margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"441px",height:"352px"}} heading="Financial Agreements">
							
							</Card>




						</div>

						<div style={{position:"relative",top:"-15px"}}>

							{/* RECENT UPDATE*/}
							<Card cardDataCSS={{maxHeight:"90%"}}  heading="Recent Update" style={{width:"411px",height:"100%",border:"1px solid black"}}>
								<ul>
								{		RecentUpdateData.map(item=>(
										<li><RecentUpdateCard data={item}/></li>
								))}
								</ul>
							</Card>
						</div>

					</div>

					{/*Middle Screeen*/}
					
					<div style={{display:"flex",justifyContent:"space-between",marginTop:"2rem",flexWrap:"wrap",height:"380px"}}>
						{/* Meetings */}
						<Card style={{display:"flex",flexWrap:"wrap",alignItems:"stretch",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"641px"}} heading="Meetings">

						</Card>

						{/* Guest Visit */}
						<Card style={{display:"flex",flexWrap:"wrap",alignItems:"stretch",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"641px"}} heading="Guest Visit">

						</Card>

						{/* Document Required */}
						<Card style={{display:"flex",flexWrap:"wrap",alignItems:"stretch",margin:"0rem 1rem 0rem 0rem",border:"1px solid black",width:"411px",height:"100%"}} heading="Document Required">
						<ul>
								{		RecentUpdateData.map(item=>(
										<li><RecentUpdateCard data={item}/></li>
								))}
								</ul>
						</Card>

					</div>
				

					<div style={{marginTop:"2rem"}}>
						<Table 
							heading={"Program of colaboration"}
							style={{
							minHeight:"15rem"
							}}
						/>
					</div>

				</div>					
				<ModalPopUp />
			</NavSideBarLayout>
		</div>
	)
}





// 				<div style={{display:"flex",justifyContent:"space-between"}}>

// <div style={{display:"inline-flex",flexWrap:"wrap",gridRowGap: "50px",alignContent:"space-between"}}>
						
						








					

						
	

// 					<div  style={{display:"flex",flexDirection:"column",gridRowGap: "45px"}}>
					
