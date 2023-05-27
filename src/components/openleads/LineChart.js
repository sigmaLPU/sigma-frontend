import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineChart = () => {
  const [selectedDataId, setSelectedDataId] = useState('semester_exchange');

  const data = [
    {
      id: 'semester_exchange',
      data: [
        { x: 'Jan', y: 10 },
        { x: 'Feb', y: 15 },
        { x: 'Mar', y: 12 },
        { x: 'Apr', y: 20 },
        { x: 'May', y: 18 },
        { x: 'Jun', y: 25 },
        { x: 'Jul', y: 22 },
        { x: 'Aug', y: 30 },
        { x: 'Sep', y: 28 },
        { x: 'Oct', y: 35 },
        { x: 'Nov', y: 32 },
        { x: 'Dec', y: 40 },
      ],
    },
    {
      id: 'credit_transfer',
      data: [
        { x: 'Jan', y: 8 },
        { x: 'Feb', y: 10 },
        { x: 'Mar', y: 9 },
        { x: 'Apr', y: 15 },
        { x: 'May', y: 13 },
        { x: 'Jun', y: 20 },
        { x: 'Jul', y: 18 },
        { x: 'Aug', y: 25 },
        { x: 'Sep', y: 23 },
        { x: 'Oct', y: 30 },
        { x: 'Nov', y: 28 },
        { x: 'Dec', y: 35 },
      ],
    },
  ];

  const handleDataIdChange = (event) => {
    setSelectedDataId(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="data-selector">Select Data:</label>
        <select id="data-selector" value={selectedDataId} onChange={handleDataIdChange}>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          ))}
        </select>
      </div>
      <div style={{ height: '400px' }}>
        <ResponsiveLine
          data={data.filter((item) => item.id === selectedDataId)}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
          axisTop={null}
          axisRight={null}
          enableGridX={false}
          enableGridY={false}
          lineWidth={2}
          pointSize={6}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          enablePointLabel={true}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default LineChart;
