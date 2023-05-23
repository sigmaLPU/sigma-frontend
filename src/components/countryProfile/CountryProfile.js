import {
  AddNewUniversity,
  NavSideBarLayout,
  NewTable,
  ProgramOfColaborationUniversityModal,
} from '../routes';
import style from './CountryProfile.module.css';
import image from './flagus.png';
import Card from './Card';
import Linechart from './Linechart';
import RecentCard from './RecentCard';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { universityProgramReducer } from '../../redux/routes';
import { Button, Link } from '@mui/material';
import { getAllUniversityReducer } from '../../redux/routes';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CountryProfile(props) {
  const dispatch = useDispatch();
  const params = useParams();

  const rawData = useSelector((state) => state.getAllUniversitySlice.data);

  const [data, setData] = useState(rawData);

  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = React.useState({});
  const [filteredData, setFilteredData] = useState([]);

  const [unis, setUnis] = useState([]);

  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';

  // const url = 'http://localhost:5000';

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const data = await axios.get(url + `/api/v2/university/all`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });

        setUniversities(data.data.universities);

        if (universities.length > 0) {
          setFilteredData(
            universities.filter(
              (university) => university.country === country.name
            )
          );

          let uniss = filteredData.map((uni) => {
            return {
              id: uni._id,
              name: uni.name,
              country: uni.country,
              createdBy: uni.createdBy.name,
              createdAt: uni.createdAt,
              details: uni._id,
            };
          });

          setUnis(uniss);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUniversities();
  }, [universities, country]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await axios.get(
          url + `/api/v2/country/single/${params.id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        );

        setCountry(data.data.country);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  const navigate = useNavigate();

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'country',
      headerName: 'Country',
      flex: 1,
    },
    {
      field: 'createdBy',
      headerName: 'Created By',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1,
    },

    {
      field: 'details',
      headerName: 'Details',
      flex: 0.5,
      renderCell: (cellValue) => {
        return (
          <Button
            variant="outlined"
            sx={{
              color: '#F07F1A',
              border: '1px solid #F07F1A',
              textDecoration: 'none',
            }}
            onClick={() => navigate(`/university/${cellValue.row.id}`)}
          >
            Browse
          </Button>
        );
      },
    },
  ];

  return (
    <div className={style.layout}>
      <NavSideBarLayout childCSS={{}} childSX={{ flexGrow: 1 }}>
        <div>
          <div className={style.main}>
            <div className={style.main1}>
              <div className={style.heading}>
                {/* <img className={style.headingimage} src={image} alt="flag" /> */}
                <h1 className={style.heading1}>{country.name}</h1>
              </div>
              <div className={style.Card}>
                <Card />
              </div>
            </div>
          </div>
          <div style={{ marginLeft: '4rem', width: '92%' }}>
            <NewTable
              title={'Collaborated University'}
              // popup={<AddNewUniversity />}
              rows={unis || []}
              columns={columns}
            />
          </div>
          <div className={style.main2}>
            <div className={style.graph}>
              <div className={style.linegraph}>
                <Linechart />
              </div>
              <div className={style.notes}>
                <RecentCard />
              </div>
            </div>
          </div>
        </div>
      </NavSideBarLayout>
    </div>
  );
}
