import { Upload } from '@mui/icons-material';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Tab6 = () => {
  const params = useParams();

  const [student, setStudent] = React.useState({});

  const [visa, setVisa] = React.useState(null);
  const [foriegnUniPic, setForiegnUniPic] = React.useState(null);

//   const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  const url = 'http://localhost:5000';

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
        handleClickVariant('error', 'Error' + err)();
      });
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('foriegnUniPic', foriegnUniPic);

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
      >
        <Card
          sx={{
            display: 'flex',
            height: '200px',
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Foriegn University Picture With Student
              </Typography>
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
                    onChange={(e) => setForiegnUniPic(e.target.files[0])}
                  />
                  <IconButton float="right" type="submit">
                    <Upload />
                  </IconButton>
                </div>
              </form>

              {student?.studentDetails?.foriegnUniPic?.file?.f_url ? (
                <p style={{ color: 'green' }}>File Uploaded</p>
              ) : (
                <p style={{ color: 'red' }}>No File Uploaded</p>
              )}
            </CardContent>
          </Box>
          <CardMedia component="div">
            {student?.studentDetails?.foriegnUniPic?.file?.f_url ? (
                <img
                    src={student?.studentDetails?.foriegnUniPic?.file?.f_url}
                    alt="foriegnUniPic"
                    style={{ width: '100%', height: '100%' }}
                />
            ) : (
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    No File Uploaded
                </Alert>
            )}
          
          </CardMedia>
        </Card>
      </Box>
    </div>
  );
};

export default Tab6;
