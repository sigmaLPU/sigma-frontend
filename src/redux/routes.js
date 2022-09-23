import {
	universityBasicDetailsSlice,universityBasicDetailsReducer,universityBasicDetailsUpdateReducer,
	universityContactSlice,universityContactReducer,universityContactAddReducer,
	universityMeetingSlice,universityMeetingReducer,universityMeetingAddReducer,universityMeetingUpdateReducer,
	universityProgramSlice,universityProgramReducer,universityProgramAddReducer,
	universityRecentUpdateSlice,universityRecentUpdateReducer,universityRecentUpdateAddReducer,
} from './universityProfile/routes'

import {
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails,

	tagsMouMasterSlice,activateYourTagChip,deleteYourTagChip,addYourTagChip,
} from './mouMaster/routes'

import {
	forgetPasswordSlice,forgetPasswordReducer,resetPasswordReducer,
} from './users/routes'

export default function s(){ return "Nothing default"}

export {
	// university profile state/slice/reducer
	universityBasicDetailsSlice,universityBasicDetailsReducer,universityBasicDetailsUpdateReducer,
	universityContactSlice,universityContactReducer,universityContactAddReducer,
	universityMeetingSlice,universityMeetingReducer,universityMeetingAddReducer,universityMeetingUpdateReducer,
	universityProgramSlice,universityProgramReducer,universityProgramAddReducer,
	universityRecentUpdateSlice,universityRecentUpdateReducer,universityRecentUpdateAddReducer,

	// university list
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails,
	tagsMouMasterSlice,activateYourTagChip,deleteYourTagChip,addYourTagChip,

	forgetPasswordSlice,forgetPasswordReducer,resetPasswordReducer,

}