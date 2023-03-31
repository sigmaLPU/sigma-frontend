import { Upload } from '@mui/icons-material';
import { Alert, AlertTitle, Box, IconButton } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Tab2 = () => {
  const params = useParams();

  const [student, setStudent] = React.useState({});

  const [passport, setPassport] = React.useState({});
  const [cv, setCv] = React.useState({});
  const [provitionalTranscript, setProvitionalTranscript] = React.useState({});
  const [tenthCertificate, setTenthCertificate] = React.useState({});
  const [twelfthCertificate, setTwelfthCertificate] = React.useState({});

  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant, message) => () => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    axios
      .get(
        `${url}/api/v2/user/student/${params.id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setStudent(res.data.student);
      })
      .catch((err) => {
        handleClickVariant('error', 'Error')();
      });
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('passport', passport);
    formData.append('cv', cv);
    formData.append('provitionalTranscript', provitionalTranscript);
    formData.append('tenthCertificate', tenthCertificate);
    formData.append('twelfthCertificate', twelfthCertificate);

    try {
      const res = await axios.put(
        `${url}/api/v2/user/student/${params.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      handleClickVariant('success', 'File Uploaded')();
      window.location.reload();
    } catch (err) {
      handleClickVariant('error', 'Error')();
    }
  };

  return (
    <div>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="30px"
        justifyContent="space-between"
        flexDirection="column"
        width="650px"
        style={{
          margin: 'auto',
          height: '100%',
        }}
      >
        <Alert severity="error">
          <AlertTitle>Passport</AlertTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            minWidth="650px"
            alignItems="center"
          >
            {student?.studentDetails?.passport?.file?.f_url && (
              <a href={student?.studentDetails?.passport?.file?.f_url}>
                Download Passport
              </a>
            )}

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => setPassport(e.target.files[0])}
                />
                <IconButton float="right" type="submit">
                  <Upload />
                </IconButton>
              </div>
            </form>
          </Box>
        </Alert>
        <Alert severity="error">
          <AlertTitle>CV</AlertTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            minWidth="650px"
            alignItems="center"
          >
            {student?.studentDetails?.cv?.file?.f_url && (
              <a href={student?.studentDetails?.cv?.file?.f_url}>Download CV</a>
            )}

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => setCv(e.target.files[0])}
                />
                <IconButton float="right" type="submit">
                  <Upload />
                </IconButton>
              </div>
            </form>
          </Box>
        </Alert>
        <Alert severity="error">
          <AlertTitle>Provitional Transcript</AlertTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            minWidth="650px"
            alignItems="center"
          >
            {student?.studentDetails?.provitionalTranscript?.file?.f_url && (
              <a
                href={
                  student?.studentDetails?.provitionalTranscript?.file?.f_url
                }
              >
                Download Provitional Transcript
              </a>
            )}

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => setProvitionalTranscript(e.target.files[0])}
                />
                <IconButton float="right" type="submit">
                  <Upload />
                </IconButton>
              </div>
            </form>
          </Box>
        </Alert>
        <Alert severity="error">
          <AlertTitle>10th Certificate</AlertTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            minWidth="650px"
            alignItems="center"
          >
            {student?.studentDetails?.tenthCertificate?.file?.f_url && (
              <a href={student?.studentDetails?.tenthCertificate?.file?.f_url}>
                Download 10th Certificate
              </a>
            )}

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => setTenthCertificate(e.target.files[0])}
                />
                <IconButton float="right" type="submit">
                  <Upload />
                </IconButton>
              </div>
            </form>
          </Box>
        </Alert>
        <Alert severity="error">
          <AlertTitle>12th Certificate</AlertTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            minWidth="650px"
            alignItems="center"
          >
            {student?.studentDetails?.twelfthCertificate?.file?.f_url && (
              <a
                href={student?.studentDetails?.twelfthCertificate?.file?.f_url}
              >
                Download 12th Certificate
              </a>
            )}

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => setTwelfthCertificate(e.target.files[0])}
                />
                <IconButton float="right" type="submit">
                  <Upload />
                </IconButton>
              </div>
            </form>
          </Box>
        </Alert>
      </Box>
    </div>
  );
};

export default Tab2;
