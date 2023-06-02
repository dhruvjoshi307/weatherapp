import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
  };

  return (
    <div className="text-center mt-4">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mx-auto" style={{ maxWidth: '400px' }}>
          <textarea
            className="form-control bg-transparent"
            rows="1"
            placeholder="Enter location here"
            style={{
              borderRadius: '5px',
              border: '3px solid white',
              padding: '10px',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              resize: 'none',
              color: 'white',
              '::placeholder': { 
                color: 'white',
              },
            }}
            value={location}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn bg-light neon-button mt-3"
          id="searchButton"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'color 0.3s',
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
