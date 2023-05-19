import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Categoriesnew() {
  const navigate = useNavigate();

  const url = "https://sigma-lpu-vsbd9.ondigitalocean.app";
  const local = "http://localhost:5000";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(url + "/api/v2/user/getAllStudents", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setUsers(data && data.students);
      } catch (error) {
        alert(error && error.response.data.error);
      }
    }
    fetchUser();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom:"2rem"
        
        }}
      >
        <Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              component="h5"
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
              Open Leads
            </Typography>
            <Typography
              align="center"
              variant="h3"
              component="h5"
              style={{ marginLeft: "30px", fontWeight: "bold" }}
            >
              100
            </Typography>
            <Button
              onClick={() => navigate("/openLeads")}
              variant="contained"
              color="primary"
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
              <Typography variant="h6" component="h2">
                View All
              </Typography>
            </Button>
          </div>
        </Card>
        <Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              component="h5"
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
              Partner University
            </Typography>
            <Typography
              align="center"
              variant="h3"
              component="h5"
              style={{ marginLeft: "30px", fontWeight: "bold" }}
            >
              ....
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/mouMaster")}
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
              <Typography variant="h6" component="h2">
                View All
              </Typography>
            </Button>
          </div>
        </Card>

        <Card>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
              Credit Transfer
            </Typography>
            <Typography
              align="center"
              variant="h3"
              component="h5"
              style={{ marginLeft: "30px", fontWeight: "bold" }}
            >
              {
                users.filter(
                  (user) => user.studentDetails.optedFor === "credit-transfer"
                ).length
              }
            </Typography>
            <Button
              onClick={() => navigate("/student_master?dp=credit-transfer")}
              variant="contained"
              color="primary"
              style={{ marginLeft: "20px", marginTop: "20px" }}
            >
              <Typography variant="h6" component="h2">
                View All
              </Typography>
            </Button>
          </div>
        </Card>

        <Card>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h2"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            template section
          </Typography>
          <Typography
            align="center"
            variant="h3"
            component="h5"
            style={{ marginLeft: '30px', fontWeight: 'bold' }}
          >
            125
          </Typography>
          <Button
            onClick={() => navigate('/templates')}
            variant="contained"
            color="primary"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            <Typography variant="h6" component="h2">
              View All
            </Typography>
          </Button>
        </div>
        </Card>
       <Card>
       <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h2"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            Traning Modules
          </Typography>
          <Typography
            align="center"
            variant="h3"
            component="h5"
            style={{ marginLeft: '30px', fontWeight: 'bold' }}
          >
            125
          </Typography>
          <Button
            onClick={() => navigate('/training')}
            variant="contained"
            color="primary"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            <Typography variant="h6" component="h2">
              View All
            </Typography>
          </Button>
        </div>
       </Card>

      </div>
    </div>
  );
}
