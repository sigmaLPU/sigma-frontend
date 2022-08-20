import React from 'react'
import {useState,useEffect} from 'react'


export default function Table(props){	

	const style = {
		borderRadius : "8px",
		border: "1px solid #F07F1A",
		boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
		...props?.style
	}

	const headingCSS = {
		width:"100%",
		minHeight:"1.2rem",
		display:"flex",
		justifyContent:"center",
		...props?.headingCSS
	}

	const headingSpanCSS = {
		backgroundColor:"#f07f1a",
		color:"white",
		borderRadius:"20px",
		padding:"0.7rem 1.7rem 0.7rem 1.7rem",
		position:"relative",top:"-1rem",
		...props?.headingSpanCSS
	}

	const tableCSS = {
		width:"100%",
		...props?.tableCSS,
	}

	const tableHeadingCSS = {
		backgroundColor:"#f07f1a",
		fontSize:"1.4rem",
		fontWeight:"500",
		...props?.tableHeadingCSS,
	}

	const rowCSS = {
		fontSize:"16px",
		fontWeight:"700",
		height:"51px",

		...props?.rowCSS
	}

	const [column,setColumn] = useState(["S.No","Name","temp1","temp1","temp1","temp1"])

	const [rows,setRows] = useState([
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
		{"S.No":"12","Name":"12","temp1":"12","temp1":"12","temp1":"12","temp1":"12"},
	])

	// useEffect(()=>{
	// 	if(props?.rows && props?.columns){
	// 		setRows(props?.rows)
	// 		setColumn(props?.columns)
	// 	}
	// },[])

	return(
		<div style={style}>
			<div style={headingCSS}>
				<div style={headingSpanCSS}>Heading</div>
			</div>
			<div>
				<table style={tableCSS}>
					<tr style={tableHeadingCSS}>
						{column.map(col=>(
							<td style={{textAlign:"center"}}>{col}</td>
						))}
					</tr>
					{
						rows.map((row,index)=>(
							<tr style={index%2===0 ? {backgroundColor:"rgba(217,217,217,1)",...rowCSS}:{backgroundColor:"white",...rowCSS}}>
								{
									column.map((col,index)=>(
										<td style={{borderLeft:"0.5px solid #000000",textAlign:"center"}}>{row[col]}</td>
									))
								}
							</tr>
						))
					}
				</table>
			</div>
		</div>
	)
}