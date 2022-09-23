import React,{useState,useEffect} from 'react'


export function BasicDetailsModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	return(
		<div style={style}>
			<span style={{fontSize:"20px",fontSize:"700",width:"100%",textAlign:"center"}}>Basic Details</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<input style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="University name"/>
					<input style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Country name"/>
					<input style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Address name"/>
					<input style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Website"/>
					<button>Save</button>
				</form>
			</div>
		</div>
	)
}



export function ContactDetailsModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();


	const [data,setData] = useState({
		name:"",email:"",phone:"",description:""
	})

	useEffect(()=>{
	},[])

	function onSubmit(e){
		e.preventDefault();
		const id = getUniId(window.location.href)
		dispatch(universityContactAddReducer({data,id}))
		console.log(data)
	}

	return(
		<div style={style}>
			<span style={{fontSize:"20px",fontSize:"700",width:"100%",textAlign:"center"}}>
				Contact Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<input onChange={(e)=>setData({...data,name:e.target.value})} style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Name"/>
					<input onChange={(e)=>setData({...data,email:e.target.value})} style={{width:"607px",height:"40px",borderRadius:"8px"}} type="email" placeholder="Email"/>
					<input onChange={(e)=>setData({...data,phone:e.target.value})} style={{width:"607px",height:"40px",borderRadius:"8px"}} type="mobile" placeholder="Phone no."/>
					<input onChange={(e)=>setData({...data,description:e.target.value})} style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Description"/>
					<button onClick={(e)=>onSubmit(e)}>Save</button>
				</form>
			</div>
		</div>
	)
}







export function MeetingUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();

	const [participants,setParticipants] = useState({
		"name":"",
		"email":"",
		"designation":""
	})

	const [data,setData] = useState(
		{
		"title":"",
		"createdBy":"",
		"meetingTime":"",
		"meetingDate":"",
		"agenda":"",
		"participants":[],
		"link":""
		}
	)

	useEffect(()=>{
	},[])

	function onSubmit(e){
		e.preventDefault();
		const id = getUniId(window.location.href)
		console.log(data)
		dispatch(universityMeetingAddReducer({data:data,id}))
		// console.log(data)
	}

	return(
		<div style={style}>
			<span style={{fontSize:"1.3rem",fontSize:"900",width:"100%",textAlign:"center",width:"607px",borderRadius:"8px"}}>
				Meeting Details
			</span>
			<div style={{marginTop:"3rem",width:"100%"}}>
				<form style={{width:"100%"}}>
					
					<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
						<span>Meeting Agenda</span>
						<input type="text" style={{fontSize:"1.2rem",fontWeight:"700"}} onChange={(e)=>setData({...data,"agenda":e.target.value})} />
					</div>

					<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
						<span>Meeting between</span>
						<input type="text" style={{fontSize:"1.2rem",fontWeight:"700"}} onChange={(e)=>setData({...data,"title":e.target.value})} />
					</div>
								
					<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
						<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
							<span>Date</span>
							<input type="date" style={{fontSize:"1.2rem",fontWeight:"700",}} onChange={(e)=>setData({...data,"meetingDate":e.target.value})} />
						</div>
						<div style={{display:"flex",flexDirection:"column",width:"40%"}}>
							<span>Time</span>
							<input type="time" style={{fontSize:"1.2rem",fontWeight:"700",}} onChange={(e)=>setData({...data,"meetingTime":e.target.value})} />
						</div>
					</div>


					<button onClick={(e)=>onSubmit(e)}>Save</button>

				</form>
			</div>
		</div>
	)
}




export function GuestVisitUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const dispatch = useDispatch();

	const [data,setData] = useState(
		{
			"name":"",
			"designation":"",
			"mobile":"",
			"email":"",
			"date":"",
			"time":"",
			"purpose":""
		}
	)

	useEffect(()=>{
	},[])

	function onSubmit(e){
		e.preventDefault();
		const id = getUniId(window.location.href)
		console.log(data)
		dispatch(universityMeetingAddReducer({data:data,id}))
		// console.log(data)
	}

	return(
		<div style={style}>
			<span style={{fontSize:"1.3rem",fontSize:"900",width:"100%",textAlign:"center",width:"607px",borderRadius:"8px"}}>
				Guest Visit
			</span>
			<div style={{marginTop:"3rem",width:"100%"}}>
				<form style={{width:"100%"}}>
					
					<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
						<span>Full Name</span>
						<input type="text" style={{fontSize:"1.2rem",fontWeight:"700"}} onChange={(e)=>setData({...data,"name":e.target.value})} />
					</div>

					<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
						<span>Designation</span>
						<input type="text" style={{fontSize:"1.2rem",fontWeight:"700"}} onChange={(e)=>setData({...data,"designation":e.target.value})} />
					</div>
								
					<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
						<span>Mobile</span>
						<input type="text" style={{fontSize:"1.2rem",fontWeight:"700"}} onChange={(e)=>setData({...data,"mobile":e.target.value})} />
					</div>

					<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
						<span>Email Id</span>
						<input type="text" style={{fontSize:"1.2rem",fontWeight:"700"}} onChange={(e)=>setData({...data,"email":e.target.value})} />
					</div>


					<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
						<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
							<span>Date</span>
							<input type="date" style={{fontSize:"1.2rem",fontWeight:"700",}} onChange={(e)=>setData({...data,"date":e.target.value})} />
						</div>
						<div style={{display:"flex",flexDirection:"column",width:"40%"}}>
							<span>Time</span>
							<input type="time" style={{fontSize:"1.2rem",fontWeight:"700",}} onChange={(e)=>setData({...data,"time":e.target.value})} />
						</div>
					</div>

					<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
						<span>Purpose</span>
						<input type="text" style={{fontSize:"1.2rem",fontWeight:"700"}} onChange={(e)=>setData({...data,"purpose":e.target.value})} />
					</div>


					<button onClick={(e)=>onSubmit(e)}>Save</button>

				</form>
			</div>
		</div>
	)
}


export function MouContractUniversityModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	return(
		<div style={style}>
			<span style={{fontSize:"20px",fontSize:"700",width:"100%",textAlign:"center"}}>MouContract University</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<input style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="University name"/>
					<input style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Country name"/>
					<input style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Address name"/>
					<input style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Website"/>
					<button>Save</button>
				</form>
			</div>
		</div>
	)
}
