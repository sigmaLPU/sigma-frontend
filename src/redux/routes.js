import {
	universityBasicDetailsSlice,universityBasicDetailsReducer,universityBasicDetailsUpdateReducer,
	universityContactSlice,universityContactReducer,universityContactAddReducer,universityContactUpdateReducer,
	universityMeetingSlice,universityMeetingReducer,universityMeetingAddReducer,universityMeetingUpdateReducer,
	universityProgramSlice,universityProgramReducer,universityProgramAddReducer,
	universityRecentUpdateSlice,universityRecentUpdateReducer,universityRecentUpdateAddReducer,universityRecentUpdateUpdateReducer,
	universityMouContractSlice,universityMouContractReducer,universityMouContractAddReducer,universityMouContractUpdateReducer,setMouContractSliceLoading,
	universityApplicationProcessSlice,universityApplicationProcessReducer,universityApplicationProcessAddReducer,
	universityDocumentRequiredSlice,universityDocumentRequiredReducer,universityDocumentRequiredAddReducer,
} from './universityProfile/routes'

import {
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails,universityAddReducer,

	tagsMouMasterSlice,activateYourTagChip,deleteYourTagChip,addYourTagChip,
} from './mouMaster/routes'

import {
	forgetPasswordSlice,forgetPasswordReducer,resetPasswordReducer,
} from './users/routes'

import {
	getAllMeetingsSlice,	
	getAllUniversityMeetingsReducer,universityMeetingsAddReducer,setRedirectFunctionMeetings,updateViewDetailsMeetings,
} from './meetingMaster/routes'

export default function s(){ return "Nothing default"}

export {
	// university profile state/slice/reducer
	universityBasicDetailsSlice,universityBasicDetailsReducer,universityBasicDetailsUpdateReducer,
	universityContactSlice,universityContactReducer,universityContactAddReducer,universityContactUpdateReducer,
	universityMeetingSlice,universityMeetingReducer,universityMeetingAddReducer,universityMeetingUpdateReducer,
	universityProgramSlice,universityProgramReducer,universityProgramAddReducer,
	universityRecentUpdateSlice,universityRecentUpdateReducer,universityRecentUpdateAddReducer,universityRecentUpdateUpdateReducer,
	universityMouContractSlice,universityMouContractReducer,universityMouContractAddReducer,universityMouContractUpdateReducer,setMouContractSliceLoading,
	universityApplicationProcessSlice,universityApplicationProcessReducer,universityApplicationProcessAddReducer,
	universityDocumentRequiredSlice,universityDocumentRequiredReducer,universityDocumentRequiredAddReducer,
	
	// university list
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails,universityAddReducer,
	tagsMouMasterSlice,activateYourTagChip,deleteYourTagChip,addYourTagChip,

	forgetPasswordSlice,forgetPasswordReducer,resetPasswordReducer,

	// meeting master
	getAllMeetingsSlice,getAllUniversityMeetingsReducer,universityMeetingsAddReducer,setRedirectFunctionMeetings,updateViewDetailsMeetings,
}