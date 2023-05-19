import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: {}, student: 400, },
  { name: 'Week1', student: 300  },
  { name: 'Week2', student: 500 },
  { name: 'Week3', student: 200  },
  { name: 'Week4', student: 600 },
  { name: {}, student: 400 },
];
const monthRanges = [
  { name: 'Jan-Feb 2023', data },
  { name: 'Feb-Mar 2023', data },
  { name: 'Mar-Apr 2023', data },
  { name: 'Apr-May 2023', data },
  { name: 'May-Jun 2023', data },
  { name: 'Jun-Jul 2023', data },
];

const Linechart = () => {
  const [range, setRange] = useState(null);

  const handleSelectChange = (value) => {
    setRange(value);
  };

  const filteredData = range
    ? monthRanges.find((item) => item.name === range)?.data || []
    : data;

  return (
    <div style={{ position: 'relative', padding: '16px',  borderRadius: '20px',backgroundColor:"white"}}>
     <p style={{
  marginTop: "-2rem",
  backgroundColor: "#F07F1A",
  width: "12rem",
  borderBottomRightRadius: "50%",
  borderBottomLeftRadius: "50%",
  paddingBottom: "10px",
  paddingTop: "10px",
  fontSize: "22px",
  textAlign: "center",
  marginLeft: "35rem"
}}>Activities</p>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      
        <select style={{border:"none",color:"#858585",fontSize:"14px"}} value={range} onChange={(e) => handleSelectChange(e.target.value)}>
          {monthRanges.map((range) => (
            <option value={range.name} key={range.name}>
              {range.name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', justifyContent: 'flex-end',marginTop:'10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#E9A0A0', borderRadius: '50%', marginRight: '5px' }} />
          <div>Outreach</div>
        </div>
      </div>
      <LineChart width={1200} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="none" strokeWidth={0.5}  />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="student" stroke=" #E9A0A0
" strokeWidth={3} dot={{ r: 5 }} isAnimationActive={false} />
        <Line type="monotone" dataKey="User" stroke="#9BDD7C" strokeWidth={3} dot={{ r: 5 }} isAnimationActive={false} />
      </LineChart>
    </div>
  );
};

export default Linechart;
