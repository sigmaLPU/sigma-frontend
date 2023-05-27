import React, { useState } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { ResponsiveLine } from '@nivo/line';

const GeoMap = () => {
  // Sample data
  const Credit_transfer = [
    { id: 'AFG', value: 100, label: 'Afghanistan' },
    { id: 'AGO', value: 40, label: 'Angola' },
    { id: 'ALB', value: 20, label: 'Albania' },
    { id: 'ARE', value: 40, label: 'United Arab Emirates' },
    { id: 'ARG', value: 80, label: 'Argentina' },
    { id: 'ARM', value: 50, label: 'Armenia' },
    { id: 'ATA', value: 60, label: 'Antarctica' },
    { id: 'ATF', value: 60, label: 'French Southern and Antarctic Lands' },
    { id: 'AUT', value: 40, label: 'Austria' },
    { id: 'AZE', value: 20, label: 'Azerbaijan' },
    { id: 'BDI', value: 30, label: 'Burundi' },
    { id: 'BEL', value: 60, label: 'Belgium' },
    { id: 'BEN', value: 50, label: 'Benin' },
    { id: 'BFA', value: 90, label: 'Burkina Faso' },
    { id: 'BGD', value: 20, label: 'Bangladesh' },
    { id: 'BGR', value: 40, label: 'Bulgaria' },
    { id: 'BHS', value: 30, label: 'The Bahamas' },
    { id: 'BIH', value: 20, label: 'Bosnia and Herzegovina' },
    { id: 'BLR', value: 50, label: 'Belarus' },
    { id: 'BLZ', value: 30, label: 'Belize' },
    { id: 'BOL', value: 40, label: 'Bolivia' },
    { id: 'BRN', value: 20, label: 'Brunei' },
    { id: 'BTN', value: 30, label: 'Bhutan' },
    { id: 'BWA', value: 40, label: 'Botswana' },
    { id: 'CAF', value: 50, label: 'Central African Republic' },
    { id: 'CAN', value: 60, label: 'Canada' },
    { id: 'CHE', value: 70, label: 'Switzerland' },
    { id: 'CHL', value: 80, label: 'Chile' },
    { id: 'CHN', value: 90, label: 'China' },
    { id: 'CIV', value: 20, label: "Cote d'Ivoire" },
    { id: 'CMR', value: 30, label: 'Cameroon' },
    { id: 'COD', value: 40, label: 'Democratic Republic of the Congo' },
    { id: 'COG', value: 50, label: 'Republic of Congo' },
    { id: 'COL', value: 60, label: 'Colombia' },
    { id: 'CRI', value: 70, label: 'Costa Rica' },
    { id: 'CUB', value: 80, label: 'Cuba' },
    { id: '-99', value: 90, label: 'Northern Cyprus' },
    { id: 'CYP', value: 20, label: 'Cyprus' },
    { id: 'CZE', value: 30, label: 'Czech Republic' },
    { id: 'DEU', value: 40, label: 'Germany' },
    { id: 'DJI', value: 50, label: 'Djibouti' },
    { id: 'DNK', value: 60, label: 'Denmark' },
    { id: 'DOM', value: 70, label: 'Dominican Republic' },
    { id: 'DZA', value: 80, label: 'Algeria' },
    { id: 'ECU', value: 90, label: 'Ecuador' },
    { id: 'EGY', value: 20, label: 'Egypt' },
    { id: 'ERI', value: 30, label: 'Eritrea' },
    { id: 'ESP', value: 40, label: 'Spain' },
    { id: 'EST', value: 50, label: 'Estonia' },
    { id: 'ETH', value: 60, label: 'Ethiopia' },
    { id: 'FIN', value: 70, label: 'Finland' },
    { id: 'FJI', value: 80, label: 'Fiji' },
    { id: 'FLK', value: 90, label: 'Falkland Islands' },
    { id: 'FRA', value: 20, label: 'France' },
    { id: 'GAB', value: 30, label: 'Gabon' },
    { id: 'GBR', value: 40, label: 'United Kingdom' },
    { id: 'GEO', value: 50, label: 'Georgia' },
    { id: 'GHA', value: 60, label: 'Ghana' },
    { id: 'GIN', value: 70, label: 'Guinea' },
    { id: 'GMB', value: 80, label: 'Gambia' },
    { id: 'GNB', value: 90, label: 'Guinea Bissau' },
    { id: 'GNQ', value: 20, label: 'Equatorial Guinea' },
    { id: 'GRC', value: 30, label: 'Greece' },
    { id: 'GRL', value: 40, label: 'Greenland' },
    { id: 'GTM', value: 50, label: 'Guatemala' },
    { id: 'GUF', value: 60, label: 'French Guiana' },



    // Add more data as needed
  ];

  const Semester_Exchange = [
    { id: 'AFG', value: 10, label: 'Afghanistan' },
    { id: 'AGO', value: 20, label: 'Angola' },
    { id: 'ALB', value: 30, label: 'Albania' },
    { id: 'ARE', value: 40, label: 'United Arab Emirates' },
    { id: 'ARG', value: 50, label: 'Argentina' },
  ];

  const University = [
    { id: 'GMB', value: 80, label: 'Gambia' },
    { id: 'GNB', value: 90, label: 'Guinea Bissau' },
    { id: 'GNQ', value: 20, label: 'Equatorial Guinea' },
    { id: 'GRC', value: 30, label: 'Greece' },
    { id: 'GRL', value: 40, label: 'Greenland' },
    { id: 'GTM', value: 50, label: 'Guatemala' },
    { id: 'GUF', value: 60, label: 'French Guiana' },
    { id: 'CAN', value: 60, label: 'Canada' },
    { id: 'CHE', value: 70, label: 'Switzerland' },
    { id: 'CHL', value: 80, label: 'Chile' },
    { id: 'CHN', value: 90, label: 'China' },
    { id: 'CIV', value: 20, label: "Cote d'Ivoire" },
  ];

  
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

  const [selectedDataId, setSelectedDataId] = useState('credit_transfer');
  const [selectedData, setSelectedData] = useState(Credit_transfer);

  const handleDataIdChange = (event) => {
    setSelectedDataId(event.target.value);
  };
  const handleDataChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'Credit_transfer') {
      setSelectedData(Credit_transfer);
      setSelectedDataId('credit_transfer');
    } else if (selectedValue === 'Semester_Exchange') {
      setSelectedData(Semester_Exchange);
      setSelectedDataId('semester_exchange');
    }
    else if (selectedValue === 'University') {
      setSelectedData(University);
    }
  };

  return (
    <div>
     <div style={{ marginBottom: '10px' }}>
  <select
    id="data-selector"
    onChange={handleDataChange}
    style={{
      marginTop: '10px',
      padding: '5px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: '#f2f2f2',
      color: '#333',
    }}
  >
    <option value="Credit_transfer">Credit Transfer</option>
    <option value="Semester_Exchange">Semester Exchange</option>
    <option value="University">University</option>
  </select>
</div>

    <div style={{ height: '500px', width:"100%" }}>
      <ResponsiveChoropleth
        data={selectedData}
        features={require('./world_countries.json').features}
        margin={{ top: 0, right: 0, bottom: 0, left: 70 }}
        colors="nivo"
        domain={[0, 100]} // Customize the value range
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="mercator"
        projectionScale={200}
        projectionTranslation={[ 0.5, 0.5 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -60,
            itemsSpacing: 0,
            itemWidth: 92,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000000',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
    <div>
        <label htmlFor="data-selector">Select Data:</label>
        <select id="data-selector" value={selectedDataId} onChange={handleDataChange}>
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

export default GeoMap;
