import * as React from 'react';
import { useState } from "react";
import './Form.css'


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
        <div className='main' style={{ marginleft:'4rem'}}>
        <div className="form-container" style={{  display: 'flex',
    flexdirection: 'row',
    alignitems: 'center'}}>
            <div className='inputfield1'>
      <label className="form-label" htmlFor="option-select">Type Of Document</label>
      <select id="option-select" className="form-input1" value={selectedOption} onChange={handleOptionChange}>
        <option value={'Option 1'}>Bank Payment slip</option>
        <option value={'Option 2'}>current account balance</option>
        <option value={'Option 3'}>loan Document</option>
      </select>
      </div>
      <div className='inputfield2'>
      <label className="form-label" htmlFor="date-input">Select a date:</label>
      <input id="date-input" className="form-input2" type="date" value={selectedDate} onChange={(event) => handleDateChange(event.target.value)} />
    </div>
    </div>
    <div>
      <label className='form-label' htmlFor="file-upload">Choose a file:</label>
      <div className="file-input-container">
        <input
        className='form-input3'
          type="text"
          id="file-upload"
          value={selectedFile ? selectedFile.name : ''}
          placeholder="No file chosen"
          readOnly
        />
       
       
          <input className='input-button' type="file" id="file-input" onChange={handleFileChange} />
        
      </div>
    </div>
    <button className='upload-button'>upload</button>
    </div>

    );
}

export default Form;