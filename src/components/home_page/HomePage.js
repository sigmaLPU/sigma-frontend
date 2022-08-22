// react imports
import React, { useEffect } from 'react';


// component import
import {NavSideBarLayout} from '../routes' 
import Dashboard from './dashboardContainer'
// other imports

// function defination

export default function HomePage(props){	
	return (
		<div>
			<NavSideBarLayout childCSS={{marginTop:"3rem"}}>
				<Dashboard />
			</NavSideBarLayout>
		</div>
	)
}