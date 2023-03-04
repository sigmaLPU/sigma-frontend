import React from 'react'
import { CircularProgress } from '@mui/material';


export function LoadingComponent(props){
	
	const style = {
		width:"100%",
		height:"100%",
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	}
	
	return (
		<div style={style}>
			<CircularProgress />
		</div>
	)
}