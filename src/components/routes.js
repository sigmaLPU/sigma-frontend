/*---PAGES-----*/
//home page
import HomePage from './home_page/HomePage'
//login page
import LoginPage from './default_pages/LoginPage'
// 404 error
import Error404 from './default_pages/errors/Error404'
// mou master
import MouMaster from './mou_master/MouMaster'
// loading page
import LoadingPage from './default_pages/LoadingPage'
// university profile 
import UniversityProfile from './profile/UniversityProfile'

/*---COMPONENT---*/
// navbar side bar
import NavSideBarLayout from './common_components/navbarSidebar' 
// card container common components
import Card, {ObjectCard,FileCard,ContactCard,RecentUpdateCard} from './common_components/card'
// chip 
import Chip from './common_components/chip'
// table 
import Table from './common_components/table'


export {
	//pages
	HomePage,
	LoginPage,
	Error404,
	MouMaster,
	LoadingPage,
	UniversityProfile,
	
	// componets
	NavSideBarLayout,
	Card, ObjectCard,FileCard,ContactCard,RecentUpdateCard,
	Chip,
	Table,	

};
