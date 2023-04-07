import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import {
  CreditCard,
  ShoppingCart,
  Flight,
  Hotel,
  Restaurant,
} from '@material-ui/icons';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
// react imports
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    justifyContent: 'center',

    height: '30vh',
    width: '100%',
    marginTop: '2rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: theme.spacing(2.3),
    height: 200,
    width: 260,
    boxShadow: theme.shadows[1],
  },
  card: {
    width: 70,
    height: 70,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  creditCard: {
    backgroundColor: '#F07F1A',
  },
  shoppingCart: {
    backgroundColor: '#F07F1A',
  },
  flight: {
    backgroundColor: '#F07F1A',
  },
  hotel: {
    backgroundColor: '#F07F1A',
  },
  restaurant: {
    backgroundColor: '#F07F1A',
  },
  icon: {
    fontSize: '2.5rem',
    color: '#fff',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
  },
}));

const CreditCardItem = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} ${classes.creditCard}`}>
      <CardContent>
        <LeaderboardIcon className={classes.icon} />
      </CardContent>
    </Card>
  );
};

const ShoppingCartItem = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} ${classes.shoppingCart}`}>
      <CardContent>
        <HandshakeIcon fontSize="XL" className={classes.icon} />
      </CardContent>
    </Card>
  );
};

const FlightItem = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} ${classes.flight}`}>
      <CardContent>
        <AccountBalanceIcon fontSize="XXL" className={classes.icon} />
      </CardContent>
    </Card>
  );
};

const HotelItem = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} ${classes.hotel}`}>
      <CardContent>
        <SchoolIcon fontSize="XXL" className={classes.icon} />
      </CardContent>
    </Card>
  );
};

const RestaurantItem = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} ${classes.restaurant}`}>
      <CardContent>
        <RateReviewIcon fontSize="XXL" className={classes.icon} />
      </CardContent>
    </Card>
  );
};

const RestaurantItem1 = () => {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} ${classes.restaurant}`}>
      <CardContent>
        <ModelTrainingIcon fontSize="XXL" className={classes.icon} />
      </CardContent>
    </Card>
  );
};

const Categories = () => {
  const navigate = useNavigate();

const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
const local = 'http://localhost:5000';

const [users, setUsers] = useState([]);

useEffect(() => {
  async function fetchUser() {
    try {
      const { data } = await axios.get(url + '/api/v2/user/getAllStudents', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
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
    <div className={useStyles().root}>
      <Card className={useStyles().container}>
        <CreditCardItem />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h2"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            Open Leads
          </Typography>
          <Typography
            align="center"
            variant="h3"
            component="h5"
            style={{ marginLeft: '30px', fontWeight: 'bold' }}
          >
            100
          </Typography>
          <Button
            onClick={() => navigate('/openLeads')}
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

      <Card className={useStyles().container}>
        <ShoppingCartItem />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h2"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            Partner University
          </Typography>
          <Typography
            align="center"
            variant="h3"
            component="h5"
            style={{ marginLeft: '30px', fontWeight: 'bold' }}
          >
            ....
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/mouMaster')}
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            <Typography variant="h6" component="h2">
              View All
            </Typography>
          </Button>
        </div>
      </Card>

      <Card className={useStyles().container}>
        <FlightItem />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            component="h2"
            style={{ marginLeft: '20px', marginTop: '20px' }}
          >
            Credit Transfer
          </Typography>
          <Typography
            align="center"
            variant="h3"
            component="h5"
            style={{ marginLeft: '30px', fontWeight: 'bold' }}
          >
            {
              users.filter(
                (user) => user.studentDetails.optedFor === 'credit-transfer'
              ).length
            }
          </Typography>
          <Button
            onClick={() => navigate('/student_master?dp=credit-transfer')}
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

      <Card className={useStyles().container}>
        <HotelItem />
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
      </Card>
      <Card className={useStyles().container}>
        <RestaurantItem />
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

      <Card className={useStyles().container}>
        <RestaurantItem1 />
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
  );
};
export default Categories;
