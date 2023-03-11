import React, { useState } from "react";

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

    
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <label style={{ marginRight: "1rem" }}>
            Financial Budget:
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              style={{ marginLeft: "0.5rem" }}
            >
              <option value="">Select your budget range</option>
              <option value="Less than $10,000">Less than $10,000</option>
              <option value="$10,000 - $20,000">$10,000 - $20,000</option>
              <option value="$20,000 - $30,000">$20,000 - $30,000</option>
              <option value="More than $30,000">More than $30,000</option>
            </select>
          </label>

          <label style={{ marginLeft: "1rem" }}>
            Study Abroad Options:
            <select
              name="studyAbroadOptions"
              value={formData.studyAbroadOptions}
              onChange={handleInputChange}
              style={{ marginLeft: "0.5rem" }}
            >
              <option value="">Select your study abroad options</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Diploma/Certificate">Diploma/Certificate</option>
            </select>
          </label>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <label style={{ marginRight: "1rem" }}>
            Current Semester/Year:
            <select
              name="currentSemester"
              value={formData.currentSemester}
              onChange={handleInputChange}
              style={{ marginLeft: "0.5rem" }}
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

          <label style={{ marginLeft: "1rem" }}>
            Year of Graduation:
            <select
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleInputChange
              }
              style={{ marginLeft: "0.5rem" }}
              >
              <option value="">Select your graduation year</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              </select>
              </label>
              </div>
              <br />
              <div style={{ display: "flex" }}>
              <label style={{ marginRight: "1rem" }}>
              Current CGPA:
              <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleInputChange}
              placeholder="Enter your current CGPA"
              style={{ marginLeft: "0.5rem" }}
              />
              </label>
              <label style={{ marginLeft: "1rem" }}>
        LPU Programme:
        <select
          name="lpuProgramme"
          value={formData.lpuProgramme}
          onChange={handleInputChange}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="">Select your LPU Programme</option>
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
    <div style={{ display: "flex" }}>
      <label style={{ marginRight: "1rem" }}>
        Country:
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="">Select your country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
          <option value="New Zealand">New Zealand</option>
        </select>
      </label>

      <label style={{ marginLeft: "1rem" }}>
        University:
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleInputChange}
          placeholder="Enter your preferred university"
          style={{ marginLeft: "0.5rem" }}
        />
      </label>
    </div>
    <br />
    <div style={{ display: "flex" }}>
      <label style={{ marginRight: "1rem" }}>
        University Programme:
        <input
          type="text"
          name="universityProgramme"
          value={formData.universityProgramme}
          onChange={handleInputChange}
          placeholder="Enter your preferred university programme"
          style={{ marginLeft: "0.5rem" }}
        />
      </label>
    </div>
    <br />
    
    <button type="submit">Submit</button>
   

  </form>
</div>
);
}

export default MyForm1;
