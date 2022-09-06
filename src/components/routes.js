/*---PAGES-----*/
//home page
import HomePage from './home_page/HomePage'
//login page
import LoginPage from './default_pages/LoginPage'
//restpassword page
import ResetRequest,{ResetPassword} from './default_pages/ResetPassword'
// 404 error
import Error404 from './default_pages/errors/Error404'
// mou master
import MouMaster from './mou_master/MouMaster'
// loading page
import LoadingPage from './default_pages/LoadingPage'
// university profile 
import UniversityProfile from './profile/UniversityProfile'
// meeting profile
import MeetingProfile from './meetings/MeetingProfile'


/*---COMPONENT---*/
// navbar side bar
import NavSideBarLayout from './common_components/navbarSidebar' 
// card container common components
import Card, {ObjectCard,FileCard,ContactCard,RecentUpdateCard,MeetingCard} from './common_components/card'
// chip 
import Chip from './common_components/chip'
// table 
import Table from './common_components/table'
//modal
import ModalPopUp, {BasicDetailsModal,ContactDetailsModal} from './common_components/modal'
// meeting card objects
import {BasicDetails} from './meetings/meetingCards'

export {
	//pages
	HomePage,
	LoginPage,
	Error404,
	MouMaster,
	LoadingPage,
	UniversityProfile,
	ResetPassword,ResetRequest,
	MeetingProfile,BasicDetails,
	
	// componets
	NavSideBarLayout,
	Card, ObjectCard,FileCard,ContactCard,RecentUpdateCard,MeetingCard,
	Chip,
	Table,	

	// modalpop
	BasicDetailsModal,ModalPopUp,ContactDetailsModal,

};
