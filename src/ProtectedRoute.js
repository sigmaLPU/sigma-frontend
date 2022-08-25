import React , {Fragment, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
// redux import
import { authenticateTokenReducer } from './redux/users/authenticateToken'
import { useSelector, useDispatch } from 'react-redux'

// component import
import {LoadingPage} from './components/routes'

export default function ProtectedRoute(props){
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const [loading,setLoading] = useState(true)

	useEffect(()=>{
		console.log("This is ProtectedRoute")	
		const token = localStorage.getItem('token')
	    const auth = localStorage.getItem('auth')
	    console.log(token)
	    if(token && auth){
	      console.log("token is presented")
	      dispatch(authenticateTokenReducer({token})).unwrap().then((d)=>{
	    	console.log("token is valid")
	        // console.log(d)
	        localStorage.setItem('token',token)
	    	setLoading(false)
	    	console.log("Allow to show data")
	      }).catch((error)=>{
	      	localStorage.setItem('token',"")
	      	console.log("Token is wrong need to login")
	        console.log(error)
	        navigate("/")
	      })
	    }else{
	    	setLoading(false)
			console.log("Token is not present need to login")
			navigate("/")
	    }	
	},[])

	if(loading){
		return(<div><LoadingPage/></div>)
	}

	return (
		<Fragment>
			{props.children}
		</Fragment>
	)
};