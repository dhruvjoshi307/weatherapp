import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Weatherbox from './components/Weatherbox';

const App = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (location) => {
    setSearchLocation(location);
  };

  return (
    <div>
      <Navbar/>
      <Search onSearch={handleSearch} />
      {searchLocation && <Weatherbox location={searchLocation} />}
    </div>
  );
};

export default App;
