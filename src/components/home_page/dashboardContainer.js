// react imports
import React from 'react';
import {useNavigate} from 'react-router-dom'

// component import


// other imports



// function defination
function LinkButton({url,name}){
  const navigate = useNavigate()

  const ButtonCSS = {
    cursor:"pointer",
  }

  return (
    <div style={ButtonCSS}>
      <span onClick={()=>navigate(url)}>{name}</span>
    </div>
  )
}


export default function Dashboard(props){
    
  const routes = [
    {name:"Credit Tranfer",url:"/credit-transfer"},
    {name:"Credit Tranfer",url:"/credit-transfer"},
    {name:"Credit Tranfer",url:"/credit-transfer"},
    {name:"Meeting Profile",url:"/meeting/232131"},
    {name:"mou master",url:"/mouMaster"},
  ]

  return (
    <div>
      {routes.map((route)=>(
        <LinkButton url={route.url} name={route.name}/>
      ))}
    </div>
  )
}