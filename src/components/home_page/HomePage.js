import React, { useEffect } from 'react';
import worldImage from './resource/world.jpg';

// component import
import {NavSideBarLayout} from '../routes'; 
import Dashboard from './dashboardContainer';

// function definition
export default function HomePage(props){	
	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			overflow: 'hidden',
			zIndex: -1
		}}>
			<div style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				overflow: 'hidden'
			}}>
				<div style={{
					position: 'absolute',
					top: 0,
					zIndex: -1,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundImage: `url(${worldImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					filter: 'blur(1px)',
					opacity: 0.4
				}}></div>
				<NavSideBarLayout childCSS={{marginTop:"3rem"}}>
					<Dashboard />
				</NavSideBarLayout>
			</div>
		</div>
	)
}
