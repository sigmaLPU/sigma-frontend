import {
	universityBasicDetailsSlice,universityBasicDetailsReducer,
	universityContactSlice,universityContactReducer,universityContactAddReducer,
	universityMeetingSlice,universityMeetingReducer,
	universityProgramSlice,universityProgramReducer,
	universityRecentUpdateSlice,universityRecentUpdateReducer,
} from './temp/routes'

import {
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails
} from './university/routes'

import {
	forgetPasswordSlice,forgetPasswordReducer
} from './users/routes'

export {
	// university profile state/slice/reducer
	universityBasicDetailsSlice,universityBasicDetailsReducer,
	universityContactSlice,universityContactReducer,universityContactAddReducer,
	universityMeetingSlice,universityMeetingReducer,
	universityProgramSlice,universityProgramReducer,
	universityRecentUpdateSlice,universityRecentUpdateReducer,

	// university list
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails,

	forgetPasswordSlice,forgetPasswordReducer,

}