import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';

const Tab1 = ({ value }) => {
  const params = useParams();

  const [student, setStudent] = React.useState({});

  const [nationality, setNationality] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [currentCourse, setCurrentCourse] = React.useState('');
  const [currentSemester, setCurrentSemester] = React.useState('');
  const [currentCgpa, setCurrentCgpa] = React.useState('');
  const [areaOfInterest, setAreaOfInterest] = React.useState('');

  const handleChange = (event) => {
    setAreaOfInterest(event.target.value);
  };

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

  useEffect(() => {
    setNationality(student?.nationality || '');
    setGender(student?.gender || '');
    setDob(student?.dob || '');
    setWhatsapp(student?.studentDetails?.whatsapp || '');
    setCurrentCourse(student?.studentDetails?.currentCourse || '');
    setCurrentSemester(student?.studentDetails?.currentSemester || '');
    setCurrentCgpa(student?.studentDetails?.currentCGPA || '');
    setAreaOfInterest(student?.studentDetails?.areaOfInterest || '');
  }, [student]);

  const onSave = async () => {
    await axios
      .put(
        `${url}/api/v2/user/student/${params.id}`,
        {
          nationality,
          gender,
          dob,
          studentDetails: {
            whatsapp,
            currentCourse,
            currentSemester,
            currentCGPA: currentCgpa,
            areaOfInterest,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        handleClickVariant('success', 'Saved')();
      })
      .catch((err) => {
        handleClickVariant('error', 'Error ' + err.message)();
      });
  };

  return (
    <div>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="30px"
        justifyContent="space-between"
        width="650px"
      >
        <TextField
          sx={{
            width: '300px',
          }}
          id="outlined-basic"
          label="Nationality"
          variant="outlined"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
        <FormControl
          sx={{
            width: '300px',
          }}
        >
          <InputLabel id="demo-simple-select-helper-labels">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-helper-labels"
            id="demo-simple-select-helpers"
            value={gender}
            label="Gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{
            width: '300px',
          }}
          id="outlined-basic"
          label="DOB"
          variant="outlined"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <TextField
          sx={{
            width: '300px',
          }}
          id="outlined-basic"
          label="Whatsapp"
          variant="outlined"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
        <TextField
          sx={{
            width: '300px',
          }}
          id="outlined-basic"
          label="Current Course"
          variant="outlined"
          value={currentCourse}
          onChange={(e) => setCurrentCourse(e.target.value)}
        />
        <TextField
          sx={{
            width: '300px',
          }}
          id="outlined-basic"
          label="Current Semester"
          variant="outlined"
          value={currentSemester}
          onChange={(e) => setCurrentSemester(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">
            Area Of Interest
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={areaOfInterest}
            label="Area Of Interest"
            onChange={(e) => setAreaOfInterest(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Canada - BBA - 2+2 University Of Albetra'}>
              Canada - BBA - 2+2 University Of Albetra{' '}
            </MenuItem>
            <MenuItem value={'Canada - BCA - 2+2 University Of Albetra'}>
              Canada - BBA - 2+2 University Of Albetra{' '}
            </MenuItem>
            <MenuItem value={'USA - B.TECH - 2+2 Memorial University'}>
              Canada - BBA - 2+2 University Of Albetra{' '}
            </MenuItem>
            <MenuItem value={'Canada - BBA - 2+2 University Of Albetra'}>
              Canada - BBA - 2+2 University Of Albetra{' '}
            </MenuItem>
          </Select>
          <FormHelperText>
            example: Country - model - Stream - Course [Canada - 2+2 BBA
            University Of Torronto]
          </FormHelperText>
        </FormControl>

        <TextField
          sx={{
            width: '300px',
          }}
          id="outlined-basic"
          label="Current CGPA"
          variant="outlined"
          value={currentCgpa}
          onChange={(e) => setCurrentCgpa(e.target.value)}
        />

        <Button
          sx={{
            width: '200px',
          }}
          variant="contained"
          onClick={() => onSave()}
        >
          Save
        </Button>
      </Box>
    </div>
  );
};

export default Tab1;
