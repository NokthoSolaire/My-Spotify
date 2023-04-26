import React, { useState, useEffect } from 'react';
import GetTotalArtists from './GetTotalArtists';
import { FiSearch } from 'react-icons/fi';
import GetArtist from './GetArtist';

function Artists() {

  const [artists, setArtists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalArtists, setTotalArtists] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    GetArtist("artists", setArtists, currentPage, itemsPerPage, searchQuery);
    GetTotalArtists(setTotalArtists, searchQuery);
  }, [currentPage, itemsPerPage, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
  

  const totalPage = Math.ceil(totalArtists / itemsPerPage);

  return (
    <div className='artist-container'>
      <div className='header'>
        <h1 className='title'>Artists {totalArtists}</h1>
        <div className='search-container'>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search artists..." />
          <FiSearch />
        </div>
      </div>
      <div className='artists'>
        {artists.map(artist => (
          <div className='artist' key={artist.id}>
            <div className='artist-info'>
              <div className='artist-avatar'>
                <img src={artist.photo} alt="avatar" />
              </div>
              <h2 className='artist-name'>{artist.name}</h2>
            </div>
            <div className='artist-detail'>
              <p>{artist.description}</p>
              <p>{artist.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='footer'>
        <div className='pagination'>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1 || searchQuery}>Previous</button>
        <p className='current-page'>Page {currentPage}</p>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPage || searchQuery}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Artists;