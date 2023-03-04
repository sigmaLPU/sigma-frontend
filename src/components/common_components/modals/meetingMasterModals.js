import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {universityMeetingAddReducer} from '../../../redux/routes'
import { LoadingComponent } from '../../routes';
import {Button} from './universityProfileModals'

function getUniId(url){
	var id = ""
	for(var i=url.length-1;i>=0;i--){
		if(url[i]==='/') return id
		id = url[i] + id
	}
	return id
}


export function MeetingMeetingsMasterModal(props){
	const style = {
		maxHeight: "500px",
		minWidth: "741px",
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
		"agenda":"",
		"participants":[],
		"link":"N/A"
		}
	)

	useEffect(()=>{
		var name = localStorage.getItem('name')
		if(name){
			setData({...data,"createdBy":name})
		}
	},[])

	function onSubmit(e){
		e.preventDefault();
		const id = getUniId(window.location.href)
		dispatch(universityMeetingAddReducer({data:data,id}))
	}

	const reduxData = useSelector((state)=>state.universityMeetingSlice.data)
	
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
				Add New Meetings
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"0.5rem"}}>
					
						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Meeting Agenda</span>
							<input type="text" value={data?.agenda} style={textFeildCSS} onChange={(e)=>setData({...data,"agenda":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Created By</span>
							<input type="text" value={data?.createdBy} style={textFeildCSS} onChange={(e)=>setData({...data,"agenda":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Meeting between</span>
							<input type="text" value={data?.title} style={textFeildCSS} onChange={(e)=>setData({...data,"title":e.target.value})} />
						</div>
									

						<div style={{display:"flex",flexDirection:"column",width:"100%",marginTop:"1rem"}}>
							<span>Link</span>
							<input type="text" value={data?.link} style={textFeildCSS} onChange={(e)=>setData({...data,"link":e.target.value})} />
						</div>
									

						<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Date</span>
								<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"meetingTime":e.target.value})} />
							</div>
						</div>

					</div>

					<Button style={{marginTop:"1rem"}} submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>

	)
}
