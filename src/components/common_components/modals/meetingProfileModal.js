import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import {Button,LoadingComponent} from '../routes'
import {getMeetingsSlice,getMeetingsReducer,meetingBasicDetailsUpdateReducer} from '../../../redux/routes'
 
function getUniId(url){
	var id = ""
	for(var i=url.length-1;i>=0;i--){
		if(url[i]==='/') return id
		id = url[i] + id
	}
	return id
}

export function BasicDetailsMeetingModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const details = useSelector((state)=>state.getMeetingsSlice.data)

	const dispatch = useDispatch()

	const [data,setData] = useState({
		"agenda":"",
		"meetingTime":"",
		"title":"",
	})


	useEffect(()=>{
		var d = details?.data
		if(d){

			setData({...data,...d})
		}
	},[])

	function submit(e){
		e.preventDefault()
		const id = getUniId(window.location.href)
		dispatch(meetingBasicDetailsUpdateReducer({id,data:data}))
	}

	const reduxData = useSelector((state)=>state.getMeetingsSlice.data)
	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}

	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Edit Basic Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,agenda:e.target.value})} value={data.agenda} type="text" placeholder="Agenda"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,meetingTime:e.target.value})} value={data.meetingTime} type="text" placeholder="Meeting Time"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,title:e.target.value})} value={data.title} type="text" placeholder="Title"/>
					</div>
					<Button submit={submit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>
	)
}


export function OutcomeMeetingModal(props){
	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const details = useSelector((state)=>state.getMeetingsSlice.data)

	const dispatch = useDispatch()

	const [editId,setEditId] = useState(-1)

	const [data,setData] = useState({
		"agenda":"",
		"meetingTime":"",
		"title":"",
	})

	const [participants,setParticipants] = useState({
		"name": "",
        "email": "",
        "designation": "",
	})


	useEffect(()=>{
		var d = details?.data
		if(d){

			setData({...data,...d})
		}
	},[])

	function AddParticipants(e){
		e.preventDefault()
		let p = data?.participants
		let temp = []
		let newParticipants = participants

		
		for(var i=0;i<p.length;i++){
			temp.push(p[i])
		}

		temp.push(newParticipants)

		setData({...data,participants:temp})		

	}

	function submit(e){
		const id = getUniId(window.location.href)
		dispatch(meetingBasicDetailsUpdateReducer({id,data:data}))			
	}


	function removeParticipants(key){
		let p = data?.participants
		let temp = []
		for(var i=0;i<p.length;i++){
			if(i!=key){
				temp.push(p[i])
			}
		}
		setData({...data,participants:temp})
	}

	function editParticipants(key){
		setEditId(key)
		setParticipants(data?.participants[key])
	}

	function backToAddMode(){
		setParticipants({
			"name": "",
		    "email": "",
		    "designation": "",
		})
		setEditId(-1)
	}

	function EditParticipants(e){
		e.preventDefault()
		let p = data?.participants
		let temp = []
		let newParticipants = participants

		
		for(var i=0;i<p.length;i++){
			if(i===editId){
				temp.push(newParticipants)
			}else{
				temp.push(p[i])
			}
		}

		setData({...data,participants:temp})		
		backToAddMode()
	}


	const reduxData = useSelector((state)=>state.getMeetingsSlice.data)
	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}


	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	if(editId!==-1){
		return(
				<div style={style}>
					<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
						Add and Edit OutCome
					</span>
					<span>**Please save before leave</span>
					<div style={{width:"auto"}}>
						{data?.participants?.map((item,key)=>(
							<div style={{border:"1px solid black",padding:"3px 7px",borderRadius:"8px",backgroundColor:"rgba(255, 179, 179,0.5)",display:"flex",justifyContent:"center",alignItems:"center",columnGap:"0.5rem",rowGap:"0.5rem"}}>
								<span style={{fontSize:"1.2rem"}}>{item?.name || "Name Not Available"}</span>
								<span
									onClick={()=>editParticipants(key)} 
								 	style={{cursor:"pointer",fontSize:"0.8rem",backgroundColor:"yellow",color:"black",borderRadius:"8px",padding:"4px 8px",}}
								>Edit</span>
								<span
									onClick={()=>removeParticipants(key)} 
								 	style={{cursor:"pointer",fontSize:"0.8rem",backgroundColor:"red",color:"white",borderRadius:"8px",padding:"4px 8px",}}
								>Remove</span>
							</div>
						))}
					</div>
					<div style={{marginTop:"3rem"}}>
						<form>
							<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
								<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,name:e.target.value})} value={participants.name} type="text" placeholder="name"/>
								<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,email:e.target.value})} value={participants.email} type="text" placeholder="email"/>
								<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,designation:e.target.value})} value={participants.designation} type="text" placeholder="designation"/>
							</div>
							<Button submit={EditParticipants} buttonText={"Save Changes"}/>
						</form>
						<Button submit={backToAddMode} buttonText={"Back"}/>
					</div>
				</div>
		)		
	}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Add Participants Details
			</span>
					<span>**Please save before leave</span>
		
			<div style={{width:"auto"}}>
				{data?.participants?.map((item,key)=>(
					<div style={{border:"1px solid black",padding:"3px 7px",borderRadius:"8px",backgroundColor:"rgba(255, 179, 179,0.5)",display:"flex",justifyContent:"center",alignItems:"center",columnGap:"0.5rem",rowGap:"0.5rem"}}>
						<span style={{fontSize:"1.2rem"}}>{item?.name || "Name Not Available"}</span>
						<span
							onClick={()=>editParticipants(key)} 
						 	style={{cursor:"pointer",fontSize:"0.8rem",backgroundColor:"yellow",color:"black",borderRadius:"8px",padding:"4px 8px",}}
						>Edit</span>
						<span
							onClick={()=>removeParticipants(key)} 
						 	style={{cursor:"pointer",fontSize:"0.8rem",backgroundColor:"red",color:"white",borderRadius:"8px",padding:"4px 8px",}}
						>Remove</span>
					</div>
				))}
			</div>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,name:e.target.value})} value={participants.name} type="text" placeholder="name"/>
						<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,email:e.target.value})} value={participants.email} type="text" placeholder="email"/>
						<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,designation:e.target.value})} value={participants.designation} type="text" placeholder="designation"/>
					</div>
					<Button submit={AddParticipants} buttonText={"Add Participants"}/>
				</form>
				<Button submit={submit} buttonText={"Save"}/>
			</div>
		</div>
	)

}



export function ActionPlanMeetingModal(props){
	return (
		<div>
			<span>Action Plan</span>
		</div>
	)
}


export function MoMNotesMeetingModal(props){
	return (
		<div>
			<span>MOM Notes</span>
		</div>
	)
}



export function AttachmentMeetingModal(props){
	return (
		<div>
			<span>Attachment</span>
		</div>
	)
}


export function ParticipantsMeetingModal(props){

	const style = {
		height: "500px",
		width: "741px",
		borderRadius: "10px",
		display:"flex",justifyContent:"start",
		alignItems:"center",
		flexDirection:"column",
	}

	const details = useSelector((state)=>state.getMeetingsSlice.data)

	const dispatch = useDispatch()

	const [editId,setEditId] = useState(-1)

	const [data,setData] = useState({
		"agenda":"",
		"meetingTime":"",
		"title":"",
	})

	const [participants,setParticipants] = useState({
		"name": "",
        "email": "",
        "designation": "",
	})


	useEffect(()=>{
		var d = details?.data
		if(d){

			setData({...data,...d})
		}
	},[])

	function AddParticipants(e){
		e.preventDefault()
		let p = data?.participants
		let temp = []
		let newParticipants = participants

		
		for(var i=0;i<p.length;i++){
			temp.push(p[i])
		}

		temp.push(newParticipants)

		setData({...data,participants:temp})		

	}

	function submit(e){
		const id = getUniId(window.location.href)
		dispatch(meetingBasicDetailsUpdateReducer({id,data:data}))			
	}


	function removeParticipants(key){
		let p = data?.participants
		let temp = []
		for(var i=0;i<p.length;i++){
			if(i!=key){
				temp.push(p[i])
			}
		}
		setData({...data,participants:temp})
	}

	function editParticipants(key){
		setEditId(key)
		setParticipants(data?.participants[key])
	}

	function backToAddMode(){
		setParticipants({
			"name": "",
		    "email": "",
		    "designation": "",
		})
		setEditId(-1)
	}

	function EditParticipants(e){
		e.preventDefault()
		let p = data?.participants
		let temp = []
		let newParticipants = participants

		
		for(var i=0;i<p.length;i++){
			if(i===editId){
				temp.push(newParticipants)
			}else{
				temp.push(p[i])
			}
		}

		setData({...data,participants:temp})		
		backToAddMode()
	}


	const reduxData = useSelector((state)=>state.getMeetingsSlice.data)
	
	if(reduxData?.loading){
		return (
			<div style={style}>
				<LoadingComponent/>
			</div>
		)
	}


	const textFeildCSS = {width:"607px",height:"40px",border:"none",borderBottom:"1px solid black",fontSize:"1.1rem",fontWeight:"720"}


	if(editId!==-1){
		return(
				<div style={style}>
					<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
						Edit Participants Details
					</span>
					<span>**Please save before leave</span>
					<div style={{width:"auto"}}>
						{data?.participants?.map((item,key)=>(
							<div style={{border:"1px solid black",padding:"3px 7px",borderRadius:"8px",backgroundColor:"rgba(255, 179, 179,0.5)",display:"flex",justifyContent:"center",alignItems:"center",columnGap:"0.5rem",rowGap:"0.5rem"}}>
								<span style={{fontSize:"1.2rem"}}>{item?.name || "Name Not Available"}</span>
								<span
									onClick={()=>editParticipants(key)} 
								 	style={{cursor:"pointer",fontSize:"0.8rem",backgroundColor:"yellow",color:"black",borderRadius:"8px",padding:"4px 8px",}}
								>Edit</span>
								<span
									onClick={()=>removeParticipants(key)} 
								 	style={{cursor:"pointer",fontSize:"0.8rem",backgroundColor:"red",color:"white",borderRadius:"8px",padding:"4px 8px",}}
								>Remove</span>
							</div>
						))}
					</div>
					<div style={{marginTop:"3rem"}}>
						<form>
							<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
								<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,name:e.target.value})} value={participants.name} type="text" placeholder="name"/>
								<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,email:e.target.value})} value={participants.email} type="text" placeholder="email"/>
								<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,designation:e.target.value})} value={participants.designation} type="text" placeholder="designation"/>
							</div>
							<Button submit={EditParticipants} buttonText={"Save Changes"}/>
						</form>
						<Button submit={backToAddMode} buttonText={"Back"}/>
					</div>
				</div>
		)		
	}

	return(
		<div style={style}>
			<span style={{fontSize:"1.6rem",fontWeight:"800",width:"100%",textAlign:"center"}}>
				Add Participants Details
			</span>
					<span>**Please save before leave</span>
		
			<div style={{width:"auto"}}>
				{data?.participants?.map((item,key)=>(
					<div style={{border:"1px solid black",padding:"3px 7px",borderRadius:"8px",backgroundColor:"rgba(255, 179, 179,0.5)",display:"flex",justifyContent:"center",alignItems:"center",columnGap:"0.5rem",rowGap:"0.5rem"}}>
						<span style={{fontSize:"1.2rem"}}>{item?.name || "Name Not Available"}</span>
						<span
							onClick={()=>editParticipants(key)} 
						 	style={{cursor:"pointer",fontSize:"0.8rem",backgroundColor:"yellow",color:"black",borderRadius:"8px",padding:"4px 8px",}}
						>Edit</span>
						<span
							onClick={()=>removeParticipants(key)} 
						 	style={{cursor:"pointer",fontSize:"0.8rem",backgroundColor:"red",color:"white",borderRadius:"8px",padding:"4px 8px",}}
						>Remove</span>
					</div>
				))}
			</div>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,name:e.target.value})} value={participants.name} type="text" placeholder="name"/>
						<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,email:e.target.value})} value={participants.email} type="text" placeholder="email"/>
						<input style={textFeildCSS} onChange={(e)=>setParticipants({...participants,designation:e.target.value})} value={participants.designation} type="text" placeholder="designation"/>
					</div>
					<Button submit={AddParticipants} buttonText={"Add Participants"}/>
				</form>
				<Button submit={submit} buttonText={"Save"}/>
			</div>
		</div>
	)

}