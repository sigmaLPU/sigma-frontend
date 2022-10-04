// file imports
import './App.css';

// react tools import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useEffect} from 'react'
// component imports
import {HomePage} from './components/routes' // default home page
import {LoginPage} from './components/routes' // default home page
import {Error404} from './components/routes' // default home page
import {MouMaster} from './components/routes' // mou master
import {UniversityProfile} from './components/routes' // UniversityProfile
import {MeetingProfile} from './components/routes' // MeetingProfile
import {MeetingMaster} from './components/routes' // Meeting Master
import {ResetPassword,ResetRequest} from './components/routes' // reset password
import ProtectedRoute, {ProtectedRouteResetPassword} from './ProtectedRoute'
import {TrainingDashboard,CreditTransferTraining} from './components/routes'

// redux
import { authenticateTokenReducer, authUserReducer } from './redux/users/authenticateToken'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/**/}
          {/*First landing page*/}
          <Route exact path="/" element={<LoginPage/>}/>

          <Route exact path="/reset" element={<ResetRequest/>} />
          <Route path="/api/v2/user/resetUserPassword/:id" element={<ProtectedRouteResetPassword><ResetPassword/></ProtectedRouteResetPassword>} />

          {/*Protected route*/}
          <Route exact path="/dashboard" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
          <Route exact path="/mouMaster" element={<ProtectedRoute><MouMaster/></ProtectedRoute>}/>
          <Route path="/university/:id" element={<ProtectedRoute><UniversityProfile/></ProtectedRoute>}/>
          <Route path="/meeting/:id" element={<ProtectedRoute><MeetingProfile/></ProtectedRoute>}/>
          
          <Route path="/meeting" element={<ProtectedRoute><MeetingMaster/></ProtectedRoute>}/>
          
          <Route path="/training" element={<ProtectedRoute><TrainingDashboard/></ProtectedRoute>}/>
          <Route path="/training/creditTransfer" element={<ProtectedRoute><CreditTransferTraining/></ProtectedRoute>}/>



          {/*When page not found*/}
          <Route path="*" element={<Error404/>}/>
          <Route path="/404" element={<Error404/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
