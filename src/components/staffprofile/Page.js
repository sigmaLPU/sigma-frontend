import './Sideprofile'
import './App.css';
import Sideprofile from './Sideprofile';
import UserInfo from './UserInfo';



function Page() {
  return (
    <div className="page" style={{display:'flex' }}>
    <Sideprofile/>
   <UserInfo/>
   


    </div>
  );
}

export default Page;