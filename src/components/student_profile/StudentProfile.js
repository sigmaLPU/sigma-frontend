import React from 'react'

import {NavSideBarLayout} from '../routes'
import ProgressBar from './ProgressBar';
import UserInfo from './UserInfo'




export default function StudentProfile(props){
	return (
		<div>
			<NavSideBarLayout childCSS={{marginTop:"4rem"}}>
			<div className="App">
      <ProgressBar/>
      <UserInfo/>

    </div>
			</NavSideBarLayout>
		</div>
	)
}


