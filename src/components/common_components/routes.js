// card
import Card from './card'

import {
	ObjectCard,
	FileCard,
	ContactCard,
	RecentUpdateCard,
	MeetingCard,
	GuestVisitCard,
} from './cards/universityProfileCard'

// modal
import ModalPopUp from './modal'

import {
	BasicDetailsModal,ContactDetailsModal,MeetingUniversityModal,
	GuestVisitUniversityModal,
	ProgramOfColaborationUniversityModal,RecentUpdateUniversityModal,
	MeetingUpdateUniversityModal,ContactDetailsUpdateModal,
	MouContractAddUniversityModal,RecentUpdateUpdateUniversityModal,
	MouContractUpdateUniversityModal,ApplicationProcessAddUniversityModal,
	DocumentAddUniversityModal,FinancialAgreementAddUniversityModal,GuestVisitUpdateUniversityModal,

} from './modals/universityProfileModals'

import {MeetingMeetingsMasterModal} from './modals/meetingMasterModals'

import {GuestVisitMasterModal} from './modals/guestVisitModals'

import {AddNewUniversity} from './modals/mouMasterModal'

import {
	BasicDetailsMeetingModal,OutcomeMeetingModal,ActionPlanMeetingModal,
	MoMNotesMeetingModal,AttachmentMeetingModal,ParticipantsMeetingModal,
} from './modals/meetingProfileModal'

// loading component
import {LoadingComponent} from './loadingComponent'


// common componet
import {Button} from './modals/universityProfileModals'


export {
	//card
	Card,
	ObjectCard, FileCard, ContactCard, RecentUpdateCard, MeetingCard,GuestVisitCard,

	// modal
	ModalPopUp,
	BasicDetailsModal,ContactDetailsModal,MeetingUniversityModal,
	GuestVisitUniversityModal,
	ProgramOfColaborationUniversityModal,RecentUpdateUniversityModal,
	MeetingUpdateUniversityModal,ContactDetailsUpdateModal,
	MouContractAddUniversityModal,RecentUpdateUpdateUniversityModal,
	MouContractUpdateUniversityModal,ApplicationProcessAddUniversityModal,
	DocumentAddUniversityModal,FinancialAgreementAddUniversityModal,
	GuestVisitUpdateUniversityModal,
	GuestVisitMasterModal,
	BasicDetailsMeetingModal,OutcomeMeetingModal,ActionPlanMeetingModal,
	MoMNotesMeetingModal,AttachmentMeetingModal,ParticipantsMeetingModal,		
	AddNewUniversity,
	MeetingMeetingsMasterModal,
	// loading component
	LoadingComponent,


	// common component
	Button,
}