// react imports
import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

// component import


// other imports
import RejcetImg from '../resource/404reject.png'


// function defination

export default function Error404(props){
	const navigate = useNavigate()

	const word = ["S","I","G","M","A"]
	const _404 = ["4","0","4"]

	useEffect(()=>{
		setTimeout(()=>{
			window.history.back()
		},5000)
	},[])

	return (
		<div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
			<div style={{display:"flex"}}>
				<div style={{}}>
					<img src={RejcetImg} alt="reject img"/>
				</div>
				<div style={{display:"flex",flexDirection:"column"}}>
					<div style={{display:"flex",alignItems:"stretch",minWidth:"21rem"}}>
					{
						word.map((item)=>(
							<div style={{width:"154px",backgroundColor:"#F07F1A",height:"165px",border:"9px solid #000000",marginRight:"41px"}}>
								<span style={{fontSize:"128px",fontWeight:"700",color:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>{item}</span>
							</div>
						))
					}	
					</div>
					<div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%"}}>
						<div style={{fontSize:"128px",fontWeight:"700",color:"black"}}>
							{
								["4","0","4"].map((item,key)=>(
									<span style={key!==2 ? {marginRight:"140px"} : {}}>{item}</span>
								))
							}
						</div>
						<div style={{fontSize:"71px",fontWeight:"700"}}>Page Not Found</div>
						<div style={{fontSize:"1.6rem"}}>ਤੁਹਾਨੂੰ ਇੱਥੇ ਆਉਣ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਹੈ</div>
						<div style={{fontSize:"1.2rem"}}>आपको यहां रहने की अनुमति नहीं है |</div>
						<div style={{fontSize:"1.4rem",fontWeight:"700",backgroundColor:"#F07F1A",padding:"4px 8px",cursor:"pointer",marginTop:"1rem",borderRadius:"8px"}} 
							onClick={()=>navigate('/dashboard')}>
							Back To Home
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}