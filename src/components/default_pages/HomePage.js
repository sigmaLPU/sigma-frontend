// react imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

//redux import
import { login } from '../../redux/users/staff/auth'

// component import


// other imports



// function defination

export default function HomePage(props){
	const loading = useSelector((state) => state.auth.loading)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(login())
		console.log(loading)
	},[])

	return (
		<div>
			Home Page
		</div>
	)
}