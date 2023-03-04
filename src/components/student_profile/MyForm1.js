import React, { useState } from "react";
import './MyForm1.css'

function MyForm1() {
  const [formData, setFormData] = useState({
    budget: "",
    studyAbroadOptions: "",
    currentSemester: "",
    graduationYear: "",
    cgpa: "",
    lpuProgramme: "",
    country: "",
    university: "",
    universityProgramme: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="main1">
    <form onSubmit={handleSubmit}>
        <div className="formfor1" style={{display:'flex'}}>
      <label className="rightdata">
        Financial Budget:
        <select
          name="budget"
          value={formData.budget}
          onChange={handleInputChange}
        >
          <option value="">Select your budget range</option>
          <option value="Less than $10,000">Less than $10,000</option>
          <option value="$10,000 - $20,000">$10,000 - $20,000</option>
          <option value="$20,000 - $30,000">$20,000 - $30,000</option>
          <option value="More than $30,000">More than $30,000</option>
        </select>
      </label>
      
      <label className="leftdata1">
        Study Abroad Options:
        <select
          name="studyAbroadOptions"
          value={formData.studyAbroadOptions}
          onChange={handleInputChange}
        >
          <option value="">Select your study abroad options</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="Diploma/Certificate">Diploma/Certificate</option>
        </select>
      </label>
      </div>
      <br />
      <div className="formfor2" style={{display:'flex'}}>
      <label  className="rightdata">
        Current Semester/Year:
        <select
          name="currentSemester"
          value={formData.currentSemester}
          onChange={handleInputChange}
        >
          <option value="">Select your current semester/year</option>
          <option value="1st Semester">1st Semester</option>
          <option value="2nd Semester">2nd Semester</option>
          <option value="3rd Semester">3rd Semester</option>
          <option value="4th Semester">4th Semester</option>
          <option value="5th Semester">5th Semester</option>
          <option value="6th Semester">6th Semester</option>
          <option value="7th Semester">7th Semester</option>
          <option value="8th Semester">8th Semester</option>
        </select>
      </label>
     
      <label className="leftdata2">
        Year of Graduation:
        <select
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleInputChange}
        >
          <option value="">Select your year of graduation</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </label>
      </div>
      <br />
      <div className="formfor3" style={{display:'flex'}}>
      <label  className="rightdata">
        CGPA:
        <select name="cgpa" value={formData.cgpa} onChange={handleInputChange}>
          <option value="">Select your CGPA</option>
<option value="less than 2.0">less than 2.0</option>
<option value="2.0 - 2.5">2.0 - 2.5</option>
<option value="2.5 - 3.0">2.5 - 3.0</option>
<option value="3.0 - 3.5">3.0 - 3.5</option>
<option value="3.5 - 4.0">3.5 - 4.0</option>
</select>
</label>
<br />
<label className="leftdata3">
Programme at LPU:
<select
       name="lpuProgramme"
       value={formData.lpuProgramme}
       onChange={handleInputChange}
     >
<option value="">Select your programme at LPU</option>
<option value="B.Tech">B.Tech</option>
<option value="M.Tech">M.Tech</option>
<option value="BBA">BBA</option>
<option value="MBA">MBA</option>
<option value="BCA">BCA</option>
<option value="MCA">MCA</option>
</select>
</label>
</div>
<br />
<div className="formfor4" style={{display:"flex"}}>
<label  className="rightdata">
Select Your Country:
<select
       name="country"
       value={formData.country}
       onChange={handleInputChange}
     >
<option value="">Select your country</option>
<option value="India">India</option>
<option value="USA">USA</option>
<option value="Canada">Canada</option>
<option value="Australia">Australia</option>
<option value="UK">UK</option>
</select>
</label>
<br />
<label className="leftdata4">
Select your University:
<select
       name="university"
       value={formData.university}
       onChange={handleInputChange}
     >
<option value="">Select your university</option>
<option value="Harvard University">Harvard University</option>
<option value="Stanford University">Stanford University</option>
<option value="Massachusetts Institute of Technology">
Massachusetts Institute of Technology
</option>
<option value="University of Cambridge">University of Cambridge</option>
<option value="University of Oxford">University of Oxford</option>
</select>
</label>
</div>
<br />
<div className="formfor5">
<label  className="rightdata">
Programme at selected University:
<select
       name="universityProgramme"
       value={formData.universityProgramme}
       onChange={handleInputChange}
     >
<option value="">Select your programme at selected university</option>
<option value="Computer Science">Computer Science</option>
<option value="Engineering">Engineering</option>
<option value="Business Administration">
Business Administration
</option>
<option value="Medical Science">Medical Science</option>
<option value="Law">Law</option>
</select>
</label>
<br />
</div>

<button className="submit1" type="submit">Approve</button>


</form>
</div>
);
}

export default MyForm1;
