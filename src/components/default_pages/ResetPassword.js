import React, {useState} from 'react'

import {useNavigate} from 'react-router-dom'

import LPULogo from './resource/lpu_logo.png'
import MailIcon from './resource/mail.png'
import PasswordIcon from './resource/lock.png'
import ClosedEye from './resource/closed_eye.png'
import OpenEye from './resource/open_eye.png'

import {useDispatch,useSelector} from 'react-redux'

import {forgetPasswordReducer} from '../../redux/routes'

export default function ResetRequest(props){

	const navigate = useNavigate();
	const dispatch = useDispatch();


	const [email,setEmail] = useState("");
	const status = useSelector((state) => state.forgetPasswordSlice.data)

	const style={
		width: "656px",
		height: "611px",
		background: "#FFFFFF",
		boxShadow: "0px 0px 11px rgba(240, 127, 26, 0.5)",
		borderRadius: "12px"
	}

	const inputCSS = {
		width: "566px",
		height: "65px",
		display:"flex",
		alignItems:"center",
		border:"1px solid #A2A2A6",
		borderRadius : "4px",
	}

	function onSubmit(e){
		console.log("Reset Password Request")
		e.preventDefault()
		dispatch(forgetPasswordReducer({"email":email}))
	}

	if(status?.status!=false && status?.status!=undefined ){
		return (
			<div>
				<div>Mail is sended to your mail : {email}</div>
				<button onClick={()=>navigate("/")}>Return To home</button>
			</div>
		)
	}

	return (
		<div style={{backgroundColor:"#D9D9D9",height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
			
			<div style={style}>
				<div style={{marginTop:"68px",width:"100%",display:"flex",justifyContent:"center"}}><img style={{width: "392px",height: "138px"}} src={LPULogo}/></div>
				
				<form style={{marginTop:"78px"}}>
					<div style={{marginLeft:"50px"}}><span style={{fontSize:"20px",fontWeight:"400"}}>Please enter your email address</span></div>
				
					<div style={{...inputCSS,marginTop:"20px",marginLeft:"50px"}}>
						<img src={MailIcon} style={{width:"24px",height:"24px",marginLeft: "15px"}}/>
						<input type="text" 
						onChange={(e)=>setEmail(e.target.value)}
						placeholder="email" 
						style={{
								width:"90%",border: "none",
								backgroundColor: "transparent",
								resize: "none",
								outline: "none",
								fontSize:"20px",
								padding:"4px",
							}}/> 
					</div>

					<div style={{width:"100%",display:"flex",justifyContent:"center"}}>
						<div onClick={(e)=>onSubmit(e)} style={{cursor:"pointer",marginTop:"44px",width: "344px",height: "56px",background:"#F07F1A",borderRadius:"6px",display:"flex",justifyContent:"center",alignItems:"center"}}>
						
							<button type="submit" style={{background: "none",color: "inherit",border: "none",padding: "0",font: "inherit",cursor: "pointer",outline: "inherit"}}>
								<span style={{fontWeight:900,fontSize:"20px",color:"white"}}>Reset</span>
							</button>
						</div>
					</div>
				</form>
				<div style={{marginTop:"48px",display:"flex",justifyContent:"center",cursor:"pointer"}}>
					<span style={{fontSize:"20px",fontWeight:"900"}}>Back to home</span>
				</div>
			</div>	
		</div>	
	)
}


export function ResetPassword(props){

	const [show,setShow] = useState(true)
	const [showCon,setShowCon] = useState(true)

	const style={
		width: "656px",
		height: "675px",
		background: "#FFFFFF",
		boxShadow: "0px 0px 11px rgba(240, 127, 26, 0.5)",
		borderRadius: "12px"
	}

	const inputCSS = {
		width: "566px",
		height: "65px",
		display:"flex",
		alignItems:"center",
		border:"1px solid #A2A2A6",
		borderRadius : "4px",
	}


	return (
		<div style={{backgroundColor:"#D9D9D9",height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
			
			<div style={style}>
				<div style={{marginTop:"68px",width:"100%",display:"flex",justifyContent:"center"}}><img style={{width: "392px",height: "138px"}} src={LPULogo}/></div>
				
				<form style={{marginTop:"78px"}}>
					<div style={{marginLeft:"50px"}}><span style={{fontSize:"20px",fontWeight:"400"}}>Confirm Password</span></div>
				
					<div style={{...inputCSS,marginTop:"20px",marginLeft:"50px"}}>
						<img src={PasswordIcon} style={{width:"24px",height:"24px",marginLeft: "15px"}}/>
						<input type={show ? "password":"text"} placeholder="Password" 
						style={{
								width:"80%",border: "none",
								backgroundColor: "transparent",
								resize: "none",
								outline: "none",
								fontSize:"20px",
								padding:"4px",
							}}/> 
							<img src={show ? ClosedEye : OpenEye} onClick={()=>setShow(!show)}  style={{width:"24px",height:"24px",marginRight: "15px",cursor:"pointer"}}/>
					</div>

					<div style={{...inputCSS,marginTop:"20px",marginLeft:"50px"}}>
						<img src={PasswordIcon} style={{width:"24px",height:"24px",marginLeft: "15px"}}/>
						<input type={showCon ? "password":"text"} placeholder="Password" 
						style={{
								width:"80%",border: "none",
								backgroundColor: "transparent",
								resize: "none",
								outline: "none",
								fontSize:"20px",
								padding:"4px",
							}}/> 
							<img src={showCon ? ClosedEye : OpenEye} onClick={()=>setShowCon(!showCon)}  style={{width:"24px",height:"24px",marginRight: "15px",cursor:"pointer"}}/>
					</div>

					<div style={{width:"100%",display:"flex",justifyContent:"center"}}>
						<div style={{cursor:"pointer",marginTop:"44px",width: "344px",height: "56px",background:"#F07F1A",borderRadius:"6px",display:"flex",justifyContent:"center",alignItems:"center"}}>
						
							<button type="submit" style={{background: "none",color: "inherit",border: "none",padding: "0",font: "inherit",cursor: "pointer",outline: "inherit"}}>
								<span style={{fontWeight:900,fontSize:"20px",color:"white"}}>Save Password</span>
							</button>
						</div>
					</div>
				</form>
				<div style={{marginTop:"48px",display:"flex",justifyContent:"center",cursor:"pointer"}}>
					<span style={{fontSize:"20px",fontWeight:"900"}}>Back to home</span>
				</div>
			</div>	
		</div>	
	)	
}