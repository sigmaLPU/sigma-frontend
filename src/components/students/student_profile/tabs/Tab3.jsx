import { Upload } from '@mui/icons-material';
import { Alert, AlertTitle, Box, IconButton } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Tab3 = () => {
  const params = useParams();

  const [student, setStudent] = React.useState({});

  const [passport, setPassport] = React.useState({});
  const [lpuProcessingFees, setLpuProcessingFees] = React.useState({});

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
            {student?.studentDetails?.lpuProcessingFees?.file?.f_url ? (
              <a href={student?.studentDetails?.lpuProcessingFees?.file?.f_url}>
                Download Lpu Processing Fees
              </a>
            ) : (
              <p style={{ color: 'red' }}>No File Uploaded</p>
            )}

            <IconButton float="right">
              <Upload />
            </IconButton>
          </Box>
        </Alert>
      </Box>
    </div>
  );
};

export default Tab3;
