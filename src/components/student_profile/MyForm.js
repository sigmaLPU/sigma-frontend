import React, { useState } from "react";
import './MyForm.css'

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    email: "",
    registrationNo: "",
    passport: "",
    phoneNo: "",
    whatsappNo: ""
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
    <form className="perform" onSubmit={handleSubmit}>
      <div style={{display:'flex',}}>
      <label className="rightdata">
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label className="leftdata1">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <br />
      <div style={{display:"flex",}}>
      <label  className="rightdata">
        Father Name:
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label  className="leftdata1">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <br />
      <div style={{display:'flex'}}>
      <label  className="rightdata">
        Registration No.:
        <input
          type="text"
          name="registrationNo"
          value={formData.registrationNo}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label  className="leftdata1">
        Passport:
        <input
          type="text"
          name="passport"
          value={formData.passport}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <br />
      <div style={{display:'flex'}}>
      <label  className="rightdata">
        Phone No.:
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label  className="leftdata1">
        Whatsapp No.:
        <input
          type="text"
          name="whatsappNo"
          value={formData.whatsappNo}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <br />
      <button className="submit2" type="submit">Save</button>
    </form>
  );
}
export default MyForm;
