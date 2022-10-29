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
// meeting master
import MeetingMaster from './meeting_master/MeetingMaster'
// loading page
import LoadingPage from './default_pages/LoadingPage'
// university profile 
import UniversityProfile from './universityProfile/UniversityProfile'
// meeting profile
import MeetingProfile from './meetings/MeetingProfile'
// Training modules
import {TrainingDashboard,CreditTransferTraining,} from './training_module/routes'
// student profile
import StudentProfile from './student_profile/StudentProfile'
// search page
import Search from './search/Search'
// guest visit master
import {GuestVisitMaster,GuestVisitProfile} from './guest_visit/routes'

/*---COMPONENT---*/
// navbar side bar
import NavSideBarLayout from './common_components/navbarSidebar' 
// card container common components
import {Card,ObjectCard,FileCard,ContactCard,RecentUpdateCard,MeetingCard} from './common_components/routes'
// chip 
import Chip from './common_components/chip'
// table 
import Table from './common_components/table'
//modal

import {ModalPopUp,BasicDetailsModal,ContactDetailsModal,MeetingUniversityModal,
	GuestVisitUniversityModal,GuestVisitCard,
	ProgramOfColaborationUniversityModal,RecentUpdateUniversityModal,
	MeetingUpdateUniversityModal,LoadingComponent,ContactDetailsUpdateModal,
	MouContractAddUniversityModal,RecentUpdateUpdateUniversityModal,
	MouContractUpdateUniversityModal,AddNewUniversity,ApplicationProcessAddUniversityModal,
	DocumentAddUniversityModal,MeetingMeetingsMasterModal,FinancialAgreementAddUniversityModal,
	GuestVisitUpdateUniversityModal,GuestVisitMasterModal,
} from './common_components/routes'

// meeting card objects
import {BasicDetailsMeetingCard,AttachementCard} from './meetings/meetingCards'
// modal popup
import {
		BasicDetailsMeetingModal,OutcomeMeetingModal,
		ActionPlanMeetingModal,MoMNotesMeetingModal,
		AttachmentMeetingModal,
} from './meetings/meetingCards'

export {
	//pages
	HomePage,
	LoginPage,
	Error404,
	MouMaster,
	LoadingPage,
	UniversityProfile,
	ResetPassword,ResetRequest,
	MeetingProfile,MeetingMaster,
	StudentProfile,
	Search,GuestVisitMaster,GuestVisitProfile,
		
	// componets
	NavSideBarLayout,
	Card, ObjectCard,FileCard,ContactCard,RecentUpdateCard,MeetingCard,GuestVisitCard,
	Chip,
	Table,	
	BasicDetailsMeetingCard,AttachementCard,

	// modalpop
	BasicDetailsModal,ModalPopUp,ContactDetailsModal,MeetingUniversityModal,
	GuestVisitUniversityModal,
	ProgramOfColaborationUniversityModal,RecentUpdateUniversityModal,
	MeetingUpdateUniversityModal,ContactDetailsUpdateModal,
	MouContractAddUniversityModal,RecentUpdateUpdateUniversityModal,
	MouContractUpdateUniversityModal,AddNewUniversity,ApplicationProcessAddUniversityModal,
	DocumentAddUniversityModal,MeetingMeetingsMasterModal,FinancialAgreementAddUniversityModal,
	GuestVisitUpdateUniversityModal,GuestVisitMasterModal,
	
	LoadingComponent,

	BasicDetailsMeetingModal,OutcomeMeetingModal,
	ActionPlanMeetingModal,MoMNotesMeetingModal,
	AttachmentMeetingModal,


	TrainingDashboard,CreditTransferTraining,

};
