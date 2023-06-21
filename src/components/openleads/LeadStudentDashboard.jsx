import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  Typography,
  useTheme,
} from "@mui/material";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LeadStudentDashboard = () => {
  const theme = useTheme();

  const [interestedStudents, setInterestedStudents] = useState([]);
  const [open, setOpen] = React.useState(false);

  const [selectedStudent, setSelectedStudent] = useState({});

  const handleClickOpen = (student) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   const url = "http://localhost:5000";
  const url = "https://sigma-lpu-vsbd9.ondigitalocean.app";

  useEffect(() => {
    const getInterestedStudents = async () => {
      try {
        const response = await axios.get(
          `${url}/api/v2/interestedStudent/all`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setInterestedStudents(response.data);
      } catch (error) {
        alert(error.message || "Something went wrong");
      }
    };

    getInterestedStudents();
  }, []);

  // Transform the data to count the number of students created on each date
  const transformedData = interestedStudents.reduce((acc, student) => {
    const createdAt = student.createdAt.split("T")[0]; // Extract the date portion from createdAt
    if (acc[createdAt]) {
      acc[createdAt] += 1; // Increment the count for the date if it already exists
    } else {
      acc[createdAt] = 1; // Initialize the count for the date if it doesn't exist
    }
    return acc;
  }, {});

  // Convert the transformed data object into an array of objects with 'date' and 'count' properties
  const chartData = Object.keys(transformedData).map((date) => ({
    date,
    count: transformedData[date],
  }));

  const [columns, setColumns] = useState([
    {
      field: "name",
      headerName: "Name",
      width: 200,
      cellClassName: "name-column--cell",
      valueGetter: (params) => {
        return params.row.name ? params.row.name : "none";
      },
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <b>{params.row.name}</b>
            <Chip label={params.row.status} color="primary" />
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",

      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      valueGetter: (params) => {
        return params.row.phone ? params.row.phone : "none";
      },

      width: 200,
      renderCell: (params) => {
        return <a href={`tel:${params.row.phone}`}>{params.row.phone}</a>;
      },
    },
    {
      field: "whatsapp",

      headerName: "Whatsapp Number",

      width: 200,
      valueGetter: (params) => {
        return params.row.whatsapp ? params.row.whatsapp : "none";
      },

      renderCell: (params) => {
        return (
          <a href={`http://wa.me/${params.row.whatsapp}`}>
            {params.row.whatsapp}
          </a>
        );
      },
    },
    {
      field: "gender",
      headerName: "Gender",
    },
    {
      field: "nationality",
      headerName: "Nationality",

      width: 200,
    },

    {
      field: "optedFor",
      headerName: "Opted For",

      width: 200,
    },
    {
      field: "currentCourse",
      headerName: "Course",
      width: 200,
    },
    {
      field: "currentSemester",
      headerName: "Semester",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Registered At",
      width: 200,
      valueGetter: (params) => {
        return params.row.createdAt ? params.row.createdAt.split("T")[0] : "";
      },
    },
    {
      field: "assignedTo",
      headerName: "Assigned To",
      width: 200,
      valueGetter: (params) => {
        return params.row.assignedTo ? params.row.assignedTo : "none";
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      valueGetter: (params) => {
        return params.row.status ? params.row.status : "none";
      },
    },

    {
      field: "remarks",
      headerName: "Remarks",
      width: 250,

      valueGetter: (params) => {
        return params.row.remarks ? params.row.remarks : "none";
      },
      renderCell: (params) => {
        return (
          <textarea
            style={{
              minWidth: "100%",
              height: "100%",
              border: "none",
              resize: "none",
              overflow: "hidden",
            }}
            value={params.row.remarks}
          />
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                handleClickOpen(params.row);
              }}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                alert("Not have enough permission to delete");
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ]);

  return (
    <div>
      <h1>Lead Student Dashboard</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Box
          backgroundColor={theme.palette.mode === "dark" ? "#333" : "#f5f5f5"}
          p="30px"
          height={"350px"}
          minWidth={"50vw"}
        >
          <Typography variant="h6" gutterBottom>
            Student Registered By Date
          </Typography>

          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </div>

      <div>
        <Box
          style={{ height: 800, width: "100%", margin: "50px 0" }}
          sx={{
            "& .MuiDataGrid-row": {
              cursor: "pointer",
            },

            "& .MuiDataGrid-row:hover": {
              backgroundColor: "rgb(245, 248, 250)",
            },

            "& .MuiDataGrid-columnsContainer": {
              backgroundColor: "rgb(245, 248, 250)",
            },

            "& .MuiDataGrid-iconSeparator": {
              display: "none",
            },

            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 600,
              fontSize: "1rem",
            },

            "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
              borderRight: "1px solid rgba(224, 224, 224, 1)",
            },

            "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
            },

            "& .MuiDataGrid-cell": {
              color: "#1a3e72",
            },

            "& .MuiPaginationItem-root": {
              borderRadius: 0,
            },

            "& .MuiDataGrid-root": {
              boxShadow: "none",
            },

            "& .MuiDataGrid-toolbar": {},

            "& .MuiDataGrid-selectedRowCount": {
              display: "none",
            },

            "& .MuiDataGrid-toolbarContainer": {},

            "& .MuiToolbar-root": {},

            "& .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },

            "& .MuiDataGrid-columnHeader:focus-within": {
              outline: "none",
            },
            // in grid toolbar columns the switch and the name merge together so this is to fix that
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <DataGrid
            rows={interestedStudents}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row._id}
            rowHeight={150}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ></DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadStudentDashboard;
