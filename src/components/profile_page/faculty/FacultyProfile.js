import './Sideprofile';
import Sideprofile from './Sideprofile';
import UserInfo from './UserInfo';
import './Sideprofile.css'

function FacultyInfo() {
  return (
    <div className="App">
      <div className="page" style={{ display: 'flex' }}>
        <Sideprofile />
        <UserInfo />
      </div>
    </div>
  );
}

export default FacultyInfo;
