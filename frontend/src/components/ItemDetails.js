import React, { useState, useEffect } from 'react';

const ItemDetails= ({ selectedFilmId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    // Define the API endpoint you want to fetch
    const apiUrl = `http://localhost:3030/api/${selectedFilmId}`; // Replace with your API URL

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [selectedFilmId]); // Add selectedFilmId as a dependency

  // Fetch item details based on selectedItemId and display them
  return (
    <div>
        <h2>Film Details</h2>
    {loading ? (
  <p>Loading data...</p>
) : (
  <div>
    <h3>{data.filmTitle} <span className="sml">({data.filmCertificate})</span></h3>

    <div>          <img src={`/images/${data.filmImage}`} alt={data.filmTitle} /></div>

    <p>{data.filmDescription}</p>

<p>Released: {new Date(data.releaseDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

  </div>
)}
    
    </div>
  );
}

export default ItemDetails;
