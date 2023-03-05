import * as React from 'react';
import { useState } from "react";

function Form(){
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };  
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  
  return(
    <div style={{marginLeft: "4rem"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <label style={{marginBottom: "5px", fontWeight: "600"}} htmlFor="option-select">Type Of Document</label>
          <select id="option-select" style={{width: "40rem", height: "2rem", borderRadius: "8px", border: "1px solid #f07F1A"}} value={selectedOption} onChange={handleOptionChange}>
            <option value={'Option 1'}>Bank Payment slip</option>
            <option value={'Option 2'}>current account balance</option>
            <option value={'Option 3'}>loan Document</option>
          </select>
        </div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "4rem"}}>
          <label style={{marginBottom: "5px", fontWeight: "600"}} htmlFor="date-input">Select a date:</label>
          <input id="date-input" style={{width: "11rem", height: "2rem", borderRadius: "8px", border: "1px solid #f07F1A", marginLeft: "1rem"}} type="date" value={selectedDate} onChange={(event) => handleDateChange(event.target.value)} />
        </div>
      </div>
      <div>
        <label style={{margin: "0", padding: "0"}} htmlFor="file-upload">Choose a file:</label>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <input style={{height: "1.4rem", borderRadius: "8px", border: "2px solid #f07F1A"}} type="text" id="file-upload" value={selectedFile ? selectedFile.name : ''} placeholder="No file chosen" readOnly />
          <input style={{marginLeft: "1rem"}} type="file" id="file-input" onChange={handleFileChange} />
        </div>
      </div>
      <button style={{marginTop: "3rem", marginLeft: "22rem", width: "160px", height: "44px", backgroundColor: "#f07F1A", borderRadius: "8px", border: "none", cursor: "pointer"}}>upload</button>
    </div>
  );
}

export default Form;
