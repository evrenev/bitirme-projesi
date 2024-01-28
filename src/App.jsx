import React from 'react';
import './index.css';
import SocialFacilities from './components/SocialFacilities';
import CafeList from './components/CafeList';
import data from './data';

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to the Social Facilities and Cafe List</h1>
      <SocialFacilities facilities={data.socialFacilities} />
      <CafeList cafes={data.cafes} />
    </div>
  );
};

export default App;