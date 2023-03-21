import React, { useState } from 'react';

import { NavSideBarLayout } from '../../routes';
import ProgressBar from './ProgressBar';
import arrow from './arrow.svg';
import { Box } from '@mui/material';
import StudentNotes from './StudentNotes';
import StudentProfileBasic from './StudentProfileBasic';
import StudentProfileStep from './StudentProfileStep';
import StudentProfileMain from './StudentProfileMain';

export default function StudentProfile(props) {
  return (
    <div>
      <NavSideBarLayout childCSS={{ marginTop: '4rem' }}>
        <div className="App">{/* <ProgressBar /> */}</div>

        <Box
          display="grid"
          gap="20px"
          gridTemplateAreas={`
          'steps steps steps'
          'basic basic notes'
          'main  main   notes'  
          'main  main  notes'            
        `}
        >
          <StudentProfileStep />
          <StudentProfileBasic data={[]} />
          <StudentNotes
            data={[
              {
                _id: 1,
                value: 'Note 1',
              },
              {
                _id: 2,
                value: 'Note 2',
              },
            ]}
          />
          <StudentProfileMain />
        </Box>
      </NavSideBarLayout>
    </div>
  );
}
