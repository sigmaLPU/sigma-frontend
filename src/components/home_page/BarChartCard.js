import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, LineChart, Line } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
  },
  card: {
    position: 'relative',
    padding: 30,
    margin: 'auto',
    marginTop: 20,
    borderRadius: 4,
    boxShadow: theme.shadows[3],
    [theme.breakpoints.up('sm')]: {
      height: 250,
      width: 550,
      boxShadow: theme.shadows[4],
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      
      borderRadius: 4,
    },
  },
  chart: {
    width: '50%',
    paddingTop: '56.2%', // 16:9 aspect ratio for responsive media
    position: 'relative',
  },
  chartContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },
}));

const data = [
  { year: 2017, students: 500 },
  { year: 2018, students: 900 },
  { year: 2019, students: 700 },
  { year: 2020, students: 1100 },
  { year: 2021, students: 1300 },
];

const data2 = [
  { year: 2017, CT: 1000, SE: 900 },
  { year: 2018, CT: 1600 , SE: 2000},
  { year: 2019, CT: 1200 , SE: 1800},
  { year: 2020, CT: 1800 , SE: 2600},
  { year: 2021, CT: 1100 , SE: 2700},
];

const data3 = [
  { year: 2017, UNI: 1000 },
  { year: 2018, UNI: 1200 },
  { year: 2019, UNI: 1400 },
  { year: 2020, UNI: 1600 },
  { year: 2021, UNI: 1800 },
];

function BarChartCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} style={{background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))'}}>
        <CardMedia>
          <div className={classes.chart}>
            <div className={classes.chartContent}>
              <BarChart width={500} height={200} data={data}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar radius={10} dataKey="students" fill="#000000" barSize={10} />
              </BarChart>
            </div>
          </div>
        </CardMedia>
      
      </Card>

      <Card className={classes.card} style={{background: 'linear-gradient(90deg, #FE8C00 0%, #F83600 100%)'}} >
        <CardMedia>
          <div className={classes.chart}>
            <div className={classes.chartContent}>
              <LineChart width={500} height={200} data={data2}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CT" stroke="#000000" strokeWidth={5} label="CT"/>
<Line type="monotone" dataKey="SE" stroke="#000000" strokeWidth={5} label="SE"/>

              </LineChart>
            </div>
          </div>
        </CardMedia>
      </Card>

      <Card className={classes.card} style={{background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'}}>
        <CardMedia>
          <div className={classes.chart}>
            <div className={classes.chartContent}>
              <LineChart width={500} height={200} data={data3}>
                <XAxis dataKey="year" />
                <YAxis  />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="UNI" stroke="#000000" strokeWidth={5} label="UNI" />
              </LineChart>
            </div>
          </div>
        </CardMedia>
      </Card>
    </div>
  );
}

export default BarChartCard;
