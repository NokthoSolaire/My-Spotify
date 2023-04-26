import React, { useState, useEffect } from 'react';
import GetTotalGenres from './GetTotalGenres';
import GetGenre from './GetGenre';
import { FiSearch } from 'react-icons/fi';

function Genres() {

  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalGenres, setTotalGenres] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    GetGenre("genres", setGenres, currentPage, itemsPerPage, searchQuery);
    GetTotalGenres(setTotalGenres, searchQuery);
  }, [currentPage, itemsPerPage, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPage = Math.ceil(totalGenres / itemsPerPage);
  

  return (
    <div className='genres-container'>
      <div className='header'>
        <h1 className='title'>Genres {totalGenres}</h1>
        <div className='search-container'>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search genres..." />
          <FiSearch />
        </div>
      </div>
      <div className='genres'>
        {genres.map(Genres => (
          <div className='genres' key={Genres.id}>
            <div className='genres-info'>
              <h2 className='genres-name'>{Genres.name}</h2>
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

export default Genres;
