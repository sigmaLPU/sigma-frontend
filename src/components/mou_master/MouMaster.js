// react imports
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

// component import
import {NavSideBarLayout} from '../routes'
import {Card ,Chip, Table} from '../routes'

// other imports
import { getAllUniversityReducer } from '../../redux/university/getAllUniversity'


// function defination
export default function MouMaster(props){

	const dispatch = useDispatch()

	const navigate = useNavigate()
	// table state
	const [message,setMessage] = useState("loading the tables");
	const [column,setColumn] = useState(["Name of University","Country","Meetings","Contact Person","Agreement","Details"])
	const [rows,setRows] = useState([])

	// tags state
	const [yourTags,setYourTags] = useState([
		{title:"USA",active:false},{title:"India",active:false},{title:"Canada",active:false},{title:"Bhutan",active:false},{title:"Nepal",active:true}
	])
	const [popularTags,setPopularTags] = useState([
		{title:"USA",active:false},{title:"India",active:false},{title:"Canada",active:false},{title:"Bhutan",active:false},{title:"Nepal",active:true}
	])

	const ChipCSS = {
		minWidth: "126px",
		height: "28px",
		background: "#FFFFFF",
		border: "1px solid #F07F1A",borderRadius: "7px",
		margin:"4px"
	}
	const CardCSS = {
		minHeight:"418px",
		width:"372px",
		border: "1px solid #F07F1A",
		boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.25)",
		color:"black",
	}


	function getData(){
		return {
			pagenation_id : "1234",
			column : column,
			rows : rows,
		}
	}

	function onClickToggleChip(array,id){
		array[id].active = !array[id].active
	}

	function redirectTo(id){
		const url = `/university/${id}`
		navigate(url)
	}
	useEffect(()=>{
		dispatch(getAllUniversityReducer({})).then((data)=>{
			const object = data?.payload?.data
			if(object?.count===0){
				console.log("Data is not here")
				setMessage("No data is here")
				setRows([{"Name of University":"-","Country":"-","Meetings":"-","Contact Person":"-","Agreement":"-","Details":<div style={{color:"#f07f1a",cursor:"pointer"}} onClick={()=>redirectTo("temp")}>Details</div>}])
			}else if(object?.count){
				const uni = object?.universities
				setMessage(null)
				var r = []

				for(var i=0;i<uni.length;i++){
					var x = uni[i]
					var obj = {}
					obj["Name of University"] = x?.name ? x?.name : "---"
					obj["Country"] = x?.country ? x?.country : "---"
					obj["Meetings"] =  x?.meeting ? x?.meeting : "---"
					obj["Contact Person"] =  x?.contact ? x?.contact[0] : "---"
					obj["Agreement"] = x?.agreement ? x?.agreement : "---"
					obj["Details"] = <div style={{color:"#f07f1a",cursor:"pointer"}} onClick={()=>redirectTo(x?._id)}>Details</div>
					// }
					console.log(obj)
					r.push(obj)
				}

				setRows(r)



				// var count = object?.count

				// for(var i=0;i<count;i+=1){
				// 	var x = object?.universities[i]
				// 	console.log(x?.name)

					// r.push({
					// 	"Name of University": x?.name ? x?.name : "---",
					// 	"Country": x?.country ? x?.country : "---",
					// 	"Meetings": x?.meeting ? x?.meeting : "---",
					// 	"Contact Person": x?.contact[0] ? x?.contact[0] : "---",
					// 	"Agreement": x?.agreement ? x?.agreement : "---",
					// 	"Details": <div style={{color:"#f07f1a",cursor:"pointer"}} onClick={()=>redirectTo(x?._id)}>Details</div>,
					// })
				// }


				// for(var i=0;i<count;i+=1){
				// 	var x = object?.universities[i]
				// 	console.log(object?.universities[i])
					
				// }
				// console.log("Present")
				// console.log(r)
				// setRows(r)
			}
			else{
				console.log("error")
				setMessage("Unable to fetch data")
				setColumn(["message"])
				setRows([{message}])
			}
		}).catch((error)=>{
			// console.log(error)
			setMessage("Error while fetching Table")
		})
	},[])

	return (
		<div>
			<NavSideBarLayout  childCSS={{marginTop:"4rem"}}>
				<div style={{display:"flex"}}>
					{/*Left part*/}
					<div style={{borderRight:"1px solid #D9D9D9",maxWidth:"372px"}}>
						<div>
							<input type="text" placeholder="Search" style={{width:"372px",fontSize:"20px",marginBottom:"2rem"}}/>
						</div>

						<Card style={CardCSS} heading={"Your Tags"} styleHeading={{color:"black"}}>
							<div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap",}}>
								{yourTags.map((item,key)=>(
									<Chip style={ChipCSS} text={item.title} active = {item.active}/>
								))}
							</div>
						</Card>
						
						<Card style={{...CardCSS,marginTop:"2rem"}} heading={"Popular Tags"}>
							<div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap",}}>
								{popularTags.map((item,key)=>(
									<Chip style={ChipCSS} text={item.title} active = {item.active}/>
								))}
							</div>
						</Card>
					
					</div>
					{/*Right Part*/}
					<div style={{marginLeft:"1rem",width:"100%"}}>
						{ message===null && <Table 
							heading={"Partner University"}
							getData = {getData}
						/>}
					</div>
				</div>
			</NavSideBarLayout>
		</div>
	)
}