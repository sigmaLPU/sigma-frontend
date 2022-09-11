import React from 'react';
import loadingGif from './resource/loading.gif';

export default function LoadingPage(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
		margin: '25vh 0',
      }}
    >
      <img src={loadingGif} alt="loading"  width="350" />
    </div>
  );
}
