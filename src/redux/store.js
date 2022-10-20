import { configureStore } from '@reduxjs/toolkit';

// reducers
import authUserReducer from './users/auth.js';
import authenticateToken from './users/auth.js';

import { getAllUniversitySlice, tagsMouMasterSlice } from './routes';

import {
  universityBasicDetailsSlice,
  universityContactSlice,
  universityMeetingSlice,
  universityProgramSlice,
  universityRecentUpdateSlice,
  universityMouContractSlice,
  universityApplicationProcessSlice,
  universityDocumentRequiredSlice,
  getAllMeetingsSlice,
  universityFinancialAgreementSlice,
	universityGuestVisitSlice,
  searchSlice,

  forgetPasswordSlice,
} from './routes';

export const store = configureStore({
  reducer: {
    auth: authUserReducer,
    authToken: authenticateToken,
    forgetPasswordSlice: forgetPasswordSlice,

    getAllUniversitySlice: getAllUniversitySlice,
    tagsMouMasterSlice: tagsMouMasterSlice,
    
    universityBasicDetailsSlice: universityBasicDetailsSlice,
    universityContactSlice: universityContactSlice,
    universityMeetingSlice: universityMeetingSlice,
    universityProgramSlice: universityProgramSlice,
    universityRecentUpdateSlice: universityRecentUpdateSlice,
    universityMouContractSlice: universityMouContractSlice,
    universityApplicationProcessSlice:universityApplicationProcessSlice,
    universityDocumentRequiredSlice:universityDocumentRequiredSlice,
    getAllMeetingsSlice:getAllMeetingsSlice,
    universityFinancialAgreementSlice:universityFinancialAgreementSlice,
    universityGuestVisitSlice:universityGuestVisitSlice,
    searchSlice:searchSlice,
  },
});
