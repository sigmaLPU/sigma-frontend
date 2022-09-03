import {
	universityBasicDetailsSlice,universityBasicDetailsReducer,
	universityContactSlice,universityContactReducer,
	universityMeetingSlice,universityMeetingReducer,
	universityProgramSlice,universityProgramReducer,
} from './temp/routes'

import {
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails
} from './university/routes'

export {
	// university profile state/slice/reducer
	universityBasicDetailsSlice,universityBasicDetailsReducer,
	universityContactSlice,universityContactReducer,
	universityMeetingSlice,universityMeetingReducer,
	universityProgramSlice,universityProgramReducer,

	// university list
	getAllUniversitySlice,getAllUniversityReducer,setRedirectFunction,updateViewDetails
}