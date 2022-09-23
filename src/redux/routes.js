import {
	universityBasicDetailsSlice,universityBasicDetailsReducer,universityBasicDetailsUpdateReducer,
	universityContactSlice,universityContactReducer,universityContactAddReducer,
	universityMeetingSlice,universityMeetingReducer,universityMeetingAddReducer,
	universityProgramSlice,universityProgramReducer,
	universityRecentUpdateSlice,universityRecentUpdateReducer,
} from './universityProfile/routes'

import {
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails,

	tagsMouMasterSlice,activateYourTagChip,deleteYourTagChip,addYourTagChip,
} from './mouMaster/routes'

import {
	forgetPasswordSlice,forgetPasswordReducer,resetPasswordReducer,
} from './users/routes'

export {
	// university profile state/slice/reducer
	universityBasicDetailsSlice,universityBasicDetailsReducer,universityBasicDetailsUpdateReducer,
	universityContactSlice,universityContactReducer,universityContactAddReducer,
	universityMeetingSlice,universityMeetingReducer,universityMeetingAddReducer,
	universityProgramSlice,universityProgramReducer,
	universityRecentUpdateSlice,universityRecentUpdateReducer,

	// university list
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails,
	tagsMouMasterSlice,activateYourTagChip,deleteYourTagChip,addYourTagChip,

	forgetPasswordSlice,forgetPasswordReducer,resetPasswordReducer,

}