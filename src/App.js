// file imports
import './App.css';

// react tools import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// component imports
import {HomePage} from './components/routes' // default home page
import {LoginPage} from './components/routes' // default home page
import {Error404} from './components/routes' // default home page
import {MouMaster} from './components/routes' // mou master


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/**/}
          {/*First landing page*/}
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/dashboard" element={<HomePage/>}/>
          <Route exact path="/mouMaster" element={<MouMaster/>}/>

          {/*When page not found*/}
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
