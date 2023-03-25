// import './style.css'
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import EmailIcon from '@mui/icons-material/Email';
import React, { Fragment, useEffect, useState } from "react";
import randomcolor from "randomcolor";
import Typist from 'react-typist'; // Add this import

// import call from "./icons8-call-50.png";
// import video from "./icons8-video-24.png";
// import chat from "./icons8-chat-50.png";
// import data from "./data.json";
import Tree from 'react-d3-tree';
import {NavSideBarLayout} from '../routes'
import { TextField } from '@material-ui/core';
import { Typography } from '@mui/material';

// function randomIntFromInterval(min, max) { // min and max included 
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// const Card = (props) => {
  const levelColor = randomcolor();

//   return (    
//     <ul>
//       {props.data.map((item,index) => (
//         <Fragment key={item.name}>
//           <li>
//             <div className="card">
//               <div className="image">
//                 <img
//                   src={"https://randomuser.me/api/portraits/men/"+randomIntFromInterval(1,100)+".jpg"}
//                   alt="Profile"
//                   style={{ borderColor: levelColor }}
//                 />
//               </div>
//               <div className="card-body">
//                 <h4>{item?.name}</h4>
//                 <p>{item?.designation}</p>
//               </div>
//               <div className="card-footer" style={{ background: levelColor }}>
//                 <img
//                   src={chat}
//                   alt="Chat"
//                 />
//                 <img
//                   src={call}
//                   alt="Call"
//                 />
//                 <img
//                   src={video}
//                   alt="Video"
//                 />
//               </div>
//               <div></div>
//             </div>
//             {item.children?.length && <Card data={item.children} />}
//           </li>
//         </Fragment>
//       ))}
//     </ul>
//   );
// };

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 3) + min)
 }

 const handleCallClick = (phoneNumber) => {
  window.location.href = (`tel:${phoneNumber}`);
};


// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const renderCircleSvgNode = ({ nodeDatum, toggleNode }) => {
  const imageUrl = `https://randomuser.me/api/portraits/men/${randomIntFromInterval(3, 100)}.jpg`;

  const centerText = (text, fontSize = 12) => {
    const textLength = text.length;
    const textWidth = textLength * fontSize * 0.6; // Approximate width of the text
    return -textWidth / 1.5;
  };
  
 

  return (
    <g>
      <circle
        fill={`url(#node-image-${nodeDatum.id})`}
        r="50"
        onClick={toggleNode}
        stroke= {getRandomColor()}
        strokeWidth="7"
      />
      <defs>
        <pattern
          id={`node-image-${nodeDatum.id}`}
          height="100%"
          width="100%"
          patternContentUnits="objectBoundingBox"
        >
          <image
            xlinkHref={imageUrl}
            preserveAspectRatio="none"
            width="1"
            height="1"
          />
        </pattern>
      </defs>
   
       
        
       
      
        
    

<foreignObject x={centerText(nodeDatum.name, 16)} y="60" width="150" height="30">
        <Typography variant="h5" component="span">
          {nodeDatum.name}
        </Typography>
      </foreignObject>
      {nodeDatum.attributes?.department && (
        <foreignObject x={centerText(nodeDatum.attributes.department)} y="85" width="100" height="20">
          <Typography marginLeft={1} variant="body1" component="span">
            {nodeDatum.attributes?.department}
          </Typography>
        </foreignObject>
      )}
      {/* Add a line for separation */}
      <line x1="-110" y1="152" x2="110" y2="152"  strokeWidth="35" rx="5" // Add rounded corners
        ry="5"  stroke={getRandomColor()} />
      {/* Add Call, Message, and Email icons */}
      <g transform="translate(-60, 140)">
        <CallIcon
          fontSize="inherit"
          width="23"
          height="23"
          onClick={() => handleCallClick(nodeDatum.attributes?.phone)}
          style={{ cursor: 'pointer' }}
        />
      </g>
      <g transform="translate(-5, 140)">
        <MessageIcon fontSize="inherit" width="23" height="23" />
      </g>
      <g transform="translate(50, 140)">
        <EmailIcon fontSize="inherit" width="23" height="23" />
      </g>
    </g>
  );
};


const orgChart = {
  name: 'Karanveer',
  attributes: {
    department: 'Project head',
    phone : '9931963208'
  },
  children: [
    {
      name: 'Animesh',
      attributes: {
        department: 'Manager',
        phone : '1234569870'
      },
      children: [
        {
          name: 'Aakash',
          attributes: {
            department: 'Intern',
            phone : '1234569870'
          },
          children: [
            {
              name: 'xyz',
            },
          ],
        },
        {
          name: 'Syket',
          attributes: {
            department: 'Intern',
          },
          children: [
            {
              name: 'xyz',
            },
          ],
        },
      ],
    },
  ],
};

const Chart = () => {
 


  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [nodeSize, setNodeSize] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      setTranslate({ x: windowWidth / 2.2, y: windowHeight / 9 });
      setNodeSize({ x: windowWidth / 3, y: windowHeight / 3 });
    };

    handleResize(); // Call the function initially to set the values
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <NavSideBarLayout childCSS={{marginTop:"3rem",justifyContent:"center",alignItems:"center"}}>
      {/* <div className="org-tree">
        <Card data={data} />
      </div> */}

<Typography variant="h2" component="h1" style={{ textAlign: 'center',  marginBottom: '1rem', marginRight:'4vw' }}>
{Array.from('Teams').map((letter) => (
          <span key={letter} style={{ color: getRandomColor() }}>
            {letter}
          </span>
        ))}
      </Typography>
       <div id="treeWrapper" style={{ width: '95vw', height: '86vh' }}>
      <Tree data={orgChart}
       orientation="vertical"
       renderCustomNodeElement={renderCircleSvgNode}
      
        translate={translate}
        zoom={1}
        zoomable={true}
        collapsible={true}
        nodeSize={nodeSize}
        separation={{ siblings: 2, nonSiblings: 1 }}
        />
    </div>
    </NavSideBarLayout>
  );
};

export default Chart;

