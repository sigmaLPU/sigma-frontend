import React, { useEffect } from "react";
import pic from "./ppic.jpg";
import call from "./call.png";
import whatsapp from "./whatsapp.png";
import email from "./email.png";
import { Box, Button, Modal } from "@mui/material";
import Form from "./Form";
import { useState } from "react";
import axios from "axios";

export default function Staff() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';


  useEffect(() => {
    axios
      .get(url + '/api/v2/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #ccc",
          overflow: "hidden",
          maxWidth: "25vw",
          height: "100vh",
          width: "30vw",
          borderRight: "2px solid #F07F1A",
        }}
      >
        <div style={{ marginTop: "8rem" }}>
          <img
            style={{
              position: "absolute",
              width: "1.5vw",
              height: "3vh",
              top: "28rem",
              left: "13.5rem",
            }}
            src={email}
          />
          <img
            style={{
              position: "absolute",
              width: "1.5vw",
              height: "3vh",
              top: "28rem",
              left: "16.5rem",
            }}
            src={whatsapp}
          />
          <img
            style={{
              position: "absolute",
              width: "1.3vw",
              height: "2.7 vh",
              top: "28rem",
              left: "19.5rem",
            }}
            src={call}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                marginTop: "5rem",
              }}
            >
              <img
                src={pic}
                style={{
                  width: "60%",
                  height: "auto",
                  marginLeft: "5rem",
                  borderRadius: "50%",
                  border: "5px solid #F07F1A",
                }}
              />
              <div style={{ marginLeft: "5rem", marginTop: "1rem" }}>
                <h3 style={{ marginBottom: "0px" }}>{user?.name}</h3>
                <p style={{ marginLeft: "1.1rem" }}>Trainee intern</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div
          style={{
            position: "absolute",
            top: "10vh",
            left: "83vw",
            display: "flex",
            justifyContent: "space-between",
            width: "auto",
          }}
        >
          <button
            style={{
              color: "#F07F1A",
              padding: "10px 15px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
              marginRight: "30px",
              width: "9vw",
            }}
          >
            Reset Password
          </button>
          <button
            style={{
              background: "rgba(0, 0, 0, 0.25)",
              color: "black",
              padding: "10px 15px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Logout
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            borderRadius: "10px",
            width: "55vw",
            height: "45vh",
            marginLeft: "11rem",
            marginTop: "10rem",
            boxShadow: "0px 4px 4px #F07F1A, 4px 0px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          

          <div className="user-info">
            <div
              style={{
                display: "flex",
                marginTop: "100px",
                marginRight: "70px",
              }}
            >
              <div
                style={{
                  width: "50%",
                  textAlign: "left",
                  justifyContent: "flex-start",
                  marginLeft: "4vw",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "1vw",
                    marginLeft: "9.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  Basic Information
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "30%",
                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    UID
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                    {user?.regNo}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "30%",
                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Nationality
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                    {" "}
                    {user?.nationality && user?.nationality}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "30%",
                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Gender
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                    {" "}
                    {user?.gender && user?.gender}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "30%",
                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    D.O.B
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                    {" "}
                    {user?.dob && user?.dob}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "30%",
                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Phone Number
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                    {" "}
                    {user?.phone && user?.phone}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      display: "flex",
                      textAlign: "left",
                      width: "30%",
                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Email-Id
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                   {user?.email}
                  </span>
                </p>
              </div>

              <hr className="line" style={{ marginRight: "1rem" }}></hr>

              <div
                style={{
                  width: "50%",
                  textAlign: "left",
                  justifyContent: "flex-end",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "1vw",
                    marginLeft: "9rem",
                    marginBottom: "2rem",
                  }}
                >
                  Official Information
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      width: "45%",
                      display: "flex",
                      textAlign: "left",

                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    LPU Joining date
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                     {user?.ljoining}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                    display: "flex",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      width: "45%",
                      display: "flex",
                      textAlign: "left",

                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Team Joining Date
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                     {user?.tjoining}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      width: "45%",
                      display: "flex",
                      textAlign: "left",

                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Phone Assigned date
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                    {" "}
                    {user?.phassign}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      width: "45%",
                      display: "flex",
                      textAlign: "left",

                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Phone Model
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                   {user?.phmodel}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      width: "45%",
                      display: "flex",
                      textAlign: "left",
                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Off. Phone number
                  </span>

                  <span
                    className="colon"
                    style={{ width: "10%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                    {user?.offphone}
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <span
                    className="leftdata"
                    style={{
                      width: "43%",
                      display: "flex",
                      textAlign: "left",
                      marginBottom: "1rem",
                      fontSize: "0.9vw",
                      fontWeight: "700",
                    }}
                  >
                    Official Email id
                  </span>

                  <span
                    className="colon"
                    style={{ width: "9%", marginBottom: "1rem" }}
                  >
                    :
                  </span>
                  <span
                    className="value"
                    style={{
                      maxWidth: "0",
                      marginBottom: "1rem",
                      fontSize: "0.8vw",
                    }}
                  >
                    {" "}
                    {user?.offemail}
                  </span>
                </p>
              </div>
            </div>
           
          </div>
          {/* <div style={{ margin: "50px" }}></div> */}
          <div style={{ margin: '40px' }}>
              {/* <Form user={user} setUser={setUser} /> */}
              <Button onClick={handleOpen}
                variant="outlined"
               
              >Edit Profile</Button>
          
            </div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-modal-title" style={{
            textAlign: 'center',
            marginBottom: '20px',
          }}>Edit Profile</h2>
          <Form user={user} setUser={setUser} />
        </Box>
      </Modal>
        
        </div>
      </div>
    </div>
  );
}
