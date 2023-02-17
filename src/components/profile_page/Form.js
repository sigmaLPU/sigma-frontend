import React, { useState } from "react";
import "./Form.css";

function Form({onSubmit}) {
  const [showForm, setShowForm] = useState(false);
  const [uid, setUid] = useState('');
  const [nationality, setNationality] = useState('');

  const handleClick = () => {
    setShowForm(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ uid, nationality });
  };
  
  return (
    <div className="Form">
      <button className="editbutton" onClick={handleClick}>Edit Profile</button>
      {showForm && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <p className="heading">Edit Profile</p>
          <div className="user-info-row" style={{display:'flex'}}>
          <div className="user-info-left" style={{width: '50%', textAlign: 'left'}}>
            <label>
              UID 
              <input type="text" value={uid} onChange={(event) => setUid(event.target.value)} />
            </label>
            <br />
            <br />
            <label>
              Nationality
              <input type="text" value={nationality} onChange={(event) => setNationality(event.target.value)} />
            </label>
            <br />
            <br />
            <label>
                Gender 
                <select name = "dropdown">
            <option value = "Computer Architecture" selected>Male</option>
            <option value = "Java">Female</option>
            <option value = "Discrete Mathematics">Other</option>
         </select>
            </label>
            <br />
            <br />
            <label>
             D.O.B
              <input type="date" />
            </label>
            <br />
            <br />
            <label>
              Phone Number
              <input type="number" />
            </label>
            <br />
            <br />
            <label>
              Email id 
              <input type="text " />
            </label>
          
            
            </div>
         
            
          </div>
          <button className="close" onClick={() => setShowForm(false)}>Close</button>
          <button className="submit" type="submit">Submit</button>

          </form>
        </div>
      )}
    </div>
  );
}

export default Form;
