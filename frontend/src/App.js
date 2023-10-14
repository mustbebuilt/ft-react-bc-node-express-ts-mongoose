import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

function App() {
  const [selectedFilmId, setSelectedFilmId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Set initial loading state to false
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setLoading(true); // Set loading state to true while fetching data
    const apiUrl = `http://localhost:3030/api/filmTitle/${searchTerm}`; // API URL for search

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setSearchResults(data); // Update search results
        setLoading(false); // Set loading state to false after fetching data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleFilmSelect = itemId => {
    setSelectedFilmId(itemId);
  };

  return (
    <div className="myApp">
      <h1>Film Finder</h1>

      <div>
        <div>
          <SearchForm onSearch={handleSearch} />
          {loading ? (
            <p>Loading data...</p>
          ) : data.error ? (
            <p>No data available.</p>
          ) : (
            <div className="filmApp">
              <ItemList
                items={searchResults.length > 0 ? searchResults : data}
                onFilmSelect={handleFilmSelect}
              />
              {selectedFilmId && <ItemDetails selectedFilmId={selectedFilmId} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
