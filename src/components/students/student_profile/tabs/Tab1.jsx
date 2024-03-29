import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
// import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../../../utils/functions';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUniversityReducer } from '../../../../redux/routes';

const list = [
  {
    name: 'B.Tech. (Computer Science & Engineering)',
  },
  {
    name: 'B.Tech. (Mechanical Engineering)',
  },
  {
    name: 'B.Tech. (Civil Engineering)',
  },
  {
    name: 'B. Business Administration',
  },
  {
    name: 'B. Commerce',
  },
  {
    name: 'B. Hotel Mgt & Catering Technology (BHMCT)',
  },
  {
    name: 'B. Design (Fashion)',
  },
  {
    name: 'B. Sc. (Information Technology)',
  },
  {
    name: 'B.Tech. (ME – Mechatronics)',
  },
  {
    name: 'B.Tech. (Biotechnology)',
  },
  {
    name: 'B. A. (Culinary Arts)',
  },
  {
    name: 'B.Tech. (Electronics and Communications Engineering)',
  },
  {
    name: 'B.Tech. (Automobile Engineering)',
  },
  {
    name: 'M. Business Administration',
  },
  {
    name: 'M Tech (Biotechnology)',
  },
  {
    name: 'M Tech (ECE)',
  },
  {
    name: 'B.Tech. (Information Technology)',
  },
  {
    name: 'B.Sc. Agriculture',
  },
  {
    name: 'B. Computer Application',
  },
  {
    name: 'B.Tech. (Food Technology)',
  },
  {
    name: 'B. Tech. (AeroSpace Engineering)',
  },
  {
    name: 'M.Sc. (Information Technology)',
  },
  {
    name: 'B.A. (Psychology)',
  },
  {
    name: 'B. Tech. (Electrical Engineering)',
  },
  {
    name: 'B. Sc. (Airlines, Tourism and Hospitality)',
  },
  {
    name: 'B. Tech. (Biomedical Engineering)',
  },
  {
    name: 'B. Design (Product & Industrial)',
  },
  {
    name: 'B. Design (Interior & Furniture)',
  },
  {
    name: 'B. Tech. (Electrical and Electronics Engineering)',
  },
  {
    name: 'B. Architecture',
  },
  {
    name: 'B. Sc. (Design - Multimedia)',
  },
  {
    name: 'B. Sc. (Computer Science)',
  },
  {
    name: 'B. Design (Graphics)',
  },
  {
    name: 'B. Sc. (Film & TV Production)',
  },
  {
    name: 'B. A. (Journalism & Mass Communication)',
  },
  {
    name: 'B. Tech. (Chemical Engineering)',
  },
  {
    name: 'M. Sc. (Biotechnology)',
  },
  {
    name: 'B.A. (English)',
  },
  {
    name: 'B.A. (Hons)',
  },
  {
    name: 'B. Sc. Food Technology',
  },
];

const Tab1 = ({ value }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const rawData = useSelector((state) => state.getAllUniversitySlice.data);

  const [data, setData] = useState(rawData);
  const [mous, setMous] = useState([]);

  useEffect(() => {
    setData(rawData);
    console.log(data.data.rows);
  }, [rawData, data.data.rows]);

  const fetchdata = async (id) => {
    await axios
      .get(
        `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/mou/${data?.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        setMous(res.data.data);
      });
  };
  useEffect(() => {
    dispatch(getAllUniversityReducer({}));
  }, []);

  const [student, setStudent] = React.useState({});

  const [nationality, setNationality] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [currentCourse, setCurrentCourse] = React.useState('');
  const [currentSemester, setCurrentSemester] = React.useState('');
  const [currentCgpa, setCurrentCgpa] = React.useState('');
  const [areaOfInterest, setAreaOfInterest] = React.useState('');
  const [interestedCountry, setInterestedCountry] = React.useState('');
  const [interestedUniversity, setInterestedUniversity] = React.useState('');

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
    setInterestedCountry(
      student?.studentDetails?.areaOfInterest?.split('-')[0]
    );
    setInterestedUniversity(
      student?.studentDetails?.areaOfInterest?.split('-')[1]
    );
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
            areaOfInterest: interestedCountry + '-' + interestedUniversity,
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
        window.location.reload();
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
        {/* <TextField
          sx={{
            width: '300px',
          }}
          id="outlined-basic"
          label="Nationality"
          variant="outlined"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        /> */}
        <FormControl
          sx={{
            width: '300px',
          }}
        >
          <InputLabel id="demo-simple-select-helper-labels">
            Nationality
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-labels"
            id="demo-simple-select-helpers"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <MenuItem value="">Null</MenuItem>
            <MenuItem value="indian">Indian</MenuItem>
            <MenuItem value="bangldesh">Bangladesh</MenuItem>
            <MenuItem value="nepal">Nepal</MenuItem>
            <MenuItem value="bhutan">Bhutan</MenuItem>
            <MenuItem value="Ghana">ghana</MenuItem>
            <MenuItem value="liberia">Liberia</MenuItem>
            <MenuItem value="zimbabwe">Zimbabwe</MenuItem>
          </Select>
        </FormControl>

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            border: '1px solid #ccc',
            width: '300px',
            borderRadius: '5px',
            padding: '10px',
            height: '60px',
            position: 'relative',
          }}
        >
          <small
            id="dobs"
            style={{
              position: 'absolute',
              top: '-10px',
              left: '10px',
              background: '#fff',
            }}
          >
            DOB{' '}
          </small>
          <small
            id="dobs"
            style={{
              position: 'absolute',
              top: '-10px',
              left: '100px',
              background: '#fff',
            }}
          >
            {formatDate(dob)}
          </small>

          <input
            style={{
              width: '10%',
              height: '100%',
            }}
            id="dob"
            label="DOB"
            type="date"
            value={formatDate(dob)}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
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

        <FormControl
          sx={{
            width: '300px',
          }}
        >
          <InputLabel id="demo-simple-select-helper-label">
            Current Course
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={currentCourse}
            label="Current Course"
            onChange={(e) => setCurrentCourse(e.target.value)}
          >
            {list.map((item, index) => {
              return <MenuItem value={item.name}>{item.name}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: '300px',
          }}
        >
          <InputLabel id="demo-simple-select-helper-labels">
            Current Semester
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-labels"
            id="demo-simple-select-helpers"
            value={currentSemester}
            onChange={(e) => setCurrentSemester(e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl
          sx={{
            width: '300px',
          }}
        >
          <InputLabel id="demo-simple-select-helper-labels">
            University
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-labels"
            id="demo-simple-select-helpers"
            onChange={(e) => setInterestedUniversity(e.target.value)}
            value={interestedUniversity}
          >
            {data &&
              data?.data?.rows?.map((item, index) => {
                return (
                  <MenuItem
                    onClick={() => {
                      setInterestedCountry(item.Country);
                      setInterestedUniversity(item['Name of University']);
                    }}
                    key={index}
                    value={item['Name of University']}
                  >
                    {item.Country} - {item['Name of University']}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>

        <TextField
          disabled
          sx={{
            width: '300px',
          }}
          id="outlined-basic"
          label="Interested Country"
          variant="outlined"
          value={interestedCountry}
          onChange={(e) => setInterestedCountry(e.target.value)}
        />

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
        {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-labels">
            University & Country - 
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-labels"
            id="demo-simple-select-helpers"
          >
            {data && data?.data?.rows?.map((item, index) => {
              return (
                <MenuItem
                  onClick={() => {
                    setInterestedCountry(item.Country);
                    setInterestedUniversity(item['Name of University']);
                  }}
                key={index} value={item.name}>
                  {item.Country} - {item['Name of University']}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl> */}

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
