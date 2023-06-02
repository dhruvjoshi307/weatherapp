import React from 'react';

export default function Search() {
  return (
    <div className="text-center mt-4">
      <form>
        <div className="form-group mx-auto" style={{ maxWidth: '400px' }}>
          <textarea
            className="form-control bg-transparent"
            rows="1"
            placeholder="Enter location here"
            style={{
              borderRadius: '5px',
              border: '2px solid black',
              padding: '10px',
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              resize: 'none',
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn bg-transperent neon-button mt-3"
          id="searchButton"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'color 0.3s',
          }}>
          Search 
        </button>
      </form>
    </div>
  );
}
