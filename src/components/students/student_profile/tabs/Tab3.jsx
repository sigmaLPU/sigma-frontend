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

const Tab3 = () => {
  const params = useParams();
  const lpuProcessingFeesRef = React.useRef(null);

  const [student, setStudent] = React.useState({});

  const [passport, setPassport] = React.useState({});
  const [lpuProcessingFees, setLpuProcessingFees] = React.useState(null);

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

    formData.append('lpuProcessingFee', lpuProcessingFees);

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
        <Alert severity="success">
          <AlertTitle>Lpu Processing Fees</AlertTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            minWidth="650px"
            alignItems="center"
          >
            {student?.studentDetails?.lpuProcessingFee?.file?.f_url ? (
              <a href={student?.studentDetails?.lpuProcessingFee?.file?.f_url}>
                Download Lpu Processing Fees
              </a>
            ) : (
              <p style={{ color: 'red' }}>No File Uploaded</p>
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
                  onChange={(e) => setLpuProcessingFees(e.target.files[0])}
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

export default Tab3;
