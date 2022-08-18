// file imports
import './App.css';

// react tools import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// component imports
import HomePage from './components/default_pages/HomePage' // default home page
import Error404 from './components/default_pages/errors/Error404' // default home page

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/**/}
          {/*Home page*/}
          <Route exact path="/" element={<HomePage/>}/>

          {/*When page not found*/}
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
