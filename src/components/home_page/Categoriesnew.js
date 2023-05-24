import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';


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
      <Card style={{ minWidth: 250, minHeight: 200 }}>
        
  <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",  marginRight: "30px" }}>
  <div style={{ backgroundColor: "#F07F1A", padding: "10px",height:55,width:55}}>
      <LeaderboardIcon fontSize="large"/>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" component="h5" style={{ marginLeft: "20px", marginTop: "20px" }}>
        Open Leads
      </Typography>
      <Typography align="center" variant="h3" component="h5" style={{ marginLeft: "30px", fontWeight: "bold" }}>
        100
      </Typography>
      <Button
        onClick={() => navigate("/openleads")}
        variant="contained"
        color="primary"
        style={{ marginLeft: "20px", marginTop: "20px",minWidth:100, minHeight: 40 }}
      >
        <Typography variant="h6" component="h2">
          View All
        </Typography>
      </Button>
    </div>
  </div>
</Card>

<Card style={{ minWidth: 250, minHeight: 200 }}>
        
        <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",  marginRight: "30px" }}>
        <div style={{ backgroundColor: "#F07F1A", padding: "10px",height:55,width:55}}>
      <HandshakeIcon  fontSize="large" />
    </div>
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
          </div>
        </Card>

        <Card style={{ minWidth: 250, minHeight: 200 }}>
        
  <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",  marginRight: "30px" }}>
  <div style={{ backgroundColor: "#F07F1A", padding: "10px",height:55,width:55}}>
      <AccountBalanceIcon fontSize="large" />
    </div>
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
          </div>
        </Card>

        <Card style={{ minWidth: 250, minHeight: 200 }}>
        <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",  marginRight: "30px" }}>
  <div style={{ backgroundColor: "#F07F1A", padding: "10px",height:55,width:55}}>
      <SchoolIcon  fontSize="large" />
    </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h2"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            Sem. Exchange
          </Typography>
          <Typography
            align="center"
            variant="h3"
            component="h5"
            style={{ marginLeft: '30px', fontWeight: 'bold' }}
          >
            {
              users.filter(
                (user) => user.studentDetails.optedFor === 'semester-exchange'
              ).length
            }
          </Typography>
          <Button
            onClick={() => navigate('/student_master?dp=semester-exchange')}
            variant="contained"
            color="primary"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            <Typography variant="h6" component="h2">
              View All
            </Typography>
          </Button>
        </div>
        </div>
        </Card>

        <Card style={{ minWidth: 250, minHeight: 200 }}>
        
        <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",  marginRight: "30px" }}>
        <div style={{ backgroundColor: "#F07F1A", padding: "10px",height:55,width:55}}>
      <RateReviewIcon fontSize="large" />
    </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h2"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            Country Master
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
            onClick={() => navigate('/countrymaster')}
            variant="contained"
            color="primary"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            <Typography variant="h6" component="h2">
              View All
            </Typography>
          </Button>
        </div>
        </div>
        </Card>
        <Card style={{ minWidth: 250, minHeight: 200 }}>
        
        <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between",  marginRight: "30px" }}>
        <div style={{ backgroundColor: "#F07F1A", padding: "10px",height:55,width:55}}>
      <ModelTrainingIcon fontSize="large"/>
    </div>
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
        </div>
       </Card>

      </div>
    </div>
  );
}
