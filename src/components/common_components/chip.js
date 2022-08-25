// react imports
import React from 'react';

// component import


// other imports
import RemoveIcon from './resource/remove.svg'

// function defination

export default function Chip(props){

	const activeCSS = {
		background : "#F07F1A",
		color:"white",
	}

	const style= {display:"flex",justifyContent:"space-between",alignItems:"center",...props?.style}

	return (
		<div style={props?.active ? {...style,...activeCSS} : style }>
			<span style={{fontSize:"20px",fontWeight:"700",marginLeft:"4px"}}>{props?.text}</span>
			{
				props?.removeIcon!==true &&
				<span style={{marginLeft:"4px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1px"}}>
					<img src={RemoveIcon} style={{width:"18px",height:"18px"}}/>
				</span>
			}
		</div>
	)
}