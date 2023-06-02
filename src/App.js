import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Weatherbox from './components/Weatherbox';

const App = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (location) => {
    setSearchLocation(location);
  };
  const apikey = process.env.REACT_APP_API_KEY;
  return (
    <div>
      <Navbar/>
      <Search onSearch={handleSearch} />
      {searchLocation && <Weatherbox location={searchLocation} apikey={apikey}/>}
    </div>
  );
};

export default App;
