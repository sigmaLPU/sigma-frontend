import React from 'react'

import {NavSideBarLayout} from '../routes'
import ProgressBar from './ProgressBar';
import UserInfo from './UserInfo'



export default function StudentProfile(props){
	return (
		<div>
			<NavSideBarLayout childCSS={{marginTop:"0.1rem"}}>
			<div className="App">
      <ProgressBar/>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', marginTop:'2rem'}}>
        <p className='barhead1'>Counselling</p>
        <p className='barhead2'>Document Verfication</p>
        <p className='barhead3'>Payment & approval</p>
        <p className='barhead4'>Approved by Foreign University</p>
        <p className='barhead5'>Visa Approved</p>
        <p className='barhead6'>Process Done</p>
      </div>
      <UserInfo/>

    </div>
			</NavSideBarLayout>
		</div>
	)
}


