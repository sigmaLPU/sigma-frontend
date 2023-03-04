import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {guestVisitAddReducer,basicGuestVisitSlice} from '../../../redux/routes'
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


export function GuestVisitMasterModal(props){
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
		"phone":"",
		"designation":""
	})

	const [data,setData] = useState(
		{
		    "title":"",
		    "description":"n/a",
		    "visitDate":"",
		    "visitPeriod": "n/a",
		    "visitors":[],
		    "host":"n/a",
		    "hostEmail":"n/a",
		    "hostPhone":"n/a",
		}
	)

	useEffect(()=>{
		var name = localStorage.getItem('name')
		var email = localStorage.getItem('email')
		if(name){
			setData({...data,"host":name,"hostEmail":email})
		}
	},[])

	function onSubmit(e){
		e.preventDefault();
		// const id = getUniId(window.location.href)
		dispatch(guestVisitAddReducer({data:data}))
	}

	const reduxData = useSelector((state)=>state.basicGuestVisitSlice.data)
	
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
				Add Guest Visit
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"0.5rem"}}>
					
						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Title</span>
							<input type="text" value={data?.title} style={textFeildCSS} onChange={(e)=>setData({...data,"title":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Description</span>
							<input type="text" value={data?.description} style={textFeildCSS} onChange={(e)=>setData({...data,"description":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Host Name</span>
							<input type="text" value={data?.host} style={textFeildCSS} onChange={(e)=>setData({...data,"host":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Host Email</span>
							<input type="text" value={data?.hostEmail} style={textFeildCSS} onChange={(e)=>setData({...data,"hostEmail":e.target.value})} />
						</div>

						<div style={{display:"flex",flexDirection:"column",width:"100%",}}>
							<span>Host Phone</span>
							<input type="text" value={data?.hostPhone} style={textFeildCSS} onChange={(e)=>setData({...data,"hostPhone":e.target.value})} />
						</div>
									
						<div style={{display:"flex",flexDirection:"row",width:"100%",marginTop:"1rem",columnGap:"1rem"}}>
							<div style={{display:"flex",flexDirection:"column",width:"50%"}}>
								<span>Date</span>
								<input type="date" style={textFeildCSS} onChange={(e)=>setData({...data,"visitDate":e.target.value})} />
							</div>
						</div>

					</div>

					<Button style={{marginTop:"1rem"}} submit={onSubmit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>

	)
}
