import React from 'react'
import './student.css'
import {NavSideBarLayout} from '../routes'
import ProgressBar from './ProgressBar';
import UserInfo from './UserInfoo'

import {
	Card
} from '../routes'
import UserInfoo from './UserInfoo';

export default function StudentProfile(props){
	return (
		<div>
			<NavSideBarLayout >
			<ProgressBar/>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', marginBottom:'2rem'}}>
        <p className='barhead1'>Counselling</p>
        <p className='barhead2'>Document Verfication</p>
        <p className='barhead3'>Payment & approval</p>
        <p className='barhead4'>Approved by Foreign University</p>
        <p className='barhead5'>Visa Approved</p>
        <p className='barhead6'>Process Done</p>
      </div>
      <UserInfoo/>

			</NavSideBarLayout>
		</div>
	)
}

