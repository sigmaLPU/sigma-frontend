import React, {useState,useEffect} from 'react'
import Modal from 'react-modal';
import IconButton from '@mui/material/IconButton'; // Parent component to fit icon inside it
import CallMadeIcon from '@mui/icons-material/CallMade'; // heading pop icon
import CloseIcon from '@mui/icons-material/Close';

import { LoadingComponent } from '../../routes';

import { useDispatch, useSelector } from 'react-redux'

import {
	universityAddReducer,

} from '../../../redux/routes'




import {Button} from '../routes'
import axios from 'axios';


const style = {
	height: "500px",
	width: "741px",
	borderRadius: "10px",
	display:"flex",justifyContent:"start",
	alignItems:"center",
	flexDirection:"column",
}

export function AddNewUniversity(props){
		const [countryList, setCountryList] = useState([])

		 const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
     // const url = 'http://localhost:5000';

     const [open, setOpen] = React.useState(false);

     useEffect(() => {
       const fetchCountries = async () => {
         try {
           const data = await axios.get(url + '/api/v2/country/all', {
             headers: {
               'Content-Type': 'application/json',
               Authorization: 'Bearer ' + localStorage.getItem('token'),
             },
           });

           setCountryList(data.data.countries);
         } catch (error) {
           console.log(error);
         }
       };
       fetchCountries();
     }, []);



	const dispatch = useDispatch()

	const [data,setData] = useState({
		"name":"",
		"country":"",
		"city":"",
		"address":"",
		"website":"",
	})


	useEffect(()=>{
	},[])

	function submit(e){
		e.preventDefault()
		// const id = getUniId(window.location.href)
		dispatch(universityAddReducer({data:data}))

		
	}

	const reduxData = useSelector((state)=>state.getAllUniversitySlice.data)
	
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
				Basic Details
			</span>
			<div style={{marginTop:"3rem"}}>
				<form>
					<div style={{display:"flex",flexDirection:"column",rowGap:"1rem"}}>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,name:e.target.value})} value={data.name} type="text" placeholder="University name"/>
						<select style={textFeildCSS} value={data?.country} onChange={(e)=>setData({...data,country:e.target.value})}>
						{
							countryList.map(item=>(
								<option value={item._id} >{item.name}</option>
							))
						}
						</select>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,city:e.target.value})} value={data.city} type="text" placeholder="City"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,address:e.target.value})} value={data.address} type="text" placeholder="Address name"/>
						<input style={textFeildCSS} onChange={(e)=>setData({...data,website:e.target.value})} value={data.website} type="text" placeholder="Website"/>
					</div>
					<Button submit={submit} buttonText={"Save"}/>
					
				</form>
			</div>
		</div>
	)
}