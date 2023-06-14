import React from "react";
import banner from "./banner2.gif";
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
  return (
    <div>
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
            height: "auto",
            width: "50vw",
            maxWidth: "100%",
            maxHeight: "30vh",
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
        <TextField
          className="field"
          label="Name"
          variant="outlined"
          margin="normal"
          style={{ width: "45%" }}
        />
        <TextField
          className="field"
          label="Registration Number"
          variant="outlined"
          margin="normal"
          style={{ width: "45%" }}
        />
        <TextField
          className="field"
          label="Email ID"
          variant="outlined"
          margin="normal"
          style={{ width: "45%" }}
        />
        <FormControl
          className="field"
          variant="outlined"
          margin="normal"
          style={{ width: "45%" }}
        >
          <InputLabel>Study Abroad Option</InputLabel>
          <Select label="Study Abroad Option">
            <MenuItem value="option1">semester Exchange</MenuItem>
            <MenuItem value="option2">credit Transfer</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="field"
          label="Current Course"
          variant="outlined"
          margin="normal"
          style={{ width: "45%" }}
        />
        <TextField
          className="field"
          label="Current Semester"
          variant="outlined"
          margin="normal"
          style={{ width: "45%" }}
        />
        <TextField
          className="field"
          label="Passing Out Year"
          variant="outlined"
          margin="normal"
          style={{ width: "45%" }}
        />
        <Button
          className="field"
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "45%", marginTop: "20px" }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}
