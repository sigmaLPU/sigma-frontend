// react imports
import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

//redux import
import { login } from '../../redux/users/staff/auth'

// component import


// other imports
import BackgroundImage from './resource/login_background.jpg'
import MailIcon from './resource/mail.svg'
import PasswordIcon from './resource/lock.svg'
import HideIcon from './resource/hide.svg'
import CheckBoxIcon from './resource/checkbox.svg'
import LPULogo from './resource/lpu_logo.svg'

// function defination

function LoginCard(props){

	// state defination
	const [hidden,setHidden] = useState(true)
	const [remember,setRemember] = useState(false)

	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")

	let navigate = useNavigate();

	const loading = useSelector((state) => state.auth.loading)
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const dispatch = useDispatch()

	

	// css defination
	const style={
		backgroundColor:"#ffffff",
		width: "564.31px",
		height: "680px",
		borderRadius: "12px",
		display : "flex",
		flexDirection : "column",
		alignItems:"center",
	}

	const logoCSS = {
		width: "396.73px",
		height: "138px",
		// border:"1px solid black",
		marginTop:"41px",
	}

	const inputCSS = {
		width: "458.31px",
		height: "65px",
		display:"flex",
		alignItems:"center",
		border:"1px solid #A2A2A6",
		borderRadius : "4px",
	}


	function submit(e){
		e.preventDefault()
		dispatch(login({email,password}))
		// console.log(loading)
		// console.log(localStorage.getItem('token'))
		if(localStorage.getItem('auth') && localStorage.getItem('token')){
			navigate("/dashboard");			
		}else{
			console.log("Error")
		}
	}


	return (
	<div style={style}>
		<form >	
			<div style={logoCSS}>
				<img src={LPULogo} style={{height:"100%",width:"100%"}} />				
			</div>
			<div style={{marginTop:"79px"}}>
				<div style={{...inputCSS,marginBottom:"17px"}}>
					<img src={MailIcon} style={{width:"24px",height:"24px",marginLeft: "15px"}}/>
					<input type="text" placeholder="email" 
						style={{
								width:"90%",border: "none",
								backgroundColor: "transparent",
								resize: "none",
								outline: "none",
								fontSize:"20px",
								padding:"4px",
							}} 
							onChange={(e)=>{setEmail(e.target.value)}}/>
				</div>
				<div style={inputCSS}>
					<img src={PasswordIcon} style={{width:"24px",height:"24px",marginLeft: "15px"}}/>
					<input type={hidden ? "password":"text"} placeholder="Password" 
						style={{
								width:"90%",border: "none",
								backgroundColor: "transparent",
								resize: "none",
								outline: "none",
								fontSize:"20px",
								padding:"4px",
							}} 
							onChange={(e)=>{setPassword(e.target.value)}}/>
					<img src={HideIcon} onClick={()=>setHidden(!hidden)}  style={{width:"24px",height:"24px",marginRight: "15px",cursor:"pointer"}}/>
				</div>
				<div style={{marginTop:"40px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
					<div onClick={()=>setRemember(!remember)} style={{fontSize:"20px",fontWeight:"900",display:"flex",color:"#747980",alignItems:"center",cursor:"pointer"}}>
						<div style={{width:"16px",height:"16px",border: "2px solid #667085",borderRadius:"4px",padding:"1px"}}>
							{remember && <div style={{background:"#667085",width:"100%",height:"100%"}} />}
						</div>
						<span style={{marginLeft:"8px"}}>Remember Me</span>
					</div>
					<div style={{color:"#3665C5",fontSize:"20px",fontWeight:"900"}}>Forget Password</div>
				</div>
				<div onClick={(e)=>submit(e)} style={{cursor:"pointer",marginTop:"79px",width: "460.33px",height: "56px",background:"#F07F1A",borderRadius:"6px",display:"flex",justifyContent:"center",alignItems:"center"}}>
					<span style={{fontWeight:900,fontSize:"20px",color:"white"}}>Login</span>
				</div>
			</div>
		</form>
	</div>
	)
}


export default function LoginPage(props){
	const style = {
		width:"100vw",
		height:"100vh",
		display:"flex",
		justifyContent:"center",
		alignItems:"center",
		background: `linear-gradient(0deg, rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.71)), url(${BackgroundImage})`,
		backgroundSize:"100vw 100vh"
	}

	return (
		<div style={style}>
			<LoginCard />
		</div>
	)
}