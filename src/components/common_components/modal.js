import React, {useState,useEffect} from 'react'
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton'; // Parent component to fit icon inside it
import CallMadeIcon from '@mui/icons-material/CallMade'; // heading pop icon
import CloseIcon from '@mui/icons-material/Close';

import {universityContactAddReducer} from '../../redux/routes'

import { useDispatch, useSelector } from 'react-redux'

function getUniId(url){
	var id = ""
	for(var i=url.length-1;i>=0;i--){
		if(url[i]==='/') return id
		id = url[i] + id
	}
	return id
}


export default function ModalPopUp(props){

	const customStyles = {
	  content: {
	    top: '50%',
	    left: '50%',
	    right: 'auto',
	    bottom: 'auto',
	    marginRight: '-50%',
	    transform: 'translate(-50%, -50%)',
	  },
	};

	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}


	return (
		<div>
			<IconButton color="inherit" onClick={openModal} aria-label="open drawer" style={{width:"30px",height:"28.54px",float:"right",border:"1px solid black" , borderRadius:"8px"}}>
				<CallMadeIcon />
			</IconButton>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      	<div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
	      	<IconButton onClick={closeModal}>
	      		<CloseIcon/>
	      	</IconButton>
      	</div>
       	{props?.children}
      </Modal>
    </div>
	)
}



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







export function MeetingModal(props){
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
    "title":"",
    "createdBy":"",
    "meetingTime":"",
    "agenda":"",
    "participants":[],
    "link":""
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
					<input onChange={(e)=>setData({...data,title:e.target.value})} style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Name"/>
					<input onChange={(e)=>setData({...data,email:e.target.value})} style={{width:"607px",height:"40px",borderRadius:"8px"}} type="email" placeholder="Email"/>
					<input onChange={(e)=>setData({...data,phone:e.target.value})} style={{width:"607px",height:"40px",borderRadius:"8px"}} type="mobile" placeholder="Phone no."/>
					<input onChange={(e)=>setData({...data,description:e.target.value})} style={{width:"607px",height:"40px",borderRadius:"8px"}} type="text" placeholder="Description"/>
					<button onClick={(e)=>onSubmit(e)}>Save</button>
				</form>
			</div>
		</div>
	)
}


// {
//     "title":"ADDING CSE IN SEM EXCHANGE",
//     "createdBy":"Karanveer",
//     "meetingTime":"20-10-2022",
//     "agenda":"Include cse in sem exchange",
//     "participants":[
//         {"name":"Karanveer C",
//         "email":"kvc@gmail.com",
//         "designation":"credit transfer dept - lpu"
//         },
//         {"name":"Amit C",
//         "email":"amit@gmail.com",
//         "designation":"credit transfer dept - albetra"
//         }
//     ],
//         "link":"www.google.com"
// }







