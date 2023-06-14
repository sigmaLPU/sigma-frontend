import React, { useState } from "react";
import banner from "./banner2.gif";
import world from "../home_page/resource/world.jpg";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    email: "",
    phoneNumber: "",
    whatsAppNumber: "",
    studyAbroadOption: "",
    currentCourse: "",
    currentSemester: "",
    passingOutYear: "",

  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div
     
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <img
          src={world}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(3px)",
          }}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <style>
          {`
            @media (max-width: 600px) {
              img {
                width: 100% !important;
                height: auto;
              }

              .field {
                width: 86% !important;
              }
            }
          `}
        </style>
        <img
          src={banner}
          style={{
            position: "sticky",
            height: "auto",
            width: "45vw",
            maxWidth: "100%",
            maxHeight: "30vh",
            borderRadius: "10px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
          }}
          alt="Banner"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <form style={{ width: "100%" }} onSubmit={handleFormSubmit}>
          <TextField
            
            className="field"
            label="Name"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            className="field"
            label="Registration Number"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
          />
          <TextField
            className="field"
            label="Email ID"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            className="field"
            label="Phone Number"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <TextField
            className="field"
            label="WhatsApp Number"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
            name="whatsAppNumber"
            value={formData.whatsAppNumber}
            onChange={handleChange}
          />

          <FormControl
            className="field"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
          >
            <InputLabel>Study Abroad Option</InputLabel>
            <Select
              label="Study Abroad Option"
              name="studyAbroadOption"
              value={formData.studyAbroadOption}
              onChange={handleChange}
            >
              <MenuItem value="Semester Exchange">semester Exchange</MenuItem>
              <MenuItem value="Credit Transfer">credit Transfer</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fontweight="bold"
            className="field "
            label="Current Course"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
            name="currentCourse"
            value={formData.currentCourse}
            onChange={handleChange}
          />
          <TextField
            className="field"
            label="Current Semester"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
            name="currentSemester"
            value={formData.currentSemester}
            onChange={handleChange}
          />
          <TextField
            className="field"
            label="Passing Out Year"
            variant="outlined"
            margin="normal"
            style={{ width: "45%" }}
            name="passingOutYear"
            value={formData.passingOutYear}
            onChange={handleChange}
          />
          <Button
            className="field"
            variant="contained"
            //color="primary"
            size="large"
            style={{
              width: "45%",
              marginTop: "20px",
              backgroundColor: "orange",
              borderRadius: "10px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
